/**
 * Redux Toolkit implementation
 */

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

const comprehensiveSlice = createSlice({
  name: 'comprehensive',
  initialState: {
    count: 0,
    users: largeArray,
    deepNested: createDeepNested(),
    formData: createFormState(),
    history: [],
    loading: false,
    error: null,
    cache: {},
    optimisticData: null
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    spliceUser: (state, action) => {
      const [index, deleteCount, ...items] = action.payload;
      state.users.splice(index, deleteCount, ...items);
    },
    setTenLevelNested: (state, action) => {
      state.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = action.payload;
    },
    updateFormField: (state, action) => {
      const [path, value] = action.payload;
      const keys = path.split('.');
      let current: any = state;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
    },
  }
});

const reduxStore = configureStore({
  reducer: {
    comprehensive: comprehensiveSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const reduxActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    reduxStore.dispatch(comprehensiveSlice.actions.increment());
  },

  getCount: () => {
    return reduxStore.getState().comprehensive.count;
  },

  // 03-creation methods
  createEmptyStore: () => {
    // Create a minimal Redux store
    const emptySlice = createSlice({
      name: 'empty',
      initialState: { value: 0 },
      reducers: {}
    });
    return configureStore({
      reducer: { empty: emptySlice.reducer }
    });
  },

  // 04-complexity methods
  readNestedState: () => {
    return reduxStore.getState().comprehensive.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    reduxStore.dispatch(comprehensiveSlice.actions.setTenLevelNested(Math.random()));
  },

  spliceArray: () => {
    const state = reduxStore.getState().comprehensive;
    const middleIndex = Math.floor(state.users.length / 2);
    reduxStore.dispatch(comprehensiveSlice.actions.spliceUser([middleIndex, 1, { id: 9999, name: 'Inserted', email: '', value: 0 }]));
  },

  mapLargeArray: () => {
    const users = reduxStore.getState().comprehensive.users;
    return users.map(u => ({ ...u, mapped: true }));
  },

  updateMultipleFields: () => {
    reduxStore.dispatch(comprehensiveSlice.actions.increment());
    reduxStore.dispatch(comprehensiveSlice.actions.updateFormField(['personal.firstName', 'Updated']));
    reduxStore.dispatch(comprehensiveSlice.actions.setTenLevelNested(Math.random()));
  },

  // 06-memory methods
  getLargeArray: () => {
    return reduxStore.getState().comprehensive.users;
  },

  updateLargeArrayItem: () => {
    const users = reduxStore.getState().comprehensive.users;
    if (users.length > 0) {
      reduxStore.dispatch(comprehensiveSlice.actions.spliceUser([0, 1, { ...users[0], updated: true }]));
    }
  },

  cloneLargeState: () => {
    const state = reduxStore.getState().comprehensive;
    return {
      count: state.count,
      users: [...state.users],
      deepNested: JSON.parse(JSON.stringify(state.deepNested)),
      formData: JSON.parse(JSON.stringify(state.formData))
    };
  },

  filterLargeArray: () => {
    const users = reduxStore.getState().comprehensive.users;
    return users.filter(u => u.id % 2 === 0);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    reduxStore.dispatch(comprehensiveSlice.actions.updateFormField([field, value]));
  },

  updateMultipleFormFields: (fields) => {
    Object.entries(fields).forEach(([field, value]) => {
      reduxStore.dispatch(comprehensiveSlice.actions.updateFormField([field, value]));
    });
  },

  updateNestedFormField: (path, value) => {
    reduxStore.dispatch(comprehensiveSlice.actions.updateFormField([path, value]));
  },

  resetForm: () => {
    const freshForm = createFormState();
    Object.entries(freshForm).forEach(([section, fields]: [string, any]) => {
      Object.entries(fields).forEach(([field, value]) => {
        reduxStore.dispatch(comprehensiveSlice.actions.updateFormField([`${section}.${field}`, value]));
      });
    });
  },

  conditionalFieldUpdate: () => {
    const formData = reduxStore.getState().comprehensive.formData;
    if (formData.preferences.newsletter) {
      reduxStore.dispatch(comprehensiveSlice.actions.updateFormField(['personal.email', 'subscribed@example.com']));
    }
  },

  // 08-async-reactive methods
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { count: reduxStore.getState().comprehensive.count, timestamp: Date.now() };
  },

  getChainedAsyncValue: async () => {
    const first = await new Promise<number>(resolve => setTimeout(() => resolve(reduxStore.getState().comprehensive.count), 0));
    const second = await new Promise<number>(resolve => setTimeout(() => resolve(first * 2), 0));
    return second;
  },

  getComplexAsyncValue: async () => {
    const [count, users] = await Promise.all([
      new Promise<number>(resolve => setTimeout(() => resolve(reduxStore.getState().comprehensive.count), 0)),
      new Promise<number>(resolve => setTimeout(() => resolve(reduxStore.getState().comprehensive.users.length), 0))
    ]);
    return { count, users };
  }
};
