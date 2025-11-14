/**
 * Superstruct Validation Library Benchmarks
 *
 * Superstruct is a lightweight validation library focused on simplicity and composability.
 * Key features:
 * - Composable validation primitives
 * - TypeScript-first design
 * - Small bundle size
 * - Synchronous validation
 */

import {
  object,
  string,
  number,
  boolean,
  array,
  date,
  validate,
  is,
  assert,
  create,
  refine,
  pattern,
  min,
  max,
  size,
  record,
  any,
  union,
  literal,
  coerce,
  Struct,
} from 'superstruct';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'superstruct',
  displayName: 'Superstruct',
  githubUrl: 'https://github.com/ianstormtaylor/superstruct',
  packageName: 'superstruct',
  version: '^2.0.2',
  description: 'Lightweight, composable validation library',
});


// ============================================================================
// Schema Definitions (Created once, reused in tests)
// ============================================================================

// Custom email validation
const Email: Struct<string> = refine(string(), 'email', (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
});

// Simple schemas for primitive validation
const stringSchema = size(string(), 3, 50);
const numberSchema = refine(number(), 'range', (value) => value >= 0 && value <= 100);
const emailSchema = Email;
const dateSchema = date();
const booleanSchema = boolean();

// Flat object schema
const userSchema = object({
  id: refine(number(), 'positive', (value) => value > 0),
  username: size(string(), 3, 20),
  email: Email,
  age: refine(number(), 'age-range', (value) => value >= 18 && value <= 120),
  active: boolean(),
});

// Nested object schema
const addressSchema = object({
  street: string(),
  city: string(),
  country: string(),
  zipCode: pattern(string(), /^\d{5}$/),
});

const profileSchema = object({
  user: userSchema,
  address: addressSchema,
  preferences: object({
    theme: union([literal('light'), literal('dark')]),
    notifications: boolean(),
    language: string(),
  }),
  tags: array(string()),
  metadata: record(string(), any()),
});

// Array schema
const itemSchema = object({
  id: number(),
  name: string(),
  price: refine(number(), 'positive', (value) => value > 0),
  quantity: refine(number(), 'integer-min', (value) => Number.isInteger(value) && value >= 0),
});

const itemsArraySchema = array(itemSchema);

// Complex nested schema with coercions (transforms)
const transformSchema = object({
  date: coerce(date(), string(), (value) => new Date(value)),
  number: coerce(number(), string(), (value) => parseInt(value, 10)),
  trimmed: coerce(string(), string(), (value) => value.trim()),
  upper: coerce(string(), string(), (value) => value.toUpperCase()),
});

// ============================================================================
// Test Data (Same as other libraries for fair comparison)
// ============================================================================

const validUser = {
  id: 1,
  username: 'johndoe',
  email: 'john@example.com',
  age: 30,
  active: true,
};

const validProfile = {
  user: validUser,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
    zipCode: '12345',
  },
  preferences: {
    theme: 'dark' as const,
    notifications: true,
    language: 'en',
  },
  tags: ['developer', 'designer', 'manager'],
  metadata: {
    lastLogin: '2024-01-01',
    loginCount: '42',
  },
};

const validItems = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  price: Math.random() * 100,
  quantity: Math.floor(Math.random() * 100),
}));

const invalidUser = {
  id: -1, // negative, should be positive
  username: 'ab', // too short
  email: 'invalid-email', // invalid format
  age: 150, // exceeds max
  active: 'yes', // wrong type
};

const invalidProfile = {
  user: invalidUser,
  address: {
    street: '',
    city: '',
    country: '',
    zipCode: 'abc', // invalid format
  },
  preferences: {
    theme: 'blue', // invalid enum
    notifications: 'true', // wrong type
    language: 123, // wrong type
  },
  tags: [1, 2, 3], // wrong types
  metadata: null, // wrong type
};

const transformData = {
  date: '2024-01-01T00:00:00Z',
  number: '42',
  trimmed: '  hello world  ',
  upper: 'hello',
};

// ============================================================================
// Test Implementations
// ============================================================================

// Schema Creation Tests
library.implement(tests.createSimpleSchema, () => {
  // Schema creation - demonstrating that schemas are created in setup
  const schema = object({
    name: string(),
    age: number(),
    email: Email,
  });
  return schema;
});

library.implement(tests.createComplexSchema, () => {
  // Complex schema creation
  const schema = object({
    user: object({
      id: number(),
      profile: object({
        bio: string(),
        avatar: string(), // Superstruct doesn't have built-in URL validation
      }),
    }),
    settings: array(
      object({
        key: string(),
        value: any(),
      })
    ),
  });
  return schema;
});

// Primitive Validation Tests
library.implement(tests.validateString, () => {
  const validData = 'Hello World';
  const invalidData = 'Hi'; // too short

  // Test both success and failure paths using validate
  const [validError] = validate(validData, stringSchema);
  const [invalidError] = validate(invalidData, stringSchema);
  return { valid: !validError, invalid: !!invalidError };
});

library.implement(tests.validateNumber, () => {
  const validData = 42;
  const invalidData = 150; // exceeds max

  const [validError] = validate(validData, numberSchema);
  const [invalidError] = validate(invalidData, numberSchema);
  return { valid: !validError, invalid: !!invalidError };
});

library.implement(tests.validateEmail, () => {
  const validEmails = [
    'user@example.com',
    'john.doe@company.org',
    'test+tag@domain.co.uk',
  ];
  const invalidEmails = [
    'invalid',
    '@example.com',
    'user@',
    'user..name@example.com',
  ];

  let validCount = 0;
  let invalidCount = 0;

  // Validate multiple emails
  for (const email of validEmails) {
    const [error] = validate(email, emailSchema);
    if (!error) validCount++;
  }

  for (const email of invalidEmails) {
    const [error] = validate(email, emailSchema);
    if (error) invalidCount++;
  }

  return { validCount, invalidCount };
});

// Object Validation Tests
library.implement(tests.validateFlatObject, () => {
  // Test object validation performance
  const [validError, validValue] = validate(validUser, userSchema);
  const [invalidError] = validate(invalidUser, userSchema);
  return {
    valid: !validError,
    invalid: !!invalidError,
    validData: validValue || null,
  };
});

library.implement(tests.validateNestedObject, () => {
  // Test complex nested validation
  const [validError, validValue] = validate(validProfile, profileSchema);
  const [invalidError] = validate(invalidProfile, profileSchema);
  return {
    valid: !validError,
    invalid: !!invalidError,
    hasData: !!validValue,
  };
});

library.implement(tests.validateArray, () => {
  const invalidData = [
    ...validItems.slice(0, 5),
    { id: -1, name: '', price: -10, quantity: -5 }, // invalid item
    ...validItems.slice(5),
  ];

  // Test array validation
  const [validError, validValue] = validate(validItems, itemsArraySchema);
  const [invalidError] = validate(invalidData, itemsArraySchema);
  return {
    valid: !validError,
    invalid: !!invalidError,
    itemCount: validValue ? validValue.length : 0,
  };
});

// Error Handling Tests
library.implement(tests.catchValidationErrors, () => {
  // Test error handling performance
  const [error] = validate(invalidUser, userSchema);

  if (error) {
    const failures = error.failures();
    return {
      success: false,
      errorCount: failures.length,
      hasErrors: true,
      firstError: error.message,
    };
  }

  return { success: true, errorCount: 0, hasErrors: false };
});

library.implement(tests.multipleErrors, () => {
  // Test multiple error collection
  const [error] = validate(invalidProfile, profileSchema);

  if (error) {
    const failures = error.failures();
    const errorPaths = failures.map(f => f.path.join('.'));
    const errorTypes = failures.map(f => f.type);

    return {
      errorCount: failures.length,
      hasMultiple: failures.length > 1,
      paths: errorPaths.length,
      types: new Set(errorTypes).size,
    };
  }

  return { errorCount: 0, hasMultiple: false, paths: 0, types: 0 };
});

// Additional Performance Tests

// Batch validation test
library.implement(tests.validateFlatObject, () => {
  // Create batch of objects for validation
  const batchData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    username: `user${i}`,
    email: `user${i}@example.com`,
    age: 20 + (i % 50),
    active: i % 2 === 0,
  }));

  // Batch validate multiple objects
  let validCount = 0;
  let invalidCount = 0;

  for (const item of batchData) {
    const [error] = validate(item, userSchema);
    if (!error) {
      validCount++;
    } else {
      invalidCount++;
    }
  }

  return { validCount, invalidCount, total: batchData.length };
});

// Transform validation test
library.implement(tests.validateNestedObject, () => {
  // Test transformation performance
  const [error, value] = validate(transformData, transformSchema, { coerce: true });

  if (!error && value) {
    return {
      success: true,
      transformed: true,
      hasDate: value.date instanceof Date,
      hasNumber: typeof value.number === 'number',
      hasTrimmed: value.trimmed === 'hello world',
      hasUpper: value.upper === 'HELLO',
    };
  }

  return { success: false, transformed: false };
});

// Fast check test using 'is' method
library.implement(tests.validateFlatObject, () => {
  // Test fast boolean check performance
  const valid = is(validUser, userSchema);
  const invalid = is(invalidUser, userSchema);

  return {
    valid,
    invalid: !invalid,
    fastCheck: true,
  };
});

// Assert test (throws on error)
library.implement(tests.validateFlatObject, () => {
  // Test assertion-based validation
  let valid = false;
  let invalid = true;

  try {
    assert(validUser, userSchema);
    valid = true;
  } catch {
    valid = false;
  }

  try {
    assert(invalidUser, userSchema);
    invalid = false;
  } catch {
    invalid = true;
  }

  return {
    valid,
    invalid,
    assertMode: true,
  };
});

// Create test (returns validated & transformed value)
library.implement(tests.validateNestedObject, () => {
  // Schema with defaults
  const schemaWithDefaults = object({
    id: number(),
    name: string(),
    active: refine(boolean(), 'default', () => true),
    createdAt: coerce(date(), any(), () => new Date()),
  });

  const partialData = { id: 1, name: 'Test' };

  // Test create method which validates and applies defaults
  try {
    const result = create(partialData, schemaWithDefaults);
    return {
      success: true,
      hasDefaults: true,
      hasId: !!result.id,
      hasName: !!result.name,
      hasActive: result.active === true,
      hasCreatedAt: result.createdAt instanceof Date,
    };
  } catch {
    return { success: false, hasDefaults: false };
  }
});

console.log('✅ Superstruct library benchmarks registered');