/**
 * 04-complexity - MobX
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('04-complexity - MobX', () => {
  bench('10-Level Nested Update', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    actions.updateNestedState();
  });

  bench('Deep Read Access', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    actions.readNestedState();
  });
});
