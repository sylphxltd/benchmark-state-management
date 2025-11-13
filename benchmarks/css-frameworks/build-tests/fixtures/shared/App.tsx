/**
 * Shared Test Component
 * A simple app with common UI elements to test CSS generation
 */

import React from 'react';

interface AppProps {
  styles: {
    container: string;
    header: string;
    title: string;
    button: string;
    card: string;
    cardHeader: string;
    cardBody: string;
    list: string;
    listItem: string;
    footer: string;
  };
}

export function App({ styles }: AppProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>CSS Framework Benchmark</h1>
      </header>

      <main>
        {/* Button variations */}
        <div>
          <button className={styles.button}>Primary Button</button>
          <button className={styles.button}>Secondary Button</button>
          <button className={styles.button}>Tertiary Button</button>
        </div>

        {/* Cards */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>Card {i}</div>
            <div className={styles.cardBody}>
              Card content goes here with some text.
            </div>
          </div>
        ))}

        {/* List */}
        <ul className={styles.list}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <li key={i} className={styles.listItem}>
              List item {i}
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
