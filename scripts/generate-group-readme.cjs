#!/usr/bin/env node
/**
 * Generate README for specific test group
 */

const { readFileSync, writeFileSync, existsSync } = require('fs');
const { join, dirname } = require('path');

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

function calculateGroupOverall(resultsData, libraryMetadata) {
  // Get all benchmarks
  const allBenches = getAllBenchmarks(resultsData);
  if (allBenches.length === 0) return [];

  // Get valid library display names
  const validLibraries = new Set(
    Object.values(libraryMetadata.libraries || {}).map(lib => lib.displayName)
  );

  // Group by library (extract from benchmark name)
  const libraryScores = {};

  allBenches.forEach(bench => {
    const nameParts = bench.name.split(' - ');
    const libName = nameParts[nameParts.length - 1];

    // Only include valid libraries
    if (!validLibraries.has(libName)) return;

    if (!libraryScores[libName]) {
      libraryScores[libName] = [];
    }
    libraryScores[libName].push(bench.hz || 0);
  });

  // Calculate geometric mean for each library
  const scores = Object.entries(libraryScores).map(([library, values]) => {
    // Filter out zeros
    const validValues = values.filter(v => v > 0);
    if (validValues.length === 0) return { library, overall: 0 };

    // Geometric mean
    const product = validValues.reduce((acc, val) => acc * val, 1);
    const overall = Math.pow(product, 1 / validValues.length);

    // Also get max (for fastest in this group)
    const max = Math.max(...validValues);

    return { library, overall, max };
  });

  return scores.sort((a, b) => b.overall - a.overall);
}

function generateGroupReadme(groupPath, groupName, categoryPath) {
  const resultsPath = join(groupPath, 'results.json');

  if (!existsSync(resultsPath)) {
    console.error(`❌ No results found for group: ${groupName}`);
    return;
  }

  const results = JSON.parse(readFileSync(resultsPath, 'utf-8'));

  // Load category configs
  const versionsPath = join(categoryPath, 'versions.json');
  const metadataPath = join(categoryPath, 'library-metadata.json');
  const groupsConfigPath = join(categoryPath, 'groups-config.json');

  let versions = {};
  let libraryMetadata = { libraries: {} };
  let groupsConfig = { groups: {} };

  if (existsSync(versionsPath)) {
    versions = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  }
  if (existsSync(metadataPath)) {
    libraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  }
  if (existsSync(groupsConfigPath)) {
    groupsConfig = JSON.parse(readFileSync(groupsConfigPath, 'utf-8'));
  }

  // Get group config
  const groupKey = Object.keys(groupsConfig.groups || {}).find(key => key.endsWith(groupName));
  const groupConfig = groupKey ? groupsConfig.groups[groupKey] : null;
  const groupTitle = groupConfig ? groupConfig.title : groupName.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
  const groupDescription = groupConfig ? groupConfig.description : `Performance benchmarks for ${groupName} operations`;

  const readmePath = join(groupPath, 'README.md');

  let readme = `# ${groupTitle}\n\n`;
  readme += `${groupDescription}.\n\n`;

  // Generate group overall score
  const scores = calculateGroupOverall(results, libraryMetadata);

  if (scores.length > 0) {
    readme += `## Group Overall Performance\n\n`;
    readme += `**Methodology**: Geometric mean across all tests in this group\n`;

    if (versions.lastBenchmarkRun) {
      readme += `**Last Benchmark Run**: ${new Date(versions.lastBenchmarkRun).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}\n`;
    }

    readme += `\n| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |\n`;
    readme += `|------|---------|---------|---------------|-------------|------------------|--------------|\n`;

    const maxOverall = Math.max(...scores.map(s => s.overall));
    const minSize = Math.min(...scores.map(entry => {
      const libKey = Object.keys(libraryMetadata.libraries).find(key =>
        libraryMetadata.libraries[key].displayName === entry.library
      );
      return versions.libraries?.[libKey]?.size?.gzip || Infinity;
    }));

    scores.forEach((entry, index) => {
      const rank = index + 1;
      const emoji = rank === 1 ? '🥇 ' : rank === 2 ? '🥈 ' : rank === 3 ? '🥉 ' : ' ';

      const libKey = Object.keys(libraryMetadata.libraries).find(key =>
        libraryMetadata.libraries[key].displayName === entry.library
      );

      const version = versions.libraries?.[libKey]?.current || 'N/A';
      const size = versions.libraries?.[libKey]?.size?.gzip || 0;
      const sizeKB = (size / 1024).toFixed(1);
      const lastUpdated = versions.libraries?.[libKey]?.lastUpdated
        ? new Date(versions.libraries[libKey].lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        : 'N/A';

      const sizeCrown = size === minSize ? '👑 ' : '';
      const overallCrown = entry.overall === maxOverall ? '👑 ' : '';

      readme += `| ${emoji}${rank} | **${entry.library}** | ${version} | ${sizeCrown}${sizeKB} KB | ${overallCrown}${formatNumber(entry.overall)} | ${formatNumber(entry.max)} | ${lastUpdated} |\n`;
    });

    readme += `\n`;
  }

  // Add link back to category README
  readme += `---\n\n`;
  readme += `## 🔗 Navigation\n\n`;
  readme += `- [← Back to State Management Overview](../../README.md)\n`;
  readme += `- [Overall Performance Score](../../README.md#overall-performance-score)\n\n`;

  // Add how to run section
  readme += `## 🚀 Running This Group\n\n`;
  readme += `\`\`\`bash\n`;
  readme += `# Run this group\n`;
  readme += `npm run benchmark:${groupName.replace(/^\d+-/, '')}\n\n`;
  readme += `# Or run specific test file\n`;
  readme += `npx vitest bench groups/${groupName}/*.bench.ts\n`;
  readme += `\`\`\`\n\n`;

  readme += `---\n`;
  readme += `*Last generated: ${new Date().toISOString()}*\n`;

  writeFileSync(readmePath, readme);
  console.log(`✅ Generated README for ${groupName}: ${readmePath}`);
}

// Main execution
const groupName = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!groupName) {
  console.error('Usage: node generate-group-readme.cjs <group-name> [category-path]');
  process.exit(1);
}

const groupPath = join(categoryPath, 'groups', groupName);

if (!existsSync(groupPath)) {
  console.error(`❌ Group directory not found: ${groupPath}`);
  process.exit(1);
}

generateGroupReadme(groupPath, groupName, categoryPath);
