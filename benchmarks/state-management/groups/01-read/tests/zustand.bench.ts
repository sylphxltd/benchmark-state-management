/**
 * 01-read - Zustand
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('01-read - Zustand', () => {
  bench('Simple Read', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('High Frequency Read', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });
});
