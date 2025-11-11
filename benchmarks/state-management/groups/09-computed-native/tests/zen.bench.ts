/**
 * 09-computed-native - Zen
 * Native computed values (computed)
 */

import { bench, describe } from 'vitest';
import { get, set } from '@sylphx/zen';
import {
  zenCountStore,
  zenDoubledStore,
  zenLevel3Computed
} from '../../../src/stores/zen-store';

describe('09-computed-native - Zen', () => {
  bench('Native Computed', () => {
    set(zenCountStore, Math.random());
    get(zenDoubledStore);
  });

  bench('Chained Computed', () => {
    set(zenCountStore, Math.random());
    get(zenLevel3Computed);
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      set(zenCountStore, i);
      get(zenDoubledStore);
    }
  });
});
