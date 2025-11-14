/**
 * Scoring and Weighting System
 *
 * Provides statistical calculations for benchmark scoring:
 * 1. Variance-based test weighting (data-driven)
 * 2. Hybrid weighting system (category × test weights)
 * 3. Weighted geometric mean calculations
 *
 * Following krausest/js-framework-benchmark methodology
 */

import { readFileSync } from 'fs';
import { readFile, access } from 'fs/promises';
import { join } from 'path';

// ============================================================================
// Type Definitions
// ============================================================================

export interface BenchmarkResult {
  test: string;
  group: string;
  opsPerSecond: number;
  meanTime: number;
  variance: number;
  p99: number;
  samples: number;
}

export interface LibraryBenchmark {
  library: string;
  libraryId: string;
  version: string;
  timestamp: string;
  results: BenchmarkResult[];
}

export interface TestWeight {
  testName: string;
  group: string;
  p90Factor: number;
  rawWeight: number;
  normalizedWeight: number;
}

export interface HybridTestWeight {
  testName: string;
  category: string;
  categoryTestWeight: number;  // Sums to 1.0 within category
  hybridWeight: number;         // Category weight × category test weight
  categoryWeight: number;       // Manual category weight
  rawVarianceWeight: number;    // Pure variance-based weight
  p90Factor: number;
  rawWeight: number;
}

// ============================================================================
// Default Category Weights
// ============================================================================

export const DEFAULT_CATEGORY_WEIGHTS: Record<string, number> = {
  'basic-read': 0.35,
  'reactivity-patterns': 0.15,
  'performance-stress': 0.15,
  'advanced-operations': 0.15,
  'basic-write': 0.10,
  'real-world': 0.05,
  'async-operations': 0.05,
};

// ============================================================================
// Utility Functions
// ============================================================================

function percentile90(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.ceil(sorted.length * 0.9) - 1;
  return sorted[Math.max(0, index)];
}

function classifyTestGroup(testName: string, groupName?: string): string {
  if (groupName) {
    return groupName.toLowerCase().replace(/\s+/g, '-');
  }

  const lower = testName.toLowerCase();

  // State management patterns
  if (lower.includes('read') && !lower.includes('async')) return 'basic-read';
  if (lower.includes('write') && !lower.includes('async')) return 'basic-write';
  if (lower.includes('computed') || lower.includes('chain') || lower.includes('fanout') || lower.includes('diamond')) {
    return 'reactivity-patterns';
  }
  if (lower.includes('stress') || lower.includes('extreme') || lower.includes('high-frequency') || lower.includes('moderate')) {
    return 'performance-stress';
  }
  if (lower.includes('async')) return 'async-operations';
  if (lower.includes('todo') || lower.includes('form') || lower.includes('counter') || lower.includes('cache') || lower.includes('memory')) {
    return 'real-world';
  }

  return 'advanced-operations';
}

// ============================================================================
// Config Loading
// ============================================================================

export async function loadCategoryWeights(categoryPath: string): Promise<Record<string, number>> {
  try {
    const configPath = join(categoryPath, 'weighting-config.json');
    const configContent = await readFile(configPath, 'utf-8');
    const config = JSON.parse(configContent);

    if (!config.categoryWeights) {
      console.warn('⚠️  weighting-config.json missing categoryWeights, using defaults');
      return DEFAULT_CATEGORY_WEIGHTS;
    }

    const weights: Record<string, number> = {};
    for (const [key, value] of Object.entries(config.categoryWeights)) {
      if (typeof value === 'object' && value !== null && 'weight' in value) {
        weights[key] = (value as any).weight;
      }
    }

    const sum = Object.values(weights).reduce((a, b) => a + b, 0);
    if (Math.abs(sum - 1.0) > 0.001) {
      throw new Error(`Category weights must sum to 1.0, got ${sum}`);
    }

    console.log(`✓ Loaded hybrid weighting config with ${Object.keys(weights).length} categories`);
    return weights;
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return DEFAULT_CATEGORY_WEIGHTS;
    }
    throw error;
  }
}

export function loadCategoryWeightsSync(categoryPath: string): Record<string, number> | null {
  try {
    const configPath = join(categoryPath, 'weighting-config.json');
    const configContent = readFileSync(configPath, 'utf-8');
    const config = JSON.parse(configContent);

    if (!config.categoryWeights) {
      console.warn('⚠️  weighting-config.json missing categoryWeights');
      return null;
    }

    const weights: Record<string, number> = {};
    for (const [key, value] of Object.entries(config.categoryWeights)) {
      if (typeof value === 'object' && value !== null && 'weight' in value) {
        weights[key] = (value as any).weight;
      }
    }

    const sum = Object.values(weights).reduce((a, b) => a + b, 0);
    if (Math.abs(sum - 1.0) > 0.001) {
      console.error(`❌ Category weights must sum to 1.0, got ${sum}`);
      return null;
    }

    console.log(`✓ Loaded hybrid weighting config with ${Object.keys(weights).length} categories`);
    return weights;
  } catch (error: any) {
    if (error.code !== 'ENOENT') {
      console.error(`Error loading weighting config: ${error.message}`);
    }
    return null;
  }
}

export async function hasHybridWeightingConfig(categoryPath: string): Promise<boolean> {
  try {
    const configPath = join(categoryPath, 'weighting-config.json');
    await access(configPath);
    return true;
  } catch {
    return false;
  }
}

// ============================================================================
// Variance-Based Test Weighting
// ============================================================================

export function calculateTestWeights(libraries: LibraryBenchmark[]): Map<string, number> {
  if (libraries.length === 0) {
    return new Map();
  }

  const testWeights: TestWeight[] = [];
  const testNames = libraries[0].results.map(r => r.test);

  for (const testName of testNames) {
    const testResults = libraries
      .map(lib => lib.results.find(r => r.test === testName))
      .filter((r): r is BenchmarkResult => r !== undefined);

    if (testResults.length === 0) continue;

    const group = testResults[0].group;
    const opsValues = testResults.map(r => r.opsPerSecond);
    const fastest = Math.max(...opsValues);

    if (fastest === 0) continue;

    const factors = opsValues.map(ops => (ops === 0 ? 100 : fastest / ops));
    const p90Factor = percentile90(factors);
    const rawWeight = 1 / p90Factor;

    testWeights.push({
      testName,
      group,
      p90Factor,
      rawWeight,
      normalizedWeight: 0,
    });
  }

  const sumRawWeights = testWeights.reduce((sum, tw) => sum + tw.rawWeight, 0);

  for (const tw of testWeights) {
    tw.normalizedWeight = tw.rawWeight / sumRawWeights;
  }

  const weightsMap = new Map<string, number>();
  for (const tw of testWeights) {
    weightsMap.set(tw.testName, tw.normalizedWeight);
  }

  return weightsMap;
}

export function getTestWeightDetails(libraries: LibraryBenchmark[]): TestWeight[] {
  if (libraries.length === 0) {
    return [];
  }

  const testWeights: TestWeight[] = [];
  const testNames = libraries[0].results.map(r => r.test);

  for (const testName of testNames) {
    const testResults = libraries
      .map(lib => lib.results.find(r => r.test === testName))
      .filter((r): r is BenchmarkResult => r !== undefined);

    if (testResults.length === 0) continue;

    const group = testResults[0].group;
    const opsValues = testResults.map(r => r.opsPerSecond);
    const fastest = Math.max(...opsValues);

    if (fastest === 0) continue;

    const factors = opsValues.map(ops => (ops === 0 ? 100 : fastest / ops));
    const p90Factor = percentile90(factors);
    const rawWeight = 1 / p90Factor;

    testWeights.push({
      testName,
      group,
      p90Factor,
      rawWeight,
      normalizedWeight: 0,
    });
  }

  const sumRawWeights = testWeights.reduce((sum, tw) => sum + tw.rawWeight, 0);

  for (const tw of testWeights) {
    tw.normalizedWeight = tw.rawWeight / sumRawWeights;
  }

  return testWeights;
}

// ============================================================================
// Hybrid Weighting System
// ============================================================================

export function calculateHybridWeights(
  libraries: LibraryBenchmark[],
  categoryWeights: Record<string, number> = DEFAULT_CATEGORY_WEIGHTS
): Map<string, HybridTestWeight> {
  if (libraries.length === 0) {
    return new Map();
  }

  const testNames = libraries[0].results.map(r => r.test);

  // Step 1: Calculate variance-based weights within each category
  interface TestVarianceData {
    testName: string;
    category: string;
    p90Factor: number;
    rawWeight: number;
  }

  const testVarianceData: TestVarianceData[] = [];

  for (const testName of testNames) {
    const testResults = libraries
      .map(lib => lib.results.find(r => r.test === testName))
      .filter((r): r is BenchmarkResult => r !== undefined);

    const opsValues = testResults.map(r => r.opsPerSecond);
    const fastest = Math.max(...opsValues);

    const factors = opsValues.map(ops => (ops === 0 ? 100 : fastest / ops));
    const p90Factor = percentile90(factors);
    const rawWeight = 1 / p90Factor;

    const groupName = testResults[0]?.group;
    const category = classifyTestGroup(testName, groupName);

    testVarianceData.push({
      testName,
      category,
      p90Factor,
      rawWeight,
    });
  }

  // Step 2: Normalize weights within each category
  const categories = [...new Set(testVarianceData.map(t => t.category))];
  const categoryTestWeights = new Map<string, Map<string, number>>();

  for (const category of categories) {
    const categoryTests = testVarianceData.filter(t => t.category === category);
    const sumRawWeights = categoryTests.reduce((sum, t) => sum + t.rawWeight, 0);

    const weights = new Map<string, number>();
    for (const test of categoryTests) {
      weights.set(test.testName, test.rawWeight / sumRawWeights);
    }

    categoryTestWeights.set(category, weights);
  }

  // Step 3: Calculate hybrid weights (category × test)
  const hybridWeights = new Map<string, HybridTestWeight>();
  const totalRawWeight = testVarianceData.reduce((sum, t) => sum + t.rawWeight, 0);

  for (const testData of testVarianceData) {
    const { testName, category, p90Factor, rawWeight } = testData;

    const categoryWeight = categoryWeights[category] || 0;
    const categoryTestWeight = categoryTestWeights.get(category)?.get(testName) || 0;
    const hybridWeight = categoryWeight * categoryTestWeight;
    const rawVarianceWeight = rawWeight / totalRawWeight;

    hybridWeights.set(testName, {
      testName,
      category,
      categoryTestWeight,
      hybridWeight,
      categoryWeight,
      rawVarianceWeight,
      p90Factor,
      rawWeight,
    });
  }

  return hybridWeights;
}

// ============================================================================
// Weighted Geometric Mean
// ============================================================================

export function weightedGeometricMean(scores: number[], weights: number[]): number {
  if (scores.length !== weights.length) {
    throw new Error('Scores and weights must have same length');
  }

  if (scores.length === 0) {
    return 0;
  }

  let weightedProduct = 1;

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i] === 0 ? 0.01 : scores[i];
    weightedProduct *= Math.pow(score, weights[i]);
  }

  return weightedProduct;
}
