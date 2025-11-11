/**
 * Valtio Library Implementation
 *
 * Example of the new API:
 * - Library registration
 * - Test implementation using object references (no strings!)
 */

import { proxy, subscribe } from 'valtio';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface ValtioStore {
  counter: number;
  nested: { nested: { value: number } };
  users: Array<{ id: number; name: string }>;
  form: { name: string; email: string; age: number };
  complexForm: { profile: { name: string }; tags: string[] };
  largeArray: number[];
  get doubled(): number; // Computed value using getter
}

// ============================================================================
// Register Library
// ============================================================================

const valtio = category.registerLibrary<ValtioStore>({
  id: 'valtio',
  displayName: 'Valtio',
  packageName: 'valtio',
  githubUrl: 'https://github.com/pmndrs/valtio',
  description: 'Proxy-based state management library that makes state usage simple',

  setup: {
    createStore: () => {
      const store = proxy({
        counter: 0,
        nested: { nested: { value: 0 } },
        users: [] as Array<{ id: number; name: string }>,
        form: { name: '', email: '', age: 0 },
        complexForm: { profile: { name: '' }, tags: [] as string[] },
        largeArray: [] as number[],
        // Computed value using getter
        get doubled() {
          return this.counter * 2;
        },
      });

      return store as ValtioStore;
    },
  },

  features: ['proxy-based', 'computed-native'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

// ========== BASIC READ TESTS ==========

valtio.implement(tests.singleRead, (ctx) => {
  const value = ctx.store.counter;
});

valtio.implement(tests.moderateRead, (ctx) => {
  for (let i = 0; i < 100; i++) {
    const value = ctx.store.counter;
  }
});

valtio.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.counter;
  }
});

// ========== BASIC WRITE TESTS ==========

valtio.implement(tests.singleWrite, (ctx) => {
  ctx.store.counter += 1;
});

valtio.implement(tests.batchWrite, (ctx) => {
  for (let i = 0; i < 10; i++) {
    ctx.store.counter += 1;
  }
});

valtio.implement(tests.burstWrite, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.counter += 1;
  }
});

valtio.implement(tests.heavyWrite, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    ctx.store.counter += 1;
  }
});

// ========== ADVANCED OPERATIONS ==========

valtio.implement(tests.nestedUpdate, (ctx) => {
  ctx.store.nested.nested.value += 1;
});

valtio.implement(tests.arrayPush, (ctx) => {
  ctx.store.users.push({
    id: ctx.store.users.length + 1,
    name: `User ${ctx.store.users.length + 1}`,
  });
});

valtio.implement(tests.arrayUpdate, (ctx) => {
  // First ensure there's at least one user
  if (ctx.store.users.length === 0) {
    ctx.store.users.push({ id: 1, name: 'User 1' });
  }
  // Then update the first user
  ctx.store.users[0].name = 'Updated User';
});

valtio.implement(tests.computedValue, (ctx) => {
  const value = ctx.store.doubled;
});

// ========== ASYNC OPERATIONS ==========

valtio.implement(tests.sequentialAsync, async (ctx) => {
  // Sequential: await each operation
  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.counter += 1;

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.counter += 1;

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.counter += 1;
});

valtio.implement(tests.concurrentAsync, async (ctx) => {
  // Concurrent: Promise.all
  await Promise.all([
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.counter += 1;
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.counter += 1;
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.counter += 1;
    }),
  ]);
});

// ========== REAL-WORLD SCENARIOS ==========

valtio.implement(tests.simpleForm, (ctx) => {
  ctx.store.form.name = 'John Doe';
  ctx.store.form.email = 'john@example.com';
  ctx.store.form.age = 30;
});

valtio.implement(tests.complexForm, (ctx) => {
  // Update nested object
  ctx.store.complexForm.profile.name = 'John Doe';
  // Update array
  ctx.store.complexForm.tags.push('developer', 'react');
});

valtio.implement(tests.cacheInvalidation, (ctx) => {
  // Update source data
  ctx.store.counter += 1;
  // Access computed value (should reflect new value)
  const doubled = ctx.store.doubled;
});

valtio.implement(tests.memoryUsage, (ctx) => {
  const unsubscribers: Array<() => void> = [];

  // Create 100 subscribers
  for (let i = 0; i < 100; i++) {
    const unsub = subscribe(ctx.store, () => {
      // Subscriber callback
    });
    unsubscribers.push(unsub);
  }

  // Cleanup all subscribers
  unsubscribers.forEach((unsub) => unsub());
});

// ========== PERFORMANCE STRESS TESTS ==========

valtio.implement(tests.extremeRead, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    const value = ctx.store.counter;
  }
});

valtio.implement(tests.extremeWrite, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    ctx.store.counter += 1;
  }
});

valtio.implement(tests.largeArray, (ctx) => {
  // Initialize with 1000 items
  const items = Array.from({ length: 1000 }, (_, i) => i);
  ctx.store.largeArray = items;

  // Read the array
  const array = ctx.store.largeArray;

  // Update one item
  ctx.store.largeArray[500] = 999;
});
