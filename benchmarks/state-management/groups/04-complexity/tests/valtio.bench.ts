/**
 * 04-complexity - Valtio
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('04-complexity - Valtio', () => {
  bench('10-Level Nested Update', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    actions.updateNestedState();
  });

  bench('Deep Read Access', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    actions.readNestedState();
  });
});
