/**
 * Advanced Route Matching Benchmarks
 */

import { bench, describe } from 'vitest';
import {
  matchReactRoutes,
  matchWouterRoute,
  matchZenRoute,
  initializeZenRoutes,
} from '../shared/routers';

initializeZenRoutes();

describe('Wildcard Route Matching', () => {
  const path = '/blog/2024/01/my-post';

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

describe('Optional Parameter Route (with param)', () => {
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

describe('Optional Parameter Route (without param)', () => {
  const path = '/products/electronics';

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
