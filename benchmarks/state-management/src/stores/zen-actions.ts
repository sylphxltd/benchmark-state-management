/**
 * Zen implementation
 */

import { zen, get, set } from '@sylphx/zen';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

const countZen = zen(0);
const usersZen = zen(largeArray);
const deepNestedZen = zen(createDeepNested());
const formDataZen = zen(createFormState());

export const zenActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    set(countZen, get(countZen) + 1);
  },

  getCount: () => {
    return get(countZen);
  },

  // 04-complexity methods
  readNestedState: () => {
    const state = get(deepNestedZen);
    return state.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    const current = get(deepNestedZen);
    set(deepNestedZen, {
      ...current,
      level1: {
        ...current.level1,
        level2: {
          ...current.level1.level2,
          level3: {
            ...current.level1.level2.level3,
            level4: {
              ...current.level1.level2.level3.level4,
              level5: {
                ...current.level1.level2.level3.level4.level5,
                level6: {
                  ...current.level1.level2.level3.level4.level5.level6,
                  level7: {
                    ...current.level1.level2.level3.level4.level5.level6.level7,
                    level8: {
                      ...current.level1.level2.level3.level4.level5.level6.level7.level8,
                      level9: {
                        ...current.level1.level2.level3.level4.level5.level6.level7.level8.level9,
                        level10: {
                          value: current.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value + 1
                        }
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
  },

  spliceArray: () => {
    const users = get(usersZen);
    const newUsers = [...users];
    newUsers.splice(Math.floor(newUsers.length / 2), 1);
    set(usersZen, newUsers);
  },

  mapLargeArray: () => {
    const users = get(usersZen);
    return users.map(user => ({ ...user, mapped: true }));
  },

  updateMultipleFields: () => {
    set(countZen, get(countZen) + 1);
    const users = get(usersZen);
    set(usersZen, [...users, { id: users.length, name: 'New User', email: 'new@example.com', value: 0 }]);
  },

  // 06-memory methods
  getLargeArray: () => {
    return get(usersZen);
  },

  updateLargeArrayItem: () => {
    const users = get(usersZen);
    const updated = users.map((user, i) =>
      i === 500 ? { ...user, value: user.value + 1 } : user
    );
    set(usersZen, updated);
  },

  cloneLargeState: () => {
    const users = get(usersZen);
    return JSON.parse(JSON.stringify(users));
  },

  filterLargeArray: () => {
    const users = get(usersZen);
    return users.filter(user => user.value > 500);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    const formData = get(formDataZen);
    const [section, fieldName] = field.split('.');

    if (fieldName) {
      set(formDataZen, {
        ...formData,
        [section]: {
          ...(formData as any)[section],
          [fieldName]: value
        }
      });
    } else {
      set(formDataZen, {
        ...formData,
        [field]: value
      });
    }
  },

  updateMultipleFormFields: (fields) => {
    const formData = get(formDataZen);
    set(formDataZen, {
      ...formData,
      personal: {
        ...formData.personal,
        ...fields
      }
    });
  },

  updateNestedFormField: (path, value) => {
    const formData = get(formDataZen);
    const [section, field] = path.split('.');
    set(formDataZen, {
      ...formData,
      [section]: {
        ...(formData as any)[section],
        [field]: value
      }
    });
  },

  resetForm: () => {
    set(formDataZen, createFormState());
  },

  conditionalFieldUpdate: () => {
    const formData = get(formDataZen);
    if (formData.preferences.newsletter) {
      set(formDataZen, {
        ...formData,
        preferences: {
          ...formData.preferences,
          notifications: true
        }
      });
    }
  },

  // 08-async-reactive methods (Zen 2.0 has native async reactive support)
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    return get(countZen);
  },

  getChainedAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    const count = get(countZen);
    await new Promise(resolve => setTimeout(resolve, 5));
    return count * 2;
  },

  getComplexAsyncValue: async () => {
    const [count, userCount] = await Promise.all([
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return get(countZen);
      })(),
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return get(usersZen).length;
      })()
    ]);
    return { count, userCount };
  }
};
