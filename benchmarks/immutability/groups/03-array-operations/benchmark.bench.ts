/**
 * Array Operations Benchmarks
 */

import { bench, describe } from 'vitest';
import { produce } from 'immer';
import { create } from 'mutative';
import { List as ImmutableList, fromJS } from 'immutable';
import update from 'immutability-helper';
import Seamless from 'seamless-immutable';
import { craft } from '@sylphx/craft';

describe('Array Push', () => {
  const arr = [1, 2, 3, 4, 5];

  bench('Immer', () => {
    const result = produce(arr, draft => {
      draft.push(6);
    });
  });

  bench('Mutative', () => {
    const result = create(arr, draft => {
      draft.push(6);
    });
  });

  bench('Craft', () => {
    const result = craft(arr, draft => {
      draft.push(6);
    });
  });

  bench('Immutable.js', () => {
    const list = ImmutableList(arr);
    const result = list.push(6);
  });

  bench('Immutability Helper', () => {
    const result = update(arr, {
      $push: [6]
    });
  });

  bench('Seamless Immutable', () => {
    const list = Seamless.from(arr);
    const result = list.concat([6]);
  });

  bench('Native Spread', () => {
    const result = [...arr, 6];
  });
});

describe('Array Remove', () => {
  const arr = [1, 2, 3, 4, 5];

  bench('Immer', () => {
    const result = produce(arr, draft => {
      draft.splice(2, 1);
    });
  });

  bench('Mutative', () => {
    const result = create(arr, draft => {
      draft.splice(2, 1);
    });
  });

  bench('Craft', () => {
    const result = craft(arr, draft => {
      draft.splice(2, 1);
    });
  });

  bench('Immutable.js', () => {
    const list = ImmutableList(arr);
    const result = list.delete(2);
  });

  bench('Immutability Helper', () => {
    const result = update(arr, {
      $splice: [[2, 1]]
    });
  });

  bench('Seamless Immutable', () => {
    const list = Seamless.from(arr);
    const result = list.filter((_, i) => i !== 2);
  });

  bench('Native Filter', () => {
    const result = arr.filter((_, i) => i !== 2);
  });
});

describe('Array Update', () => {
  const arr = [{ id: 1, value: 10 }, { id: 2, value: 20 }, { id: 3, value: 30 }];

  bench('Immer', () => {
    const result = produce(arr, draft => {
      draft[1].value = 25;
    });
  });

  bench('Mutative', () => {
    const result = create(arr, draft => {
      draft[1].value = 25;
    });
  });

  bench('Craft', () => {
    const result = craft(arr, draft => {
      draft[1].value = 25;
    });
  });

  bench('Immutable.js', () => {
    const list = fromJS(arr);
    const result = list.setIn([1, 'value'], 25);
  });

  bench('Immutability Helper', () => {
    const result = update(arr, {
      1: {
        value: { $set: 25 }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const list = Seamless.from(arr);
    const result = list.setIn([1, 'value'], 25);
  });

  bench('Native Map', () => {
    const result = arr.map((item, i) =>
      i === 1 ? { ...item, value: 25 } : item
    );
  });
});
