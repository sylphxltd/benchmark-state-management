/**
 * Zen Library Implementation
 *
 * Zen is a minimal and fast state management library with signal-based reactivity.
 * Uses zen() to create signals, get() to read, and set() to write values.
 */

import { zen, get, set, onNotify } from '@sylphx/zen';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface ZenStore {
  counter: ReturnType<typeof zen<number>>;
  nested: ReturnType<typeof zen<{ nested: { value: number } }>>;
  users: ReturnType<typeof zen<Array<{ id: number; name: string }>>>;
  doubled: ReturnType<typeof zen<number>>;
  form: ReturnType<typeof zen<{ name: string; email: string; age: number }>>;
  complexForm: ReturnType<typeof zen<{ profile: { name: string }; tags: string[] }>>;
  largeArray: ReturnType<typeof zen<number[]>>;
}

// ============================================================================
// Register Library
// ============================================================================

const zenLib = category.registerLibrary<ZenStore>({
  id: 'zen',
  displayName: 'Zen',
  packageName: '@sylphx/zen',
  githubUrl: 'https://github.com/SylphxAI/zen',
  description: 'Minimal and fast state management with signal-based reactivity',

  setup: {
    createStore: () => {
      const counter = zen(0);
      const nested = zen({ nested: { value: 0 } });
      const users = zen<Array<{ id: number; name: string }>>([]);

      // Computed signal (derived value)
      const doubled = zen(() => get(counter) * 2);

      const form = zen({ name: '', email: '', age: 0 });
      const complexForm = zen({ profile: { name: '' }, tags: [] as string[] });
      const largeArray = zen<number[]>([]);

      return {
        counter,
        nested,
        users,
        doubled,
        form,
        complexForm,
        largeArray,
      };
    },
  },

  features: ['signals', 'minimal', 'computed-native'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

// ========== BASIC READ TESTS ==========

zenLib.implement(tests.singleRead, (ctx) => {
  const value = get(ctx.store.counter);
});

zenLib.implement(tests.moderateRead, (ctx) => {
  for (let i = 0; i < 100; i++) {
    const value = get(ctx.store.counter);
  }
});

zenLib.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = get(ctx.store.counter);
  }
});

// ========== BASIC WRITE TESTS ==========

zenLib.implement(tests.singleWrite, (ctx) => {
  set(ctx.store.counter, (prev) => prev + 1);
});

zenLib.implement(tests.batchWrite, (ctx) => {
  for (let i = 0; i < 10; i++) {
    set(ctx.store.counter, (prev) => prev + 1);
  }
});

zenLib.implement(tests.burstWrite, (ctx) => {
  for (let i = 0; i < 100; i++) {
    set(ctx.store.counter, (prev) => prev + 1);
  }
});

zenLib.implement(tests.heavyWrite, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    set(ctx.store.counter, (prev) => prev + 1);
  }
});

// ========== ADVANCED OPERATIONS ==========

zenLib.implement(tests.nestedUpdate, (ctx) => {
  set(ctx.store.nested, (prev) => ({
    ...prev,
    nested: {
      ...prev.nested,
      value: prev.nested.value + 1,
    },
  }));
});

zenLib.implement(tests.arrayPush, (ctx) => {
  set(ctx.store.users, (prev) => [
    ...prev,
    { id: prev.length + 1, name: `User ${prev.length + 1}` },
  ]);
});

zenLib.implement(tests.arrayUpdate, (ctx) => {
  // First ensure there's at least one user
  const users = get(ctx.store.users);
  if (users.length === 0) {
    set(ctx.store.users, [{ id: 1, name: 'User 1' }]);
  }
  // Then update the first user
  set(ctx.store.users, (prev) => [
    { ...prev[0], name: 'Updated User' },
    ...prev.slice(1),
  ]);
});

zenLib.implement(tests.computedValue, (ctx) => {
  const value = get(ctx.store.doubled);
});

// ========== ASYNC OPERATIONS ==========

zenLib.implement(tests.sequentialAsync, async (ctx) => {
  // Sequential: await each operation
  await new Promise((resolve) => setTimeout(resolve, 1));
  set(ctx.store.counter, (prev) => prev + 1);

  await new Promise((resolve) => setTimeout(resolve, 1));
  set(ctx.store.counter, (prev) => prev + 1);

  await new Promise((resolve) => setTimeout(resolve, 1));
  set(ctx.store.counter, (prev) => prev + 1);
});

zenLib.implement(tests.concurrentAsync, async (ctx) => {
  // Concurrent: Promise.all
  await Promise.all([
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      set(ctx.store.counter, (prev) => prev + 1);
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      set(ctx.store.counter, (prev) => prev + 1);
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      set(ctx.store.counter, (prev) => prev + 1);
    }),
  ]);
});

// ========== REAL-WORLD SCENARIOS ==========

zenLib.implement(tests.simpleForm, (ctx) => {
  set(ctx.store.form, (prev) => ({
    ...prev,
    name: 'John Doe',
  }));
  set(ctx.store.form, (prev) => ({
    ...prev,
    email: 'john@example.com',
  }));
  set(ctx.store.form, (prev) => ({
    ...prev,
    age: 30,
  }));
});

zenLib.implement(tests.complexForm, (ctx) => {
  // Update nested object
  set(ctx.store.complexForm, (prev) => ({
    ...prev,
    profile: {
      ...prev.profile,
      name: 'John Doe',
    },
  }));
  // Update array
  set(ctx.store.complexForm, (prev) => ({
    ...prev,
    tags: [...prev.tags, 'developer', 'react'],
  }));
});

zenLib.implement(tests.cacheInvalidation, (ctx) => {
  // Update source data
  set(ctx.store.counter, (prev) => prev + 1);
  // Access computed value (should reflect new value)
  const doubled = get(ctx.store.doubled);
});

zenLib.implement(tests.memoryUsage, (ctx) => {
  const unsubscribers: Array<() => void> = [];

  // Create 100 subscribers
  for (let i = 0; i < 100; i++) {
    // Subscribe to signal changes using onNotify
    const unsub = onNotify(ctx.store.counter, () => {
      // Subscriber callback
    });
    unsubscribers.push(unsub);
  }

  // Cleanup all subscribers
  unsubscribers.forEach((unsub) => unsub());
});

// ========== PERFORMANCE STRESS TESTS ==========

zenLib.implement(tests.extremeRead, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    const value = get(ctx.store.counter);
  }
});

zenLib.implement(tests.extremeWrite, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    set(ctx.store.counter, (prev) => prev + 1);
  }
});

zenLib.implement(tests.largeArray, (ctx) => {
  // Initialize with 1000 items
  const items = Array.from({ length: 1000 }, (_, i) => i);
  set(ctx.store.largeArray, items);

  // Read the array
  const array = get(ctx.store.largeArray);

  // Update one item
  set(ctx.store.largeArray, (prev) => {
    const newArray = [...prev];
    newArray[500] = 999;
    return newArray;
  });
});
