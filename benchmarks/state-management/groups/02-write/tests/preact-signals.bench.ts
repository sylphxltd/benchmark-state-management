/**
 * 02-write - Preact Signals
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('02-write - Preact Signals', () => {
  bench('Simple Increment', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    store.increment();
  });

  bench('Burst Updates', () => {
    const store = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });
});
