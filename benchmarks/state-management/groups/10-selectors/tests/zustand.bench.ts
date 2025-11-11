/**
 * 10-selectors - Zustand
 * Manual selector pattern (selector functions)
 */

import { bench, describe } from 'vitest';
import {
  zustandStore,
  zustandDoubledSelector,
  zustandLevel3Selector
} from '../../../src/stores/zustand-store';

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
