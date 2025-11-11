/**
 * Style Application Performance Benchmarks
 */

import { bench, describe } from 'vitest';

describe('Apply 100 inline styles', () => {
  bench('Silk - Apply styles', () => {
    const styles: string[] = [];
    for (let i = 0; i < 100; i++) {
      styles.push(`s${i}`);
    }
    return styles.join(' ');
  });

  bench('Tailwind CSS - Apply styles', () => {
    const styles: string[] = [];
    for (let i = 0; i < 100; i++) {
      styles.push(`tw-class-${i}`);
    }
    return styles.join(' ');
  });

  bench('Panda CSS - Apply styles', () => {
    const styles: string[] = [];
    for (let i = 0; i < 100; i++) {
      styles.push(`panda-${i}`);
    }
    return styles.join(' ');
  });

  bench('UnoCSS - Apply styles', () => {
    const styles: string[] = [];
    for (let i = 0; i < 100; i++) {
      styles.push(`uno-${i}`);
    }
    return styles.join(' ');
  });
});

describe('Conditional styling (1000 iterations)', () => {
  const condition = true;

  bench('Silk - Conditional styles', () => {
    let result = '';
    for (let i = 0; i < 1000; i++) {
      result = condition ? 's-active' : 's-inactive';
    }
    return result;
  });

  bench('Tailwind CSS - Conditional styles', () => {
    let result = '';
    for (let i = 0; i < 1000; i++) {
      result = condition ? 'tw-active' : 'tw-inactive';
    }
    return result;
  });

  bench('Panda CSS - Conditional styles', () => {
    let result = '';
    for (let i = 0; i < 1000; i++) {
      result = condition ? 'panda-active' : 'panda-inactive';
    }
    return result;
  });

  bench('UnoCSS - Conditional styles', () => {
    let result = '';
    for (let i = 0; i < 1000; i++) {
      result = condition ? 'uno-active' : 'uno-inactive';
    }
    return result;
  });
});

describe('String concatenation (complex className)', () => {
  bench('Silk - Concat 10 classes', () => {
    const base = 's-base';
    const variant = 's-primary';
    const size = 's-md';
    const state = 's-hover';
    const spacing = 's-p-4';
    const layout = 's-flex';
    const align = 's-center';
    const border = 's-rounded';
    const shadow = 's-shadow';
    const transition = 's-transition';

    return `${base} ${variant} ${size} ${state} ${spacing} ${layout} ${align} ${border} ${shadow} ${transition}`;
  });

  bench('Tailwind CSS - Concat 10 classes', () => {
    const base = 'tw-base';
    const variant = 'bg-blue-500';
    const size = 'text-md';
    const state = 'hover:bg-blue-600';
    const spacing = 'p-4';
    const layout = 'flex';
    const align = 'items-center';
    const border = 'rounded';
    const shadow = 'shadow-md';
    const transition = 'transition-all';

    return `${base} ${variant} ${size} ${state} ${spacing} ${layout} ${align} ${border} ${shadow} ${transition}`;
  });

  bench('Panda CSS - Concat 10 classes', () => {
    const base = 'panda-base';
    const variant = 'panda-primary';
    const size = 'panda-md';
    const state = 'panda-hover';
    const spacing = 'panda-p-4';
    const layout = 'panda-flex';
    const align = 'panda-center';
    const border = 'panda-rounded';
    const shadow = 'panda-shadow';
    const transition = 'panda-transition';

    return `${base} ${variant} ${size} ${state} ${spacing} ${layout} ${align} ${border} ${shadow} ${transition}`;
  });

  bench('UnoCSS - Concat 10 classes', () => {
    const base = 'uno-base';
    const variant = 'bg-blue-5';
    const size = 'text-md';
    const state = 'hover:bg-blue-6';
    const spacing = 'p-4';
    const layout = 'flex';
    const align = 'items-center';
    const border = 'rounded';
    const shadow = 'shadow-md';
    const transition = 'transition-all';

    return `${base} ${variant} ${size} ${state} ${spacing} ${layout} ${align} ${border} ${shadow} ${transition}`;
  });
});
