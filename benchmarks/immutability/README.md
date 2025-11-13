<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-7-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-18-orange?style=flat-square)](#-test-coverage)

[⬅️ Back to Main](../../README.md) • [📊 All Categories](../../README.md#-benchmark-categories) • [🔬 Methodology](#-methodology) • [🚀 Run Locally](#-run-locally)

</div>

---

## 📑 Table of Contents

- [🎯 Quick Recommendations](#-quick-recommendations)
- [📊 Overall Performance Rankings](#-overall-performance-rankings)
- [📈 Library Comparison](#-library-comparison)
- [📊 Performance by Test Group](#-performance-by-test-group)
- [🔬 Methodology](#-methodology)
- [🚀 Run Locally](#-run-locally)
- [🚀 Libraries Tested](#-libraries-tested)

---

## 🎯 Quick Recommendations

**TL;DR** - Choose based on your needs:

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 99.3/100 score
- **⚖️ Best Balance**: Craft - Great performance (47.8/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 99.3/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 47.8/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 24.8/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 18.0/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 17.2/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 99.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 47.8/100 | 48% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 24.8/100 | 25% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 18.0/100 | 18% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](https://github.com/immerjs/immer)** | 17.2/100 | 17% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8.7/100 | 9% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 4% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **99.3** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **47.8** | **2.84 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **24.8** | **2.40 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **18.0** | **12.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **17.2** | **9.21 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **8.7** | **36.25 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **3.9** | **5.99 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   829K ops/sec
🥈 Immutability Helper ████████████████                           322K ops/sec
🥉 Craft              ██████████████                             285K ops/sec
 Immer              █████████                                  186K ops/sec
 Immutable.js       ████████                                   165K ops/sec
 Seamless Immutable ███████                                    137K ops/sec
 Mutative           █████                                      112K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 829K | 0.001ms | 0.008ms | 1000 |
| Immutability Helper | 322K | 0.003ms | 0.017ms | 1000 |
| Craft | 285K | 0.004ms | 0.018ms | 1000 |
| Immer | 186K | 0.005ms | 0.018ms | 1000 |
| Immutable.js | 165K | 0.006ms | 0.031ms | 1000 |
| Seamless Immutable | 137K | 0.007ms | 0.026ms | 1000 |
| Mutative | 112K | 0.009ms | 0.028ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   893K ops/sec
🥈 Immutability Helper █████████                                  197K ops/sec
🥉 Craft              ███████                                    155K ops/sec
 Immer              ████                                       96K ops/sec
 Mutative           ████                                       82K ops/sec
 Immutable.js       ███                                        61K ops/sec
 Seamless Immutable ██                                         45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 893K | 0.001ms | 0.003ms | 1000 |
| Immutability Helper | 197K | 0.005ms | 0.014ms | 1000 |
| Craft | 155K | 0.006ms | 0.028ms | 1000 |
| Immer | 96K | 0.010ms | 0.039ms | 1000 |
| Mutative | 82K | 0.012ms | 0.040ms | 1000 |
| Immutable.js | 61K | 0.017ms | 0.048ms | 1000 |
| Seamless Immutable | 45K | 0.022ms | 0.055ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   1.5M ops/sec
🥈 Immutability Helper █████████                                  347K ops/sec
🥉 Immutable.js       ███████                                    248K ops/sec
 Craft              █████                                      177K ops/sec
 Mutative           ██                                         92K ops/sec
 Immer              ██                                         92K ops/sec
 Seamless Immutable █                                          51K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.5M | 0.001ms | 0.003ms | 1000 |
| Immutability Helper | 347K | 0.003ms | 0.015ms | 1000 |
| Immutable.js | 248K | 0.004ms | 0.018ms | 1000 |
| Craft | 177K | 0.006ms | 0.024ms | 1000 |
| Mutative | 92K | 0.011ms | 0.039ms | 1000 |
| Immer | 92K | 0.011ms | 0.036ms | 1000 |
| Seamless Immutable | 51K | 0.020ms | 0.050ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   919K ops/sec
🥈 Immutability Helper ███████████████████                        428K ops/sec
🥉 Craft              ███████                                    166K ops/sec
 Immutable.js       ██████                                     132K ops/sec
 Immer              ████                                       85K ops/sec
 Mutative           ███                                        75K ops/sec
 Seamless Immutable ██                                         48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 919K | 0.001ms | 0.003ms | 1000 |
| Immutability Helper | 428K | 0.002ms | 0.010ms | 1000 |
| Craft | 166K | 0.006ms | 0.023ms | 1000 |
| Immutable.js | 132K | 0.008ms | 0.027ms | 1000 |
| Immer | 85K | 0.012ms | 0.038ms | 1000 |
| Mutative | 75K | 0.013ms | 0.043ms | 1000 |
| Seamless Immutable | 48K | 0.021ms | 0.048ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   1.2M ops/sec
🥈 Immutability Helper ███████████                                317K ops/sec
🥉 Craft              █████████                                  272K ops/sec
 Mutative           ████                                       104K ops/sec
 Immer              ███                                        98K ops/sec
 Immutable.js       ███                                        78K ops/sec
 Seamless Immutable █                                          35K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.2M | 0.001ms | 0.003ms | 1000 |
| Immutability Helper | 317K | 0.003ms | 0.010ms | 1000 |
| Craft | 272K | 0.004ms | 0.015ms | 1000 |
| Mutative | 104K | 0.010ms | 0.037ms | 1000 |
| Immer | 98K | 0.010ms | 0.033ms | 1000 |
| Immutable.js | 78K | 0.013ms | 0.049ms | 1000 |
| Seamless Immutable | 35K | 0.028ms | 0.066ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   707K ops/sec
🥈 Craft              ████████████                               211K ops/sec
🥉 Immutability Helper ██████████                                 185K ops/sec
 Immutable.js       █████                                      93K ops/sec
 Immer              █████                                      88K ops/sec
 Mutative           ████                                       65K ops/sec
 Seamless Immutable ██                                         43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 707K | 0.001ms | 0.002ms | 1000 |
| Craft | 211K | 0.005ms | 0.013ms | 1000 |
| Immutability Helper | 185K | 0.005ms | 0.024ms | 1000 |
| Immutable.js | 93K | 0.011ms | 0.032ms | 1000 |
| Immer | 88K | 0.011ms | 0.026ms | 1000 |
| Mutative | 65K | 0.016ms | 0.050ms | 1000 |
| Seamless Immutable | 43K | 0.023ms | 0.050ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   1.7M ops/sec
🥈 Craft              █████                                      234K ops/sec
🥉 Immutability Helper ███                                        139K ops/sec
 Immer              ██                                         100K ops/sec
 Mutative           ██                                         80K ops/sec
 Immutable.js       ██                                         74K ops/sec
 Seamless Immutable █                                          33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.7M | 0.001ms | 0.002ms | 1000 |
| Craft | 234K | 0.004ms | 0.016ms | 1000 |
| Immutability Helper | 139K | 0.007ms | 0.022ms | 1000 |
| Immer | 100K | 0.010ms | 0.028ms | 1000 |
| Mutative | 80K | 0.012ms | 0.036ms | 1000 |
| Immutable.js | 74K | 0.014ms | 0.038ms | 1000 |
| Seamless Immutable | 33K | 0.030ms | 0.071ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Mutative           ████████████████████████████████████████   41K ops/sec
🥈 Native Spread      ██████████████████████████████████████     38K ops/sec
🥉 Immutability Helper ███████████                                11K ops/sec
 Craft              ██████                                     6K ops/sec
 Immer              ██                                         2K ops/sec
 Immutable.js       █                                          1K ops/sec
 Seamless Immutable                                            467 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 41K | 0.025ms | 0.070ms | 1000 |
| Native Spread | 38K | 0.026ms | 0.058ms | 1000 |
| Immutability Helper | 11K | 0.091ms | 0.166ms | 1000 |
| Craft | 6K | 0.173ms | 0.335ms | 1000 |
| Immer | 2K | 0.570ms | 1.258ms | 1000 |
| Immutable.js | 1K | 0.911ms | 1.783ms | 1000 |
| Seamless Immutable | 467 | 2.141ms | 3.327ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   489K ops/sec
🥈 Immer              ███████                                    89K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 489K | 0.002ms | 0.008ms | 1000 |
| Immer | 89K | 0.011ms | 0.036ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   138K ops/sec
🥈 Immer              ████████████████████████                   84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 138K | 0.007ms | 0.028ms | 1000 |
| Immer | 84K | 0.012ms | 0.043ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   192K ops/sec
🥈 Immer              █████████████                              62K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 192K | 0.005ms | 0.016ms | 1000 |
| Immer | 62K | 0.016ms | 0.043ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   156K ops/sec
🥈 Immer              █████████████████                          66K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 156K | 0.006ms | 0.021ms | 1000 |
| Immer | 66K | 0.015ms | 0.034ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   58K ops/sec
🥈 Mutative           ██████████████████████████                 37K ops/sec
🥉 Immer              ███████                                    11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 58K | 0.017ms | 0.034ms | 1000 |
| Mutative | 37K | 0.027ms | 0.064ms | 1000 |
| Immer | 11K | 0.094ms | 0.162ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   331K ops/sec
🥈 Mutative           ████████████████                           133K ops/sec
🥉 Immer              ███████████                                88K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 331K | 0.003ms | 0.016ms | 1000 |
| Mutative | 133K | 0.008ms | 0.027ms | 1000 |
| Immer | 88K | 0.011ms | 0.039ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   505K ops/sec
🥈 Mutative           █████████                                  109K ops/sec
🥉 Immer              ████████                                   100K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 505K | 0.002ms | 0.010ms | 1000 |
| Mutative | 109K | 0.009ms | 0.030ms | 1000 |
| Immer | 100K | 0.010ms | 0.034ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   341K ops/sec
🥈 Immer              █████████████████                          142K ops/sec
🥉 Mutative           ████████████                               99K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 341K | 0.003ms | 0.013ms | 1000 |
| Immer | 142K | 0.007ms | 0.026ms | 1000 |
| Mutative | 99K | 0.010ms | 0.033ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   379K ops/sec
🥈 Immer              █████████████████                          163K ops/sec
🥉 Mutative           █████████████                              121K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 379K | 0.003ms | 0.009ms | 1000 |
| Immer | 163K | 0.006ms | 0.020ms | 1000 |
| Mutative | 121K | 0.008ms | 0.034ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   91K ops/sec
🥈 Mutative           ████████████                               28K ops/sec
🥉 Immer              ███████                                    16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 91K | 0.011ms | 0.028ms | 1000 |
| Mutative | 28K | 0.036ms | 0.069ms | 1000 |
| Immer | 16K | 0.061ms | 0.133ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Warmup**: 100 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Geometric mean prevents single test from dominating
- Score of 50 = half the speed of the fastest library on average

### Reproducibility
All tests are deterministic and reproducible:
1. Same versions locked in package.json
2. Same test scenarios for all libraries
3. Multiple runs to ensure consistency
4. Automated via GitHub Actions

</details>

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Navigate to this category
cd benchmarks/immutability

# Install category dependencies
npm install

# Run benchmarks
npm run benchmark

# Generate README
npx tsx ../../scripts/generate-simple-readme.ts .
```

**View Test Code**: [./groups/](./groups/) contains all test implementations

---

## 📦 Test Coverage

- **Basic Operations**: 0 tests
- **Advanced Operations**: 0 tests
- **Async Operations**: 0 tests
- **Real-World Scenarios**: 0 tests
- **Stress Tests**: 0 tests

**Total**: 18 tests × 7 libraries = 126 benchmark runs

---

## 🚀 Libraries Tested

- **[Native Spread](#)** (`native`)  - [📦 npm](https://www.npmjs.com/package/native-spread) • [📊 bundle size](https://bundlephobia.com/package/native-spread)
- **[Craft](https://github.com/SylphxAI/craft)** (`@sylphx/craft`) v1.2.1 • 2.84 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`immutability-helper`) v3.1.1 • 2.40 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Mutative](https://github.com/unadlib/mutative)** (`mutative`) v1.3.0 • 12.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immer](https://github.com/immerjs/immer)** (`immer`) v10.2.0 • 9.21 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`immutable`) v5.1.4 • 36.25 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** (`seamless-immutable`) v7.1.4 • 5.99 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

---

## 🤝 Contributing

Want to add a library or improve tests?

- **Add a Library**: Update `package.json` and `library-metadata.json`, then implement tests
- **Improve Tests**: Edit files in `./groups/` directory
- **Report Issues**: [Open an issue](https://github.com/SylphxAI/benchmark/issues)
- **Suggest Features**: [Start a discussion](https://github.com/SylphxAI/benchmark/discussions)

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed guidelines.

---

## 📚 Related

- [📊 All Benchmark Categories](../../README.md#-benchmark-categories)
- [🏗️ Architecture Documentation](../../ARCHITECTURE.md)
- [⚙️ GitHub Actions Workflow](../../.github/workflows/benchmarks-per-library.yml)
- [🔄 CI/CD Results](https://github.com/SylphxAI/benchmark/actions)

---

<div align="center">

**Found this useful? Give it a ⭐️!**

*Generated on 2025-11-13T15:03:25.629Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
