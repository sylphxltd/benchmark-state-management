/**
 * README Generator Module
 *
 * Core functionality for generating category README files:
 * 1. Loads benchmark results from per-library JSON files
 * 2. Calculates variance-based and hybrid weighted scores
 * 3. Generates comprehensive README with rankings and visualizations
 * 4. Supports both full results and metadata-only (pending results) modes
 */

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import {
  calculateTestWeights,
  weightedGeometricMean,
  loadCategoryWeightsSync,
  calculateHybridWeights,
  type BenchmarkResult,
  type LibraryBenchmark,
} from './scoring.js';

// ============================================================================
// Type Definitions
// ============================================================================

interface LibraryMetadata {
  name: string;
  displayName: string;
  description: string;
  url: string;
  npm: string;
  color?: string;
  tradeoff?: string;
  bundleSize?: {
    minified: number;
    gzipped: number;
    measuredAt: string;
  };
}

interface MetadataFile {
  libraries: Record<string, LibraryMetadata>;
}

interface VersionsFile {
  lastChecked: string;
  lastBenchmarkRun: string | null;
  testFilesHash: string;
  libraries: {
    [key: string]: {
      current: string;
      latest: string;
      size?: {
        gzip: number;
        minified: number;
      };
    };
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

function formatNumber(num: number | undefined | null): string {
  if (num === undefined || num === null || isNaN(num)) return 'N/A';
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

// ============================================================================
// README Generation
// ============================================================================

export async function generateCategoryReadme(categoryPath: string): Promise<void> {
  // Convert to relative path for README (extract benchmarks/<category>)
  const relativeCategoryPath = categoryPath.includes('/benchmarks/')
    ? categoryPath.substring(categoryPath.indexOf('/benchmarks/') + 1)
    : categoryPath;

  const resultsPath = join(categoryPath, 'results');
  const metadataPath = join(categoryPath, 'library-metadata.json');
  const versionsPath = join(categoryPath, 'versions.json');

  console.log(`📝 Generating README for: ${categoryPath}\n`);

  // Load library metadata
  let metadata: MetadataFile = { libraries: {} };
  try {
    metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
    console.log(`✓ Loaded metadata for ${Object.keys(metadata.libraries).length} libraries`);
  } catch (e) {
    console.warn('⚠️  No library-metadata.json found, skipping enhanced features');
  }

  // Load versions data (includes bundle sizes)
  let versions: VersionsFile = {
    lastChecked: new Date().toISOString(),
    lastBenchmarkRun: null,
    testFilesHash: '',
    libraries: {},
  };
  try {
    versions = JSON.parse(readFileSync(versionsPath, 'utf-8'));
    console.log(`✓ Loaded version data with bundle sizes`);
  } catch (e) {
    console.warn('⚠️  No versions.json found, bundle sizes will not be displayed');
  }

  // Load all library results from new folder structure
  let libraryDirs: string[] = [];

  if (existsSync(resultsPath)) {
    libraryDirs = readdirSync(resultsPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .sort();
  }

  if (libraryDirs.length === 0) {
    console.warn('⚠️  No benchmark results found yet. Generating README with library metadata only.');
  }

  // Load results for each library
  const libraries: LibraryBenchmark[] = [];

  for (const libraryId of libraryDirs) {
    const libraryDir = join(resultsPath, libraryId);
    const testFiles = readdirSync(libraryDir)
      .filter((f) => f.endsWith('.json'))
      .sort();

    if (testFiles.length === 0) {
      console.warn(`⚠️  No test results found for ${libraryId}`);
      continue;
    }

    // Load all test results for this library
    const testResults: BenchmarkResult[] = [];
    let libraryName = '';
    let packageName = '';
    let version = '';
    let timestamp = '';

    for (const testFile of testFiles) {
      const testData = JSON.parse(readFileSync(join(libraryDir, testFile), 'utf-8'));

      // Capture library metadata from first test file
      if (!libraryName) {
        libraryName = testData.library;
        packageName = testData.packageName;
        // Use version from test file if available, fallback to packageName for backward compatibility
        version = testData.version || testData.packageName;
        timestamp = testData.timestamp;
      }

      testResults.push({
        test: testData.test,
        group: testData.group,
        opsPerSecond: testData.result.opsPerSecond,
        meanTime: testData.result.meanTime,
        variance: testData.result.variance,
        p99: testData.result.p99,
        samples: testData.result.samples,
      });
    }

    libraries.push({
      library: libraryName,
      libraryId: libraryId,
      packageName: packageName,
      version: version,
      timestamp: timestamp,
      results: testResults,
    });
  }

  console.log(
    `📊 Loaded ${libraries.length} libraries with ${libraries.reduce((sum, lib) => sum + lib.results.length, 0)} test results\n`
  );

  // Get category name from path
  const categoryName = categoryPath.split('/').pop() || 'benchmarks';
  const categoryTitle = categoryName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate README based on whether we have results
  let readme: string;

  if (libraries.length === 0) {
    readme = generatePendingReadme(categoryTitle, categoryName, relativeCategoryPath, metadata, versions);
  } else {
    readme = generateFullReadme(
      categoryTitle,
      categoryName,
      relativeCategoryPath,
      libraries,
      metadata,
      versions,
      categoryPath
    );
  }

  // Write README
  const readmePath = join(categoryPath, 'README.md');
  writeFileSync(readmePath, readme);

  console.log(`✅ Generated ${readmePath}\n`);
  if (libraries.length > 0) {
    console.log(`📊 Summary:`);
    console.log(`   - ${libraries.length} libraries`);
    const groupCount = new Set(libraries.flatMap((lib) => lib.results.map((r) => r.group))).size;
    console.log(`   - ${groupCount} test groups`);
    console.log(`   - ${libraries[0].results.length} tests per library`);
    console.log(`   - ${libraries[0].results.length * libraries.length} total benchmark runs`);
  } else {
    console.log(`📊 Summary:`);
    console.log(`   - ${Object.keys(metadata.libraries).length} libraries configured`);
    console.log(`   - No benchmark results yet (pending first run)`);
  }
}

function generatePendingReadme(
  categoryTitle: string,
  categoryName: string,
  relativeCategoryPath: string,
  metadata: MetadataFile,
  versions: VersionsFile
): string {
  const lastUpdatedDate = new Date(versions.lastChecked)
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    .replace(/ /g, '%20');

  const libraryCount = Object.keys(metadata.libraries).length;

  return `<div align="center">

# ${categoryTitle} Benchmarks

Comprehensive performance benchmarks for ${categoryName} libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-${lastUpdatedDate}-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-${libraryCount}-green?style=flat-square)](#-libraries-tested)

[⬅️ Back to Main](../../README.md) • [📊 All Categories](../../README.md#-benchmark-categories) • [🚀 Run Locally](#-run-locally)

</div>

---

## ⏳ Benchmark Results Pending

Benchmark tests have not been run yet for this category. Results will be available once the automated benchmarks complete.

---

## 📚 Libraries Tested

${Object.entries(metadata.libraries)
  .map(([libId, lib]) => {
    const versionData = versions.libraries[libId];
    const bundleSize = versionData?.size
      ? '**' + (versionData.size.gzip / 1024).toFixed(2) + ' KB** (gzip)'
      : 'TBD';

    return (
      '### [' +
      lib.displayName +
      '](' +
      lib.url +
      ')\n\n' +
      '- **npm**: [' +
      lib.npm +
      '](https://www.npmjs.com/package/' +
      lib.npm +
      ')\n' +
      '- **Version**: ' +
      (versionData?.current || 'TBD') +
      '\n' +
      '- **Bundle Size**: ' +
      bundleSize +
      '\n' +
      '- **Description**: ' +
      lib.description +
      '\n'
    );
  })
  .join('\n')}

---

## 🚀 Run Locally

Want to run these benchmarks yourself? Follow these steps:

\`\`\`bash
# Clone the repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Navigate to this category
cd ${relativeCategoryPath}

# Install category dependencies
npm install

# Run benchmarks
npm run benchmark

# Generate README with results
bun run ../../scripts/generate-simple-readme.ts .
\`\`\`

---

<div align="center">

**[⬆ Back to Top](#${categoryTitle.toLowerCase().replace(/ /g, '-')}-benchmarks)**

Made with ❤️ by [Sylph](https://github.com/SylphxAI)

</div>
`;
}

function generateFullReadme(
  categoryTitle: string,
  categoryName: string,
  relativeCategoryPath: string,
  libraries: LibraryBenchmark[],
  metadata: MetadataFile,
  versions: VersionsFile,
  categoryPath: string
): string {
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

  // Calculate test weights based on performance variance
  const testWeights = calculateTestWeights(libraries);

  // Calculate overall scores using weighted geometric mean
  const overallScores = new Map<string, number>();
  const overallScoresUnweighted = new Map<string, number>();

  for (const lib of libraries) {
    const scores: number[] = [];
    const weights: number[] = [];

    for (const result of lib.results) {
      // Find max ops/sec for this test across all libraries
      const testResults = Array.from(groupedByGroup.values())
        .flatMap((g) => Array.from(g.values()))
        .filter((tests) => tests.has(lib.libraryId))
        .flatMap((tests) => Array.from(tests.values()))
        .filter((r) => r.test === result.test);

      const maxOps = Math.max(...testResults.map((r) => r.opsPerSecond));
      const score = (result.opsPerSecond / maxOps) * 100;
      const weight = testWeights.get(result.test) || 1 / lib.results.length;

      scores.push(score);
      weights.push(weight);
    }

    // Weighted geometric mean
    if (scores.length > 0) {
      const weightedGM = weightedGeometricMean(scores, weights);
      overallScores.set(lib.libraryId, weightedGM);

      // Also calculate unweighted for comparison (legacy)
      const product = scores.reduce((acc, s) => acc * s, 1);
      const geometricMean = Math.pow(product, 1 / scores.length);
      overallScoresUnweighted.set(lib.libraryId, geometricMean);
    }
  }

  // Check for hybrid weighting configuration
  const hybridWeights = loadCategoryWeightsSync(categoryPath);
  const overallScoresHybrid = new Map<string, number>();
  const hasHybridConfig = hybridWeights !== null;

  if (hasHybridConfig && hybridWeights) {
    // Calculate hybrid weighted scores
    const hybridTestWeights = calculateHybridWeights(libraries, hybridWeights);

    for (const lib of libraries) {
      const scores: number[] = [];
      const weights: number[] = [];

      for (const result of lib.results) {
        const testResults = Array.from(groupedByGroup.values())
          .flatMap((g) => Array.from(g.values()))
          .filter((tests) => tests.has(lib.libraryId))
          .flatMap((tests) => Array.from(tests.values()))
          .filter((r) => r.test === result.test);

        const maxOps = Math.max(...testResults.map((r) => r.opsPerSecond));
        const score = (result.opsPerSecond / maxOps) * 100;
        const weight = hybridTestWeights.get(result.test)?.hybridWeight || 1 / lib.results.length;

        scores.push(score);
        weights.push(weight);
      }

      if (scores.length > 0) {
        const weightedGM = weightedGeometricMean(scores, weights);
        overallScoresHybrid.set(lib.libraryId, weightedGM);
      }
    }
  }

  // Sort libraries by score (variance-based by default)
  const sortedLibs = [...libraries].sort((a, b) => {
    const scoreA = overallScores.get(a.libraryId) || 0;
    const scoreB = overallScores.get(b.libraryId) || 0;
    return scoreB - scoreA;
  });

  // Sort by hybrid if available
  const sortedLibsHybrid = hasHybridConfig
    ? [...libraries].sort((a, b) => {
        const scoreA = overallScoresHybrid.get(a.libraryId) || 0;
        const scoreB = overallScoresHybrid.get(b.libraryId) || 0;
        return scoreB - scoreA;
      })
    : sortedLibs;

  // Prepare header badge values
  const lastUpdatedDate = new Date(libraries[0].timestamp)
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    .replace(/ /g, '%20');

  const libraryCount = libraries.length;
  const testCount = libraries[0].results.length;

  // Generate README
  let readme = `<div align="center">

# ${categoryTitle} Benchmarks

Comprehensive performance benchmarks for React ${categoryName} libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-${lastUpdatedDate}-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-${libraryCount}-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-${testCount}-orange?style=flat-square)](#-test-coverage)

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
- **🎯 Popular Choice**: ${sortedLibs.find((lib) => lib.libraryId === 'zustand')?.library || sortedLibs[2].library} - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library

${sortedLibs
  .slice(0, 5)
  .map((lib) => {
    const meta = metadata.libraries[lib.packageName];
    const score = overallScores.get(lib.libraryId) || 0;

    return `
**${lib.library}** (Score: ${score.toFixed(1)}/100)
- ${meta?.description || 'High-performance state management solution'}
- **Best for**: ${meta?.tradeoff || 'General purpose state management'}
- [GitHub](${meta?.url || '#'}) • [npm](https://www.npmjs.com/package/${meta?.npm || lib.libraryId})
`;
  })
  .join('\n')}

</details>

---

## 📊 Overall Performance Rankings

${
  hasHybridConfig
    ? `> **🆕 Dual Ranking System**
>
> This category uses **hybrid weighting** that balances functional importance with data-driven stability.
> Both ranking systems are shown below for comparison.
>
> - **Hybrid Weighted** (primary): Balances category importance × test stability
> - **Variance-Based** (reference): Pure data-driven weighting
>
> See [Hybrid Weighting Analysis](../../HYBRID_WEIGHTING_ANALYSIS.md) for methodology.

### 🎯 Hybrid Weighted Rankings

Based on **two-tier weighted geometric mean** combining category importance with variance-based test weights.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
${sortedLibsHybrid
  .map((lib, i) => {
    const score = overallScoresHybrid.get(lib.libraryId) || 0;
    const topScore = overallScoresHybrid.get(sortedLibsHybrid[0].libraryId) || 100;
    const relative = ((score / topScore) * 100).toFixed(0);

    const meta = metadata.libraries[lib.packageName];
    const githubUrl = meta?.url || '#';
    const npmUrl = meta?.npm ? `https://www.npmjs.com/package/${meta.npm}` : '#';
    const bundleUrl = meta?.npm ? `https://bundlephobia.com/package/${meta.npm}` : '#';

    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
    const rank = `${medal} ${i + 1}`;

    return `| ${rank} | **[${lib.library}](${githubUrl})** | ${score.toFixed(1)}/100 | ${relative}% of fastest | [📦](${npmUrl}) [📊](${bundleUrl}) |`;
  })
  .join('\n')}


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.`
    : `Based on **weighted geometric mean** of normalized scores across all ${libraries[0].results.length} tests.

*Scores use variance-based weighting to prevent unstable tests from dominating results. See [Methodology](#-methodology) for details.*`
}

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
${sortedLibs
  .map((lib, i) => {
    const score = overallScores.get(lib.libraryId) || 0;
    const topScore = overallScores.get(sortedLibs[0].libraryId) || 100;
    const relative = ((score / topScore) * 100).toFixed(0);
    const medal = getMedal(i);
    const rank = i + 1;

    const meta = metadata.libraries[lib.packageName];
    const githubLink = meta?.url || '#';
    const npmLink = `https://www.npmjs.com/package/${meta?.npm || lib.libraryId}`;
    const bundleLink = `https://bundlephobia.com/package/${meta?.npm || lib.libraryId}`;

    return `| ${medal} ${rank} | **[${lib.library}](${githubLink})** | ${score.toFixed(1)}/100 | ${relative}% of fastest | [📦](${npmLink}) [📊](${bundleLink}) |`;
  })
  .join('\n')}


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
${sortedLibs
  .map((lib) => {
    const score = overallScores.get(lib.libraryId) || 0;
    const meta = metadata.libraries[lib.packageName];

    // Get bundle size from library-metadata.json first, then fall back to versions.json
    let bundleSize = 'N/A';
    if (meta?.bundleSize) {
      bundleSize = `**${(meta.bundleSize.gzipped / 1024).toFixed(2)} KB**`;
    } else {
      // Use packageName as key for versions.json lookup
      const versionData = versions.libraries[lib.packageName];
      if (versionData?.size) {
        bundleSize = `**${(versionData.size.gzip / 1024).toFixed(2)} KB**`;
      }
    }

    // Truncate to consistent lengths
    const description = (meta?.description || 'State management solution').substring(0, 50);
    const tradeoff = (meta?.tradeoff || 'General purpose').substring(0, 40);

    return `| **[${lib.library}](${meta?.url || '#'})** | **${score.toFixed(1)}** | ${bundleSize} | ${description}... | ${tradeoff}... |`;
  })
  .join('\n')}

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

${generateTestGroupSections(groupedByGroup, libraries)}

</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Platform**: GitHub Actions (Ubuntu latest)
- **CPU**: 2-core (Intel Xeon or AMD EPYC equivalent)
- **RAM**: ~7GB available
- **Node.js**: 20.x
- **Warmup**: 100ms + 5 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **weighted geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Test weights calculated based on 90th percentile of performance variance
- Stable tests (low variance) receive higher weight
- Unstable tests (high variance) receive lower weight
- This prevents outlier tests from dominating the overall score

**Example** (from current results):
- High-Frequency Read (stable, factor 7.3): **weight 17.7%**
- Complex Form (unstable, factor 600): **weight 0.2%**

This methodology follows [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)'s weighted geometric mean approach.

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
cd ${relativeCategoryPath}

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

${generateTestCoverage(groupedByGroup, libraries)}

---

## 🚀 Libraries Tested

${sortedLibs
  .map((lib) => {
    const meta = metadata.libraries[lib.packageName];
    const versionKey = lib.version || lib.libraryId;
    const versionData = versions.libraries[versionKey];
    const versionInfo = versionData?.current ? `v${versionData.current}` : '';

    // Get bundle size from library-metadata.json first, then fall back to versions.json
    let sizeInfo = '';
    if (meta?.bundleSize) {
      sizeInfo = ` • ${(meta.bundleSize.gzipped / 1024).toFixed(2)} KB gzip`;
    } else if (versionData?.size) {
      sizeInfo = ` • ${(versionData.size.gzip / 1024).toFixed(2)} KB gzip`;
    }

    return `- **[${lib.library}](${meta?.url || '#'})** (\`${lib.version}\`) ${versionInfo}${sizeInfo} - [📦 npm](https://www.npmjs.com/package/${meta?.npm || lib.libraryId}) • [📊 bundle size](https://bundlephobia.com/package/${meta?.npm || lib.libraryId})`;
  })
  .join('\n')}

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

  return readme;
}

function generateTestGroupSections(
  groupedByGroup: Map<string, Map<string, Map<string, BenchmarkResult>>>,
  libraries: LibraryBenchmark[]
): string {
  let sections = '';

  // Sort groups
  const sortedGroups = Array.from(groupedByGroup.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [groupId, testsMap] of sortedGroups) {
    sections += `### ${formatGroupName(groupId)}\n\n`;

    for (const [testName, libResults] of testsMap.entries()) {
      sections += `#### ${testName}\n\n`;

      // Sort by ops/sec
      const sorted = Array.from(libResults.entries())
        .map(([libId, result]) => ({
          libId,
          lib: libraries.find((l) => l.libraryId === libId)!,
          result,
        }))
        .sort((a, b) => b.result.opsPerSecond - a.result.opsPerSecond);

      const maxOps = sorted[0].result.opsPerSecond;

      // Bar chart
      sections += '```\n';
      sorted.forEach(({ lib, result }, i) => {
        const percentage = result.opsPerSecond / maxOps;
        const barLength = Math.round(percentage * 40);
        const bar = '█'.repeat(barLength);
        const medal = getMedal(i);

        sections += `${medal} ${lib.library.padEnd(18)} ${bar.padEnd(42)} ${formatNumber(result.opsPerSecond)} ops/sec\n`;
      });
      sections += '```\n\n';

      // Table
      sections += '| Library | ops/sec | Mean Time | P99 | Samples |\n';
      sections += '|---------|---------|-----------|-----|----------|\n';

      sorted.forEach(({ lib, result }) => {
        const meanTime = result.meanTime !== undefined ? result.meanTime.toFixed(3) : 'N/A';
        const p99 = result.p99 !== undefined ? result.p99.toFixed(3) : 'N/A';
        const samples = result.samples !== undefined ? result.samples : 'N/A';
        sections += `| ${lib.library} | ${formatNumber(result.opsPerSecond)} | ${meanTime}ms | ${p99}ms | ${samples} |\n`;
      });

      sections += '\n';
    }
  }

  return sections;
}

function generateTestCoverage(
  groupedByGroup: Map<string, Map<string, Map<string, BenchmarkResult>>>,
  libraries: LibraryBenchmark[]
): string {
  const basicRead = Array.from(groupedByGroup.get('01-basic-read')?.keys() || []).length;
  const basicWrite = Array.from(groupedByGroup.get('02-basic-write')?.keys() || []).length;
  const advanced = Array.from(groupedByGroup.get('03-advanced-operations')?.keys() || []).length;
  const async = Array.from(groupedByGroup.get('04-async-operations')?.keys() || []).length;
  const realWorld = Array.from(groupedByGroup.get('05-real-world')?.keys() || []).length;
  const stress = Array.from(groupedByGroup.get('06-performance-stress')?.keys() || []).length;

  const totalTests = libraries[0].results.length;
  const totalRuns = totalTests * libraries.length;

  return `- **Basic Operations**: ${basicRead + basicWrite} tests
- **Advanced Operations**: ${advanced} tests
- **Async Operations**: ${async} tests
- **Real-World Scenarios**: ${realWorld} tests
- **Stress Tests**: ${stress} tests

**Total**: ${totalTests} tests × ${libraries.length} libraries = ${totalRuns} benchmark runs`;
}
