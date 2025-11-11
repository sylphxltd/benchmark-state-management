#!/usr/bin/env node
/**
 * Rankings Calculator
 * Calculates Performance, Size, and Coverage rankings
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

interface BenchmarkResult {
  name: string;
  hz?: number;
  mean?: number;
  metricType?: 'time' | 'size' | 'throughput';
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
 * Extract base library name from benchmark result name
 * E.g., "Silk - Apply styles" -> "Silk"
 *       "Tailwind CSS" -> "Tailwind CSS"
 */
function extractLibraryName(fullName: string, metadata: LibraryMetadata): string {
  // Try to match against known display names from metadata
  for (const packageName in metadata) {
    if (packageName.startsWith('_')) continue; // Skip _config
    const displayName = metadata[packageName].displayName;

    // Check if fullName starts with this display name
    if (fullName === displayName || fullName.startsWith(displayName + ' -')) {
      return displayName;
    }
  }

  // Fallback: if no match found, extract before first " - "
  const dashIndex = fullName.indexOf(' - ');
  if (dashIndex > 0) {
    return fullName.substring(0, dashIndex);
  }

  return fullName;
}

/**
 * Load benchmark results from per-library files or latest.json
 */
function loadBenchmarkResults(resultsDir: string): Map<string, BenchmarkResult[]> {
  const allBenchmarks: Map<string, BenchmarkResult[]> = new Map();

  // Try per-library files first
  const libraryFiles = readdirSync(resultsDir)
    .filter(f => f.endsWith('-benchmark.json'))
    .map(f => join(resultsDir, f));

  if (libraryFiles.length > 0) {
    // Parse per-library format
    for (const filePath of libraryFiles) {
      const data = JSON.parse(readFileSync(filePath, 'utf-8'));
      const libraryName = data.library || data.libraryKey;

      // Iterate through groups (e.g., "01-read", "02-write")
      for (const [groupKey, groupData] of Object.entries(data.groups || {})) {
        const groupInfo = groupData as any;

        // Extract group display name (remove number prefix)
        const groupDisplayName = groupKey.replace(/^\d+-/, '').split('-').map(
          w => w.charAt(0).toUpperCase() + w.slice(1)
        ).join(' ');

        if (!allBenchmarks.has(groupDisplayName)) {
          allBenchmarks.set(groupDisplayName, []);
        }

        // Parse files in the group
        for (const file of groupInfo.files || []) {
          for (const group of file.groups || []) {
            for (const benchmark of group.benchmarks || []) {
              allBenchmarks.get(groupDisplayName)!.push({
                name: `${libraryName} - ${benchmark.name}`,
                hz: benchmark.hz,
                mean: benchmark.mean,
                metricType: benchmark.metricType || group.metricType || 'throughput'
              });
            }
          }
        }
      }
    }

    return allBenchmarks;
  }

  throw new Error('No per-library benchmark results found. Run benchmarks first.');
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
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

  // Extract all benchmarks
  const allBenchmarks = loadBenchmarkResults(resultsDir);

  // Get unique library names (excluding Native implementations)
  const allLibraries = new Set<string>();
  for (const results of allBenchmarks.values()) {
    for (const result of results) {
      if (!excludeList.includes(result.name)) {
        const libraryName = extractLibraryName(result.name, metadata);
        allLibraries.add(libraryName);
      }
    }
  }

  // 1. Calculate Performance Rankings (Runtime performance only)
  const performanceScores = new Map<string, number[]>();

  // Group all benchmarks by their benchmark name (without library prefix)
  // E.g., "Zen - Simple Read" and "Solid Signals - Simple Read" both go to "Simple Read"
  const benchmarkGroups = new Map<string, BenchmarkResult[]>();

  for (const [category, results] of allBenchmarks.entries()) {
    for (const result of results) {
      // Skip excluded benchmarks and non-throughput metrics
      if (excludeList.includes(result.name) ||
          (result.metricType !== 'throughput' && result.metricType !== undefined)) {
        continue;
      }

      // Extract benchmark name (remove library prefix)
      // "Zen - Simple Read" -> "Simple Read"
      const libraryName = extractLibraryName(result.name, metadata);
      const benchmarkName = result.name.substring(libraryName.length).replace(/^\s*-\s*/, '');

      if (!benchmarkGroups.has(benchmarkName)) {
        benchmarkGroups.set(benchmarkName, []);
      }
      benchmarkGroups.get(benchmarkName)!.push(result);
    }
  }

  // For each benchmark name, calculate scores
  for (const [benchmarkName, results] of benchmarkGroups.entries()) {
    if (results.length === 0) continue;

    // Find max Hz for THIS specific benchmark across all libraries
    const maxHz = Math.max(...results.map(r => r.hz || 0));
    if (maxHz === 0) continue;

    // Calculate scores for each library in this benchmark
    for (const result of results) {
      const hz = result.hz || 0;
      const score = (hz / maxHz) * 100;
      const libraryName = extractLibraryName(result.name, metadata);

      if (!performanceScores.has(libraryName)) {
        performanceScores.set(libraryName, []);
      }
      performanceScores.get(libraryName)!.push(score);
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
  const libraryTestCounts = new Map<string, Set<string>>();

  for (const [category, results] of allBenchmarks.entries()) {
    for (const result of results) {
      // Check if result has valid performance data (hz for runtime, mean for build tests)
      const hasValidData = (result.hz && result.hz > 0) || (result.mean && result.mean > 0);

      if (!excludeList.includes(result.name) && hasValidData) {
        const libraryName = extractLibraryName(result.name, metadata);
        if (!libraryTestCounts.has(libraryName)) {
          libraryTestCounts.set(libraryName, new Set());
        }
        libraryTestCounts.get(libraryName)!.add(category);
      }
    }
  }

  const coverageRankings = Array.from(libraryTestCounts.entries())
    .map(([name, categories]) => ({
      name,
      supported: categories.size,
      total: totalTests,
      percentage: Math.round((categories.size / totalTests) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return {
    performance: performanceRankings,
    size: sizeRankings,
    coverage: coverageRankings
  };
}
