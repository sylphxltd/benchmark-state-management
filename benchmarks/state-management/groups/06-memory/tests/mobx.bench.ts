/**
 * 06-memory - MobX
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { mobxActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = mobxActionsV2;

describe('06-memory - MobX', () => {
  Object.values(TESTS).forEach(test => {
    bench(test.name, () => {
      test.execute(store);
    });
  });
});
