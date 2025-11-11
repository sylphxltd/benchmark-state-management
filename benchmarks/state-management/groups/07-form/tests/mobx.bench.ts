/**
 * 07-form - MobX
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { mobxActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = mobxActionsV2;

describe('07-form - MobX', () => {
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
