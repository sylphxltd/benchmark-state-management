#!/usr/bin/env tsx

/**
 * Script to install all required dependencies for state management libraries
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const libraries = [
  '@reduxjs/toolkit@latest',
  'redux@latest',
  'zustand@latest',
  'jotai@latest',
  'mobx@latest',
  'mobx-state-tree@latest',
  'recoil@latest',
  'valtio@latest',
  'xstate@latest',
  'effector@latest',
  'pinia@latest',
  'nanostores@latest',
  '@legend-state/state@beta',
  'preact@latest',
  'solid-js@latest',
  'svelte@latest'
];

async function installDependencies() {
  console.log('📦 Installing state management library dependencies...\n');

  try {
    // Install all dependencies in one go
    const installCmd = `npm install ${libraries.join(' ')} --save`;
    console.log(`Running: ${installCmd}`);
    execSync(installCmd, { stdio: 'inherit' });

    console.log('\n✅ All dependencies installed successfully!');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error);
    process.exit(1);
  }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  installDependencies();
}