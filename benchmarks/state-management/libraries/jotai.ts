/**
 * Jotai Library Implementation
 *
 * Example of the new API:
 * - Library registration
 * - Test implementation using object references (no strings!)
 */

import { atom, createStore } from 'jotai';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface JotaiStore {
  store: ReturnType<typeof createStore>;
  counterAtom: ReturnType<typeof atom<number>>;
  nestedAtom: ReturnType<typeof atom<{ nested: { value: number } }>>;
  usersAtom: ReturnType<typeof atom<Array<{ id: number; name: string }>>>;
  doubledAtom: ReturnType<typeof atom<number>>;
  formAtom: ReturnType<typeof atom<{ name: string; email: string; age: number }>>;
  complexFormAtom: ReturnType<typeof atom<{ profile: { name: string }; tags: string[] }>>;
  largeArrayAtom: ReturnType<typeof atom<number[]>>;
}

// ============================================================================
// Register Library
// ============================================================================

const jotai = category.registerLibrary<JotaiStore>({
  id: 'jotai',
  displayName: 'Jotai',
  packageName: 'jotai',
  githubUrl: 'https://github.com/pmndrs/jotai',
  description: 'Primitive and flexible state management for React',

  setup: {
    createStore: () => {
      const store = createStore();
      const counterAtom = atom(0);
      const nestedAtom = atom({ nested: { value: 0 } });
      const usersAtom = atom<Array<{ id: number; name: string }>>([]);

      // Computed atom (derived value)
      const doubledAtom = atom((get) => get(counterAtom) * 2);

      const formAtom = atom({ name: '', email: '', age: 0 });
      const complexFormAtom = atom({ profile: { name: '' }, tags: [] as string[] });
      const largeArrayAtom = atom<number[]>([]);

      return {
        store,
        counterAtom,
        nestedAtom,
        usersAtom,
        doubledAtom,
        formAtom,
        complexFormAtom,
        largeArrayAtom,
      };
    },
  },

  features: ['computed-native', 'async-reactive'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

// ========== BASIC READ TESTS ==========

jotai.implement(tests.singleRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  const value = store.get(counterAtom);
});

jotai.implement(tests.moderateRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.get(counterAtom);
});

jotai.implement(tests.highFrequencyRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.get(counterAtom);
});

// ========== BASIC WRITE TESTS ==========

jotai.implement(tests.singleWrite, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
});

jotai.implement(tests.batchWrite, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
});

jotai.implement(tests.burstWrite, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
});

jotai.implement(tests.heavyWrite, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
});

// ========== ADVANCED OPERATIONS ==========

jotai.implement(tests.nestedUpdate, (ctx) => {
  const { store, nestedAtom } = ctx.store;
  store.set(nestedAtom, (prev) => ({
    ...prev,
    nested: {
      ...prev.nested,
      value: prev.nested.value + 1,
    },
  }));
});

jotai.implement(tests.arrayPush, (ctx) => {
  const { store, usersAtom } = ctx.store;
  store.set(usersAtom, (prev) => [
    ...prev,
    { id: prev.length + 1, name: `User ${prev.length + 1}` },
  ]);
});

jotai.implement(tests.arrayUpdate, (ctx) => {
  const { store, usersAtom } = ctx.store;
  // First ensure there's at least one user
  const users = store.get(usersAtom);
  if (users.length === 0) {
    store.set(usersAtom, [{ id: 1, name: 'User 1' }]);
  }
  // Then update the first user
  store.set(usersAtom, (prev) => [
    { ...prev[0], name: 'Updated User' },
    ...prev.slice(1),
  ]);
});

jotai.implement(tests.computedValue, (ctx) => {
  const { store, doubledAtom } = ctx.store;
  const value = store.get(doubledAtom);
});

// ========== ASYNC OPERATIONS ==========

jotai.implement(tests.asyncThroughput, async (ctx) => {
  const { store, counterAtom } = ctx.store;

  // Simulate rapid async operations
  for (let i = 0; i < 20; i++) {
    await Promise.resolve();
    store.set(counterAtom, i);
  }
});

jotai.implement(tests.concurrentUpdates, async (ctx) => {
  const { store, counterAtom } = ctx.store;

  // Test concurrent async updates
  const operations = [];

  for (let i = 0; i < 50; i++) {
    operations.push(
      Promise.resolve().then(() => {
        store.set(counterAtom, (prev) => prev + 1);
      })
    );
  }

  await Promise.all(operations);
});

// ========== REAL-WORLD SCENARIOS ==========

jotai.implement(tests.simpleForm, (ctx) => {
  const { store, formAtom } = ctx.store;
  store.set(formAtom, (prev) => ({
    ...prev,
    name: 'John Doe',
  }));
  store.set(formAtom, (prev) => ({
    ...prev,
    email: 'john@example.com',
  }));
  store.set(formAtom, (prev) => ({
    ...prev,
    age: 30,
  }));
});

jotai.implement(tests.complexForm, (ctx) => {
  const { store, complexFormAtom } = ctx.store;
  // Update nested object
  store.set(complexFormAtom, (prev) => ({
    ...prev,
    profile: {
      ...prev.profile,
      name: 'John Doe',
    },
  }));
  // Update array
  store.set(complexFormAtom, (prev) => ({
    ...prev,
    tags: [...prev.tags, 'developer', 'react'],
  }));
});

jotai.implement(tests.cacheInvalidation, (ctx) => {
  const { store, counterAtom, doubledAtom } = ctx.store;
  // Update source data
  store.set(counterAtom, (prev) => prev + 1);
  // Access computed value (should reflect new value)
  const doubled = store.get(doubledAtom);
});

jotai.implement(tests.memoryUsage, (ctx) => {
  const { store, counterAtom } = ctx.store;
  const unsubscribers: Array<() => void> = [];

  // Create 100 subscribers
  for (let i = 0; i < 100; i++) {
    const unsub = store.sub(counterAtom, () => {
      // Subscriber callback
    });
    unsubscribers.push(unsub);
  }

  // Cleanup all subscribers
  unsubscribers.forEach((unsub) => unsub());
});

// ========== PERFORMANCE STRESS TESTS ==========

jotai.implement(tests.extremeRead, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.get(counterAtom);
});

jotai.implement(tests.extremeWrite, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
});

jotai.implement(tests.largeArray, (ctx) => {
  const { store, largeArrayAtom } = ctx.store;
  // Initialize with 1000 items
  const items = Array.from({ length: 1000 }, (_, i) => i);
  store.set(largeArrayAtom, items);

  // Read the array
  const array = store.get(largeArrayAtom);

  // Update one item
  store.set(largeArrayAtom, (prev) => {
    const newArray = [...prev];
    newArray[500] = 999;
    return newArray;
  });
});

// ========== REACTIVITY PATTERNS ==========

jotai.implement(tests.diamondPattern, (ctx) => {
  const { store, counterAtom, doubledAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
  const result = store.get(doubledAtom);
});

jotai.implement(tests.deepDiamondPattern, (ctx) => {
  const { store, counterAtom, doubledAtom } = ctx.store;
  for (let i = 0; i < 5; i++) {
    store.set(counterAtom, (prev) => prev + 1);
  }
  const result = store.get(doubledAtom);
});

jotai.implement(tests.deepChain, (ctx) => {
  const { store, counterAtom } = ctx.store;
  for (let i = 0; i < 10; i++) {
    store.set(counterAtom, (prev) => prev * 2);
  }
  const result = store.get(counterAtom);
});

jotai.implement(tests.veryDeepChain, (ctx) => {
  const { store, counterAtom } = ctx.store;
  for (let i = 0; i < 100; i++) {
    store.set(counterAtom, (prev) => prev * 1.01);
  }
  const result = store.get(counterAtom);
});

jotai.implement(tests.wideFanout, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
  for (let i = 0; i < 100; i++) {
    const v = store.get(counterAtom);
  }
});

jotai.implement(tests.massiveFanout, (ctx) => {
  const { store, counterAtom } = ctx.store;
  store.set(counterAtom, (prev) => prev + 1);
  for (let i = 0; i < 1000; i++) {
    const v = store.get(counterAtom);
  }
});

jotai.implement(tests.dynamicDependencies, (ctx) => {
  const { store, counterAtom } = ctx.store;
  const toggle = store.get(counterAtom) % 2 === 0;
  store.set(counterAtom, (prev) => prev + (toggle ? 1 : 2));
  const result = store.get(counterAtom);
});

jotai.implement(tests.repeatedDiamonds, (ctx) => {
  const { store, counterAtom, doubledAtom } = ctx.store;
  for (let i = 0; i < 5; i++) {
    store.set(counterAtom, (prev) => prev + 1);
    const a = store.get(counterAtom);
    const b = store.get(doubledAtom);
  }
});
