import { signal, computed as preactComputed } from '@preact/signals';

export const preactCountSignal = signal(0);
export const preactDoubledSignal = preactComputed(() => preactCountSignal.value * 2);
export const preactNestedSignal = signal({ value: 0 });
export const preactUsersSignal = signal([]);
export const preactLoadingSignal = signal(false);
export const preactAsyncDataSignal = signal(null);

export const preactActions = {
  increment: () => preactCountSignal.value++,
  setNested: (value: number) => preactNestedSignal.value = { value },
  addUser: (user: any) => preactUsersSignal.value = [...preactUsersSignal.value, user],
  getDoubled: () => preactDoubledSignal.value,
  getNested: () => preactNestedSignal.value,
  getUsers: () => preactUsersSignal.value,
  // Async actions
  setLoading: (loading: boolean) => preactLoadingSignal.value = loading,
  setAsyncData: (data: any) => {
    preactAsyncDataSignal.value = data;
    preactLoadingSignal.value = false;
  },
  getLoading: () => preactLoadingSignal.value,
  getAsyncData: () => preactAsyncDataSignal.value,
  fetchData: async (data: any) => {
    preactLoadingSignal.value = true;
    await new Promise(resolve => setTimeout(resolve, 0));
    preactAsyncDataSignal.value = data;
    preactLoadingSignal.value = false;
  }
};