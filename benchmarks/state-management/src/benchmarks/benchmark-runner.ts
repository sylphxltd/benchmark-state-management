import { Bench } from 'tinybench';
import { benchmarkLibraries, benchmarkCategories } from './benchmark-definitions';
import { analyzeResults } from '../utils/result-analyzer';
import { generateReport } from '../utils/report-generator';

export class BenchmarkRunner {
  private bench: Bench;

  constructor(timeMs: number = 1000) {
    this.bench = new Bench({ time: timeMs });
    this.setupBenchmarks();
  }

  private setupBenchmarks() {
    benchmarkLibraries.forEach(lib => {
      lib.tests.forEach(test => {
        this.bench.add(`${lib.library} - ${test.category}`, test.fn);
      });
    });
  }

  async runBenchmarks(): Promise<{
    categories: any;
    overallAverages: any;
    detailedResults: any;
    reportPath: string;
  }> {
    console.log('⏱️  Running comprehensive benchmarks...\n');
    await this.bench.run();

    const { categories, overallAverages, detailedResults } = analyzeResults(this.bench);

    // Display results
    this.displayResults(categories, overallAverages);

    // Generate report
    const reportPath = generateReport(categories, overallAverages, detailedResults);

    console.log(`\n💾 Comprehensive report saved to: ${reportPath}`);
    console.log(`🏆 Best Overall Performance: ${overallAverages[0]?.library}`);

    return {
      categories,
      overallAverages,
      detailedResults,
      reportPath
    };
  }

  private displayResults(categories: any, overallAverages: any[]) {
    console.log('📊 COMPREHENSIVE BENCHMARK RESULTS');
    console.log('='.repeat(80));

    // Display by category
    for (const [category, results] of Object.entries(categories)) {
      console.log(`\n🏁 ${category.toUpperCase()}`);
      console.log('-'.repeat(50));

      (results as any[]).sort((a, b) => b.opsPerSec - a.opsPerSec);

      (results as any[]).forEach((result, index) => {
        const rank = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍';
        console.log(`${rank} ${result.name.padEnd(20)} ${result.opsPerSec.toFixed(0).padStart(12)} ops/sec ±${result.margin.toFixed(2)}%`);
      });
    }

    // Display overall averages
    console.log(`\n🏆 OVERALL PERFORMANCE ANALYSIS`);
    console.log('='.repeat(50));

    overallAverages.forEach((stat, index) => {
      const rank = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍';
      console.log(`${rank} ${stat.library.padEnd(20)} ${stat.avgOpsPerSec.toFixed(0).padStart(12)} avg ops/sec (consistency: ${stat.consistency.toFixed(1)}%)`);
    });
  }
}