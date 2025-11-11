/**
 * 11-batching-native - MobX
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('11-batching-native - MobX', () => {
  bench('Batched Updates', () => {
    mobxBatchStore.batchUpdate(Math.random(), 'test', true);
  });

  bench('Unbatched Updates', () => {
    mobxBatchStore.unbatchedUpdate(Math.random(), 'test', true);
  });

  bench('Large Batch', () => {
    runInAction(() => {
      for (let i = 0; i < 100; i++) {
        mobxBatchStore.count = i;
      }
    });

  bench('Batched with Observers', () => {
    mobxBatchStore.batchUpdate(Math.random(), 'test', true);
  });
});
