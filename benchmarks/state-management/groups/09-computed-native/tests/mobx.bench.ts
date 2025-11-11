/**
 * 09-computed-native - MobX
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('09-computed-native - MobX', () => {
  bench('Native Computed', () => {
    mobxStore.setValue(Math.random());
    mobxStore.doubled;
  });

  bench('Chained Computed', () => {
    mobxStore.setValue(Math.random());
    mobxStore.chained;
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      mobxStore.setValue(i);
      mobxStore.doubled;
    }
  });
});
