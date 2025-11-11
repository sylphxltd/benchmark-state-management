/**
 * Test registry for 06-memory group
 * Tests performance with large state structures
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  LARGE_STATE_READ: {
    name: 'Large State Read (1000 items)',
    method: 'getLargeArray',
    execute: (store) => {
      return store.getLargeArray();
    }
  },
  LARGE_STATE_UPDATE: {
    name: 'Large State Update (1000 items)',
    method: 'updateLargeArrayItem',
    execute: (store) => {
      store.updateLargeArrayItem();
    }
  },
  LARGE_STATE_CLONE: {
    name: 'Large State Clone/Copy',
    method: 'cloneLargeState',
    execute: (store) => {
      // Clone/copy entire large state structure
      return store.cloneLargeState();
    }
  },
  LARGE_STATE_FILTER: {
    name: 'Large State Filter',
    method: 'filterLargeArray',
    execute: (store) => {
      // Filter large array - tests derived state performance
      return store.filterLargeArray();
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type MemoryTestKey = keyof typeof TESTS;
