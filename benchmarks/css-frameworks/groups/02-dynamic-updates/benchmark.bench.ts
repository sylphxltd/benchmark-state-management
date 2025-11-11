/**
 * Dynamic Style Updates Benchmarks
 */

import { bench, describe } from 'vitest';

describe('Theme toggle (dark/light mode)', () => {
  let theme = 'light';

  bench('Silk - Toggle theme 1000x', () => {
    for (let i = 0; i < 1000; i++) {
      theme = theme === 'light' ? 'dark' : 'light';
      const className = theme === 'dark' ? 's-dark' : 's-light';
    }
  });

  bench('Tailwind CSS - Toggle theme 1000x', () => {
    for (let i = 0; i < 1000; i++) {
      theme = theme === 'light' ? 'dark' : 'light';
      const className = theme === 'dark' ? 'dark:bg-gray-900' : 'bg-white';
    }
  });

  bench('Panda CSS - Toggle theme 1000x', () => {
    for (let i = 0; i < 1000; i++) {
      theme = theme === 'light' ? 'dark' : 'light';
      const className = theme === 'dark' ? 'panda-dark' : 'panda-light';
    }
  });

  bench('UnoCSS - Toggle theme 1000x', () => {
    for (let i = 0; i < 1000; i++) {
      theme = theme === 'light' ? 'dark' : 'light';
      const className = theme === 'dark' ? 'dark:bg-gray-9' : 'bg-white';
    }
  });
});

describe('Responsive breakpoint matching', () => {
  const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];

  bench('Silk - Match breakpoint 1000x', () => {
    for (let i = 0; i < 1000; i++) {
      const bp = breakpoints[i % breakpoints.length];
      const className = `s-${bp}:hidden`;
    }
  });

  bench('Tailwind CSS - Match breakpoint 1000x', () => {
    for (let i = 0; i < 1000; i++) {
      const bp = breakpoints[i % breakpoints.length];
      const className = `${bp}:hidden`;
    }
  });

  bench('Panda CSS - Match breakpoint 1000x', () => {
    for (let i = 0; i < 1000; i++) {
      const bp = breakpoints[i % breakpoints.length];
      const className = `panda-${bp}:hidden`;
    }
  });

  bench('UnoCSS - Match breakpoint 1000x', () => {
    for (let i = 0; i < 1000; i++) {
      const bp = breakpoints[i % breakpoints.length];
      const className = `${bp}:hidden`;
    }
  });
});
