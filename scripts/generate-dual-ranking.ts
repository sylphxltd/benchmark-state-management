#!/usr/bin/env bun
/**
 * Dual Ranking System Generator
 *
 * Generates two rankings side-by-side:
 * 1. Pure variance-based (current methodology)
 * 2. Hybrid weighted (category + variance)
 *
 * This allows comparison and validation of the hybrid system.
 */

// Top-level await support
const fs = await import('fs/promises');
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import {
  calculateTestWeights,
  weightedGeometricMean,
  calculateHybridWeights,
  loadCategoryWeights,
  type HybridTestWeight,
} from '../src/core/scoring.js';

interface BenchmarkResult {
  test: string;
  group: string;
  opsPerSecond: number;
  meanTime: number;
  variance: number;
  p99: number;
  samples: number;
}

interface LibraryBenchmark {
  library: string;
  libraryId: string;
  version: string;
  timestamp: string;
  results: BenchmarkResult[];
}

// ========================================
// Load Results
// ========================================

const categoryPath = process.argv[2] || 'benchmarks/state-management';
const resultsPath = join(categoryPath, 'results');
const benchmarkDir = categoryPath;

console.log(`\n📊 Dual Ranking Comparison: ${categoryPath}\n`);

// Load all library results
const libraryDirs = readdirSync(resultsPath);
const libraries: LibraryBenchmark[] = [];

for (const libDir of libraryDirs) {
  const libPath = join(resultsPath, libDir);
  const stat = require('fs').statSync(libPath);
  if (!stat.isDirectory()) continue;

  // Read all JSON files
  const files = readdirSync(libPath);
  const jsonFiles = files.filter(f => f.endsWith('.json'));

  const results: BenchmarkResult[] = [];
  for (const file of jsonFiles) {
    const filePath = join(libPath, file);
    const content = JSON.parse(readFileSync(filePath, 'utf-8'));

    results.push({
      test: content.test,
      group: content.group,
      opsPerSecond: content.result?.opsPerSecond || 0,
      meanTime: content.result?.meanTime || 0,
      variance: content.result?.variance || 0,
      p99: content.result?.p99 || 0,
      samples: content.result?.samples || 0,
    });
  }

  if (results.length > 0) {
    libraries.push({
      library: libDir,
      libraryId: libDir,
      version: results[0].version || 'unknown',
      timestamp: results[0].timestamp || new Date().toISOString(),
      results: results,
    });
  }
}

console.log(`✓ Loaded ${libraries.length} libraries\n`);

// ========================================
// Calculate Both Ranking Systems
// ========================================

// 1. Pure Variance-Based Weights
const varianceWeights = calculateTestWeights(libraries);

// 2. Hybrid Weights (load category-specific config)
const categoryWeights = await loadCategoryWeights(benchmarkDir);
const hybridWeights = calculateHybridWeights(libraries, categoryWeights);

// ========================================
// Calculate Overall Scores
// ========================================

interface LibraryScore {
  libraryId: string;
  varianceScore: number;
  hybridScore: number;
  varianceRank: number;
  hybridRank: number;
}

const scores: LibraryScore[] = [];

for (const lib of libraries) {
  // Calculate variance-based score
  const varianceScores: number[] = [];
  const varianceWeightsList: number[] = [];

  // Calculate hybrid score
  const hybridScores: number[] = [];
  const hybridWeightsList: number[] = [];

  for (const result of lib.results) {
    const testName = result.test;

    // Find best performer for this test
    const testResults = libraries
      .map(l => l.results.find(r => r.test === testName))
      .filter((r): r is BenchmarkResult => r !== undefined);

    const maxOps = Math.max(...testResults.map(r => r.opsPerSecond));

    // Normalized score (0-100)
    const score = maxOps > 0 ? (result.opsPerSecond / maxOps) * 100 : 0;

    // Variance-based
    const vWeight = varianceWeights.get(testName) || 0;
    varianceScores.push(score);
    varianceWeightsList.push(vWeight);

    // Hybrid
    const hWeight = hybridWeights.get(testName)?.hybridWeight || 0;
    hybridScores.push(score);
    hybridWeightsList.push(hWeight);
  }

  const varianceScore = weightedGeometricMean(varianceScores, varianceWeightsList);
  const hybridScore = weightedGeometricMean(hybridScores, hybridWeightsList);

  scores.push({
    libraryId: lib.libraryId,
    varianceScore,
    hybridScore,
    varianceRank: 0,
    hybridRank: 0,
  });
}

// Assign ranks
scores.sort((a, b) => b.varianceScore - a.varianceScore);
scores.forEach((s, i) => {
  s.varianceRank = i + 1;
});

scores.sort((a, b) => b.hybridScore - a.hybridScore);
scores.forEach((s, i) => {
  s.hybridRank = i + 1;
});

// ========================================
// Display Results
// ========================================

console.log('╔════════════════════════════════════════════════════════════════════════════╗');
console.log('║                          DUAL RANKING COMPARISON                           ║');
console.log('╚════════════════════════════════════════════════════════════════════════════╝\n');

console.log('┌────────────────────────────────────────────────────────────────────────────┐');
console.log('│ Variance-Based (Current)          │ Hybrid Weighted (Proposed)            │');
console.log('├────────────────────────────────────┼───────────────────────────────────────┤');

// Sort both lists
const varianceSorted = [...scores].sort((a, b) => b.varianceScore - a.varianceScore);
const hybridSorted = [...scores].sort((a, b) => b.hybridScore - a.hybridScore);

for (let i = 0; i < Math.max(varianceSorted.length, hybridSorted.length); i++) {
  const vLib = varianceSorted[i];
  const hLib = hybridSorted[i];

  const vRank = vLib ? `${vLib.varianceRank}`.padStart(2) : '  ';
  const vName = vLib ? vLib.libraryId.padEnd(18) : ''.padEnd(18);
  const vScore = vLib ? `${vLib.varianceScore.toFixed(1)}`.padStart(5) : ''.padStart(5);

  const hRank = hLib ? `${hLib.hybridRank}`.padStart(2) : '  ';
  const hName = hLib ? hLib.libraryId.padEnd(18) : ''.padEnd(18);
  const hScore = hLib ? `${hLib.hybridScore.toFixed(1)}`.padStart(5) : ''.padStart(5);

  const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '  ';

  console.log(`│ ${medal} ${vRank}. ${vName} ${vScore} │ ${medal} ${hRank}. ${hName} ${hScore} │`);
}

console.log('└────────────────────────────────────┴───────────────────────────────────────┘\n');

// ========================================
// Rank Changes Analysis
// ========================================

console.log('╔════════════════════════════════════════════════════════════════════════════╗');
console.log('║                            RANKING CHANGES                                 ║');
console.log('╚════════════════════════════════════════════════════════════════════════════╝\n');

console.log('Library              | Variance | Hybrid  | Change | Score Δ');
console.log('---------------------|----------|---------|--------|----------');

const combined = [...scores].sort((a, b) => a.varianceRank - b.varianceRank);

for (const lib of combined) {
  const rankChange = lib.varianceRank - lib.hybridRank;
  const scoreChange = lib.hybridScore - lib.varianceScore;

  const name = lib.libraryId.padEnd(20);
  const vRank = `#${lib.varianceRank}`.padStart(8);
  const hRank = `#${lib.hybridRank}`.padStart(7);

  let changeStr = '';
  if (rankChange > 0) {
    changeStr = `⬆️ +${rankChange}`.padStart(8);
  } else if (rankChange < 0) {
    changeStr = `⬇️ ${rankChange}`.padStart(8);
  } else {
    changeStr = '—'.padStart(8);
  }

  const deltaStr = scoreChange >= 0
    ? `+${scoreChange.toFixed(1)}`
    : `${scoreChange.toFixed(1)}`;

  console.log(`${name} | ${vRank} | ${hRank} | ${changeStr} | ${deltaStr.padStart(8)}`);
}

console.log('\n');

// ========================================
// Key Insights
// ========================================

console.log('╔════════════════════════════════════════════════════════════════════════════╗');
console.log('║                              KEY INSIGHTS                                  ║');
console.log('╚════════════════════════════════════════════════════════════════════════════╝\n');

// Find biggest movers
const biggestGainers = [...scores]
  .filter(s => s.hybridRank < s.varianceRank)
  .sort((a, b) => (b.varianceRank - b.hybridRank) - (a.varianceRank - a.hybridRank))
  .slice(0, 3);

const biggestLosers = [...scores]
  .filter(s => s.hybridRank > s.varianceRank)
  .sort((a, b) => (b.hybridRank - b.varianceRank) - (a.hybridRank - a.varianceRank))
  .slice(0, 3);

if (biggestGainers.length > 0) {
  console.log('📈 Biggest Gainers (moving up):');
  for (const lib of biggestGainers) {
    const change = lib.varianceRank - lib.hybridRank;
    console.log(`   ${lib.libraryId}: #${lib.varianceRank} → #${lib.hybridRank} (+${change} positions)`);
  }
  console.log('');
}

if (biggestLosers.length > 0) {
  console.log('📉 Biggest Losers (moving down):');
  for (const lib of biggestLosers) {
    const change = lib.hybridRank - lib.varianceRank;
    console.log(`   ${lib.libraryId}: #${lib.varianceRank} → #${lib.hybridRank} (-${change} positions)`);
  }
  console.log('');
}

// Top position change
const topVariance = varianceSorted[0];
const topHybrid = hybridSorted[0];

if (topVariance.libraryId !== topHybrid.libraryId) {
  console.log(`🏆 #1 Position Change:`);
  console.log(`   Variance-based: ${topVariance.libraryId} (${topVariance.varianceScore.toFixed(1)})`);
  console.log(`   Hybrid weighted: ${topHybrid.libraryId} (${topHybrid.hybridScore.toFixed(1)})`);
  console.log('');
} else {
  console.log(`🏆 #1 Position Unchanged: ${topVariance.libraryId} maintains lead in both systems`);
  console.log('');
}

// ========================================
// Weight Distribution Impact
// ========================================

console.log('╔════════════════════════════════════════════════════════════════════════════╗');
console.log('║                      WEIGHT DISTRIBUTION IMPACT                            ║');
console.log('╚════════════════════════════════════════════════════════════════════════════╝\n');

// Compare category weights
const categoryWeightComparison = new Map<string, { variance: number; hybrid: number }>();

for (const [testName, weight] of varianceWeights.entries()) {
  const hybridWeight = hybridWeights.get(testName);
  if (!hybridWeight) continue;

  const category = hybridWeight.category;
  const existing = categoryWeightComparison.get(category) || { variance: 0, hybrid: 0 };
  existing.variance += weight;
  existing.hybrid += hybridWeight.hybridWeight;
  categoryWeightComparison.set(category, existing);
}

console.log('Category              | Variance | Hybrid  | Change');
console.log('----------------------|----------|---------|----------');

const categories = [...categoryWeightComparison.entries()].sort((a, b) => b[1].hybrid - a[1].hybrid);

for (const [category, weights] of categories) {
  const name = category.padEnd(21);
  const vWeight = `${(weights.variance * 100).toFixed(1)}%`.padStart(8);
  const hWeight = `${(weights.hybrid * 100).toFixed(1)}%`.padStart(7);
  const change = weights.hybrid - weights.variance;
  const changeStr = change >= 0
    ? `+${(change * 100).toFixed(1)}%`
    : `${(change * 100).toFixed(1)}%`;

  console.log(`${name} | ${vWeight} | ${hWeight} | ${changeStr.padStart(8)}`);
}

console.log('\n');

// ========================================
// Conclusion
// ========================================

console.log('╔════════════════════════════════════════════════════════════════════════════╗');
console.log('║                               CONCLUSION                                   ║');
console.log('╚════════════════════════════════════════════════════════════════════════════╝\n');

const rankChanges = scores.filter(s => s.varianceRank !== s.hybridRank).length;
const totalLibraries = scores.length;

console.log(`Total libraries: ${totalLibraries}`);
console.log(`Rankings changed: ${rankChanges} (${((rankChanges / totalLibraries) * 100).toFixed(0)}%)`);
console.log(`Rankings unchanged: ${totalLibraries - rankChanges} (${(((totalLibraries - rankChanges) / totalLibraries) * 100).toFixed(0)}%)`);
console.log('');

console.log('Hybrid weighting system:');
console.log('✅ Increases weight of core functionality (reactivity: 5.9% → 15%)');
console.log('✅ Maintains data-driven variance-based weights within categories');
console.log('✅ Better reflects both usage frequency and functional importance');
console.log('✅ May change rankings to better represent real-world value');
console.log('');
