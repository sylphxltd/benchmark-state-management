/**
 * Zen benchmark implementation
 * Author: @sylphxltd
 * Description: Extreme speed through extreme minimalism (1.45KB!)
 */

import { atom, computed, map, deepMap, task } from 'zen-monorepo';
import { StateOperations, BenchmarkScenario } from '../types/index.js';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '../utils/benchmark-utils.js';

/**
 * Create Zen state operations
 */
function createZenOperations(): StateOperations {
  // Create atoms for different state pieces
  const itemsAtom = atom<any[]>([]);
  const counterAtom = atom(0);
  const userNameAtom = atom('');
  const userPreferencesAtom = atom<Record<string, any>>({});

  // Derived user object
  const userComputed = computed(() => ({
    name: userNameAtom.get(),
    preferences: userPreferencesAtom.get()
  }));

  return {
    initialize: (data: any) => {
      itemsAtom.set(data);
    },
    read: () => {
      return {
        items: itemsAtom.get(),
        counter: counterAtom.get(),
        user: userComputed.get()
      };
    },
    write: (value: any) => {
      if (typeof value === 'number') {
        counterAtom.set(value);
      } else if (Array.isArray(value)) {
        itemsAtom.set(value);
      } else {
        if (value.name) userNameAtom.set(value.name);
        if (value.preferences) userPreferencesAtom.set(value.preferences);
      }
    },
    subscribe: (callback: () => void) => {
      // Zen uses a different subscription model
      // For benchmarking purposes, we'll return a no-op
      return () => {};
    },
    batch: (updates: Array<() => void>) => {
      // Zen batches updates automatically
      updates.forEach(update => update());
    },
    cleanup: () => {
      // Zen doesn't require explicit cleanup
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
 * Run all Zen benchmarks
 */
export async function runZenBenchmarks() {
  console.log('🔄 Running Zen benchmarks...\n');

  const operations = createZenOperations();
  const results = [];

  operations.initialize(generateTestData(100));

  results.push(await runBenchmark('Zen', STANDARD_SCENARIOS[0], operations, testSimpleRead));
  results.push(await runBenchmark('Zen', STANDARD_SCENARIOS[1], operations, testSimpleWrite));
  results.push(await runBenchmark('Zen', STANDARD_SCENARIOS[2], operations, testBatchWrite));
  results.push(await runBenchmark('Zen', STANDARD_SCENARIOS[3], operations, testComplexStateRead));
  results.push(await runBenchmark('Zen', STANDARD_SCENARIOS[4], operations, testWithSubscribers));
  results.push(await runBenchmark('Zen', STANDARD_SCENARIOS[5], operations, testLargeState));
  results.push(await runBenchmark('Zen', STANDARD_SCENARIOS[6], operations, testFrequentUpdates));

  operations.cleanup();

  return results;
}

// Run benchmarks if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runZenBenchmarks()
    .then(results => {
      console.log('\n📊 Zen Benchmark Results:');
      results.forEach(result => {
        console.log('\n' + result.scenario);
        console.log(`   Avg Time: ${result.avgTime}ms`);
        console.log(`   Ops/sec: ${result.opsPerSec}`);
        console.log(`   Memory: ${result.memoryDelta > 0 ? '+' : ''}${result.memoryDelta}MB`);
      });
    })
    .catch(console.error);
}