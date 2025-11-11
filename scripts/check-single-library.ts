#!/usr/bin/env node
/**
 * Single Library Version Check Script
 * Checks if a specific library needs benchmarking
 *
 * Returns true if:
 * - Library has a new version available
 * - No benchmark results exist for current version
 * - Existing benchmark results are outdated
 *
 * Usage: npx tsx check-single-library.ts <library-key> <category-path>
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';

interface VersionTracker {
  lastChecked: string;
  libraries: {
    [name: string]: {
      current: string;
      latest: string;
      lastUpdated: string;
      size?: {
        gzip: number;
        minified: number;
        lastChecked: string;
      };
    };
  };
}

interface LibraryBenchmarkResult {
  library: string;
  libraryKey: string;
  version: string;
  lastRun: string;
  groups: Record<string, any>;
}

interface LibraryMetadata {
  libraries: {
    [key: string]: {
      displayName: string;
      npm: string;
    };
  };
}

async function checkSingleLibrary(libraryKey: string, categoryPath: string): Promise<boolean> {
  const versionsPath = join(categoryPath, 'versions.json');
  const metadataPath = join(categoryPath, 'library-metadata.json');
  const resultsPath = join(categoryPath, 'results', `${libraryKey}-benchmark.json`);

  console.log(`\n🔍 Checking ${libraryKey}...\n`);

  // Load metadata
  if (!existsSync(metadataPath)) {
    console.error(`❌ library-metadata.json not found`);
    return false;
  }

  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  const libInfo = metadata.libraries[libraryKey];

  if (!libInfo) {
    console.error(`❌ Library ${libraryKey} not found in metadata`);
    return false;
  }

  const npmPackage = libInfo.npm;
  const displayName = libInfo.displayName;

  console.log(`📚 Library: ${displayName}`);
  console.log(`📦 Package: ${npmPackage}`);

  // Load versions
  if (!existsSync(versionsPath)) {
    console.error(`❌ versions.json not found`);
    return false;
  }

  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));

  // Get latest version from npm
  let latestVersion: string;
  try {
    latestVersion = execSync(`npm view ${npmPackage} version 2>/dev/null`, {
      encoding: 'utf-8'
    }).trim();

    console.log(`🌐 Latest NPM version: ${latestVersion}`);
  } catch (error) {
    console.error(`❌ Failed to fetch latest version from npm`);
    return false;
  }

  // Check current version in versions.json
  const currentVersion = versions.libraries[libraryKey]?.current || latestVersion;
  console.log(`📍 Current tracked version: ${currentVersion}`);

  // Update versions.json if new version detected
  const hasNewVersion = latestVersion !== currentVersion;

  if (hasNewVersion) {
    console.log(`\n✨ New version detected: ${currentVersion} → ${latestVersion}`);

    // Update versions.json
    if (!versions.libraries[libraryKey]) {
      versions.libraries[libraryKey] = {
        current: currentVersion,
        latest: latestVersion,
        lastUpdated: new Date().toISOString()
      };
    }

    versions.libraries[libraryKey].latest = latestVersion;
    versions.lastChecked = new Date().toISOString();

    writeFileSync(versionsPath, JSON.stringify(versions, null, 2));
    console.log(`✓ Updated versions.json`);
  } else {
    console.log(`\n✓ Version ${currentVersion} is up to date`);
  }

  // Check if benchmark results exist for current version
  if (existsSync(resultsPath)) {
    const results: LibraryBenchmarkResult = JSON.parse(readFileSync(resultsPath, 'utf-8'));

    console.log(`\n📊 Existing benchmark found:`);
    console.log(`   Version: ${results.version}`);
    console.log(`   Last run: ${new Date(results.lastRun).toLocaleString()}`);

    if (results.version === currentVersion && !hasNewVersion) {
      console.log(`\n✨ Benchmark already exists for current version - skipping`);
      console.log(`=`.repeat(60));

      // Output for GitHub Actions
      if (process.env.GITHUB_OUTPUT) {
        const output = [
          `needs_benchmark=false`,
          `current_version=${currentVersion}`,
          `latest_version=${latestVersion}`,
          `has_new_version=false`
        ].join('\n');

        writeFileSync(process.env.GITHUB_OUTPUT, output + '\n', { flag: 'a' });
      }

      return false;
    }
  }

  // Need to run benchmark
  console.log(`\n✅ Benchmark needed for ${displayName} v${latestVersion}`);
  console.log(`=`.repeat(60));

  // Output for GitHub Actions
  if (process.env.GITHUB_OUTPUT) {
    const output = [
      `needs_benchmark=true`,
      `current_version=${currentVersion}`,
      `latest_version=${latestVersion}`,
      `has_new_version=${hasNewVersion}`
    ].join('\n');

    writeFileSync(process.env.GITHUB_OUTPUT, output + '\n', { flag: 'a' });
  }

  return true;
}

// Main execution
const libraryKey = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!libraryKey) {
  console.error('Usage: npx tsx check-single-library.ts <library-key> [category-path]');
  console.error('Example: npx tsx check-single-library.ts jotai benchmarks/state-management');
  process.exit(1);
}

checkSingleLibrary(libraryKey, categoryPath).then((needsBenchmark) => {
  // Exit with 0 always - needs_benchmark is communicated via GITHUB_OUTPUT
  process.exit(0);
}).catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
