/**
 * Zen Store Implementation
 * Mock implementation based on @sylphx/zen description: "extreme minimalism, extreme speed"
 * Similar to nanostores but with minimal overhead
 */

// Simplified Zen implementation based on described characteristics
export interface ZenStore<T> {
  get(): T;
  set(value: T | ((prev: T) => T)): void;
  subscribe(callback: (value: T) => void): () => void;
}

export function zen<T>(initialValue: T): ZenStore<T> {
  let value = initialValue;
  const listeners = new Set<(value: T) => void>();

  return {
    get: () => value,
    set: (newValue) => {
      value = typeof newValue === 'function' ? (newValue as (prev: T) => T)(value) : newValue;
      listeners.forEach(listener => listener(value));
    },
    subscribe: (callback) => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    }
  };
}

// Zen store for benchmark
export const zenCountStore = zen(0);
export const zenNestedStore = zen({ value: 0 });
export const zenUsersStore = zen<any[]>([]);
export const zenLoadingStore = zen(false);
export const zenAsyncDataStore = zen<any>(null);

// Computed value for Zen (simplified for benchmark)
export function zenComputed<T>(computeFn: () => T): ZenStore<T> {
  let value: T;
  let isDirty = true;

  return {
    get: () => {
      if (isDirty) {
        value = computeFn();
        isDirty = false;
      }
      return value;
    },
    set: () => {
      // Computed values are read-only
    },
    subscribe: (callback) => {
      // Simplified - just compute and return
      callback(computeFn());
      return () => {}; // No-op unsubscribe
    }
  };
}

export const zenDoubledStore = zenComputed(() => zenCountStore.get() * 2);

export const zenActions = {
  increment: () => zenCountStore.set(count => count + 1),
  setNested: (value: number) => zenNestedStore.set({ value }),
  addUser: (user: any) => zenUsersStore.set(users => [...users, user]),
  getDoubled: () => zenDoubledStore.get(),
  getNested: () => zenNestedStore.get(),
  getUsers: () => zenUsersStore.get(),
  // Async actions
  setLoading: (loading: boolean) => zenLoadingStore.set(loading),
  setAsyncData: (data: any) => {
    zenAsyncDataStore.set(data);
    zenLoadingStore.set(false);
  },
  getLoading: () => zenLoadingStore.get(),
  getAsyncData: () => zenAsyncDataStore.get(),
  fetchData: async (data: any) => {
    zenLoadingStore.set(true);
    await new Promise(resolve => setTimeout(resolve, 0));
    zenAsyncDataStore.set(data);
    zenLoadingStore.set(false);
  }
};