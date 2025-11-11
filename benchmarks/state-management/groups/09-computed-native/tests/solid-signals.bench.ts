/**
 * 09-computed-native - Solid Signals
 * Native computed values (createMemo)
 */

import { bench, describe } from 'vitest';
import {
  setSolidCount,
  solidDoubledSignal,
  solidLevel3Computed
} from '../../../src/stores/solid-store';

describe('09-computed-native - Solid Signals', () => {
  bench('Native Computed', () => {
    setSolidCount(Math.random());
    solidDoubledSignal();
  });

  bench('Chained Computed', () => {
    setSolidCount(Math.random());
    solidLevel3Computed();
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      setSolidCount(i);
      solidDoubledSignal();
    }
  });
});
