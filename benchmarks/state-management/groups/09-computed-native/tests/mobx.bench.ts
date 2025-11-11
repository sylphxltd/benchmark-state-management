/**
 * 09-computed-native - MobX
 * Native computed values (getters)
 */

import { bench, describe } from 'vitest';
import { mobxStore } from '../../../src/stores/mobx-store';

describe('09-computed-native - MobX', () => {
  bench('Native Computed', () => {
    mobxStore.count = Math.random();
    mobxStore.doubled;
  });

  bench('Chained Computed', () => {
    mobxStore.count = Math.random();
    mobxStore.level3Computed;
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      mobxStore.count = i;
      mobxStore.doubled;
    }
  });
});
