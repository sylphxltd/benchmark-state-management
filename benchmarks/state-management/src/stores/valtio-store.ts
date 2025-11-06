import { proxy, subscribe } from 'valtio';

export const valtioStore = proxy({
  count: 0,
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
  },
  // Batch update - multiple state changes at once
  batchUpdate(count: number, nestedValue: number, loading: boolean) {
    this.count = count;
    this.nested.value = nestedValue;
    this.loading = loading;
  },
  // Array operations
  filterUsers(id: number) {
    this.users = this.users.filter((u: any) => u.id !== id);
  },
  removeUser(id: number) {
    const index = this.users.findIndex((u: any) => u.id === id);
    if (index !== -1) this.users.splice(index, 1);
  },
  updateUser(id: number, data: any) {
    const user = this.users.find((u: any) => u.id === id);
    if (user) Object.assign(user, data);
  },
  // Deep nested update
  setDeepNested(value: number) {
    this.deepNested.level1.level2.level3.level4.level5.value = value;
  },
  // Large state update
  updateLargeState(id: number, value: number) {
    const item = this.items.find((i: any) => i.id === id);
    if (item) item.value = value;
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
  fetchData: (data: any) => valtioStore.fetchData(data),
  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) =>
    valtioStore.batchUpdate(count, nestedValue, loading),
  filterUsers: (id: number) => valtioStore.filterUsers(id),
  removeUser: (id: number) => valtioStore.removeUser(id),
  updateUser: (id: number, data: any) => valtioStore.updateUser(id, data),
  setDeepNested: (value: number) => valtioStore.setDeepNested(value),
  updateLargeState: (id: number, value: number) => valtioStore.updateLargeState(id, value),
  // Subscription test - measure notifying multiple subscribers
  subscribeMultiple: (count: number) => {
    const unsubscribers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      const unsub = subscribe(valtioStore, () => {
        // Simulate component reading state
        valtioStore.count;
      });
      unsubscribers.push(unsub);
    }
    return () => unsubscribers.forEach(u => u());
  }
};