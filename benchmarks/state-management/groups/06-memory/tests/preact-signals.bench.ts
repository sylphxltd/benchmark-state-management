/**
 * 06-memory - Preact Signals
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('06-memory - Preact Signals', () => {
  bench('Large State Allocation', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Preact Signals')!.actions;
    actions.allocateLargeState();
  });
});
