/**
 * 06-memory - Jotai
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { jotaiActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = jotaiActionsV2;

describe('06-memory - Jotai', () => {
  Object.values(TESTS).forEach(test => {
    // Skip test if store doesn't implement required method
    if (test.method && typeof store[test.method] !== 'function') {
      return;
    }

    bench(test.name, () => {
      test.execute(store);
    });
  });
});
