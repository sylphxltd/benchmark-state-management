<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2015,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Craft - Fastest overall with 59.0/100 score
- **⚖️ Best Balance**: Immer - Great performance (24.7/100) with good ecosystem
- **🎯 Popular Choice**: Mutative - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 59.0/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immer** (Score: 24.7/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Mutative** (Score: 23.5/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Native Spread** (Score: 3.2/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Immutable.js** (Score: 2.8/100)
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
| 🥇 1 | **[Native Spread](#)** | 73.7/100 | 100% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 29.4/100 | 40% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 9.6/100 | 13% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Craft](https://github.com/SylphxAI/craft)** | 6.1/100 | 8% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  5 | **[Mutative](https://github.com/unadlib/mutative)** | 5.8/100 | 8% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 3.2/100 | 4% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.6/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 59.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Immer](https://github.com/immerjs/immer)** | 24.7/100 | 42% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
| 🥉 3 | **[Mutative](https://github.com/unadlib/mutative)** | 23.5/100 | 40% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  4 | **[Native Spread](#)** | 3.2/100 | 5% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 2.8/100 | 5% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  6 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.2/100 | 2% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.1/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **59.0** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **24.7** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **23.5** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Native Spread](#)** | **3.2** | N/A | State management solution... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **2.8** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **1.2** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **1.1** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   14.7M ops/sec
🥈 Immutable.js       ██████████████████████                     8.2M ops/sec
🥉 Immutability Helper ██████                                     2.3M ops/sec
 Craft              █████                                      1.8M ops/sec
 Mutative           ███                                        1.2M ops/sec
 Immer              ███                                        1.2M ops/sec
 Seamless Immutable █                                          533K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 14.7M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 8.2M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.8M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.2M | 0.001ms | 0.002ms | 1000 |
| Immer | 1.2M | 0.001ms | 0.002ms | 1000 |
| Seamless Immutable | 533K | 0.002ms | 0.004ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   5.6M ops/sec
🥈 Immutable.js       ██████████                                 1.5M ops/sec
🥉 Immutability Helper ██████                                     826K ops/sec
 Craft              ████                                       597K ops/sec
 Mutative           ███                                        413K ops/sec
 Immer              ██                                         279K ops/sec
 Seamless Immutable █                                          135K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.6M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 1.5M | 0.001ms | 0.001ms | 1000 |
| Immutability Helper | 826K | 0.001ms | 0.003ms | 1000 |
| Craft | 597K | 0.002ms | 0.004ms | 1000 |
| Mutative | 413K | 0.003ms | 0.006ms | 1000 |
| Immer | 279K | 0.004ms | 0.006ms | 1000 |
| Seamless Immutable | 135K | 0.008ms | 0.015ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   10.6M ops/sec
🥈 Immutability Helper █████████████████████                      5.5M ops/sec
🥉 Immutable.js       █████████                                  2.3M ops/sec
 Craft              ██                                         414K ops/sec
 Mutative           █                                          268K ops/sec
 Immer              █                                          168K ops/sec
 Seamless Immutable                                            103K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.6M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 5.5M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 414K | 0.002ms | 0.004ms | 1000 |
| Mutative | 268K | 0.004ms | 0.010ms | 1000 |
| Immer | 168K | 0.006ms | 0.010ms | 1000 |
| Seamless Immutable | 103K | 0.010ms | 0.014ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   10.0M ops/sec
🥈 Immutability Helper ████                                       1.1M ops/sec
🥉 Immutable.js       ████                                       1.0M ops/sec
 Craft              █                                          163K ops/sec
 Seamless Immutable █                                          130K ops/sec
 Immer                                                         78K ops/sec
 Mutative                                                      75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.0M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.1M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.0M | 0.001ms | 0.002ms | 1000 |
| Craft | 163K | 0.006ms | 0.010ms | 1000 |
| Seamless Immutable | 130K | 0.008ms | 0.014ms | 1000 |
| Immer | 78K | 0.013ms | 0.024ms | 1000 |
| Mutative | 75K | 0.013ms | 0.026ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   8.2M ops/sec
🥈 Immutable.js       █████████                                  2.0M ops/sec
🥉 Immutability Helper ███                                        561K ops/sec
 Craft              ██                                         381K ops/sec
 Mutative           █                                          288K ops/sec
 Immer              █                                          190K ops/sec
 Seamless Immutable                                            99K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 8.2M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Immutability Helper | 561K | 0.002ms | 0.003ms | 1000 |
| Craft | 381K | 0.003ms | 0.004ms | 1000 |
| Mutative | 288K | 0.004ms | 0.007ms | 1000 |
| Immer | 190K | 0.005ms | 0.011ms | 1000 |
| Seamless Immutable | 99K | 0.010ms | 0.021ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   4.9M ops/sec
🥈 Immutable.js       ████████                                   1.0M ops/sec
🥉 Immutability Helper █████                                      603K ops/sec
 Craft              ███                                        368K ops/sec
 Mutative           ██                                         205K ops/sec
 Immer              █                                          152K ops/sec
 Seamless Immutable █                                          90K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.9M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 1.0M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 603K | 0.002ms | 0.003ms | 1000 |
| Craft | 368K | 0.003ms | 0.005ms | 1000 |
| Mutative | 205K | 0.005ms | 0.008ms | 1000 |
| Immer | 152K | 0.007ms | 0.011ms | 1000 |
| Seamless Immutable | 90K | 0.011ms | 0.020ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   9.1M ops/sec
🥈 Immutability Helper ████                                       936K ops/sec
🥉 Craft              ███                                        636K ops/sec
 Immutable.js       ██                                         387K ops/sec
 Immer              ██                                         370K ops/sec
 Mutative           █                                          317K ops/sec
 Seamless Immutable                                            84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.1M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 936K | 0.001ms | 0.002ms | 1000 |
| Craft | 636K | 0.002ms | 0.003ms | 1000 |
| Immutable.js | 387K | 0.003ms | 0.005ms | 1000 |
| Immer | 370K | 0.003ms | 0.005ms | 1000 |
| Mutative | 317K | 0.003ms | 0.007ms | 1000 |
| Seamless Immutable | 84K | 0.012ms | 0.021ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Immutable.js       ████████████████████████████████████████   1.9M ops/sec
🥈 Native Spread      ████████                                   376K ops/sec
🥉 Mutative           █████                                      235K ops/sec
 Immutability Helper                                            15K ops/sec
 Craft                                                         7K ops/sec
 Seamless Immutable                                            4K ops/sec
 Immer                                                         4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 1.9M | 0.001ms | 0.001ms | 1000 |
| Native Spread | 376K | 0.003ms | 0.005ms | 1000 |
| Mutative | 235K | 0.005ms | 0.012ms | 1000 |
| Immutability Helper | 15K | 0.067ms | 0.084ms | 1000 |
| Craft | 7K | 0.145ms | 0.196ms | 1000 |
| Seamless Immutable | 4K | 0.246ms | 0.364ms | 1000 |
| Immer | 4K | 0.244ms | 0.330ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         141K ops/sec
🥉 Mutative           ██                                         112K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 141K | 0.007ms | 0.022ms | 1000 |
| Mutative | 112K | 0.010ms | 0.023ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   338K ops/sec
🥈 Immer              ██████████████████                         156K ops/sec
🥉 Mutative           ██████████████                             121K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 338K | 0.003ms | 0.006ms | 1000 |
| Immer | 156K | 0.007ms | 0.011ms | 1000 |
| Mutative | 121K | 0.008ms | 0.016ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   304K ops/sec
🥈 Mutative           ██████████                                 73K ops/sec
🥉 Immer              █████████                                  67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 304K | 0.003ms | 0.006ms | 1000 |
| Mutative | 73K | 0.014ms | 0.027ms | 1000 |
| Immer | 67K | 0.015ms | 0.029ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   299K ops/sec
🥈 Immer              ████████████████████████████               207K ops/sec
🥉 Mutative           ████████████████████                       153K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 299K | 0.003ms | 0.007ms | 1000 |
| Immer | 207K | 0.005ms | 0.008ms | 1000 |
| Mutative | 153K | 0.007ms | 0.010ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   797K ops/sec
🥈 Native Spread      ███████████████████████████                546K ops/sec
🥉 Mutative           ████████                                   156K ops/sec
 Craft              ████                                       78K ops/sec
 Immer              ███                                        59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 797K | 0.001ms | 0.002ms | 1000 |
| Native Spread | 546K | 0.003ms | 0.004ms | 1000 |
| Mutative | 156K | 0.007ms | 0.013ms | 1000 |
| Craft | 78K | 0.014ms | 0.023ms | 1000 |
| Immer | 59K | 0.018ms | 0.032ms | 1000 |

#### Map - Set Operation

```
🥇 Native Spread      ████████████████████████████████████████   4.8M ops/sec
🥈 Immutable.js       █████████████████████                      2.5M ops/sec
🥉 Craft              ██████████                                 1.2M ops/sec
 Mutative           █████                                      565K ops/sec
 Immer              ██                                         284K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.8M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 565K | 0.002ms | 0.004ms | 1000 |
| Immer | 284K | 0.004ms | 0.006ms | 1000 |

#### Map - Update Nested Value

```
🥇 Native Spread      ████████████████████████████████████████   3.8M ops/sec
🥈 Immutable.js       █████████████████                          1.6M ops/sec
🥉 Craft              ███████████████                            1.5M ops/sec
 Mutative           ███                                        313K ops/sec
 Immer              ██                                         205K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 3.8M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Craft | 1.5M | 0.001ms | 0.001ms | 1000 |
| Mutative | 313K | 0.004ms | 0.007ms | 1000 |
| Immer | 205K | 0.005ms | 0.007ms | 1000 |

#### Set - Add Operation

```
🥇 Native Spread      ████████████████████████████████████████   6.5M ops/sec
🥈 Immutable.js       ██████████████████████████████             4.8M ops/sec
🥉 Craft              ███████                                    1.1M ops/sec
 Immer              ██                                         256K ops/sec
 Mutative           █                                          211K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.5M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.001ms | 1000 |
| Immer | 256K | 0.004ms | 0.005ms | 1000 |
| Mutative | 211K | 0.005ms | 0.009ms | 1000 |

#### Set - Delete Operation

```
🥇 Native Spread      ████████████████████████████████████████   6.6M ops/sec
🥈 Immutable.js       ████████████████████████████               4.5M ops/sec
🥉 Craft              ███████                                    1.1M ops/sec
 Immer              ██                                         263K ops/sec
 Mutative           █                                          239K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.6M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.5M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 263K | 0.004ms | 0.006ms | 1000 |
| Mutative | 239K | 0.005ms | 0.008ms | 1000 |

#### Set - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   1.6M ops/sec
🥈 Native Spread      ███████████████████                        759K ops/sec
🥉 Craft              ██                                         91K ops/sec
 Immer              █                                          42K ops/sec
 Mutative           █                                          36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 1.6M | 0.001ms | 0.002ms | 1000 |
| Native Spread | 759K | 0.002ms | 0.003ms | 1000 |
| Craft | 91K | 0.017ms | 0.045ms | 1000 |
| Immer | 42K | 0.027ms | 0.055ms | 1000 |
| Mutative | 36K | 0.035ms | 0.081ms | 1000 |



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

- **[Craft](https://github.com/SylphxAI/craft)** (`1.2.1`)  • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Immer](https://github.com/immerjs/immer)** (`10.2.0`)  • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Mutative](https://github.com/unadlib/mutative)** (`1.3.0`)  • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Native Spread](#)** (`unknown`)  - [📦 npm](https://www.npmjs.com/package/native-spread) • [📊 bundle size](https://bundlephobia.com/package/native-spread)
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`5.1.4`)  • 17.58 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`3.1.1`)  • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** (`7.1.4`)  • 2.71 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

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

*Generated on 2025-11-15T14:05:26.179Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
