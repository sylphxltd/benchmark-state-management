/**
 * Test registry for 07-form group
 * Tests form state management patterns
 */

export interface TestDefinition {
  name: string;
  method: string; // Required method name for this test
  execute: (store: any) => void | any;
}

export const TESTS = {
  SINGLE_FIELD_UPDATE: {
    name: 'Single Field Update',
    method: 'updateFormField',
    execute: (store) => {
      // Update one form field - most common operation
      store.updateFormField('firstName', 'John');
    }
  },
  MULTIPLE_FIELDS_UPDATE: {
    name: 'Multiple Fields Update (3 fields)',
    method: 'updateMultipleFormFields',
    execute: (store) => {
      // Update multiple fields at once (firstName, lastName, email)
      store.updateMultipleFormFields({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com'
      });
    }
  },
  NESTED_FIELD_UPDATE: {
    name: 'Nested Field Update',
    method: 'updateNestedFormField',
    execute: (store) => {
      // Update nested form field (address.city)
      store.updateNestedFormField('address.city', 'New York');
    }
  },
  FULL_FORM_RESET: {
    name: 'Full Form Reset',
    method: 'resetForm',
    execute: (store) => {
      // Reset entire form to initial state
      store.resetForm();
    }
  },
  CONDITIONAL_FIELD_UPDATE: {
    name: 'Conditional Field Update',
    method: 'conditionalFieldUpdate',
    execute: (store) => {
      // Update field based on another field's value
      // e.g., enable billing address when checkbox checked
      store.conditionalFieldUpdate();
    }
  },
} as const satisfies Record<string, TestDefinition>;

export type FormTestKey = keyof typeof TESTS;
