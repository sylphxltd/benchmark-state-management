/**
 * JSON Patches Benchmarks
 */

import { bench, describe } from 'vitest';
import { produceWithPatches, applyPatches as immerApplyPatches, enablePatches } from 'immer';
import { craftWithPatches, applyPatches as craftApplyPatches } from '@sylphx/craft';

enablePatches();

const nestedObject = {
  user: {
    profile: {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        country: 'USA'
      }
    }
  }
};

describe('JSON Patches - Generate', () => {
  bench('Immer', () => {
    const [nextState, patches, inversePatches] = produceWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
  });

  bench('Craft', () => {
    const [nextState, patches, inversePatches] = craftWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
  });
});

describe('JSON Patches - Apply', () => {
  const [_, immerPatches] = produceWithPatches(nestedObject, draft => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });

  const [__, craftPatches] = craftWithPatches(nestedObject, draft => {
    draft.user.profile.name = 'Jane';
    draft.user.profile.age = 25;
  });

  bench('Immer', () => {
    const result = immerApplyPatches(nestedObject, immerPatches);
  });

  bench('Craft', () => {
    const result = craftApplyPatches(nestedObject, craftPatches);
  });
});

describe('JSON Patches - Roundtrip', () => {
  bench('Immer', () => {
    const [nextState, patches] = produceWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
    const recreated = immerApplyPatches(nestedObject, patches);
  });

  bench('Craft', () => {
    const [nextState, patches] = craftWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
    const recreated = craftApplyPatches(nestedObject, patches);
  });
});

describe('Undo/Redo - Inverse Patches', () => {
  bench('Immer', () => {
    const [nextState, patches, inversePatches] = produceWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
    const undone = immerApplyPatches(nextState, inversePatches);
  });

  bench('Craft', () => {
    const [nextState, patches, inversePatches] = craftWithPatches(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
    });
    const undone = craftApplyPatches(nextState, inversePatches);
  });
});
