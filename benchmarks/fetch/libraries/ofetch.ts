/**
 * ofetch Library Implementation
 */

import { ofetch } from 'ofetch';
import { category, tests } from '../index';

const API_BASE = 'https://httpbin.org';

const ofetchLib = category.registerLibrary({
  id: 'ofetch',
  displayName: 'ofetch',
  packageName: 'ofetch',
  githubUrl: 'https://github.com/unjs/ofetch',
  description: 'A better fetch API',

  setup: {
    createStore: () => ofetch.create({ baseURL: API_BASE }),
  },
});

ofetchLib.implement(tests.simpleGet, async (ctx) => {
  return await ctx.store('/get');
});

ofetchLib.implement(tests.simplePost, async (ctx) => {
  return await ctx.store('/post', { method: 'POST', body: { test: 'data' } });
});

ofetchLib.implement(tests.concurrentRequests, async (ctx) => {
  const requests = Array.from({ length: 10 }, () =>
    ctx.store('/get')
  );
  await Promise.all(requests);
});

ofetchLib.implement(tests.handleError, async (ctx) => {
  try {
    await ctx.store('/status/404');
  } catch (error) {
    return true;
  }
});
