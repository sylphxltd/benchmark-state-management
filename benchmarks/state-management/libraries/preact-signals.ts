/**
 * Preact Signals Library Implementation
 *
 * Example of the new API:
 * - Library registration
 * - Test implementation using object references (no strings!)
 */

import { signal, computed, effect } from '@preact/signals-core';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface SignalsStore {
  counterSignal: ReturnType<typeof signal<number>>;
  nestedSignal: ReturnType<typeof signal<{ nested: { value: number } }>>;
  usersSignal: ReturnType<typeof signal<Array<{ id: number; name: string }>>>;
  doubledSignal: ReturnType<typeof computed<number>>;
  formSignal: ReturnType<typeof signal<{ name: string; email: string; age: number }>>;
  complexFormSignal: ReturnType<typeof signal<{ profile: { name: string }; tags: string[] }>>;
  largeArraySignal: ReturnType<typeof signal<number[]>>;
}

// ============================================================================
// Register Library
// ============================================================================

const preactSignals = category.registerLibrary<SignalsStore>({
  id: 'preact-signals',
  displayName: 'Preact Signals',
  packageName: '@preact/signals',
  githubUrl: 'https://github.com/preactjs/signals',
  description: 'Fast and reactive signals for Preact and React with automatic dependency tracking',

  setup: {
    createStore: () => {
      const counterSignal = signal(0);
      const nestedSignal = signal({ nested: { value: 0 } });
      const usersSignal = signal<Array<{ id: number; name: string }>>([]);

      // Computed signal (derived value)
      const doubledSignal = computed(() => counterSignal.value * 2);

      const formSignal = signal({ name: '', email: '', age: 0 });
      const complexFormSignal = signal({ profile: { name: '' }, tags: [] as string[] });
      const largeArraySignal = signal<number[]>([]);

      return {
        counterSignal,
        nestedSignal,
        usersSignal,
        doubledSignal,
        formSignal,
        complexFormSignal,
        largeArraySignal,
      };
    },
  },

  features: ['signals', 'computed-native'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

// ========== BASIC READ TESTS ==========

preactSignals.implement(tests.singleRead, (ctx) => {
  const value = ctx.store.counterSignal.value;
});

preactSignals.implement(tests.moderateRead, (ctx) => {
  for (let i = 0; i < 100; i++) {
    const value = ctx.store.counterSignal.value;
  }
});

preactSignals.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.counterSignal.value;
  }
});

// ========== BASIC WRITE TESTS ==========

preactSignals.implement(tests.singleWrite, (ctx) => {
  ctx.store.counterSignal.value += 1;
});

preactSignals.implement(tests.batchWrite, (ctx) => {
  for (let i = 0; i < 10; i++) {
    ctx.store.counterSignal.value += 1;
  }
});

preactSignals.implement(tests.burstWrite, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.counterSignal.value += 1;
  }
});

preactSignals.implement(tests.heavyWrite, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    ctx.store.counterSignal.value += 1;
  }
});

// ========== ADVANCED OPERATIONS ==========

preactSignals.implement(tests.nestedUpdate, (ctx) => {
  const prev = ctx.store.nestedSignal.value;
  ctx.store.nestedSignal.value = {
    ...prev,
    nested: {
      ...prev.nested,
      value: prev.nested.value + 1,
    },
  };
});

preactSignals.implement(tests.arrayPush, (ctx) => {
  const prev = ctx.store.usersSignal.value;
  ctx.store.usersSignal.value = [
    ...prev,
    { id: prev.length + 1, name: `User ${prev.length + 1}` },
  ];
});

preactSignals.implement(tests.arrayUpdate, (ctx) => {
  // First ensure there's at least one user
  const users = ctx.store.usersSignal.value;
  if (users.length === 0) {
    ctx.store.usersSignal.value = [{ id: 1, name: 'User 1' }];
  }
  // Then update the first user
  const prev = ctx.store.usersSignal.value;
  ctx.store.usersSignal.value = [
    { ...prev[0], name: 'Updated User' },
    ...prev.slice(1),
  ];
});

preactSignals.implement(tests.computedValue, (ctx) => {
  const value = ctx.store.doubledSignal.value;
});

// ========== ASYNC OPERATIONS ==========

preactSignals.implement(tests.sequentialAsync, async (ctx) => {
  // Sequential: await each operation
  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.counterSignal.value += 1;

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.counterSignal.value += 1;

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.counterSignal.value += 1;
});

preactSignals.implement(tests.concurrentAsync, async (ctx) => {
  // Concurrent: Promise.all
  await Promise.all([
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.counterSignal.value += 1;
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.counterSignal.value += 1;
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.counterSignal.value += 1;
    }),
  ]);
});

// ========== REAL-WORLD SCENARIOS ==========

preactSignals.implement(tests.simpleForm, (ctx) => {
  const prev1 = ctx.store.formSignal.value;
  ctx.store.formSignal.value = {
    ...prev1,
    name: 'John Doe',
  };
  const prev2 = ctx.store.formSignal.value;
  ctx.store.formSignal.value = {
    ...prev2,
    email: 'john@example.com',
  };
  const prev3 = ctx.store.formSignal.value;
  ctx.store.formSignal.value = {
    ...prev3,
    age: 30,
  };
});

preactSignals.implement(tests.complexForm, (ctx) => {
  // Update nested object
  const prev1 = ctx.store.complexFormSignal.value;
  ctx.store.complexFormSignal.value = {
    ...prev1,
    profile: {
      ...prev1.profile,
      name: 'John Doe',
    },
  };
  // Update array
  const prev2 = ctx.store.complexFormSignal.value;
  ctx.store.complexFormSignal.value = {
    ...prev2,
    tags: [...prev2.tags, 'developer', 'react'],
  };
});

preactSignals.implement(tests.cacheInvalidation, (ctx) => {
  // Update source data
  ctx.store.counterSignal.value += 1;
  // Access computed value (should reflect new value)
  const doubled = ctx.store.doubledSignal.value;
});

preactSignals.implement(tests.memoryUsage, (ctx) => {
  const disposers: Array<() => void> = [];

  // Create 100 subscribers using effect
  for (let i = 0; i < 100; i++) {
    const dispose = effect(() => {
      // Read signal to create subscription
      ctx.store.counterSignal.value;
    });
    disposers.push(dispose);
  }

  // Cleanup all subscribers
  disposers.forEach((dispose) => dispose());
});

// ========== PERFORMANCE STRESS TESTS ==========

preactSignals.implement(tests.extremeRead, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    const value = ctx.store.counterSignal.value;
  }
});

preactSignals.implement(tests.extremeWrite, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    ctx.store.counterSignal.value += 1;
  }
});

preactSignals.implement(tests.largeArray, (ctx) => {
  // Initialize with 1000 items
  const items = Array.from({ length: 1000 }, (_, i) => i);
  ctx.store.largeArraySignal.value = items;

  // Read the array
  const array = ctx.store.largeArraySignal.value;

  // Update one item
  const prev = ctx.store.largeArraySignal.value;
  const newArray = [...prev];
  newArray[500] = 999;
  ctx.store.largeArraySignal.value = newArray;
});
