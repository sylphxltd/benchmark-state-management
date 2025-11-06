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

function parseResultsFromLatestRun(resultsDir: string): Map<string, BenchmarkResult[]> | null {
  // Get latest result file
  if (!existsSync(resultsDir)) {
    console.error('❌ Results directory not found:', resultsDir);
    return null;
  }

  const files = readdirSync(resultsDir)
    .filter(f => f.startsWith('benchmark-') && f.endsWith('.json'))
    .sort()
    .reverse();

  if (files.length === 0) {
    console.error('❌ No benchmark results found');
    return null;
  }

  const latestFile = join(resultsDir, files[0]);
  console.log(`📊 Using latest results: ${files[0]}`);

  const results = JSON.parse(readFileSync(latestFile, 'utf-8'));

  // Group by test category
  const grouped = new Map<string, BenchmarkResult[]>();

  for (const result of results.benchmarks || []) {
    const category = result.group || 'Other';
    if (!grouped.has(category)) {
      grouped.set(category, []);
    }
    grouped.get(category)!.push(result);
  }

  return grouped;
}

function generateReadme(benchmarkDir: string) {
  console.log('📝 Generating README...\n');

  const versionsPath = join(benchmarkDir, 'versions.json');
  const resultsDir = join(benchmarkDir, 'results');

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
  readme += '| Library | Version | Last Updated |\n';
  readme += '|---------|---------|-------------|\n';

  const sortedLibs = Object.entries(versions.libraries)
    .sort(([a], [b]) => a.localeCompare(b));

  for (const [name, info] of sortedLibs) {
    const updatedDate = new Date(info.lastUpdated).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    readme += `| **${name}** | \`v${info.current}\` | ${updatedDate} |\n`;
  }
  readme += '\n';

  // Top performers summary
  readme += '## 🏆 Top Performers\n\n';
  readme += 'Quick overview of category winners:\n\n';
  readme += '| Category | 🥇 Winner | Ops/sec | Runner-up |\n';
  readme += '|----------|-----------|---------|----------|\n';

  for (const [category, results] of groupedResults.entries()) {
    const sorted = [...results].sort((a, b) => b.hz - a.hz);
    if (sorted.length >= 2) {
      const winner = sorted[0];
      const runnerUp = sorted[1];
      readme += `| **${category}** | ${winner.name} | ${formatNumber(winner.hz)} | ${runnerUp.name} (${formatNumber(runnerUp.hz)}) |\n`;
    }
  }
  readme += '\n';

  // Detailed results for each category
  readme += '## 📊 Detailed Results\n\n';

  for (const [category, results] of groupedResults.entries()) {
    readme += `### ${category}\n\n`;

    // Sort by performance
    const sorted = [...results].sort((a, b) => b.hz - a.hz);

    readme += '| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |\n';
    readme += '|------|---------|---------|----------|------|-----|--------|\n';

    sorted.forEach((result, index) => {
      const medal = getMedal(index);
      readme += `| ${medal} | **${result.name}** | `;
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
