import { create } from 'zustand';

export const zustandStore = create((set, get) => ({
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
  items: Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i })),
  increment: () => set((state) => ({
    count: state.count + 1,
    doubled: (state.count + 1) * 2
  })),
  setNested: (value: number) => set((state) => ({
    nested: { ...state.nested, value }
  })),
  addUser: (user: any) => set((state) => ({
    users: [...state.users, user]
  })),
  getDouble: () => get().count * 2,
  setLoading: (loading: boolean) => set({ loading }),
  setAsyncData: (data: any) => set({ asyncData: data, loading: false }),
  fetchData: async (data: any) => {
    set({ loading: true });
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 0));
    set({ asyncData: data, loading: false });
  },
  // Batch update - multiple state changes at once
  batchUpdate: (count: number, nestedValue: number, loading: boolean) => set((state) => ({
    count,
    doubled: count * 2,
    nested: { ...state.nested, value: nestedValue },
    loading
  })),
  // Array operations
  filterUsers: (id: number) => set((state) => ({
    users: state.users.filter((u: any) => u.id !== id)
  })),
  removeUser: (id: number) => set((state) => {
    const users = [...state.users];
    const index = users.findIndex((u: any) => u.id === id);
    if (index !== -1) users.splice(index, 1);
    return { users };
  }),
  updateUser: (id: number, data: any) => set((state) => ({
    users: state.users.map((u: any) => u.id === id ? { ...u, ...data } : u)
  })),
  // Deep nested update
  setDeepNested: (value: number) => set((state) => ({
    deepNested: {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: { value }
            }
          }
        }
      }
    }
  })),
  // Large state update
  updateLargeState: (id: number, value: number) => set((state) => ({
    items: state.items.map((i: any) => i.id === id ? { ...i, value } : i)
  }))
}));

export const zustandActions = {
  increment: () => zustandStore.getState().increment(),
  setNested: (value: number) => zustandStore.getState().setNested(value),
  addUser: (user: any) => zustandStore.getState().addUser(user),
  getDoubled: () => zustandStore.getState().getDouble(),
  getNested: () => zustandStore.getState().nested,
  getUsers: () => zustandStore.getState().users,
  // Async actions
  setLoading: (loading: boolean) => zustandStore.getState().setLoading(loading),
  setAsyncData: (data: any) => zustandStore.getState().setAsyncData(data),
  getLoading: () => zustandStore.getState().loading,
  getAsyncData: () => zustandStore.getState().asyncData,
  fetchData: (data: any) => zustandStore.getState().fetchData(data),
  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) =>
    zustandStore.getState().batchUpdate(count, nestedValue, loading),
  filterUsers: (id: number) => zustandStore.getState().filterUsers(id),
  removeUser: (id: number) => zustandStore.getState().removeUser(id),
  updateUser: (id: number, data: any) => zustandStore.getState().updateUser(id, data),
  setDeepNested: (value: number) => zustandStore.getState().setDeepNested(value),
  updateLargeState: (id: number, value: number) =>
    zustandStore.getState().updateLargeState(id, value),
  // Subscription test - measure notifying multiple subscribers
  subscribeMultiple: (count: number) => {
    const unsubscribers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      const unsub = zustandStore.subscribe(() => {
        // Simulate component reading state
        zustandStore.getState().count;
      });
      unsubscribers.push(unsub);
    }
    return () => unsubscribers.forEach(u => u());
  }
};