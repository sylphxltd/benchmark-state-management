/**
 * Measure bundle sizes for all libraries across all categories
 *
 * This script:
 * 1. Finds the main entry point for each package
 * 2. Measures the file size (minified is assumed from dist)
 * 3. Calculates gzipped size
 * 4. Updates library-metadata.json files with bundle size data
 */

import { readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { gzipSync } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

interface BundleSizeData {
  minified: number;
  gzipped: number;
  measuredAt: string;
}

interface LibraryMetadata {
  libraries: Record<string, {
    name: string;
    npm: string;
    bundleSize?: BundleSizeData;
    [key: string]: any;
  }>;
}

/**
 * Find the main entry point for a package
 */
function findPackageEntry(packageName: string, categoryPath: string): string | null {
  const nodeModulesPath = join(categoryPath, 'node_modules', packageName);

  if (!existsSync(nodeModulesPath)) {
    return null;
  }

  try {
    const packageJson = JSON.parse(
      readFileSync(join(nodeModulesPath, 'package.json'), 'utf-8')
    );

    // Try different entry points in order of preference
    const entryPoints = [
      packageJson.module,    // ES module build (usually minified)
      packageJson.main,      // CommonJS build
      'dist/index.js',       // Common convention
      'index.js',            // Fallback
    ];

    for (const entry of entryPoints) {
      if (!entry) continue;

      const entryPath = join(nodeModulesPath, entry);
      if (existsSync(entryPath) && statSync(entryPath).isFile()) {
        return entryPath;
      }
    }
  } catch (error) {
    console.error(`  ⚠️  Error reading package.json for ${packageName}:`, error);
  }

  return null;
}

/**
 * Measure bundle size for a package
 */
function measureBundleSize(packageName: string, categoryPath: string): BundleSizeData | null {
  const entryPath = findPackageEntry(packageName, categoryPath);

  if (!entryPath) {
    console.log(`  ⚠️  Could not find entry point for ${packageName}`);
    return null;
  }

  try {
    const content = readFileSync(entryPath);
    const minified = content.length;
    const gzipped = gzipSync(content).length;

    console.log(`  ✓ ${packageName}: ${(gzipped / 1024).toFixed(2)} KB (gzipped)`);

    return {
      minified,
      gzipped,
      measuredAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`  ❌ Error measuring ${packageName}:`, error);
    return null;
  }
}

/**
 * Update library metadata with bundle sizes
 */
function updateCategoryBundleSizes(categoryName: string, categoryPath: string) {
  console.log(`\n📦 ${categoryName}`);

  const metadataPath = join(categoryPath, 'library-metadata.json');

  if (!existsSync(metadataPath)) {
    console.log(`  ⚠️  No library-metadata.json found`);
    return;
  }

  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  let updatedCount = 0;

  for (const [key, library] of Object.entries(metadata.libraries)) {
    const bundleSize = measureBundleSize(library.npm, categoryPath);

    if (bundleSize) {
      library.bundleSize = bundleSize;
      updatedCount++;
    }
  }

  // Write updated metadata
  writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + '\n');

  console.log(`  ✅ Updated ${updatedCount} libraries`);
}

/**
 * Main execution
 */
async function main() {
  console.log('📊 Measuring bundle sizes for all categories\n');

  const categories = [
    { name: 'State Management', path: join(rootDir, 'benchmarks/state-management') },
    { name: 'Immutability', path: join(rootDir, 'benchmarks/immutability') },
    { name: 'Router', path: join(rootDir, 'benchmarks/router') },
  ];

  for (const category of categories) {
    if (existsSync(category.path)) {
      updateCategoryBundleSizes(category.name, category.path);
    } else {
      console.log(`\n⚠️  Category not found: ${category.name}`);
    }
  }

  console.log('\n✅ Bundle size measurement complete');
  console.log('\n💡 Tip: Run benchmarks to see bundle sizes in results');
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}

export { measureBundleSize, updateCategoryBundleSizes };
