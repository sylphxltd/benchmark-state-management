/**
 * 10-selectors - Redux Toolkit
 * Manual selector pattern (createSelector)
 */

import { bench, describe } from 'vitest';
import {
  reduxStore,
  reduxSlice,
  reduxDoubledSelector,
  reduxLevel3Selector
} from '../../../src/stores/redux-store';

describe('10-selectors - Redux Toolkit', () => {
  bench('Selector', () => {
    reduxStore.dispatch(reduxSlice.actions.increment());
    reduxDoubledSelector(reduxStore.getState());
  });

  bench('Chained Selectors', () => {
    reduxStore.dispatch(reduxSlice.actions.increment());
    reduxLevel3Selector(reduxStore.getState());
  });

  bench('Repeated Selector Access', () => {
    for (let i = 0; i < 100; i++) {
      reduxDoubledSelector(reduxStore.getState());
    }
  });

  bench('Selector Updates', () => {
    for (let i = 0; i < 100; i++) {
      reduxStore.dispatch(reduxSlice.actions.increment());
      reduxDoubledSelector(reduxStore.getState());
    }
  });
});
