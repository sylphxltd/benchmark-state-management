import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export interface BenchmarkResult {
  name: string;
  opsPerSec: number;
  meanTime: number;
  margin: number;
}

export interface CategoryResults {
  [category: string]: {
    name: string;
    opsPerSec: number;
    margin: number;
  }[];
}

export interface LibraryStats {
  library: string;
  avgOpsPerSec: number;
  minOpsPerSec: number;
  maxOpsPerSec: number;
  consistency: number;
}

export interface ReportData {
  timestamp: string;
  nodeVersion: string;
  platform: string;
  testSuite: string;
  categories: CategoryResults;
  overallAverages: LibraryStats[];
  detailedResults: BenchmarkResult[];
}

export function generateReport(
  categories: CategoryResults,
  overallAverages: LibraryStats[],
  detailedResults: BenchmarkResult[],
  testSuite: string = 'comprehensive'
): string {
  const reportData: ReportData = {
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    testSuite,
    categories,
    overallAverages,
    detailedResults
  };

  mkdirSync('reports', { recursive: true });
  const reportPath = join('reports', `${testSuite}-benchmark-${Date.now()}.json`);
  writeFileSync(reportPath, JSON.stringify(reportData, null, 2));

  return reportPath;
}