/**
 * Test registry for 03-creation group
 * Tests store creation overhead by creating stores multiple times
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  CREATION_X1: {
    name: 'Store Creation (x1)',
    method: 'createEmptyStore',
    execute: (store) => {
      // Create 1 store
      store.createEmptyStore();
    }
  },
  CREATION_X10: {
    name: 'Store Creation (x10)',
    method: 'createEmptyStore',
    execute: (store) => {
      // Create 10 stores
      for (let i = 0; i < 10; i++) {
        store.createEmptyStore();
      }
    }
  },
  CREATION_X100: {
    name: 'Store Creation (x100)',
    method: 'createEmptyStore',
    execute: (store) => {
      // Create 100 stores
      for (let i = 0; i < 100; i++) {
        store.createEmptyStore();
      }
    }
  },
  CREATION_X1000: {
    name: 'Store Creation (x1000)',
    method: 'createEmptyStore',
    execute: (store) => {
      // Create 1000 stores
      for (let i = 0; i < 1000; i++) {
        store.createEmptyStore();
      }
    }
  },
  CREATION_X10000: {
    name: 'Store Creation (x10000)',
    method: 'createEmptyStore',
    execute: (store) => {
      // Create 10000 stores
      for (let i = 0; i < 10000; i++) {
        store.createEmptyStore();
      }
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type CreationTestKey = keyof typeof TESTS;
