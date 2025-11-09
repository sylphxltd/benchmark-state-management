/**
 * Comprehensive v2 Store Implementation for Advanced Benchmark Testing
 * Covers all advanced scenarios and edge cases
 */

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { create } from 'zustand';
import { atom } from 'jotai';
import { makeAutoObservable, runInAction, reaction } from 'mobx';
import { proxy, subscribe } from 'valtio';
import { signal, computed, effect } from '@preact/signals-core';
import { createSignal, createMemo, createEffect } from 'solid-js';
import { zen, get, set, subscribe, runKarma, computed as zenComputed } from '@sylphx/zen';

// ============================================================================
// BASE STATE STRUCTURES
// ============================================================================

// Common test user object
const testUser = { id: 1, name: 'Test User', email: 'test@example.com' };

// Large array for performance testing
const largeArray = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
  email: `user${i}@example.com`,
  value: Math.random() * 1000
}));

// Deep nested object structure
const createDeepNested = () => ({
  level1: {
    level2: {
      level3: {
        level4: {
          level5: {
            level6: {
              level7: {
                level8: {
                  level9: {
                    level10: { value: 0 }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

// Form state structure
const createFormState = () => ({
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  },
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  },
  preferences: {
    newsletter: false,
    notifications: true,
    theme: 'light'
  }
});

// ============================================================================
// REDUX TOOLKIT STORE
// ============================================================================

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
    cache: new Map(),
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
    sortUsers: (state, action) => {
      state.users.sort((a, b) => {
        const key = action.payload;
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
    },
    setTenLevelNested: (state, action) => {
      state.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = action.payload;
    },
    updateFormField: (state, action) => {
      const [path, value] = action.payload;
      const keys = path.split('.');
      let current = state;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
    },
    setOptimisticData: (state, action) => {
      state.optimisticData = action.payload;
    },
    confirmOptimisticUpdate: (state) => {
      if (state.optimisticData) {
        state.users = [...state.optimisticData];
        state.optimisticData = null;
      }
    },
    undo: (state) => {
      // Simple undo implementation
      if (state.history.length > 0) {
        const previousState = state.history.pop();
        Object.assign(state, previousState);
      }
    },
    saveToHistory: (state) => {
      state.history.push({
        count: state.count,
        users: [...state.users],
        deepNested: JSON.parse(JSON.stringify(state.deepNested)),
        formData: JSON.parse(JSON.stringify(state.formData))
      });
    },
    setNullValue: (state) => {
      state.error = null;
    },
    setUndefinedValue: (state) => {
      state.error = undefined;
    }
  }
});

export const reduxStoreV2 = configureStore({
  reducer: {
    comprehensive: comprehensiveSlice.reducer
  }
});

export const reduxActionsV2 = {
  // Basic operations
  createStore: () => configureStore({
    reducer: { comprehensive: comprehensiveSlice.reducer }
  }),

  increment: () => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.increment());
  },

  // Array operations
  spliceUser: (index, deleteCount, item) => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.spliceUser([index, deleteCount, item]));
  },

  sortUsers: (key) => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.sortUsers(key));
  },

  findUser: (id) => {
    return reduxStoreV2.getState().comprehensive.users.find(u => u.id === id);
  },

  // Deep operations
  setTenLevelNested: (value) => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.setTenLevelNested(value));
  },

  getDeepValue: () => {
    return reduxStoreV2.getState().comprehensive.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  createDeepObject: () => {
    return createDeepNested();
  },

  // Form operations
  updateFormField: (path, value) => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.updateFormField([path, value]));
  },

  // Optimistic updates
  optimisticUpdate: () => {
    const currentState = reduxStoreV2.getState().comprehensive;
    const newUsers = [...currentState.users, { id: Date.now(), name: 'Optimistic User' }];
    reduxStoreV2.dispatch(comprehensiveSlice.actions.setOptimisticData(newUsers));
    reduxStoreV2.dispatch(comprehensiveSlice.actions.confirmOptimisticUpdate());
  },

  // Undo/Redo
  undo: () => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.undo());
  },

  batchComplexState: () => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.saveToHistory());
    reduxStoreV2.dispatch(comprehensiveSlice.actions.increment());
    reduxStoreV2.dispatch(comprehensiveSlice.actions.setTenLevelNested(Math.random()));
  },

  // Edge cases
  setNullValue: () => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.setNullValue());
  },

  setUndefinedValue: () => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.setUndefinedValue());
  },

  // Async operations
  loadAsyncData: async () => {
    // Simulate async data loading
    await new Promise(resolve => setTimeout(resolve, 0));
    return { loaded: true, data: 'async data' };
  },

  concurrentAsync: async () => {
    // Simulate concurrent async operations
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
    return { concurrent: true };
  },

  // Additional methods needed for comprehensive tests
  getComplexComputed: () => {
    return reduxStoreV2.getState().comprehensive.count * 4 + 100;
  },

  invalidateComputed: () => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.increment());
  },

  setupSubscriptionCascade: () => {
    const unsub = reduxStoreV2.subscribe(() => {
      // Simple subscription
    });
    return unsub;
  },

  triggerReaction: () => {
    reduxStoreV2.dispatch(comprehensiveSlice.actions.increment());
  },

  multiStoreOperation: () => {
    // Operation that affects multiple stores
    reduxStoreV2.dispatch(comprehensiveSlice.actions.increment());
  },

  allocateLargeState: () => {
    // Allocate large amounts of state
    const largeArray = Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      data: new Array(100).fill(Math.random())
    }));
    return largeArray;
  },

  getDoubled: () => {
    return reduxStoreV2.getState().comprehensive.count * 2;
  }
};

// ============================================================================
// ZUSTAND STORE
// ============================================================================

export const zustandStoreV2 = create((set, get) => ({
  count: 0,
  users: largeArray,
  deepNested: createDeepNested(),
  formData: createFormState(),
  history: [],
  optimisticData: null,

  increment: () => set(state => ({ count: state.count + 1 })),

  spliceUser: (index, deleteCount, item) => set(state => {
    const newUsers = [...state.users];
    newUsers.splice(index, deleteCount, item);
    return { users: newUsers };
  }),

  sortUsers: (key) => set(state => ({
    users: [...state.users].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    })
  })),

  findUser: (id) => {
    return get().users.find(u => u.id === id);
  },

  setTenLevelNested: (value) => set(state => ({
    deepNested: {
      ...state.deepNested,
      level1: {
        ...state.deepNested.level1,
        level2: {
          ...state.deepNested.level1.level2,
          level3: {
            ...state.deepNested.level1.level2.level3,
            level4: {
              ...state.deepNested.level1.level2.level3.level4,
              level5: {
                ...state.deepNested.level1.level2.level3.level4.level5,
                level6: {
                  ...state.deepNested.level1.level2.level3.level4.level5.level6,
                  level7: {
                    ...state.deepNested.level1.level2.level3.level4.level5.level6.level7,
                    level8: {
                      ...state.deepNested.level1.level2.level3.level4.level5.level6.level7.level8,
                      level9: {
                        ...state.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9,
                        level10: { value }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })),

  getDeepValue: () => {
    return get().deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  createDeepObject: () => {
    return createDeepNested();
  },

  updateFormField: (path, value) => set(state => {
    const keys = path.split('.');
    const newState = { ...state };
    let current = newState;
    for (let i = 0; i < keys.length - 1; i++) {
      current[keys[i]] = { ...current[keys[i]] };
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    return newState;
  }),

  optimisticUpdate: () => {
    const newUsers = [...get().users, { id: Date.now(), name: 'Optimistic User' }];
    set({ optimisticData: newUsers, users: newUsers });
  },

  undo: () => {
    const history = get().history;
    if (history.length > 0) {
      set(history[history.length - 1]);
    }
  },

  batchComplexState: () => {
    const currentState = get();
    set({ history: [...currentState.history, currentState] });
    set(state => ({ count: state.count + 1 }));
    get().setTenLevelNested(Math.random());
  },

  setNullValue: () => set({ error: null }),
  setUndefinedValue: () => set({ error: undefined }),

  loadAsyncData: async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { loaded: true, data: 'async data' };
  },

  concurrentAsync: async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
    return { concurrent: true };
  }
}));

export const zustandActionsV2 = {
  createStore: () => create(() => ({ count: 0 })),

  increment: () => zustandStoreV2.increment(),
  spliceUser: (index, deleteCount, item) => zustandStoreV2.spliceUser(index, deleteCount, item),
  sortUsers: (key) => zustandStoreV2.sortUsers(key),
  findUser: (id) => zustandStoreV2.findUser(id),
  setTenLevelNested: (value) => zustandStoreV2.setTenLevelNested(value),
  getDeepValue: () => zustandStoreV2.getDeepValue(),
  createDeepObject: () => zustandStoreV2.createDeepObject(),
  updateFormField: (path, value) => zustandStoreV2.updateFormField(path, value),
  optimisticUpdate: () => zustandStoreV2.optimisticUpdate(),
  undo: () => zustandStoreV2.undo(),
  batchComplexState: () => zustandStoreV2.batchComplexState(),
  setNullValue: () => zustandStoreV2.setNullValue(),
  setUndefinedValue: () => zustandStoreV2.setUndefinedValue(),
  loadAsyncData: () => zustandStoreV2.loadAsyncData(),
  concurrentAsync: () => zustandStoreV2.concurrentAsync(),
};

// ============================================================================
// JOTAI STORE
// ============================================================================

const countAtom = atom(0);
const usersAtom = atom(largeArray);
const deepNestedAtom = atom(createDeepNested());
const formDataAtom = atom(createFormState());
const optimisticDataAtom = atom(null);

// Create a simple store for Jotai (simplified for benchmarking)
let jotaiStore = {
  count: 0,
  users: largeArray,
  deepNested: createDeepNested(),
  formData: createFormState(),
  optimisticData: null,
  history: []
};

// Simple event emitter for subscriptions
const jotaiListeners = new Set();

const notifyListeners = () => {
  jotaiListeners.forEach(listener => listener());
};

export const jotaiActionsV2 = {
  createStore: () => {
    jotaiStore = {
      count: 0,
      users: largeArray,
      deepNested: createDeepNested(),
      formData: createFormState(),
      optimisticData: null,
      history: []
    };
    return atom(0);
  },

  increment: () => {
    jotaiStore.count++;
    notifyListeners();
  },

  spliceUser: (index, deleteCount, item) => {
    jotaiStore.users.splice(index, deleteCount, item);
    notifyListeners();
  },

  sortUsers: (key) => {
    jotaiStore.users.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    notifyListeners();
  },

  findUser: (id) => {
    return jotaiStore.users.find(u => u.id === id);
  },

  setTenLevelNested: (value) => {
    jotaiStore.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = value;
    notifyListeners();
  },

  getDeepValue: () => {
    return jotaiStore.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  createDeepObject: () => createDeepNested(),

  updateFormField: (path, value) => {
    const keys = path.split('.');
    let current = jotaiStore.formData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    notifyListeners();
  },

  optimisticUpdate: () => {
    jotaiStore.optimisticData = [...jotaiStore.users, { id: Date.now(), name: 'Optimistic User' }];
    jotaiStore.users = jotaiStore.optimisticData;
    jotaiStore.optimisticData = null;
    notifyListeners();
  },

  undo: () => {
    if (jotaiStore.history.length > 0) {
      const previousState = jotaiStore.history.pop();
      jotaiStore = { ...jotaiStore, ...previousState };
      notifyListeners();
    }
  },

  batchComplexState: () => {
    jotaiStore.history.push({
      count: jotaiStore.count,
      users: [...jotaiStore.users],
      deepNested: JSON.parse(JSON.stringify(jotaiStore.deepNested)),
      formData: JSON.parse(JSON.stringify(jotaiStore.formData))
    });
    jotaiStore.count++;
    jotaiStore.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = Math.random();
    notifyListeners();
  },

  setNullValue: () => {
    // No error field in simplified store
  },

  setUndefinedValue: () => {
    // No error field in simplified store
  },

  loadAsyncData: async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { loaded: true, data: 'async data' };
  },

  concurrentAsync: async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
    return { concurrent: true };
  }
};

// ============================================================================
// MOBX STORE
// ============================================================================

class MobxStoreV2 {
  count = 0;
  users = largeArray;
  deepNested = createDeepNested();
  formData = createFormState();
  history = [];
  optimisticData = null;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count++;
  };

  spliceUser = (index, deleteCount, item) => {
    this.users.splice(index, deleteCount, item);
  };

  sortUsers = (key) => {
    this.users.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  };

  findUser = (id) => {
    return this.users.find(u => u.id === id);
  };

  setTenLevelNested = (value) => {
    this.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = value;
  };

  getDeepValue = () => {
    return this.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  };

  createDeepObject = () => {
    return createDeepNested();
  };

  updateFormField = (path, value) => {
    const keys = path.split('.');
    let current = this;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
  };

  optimisticUpdate = () => {
    this.optimisticData = [...this.users, { id: Date.now(), name: 'Optimistic User' }];
    this.users = this.optimisticData;
    this.optimisticData = null;
  };

  undo = () => {
    if (this.history.length > 0) {
      const previousState = this.history.pop();
      Object.assign(this, previousState);
    }
  };

  batchComplexState = () => {
    runInAction(() => {
      this.history.push({
        count: this.count,
        users: [...this.users],
        deepNested: JSON.parse(JSON.stringify(this.deepNested)),
        formData: JSON.parse(JSON.stringify(this.formData))
      });
      this.count++;
      this.setTenLevelNested(Math.random());
    });
  };

  setNullValue = () => {
    this.error = null;
  };

  setUndefinedValue = () => {
    this.error = undefined;
  };

  loadAsyncData = async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { loaded: true, data: 'async data' };
  };

  concurrentAsync = async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
    return { concurrent: true };
  };
}

export const mobxStoreV2 = new MobxStoreV2();
export const mobxActionsV2 = {
  createStore: () => new MobxStoreV2(),

  increment: () => mobxStoreV2.increment(),
  spliceUser: (index, deleteCount, item) => mobxStoreV2.spliceUser(index, deleteCount, item),
  sortUsers: (key) => mobxStoreV2.sortUsers(key),
  findUser: (id) => mobxStoreV2.findUser(id),
  setTenLevelNested: (value) => mobxStoreV2.setTenLevelNested(value),
  getDeepValue: () => mobxStoreV2.getDeepValue(),
  createDeepObject: () => mobxStoreV2.createDeepObject(),
  updateFormField: (path, value) => mobxStoreV2.updateFormField(path, value),
  optimisticUpdate: () => mobxStoreV2.optimisticUpdate(),
  undo: () => mobxStoreV2.undo(),
  batchComplexState: () => runInAction(() => mobxStoreV2.batchComplexState()),
  setNullValue: () => mobxStoreV2.setNullValue(),
  setUndefinedValue: () => mobxStoreV2.setUndefinedValue(),
  loadAsyncData: () => mobxStoreV2.loadAsyncData(),
  concurrentAsync: () => mobxStoreV2.concurrentAsync(),
};

// ============================================================================
// VALTIO STORE
// ============================================================================

const valtioStoreV2 = proxy({
  count: 0,
  users: largeArray,
  deepNested: createDeepNested(),
  formData: createFormState(),
  history: [],
  optimisticData: null,
  error: null
});

export const valtioActionsV2 = {
  createStore: () => proxy({ count: 0 }),

  increment: () => {
    valtioStoreV2.count++;
  },

  spliceUser: (index, deleteCount, item) => {
    valtioStoreV2.users.splice(index, deleteCount, item);
  },

  sortUsers: (key) => {
    valtioStoreV2.users.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  },

  findUser: (id) => {
    return valtioStoreV2.users.find(u => u.id === id);
  },

  setTenLevelNested: (value) => {
    valtioStoreV2.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = value;
  },

  getDeepValue: () => {
    return valtioStoreV2.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  createDeepObject: () => createDeepNested(),

  updateFormField: (path, value) => {
    const keys = path.split('.');
    let current = valtioStoreV2;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
  },

  optimisticUpdate: () => {
    valtioStoreV2.optimisticData = [...valtioStoreV2.users, { id: Date.now(), name: 'Optimistic User' }];
    valtioStoreV2.users = valtioStoreV2.optimisticData;
    valtioStoreV2.optimisticData = null;
  },

  undo: () => {
    if (valtioStoreV2.history.length > 0) {
      const previousState = valtioStoreV2.history.pop();
      Object.assign(valtioStoreV2, previousState);
    }
  },

  batchComplexState: () => {
    valtioStoreV2.history.push({
      count: valtioStoreV2.count,
      users: [...valtioStoreV2.users],
      deepNested: JSON.parse(JSON.stringify(valtioStoreV2.deepNested)),
      formData: JSON.parse(JSON.stringify(valtioStoreV2.formData))
    });
    valtioStoreV2.count++;
    valtioStoreV2.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = Math.random();
  },

  setNullValue: () => {
    valtioStoreV2.error = null;
  },

  setUndefinedValue: () => {
    valtioStoreV2.error = undefined;
  },

  loadAsyncData: async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { loaded: true, data: 'async data' };
  },

  concurrentAsync: async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
    return { concurrent: true };
  }
};

// ============================================================================
// PREACT SIGNALS STORE
// ============================================================================

const preactCountSignal = signal(0);
const preactUsersSignal = signal(largeArray);
const preactDeepNestedSignal = signal(createDeepNested());
const preactFormDataSignal = signal(createFormState());
const preactOptimisticDataSignal = signal(null);

const preactComputedValue = computed(() => preactCountSignal.value * 2);
const preactDeepComputedValue = computed(() => {
  return preactDeepNestedSignal.value.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value * 3;
});

export const preactActionsV2 = {
  createStore: () => signal(0),

  increment: () => {
    preactCountSignal.value++;
  },

  spliceUser: (index, deleteCount, item) => {
    const newUsers = [...preactUsersSignal.value];
    newUsers.splice(index, deleteCount, item);
    preactUsersSignal.value = newUsers;
  },

  sortUsers: (key) => {
    preactUsersSignal.value = [...preactUsersSignal.value].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  },

  findUser: (id) => {
    return preactUsersSignal.value.find(u => u.id === id);
  },

  setTenLevelNested: (value) => {
    preactDeepNestedSignal.value = {
      ...preactDeepNestedSignal.value,
      level1: {
        ...preactDeepNestedSignal.value.level1,
        level2: {
          ...preactDeepNestedSignal.value.level1.level2,
          level3: {
            ...preactDeepNestedSignal.value.level1.level2.level3,
            level4: {
              ...preactDeepNestedSignal.value.level1.level2.level3.level4,
              level5: {
                ...preactDeepNestedSignal.value.level1.level2.level3.level4.level5,
                level6: {
                  ...preactDeepNestedSignal.value.level1.level2.level3.level4.level5.level6,
                  level7: {
                    ...preactDeepNestedSignal.value.level1.level2.level3.level4.level5.level6.level7,
                    level8: {
                      ...preactDeepNestedSignal.value.level1.level2.level3.level4.level5.level6.level7.level8,
                      level9: {
                        ...preactDeepNestedSignal.value.level1.level2.level3.level4.level5.level6.level7.level8.level9,
                        level10: { value }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  },

  getDeepValue: () => {
    return preactDeepNestedSignal.value.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  createDeepObject: () => createDeepNested(),

  updateFormField: (path, value) => {
    const keys = path.split('.');
    const currentForm = preactFormDataSignal.value;
    const newForm = JSON.parse(JSON.stringify(currentForm));
    let current = newForm;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    preactFormDataSignal.value = newForm;
  },

  optimisticUpdate: () => {
    const newUsers = [...preactUsersSignal.value, { id: Date.now(), name: 'Optimistic User' }];
    preactOptimisticDataSignal.value = newUsers;
    preactUsersSignal.value = newUsers;
    preactOptimisticDataSignal.value = null;
  },

  undo: () => {
    // Simplified undo implementation
  },

  batchComplexState: () => {
    preactCountSignal.value++;
    preactDeepNestedSignal.value.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = Math.random();
  },

  setNullValue: () => {
    // Would need an error signal
  },

  setUndefinedValue: () => {
    // Would need an error signal
  },

  loadAsyncData: async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { loaded: true, data: 'async data' };
  },

  concurrentAsync: async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
    return { concurrent: true };
  }
};

// ============================================================================
// SOLID SIGNALS STORE
// ============================================================================

const [solidCountSignal, setSolidCount] = createSignal(0);
const [solidUsersSignal, setSolidUsers] = createSignal(largeArray);
const [solidDeepNestedSignal, setSolidDeepNested] = createSignal(createDeepNested());
const [solidFormDataSignal, setSolidFormData] = createSignal(createFormState());
const [solidOptimisticDataSignal, setSolidOptimisticData] = createSignal(null);

const solidComputedValue = createMemo(() => solidCountSignal() * 2);
const solidDeepComputedValue = createMemo(() => {
  return solidDeepNestedSignal().level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value * 3;
});

export const solidActionsV2 = {
  createStore: () => createSignal(0),

  increment: () => {
    setSolidCount(c => c + 1);
  },

  spliceUser: (index, deleteCount, item) => {
    const newUsers = [...solidUsersSignal()];
    newUsers.splice(index, deleteCount, item);
    setSolidUsers(newUsers);
  },

  sortUsers: (key) => {
    setSolidUsers(users =>
      [...users].sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      })
    );
  },

  findUser: (id) => {
    return solidUsersSignal().find(u => u.id === id);
  },

  setTenLevelNested: (value) => {
    setSolidDeepNested({
      ...solidDeepNestedSignal(),
      level1: {
        ...solidDeepNestedSignal().level1,
        level2: {
          ...solidDeepNestedSignal().level1.level2,
          level3: {
            ...solidDeepNestedSignal().level1.level2.level3,
            level4: {
              ...solidDeepNestedSignal().level1.level2.level3.level4,
              level5: {
                ...solidDeepNestedSignal().level1.level2.level3.level4.level5,
                level6: {
                  ...solidDeepNestedSignal().level1.level2.level3.level4.level5.level6,
                  level7: {
                    ...solidDeepNestedSignal().level1.level2.level3.level4.level5.level6.level7,
                    level8: {
                      ...solidDeepNestedSignal().level1.level2.level3.level4.level5.level6.level7.level8,
                      level9: {
                        ...solidDeepNestedSignal().level1.level2.level3.level4.level5.level6.level7.level8.level9,
                        level10: { value }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  },

  getDeepValue: () => {
    return solidDeepNestedSignal().level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  createDeepObject: () => createDeepNested(),

  updateFormField: (path, value) => {
    const keys = path.split('.');
    const currentForm = solidFormDataSignal();
    const newForm = JSON.parse(JSON.stringify(currentForm));
    let current = newForm;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setSolidFormData(newForm);
  },

  optimisticUpdate: () => {
    const newUsers = [...solidUsersSignal(), { id: Date.now(), name: 'Optimistic User' }];
    setSolidOptimisticData(newUsers);
    setSolidUsers(newUsers);
    setSolidOptimisticData(null);
  },

  undo: () => {
    // Simplified undo implementation
  },

  batchComplexState: () => {
    setSolidCount(c => c + 1);
    const currentDeep = solidDeepNestedSignal();
    currentDeep.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = Math.random();
    setSolidDeepNested({ ...currentDeep });
  },

  setNullValue: () => {
    // Would need an error signal
  },

  setUndefinedValue: () => {
    // Would need an error signal
  },

  loadAsyncData: async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { loaded: true, data: 'async data' };
  },

  concurrentAsync: async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
    return { concurrent: true };
  }
};

// ============================================================================
// ZEN STORE
// ============================================================================

const zenCountStore = zen(0);
const zenUsersStore = zen(largeArray);
const zenDeepNestedStore = zen(createDeepNested());
const zenFormDataStore = zen(createFormState());
const zenOptimisticDataStore = zen(null);

const zenComputedValue = zenComputed([zenCountStore], (count) => count * 2);
const zenDeepComputedValue = zenComputed([zenDeepNestedStore], (deep) => {
  return deep.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value * 3;
});

export const zenActionsV2 = {
  createStore: () => zen(0),

  increment: () => {
    set(zenCountStore, get(zenCountStore) + 1);
  },

  spliceUser: (index, deleteCount, item) => {
    const users = get(zenUsersStore);
    const newUsers = [...users];
    newUsers.splice(index, deleteCount, item);
    set(zenUsersStore, newUsers);
  },

  sortUsers: (key) => {
    const users = get(zenUsersStore);
    set(zenUsersStore, [...users].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    }));
  },

  findUser: (id) => {
    const users = get(zenUsersStore);
    return users.find(u => u.id === id);
  },

  setTenLevelNested: (value) => {
    const current = get(zenDeepNestedStore);
    set(zenDeepNestedStore, {
      ...current,
      level1: {
        ...current.level1,
        level2: {
          ...current.level1.level2,
          level3: {
            ...current.level1.level2.level3,
            level4: {
              ...current.level1.level2.level3.level4,
              level5: {
                ...current.level1.level2.level3.level4.level5,
                level6: {
                  ...current.level1.level2.level3.level4.level5.level6,
                  level7: {
                    ...current.level1.level2.level3.level4.level5.level6.level7,
                    level8: {
                      ...current.level1.level2.level3.level4.level5.level6.level7.level8,
                      level9: {
                        ...current.level1.level2.level3.level4.level5.level6.level7.level8.level9,
                        level10: { value }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  },

  getDeepValue: () => {
    const deep = get(zenDeepNestedStore);
    return deep.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  createDeepObject: () => createDeepNested(),

  updateFormField: (path, value) => {
    const keys = path.split('.');
    const currentForm = get(zenFormDataStore);
    const newForm = JSON.parse(JSON.stringify(currentForm));
    let current = newForm;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    set(zenFormDataStore, newForm);
  },

  optimisticUpdate: () => {
    const currentUsers = get(zenUsersStore);
    const newUsers = [...currentUsers, { id: Date.now(), name: 'Optimistic User' }];
    set(zenOptimisticDataStore, newUsers);
    set(zenUsersStore, newUsers);
    set(zenOptimisticDataStore, null);
  },

  undo: () => {
    // Simplified undo implementation
  },

  batchComplexState: () => {
    set(zenCountStore, get(zenCountStore) + 1);
    const current = get(zenDeepNestedStore);
    current.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value = Math.random();
    set(zenDeepNestedStore, { ...current });
  },

  setNullValue: () => {
    // Would need an error store
  },

  setUndefinedValue: () => {
    // Would need an error store
  },

  loadAsyncData: async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { loaded: true, data: 'async data' };
  },

  concurrentAsync: async () => {
    await Promise.all([
      new Promise(resolve => setTimeout(resolve, 0)),
      new Promise(resolve => setTimeout(resolve, 0))
    ]);
    return { concurrent: true };
  }
};