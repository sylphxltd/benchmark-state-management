import { makeAutoObservable, runInAction, autorun } from 'mobx';

export class MobXStore {
  count = 0;
  nested = { value: 0 };
  users = [];
  loading = false;
  asyncData = null;
  // Deep nesting for 5-level test
  deepNested = {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: { value: 0 }
          }
        }
      }
    }
  };
  // Large state array
  items = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i }));

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

  // Batch update - multiple state changes at once
  batchUpdate(count: number, nestedValue: number, loading: boolean) {
    runInAction(() => {
      this.count = count;
      this.nested.value = nestedValue;
      this.loading = loading;
    });
  }

  // Array operations
  filterUsers(id: number) {
    this.users = this.users.filter((u: any) => u.id !== id);
  }

  removeUser(id: number) {
    const index = this.users.findIndex((u: any) => u.id === id);
    if (index !== -1) this.users.splice(index, 1);
  }

  updateUser(id: number, data: any) {
    const user = this.users.find((u: any) => u.id === id);
    if (user) Object.assign(user, data);
  }

  // Deep nested update
  setDeepNested(value: number) {
    this.deepNested.level1.level2.level3.level4.level5.value = value;
  }

  // Large state update
  updateLargeState(id: number, value: number) {
    const item = this.items.find((i: any) => i.id === id);
    if (item) item.value = value;
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
  fetchData: (data: any) => mobxStore.fetchData(data),
  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) =>
    mobxStore.batchUpdate(count, nestedValue, loading),
  filterUsers: (id: number) => mobxStore.filterUsers(id),
  removeUser: (id: number) => mobxStore.removeUser(id),
  updateUser: (id: number, data: any) => mobxStore.updateUser(id, data),
  setDeepNested: (value: number) => mobxStore.setDeepNested(value),
  updateLargeState: (id: number, value: number) => mobxStore.updateLargeState(id, value),
  // Subscription test - measure notifying multiple subscribers
  subscribeMultiple: (count: number) => {
    const disposers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      const dispose = autorun(() => {
        // Simulate component reading state
        mobxStore.count;
      });
      disposers.push(dispose);
    }
    return () => disposers.forEach(d => d());
  }
};