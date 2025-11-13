import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../../shared/App';
import { css } from '../styled-system/css';

const styles = {
  container: css({ minH: 'screen', bg: 'gray.50', p: '4' }),
  header: css({ bg: 'white', shadow: 'sm', rounded: 'lg', p: '6', mb: '6' }),
  title: css({ fontSize: '3xl', fontWeight: 'bold', color: 'gray.900' }),
  button: css({
    bg: 'blue.500',
    _hover: { bg: 'blue.600' },
    color: 'white',
    fontWeight: 'medium',
    py: '2',
    px: '4',
    rounded: 'md',
    transition: 'colors',
  }),
  card: css({ bg: 'white', shadow: 'md', rounded: 'lg', p: '4', mb: '4' }),
  cardHeader: css({ fontSize: 'xl', fontWeight: 'semibold', color: 'gray.800', mb: '2' }),
  cardBody: css({ color: 'gray.600' }),
  list: css({ bg: 'white', shadow: 'md', rounded: 'lg', p: '4', spaceY: '2' }),
  listItem: css({ borderBottom: '1px', borderColor: 'gray.200', pb: '2', _last: { borderBottom: 'none' } }),
  footer: css({ bg: 'white', shadow: 'sm', rounded: 'lg', p: '6', mt: '6', textAlign: 'center', color: 'gray.600' }),
};

const root = createRoot(document.getElementById('root')!);
root.render(<App styles={styles} />);
