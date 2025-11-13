/**
 * Ky Library Implementation
 */

import ky from 'ky';
import { category, tests } from '../index';

const API_BASE = 'https://httpbin.org';

const kyLib = category.registerLibrary({
  id: 'ky',
  displayName: 'Ky',
  packageName: 'ky',
  githubUrl: 'https://github.com/sindresorhus/ky',
  description: 'Tiny and elegant HTTP client',

  setup: {
    createStore: () => ky.create({ prefixUrl: API_BASE }),
  },
});

kyLib.implement(tests.simpleGet, async (ctx) => {
  return await ctx.store.get('get').json();
});

kyLib.implement(tests.simplePost, async (ctx) => {
  return await ctx.store.post('post', { json: { test: 'data' } }).json();
});

kyLib.implement(tests.concurrentRequests, async (ctx) => {
  const requests = Array.from({ length: 10 }, () =>
    ctx.store.get('get').json()
  );
  await Promise.all(requests);
});

kyLib.implement(tests.handleError, async (ctx) => {
  try {
    await ctx.store.get('status/404');
  } catch (error) {
    return true;
  }
});
