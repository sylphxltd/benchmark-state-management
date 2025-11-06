/**
 * Modular State Management Benchmark Suite
 * Comprehensive testing with modular architecture
 */

import { BenchmarkRunner } from './benchmarks';

console.log('🚀 Comprehensive State Management Benchmark Suite');
console.log('🔧 Testing: Simple Updates, Computed Values, Nested Stores, Array Operations\n');

async function runComprehensiveBenchmarks() {
  const runner = new BenchmarkRunner(1000); // 1 second per test
  await runner.runBenchmarks();
}

runComprehensiveBenchmarks().catch(console.error);