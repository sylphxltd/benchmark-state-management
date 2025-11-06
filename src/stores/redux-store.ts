import { configureStore, createSlice } from '@reduxjs/toolkit';

export const reduxSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    doubled: 0,
    nested: { value: 0 },
    users: [],
    loading: false,
    asyncData: null
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
  }
};