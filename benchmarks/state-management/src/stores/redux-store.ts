import { configureStore, createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    doubled: 0,
    nested: { value: 0 },
    users: [],
    loading: false,
    asyncData: null,
    // Deep nesting for 5-level test
    deepNested: {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: { value: 0 }
            }
          }
        }
      }
    },
    // Large state array
    items: Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i }))
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.doubled = state.count * 2;
    },
    setNested: (state, action) => {
      state.nested.value = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAsyncData: (state, action) => {
      state.asyncData = action.payload;
      state.loading = false;
    },
    // Batch update - multiple state changes at once
    batchUpdate: (state, action) => {
      state.count = action.payload.count;
      state.doubled = action.payload.count * 2;
      state.nested.value = action.payload.nestedValue;
      state.loading = action.payload.loading;
    },
    // Array operations
    filterUsers: (state, action) => {
      state.users = state.users.filter((u: any) => u.id !== action.payload);
    },
    removeUser: (state, action) => {
      const index = state.users.findIndex((u: any) => u.id === action.payload);
      if (index !== -1) state.users.splice(index, 1);
    },
    updateUser: (state, action) => {
      const user = state.users.find((u: any) => u.id === action.payload.id);
      if (user) Object.assign(user, action.payload.data);
    },
    // Deep nested update
    setDeepNested: (state, action) => {
      state.deepNested.level1.level2.level3.level4.level5.value = action.payload;
    },
    // Large state update
    updateLargeState: (state, action) => {
      const item = state.items.find((i: any) => i.id === action.payload.id);
      if (item) item.value = action.payload.value;
    }
  }
});

export const reduxStore = configureStore({
  reducer: { counter: reduxSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const reduxActions = {
  increment: () => reduxStore.dispatch(reduxSlice.actions.increment()),
  setNested: (value: number) => reduxStore.dispatch(reduxSlice.actions.setNested(value)),
  addUser: (user: any) => reduxStore.dispatch(reduxSlice.actions.addUser(user)),
  getDoubled: () => reduxStore.getState().counter.doubled,
  getNested: () => reduxStore.getState().counter.nested,
  getUsers: () => reduxStore.getState().counter.users,
  // Async actions
  setLoading: (loading: boolean) => reduxStore.dispatch(reduxSlice.actions.setLoading(loading)),
  setAsyncData: (data: any) => reduxStore.dispatch(reduxSlice.actions.setAsyncData(data)),
  getLoading: () => reduxStore.getState().counter.loading,
  getAsyncData: () => reduxStore.getState().counter.asyncData,
  fetchData: async (data: any) => {
    reduxStore.dispatch(reduxSlice.actions.setLoading(true));
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 0));
    reduxStore.dispatch(reduxSlice.actions.setAsyncData(data));
  },
  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) =>
    reduxStore.dispatch(reduxSlice.actions.batchUpdate({ count, nestedValue, loading })),
  filterUsers: (id: number) => reduxStore.dispatch(reduxSlice.actions.filterUsers(id)),
  removeUser: (id: number) => reduxStore.dispatch(reduxSlice.actions.removeUser(id)),
  updateUser: (id: number, data: any) =>
    reduxStore.dispatch(reduxSlice.actions.updateUser({ id, data })),
  setDeepNested: (value: number) => reduxStore.dispatch(reduxSlice.actions.setDeepNested(value)),
  updateLargeState: (id: number, value: number) =>
    reduxStore.dispatch(reduxSlice.actions.updateLargeState({ id, value })),
  // Subscription test - measure notifying multiple subscribers
  subscribeMultiple: (count: number) => {
    const unsubscribers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      const unsub = reduxStore.subscribe(() => {
        // Simulate component reading state
        reduxStore.getState().counter.count;
      });
      unsubscribers.push(unsub);
    }
    return () => unsubscribers.forEach(u => u());
  }
};