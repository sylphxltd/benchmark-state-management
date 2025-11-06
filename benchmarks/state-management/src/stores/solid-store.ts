import { createSignal, createMemo, createEffect } from 'solid-js';

export const [solidCountSignal, setSolidCount] = createSignal(0);
export const solidDoubledSignal = createMemo(() => solidCountSignal() * 2);
export const [solidNestedSignal, setSolidNested] = createSignal({ value: 0 });
export const [solidUsersSignal, setSolidUsers] = createSignal([]);
export const [solidLoadingSignal, setSolidLoading] = createSignal(false);
export const [solidAsyncDataSignal, setSolidAsyncData] = createSignal(null);
// Deep nesting for 5-level test
export const [solidDeepNestedSignal, setSolidDeepNested] = createSignal({
  level1: {
    level2: {
      level3: {
        level4: {
          level5: { value: 0 }
        }
      }
    }
  }
});
// Large state array
export const [solidItemsSignal, setSolidItems] = createSignal(
  Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i }))
);

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
  },
  // New benchmark actions
  batchUpdate: (count: number, nestedValue: number, loading: boolean) => {
    setSolidCount(count);
    setSolidNested({ value: nestedValue });
    setSolidLoading(loading);
  },
  filterUsers: (id: number) =>
    setSolidUsers(users => users.filter((u: any) => u.id !== id)),
  removeUser: (id: number) => {
    const users = [...solidUsersSignal()];
    const index = users.findIndex((u: any) => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      setSolidUsers(users);
    }
  },
  updateUser: (id: number, data: any) =>
    setSolidUsers(users =>
      users.map((u: any) => u.id === id ? { ...u, ...data } : u)
    ),
  setDeepNested: (value: number) =>
    setSolidDeepNested({
      level1: {
        level2: {
          level3: {
            level4: {
              level5: { value }
            }
          }
        }
      }
    }),
  updateLargeState: (id: number, value: number) =>
    setSolidItems(items =>
      items.map((i: any) => i.id === id ? { ...i, value } : i)
    ),
  // Subscription test - measure notifying multiple subscribers
  subscribeMultiple: (count: number) => {
    const disposers: (() => void)[] = [];
    for (let i = 0; i < count; i++) {
      createEffect(() => {
        // Simulate component reading state
        solidCountSignal();
      });
      // Note: Solid's createEffect doesn't return a disposer directly
      // This is a simplified version for benchmarking
      disposers.push(() => {});
    }
    return () => disposers.forEach(d => d());
  }
};