/**
 * 09-computed-native - Jotai
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('09-computed-native - Jotai', () => {
  bench('Native Computed', () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    jotaiStore.get(jotaiComputedAtom);
  });

  bench('Chained Computed', () => {
    jotaiStore.set(jotaiBaseAtom, Math.random());
    jotaiStore.get(jotaiChainedAtom);
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      jotaiStore.set(jotaiBaseAtom, i);
      jotaiStore.get(jotaiComputedAtom);
    }
  });
});
