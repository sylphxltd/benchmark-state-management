/**
 * Test registry for 15-real-world-patterns group
 * Tests complex real-world patterns that go beyond basic read/write
 * These tests focus on unique patterns not covered by comprehensive tests
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  OPTIMISTIC_UPDATE: {
    name: 'Optimistic Update with Rollback',
    method: 'optimisticUpdate',
    execute: (store) => {
      // Simulate: Update UI immediately → API fails → rollback to previous state
      // Tests: snapshot/restore, async state handling
      const previousState = store.getSnapshot();
      store.updateItem(123, { name: 'New Name' }); // optimistic update
      store.rollback(previousState); // simulate API failure rollback
    }
  },

  UNDO_REDO: {
    name: 'Undo/Redo Stack',
    method: 'undoRedo',
    execute: (store) => {
      // Execute action → save to history → undo → redo
      // Tests: history management, state restoration
      store.executeWithHistory(() => {
        store.updateValue(10);
      });
      store.undo();
      store.redo();
    }
  },

  DERIVED_STATE_CHAIN: {
    name: 'Derived State Chain (3 levels)',
    method: 'derivedChain',
    execute: (store) => {
      // cartItems → subtotal → tax (15%) → total
      // Tests: computed/derived state efficiency, dependency tracking
      store.updateCartItems([
        { price: 10, qty: 2 },
        { price: 20, qty: 1 }
      ]);
      const total = store.getTotalWithTax(); // should trigger: subtotal → tax → total
      return total;
    }
  },

  CROSS_FIELD_VALIDATION: {
    name: 'Cross-field Validation',
    method: 'crossFieldValidation',
    execute: (store) => {
      // password changes → trigger confirmPassword validation
      // country changes → zipCode validation rules change
      // Tests: reactive validation, field dependencies
      store.setField('password', 'newpass123');
      store.setField('confirmPassword', 'oldpass'); // should show error
      const errors = store.getValidationErrors();
      return errors;
    }
  },

  DEBOUNCED_INPUT: {
    name: 'Debounced Search Input',
    method: 'debouncedSearch',
    execute: (store) => {
      // User types 'a' → 'ab' → 'abc' → only last triggers search after 300ms
      // Tests: debouncing, async updates, cancellation
      store.setSearchInput('a');
      store.setSearchInput('ab');
      store.setSearchInput('abc'); // only this should trigger actual search
      const results = store.getSearchResults();
      return results;
    }
  },

  INFINITE_SCROLL: {
    name: 'Infinite Scroll Load More',
    method: 'infiniteScroll',
    execute: (store) => {
      // Scroll to bottom → load page 2 → append to existing list → update hasMore
      // Tests: list merging, pagination state, loading flags
      store.loadInitialPage(); // page 1: items 1-20
      store.loadMoreItems();   // page 2: items 21-40 (append)
      const allItems = store.getAllItems();
      const hasMore = store.hasMoreItems();
      return { count: allItems.length, hasMore };
    }
  },

  NESTED_IMMUTABLE_UPDATE: {
    name: 'Nested Immutable Update (4 levels)',
    method: 'nestedUpdate',
    execute: (store) => {
      // Update user.profile.address.city without mutating
      // Tests: deep update performance, immutability handling
      store.updateNested('user.profile.address.city', 'New York');
      const city = store.getNested('user.profile.address.city');
      return city;
    }
  },

  BATCH_SELECTION: {
    name: 'Batch Selection & Bulk Update',
    method: 'batchSelection',
    execute: (store) => {
      // Shift+Click: select items 1-100 → mark all as read → single re-render
      // Tests: batching, bulk operations, render optimization
      store.selectRange(1, 100);
      store.bulkUpdateSelected({ read: true });
      const selectedCount = store.getSelectedCount();
      return selectedCount;
    }
  },

  CONDITIONAL_RENDERING_LOGIC: {
    name: 'Conditional Rendering Logic',
    method: 'conditionalLogic',
    execute: (store) => {
      // if (isPremium && credits > 10) show feature A else show feature B
      // Tests: computed conditions, multiple dependencies
      store.setUser({ isPremium: true, credits: 15 });
      const shouldShowFeatureA = store.shouldShowFeatureA();
      return shouldShowFeatureA;
    }
  },

  TIME_TRAVEL_DEBUG: {
    name: 'Time Travel Debugging',
    method: 'timeTravel',
    execute: (store) => {
      // Record all state changes → jump to any point in history
      // Tests: state history, snapshot efficiency
      store.startRecording();
      store.updateValue(1);
      store.updateValue(2);
      store.updateValue(3);
      store.jumpToState(1); // go back to state after first update
      const currentValue = store.getValue();
      return currentValue;
    }
  },

  NORMALIZED_RELATIONAL_DATA: {
    name: 'Normalized Relational Data Update',
    method: 'normalizedUpdate',
    execute: (store) => {
      // Update user → all posts by this user reflect the change
      // Tests: normalized data structures, relational updates
      store.updateEntity('users', 123, { name: 'Updated Name' });
      const postsWithUpdatedAuthor = store.getPostsByUser(123);
      return postsWithUpdatedAuthor;
    }
  },

  SUBSCRIPTION_CLEANUP: {
    name: 'Subscription Cleanup',
    method: 'subscriptionCleanup',
    execute: (store) => {
      // Subscribe to changes → unsubscribe → verify no memory leak
      // Tests: cleanup, subscription management
      const unsubscribe = store.subscribe(() => {
        // callback
      });
      store.updateValue(42);
      unsubscribe();
      store.updateValue(43); // should not trigger callback
    }
  }
} as const satisfies Record<string, TestDefinition>;

export type RealWorldPatternTestKey = keyof typeof TESTS;
