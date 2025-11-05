/**
 * Redux Toolkit benchmark implementation
 */

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { StateOperations, BenchmarkScenario } from '../types/index.js';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '../utils/benchmark-utils.js';
=======
import { StateOperations, BenchmarkScenario } from '@/types';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '@/utils/benchmark-utils';
>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee

// Redux slice definition
interface AppState {
  items: any[];
  counter: number;
  user: {
    name: string;
    preferences: Record<string, any>;
  };
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    items: [],
    counter: 0,
    user: { name: '', preferences: {} }
  } as AppState,
  reducers: {
    setItems: (state, action: PayloadAction<any[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<{ index: number; item: any }>) => {
      state.items[action.payload.index] = action.payload.item;
    },
    incrementCounter: (state) => {
      state.counter += 1;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<AppState['user']>>) => {
      state.user = { ...state.user, ...action.payload };
    }
  }
});

const { setItems, addItem, updateItem, incrementCounter, setCounter, updateUser } = appSlice.actions;

/**
 * Create Redux state operations
 */
function createReduxOperations(): StateOperations {
  const store = configureStore({
    reducer: {
      app: appSlice.reducer
    }
  });

  return {
    initialize: (data: any) => {
      store.dispatch(setItems(data));
    },
    read: () => {
      return store.getState();
    },
    write: (value: any) => {
      if (typeof value === 'number') {
        store.dispatch(setCounter(value));
      } else if (Array.isArray(value)) {
        store.dispatch(setItems(value));
      } else {
        store.dispatch(updateUser(value));
      }
    },
    subscribe: (callback: () => void) => {
      return store.subscribe(callback);
    },
    batch: (updates: Array<() => void>) => {
      // Redux batches updates automatically
      updates.forEach(update => update());
    },
    cleanup: () => {
      // Redux doesn't require explicit cleanup
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
    // Access nested properties
    const items = state.app.items;
    const counter = state.app.counter;
    const userName = state.app.user.name;
  }
}

async function testWithSubscribers(ops: StateOperations, scenario: BenchmarkScenario): Promise<void> {
  // Create subscribers
  const unsubscribers: Array<() => void> = [];
  for (let i = 0; i < scenario.subscribers; i++) {
    unsubscribers.push(ops.subscribe(() => {}));
  }

  // Perform updates
  for (let i = 0; i < scenario.iterations; i++) {
    ops.write(i);
  }

  // Cleanup subscribers
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
 * Run all Redux benchmarks
 */
export async function runReduxBenchmarks() {
  console.log('🔄 Running Redux Toolkit benchmarks...\n');

  const operations = createReduxOperations();
  const results = [];

  // Initialize with test data
  operations.initialize(generateTestData(100));

  // Test simple read
  results.push(await runBenchmark('Redux Toolkit', STANDARD_SCENARIOS[0], operations, testSimpleRead));

  // Test simple write
  results.push(await runBenchmark('Redux Toolkit', STANDARD_SCENARIOS[1], operations, testSimpleWrite));

  // Test batch write
  results.push(await runBenchmark('Redux Toolkit', STANDARD_SCENARIOS[2], operations, testBatchWrite));

  // Test complex state read
  results.push(await runBenchmark('Redux Toolkit', STANDARD_SCENARIOS[3], operations, testComplexStateRead));

  // Test with subscribers
  results.push(await runBenchmark('Redux Toolkit', STANDARD_SCENARIOS[4], operations, testWithSubscribers));

  // Test large state
  results.push(await runBenchmark('Redux Toolkit', STANDARD_SCENARIOS[5], operations, testLargeState));

  // Test frequent updates
  results.push(await runBenchmark('Redux Toolkit', STANDARD_SCENARIOS[6], operations, testFrequentUpdates));

  operations.cleanup();

  return results;
}

// Run benchmarks if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runReduxBenchmarks()
    .then(results => {
      console.log('\n📊 Redux Toolkit Benchmark Results:');
      results.forEach(result => {
        console.log('\n' + result.scenario);
        console.log(`   Avg Time: ${result.avgTime}ms`);
        console.log(`   Ops/sec: ${result.opsPerSec}`);
        console.log(`   Memory: ${result.memoryDelta > 0 ? '+' : ''}${result.memoryDelta}MB`);
      });
    })
    .catch(console.error);
}