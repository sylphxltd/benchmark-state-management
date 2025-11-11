/**
 * 03-creation - MobX
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('03-creation - MobX', () => {
  bench('Store Creation', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'MobX')!.actions;
    actions.createStore();
  });
});
