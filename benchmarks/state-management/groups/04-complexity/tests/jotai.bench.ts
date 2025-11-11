/**
 * 04-complexity - Jotai
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('04-complexity - Jotai', () => {
  bench('10-Level Nested Update', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    actions.updateNestedState();
  });

  bench('Deep Read Access', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    actions.readNestedState();
  });
});
