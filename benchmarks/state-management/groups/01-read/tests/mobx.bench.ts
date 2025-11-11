/**
 * 01-read - MobX
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { mobxActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = mobxActionsV2;

describe('01-read - MobX', () => {
  Object.values(TESTS).forEach(test => {
    bench(test.name, () => {
      test.execute(store);
    });
  });
});
