/**
 * 06-memory - Redux Toolkit
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('06-memory - Redux Toolkit', () => {
  bench('Large State Allocation', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Redux Toolkit')!.actions;
    actions.allocateLargeState();
  });
});
