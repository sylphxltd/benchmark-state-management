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

// Task state interface for async operations
export interface TaskState<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}

// Task function - Zen's way to handle async operations
export function task<T, Args extends any[]>(
  fn: (...args: Args) => Promise<T>
): {
  store: ZenStore<TaskState<T>>;
  run: (...args: Args) => Promise<T>;
} {
  const store = zen<TaskState<T>>({
    loading: false,
    data: null,
    error: null
  });

  const run = async (...args: Args): Promise<T> => {
    store.set({ loading: true, data: null, error: null });
    try {
      const result = await fn(...args);
      store.set({ loading: false, data: result, error: null });
      return result;
    } catch (error) {
      store.set({ loading: false, data: null, error: error as Error });
      throw error;
    }
  };

  return { store, run };
}

// Zen store for benchmark
export const zenCountStore = zen(0);
export const zenNestedStore = zen({ value: 0 });
export const zenUsersStore = zen<any[]>([]);

// Async task using task() - Zen's proper async pattern
export const zenFetchTask = task(async (data: any) => {
  await new Promise(resolve => setTimeout(resolve, 0));
  return data;
});

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
  // Async actions using task() - Zen's proper pattern
  setLoading: (loading: boolean) => {
    const currentState = zenFetchTask.store.get();
    zenFetchTask.store.set({ ...currentState, loading });
  },
  setAsyncData: (data: any) => {
    zenFetchTask.store.set({ loading: false, data, error: null });
  },
  getLoading: () => zenFetchTask.store.get().loading,
  getAsyncData: () => zenFetchTask.store.get().data,
  fetchData: (data: any) => zenFetchTask.run(data)
};