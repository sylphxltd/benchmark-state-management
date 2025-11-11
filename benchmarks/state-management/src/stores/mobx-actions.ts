/**
 * MobX implementation
 */

import { makeAutoObservable, configure } from 'mobx';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

configure({ enforceActions: 'never' });

class MobXStore {
  count = 0;
  users = largeArray;
  deepNested = createDeepNested();
  formData = createFormState();

  constructor() {
    makeAutoObservable(this);
  }
}

const mobxStore = new MobXStore();

export const mobxActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    mobxStore.count++;
  },

  getCount: () => {
    return mobxStore.count;
  },

  // 03-creation methods
  createEmptyStore: () => {
    return makeAutoObservable({ value: 0 });
  },

  // 04-complexity methods
  readNestedState: () => {
    return mobxStore.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    mobxStore.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value++;
  },

  spliceArray: () => {
    mobxStore.users.splice(Math.floor(mobxStore.users.length / 2), 1);
  },

  mapLargeArray: () => {
    return mobxStore.users.map(user => ({ ...user, mapped: true }));
  },

  updateMultipleFields: () => {
    mobxStore.count++;
    mobxStore.users.push({ id: mobxStore.users.length, name: 'New User', email: 'new@example.com', value: 0 });
  },

  // 06-memory methods
  getLargeArray: () => {
    return mobxStore.users;
  },

  updateLargeArrayItem: () => {
    if (mobxStore.users[500]) {
      mobxStore.users[500].value++;
    }
  },

  cloneLargeState: () => {
    return JSON.parse(JSON.stringify(mobxStore.users));
  },

  filterLargeArray: () => {
    return mobxStore.users.filter(user => user.value > 500);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    const [section, fieldName] = field.split('.');

    if (fieldName) {
      (mobxStore.formData as any)[section][fieldName] = value;
    } else {
      (mobxStore.formData as any)[field] = value;
    }
  },

  updateMultipleFormFields: (fields) => {
    Object.entries(fields).forEach(([key, value]) => {
      mobxStore.formData.personal[key as keyof typeof mobxStore.formData.personal] = value;
    });
  },

  updateNestedFormField: (path, value) => {
    const [section, field] = path.split('.');
    (mobxStore.formData as any)[section][field] = value;
  },

  resetForm: () => {
    mobxStore.formData = createFormState();
  },

  conditionalFieldUpdate: () => {
    if (mobxStore.formData.preferences.newsletter) {
      mobxStore.formData.preferences.notifications = true;
    }
  },

  // 08-async-reactive methods (MobX doesn't have native async reactive primitives)
  // MobX uses reactions/autorun, not async atoms, so we implement basic async here
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    return mobxStore.count;
  },

  getChainedAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    const count = mobxStore.count;
    await new Promise(resolve => setTimeout(resolve, 5));
    return count * 2;
  },

  getComplexAsyncValue: async () => {
    const [count, userCount] = await Promise.all([
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return mobxStore.count;
      })(),
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return mobxStore.users.length;
      })()
    ]);
    return { count, userCount };
  }
};
