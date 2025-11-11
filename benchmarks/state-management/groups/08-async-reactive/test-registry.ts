/**
 * Test registry for 08-async-reactive group
 * Tests native async reactive primitives (async atoms/signals)
 *
 * Participating libraries: Jotai (async atoms), Zen 2.0 (async reactive)
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => void | any;
}

export const TESTS = {
  ASYNC_READ: {
    name: 'Async Reactive Read',
    execute: async (store) => {
      // Read async reactive primitive that auto-resolves
      return await store.getAsyncValue();
    }
  },
  ASYNC_CHAINED: {
    name: 'Async Reactive Chained',
    execute: async (store) => {
      // Chained async reactive values (one depends on another)
      return await store.getChainedAsyncValue();
    }
  },
  ASYNC_COMPLEX: {
    name: 'Async Reactive Complex',
    execute: async (store) => {
      // Multiple async dependencies resolved together
      return await store.getComplexAsyncValue();
    }
  },
  ASYNC_CONCURRENT: {
    name: 'Async Reactive Concurrent',
    execute: async (store) => {
      // Multiple independent async values fetched concurrently
      return await Promise.all([
        store.getAsyncValue(),
        store.getAsyncValue(),
        store.getAsyncValue()
      ]);
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type AsyncReactiveTestKey = keyof typeof TESTS;
