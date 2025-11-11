#!/usr/bin/env node
/**
 * Fix test imports to use correct relative path
 * Change: import { LIBRARIES } from '../shared/test-config';
 * To: import { LIBRARIES } from '../../shared/test-config';
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const CATEGORY_PATH = process.argv[2] || 'benchmarks/state-management';
const groupsPath = join(CATEGORY_PATH, 'groups');

let fixed = 0;
let total = 0;

// Get all group directories
const groupDirs = readdirSync(groupsPath, { withFileTypes: true })
  .filter(d => d.isDirectory() && /^\d{2}-/.test(d.name))
  .map(d => d.name);

console.log(`🔧 Fixing test imports in ${groupDirs.length} groups...\n`);

for (const groupName of groupDirs) {
  const testsPath = join(groupsPath, groupName, 'tests');

  try {
    const testFiles = readdirSync(testsPath).filter(f => f.endsWith('.bench.ts'));

    for (const testFile of testFiles) {
      total++;
      const filePath = join(testsPath, testFile);
      let content = readFileSync(filePath, 'utf-8');

      // Fix the import path
      const oldImport = `from '../shared/test-config'`;
      const newImport = `from '../../shared/test-config'`;

      if (content.includes(oldImport)) {
        content = content.replace(oldImport, newImport);
        writeFileSync(filePath, content);
        fixed++;
        console.log(`  ✓ Fixed ${groupName}/tests/${testFile}`);
      }
    }
  } catch (error) {
    // Skip if tests directory doesn't exist
  }
}

console.log(`\n✅ Fixed ${fixed}/${total} test files`);
