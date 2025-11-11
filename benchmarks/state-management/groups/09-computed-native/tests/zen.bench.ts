/**
 * 09-computed-native - Zen
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('09-computed-native - Zen', () => {
  bench('Native Computed', () => {
    zenSet(zenValue, Math.random());
    zenGet(zenDoubled);
  });

  bench('Chained Computed', () => {
    zenSet(zenValue, Math.random());
    zenGet(zenChained);
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      zenSet(zenValue, i);
      zenGet(zenDoubled);
    }
  });
});
