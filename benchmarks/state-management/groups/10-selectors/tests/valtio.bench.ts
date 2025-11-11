/**
 * 10-selectors - Valtio
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

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
