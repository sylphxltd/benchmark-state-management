/**
 * Utility functions for benchmarking
 */

import { performance, memoryUsage } from 'node:process';
import { BenchmarkScenario, BenchmarkResult, StateOperations } from '@/types';

/**
 * Get current memory usage in MB
 */
export function getMemoryUsage(): number {
  const usage = memoryUsage();
  return usage.heapUsed / 1024 / 1024;
}

/**
 * Run a single benchmark scenario
 */
export async function runBenchmark(
  libraryName: string,
  scenario: BenchmarkScenario,
  operations: StateOperations,
  testFn: (ops: StateOperations, scenario: BenchmarkScenario) => Promise<void>
): Promise<BenchmarkResult> {
  // Warm up
  await testFn(operations, { ...scenario, iterations: Math.min(100, scenario.iterations) });

  // Measure memory before
  const memoryBefore = getMemoryUsage();

  // Collect performance metrics
  const times: number[] = [];

  for (let i = 0; i < scenario.iterations; i++) {
    const start = performance.now();
    await testFn(operations, scenario);
    const end = performance.now();
    times.push(end - start);
  }

  // Measure memory after
  const memoryAfter = getMemoryUsage();

  // Calculate statistics
  const avgTime = times.reduce((sum, time) => sum + time, 0) / times.length;
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);

  // Calculate standard deviation
  const variance = times.reduce((sum, time) => sum + Math.pow(time - avgTime, 2), 0) / times.length;
  const stdDev = Math.sqrt(variance);

  // Operations per second
  const opsPerSec = 1000 / avgTime;

  return {
    library: libraryName,
    scenario: scenario.name,
    avgTime: Number(avgTime.toFixed(4)),
    minTime: Number(minTime.toFixed(4)),
    maxTime: Number(maxTime.toFixed(4)),
    stdDev: Number(stdDev.toFixed(4)),
    opsPerSec: Number(opsPerSec.toFixed(2)),
    memoryBefore: Number(memoryBefore.toFixed(2)),
    memoryAfter: Number(memoryAfter.toFixed(2)),
    memoryDelta: Number((memoryAfter - memoryBefore).toFixed(2))
  };
}

/**
 * Generate test data for scenarios
 */
export function generateTestData(size: number): any {
  return Array.from({ length: size }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    value: Math.random() * 1000,
    active: i % 2 === 0,
    tags: [`tag${i % 10}`, `category${i % 5}`],
    metadata: {
      created: Date.now() - Math.random() * 1000000,
      updated: Date.now(),
      version: Math.floor(Math.random() * 10) + 1
    }
  }));
}

/**
 * Standard benchmark scenarios
 */
export const STANDARD_SCENARIOS: BenchmarkScenario[] = [
  {
    name: 'simple_read',
    description: 'Read a single state value repeatedly',
    iterations: 10000,
    stateSize: 100,
    subscribers: 0
  },
  {
    name: 'simple_write',
    description: 'Write/update a single state value repeatedly',
    iterations: 10000,
    stateSize: 100,
    subscribers: 0
  },
  {
    name: 'batch_write',
    description: 'Batch multiple state updates',
    iterations: 1000,
    stateSize: 1000,
    subscribers: 0
  },
  {
    name: 'complex_state_read',
    description: 'Read from complex nested state',
    iterations: 5000,
    stateSize: 1000,
    subscribers: 0
  },
  {
    name: 'with_subscribers',
    description: 'State updates with multiple subscribers',
    iterations: 5000,
    stateSize: 500,
    subscribers: 10
  },
  {
    name: 'large_state',
    description: 'Operations on large state objects',
    iterations: 1000,
    stateSize: 10000,
    subscribers: 5
  },
  {
    name: 'frequent_updates',
    description: 'Frequent small updates to test reactivity',
    iterations: 20000,
    stateSize: 100,
    subscribers: 3
  }
];

/**
 * Format benchmark results for display
 */
export function formatResult(result: BenchmarkResult): string {
  return [
    `📊 ${result.library} - ${result.scenario}`,
    `   Avg Time: ${result.avgTime}ms`,
    `   Ops/sec: ${result.opsPerSec}`,
    `   Memory: ${result.memoryDelta > 0 ? '+' : ''}${result.memoryDelta}MB`,
    `   Range: ${result.minTime}ms - ${result.maxTime}ms (±${result.stdDev})`
  ].join('\n');
}

/**
 * Compare two results and determine winner
 */
export function compareResults(a: BenchmarkResult, b: BenchmarkResult): 'a' | 'b' | 'tie' {
  const aScore = a.opsPerSec - Math.abs(a.memoryDelta) * 100;
  const bScore = b.opsPerSec - Math.abs(b.memoryDelta) * 100;

  if (Math.abs(aScore - bScore) < 1) return 'tie';
  return aScore > bScore ? 'a' : 'b';
}

/**
 * Get system information for benchmarking context
 */
export function getSystemInfo() {
  return {
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    cpuCount: require('os').cpus().length,
    totalMemory: require('os').totalmem(),
    freeMemory: require('os').freemem()
  };
}