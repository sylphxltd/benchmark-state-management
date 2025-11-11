/**
 * Test registry for 08-async-reactive group
 * Tests native async reactive primitives (async atoms/signals)
 *
 * Participating libraries: Jotai (async atoms), Zen 2.0 (async reactive)
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  ASYNC_READ: {
    name: 'Async Reactive Read',
    method: 'getAsyncValue',
    execute: async (store) => {
      // Read async reactive primitive that auto-resolves
      return await store.getAsyncValue();
    }
  },
  ASYNC_CHAINED: {
    name: 'Async Reactive Chained',
    method: 'getChainedAsyncValue',
    execute: async (store) => {
      // Chained async reactive values (one depends on another)
      return await store.getChainedAsyncValue();
    }
  },
  ASYNC_COMPLEX: {
    name: 'Async Reactive Complex',
    method: 'getComplexAsyncValue',
    execute: async (store) => {
      // Multiple async dependencies resolved together
      return await store.getComplexAsyncValue();
    }
  },
  ASYNC_CONCURRENT: {
    name: 'Async Reactive Concurrent',
    method: 'getAsyncValue',
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
