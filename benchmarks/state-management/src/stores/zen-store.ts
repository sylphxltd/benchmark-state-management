/**
 * Zen Store Implementation
 * Using @sylphx/zen v1.0.0
 * Real implementation with karma() for async operations
 */

import { zen, get, set, subscribe, karma, runKarma, getKarmaState, computed, type Zen, type KarmaZen } from '@sylphx/zen';

// Basic stores
export const zenCountStore = zen(0);
export const zenNestedStore = zen({ value: 0 });
export const zenUsersStore = zen<any[]>([]);

// Deep nested state (5-level)
export const zenDeepNestedStore = zen({
  level1: {
    level2: {
      level3: {
        level4: {
          level5: { value: 0 }
        }
      }
    }
  }
});

// Large state array
export const zenItemsStore = zen(Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i })));

// Computed value
export const zenDoubledStore = computed([zenCountStore], (count) => count * 2);

// Async operation using karma (Zen's async pattern)
export const zenFetchKarma = karma(async (data: any) => {
  await new Promise(resolve => setTimeout(resolve, 0));
  return data;
});

export const zenActions = {
  // Basic operations
  increment: () => set(zenCountStore, get(zenCountStore) + 1),
  setNested: (value: number) => set(zenNestedStore, { value }),
  addUser: (user: any) => set(zenUsersStore, [...get(zenUsersStore), user]),

  // Getters
  getDoubled: () => get(zenDoubledStore),
  getNested: () => get(zenNestedStore),
  getUsers: () => get(zenUsersStore),

  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) => {
    set(zenCountStore, count);
    set(zenNestedStore, { value: nestedValue });
    // For loading, we use karma state
    const state = getKarmaState(zenFetchKarma);
    // Note: Can't directly set loading in karma, it's managed by runKarma
  },

  // Array operations
  filterUsers: (id: number) => {
    const users = get(zenUsersStore);
    set(zenUsersStore, users.filter((u: any) => u.id !== id));
  },

  removeUser: (id: number) => {
    const users = get(zenUsersStore);
    const index = users.findIndex((u: any) => u.id === id);
    if (index !== -1) {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      set(zenUsersStore, newUsers);
    }
  },

  updateUser: (id: number, data: any) => {
    const users = get(zenUsersStore);
    const user = users.find((u: any) => u.id === id);
    if (user) {
      const newUsers = users.map((u: any) =>
        u.id === id ? { ...u, ...data } : u
      );
      set(zenUsersStore, newUsers);
    }
  },

  // Deep nested update
  setDeepNested: (value: number) => {
    const current = get(zenDeepNestedStore);
    set(zenDeepNestedStore, {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: { value }
            }
          }
        }
      }
    });
  },

  // Large state update
  updateLargeState: (id: number, value: number) => {
    const items = get(zenItemsStore);
    const item = items.find((i: any) => i.id === id);
    if (item) {
      const newItems = items.map((i: any) =>
        i.id === id ? { ...i, value } : i
      );
      set(zenItemsStore, newItems);
    }
  },

  // Multiple subscriptions test
  subscribeMultiple: (count: number) => {
    const unsubscribers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      const unsub = subscribe(zenCountStore, () => {
        // Simulate component reading state
        get(zenCountStore);
      });
      unsubscribers.push(unsub);
    }
    return () => unsubscribers.forEach(u => u());
  },

  // Async actions using karma
  setLoading: (loading: boolean) => {
    // Karma manages loading state internally, can't set directly
    // This is a limitation of the karma pattern
    const state = getKarmaState(zenFetchKarma);
  },

  setAsyncData: (data: any) => {
    // Karma manages data state internally through runKarma
    // Can't set directly - need to run karma
  },

  getLoading: () => getKarmaState(zenFetchKarma).loading,
  getAsyncData: () => {
    const state = getKarmaState(zenFetchKarma);
    return state.loading ? undefined : state.data;
  },

  fetchData: (data: any) => runKarma(zenFetchKarma, data),

  // Reactive async karma access - read already computed state
  getAsyncKarma: () => {
    const state = getKarmaState(zenFetchKarma);
    return state.data;
  }
};
