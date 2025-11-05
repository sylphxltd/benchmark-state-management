/**
 * Recoil benchmark implementation
 */

import { atom, selector, RecoilRoot, useRecoilState, useRecoilValue, snapshot_UNSTABLE } from 'recoil';
import { StateOperations, BenchmarkScenario } from '@/types';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '@/utils/benchmark-utils';

// Define atoms
const itemsAtom = atom<any[]>({
  key: 'items',
  default: []
});

const counterAtom = atom({
  key: 'counter',
  default: 0
});

const userNameAtom = atom({
  key: 'userName',
  default: ''
});

const userPreferencesAtom = atom<Record<string, any>>({
  key: 'userPreferences',
  default: {}
});

// Derived selector for user object
const userSelector = selector({
  key: 'user',
  get: ({ get }) => ({
    name: get(userNameAtom),
    preferences: get(userPreferencesAtom)
  })
});

/**
 * Mock Recoil store (since Recoil is React-specific)
 */
class MockRecoilStore {
  private store = new Map();

  set(atomKey: string, value: any) {
    this.store.set(atomKey, value);
  }

  get(atomKey: string) {
    return this.store.get(atomKey);
  }

  subscribe(callback: () => void) {
    // Mock subscription
    return () => {};
  }
}

/**
 * Create Recoil-like state operations (mocked for Node.js environment)
 */
function createRecoilOperations(): StateOperations {
  const store = new MockRecoilStore();

  return {
    initialize: (data: any) => {
      store.set('items', data);
    },
    read: () => {
      return {
        items: store.get('items') || [],
        counter: store.get('counter') || 0,
        user: {
          name: store.get('userName') || '',
          preferences: store.get('userPreferences') || {}
        }
      };
    },
    write: (value: any) => {
      if (typeof value === 'number') {
        store.set('counter', value);
      } else if (Array.isArray(value)) {
        store.set('items', value);
      } else {
        if (value.name) store.set('userName', value.name);
        if (value.preferences) store.set('userPreferences', value.preferences);
      }
    },
    subscribe: (callback: () => void) => {
      return store.subscribe(callback);
    },
    batch: (updates: Array<() => void>) => {
      updates.forEach(update => update());
    },
    cleanup: () => {
      // Mock cleanup
    }
  };
}

/**
 * Benchmark test functions
 */
async function testSimpleRead(ops: StateOperations, scenario: BenchmarkScenario): Promise<void> {
  for (let i = 0; i < scenario.iterations; i++) {
    ops.read();
  }
}

async function testSimpleWrite(ops: StateOperations, scenario: BenchmarkScenario): Promise<void> {
  for (let i = 0; i < scenario.iterations; i++) {
    ops.write(i);
  }
}

async function testBatchWrite(ops: StateOperations, scenario: BenchmarkScenario): Promise<void> {
  const updates = Array.from({ length: 100 }, (_, i) => () => ops.write(i));

  for (let i = 0; i < scenario.iterations; i++) {
    ops.batch(updates);
  }
}

async function testComplexStateRead(ops: StateOperations, scenario: BenchmarkScenario): Promise<void> {
  for (let i = 0; i < scenario.iterations; i++) {
    const state = ops.read();
    const items = state.items;
    const counter = state.counter;
    const userName = state.user.name;
  }
}

async function testWithSubscribers(ops: StateOperations, scenario: BenchmarkScenario): Promise<void> {
  const unsubscribers: Array<() => void> = [];
  for (let i = 0; i < scenario.subscribers; i++) {
    unsubscribers.push(ops.subscribe(() => {}));
  }

  for (let i = 0; i < scenario.iterations; i++) {
    ops.write(i);
  }

  unsubscribers.forEach(unsub => unsub());
}

async function testLargeState(ops: StateOperations, scenario: BenchmarkScenario): Promise<void> {
  const largeData = generateTestData(scenario.stateSize);
  ops.initialize(largeData);

  for (let i = 0; i < scenario.iterations; i++) {
    ops.read();
    if (i % 100 === 0) {
      ops.write(largeData.map(item => ({ ...item, value: Math.random() * 1000 })));
    }
  }
}

async function testFrequentUpdates(ops: StateOperations, scenario: BenchmarkScenario): Promise<void> {
  for (let i = 0; i < scenario.iterations; i++) {
    ops.write(i);
    ops.read();
  }
}

/**
 * Run all Recoil benchmarks
 */
export async function runRecoilBenchmarks() {
  console.log('🔄 Running Recoil benchmarks...\n');

  const operations = createRecoilOperations();
  const results = [];

  operations.initialize(generateTestData(100));

  results.push(await runBenchmark('Recoil', STANDARD_SCENARIOS[0], operations, testSimpleRead));
  results.push(await runBenchmark('Recoil', STANDARD_SCENARIOS[1], operations, testSimpleWrite));
  results.push(await runBenchmark('Recoil', STANDARD_SCENARIOS[2], operations, testBatchWrite));
  results.push(await runBenchmark('Recoil', STANDARD_SCENARIOS[3], operations, testComplexStateRead));
  results.push(await runBenchmark('Recoil', STANDARD_SCENARIOS[4], operations, testWithSubscribers));
  results.push(await runBenchmark('Recoil', STANDARD_SCENARIOS[5], operations, testLargeState));
  results.push(await runBenchmark('Recoil', STANDARD_SCENARIOS[6], operations, testFrequentUpdates));

  operations.cleanup();

  return results;
}

// Run benchmarks if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runRecoilBenchmarks()
    .then(results => {
      console.log('\n📊 Recoil Benchmark Results:');
      results.forEach(result => {
        console.log('\n' + result.scenario);
        console.log(`   Avg Time: ${result.avgTime}ms`);
        console.log(`   Ops/sec: ${result.opsPerSec}`);
        console.log(`   Memory: ${result.memoryDelta > 0 ? '+' : ''}${result.memoryDelta}MB`);
      });
    })
    .catch(console.error);
}