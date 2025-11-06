#!/usr/bin/env node
/**
 * README Generation Script
 * Generates professional benchmark report with version tracking
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

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
  hz: number;
  rme: number;
  min: number;
  max: number;
  mean: number;
  p75: number;
  p99: number;
  p995: number;
  p999: number;
  samples: number;
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

function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + 'K';
  }
  return num.toFixed(2);
}

function getMedal(index: number): string {
  if (index === 0) return '🥇';
  if (index === 1) return '🥈';
  if (index === 2) return '🥉';
  return '📍';
}

function loadLibraryMetadata(benchmarkDir: string): LibraryMetadata {
  const metadataPath = join(benchmarkDir, 'library-metadata.json');
  if (!existsSync(metadataPath)) {
    console.warn('⚠️  library-metadata.json not found, links will not be generated');
    return {};
  }
  return JSON.parse(readFileSync(metadataPath, 'utf-8'));
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

function generateASCIIChart(results: BenchmarkResult[], maxBarLength: number = 40): string {
  if (results.length === 0) return '';

  const sorted = [...results].sort((a, b) => b.hz - a.hz);
  const maxHz = sorted[0].hz;

  let chart = '```\n';
  sorted.forEach((result, index) => {
    const barLength = Math.round((result.hz / maxHz) * maxBarLength);
    const bar = '█'.repeat(barLength);
    const opsDisplay = formatNumber(result.hz);
    const medal = getMedal(index);

    // Truncate name if too long
    const name = result.name.length > 20 ? result.name.substring(0, 17) + '...' : result.name;

    chart += `${medal} ${name.padEnd(20)} ${bar} ${opsDisplay}\n`;
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
  // Get latest.json file from vitest bench --outputJson
  if (!existsSync(resultsDir)) {
    console.error('❌ Results directory not found:', resultsDir);
    return null;
  }

  const latestFile = join(resultsDir, 'latest.json');
  if (!existsSync(latestFile)) {
    console.error('❌ No benchmark results found at:', latestFile);
    return null;
  }

  console.log(`📊 Using latest results: latest.json`);

  const data = JSON.parse(readFileSync(latestFile, 'utf-8'));

  // Parse Vitest JSON format: { files: [ { groups: [ { fullName, benchmarks: [...] } ] } ] }
  const grouped = new Map<string, BenchmarkResult[]>();

  for (const file of data.files || []) {
    for (const group of file.groups || []) {
      // Extract category from fullName (e.g., "src/benchmark.bench.ts > Simple Increment" -> "Simple Increment")
      const fullName = group.fullName || 'Other';
      const category = fullName.split(' > ').pop() || 'Other';

      if (!grouped.has(category)) {
        grouped.set(category, []);
      }

      for (const benchmark of group.benchmarks || []) {
        grouped.get(category)!.push({
          name: benchmark.name,
          hz: benchmark.hz,
          rme: benchmark.rme,
          min: benchmark.min,
          max: benchmark.max,
          mean: benchmark.mean,
          p75: benchmark.p75,
          p99: benchmark.p99,
          p995: benchmark.p995,
          p999: benchmark.p999,
          samples: benchmark.sampleCount || 0,
        });
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

  // Read versions
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));

  // Parse benchmark results
  const groupedResults = parseResultsFromLatestRun(resultsDir);
  if (!groupedResults) {
    console.error('❌ Failed to parse results');
    return;
  }

  // Start building README
  let readme = '# State Management Benchmark 🏆\n\n';
  readme += 'Professional performance comparison of JavaScript state management libraries.\n\n';

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

    libsWithSize.forEach(([name, info], index) => {
      const medal = getMedal(index);
      const gzipKB = (info.size!.gzip / 1024).toFixed(2);
      const minifiedKB = (info.size!.minified / 1024).toFixed(2);
      const relative = (info.size!.gzip / smallest).toFixed(2);
      const relativeText = index === 0 ? 'Baseline' : `${relative}x`;

      readme += `| ${medal} | **${getLibraryLink(name, metadata)}** | `;
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

  // Top performers summary (libraries only, exclude Native implementations)
  readme += '## 🏆 Top Performers\n\n';
  readme += 'Quick overview of category winners (libraries only):\n\n';
  readme += '| Category | 🥇 Winner | Ops/sec | Runner-up |\n';
  readme += '|----------|-----------|---------|----------|\n';

  const excludeList = metadata._config?.excludeFromCharts || [];
  for (const [category, results] of groupedResults.entries()) {
    const libraryResults = results.filter(r => !excludeList.includes(r.name));
    const sorted = [...libraryResults].sort((a, b) => b.hz - a.hz);
    if (sorted.length >= 2) {
      const winner = sorted[0];
      const runnerUp = sorted[1];
      readme += `| **${category}** | ${formatLibraryName(winner.name, metadata)} | ${formatNumber(winner.hz)} | ${formatLibraryName(runnerUp.name, metadata)} (${formatNumber(runnerUp.hz)}) |\n`;
    }
  }
  readme += '\n';

  // Historical results
  const historicalFiles = getHistoricalResults(benchmarkDir);
  if (historicalFiles.length > 0) {
    readme += '## 📜 Historical Results\n\n';
    readme += 'Track performance changes over time:\n\n';
    readme += '| Date | Results | Notes |\n';
    readme += '|------|---------|-------|\n';

    historicalFiles.forEach(file => {
      const date = file.replace('.json', '');
      const resultLink = `[View Results](./results/${file})`;
      readme += `| ${date} | ${resultLink} | Benchmark run |\n`;
    });

    readme += '\n';
    readme += '> 💡 **Tip:** Compare historical results to track performance improvements or regressions over time.\n\n';

    // Check if charts exist
    const chartsDir = join(benchmarkDir, 'charts');
    if (existsSync(chartsDir)) {
      const charts = readdirSync(chartsDir).filter(f => f.endsWith('.svg'));
      if (charts.length > 0) {
        readme += '### 📈 Performance Trends\n\n';
        readme += 'Visual representation of performance over time:\n\n';

        // Show first 3 charts inline
        charts.slice(0, 3).forEach(chart => {
          const chartName = chart.replace('.svg', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          readme += `**${chartName}**\n\n`;
          readme += `![${chartName}](./charts/${chart})\n\n`;
        });

        if (charts.length > 3) {
          readme += `<details>\n<summary>View ${charts.length - 3} more trend charts</summary>\n\n`;
          charts.slice(3).forEach(chart => {
            const chartName = chart.replace('.svg', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            readme += `**${chartName}**\n\n`;
            readme += `![${chartName}](./charts/${chart})\n\n`;
          });
          readme += `</details>\n\n`;
        }
      }
    }
  }

  // Detailed results for each category
  readme += '## 📊 Detailed Results\n\n';

  for (const [category, results] of groupedResults.entries()) {
    readme += `### ${category}\n\n`;

    // Add ASCII performance chart (exclude benchmarks from config)
    readme += '**Performance Comparison:**\n\n';
    const excludeList = metadata._config?.excludeFromCharts || [];
    const libraryResults = results.filter(r => !excludeList.includes(r.name));
    readme += generateASCIIChart(libraryResults);
    readme += '\n';

    // Sort by performance
    const sorted = [...results].sort((a, b) => b.hz - a.hz);

    readme += '| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |\n';
    readme += '|------|---------|---------|----------|------|-----|--------|\n';

    sorted.forEach((result, index) => {
      const medal = getMedal(index);
      readme += `| ${medal} | **${formatLibraryName(result.name, metadata)}** | `;
      readme += `${formatNumber(result.hz)} | `;
      readme += `±${result.rme.toFixed(2)}% | `;
      readme += `${(result.mean * 1000).toFixed(4)}ms | `;
      readme += `${(result.p99 * 1000).toFixed(4)}ms | `;
      readme += `${formatNumber(result.samples)} |\n`;
    });

    readme += '\n';

    // Performance insights
    if (sorted.length >= 3) {
      const fastest = sorted[0];
      const slowest = sorted[sorted.length - 1];
      const speedup = (fastest.hz / slowest.hz).toFixed(2);
      readme += `**Key Insight:** ${fastest.name} is **${speedup}x faster** than ${slowest.name} in this category.\n\n`;
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
