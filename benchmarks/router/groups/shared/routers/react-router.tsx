/**
 * React Router DOM implementation
 */
import { createMemoryRouter, RouterProvider, matchRoutes, createRoutesFromElements, Route } from 'react-router-dom';

// Define routes configuration
export const routesConfig = [
  { path: '/', element: null },
  { path: '/about', element: null },
  { path: '/users', element: null },
  { path: '/users/:id', element: null },
  { path: '/users/:id/posts', element: null },
  { path: '/users/:id/posts/:postId', element: null },
  { path: '/blog/*', element: null },
  { path: '/products/:category/:subcategory?', element: null },
];

// Create router instance
export function createReactRouter() {
  return createMemoryRouter(routesConfig);
}

// Match routes
export function matchReactRoutes(path: string) {
  return matchRoutes(routesConfig, path);
}

// Navigate
export async function navigateReactRouter(router: ReturnType<typeof createReactRouter>, path: string) {
  await router.navigate(path);
}
