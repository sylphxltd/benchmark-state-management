/**
 * 08-async-reactive - Redux Toolkit
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { reduxActionsV2 } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = reduxActionsV2;

describe('08-async-reactive - Redux Toolkit', () => {
  Object.values(TESTS).forEach(test => {
    bench(test.name, () => {
      test.execute(store);
    });
  });
});
