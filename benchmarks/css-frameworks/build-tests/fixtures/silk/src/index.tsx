import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../../shared/App';
import './styles.silk.css';

const styles = {
  container: 's-min-h-screen s-bg-gray-50 s-p-4',
  header: 's-bg-white s-shadow-sm s-rounded-lg s-p-6 s-mb-6',
  title: 's-text-3xl s-font-bold s-text-gray-900',
  button: 's-bg-blue-500 hover:s-bg-blue-600 s-text-white s-font-medium s-py-2 s-px-4 s-rounded s-transition',
  card: 's-bg-white s-shadow-md s-rounded-lg s-p-4 s-mb-4',
  cardHeader: 's-text-xl s-font-semibold s-text-gray-800 s-mb-2',
  cardBody: 's-text-gray-600',
  list: 's-bg-white s-shadow-md s-rounded-lg s-p-4 s-space-y-2',
  listItem: 's-border-b s-border-gray-200 s-pb-2 last:s-border-b-0',
  footer: 's-bg-white s-shadow-sm s-rounded-lg s-p-6 s-mt-6 s-text-center s-text-gray-600',
};

const root = createRoot(document.getElementById('root')!);
root.render(<App styles={styles} />);
