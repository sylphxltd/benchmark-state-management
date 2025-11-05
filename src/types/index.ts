/**
 * Core benchmark types and interfaces
 */

export interface BenchmarkConfig {
  /** Name of the state management library */
  name: string;
  /** Version of the library */
  version: string;
  /** Category of the state management approach */
  category: 'flux' | 'atomic' | 'reactive' | 'framework' | 'emerging';
  /** Whether to include this library in benchmarks */
  enabled: boolean;
}

export interface BenchmarkScenario {
  /** Name/ID of the scenario */
  name: string;
  /** Description of what this scenario tests */
  description: string;
  /** Number of operations to perform */
  iterations: number;
  /** Size of the state (number of items/properties) */
  stateSize: number;
  /** Number of subscribers/listeners */
  subscribers: number;
}

export interface BenchmarkResult {
  /** Library being benchmarked */
  library: string;
  /** Scenario being tested */
  scenario: string;
  /** Average time per operation (ms) */
  avgTime: number;
  /** Minimum time (ms) */
  minTime: number;
  /** Maximum time (ms) */
  maxTime: number;
  /** Standard deviation */
  stdDev: number;
  /** Operations per second */
  opsPerSec: number;
  /** Memory usage before benchmark (MB) */
  memoryBefore: number;
  /** Memory usage after benchmark (MB) */
  memoryAfter: number;
  /** Memory delta (MB) */
  memoryDelta: number;
}

export interface BenchmarkSuite {
  /** Configuration of the library */
  config: BenchmarkConfig;
  /** All scenarios to test */
  scenarios: BenchmarkScenario[];
  /** Results for each scenario */
  results: BenchmarkResult[];
  /** Overall performance score */
  overallScore: number;
}

export interface ComparisonReport {
  /** Timestamp when report was generated */
  timestamp: Date;
  /** Node.js version */
  nodeVersion: string;
  /** System information */
  systemInfo: {
    platform: string;
    arch: string;
    cpuCount: number;
    totalMemory: number;
    freeMemory: number;
  };
  /** All benchmark suites */
  suites: BenchmarkSuite[];
  /** Performance rankings */
  rankings: {
    byAvgTime: Array<{ library: string; score: number }>;
    byOpsPerSec: Array<{ library: string; score: number }>;
    byMemoryEfficiency: Array<{ library: string; score: number }>;
    overall: Array<{ library: string; score: number }>;
  };
  /** Recommendations based on results */
  recommendations: string[];
}

export interface StateOperations {
  /** Initialize state with given data */
  initialize: (data: any) => void;
  /** Read state value */
  read: () => any;
  /** Write/update state value */
  write: (value: any) => void;
  /** Subscribe to state changes */
  subscribe: (callback: () => void) => () => void;
  /** Batch multiple state updates */
  batch: (updates: Array<() => void>) => void;
  /** Clean up resources */
  cleanup: () => void;
}

export type BenchmarkFunction = (operations: StateOperations, scenario: BenchmarkScenario) => Promise<void>;

export interface BenchmarkTest {
  name: string;
  fn: BenchmarkFunction;
  setup?: () => void;
  teardown?: () => void;
}