/**
 * 08-async-reactive - Jotai
 * Tests TRUE reactive async atoms (atom(async () => ...))
 *
 * When a dependency changes, async atoms automatically re-execute.
 * This is different from manual async functions.
 */

import { bench, describe } from 'vitest';
import { atom } from 'jotai';
import { jotaiStore, jotaiCountAtom, jotaiAsyncAtom } from '../../../src/stores/jotai-store';

// Create additional async atoms for testing
const asyncChainedAtom = atom(async (get) => {
  const asyncResult = await get(jotaiAsyncAtom);
  // Chained: depends on another async atom
  await new Promise(resolve => setTimeout(resolve, 0));
  return asyncResult.count * 2;
});

const asyncComplexAtom = atom(async (get) => {
  const count = get(jotaiCountAtom);
  const asyncData = await get(jotaiAsyncAtom);
  // Complex: multiple async dependencies
  await new Promise(resolve => setTimeout(resolve, 0));
  return {
    count,
    asyncCount: asyncData.count,
    combined: count + asyncData.count
  };
});

describe('08-async-reactive - Jotai', () => {
  bench('Async Atom Read', async () => {
    // Read async atom (auto-resolves)
    const result = await jotaiStore.get(jotaiAsyncAtom);
    return result;
  });

  bench('Async Atom with Dependency Update', async () => {
    // Update dependency, then read async atom
    // The async atom will re-execute automatically
    jotaiStore.set(jotaiCountAtom, c => c + 1);
    const result = await jotaiStore.get(jotaiAsyncAtom);
    return result;
  });

  bench('Chained Async Atoms', async () => {
    // Async atom that depends on another async atom
    jotaiStore.set(jotaiCountAtom, c => c + 1);
    const result = await jotaiStore.get(asyncChainedAtom);
    return result;
  });

  bench('Complex Async Dependencies', async () => {
    // Async atom with multiple dependencies
    jotaiStore.set(jotaiCountAtom, c => c + 1);
    const result = await jotaiStore.get(asyncComplexAtom);
    return result;
  });

  bench('Concurrent Async Reads', async () => {
    // Multiple async atoms read concurrently
    const results = await Promise.all([
      jotaiStore.get(jotaiAsyncAtom),
      jotaiStore.get(asyncChainedAtom),
      jotaiStore.get(asyncComplexAtom)
    ]);
    return results;
  });
});
