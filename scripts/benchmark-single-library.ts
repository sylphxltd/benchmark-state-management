#!/usr/bin/env node
/**
 * Single Library Benchmark Script
 * Runs benchmarks for a specific library and saves results independently
 *
 * Usage: npx tsx benchmark-single-library.ts <library-key> <category-path>
 * Example: npx tsx benchmark-single-library.ts jotai benchmarks/state-management
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from 'fs';
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
  // Sanitize library key for filename (replace / and @ with -)
  const safeLibraryKey = libraryKey.replace(/@/g, '').replace(/\//g, '-');
  const outputPath = join(resultsDir, `${safeLibraryKey}-benchmark.json`);

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

  // Convert display name to same format as split script uses
  const testFileLibraryName = displayName.toLowerCase().replace(/\s+/g, '-').replace(/@/g, '').replace(/\//g, '-');

  console.log(`📚 Library: ${displayName}`);
  console.log(`📦 Version: ${currentVersion}`);
  console.log(``);

  // Run benchmarks for this specific library
  console.log(`⏳ Running benchmarks (this may take several minutes)...\n`);

  const groupsPath = join(categoryPath, 'groups');
  const groupResults: Record<string, any> = {};

  try {
    // Get all test files for this library across all groups
    const groups = readdirSync(groupsPath).filter((dir: string) => {
      const fullPath = join(groupsPath, dir);
      return statSync(fullPath).isDirectory() && /^\d{2}-/.test(dir);
    });

    // Run benchmarks for each group individually
    console.log(`📝 Running benchmarks for ${groups.length} groups...\n`);

    for (const groupDir of groups) {
      const groupTestPath = join(groupsPath, groupDir, 'tests', `${testFileLibraryName}.bench.ts`);

      if (!existsSync(groupTestPath)) {
        continue;
      }

      console.log(`  Running ${groupDir}...`);

      // Run benchmark for this specific group/library test file
      const testPath = `groups/${groupDir}/tests/${testFileLibraryName}.bench.ts`;
      const benchCmd = `npx vitest bench --run "${testPath}"`;

      try {
        const output = execSync(benchCmd, {
          cwd: categoryPath,
          encoding: 'utf-8'
        });

        // Parse the console output to extract benchmark results
        const benchmarks = parseBenchmarkOutput(output, groupDir, displayName);

        if (benchmarks.length > 0) {
          // Create result structure
          const groupResult = {
            files: [
              {
                filepath: testPath,
                groups: [
                  {
                    fullName: `${groupDir} - ${displayName}`,
                    benchmarks
                  }
                ]
              }
            ]
          };

          // Save to groups/{group}/results/{library}.json
          const groupResultsDir = join(groupsPath, groupDir, 'results');
          if (!existsSync(groupResultsDir)) {
            mkdirSync(groupResultsDir, { recursive: true });
          }

          const groupResultPath = join(groupResultsDir, `${testFileLibraryName}.json`);
          writeFileSync(groupResultPath, JSON.stringify(groupResult, null, 2));

          groupResults[groupDir] = groupResult;
          console.log(`    ✓ Saved ${groupDir}/results/${testFileLibraryName}.json`);
        }
      } catch (error) {
        console.error(`    ✗ Failed to run benchmark for ${groupDir}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    console.log(`\n✅ Benchmarks completed for ${displayName}`);

  } catch (error) {
    console.error(`\n❌ Benchmark failed for ${displayName}:`, error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }

  // Create library benchmark result
  const result: LibraryBenchmarkResult = {
    library: displayName,
    libraryKey: libraryKey,
    version: currentVersion,
    lastRun: new Date().toISOString(),
    groups: groupResults
  };

  // Ensure results directory exists
  if (!existsSync(resultsDir)) {
    mkdirSync(resultsDir, { recursive: true });
  }

  // Save to results/[library]-benchmark.json
  writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(`\n💾 Saved results to ${outputPath}`);
  console.log(`\n✨ Done!\n`);
}

/**
 * Strip ANSI color codes from string
 */
function stripAnsi(str: string): string {
  return str.replace(/\x1b\[[0-9;]*m/g, '');
}

/**
 * Parse benchmark output from vitest console output
 * Extracts benchmark results from the table format
 */
function parseBenchmarkOutput(output: string, groupName: string, libraryName: string): any[] {
  const benchmarks: any[] = [];

  // Strip ANSI codes first
  const cleanOutput = stripAnsi(output);

  // Split output into lines
  const lines = cleanOutput.split('\n');

  // Find the benchmark table section
  for (const line of lines) {
    // Look for benchmark name rows (starts with · or ✓)
    if (line.trim().startsWith('·') || line.trim().startsWith('✓')) {
      // Extract all parts from the line
      const parts = line.trim().split(/\s+/).filter(p => p.length > 0);

      if (parts.length < 2) continue;

      // First part is the bullet, second+ are the name, then metrics
      const bulletIndex = 0;
      let nameEndIndex = 1;

      // Find where the name ends (when we hit the first number)
      for (let i = 1; i < parts.length; i++) {
        const cleaned = parts[i].replace(/,/g, '');
        if (!isNaN(parseFloat(cleaned)) && /^\d/.test(cleaned)) {
          nameEndIndex = i;
          break;
        }
      }

      const name = parts.slice(1, nameEndIndex).join(' ');

      // Skip lines that look like file paths or headers
      if (name.includes('/') || name.includes('>') || name.toLowerCase() === 'name') {
        continue;
      }

      // Extract metrics (format: hz min max mean p75 p99 p995 p999 rme samples)
      const metricParts = parts.slice(nameEndIndex);
      const metrics: number[] = [];

      for (const part of metricParts) {
        // Clean up the string (remove commas, ± signs, % signs)
        let cleaned = part.replace(/,/g, '').replace(/±/g, '').replace(/%/g, '');
        const num = parseFloat(cleaned);
        if (!isNaN(num)) {
          metrics.push(num);
        }
      }

      // Parse the extracted metrics
      const bench = {
        id: `${name} - ${libraryName}`,
        name: name,
        hz: metrics[0] || 0,
        min: metrics[1] || 0,
        max: metrics[2] || 0,
        mean: metrics[3] || 0,
        p75: metrics[4] || 0,
        p99: metrics[5] || 0,
        p995: metrics[6] || 0,
        p999: metrics[7] || 0,
        rme: metrics[8] || 0,
        samples: metrics[9] || 0
      };

      benchmarks.push(bench);
    }
  }

  return benchmarks;
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
