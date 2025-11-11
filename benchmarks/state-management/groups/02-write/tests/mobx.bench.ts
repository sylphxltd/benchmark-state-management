/**
 * 02-write - MobX
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('02-write - MobX', () => {
  bench('Simple Increment', () => {
    const store = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    store.increment();
  });

  bench('Burst Updates', () => {
    const store = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    for (let i = 0; i < 10; i++) {
      store.increment();
    }
  });
});
