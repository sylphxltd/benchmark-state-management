import { createSignal, createMemo } from 'solid-js';

export const [solidCountSignal, setSolidCount] = createSignal(0);
export const solidDoubledSignal = createMemo(() => solidCountSignal() * 2);
export const [solidNestedSignal, setSolidNested] = createSignal({ value: 0 });
export const [solidUsersSignal, setSolidUsers] = createSignal([]);
export const [solidLoadingSignal, setSolidLoading] = createSignal(false);
export const [solidAsyncDataSignal, setSolidAsyncData] = createSignal(null);

export const solidActions = {
  increment: () => setSolidCount(c => c + 1),
  setNested: (value: number) => setSolidNested({ value }),
  addUser: (user: any) => setSolidUsers(users => [...users, user]),
  getDoubled: () => solidDoubledSignal(),
  getNested: () => solidNestedSignal(),
  getUsers: () => solidUsersSignal(),
  // Async actions
  setLoading: (loading: boolean) => setSolidLoading(loading),
  setAsyncData: (data: any) => {
    setSolidAsyncData(data);
    setSolidLoading(false);
  },
  getLoading: () => solidLoadingSignal(),
  getAsyncData: () => solidAsyncDataSignal(),
  fetchData: async (data: any) => {
    setSolidLoading(true);
    await new Promise(resolve => setTimeout(resolve, 0));
    setSolidAsyncData(data);
    setSolidLoading(false);
  }
};