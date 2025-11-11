/**
 * Test registry for 06-memory group
 * Centralized test definitions ensure consistency across all libraries
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => void | any;
}

export const TESTS = {
  LARGE_STATE_READ: {
    name: 'Large State Read',
    execute: (store) => {
      return store.getCount();
    }
  },
  LARGE_STATE_UPDATE: {
    name: 'Large State Update',
    execute: (store) => {
      store.increment();
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type MemoryTestKey = keyof typeof TESTS;
