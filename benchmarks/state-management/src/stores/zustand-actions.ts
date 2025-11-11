/**
 * Zustand implementation
 */

import { create } from 'zustand';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

interface ZustandState {
  count: number;
  users: any[];
  deepNested: any;
  formData: any;
}

const zustandStore = create<ZustandState>()((set, get) => ({
  count: 0,
  users: largeArray,
  deepNested: createDeepNested(),
  formData: createFormState()
}));

export const zustandActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    zustandStore.setState(state => ({ count: state.count + 1 }));
  },

  getCount: () => {
    return zustandStore.getState().count;
  },

  // 03-creation methods
  createEmptyStore: () => {
    return create(() => ({ value: 0 }));
  },

  // 04-complexity methods
  readNestedState: () => {
    return zustandStore.getState().deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    zustandStore.setState(state => ({
      deepNested: {
        ...state.deepNested,
        level1: { ...state.deepNested.level1, level2: { ...state.deepNested.level1.level2, level3: { ...state.deepNested.level1.level2.level3, level4: { ...state.deepNested.level1.level2.level3.level4, level5: { ...state.deepNested.level1.level2.level3.level4.level5, level6: { ...state.deepNested.level1.level2.level3.level4.level5.level6, level7: { ...state.deepNested.level1.level2.level3.level4.level5.level6.level7, level8: { ...state.deepNested.level1.level2.level3.level4.level5.level6.level7.level8, level9: { ...state.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9, level10: { value: Math.random() } } } } } } } } } }
      }
    }));
  },

  spliceArray: () => {
    zustandStore.setState(state => {
      const middleIndex = Math.floor(state.users.length / 2);
      const newUsers = [...state.users];
      newUsers.splice(middleIndex, 1, { id: 9999, name: 'Inserted', email: '', value: 0 });
      return { users: newUsers };
    });
  },

  mapLargeArray: () => {
    const users = zustandStore.getState().users;
    return users.map(u => ({ ...u, mapped: true }));
  },

  updateMultipleFields: () => {
    zustandStore.setState(state => ({
      count: state.count + 1,
      formData: { ...state.formData, personal: { ...state.formData.personal, firstName: 'Updated' } },
      deepNested: { ...state.deepNested, level1: { ...state.deepNested.level1, level2: { ...state.deepNested.level1.level2, level3: { ...state.deepNested.level1.level2.level3, level4: { ...state.deepNested.level1.level2.level3.level4, level5: { ...state.deepNested.level1.level2.level3.level4.level5, level6: { ...state.deepNested.level1.level2.level3.level4.level5.level6, level7: { ...state.deepNested.level1.level2.level3.level4.level5.level6.level7, level8: { ...state.deepNested.level1.level2.level3.level4.level5.level6.level7.level8, level9: { ...state.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9, level10: { value: Math.random() } } } } } } } } } } }
    }));
  },

  // 06-memory methods
  getLargeArray: () => zustandStore.getState().users,

  updateLargeArrayItem: () => {
    zustandStore.setState(state => {
      if (state.users.length > 0) {
        const newUsers = [...state.users];
        newUsers[0] = { ...newUsers[0], updated: true };
        return { users: newUsers };
      }
      return state;
    });
  },

  cloneLargeState: () => {
    const state = zustandStore.getState();
    return {
      count: state.count,
      users: [...state.users],
      deepNested: JSON.parse(JSON.stringify(state.deepNested)),
      formData: JSON.parse(JSON.stringify(state.formData))
    };
  },

  filterLargeArray: () => {
    return zustandStore.getState().users.filter(u => u.id % 2 === 0);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    zustandStore.setState(state => ({
      formData: { ...state.formData, [field]: value }
    }));
  },

  updateMultipleFormFields: (fields) => {
    zustandStore.setState(state => ({
      formData: { ...state.formData, ...fields }
    }));
  },

  updateNestedFormField: (path, value) => {
    zustandStore.setState(state => {
      const keys = path.split('.');
      const newFormData = { ...state.formData };
      let current: any = newFormData;
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return { formData: newFormData };
    });
  },

  resetForm: () => {
    zustandStore.setState({ formData: createFormState() });
  },

  conditionalFieldUpdate: () => {
    const formData = zustandStore.getState().formData;
    if (formData.preferences.newsletter) {
      zustandStore.setState(state => ({
        formData: { ...state.formData, personal: { ...state.formData.personal, email: 'subscribed@example.com' } }
      }));
    }
  },

  // 08-async-reactive methods
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    return { count: zustandStore.getState().count, timestamp: Date.now() };
  },

  getChainedAsyncValue: async () => {
    const first = await new Promise<number>(resolve => setTimeout(() => resolve(zustandStore.getState().count), 0));
    const second = await new Promise<number>(resolve => setTimeout(() => resolve(first * 2), 0));
    return second;
  },

  getComplexAsyncValue: async () => {
    const [count, users] = await Promise.all([
      new Promise<number>(resolve => setTimeout(() => resolve(zustandStore.getState().count), 0)),
      new Promise<number>(resolve => setTimeout(() => resolve(zustandStore.getState().users.length), 0))
    ]);
    return { count, users };
  }
};
