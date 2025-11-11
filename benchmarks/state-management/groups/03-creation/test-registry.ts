/**
 * Test registry for 03-creation group
 * Centralized test definitions ensure consistency across all libraries
 */

export interface TestDefinition {
  name: string;
  execute: (store: any) => void | any;
}

export const TESTS = {
  STORE_CREATION: {
    name: 'Store Creation',
    execute: (store) => {
      // Store creation is handled by setup/initialization
      // This test measures the overhead of store access
      return store;
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type CreationTestKey = keyof typeof TESTS;
