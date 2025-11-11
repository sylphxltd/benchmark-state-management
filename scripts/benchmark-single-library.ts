#!/usr/bin/env node
/**
 * Single Library Benchmark Script
 * Runs benchmarks for a specific library and saves results independently
 *
 * Usage: npx tsx benchmark-single-library.ts <library-key> <category-path>
 * Example: npx tsx benchmark-single-library.ts jotai benchmarks/state-management
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';

interface LibraryBenchmarkResult {
  library: string;
  libraryKey: string;
  version: string;
  lastRun: string;
  groups: Record<string, any>;
}

interface VersionTracker {
  libraries: {
    [name: string]: {
      current: string;
      latest: string;
      lastUpdated: string;
    };
  };
}

interface LibraryMetadata {
  libraries: {
    [key: string]: {
      displayName: string;
      npm: string;
      url: string;
    };
  };
}

async function benchmarkSingleLibrary(libraryKey: string, categoryPath: string) {
  const versionsPath = join(categoryPath, 'versions.json');
  const metadataPath = join(categoryPath, 'library-metadata.json');
  const resultsDir = join(categoryPath, 'results');
  const outputPath = join(resultsDir, `${libraryKey}-benchmark.json`);

  console.log(`\n🎯 Benchmarking ${libraryKey}...\n`);

  // Load metadata
  if (!existsSync(metadataPath)) {
    console.error(`❌ library-metadata.json not found in ${categoryPath}`);
    process.exit(1);
  }

  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  const libInfo = metadata.libraries[libraryKey];

  if (!libInfo) {
    console.error(`❌ Library ${libraryKey} not found in library-metadata.json`);
    process.exit(1);
  }

  // Load versions
  if (!existsSync(versionsPath)) {
    console.error(`❌ versions.json not found in ${categoryPath}`);
    process.exit(1);
  }

  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  const versionInfo = versions.libraries[libraryKey];

  if (!versionInfo) {
    console.error(`❌ Version info for ${libraryKey} not found in versions.json`);
    process.exit(1);
  }

  const displayName = libInfo.displayName;
  const currentVersion = versionInfo.current;

  console.log(`📚 Library: ${displayName}`);
  console.log(`📦 Version: ${currentVersion}`);
  console.log(``);

  // Run benchmarks filtered by library name
  console.log(`⏳ Running benchmarks (this may take several minutes)...\n`);

  try {
    // Run vitest with grep filter for this specific library
    const benchCmd = `npx vitest bench --run --grep "${displayName}"`;

    execSync(benchCmd, {
      cwd: categoryPath,
      stdio: 'inherit',
      encoding: 'utf-8'
    });

    console.log(`\n✅ Benchmarks completed for ${displayName}`);

  } catch (error) {
    console.error(`\n❌ Benchmark failed for ${displayName}:`, error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }

  // Collect results from all group results.json files
  console.log(`\n📊 Collecting results...`);

  const groupResults: Record<string, any> = {};
  const groupsPath = join(categoryPath, 'groups');

  try {
    const { readdirSync, statSync } = require('fs');
    const groups = readdirSync(groupsPath).filter((dir: string) => {
      const fullPath = join(groupsPath, dir);
      return statSync(fullPath).isDirectory();
    });

    for (const groupDir of groups) {
      const groupResultsPath = join(groupsPath, groupDir, 'results.json');

      if (existsSync(groupResultsPath)) {
        const groupData = JSON.parse(readFileSync(groupResultsPath, 'utf-8'));

        // Filter benchmarks for this library only
        const filteredData = filterLibraryBenchmarks(groupData, displayName);

        if (filteredData) {
          groupResults[groupDir] = filteredData;
        }
      }
    }

    console.log(`✓ Collected results from ${Object.keys(groupResults).length} groups`);

  } catch (error) {
    console.error(`⚠️  Error collecting results:`, error instanceof Error ? error.message : 'Unknown error');
  }

  // Create library benchmark result
  const result: LibraryBenchmarkResult = {
    library: displayName,
    libraryKey: libraryKey,
    version: currentVersion,
    lastRun: new Date().toISOString(),
    groups: groupResults
  };

  // Save to results/[library]-benchmark.json
  writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(`\n💾 Saved results to ${outputPath}`);
  console.log(`\n✨ Done!\n`);
}

function filterLibraryBenchmarks(data: any, libraryName: string): any | null {
  if (!data || !data.files) return null;

  const filteredFiles = data.files.map((file: any) => {
    if (!file.groups) return null;

    const filteredGroups = file.groups.map((group: any) => {
      if (!group.benchmarks) return null;

      const filteredBenchmarks = group.benchmarks.filter((bench: any) => {
        // Check if benchmark name includes the library name
        return bench.name && bench.name.includes(libraryName);
      });

      if (filteredBenchmarks.length === 0) return null;

      return {
        ...group,
        benchmarks: filteredBenchmarks
      };
    }).filter((g: any) => g !== null);

    if (filteredGroups.length === 0) return null;

    return {
      ...file,
      groups: filteredGroups
    };
  }).filter((f: any) => f !== null);

  if (filteredFiles.length === 0) return null;

  return {
    ...data,
    files: filteredFiles
  };
}

// Main execution
const libraryKey = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!libraryKey) {
  console.error('Usage: npx tsx benchmark-single-library.ts <library-key> [category-path]');
  console.error('Example: npx tsx benchmark-single-library.ts jotai benchmarks/state-management');
  process.exit(1);
}

benchmarkSingleLibrary(libraryKey, categoryPath).catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
