#!/usr/bin/env node
/**
 * Rankings Calculator
 * Calculates Performance, Size, and Coverage rankings
 */

import { readFileSync } from 'fs';
import { join } from 'path';

interface BenchmarkResult {
  name: string;
  hz: number;
}

interface LibraryInfo {
  current: string;
  latest: string;
  size?: {
    gzip: number;
    minified: number;
  };
}

interface VersionTracker {
  libraries: {
    [name: string]: LibraryInfo;
  };
}

interface LibraryMetadata {
  [packageName: string]: {
    github: string;
    displayName: string;
  };
}

interface RankingResult {
  performance: Array<{ name: string; score: number; trend?: string }>;
  size: Array<{ name: string; sizeKB: number; score: number }>;
  coverage: Array<{ name: string; supported: number; total: number; percentage: number }>;
}

/**
 * Calculate size score using logarithmic scale (similar to Lighthouse)
 */
function calculateSizeScore(sizeKB: number): number {
  const excellent = 2;    // 2KB = 100
  const good = 5;         // 5KB = 90
  const average = 10;     // 10KB = 75
  const poor = 20;        // 20KB = 50

  if (sizeKB <= excellent) return 100;
  if (sizeKB >= poor) return Math.max(0, 50 - (sizeKB - poor) * 2);

  // Logarithmic interpolation
  return Math.round(100 - (Math.log(sizeKB / excellent) / Math.log(poor / excellent)) * 50);
}

/**
 * Calculate geometric mean (avoids extreme value bias)
 */
function geometricMean(values: number[]): number {
  if (values.length === 0) return 0;
  const product = values.reduce((a, b) => a * b, 1);
  return Math.pow(product, 1 / values.length);
}

/**
 * Get library display name from metadata
 */
function getDisplayName(packageName: string, metadata: LibraryMetadata): string {
  return metadata[packageName]?.displayName || packageName;
}

/**
 * Parse benchmark results and calculate rankings
 */
export function calculateRankings(
  resultsDir: string,
  versionsPath: string,
  metadataPath: string,
  excludeList: string[] = []
): RankingResult {
  // Load data
  const latestFile = join(resultsDir, 'latest.json');
  const data = JSON.parse(readFileSync(latestFile, 'utf-8'));
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

  // Extract all benchmarks
  const allBenchmarks: Map<string, BenchmarkResult[]> = new Map();
  for (const file of data.files || []) {
    for (const group of file.groups || []) {
      const category = group.fullName.split(' > ').pop() || 'Other';
      if (!allBenchmarks.has(category)) {
        allBenchmarks.set(category, []);
      }
      for (const benchmark of group.benchmarks || []) {
        allBenchmarks.get(category)!.push({
          name: benchmark.name,
          hz: benchmark.hz
        });
      }
    }
  }

  // Get unique library names (excluding Native implementations)
  const allLibraries = new Set<string>();
  for (const results of allBenchmarks.values()) {
    for (const result of results) {
      if (!excludeList.includes(result.name)) {
        allLibraries.add(result.name);
      }
    }
  }

  // 1. Calculate Performance Rankings
  const performanceScores = new Map<string, number[]>();

  for (const [category, results] of allBenchmarks.entries()) {
    // Filter out excluded benchmarks
    const libraryResults = results.filter(r => !excludeList.includes(r.name));
    if (libraryResults.length === 0) continue;

    // Find max for this category
    const maxHz = Math.max(...libraryResults.map(r => r.hz));

    // Calculate relative scores
    for (const result of libraryResults) {
      const score = (result.hz / maxHz) * 100;
      if (!performanceScores.has(result.name)) {
        performanceScores.set(result.name, []);
      }
      performanceScores.get(result.name)!.push(score);
    }
  }

  // Calculate geometric mean for each library
  const performanceRankings = Array.from(performanceScores.entries())
    .map(([name, scores]) => ({
      name,
      score: Math.round(geometricMean(scores) * 10) / 10
    }))
    .sort((a, b) => b.score - a.score);

  // 2. Calculate Size Rankings
  const sizeRankings = Object.entries(versions.libraries)
    .filter(([name, info]) => info.size && allLibraries.has(getDisplayName(name, metadata)))
    .map(([name, info]) => {
      const displayName = getDisplayName(name, metadata);
      const sizeKB = info.size!.gzip / 1024;
      return {
        name: displayName,
        sizeKB: Math.round(sizeKB * 100) / 100,
        score: calculateSizeScore(sizeKB)
      };
    })
    .sort((a, b) => b.score - a.score);

  // 3. Calculate Coverage Rankings
  const totalTests = allBenchmarks.size;

  // Track which tests each library supports (use Set to track unique tests)
  const libraryTests = new Map<string, Set<string>>();

  for (const [testName, results] of allBenchmarks.entries()) {
    for (const result of results) {
      if (!excludeList.includes(result.name) && result.hz > 0) {
        // Extract base library name (remove variants like "- Async Fetch")
        const baseName = result.name.replace(/ - .*$/, '');

        if (!libraryTests.has(baseName)) {
          libraryTests.set(baseName, new Set());
        }
        libraryTests.get(baseName)!.add(testName);
      }
    }
  }

  const coverageRankings = Array.from(libraryTests.entries())
    .map(([name, tests]) => ({
      name,
      supported: tests.size,
      total: totalTests,
      percentage: Math.round((tests.size / totalTests) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return {
    performance: performanceRankings,
    size: sizeRankings,
    coverage: coverageRankings
  };
}
