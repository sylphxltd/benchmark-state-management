/**
 * Root README Generator Module
 *
 * Core functionality for generating the root README file:
 * 1. Auto-discovers all benchmark categories
 * 2. Parses category metadata from index.ts files
 * 3. Counts libraries per category
 * 4. Generates comprehensive root README with category table
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// ============================================================================
// Type Definitions
// ============================================================================

interface CategoryInfo {
  name: string;
  displayName: string;
  emoji: string;
  description: string;
  status: 'Active' | 'WIP';
  libraryCount: number;
}

interface CategoryMetadata {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

// ============================================================================
// Helper Functions
// ============================================================================

function getLibraryCount(categoryPath: string): number {
  const metadataPath = join(categoryPath, 'library-metadata.json');

  if (!existsSync(metadataPath)) {
    return 0;
  }

  const metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

  // Count libraries (not _config)
  const librariesKey = Object.keys(metadata).find((key) => key === 'libraries');
  if (librariesKey) {
    return Object.keys(metadata[librariesKey]).length;
  }

  // Fallback to counting non-_config entries
  return Object.keys(metadata).filter((key) => !key.startsWith('_')).length;
}

/**
 * Parse category metadata from index.ts file
 */
function parseCategoryMetadata(indexTsPath: string): CategoryMetadata | null {
  if (!existsSync(indexTsPath)) {
    return null;
  }

  const content = readFileSync(indexTsPath, 'utf-8');

  // Extract createCategory() call
  const categoryMatch = content.match(/createCategory\s*\(\s*\{([^}]+)\}/s);
  if (!categoryMatch) {
    return null;
  }

  const categoryBlock = categoryMatch[1];

  // Extract fields using regex
  const idMatch = categoryBlock.match(/id:\s*['"]([^'"]+)['"]/);
  const nameMatch = categoryBlock.match(/name:\s*['"]([^'"]+)['"]/);
  const descMatch = categoryBlock.match(/description:\s*['"]([^'"]+)['"]/);
  const emojiMatch = categoryBlock.match(/emoji:\s*['"]([^'"]+)['"]/);

  if (!idMatch || !nameMatch) {
    return null;
  }

  return {
    id: idMatch[1],
    name: nameMatch[1],
    description: descMatch ? descMatch[1] : '',
    emoji: emojiMatch ? emojiMatch[1] : '📦',
  };
}

/**
 * Automatically discover all benchmark categories
 */
function discoverCategories(rootDir: string): CategoryInfo[] {
  const benchmarksDir = join(rootDir, 'benchmarks');
  const categories: CategoryInfo[] = [];

  if (!existsSync(benchmarksDir)) {
    console.error('❌ benchmarks/ directory not found');
    return categories;
  }

  const entries = readdirSync(benchmarksDir);

  for (const entry of entries) {
    const categoryPath = join(benchmarksDir, entry);

    // Skip if not a directory
    if (!statSync(categoryPath).isDirectory()) {
      continue;
    }

    // Parse category metadata from index.ts
    const indexTsPath = join(categoryPath, 'index.ts');
    const metadata = parseCategoryMetadata(indexTsPath);

    if (!metadata) {
      console.warn(`⚠️  Skipping ${entry}: Could not parse category metadata`);
      continue;
    }

    categories.push({
      name: metadata.id,
      displayName: metadata.name,
      emoji: metadata.emoji,
      description: metadata.description,
      status: 'Active',
      libraryCount: getLibraryCount(categoryPath),
    });

    console.log(`✓ Discovered: ${metadata.emoji} ${metadata.name} (${getLibraryCount(categoryPath)} libraries)`);
  }

  // Sort by name for consistent ordering
  categories.sort((a, b) => a.name.localeCompare(b.name));

  return categories;
}

// ============================================================================
// Root README Generation
// ============================================================================

export async function generateRootReadme(rootDir: string = process.cwd()): Promise<void> {
  console.log('📝 Generating root README...');

  const categories = discoverCategories(rootDir);

  const readme = `<div align="center">

# 🏆 JavaScript Library Benchmarks

### *Automated performance benchmarks for popular JavaScript libraries*

[![Automated Daily](https://img.shields.io/badge/Automated-Daily-brightgreen?style=for-the-badge)](https://github.com/SylphxAI/benchmark/actions)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Vitest](https://img.shields.io/badge/Vitest-Bench-729B1B?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![MIT License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📊 Benchmark Categories

| Category | Description | Libraries | Status | View Results |
|----------|-------------|-----------|--------|--------------|
${categories
  .map((cat) => {
    const statusBadge =
      cat.status === 'Active'
        ? '![Active](https://img.shields.io/badge/Active-success)'
        : '![WIP](https://img.shields.io/badge/WIP-yellow)';

    return `| **[${cat.emoji} ${cat.displayName}](./benchmarks/${cat.name}/)** | ${cat.description} | ${cat.libraryCount} | ${statusBadge} | **[View →](./benchmarks/${cat.name}/)** |`;
  })
  .join('\n')}

Each category has its own detailed README with benchmark results, methodology, and insights.

---

**[View All State Management Results →](./benchmarks/state-management/)**

---

## 🔬 How It Works

- **Automated**: Runs hourly via GitHub Actions for per-library checks
- **Smart Execution**: Only benchmarks libraries with new versions (75-85% cost reduction)
- **Independent Results**: Each library tested and stored separately
- **Comprehensive**: Multiple real-world test scenarios per category
- **Transparent**: Open source, reproducible locally

> 📖 **[Read the Architecture Documentation →](./ARCHITECTURE.md)**
>
> Learn about the per-library benchmark system, cost optimization strategies, and how to add new libraries.

---

## 🚀 Quick Start

### View Results
Browse to any category folder to see detailed benchmark results and insights.

### Run Locally
\`\`\`bash
# Clone the repo
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Run a specific category
cd benchmarks/state-management
npm install
npm run benchmark

# Generate report
node generate-readme.js
\`\`\`

---

## 🤝 Contributing

### Adding a New Library
1. Update \`package.json\` in the category folder
2. Update \`library-metadata.json\` with GitHub link
3. Add benchmark tests in \`src/benchmark.bench.ts\`
4. Run benchmarks and generate README
5. Submit PR with results

### Adding a New Category
1. Create directory in \`benchmarks/\`
2. Copy structure from existing category
3. Add libraries and write tests
4. Update main README table
5. Submit PR with sample results

---

## 📈 Results Format

Each category README includes:
- **Library Versions**: Current versions with last updated dates
- **Bundle Sizes**: Minified + Gzipped sizes from Bundlephobia
- **Benchmark Results**: Operations/sec, variance, mean time, p99
- **Key Insights**: Performance comparisons and recommendations

---

<div align="center">

**Developed and maintained by [Sylph](https://github.com/SylphxAI)**

### Supporting Tools
[Vitest](https://vitest.dev) • [Bundlephobia](https://bundlephobia.com) • [GitHub Actions](https://github.com/features/actions)

---

### Star this repo if you find it useful! ⭐

[⬆ Back to Top](#-javascript-library-benchmarks)

</div>
`;

  writeFileSync(join(rootDir, 'README.md'), readme);

  console.log('✅ Root README generated successfully!');
}
