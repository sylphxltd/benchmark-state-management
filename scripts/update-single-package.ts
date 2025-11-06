#!/usr/bin/env node
/**
 * Single Package Update Script
 * Updates one package at a time and tests it independently
 */

import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { execSync } from 'child_process';
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
      incompatible?: boolean;
      incompatibleVersion?: string;
      incompatibleReason?: string;
      size?: {
        gzip: number;
        minified: number;
        lastChecked: string;
      };
    };
  };
}

function backupFiles(benchmarkDir: string) {
  const packagePath = join(benchmarkDir, 'package.json');
  const lockPath = join(benchmarkDir, 'package-lock.json');

  copyFileSync(packagePath, packagePath + '.backup');
  if (existsSync(lockPath)) {
    copyFileSync(lockPath, lockPath + '.backup');
  }
}

function restoreFiles(benchmarkDir: string) {
  const packagePath = join(benchmarkDir, 'package.json');
  const lockPath = join(benchmarkDir, 'package-lock.json');

  copyFileSync(packagePath + '.backup', packagePath);
  if (existsSync(lockPath + '.backup')) {
    copyFileSync(lockPath + '.backup', lockPath);
  }
}

function getLibraryDisplayName(packageName: string, benchmarkDir: string): string {
  const metadataPath = join(benchmarkDir, 'library-metadata.json');
  if (!existsSync(metadataPath)) return packageName;

  const metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  return metadata[packageName]?.displayName || packageName;
}

async function testSinglePackage(packageName: string, benchmarkDir: string): Promise<{ success: boolean; error?: string }> {
  const displayName = getLibraryDisplayName(packageName, benchmarkDir);

  console.log(`\n🧪 Testing ${displayName}...`);

  try {
    // Run benchmarks with timeout
    const output = execSync('npm run benchmark', {
      cwd: benchmarkDir,
      encoding: 'utf-8',
      timeout: 300000, // 5 minutes
      stdio: 'pipe'
    });

    // Check if the benchmark completed successfully
    if (output.includes('Benchmark report written')) {
      console.log(`   ✅ ${displayName} tests passed`);
      return { success: true };
    } else {
      console.log(`   ⚠️  ${displayName} tests incomplete`);
      return { success: false, error: 'Benchmark did not complete' };
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
    console.log(`   ❌ ${displayName} tests failed: ${errorMsg}`);
    return { success: false, error: errorMsg };
  }
}

async function updateSinglePackage(packageName: string, benchmarkDir: string): Promise<boolean> {
  const versionsPath = join(benchmarkDir, 'versions.json');
  const packagePath = join(benchmarkDir, 'package.json');
  const displayName = getLibraryDisplayName(packageName, benchmarkDir);

  // Read current state
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));
  const packageInfo = versions.libraries[packageName];

  if (!packageInfo || packageInfo.current === packageInfo.latest) {
    console.log(`\n✓ ${displayName} is already up to date (${packageInfo?.current})`);
    return false;
  }

  console.log(`\n📦 Updating ${displayName}: ${packageInfo.current} → ${packageInfo.latest}`);

  // Backup current state
  backupFiles(benchmarkDir);

  try {
    // Update package.json
    pkg.dependencies[packageName] = packageInfo.latest;
    writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');

    // Install the updated package
    console.log('   📥 Installing...');
    execSync('npm install', {
      cwd: benchmarkDir,
      stdio: 'pipe'
    });

    // Test the updated package
    const testResult = await testSinglePackage(packageName, benchmarkDir);

    if (testResult.success) {
      // Success! Update versions.json
      versions.libraries[packageName].current = packageInfo.latest;
      versions.libraries[packageName].lastUpdated = new Date().toISOString();
      delete versions.libraries[packageName].incompatible;
      delete versions.libraries[packageName].incompatibleVersion;
      delete versions.libraries[packageName].incompatibleReason;

      writeFileSync(versionsPath, JSON.stringify(versions, null, 2));

      console.log(`   ✅ ${displayName} successfully updated to ${packageInfo.latest}\n`);
      return true;
    } else {
      // Test failed - rollback
      console.log(`   ⚠️  Tests failed, rolling back ${displayName}...`);
      restoreFiles(benchmarkDir);

      // Reinstall old version
      execSync('npm install', {
        cwd: benchmarkDir,
        stdio: 'pipe'
      });

      // Mark as incompatible in versions.json
      versions.libraries[packageName].incompatible = true;
      versions.libraries[packageName].incompatibleVersion = packageInfo.latest;
      versions.libraries[packageName].incompatibleReason = testResult.error || 'Tests failed';

      writeFileSync(versionsPath, JSON.stringify(versions, null, 2));

      console.log(`   ❌ ${displayName} ${packageInfo.latest} is incompatible (kept ${packageInfo.current})\n`);
      return false;
    }
  } catch (error) {
    console.error(`   ❌ Error updating ${displayName}:`, error);

    // Rollback on error
    restoreFiles(benchmarkDir);
    execSync('npm install', {
      cwd: benchmarkDir,
      stdio: 'pipe'
    });

    return false;
  }
}

async function updateAllPackages(benchmarkDir: string) {
  const versionsPath = join(benchmarkDir, 'versions.json');
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));

  console.log('🔄 Starting incremental package updates...\n');
  console.log('═'.repeat(60));

  let updatedCount = 0;
  let failedCount = 0;
  let skippedCount = 0;

  // Get packages that need updates
  const packagesToUpdate = Object.entries(versions.libraries)
    .filter(([_, info]) => info.current !== info.latest)
    .map(([name]) => name);

  if (packagesToUpdate.length === 0) {
    console.log('\n✨ All packages are already up to date!\n');
    return;
  }

  console.log(`Found ${packagesToUpdate.length} package(s) to update\n`);

  // Update each package independently
  for (const packageName of packagesToUpdate) {
    const success = await updateSinglePackage(packageName, benchmarkDir);

    if (success) {
      updatedCount++;
    } else {
      const packageInfo = versions.libraries[packageName];
      if (packageInfo.incompatible) {
        failedCount++;
      } else {
        skippedCount++;
      }
    }
  }

  // Summary
  console.log('═'.repeat(60));
  console.log('\n📊 Update Summary:\n');
  console.log(`   ✅ Successfully updated: ${updatedCount}`);
  console.log(`   ❌ Incompatible (rolled back): ${failedCount}`);
  console.log(`   ⏭️  Skipped (already latest): ${skippedCount}`);
  console.log();

  // Output for GitHub Actions
  if (process.env.GITHUB_OUTPUT) {
    const output = [
      `updated_count=${updatedCount}`,
      `failed_count=${failedCount}`,
      `has_updates=${updatedCount > 0}`
    ].join('\n');

    writeFileSync(process.env.GITHUB_OUTPUT, output + '\n', { flag: 'a' });
  }
}

// Main execution
const benchmarkDir = process.argv[2] || join(process.cwd(), 'benchmarks/state-management');
updateAllPackages(benchmarkDir).then(() => {
  process.exit(0);
}).catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
