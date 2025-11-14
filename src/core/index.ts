/**
 * Core framework exports
 */

// Core types and base classes
export * from './types';
export { Category, createCategory } from './category';
export { Group } from './group';
export { Test } from './test';
export { Library } from './library';
export { BenchmarkRunner } from './runner';

// Utility modules
export { checkVersions } from './version-checker';
export {
  measureBundleSize,
  updateCategoryBundleSizes,
  updateAllBundleSizes
} from './bundle-sizes';
export {
  calculateTestWeights,
  calculateHybridWeights,
  weightedGeometricMean,
  loadCategoryWeights,
  loadCategoryWeightsSync,
  hasHybridWeightingConfig,
  getTestWeightDetails,
  DEFAULT_CATEGORY_WEIGHTS,
  type TestWeight,
  type HybridTestWeight
} from './scoring';
export { generateCategoryReadme } from './readme-generator';
export { generateRootReadme } from './root-readme-generator';
export { scaffoldCategory } from './scaffolder';
