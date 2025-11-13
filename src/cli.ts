#!/usr/bin/env bun
/**
 * Unified CLI for Benchmark Framework
 *
 * All operations should go through this CLI:
 * - bun run benchmark run <category>       # Run benchmarks
 * - bun run benchmark scaffold <category>  # Create new category
 * - bun run benchmark measure-sizes        # Measure bundle sizes
 * - bun run benchmark generate-readme      # Generate READMEs
 * - bun run benchmark check-updates        # Check for version updates
 * - bun run benchmark update-all           # Full update (sizes + READMEs)
 */

import { parseArgs } from 'util';

const commands = {
  run: 'Run benchmarks for a category',
  scaffold: 'Create a new benchmark category with boilerplate',
  'measure-sizes': 'Measure bundle sizes for all categories',
  'generate-readme': 'Generate README for a category or all categories',
  'check-updates': 'Check for library version updates',
  'update-all': 'Measure sizes and regenerate all READMEs',
  help: 'Show this help message',
};

function showHelp() {
  console.log(`
🏆 Benchmark Framework CLI

Usage:
  bun run benchmark <command> [options]

Commands:
  run <category>              Run benchmarks for a category
                              Example: bun run benchmark run state-management

  scaffold <category> [libs]  Create a new benchmark category
                              Example: bun run benchmark scaffold fetch axios ky wretch
                              Options:
                                --name        Category display name (default: auto-generated)
                                --description Category description (default: auto-generated)
                                --emoji       Category emoji (default: 📦)

  measure-sizes [category]    Measure bundle sizes
                              Example: bun run benchmark measure-sizes
                              Example: bun run benchmark measure-sizes state-management

  generate-readme [category]  Generate README files
                              Example: bun run benchmark generate-readme
                              Example: bun run benchmark generate-readme state-management

  check-updates <category>    Check for library version updates
                              Example: bun run benchmark check-updates state-management

  update-all                  Measure sizes + regenerate all READMEs
                              Example: bun run benchmark update-all

  help                        Show this help message

Options:
  --help, -h                  Show help for a command

Examples:
  bun run benchmark run state-management
  bun run benchmark scaffold fetch axios ky wretch ofetch
  bun run benchmark measure-sizes
  bun run benchmark generate-readme state-management
  bun run benchmark update-all
`);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    showHelp();
    process.exit(0);
  }

  const command = args[0];
  const commandArgs = args.slice(1);

  switch (command) {
    case 'run':
      await runBenchmark(commandArgs);
      break;

    case 'scaffold':
      await scaffold(commandArgs);
      break;

    case 'measure-sizes':
      await measureSizes(commandArgs);
      break;

    case 'generate-readme':
      await generateReadme(commandArgs);
      break;

    case 'check-updates':
      await checkUpdates(commandArgs);
      break;

    case 'update-all':
      await updateAll(commandArgs);
      break;

    default:
      console.error(`❌ Unknown command: ${command}`);
      console.log('\nRun "bun run benchmark help" for usage information.');
      process.exit(1);
  }
}

async function runBenchmark(args: string[]) {
  const category = args[0];

  if (!category) {
    console.error('❌ Error: Category required');
    console.log('\nUsage: bun run benchmark run <category>');
    console.log('Example: bun run benchmark run state-management');
    process.exit(1);
  }

  console.log(`🚀 Running benchmarks for: ${category}`);

  // Import and run the category index.ts
  const { join } = await import('path');
  const categoryPath = join(process.cwd(), 'benchmarks', category, 'index.ts');

  try {
    await import(categoryPath);
  } catch (error: any) {
    console.error(`❌ Error running benchmarks:`, error.message);
    process.exit(1);
  }
}

async function scaffold(args: string[]) {
  const categoryId = args[0];
  const libraries: string[] = [];

  // Parse arguments
  let name: string | undefined;
  let description: string | undefined;
  let emoji = '📦';

  let i = 1;
  while (i < args.length) {
    const arg = args[i];

    if (arg === '--name') {
      name = args[i + 1];
      i += 2;
    } else if (arg === '--description') {
      description = args[i + 1];
      i += 2;
    } else if (arg === '--emoji') {
      emoji = args[i + 1];
      i += 2;
    } else if (!arg.startsWith('--')) {
      libraries.push(arg);
      i++;
    } else {
      i++;
    }
  }

  if (!categoryId) {
    console.error('❌ Error: Category ID required');
    console.log('\nUsage: bun run benchmark scaffold <category-id> <library1> <library2> ...');
    console.log('Example: bun run benchmark scaffold fetch axios ky wretch');
    console.log('\nOptions:');
    console.log('  --name <name>              Category display name');
    console.log('  --description <desc>       Category description');
    console.log('  --emoji <emoji>            Category emoji (default: 📦)');
    process.exit(1);
  }

  if (libraries.length === 0) {
    console.error('❌ Error: At least one library required');
    console.log('\nExample: bun run benchmark scaffold fetch axios ky wretch');
    process.exit(1);
  }

  // Auto-generate name and description if not provided
  if (!name) {
    name = categoryId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  if (!description) {
    description = `Benchmark comparing ${libraries.join(', ')} libraries`;
  }

  const { scaffoldCategory } = await import('./core/scaffolder.js');

  try {
    await scaffoldCategory({
      categoryId,
      categoryName: name,
      categoryDescription: description,
      emoji,
      libraries,
    });
  } catch (error: any) {
    console.error(`❌ Error scaffolding category:`, error.message);
    process.exit(1);
  }
}

async function measureSizes(args: string[]) {
  console.log('📏 Measuring bundle sizes...\n');

  const { measureBundleSize, updateCategoryBundleSizes } = await import('./core/bundle-sizes.js');
  const { existsSync } = await import('fs');
  const { join } = await import('path');

  const category = args[0];
  const rootDir = process.cwd();

  if (category) {
    // Measure single category
    const categoryPath = join(rootDir, 'benchmarks', category);
    if (!existsSync(categoryPath)) {
      console.error(`❌ Category not found: ${category}`);
      process.exit(1);
    }

    updateCategoryBundleSizes(category, categoryPath);
  } else {
    // Measure all categories
    const categories = [
      { name: 'State Management', path: join(rootDir, 'benchmarks/state-management') },
      { name: 'Immutability', path: join(rootDir, 'benchmarks/immutability') },
      { name: 'Router', path: join(rootDir, 'benchmarks/router') },
    ];

    for (const cat of categories) {
      if (existsSync(cat.path)) {
        updateCategoryBundleSizes(cat.name, cat.path);
      }
    }
  }

  console.log('\n✅ Bundle size measurement complete');
}

async function generateReadme(args: string[]) {
  console.log('📝 Generating README files...\n');

  const { generateCategoryReadme } = await import('./core/readme-generator.js');
  const { existsSync } = await import('fs');
  const { join } = await import('path');

  const category = args[0];
  const rootDir = process.cwd();

  if (category) {
    // Generate single category README
    const categoryPath = join(rootDir, 'benchmarks', category);
    if (!existsSync(categoryPath)) {
      console.error(`❌ Category not found: ${category}`);
      process.exit(1);
    }

    await generateCategoryReadme(categoryPath);
  } else {
    // Generate all category READMEs
    const categories = ['state-management', 'immutability', 'router'];

    for (const cat of categories) {
      const categoryPath = join(rootDir, 'benchmarks', cat);
      if (existsSync(categoryPath)) {
        await generateCategoryReadme(categoryPath);
      }
    }
  }

  console.log('\n✅ README generation complete');
}

async function checkUpdates(args: string[]) {
  const category = args[0];

  if (!category) {
    console.error('❌ Error: Category required');
    console.log('\nUsage: bun run benchmark check-updates <category>');
    console.log('Example: bun run benchmark check-updates state-management');
    process.exit(1);
  }

  console.log(`🔍 Checking for updates in: ${category}\n`);

  const { checkVersions } = await import('./core/version-checker.js');
  const { join } = await import('path');

  const categoryPath = join(process.cwd(), 'benchmarks', category);

  try {
    await checkVersions(categoryPath);
  } catch (error: any) {
    console.error(`❌ Error checking versions:`, error.message);
    process.exit(1);
  }
}

async function updateAll(args: string[]) {
  console.log('🔄 Running full update...\n');

  // Step 1: Measure bundle sizes
  console.log('Step 1/2: Measuring bundle sizes');
  await measureSizes([]);

  // Step 2: Generate READMEs
  console.log('\nStep 2/2: Generating READMEs');
  await generateReadme([]);

  console.log('\n✅ Full update complete');
}

// Run CLI
main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
