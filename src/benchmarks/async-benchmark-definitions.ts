/**
 * Async benchmark definitions for all libraries
 * This file will be merged with the main benchmark definitions
 */

import {
  reduxActions,
  zustandActions,
  jotaiActions,
  mobxActions,
  valtioActions,
  preactActions,
  solidActions,
  zenActions
} from '../stores';

const testUser = { id: 1, name: 'Test User' };

export const asyncBenchmarks = [
  {
    library: 'Jotai',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => jotaiActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => jotaiActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => jotaiActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => jotaiActions.addUser({ ...testUser, id: Math.random() })
      },
      {
        name: 'Async Data Fetch',
        category: 'Async Operations',
        fn: () => jotaiActions.fetchData({ id: Math.random(), data: 'test' })
      },
      {
        name: 'Loading State Toggle',
        category: 'Async Operations',
        fn: () => jotaiActions.setLoading(Math.random() > 0.5)
      }
    ]
  },
  {
    library: 'MobX',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => mobxActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => mobxActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => mobxActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => mobxActions.addUser({ ...testUser, id: Math.random() })
      },
      {
        name: 'Async Data Fetch',
        category: 'Async Operations',
        fn: () => mobxActions.fetchData({ id: Math.random(), data: 'test' })
      },
      {
        name: 'Loading State Toggle',
        category: 'Async Operations',
        fn: () => mobxActions.setLoading(Math.random() > 0.5)
      }
    ]
  },
  {
    library: 'Valtio',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => valtioActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => valtioActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => valtioActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => valtioActions.addUser({ ...testUser, id: Math.random() })
      },
      {
        name: 'Async Data Fetch',
        category: 'Async Operations',
        fn: () => valtioActions.fetchData({ id: Math.random(), data: 'test' })
      },
      {
        name: 'Loading State Toggle',
        category: 'Async Operations',
        fn: () => valtioActions.setLoading(Math.random() > 0.5)
      }
    ]
  },
  {
    library: 'Preact Signals',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => preactActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => preactActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => preactActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => preactActions.addUser({ ...testUser, id: Math.random() })
      },
      {
        name: 'Async Data Fetch',
        category: 'Async Operations',
        fn: () => preactActions.fetchData({ id: Math.random(), data: 'test' })
      },
      {
        name: 'Loading State Toggle',
        category: 'Async Operations',
        fn: () => preactActions.setLoading(Math.random() > 0.5)
      }
    ]
  },
  {
    library: 'Solid Signals',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => solidActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => solidActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => solidActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => solidActions.addUser({ ...testUser, id: Math.random() })
      },
      {
        name: 'Async Data Fetch',
        category: 'Async Operations',
        fn: () => solidActions.fetchData({ id: Math.random(), data: 'test' })
      },
      {
        name: 'Loading State Toggle',
        category: 'Async Operations',
        fn: () => solidActions.setLoading(Math.random() > 0.5)
      }
    ]
  },
  {
    library: 'Zen',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => zenActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => zenActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => zenActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => zenActions.addUser({ ...testUser, id: Math.random() })
      },
      {
        name: 'Async Data Fetch',
        category: 'Async Operations',
        fn: () => zenActions.fetchData({ id: Math.random(), data: 'test' })
      },
      {
        name: 'Loading State Toggle',
        category: 'Async Operations',
        fn: () => zenActions.setLoading(Math.random() > 0.5)
      }
    ]
  }
];