/**
 * MobX benchmark implementation
 */

import { makeAutoObservable, autorun, runInAction } from 'mobx';
import { StateOperations, BenchmarkScenario } from '@/types';
import { runBenchmark, generateTestData, STANDARD_SCENARIOS } from '@/utils/benchmark-utils';

class MobXStore {
  items: any[] = [];
  counter = 0;
  user = {
    name: '',
    preferences: {} as Record<string, any>
  };

  constructor() {
    makeAutoObservable(this);
  }

  setItems(items: any[]) {
    this.items = items;
  }

  addItem(item: any) {
    this.items.push(item);
  }

  updateItem(index: number, item: any) {
    this.items[index] = item;
  }

  incrementCounter() {
    this.counter += 1;
  }

  setCounter(value: number) {
    this.counter = value;
  }

  updateUser(user: Partial<MobXStore['user']>) {
    Object.assign(this.user, user);
  }
}

/**
 * Create MobX state operations
 */
function createMobXOperations(): StateOperations {
  const store = new MobXStore();

  return {
    initialize: (data: any) => {
      runInAction(() => {
        store.setItems(data);
      });
    },
    read: () => {
      return {
        items: store.items,
        counter: store.counter,
        user: { ...store.user }
      };
    },
    write: (value: any) => {
      runInAction(() => {
        if (typeof value === 'number') {
          store.setCounter(value);
        } else if (Array.isArray(value)) {
          store.setItems(value);
        } else {
          store.updateUser(value);
        }
      });
    },
    subscribe: (callback: () => void) => {
      return autorun(callback);
    },
    batch: (updates: Array<() => void>) => {
      runInAction(() => {
        updates.forEach(update => update());
      });
    },
    cleanup: () => {
      // MobX cleanup is handled by disposal of autorun
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
  const disposers: Array<() => void> = [];
  for (let i = 0; i < scenario.subscribers; i++) {
    disposers.push(ops.subscribe(() => {}));
  }

  for (let i = 0; i < scenario.iterations; i++) {
    ops.write(i);
  }

  disposers.forEach(disposer => disposer());
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
 * Run all MobX benchmarks
 */
export async function runMobXBenchmarks() {
  console.log('🔄 Running MobX benchmarks...\n');

  const operations = createMobXOperations();
  const results = [];

  operations.initialize(generateTestData(100));

  results.push(await runBenchmark('MobX', STANDARD_SCENARIOS[0], operations, testSimpleRead));
  results.push(await runBenchmark('MobX', STANDARD_SCENARIOS[1], operations, testSimpleWrite));
  results.push(await runBenchmark('MobX', STANDARD_SCENARIOS[2], operations, testBatchWrite));
  results.push(await runBenchmark('MobX', STANDARD_SCENARIOS[3], operations, testComplexStateRead));
  results.push(await runBenchmark('MobX', STANDARD_SCENARIOS[4], operations, testWithSubscribers));
  results.push(await runBenchmark('MobX', STANDARD_SCENARIOS[5], operations, testLargeState));
  results.push(await runBenchmark('MobX', STANDARD_SCENARIOS[6], operations, testFrequentUpdates));

  operations.cleanup();

  return results;
}

// Run benchmarks if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runMobXBenchmarks()
    .then(results => {
      console.log('\n📊 MobX Benchmark Results:');
      results.forEach(result => {
        console.log('\n' + result.scenario);
        console.log(`   Avg Time: ${result.avgTime}ms`);
        console.log(`   Ops/sec: ${result.opsPerSec}`);
        console.log(`   Memory: ${result.memoryDelta > 0 ? '+' : ''}${result.memoryDelta}MB`);
      });
    })
    .catch(console.error);
}