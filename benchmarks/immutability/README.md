<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2018,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Craft - Fastest overall with 64.1/100 score
- **⚖️ Best Balance**: Mutative - Great performance (31.8/100) with good ecosystem
- **🎯 Popular Choice**: Immer - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Craft** (Score: 64.1/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Mutative** (Score: 31.8/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 29.1/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


**Native Spread** (Score: 2.5/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Immutable.js** (Score: 2.3/100)
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
| 🥇 1 | **[Native Spread](#)** | 72.2/100 | 100% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 28.7/100 | 40% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8.5/100 | 12% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 6.0/100 | 8% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Craft](https://github.com/SylphxAI/craft)** | 4.9/100 | 7% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
|  6 | **[Immer](https://github.com/immerjs/immer)** | 2.5/100 | 3% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.4/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Craft](https://github.com/SylphxAI/craft)** | 64.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥈 2 | **[Mutative](https://github.com/unadlib/mutative)** | 31.8/100 | 50% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
| 🥉 3 | **[Immer](https://github.com/immerjs/immer)** | 29.1/100 | 45% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  4 | **[Native Spread](#)** | 2.5/100 | 4% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
|  5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 2.3/100 | 4% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  6 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.2/100 | 2% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 1.0/100 | 2% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Craft](https://github.com/SylphxAI/craft)** | **64.1** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **31.8** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **29.1** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Native Spread](#)** | **2.5** | N/A | State management solution... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **2.3** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **1.2** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **1.0** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   13.1M ops/sec
🥈 Immutable.js       █████████████████████████                  8.3M ops/sec
🥉 Immutability Helper ████████                                   2.5M ops/sec
 Craft              █████                                      1.6M ops/sec
 Mutative           ████                                       1.4M ops/sec
 Immer              ██                                         804K ops/sec
 Seamless Immutable ██                                         530K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.1M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 8.3M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 2.5M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.6M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.4M | 0.001ms | 0.001ms | 1000 |
| Immer | 804K | 0.001ms | 0.003ms | 1000 |
| Seamless Immutable | 530K | 0.002ms | 0.003ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   8.4M ops/sec
🥈 Immutable.js       ████████                                   1.6M ops/sec
🥉 Immutability Helper ████                                       904K ops/sec
 Craft              ███                                        546K ops/sec
 Mutative           ██                                         442K ops/sec
 Immer              █                                          270K ops/sec
 Seamless Immutable █                                          138K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 8.4M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Immutability Helper | 904K | 0.001ms | 0.002ms | 1000 |
| Craft | 546K | 0.002ms | 0.004ms | 1000 |
| Mutative | 442K | 0.002ms | 0.005ms | 1000 |
| Immer | 270K | 0.004ms | 0.006ms | 1000 |
| Seamless Immutable | 138K | 0.007ms | 0.014ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   11.4M ops/sec
🥈 Immutability Helper █████████████████████                      5.9M ops/sec
🥉 Immutable.js       █████████                                  2.5M ops/sec
 Craft              █                                          345K ops/sec
 Mutative           █                                          285K ops/sec
 Immer              █                                          159K ops/sec
 Seamless Immutable                                            97K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 11.4M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 5.9M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Craft | 345K | 0.003ms | 0.006ms | 1000 |
| Mutative | 285K | 0.004ms | 0.012ms | 1000 |
| Immer | 159K | 0.006ms | 0.011ms | 1000 |
| Seamless Immutable | 97K | 0.010ms | 0.017ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   11.9M ops/sec
🥈 Immutable.js       ████                                       1.1M ops/sec
🥉 Immutability Helper ███                                        794K ops/sec
 Craft              █                                          153K ops/sec
 Seamless Immutable                                            121K ops/sec
 Mutative                                                      80K ops/sec
 Immer                                                         73K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 11.9M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 794K | 0.001ms | 0.002ms | 1000 |
| Craft | 153K | 0.007ms | 0.014ms | 1000 |
| Seamless Immutable | 121K | 0.008ms | 0.011ms | 1000 |
| Mutative | 80K | 0.013ms | 0.020ms | 1000 |
| Immer | 73K | 0.014ms | 0.030ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   9.1M ops/sec
🥈 Immutable.js       ██████████                                 2.4M ops/sec
🥉 Immutability Helper ██                                         479K ops/sec
 Craft              █                                          330K ops/sec
 Mutative           █                                          321K ops/sec
 Immer              █                                          176K ops/sec
 Seamless Immutable                                            95K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.1M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 479K | 0.002ms | 0.003ms | 1000 |
| Craft | 330K | 0.003ms | 0.004ms | 1000 |
| Mutative | 321K | 0.004ms | 0.006ms | 1000 |
| Immer | 176K | 0.006ms | 0.010ms | 1000 |
| Seamless Immutable | 95K | 0.011ms | 0.021ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   5.6M ops/sec
🥈 Immutable.js       ████████                                   1.1M ops/sec
🥉 Immutability Helper ████                                       614K ops/sec
 Craft              ██                                         351K ops/sec
 Mutative           ██                                         236K ops/sec
 Immer              █                                          146K ops/sec
 Seamless Immutable █                                          94K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.6M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 614K | 0.002ms | 0.003ms | 1000 |
| Craft | 351K | 0.003ms | 0.005ms | 1000 |
| Mutative | 236K | 0.004ms | 0.007ms | 1000 |
| Immer | 146K | 0.007ms | 0.010ms | 1000 |
| Seamless Immutable | 94K | 0.011ms | 0.018ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   9.0M ops/sec
🥈 Immutability Helper ████                                       911K ops/sec
🥉 Craft              ██                                         561K ops/sec
 Mutative           ██                                         398K ops/sec
 Immutable.js       ██                                         381K ops/sec
 Immer              ██                                         362K ops/sec
 Seamless Immutable                                            85K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.0M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 911K | 0.001ms | 0.002ms | 1000 |
| Craft | 561K | 0.002ms | 0.003ms | 1000 |
| Mutative | 398K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 381K | 0.003ms | 0.004ms | 1000 |
| Immer | 362K | 0.003ms | 0.004ms | 1000 |
| Seamless Immutable | 85K | 0.012ms | 0.019ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Immutable.js       ████████████████████████████████████████   2.2M ops/sec
🥈 Native Spread      ███████                                    358K ops/sec
🥉 Mutative           █████                                      256K ops/sec
 Immutability Helper                                            10K ops/sec
 Craft                                                         5K ops/sec
 Seamless Immutable                                            3K ops/sec
 Immer                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 2.2M | 0.000ms | 0.001ms | 1000 |
| Native Spread | 358K | 0.004ms | 0.006ms | 1000 |
| Mutative | 256K | 0.004ms | 0.007ms | 1000 |
| Immutability Helper | 10K | 0.103ms | 0.173ms | 1000 |
| Craft | 5K | 0.216ms | 0.283ms | 1000 |
| Seamless Immutable | 3K | 0.320ms | 0.389ms | 1000 |
| Immer | 3K | 0.323ms | 0.365ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         160K ops/sec
🥉 Mutative           ██                                         140K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 160K | 0.006ms | 0.012ms | 1000 |
| Mutative | 140K | 0.007ms | 0.014ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   338K ops/sec
🥈 Immer              ███████████████████                        164K ops/sec
🥉 Mutative           ██████████████████                         151K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 338K | 0.003ms | 0.006ms | 1000 |
| Immer | 164K | 0.006ms | 0.012ms | 1000 |
| Mutative | 151K | 0.007ms | 0.011ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   304K ops/sec
🥈 Mutative           ████████████                               89K ops/sec
🥉 Immer              ██████████                                 75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 304K | 0.003ms | 0.006ms | 1000 |
| Mutative | 89K | 0.011ms | 0.020ms | 1000 |
| Immer | 75K | 0.013ms | 0.021ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   299K ops/sec
🥈 Immer              █████████████████████████████              216K ops/sec
🥉 Mutative           ███████████████████████████                204K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 299K | 0.003ms | 0.007ms | 1000 |
| Immer | 216K | 0.005ms | 0.008ms | 1000 |
| Mutative | 204K | 0.005ms | 0.009ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   810K ops/sec
🥈 Native Spread      █████████████████                          353K ops/sec
🥉 Mutative           ██████████                                 200K ops/sec
 Craft              ████                                       78K ops/sec
 Immer              ███                                        57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 810K | 0.001ms | 0.002ms | 1000 |
| Native Spread | 353K | 0.005ms | 0.013ms | 1000 |
| Mutative | 200K | 0.005ms | 0.008ms | 1000 |
| Craft | 78K | 0.014ms | 0.023ms | 1000 |
| Immer | 57K | 0.018ms | 0.028ms | 1000 |

#### Map - Set Operation

```
🥇 Native Spread      ████████████████████████████████████████   5.4M ops/sec
🥈 Immutable.js       ███████████████████                        2.6M ops/sec
🥉 Craft              █████████                                  1.2M ops/sec
 Mutative           ████                                       544K ops/sec
 Immer              ██                                         288K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 5.4M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 544K | 0.002ms | 0.004ms | 1000 |
| Immer | 288K | 0.004ms | 0.005ms | 1000 |

#### Map - Update Nested Value

```
🥇 Native Spread      ████████████████████████████████████████   4.2M ops/sec
🥈 Immutable.js       ███████████████                            1.6M ops/sec
🥉 Craft              ██████████████                             1.5M ops/sec
 Mutative           ████                                       403K ops/sec
 Immer              ██                                         211K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.2M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Craft | 1.5M | 0.001ms | 0.001ms | 1000 |
| Mutative | 403K | 0.003ms | 0.005ms | 1000 |
| Immer | 211K | 0.005ms | 0.007ms | 1000 |

#### Set - Add Operation

```
🥇 Native Spread      ████████████████████████████████████████   6.7M ops/sec
🥈 Immutable.js       ████████████████████████████               4.7M ops/sec
🥉 Craft              ███████                                    1.1M ops/sec
 Immer              ██                                         269K ops/sec
 Mutative           █                                          212K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.7M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.001ms | 1000 |
| Immer | 269K | 0.004ms | 0.005ms | 1000 |
| Mutative | 212K | 0.006ms | 0.016ms | 1000 |

#### Set - Delete Operation

```
🥇 Native Spread      ████████████████████████████████████████   6.8M ops/sec
🥈 Immutable.js       █████████████████████████████              5.0M ops/sec
🥉 Craft              ███████                                    1.1M ops/sec
 Mutative           ██                                         273K ops/sec
 Immer              ██                                         270K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.8M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 5.0M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Mutative | 273K | 0.004ms | 0.007ms | 1000 |
| Immer | 270K | 0.004ms | 0.005ms | 1000 |

#### Set - Large (100 items)

```
🥇 Immutable.js       ████████████████████████████████████████   1.6M ops/sec
🥈 Native Spread      ████████████████████                       819K ops/sec
🥉 Craft              ██                                         91K ops/sec
 Mutative           █                                          44K ops/sec
 Immer              █                                          43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Immutable.js | 1.6M | 0.001ms | 0.001ms | 1000 |
| Native Spread | 819K | 0.002ms | 0.003ms | 1000 |
| Craft | 91K | 0.017ms | 0.045ms | 1000 |
| Mutative | 44K | 0.025ms | 0.039ms | 1000 |
| Immer | 43K | 0.025ms | 0.034ms | 1000 |



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
- **[Mutative](https://github.com/unadlib/mutative)** (`1.3.0`)  • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immer](https://github.com/immerjs/immer)** (`10.2.0`)  • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
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

*Generated on 2025-11-18T05:40:58.907Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
