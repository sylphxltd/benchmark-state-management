/**
 * 10-selectors - Zustand
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('10-selectors - Zustand', () => {
  bench('Selector', () => {
    zustandStore.getState().increment();
    zustandDoubledSelector(zustandStore.getState());
  });

  bench('Chained Selectors', () => {
    zustandStore.getState().increment();
    zustandLevel3Selector(zustandStore.getState());
  });

  bench('Repeated Selector Access', () => {
    for (let i = 0; i < 100; i++) {
      zustandDoubledSelector(zustandStore.getState());
    }
  });

  bench('Selector Updates', () => {
    for (let i = 0; i < 100; i++) {
      zustandStore.getState().increment();
      zustandDoubledSelector(zustandStore.getState());
    }
  });
});
