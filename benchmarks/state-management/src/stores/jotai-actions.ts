/**
 * Jotai implementation
 */

import { atom, createStore } from 'jotai';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

const jotaiStore = createStore();
const countAtom = atom(0);
const usersAtom = atom(largeArray);
const deepNestedAtom = atom(createDeepNested());
const formDataAtom = atom(createFormState());

export const jotaiActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    jotaiStore.set(countAtom, c => c + 1);
  },

  getCount: () => {
    return jotaiStore.get(countAtom);
  },

  // 03-creation methods
  createEmptyStore: () => {
    return createStore();
  },

  // 04-complexity methods
  readNestedState: () => {
    const state = jotaiStore.get(deepNestedAtom);
    return state.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    const current = jotaiStore.get(deepNestedAtom);
    jotaiStore.set(deepNestedAtom, {
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
    const users = jotaiStore.get(usersAtom);
    const newUsers = [...users];
    newUsers.splice(Math.floor(newUsers.length / 2), 1);
    jotaiStore.set(usersAtom, newUsers);
  },

  mapLargeArray: () => {
    const users = jotaiStore.get(usersAtom);
    return users.map(user => ({ ...user, mapped: true }));
  },

  updateMultipleFields: () => {
    jotaiStore.set(countAtom, c => c + 1);
    const users = jotaiStore.get(usersAtom);
    jotaiStore.set(usersAtom, [...users, { id: users.length, name: 'New User', email: 'new@example.com', value: 0 }]);
  },

  // 06-memory methods
  getLargeArray: () => {
    return jotaiStore.get(usersAtom);
  },

  updateLargeArrayItem: () => {
    const users = jotaiStore.get(usersAtom);
    const updated = users.map((user, i) =>
      i === 500 ? { ...user, value: user.value + 1 } : user
    );
    jotaiStore.set(usersAtom, updated);
  },

  cloneLargeState: () => {
    const users = jotaiStore.get(usersAtom);
    return JSON.parse(JSON.stringify(users));
  },

  filterLargeArray: () => {
    const users = jotaiStore.get(usersAtom);
    return users.filter(user => user.value > 500);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    const formData = jotaiStore.get(formDataAtom);
    const [section, fieldName] = field.split('.');

    if (fieldName) {
      jotaiStore.set(formDataAtom, {
        ...formData,
        [section]: {
          ...(formData as any)[section],
          [fieldName]: value
        }
      });
    } else {
      jotaiStore.set(formDataAtom, {
        ...formData,
        [field]: value
      });
    }
  },

  updateMultipleFormFields: (fields) => {
    const formData = jotaiStore.get(formDataAtom);
    jotaiStore.set(formDataAtom, {
      ...formData,
      personal: {
        ...formData.personal,
        ...fields
      }
    });
  },

  updateNestedFormField: (path, value) => {
    const formData = jotaiStore.get(formDataAtom);
    const [section, field] = path.split('.');
    jotaiStore.set(formDataAtom, {
      ...formData,
      [section]: {
        ...(formData as any)[section],
        [field]: value
      }
    });
  },

  resetForm: () => {
    jotaiStore.set(formDataAtom, createFormState());
  },

  conditionalFieldUpdate: () => {
    const formData = jotaiStore.get(formDataAtom);
    if (formData.preferences.newsletter) {
      jotaiStore.set(formDataAtom, {
        ...formData,
        preferences: {
          ...formData.preferences,
          notifications: true
        }
      });
    }
  },

  // 08-async-reactive methods (Jotai has native async atom support)
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    return jotaiStore.get(countAtom);
  },

  getChainedAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    const count = jotaiStore.get(countAtom);
    await new Promise(resolve => setTimeout(resolve, 5));
    return count * 2;
  },

  getComplexAsyncValue: async () => {
    const [count, users] = await Promise.all([
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return jotaiStore.get(countAtom);
      })(),
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return jotaiStore.get(usersAtom);
      })()
    ]);
    return { count, userCount: users.length };
  }
};
