/**
 * Real-World Pattern Benchmarks
 */

import { bench, describe } from 'vitest';
import {
  matchReactRoutes,
  matchWouterRoute,
  matchZenRoute,
  initializeZenRoutes,
} from '../shared/routers';

initializeZenRoutes();

describe('Mixed Route Matching (realistic usage)', () => {
  const paths = [
    '/',
    '/about',
    '/users/123',
    '/users/456/posts',
    '/users/789/posts/101',
    '/blog/some/deep/path',
    '/products/electronics/phones',
  ];

  bench('React Router', () => {
    for (const path of paths) {
      matchReactRoutes(path);
    }
  });

  bench('Wouter', () => {
    for (const path of paths) {
      matchWouterRoute(path);
    }
  });

  bench('Zen Router', () => {
    for (const path of paths) {
      matchZenRoute(path);
    }
  });
});

describe('Sequential Route Matching (worst case)', () => {
  const path = '/products/electronics/phones';

  bench('React Router', () => {
    matchReactRoutes(path);
  });

  bench('Wouter', () => {
    matchWouterRoute(path);
  });

  bench('Zen Router', () => {
    matchZenRoute(path);
  });
});
