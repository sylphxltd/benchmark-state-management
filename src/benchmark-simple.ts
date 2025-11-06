/**
 * Simple State Management Benchmark Suite
 * Basic performance comparison for quick testing
 */

import { Bench } from 'tinybench';
import {
  reduxActions,
  zustandActions,
  jotaiActions,
  mobxActions,
  valtioActions,
  preactActions,
  solidActions,
  zenActions
} from './stores';

console.log('🚀 Simple State Management Benchmark Suite');
console.log('🔧 Basic performance comparison\n');

// Create benchmark suite
const bench = new Bench({ time: 1000 });

// Add simple increment benchmarks
bench
  .add('Redux Toolkit', () => {
    reduxActions.increment();
  })
  .add('Zustand', () => {
    zustandActions.increment();
  })
  .add('Jotai', () => {
    jotaiActions.increment();
  })
  .add('MobX', () => {
    mobxActions.increment();
  })
  .add('Valtio', () => {
    valtioActions.increment();
  })
  .add('Preact Signals', () => {
    preactActions.increment();
  })
  .add('Solid Signals', () => {
    solidActions.increment();
  })
  .add('Zen', () => {
    zenActions.increment();
  });

// Run benchmarks
async function runSimpleBenchmarks() {
  console.log('⏱️  Running simple benchmarks...\n');

  await bench.run();

  console.log('📊 SIMPLE BENCHMARK RESULTS');
  console.log('='.repeat(50));

  const results = bench.tasks
    .filter(task => task.result)
    .sort((a, b) => b.result!.hz - a.result!.hz);

  results.forEach((task, index) => {
    const result = task.result!;
    const rank = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍';
    console.log(`${rank} ${task.name.padEnd(20)} ${result.hz.toFixed(0).padStart(10)} ops/sec ±${result.rme.toFixed(2)}%`);
  });

  console.log('\n🏆 Best Performance: ' + results[0].name);
}

runSimpleBenchmarks().catch(console.error);