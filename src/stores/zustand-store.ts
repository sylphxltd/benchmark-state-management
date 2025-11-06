import { create } from 'zustand';

export const zustandStore = create((set, get) => ({
  count: 0,
  doubled: 0,
  nested: { value: 0 },
  users: [],
  loading: false,
  asyncData: null,
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
  }
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
  fetchData: (data: any) => zustandStore.getState().fetchData(data)
};