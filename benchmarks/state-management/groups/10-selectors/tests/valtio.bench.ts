/**
 * 10-selectors - Valtio
 * Manual selector pattern (proxy getters)
 */

import { bench, describe } from 'vitest';
import { valtioStore } from '../../../src/stores/valtio-store';

describe('10-selectors - Valtio', () => {
  bench('Selector', () => {
    valtioStore.increment();
    valtioStore.doubled;
  });

  bench('Chained Selectors', () => {
    valtioStore.increment();
    valtioStore.level3Computed;
  });

  bench('Repeated Selector Access', () => {
    for (let i = 0; i < 100; i++) {
      valtioStore.doubled;
    }
  });

  bench('Selector Updates', () => {
    for (let i = 0; i < 100; i++) {
      valtioStore.increment();
      valtioStore.doubled;
    }
  });
});
