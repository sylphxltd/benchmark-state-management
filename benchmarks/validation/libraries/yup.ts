/**
 * Yup Validation Library Benchmarks
 *
 * Yup is a schema builder for runtime value parsing and validation.
 * Key features:
 * - Async and sync validation
 * - Extensive transformation support
 * - Rich error messages
 * - Method chaining API
 */

import * as yup from 'yup';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'yup',
  displayName: 'Yup',
  githubUrl: 'https://github.com/jquense/yup',
  packageName: 'yup',
  version: '^1.7.1',
  description: 'Schema builder for runtime value parsing and validation',
});


// ============================================================================
// Schema Definitions (Created once, reused in tests)
// ============================================================================

// Simple schemas for primitive validation
const stringSchema = yup.string().min(3).max(50).required();
const numberSchema = yup.number().min(0).max(100).required();
const emailSchema = yup.string().email().required();
const dateSchema = yup.date().required();
const booleanSchema = yup.boolean().required();

// Flat object schema
const userSchema = yup.object({
  id: yup.number().positive().required(),
  username: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  age: yup.number().min(18).max(120).required(),
  active: yup.boolean().required(),
});

// Nested object schema
const addressSchema = yup.object({
  street: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  zipCode: yup.string().matches(/^\d{5}$/).required(),
});

const profileSchema = yup.object({
  user: userSchema,
  address: addressSchema,
  preferences: yup.object({
    theme: yup.string().oneOf(['light', 'dark']).required(),
    notifications: yup.boolean().required(),
    language: yup.string().required(),
  }),
  tags: yup.array().of(yup.string().required()).required(),
  metadata: yup.object().required(),
});

// Array schema
const itemSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required(),
  price: yup.number().positive().required(),
  quantity: yup.number().integer().min(0).required(),
});

const itemsArraySchema = yup.array().of(itemSchema).required();

// Complex nested schema with transforms
const transformSchema = yup.object({
  date: yup.string().transform((value) => new Date(value)).required(),
  number: yup.string().transform((value) => parseInt(value, 10)).required(),
  trimmed: yup.string().transform((value) => value.trim()).required(),
  upper: yup.string().transform((value) => value.toUpperCase()).required(),
});

// ============================================================================
// Test Data (Same as Zod for fair comparison)
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
    theme: 'dark',
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
  const schema = yup.object({
    name: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().email().required(),
  });
  return schema;
});

library.implement(tests.createComplexSchema, () => {
  // Complex schema creation
  const schema = yup.object({
    user: yup.object({
      id: yup.number().required(),
      profile: yup.object({
        bio: yup.string().required(),
        avatar: yup.string().url().required(),
      }),
    }),
    settings: yup.array().of(
      yup.object({
        key: yup.string().required(),
        value: yup.mixed().required(),
      })
    ),
  });
  return schema;
});

// Primitive Validation Tests
library.implement(tests.validateString, () => {
  const validData = 'Hello World';
  const invalidData = 'Hi'; // too short

  let valid = false;
  let invalid = true;

  try {
    stringSchema.validateSync(validData);
    valid = true;
  } catch {
    valid = false;
  }

  try {
    stringSchema.validateSync(invalidData);
    invalid = false;
  } catch {
    invalid = true;
  }

  return { valid, invalid };
});

library.implement(tests.validateNumber, () => {
  const validData = 42;
  const invalidData = 150; // exceeds max

  let valid = false;
  let invalid = true;

  try {
    numberSchema.validateSync(validData);
    valid = true;
  } catch {
    valid = false;
  }

  try {
    numberSchema.validateSync(invalidData);
    invalid = false;
  } catch {
    invalid = true;
  }

  return { valid, invalid };
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
    try {
      emailSchema.validateSync(email);
      validCount++;
    } catch {
      // Invalid
    }
  }

  for (const email of invalidEmails) {
    try {
      emailSchema.validateSync(email);
    } catch {
      invalidCount++;
    }
  }

  return { validCount, invalidCount };
});

// Object Validation Tests
library.implement(tests.validateFlatObject, () => {
  let valid = false;
  let invalid = true;
  let validData = null;

  try {
    validData = userSchema.validateSync(validUser);
    valid = true;
  } catch {
    valid = false;
  }

  try {
    userSchema.validateSync(invalidUser);
    invalid = false;
  } catch {
    invalid = true;
  }

  return {
    valid,
    invalid,
    validData,
  };
});

library.implement(tests.validateNestedObject, () => {
  let valid = false;
  let invalid = true;
  let hasData = false;

  try {
    const data = profileSchema.validateSync(validProfile);
    valid = true;
    hasData = !!data;
  } catch {
    valid = false;
  }

  try {
    profileSchema.validateSync(invalidProfile);
    invalid = false;
  } catch {
    invalid = true;
  }

  return {
    valid,
    invalid,
    hasData,
  };
});

library.implement(tests.validateArray, () => {
  const invalidItems = [
    ...validItems.slice(0, 5),
    { id: -1, name: '', price: -10, quantity: -5 }, // invalid item
    ...validItems.slice(5),
  ];

  let valid = false;
  let invalid = true;
  let itemCount = 0;

  try {
    const data = itemsArraySchema.validateSync(validItems);
    valid = true;
    itemCount = data.length;
  } catch {
    valid = false;
  }

  try {
    itemsArraySchema.validateSync(invalidItems);
    invalid = false;
  } catch {
    invalid = true;
  }

  return {
    valid,
    invalid,
    itemCount,
  };
});

// Error Handling Tests
library.implement(tests.catchValidationErrors, () => {
  try {
    userSchema.validateSync(invalidUser, { abortEarly: false });
    return { success: true, errorCount: 0, hasErrors: false };
  } catch (error: any) {
    const errors = error.errors || [];
    return {
      success: false,
      errorCount: errors.length,
      hasErrors: true,
      firstError: errors[0],
    };
  }
});

library.implement(tests.multipleErrors, () => {
  try {
    profileSchema.validateSync(invalidProfile, { abortEarly: false });
    return { errorCount: 0, hasMultiple: false, paths: 0, types: 0 };
  } catch (error: any) {
    const errors = error.errors || [];
    const inner = error.inner || [];

    return {
      errorCount: errors.length,
      hasMultiple: errors.length > 1,
      paths: inner.length,
      types: new Set(inner.map((e: any) => e.type)).size,
    };
  }
});

console.log('✅ Yup library benchmarks registered');