/**
 * 02-write - Zustand
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('02-write - Zustand', () => {
  bench('Simple Increment', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    store.increment();
  });

  bench('Burst Updates', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Zustand')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });
});
