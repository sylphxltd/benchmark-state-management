/**
 * Router Category
 *
 * Performance benchmarks for React routing libraries
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category
// ============================================================================

export const category = createCategory({
  id: 'router',
  name: 'Router',
  description: 'Performance benchmarks for React routing libraries',
  emoji: '🧭',
  performanceTiers: [
    {
      name: 'Ultra Fast (Tier S)',
      threshold: 5000000,
      description: 'Exceptional route matching performance',
    },
    {
      name: 'Very Fast (Tier A)',
      threshold: 2000000,
      description: 'Fast route matching with good features',
    },
    {
      name: 'Fast (Tier B)',
      threshold: 1000000,
      description: 'Good performance for most use cases',
    },
    {
      name: 'Standard (Tier C)',
      threshold: 0,
      description: 'Adequate performance with comprehensive features',
    },
  ],
});

// ============================================================================
// 2. Create Groups (returns object references!)
// ============================================================================

export const groups = {
  basicRoutes: category.createGroup({
    id: '01-basic-routes',
    title: 'Basic Routes',
    description: 'Static and simple path matching',
    type: 'universal',
  }),

  dynamicRoutes: category.createGroup({
    id: '02-dynamic-routes',
    title: 'Dynamic Routes',
    description: 'URL parameter extraction',
    type: 'universal',
  }),

  advancedRoutes: category.createGroup({
    id: '03-advanced-routes',
    title: 'Advanced Routes',
    description: 'Wildcard and optional parameters',
    type: 'universal',
  }),

  realWorld: category.createGroup({
    id: '04-real-world',
    title: 'Real-World Patterns',
    description: 'Realistic usage scenarios',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests (returns object references!)
// ============================================================================

export const tests = {
  // Basic Routes
  staticRoute: groups.basicRoutes.createTest({
    name: 'Static Route Matching',
    description: "Match root path '/'",
  }),

  simpleRoute: groups.basicRoutes.createTest({
    name: 'Simple Route Matching',
    description: "Match simple path '/about'",
  }),

  // Dynamic Routes
  dynamicOneParam: groups.dynamicRoutes.createTest({
    name: 'Dynamic Route Matching (1 param)',
    description: 'Match route with one parameter',
  }),

  dynamicTwoParams: groups.dynamicRoutes.createTest({
    name: 'Nested Dynamic Routes (2 params)',
    description: 'Match route with two nested parameters',
  }),

  // Advanced Routes
  wildcardRoute: groups.advancedRoutes.createTest({
    name: 'Wildcard Route Matching',
    description: 'Match routes with wildcard segments',
  }),

  optionalWithParam: groups.advancedRoutes.createTest({
    name: 'Optional Parameter Route (with param)',
    description: 'Match optional parameter when present',
  }),

  optionalWithoutParam: groups.advancedRoutes.createTest({
    name: 'Optional Parameter Route (without param)',
    description: 'Match optional parameter when absent',
  }),

  // Real-World
  mixedRoutes: groups.realWorld.createTest({
    name: 'Mixed Route Matching (realistic usage)',
    description: 'Match multiple diverse routes sequentially',
  }),

  sequentialWorstCase: groups.realWorld.createTest({
    name: 'Sequential Route Matching (worst case)',
    description: 'Last route in list (worst case performance)',
  }),
};

// ============================================================================
// 4. Main Entry Point
// ============================================================================

async function main() {
  // Import libraries AFTER category/groups/tests are defined
  await import('./libraries/react-router');
  await import('./libraries/wouter');
  await import('./libraries/zen-router');

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

  // Save results
  console.log('\n📝 Saving results...\n');
  await category.saveResults(results);
  console.log('✅ Results saved\n');
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}
