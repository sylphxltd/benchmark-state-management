/**
 * Deep Operations Benchmarks
 */

import { bench, describe } from 'vitest';
import { produce } from 'immer';
import { create } from 'mutative';
import { fromJS } from 'immutable';
import update from 'immutability-helper';
import Seamless from 'seamless-immutable';
import { craft } from '@sylphx/craft';

describe('Deep Nested Update (5 levels)', () => {
  const deepObject = {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              value: 0
            }
          }
        }
      }
    }
  };

  bench('Immer', () => {
    const result = produce(deepObject, draft => {
      draft.level1.level2.level3.level4.level5.value += 1;
    });
  });

  bench('Mutative', () => {
    const result = create(deepObject, draft => {
      draft.level1.level2.level3.level4.level5.value += 1;
    });
  });

  bench('Craft', () => {
    const result = craft(deepObject, draft => {
      draft.level1.level2.level3.level4.level5.value += 1;
    });
  });

  bench('Immutable.js', () => {
    const map = fromJS(deepObject);
    const result = map.setIn(
      ['level1', 'level2', 'level3', 'level4', 'level5', 'value'],
      map.getIn(['level1', 'level2', 'level3', 'level4', 'level5', 'value']) + 1
    );
  });

  bench('Immutability Helper', () => {
    const result = update(deepObject, {
      level1: {
        level2: {
          level3: {
            level4: {
              level5: {
                value: { $set: deepObject.level1.level2.level3.level4.level5.value + 1 }
              }
            }
          }
        }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const obj = Seamless.from(deepObject);
    const result = obj.setIn(['level1', 'level2', 'level3', 'level4', 'level5', 'value'],
      obj.level1.level2.level3.level4.level5.value + 1);
  });

  bench('Native Spread', () => {
    const result = {
      ...deepObject,
      level1: {
        ...deepObject.level1,
        level2: {
          ...deepObject.level1.level2,
          level3: {
            ...deepObject.level1.level2.level3,
            level4: {
              ...deepObject.level1.level2.level3.level4,
              level5: {
                ...deepObject.level1.level2.level3.level4.level5,
                value: deepObject.level1.level2.level3.level4.level5.value + 1
              }
            }
          }
        }
      }
    };
  });
});

describe('Multiple Updates (3 changes)', () => {
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

  bench('Immer', () => {
    const result = produce(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
      draft.user.profile.address.city = 'San Francisco';
    });
  });

  bench('Mutative', () => {
    const result = create(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
      draft.user.profile.address.city = 'San Francisco';
    });
  });

  bench('Craft', () => {
    const result = craft(nestedObject, draft => {
      draft.user.profile.name = 'Jane';
      draft.user.profile.age = 25;
      draft.user.profile.address.city = 'San Francisco';
    });
  });

  bench('Immutable.js', () => {
    const map = fromJS(nestedObject);
    const result = map
      .setIn(['user', 'profile', 'name'], 'Jane')
      .setIn(['user', 'profile', 'age'], 25)
      .setIn(['user', 'profile', 'address', 'city'], 'San Francisco');
  });

  bench('Immutability Helper', () => {
    const result = update(nestedObject, {
      user: {
        profile: {
          name: { $set: 'Jane' },
          age: { $set: 25 },
          address: {
            city: { $set: 'San Francisco' }
          }
        }
      }
    });
  });

  bench('Seamless Immutable', () => {
    const obj = Seamless.from(nestedObject);
    const result = obj
      .setIn(['user', 'profile', 'name'], 'Jane')
      .setIn(['user', 'profile', 'age'], 25)
      .setIn(['user', 'profile', 'address', 'city'], 'San Francisco');
  });

  bench('Native Spread', () => {
    const result = {
      ...nestedObject,
      user: {
        ...nestedObject.user,
        profile: {
          ...nestedObject.user.profile,
          name: 'Jane',
          age: 25,
          address: {
            ...nestedObject.user.profile.address,
            city: 'San Francisco'
          }
        }
      }
    };
  });
});
