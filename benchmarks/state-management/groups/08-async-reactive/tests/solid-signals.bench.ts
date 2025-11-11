/**
 * 08-async-reactive - Solid Signals
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { solidActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = solidActionsV2;

describe('08-async-reactive - Solid Signals', () => {
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
