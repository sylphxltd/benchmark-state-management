/**
 * Simple Object Update Benchmarks
 */

import { bench, describe } from 'vitest';
import { produce } from 'immer';
import { create } from 'mutative';
import { Map as ImmutableMap } from 'immutable';
import update from 'immutability-helper';
import Seamless from 'seamless-immutable';
import { craft } from '@sylphx/craft';

const simpleObject = { count: 0, name: 'test', value: 100 };

describe('Simple Object Update', () => {
  bench('Immer', () => {
    const result = produce(simpleObject, draft => {
      draft.count += 1;
    });
  });

  bench('Mutative', () => {
    const result = create(simpleObject, draft => {
      draft.count += 1;
    });
  });

  bench('Craft', () => {
    const result = craft(simpleObject, draft => {
      draft.count += 1;
    });
  });

  bench('Immutable.js', () => {
    const map = ImmutableMap(simpleObject);
    const result = map.set('count', map.get('count') + 1);
  });

  bench('Immutability Helper', () => {
    const result = update(simpleObject, {
      count: { $set: simpleObject.count + 1 }
    });
  });

  bench('Seamless Immutable', () => {
    const obj = Seamless.from(simpleObject);
    const result = obj.set('count', obj.count + 1);
  });

  bench('Native Spread', () => {
    const result = { ...simpleObject, count: simpleObject.count + 1 };
  });
});
