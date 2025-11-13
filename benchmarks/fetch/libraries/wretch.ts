/**
 * Wretch Library Implementation
 */

import wretch from 'wretch';
import { category, tests } from '../index';

const API_BASE = 'https://httpbin.org';

const wretchLib = category.registerLibrary({
  id: 'wretch',
  displayName: 'Wretch',
  packageName: 'wretch',
  githubUrl: 'https://github.com/elbywan/wretch',
  description: 'Tiny wrapper built around fetch',

  setup: {
    createStore: () => wretch(API_BASE),
  },
});

wretchLib.implement(tests.simpleGet, async (ctx) => {
  return await ctx.store.url('/get').get().json();
});

wretchLib.implement(tests.simplePost, async (ctx) => {
  return await ctx.store.url('/post').post({ test: 'data' }).json();
});

wretchLib.implement(tests.concurrentRequests, async (ctx) => {
  const requests = Array.from({ length: 10 }, () =>
    ctx.store.url('/get').get().json()
  );
  await Promise.all(requests);
});

wretchLib.implement(tests.handleError, async (ctx) => {
  try {
    await ctx.store.url('/status/404').get();
  } catch (error) {
    return true;
  }
});
