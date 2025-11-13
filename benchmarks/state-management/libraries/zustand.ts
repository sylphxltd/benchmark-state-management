/**
 * Zustand Library Implementation
 *
 * Example of the new API:
 * - Library registration
 * - Test implementation using object references (no strings!)
 */

import { createStore } from 'zustand/vanilla';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface ZustandStore {
  counter: number;
  nested: { nested: { value: number } };
  users: Array<{ id: number; name: string }>;
  doubled: number;
  form: { name: string; email: string; age: number };
  complexForm: { profile: { name: string }; tags: string[] };
  largeArray: number[];
}

// ============================================================================
// Register Library
// ============================================================================

const zustand = category.registerLibrary<ReturnType<typeof createStore<ZustandStore>>>({
  id: 'zustand',
  displayName: 'Zustand',
  packageName: 'zustand',
  githubUrl: 'https://github.com/pmndrs/zustand',
  description: 'A small, fast and scalable state management solution',

  setup: {
    createStore: () => {
      return createStore<ZustandStore>((set, get) => ({
        counter: 0,
        nested: { nested: { value: 0 } },
        users: [],
        doubled: 0,
        form: { name: '', email: '', age: 0 },
        complexForm: { profile: { name: '' }, tags: [] },
        largeArray: [],
      }));
    },
  },

  features: ['selectors', 'middleware'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ✅ No strings! IDE autocomplete works!
// ✅ Type-safe! Wrong test object = compile error!
// ✅ Refactor-safe! Rename symbol = auto update!

// ========== BASIC READ TESTS ==========

zustand.implement(tests.singleRead, (ctx) => {
  const value = ctx.store.getState().counter;
});

zustand.implement(tests.moderateRead, (ctx) => {
  ctx.store.getState().counter;
});

zustand.implement(tests.highFrequencyRead, (ctx) => {
  ctx.store.getState().counter;
});

// ========== BASIC WRITE TESTS ==========

zustand.implement(tests.singleWrite, (ctx) => {
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
});

zustand.implement(tests.batchWrite, (ctx) => {
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
});

zustand.implement(tests.burstWrite, (ctx) => {
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
});

zustand.implement(tests.heavyWrite, (ctx) => {
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
});

// ========== ADVANCED OPERATIONS ==========

zustand.implement(tests.nestedUpdate, (ctx) => {
  ctx.store.setState((state) => ({
    nested: {
      ...state.nested,
      nested: {
        ...state.nested.nested,
        value: state.nested.nested.value + 1,
      },
    },
  }));
});

zustand.implement(tests.arrayPush, (ctx) => {
  ctx.store.setState((state) => ({
    users: [
      ...state.users,
      { id: state.users.length + 1, name: `User ${state.users.length + 1}` },
    ],
  }));
});

zustand.implement(tests.arrayUpdate, (ctx) => {
  const state = ctx.store.getState();
  // First ensure there's at least one user
  if (state.users.length === 0) {
    ctx.store.setState({
      users: [{ id: 1, name: 'User 1' }],
    });
  }
  // Then update the first user
  ctx.store.setState((state) => ({
    users: [
      { ...state.users[0], name: 'Updated User' },
      ...state.users.slice(1),
    ],
  }));
});

zustand.implement(tests.computedValue, (ctx) => {
  // Access computed value (manually computed in Zustand)
  const value = ctx.store.getState().counter * 2;
  // Update the doubled value for consistency
  ctx.store.setState({ doubled: value });
});

// ========== ASYNC OPERATIONS ==========

zustand.implement(tests.asyncThroughput, async (ctx) => {
  // Simulate rapid async operations
  for (let i = 0; i < 20; i++) {
    await Promise.resolve();
    ctx.store.setState({ counter: i });
  }
});

zustand.implement(tests.concurrentUpdates, async (ctx) => {
  // Test concurrent async updates
  const operations = [];

  for (let i = 0; i < 50; i++) {
    operations.push(
      Promise.resolve().then(() => {
        ctx.store.setState((state) => ({ counter: state.counter + 1 }));
      })
    );
  }

  await Promise.all(operations);
});

// ========== REAL-WORLD SCENARIOS ==========

zustand.implement(tests.simpleForm, (ctx) => {
  ctx.store.setState((state) => ({
    form: {
      ...state.form,
      name: 'John Doe',
    },
  }));
  ctx.store.setState((state) => ({
    form: {
      ...state.form,
      email: 'john@example.com',
    },
  }));
  ctx.store.setState((state) => ({
    form: {
      ...state.form,
      age: 30,
    },
  }));
});

zustand.implement(tests.complexForm, (ctx) => {
  // Update nested object
  ctx.store.setState((state) => ({
    complexForm: {
      ...state.complexForm,
      profile: {
        ...state.complexForm.profile,
        name: 'John Doe',
      },
    },
  }));
  // Update array
  ctx.store.setState((state) => ({
    complexForm: {
      ...state.complexForm,
      tags: [...state.complexForm.tags, 'developer', 'react'],
    },
  }));
});

zustand.implement(tests.cacheInvalidation, (ctx) => {
  // Update source data
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
  // Access computed value (manual computation in Zustand)
  const doubled = ctx.store.getState().counter * 2;
  ctx.store.setState({ doubled });
});

zustand.implement(tests.memoryUsage, (ctx) => {
  const unsubscribers: Array<() => void> = [];

  // Create 100 subscribers
  for (let i = 0; i < 100; i++) {
    const unsub = ctx.store.subscribe(() => {
      // Subscriber callback
    });
    unsubscribers.push(unsub);
  }

  // Cleanup all subscribers
  unsubscribers.forEach((unsub) => unsub());
});

// ========== PERFORMANCE STRESS TESTS ==========

zustand.implement(tests.extremeRead, (ctx) => {
  ctx.store.getState().counter;
});

zustand.implement(tests.extremeWrite, (ctx) => {
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
});

zustand.implement(tests.largeArray, (ctx) => {
  // Initialize with 1000 items
  const items = Array.from({ length: 1000 }, (_, i) => i);
  ctx.store.setState({ largeArray: items });

  // Read the array
  const array = ctx.store.getState().largeArray;

  // Update one item
  ctx.store.setState((state) => {
    const newArray = [...state.largeArray];
    newArray[500] = 999;
    return { largeArray: newArray };
  });
});

// ========== REACTIVITY PATTERNS ==========

zustand.implement(tests.diamondPattern, (ctx) => {
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
  const result = ctx.store.getState().counter;
});

zustand.implement(tests.deepDiamondPattern, (ctx) => {
  for (let i = 0; i < 5; i++) {
    ctx.store.setState((state) => ({ counter: state.counter + 1 }));
  }
  const result = ctx.store.getState().counter;
});

zustand.implement(tests.deepChain, (ctx) => {
  for (let i = 0; i < 10; i++) {
    ctx.store.setState((state) => ({ counter: state.counter * 2 }));
  }
  const result = ctx.store.getState().counter;
});

zustand.implement(tests.veryDeepChain, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.setState((state) => ({ counter: state.counter * 1.01 }));
  }
  const result = ctx.store.getState().counter;
});

zustand.implement(tests.wideFanout, (ctx) => {
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
  for (let i = 0; i < 100; i++) {
    const v = ctx.store.getState().counter;
  }
});

zustand.implement(tests.massiveFanout, (ctx) => {
  ctx.store.setState((state) => ({ counter: state.counter + 1 }));
  for (let i = 0; i < 1000; i++) {
    const v = ctx.store.getState().counter;
  }
});

zustand.implement(tests.dynamicDependencies, (ctx) => {
  const toggle = ctx.store.getState().counter % 2 === 0;
  ctx.store.setState((state) => ({ counter: state.counter + (toggle ? 1 : 2) }));
  const result = ctx.store.getState().counter;
});

zustand.implement(tests.repeatedDiamonds, (ctx) => {
  for (let i = 0; i < 5; i++) {
    ctx.store.setState((state) => ({ counter: state.counter + 1 }));
    const v = ctx.store.getState().counter;
  }
});
