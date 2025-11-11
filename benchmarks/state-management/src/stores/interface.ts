/**
 * Unified interface for all state management libraries
 *
 * - Core methods (required): Basic operations all libraries must implement
 * - Optional methods: Library participates in test only if method exists
 * - No manual management of which library supports which test
 */

export interface StateActions {
  // ============================================================================
  // CORE METHODS (Required for all libraries)
  // ============================================================================

  increment(): void;
  getCount(): number;

  // ============================================================================
  // 03-CREATION (Optional)
  // ============================================================================

  createEmptyStore?(): any;

  // ============================================================================
  // 04-COMPLEXITY (Optional)
  // ============================================================================

  readNestedState?(): any;
  updateNestedState?(): void;
  spliceArray?(): void;
  mapLargeArray?(): any[];
  updateMultipleFields?(): void;

  // ============================================================================
  // 06-MEMORY (Optional)
  // ============================================================================

  getLargeArray?(): any[];
  updateLargeArrayItem?(): void;
  cloneLargeState?(): any;
  filterLargeArray?(): any[];

  // ============================================================================
  // 07-FORM (Optional)
  // ============================================================================

  updateFormField?(field: string, value: any): void;
  updateMultipleFormFields?(fields: Record<string, any>): void;
  updateNestedFormField?(path: string, value: any): void;
  resetForm?(): void;
  conditionalFieldUpdate?(): void;

  // ============================================================================
  // 08-ASYNC-REACTIVE (Optional)
  // Only for libraries with native async reactive primitives
  // ============================================================================

  getAsyncValue?(): Promise<any>;
  getChainedAsyncValue?(): Promise<any>;
  getComplexAsyncValue?(): Promise<any>;
}
