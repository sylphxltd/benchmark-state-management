/**
 * Version Checker Module
 *
 * Core functionality for checking library version updates:
 * 1. Tracks versions from package.json
 * 2. Checks npm for latest versions
 * 3. Detects test file changes via content hashing
 * 4. Fetches bundle sizes from Bundlephobia
 * 5. Outputs GitHub Actions metadata
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { createHash } from 'crypto';
import { join } from 'path';

interface VersionTracker {
  lastChecked: string;
  lastBenchmarkRun: string;
  testFilesHash: string;
  libraries: {
    [name: string]: {
      current: string;
      latest: string;
      lastUpdated: string;
      size?: {
        gzip: number;
        minified: number;
        lastChecked: string;
      };
    };
  };
}

interface BundlephobiaResponse {
  size: number;
  gzip: number;
}

/**
 * Fetch package size from Bundlephobia API
 */
async function fetchPackageSize(packageName: string, version: string): Promise<{ gzip: number; minified: number } | null> {
  try {
    const url = `https://bundlephobia.com/api/size?package=${encodeURIComponent(packageName)}@${version}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.warn(`   ⚠️  Could not fetch size for ${packageName}@${version}`);
      return null;
    }

    const data: BundlephobiaResponse = await response.json();
    return {
      gzip: data.gzip,
      minified: data.size
    };
  } catch (error) {
    console.warn(`   ⚠️  Error fetching size for ${packageName}:`, error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

/**
 * Calculate hash of all test files to detect changes
 */
function getTestFilesHash(benchmarkDir: string): string {
  // Check for new framework structure first (libraries/), fallback to old (src/)
  const librariesDir = join(benchmarkDir, 'libraries');
  const oldSrcDir = join(benchmarkDir, 'src');

  const testDir = existsSync(librariesDir) ? librariesDir : oldSrcDir;

  if (!existsSync(testDir)) {
    // If neither exists, return a default hash
    return createHash('sha256').update('no-tests').digest('hex');
  }

  const files = readdirSync(testDir, { recursive: true, withFileTypes: true });

  // Get all .ts and .js files
  const testFiles = files
    .filter(f => f.isFile() && (f.name.endsWith('.ts') || f.name.endsWith('.js')))
    .map(f => {
      // Support both Node.js versions: v20 uses f.path, v22+ uses f.parentPath
      const parentPath = (f as any).parentPath || (f as any).path || testDir;
      return join(parentPath, f.name);
    })
    .sort();

  // Create hash of all test file contents
  const hash = createHash('sha256');
  for (const file of testFiles) {
    hash.update(readFileSync(file, 'utf-8'));
  }

  return hash.digest('hex');
}

/**
 * Sync bundle sizes from versions.json to library-metadata.json
 */
async function syncBundleSizesToMetadata(benchmarkDir: string, versions: VersionTracker): Promise<void> {
  const metadataPath = join(benchmarkDir, 'library-metadata.json');

  if (!existsSync(metadataPath)) {
    return; // No metadata file, skip
  }

  try {
    const metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

    for (const [packageName, versionInfo] of Object.entries(versions.libraries)) {
      if (!versionInfo.size) continue;

      // Find library in metadata (could be under package name or a key)
      let libraryKey: string | null = null;

      if (metadata.libraries[packageName]) {
        libraryKey = packageName;
      } else {
        // Search for library with matching npm field
        for (const [key, lib] of Object.entries(metadata.libraries) as any) {
          if (lib.npm === packageName) {
            libraryKey = key;
            break;
          }
        }
      }

      if (libraryKey && metadata.libraries[libraryKey]) {
        metadata.libraries[libraryKey].bundleSize = {
          minified: versionInfo.size.minified,
          gzipped: versionInfo.size.gzip,
          measuredAt: versionInfo.size.lastChecked,
          source: 'bundlephobia'
        };
      }
    }

    writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + '\n');
  } catch (error) {
    console.warn('   ⚠️  Failed to sync bundle sizes to metadata:', error instanceof Error ? error.message : 'Unknown error');
  }
}

/**
 * Main version checking logic
 */
export async function checkVersions(benchmarkDir: string): Promise<boolean> {
  const versionsPath = join(benchmarkDir, 'versions.json');
  const packagePath = join(benchmarkDir, 'package.json');

  console.log('🔍 Checking for updates...\n');

  // Read current versions
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));

  const updatedLibs: string[] = [];
  const newVersions: Record<string, string> = {};

  // Check test files hash
  const currentTestHash = getTestFilesHash(benchmarkDir);
  const testFilesChanged = currentTestHash !== versions.testFilesHash;

  if (testFilesChanged) {
    console.log('📝 Test files have been modified');
    console.log(`   Old hash: ${versions.testFilesHash.substring(0, 12)}...`);
    console.log(`   New hash: ${currentTestHash.substring(0, 12)}...`);
    versions.testFilesHash = currentTestHash;
  }

  // Check each dependency version
  console.log('\n📦 Checking library versions:\n');

  for (const [name, currentVersion] of Object.entries(pkg.dependencies as Record<string, string>)) {
    // Skip non-versioned dependencies
    if (!currentVersion.match(/^[~^]?[\d.]+/)) continue;

    try {
      // Get latest version from npm
      const latestVersion = execSync(`npm view ${name} version 2>/dev/null`, {
        encoding: 'utf-8'
      }).trim();

      const cleanCurrent = currentVersion.replace(/^[~^]/, '');
      const trackedVersion = versions.libraries[name]?.current;

      // Detect changes: either package.json changed OR npm has newer version
      const packageChanged = trackedVersion && trackedVersion !== cleanCurrent;
      const hasNpmUpdate = latestVersion !== cleanCurrent;

      if (packageChanged || hasNpmUpdate || !versions.libraries[name]) {
        if (packageChanged && !hasNpmUpdate) {
          console.log(`   📦 ${name}: ${trackedVersion} → ${cleanCurrent} (package.json updated)`);
        } else if (hasNpmUpdate) {
          console.log(`   ✨ ${name}: ${cleanCurrent} → ${latestVersion}`);
        } else {
          console.log(`   ➕ ${name}: ${cleanCurrent} (new)`);
        }

        updatedLibs.push(name);
        newVersions[name] = cleanCurrent;

        // Update tracker
        versions.libraries[name] = {
          current: cleanCurrent,
          latest: latestVersion,
          lastUpdated: new Date().toISOString(),
          size: versions.libraries[name]?.size // Preserve existing size data
        };
      } else {
        console.log(`   ✓ ${name}: ${cleanCurrent} (up to date)`);
      }
    } catch (error) {
      console.error(`   ⚠️  Failed to check ${name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Fetch package sizes
  console.log('\n📏 Checking package sizes:\n');

  for (const [name, info] of Object.entries(versions.libraries)) {
    try {
      // Only fetch if we don't have size data or if the version was updated
      const needsSizeUpdate = !info.size || updatedLibs.includes(name);

      if (needsSizeUpdate) {
        console.log(`   🔍 Fetching size for ${name}@${info.current}...`);
        const sizeData = await fetchPackageSize(name, info.current);

        if (sizeData) {
          versions.libraries[name].size = {
            gzip: sizeData.gzip,
            minified: sizeData.minified,
            lastChecked: new Date().toISOString()
          };
          console.log(`   ✓ ${name}: ${(sizeData.gzip / 1024).toFixed(2)}KB (gzip)`);
        }
      } else {
        const sizeKB = (info.size.gzip / 1024).toFixed(2);
        console.log(`   ✓ ${name}: ${sizeKB}KB (cached)`);
      }
    } catch (error) {
      console.error(`   ⚠️  Failed to fetch size for ${name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  versions.lastChecked = new Date().toISOString();

  // Save updated versions
  writeFileSync(versionsPath, JSON.stringify(versions, null, 2));

  // Sync bundle sizes to library-metadata.json
  await syncBundleSizesToMetadata(benchmarkDir, versions);

  // Determine if we need to run benchmarks
  const shouldRunBenchmark = updatedLibs.length > 0 || testFilesChanged;

  console.log('\n' + '='.repeat(60));
  if (shouldRunBenchmark) {
    console.log('✅ Updates detected - benchmark will run');
    if (updatedLibs.length > 0) {
      console.log(`   📦 Updated libraries: ${updatedLibs.join(', ')}`);
    }
    if (testFilesChanged) {
      console.log('   📝 Test files modified');
    }
  } else {
    console.log('✨ No updates - benchmark will be skipped');
  }
  console.log('='.repeat(60) + '\n');

  // Output for GitHub Actions
  if (process.env.GITHUB_OUTPUT) {
    const output = [
      `has_updates=${shouldRunBenchmark}`,
      `updated_libs=${JSON.stringify(updatedLibs)}`,
      `new_versions=${JSON.stringify(newVersions)}`,
      `test_files_changed=${testFilesChanged}`
    ].join('\n');

    writeFileSync(process.env.GITHUB_OUTPUT, output + '\n', { flag: 'a' });
  }

  return shouldRunBenchmark;
}
