#!/usr/bin/env node
/**
 * Package Update Script
 * Updates package.json to latest versions based on versions.json
 */

import { readFileSync, writeFileSync } from 'fs';
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
    };
  };
}

async function updatePackages(benchmarkDir: string) {
  const versionsPath = join(benchmarkDir, 'versions.json');
  const packagePath = join(benchmarkDir, 'package.json');

  console.log('📦 Updating packages to latest versions...\n');

  // Read versions tracker
  const versions: VersionTracker = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));

  const packagesToUpdate: string[] = [];

  // Check which packages need updates
  for (const [name, info] of Object.entries(versions.libraries)) {
    if (info.current !== info.latest) {
      console.log(`   ✨ ${name}: ${info.current} → ${info.latest}`);
      packagesToUpdate.push(`${name}@${info.latest}`);

      // Update package.json
      if (pkg.dependencies[name]) {
        pkg.dependencies[name] = info.latest;
      }
    } else {
      console.log(`   ✓ ${name}: ${info.current} (already latest)`);
    }
  }

  if (packagesToUpdate.length === 0) {
    console.log('\n✨ All packages are already up to date!');
    return false;
  }

  // Write updated package.json
  writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`\n✅ Updated package.json with ${packagesToUpdate.length} package(s)`);

  // Install updated packages
  console.log('\n📥 Installing updated packages...\n');
  try {
    execSync('npm install', {
      cwd: benchmarkDir,
      stdio: 'inherit'
    });
    console.log('\n✅ Packages installed successfully');
  } catch (error) {
    console.error('❌ Failed to install packages:', error);
    process.exit(1);
  }

  // Update versions.json with new current versions
  for (const [name, info] of Object.entries(versions.libraries)) {
    if (info.current !== info.latest) {
      versions.libraries[name].current = info.latest;
      versions.libraries[name].lastUpdated = new Date().toISOString();
    }
  }

  writeFileSync(versionsPath, JSON.stringify(versions, null, 2));
  console.log('✅ Updated versions.json\n');

  return true;
}

// Main execution
const benchmarkDir = process.argv[2] || join(process.cwd(), 'benchmarks/state-management');
updatePackages(benchmarkDir).then((updated) => {
  if (updated) {
    console.log('🎉 Package update completed successfully');
  }
  process.exit(0);
}).catch((error) => {
  console.error('❌ Error updating packages:', error);
  process.exit(1);
});
