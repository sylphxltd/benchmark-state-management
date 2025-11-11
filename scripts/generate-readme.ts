#!/usr/bin/env node
/**
 * README Generation Script
 * Generates professional benchmark report with version tracking
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { calculateRankings } from './calculate-rankings.js';

interface VersionTracker {
  lastChecked: string;
  lastBenchmarkRun: string;
  testFilesHash: string;
  libraries: {
    [name: string]: {
      current: string;
      latest: string;
      lastUpdated: string;
    };
  };
}

interface BenchmarkResult {
  name: string;
  hz?: number;  // Operations per second (for runtime benchmarks)
  rme: number;
  min: number;
  max: number;
  mean: number;
  p75: number;
  p99: number;
  p995: number;
  p999: number;
  samples: number;
  metricType?: 'time' | 'size' | 'throughput';
  metricUnit?: string;
}

interface BenchmarkConfig {
  excludeFromCharts: string[];
  excludeFromComparison: string[];
}

interface LibraryMetadata {
  _config?: BenchmarkConfig;
  [packageName: string]: {
    github: string;
    displayName: string;
  } | BenchmarkConfig;
}

interface FeatureDefinition {
  id: string;
  label: string;
  description: string;
}

interface FeatureMatrix {
  description: string;
  features: FeatureDefinition[];
  libraries: {
    [packageName: string]: {
      [featureId: string]: boolean | string;
      sources?: {
        [featureId: string]: string;
      };
    };
  };
}

function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + 'K';
  }
  return num.toFixed(2);
}

function getMedalForRank(rank: number): string {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return '';
}

/**
 * Assign ranks considering ties (same value = same rank)
 * Automatically detects if sorted ascending or descending
 */
function assignRanksWithTies<T>(items: T[], getValue: (item: T) => number): number[] {
  if (items.length === 0) return [];

  const ranks: number[] = [];
  let currentRank = 1;

  for (let i = 0; i < items.length; i++) {
    if (i > 0) {
      const current = getValue(items[i]);
      const previous = getValue(items[i - 1]);

      // Detect change in value (works for both ascending and descending)
      if (Math.abs(current - previous) > 0.001) { // Use small epsilon for floating point comparison
        currentRank = i + 1;
      }
    }
    ranks.push(currentRank);
  }

  return ranks;
}

function loadLibraryMetadata(benchmarkDir: string): LibraryMetadata {
  const metadataPath = join(benchmarkDir, 'library-metadata.json');
  if (!existsSync(metadataPath)) {
    console.warn('⚠️  library-metadata.json not found, links will not be generated');
    return {};
  }
  return JSON.parse(readFileSync(metadataPath, 'utf-8'));
}

function loadFeatureMatrix(benchmarkDir: string): FeatureMatrix | null {
  const featuresPath = join(benchmarkDir, 'features.json');
  if (!existsSync(featuresPath)) {
    return null;
  }

  const rawFeatures = JSON.parse(readFileSync(featuresPath, 'utf-8'));

  // Transform from features.json format to FeatureMatrix format
  // features.json has: { features: { "feature-id": { name, description, supported: [...] } } }
  // FeatureMatrix needs: { description, features: [...], libraries: { "lib": { "feature": bool } } }

  if (!rawFeatures.features) {
    return null;
  }

  // Load library metadata to get all libraries
  const metadataPath = join(benchmarkDir, 'library-metadata.json');
  const metadata = existsSync(metadataPath)
    ? JSON.parse(readFileSync(metadataPath, 'utf-8')).libraries
    : {};

  const allLibraries = Object.keys(metadata);

  // Build features array
  const features: FeatureDefinition[] = Object.entries(rawFeatures.features).map(([id, feature]: [string, any]) => ({
    id,
    label: feature.name,
    description: feature.description
  }));

  // Build libraries object
  const libraries: { [packageName: string]: { [featureId: string]: boolean } } = {};

  for (const libraryPkg of allLibraries) {
    libraries[libraryPkg] = {};

    for (const [featureId, feature] of Object.entries(rawFeatures.features) as [string, any][]) {
      libraries[libraryPkg][featureId] = feature.supported?.includes(libraryPkg) || false;
    }
  }

  return {
    description: 'Compare state management libraries by their supported features',
    features,
    libraries
  };
}

function generateFeatureMatrixTable(featureMatrix: FeatureMatrix, metadata: LibraryMetadata): string {
  let table = '';

  // Get all library package names in consistent order
  const libraryPackages = Object.keys(featureMatrix.libraries).sort();

  // Create header row with library display names
  table += '| Feature | ' + libraryPackages.map(pkg => {
    const displayName = metadata[pkg]?.displayName || pkg;
    return `**${displayName}**`;
  }).join(' | ') + ' |\n';

  // Create separator row
  table += '|---------|' + libraryPackages.map(() => ':---:').join('|') + '|\n';

  // Create rows for each feature
  for (const feature of featureMatrix.features) {
    const cells: string[] = [];

    for (const pkg of libraryPackages) {
      const libraryFeatures = featureMatrix.libraries[pkg];
      const value = libraryFeatures?.[feature.id];

      // Format cell value
      let cellValue: string;
      if (value === true) {
        cellValue = '✅';
      } else if (value === false) {
        cellValue = '❌';
      } else if (typeof value === 'string') {
        cellValue = value;
      } else {
        cellValue = '❌';
      }

      // Add source link if available
      const source = libraryFeatures?.sources?.[feature.id];
      if (source && value !== false) {
        cellValue = `[${cellValue}](${source})`;
      }

      cells.push(cellValue);
    }

    // Add feature row with description as tooltip
    table += `| **${feature.label}**<br/><sub>${feature.description}</sub> | ${cells.join(' | ')} |\n`;
  }

  return table;
}

function getLibraryLink(name: string, metadata: LibraryMetadata): string {
  const meta = metadata[name];
  return meta ? `[${name}](${meta.github})` : name;
}

function getHistoricalResults(benchmarkDir: string): string[] {
  const resultsDir = join(benchmarkDir, 'results');
  if (!existsSync(resultsDir)) return [];

  const files = readdirSync(resultsDir)
    .filter(f => f.match(/^\d{4}-\d{2}-\d{2}\.json$/))
    .sort()
    .reverse()
    .slice(0, 5); // Get latest 5

  return files;
}

function getCategoryTitle(categoryName: string): string {
  switch (categoryName) {
    case 'state-management': return 'State Management Benchmark 🏆';
    case 'immutability': return 'Immutability Benchmark 🔄';
    case 'router': return 'Router Benchmark 🛤️';
    case 'css-frameworks': return 'CSS Frameworks Benchmark 🎨';
    default: return `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Benchmark 📊`;
  }
}

function getCategoryDescription(categoryName: string): string {
  switch (categoryName) {
    case 'state-management': return 'Professional performance comparison of JavaScript state management libraries.';
    case 'immutability': return 'Comprehensive performance testing of JavaScript immutability libraries and patterns.';
    case 'router': return 'Performance comparison of JavaScript routing libraries and frameworks.';
    case 'css-frameworks': return 'Professional performance comparison of CSS-in-JS and utility-first CSS frameworks.';
    default: return `Professional performance comparison of ${categoryName} libraries.`;
  }
}

function generateASCIIChart(results: BenchmarkResult[], maxBarLength: number = 40): string {
  if (results.length === 0) return '';

  // Detect metric type from first result
  const metricType = results[0].metricType || 'throughput';
  const metricUnit = results[0].metricUnit || 'ops/sec';

  // Determine sorting and value extraction based on metric type
  const isLowerBetter = metricType === 'time' || metricType === 'size';
  const getValue = (r: BenchmarkResult) => {
    if (metricType === 'throughput' || r.hz !== undefined) {
      return r.hz || 0;
    }
    return r.mean;
  };

  // Sort: for time/size, ascending (lower is better); for throughput, descending (higher is better)
  const sorted = [...results].sort((a, b) => {
    const aVal = getValue(a);
    const bVal = getValue(b);
    return isLowerBetter ? aVal - bVal : bVal - aVal;
  });

  // Get max/min value for bar scaling
  const values = sorted.map(getValue);
  const maxValue = isLowerBetter ? Math.max(...values) : values[0];
  const minValue = isLowerBetter ? values[0] : Math.min(...values);

  const ranks = assignRanksWithTies(sorted, getValue);

  let chart = '```\n';
  sorted.forEach((result, index) => {
    const value = getValue(result);

    // Scale bar: for lower-is-better, invert the scale
    let barLength: number;
    if (isLowerBetter) {
      // Smaller values get longer bars
      barLength = Math.round(((maxValue - value) / (maxValue - minValue || 1)) * maxBarLength);
    } else {
      // Larger values get longer bars
      barLength = Math.round((value / maxValue) * maxBarLength);
    }

    const bar = '█'.repeat(Math.max(1, barLength));

    // Format display value based on metric type
    let displayValue: string;
    if (metricType === 'time') {
      displayValue = `${formatNumber(value)}${metricUnit}`;
    } else if (metricType === 'size') {
      // Convert bytes to KB for readability
      const kb = value / 1024;
      displayValue = `${kb.toFixed(2)}KB`;
    } else {
      displayValue = formatNumber(value);
    }

    const medal = getMedalForRank(ranks[index]);

    // Truncate name if too long
    const name = result.name.length > 20 ? result.name.substring(0, 17) + '...' : result.name;

    const prefix = medal ? `${medal} ` : '   ';
    chart += `${prefix}${name.padEnd(20)} ${bar} ${displayValue}\n`;
  });
  chart += '```\n';

  return chart;
}

function formatLibraryName(fullName: string, metadata: LibraryMetadata): string {
  // Handle names with suffixes like "Redux Toolkit - Async Fetch"
  // Extract the library name and add link, keep the suffix

  // Try to find a matching library by display name
  for (const [packageName, meta] of Object.entries(metadata)) {
    if (fullName.startsWith(meta.displayName)) {
      const suffix = fullName.substring(meta.displayName.length);
      return `[${meta.displayName}](${meta.github})${suffix}`;
    }
  }

  // Fallback: return as-is if no match found
  return fullName;
}

function parseResultsFromLatestRun(resultsDir: string): Map<string, BenchmarkResult[]> | null {
  // Check if results directory exists
  if (!existsSync(resultsDir)) {
    console.error('❌ Results directory not found:', resultsDir);
    return null;
  }

  // Load per-library result files
  const libraryFiles = readdirSync(resultsDir)
    .filter(f => f.endsWith('-benchmark.json'))
    .map(f => join(resultsDir, f));

  if (libraryFiles.length === 0) {
    console.error('❌ No per-library benchmark results found. Run benchmarks first.');
    return null;
  }

  console.log(`📊 Using per-library results: ${libraryFiles.length} libraries found`);
  return parsePerLibraryResults(libraryFiles);
}

/**
 * Parse per-library benchmark result files and merge them
 * Format: { library, version, groups: { "01-read": { files: [...] } } }
 */
function parsePerLibraryResults(libraryFiles: string[]): Map<string, BenchmarkResult[]> {
  const grouped = new Map<string, BenchmarkResult[]>();

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

      if (!grouped.has(groupDisplayName)) {
        grouped.set(groupDisplayName, []);
      }

      // Parse files in the group
      for (const file of groupInfo.files || []) {
        for (const group of file.groups || []) {
          for (const benchmark of group.benchmarks || []) {
            grouped.get(groupDisplayName)!.push({
              name: `${libraryName} - ${benchmark.name}`,
              hz: benchmark.hz,
              rme: benchmark.rme,
              min: benchmark.min,
              max: benchmark.max,
              mean: benchmark.mean,
              p75: benchmark.p75,
              p99: benchmark.p99,
              p995: benchmark.p995,
              p999: benchmark.p999,
              samples: benchmark.samples || 0,
              metricType: benchmark.metricType || group.metricType,
              metricUnit: benchmark.metricUnit || group.metricUnit,
            });
          }
        }
      }
    }
  }

  return grouped;
}

function generateReadme(benchmarkDir: string) {
  console.log('📝 Generating README...\n');

  const versionsPath = join(benchmarkDir, 'versions.json');
  const resultsDir = join(benchmarkDir, 'results');

  // Load library metadata
  const metadata = loadLibraryMetadata(benchmarkDir);

  // Load feature matrix
  const featureMatrix = loadFeatureMatrix(benchmarkDir);

  // Read versions
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));

  // Determine category information from path
  const categoryName = benchmarkDir.split('/').pop() || 'benchmark';
  const categoryTitle = getCategoryTitle(categoryName);
  const categoryDescription = getCategoryDescription(categoryName);

  // Parse benchmark results
  const groupedResults = parseResultsFromLatestRun(resultsDir);
  if (!groupedResults) {
    console.error('❌ Failed to parse results');
    return;
  }

  // Generate table of contents after parsing results
  const tableOfContents =
`## 📑 Table of Contents

- [📋 Benchmark Information](#-benchmark-information)
- [📦 Library Versions](#-library-versions)
- [📦 Bundle Size Comparison](#-bundle-size-comparison)
- [🚀 Performance Rankings](#-performance-rankings)
- [📦 Bundle Size Rankings](#-bundle-size-rankings)
- [🎯 Feature Coverage Rankings](#-feature-coverage-rankings)${featureMatrix ? '\n- [✨ Feature Comparison](#-feature-comparison)' : ''}
- [📜 Historical Results](#-historical-results)
- [📊 Detailed Results](#-detailed-results)${groupedResults.size > 1 ? '\n  - [📑 Test Categories](#-test-categories)' : ''}
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

`;

  // Start building README
  let readme = `# ${categoryTitle}\n\n`;
  readme += `${categoryDescription}\n\n`;
  readme += tableOfContents;

  // Metadata section
  const lastRun = new Date(versions.lastBenchmarkRun);
  readme += '## 📋 Benchmark Information\n\n';
  readme += `- **Last Updated:** ${lastRun.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}\n`;
  readme += `- **Last Run:** ${lastRun.toLocaleTimeString('en-US')} UTC\n`;
  readme += `- **Environment:** Node.js ${process.version}, ${process.platform} ${process.arch}\n`;
  readme += `- **Test Framework:** Vitest Bench\n`;
  readme += `- **Iterations:** 3 runs averaged for statistical accuracy\n\n`;

  // Library versions table
  readme += '## 📦 Library Versions\n\n';
  readme += '| Library | Version | Size (gzip) | Last Updated | Status |\n';
  readme += '|---------|---------|-------------|--------------|--------|\n';

  const sortedLibs = Object.entries(versions.libraries)
    .sort(([a], [b]) => a.localeCompare(b));

  for (const [name, info] of sortedLibs) {
    const updatedDate = new Date(info.lastUpdated).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    const sizeKB = info.size ? `${(info.size.gzip / 1024).toFixed(2)}KB` : 'N/A';

    let status = '✅ Latest';
    if (info.incompatible && info.incompatibleVersion) {
      status = `⚠️ v${info.incompatibleVersion} incompatible`;
    } else if (info.current !== info.latest) {
      status = `📦 v${info.latest} available`;
    }

    readme += `| **${getLibraryLink(name, metadata)}** | \`v${info.current}\` | ${sizeKB} | ${updatedDate} | ${status} |\n`;
  }
  readme += '\n';

  // Bundle size comparison
  readme += '## 📦 Bundle Size Comparison\n\n';
  readme += 'Smaller bundle sizes mean faster initial load times and better user experience.\n\n';

  // Sort libraries by gzip size
  const libsWithSize = sortedLibs
    .filter(([_, info]) => info.size)
    .sort(([_a, a], [_b, b]) => a.size!.gzip - b.size!.gzip);

  readme += '| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |\n';
  readme += '|------|---------|-------------------|----------|---------------------|\n';

  if (libsWithSize.length > 0) {
    const smallest = libsWithSize[0][1].size!.gzip;
    const ranks = assignRanksWithTies(libsWithSize, ([_, info]) => info.size!.gzip);

    libsWithSize.forEach(([name, info], index) => {
      const medal = getMedalForRank(ranks[index]);
      const gzipKB = (info.size!.gzip / 1024).toFixed(2);
      const minifiedKB = (info.size!.minified / 1024).toFixed(2);
      const relative = (info.size!.gzip / smallest).toFixed(2);
      const relativeText = ranks[index] === 1 ? 'Baseline' : `${relative}x`;

      readme += `| ${medal || ranks[index].toString()} | **${getLibraryLink(name, metadata)}** | `;
      readme += `${gzipKB}KB | ${minifiedKB}KB | ${relativeText} |\n`;
    });

    readme += '\n';

    // Add insights
    const smallest_lib = libsWithSize[0];
    const largest_lib = libsWithSize[libsWithSize.length - 1];
    const sizeRatio = (largest_lib[1].size!.gzip / smallest_lib[1].size!.gzip).toFixed(2);

    readme += `**Size Insight:** ${smallest_lib[0]} is the most lightweight at ${(smallest_lib[1].size!.gzip / 1024).toFixed(2)}KB (gzip), `;
    readme += `while ${largest_lib[0]} is ${sizeRatio}x larger at ${(largest_lib[1].size!.gzip / 1024).toFixed(2)}KB (gzip).\n\n`;
  }

  // Calculate comprehensive rankings
  const excludeList = metadata._config?.excludeFromCharts || [];
  const rankings = calculateRankings(resultsDir, versionsPath, join(benchmarkDir, 'library-metadata.json'), excludeList);

  // Performance Rankings
  readme += '## 🚀 Performance Rankings\n\n';
  readme += 'Based on geometric mean across all supported tests (excludes extreme values):\n\n';
  readme += '| Rank | Library | Score | Relative |\n';
  readme += '|------|---------|-------|----------|\n';

  const topPerformanceScore = rankings.performance[0]?.score || 100;
  const perfRanks = assignRanksWithTies(rankings.performance, lib => lib.score);

  rankings.performance.forEach((lib, index) => {
    const medal = getMedalForRank(perfRanks[index]);
    const relative = perfRanks[index] === 1 ? 'Baseline' : `${((lib.score / topPerformanceScore) * 100).toFixed(1)}%`;
    readme += `| ${medal || perfRanks[index].toString()} | **${formatLibraryName(lib.name, metadata)}** | ${lib.score.toFixed(1)}/100 | ${relative} |\n`;
  });
  readme += '\n';
  readme += '> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.\n\n';

  // Bundle Size Rankings
  readme += '## 📦 Bundle Size Rankings\n\n';
  readme += 'Smaller is better. Scores use logarithmic scale (like Lighthouse):\n\n';
  readme += '| Rank | Library | Size (gzip) | Score | Rating |\n';
  readme += '|------|---------|-------------|-------|--------|\n';

  const sizeRanks = assignRanksWithTies(rankings.size, lib => lib.score);

  rankings.size.forEach((lib, index) => {
    const medal = getMedalForRank(sizeRanks[index]);
    let rating = 'Poor';
    if (lib.score >= 90) rating = 'Excellent';
    else if (lib.score >= 75) rating = 'Good';
    else if (lib.score >= 50) rating = 'Average';

    readme += `| ${medal || sizeRanks[index].toString()} | **${formatLibraryName(lib.name, metadata)}** | ${lib.sizeKB.toFixed(2)}KB | ${lib.score}/100 | ${rating} |\n`;
  });
  readme += '\n';
  readme += '> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.\n\n';

  // Feature Coverage Rankings
  readme += '## 🎯 Feature Coverage Rankings\n\n';
  readme += 'Percentage of benchmark tests supported:\n\n';
  readme += '| Rank | Library | Supported | Coverage |\n';
  readme += '|------|---------|-----------|----------|\n';

  const coverageRanks = assignRanksWithTies(rankings.coverage, lib => lib.percentage);

  rankings.coverage.forEach((lib, index) => {
    const medal = getMedalForRank(coverageRanks[index]);
    readme += `| ${medal || coverageRanks[index].toString()} | **${formatLibraryName(lib.name, metadata)}** | ${lib.supported}/${lib.total} | ${lib.percentage}% |\n`;
  });
  readme += '\n';
  readme += '> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.\n\n';

  // Feature Matrix (if available)
  if (featureMatrix) {
    readme += '## ✨ Feature Comparison\n\n';
    readme += `${featureMatrix.description}\n\n`;
    readme += generateFeatureMatrixTable(featureMatrix, metadata);
    readme += '\n';
    readme += '> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.\n\n';
  }

  // Historical results (simplified - no trend charts)
  const historicalFiles = getHistoricalResults(benchmarkDir);
  if (historicalFiles.length > 0) {
    readme += '## 📜 Historical Results\n\n';
    readme += '| Date | Results |\n';
    readme += '|------|---------|\n';

    historicalFiles.forEach(file => {
      const date = file.replace('.json', '');
      const resultLink = `[View Results](./results/${file})`;
      readme += `| ${date} | ${resultLink} |\n`;
    });

    readme += '\n';
  }

  // Detailed results for each category
  readme += '## 📊 Detailed Results\n\n';

  // Generate table of contents for test categories
  if (groupedResults.size > 1) {
    readme += '### 📑 Test Categories\n\n';
    for (const [category] of groupedResults.entries()) {
      // Generate GitHub-compatible anchor name: lowercase, replace spaces and punctuation with hyphens
      const anchorName = category.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
      readme += `- [${category}](#${anchorName})\n`;
    }
    readme += '\n';
  }

  for (const [category, results] of groupedResults.entries()) {
    readme += `### ${category}\n\n`;

    // Add ASCII performance chart (exclude benchmarks from config)
    readme += '**Performance Comparison:**\n\n';
    const excludeList = metadata._config?.excludeFromCharts || [];
    const libraryResults = results.filter(r => !excludeList.includes(r.name));
    readme += generateASCIIChart(libraryResults);
    readme += '\n';

    // Detect metric type from first result
    const metricType = results[0]?.metricType || 'throughput';
    const metricUnit = results[0]?.metricUnit || 'ops/sec';
    const isLowerBetter = metricType === 'time' || metricType === 'size';

    // Get value based on metric type
    const getValue = (r: BenchmarkResult) => {
      if (metricType === 'throughput' || r.hz !== undefined) {
        return r.hz || 0;
      }
      return r.mean;
    };

    // Sort: for time/size, ascending (lower is better); for throughput, descending (higher is better)
    const sorted = [...results].sort((a, b) => {
      const aVal = getValue(a);
      const bVal = getValue(b);
      return isLowerBetter ? aVal - bVal : bVal - aVal;
    });
    const detailRanks = assignRanksWithTies(sorted, getValue);

    // Generate table headers based on metric type
    if (metricType === 'time') {
      readme += '| Rank | Library | Time | Variance | p75 | p99 | Samples |\n';
      readme += '|------|---------|------|----------|-----|-----|--------|\n';
    } else if (metricType === 'size') {
      readme += '| Rank | Library | Size | Min | Max | p99 | Samples |\n';
      readme += '|------|---------|------|-----|-----|-----|--------|\n';
    } else {
      readme += '| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |\n';
      readme += '|------|---------|---------|----------|------|-----|--------|\n';
    }

    sorted.forEach((result, index) => {
      const medal = getMedalForRank(detailRanks[index]);
      readme += `| ${medal || detailRanks[index].toString()} | **${formatLibraryName(result.name, metadata)}** | `;

      if (metricType === 'time') {
        readme += `${formatNumber(result.mean)}${metricUnit} | `;
        readme += `±${result.rme.toFixed(2)}% | `;
        readme += `${formatNumber(result.p75)}${metricUnit} | `;
        readme += `${formatNumber(result.p99)}${metricUnit} | `;
      } else if (metricType === 'size') {
        const sizeKB = result.mean / 1024;
        const minKB = result.min / 1024;
        const maxKB = result.max / 1024;
        const p99KB = result.p99 / 1024;
        readme += `${sizeKB.toFixed(2)}KB | `;
        readme += `${minKB.toFixed(2)}KB | `;
        readme += `${maxKB.toFixed(2)}KB | `;
        readme += `${p99KB.toFixed(2)}KB | `;
      } else {
        readme += `${formatNumber(result.hz || 0)} | `;
        readme += `±${result.rme.toFixed(2)}% | `;
        readme += `${(result.mean * 1000).toFixed(4)}ms | `;
        readme += `${(result.p99 * 1000).toFixed(4)}ms | `;
      }

      readme += `${formatNumber(result.samples)} |\n`;
    });

    readme += '\n';

    // Performance insights based on metric type
    if (sorted.length >= 3) {
      const best = sorted[0];
      const worst = sorted[sorted.length - 1];
      const bestVal = getValue(best);
      const worstVal = getValue(worst);

      if (metricType === 'time') {
        const speedup = (worstVal / bestVal).toFixed(2);
        readme += `**Key Insight:** ${best.name} is **${speedup}x faster** than ${worst.name} in this category.\n\n`;
      } else if (metricType === 'size') {
        const ratio = (worstVal / bestVal).toFixed(2);
        readme += `**Key Insight:** ${best.name} generates **${ratio}x smaller** CSS than ${worst.name} in this category.\n\n`;
      } else {
        const speedup = (bestVal / worstVal).toFixed(2);
        readme += `**Key Insight:** ${best.name} is **${speedup}x faster** than ${worst.name} in this category.\n\n`;
      }
    }
  }

  // How to run section
  readme += '## 🚀 Running Benchmarks\n\n';
  readme += '```bash\n';
  readme += '# Install dependencies\n';
  readme += 'npm install\n\n';
  readme += '# Run benchmarks\n';
  readme += 'npm run benchmark\n';
  readme += '```\n\n';

  // Footer
  readme += '## ℹ️ About\n\n';
  readme += 'This benchmark is automatically updated daily by GitHub Actions. ';
  readme += 'Benchmarks run only when:\n';
  readme += '- A library releases a new version\n';
  readme += '- Test files are modified\n\n';
  readme += '**Methodology:** Each test runs multiple iterations until statistical significance is achieved. ';
  readme += 'Results are averaged over 3 complete runs to ensure accuracy.\n\n';
  readme += '---\n\n';
  readme += '*Last generated: ' + new Date().toISOString() + '*\n';

  // Write README
  const readmePath = join(benchmarkDir, 'README.md');
  writeFileSync(readmePath, readme);

  console.log('✅ README generated successfully\n');
  console.log(`   Path: ${readmePath}`);
  console.log(`   Categories: ${groupedResults.size}`);
  console.log(`   Libraries: ${Object.keys(versions.libraries).length}`);
}

// Main execution
const benchmarkDir = process.argv[2] || join(process.cwd(), 'benchmarks/state-management');
generateReadme(benchmarkDir);
