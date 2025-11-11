/**
 * 02-write - Jotai
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { jotaiActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = jotaiActionsV2;

describe('02-write - Jotai', () => {
  Object.values(TESTS).forEach(test => {
    bench(test.name, () => {
      test.execute(store);
    });
  });
});
