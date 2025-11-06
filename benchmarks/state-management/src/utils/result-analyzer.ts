import { Bench, Task } from 'tinybench';
import { benchmarkCategories } from '../benchmarks/benchmark-definitions';
import { CategoryResults, LibraryStats, BenchmarkResult } from './report-generator';

export function analyzeResults(bench: Bench): {
  categories: CategoryResults;
  overallAverages: LibraryStats[];
  detailedResults: BenchmarkResult[];
} {
  const categories: CategoryResults = {};
  const libraryStats: { [library: string]: { total: number; count: number; results: number[] } } = {};
  const detailedResults: BenchmarkResult[] = [];

  // Initialize categories
  benchmarkCategories.forEach(category => {
    categories[category] = [];
  });

  // Process results
  bench.tasks.forEach(task => {
    if (task.result) {
      const library = task.name.split(' - ')[0];
      const category = task.name.split(' - ')[1];

      // Add to category results
      if (categories[category]) {
        categories[category].push({
          name: library,
          opsPerSec: task.result.hz,
          margin: task.result.rme
        });
      }

      // Add to library stats
      if (!libraryStats[library]) {
        libraryStats[library] = { total: 0, count: 0, results: [] };
      }
      libraryStats[library].total += task.result.hz;
      libraryStats[library].count++;
      libraryStats[library].results.push(task.result.hz);

      // Add to detailed results
      detailedResults.push({
        name: task.name,
        opsPerSec: task.result.hz,
        meanTime: 1000 / task.result.hz,
        margin: task.result.rme
      });
    }
  });

  // Calculate overall averages
  const overallAverages: LibraryStats[] = Object.entries(libraryStats)
    .map(([library, stats]) => ({
      library,
      avgOpsPerSec: stats.total / stats.count,
      minOpsPerSec: Math.min(...stats.results),
      maxOpsPerSec: Math.max(...stats.results),
      consistency: (Math.min(...stats.results) / Math.max(...stats.results)) * 100
    }))
    .sort((a, b) => b.avgOpsPerSec - a.avgOpsPerSec);

  return {
    categories,
    overallAverages,
    detailedResults
  };
}