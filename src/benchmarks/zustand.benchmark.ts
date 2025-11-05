/**
 * Zustand benchmark implementation
 */

import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
<<<<<<< HEAD
import { StateOperations, BenchmarkScenario } from '../types/index.js';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '../utils/benchmark-utils';
=======
import { StateOperations, BenchmarkScenario } from '@/types';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '@/utils/benchmark-utils';
>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee

interface ZustandState {
  items: any[];
  counter: number;
  user: {
    name: string;
    preferences: Record<string, any>;
  };
  setItems: (items: any[]) => void;
  addItem: (item: any) => void;
  updateItem: (index: number, item: any) => void;
  incrementCounter: () => void;
  setCounter: (value: number) => void;
  updateUser: (user: Partial<ZustandState['user']>) => void;
}

/**
 * Create Zustand store with selector subscription middleware
 */
function createZustandStore() {
  return create<ZustandState>()(
    subscribeWithSelector((set, get) => ({
      items: [],
      counter: 0,
      user: { name: '', preferences: {} },

      setItems: (items) => set({ items }),
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      updateItem: (index, item) => set((state) => {
        const newItems = [...state.items];
        newItems[index] = item;
        return { items: newItems };
      }),
      incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
      setCounter: (value) => set({ counter: value }),
      updateUser: (user) => set((state) => ({ user: { ...state.user, ...user } }))
    }))
  );
}

/**
 * Create Zustand state operations
 */
function createZustandOperations(): StateOperations {
  const store = createZustandStore();

  return {
    initialize: (data: any) => {
      store.setState({ items: data });
    },
    read: () => {
      return store.getState();
    },
    write: (value: any) => {
      if (typeof value === 'number') {
        store.setState({ counter: value });
      } else if (Array.isArray(value)) {
        store.setState({ items: value });
      } else {
        store.setState({ user: { ...store.getState().user, ...value } });
      }
    },
    subscribe: (callback: () => void) => {
      return store.subscribe(callback);
    },
    batch: (updates: Array<() => void>) => {
      // Zustand doesn't have built-in batching, but updates are synchronous
      store.setState((state) => {
        updates.forEach(update => {
          const currentState = store.getState();
          update();
        });
        return store.getState();
      });
    },
    cleanup: () => {
      // Zustand doesn't require explicit cleanup
    }
  };
}

/**
 * Benchmark test functions (same as Redux but using Zustand operations)
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
 * Run all Zustand benchmarks
 */
export async function runZustandBenchmarks() {
  console.log('🔄 Running Zustand benchmarks...\n');

  const operations = createZustandOperations();
  const results = [];

  operations.initialize(generateTestData(100));

  results.push(await runBenchmark('Zustand', STANDARD_SCENARIOS[0], operations, testSimpleRead));
  results.push(await runBenchmark('Zustand', STANDARD_SCENARIOS[1], operations, testSimpleWrite));
  results.push(await runBenchmark('Zustand', STANDARD_SCENARIOS[2], operations, testBatchWrite));
  results.push(await runBenchmark('Zustand', STANDARD_SCENARIOS[3], operations, testComplexStateRead));
  results.push(await runBenchmark('Zustand', STANDARD_SCENARIOS[4], operations, testWithSubscribers));
  results.push(await runBenchmark('Zustand', STANDARD_SCENARIOS[5], operations, testLargeState));
  results.push(await runBenchmark('Zustand', STANDARD_SCENARIOS[6], operations, testFrequentUpdates));

  operations.cleanup();

  return results;
}

// Run benchmarks if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runZustandBenchmarks()
    .then(results => {
      console.log('\n📊 Zustand Benchmark Results:');
      results.forEach(result => {
        console.log('\n' + result.scenario);
        console.log(`   Avg Time: ${result.avgTime}ms`);
        console.log(`   Ops/sec: ${result.opsPerSec}`);
        console.log(`   Memory: ${result.memoryDelta > 0 ? '+' : ''}${result.memoryDelta}MB`);
      });
    })
    .catch(console.error);
}