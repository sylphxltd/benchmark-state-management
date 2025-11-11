/**
 * 11-batching-native - Valtio
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../../shared/test-config';

describe('11-batching-native - Valtio', () => {
  bench('Batched Updates', () => {
    // Valtio automatically batches synchronous updates
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });

  bench('Unbatched Updates', () => {
    // Same as batched for Valtio - automatic batching
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });

  bench('Large Batch', () => {
    for (let i = 0; i < 100; i++) {
      valtioBatchStore.count = i;
    }
  });

  bench('Batched with Observers', () => {
    valtioBatchStore.count = Math.random();
    valtioBatchStore.name = 'test';
    valtioBatchStore.active = true;
  });
});
