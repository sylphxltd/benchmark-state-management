/**
 * Preact Signals implementation
 */

import { signal } from '@preact/signals-core';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

const countSignal = signal(0);
const usersSignal = signal(largeArray);
const deepNestedSignal = signal(createDeepNested());
const formDataSignal = signal(createFormState());

export const preactActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    countSignal.value++;
  },

  getCount: () => {
    return countSignal.value;
  },

  // 03-creation methods
  createEmptyStore: () => {
    return signal(0);
  },

  // 04-complexity methods
  readNestedState: () => {
    const state = deepNestedSignal.value;
    return state.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    const current = deepNestedSignal.value;
    deepNestedSignal.value = {
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
    };
  },

  spliceArray: () => {
    const users = usersSignal.value;
    const newUsers = [...users];
    newUsers.splice(Math.floor(newUsers.length / 2), 1);
    usersSignal.value = newUsers;
  },

  mapLargeArray: () => {
    return usersSignal.value.map(user => ({ ...user, mapped: true }));
  },

  updateMultipleFields: () => {
    countSignal.value++;
    const users = usersSignal.value;
    usersSignal.value = [...users, { id: users.length, name: 'New User', email: 'new@example.com', value: 0 }];
  },

  // 06-memory methods
  getLargeArray: () => {
    return usersSignal.value;
  },

  updateLargeArrayItem: () => {
    const users = usersSignal.value;
    const updated = users.map((user, i) =>
      i === 500 ? { ...user, value: user.value + 1 } : user
    );
    usersSignal.value = updated;
  },

  cloneLargeState: () => {
    return JSON.parse(JSON.stringify(usersSignal.value));
  },

  filterLargeArray: () => {
    return usersSignal.value.filter(user => user.value > 500);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    const formData = formDataSignal.value;
    const [section, fieldName] = field.split('.');

    if (fieldName) {
      formDataSignal.value = {
        ...formData,
        [section]: {
          ...(formData as any)[section],
          [fieldName]: value
        }
      };
    } else {
      formDataSignal.value = {
        ...formData,
        [field]: value
      };
    }
  },

  updateMultipleFormFields: (fields) => {
    const formData = formDataSignal.value;
    formDataSignal.value = {
      ...formData,
      personal: {
        ...formData.personal,
        ...fields
      }
    };
  },

  updateNestedFormField: (path, value) => {
    const formData = formDataSignal.value;
    const [section, field] = path.split('.');
    formDataSignal.value = {
      ...formData,
      [section]: {
        ...(formData as any)[section],
        [field]: value
      }
    };
  },

  resetForm: () => {
    formDataSignal.value = createFormState();
  },

  conditionalFieldUpdate: () => {
    const formData = formDataSignal.value;
    if (formData.preferences.newsletter) {
      formDataSignal.value = {
        ...formData,
        preferences: {
          ...formData.preferences,
          notifications: true
        }
      };
    }
  },

  // 08-async-reactive methods (Preact Signals has computed, but no native async reactive primitives)
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    return countSignal.value;
  },

  getChainedAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    const count = countSignal.value;
    await new Promise(resolve => setTimeout(resolve, 5));
    return count * 2;
  },

  getComplexAsyncValue: async () => {
    const [count, userCount] = await Promise.all([
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return countSignal.value;
      })(),
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return usersSignal.value.length;
      })()
    ]);
    return { count, userCount };
  }
};
