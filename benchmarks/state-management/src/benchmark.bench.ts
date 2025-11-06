/**
 * Vitest Benchmark Suite for State Management Libraries
 */

import { bench, describe } from 'vitest';
import {
  reduxActions,
  zustandActions,
  jotaiActions,
  mobxActions,
  valtioActions,
  preactActions,
  solidActions,
  zenActions
} from './stores';

const testUser = { id: 1, name: 'Test User' };

describe('Simple Increment', () => {
  bench('Redux Toolkit', () => {
    reduxActions.increment();
  });

  bench('Zustand', () => {
    zustandActions.increment();
  });

  bench('Jotai', () => {
    jotaiActions.increment();
  });

  bench('MobX', () => {
    mobxActions.increment();
  });

  bench('Valtio', () => {
    valtioActions.increment();
  });

  bench('Preact Signals', () => {
    preactActions.increment();
  });

  bench('Solid Signals', () => {
    solidActions.increment();
  });

  bench('Zen', () => {
    zenActions.increment();
  });
});

describe('Computed Access', () => {
  bench('Redux Toolkit', () => {
    reduxActions.getDoubled();
  });

  bench('Zustand', () => {
    zustandActions.getDoubled();
  });

  bench('Jotai', () => {
    jotaiActions.getDoubled();
  });

  bench('MobX', () => {
    mobxActions.getDoubled();
  });

  bench('Valtio', () => {
    valtioActions.getDoubled();
  });

  bench('Preact Signals', () => {
    preactActions.getDoubled();
  });

  bench('Solid Signals', () => {
    solidActions.getDoubled();
  });

  bench('Zen', () => {
    zenActions.getDoubled();
  });
});

describe('Nested Update', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setNested(Math.random());
  });

  bench('Zustand', () => {
    zustandActions.setNested(Math.random());
  });

  bench('Jotai', () => {
    jotaiActions.setNested(Math.random());
  });

  bench('MobX', () => {
    mobxActions.setNested(Math.random());
  });

  bench('Valtio', () => {
    valtioActions.setNested(Math.random());
  });

  bench('Preact Signals', () => {
    preactActions.setNested(Math.random());
  });

  bench('Solid Signals', () => {
    solidActions.setNested(Math.random());
  });

  bench('Zen', () => {
    zenActions.setNested(Math.random());
  });
});

describe('Array Push', () => {
  bench('Redux Toolkit', () => {
    reduxActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Zustand', () => {
    zustandActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Jotai', () => {
    jotaiActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('MobX', () => {
    mobxActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Valtio', () => {
    valtioActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Preact Signals', () => {
    preactActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Solid Signals', () => {
    solidActions.addUser({ ...testUser, id: Math.random() });
  });

  bench('Zen', () => {
    zenActions.addUser({ ...testUser, id: Math.random() });
  });
});

describe('Loading State Toggle', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setLoading(Math.random() > 0.5);
  });

  bench('Zustand', () => {
    zustandActions.setLoading(Math.random() > 0.5);
  });

  bench('Jotai', () => {
    jotaiActions.setLoading(Math.random() > 0.5);
  });

  bench('MobX', () => {
    mobxActions.setLoading(Math.random() > 0.5);
  });

  bench('Valtio', () => {
    valtioActions.setLoading(Math.random() > 0.5);
  });

  bench('Preact Signals', () => {
    preactActions.setLoading(Math.random() > 0.5);
  });

  bench('Solid Signals', () => {
    solidActions.setLoading(Math.random() > 0.5);
  });

  bench('Zen', () => {
    zenActions.setLoading(Math.random() > 0.5);
  });
});

describe('Multiple Subscriptions (10 subscribers)', () => {
  bench('Redux Toolkit', () => {
    const unsub = reduxActions.subscribeMultiple(10);
    reduxActions.increment();
    unsub();
  });

  bench('Zustand', () => {
    const unsub = zustandActions.subscribeMultiple(10);
    zustandActions.increment();
    unsub();
  });

  bench('Jotai', () => {
    const unsub = jotaiActions.subscribeMultiple(10);
    jotaiActions.increment();
    unsub();
  });

  bench('MobX', () => {
    const unsub = mobxActions.subscribeMultiple(10);
    mobxActions.increment();
    unsub();
  });

  bench('Valtio', () => {
    const unsub = valtioActions.subscribeMultiple(10);
    valtioActions.increment();
    unsub();
  });

  bench('Preact Signals', () => {
    const unsub = preactActions.subscribeMultiple(10);
    preactActions.increment();
    unsub();
  });

  bench('Solid Signals', () => {
    const unsub = solidActions.subscribeMultiple(10);
    solidActions.increment();
    unsub();
  });

  bench('Zen', () => {
    const unsub = zenActions.subscribeMultiple(10);
    zenActions.increment();
    unsub();
  });
});

describe('Batch Updates (3 state changes)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.batchUpdate(Math.random(), Math.random(), true);
  });

  bench('Zustand', () => {
    zustandActions.batchUpdate(Math.random(), Math.random(), true);
  });

  bench('Jotai', () => {
    jotaiActions.batchUpdate(Math.random(), Math.random(), true);
  });

  bench('MobX', () => {
    mobxActions.batchUpdate(Math.random(), Math.random(), true);
  });

  bench('Valtio', () => {
    valtioActions.batchUpdate(Math.random(), Math.random(), true);
  });

  bench('Preact Signals', () => {
    preactActions.batchUpdate(Math.random(), Math.random(), true);
  });

  bench('Solid Signals', () => {
    solidActions.batchUpdate(Math.random(), Math.random(), true);
  });

  bench('Zen', () => {
    zenActions.batchUpdate(Math.random(), Math.random(), true);
  });
});

describe('Array Filter', () => {
  bench('Redux Toolkit', () => {
    reduxActions.filterUsers(Math.floor(Math.random() * 100));
  });

  bench('Zustand', () => {
    zustandActions.filterUsers(Math.floor(Math.random() * 100));
  });

  bench('Jotai', () => {
    jotaiActions.filterUsers(Math.floor(Math.random() * 100));
  });

  bench('MobX', () => {
    mobxActions.filterUsers(Math.floor(Math.random() * 100));
  });

  bench('Valtio', () => {
    valtioActions.filterUsers(Math.floor(Math.random() * 100));
  });

  bench('Preact Signals', () => {
    preactActions.filterUsers(Math.floor(Math.random() * 100));
  });

  bench('Solid Signals', () => {
    solidActions.filterUsers(Math.floor(Math.random() * 100));
  });

  bench('Zen', () => {
    zenActions.filterUsers(Math.floor(Math.random() * 100));
  });
});

describe('Array Remove', () => {
  bench('Redux Toolkit', () => {
    reduxActions.removeUser(Math.floor(Math.random() * 100));
  });

  bench('Zustand', () => {
    zustandActions.removeUser(Math.floor(Math.random() * 100));
  });

  bench('Jotai', () => {
    jotaiActions.removeUser(Math.floor(Math.random() * 100));
  });

  bench('MobX', () => {
    mobxActions.removeUser(Math.floor(Math.random() * 100));
  });

  bench('Valtio', () => {
    valtioActions.removeUser(Math.floor(Math.random() * 100));
  });

  bench('Preact Signals', () => {
    preactActions.removeUser(Math.floor(Math.random() * 100));
  });

  bench('Solid Signals', () => {
    solidActions.removeUser(Math.floor(Math.random() * 100));
  });

  bench('Zen', () => {
    zenActions.removeUser(Math.floor(Math.random() * 100));
  });
});

describe('Array Update', () => {
  bench('Redux Toolkit', () => {
    reduxActions.updateUser(Math.floor(Math.random() * 100), { name: 'Updated' });
  });

  bench('Zustand', () => {
    zustandActions.updateUser(Math.floor(Math.random() * 100), { name: 'Updated' });
  });

  bench('Jotai', () => {
    jotaiActions.updateUser(Math.floor(Math.random() * 100), { name: 'Updated' });
  });

  bench('MobX', () => {
    mobxActions.updateUser(Math.floor(Math.random() * 100), { name: 'Updated' });
  });

  bench('Valtio', () => {
    valtioActions.updateUser(Math.floor(Math.random() * 100), { name: 'Updated' });
  });

  bench('Preact Signals', () => {
    preactActions.updateUser(Math.floor(Math.random() * 100), { name: 'Updated' });
  });

  bench('Solid Signals', () => {
    solidActions.updateUser(Math.floor(Math.random() * 100), { name: 'Updated' });
  });

  bench('Zen', () => {
    zenActions.updateUser(Math.floor(Math.random() * 100), { name: 'Updated' });
  });
});

describe('Deep Nested Update (5 levels)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.setDeepNested(Math.random());
  });

  bench('Zustand', () => {
    zustandActions.setDeepNested(Math.random());
  });

  bench('Jotai', () => {
    jotaiActions.setDeepNested(Math.random());
  });

  bench('MobX', () => {
    mobxActions.setDeepNested(Math.random());
  });

  bench('Valtio', () => {
    valtioActions.setDeepNested(Math.random());
  });

  bench('Preact Signals', () => {
    preactActions.setDeepNested(Math.random());
  });

  bench('Solid Signals', () => {
    solidActions.setDeepNested(Math.random());
  });

  bench('Zen', () => {
    zenActions.setDeepNested(Math.random());
  });
});

describe('Large State Update (1000 items)', () => {
  bench('Redux Toolkit', () => {
    reduxActions.updateLargeState(Math.floor(Math.random() * 1000), Math.random());
  });

  bench('Zustand', () => {
    zustandActions.updateLargeState(Math.floor(Math.random() * 1000), Math.random());
  });

  bench('Jotai', () => {
    jotaiActions.updateLargeState(Math.floor(Math.random() * 1000), Math.random());
  });

  bench('MobX', () => {
    mobxActions.updateLargeState(Math.floor(Math.random() * 1000), Math.random());
  });

  bench('Valtio', () => {
    valtioActions.updateLargeState(Math.floor(Math.random() * 1000), Math.random());
  });

  bench('Preact Signals', () => {
    preactActions.updateLargeState(Math.floor(Math.random() * 1000), Math.random());
  });

  bench('Solid Signals', () => {
    solidActions.updateLargeState(Math.floor(Math.random() * 1000), Math.random());
  });

  bench('Zen', () => {
    zenActions.updateLargeState(Math.floor(Math.random() * 1000), Math.random());
  });
});