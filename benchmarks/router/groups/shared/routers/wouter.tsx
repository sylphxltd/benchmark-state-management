/**
 * Wouter implementation
 */
import { Router, Route, Switch, matchRoute } from 'wouter';
import { parse } from 'regexparam';

// Define routes
export const wouterRoutes = [
  '/',
  '/about',
  '/users',
  '/users/:id',
  '/users/:id/posts',
  '/users/:id/posts/:postId',
  '/blog/*',
  '/products/:category/:subcategory?',
];

// Match route using wouter's matchRoute with regexparam parser
export function matchWouterRoute(path: string) {
  for (const route of wouterRoutes) {
    const match = matchRoute(parse, route, path);
    if (match[0]) {
      return { route, params: match[1] };
    }
  }
  return null;
}

// Simple navigation state for benchmarking
let currentPath = '/';

export function navigateWouter(path: string) {
  currentPath = path;
  return currentPath;
}

export function getCurrentWouterPath() {
  return currentPath;
}
