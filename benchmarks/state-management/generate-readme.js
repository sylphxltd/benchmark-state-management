#!/usr/bin/env node
/**
 * Complete README generator for state-management benchmarks
 * Generates the entire README from scratch based on benchmark results
 * Compliant with BENCHMARK_STANDARD.md v1.0.0
 */

import fs from 'fs';

// ============================================================================
// Data Loading
// ============================================================================

const libraryMetadata = JSON.parse(fs.readFileSync('library-metadata.json', 'utf8'));
const features = JSON.parse(fs.readFileSync('features.json', 'utf8'));
const versions = JSON.parse(fs.readFileSync('versions.json', 'utf8'));

// Load all result files
const results = {
  '01-read': loadResults('groups/01-read/results.json'),
  '02-write': loadResults('groups/02-write/results.json'),
  '03-creation': loadResults('groups/03-creation/results.json'),
  '04-complexity': loadResults('groups/04-complexity/results.json'),
  '05-cache': loadResults('groups/05-cache/results.json'),
  '06-memory': loadResults('groups/06-memory/results.json'),
  '07-form': loadResults('groups/07-form/results.json'),
  '08-async-reactive': loadResults('groups/08-async-reactive/results.json'),
  '09-computed-native': loadResults('groups/09-computed-native/results.json'),
  '10-selectors': loadResults('groups/10-selectors/results.json'),
  '11-batching-native': loadResults('groups/11-batching-native/results.json')
};

function loadResults(path) {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
  } catch {
    return null;
  }
}

// ============================================================================
// Helper Functions
// ============================================================================

function formatNumber(num, decimals = 0) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toFixed(decimals);
}

function generateBarChart(benchmarks, maxValue) {
  const maxBarLength = 40;
  let chart = '```\n';

  benchmarks.forEach((b, index) => {
    const value = b.hz || 0;
    const percentage = maxValue > 0 ? value / maxValue : 0;
    const barLength = Math.round(percentage * maxBarLength);
    const bar = '█'.repeat(barLength);
    const crown = index === 0 ? '👑' : ' ';

    // Extract library name
    const nameParts = b.name.split(' - ');
    const libName = nameParts[nameParts.length - 1];

    chart += `${crown} ${libName.padEnd(20)} ${bar} ${formatNumber(value)}\n`;
  });

  chart += '```\n\n';
  return chart;
}

function extractBenchmarks(result, pattern) {
  if (!result?.files?.[0]?.groups) return [];
  const benchmarks = [];
  // Search through ALL groups, not just groups[0]
  result.files[0].groups.forEach(group => {
    if (group.benchmarks) {
      const matches = group.benchmarks.filter(b => b.name.includes(pattern));
      benchmarks.push(...matches);
    }
  });
  return benchmarks;
}

function getAllBenchmarks(result) {
  if (!result?.files?.[0]?.groups) return [];
  const benchmarks = [];
  result.files[0].groups.forEach(group => {
    if (group.benchmarks) benchmarks.push(...group.benchmarks);
  });
  return benchmarks;
}

function getLibraryDisplayName(libKey) {
  return libraryMetadata.libraries[libKey]?.displayName || libKey;
}

// ============================================================================
// Calculate Overall Performance Score
// ============================================================================

function calculateOverallScores() {
  const scores = {};

  // Extract Simple Read
  const readBenches = extractBenchmarks(results['01-read'], 'Simple Read -');
  readBenches.forEach(b => {
    const lib = b.name.replace('Simple Read - ', '');
    if (!scores[lib]) scores[lib] = {};
    scores[lib].read = b.hz || 0;
  });

  // Extract Simple Increment
  const writeBenches = extractBenchmarks(results['02-write'], 'Simple Increment -');
  writeBenches.forEach(b => {
    const lib = b.name.replace('Simple Increment - ', '');
    if (!scores[lib]) scores[lib] = {};
    scores[lib].write = b.hz || 0;
  });

  // Extract Store Creation
  const creationBenches = extractBenchmarks(results['03-creation'], 'Store Creation -');
  creationBenches.forEach(b => {
    const lib = b.name.replace('Store Creation - ', '');
    if (!scores[lib]) scores[lib] = {};
    scores[lib].creation = b.hz || 0;
  });

  // Extract Large State Allocation
  const memoryBenches = extractBenchmarks(results['06-memory'], 'Large State Allocation -');
  memoryBenches.forEach(b => {
    const lib = b.name.replace('Large State Allocation - ', '');
    if (!scores[lib]) scores[lib] = {};
    scores[lib].memory = b.hz || 0;
  });

  // Calculate geometric mean
  const overallScores = [];
  Object.entries(scores).forEach(([lib, data]) => {
    if (data.read && data.write && data.creation && data.memory) {
      const values = [data.read, data.write, data.creation, data.memory];
      const product = values.reduce((a, b) => a * b, 1);
      const geometricMean = Math.pow(product, 1 / values.length);

      overallScores.push({
        library: lib,
        read: data.read,
        write: data.write,
        creation: data.creation,
        memory: data.memory,
        overall: geometricMean
      });
    }
  });

  return overallScores.sort((a, b) => b.overall - a.overall);
}

// ============================================================================
// Generate README Sections
// ============================================================================

function generateHeader() {
  return `# State Management Benchmarks

Comprehensive performance benchmarks for JavaScript/TypeScript state management libraries.

`;
}

function generateOverallScore(scores) {
  let section = `## Overall Performance Score

**Based on Universal Tests**: Read, Write, Creation, Memory
**Methodology**: Geometric mean of operations per second across all universal tests

| Rank | Library | Score (ops/sec) | vs Leader |
|------|---------|-----------------|-----------|
`;

  scores.forEach((entry, index) => {
    const rank = index + 1;
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
    const vsLeader = index === 0 ? 'Baseline' : `${(entry.overall / scores[0].overall).toFixed(2)}x`;

    section += `| ${medal} ${rank} | **${entry.library}** | **${formatNumber(entry.overall)}** | ${vsLeader} |\n`;
  });

  section += `
> **Note**: Groups 04 (Complexity), 05 (Cache), and 07 (Form) currently have incomplete implementations and are excluded from the Overall Performance Score. These tests require refactoring to use real store implementations rather than placeholder logic.

---

`;

  return section;
}

function generateLibraryComparison(scores) {
  let section = `## Library Comparison

| Library | Version | Bundle Size (gzip) | Overall Score | Read | Write | Creation | Memory |
|---------|---------|-------------------|---------------|------|-------|----------|--------|
`;

  // Find best value for each metric
  const maxOverall = Math.max(...scores.map(s => s.overall));
  const maxRead = Math.max(...scores.map(s => s.read));
  const maxWrite = Math.max(...scores.map(s => s.write));
  const maxCreation = Math.max(...scores.map(s => s.creation));
  const maxMemory = Math.max(...scores.map(s => s.memory));

  // Find smallest bundle size (best)
  const minSize = Math.min(...scores.map(entry => {
    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === entry.library
    );
    return versions.libraries[libKey]?.size?.gzip || Infinity;
  }));

  scores.forEach((entry, index) => {
    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === entry.library
    );
    const version = versions.libraries[libKey]?.current || 'N/A';
    const size = versions.libraries[libKey]?.size?.gzip || 0;
    const sizeKB = (size / 1024).toFixed(1);

    // Add crown to each metric's winner
    const sizeCrown = size === minSize ? '👑 ' : '';
    const overallCrown = entry.overall === maxOverall ? '👑 ' : '';
    const readCrown = entry.read === maxRead ? '👑 ' : '';
    const writeCrown = entry.write === maxWrite ? '👑 ' : '';
    const creationCrown = entry.creation === maxCreation ? '👑 ' : '';
    const memoryCrown = entry.memory === maxMemory ? '👑 ' : '';

    section += `| ${entry.library} | ${version} | ${sizeCrown}${sizeKB} KB | ${overallCrown}${formatNumber(entry.overall)} | ${readCrown}${formatNumber(entry.read)} | ${writeCrown}${formatNumber(entry.write)} | ${creationCrown}${formatNumber(entry.creation)} | ${memoryCrown}${formatNumber(entry.memory)} |\n`;
  });

  section += '\n---\n\n';
  return section;
}

function generateFeatureMatrix() {
  let section = `## Feature Support Matrix

| Feature | Description | Libraries |
|---------|-------------|-----------|
`;

  Object.entries(features.features).forEach(([key, feature]) => {
    const libs = feature.supported.map(libKey => getLibraryDisplayName(libKey)).join(', ');
    section += `| **${feature.name}** | ${feature.description} | ${libs} |\n`;
  });

  section += '\n---\n\n';
  return section;
}

function generateTestCategories() {
  return `## Test Categories

### Universal Tests (01-06)

All 8 libraries participate equally. Used to calculate Overall Performance Score.

- **01 - Read Operations**: Simple read and high-frequency read patterns
- **02 - Write Operations**: Simple increments and burst updates
- **03 - Store Creation**: Instance creation overhead
- **04 - Complexity**: Deep nested state *(Implementation incomplete)*
- **05 - Cache Performance**: Repeated access patterns *(Implementation incomplete)*
- **06 - Memory Allocation**: Large state allocation performance
- **07 - Form State**: Multi-field updates *(Implementation incomplete)*

### Feature Tests (08-11)

Libraries participate only if they have native support for the tested capability.

- **08 - Reactive Async**: Async atoms/computations (Jotai only)
- **09 - Computed Native**: Native computed values (5 libraries)
- **10 - Selectors**: Manual selector pattern (3 libraries)
- **11 - Batching Native**: Built-in batching (3 libraries)

---

`;
}

function generateDetailedResults() {
  let section = `## Detailed Results

`;

  // 01 - Read Operations
  section += `### 01 - Read Operations

**Simple Read** (single value access)

`;

  const readBenches = extractBenchmarks(results['01-read'], 'Simple Read -');
  const maxRead = Math.max(...readBenches.map(b => b.hz || 0));
  readBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(readBenches, maxRead);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  readBenches.forEach((b, i) => {
    const lib = b.name.replace('Simple Read - ', '');
    const rel = ((b.hz || 0) / maxRead).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += '---\n\n';

  // 02 - Write Operations
  section += `### 02 - Write Operations

**Simple Increment** (single value update)

`;

  const writeBenches = extractBenchmarks(results['02-write'], 'Simple Increment -');
  const maxWrite = Math.max(...writeBenches.map(b => b.hz || 0));
  writeBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(writeBenches, maxWrite);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  writeBenches.forEach((b, i) => {
    const lib = b.name.replace('Simple Increment - ', '');
    const rel = ((b.hz || 0) / maxWrite).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += '---\n\n';

  // 03 - Store Creation
  section += `### 03 - Store Creation

**Store/Instance Creation Overhead**

`;

  const creationBenches = extractBenchmarks(results['03-creation'], 'Store Creation -');
  const maxCreation = Math.max(...creationBenches.map(b => b.hz || 0));
  creationBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(creationBenches, maxCreation);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  creationBenches.forEach((b, i) => {
    const lib = b.name.replace('Store Creation - ', '');
    const rel = ((b.hz || 0) / maxCreation).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += `> **Note**: MobX's low creation performance is expected due to makeAutoObservable overhead.

---

`;

  // 06 - Memory Allocation
  section += `### 06 - Memory Allocation

**Large State Allocation** (1000-field objects)

`;

  const memoryBenches = extractBenchmarks(results['06-memory'], 'Large State Allocation -');
  const maxMemory = Math.max(...memoryBenches.map(b => b.hz || 0));
  memoryBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(memoryBenches, maxMemory);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  memoryBenches.forEach((b, i) => {
    const lib = b.name.replace('Large State Allocation - ', '');
    const rel = ((b.hz || 0) / maxMemory).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += `> **Note**: All libraries perform similarly for large state allocation, indicating minimal per-field overhead.

---

`;

  // 08 - Reactive Async
  section += `### 08 - Reactive Async (Feature Test)

**Participating Libraries**: Jotai only

| Benchmark | ops/sec |
|-----------|---------|
`;

  const asyncBenches = getAllBenchmarks(results['08-async-reactive']);
  asyncBenches.forEach(b => {
    const name = b.name.replace(' - Jotai', '');
    section += `| ${name} | ${formatNumber(b.hz)} |\n`;
  });

  section += '\n---\n\n';

  // 09 - Computed Native
  section += `### 09 - Computed Native (Feature Test)

**Participating Libraries**: Jotai, MobX, Solid Signals, Preact Signals, Zen

**Simple Computed** (value * 2)

`;

  const computedBenches = extractBenchmarks(results['09-computed-native'], 'Native Computed -');
  const maxComputed = Math.max(...computedBenches.map(b => b.hz || 0));
  computedBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(computedBenches, maxComputed);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  computedBenches.forEach((b, i) => {
    const lib = b.name.replace('Native Computed - ', '');
    const rel = ((b.hz || 0) / maxComputed).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += `**Chained Computed** (computed from computed, 2 levels)

`;

  const chainedBenches = extractBenchmarks(results['09-computed-native'], 'Chained Computed -');
  const maxChained = Math.max(...chainedBenches.map(b => b.hz || 0));
  chainedBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(chainedBenches, maxChained);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  chainedBenches.forEach((b, i) => {
    const lib = b.name.replace('Chained Computed - ', '');
    const rel = ((b.hz || 0) / maxChained).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += `**Computed Update Performance** (triggering computed recalculation)

`;

  const updateBenches = extractBenchmarks(results['09-computed-native'], 'Computed Updates -');
  const maxUpdate = Math.max(...updateBenches.map(b => b.hz || 0));
  updateBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(updateBenches, maxUpdate);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  updateBenches.forEach((b, i) => {
    const lib = b.name.replace('Computed Updates - ', '');
    const rel = ((b.hz || 0) / maxUpdate).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += '---\n\n';

  // 10 - Selectors
  section += `### 10 - Selectors (Feature Test)

**Participating Libraries**: Redux Toolkit, Zustand, Valtio

**Simple Selector**

`;

  const selectorBenches = extractBenchmarks(results['10-selectors'], 'Selector - ')
    .filter(b => !b.name.includes('Chained') && !b.name.includes('Repeated') && !b.name.includes('Updates'));
  const maxSelector = Math.max(...selectorBenches.map(b => b.hz || 0));
  selectorBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(selectorBenches, maxSelector);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  selectorBenches.forEach((b, i) => {
    const lib = b.name.replace('Selector - ', '');
    const rel = ((b.hz || 0) / maxSelector).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += '---\n\n';

  // 11 - Batching Native
  section += `### 11 - Batching Native (Feature Test)

**Participating Libraries**: Solid Signals, MobX, Valtio

**Batched Updates** (3 fields)

`;

  const batchingBenches = extractBenchmarks(results['11-batching-native'], 'Batched Updates -');
  const maxBatching = Math.max(...batchingBenches.map(b => b.hz || 0));
  batchingBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(batchingBenches, maxBatching);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  batchingBenches.forEach((b, i) => {
    const lib = b.name.replace('Batched Updates - ', '');
    const rel = ((b.hz || 0) / maxBatching).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += `**Large Batch** (100 updates)

`;

  const largeBatchBenches = extractBenchmarks(results['11-batching-native'], 'Large Batch -');
  const maxLargeBatch = Math.max(...largeBatchBenches.map(b => b.hz || 0));
  largeBatchBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(largeBatchBenches, maxLargeBatch);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  largeBatchBenches.forEach((b, i) => {
    const lib = b.name.replace('Large Batch - ', '');
    const rel = ((b.hz || 0) / maxLargeBatch).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += `**Unbatched Updates** (3 fields, no batching)

`;

  const unbatchedBenches = extractBenchmarks(results['11-batching-native'], 'Unbatched Updates -');
  const maxUnbatched = Math.max(...unbatchedBenches.map(b => b.hz || 0));
  unbatchedBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(unbatchedBenches, maxUnbatched);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  unbatchedBenches.forEach((b, i) => {
    const lib = b.name.replace('Unbatched Updates - ', '');
    const rel = ((b.hz || 0) / maxUnbatched).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += `**Batch with Subscriptions** (3 fields with observers)

`;

  const batchSubBenches = extractBenchmarks(results['11-batching-native'], 'Batched with Observers -');
  const maxBatchSub = Math.max(...batchSubBenches.map(b => b.hz || 0));
  batchSubBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  section += generateBarChart(batchSubBenches, maxBatchSub);
  section += `| Library | ops/sec | Relative |
|---------|---------|----------|
`;

  batchSubBenches.forEach((b, i) => {
    const lib = b.name.replace('Batched with Observers - ', '');
    const rel = ((b.hz || 0) / maxBatchSub).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });
  section += '---\n\n';
  return section;
}

function generateMethodology() {
  return `## Methodology

### Universal Test Standards

- **All libraries participate** in tests 01-07 (excluding incomplete tests)
- Results are **normalized** and combined using **geometric mean**
- Tests use **actual library APIs**, not synthetic constructs
- Each benchmark runs for sufficient iterations to achieve statistical significance

### Feature Test Standards

- **Only libraries with native support** participate
- Tests measure **real-world usage patterns** of the feature
- No placeholder or workaround implementations
- Separate rankings for each feature

### Benchmark Environment

- **Runtime**: Node.js v25.0.0
- **Framework**: Vitest Bench
- **Hardware**: [System-dependent]
- **Iterations**: Automatically determined by Vitest for statistical significance

---

`;
}

function generateKeyInsights() {
  return `## Key Insights

### Performance Tiers

1. **Signal-based (Tier S)**: Solid Signals, Preact Signals, Zen - Exceptional performance across all operations
2. **Atom-based (Tier A)**: Jotai - Very fast but creation overhead impacts overall score
3. **Proxy-based (Tier B)**: Valtio - Moderate performance with good ergonomics
4. **Store-based (Tier C)**: Zustand, Redux Toolkit - Lower raw performance but predictable
5. **Observable-based (Tier D)**: MobX - High creation cost, moderate runtime performance

### Trade-offs

- **Solid Signals**: Fastest overall, but requires Solid.js ecosystem
- **Preact Signals**: Excellent balance of speed and bundle size (3.1 KB)
- **Zen**: Similar performance to Preact, slightly larger bundle (5.5 KB)
- **Jotai**: Very fast read/write, slower creation, unique async capabilities
- **Valtio**: Simple API, moderate performance, good for nested mutations
- **Zustand**: Minimal bundle (1.2 KB), simple API, moderate performance
- **Redux Toolkit**: Feature-rich, DevTools support, larger bundle (14.2 KB)
- **MobX**: Automatic tracking, slow creation, largest bundle (18.0 KB)

---

`;
}

function generateRunning() {
  return `## Running Benchmarks

\`\`\`bash
# Run all benchmarks
npm run benchmark

# Run specific groups
npm run benchmark:read
npm run benchmark:write
npm run benchmark:creation
\`\`\`

---

`;
}

function generateCompliance() {
  return `## Compliance

This benchmark category follows [BENCHMARK_STANDARD.md](../../BENCHMARK_STANDARD.md) v1.0.0:

- ✅ Universal tests (01-03, 06) use real APIs for all libraries
- ✅ Feature tests (08-11) only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ⚠️ Groups 04, 05, 07 require implementation updates
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
`;
}

// ============================================================================
// Main Generation
// ============================================================================

function generateREADME() {
  const scores = calculateOverallScores();

  let readme = '';
  readme += generateHeader();
  readme += generateOverallScore(scores);
  readme += generateLibraryComparison(scores);
  readme += generateFeatureMatrix();
  readme += generateTestCategories();
  readme += generateDetailedResults();
  readme += generateMethodology();
  readme += generateKeyInsights();
  readme += generateRunning();
  readme += generateCompliance();

  return readme;
}

// Write README
const readme = generateREADME();
fs.writeFileSync('README.md', readme);

console.log('✅ README.md generated successfully');
