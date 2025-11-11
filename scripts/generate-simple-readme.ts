#!/usr/bin/env bun
/**
 * Simple README Generator for New Framework
 * Generates README from per-library benchmark JSON files
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

interface BenchmarkResult {
  test: string;
  group: string;
  opsPerSecond: number;
  meanTime: number;
  variance: number;
  p99: number;
  samples: number;
}

interface LibraryBenchmark {
  library: string;
  libraryId: string;
  version: string;
  timestamp: string;
  results: BenchmarkResult[];
}

interface LibraryMetadata {
  name: string;
  displayName: string;
  description: string;
  url: string;
  npm: string;
  color?: string;
  tradeoff?: string;
}

interface MetadataFile {
  libraries: Record<string, LibraryMetadata>;
}

// Get category path
const categoryPath = process.argv[2] || 'benchmarks/state-management';
const resultsPath = join(categoryPath, 'results');
const metadataPath = join(categoryPath, 'library-metadata.json');

console.log(`📝 Generating README for: ${categoryPath}\n`);

// Load library metadata
let metadata: MetadataFile = { libraries: {} };
try {
  metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  console.log(`✓ Loaded metadata for ${Object.keys(metadata.libraries).length} libraries`);
} catch (e) {
  console.warn('⚠️  No library-metadata.json found, skipping enhanced features');
}

// Load all library results
const resultFiles = readdirSync(resultsPath)
  .filter(f => f.endsWith('-benchmark.json'))
  .sort();

if (resultFiles.length === 0) {
  console.error('❌ No benchmark results found');
  process.exit(1);
}

const libraries: LibraryBenchmark[] = resultFiles.map(file =>
  JSON.parse(readFileSync(join(resultsPath, file), 'utf-8'))
);

console.log(`📊 Loaded ${libraries.length} libraries\n`);

// Group results by group and test
const groupedByGroup = new Map<string, Map<string, Map<string, BenchmarkResult>>>();

for (const lib of libraries) {
  for (const result of lib.results) {
    if (!groupedByGroup.has(result.group)) {
      groupedByGroup.set(result.group, new Map());
    }
    const groupData = groupedByGroup.get(result.group)!;

    if (!groupData.has(result.test)) {
      groupData.set(result.test, new Map());
    }
    const testData = groupData.get(result.test)!;
    testData.set(lib.libraryId, result);
  }
}

// Calculate overall scores
const overallScores = new Map<string, number>();

for (const lib of libraries) {
  const scores: number[] = [];

  for (const result of lib.results) {
    // Find max ops/sec for this test across all libraries
    const testResults = Array.from(groupedByGroup.values())
      .flatMap(g => Array.from(g.values()))
      .filter(tests => tests.has(lib.libraryId))
      .flatMap(tests => Array.from(tests.values()))
      .filter(r => r.test === result.test);

    const maxOps = Math.max(...testResults.map(r => r.opsPerSecond));
    const score = (result.opsPerSecond / maxOps) * 100;
    scores.push(score);
  }

  // Geometric mean
  if (scores.length > 0) {
    const product = scores.reduce((acc, s) => acc * s, 1);
    const geometricMean = Math.pow(product, 1 / scores.length);
    overallScores.set(lib.libraryId, geometricMean);
  }
}

// Sort libraries by score
const sortedLibs = [...libraries].sort((a, b) => {
  const scoreA = overallScores.get(a.libraryId) || 0;
  const scoreB = overallScores.get(b.libraryId) || 0;
  return scoreB - scoreA;
});

// Helper functions
function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toFixed(0);
}

function getMedal(rank: number): string {
  if (rank === 0) return '🥇';
  if (rank === 1) return '🥈';
  if (rank === 2) return '🥉';
  return '';
}

function formatGroupName(groupId: string): string {
  const names: Record<string, string> = {
    '01-basic-read': 'Basic Read Operations',
    '02-basic-write': 'Basic Write Operations',
    '03-advanced-operations': 'Advanced Operations',
    '04-async-operations': 'Async Operations',
    '05-real-world': 'Real-World Scenarios',
    '06-performance-stress': 'Performance Stress Tests',
  };
  return names[groupId] || groupId;
}

// Get category name from path
const categoryName = categoryPath.split('/').pop() || 'benchmarks';
const categoryTitle = categoryName
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

// Generate README
let readme = `<div align="center">

# ${categoryTitle} Benchmarks

Comprehensive performance benchmarks for React ${categoryName} libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-${new Date(libraries[0].timestamp).toLocaleDateString('en-US', {
  year: 'numeric', month: 'short', day: 'numeric'
}).replace(/ /g, '%20')}-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-${libraries.length}-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-${libraries[0].results.length}-orange?style=flat-square)](#-test-coverage)

[⬅️ Back to Main](../../README.md) • [📊 All Categories](../../README.md#-benchmark-categories) • [🔬 Methodology](#-methodology) • [🚀 Run Locally](#-run-locally)

</div>

---

## 📑 Table of Contents

- [🎯 Quick Recommendations](#-quick-recommendations)
- [📊 Overall Performance Rankings](#-overall-performance-rankings)
- [📈 Library Comparison](#-library-comparison)
- [📊 Performance by Test Group](#-performance-by-test-group)
- [🔬 Methodology](#-methodology)
- [🚀 Run Locally](#-run-locally)
- [🚀 Libraries Tested](#-libraries-tested)

---

## 🎯 Quick Recommendations

**TL;DR** - Choose based on your needs:

- **⚡ Maximum Performance**: ${sortedLibs[0].library} - Fastest overall with ${(overallScores.get(sortedLibs[0].libraryId) || 0).toFixed(1)}/100 score
- **⚖️ Best Balance**: ${sortedLibs[1].library} - Great performance (${(overallScores.get(sortedLibs[1].libraryId) || 0).toFixed(1)}/100) with good ecosystem
- **🎯 Popular Choice**: ${sortedLibs.find(lib => lib.libraryId === 'zustand')?.library || sortedLibs[2].library} - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library

${sortedLibs.slice(0, 5).map(lib => {
  const meta = metadata.libraries[lib.version] || metadata.libraries[lib.libraryId];
  const score = overallScores.get(lib.libraryId) || 0;

  return `
**${lib.library}** (Score: ${score.toFixed(1)}/100)
- ${meta?.description || 'High-performance state management solution'}
- **Best for**: ${meta?.tradeoff || 'General purpose state management'}
- [GitHub](${meta?.url || '#'}) • [npm](https://www.npmjs.com/package/${meta?.npm || lib.libraryId})
`;
}).join('\n')}

</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all ${libraries[0].results.length} tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
`;

sortedLibs.forEach((lib, i) => {
  const score = overallScores.get(lib.libraryId) || 0;
  const topScore = overallScores.get(sortedLibs[0].libraryId) || 100;
  const relative = (score / topScore * 100).toFixed(0);
  const medal = getMedal(i);
  const rank = i + 1;

  const meta = metadata.libraries[lib.version] || metadata.libraries[lib.libraryId];
  const githubLink = meta?.url || '#';
  const npmLink = `https://www.npmjs.com/package/${meta?.npm || lib.libraryId}`;
  const bundleLink = `https://bundlephobia.com/package/${meta?.npm || lib.libraryId}`;

  readme += `| ${medal} ${rank} | **[${lib.library}](${githubLink})** | ${score.toFixed(1)}/100 | ${relative}% of fastest | [📦](${npmLink}) [📊](${bundleLink}) |\n`;
});

readme += `

*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Description | Best For |
|---------|:-----:|-------------|----------|
`;

sortedLibs.forEach(lib => {
  const score = overallScores.get(lib.libraryId) || 0;
  const meta = metadata.libraries[lib.version] || metadata.libraries[lib.libraryId];

  // Truncate to consistent lengths
  const description = (meta?.description || 'State management solution').substring(0, 50);
  const tradeoff = (meta?.tradeoff || 'General purpose').substring(0, 40);

  readme += `| **[${lib.library}](${meta?.url || '#'})** | **${score.toFixed(1)}** | ${description}... | ${tradeoff}... |\n`;
});

readme += `\n---\n\n## 📊 Performance by Test Group\n\n<details open>\n<summary><b>Click to expand/collapse detailed test results</b></summary>\n\n`;

// Sort groups
const sortedGroups = Array.from(groupedByGroup.entries()).sort((a, b) =>
  a[0].localeCompare(b[0])
);

for (const [groupId, testsMap] of sortedGroups) {
  readme += `### ${formatGroupName(groupId)}\n\n`;

  for (const [testName, libResults] of testsMap.entries()) {
    readme += `#### ${testName}\n\n`;

    // Sort by ops/sec
    const sorted = Array.from(libResults.entries())
      .map(([libId, result]) => ({
        libId,
        lib: libraries.find(l => l.libraryId === libId)!,
        result
      }))
      .sort((a, b) => b.result.opsPerSecond - a.result.opsPerSecond);

    const maxOps = sorted[0].result.opsPerSecond;

    // Bar chart
    readme += '```\n';
    sorted.forEach(({ lib, result }, i) => {
      const percentage = result.opsPerSecond / maxOps;
      const barLength = Math.round(percentage * 40);
      const bar = '█'.repeat(barLength);
      const medal = getMedal(i);

      readme += `${medal} ${lib.library.padEnd(18)} ${bar.padEnd(42)} ${formatNumber(result.opsPerSecond)} ops/sec\n`;
    });
    readme += '```\n\n';

    // Table
    readme += '| Library | ops/sec | Mean Time | P99 | Samples |\n';
    readme += '|---------|---------|-----------|-----|----------|\n';

    sorted.forEach(({ lib, result }) => {
      readme += `| ${lib.library} | ${formatNumber(result.opsPerSecond)} | ${result.meanTime.toFixed(3)}ms | ${result.p99.toFixed(3)}ms | ${result.samples} |\n`;
    });

    readme += '\n';
  }
}

readme += `
</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Warmup**: 100 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Geometric mean prevents single test from dominating
- Score of 50 = half the speed of the fastest library on average

### Reproducibility
All tests are deterministic and reproducible:
1. Same versions locked in package.json
2. Same test scenarios for all libraries
3. Multiple runs to ensure consistency
4. Automated via GitHub Actions

</details>

---

## 🚀 Run Locally

\`\`\`bash
# Clone the repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Navigate to this category
cd ${categoryPath}

# Install category dependencies
npm install

# Run benchmarks
npm run benchmark

# Generate README
npx tsx ../../scripts/generate-simple-readme.ts .
\`\`\`

**View Test Code**: [./groups/](./groups/) contains all test implementations

---

## 📦 Test Coverage

- **Basic Operations**: ${Array.from(groupedByGroup.get('01-basic-read')?.keys() || []).length + Array.from(groupedByGroup.get('02-basic-write')?.keys() || []).length} tests
- **Advanced Operations**: ${Array.from(groupedByGroup.get('03-advanced-operations')?.keys() || []).length} tests
- **Async Operations**: ${Array.from(groupedByGroup.get('04-async-operations')?.keys() || []).length} tests
- **Real-World Scenarios**: ${Array.from(groupedByGroup.get('05-real-world')?.keys() || []).length} tests
- **Stress Tests**: ${Array.from(groupedByGroup.get('06-performance-stress')?.keys() || []).length} tests

**Total**: ${libraries[0].results.length} tests × ${libraries.length} libraries = ${libraries[0].results.length * libraries.length} benchmark runs

---

## 🚀 Libraries Tested

${sortedLibs.map(lib => {
  const meta = metadata.libraries[lib.version] || metadata.libraries[lib.libraryId];
  return `- **[${lib.library}](${meta?.url || '#'})** (\`${lib.version}\`) - [📦 npm](https://www.npmjs.com/package/${meta?.npm || lib.libraryId}) • [📊 bundle size](https://bundlephobia.com/package/${meta?.npm || lib.libraryId})`;
}).join('\n')}

---

## 🤝 Contributing

Want to add a library or improve tests?

- **Add a Library**: Update \`package.json\` and \`library-metadata.json\`, then implement tests
- **Improve Tests**: Edit files in \`./groups/\` directory
- **Report Issues**: [Open an issue](https://github.com/SylphxAI/benchmark/issues)
- **Suggest Features**: [Start a discussion](https://github.com/SylphxAI/benchmark/discussions)

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed guidelines.

---

## 📚 Related

- [📊 All Benchmark Categories](../../README.md#-benchmark-categories)
- [🏗️ Architecture Documentation](../../ARCHITECTURE.md)
- [⚙️ GitHub Actions Workflow](../../.github/workflows/benchmarks-per-library.yml)
- [🔄 CI/CD Results](https://github.com/SylphxAI/benchmark/actions)

---

<div align="center">

**Found this useful? Give it a ⭐️!**

*Generated on ${new Date().toISOString()}*

[⬆️ Back to Top](#${categoryTitle.toLowerCase().replace(/ /g, '-')}-benchmarks) • [⬅️ Main README](../../README.md)

</div>
`;

// Write README
const readmePath = join(categoryPath, 'README.md');
writeFileSync(readmePath, readme);

console.log(`✅ Generated ${readmePath}\n`);
console.log(`📊 Summary:`);
console.log(`   - ${libraries.length} libraries`);
console.log(`   - ${groupedByGroup.size} test groups`);
console.log(`   - ${libraries[0].results.length} tests per library`);
console.log(`   - ${libraries[0].results.length * libraries.length} total benchmark runs`);
