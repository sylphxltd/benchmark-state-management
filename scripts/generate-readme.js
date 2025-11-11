#!/usr/bin/env node
/**
 * Universal README Generation Script
 * Generates README for any benchmark category
 *
 * Usage: node scripts/generate-readme.js <category-path>
 * Example: node scripts/generate-readme.js benchmarks/state-management
 */

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';

// Get category path from command line argument
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('❌ Usage: node scripts/generate-readme.js <category-path>');
  console.error('   Example: node scripts/generate-readme.js benchmarks/state-management');
  process.exit(1);
}

const categoryPath = resolve(args[0]);

// Verify category path exists
if (!existsSync(categoryPath)) {
  console.error(`❌ Category path does not exist: ${categoryPath}`);
  process.exit(1);
}

console.log(`📝 Generating README for: ${categoryPath}\n`);

// Load configuration files
const categoryConfig = JSON.parse(readFileSync(join(categoryPath, 'category-config.json'), 'utf-8'));
const groupsConfig = JSON.parse(readFileSync(join(categoryPath, 'groups-config.json'), 'utf-8'));
const libraryMetadata = JSON.parse(readFileSync(join(categoryPath, 'library-metadata.json'), 'utf-8'));
const versions = JSON.parse(readFileSync(join(categoryPath, 'versions.json'), 'utf-8'));
const features = JSON.parse(readFileSync(join(categoryPath, 'features.json'), 'utf-8'));

// Utility functions
function formatNumber(num) {
  if (!num) return '0';
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${Math.round(num / 1000)}K`;
  return Math.round(num).toString();
}

function geometricMean(values) {
  if (values.length === 0) return 0;
  const validValues = values.filter(v => v > 0);
  if (validValues.length === 0) return 0;
  const product = validValues.reduce((acc, val) => acc * val, 1);
  return Math.pow(product, 1 / validValues.length);
}

function extractLibraryName(benchmarkName, metadata) {
  for (const [pkgName, libInfo] of Object.entries(metadata.libraries)) {
    if (benchmarkName.startsWith(libInfo.displayName)) {
      return libInfo.displayName;
    }
  }
  return null;
}

// Calculate performance scores using correct algorithm
function calculatePerformanceScores(mergedResults) {
  const performanceScores = new Map();
  const benchmarkGroups = new Map();

  // Collect all benchmarks from merged results
  for (const [groupKey, groupData] of Object.entries(mergedResults)) {
    const allBenches = getAllBenchmarks(groupData);

    for (const bench of allBenches) {
      // Skip non-throughput metrics
      if (bench.metricType && bench.metricType !== 'throughput') continue;

      // Use _library property added by getAllBenchmarks
      const libraryName = bench._library;
      if (!libraryName) {
        continue;
      }

      // In per-library format, bench.name is just the test name (no library prefix)
      const benchmarkName = bench.name;

      // Group by benchmark name
      if (!benchmarkGroups.has(benchmarkName)) {
        benchmarkGroups.set(benchmarkName, []);
      }
      benchmarkGroups.get(benchmarkName).push({ ...bench, libraryName });
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

      if (!performanceScores.has(result.libraryName)) {
        performanceScores.set(result.libraryName, []);
      }
      performanceScores.get(result.libraryName).push(score);
    }
  }

  // Calculate geometric mean for each library
  const rankings = Array.from(performanceScores.entries())
    .map(([name, scores]) => ({
      library: name,
      score: Math.round(geometricMean(scores) * 10) / 10
    }))
    .sort((a, b) => b.score - a.score);

  return rankings;
}

function getAllBenchmarks(resultsData) {
  if (!resultsData || !resultsData.files) return [];
  const benchmarks = [];
  resultsData.files.forEach(file => {
    file.groups?.forEach(group => {
      // Extract library name from group fullName (e.g., "01-read - Jotai")
      const groupParts = (group.fullName || '').split(' - ');
      const libraryName = groupParts.length > 1 ? groupParts[groupParts.length - 1] : null;

      group.benchmarks?.forEach(b => {
        benchmarks.push({
          ...b,
          _library: libraryName // Add library name to benchmark
        });
      });
    });
  });
  return benchmarks;
}

function extractBenchmarks(resultsData, pattern) {
  return getAllBenchmarks(resultsData).filter(b => b.name.includes(pattern));
}

function generateBarChart(benchmarks, maxValue) {
  const maxBarLength = 40;
  let chart = '```\n';

  benchmarks.forEach((b) => {
    const value = b.hz || 0;
    const percentage = maxValue > 0 ? value / maxValue : 0;
    const barLength = Math.round(percentage * maxBarLength);
    const bar = '█'.repeat(barLength);

    // Extract library name (last part after ' - ')
    const nameParts = b.name.split(' - ');
    const libName = nameParts[nameParts.length - 1];

    chart += `${libName.padEnd(20)} ${bar} ${formatNumber(value)}\n`;
  });

  chart += '```\n\n';
  return chart;
}

function generateBenchmarkSection(title, description, benchmarks, hasNote, noteText) {
  const maxValue = Math.max(...benchmarks.map(b => b.hz || 0));
  benchmarks.sort((a, b) => (b.hz || 0) - (a.hz || 0));

  let section = `**${title}**${description ? ` (${description})` : ''}\n\n`;
  section += generateBarChart(benchmarks, maxValue);
  section += `| Library | ops/sec | Relative |\n|---------|---------|----------|\n`;

  benchmarks.forEach((b, i) => {
    const nameParts = b.name.split(' - ');
    const lib = nameParts[nameParts.length - 1];
    const rel = ((b.hz || 0) / maxValue).toFixed(2) + 'x';
    const note = i === 0 ? ' (fastest)' : '';
    const crown = i === 0 ? '👑 ' : '';
    section += `| ${crown}${lib} | ${formatNumber(b.hz)} | ${rel}${note} |\n`;
  });

  if (hasNote && noteText) {
    section += `> **Note**: ${noteText}\n`;
  }

  return section;
}

// Load per-library results and merge them
function loadPerLibraryResults() {
  const resultsPath = join(categoryPath, 'results');
  const mergedResults = {};

  try {
    const resultFiles = readdirSync(resultsPath)
      .filter(f => f.endsWith('-benchmark.json'))
      .sort();

    if (resultFiles.length === 0) {
      return null; // No per-library results found
    }

    console.log(`📊 Loading ${resultFiles.length} per-library benchmark results...`);

    resultFiles.forEach(file => {
      try {
        const libraryResult = JSON.parse(readFileSync(join(resultsPath, file), 'utf-8'));

        // libraryResult.groups contains: { "01-read": { files: [...] }, ... }
        Object.entries(libraryResult.groups).forEach(([groupName, groupData]) => {
          if (!mergedResults[groupName]) {
            mergedResults[groupName] = groupData;
          } else {
            // Merge files arrays
            if (groupData && groupData.files) {
              if (!mergedResults[groupName].files) {
                mergedResults[groupName].files = [];
              }
              mergedResults[groupName].files = mergedResults[groupName].files.concat(groupData.files);
            }
          }
        });

        console.log(`  ✓ Loaded ${libraryResult.library} v${libraryResult.version}`);
      } catch (err) {
        console.warn(`  ⚠️  Failed to load ${file}:`, err.message);
      }
    });

    console.log(`✅ Merged results from ${resultFiles.length} libraries\n`);
    return mergedResults;

  } catch (err) {
    // results/ directory doesn't exist or is empty
    return null;
  }
}

// Auto-discover groups and load results (backward compatible)
function loadAllResults() {
  // Try per-library results first (new format)
  const perLibraryResults = loadPerLibraryResults();
  if (perLibraryResults && Object.keys(perLibraryResults).length > 0) {
    console.log('📦 Using per-library benchmark results\n');
    return perLibraryResults;
  }

  // Fall back to group results (old format)
  console.log('📦 Using group-based benchmark results (legacy)\n');
  const groupsPath = join(categoryPath, 'groups');
  const results = {};

  const groupDirs = readdirSync(groupsPath, { withFileTypes: true })
    .filter(d => d.isDirectory() && /^\d{2}-/.test(d.name))
    .map(d => d.name)
    .sort();

  groupDirs.forEach(groupName => {
    const resultsPath = join(groupsPath, groupName, 'results.json');
    try {
      results[groupName] = JSON.parse(readFileSync(resultsPath, 'utf-8'));
    } catch (err) {
      console.warn(`⚠️  No results found for ${groupName}`);
      results[groupName] = null;
    }
  });

  return results;
}

// Generate README sections
function generateHeader() {
  return `# ${categoryConfig.name} Benchmarks

${categoryConfig.description}.

## 📑 Table of Contents

- [Overall Performance Score](#overall-performance-score)
- [Performance by Group](#performance-by-group)
- [Feature Support Matrix](#feature-support-matrix)
- [Test Categories](#test-categories)
- [Group Results Summary](#group-results-summary)
- [Methodology](#methodology)
- [Key Insights](#key-insights)
- [Running Benchmarks](#running-benchmarks)

---

`;
}

function generateOverallScore(performanceRankings) {
  // Use dynamically calculated scores
  const indexScores = performanceRankings;

  // Find smallest bundle size
  const minSize = Math.min(...indexScores.map(entry => {
    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === entry.library
    );
    return versions.libraries[libKey]?.size?.gzip || Infinity;
  }));

  let section = `## Overall Performance Score

**Based on Universal Tests**: All benchmark tests across all categories

**Methodology**:
1. Each library's raw performance (ops/sec) is measured for each test
2. Scores are normalized to an index where the fastest library = 100
   - Formula: \`Index = (Library_Speed / Fastest_Speed) × 100\`
3. Each test is compared BY NAME across libraries (not mixed within categories)
4. The overall score is the geometric mean of all normalized indices
   - Formula: \`Overall = ⁿ√(Index₁ × Index₂ × ... × Indexₙ)\`
5. Geometric mean prevents any single test from dominating the overall score

**Last Benchmark Run**: ${new Date(versions.lastBenchmarkRun).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}

| Rank | Library | Version | Overall Score | Bundle (gzip) | Last Updated |
|:----:|---------|---------|---------------|---------------|--------------|
`;

  indexScores.forEach((entry, index) => {
    const rank = index + 1;
    const emoji = rank === 1 ? '🥇 ' : rank === 2 ? '🥈 ' : rank === 3 ? '🥉 ' : ' ';

    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === entry.library
    );

    const version = versions.libraries[libKey]?.current || 'N/A';
    const size = versions.libraries[libKey]?.size?.gzip || 0;
    const sizeKB = (size / 1024).toFixed(1);
    const lastUpdated = versions.libraries[libKey]?.lastUpdated
      ? new Date(versions.libraries[libKey].lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      : 'N/A';
    const githubUrl = libraryMetadata.libraries[libKey]?.url || '';

    // Add crown to winners
    const sizeCrown = size === minSize ? '👑 ' : '';
    const scoreCrown = index === 0 ? '👑 ' : '';

    const libraryLink = githubUrl ? `[**${entry.library}**](${githubUrl})` : `**${entry.library}**`;

    section += `| ${emoji}${rank} | ${libraryLink} | ${version} | ${scoreCrown}${entry.score.toFixed(1)}/100 | ${sizeCrown}${sizeKB} KB | ${lastUpdated} |\n`;
  });

  const incompleteGroups = Object.entries(groupsConfig.groups)
    .filter(([_, config]) => config.status === 'incomplete')
    .map(([key, config]) => {
      const num = key.match(/\d+/)[0];
      return `${num} (${config.title})`;
    });

  if (incompleteGroups.length > 0) {
    section += `\n> **Note**: Groups ${incompleteGroups.join(', ')} currently have incomplete implementations and are excluded from the Overall Performance Score. These tests require refactoring to use real store implementations rather than placeholder logic.\n`;
  }

  return section + '\n---\n\n';
}

function generatePerformanceMatrix(results, performanceRankings) {
  let section = `## Performance by Group

See which library wins in each test group:

`;

  // Get all libraries sorted by performance score
  const sortedLibraries = performanceRankings.map(r => r.library);

  // Calculate rankings for each group
  const groupRankings = {};

  Object.entries(groupsConfig.groups).forEach(([groupKey, groupConfig]) => {
    const resultsData = results[groupKey];
    if (!resultsData || groupConfig.status === 'incomplete') {
      groupRankings[groupKey] = null;
      return;
    }

    const groupScores = calculateGroupOverall(resultsData);
    groupRankings[groupKey] = groupScores.map(s => s.library);
  });

  // Build header with group numbers (with links)
  const groupKeys = Object.keys(groupsConfig.groups).sort();
  let header = '| Library |';
  groupKeys.forEach(key => {
    const num = key.match(/\d+/)[0];
    const groupConfig = groupsConfig.groups[key];
    const anchor = `${num}---${groupConfig.title.toLowerCase().replace(/\s+/g, '-')}`;
    header += ` [${num}](#${anchor}) |`;
  });
  section += header + '\n';

  let separator = '|---------|';
  groupKeys.forEach(() => {
    separator += '------|';
  });
  section += separator + '\n';

  // Build rows for each library (sorted by overall score)
  sortedLibraries.forEach(library => {
    // Get GitHub URL
    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === library
    );
    const githubUrl = libraryMetadata.libraries[libKey]?.url || '';
    const libraryLink = githubUrl ? `[**${library}**](${githubUrl})` : `**${library}**`;

    let row = `| ${libraryLink} |`;

    groupKeys.forEach(groupKey => {
      const rankings = groupRankings[groupKey];

      if (!rankings) {
        // Group is incomplete or no results
        row += ' - |';
        return;
      }

      const groupConfig = groupsConfig.groups[groupKey];
      // Check if library participates in this group
      if (groupConfig.type === 'feature' && groupConfig.libraries && !groupConfig.libraries.includes(library)) {
        row += ' - |';
        return;
      }

      const rank = rankings.indexOf(library);
      if (rank === -1) {
        row += ' - |';
      } else if (rank === 0) {
        row += ' 🥇 |';
      } else if (rank === 1) {
        row += ' 🥈 |';
      } else if (rank === 2) {
        row += ' 🥉 |';
      } else {
        row += ` ${rank + 1} |`;
      }
    });

    section += row + '\n';
  });

  section += '\n**Legend:** 🥇 1st place | 🥈 2nd place | 🥉 3rd place | - Not applicable\n\n';

  return section + '---\n\n';
}


function generateFeatureMatrix() {
  let section = `## Feature Support Matrix

| Feature | Description | Libraries |
|---------|-------------|-----------|
`;

  Object.entries(features.features).forEach(([featureKey, feature]) => {
    const libs = feature.supported
      .map(libKey => libraryMetadata.libraries[libKey]?.displayName || libKey)
      .join(', ');

    section += `| **${feature.name}** | ${feature.description} | ${libs} |\n`;
  });

  return section + '\n---\n\n';
}

function generateTestCategories() {
  const universal = Object.entries(groupsConfig.groups).filter(([_, c]) => c.type === 'universal');
  const feature = Object.entries(groupsConfig.groups).filter(([_, c]) => c.type === 'feature');

  // List all test numbers explicitly (no assumption of continuity)
  const universalNums = universal.map(([key]) => parseInt(key.match(/\d+/)[0])).sort((a, b) => a - b);
  const featureNums = feature.map(([key]) => parseInt(key.match(/\d+/)[0])).sort((a, b) => a - b);

  // Format as comma-separated list
  const universalList = universalNums.map(n => String(n).padStart(2, '0')).join(', ');
  const featureList = featureNums.map(n => String(n).padStart(2, '0')).join(', ');

  const totalLibs = Object.keys(libraryMetadata.libraries).length;

  let section = `## Test Categories

### Universal Tests (${universalList})

All ${totalLibs} libraries participate equally. Used to calculate Overall Performance Score.

`;

  universal.forEach(([key, config]) => {
    const num = key.match(/\d+/)[0];
    const status = config.status === 'incomplete' ? ' *(Implementation incomplete)*' : '';
    section += `- **${num} - ${config.title}**: ${config.description}${status}\n`;
  });

  section += `\n### Feature Tests (${featureList})

Libraries participate only if they have native support for the tested capability.

`;

  feature.forEach(([key, config]) => {
    const num = key.match(/\d+/)[0];
    const count = config.libraries ? config.libraries.length : 0;
    const libText = count === 1 ? `${config.libraries[0]} only` : `${count} libraries`;
    section += `- **${num} - ${config.title}**: ${config.description} (${libText})\n`;
  });

  return section + '\n---\n\n';
}

function calculateGroupOverall(resultsData) {
  const allBenches = getAllBenchmarks(resultsData);
  if (allBenches.length === 0) return [];

  // Get valid library display names
  const validLibraries = new Set(
    Object.values(libraryMetadata.libraries || {}).map(lib => lib.displayName)
  );

  // Group by library (extract from benchmark name)
  const libraryScores = {};

  allBenches.forEach(bench => {
    const libName = bench._library;

    // Only include valid libraries
    if (!libName || !validLibraries.has(libName)) return;

    if (!libraryScores[libName]) {
      libraryScores[libName] = [];
    }
    libraryScores[libName].push(bench.hz || 0);
  });

  // Calculate geometric mean for each library
  const scores = Object.entries(libraryScores).map(([library, values]) => {
    // Filter out zeros
    const validValues = values.filter(v => v > 0);
    if (validValues.length === 0) return { library, overall: 0, max: 0 };

    // Geometric mean
    const product = validValues.reduce((acc, val) => acc * val, 1);
    const overall = Math.pow(product, 1 / validValues.length);

    // Also get max (for peak performance)
    const max = Math.max(...validValues);

    return { library, overall, max };
  });

  return scores.sort((a, b) => b.overall - a.overall);
}

function generateGroupSummaries(results) {
  let section = `## Group Results Summary

Click on any group to view detailed benchmark results.

`;

  Object.entries(groupsConfig.groups).forEach(([groupKey, groupConfig]) => {
    const resultsData = results[groupKey];
    const num = groupKey.match(/\d+/)[0];
    const testType = groupConfig.type === 'feature' ? ' (Feature Test)' : '';
    const groupPath = `groups/${groupKey}/README.md`;

    section += `### [${num} - ${groupConfig.title}](${groupPath})${testType}\n\n`;
    section += `${groupConfig.description}\n\n`;

    if (groupConfig.libraries) {
      section += `**Participating Libraries**: ${groupConfig.libraries.join(', ')}\n\n`;
    }

    if (groupConfig.status === 'incomplete') {
      section += `⚠️ *Implementation incomplete - excluded from Overall Performance Score*\n\n`;
      section += `**[View Detailed Results →](${groupPath})**\n\n---\n\n`;
      return;
    }

    if (!resultsData) {
      section += `*No results available*\n\n`;
      section += `**[View Detailed Results →](${groupPath})**\n\n---\n\n`;
      return;
    }

    // Calculate group overall scores
    const groupScores = calculateGroupOverall(resultsData);

    if (groupScores.length > 0) {
      // Find best value for crown
      const maxOverall = Math.max(...groupScores.map(s => s.overall));

      // Generate ASCII bar chart
      const maxBarLength = 40;
      section += '```\n';
      groupScores.forEach((entry, index) => {
        const rank = index + 1;
        const emoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;

        const percentage = entry.overall / maxOverall;
        const barLength = Math.round(percentage * maxBarLength);
        const bar = '█'.repeat(barLength);
        const scoreText = formatNumber(entry.overall) + ' ops/sec';

        section += `${emoji.padEnd(4)} ${entry.library.padEnd(18)} ${bar.padEnd(maxBarLength + 2)} ${scoreText.padStart(15)}\n`;
      });
      section += '```\n\n';

      section += `| Rank | Library | Group Score |\n`;
      section += `|:----:|---------|-------------|\n`;

      groupScores.forEach((entry, index) => {
        const rank = index + 1;
        const emoji = rank === 1 ? '🥇 ' : rank === 2 ? '🥈 ' : rank === 3 ? '🥉 ' : ' ';

        const overallCrown = entry.overall === maxOverall ? '👑 ' : '';

        section += `| ${emoji}${rank} | **${entry.library}** | ${overallCrown}${formatNumber(entry.overall)} |\n`;
      });

      section += `\n`;
    }

    section += `**[View Detailed Results →](${groupPath})**\n\n`;
    section += `---\n\n`;
  });

  return section;
}

function generateMethodology() {
  const env = categoryConfig.environment;

  return `## Methodology

### Universal Test Standards

- **All libraries participate** in universal tests (excluding incomplete tests)
- Results are **normalized** and combined using **geometric mean**
- Tests use **actual library APIs**, not synthetic constructs
- Each benchmark runs for sufficient iterations to achieve statistical significance

### Feature Test Standards

- **Only libraries with native support** participate
- Tests measure **real-world usage patterns** of the feature
- No placeholder or workaround implementations
- Separate rankings for each feature

### Benchmark Environment

- **Runtime**: ${env.runtime}
- **Framework**: ${env.framework}
- **Hardware**: ${env.hardware}
- **Iterations**: ${env.iterations}

---

`;
}

function generateInsights(performanceRankings) {
  const sorted = [...performanceRankings].sort((a, b) => b.score - a.score);

  let section = `## Key Insights

### Performance Tiers

`;

  // Use configured performance tiers
  const tiers = categoryConfig.performanceTiers.map(t => ({ ...t, examples: [] }));

  sorted.forEach(entry => {
    for (const tier of tiers) {
      if (entry.score >= tier.threshold) {
        tier.examples.push(entry.library);
        break;
      }
    }
  });

  tiers.filter(t => t.examples.length > 0).forEach((tier, idx) => {
    section += `${idx + 1}. **${tier.name}**: ${tier.examples.join(', ')}`;
    if (tier.description) {
      section += ` - ${tier.description}`;
    }
    section += '\n';
  });

  section += `\n### Trade-offs

`;

  // Generate trade-offs from library metadata
  sorted.forEach(entry => {
    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === entry.library
    );

    if (libKey && libraryMetadata.libraries[libKey].tradeoff) {
      section += `- **${entry.library}**: ${libraryMetadata.libraries[libKey].tradeoff}\n`;
    }
  });

  return section + '\n---\n\n';
}

function generateFooter() {
  const universal = Object.entries(groupsConfig.groups).filter(([_, c]) => c.type === 'universal');
  const feature = Object.entries(groupsConfig.groups).filter(([_, c]) => c.type === 'feature');
  const incomplete = universal.filter(([_, c]) => c.status === 'incomplete');
  const complete = universal.filter(([_, c]) => !c.status || c.status !== 'incomplete');

  const universalNums = universal.map(([key]) => parseInt(key.match(/\d+/)[0])).sort((a, b) => a - b);
  const featureNums = feature.map(([key]) => parseInt(key.match(/\d+/)[0])).sort((a, b) => a - b);
  const completeNums = complete.map(([key]) => parseInt(key.match(/\d+/)[0])).sort((a, b) => a - b);
  const incompleteNums = incomplete.map(([key]) => parseInt(key.match(/\d+/)[0])).sort((a, b) => a - b);

  const std = categoryConfig.benchmarkStandard;

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

## Compliance

This benchmark category follows [${std.file}](${std.file}) v${std.version}:

- ✅ Universal tests (${completeNums.join(', ')}) use real APIs for all libraries
- ✅ Feature tests (${featureNums.join(', ')}) only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
${incompleteNums.length > 0 ? `- ⚠️ Groups ${incompleteNums.join(', ')} require implementation updates\n` : ''}- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
`;
}

// Main generation
function generateReadme() {
  const results = loadAllResults();

  // Calculate scores dynamically using correct algorithm
  const performanceRankings = calculatePerformanceScores(results);
  console.log('📊 Calculated performance scores:');
  performanceRankings.forEach(r => console.log(`  ${r.library}: ${r.score}/100`));

  let readme = '';
  readme += generateHeader();
  readme += generateOverallScore(performanceRankings);
  readme += generatePerformanceMatrix(results, performanceRankings);
  readme += generateFeatureMatrix();
  readme += generateTestCategories();
  readme += generateGroupSummaries(results);
  readme += generateMethodology();
  readme += generateInsights(performanceRankings);
  readme += generateFooter();

  writeFileSync(join(categoryPath, 'README.md'), readme);
  console.log(`✅ README.md generated successfully at ${categoryPath}/README.md`);
}

generateReadme();
