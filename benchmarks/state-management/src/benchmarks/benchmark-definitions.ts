import {
  reduxActions,
  zustandActions,
  jotaiActions,
  mobxActions,
  valtioActions,
  preactActions,
  solidActions
} from '../stores';
import { asyncBenchmarks } from './async-benchmark-definitions';

export interface BenchmarkTest {
  name: string;
  category: string;
  fn: () => void;
}

export interface LibraryBenchmark {
  library: string;
  tests: BenchmarkTest[];
}

// Test data for array operations
const testUser = { id: 1, name: 'Test User' };

export const benchmarkLibraries: LibraryBenchmark[] = [
  {
    library: 'Redux Toolkit',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => reduxActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => reduxActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => reduxActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => reduxActions.addUser({ ...testUser, id: Math.random() })
      },
      {
        name: 'Async Data Fetch',
        category: 'Async Operations',
        fn: () => reduxActions.fetchData({ id: Math.random(), data: 'test' })
      },
      {
        name: 'Loading State Toggle',
        category: 'Async Operations',
        fn: () => reduxActions.setLoading(Math.random() > 0.5)
      }
    ]
  },
  {
    library: 'Zustand',
    tests: [
      {
        name: 'Simple Increment',
        category: 'Simple Increment',
        fn: () => zustandActions.increment()
      },
      {
        name: 'Computed Access',
        category: 'Computed Access',
        fn: () => zustandActions.getDoubled()
      },
      {
        name: 'Nested Update',
        category: 'Nested Update',
        fn: () => zustandActions.setNested(Math.random())
      },
      {
        name: 'Array Push',
        category: 'Array Push',
        fn: () => zustandActions.addUser({ ...testUser, id: Math.random() })
      },
      {
        name: 'Async Data Fetch',
        category: 'Async Operations',
        fn: () => zustandActions.fetchData({ id: Math.random(), data: 'test' })
      },
      {
        name: 'Loading State Toggle',
        category: 'Async Operations',
        fn: () => zustandActions.setLoading(Math.random() > 0.5)
      }
    ]
  },
  ...asyncBenchmarks
];

export const benchmarkCategories = ['Simple Increment', 'Computed Access', 'Nested Update', 'Array Push', 'Async Operations'];