/**
 * 03-creation - Zen
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('03-creation - Zen', () => {
  bench('Store Creation', () => {
    const actions = LIBRARIES.find(lib => lib.name === 'Zen')!.actions;
    actions.createStore();
  });
});
