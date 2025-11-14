import { describe, it, expect } from 'bun:test';
import {
  calculateTestWeights,
  weightedGeometricMean,
  calculateHybridWeights,
  DEFAULT_CATEGORY_WEIGHTS,
  type BenchmarkResult,
  type LibraryBenchmark,
} from '../scoring';

describe('Scoring Module', () => {
  describe('weightedGeometricMean', () => {
    it('should calculate weighted geometric mean correctly', () => {
      const scores = [100, 80, 60];
      const weights = [0.5, 0.3, 0.2];
      const result = weightedGeometricMean(scores, weights);

      // Expected: 100^0.5 * 80^0.3 * 60^0.2 ≈ 84.44
      expect(result).toBeCloseTo(84.44, 1);
    });

    it('should handle single value', () => {
      const scores = [100];
      const weights = [1.0];
      const result = weightedGeometricMean(scores, weights);

      expect(result).toBe(100);
    });

    it('should handle zero scores by replacing with 0.01', () => {
      const scores = [0, 100];
      const weights = [0.5, 0.5];
      const result = weightedGeometricMean(scores, weights);

      // 0.01^0.5 * 100^0.5 = 0.1 * 10 = 1
      expect(result).toBeCloseTo(1, 1);
    });

    it('should throw error if scores and weights length mismatch', () => {
      expect(() => {
        weightedGeometricMean([100, 80], [0.5]);
      }).toThrow('Scores and weights must have same length');
    });

    it('should return 0 for empty arrays', () => {
      const result = weightedGeometricMean([], []);
      expect(result).toBe(0);
    });
  });

  describe('calculateTestWeights', () => {
    const createMockLibrary = (
      libraryId: string,
      results: Array<{ test: string; group: string; opsPerSecond: number }>
    ): LibraryBenchmark => ({
      library: libraryId,
      libraryId,
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      results: results.map((r) => ({
        ...r,
        meanTime: 1 / r.opsPerSecond,
        variance: 0.1,
        p99: 0.1,
        samples: 1000,
      })),
    });

    it('should calculate weights for multiple libraries', () => {
      const libraries: LibraryBenchmark[] = [
        createMockLibrary('fast', [
          { test: 'test1', group: 'group1', opsPerSecond: 1000 },
          { test: 'test2', group: 'group1', opsPerSecond: 900 },
        ]),
        createMockLibrary('slow', [
          { test: 'test1', group: 'group1', opsPerSecond: 100 },
          { test: 'test2', group: 'group1', opsPerSecond: 90 },
        ]),
      ];

      const weights = calculateTestWeights(libraries);

      expect(weights.size).toBe(2);
      expect(weights.has('test1')).toBe(true);
      expect(weights.has('test2')).toBe(true);

      // Weights should sum to 1.0
      const sum = Array.from(weights.values()).reduce((a, b) => a + b, 0);
      expect(sum).toBeCloseTo(1.0, 5);
    });

    it('should return empty map for empty libraries', () => {
      const weights = calculateTestWeights([]);
      expect(weights.size).toBe(0);
    });

    it('should handle single library', () => {
      const libraries = [
        createMockLibrary('lib1', [
          { test: 'test1', group: 'group1', opsPerSecond: 1000 },
        ]),
      ];

      const weights = calculateTestWeights(libraries);
      expect(weights.size).toBe(1);
      expect(weights.get('test1')).toBeCloseTo(1.0, 5);
    });

    it('should give lower weight to tests with high variance', () => {
      // Test with very different speeds has high variance
      const libraries: LibraryBenchmark[] = [
        createMockLibrary('lib1', [
          { test: 'stable', group: 'group1', opsPerSecond: 1000 },
          { test: 'unstable', group: 'group1', opsPerSecond: 1000 },
        ]),
        createMockLibrary('lib2', [
          { test: 'stable', group: 'group1', opsPerSecond: 900 }, // 10% difference
          { test: 'unstable', group: 'group1', opsPerSecond: 100 }, // 90% difference
        ]),
      ];

      const weights = calculateTestWeights(libraries);

      // Unstable test should have lower weight
      const stableWeight = weights.get('stable') || 0;
      const unstableWeight = weights.get('unstable') || 0;

      expect(unstableWeight).toBeLessThan(stableWeight);
    });
  });

  describe('calculateHybridWeights', () => {
    const createMockLibrary = (
      libraryId: string,
      results: Array<{ test: string; group: string; opsPerSecond: number }>
    ): LibraryBenchmark => ({
      library: libraryId,
      libraryId,
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      results: results.map((r) => ({
        ...r,
        meanTime: 1 / r.opsPerSecond,
        variance: 0.1,
        p99: 0.1,
        samples: 1000,
      })),
    });

    it('should calculate hybrid weights with default category weights', () => {
      const libraries: LibraryBenchmark[] = [
        createMockLibrary('lib1', [
          { test: 'read-test', group: 'basic-read', opsPerSecond: 1000 },
          { test: 'write-test', group: 'basic-write', opsPerSecond: 500 },
        ]),
        createMockLibrary('lib2', [
          { test: 'read-test', group: 'basic-read', opsPerSecond: 900 },
          { test: 'write-test', group: 'basic-write', opsPerSecond: 450 },
        ]),
      ];

      const hybridWeights = calculateHybridWeights(libraries);

      expect(hybridWeights.size).toBe(2);
      expect(hybridWeights.has('read-test')).toBe(true);
      expect(hybridWeights.has('write-test')).toBe(true);

      // Hybrid weights should sum to the total of the category weights used
      // basic-read (0.35) + basic-write (0.10) = 0.45
      const sum = Array.from(hybridWeights.values()).reduce((a, b) => a + b.hybridWeight, 0);
      expect(sum).toBeCloseTo(0.45, 5);
    });

    it('should use custom category weights', () => {
      const libraries: LibraryBenchmark[] = [
        createMockLibrary('lib1', [
          { test: 'read-test', group: 'basic-read', opsPerSecond: 1000 },
          { test: 'write-test', group: 'basic-write', opsPerSecond: 500 },
        ]),
      ];

      const customWeights = {
        'basic-read': 0.7,
        'basic-write': 0.3,
      };

      const hybridWeights = calculateHybridWeights(libraries, customWeights);

      const readWeight = hybridWeights.get('read-test');
      const writeWeight = hybridWeights.get('write-test');

      expect(readWeight).toBeDefined();
      expect(writeWeight).toBeDefined();

      // Read should have higher weight due to custom category weight
      expect(readWeight!.hybridWeight).toBeGreaterThan(writeWeight!.hybridWeight);
    });

    it('should include category weight in result', () => {
      const libraries: LibraryBenchmark[] = [
        createMockLibrary('lib1', [
          { test: 'read-test', group: 'basic-read', opsPerSecond: 1000 },
        ]),
      ];

      const hybridWeights = calculateHybridWeights(libraries);
      const readWeight = hybridWeights.get('read-test');

      expect(readWeight).toBeDefined();
      expect(readWeight!.categoryWeight).toBe(DEFAULT_CATEGORY_WEIGHTS['basic-read']);
      expect(readWeight!.category).toBe('basic-read');
    });

    it('should return empty map for empty libraries', () => {
      const hybridWeights = calculateHybridWeights([]);
      expect(hybridWeights.size).toBe(0);
    });
  });

  describe('DEFAULT_CATEGORY_WEIGHTS', () => {
    it('should sum to 1.0', () => {
      const sum = Object.values(DEFAULT_CATEGORY_WEIGHTS).reduce((a, b) => a + b, 0);
      expect(sum).toBeCloseTo(1.0, 5);
    });

    it('should have basic-read as highest weight', () => {
      const weights = Object.entries(DEFAULT_CATEGORY_WEIGHTS);
      const highest = weights.reduce((max, [key, value]) =>
        value > max[1] ? [key, value] : max
      );

      expect(highest[0]).toBe('basic-read');
      expect(highest[1]).toBe(0.35);
    });

    it('should include all expected categories', () => {
      const expectedCategories = [
        'basic-read',
        'reactivity-patterns',
        'performance-stress',
        'advanced-operations',
        'basic-write',
        'real-world',
        'async-operations',
      ];

      for (const category of expectedCategories) {
        expect(DEFAULT_CATEGORY_WEIGHTS).toHaveProperty(category);
      }
    });
  });
});
