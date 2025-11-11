/**
 * 09-computed-native - Preact Signals
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('09-computed-native - Preact Signals', () => {
  bench('Native Computed', () => {
    preactValue.value = Math.random();
    preactDoubled.value;
  });

  bench('Chained Computed', () => {
    preactValue.value = Math.random();
    preactChained.value;
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      preactValue.value = i;
      preactDoubled.value;
    }
  });
});
