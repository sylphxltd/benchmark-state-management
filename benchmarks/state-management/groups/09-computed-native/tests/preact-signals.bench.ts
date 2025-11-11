/**
 * 09-computed-native - Preact Signals
 * Native computed values (signals)
 */

import { bench, describe } from 'vitest';
import {
  preactCountSignal,
  preactDoubledSignal,
  preactLevel3Computed
} from '../../../src/stores/preact-store';

describe('09-computed-native - Preact Signals', () => {
  bench('Native Computed', () => {
    preactCountSignal.value = Math.random();
    preactDoubledSignal.value;
  });

  bench('Chained Computed', () => {
    preactCountSignal.value = Math.random();
    preactLevel3Computed.value;
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      preactCountSignal.value = i;
      preactDoubledSignal.value;
    }
  });
});
