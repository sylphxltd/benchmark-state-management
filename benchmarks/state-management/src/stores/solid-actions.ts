/**
 * Solid Signals implementation
 */

import { createSignal } from 'solid-js';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

const [count, setCount] = createSignal(0);
const [users, setUsers] = createSignal(largeArray);
const [deepNested, setDeepNested] = createSignal(createDeepNested());
const [formData, setFormData] = createSignal(createFormState());

export const solidActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    setCount(c => c + 1);
  },

  getCount: () => {
    return count();
  },

  // 03-creation methods
  createEmptyStore: () => {
    const [value] = createSignal(0);
    return value;
  },

  // 04-complexity methods
  readNestedState: () => {
    const state = deepNested();
    return state.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    setDeepNested(current => ({
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
    }));
  },

  spliceArray: () => {
    setUsers(currentUsers => {
      const newUsers = [...currentUsers];
      newUsers.splice(Math.floor(newUsers.length / 2), 1);
      return newUsers;
    });
  },

  mapLargeArray: () => {
    return users().map(user => ({ ...user, mapped: true }));
  },

  updateMultipleFields: () => {
    setCount(c => c + 1);
    setUsers(currentUsers => [...currentUsers, { id: currentUsers.length, name: 'New User', email: 'new@example.com', value: 0 }]);
  },

  // 06-memory methods
  getLargeArray: () => {
    return users();
  },

  updateLargeArrayItem: () => {
    setUsers(currentUsers =>
      currentUsers.map((user, i) =>
        i === 500 ? { ...user, value: user.value + 1 } : user
      )
    );
  },

  cloneLargeState: () => {
    return JSON.parse(JSON.stringify(users()));
  },

  filterLargeArray: () => {
    return users().filter(user => user.value > 500);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    const [section, fieldName] = field.split('.');

    if (fieldName) {
      setFormData(form => ({
        ...form,
        [section]: {
          ...(form as any)[section],
          [fieldName]: value
        }
      }));
    } else {
      setFormData(form => ({
        ...form,
        [field]: value
      }));
    }
  },

  updateMultipleFormFields: (fields) => {
    setFormData(form => ({
      ...form,
      personal: {
        ...form.personal,
        ...fields
      }
    }));
  },

  updateNestedFormField: (path, value) => {
    const [section, field] = path.split('.');
    setFormData(form => ({
      ...form,
      [section]: {
        ...(form as any)[section],
        [field]: value
      }
    }));
  },

  resetForm: () => {
    setFormData(createFormState());
  },

  conditionalFieldUpdate: () => {
    const form = formData();
    if (form.preferences.newsletter) {
      setFormData({
        ...form,
        preferences: {
          ...form.preferences,
          notifications: true
        }
      });
    }
  },

  // 08-async-reactive methods (Solid has createResource for async, but implementing basic async here)
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    return count();
  },

  getChainedAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    const currentCount = count();
    await new Promise(resolve => setTimeout(resolve, 5));
    return currentCount * 2;
  },

  getComplexAsyncValue: async () => {
    const [currentCount, userCount] = await Promise.all([
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return count();
      })(),
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return users().length;
      })()
    ]);
    return { count: currentCount, userCount };
  }
};
