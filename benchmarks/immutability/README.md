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

- **⚡ Maximum Performance**: Craft - Fastest overall with 90.1/100 score
- **⚖️ Best Balance**: Immer - Great performance (33.4/100) with good ecosystem
- **🎯 Popular Choice**: Mutative - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 90.1/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immer** (Score: 33.4/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Mutative** (Score: 6.2/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Native Spread** (Score: 1.2/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Immutability Helper** (Score: 1.1/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


</details>

---

## 📊 Overall Performance Rankings

> **🆕 Dual Ranking System**
>
> This category uses **hybrid weighting** that balances functional importance with data-driven stability.
> Both ranking systems are shown below for comparison.
>
> - **Hybrid Weighted** (primary): Balances category importance × test stability
> - **Variance-Based** (reference): Pure data-driven weighting
>
> See [Hybrid Weighting Analysis](../../HYBRID_WEIGHTING_ANALYSIS.md) for methodology.

### 🎯 Hybrid Weighted Rankings

Based on **two-tier weighted geometric mean** combining category importance with variance-based test weights.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 77.3/100 | 100% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 12.2/100 | 16% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
| 🥉 3 | **[Craft](https://github.com/SylphxAI/craft)** | 8.9/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 6.0/100 | 8% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](https://github.com/immerjs/immer)** | 5.1/100 | 7% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 4.7/100 | 6% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.8/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 90.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Immer](https://github.com/immerjs/immer)** | 33.4/100 | 37% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
| 🥉 3 | **[Mutative](https://github.com/unadlib/mutative)** | 6.2/100 | 7% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  4 | **[Native Spread](#)** | 1.2/100 | 1% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.1/100 | 1% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.0/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **90.1** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **33.4** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **6.2** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Native Spread](#)** | **1.2** | N/A | State management solution... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **1.1** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **1.1** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **1.0** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   16.4M ops/sec
🥈 Immutability Helper ███                                        1.3M ops/sec
🥉 Craft              ██                                         938K ops/sec
 Immutable.js       ██                                         794K ops/sec
 Immer              █                                          594K ops/sec
 Mutative           █                                          500K ops/sec
 Seamless Immutable █                                          430K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 16.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.3M | 0.001ms | 0.005ms | 1000 |
| Craft | 938K | 0.001ms | 0.007ms | 1000 |
| Immutable.js | 794K | 0.001ms | 0.008ms | 1000 |
| Immer | 594K | 0.002ms | 0.016ms | 1000 |
| Mutative | 500K | 0.002ms | 0.013ms | 1000 |
| Seamless Immutable | 430K | 0.002ms | 0.008ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   9.3M ops/sec
🥈 Immutability Helper █████                                      1.2M ops/sec
🥉 Craft              ███                                        602K ops/sec
 Mutative           ██                                         416K ops/sec
 Immer              ██                                         371K ops/sec
 Immutable.js       █                                          251K ops/sec
 Seamless Immutable █                                          134K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.3M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 1.2M | 0.001ms | 0.003ms | 1000 |
| Craft | 602K | 0.002ms | 0.005ms | 1000 |
| Mutative | 416K | 0.002ms | 0.008ms | 1000 |
| Immer | 371K | 0.003ms | 0.009ms | 1000 |
| Immutable.js | 251K | 0.004ms | 0.026ms | 1000 |
| Seamless Immutable | 134K | 0.007ms | 0.013ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   12.4M ops/sec
🥈 Immutability Helper ███████                                    2.3M ops/sec
🥉 Immutable.js       ████                                       1.2M ops/sec
 Craft              ███                                        857K ops/sec
 Mutative           ██                                         490K ops/sec
 Immer              ██                                         477K ops/sec
 Seamless Immutable                                            139K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 12.4M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.002ms | 1000 |
| Immutable.js | 1.2M | 0.001ms | 0.005ms | 1000 |
| Craft | 857K | 0.001ms | 0.004ms | 1000 |
| Mutative | 490K | 0.002ms | 0.006ms | 1000 |
| Immer | 477K | 0.002ms | 0.008ms | 1000 |
| Seamless Immutable | 139K | 0.007ms | 0.013ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   7.3M ops/sec
🥈 Immutability Helper ███████████                                2.0M ops/sec
🥉 Immutable.js       ████                                       656K ops/sec
 Craft              ███                                        590K ops/sec
 Immer              ██                                         367K ops/sec
 Mutative           ██                                         281K ops/sec
 Seamless Immutable █                                          152K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.3M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.0M | 0.001ms | 0.002ms | 1000 |
| Immutable.js | 656K | 0.002ms | 0.007ms | 1000 |
| Craft | 590K | 0.002ms | 0.004ms | 1000 |
| Immer | 367K | 0.003ms | 0.006ms | 1000 |
| Mutative | 281K | 0.004ms | 0.008ms | 1000 |
| Seamless Immutable | 152K | 0.007ms | 0.011ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   6.2M ops/sec
🥈 Craft              ██████                                     888K ops/sec
🥉 Immutability Helper ████                                       685K ops/sec
 Mutative           ███                                        493K ops/sec
 Immer              ███                                        461K ops/sec
 Immutable.js       ██                                         358K ops/sec
 Seamless Immutable █                                          97K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.2M | 0.000ms | 0.001ms | 1000 |
| Craft | 888K | 0.001ms | 0.004ms | 1000 |
| Immutability Helper | 685K | 0.001ms | 0.003ms | 1000 |
| Mutative | 493K | 0.002ms | 0.005ms | 1000 |
| Immer | 461K | 0.002ms | 0.007ms | 1000 |
| Immutable.js | 358K | 0.003ms | 0.010ms | 1000 |
| Seamless Immutable | 97K | 0.010ms | 0.016ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   2.3M ops/sec
🥈 Immutability Helper █████████████████                          930K ops/sec
🥉 Craft              ███████                                    389K ops/sec
 Immutable.js       ███████                                    371K ops/sec
 Immer              ██████                                     312K ops/sec
 Mutative           █████                                      290K ops/sec
 Seamless Immutable ██                                         101K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.3M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 930K | 0.001ms | 0.003ms | 1000 |
| Craft | 389K | 0.003ms | 0.006ms | 1000 |
| Immutable.js | 371K | 0.003ms | 0.005ms | 1000 |
| Immer | 312K | 0.003ms | 0.006ms | 1000 |
| Mutative | 290K | 0.003ms | 0.008ms | 1000 |
| Seamless Immutable | 101K | 0.010ms | 0.013ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   8.4M ops/sec
🥈 Craft              ███                                        694K ops/sec
🥉 Immutability Helper ███                                        670K ops/sec
 Immutable.js       ██                                         369K ops/sec
 Immer              ██                                         342K ops/sec
 Mutative           █                                          288K ops/sec
 Seamless Immutable                                            76K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 8.4M | 0.000ms | 0.000ms | 1000 |
| Craft | 694K | 0.001ms | 0.004ms | 1000 |
| Immutability Helper | 670K | 0.001ms | 0.003ms | 1000 |
| Immutable.js | 369K | 0.003ms | 0.005ms | 1000 |
| Immer | 342K | 0.003ms | 0.006ms | 1000 |
| Mutative | 288K | 0.003ms | 0.009ms | 1000 |
| Seamless Immutable | 76K | 0.013ms | 0.019ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Mutative           ████████████████████████████████████████   118K ops/sec
🥈 Native Spread      ██████████████████████████████             89K ops/sec
🥉 Immutability Helper ████████                                   25K ops/sec
 Craft              ████                                       11K ops/sec
 Immer              █                                          4K ops/sec
 Immutable.js       █                                          3K ops/sec
 Seamless Immutable                                            1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 118K | 0.008ms | 0.015ms | 1000 |
| Native Spread | 89K | 0.011ms | 0.023ms | 1000 |
| Immutability Helper | 25K | 0.041ms | 0.050ms | 1000 |
| Craft | 11K | 0.087ms | 0.101ms | 1000 |
| Immer | 4K | 0.234ms | 0.519ms | 1000 |
| Immutable.js | 3K | 0.343ms | 0.715ms | 1000 |
| Seamless Immutable | 1K | 0.937ms | 1.375ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   1.5M ops/sec
🥈 Immer              █████████                                  336K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.5M | 0.001ms | 0.004ms | 1000 |
| Immer | 336K | 0.003ms | 0.010ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   476K ops/sec
🥈 Immer              ██████████████████████                     267K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 476K | 0.002ms | 0.007ms | 1000 |
| Immer | 267K | 0.004ms | 0.012ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   577K ops/sec
🥈 Immer              █████████████                              184K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 577K | 0.002ms | 0.005ms | 1000 |
| Immer | 184K | 0.005ms | 0.009ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   462K ops/sec
🥈 Immer              ███████████████████                        220K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 462K | 0.002ms | 0.007ms | 1000 |
| Immer | 220K | 0.005ms | 0.008ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   110K ops/sec
🥈 Mutative           ███████████████████████████████████████    107K ops/sec
🥉 Immer              ███████████                                30K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 110K | 0.009ms | 0.021ms | 1000 |
| Mutative | 107K | 0.009ms | 0.019ms | 1000 |
| Immer | 30K | 0.033ms | 0.050ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   1.2M ops/sec
🥈 Mutative           ████████████                               369K ops/sec
🥉 Immer              ████████████                               368K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.2M | 0.001ms | 0.003ms | 1000 |
| Mutative | 369K | 0.003ms | 0.007ms | 1000 |
| Immer | 368K | 0.003ms | 0.009ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   1.5M ops/sec
🥈 Mutative           ████████████                               452K ops/sec
🥉 Immer              █████████                                  341K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.5M | 0.001ms | 0.002ms | 1000 |
| Mutative | 452K | 0.002ms | 0.005ms | 1000 |
| Immer | 341K | 0.003ms | 0.010ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   1.4M ops/sec
🥈 Immer              ██████████████                             512K ops/sec
🥉 Mutative           ████████████                               440K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.4M | 0.001ms | 0.003ms | 1000 |
| Immer | 512K | 0.002ms | 0.005ms | 1000 |
| Mutative | 440K | 0.002ms | 0.006ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              ██████████████████████                     578K ops/sec
🥉 Mutative           █████████████                              339K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 578K | 0.002ms | 0.004ms | 1000 |
| Mutative | 339K | 0.003ms | 0.005ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   260K ops/sec
🥈 Mutative           █████████                                  61K ops/sec
🥉 Immer              ████████                                   54K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 260K | 0.004ms | 0.006ms | 1000 |
| Mutative | 61K | 0.016ms | 0.030ms | 1000 |
| Immer | 54K | 0.019ms | 0.029ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Platform**: GitHub Actions (Ubuntu latest)
- **CPU**: 2-core (Intel Xeon or AMD EPYC equivalent)
- **RAM**: ~7GB available
- **Node.js**: 20.x
- **Warmup**: 100ms + 5 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **weighted geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Test weights calculated based on 90th percentile of performance variance
- Stable tests (low variance) receive higher weight
- Unstable tests (high variance) receive lower weight
- This prevents outlier tests from dominating the overall score

**Example** (from current results):
- High-Frequency Read (stable, factor 7.3): **weight 17.7%**
- Complex Form (unstable, factor 600): **weight 0.2%**

This methodology follows [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)'s weighted geometric mean approach.

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

- **[Craft](https://github.com/SylphxAI/craft)** (`@sylphx/craft`) v1.2.1 • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Immer](https://github.com/immerjs/immer)** (`immer`) v10.2.0 • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Mutative](https://github.com/unadlib/mutative)** (`mutative`) v1.3.0 • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Native Spread](#)** (`native`)  - [📦 npm](https://www.npmjs.com/package/native-spread) • [📊 bundle size](https://bundlephobia.com/package/native-spread)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`immutability-helper`) v3.1.1 • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`immutable`) v5.1.4 • 17.58 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** (`seamless-immutable`) v7.1.4 • 2.71 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

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

*Generated on 2025-11-13T23:50:32.167Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
