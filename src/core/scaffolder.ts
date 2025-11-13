/**
 * Scaffolder for creating new benchmark categories
 *
 * Automatically generates:
 * - package.json with latest versions
 * - library-metadata.json with npm metadata
 * - index.ts with proper structure
 * - libraries/*.ts implementations
 */

import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface LibraryMetadata {
  name: string;
  version: string;
  description: string;
  homepage?: string;
  repository?: string;
  keywords?: string[];
}

interface ScaffoldOptions {
  categoryId: string;
  categoryName: string;
  categoryDescription: string;
  emoji: string;
  libraries: string[];
}

/**
 * Fetch package metadata from npm registry
 */
async function fetchNpmMetadata(packageName: string): Promise<LibraryMetadata | null> {
  try {
    const { stdout } = await execAsync(`npm view ${packageName} --json`);
    const data = JSON.parse(stdout);

    return {
      name: data.name,
      version: data.version,
      description: data.description || '',
      homepage: data.homepage,
      repository: typeof data.repository === 'string'
        ? data.repository
        : data.repository?.url?.replace('git+', '').replace('.git', ''),
      keywords: data.keywords || [],
    };
  } catch (error) {
    console.error(`⚠️  Failed to fetch metadata for ${packageName}:`, error);
    return null;
  }
}

/**
 * Generate a random color for library
 */
function generateColor(): string {
  const colors = [
    '#5A29E4', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B500',
    '#FF7979', '#78E08F', '#60A3BC', '#EA8685', '#F8EFBA',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Generate package.json content
 */
function generatePackageJson(options: ScaffoldOptions, metadataMap: Map<string, LibraryMetadata>): string {
  const dependencies: Record<string, string> = {};

  for (const lib of options.libraries) {
    const metadata = metadataMap.get(lib);
    if (metadata) {
      dependencies[lib] = `^${metadata.version}`;
    }
  }

  const packageJson = {
    name: `@benchmark/${options.categoryId}`,
    version: '1.0.0',
    private: true,
    description: options.categoryDescription,
    scripts: {
      benchmark: 'bun run index.ts',
    },
    dependencies,
  };

  return JSON.stringify(packageJson, null, 2);
}

/**
 * Generate library-metadata.json content
 */
function generateLibraryMetadata(options: ScaffoldOptions, metadataMap: Map<string, LibraryMetadata>): string {
  const libraries: Record<string, any> = {};

  for (const lib of options.libraries) {
    const metadata = metadataMap.get(lib);
    if (!metadata) continue;

    // Try to extract display name from package name
    const displayName = metadata.name
      .split('/')
      .pop()!
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    libraries[lib] = {
      name: displayName,
      displayName: displayName,
      npm: metadata.name,
      url: metadata.repository || metadata.homepage || `https://www.npmjs.com/package/${metadata.name}`,
      description: metadata.description,
      color: generateColor(),
    };
  }

  return JSON.stringify({ libraries }, null, 2);
}

/**
 * Generate index.ts content
 */
function generateIndexTs(options: ScaffoldOptions): string {
  const libraryImports = options.libraries
    .map(lib => `  await import('./libraries/${lib}');`)
    .join('\n');

  return `/**
 * ${options.categoryName} Benchmark Category
 *
 * ${options.categoryDescription}
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category
// ============================================================================

export const category = createCategory({
  id: '${options.categoryId}',
  name: '${options.categoryName}',
  description: '${options.categoryDescription}',
  emoji: '${options.emoji}',
});

// ============================================================================
// 2. Create Groups
// ============================================================================

export const groups = {
  basic: category.createGroup({
    id: '01-basic',
    title: 'Basic Operations',
    description: 'Basic operations and common use cases',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests
// ============================================================================

export const tests = {
  simpleTest: groups.basic.createTest({
    name: 'Simple Test',
    description: 'A basic test case',
  }),
};

// ============================================================================
// 4. Main Entry Point
// ============================================================================

async function main() {
  console.log('🎯 Running benchmarks for all libraries\\n');

  // Import libraries AFTER category/groups/tests are defined
  // This avoids circular dependency issues
${libraryImports}

  // Print summary
  category.printSummary();

  // Validate
  const validation = category.validate();
  if (!validation.valid) {
    console.error('\\n❌ Validation failed:\\n');
    validation.errors.forEach((error) => console.error(\`  - \${error}\`));
    process.exit(1);
  }

  console.log('✅ Validation passed\\n');

  // Run benchmarks
  const results = await category.run();

  console.log('\\n✅ Benchmarks completed\\n');

  // Save results
  console.log('\\n📝 Saving results...\\n');
  await category.saveResults(results);
  console.log('✅ Results saved\\n');
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\\n❌ Error:', error);
    process.exit(1);
  });
}
`;
}

/**
 * Generate library implementation file
 */
function generateLibraryTs(
  libraryName: string,
  displayName: string,
  githubUrl: string,
  description: string,
  options: ScaffoldOptions
): string {
  return `/**
 * ${displayName} Library Implementation
 */

import { category, tests } from '../index';

const ${libraryName}Lib = category.registerLibrary({
  id: '${libraryName}',
  displayName: '${displayName}',
  packageName: '${libraryName}',
  githubUrl: '${githubUrl}',
  description: '${description}',

  setup: {
    createStore: () => {
      // TODO: Initialize your library here
      return null;
    },
  },
});

${libraryName}Lib.implement(tests.simpleTest, async (ctx) => {
  // TODO: Implement your test logic here
  return true;
});
`;
}

/**
 * Main scaffolding function
 */
export async function scaffoldCategory(options: ScaffoldOptions): Promise<void> {
  const rootDir = process.cwd();
  const categoryPath = join(rootDir, 'benchmarks', options.categoryId);

  // Check if category already exists
  if (existsSync(categoryPath)) {
    throw new Error(`Category already exists: ${options.categoryId}`);
  }

  console.log(`📦 Scaffolding new category: ${options.categoryName}`);
  console.log(`📍 Location: benchmarks/${options.categoryId}\n`);

  // Step 1: Fetch metadata for all libraries
  console.log('🔍 Fetching metadata from npm registry...');
  const metadataMap = new Map<string, LibraryMetadata>();

  for (const lib of options.libraries) {
    process.stdout.write(`   Fetching ${lib}... `);
    const metadata = await fetchNpmMetadata(lib);
    if (metadata) {
      metadataMap.set(lib, metadata);
      console.log(`✅ v${metadata.version}`);
    } else {
      console.log('❌ Failed');
    }
  }

  console.log();

  // Step 2: Create directory structure
  console.log('📁 Creating directory structure...');
  await mkdir(categoryPath, { recursive: true });
  await mkdir(join(categoryPath, 'libraries'), { recursive: true });
  console.log('   ✅ Created directories\n');

  // Step 3: Generate files
  console.log('📝 Generating files...');

  // package.json
  const packageJson = generatePackageJson(options, metadataMap);
  await writeFile(join(categoryPath, 'package.json'), packageJson);
  console.log('   ✅ package.json');

  // library-metadata.json
  const libraryMetadata = generateLibraryMetadata(options, metadataMap);
  await writeFile(join(categoryPath, 'library-metadata.json'), libraryMetadata);
  console.log('   ✅ library-metadata.json');

  // index.ts
  const indexTs = generateIndexTs(options);
  await writeFile(join(categoryPath, 'index.ts'), indexTs);
  console.log('   ✅ index.ts');

  // Library implementations
  for (const lib of options.libraries) {
    const metadata = metadataMap.get(lib);
    if (!metadata) continue;

    const displayName = metadata.name
      .split('/')
      .pop()!
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const githubUrl = metadata.repository || metadata.homepage || `https://www.npmjs.com/package/${metadata.name}`;
    const libraryTs = generateLibraryTs(lib, displayName, githubUrl, metadata.description, options);
    await writeFile(join(categoryPath, 'libraries', `${lib}.ts`), libraryTs);
    console.log(`   ✅ libraries/${lib}.ts`);
  }

  console.log();

  // Step 4: Install dependencies
  console.log('📦 Installing dependencies...');
  try {
    const { stdout } = await execAsync('bun install', { cwd: categoryPath });
    console.log('   ✅ Dependencies installed\n');
  } catch (error) {
    console.error('   ⚠️  Failed to install dependencies. Run manually:\n');
    console.error(`   cd benchmarks/${options.categoryId} && bun install\n`);
  }

  // Step 5: Success message
  console.log('✅ Scaffolding complete!\n');
  console.log('📋 Next steps:');
  console.log(`   1. cd benchmarks/${options.categoryId}`);
  console.log('   2. Review and update the generated files');
  console.log('   3. Implement test logic in libraries/*.ts');
  console.log('   4. Run benchmarks: bun run benchmark\n');
  console.log('💡 Tips:');
  console.log('   - Tests are defined in index.ts');
  console.log('   - Library implementations are in libraries/*.ts');
  console.log('   - Use dynamic imports to avoid circular dependencies');
  console.log('   - See PAIN_POINTS.md for common pitfalls\n');
}
