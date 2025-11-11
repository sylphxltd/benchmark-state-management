#!/usr/bin/env node
/**
 * Generate simple per-library test files from group registries
 * Each .bench.ts file loops through TESTS and calls test.execute(store)
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

interface LibraryMetadata {
  libraries: {
    [key: string]: {
      displayName: string;
      npm: string;
      url: string;
    };
  };
}

const LIBRARY_STORE_MAP: Record<string, string> = {
  '@reduxjs/toolkit': 'reduxActionsV2',
  'zustand': 'zustandActionsV2',
  'jotai': 'jotaiActionsV2',
  'mobx': 'mobxActionsV2',
  'valtio': 'valtioActionsV2',
  '@preact/signals': 'preactActionsV2',
  'solid-js': 'solidActionsV2',
  '@sylphx/zen': 'zenActionsV2',
};

const GROUP_REGISTRIES = [
  '01-read',
  '02-write',
  '03-creation',
  '04-complexity',
  '06-memory',
  '07-form',
  '08-async-reactive',
];

function generateTestFile(
  groupName: string,
  displayName: string,
  storeVarName: string,
): string {
  return `/**
 * ${groupName} - ${displayName}
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { ${storeVarName} } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = ${storeVarName};

describe('${groupName} - ${displayName}', () => {
  Object.values(TESTS).forEach(test => {
    bench(test.name, () => {
      test.execute(store);
    });
  });
});
`;
}

async function generateAllTests(categoryPath: string) {
  const metadataPath = join(categoryPath, 'library-metadata.json');

  if (!existsSync(metadataPath)) {
    console.error(`❌ library-metadata.json not found in ${categoryPath}`);
    process.exit(1);
  }

  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

  console.log(`📝 Generating simple test files from registries...\n`);

  let totalGenerated = 0;

  for (const groupName of GROUP_REGISTRIES) {
    const groupPath = join(categoryPath, 'groups', groupName);
    const testsPath = join(groupPath, 'tests');
    const registryPath = join(groupPath, 'test-registry.ts');

    if (!existsSync(registryPath)) {
      console.log(`  ⚠️  No registry found for ${groupName}, skipping`);
      continue;
    }

    if (!existsSync(testsPath)) {
      mkdirSync(testsPath, { recursive: true });
    }

    console.log(`📂 ${groupName}:`);

    for (const [libraryKey, libInfo] of Object.entries(metadata.libraries)) {
      const storeVarName = LIBRARY_STORE_MAP[libraryKey];

      if (!storeVarName) {
        console.log(`  ⚠️  No store mapping for ${libraryKey}, skipping`);
        continue;
      }

      // Use same naming convention as before (based on displayName)
      const safeLibName = libInfo.displayName.toLowerCase().replace(/\s+/g, '-').replace(/@/g, '').replace(/\//g, '-');
      const testFilePath = join(testsPath, `${safeLibName}.bench.ts`);

      const content = generateTestFile(
        groupName,
        libInfo.displayName,
        storeVarName,
      );

      writeFileSync(testFilePath, content);
      console.log(`  ✓ ${safeLibName}.bench.ts`);
      totalGenerated++;
    }

    console.log('');
  }

  console.log(`✅ Generated ${totalGenerated} simple test files from registries`);
}

// Main execution
const categoryPath = process.argv[2] || join(process.cwd(), 'benchmarks/state-management');

generateAllTests(categoryPath).catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
