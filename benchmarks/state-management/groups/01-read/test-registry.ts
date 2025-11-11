/**
 * Test registry for 01-read group
 * Centralized test definitions ensure consistency across all libraries
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => void | any;
}

export const TESTS = {
  SIMPLE_READ: {
    name: 'Simple Read',
    execute: (store) => {
      store.increment();
      return store.getCount();
    }
  },
  HIGH_FREQ_READ_X10: {
    name: 'High Frequency Read (x10)',
    execute: (store) => {
      for (let i = 0; i < 10; i++) {
        store.getCount();
      }
    }
  },
  HIGH_FREQ_READ_X100: {
    name: 'High Frequency Read (x100)',
    execute: (store) => {
      for (let i = 0; i < 100; i++) {
        store.getCount();
      }
    }
  },
  HIGH_FREQ_READ_X1000: {
    name: 'High Frequency Read (x1000)',
    execute: (store) => {
      for (let i = 0; i < 1000; i++) {
        store.getCount();
      }
    }
  },
  HIGH_FREQ_READ_X10000: {
    name: 'High Frequency Read (x10000)',
    execute: (store) => {
      for (let i = 0; i < 10000; i++) {
        store.getCount();
      }
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type ReadTestKey = keyof typeof TESTS;
