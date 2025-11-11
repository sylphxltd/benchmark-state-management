/**
 * Nested Object Update Benchmarks
 */

import { bench, describe } from 'vitest';
import { produce } from 'immer';
import { create } from 'mutative';
import { fromJS } from 'immutable';
import update from 'immutability-helper';
import Seamless from 'seamless-immutable';
import { craft } from '@sylphx/craft';

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

describe('Nested Object Update', () => {
  bench('Immer', () => {
    const result = produce(nestedObject, draft => {
      draft.user.profile.age += 1;
    });
  });

  bench('Mutative', () => {
    const result = create(nestedObject, draft => {
      draft.user.profile.age += 1;
    });
  });

  bench('Craft', () => {
    const result = craft(nestedObject, draft => {
      draft.user.profile.age += 1;
    });
  });

  bench('Immutable.js', () => {
    const map = fromJS(nestedObject);
    const result = map.setIn(['user', 'profile', 'age'], map.getIn(['user', 'profile', 'age']) + 1);
  });

  bench('Immutability Helper', () => {
    const result = update(nestedObject, {
      user: {
        profile: {
          age: { $set: nestedObject.user.profile.age + 1 }
        }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const obj = Seamless.from(nestedObject);
    const result = obj.setIn(['user', 'profile', 'age'], obj.user.profile.age + 1);
  });

  bench('Native Spread', () => {
    const result = {
      ...nestedObject,
      user: {
        ...nestedObject.user,
        profile: {
          ...nestedObject.user.profile,
          age: nestedObject.user.profile.age + 1
        }
      }
    };
  });
});
