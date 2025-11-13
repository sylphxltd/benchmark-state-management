/**
 * Build Performance & CSS Size Measurement
 *
 * Measures:
 * 1. CSS output size (minified + gzipped)
 * 2. Build time (cold build)
 * 3. Bundle size impact
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import { readFileSync, writeFileSync, statSync, readdirSync } from 'fs';
import { join } from 'path';
import { gzipSync } from 'zlib';

const execAsync = promisify(exec);

interface BuildResult {
  name: string;
  mean: number;
  min: number;
  max: number;
  p75: number;
  p99: number;
  p995: number;
  p999: number;
  rme: number;
  samples: number;
  rank: number;
  metricType: 'time' | 'size';
  metricUnit: string;
  [key: string]: any;
}

interface TestGroup {
  fullName: string;
  benchmarks: BuildResult[];
  metricType: 'time' | 'size';
  metricUnit: string;
}

interface FrameworkConfig {
  name: string;
  dir: string;
  buildCommand: string;
  cssPath: string; // Relative path from dist to CSS file
  prepareBuild?: string; // Optional command to run before build
}

const frameworks: FrameworkConfig[] = [
  {
    name: 'Silk',
    dir: 'build-tests/fixtures/silk',
    buildCommand: 'npx vite build',
    cssPath: 'assets/*.css',
  },
  {
    name: 'Tailwind CSS',
    dir: 'build-tests/fixtures/tailwind',
    buildCommand: 'npx vite build',
    cssPath: 'assets/*.css',
  },
  {
    name: 'Panda CSS',
    dir: 'build-tests/fixtures/panda',
    buildCommand: 'npx vite build',
    cssPath: 'assets/*.css',
    prepareBuild: 'npx panda codegen',
  },
  {
    name: 'UnoCSS',
    dir: 'build-tests/fixtures/unocss',
    buildCommand: 'npx vite build',
    cssPath: 'assets/*.css',
  },
];

function findCSSFile(distDir: string, pattern: string): string | null {
  const assetsDir = join(distDir, 'assets');
  try {
    const files = readdirSync(assetsDir);
    const cssFile = files.find(f => f.endsWith('.css'));
    return cssFile ? join(assetsDir, cssFile) : null;
  } catch {
    return null;
  }
}

async function measureBuild(config: FrameworkConfig, runs: number = 3): Promise<{ buildTimes: number[]; cssSize: number }> {
  const buildTimes: number[] = [];
  let cssSize = 0;

  console.log(`\n📦 Building ${config.name}...`);

  for (let i = 0; i < runs; i++) {
    // Clean previous build
    try {
      await execAsync(`rm -rf ${config.dir}/dist`, { cwd: process.cwd() });
    } catch {}

    // Prepare build if needed (e.g., Panda codegen)
    if (config.prepareBuild) {
      await execAsync(config.prepareBuild, { cwd: config.dir });
    }

    // Measure build time
    const startTime = performance.now();
    try {
      await execAsync(config.buildCommand, { cwd: config.dir });
    } catch (error: any) {
      console.error(`❌ Build failed for ${config.name}:`, error.message);
      throw error;
    }
    const buildTime = performance.now() - startTime;
    buildTimes.push(buildTime);

    // Measure CSS size on last run
    if (i === runs - 1) {
      const distDir = join(config.dir, 'dist');
      const cssFile = findCSSFile(distDir, config.cssPath);

      if (cssFile) {
        const cssContent = readFileSync(cssFile);
        const gzipped = gzipSync(cssContent);
        cssSize = gzipped.length;

        console.log(`  ✓ Build ${i + 1}/${runs}: ${buildTime.toFixed(0)}ms`);
        console.log(`  📊 CSS size: ${(cssSize / 1024).toFixed(2)} KB (gzipped)`);
      } else {
        // Some frameworks (like Panda CSS) don't output separate CSS files
        // They use runtime or atomic CSS embedded in JS
        console.log(`  ✓ Build ${i + 1}/${runs}: ${buildTime.toFixed(0)}ms`);
        console.log(`  ℹ️  No separate CSS file (zero-runtime or atomic CSS)`);
        cssSize = 0; // Mark as zero to indicate no separate CSS file
      }
    } else {
      console.log(`  ✓ Build ${i + 1}/${runs}: ${buildTime.toFixed(0)}ms`);
    }
  }

  return { buildTimes, cssSize };
}

function calculateStats(values: number[]) {
  const sorted = values.slice().sort((a, b) => a - b);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const min = sorted[0] || 0;
  const max = sorted[sorted.length - 1] || 0;

  const p75Idx = Math.floor(sorted.length * 0.75);
  const p99Idx = Math.floor(sorted.length * 0.99);
  const p995Idx = Math.floor(sorted.length * 0.995);
  const p999Idx = Math.floor(sorted.length * 0.999);

  return {
    mean,
    min,
    max,
    p75: sorted[p75Idx] || max,
    p99: sorted[p99Idx] || max,
    p995: sorted[p995Idx] || max,
    p999: sorted[p999Idx] || max,
  };
}

export async function runBuildTests(): Promise<{ groups: TestGroup[] }> {
  console.log('🏗️  Running build tests...\n');
  console.log('This will build each framework 3 times to get reliable measurements.');

  const buildTimeResults: BuildResult[] = [];
  const cssSizeResults: BuildResult[] = [];

  // Measure each framework
  for (const framework of frameworks) {
    try {
      const { buildTimes, cssSize } = await measureBuild(framework);
      const buildStats = calculateStats(buildTimes);

      // Build time result
      buildTimeResults.push({
        name: framework.name,
        ...buildStats,
        rme: 0,
        samples: buildTimes.length,
        rank: 0, // Will be set later
        metricType: 'time',
        metricUnit: 'ms',
      });

      // CSS size result
      cssSizeResults.push({
        name: framework.name,
        mean: cssSize,
        min: cssSize,
        max: cssSize,
        p75: cssSize,
        p99: cssSize,
        p995: cssSize,
        p999: cssSize,
        rme: 0,
        samples: 1,
        rank: 0, // Will be set later
        metricType: 'size',
        metricUnit: 'bytes',
      });
    } catch (error: any) {
      console.error(`\n❌ Failed to measure ${framework.name}:`, error.message);
    }
  }

  // Assign ranks (lower is better for both time and size)
  buildTimeResults.sort((a, b) => a.mean - b.mean);
  buildTimeResults.forEach((result, index) => {
    result.rank = index + 1;
  });

  cssSizeResults.sort((a, b) => a.mean - b.mean);
  cssSizeResults.forEach((result, index) => {
    result.rank = index + 1;
  });

  const buildTimes: TestGroup = {
    fullName: 'Cold Build Time (Small App)',
    metricType: 'time',
    metricUnit: 'ms',
    benchmarks: buildTimeResults,
  };

  const cssSize: TestGroup = {
    fullName: 'CSS Output Size (Small App - 10 components)',
    metricType: 'size',
    metricUnit: 'bytes',
    benchmarks: cssSizeResults,
  };

  const results = {
    groups: [buildTimes, cssSize],
  };

  // Write to results/build.json
  writeFileSync(
    'results/build.json',
    JSON.stringify(results, null, 2)
  );

  console.log('\n✅ Build tests complete');
  console.log('\n📊 Summary:');
  console.log('\nBuild Times (faster is better):');
  buildTimeResults.forEach((result, index) => {
    const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '  ';
    console.log(`  ${medal} ${result.name}: ${result.mean.toFixed(0)}ms`);
  });

  console.log('\nCSS Sizes (smaller is better):');
  cssSizeResults.forEach((result, index) => {
    const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '  ';
    console.log(`  ${medal} ${result.name}: ${(result.mean / 1024).toFixed(2)} KB (gzipped)`);
  });

  return results;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runBuildTests().catch(console.error);
}
