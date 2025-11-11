/**
 * Zen Router implementation
 *
 * Note: @sylphx/zen-router doesn't expose a matching function,
 * so we implement the matching logic based on the router's internal implementation
 */
import { $router, defineRoutes, open, RouteConfig } from '@sylphx/zen-router';
import { get } from '@sylphx/zen';

// Define routes configuration
export const zenRoutes: RouteConfig[] = [
  { path: '/' },
  { path: '/about' },
  { path: '/users' },
  { path: '/users/:id' },
  { path: '/users/:id/posts' },
  { path: '/users/:id/posts/:postId' },
  { path: '/blog/*' },
  { path: '/products/:category/:subcategory?' },
];

// Compile a route path into a regexp (based on zen-router's internal implementation)
function compileRoute(path: string): { regexp: RegExp; keys: string[] } {
  if (path === '*') {
    return { regexp: /^.*$/, keys: [] };
  }

  const keys: string[] = [];
  const normalizedPath = path === '*' || path.startsWith('/') ? path : `/${path}`;
  let pattern = '^';
  const segments = normalizedPath.split('/');

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (segment === undefined) continue;
    if (i === 0 && segment === '') continue;

    pattern += '\\/';

    if (segment === '*') {
      // Wildcard segment - matches everything after this point
      keys.push('*');
      pattern += '(.*)';
      break; // Nothing after wildcard matters
    } else if (segment.startsWith(':')) {
      const isOptional = segment.endsWith('?');
      const paramName = isOptional ? segment.slice(1, -1) : segment.slice(1);

      if (!paramName) {
        throw new Error(`Invalid parameter name in path "${path}"`);
      }

      keys.push(paramName);
      const paramPattern = '([^\\/]+?)';

      if (isOptional) {
        pattern = pattern.slice(0, -2); // Remove the '\/'
        pattern += `(?:\\/${paramPattern})?`;
      } else {
        pattern += paramPattern;
      }
    } else {
      // Escape special regex characters
      pattern += segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  }

  if (pattern === '^') {
    pattern += '\\/';
  }

  if (!normalizedPath.endsWith('/') || normalizedPath === '/') {
    pattern += '\\/?';
  }

  pattern += '$';

  return {
    regexp: new RegExp(pattern, 'i'),
    keys,
  };
}

// Pre-compile all routes for performance
const compiledRoutes = zenRoutes.map((route) => ({
  route,
  ...compileRoute(route.path),
}));

// Match a path against routes
export function matchZenRoute(path: string) {
  for (const { route, regexp, keys } of compiledRoutes) {
    const match = regexp.exec(path);

    if (match) {
      const params: Record<string, string | undefined> = {};

      for (let i = 1; i < match.length; i++) {
        const key = keys[i - 1];
        const value = match[i];

        if (key && value !== undefined) {
          try {
            params[key] = decodeURIComponent(value);
          } catch {
            params[key] = value;
          }
        } else if (key && value === undefined) {
          params[key] = undefined;
        }
      }

      return { route, params };
    }
  }

  return null;
}

// Initialize routes
let routesInitialized = false;
export function initializeZenRoutes() {
  if (!routesInitialized) {
    defineRoutes(zenRoutes);
    routesInitialized = true;
  }
}

// Navigate
export function navigateZenRouter(path: string) {
  // Use open() for programmatic navigation
  // In benchmark, we test the matching performance, not actual browser navigation
  return matchZenRoute(path);
}

// Get current router state
export function getZenRouterState() {
  return get($router);
}
