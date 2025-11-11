/**
 * 01-read - Preact Signals
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('01-read - Preact Signals', () => {
  bench('Simple Read', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('High Frequency Read', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });
});
