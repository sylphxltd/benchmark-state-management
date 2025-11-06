import { proxy } from 'valtio';

export const valtioStore = proxy({
  count: 0,
  nested: { value: 0 },
  users: [],
  loading: false,
  asyncData: null,
  get doubled() {
    return this.count * 2;
  },
  increment() {
    this.count++;
  },
  setNested(value: number) {
    this.nested.value = value;
  },
  addUser(user: any) {
    this.users.push(user);
  },
  setLoading(loading: boolean) {
    this.loading = loading;
  },
  setAsyncData(data: any) {
    this.asyncData = data;
    this.loading = false;
  },
  async fetchData(data: any) {
    this.loading = true;
    await new Promise(resolve => setTimeout(resolve, 0));
    this.asyncData = data;
    this.loading = false;
  }
});

export const valtioActions = {
  increment: () => valtioStore.increment(),
  setNested: (value: number) => valtioStore.setNested(value),
  addUser: (user: any) => valtioStore.addUser(user),
  getDoubled: () => valtioStore.doubled,
  getNested: () => valtioStore.nested,
  getUsers: () => valtioStore.users,
  // Async actions
  setLoading: (loading: boolean) => valtioStore.setLoading(loading),
  setAsyncData: (data: any) => valtioStore.setAsyncData(data),
  getLoading: () => valtioStore.loading,
  getAsyncData: () => valtioStore.asyncData,
  fetchData: (data: any) => valtioStore.fetchData(data)
};