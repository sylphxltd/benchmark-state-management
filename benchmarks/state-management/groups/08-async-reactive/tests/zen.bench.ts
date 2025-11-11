/**
 * 08-async-reactive - Zen
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { zenActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = zenActionsV2;

describe('08-async-reactive - Zen', () => {
  Object.values(TESTS).forEach(test => {
    bench(test.name, () => {
      test.execute(store);
    });
  });
});
