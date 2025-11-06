import { makeAutoObservable } from 'mobx';

export class MobXStore {
  count = 0;
  nested = { value: 0 };
  users = [];
  loading = false;
  asyncData = null;

  constructor() {
    makeAutoObservable(this);
  }

  get doubled() {
    return this.count * 2;
  }

  increment() {
    this.count++;
  }

  setNested(value: number) {
    this.nested.value = value;
  }

  addUser(user: any) {
    this.users.push(user);
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setAsyncData(data: any) {
    this.asyncData = data;
    this.loading = false;
  }

  async fetchData(data: any) {
    this.loading = true;
    await new Promise(resolve => setTimeout(resolve, 0));
    this.asyncData = data;
    this.loading = false;
  }
}

export const mobxStore = new MobXStore();

export const mobxActions = {
  increment: () => mobxStore.increment(),
  setNested: (value: number) => mobxStore.setNested(value),
  addUser: (user: any) => mobxStore.addUser(user),
  getDoubled: () => mobxStore.doubled,
  getNested: () => mobxStore.nested,
  getUsers: () => mobxStore.users,
  // Async actions
  setLoading: (loading: boolean) => mobxStore.setLoading(loading),
  setAsyncData: (data: any) => mobxStore.setAsyncData(data),
  getLoading: () => mobxStore.loading,
  getAsyncData: () => mobxStore.asyncData,
  fetchData: (data: any) => mobxStore.fetchData(data)
};