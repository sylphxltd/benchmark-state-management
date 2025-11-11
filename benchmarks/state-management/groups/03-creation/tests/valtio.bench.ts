/**
 * 03-creation - Valtio
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { valtioActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = valtioActionsV2;

describe('03-creation - Valtio', () => {
  Object.values(TESTS).forEach(test => {
    bench(test.name, () => {
      test.execute(store);
    });
  });
});
