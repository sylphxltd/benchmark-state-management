/**
 * Basic Route Matching Benchmarks
 */

import { bench, describe } from 'vitest';
import {
  matchReactRoutes,
  matchWouterRoute,
  matchZenRoute,
  initializeZenRoutes,
} from '../shared/routers';

initializeZenRoutes();

describe('Static Route Matching', () => {
  const path = '/';

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

describe('Simple Route Matching', () => {
  const path = '/about';

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
