/**
 * 13-todo-list - Universal Benchmark Runner
 * Real-world todo list / task management operations
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';
import { TESTS } from './test-registry';

// Support per-library filtering via env var (for cost-optimized benchmarks)
const targetLibrary = process.env.BENCH_LIBRARY;
const libraries = targetLibrary
  ? LIBRARIES.filter(lib => lib.name === targetLibrary)
  : LIBRARIES;

// Run tests for each library
libraries.forEach(({ name, actions }) => {
  describe(name, () => {
    Object.values(TESTS).forEach(test => {
      bench(test.name, () => {
        test.execute(actions);
      });
    });
  });
});
