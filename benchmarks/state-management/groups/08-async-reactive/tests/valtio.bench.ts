/**
 * 08-async-reactive - Valtio
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { valtioActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = valtioActionsV2;

describe('08-async-reactive - Valtio', () => {
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
