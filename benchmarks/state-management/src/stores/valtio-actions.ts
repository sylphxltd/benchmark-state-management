/**
 * Valtio implementation
 */

import { proxy } from 'valtio';
import { StateActions } from './interface';
import { largeArray, createDeepNested, createFormState } from './helpers';

const valtioStore = proxy({
  count: 0,
  users: largeArray,
  deepNested: createDeepNested(),
  formData: createFormState()
});

export const valtioActionsV2: StateActions = {
  // Core methods (required)
  increment: () => {
    valtioStore.count++;
  },

  getCount: () => {
    return valtioStore.count;
  },

  // 03-creation methods
  createEmptyStore: () => {
    return proxy({ value: 0 });
  },

  // 04-complexity methods
  readNestedState: () => {
    return valtioStore.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value;
  },

  updateNestedState: () => {
    valtioStore.deepNested.level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value++;
  },

  spliceArray: () => {
    valtioStore.users.splice(Math.floor(valtioStore.users.length / 2), 1);
  },

  mapLargeArray: () => {
    return valtioStore.users.map(user => ({ ...user, mapped: true }));
  },

  updateMultipleFields: () => {
    valtioStore.count++;
    valtioStore.users.push({ id: valtioStore.users.length, name: 'New User', email: 'new@example.com', value: 0 });
  },

  // 06-memory methods
  getLargeArray: () => {
    return valtioStore.users;
  },

  updateLargeArrayItem: () => {
    if (valtioStore.users[500]) {
      valtioStore.users[500].value++;
    }
  },

  cloneLargeState: () => {
    return JSON.parse(JSON.stringify(valtioStore.users));
  },

  filterLargeArray: () => {
    return valtioStore.users.filter(user => user.value > 500);
  },

  // 07-form methods
  updateFormField: (field, value) => {
    const [section, fieldName] = field.split('.');

    if (fieldName) {
      (valtioStore.formData as any)[section][fieldName] = value;
    } else {
      (valtioStore.formData as any)[field] = value;
    }
  },

  updateMultipleFormFields: (fields) => {
    Object.entries(fields).forEach(([key, value]) => {
      valtioStore.formData.personal[key as keyof typeof valtioStore.formData.personal] = value;
    });
  },

  updateNestedFormField: (path, value) => {
    const [section, field] = path.split('.');
    (valtioStore.formData as any)[section][field] = value;
  },

  resetForm: () => {
    Object.assign(valtioStore.formData, createFormState());
  },

  conditionalFieldUpdate: () => {
    if (valtioStore.formData.preferences.newsletter) {
      valtioStore.formData.preferences.notifications = true;
    }
  },

  // 08-async-reactive methods (Valtio doesn't have native async reactive primitives)
  getAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    return valtioStore.count;
  },

  getChainedAsyncValue: async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    const count = valtioStore.count;
    await new Promise(resolve => setTimeout(resolve, 5));
    return count * 2;
  },

  getComplexAsyncValue: async () => {
    const [count, userCount] = await Promise.all([
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return valtioStore.count;
      })(),
      (async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return valtioStore.users.length;
      })()
    ]);
    return { count, userCount };
  }
};
