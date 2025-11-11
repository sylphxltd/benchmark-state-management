/**
 * 06-memory - Jotai
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('06-memory - Jotai', () => {
  bench('Large State Allocation', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    actions.allocateLargeState();
  });
});
