/**
 * Shared helpers and data structures for all stores
 */

// Large array for performance testing
export const largeArray = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
  email: `user${i}@example.com`,
  value: Math.random() * 1000
}));

// Deep nested object structure (10 levels)
export const createDeepNested = () => ({
  level1: {
    level2: {
      level3: {
        level4: {
          level5: {
            level6: {
              level7: {
                level8: {
                  level9: {
                    level10: { value: 0 }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

// Form state structure
export const createFormState = () => ({
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  },
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  },
  preferences: {
    newsletter: false,
    notifications: true,
    theme: 'light'
  }
});
