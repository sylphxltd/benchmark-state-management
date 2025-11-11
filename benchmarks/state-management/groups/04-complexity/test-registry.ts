/**
 * Test registry for 04-complexity group
 * Tests complex state structures and operations
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  DEEP_NESTED_READ: {
    name: 'Deep Nested Read (10 levels)',
    method: 'readNestedState',
    execute: (store) => {
      return store.readNestedState();
    }
  },
  DEEP_NESTED_WRITE: {
    name: 'Deep Nested Write (10 levels)',
    method: 'updateNestedState',
    execute: (store) => {
      store.updateNestedState();
    }
  },
  ARRAY_SPLICE: {
    name: 'Array Splice (middle)',
    method: 'spliceArray',
    execute: (store) => {
      // Insert/delete in middle of array - tests immutable update efficiency
      store.spliceArray();
    }
  },
  LARGE_ARRAY_MAP: {
    name: 'Large Array Map (1000 items)',
    method: 'mapLargeArray',
    execute: (store) => {
      // Transform large array - tests iteration performance
      store.mapLargeArray();
    }
  },
  MULTI_FIELD_UPDATE: {
    name: 'Multi-field Update (unrelated)',
    method: 'updateMultipleFields',
    execute: (store) => {
      // Update multiple unrelated fields - tests batching/efficiency
      store.updateMultipleFields();
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type ComplexityTestKey = keyof typeof TESTS;
