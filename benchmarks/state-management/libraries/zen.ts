/**
 * Zen Library Implementation
 *
 * Zen 3.0 is an ultra-optimized reactive state library with auto-tracking.
 * Uses zen() to create signals, .value to read/write values.
 */

import { zen, computed, subscribe } from '@sylphx/zen';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface ZenStore {
  counter: ReturnType<typeof zen<number>>;
  nested: ReturnType<typeof zen<{ nested: { value: number } }>>;
  users: ReturnType<typeof zen<Array<{ id: number; name: string }>>>;
  doubled: ReturnType<typeof computed<number>>;
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
  description: 'Ultra-optimized reactive state with auto-tracking',

  setup: {
    createStore: () => {
      const counter = zen(0);
      const nested = zen({ nested: { value: 0 } });
      const users = zen<Array<{ id: number; name: string }>>([]);

      // Computed signal with auto-tracking
      const doubled = computed(() => counter.value * 2);

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

// ========== BASIC READ TESTS ==========

zenLib.implement(tests.singleRead, (ctx) => {
  const value = ctx.store.counter.value;
});

zenLib.implement(tests.moderateRead, (ctx) => {
  ctx.store.counter.value;
});

zenLib.implement(tests.highFrequencyRead, (ctx) => {
  ctx.store.counter.value;
});

// ========== BASIC WRITE TESTS ==========

zenLib.implement(tests.singleWrite, (ctx) => {
  ctx.store.counter.value++;
});

zenLib.implement(tests.batchWrite, (ctx) => {
  ctx.store.counter.value++;
});

zenLib.implement(tests.burstWrite, (ctx) => {
  ctx.store.counter.value++;
});

zenLib.implement(tests.heavyWrite, (ctx) => {
  ctx.store.counter.value++;
});

// ========== ADVANCED OPERATIONS ==========

zenLib.implement(tests.nestedUpdate, (ctx) => {
  const prev = ctx.store.nested.value;
  ctx.store.nested.value = {
    ...prev,
    nested: {
      ...prev.nested,
      value: prev.nested.value + 1,
    },
  };
});

zenLib.implement(tests.arrayPush, (ctx) => {
  const prev = ctx.store.users.value;
  ctx.store.users.value = [
    ...prev,
    { id: prev.length + 1, name: `User ${prev.length + 1}` },
  ];
});

zenLib.implement(tests.arrayUpdate, (ctx) => {
  // First ensure there's at least one user
  if (ctx.store.users.value.length === 0) {
    ctx.store.users.value = [{ id: 1, name: 'User 1' }];
  }
  // Then update the first user
  const prev = ctx.store.users.value;
  ctx.store.users.value = [
    { ...prev[0], name: 'Updated User' },
    ...prev.slice(1),
  ];
});

zenLib.implement(tests.computedValue, (ctx) => {
  const value = ctx.store.doubled.value;
});

// ========== ASYNC OPERATIONS ==========

zenLib.implement(tests.asyncThroughput, async (ctx) => {
  // Simulate rapid async operations (e.g., API calls)
  // Each operation: async work + state update
  for (let i = 0; i < 20; i++) {
    // Microtask (faster than setTimeout, tests library overhead)
    await Promise.resolve();
    ctx.store.counter.value = i;
  }
});

zenLib.implement(tests.concurrentUpdates, async (ctx) => {
  // Test concurrent async updates to different parts of state
  const operations = [];

  for (let i = 0; i < 50; i++) {
    operations.push(
      Promise.resolve().then(() => {
        ctx.store.counter.value++;
      })
    );
  }

  await Promise.all(operations);
});

// ========== REAL-WORLD SCENARIOS ==========

zenLib.implement(tests.simpleForm, (ctx) => {
  ctx.store.form.value = {
    ...ctx.store.form.value,
    name: 'John Doe',
  };
  ctx.store.form.value = {
    ...ctx.store.form.value,
    email: 'john@example.com',
  };
  ctx.store.form.value = {
    ...ctx.store.form.value,
    age: 30,
  };
});

zenLib.implement(tests.complexForm, (ctx) => {
  // Update nested object
  ctx.store.complexForm.value = {
    ...ctx.store.complexForm.value,
    profile: {
      ...ctx.store.complexForm.value.profile,
      name: 'John Doe',
    },
  };
  // Update array
  ctx.store.complexForm.value = {
    ...ctx.store.complexForm.value,
    tags: [...ctx.store.complexForm.value.tags, 'developer', 'react'],
  };
});

zenLib.implement(tests.cacheInvalidation, (ctx) => {
  // Update source data
  ctx.store.counter.value++;
  // Access computed value (should reflect new value)
  const doubled = ctx.store.doubled.value;
});

zenLib.implement(tests.memoryUsage, (ctx) => {
  const unsubscribers: Array<() => void> = [];

  // Create 100 subscribers
  for (let i = 0; i < 100; i++) {
    // Subscribe to signal changes
    const unsub = subscribe(ctx.store.counter, () => {
      // Subscriber callback
    });
    unsubscribers.push(unsub);
  }

  // Cleanup all subscribers
  unsubscribers.forEach((unsub) => unsub());
});

// ========== PERFORMANCE STRESS TESTS ==========

zenLib.implement(tests.extremeRead, (ctx) => {
  ctx.store.counter.value;
});

zenLib.implement(tests.extremeWrite, (ctx) => {
  ctx.store.counter.value++;
});

zenLib.implement(tests.largeArray, (ctx) => {
  // Initialize with 1000 items
  const items = Array.from({ length: 1000 }, (_, i) => i);
  ctx.store.largeArray.value = items;

  // Read the array
  const array = ctx.store.largeArray.value;

  // Update one item
  const prev = ctx.store.largeArray.value;
  const newArray = [...prev];
  newArray[500] = 999;
  ctx.store.largeArray.value = newArray;
});

// ========== REACTIVITY PATTERNS ==========

zenLib.implement(tests.diamondPattern, (ctx) => {
  ctx.store.counter.value++;
  const result = ctx.store.doubled.value;
});

zenLib.implement(tests.deepDiamondPattern, (ctx) => {
  for (let i = 0; i < 5; i++) {
    ctx.store.counter.value++;
  }
  const result = ctx.store.doubled.value;
});

zenLib.implement(tests.deepChain, (ctx) => {
  for (let i = 0; i < 10; i++) {
    ctx.store.counter.value *= 2;
  }
  const result = ctx.store.counter.value;
});

zenLib.implement(tests.veryDeepChain, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.counter.value *= 1.01;
  }
  const result = ctx.store.counter.value;
});

zenLib.implement(tests.wideFanout, (ctx) => {
  ctx.store.counter.value++;
  for (let i = 0; i < 100; i++) {
    const v = ctx.store.counter.value;
  }
});

zenLib.implement(tests.massiveFanout, (ctx) => {
  ctx.store.counter.value++;
  for (let i = 0; i < 1000; i++) {
    const v = ctx.store.counter.value;
  }
});

zenLib.implement(tests.dynamicDependencies, (ctx) => {
  const toggle = ctx.store.counter.value % 2 === 0;
  ctx.store.counter.value += toggle ? 1 : 2;
  const result = ctx.store.counter.value;
});

zenLib.implement(tests.repeatedDiamonds, (ctx) => {
  for (let i = 0; i < 5; i++) {
    ctx.store.counter.value++;
    const a = ctx.store.counter.value;
    const b = ctx.store.doubled.value;
  }
});
