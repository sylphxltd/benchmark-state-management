import { atom, createStore } from 'jotai';

export const jotaiStore = createStore();
export const jotaiCountAtom = atom(0);
export const jotaiDoubledAtom = atom(get => get(jotaiCountAtom) * 2);
export const jotaiNestedAtom = atom({ value: 0 });
export const jotaiUsersAtom = atom([]);
export const jotaiLoadingAtom = atom(false);
export const jotaiAsyncDataAtom = atom(null);

export const jotaiActions = {
  increment: () => jotaiStore.set(jotaiCountAtom, c => c + 1),
  setNested: (value: number) => jotaiStore.set(jotaiNestedAtom, { value }),
  addUser: (user: any) => jotaiStore.set(jotaiUsersAtom, users => [...users, user]),
  getDoubled: () => jotaiStore.get(jotaiDoubledAtom),
  getNested: () => jotaiStore.get(jotaiNestedAtom),
  getUsers: () => jotaiStore.get(jotaiUsersAtom),
  // Async actions
  setLoading: (loading: boolean) => jotaiStore.set(jotaiLoadingAtom, loading),
  setAsyncData: (data: any) => jotaiStore.set(jotaiAsyncDataAtom, data),
  getLoading: () => jotaiStore.get(jotaiLoadingAtom),
  getAsyncData: () => jotaiStore.get(jotaiAsyncDataAtom),
  fetchData: async (data: any) => {
    jotaiStore.set(jotaiLoadingAtom, true);
    await new Promise(resolve => setTimeout(resolve, 0));
    jotaiStore.set(jotaiAsyncDataAtom, data);
    jotaiStore.set(jotaiLoadingAtom, false);
  }
};