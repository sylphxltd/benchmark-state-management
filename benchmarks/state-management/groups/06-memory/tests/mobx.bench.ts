/**
 * 06-memory - MobX
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('06-memory - MobX', () => {
  bench('Large State Allocation', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    actions.allocateLargeState();
  });
});
