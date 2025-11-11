/**
 * Redux Toolkit Library Implementation
 *
 * Complete implementation with all 20 tests following the jotai.ts pattern
 */

import { configureStore, createSlice, createSelector, type PayloadAction } from '@reduxjs/toolkit';
import { category, tests } from '../index';

// ============================================================================
// Define Store Type
// ============================================================================

interface ReduxToolkitStore {
  store: ReturnType<typeof configureStore<RootState>>;
  actions: {
    counter: typeof counterSlice.actions;
    nested: typeof nestedSlice.actions;
    users: typeof usersSlice.actions;
    form: typeof formSlice.actions;
    complexForm: typeof complexFormSlice.actions;
    largeArray: typeof largeArraySlice.actions;
  };
  selectors: {
    selectDoubled: (state: RootState) => number;
  };
}

// ============================================================================
// Redux Toolkit Slices
// ============================================================================

// Counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

// Nested object slice
const nestedSlice = createSlice({
  name: 'nested',
  initialState: { nested: { value: 0 } },
  reducers: {
    updateNested: (state) => {
      state.nested.value += 1;
    },
  },
});

// Users array slice
const usersSlice = createSlice({
  name: 'users',
  initialState: [] as Array<{ id: number; name: string }>,
  reducers: {
    addUser: (state, action: PayloadAction<{ id: number; name: string }>) => {
      state.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const index = state.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    setUsers: (state, action: PayloadAction<Array<{ id: number; name: string }>>) => {
      return action.payload;
    },
  },
});

// Simple form slice
const formSlice = createSlice({
  name: 'form',
  initialState: { name: '', email: '', age: 0 },
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

// Complex form slice
const complexFormSlice = createSlice({
  name: 'complexForm',
  initialState: { profile: { name: '' }, tags: [] as string[] },
  reducers: {
    updateProfileName: (state, action: PayloadAction<string>) => {
      state.profile.name = action.payload;
    },
    addTags: (state, action: PayloadAction<string[]>) => {
      state.tags.push(...action.payload);
    },
  },
});

// Large array slice
const largeArraySlice = createSlice({
  name: 'largeArray',
  initialState: [] as number[],
  reducers: {
    setArray: (state, action: PayloadAction<number[]>) => {
      return action.payload;
    },
    updateItem: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state[action.payload.index] = action.payload.value;
    },
  },
});

// Root state type
type RootState = {
  counter: ReturnType<typeof counterSlice.reducer>;
  nested: ReturnType<typeof nestedSlice.reducer>;
  users: ReturnType<typeof usersSlice.reducer>;
  form: ReturnType<typeof formSlice.reducer>;
  complexForm: ReturnType<typeof complexFormSlice.reducer>;
  largeArray: ReturnType<typeof largeArraySlice.reducer>;
};

// ============================================================================
// Register Library
// ============================================================================

const reduxToolkit = category.registerLibrary<ReduxToolkitStore>({
  id: 'redux-toolkit',
  displayName: 'Redux Toolkit',
  packageName: '@reduxjs/toolkit',
  githubUrl: 'https://github.com/reduxjs/redux-toolkit',
  description: 'The official, opinionated, batteries-included toolset for efficient Redux development',

  setup: {
    createStore: () => {
      const store = configureStore({
        reducer: {
          counter: counterSlice.reducer,
          nested: nestedSlice.reducer,
          users: usersSlice.reducer,
          form: formSlice.reducer,
          complexForm: complexFormSlice.reducer,
          largeArray: largeArraySlice.reducer,
        },
      });

      // Create computed selector
      const selectDoubled = createSelector(
        [(state: RootState) => state.counter.count],
        (count) => count * 2
      );

      return {
        store,
        actions: {
          counter: counterSlice.actions,
          nested: nestedSlice.actions,
          users: usersSlice.actions,
          form: formSlice.actions,
          complexForm: complexFormSlice.actions,
          largeArray: largeArraySlice.actions,
        },
        selectors: {
          selectDoubled,
        },
      };
    },
  },

  features: ['devtools', 'middleware'],
});

// ============================================================================
// Implement Tests (using object references!)
// ============================================================================

// ========== BASIC READ TESTS ==========

reduxToolkit.implement(tests.singleRead, (ctx) => {
  const value = ctx.store.store.getState().counter.count;
});

reduxToolkit.implement(tests.moderateRead, (ctx) => {
  for (let i = 0; i < 100; i++) {
    const value = ctx.store.store.getState().counter.count;
  }
});

reduxToolkit.implement(tests.highFrequencyRead, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    const value = ctx.store.store.getState().counter.count;
  }
});

// ========== BASIC WRITE TESTS ==========

reduxToolkit.implement(tests.singleWrite, (ctx) => {
  ctx.store.store.dispatch(ctx.store.actions.counter.increment());
});

reduxToolkit.implement(tests.batchWrite, (ctx) => {
  for (let i = 0; i < 10; i++) {
    ctx.store.store.dispatch(ctx.store.actions.counter.increment());
  }
});

reduxToolkit.implement(tests.burstWrite, (ctx) => {
  for (let i = 0; i < 100; i++) {
    ctx.store.store.dispatch(ctx.store.actions.counter.increment());
  }
});

reduxToolkit.implement(tests.heavyWrite, (ctx) => {
  for (let i = 0; i < 1000; i++) {
    ctx.store.store.dispatch(ctx.store.actions.counter.increment());
  }
});

// ========== ADVANCED OPERATIONS ==========

reduxToolkit.implement(tests.nestedUpdate, (ctx) => {
  ctx.store.store.dispatch(ctx.store.actions.nested.updateNested());
});

reduxToolkit.implement(tests.arrayPush, (ctx) => {
  const state = ctx.store.store.getState();
  const nextId = state.users.length + 1;
  ctx.store.store.dispatch(
    ctx.store.actions.users.addUser({
      id: nextId,
      name: `User ${nextId}`,
    })
  );
});

reduxToolkit.implement(tests.arrayUpdate, (ctx) => {
  const state = ctx.store.store.getState();
  // First ensure there's at least one user
  if (state.users.length === 0) {
    ctx.store.store.dispatch(
      ctx.store.actions.users.addUser({ id: 1, name: 'User 1' })
    );
  }
  // Then update the first user
  ctx.store.store.dispatch(
    ctx.store.actions.users.updateUser({ id: 1, name: 'Updated User' })
  );
});

reduxToolkit.implement(tests.computedValue, (ctx) => {
  const state = ctx.store.store.getState();
  const doubled = ctx.store.selectors.selectDoubled(state);
});

// ========== ASYNC OPERATIONS ==========

reduxToolkit.implement(tests.sequentialAsync, async (ctx) => {
  // Sequential: await each operation
  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.store.dispatch(ctx.store.actions.counter.increment());

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.store.dispatch(ctx.store.actions.counter.increment());

  await new Promise((resolve) => setTimeout(resolve, 1));
  ctx.store.store.dispatch(ctx.store.actions.counter.increment());
});

reduxToolkit.implement(tests.concurrentAsync, async (ctx) => {
  // Concurrent: Promise.all
  await Promise.all([
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.store.dispatch(ctx.store.actions.counter.increment());
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.store.dispatch(ctx.store.actions.counter.increment());
    }),
    new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
      ctx.store.store.dispatch(ctx.store.actions.counter.increment());
    }),
  ]);
});

// ========== REAL-WORLD SCENARIOS ==========

reduxToolkit.implement(tests.simpleForm, (ctx) => {
  ctx.store.store.dispatch(ctx.store.actions.form.updateName('John Doe'));
  ctx.store.store.dispatch(ctx.store.actions.form.updateEmail('john@example.com'));
  ctx.store.store.dispatch(ctx.store.actions.form.updateAge(30));
});

reduxToolkit.implement(tests.complexForm, (ctx) => {
  // Update nested object
  ctx.store.store.dispatch(ctx.store.actions.complexForm.updateProfileName('John Doe'));
  // Update array
  ctx.store.store.dispatch(ctx.store.actions.complexForm.addTags(['developer', 'react']));
});

reduxToolkit.implement(tests.cacheInvalidation, (ctx) => {
  // Update source data
  ctx.store.store.dispatch(ctx.store.actions.counter.increment());
  // Access computed value (should reflect new value)
  const state = ctx.store.store.getState();
  const doubled = ctx.store.selectors.selectDoubled(state);
});

reduxToolkit.implement(tests.memoryUsage, (ctx) => {
  const unsubscribers: Array<() => void> = [];

  // Create 100 subscribers
  for (let i = 0; i < 100; i++) {
    const unsub = ctx.store.store.subscribe(() => {
      // Subscriber callback
      const state = ctx.store.store.getState();
    });
    unsubscribers.push(unsub);
  }

  // Cleanup all subscribers
  unsubscribers.forEach((unsub) => unsub());
});

// ========== PERFORMANCE STRESS TESTS ==========

reduxToolkit.implement(tests.extremeRead, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    const value = ctx.store.store.getState().counter.count;
  }
});

reduxToolkit.implement(tests.extremeWrite, (ctx) => {
  for (let i = 0; i < 10000; i++) {
    ctx.store.store.dispatch(ctx.store.actions.counter.increment());
  }
});

reduxToolkit.implement(tests.largeArray, (ctx) => {
  // Initialize with 1000 items
  const items = Array.from({ length: 1000 }, (_, i) => i);
  ctx.store.store.dispatch(ctx.store.actions.largeArray.setArray(items));

  // Read the array
  const state = ctx.store.store.getState();
  const array = state.largeArray;

  // Update one item
  ctx.store.store.dispatch(
    ctx.store.actions.largeArray.updateItem({ index: 500, value: 999 })
  );
});
