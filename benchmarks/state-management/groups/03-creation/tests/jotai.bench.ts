/**
 * 03-creation - Jotai
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('03-creation - Jotai', () => {
  bench('Store Creation', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Jotai')!.actions;
    actions.createStore();
  });
});
