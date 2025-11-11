/**
 * Solid.js Signals Library Implementation
 *
 * Complete implementation with all 20 tests following the pattern from jotai.ts
 */

import { createSignal, createMemo, createEffect, onCleanup } from 'solid-js';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface SolidStore {
  // Basic counter
  getCounter: () => number;
  setCounter: (value: number | ((prev: number) => number)) => void;

  // Nested object
  getNested: () => { nested: { value: number } };
  setNested: (value: { nested: { value: number } } | ((prev: { nested: { value: number } }) => { nested: { value: number } })) => void;

  // Users array
  getUsers: () => Array<{ id: number; name: string }>;
  setUsers: (value: Array<{ id: number; name: string }> | ((prev: Array<{ id: number; name: string }>) => Array<{ id: number; name: string }>)) => void;

  // Computed value (doubled)
  doubled: () => number;

  // Form states
  getForm: () => { name: string; email: string; age: number };
  setForm: (value: { name: string; email: string; age: number } | ((prev: { name: string; email: string; age: number }) => { name: string; email: string; age: number })) => void;

  getComplexForm: () => { profile: { name: string }; tags: string[] };
  setComplexForm: (value: { profile: { name: string }; tags: string[] } | ((prev: { profile: { name: string }; tags: string[] }) => { profile: { name: string }; tags: string[] })) => void;

  // Large array
  getLargeArray: () => number[];
  setLargeArray: (value: number[] | ((prev: number[]) => number[])) => void;
}

// ============================================================================
// Register Library
// ============================================================================

const solidJs = category.registerLibrary<SolidStore>({
  id: 'solid-js',
  displayName: 'Solid Signals',
  packageName: 'solid-js',
  githubUrl: 'https://github.com/solidjs/solid',
  description: 'Fine-grained reactivity primitive from Solid.js for building performant UIs',

  setup: {
    createStore: () => {
      // Basic counter signal
      const [getCounter, setCounter] = createSignal(0);

      // Nested object signal
      const [getNested, setNested] = createSignal({ nested: { value: 0 } });

      // Users array signal
      const [getUsers, setUsers] = createSignal<Array<{ id: number; name: string }>>([]);

      // Computed value (derived from counter)
      const doubled = createMemo(() => getCounter() * 2);

      // Form signals
      const [getForm, setForm] = createSignal({ name: '', email: '', age: 0 });
      const [getComplexForm, setComplexForm] = createSignal({ profile: { name: '' }, tags: [] as string[] });

      // Large array signal
      const [getLargeArray, setLargeArray] = createSignal<number[]>([]);

      return {
        getCounter,
        setCounter,
        getNested,
        setNested,
        getUsers,
        setUsers,
        doubled,
        getForm,
        setForm,
        getComplexForm,
        setComplexForm,
        getLargeArray,
        setLargeArray,
      };
    },
  },

  features: ['computed-native', 'signals', 'fine-grained'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

// ========== BASIC READ TESTS ==========

solidJs.implement(tests.singleRead, (ctx) => {
  const value = ctx.store.getCounter();
});

solidJs.implement(tests.moderateRead, (ctx) => {
  for (let i = 0; i < 100; i++) {
    const value = ctx.store.getCounter();
  }
});

solidJs.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.getCounter();
  }
});

// ========== BASIC WRITE TESTS ==========

solidJs.implement(tests.singleWrite, (ctx) => {
  ctx.store.setCounter((prev) => prev + 1);
});

solidJs.implement(tests.batchWrite, (ctx) => {
  for (let i = 0; i < 10; i++) {
    ctx.store.setCounter((prev) => prev + 1);
  }
});

solidJs.implement(tests.burstWrite, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.setCounter((prev) => prev + 1);
  }
});

solidJs.implement(tests.heavyWrite, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    ctx.store.setCounter((prev) => prev + 1);
  }
});

// ========== ADVANCED OPERATIONS ==========

solidJs.implement(tests.nestedUpdate, (ctx) => {
  ctx.store.setNested((prev) => ({
    ...prev,
    nested: {
      ...prev.nested,
      value: prev.nested.value + 1,
    },
  }));
});

solidJs.implement(tests.arrayPush, (ctx) => {
  ctx.store.setUsers((prev) => [
    ...prev,
    { id: prev.length + 1, name: `User ${prev.length + 1}` },
  ]);
});

solidJs.implement(tests.arrayUpdate, (ctx) => {
  // First ensure there's at least one user
  const users = ctx.store.getUsers();
  if (users.length === 0) {
    ctx.store.setUsers([{ id: 1, name: 'User 1' }]);
  }
  // Then update the first user
  ctx.store.setUsers((prev) => [
    { ...prev[0], name: 'Updated User' },
    ...prev.slice(1),
  ]);
});

solidJs.implement(tests.computedValue, (ctx) => {
  const value = ctx.store.doubled();
});

// ========== ASYNC OPERATIONS ==========

solidJs.implement(tests.sequentialAsync, async (ctx) => {
  // Sequential: await each operation
  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.setCounter((prev) => prev + 1);

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.setCounter((prev) => prev + 1);

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.setCounter((prev) => prev + 1);
});

solidJs.implement(tests.concurrentAsync, async (ctx) => {
  // Concurrent: Promise.all
  await Promise.all([
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.setCounter((prev) => prev + 1);
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.setCounter((prev) => prev + 1);
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.setCounter((prev) => prev + 1);
    }),
  ]);
});

// ========== REAL-WORLD SCENARIOS ==========

solidJs.implement(tests.simpleForm, (ctx) => {
  ctx.store.setForm((prev) => ({
    ...prev,
    name: 'John Doe',
  }));
  ctx.store.setForm((prev) => ({
    ...prev,
    email: 'john@example.com',
  }));
  ctx.store.setForm((prev) => ({
    ...prev,
    age: 30,
  }));
});

solidJs.implement(tests.complexForm, (ctx) => {
  // Update nested object
  ctx.store.setComplexForm((prev) => ({
    ...prev,
    profile: {
      ...prev.profile,
      name: 'John Doe',
    },
  }));
  // Update array
  ctx.store.setComplexForm((prev) => ({
    ...prev,
    tags: [...prev.tags, 'developer', 'react'],
  }));
});

solidJs.implement(tests.cacheInvalidation, (ctx) => {
  // Update source data
  ctx.store.setCounter((prev) => prev + 1);
  // Access computed value (should reflect new value)
  const doubled = ctx.store.doubled();
});

solidJs.implement(tests.memoryUsage, (ctx) => {
  const cleanupFns: Array<() => void> = [];

  // Create 100 effects (subscribers)
  for (let i = 0; i < 100; i++) {
    createEffect(() => {
      // Subscribe to counter changes
      ctx.store.getCounter();

      // Register cleanup
      onCleanup(() => {
        // Cleanup callback
      });
    });
  }

  // Note: In Solid.js, effects are automatically cleaned up when the reactive scope is disposed
  // Since we're in a benchmark context, we don't have a component lifecycle to trigger cleanup
  // In a real app, this would happen automatically when the component unmounts
});

// ========== PERFORMANCE STRESS TESTS ==========

solidJs.implement(tests.extremeRead, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    const value = ctx.store.getCounter();
  }
});

solidJs.implement(tests.extremeWrite, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    ctx.store.setCounter((prev) => prev + 1);
  }
});

solidJs.implement(tests.largeArray, (ctx) => {
  // Initialize with 1000 items
  const items = Array.from({ length: 1000 }, (_, i) => i);
  ctx.store.setLargeArray(items);

  // Read the array
  const array = ctx.store.getLargeArray();

  // Update one item
  ctx.store.setLargeArray((prev) => {
    const newArray = [...prev];
    newArray[500] = 999;
    return newArray;
  });
});
