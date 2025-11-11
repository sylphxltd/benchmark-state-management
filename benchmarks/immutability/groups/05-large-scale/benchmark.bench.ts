/**
 * Large Scale Benchmarks
 */

import { bench, describe } from 'vitest';
import { produce } from 'immer';
import { create } from 'mutative';
import { fromJS } from 'immutable';
import update from 'immutability-helper';
import Seamless from 'seamless-immutable';
import { craft } from '@sylphx/craft';

const largeArray = Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i * 2 }));

describe('Large Array Update (1000 items)', () => {
  bench('Immer', () => {
    const result = produce(largeArray, draft => {
      draft[500].value += 1;
    });
  });

  bench('Mutative', () => {
    const result = create(largeArray, draft => {
      draft[500].value += 1;
    });
  });

  bench('Craft', () => {
    const result = craft(largeArray, draft => {
      draft[500].value += 1;
    });
  });

  bench('Immutable.js', () => {
    const list = fromJS(largeArray);
    const result = list.setIn([500, 'value'], list.getIn([500, 'value']) + 1);
  });

  bench('Immutability Helper', () => {
    const result = update(largeArray, {
      500: {
        value: { $set: largeArray[500].value + 1 }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const list = Seamless.from(largeArray);
    const result = list.setIn([500, 'value'], list[500].value + 1);
  });

  bench('Native Map', () => {
    const result = largeArray.map((item, i) =>
      i === 500 ? { ...item, value: item.value + 1 } : item
    );
  });
});
