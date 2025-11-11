/**
 * 02-write - Preact Signals
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { preactActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = preactActionsV2;

describe('02-write - Preact Signals', () => {
  Object.values(TESTS).forEach(test => {
    bench(test.name, () => {
      test.execute(store);
    });
  });
});
