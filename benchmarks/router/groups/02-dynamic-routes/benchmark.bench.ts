/**
 * Dynamic Route Matching Benchmarks
 */

import { bench, describe } from 'vitest';
import {
  matchReactRoutes,
  matchWouterRoute,
  matchZenRoute,
  initializeZenRoutes,
} from '../shared/routers';

initializeZenRoutes();

describe('Dynamic Route Matching (1 param)', () => {
  const path = '/users/123';

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

describe('Nested Dynamic Routes (2 params)', () => {
  const path = '/users/123/posts/456';

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
