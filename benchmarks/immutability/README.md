<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2014,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Craft - Fastest overall with 59.5/100 score
- **⚖️ Best Balance**: Immer - Great performance (24.1/100) with good ecosystem
- **🎯 Popular Choice**: Mutative - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 59.5/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immer** (Score: 24.1/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Mutative** (Score: 24.0/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Native Spread** (Score: 3.1/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Immutable.js** (Score: 2.7/100)
- Immutable persistent data collections for Javascript
- **Best for**: General purpose state management
- [GitHub](https://github.com/immutable-js/immutable-js) • [npm](https://www.npmjs.com/package/immutable)


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
| 🥇 1 | **[Native Spread](#)** | 72.8/100 | 100% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 29.0/100 | 40% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8.7/100 | 12% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Craft](https://github.com/SylphxAI/craft)** | 6.0/100 | 8% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  5 | **[Mutative](https://github.com/unadlib/mutative)** | 5.5/100 | 8% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 2.7/100 | 4% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.6/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 59.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Immer](https://github.com/immerjs/immer)** | 24.1/100 | 40% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
| 🥉 3 | **[Mutative](https://github.com/unadlib/mutative)** | 24.0/100 | 40% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  4 | **[Native Spread](#)** | 3.1/100 | 5% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 2.7/100 | 5% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  6 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.2/100 | 2% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.1/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **59.5** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **24.1** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **24.0** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Native Spread](#)** | **3.1** | N/A | State management solution... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **2.7** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **1.2** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **1.1** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   13.4M ops/sec
🥈 Immutable.js       ████████████████████████                   8.0M ops/sec
🥉 Immutability Helper ███████                                    2.3M ops/sec
 Craft              █████                                      1.8M ops/sec
 Mutative           ████                                       1.2M ops/sec
 Immer              ██                                         693K ops/sec
 Seamless Immutable ██                                         542K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.4M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 8.0M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.8M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immer | 693K | 0.002ms | 0.003ms | 1000 |
| Seamless Immutable | 542K | 0.002ms | 0.004ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   6.7M ops/sec
🥈 Immutable.js       █████████                                  1.5M ops/sec
🥉 Immutability Helper █████                                      819K ops/sec
 Craft              ████                                       594K ops/sec
 Mutative           ██                                         391K ops/sec
 Immer              ██                                         286K ops/sec
 Seamless Immutable █                                          136K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.7M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 1.5M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 819K | 0.001ms | 0.003ms | 1000 |
| Craft | 594K | 0.002ms | 0.003ms | 1000 |
| Mutative | 391K | 0.003ms | 0.005ms | 1000 |
| Immer | 286K | 0.004ms | 0.007ms | 1000 |
| Seamless Immutable | 136K | 0.007ms | 0.011ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   10.6M ops/sec
🥈 Immutability Helper █████████████████████                      5.4M ops/sec
🥉 Immutable.js       ████████                                   2.2M ops/sec
 Craft              ██                                         420K ops/sec
 Mutative           █                                          310K ops/sec
 Immer              █                                          162K ops/sec
 Seamless Immutable                                            105K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.6M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 5.4M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.2M | 0.001ms | 0.002ms | 1000 |
| Craft | 420K | 0.003ms | 0.004ms | 1000 |
| Mutative | 310K | 0.003ms | 0.008ms | 1000 |
| Immer | 162K | 0.006ms | 0.011ms | 1000 |
| Seamless Immutable | 105K | 0.010ms | 0.015ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   11.0M ops/sec
🥈 Immutability Helper ████                                       1.1M ops/sec
🥉 Immutable.js       ████                                       1.1M ops/sec
 Craft              █                                          161K ops/sec
 Seamless Immutable                                            131K ops/sec
 Immer                                                         77K ops/sec
 Mutative                                                      75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 11.0M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Craft | 161K | 0.007ms | 0.015ms | 1000 |
| Seamless Immutable | 131K | 0.008ms | 0.015ms | 1000 |
| Immer | 77K | 0.013ms | 0.030ms | 1000 |
| Mutative | 75K | 0.014ms | 0.026ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   8.3M ops/sec
🥈 Immutable.js       ██████████                                 2.0M ops/sec
🥉 Craft              ██                                         371K ops/sec
 Immutability Helper █                                          296K ops/sec
 Mutative           █                                          290K ops/sec
 Immer              █                                          191K ops/sec
 Seamless Immutable                                            100K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 8.3M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Craft | 371K | 0.003ms | 0.004ms | 1000 |
| Immutability Helper | 296K | 0.003ms | 0.005ms | 1000 |
| Mutative | 290K | 0.004ms | 0.006ms | 1000 |
| Immer | 191K | 0.005ms | 0.011ms | 1000 |
| Seamless Immutable | 100K | 0.010ms | 0.018ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   5.7M ops/sec
🥈 Immutable.js       ████████                                   1.2M ops/sec
🥉 Immutability Helper ████                                       628K ops/sec
 Craft              ██                                         355K ops/sec
 Mutative           █                                          207K ops/sec
 Immer              █                                          146K ops/sec
 Seamless Immutable █                                          90K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.7M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 628K | 0.002ms | 0.003ms | 1000 |
| Craft | 355K | 0.003ms | 0.005ms | 1000 |
| Mutative | 207K | 0.005ms | 0.008ms | 1000 |
| Immer | 146K | 0.007ms | 0.010ms | 1000 |
| Seamless Immutable | 90K | 0.011ms | 0.022ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   9.0M ops/sec
🥈 Immutability Helper ████                                       933K ops/sec
🥉 Craft              ███                                        647K ops/sec
 Immutable.js       ██                                         403K ops/sec
 Immer              ██                                         347K ops/sec
 Mutative           █                                          327K ops/sec
 Seamless Immutable                                            87K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.0M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 933K | 0.001ms | 0.002ms | 1000 |
| Craft | 647K | 0.002ms | 0.002ms | 1000 |
| Immutable.js | 403K | 0.003ms | 0.004ms | 1000 |
| Immer | 347K | 0.004ms | 0.005ms | 1000 |
| Mutative | 327K | 0.003ms | 0.006ms | 1000 |
| Seamless Immutable | 87K | 0.012ms | 0.021ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Immutable.js       ████████████████████████████████████████   2.1M ops/sec
🥈 Native Spread      ███████                                    355K ops/sec
🥉 Mutative           ████                                       193K ops/sec
 Immutability Helper                                            15K ops/sec
 Craft                                                         7K ops/sec
 Immer                                                         4K ops/sec
 Seamless Immutable                                            4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 2.1M | 0.001ms | 0.001ms | 1000 |
| Native Spread | 355K | 0.003ms | 0.006ms | 1000 |
| Mutative | 193K | 0.005ms | 0.010ms | 1000 |
| Immutability Helper | 15K | 0.067ms | 0.086ms | 1000 |
| Craft | 7K | 0.143ms | 0.181ms | 1000 |
| Immer | 4K | 0.232ms | 0.289ms | 1000 |
| Seamless Immutable | 4K | 0.244ms | 0.373ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         135K ops/sec
🥉 Mutative           ██                                         132K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 135K | 0.008ms | 0.033ms | 1000 |
| Mutative | 132K | 0.008ms | 0.013ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   338K ops/sec
🥈 Immer              ██████████████████                         155K ops/sec
🥉 Mutative           █████████████████                          141K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 338K | 0.003ms | 0.006ms | 1000 |
| Immer | 155K | 0.007ms | 0.011ms | 1000 |
| Mutative | 141K | 0.007ms | 0.011ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   304K ops/sec
🥈 Mutative           ██████████                                 74K ops/sec
🥉 Immer              █████████                                  66K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 304K | 0.003ms | 0.006ms | 1000 |
| Mutative | 74K | 0.014ms | 0.031ms | 1000 |
| Immer | 66K | 0.016ms | 0.029ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   299K ops/sec
🥈 Immer              ███████████████████████████                203K ops/sec
🥉 Mutative           ████████████████████                       146K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 299K | 0.003ms | 0.007ms | 1000 |
| Immer | 203K | 0.005ms | 0.007ms | 1000 |
| Mutative | 146K | 0.008ms | 0.016ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   816K ops/sec
🥈 Native Spread      ██████████████████████████████             609K ops/sec
🥉 Mutative           ███████                                    148K ops/sec
 Craft              ████                                       78K ops/sec
 Immer              ███                                        59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 816K | 0.001ms | 0.002ms | 1000 |
| Native Spread | 609K | 0.002ms | 0.003ms | 1000 |
| Mutative | 148K | 0.008ms | 0.028ms | 1000 |
| Craft | 78K | 0.014ms | 0.023ms | 1000 |
| Immer | 59K | 0.017ms | 0.029ms | 1000 |

#### Map - Set Operation

```
🥇 Native Spread      ████████████████████████████████████████   5.2M ops/sec
🥈 Immutable.js       ████████████████████                       2.6M ops/sec
🥉 Craft              █████████                                  1.2M ops/sec
 Mutative           ████                                       580K ops/sec
 Immer              ██                                         277K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.2M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 580K | 0.002ms | 0.004ms | 1000 |
| Immer | 277K | 0.004ms | 0.005ms | 1000 |

#### Map - Update Nested Value

```
🥇 Native Spread      ████████████████████████████████████████   4.1M ops/sec
🥈 Immutable.js       █████████████████                          1.7M ops/sec
🥉 Craft              ███████████████                            1.5M ops/sec
 Mutative           ███                                        347K ops/sec
 Immer              ██                                         206K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.1M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.7M | 0.001ms | 0.001ms | 1000 |
| Craft | 1.5M | 0.001ms | 0.001ms | 1000 |
| Mutative | 347K | 0.003ms | 0.004ms | 1000 |
| Immer | 206K | 0.005ms | 0.007ms | 1000 |

#### Set - Add Operation

```
🥇 Native Spread      ████████████████████████████████████████   5.4M ops/sec
🥈 Immutable.js       ████████████████████████████████████       4.8M ops/sec
🥉 Craft              ████████                                   1.1M ops/sec
 Immer              ██                                         265K ops/sec
 Mutative           ██                                         220K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.4M | 0.000ms | 0.002ms | 1000 |
| Immutable.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.001ms | 1000 |
| Immer | 265K | 0.004ms | 0.006ms | 1000 |
| Mutative | 220K | 0.005ms | 0.008ms | 1000 |

#### Set - Delete Operation

```
🥇 Native Spread      ████████████████████████████████████████   6.4M ops/sec
🥈 Immutable.js       █████████████████████████████              4.6M ops/sec
🥉 Craft              ███████                                    1.1M ops/sec
 Immer              ██                                         267K ops/sec
 Mutative           ██                                         244K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.4M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 267K | 0.004ms | 0.008ms | 1000 |
| Mutative | 244K | 0.004ms | 0.007ms | 1000 |

#### Set - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   1.6M ops/sec
🥈 Native Spread      ████████████████████                       792K ops/sec
🥉 Craft              ██                                         91K ops/sec
 Immer              █                                          48K ops/sec
 Mutative           █                                          44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Native Spread | 792K | 0.001ms | 0.003ms | 1000 |
| Craft | 91K | 0.017ms | 0.045ms | 1000 |
| Immer | 48K | 0.021ms | 0.031ms | 1000 |
| Mutative | 44K | 0.024ms | 0.042ms | 1000 |


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
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`immutable`) v5.1.4 • 17.58 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`immutability-helper`) v3.1.1 • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
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

*Generated on 2025-11-14T13:08:38.050Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
