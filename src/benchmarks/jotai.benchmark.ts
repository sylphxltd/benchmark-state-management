/**
 * Jotai benchmark implementation
 */

import { atom, useAtom } from 'jotai';
import { createStore } from 'jotai';
<<<<<<< HEAD
import { StateOperations, BenchmarkScenario } from '../types/index.js';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '../utils/benchmark-utils';
=======
import { StateOperations, BenchmarkScenario } from '@/types';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '@/utils/benchmark-utils';
>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee

// Define atoms
const itemsAtom = atom<any[]>([]);
const counterAtom = atom(0);
const userNameAtom = atom('');
const userPreferencesAtom = atom<Record<string, any>>({});

// Derived atom for user object
const userAtom = atom(
  (get) => ({
    name: get(userNameAtom),
    preferences: get(userPreferencesAtom)
  })
);

/**
 * Create Jotai store
 */
function createJotaiStore() {
  return createStore();
}

/**
 * Create Jotai state operations
 */
function createJotaiOperations(): StateOperations {
  const store = createJotaiStore();

  return {
    initialize: (data: any) => {
      store.set(itemsAtom, data);
    },
    read: () => {
      return {
        items: store.get(itemsAtom),
        counter: store.get(counterAtom),
        user: store.get(userAtom)
      };
    },
    write: (value: any) => {
      if (typeof value === 'number') {
        store.set(counterAtom, value);
      } else if (Array.isArray(value)) {
        store.set(itemsAtom, value);
      } else {
        if (value.name) store.set(userNameAtom, value.name);
        if (value.preferences) store.set(userPreferencesAtom, value.preferences);
      }
    },
    subscribe: (callback: () => void) => {
      const unsubscribers: Array<() => void> = [];

      unsubscribers.push(store.sub(itemsAtom, callback));
      unsubscribers.push(store.sub(counterAtom, callback));
      unsubscribers.push(store.sub(userNameAtom, callback));
      unsubscribers.push(store.sub(userPreferencesAtom, callback));

      return () => {
        unsubscribers.forEach(unsub => unsub());
      };
    },
    batch: (updates: Array<() => void>) => {
      // Jotai batches updates automatically when done in the same tick
      updates.forEach(update => update());
    },
    cleanup: () => {
      // Jotai doesn't require explicit cleanup
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
 * Run all Jotai benchmarks
 */
export async function runJotaiBenchmarks() {
  console.log('🔄 Running Jotai benchmarks...\n');

  const operations = createJotaiOperations();
  const results = [];

  operations.initialize(generateTestData(100));

  results.push(await runBenchmark('Jotai', STANDARD_SCENARIOS[0], operations, testSimpleRead));
  results.push(await runBenchmark('Jotai', STANDARD_SCENARIOS[1], operations, testSimpleWrite));
  results.push(await runBenchmark('Jotai', STANDARD_SCENARIOS[2], operations, testBatchWrite));
  results.push(await runBenchmark('Jotai', STANDARD_SCENARIOS[3], operations, testComplexStateRead));
  results.push(await runBenchmark('Jotai', STANDARD_SCENARIOS[4], operations, testWithSubscribers));
  results.push(await runBenchmark('Jotai', STANDARD_SCENARIOS[5], operations, testLargeState));
  results.push(await runBenchmark('Jotai', STANDARD_SCENARIOS[6], operations, testFrequentUpdates));

  operations.cleanup();

  return results;
}

// Run benchmarks if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runJotaiBenchmarks()
    .then(results => {
      console.log('\n📊 Jotai Benchmark Results:');
      results.forEach(result => {
        console.log('\n' + result.scenario);
        console.log(`   Avg Time: ${result.avgTime}ms`);
        console.log(`   Ops/sec: ${result.opsPerSec}`);
        console.log(`   Memory: ${result.memoryDelta > 0 ? '+' : ''}${result.memoryDelta}MB`);
      });
    })
    .catch(console.error);
}