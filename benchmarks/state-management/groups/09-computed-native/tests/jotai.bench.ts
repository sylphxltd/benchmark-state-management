/**
 * 09-computed-native - Jotai
 * Native computed values (atoms)
 */

import { bench, describe } from 'vitest';
import {
  jotaiStore,
  jotaiCountAtom,
  jotaiDoubledAtom,
  jotaiLevel3Computed
} from '../../../src/stores/jotai-store';

describe('09-computed-native - Jotai', () => {
  bench('Native Computed', () => {
    jotaiStore.set(jotaiCountAtom, Math.random());
    jotaiStore.get(jotaiDoubledAtom);
  });

  bench('Chained Computed', () => {
    jotaiStore.set(jotaiCountAtom, Math.random());
    jotaiStore.get(jotaiLevel3Computed);
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      jotaiStore.set(jotaiCountAtom, i);
      jotaiStore.get(jotaiDoubledAtom);
    }
  });
});
