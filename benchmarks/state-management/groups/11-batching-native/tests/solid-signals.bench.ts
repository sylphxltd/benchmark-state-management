/**
 * 11-batching-native - Solid Signals
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('11-batching-native - Solid Signals', () => {
  bench('Batched Updates', () => {
    batch(() => {
      setSolidCount(Math.random());
      setSolidName('test');
      setSolidActive(true);
    });

  bench('Unbatched Updates', () => {
    setSolidCount(Math.random());
    setSolidName('test');
    setSolidActive(true);
  });

  bench('Large Batch', () => {
    batch(() => {
      for (let i = 0; i < 100; i++) {
        setSolidCount(i);
      }
    });

  bench('Batched with Observers', () => {
    solidSubscriptionCount = 0;
    batch(() => {
      setSolidCount(Math.random());
      setSolidName('test');
      setSolidActive(true);
    });
});
