/**
 * MobX Library Implementation
 *
 * Example of the new API:
 * - Library registration
 * - Test implementation using object references (no strings!)
 */

import { makeAutoObservable, reaction } from 'mobx';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

class CounterStore {
  // Basic counter
  count = 0;

  // Nested object
  nested = { nested: { value: 0 } };

  // Array of users
  users: Array<{ id: number; name: string }> = [];

  // Form states
  form = { name: '', email: '', age: 0 };
  complexForm = { profile: { name: '' }, tags: [] as string[] };

  // Large array
  largeArray: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  // Computed value (derived value)
  get doubled() {
    return this.count * 2;
  }

  // Methods for counter operations
  increment() {
    this.count += 1;
  }

  setCount(value: number) {
    this.count = value;
  }
}

// ============================================================================
// Register Library
// ============================================================================

const mobx = category.registerLibrary<CounterStore>({
  id: 'mobx',
  displayName: 'MobX',
  packageName: 'mobx',
  githubUrl: 'https://github.com/mobxjs/mobx',
  description: 'Simple, scalable state management with transparent reactive programming',

  setup: {
    createStore: () => {
      return new CounterStore();
    },
  },

  features: ['auto-tracking', 'computed'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

// ========== BASIC READ TESTS ==========

mobx.implement(tests.singleRead, (ctx) => {
  const value = ctx.store.count;
});

mobx.implement(tests.moderateRead, (ctx) => {
  for (let i = 0; i < 100; i++) {
    const value = ctx.store.count;
  }
});

mobx.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.count;
  }
});

// ========== BASIC WRITE TESTS ==========

mobx.implement(tests.singleWrite, (ctx) => {
  ctx.store.count += 1;
});

mobx.implement(tests.batchWrite, (ctx) => {
  for (let i = 0; i < 10; i++) {
    ctx.store.count += 1;
  }
});

mobx.implement(tests.burstWrite, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.count += 1;
  }
});

mobx.implement(tests.heavyWrite, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    ctx.store.count += 1;
  }
});

// ========== ADVANCED OPERATIONS ==========

mobx.implement(tests.nestedUpdate, (ctx) => {
  ctx.store.nested.nested.value += 1;
});

mobx.implement(tests.arrayPush, (ctx) => {
  ctx.store.users.push({
    id: ctx.store.users.length + 1,
    name: `User ${ctx.store.users.length + 1}`,
  });
});

mobx.implement(tests.arrayUpdate, (ctx) => {
  // First ensure there's at least one user
  if (ctx.store.users.length === 0) {
    ctx.store.users.push({ id: 1, name: 'User 1' });
  }
  // Then update the first user
  ctx.store.users[0].name = 'Updated User';
});

mobx.implement(tests.computedValue, (ctx) => {
  const value = ctx.store.doubled;
});

// ========== ASYNC OPERATIONS ==========

mobx.implement(tests.sequentialAsync, async (ctx) => {
  // Sequential: await each operation
  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.count += 1;

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.count += 1;

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.count += 1;
});

mobx.implement(tests.concurrentAsync, async (ctx) => {
  // Concurrent: Promise.all
  await Promise.all([
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.count += 1;
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.count += 1;
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.count += 1;
    }),
  ]);
});

// ========== REAL-WORLD SCENARIOS ==========

mobx.implement(tests.simpleForm, (ctx) => {
  ctx.store.form.name = 'John Doe';
  ctx.store.form.email = 'john@example.com';
  ctx.store.form.age = 30;
});

mobx.implement(tests.complexForm, (ctx) => {
  // Update nested object
  ctx.store.complexForm.profile.name = 'John Doe';
  // Update array
  ctx.store.complexForm.tags.push('developer', 'react');
});

mobx.implement(tests.cacheInvalidation, (ctx) => {
  // Update source data
  ctx.store.count += 1;
  // Access computed value (should reflect new value)
  const doubled = ctx.store.doubled;
});

mobx.implement(tests.memoryUsage, (ctx) => {
  const disposers: Array<() => void> = [];

  // Create 100 reactions (MobX's way of subscribing)
  for (let i = 0; i < 100; i++) {
    const disposer = reaction(
      () => ctx.store.count,
      () => {
        // Reaction callback
      }
    );
    disposers.push(disposer);
  }

  // Cleanup all reactions
  disposers.forEach((disposer) => disposer());
});

// ========== PERFORMANCE STRESS TESTS ==========

mobx.implement(tests.extremeRead, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    const value = ctx.store.count;
  }
});

mobx.implement(tests.extremeWrite, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    ctx.store.count += 1;
  }
});

mobx.implement(tests.largeArray, (ctx) => {
  // Initialize with 1000 items
  ctx.store.largeArray = Array.from({ length: 1000 }, (_, i) => i);

  // Read the array
  const array = ctx.store.largeArray;

  // Update one item
  ctx.store.largeArray[500] = 999;
});
