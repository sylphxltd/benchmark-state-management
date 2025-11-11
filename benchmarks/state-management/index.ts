/**
 * State Management Category
 *
 * Comprehensive benchmarks with basic, advanced, and real-world tests
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category
// ============================================================================

export const category = createCategory({
  id: 'state-management',
  name: 'State Management',
  description: 'React state management libraries performance benchmarks',
  emoji: '🗃️',
  performanceTiers: [
    {
      name: 'Signal-based (Tier S)',
      threshold: 2000000,
      description: 'Exceptional performance across all operations',
    },
    {
      name: 'Atom-based (Tier A)',
      threshold: 1000000,
      description: 'Very fast but creation overhead impacts overall score',
    },
    {
      name: 'Proxy-based (Tier B)',
      threshold: 200000,
      description: 'Moderate performance with good ergonomics',
    },
  ],
});

// ============================================================================
// 2. Create Groups (returns object references!)
// ============================================================================

export const groups = {
  // BASIC TESTS
  basicRead: category.createGroup({
    id: '01-basic-read',
    title: 'Basic Read Operations',
    description: 'Simple read patterns with different scales',
    type: 'universal',
  }),

  basicWrite: category.createGroup({
    id: '02-basic-write',
    title: 'Basic Write Operations',
    description: 'Simple write patterns with different scales',
    type: 'universal',
  }),

  // ADVANCED TESTS
  advancedOperations: category.createGroup({
    id: '03-advanced-operations',
    title: 'Advanced Operations',
    description: 'Nested updates, array operations, and computed values',
    type: 'universal',
  }),

  asyncOperations: category.createGroup({
    id: '04-async-operations',
    title: 'Async Operations',
    description: 'Sequential and concurrent async patterns',
    type: 'universal',
  }),

  // REAL-WORLD TESTS
  realWorldScenarios: category.createGroup({
    id: '05-real-world',
    title: 'Real-World Scenarios',
    description: 'Practical use cases: forms, caching, memory management',
    type: 'universal',
  }),

  // STRESS TESTS
  performanceStress: category.createGroup({
    id: '06-performance-stress',
    title: 'Performance Stress Tests',
    description: 'Extreme loads and large-scale operations',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests (returns object references!)
// ============================================================================

export const tests = {
  // ========== BASIC READ TESTS (Different Scales) ==========
  singleRead: groups.basicRead.createTest({
    name: 'Single Read',
    description: 'Read counter value once (baseline)',
  }),

  moderateRead: groups.basicRead.createTest({
    name: 'Moderate Read (100x)',
    description: 'Read counter 100 times',
  }),

  highFrequencyRead: groups.basicRead.createTest({
    name: 'High-Frequency Read (1000x)',
    description: 'Read counter 1000 times (stress test)',
  }),

  // ========== BASIC WRITE TESTS (Different Scales) ==========
  singleWrite: groups.basicWrite.createTest({
    name: 'Single Write',
    description: 'Increment counter once',
  }),

  batchWrite: groups.basicWrite.createTest({
    name: 'Batch Write (10x)',
    description: 'Increment counter 10 times',
  }),

  burstWrite: groups.basicWrite.createTest({
    name: 'Burst Write (100x)',
    description: 'Increment counter 100 times rapidly',
  }),

  heavyWrite: groups.basicWrite.createTest({
    name: 'Heavy Write (1000x)',
    description: 'Increment counter 1000 times',
  }),

  // ========== ADVANCED OPERATIONS ==========
  nestedUpdate: groups.advancedOperations.createTest({
    name: 'Nested Object Update',
    description: 'Update deeply nested property (3 levels)',
  }),

  arrayPush: groups.advancedOperations.createTest({
    name: 'Array Push',
    description: 'Add item to array',
  }),

  arrayUpdate: groups.advancedOperations.createTest({
    name: 'Array Update',
    description: 'Update object in array',
  }),

  computedValue: groups.advancedOperations.createTest({
    name: 'Computed Value Access',
    description: 'Access derived/computed value',
  }),

  // ========== ASYNC OPERATIONS ==========
  sequentialAsync: groups.asyncOperations.createTest({
    name: 'Sequential Async (3 ops)',
    description: 'Three async operations in sequence',
  }),

  concurrentAsync: groups.asyncOperations.createTest({
    name: 'Concurrent Async (3 ops)',
    description: 'Three async operations in parallel',
  }),

  // ========== REAL-WORLD SCENARIOS ==========
  simpleForm: groups.realWorldScenarios.createTest({
    name: 'Simple Form (3 fields)',
    description: 'Handle simple form with 3 fields',
  }),

  complexForm: groups.realWorldScenarios.createTest({
    name: 'Complex Form (nested + array)',
    description: 'Handle complex form with nested objects and arrays',
  }),

  cacheInvalidation: groups.realWorldScenarios.createTest({
    name: 'Cache Invalidation',
    description: 'Update data and invalidate cached computed values',
  }),

  memoryUsage: groups.realWorldScenarios.createTest({
    name: 'Memory Management',
    description: 'Create and cleanup 100 subscribers',
  }),

  // ========== PERFORMANCE STRESS TESTS ==========
  extremeRead: groups.performanceStress.createTest({
    name: 'Extreme Read (10000x)',
    description: 'Read counter 10,000 times',
  }),

  extremeWrite: groups.performanceStress.createTest({
    name: 'Extreme Write (10000x)',
    description: 'Increment counter 10,000 times',
  }),

  largeArray: groups.performanceStress.createTest({
    name: 'Large Array (1000 items)',
    description: 'Manage array with 1000 items',
  }),
};

// ============================================================================
// 4. Main Entry Point
// ============================================================================

async function main() {
  // Import libraries AFTER category/groups/tests are defined
  await import('./libraries/jotai');
  await import('./libraries/zustand');
  await import('./libraries/redux-toolkit');
  await import('./libraries/mobx');
  await import('./libraries/valtio');
  await import('./libraries/preact-signals');
  await import('./libraries/solid-js');
  await import('./libraries/zen');

  // Print summary
  category.printSummary();

  // Validate
  const validation = category.validate();
  if (!validation.valid) {
    console.error('\n❌ Validation failed:\n');
    validation.errors.forEach((error) => console.error(`  - ${error}`));
    process.exit(1);
  }

  console.log('✅ Validation passed\n');

  // Run benchmarks
  const results = await category.run();

  console.log('\n✅ Benchmarks completed\n');
  console.log('Results summary:');
  console.log(`  Total tests run: ${results.results.length}`);
  console.log(`  Timestamp: ${results.timestamp}`);
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}
