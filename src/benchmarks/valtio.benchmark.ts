/**
 * Valtio benchmark implementation
 */

import { proxy, subscribe, snapshot } from 'valtio';
<<<<<<< HEAD
import { StateOperations, BenchmarkScenario } from '../types/index.js';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '../utils/benchmark-utils';
=======
import { StateOperations, BenchmarkScenario } from '@/types';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '@/utils/benchmark-utils';
>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee

interface ValtioState {
  items: any[];
  counter: number;
  user: {
    name: string;
    preferences: Record<string, any>;
  };
}

/**
 * Create Valtio proxy state
 */
function createValtioState(): ValtioState {
  return proxy({
    items: [],
    counter: 0,
    user: {
      name: '',
      preferences: {}
    }
  });
}

/**
 * Create Valtio state operations
 */
function createValtioOperations(): StateOperations {
  const state = createValtioState();

  return {
    initialize: (data: any) => {
      state.items = data;
    },
    read: () => {
      // Return a snapshot to avoid proxy overhead during reads
      return snapshot(state);
    },
    write: (value: any) => {
      if (typeof value === 'number') {
        state.counter = value;
      } else if (Array.isArray(value)) {
        state.items = value;
      } else {
        Object.assign(state.user, value);
      }
    },
    subscribe: (callback: () => void) => {
      return subscribe(state, callback);
    },
    batch: (updates: Array<() => void>) => {
      // Valtio batches updates automatically in the same tick
      updates.forEach(update => update());
    },
    cleanup: () => {
      // Valtio doesn't require explicit cleanup
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
 * Run all Valtio benchmarks
 */
export async function runValtioBenchmarks() {
  console.log('🔄 Running Valtio benchmarks...\n');

  const operations = createValtioOperations();
  const results = [];

  operations.initialize(generateTestData(100));

  results.push(await runBenchmark('Valtio', STANDARD_SCENARIOS[0], operations, testSimpleRead));
  results.push(await runBenchmark('Valtio', STANDARD_SCENARIOS[1], operations, testSimpleWrite));
  results.push(await runBenchmark('Valtio', STANDARD_SCENARIOS[2], operations, testBatchWrite));
  results.push(await runBenchmark('Valtio', STANDARD_SCENARIOS[3], operations, testComplexStateRead));
  results.push(await runBenchmark('Valtio', STANDARD_SCENARIOS[4], operations, testWithSubscribers));
  results.push(await runBenchmark('Valtio', STANDARD_SCENARIOS[5], operations, testLargeState));
  results.push(await runBenchmark('Valtio', STANDARD_SCENARIOS[6], operations, testFrequentUpdates));

  operations.cleanup();

  return results;
}

// Run benchmarks if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runValtioBenchmarks()
    .then(results => {
      console.log('\n📊 Valtio Benchmark Results:');
      results.forEach(result => {
        console.log('\n' + result.scenario);
        console.log(`   Avg Time: ${result.avgTime}ms`);
        console.log(`   Ops/sec: ${result.opsPerSec}`);
        console.log(`   Memory: ${result.memoryDelta > 0 ? '+' : ''}${result.memoryDelta}MB`);
      });
    })
    .catch(console.error);
}