/**
 * 03-creation - Valtio
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('03-creation - Valtio', () => {
  bench('Store Creation', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Valtio')!.actions;
    actions.createStore();
  });
});
