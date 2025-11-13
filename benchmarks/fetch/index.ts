/**
 * Fetch Libraries Benchmark Category
 *
 * Comparing HTTP client libraries for performance
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category
// ============================================================================

export const category = createCategory({
  id: 'fetch',
  name: 'Fetch Libraries',
  description: 'HTTP client libraries performance benchmarks',
  emoji: '🌐',
});

// ============================================================================
// 2. Create Groups
// ============================================================================

export const groups = {
  basicRequests: category.createGroup({
    id: '01-basic-requests',
    title: 'Basic HTTP Requests',
    description: 'Simple GET/POST requests',
    type: 'universal',
  }),

  errorHandling: category.createGroup({
    id: '02-error-handling',
    title: 'Error Handling',
    description: 'Error handling and retries',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests
// ============================================================================

export const tests = {
  // Basic Requests
  simpleGet: groups.basicRequests.createTest({
    name: 'Simple GET Request',
    description: 'Fetch a JSON response',
  }),

  simplePost: groups.basicRequests.createTest({
    name: 'Simple POST Request',
    description: 'Send JSON data',
  }),

  concurrentRequests: groups.basicRequests.createTest({
    name: 'Concurrent Requests (10x)',
    description: 'Make 10 parallel requests',
  }),

  // Error Handling
  handleError: groups.errorHandling.createTest({
    name: 'Handle 404 Error',
    description: 'Gracefully handle 404 responses',
  }),
};

// ============================================================================
// 4. Main Entry Point
// ============================================================================

async function main() {
  console.log('🎯 Running benchmarks for all libraries\n');

  // Import libraries AFTER category/groups/tests are defined
  await import('./libraries/axios');
  await import('./libraries/ky');
  await import('./libraries/wretch');
  await import('./libraries/ofetch');

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
