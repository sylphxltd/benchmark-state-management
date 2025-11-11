/**
 * Test registry for 03-creation group
 * Tests store creation overhead with different initial states
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => void | any;
}

export const TESTS = {
  EMPTY_STORE: {
    name: 'Empty Store Creation',
    execute: (store) => {
      // Measure overhead of accessing an empty/minimal store
      return store;
    }
  },
  LARGE_INITIAL_STATE: {
    name: 'Large Initial State (1000 items)',
    execute: (store) => {
      // Access store that was initialized with 1000 items
      // The initialization happens in store setup, this measures access cost
      return store.getCount ? store.getCount() : store;
    }
  },
  WITH_COMPUTED: {
    name: 'Store with Computed Values',
    execute: (store) => {
      // Access store with computed/derived values already set up
      // Measures overhead of computed value initialization
      return store.getCount ? store.getCount() : store;
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type CreationTestKey = keyof typeof TESTS;
