/**
 * 01-read - Valtio
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('01-read - Valtio', () => {
  bench('Simple Read', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    store.increment();
    return store.getCount();
  });

  bench('High Frequency Read', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    for (let i = 0; i < 100; i++) {
      store.getCount();
    }
  });
});
