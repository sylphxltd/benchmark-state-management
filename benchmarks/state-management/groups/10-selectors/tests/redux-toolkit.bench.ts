/**
 * 10-selectors - Redux Toolkit
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

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
