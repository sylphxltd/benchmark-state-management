#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load configuration files
const categoryConfig = JSON.parse(readFileSync(join(__dirname, 'category-config.json'), 'utf-8'));
const groupsConfig = JSON.parse(readFileSync(join(__dirname, 'groups-config.json'), 'utf-8'));
const libraryMetadata = JSON.parse(readFileSync(join(__dirname, 'library-metadata.json'), 'utf-8'));
const versions = JSON.parse(readFileSync(join(__dirname, 'versions.json'), 'utf-8'));
const features = JSON.parse(readFileSync(join(__dirname, 'features.json'), 'utf-8'));
const overallScores = JSON.parse(readFileSync(join(__dirname, 'overall-scores.json'), 'utf-8'));

// Utility functions
function formatNumber(num) {
  if (!num) return '0';
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${Math.round(num / 1000)}K`;
  return Math.round(num).toString();
}

function getAllBenchmarks(resultsData) {
  if (!resultsData || !resultsData.files) return [];
  const benchmarks = [];
  resultsData.files.forEach(file => {
    file.groups?.forEach(group => {
      group.benchmarks?.forEach(b => benchmarks.push(b));
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

// Auto-discover groups and load results
function loadAllResults() {
  const groupsPath = join(__dirname, 'groups');
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

`;
}

function generateOverallScore() {
  const scores = overallScores.scores.sort((a, b) => b.overall - a.overall);
  const leader = scores[0];

  // Find best value for each metric
  const maxOverall = Math.max(...scores.map(s => s.overall));
  const maxRead = Math.max(...scores.map(s => s.read));
  const maxWrite = Math.max(...scores.map(s => s.write));
  const maxCreation = Math.max(...scores.map(s => s.creation));
  const maxMemory = Math.max(...scores.map(s => s.memory));

  // Find smallest bundle size
  const minSize = Math.min(...scores.map(entry => {
    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === entry.library
    );
    return versions.libraries[libKey]?.size?.gzip || Infinity;
  }));

  let section = `## Overall Performance Score

**Based on Universal Tests**: ${overallScores.includedTests.join(', ')}
**Methodology**: Geometric mean of operations per second across all universal tests
**Last Benchmark Run**: ${new Date(versions.lastBenchmarkRun).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}

| Rank | Library | Version | Bundle (gzip) | Overall Score | Read | Write | Creation | Memory | Last Updated |
|------|---------|---------|---------------|---------------|------|-------|----------|--------|--------------|
`;

  scores.forEach((entry, index) => {
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

    // Add crown to each metric's winner
    const sizeCrown = size === minSize ? '👑 ' : '';
    const overallCrown = entry.overall === maxOverall ? '👑 ' : '';
    const readCrown = entry.read === maxRead ? '👑 ' : '';
    const writeCrown = entry.write === maxWrite ? '👑 ' : '';
    const creationCrown = entry.creation === maxCreation ? '👑 ' : '';
    const memoryCrown = entry.memory === maxMemory ? '👑 ' : '';

    section += `| ${emoji}${rank} | **${entry.library}** | ${version} | ${sizeCrown}${sizeKB} KB | ${overallCrown}${formatNumber(entry.overall)} | ${readCrown}${formatNumber(entry.read)} | ${writeCrown}${formatNumber(entry.write)} | ${creationCrown}${formatNumber(entry.creation)} | ${memoryCrown}${formatNumber(entry.memory)} | ${lastUpdated} |\n`;
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

  // Find smallest bundle size
  const minSize = Math.min(...scores.map(entry => {
    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === entry.library
    );
    return versions.libraries[libKey]?.size?.gzip || Infinity;
  }));

  scores.forEach((entry) => {
    const libKey = Object.keys(libraryMetadata.libraries).find(key =>
      libraryMetadata.libraries[key].displayName === entry.library
    );

    const version = versions.libraries[libKey]?.version || 'N/A';
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

  return section + '\n---\n\n';
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

function generateGroupSummaries(results) {
  let section = `## Group Results Summary

Click on any group to view detailed benchmark results.

`;

  Object.entries(groupsConfig.groups).forEach(([groupKey, groupConfig]) => {
    const resultsData = results[groupKey];
    const num = groupKey.match(/\d+/)[0];
    const testType = groupConfig.type === 'feature' ? ' (Feature Test)' : '';
    const groupPath = `groups/${groupKey}/`;

    section += `### [${num} - ${groupConfig.title}](${groupPath})${testType}\n\n`;
    section += `${groupConfig.description}\n\n`;

    if (groupConfig.libraries) {
      section += `**Participating Libraries**: ${groupConfig.libraries.join(', ')}\n\n`;
    }

    if (groupConfig.status === 'incomplete') {
      section += `⚠️ *Implementation incomplete - excluded from Overall Performance Score*\n\n`;
      section += `**[View Group Details →](${groupPath})**\n\n---\n\n`;
      return;
    }

    if (!resultsData) {
      section += `*No results available*\n\n`;
      section += `**[View Group Details →](${groupPath})**\n\n---\n\n`;
      return;
    }

    // Get all benchmarks and find overall winner
    const allBenches = getAllBenchmarks(resultsData);
    if (allBenches.length > 0) {
      const sorted = allBenches.sort((a, b) => (b.hz || 0) - (a.hz || 0));
      const winner = sorted[0];

      // Extract library name from benchmark name
      const nameParts = winner.name.split(' - ');
      const winnerLib = nameParts[nameParts.length - 1];

      section += `**Top Performer**: 👑 **${winnerLib}** - ${formatNumber(winner.hz)} ops/sec\n\n`;
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

function generateInsights(scores) {
  const sorted = [...scores].sort((a, b) => b.overall - a.overall);

  let section = `## Key Insights

### Performance Tiers

`;

  // Use configured performance tiers
  const tiers = categoryConfig.performanceTiers.map(t => ({ ...t, examples: [] }));

  sorted.forEach(entry => {
    for (const tier of tiers) {
      if (entry.overall >= tier.threshold) {
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
  const scores = overallScores.scores.sort((a, b) => b.overall - a.overall);

  let readme = '';
  readme += generateHeader();
  readme += generateOverallScore();
  readme += generateFeatureMatrix();
  readme += generateTestCategories();
  readme += generateGroupSummaries(results);
  readme += generateMethodology();
  readme += generateInsights(scores);
  readme += generateFooter();

  writeFileSync(join(__dirname, 'README.md'), readme);
  console.log('✅ README.md generated successfully');
}

generateReadme();
