/**
 * Main benchmark runner - tests all state management libraries
 */

import { runReduxBenchmarks } from '@/benchmarks/redux.benchmark';
import { runZustandBenchmarks } from '@/benchmarks/zustand.benchmark';
import { runJotaiBenchmarks } from '@/benchmarks/jotai.benchmark';
import { runMobXBenchmarks } from '@/benchmarks/mobx.benchmark';
import { runValtioBenchmarks } from '@/benchmarks/valtio.benchmark';
import { runRecoilBenchmarks } from '@/benchmarks/recoil.benchmark';
import { getSystemInfo } from '@/utils/benchmark-utils';
import { BenchmarkSuite, ComparisonReport } from '@/types';

/**
 * Available benchmark runners
 */
const BENCHMARK_RUNNERS = {
  'Redux Toolkit': runReduxBenchmarks,
  'Zustand': runZustandBenchmarks,
  'Jotai': runJotaiBenchmarks,
  'MobX': runMobXBenchmarks,
  'Valtio': runValtioBenchmarks,
  'Recoil': runRecoilBenchmarks
};

/**
 * Run benchmarks for all libraries
 */
export async function runAllBenchmarks(libraries?: string[]): Promise<ComparisonReport> {
  console.log('🚀 Starting State Management Benchmark Suite\n');

  const systemInfo = getSystemInfo();
  console.log('📋 System Information:');
  console.log(`   Node.js: ${systemInfo.nodeVersion}`);
  console.log(`   Platform: ${systemInfo.platform} (${systemInfo.arch})`);
  console.log(`   CPU Cores: ${systemInfo.cpuCount}`);
  console.log(`   Memory: ${(systemInfo.totalMemory / 1024 / 1024 / 1024).toFixed(2)}GB total, ${(systemInfo.freeMemory / 1024 / 1024 / 1024).toFixed(2)}GB free\n`);

  const librariesToTest = libraries || Object.keys(BENCHMARK_RUNNERS);
  const suites: BenchmarkSuite[] = [];

  for (const libraryName of librariesToTest) {
    const runner = BENCHMARK_RUNNERS[libraryName as keyof typeof BENCHMARK_RUNNERS];

    if (!runner) {
      console.warn(`⚠️  Unknown library: ${libraryName}`);
      continue;
    }

    try {
      console.log(`\n🏃 Running benchmarks for ${libraryName}...`);
      const results = await runner();

      // Calculate overall score (weighted average of ops/sec)
      const overallScore = results.reduce((sum, result) => sum + result.opsPerSec, 0) / results.length;

      suites.push({
        config: {
          name: libraryName,
          version: 'latest', // TODO: Get actual version
          category: getCategory(libraryName),
          enabled: true
        },
        scenarios: [], // TODO: Include scenario details
        results,
        overallScore: Number(overallScore.toFixed(2))
      });

      console.log(`✅ ${libraryName} benchmarks completed`);
    } catch (error) {
      console.error(`❌ Error running ${libraryName} benchmarks:`, error);
    }
  }

  // Generate rankings
  const rankings = generateRankings(suites);

  // Generate recommendations
  const recommendations = generateRecommendations(suites, rankings);

  const report: ComparisonReport = {
    timestamp: new Date(),
    nodeVersion: systemInfo.nodeVersion,
    systemInfo: {
      platform: systemInfo.platform,
      arch: systemInfo.arch,
      cpuCount: systemInfo.cpuCount,
      totalMemory: systemInfo.totalMemory,
      freeMemory: systemInfo.freeMemory
    },
    suites,
    rankings,
    recommendations
  };

  return report;
}

/**
 * Get category for a library
 */
function getCategory(libraryName: string): 'flux' | 'atomic' | 'reactive' | 'framework' | 'emerging' {
  const categories = {
    'Redux Toolkit': 'flux',
    'Zustand': 'atomic',
    'Jotai': 'atomic',
    'MobX': 'reactive',
    'Valtio': 'reactive',
    'Recoil': 'atomic'
  };

  return (categories[libraryName as keyof typeof categories] || 'emerging') as any;
}

/**
 * Generate performance rankings
 */
function generateRankings(suites: BenchmarkSuite[]) {
  // Calculate average metrics for each library
  const libraryStats = suites.map(suite => ({
    library: suite.config.name,
    avgTime: suite.results.reduce((sum, r) => sum + r.avgTime, 0) / suite.results.length,
    opsPerSec: suite.results.reduce((sum, r) => sum + r.opsPerSec, 0) / suite.results.length,
    memoryEfficiency: Math.abs(suite.results.reduce((sum, r) => sum + r.memoryDelta, 0) / suite.results.length)
  }));

  return {
    byAvgTime: libraryStats
      .sort((a, b) => a.avgTime - b.avgTime)
      .map((stat, index) => ({ library: stat.library, score: 100 - index * 10 })),
    byOpsPerSec: libraryStats
      .sort((a, b) => b.opsPerSec - a.opsPerSec)
      .map((stat, index) => ({ library: stat.library, score: 100 - index * 10 })),
    byMemoryEfficiency: libraryStats
      .sort((a, b) => a.memoryEfficiency - b.memoryEfficiency)
      .map((stat, index) => ({ library: stat.library, score: 100 - index * 10 })),
    overall: libraryStats
      .sort((a, b) => b.opsPerSec - a.opsPerSec)
      .map((stat, index) => ({ library: stat.library, score: 100 - index * 10 }))
  };
}

/**
 * Generate recommendations based on results
 */
function generateRecommendations(suites: BenchmarkSuite[], rankings: any): string[] {
  const recommendations: string[] = [];

  // Find best performers
  const fastestOps = rankings.byOpsPerSec[0];
  const mostMemoryEfficient = rankings.byMemoryEfficiency[0];

  recommendations.push(`🏆 Best Overall Performance: ${fastestOps.library}`);
  recommendations.push(`💾 Most Memory Efficient: ${mostMemoryEfficient.library}`);

  // Category-specific recommendations
  const categories = ['flux', 'atomic', 'reactive'];
  categories.forEach(category => {
    const categoryLibs = suites.filter(s => s.config.category === category);
    if (categoryLibs.length > 0) {
      const bestInCategory = categoryLibs.sort((a, b) => b.overallScore - a.overallScore)[0];
      recommendations.push(`📊 Best ${category.charAt(0).toUpperCase() + category.slice(1)}: ${bestInCategory.config.name}`);
    }
  });

  // Usage-based recommendations
  recommendations.push('\n💡 Usage Recommendations:');
  recommendations.push('   • For simple apps: Use Zustand or Jotai for minimal boilerplate');
  recommendations.push('   • For complex apps: Redux Toolkit provides the most structure');
  recommendations.push('   • For reactive UI: MobX offers excellent reactivity');
  recommendations.push('   • For atomic state: Jotai provides great granularity');

  return recommendations;
}

/**
 * Print benchmark results
 */
export function printResults(report: ComparisonReport) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 STATE MANAGEMENT BENCHMARK RESULTS');
  console.log('='.repeat(80));

  console.log(`\n📅 Generated: ${report.timestamp.toLocaleString()}`);
  console.log(`🔧 Node.js: ${report.nodeVersion}`);
  console.log(`💻 Platform: ${report.systemInfo.platform} (${report.systemInfo.arch})`);

  console.log('\n🏆 OVERALL RANKINGS');
  console.log('-'.repeat(40));
  report.rankings.overall.forEach((ranking, index) => {
    const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍';
    console.log(`${emoji} ${index + 1}. ${ranking.library} (Score: ${ranking.score})`);
  });

  console.log('\n📈 PERFORMANCE BY CATEGORY');
  console.log('-'.repeat(40));
  console.log('\n⚡ Operations per Second (Higher is better):');
  report.rankings.byOpsPerSec.slice(0, 3).forEach((ranking, index) => {
    console.log(`   ${index + 1}. ${ranking.library}: ${ranking.score} pts`);
  });

  console.log('\n⏱️  Response Time (Lower is better):');
  report.rankings.byAvgTime.slice(0, 3).forEach((ranking, index) => {
    console.log(`   ${index + 1}. ${ranking.library}: ${ranking.score} pts`);
  });

  console.log('\n💾 Memory Efficiency (Lower usage is better):');
  report.rankings.byMemoryEfficiency.slice(0, 3).forEach((ranking, index) => {
    console.log(`   ${index + 1}. ${ranking.library}: ${ranking.score} pts`);
  });

  console.log('\n💡 RECOMMENDATIONS');
  console.log('-'.repeat(40));
  report.recommendations.forEach(rec => console.log(rec));

  console.log('\n' + '='.repeat(80));
}

// Run all benchmarks if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const librariesToTest = process.argv.slice(2);

  runAllBenchmarks(librariesToTest.length > 0 ? librariesToTest : undefined)
    .then(report => {
      printResults(report);

      // Save results to file
      import('fs').then(fs => {
        const reportPath = `reports/benchmark-${Date.now()}.json`;
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`\n💾 Full report saved to: ${reportPath}`);
      });
    })
    .catch(console.error);
}