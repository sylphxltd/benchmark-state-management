/**
 * Axios Library Implementation
 */

import axios from 'axios';
import { category, tests } from '../index';

// Test endpoint (using httpbin.org)
const API_BASE = 'https://httpbin.org';

// ============================================================================
// Register Library
// ============================================================================

const axiosLib = category.registerLibrary({
  id: 'axios',
  displayName: 'Axios',
  packageName: 'axios',
  githubUrl: 'https://github.com/axios/axios',
  description: 'Promise based HTTP client',

  setup: {
    createStore: () => axios.create({ baseURL: API_BASE }),
  },
});

// ============================================================================
// Implement Tests
// ============================================================================

// Simple GET Request
axiosLib.implement(tests.simpleGet, async (ctx) => {
  const response = await ctx.store.get('/get');
  return response.data;
});

// Simple POST Request
axiosLib.implement(tests.simplePost, async (ctx) => {
  const response = await ctx.store.post('/post', { test: 'data' });
  return response.data;
});

// Concurrent Requests
axiosLib.implement(tests.concurrentRequests, async (ctx) => {
  const requests = Array.from({ length: 10 }, () =>
    ctx.store.get('/get')
  );
  await Promise.all(requests);
});

// Handle Error
axiosLib.implement(tests.handleError, async (ctx) => {
  try {
    await ctx.store.get('/status/404');
  } catch (error) {
    // Successfully handled error
    return true;
  }
});
