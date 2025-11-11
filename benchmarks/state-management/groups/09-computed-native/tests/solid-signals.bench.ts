/**
 * 09-computed-native - Solid Signals
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('09-computed-native - Solid Signals', () => {
  bench('Native Computed', () => {
    setSolidValue(Math.random());
    solidDoubled();
  });

  bench('Chained Computed', () => {
    setSolidValue(Math.random());
    solidChained();
  });

  bench('Computed Updates', () => {
    for (let i = 0; i < 100; i++) {
      setSolidValue(i);
      solidDoubled();
    }
  });
});
