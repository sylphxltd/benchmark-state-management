/**
 * Map & Set Operations Benchmarks
 */

import { bench, describe } from 'vitest';
import { produce, enableMapSet } from 'immer';
import { create as mutativeCreate } from 'mutative';
import { craft } from '@sylphx/craft';

enableMapSet();

describe('Map - Set Operation', () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }]
    ])
  };

  bench('Immer', () => {
    const result = produce(mapState, draft => {
      draft.users.set('charlie', { name: 'Charlie', age: 35 });
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(mapState, draft => {
      draft.users.set('charlie', { name: 'Charlie', age: 35 });
    });
  });

  bench('Craft', () => {
    const result = craft(mapState, draft => {
      draft.users.set('charlie', { name: 'Charlie', age: 35 });
    });
  });
});

describe('Map - Update Nested Value', () => {
  const mapState = {
    users: new Map([
      ['alice', { name: 'Alice', age: 25 }],
      ['bob', { name: 'Bob', age: 30 }]
    ])
  };

  bench('Immer', () => {
    const result = produce(mapState, draft => {
      const bob = draft.users.get('bob');
      if (bob) bob.age = 31;
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(mapState, draft => {
      const bob = draft.users.get('bob');
      if (bob) bob.age = 31;
    });
  });

  bench('Craft', () => {
    const result = craft(mapState, draft => {
      const bob = draft.users.get('bob');
      if (bob) bob.age = 31;
    });
  });
});

describe('Set - Add Operation', () => {
  const setState = {
    tags: new Set(['javascript', 'typescript'])
  };

  bench('Immer', () => {
    const result = produce(setState, draft => {
      draft.tags.add('react');
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(setState, draft => {
      draft.tags.add('react');
    });
  });

  bench('Craft', () => {
    const result = craft(setState, draft => {
      draft.tags.add('react');
    });
  });
});

describe('Set - Delete Operation', () => {
  const setState = {
    tags: new Set(['javascript', 'typescript', 'react'])
  };

  bench('Immer', () => {
    const result = produce(setState, draft => {
      draft.tags.delete('javascript');
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(setState, draft => {
      draft.tags.delete('javascript');
    });
  });

  bench('Craft', () => {
    const result = craft(setState, draft => {
      draft.tags.delete('javascript');
    });
  });
});

describe('Map - Large (100 items)', () => {
  const largeMapState = {
    users: new Map(
      Array.from({ length: 100 }, (_, i) => [
        `user${i}`,
        { name: `User ${i}`, age: 20 + i }
      ])
    )
  };

  bench('Immer', () => {
    const result = produce(largeMapState, draft => {
      draft.users.set('newUser', { name: 'New User', age: 25 });
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(largeMapState, draft => {
      draft.users.set('newUser', { name: 'New User', age: 25 });
    });
  });

  bench('Craft', () => {
    const result = craft(largeMapState, draft => {
      draft.users.set('newUser', { name: 'New User', age: 25 });
    });
  });
});

describe('Set - Large (100 items)', () => {
  const largeSetState = {
    tags: new Set(Array.from({ length: 100 }, (_, i) => `tag${i}`))
  };

  bench('Immer', () => {
    const result = produce(largeSetState, draft => {
      draft.tags.add('newTag');
    });
  });

  bench('Mutative', () => {
    const result = mutativeCreate(largeSetState, draft => {
      draft.tags.add('newTag');
    });
  });

  bench('Craft', () => {
    const result = craft(largeSetState, draft => {
      draft.tags.add('newTag');
    });
  });
});
