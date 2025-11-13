import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../../shared/App';
import 'uno.css';

const styles = {
  container: 'min-h-screen bg-gray-50 p-4',
  header: 'bg-white shadow-sm rounded-lg p-6 mb-6',
  title: 'text-3xl font-bold text-gray-900',
  button: 'bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors',
  card: 'bg-white shadow-md rounded-lg p-4 mb-4',
  cardHeader: 'text-xl font-semibold text-gray-800 mb-2',
  cardBody: 'text-gray-600',
  list: 'bg-white shadow-md rounded-lg p-4 space-y-2',
  listItem: 'border-b border-gray-200 pb-2 last:border-b-0',
  footer: 'bg-white shadow-sm rounded-lg p-6 mt-6 text-center text-gray-600',
};

const root = createRoot(document.getElementById('root')!);
root.render(<App styles={styles} />);
