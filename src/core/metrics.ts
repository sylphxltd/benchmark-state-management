/**
 * Metric measurement utilities
 *
 * Provides functions to measure different types of metrics:
 * - Speed (performance benchmarks) - Using tinybench for accurate measurements
 * - Size (bundle, memory, CSS output)
 * - Quality (efficiency percentages)
 * - Build (build time + output size)
 */

import { Bench } from 'tinybench';
import type {
  SpeedMetric,
  SizeMetric,
  QualityMetric,
  TestContext,
} from './types';

// ============================================================================
// Options
// ============================================================================

export interface PerformanceOptions {
  warmupIterations?: number;
  benchmarkIterations?: number;
}

export interface BuildOptions {
  cwd?: string;
  command: string;
  prepareBuild?: string;
  outputPath?: string;
}

// ============================================================================
// Speed Measurement (Performance)
// ============================================================================

/**
 * Measure performance (ops/sec) of a function using tinybench
 *
 * Uses the same professional benchmark engine as Vitest bench for accurate measurements.
 * Handles warmup, JIT optimization, GC timing, and statistical analysis automatically.
 *
 * @param fn - Test function to benchmark
 * @param ctx - Test context with store instance
 * @param options - Warmup and iteration counts
 * @returns Speed metric with ops/sec, mean time, variance, p99
 */
export async function measurePerformance<TStore>(
  fn: (ctx: TestContext<TStore>) => void | Promise<void>,
  ctx: TestContext<TStore>,
  options?: PerformanceOptions
): Promise<SpeedMetric> {
  // Use tinybench defaults: warmupTime: 100ms, warmupIterations: 5
  // These are battle-tested defaults that handle JIT optimization properly
  const bench = new Bench({
    warmupIterations: options?.warmupIterations,
    iterations: options?.benchmarkIterations,
    time: options?.benchmarkIterations ? 0 : undefined,
  });

  // Add benchmark task
  // Let tinybench handle both sync and async functions naturally
  bench.add('test', () => fn(ctx));

  // Run benchmark
  await bench.run();

  // Get results
  const task = bench.tasks[0];
  const result = task.result!;

  // Convert tinybench results to our SpeedMetric format
  const opsPerSecond = result.hz || 0;
  const meanTime = result.mean || 0;
  const variance = result.variance || 0;
  const p99 = result.p99 || meanTime;
  const samples = result.samples?.length || (options?.benchmarkIterations ?? 1000);

  return {
    type: 'speed',
    value: opsPerSecond,
    unit: 'ops/sec',
    opsPerSecond,
    meanTime,
    variance,
    p99,
    samples,
  };
}

// ============================================================================
// Size Measurement (Bundle, Memory, CSS Output)
// ============================================================================

/**
 * Measure bundle size of a package
 *
 * This would integrate with bundler or read package.json size.
 * For accurate measurements, use tools like bundlephobia or bundle-size.
 *
 * @param packageName - NPM package name
 * @param packagePath - Optional path to package directory
 * @returns Size metric with bytes, minified, gzipped sizes
 */
export async function measureBundleSize(
  packageName: string,
  packagePath?: string
): Promise<SizeMetric> {
  const { readFileSync } = await import('fs');
  const { gzipSync } = await import('zlib');
  const { resolve, join } = await import('path');

  try {
    const pkgPath = packagePath || resolve('node_modules', packageName);

    // Read package.json to find main entry
    const pkgJson = JSON.parse(
      readFileSync(join(pkgPath, 'package.json'), 'utf-8')
    );

    const mainFile = pkgJson.main || 'index.js';
    const mainPath = join(pkgPath, mainFile);

    // Read and measure main file
    const content = readFileSync(mainPath);
    const bytes = content.length;
    const gzipped = gzipSync(content).length;

    return {
      type: 'size',
      value: gzipped,
      unit: 'bytes',
      bytes,
      gzipped,
    };
  } catch (error) {
    throw new Error(`Failed to measure bundle size for ${packageName}: ${error}`);
  }
}

/**
 * Measure memory usage of a function
 *
 * Measures heap memory used by executing a function.
 * Requires --expose-gc flag for accurate measurements.
 *
 * @param fn - Function to measure memory usage
 * @param ctx - Test context
 * @returns Size metric with heap usage breakdown
 */
export async function measureMemory<TStore>(
  fn: (ctx: TestContext<TStore>) => void | Promise<void>,
  ctx: TestContext<TStore>
): Promise<SizeMetric> {
  // Force GC if available (requires --expose-gc)
  if (global.gc) {
    global.gc();
  }

  const before = process.memoryUsage();

  await fn(ctx);

  if (global.gc) {
    global.gc();
  }

  const after = process.memoryUsage();

  const heapUsed = after.heapUsed - before.heapUsed;

  return {
    type: 'size',
    value: heapUsed,
    unit: 'bytes',
    bytes: heapUsed,
    breakdown: {
      heapTotal: after.heapTotal - before.heapTotal,
      heapUsed,
      external: after.external - before.external,
      rss: after.rss - before.rss,
    },
  };
}

// ============================================================================
// Quality Measurement
// ============================================================================

/**
 * Measure quality metric (0-100%)
 *
 * Used for efficiency metrics like structural sharing,
 * tree-shaking effectiveness, etc.
 *
 * @param metric - Measured value
 * @param maxValue - Maximum possible value (100% = metric/maxValue)
 * @param name - Metric name
 * @param description - Optional description
 * @returns Quality metric with percentage
 */
export function measureQuality(
  metric: number,
  maxValue: number,
  name: string,
  description?: string
): QualityMetric {
  const percentage = Math.min(100, (metric / maxValue) * 100);

  return {
    type: 'quality',
    value: percentage,
    unit: '%',
    percentage,
    name,
    description,
  };
}

// ============================================================================
// Build Measurement
// ============================================================================

/**
 * Measure build time and output size
 *
 * Executes build command and measures time + output size.
 * Used for CSS frameworks, bundlers, etc.
 *
 * @param options - Build configuration
 * @returns Speed metric (build time) and optional size metric (output)
 */
export async function measureBuild(
  options: BuildOptions
): Promise<{ time: SpeedMetric; size?: SizeMetric }> {
  const { exec } = await import('child_process');
  const { promisify } = await import('util');
  const { statSync, readFileSync, readdirSync } = await import('fs');
  const { join } = await import('path');
  const { gzipSync } = await import('zlib');
  const execAsync = promisify(exec);

  // Prepare build (e.g., clean, codegen)
  if (options.prepareBuild) {
    await execAsync(options.prepareBuild, { cwd: options.cwd });
  }

  // Measure build time
  const start = performance.now();
  await execAsync(options.command, { cwd: options.cwd });
  const end = performance.now();
  const buildTime = end - start;

  const timeMetric: SpeedMetric = {
    type: 'speed',
    value: buildTime,
    unit: 'ms',
    opsPerSecond: 1000 / buildTime, // Builds per second
    meanTime: buildTime,
    variance: 0,
    p99: buildTime,
    samples: 1,
  };

  // Measure output size if path provided
  let sizeMetric: SizeMetric | undefined;
  if (options.outputPath && options.cwd) {
    try {
      const outputFullPath = join(options.cwd, options.outputPath);

      // Check if it's a file or directory
      const stats = statSync(outputFullPath);

      if (stats.isDirectory()) {
        // Measure all files in directory
        let totalBytes = 0;
        let totalGzipped = 0;
        const breakdown: Record<string, number> = {};

        const files = readdirSync(outputFullPath);
        for (const file of files) {
          const filePath = join(outputFullPath, file);
          const fileStats = statSync(filePath);

          if (fileStats.isFile()) {
            const content = readFileSync(filePath);
            const bytes = content.length;
            const gzipped = gzipSync(content).length;

            totalBytes += bytes;
            totalGzipped += gzipped;
            breakdown[file] = gzipped;
          }
        }

        sizeMetric = {
          type: 'size',
          value: totalGzipped,
          unit: 'bytes',
          bytes: totalBytes,
          gzipped: totalGzipped,
          breakdown,
        };
      } else {
        // Single file
        const content = readFileSync(outputFullPath);
        const bytes = content.length;
        const gzipped = gzipSync(content).length;

        sizeMetric = {
          type: 'size',
          value: gzipped,
          unit: 'bytes',
          bytes,
          gzipped,
        };
      }
    } catch (error) {
      // Output path doesn't exist or can't be read
      console.warn(`Warning: Could not measure output size at ${options.outputPath}`);
    }
  }

  return { time: timeMetric, size: sizeMetric };
}

// ============================================================================
// Conversion Utilities (Backward Compatibility)
// ============================================================================

/**
 * Convert SpeedMetric to legacy BenchmarkResult format
 * @deprecated Use SpeedMetric directly
 */
export function toSpeedMetric(
  name: string,
  opsPerSecond: number,
  meanTime: number,
  variance: number,
  p99: number,
  samples: number
): SpeedMetric {
  return {
    type: 'speed',
    value: opsPerSecond,
    unit: 'ops/sec',
    name,
    opsPerSecond,
    meanTime,
    variance,
    p99,
    samples,
  };
}
