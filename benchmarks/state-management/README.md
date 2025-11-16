<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2016,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-27-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 77.9/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (63.1/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 77.9/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 63.1/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 58.7/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 54.7/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 22.9/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 82.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 54.0/100 | 65% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 50.7/100 | 61% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 48.1/100 | 58% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.8/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.8/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.9/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 77.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 63.1/100 | 81% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 58.7/100 | 75% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 54.7/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 22.9/100 | 29% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 17.5/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.5/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.2/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **77.9** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **63.1** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **58.7** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **54.7** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **22.9** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **17.5** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.5** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.0M ops/sec
🥉 Redux Toolkit      ██████████████████████████████████████     21.3M ops/sec
 Solid.js           █████████████████████████████████████      20.3M ops/sec
 Zen                ████████████████████████████               15.7M ops/sec
 MobX               ██████████████████████████                 14.3M ops/sec
 Valtio             █████████████████████████                  14.1M ops/sec
 Jotai              ████                                       2.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 21.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 20.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 14.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.1M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.3M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   13.2M ops/sec
🥈 Solid.js           █████████████████████████████████████      12.2M ops/sec
🥉 Redux Toolkit      ████████████████████████████████████       12.0M ops/sec
 Preact Signals     ████████████████                           5.1M ops/sec
 Zen                ████████████                               4.1M ops/sec
 MobX               ███                                        893K ops/sec
 Valtio             █                                          250K ops/sec
 Jotai                                                         30K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 13.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 12.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 893K | 0.001ms | 0.001ms | 1000 |
| Valtio | 250K | 0.004ms | 0.006ms | 1000 |
| Jotai | 30K | 0.035ms | 0.052ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.0M ops/sec
🥈 Zustand            ████████████████████████████████           1.6M ops/sec
🥉 Preact Signals     ███████████████████████████████            1.6M ops/sec
 Redux Toolkit      ███████████████████████████████            1.5M ops/sec
 Zen                ██████████                                 515K ops/sec
 MobX               ██                                         92K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.6M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.6M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 515K | 0.002ms | 0.003ms | 1000 |
| MobX | 92K | 0.011ms | 0.015ms | 1000 |
| Valtio | 53K | 0.020ms | 0.029ms | 1000 |
| Jotai | 3K | 0.347ms | 0.787ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   18.5M ops/sec
🥈 Preact Signals     █████████████████████████████████          15.4M ops/sec
🥉 Zen                ███████████████████████████████            14.5M ops/sec
 Zustand            ██████████                                 4.7M ops/sec
 Valtio             ███████                                    3.3M ops/sec
 MobX               ███████                                    3.2M ops/sec
 Jotai              █                                          374K ops/sec
 Redux Toolkit                                                 162K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 374K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 162K | 0.006ms | 0.008ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   14.0M ops/sec
🥈 Solid.js           ██████████████████████████████             10.4M ops/sec
🥉 Preact Signals     ██████████████████                         6.2M ops/sec
 Zustand            ██                                         634K ops/sec
 MobX               █                                          520K ops/sec
 Valtio             █                                          367K ops/sec
 Jotai                                                         36K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 10.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 634K | 0.002ms | 0.003ms | 1000 |
| MobX | 520K | 0.002ms | 0.003ms | 1000 |
| Valtio | 367K | 0.003ms | 0.004ms | 1000 |
| Jotai | 36K | 0.028ms | 0.039ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.084ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   2.8M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     2.7M ops/sec
🥉 Solid.js           █████████████████████████████              2.1M ops/sec
 Zustand            █                                          67K ops/sec
 MobX               █                                          65K ops/sec
 Valtio             █                                          39K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.1M | 0.001ms | 0.001ms | 1000 |
| Zustand | 67K | 0.016ms | 0.024ms | 1000 |
| MobX | 65K | 0.016ms | 0.023ms | 1000 |
| Valtio | 39K | 0.026ms | 0.035ms | 1000 |
| Jotai | 4K | 0.275ms | 0.592ms | 1000 |
| Redux Toolkit | 2K | 0.648ms | 1.505ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   323K ops/sec
🥈 Preact Signals     ██████████████████████████████████████     306K ops/sec
🥉 Solid.js           █████████████████████████                  201K ops/sec
 Zustand            █                                          7K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         373 ops/sec
 Redux Toolkit                                                 153 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 323K | 0.003ms | 0.004ms | 1000 |
| Preact Signals | 306K | 0.003ms | 0.004ms | 1000 |
| Solid.js | 201K | 0.006ms | 0.008ms | 1000 |
| Zustand | 7K | 0.151ms | 0.190ms | 1000 |
| MobX | 6K | 0.160ms | 0.205ms | 1000 |
| Valtio | 4K | 0.256ms | 0.314ms | 1000 |
| Jotai | 373 | 2.725ms | 4.849ms | 1000 |
| Redux Toolkit | 153 | 6.552ms | 7.618ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.6M ops/sec
🥈 Zen                ████████████████████████████               7.4M ops/sec
🥉 Solid.js           ███████████████████                        5.1M ops/sec
 Zustand            ██████████████                             3.7M ops/sec
 Valtio             █                                          377K ops/sec
 Jotai              █                                          366K ops/sec
 MobX               █                                          234K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 377K | 0.003ms | 0.005ms | 1000 |
| Jotai | 366K | 0.003ms | 0.005ms | 1000 |
| MobX | 234K | 0.005ms | 0.014ms | 1000 |
| Redux Toolkit | 69K | 0.015ms | 0.027ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.5M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   9.3M ops/sec
🥉 Zustand            ████████████████                           3.8M ops/sec
 Solid.js           ██████████████                             3.2M ops/sec
 Valtio             █████████                                  2.2M ops/sec
 MobX               ████                                       984K ops/sec
 Jotai              █                                          324K ops/sec
 Redux Toolkit                                                 66K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.8M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 984K | 0.001ms | 0.002ms | 1000 |
| Jotai | 324K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 66K | 0.016ms | 0.027ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   23.2M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     22.2M ops/sec
🥉 Solid.js           ██████████████████████████████             17.1M ops/sec
 Redux Toolkit      ████████████████████████████               16.0M ops/sec
 Zen                ███████████████████████████                15.4M ops/sec
 Valtio             ██████████████████████                     12.5M ops/sec
 MobX               ███████████                                6.2M ops/sec
 Jotai              ██                                         1.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 23.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 17.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.1M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   8.2M ops/sec
🥈 Preact Signals     █████████████████████████████              5.9M ops/sec
🥉 Zustand            ████████████████                           3.3M ops/sec
 Solid.js           █████████████                              2.7M ops/sec
 Valtio             █████████████                              2.7M ops/sec
 MobX               ██████                                     1.3M ops/sec
 Jotai              ██                                         392K ops/sec
 Redux Toolkit                                                 80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 392K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 80K | 0.013ms | 0.021ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   87K ops/sec
🥈 Zen                ███████████████████████████████████████    85K ops/sec
🥉 Preact Signals     ███████████████████████████████████████    85K ops/sec
 Zustand            ███████████████████████                    51K ops/sec
 Valtio             ██████████████████                         40K ops/sec
 MobX               ███████████████                            34K ops/sec
 Jotai              ███                                        6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 87K | 0.012ms | 0.019ms | 1000 |
| Zen | 85K | 0.012ms | 0.018ms | 1000 |
| Preact Signals | 85K | 0.012ms | 0.019ms | 1000 |
| Zustand | 51K | 0.020ms | 0.028ms | 1000 |
| Valtio | 40K | 0.026ms | 0.045ms | 1000 |
| MobX | 34K | 0.031ms | 0.042ms | 1000 |
| Jotai | 6K | 0.160ms | 0.219ms | 1000 |
| Redux Toolkit | 3K | 0.356ms | 1.073ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   22.9M ops/sec
🥈 Zen                ████████████████████                       11.4M ops/sec
🥉 Preact Signals     ████████████████████                       11.3M ops/sec
 Zustand            ████████                                   4.8M ops/sec
 MobX               ████                                       2.1M ops/sec
 Valtio             ██                                         997K ops/sec
 Jotai                                                         213K ops/sec
 Redux Toolkit                                                 141K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 997K | 0.001ms | 0.003ms | 1000 |
| Jotai | 213K | 0.005ms | 0.008ms | 1000 |
| Redux Toolkit | 141K | 0.008ms | 0.016ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   21.2M ops/sec
🥈 Zen                █████████████████████████████████████      19.5M ops/sec
🥉 Zustand            ██████                                     3.0M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          460K ops/sec
 Valtio                                                        264K ops/sec
 Jotai                                                         168K ops/sec
 Redux Toolkit                                                 69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 21.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 460K | 0.002ms | 0.004ms | 1000 |
| Valtio | 264K | 0.004ms | 0.006ms | 1000 |
| Jotai | 168K | 0.006ms | 0.011ms | 1000 |
| Redux Toolkit | 69K | 0.016ms | 0.024ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   5.0M ops/sec
🥈 Preact Signals     █                                          101K ops/sec
🥉 Zustand            █                                          88K ops/sec
 Zen                █                                          83K ops/sec
 Valtio                                                        53K ops/sec
 Redux Toolkit                                                 39K ops/sec
 MobX                                                          10K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 5.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 101K | 0.011ms | 0.019ms | 1000 |
| Zustand | 88K | 0.012ms | 0.024ms | 1000 |
| Zen | 83K | 0.014ms | 0.024ms | 1000 |
| Valtio | 53K | 0.052ms | 0.049ms | 1000 |
| Redux Toolkit | 39K | 0.061ms | 0.070ms | 1000 |
| MobX | 10K | 0.140ms | 1.255ms | 1000 |
| Jotai | 7K | 0.157ms | 0.816ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   14.4M ops/sec
🥈 Zen                ██████████████████████████████████████     13.7M ops/sec
🥉 Zustand            █████████                                  3.3M ops/sec
 Solid.js           ████████                                   2.8M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Jotai                                                         123K ops/sec
 Redux Toolkit                                                 122K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 123K | 0.008ms | 0.016ms | 1000 |
| Redux Toolkit | 122K | 0.008ms | 0.018ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.5M ops/sec
🥈 Valtio             ████████                                   488K ops/sec
🥉 MobX               ███                                        170K ops/sec
 Jotai              ███                                        162K ops/sec
 Zen                █                                          95K ops/sec
 Preact Signals     █                                          94K ops/sec
 Zustand            █                                          59K ops/sec
 Redux Toolkit                                                 582 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 488K | 0.002ms | 0.008ms | 1000 |
| MobX | 170K | 0.007ms | 0.018ms | 1000 |
| Jotai | 162K | 0.007ms | 0.014ms | 1000 |
| Zen | 95K | 0.011ms | 0.019ms | 1000 |
| Preact Signals | 94K | 0.012ms | 0.019ms | 1000 |
| Zustand | 59K | 0.019ms | 0.035ms | 1000 |
| Redux Toolkit | 582 | 1.746ms | 3.952ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   218K ops/sec
🥈 Solid.js           ███████████████████████████████████████    215K ops/sec
🥉 Redux Toolkit      ████████████████████████████████           173K ops/sec
 Zen                █████████                                  48K ops/sec
 Preact Signals     ████                                       21K ops/sec
 Valtio             █                                          5K ops/sec
 MobX               █                                          3K ops/sec
 Jotai                                                         272 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 218K | 0.005ms | 0.005ms | 1000 |
| Solid.js | 215K | 0.005ms | 0.005ms | 1000 |
| Redux Toolkit | 173K | 0.006ms | 0.006ms | 1000 |
| Zen | 48K | 0.021ms | 0.025ms | 1000 |
| Preact Signals | 21K | 0.049ms | 0.058ms | 1000 |
| Valtio | 5K | 0.231ms | 0.755ms | 1000 |
| MobX | 3K | 0.305ms | 0.328ms | 1000 |
| Jotai | 272 | 3.695ms | 4.297ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   16K ops/sec
🥈 Zen                ███████████████████████                    9K ops/sec
🥉 Preact Signals     █████████████████████                      9K ops/sec
 Zustand            ██                                         653 ops/sec
 MobX               █                                          462 ops/sec
 Valtio             █                                          388 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 16K | 0.092ms | 0.482ms | 1000 |
| Zen | 9K | 0.109ms | 0.129ms | 1000 |
| Preact Signals | 9K | 0.116ms | 0.134ms | 1000 |
| Zustand | 653 | 1.545ms | 2.139ms | 1000 |
| MobX | 462 | 2.173ms | 2.798ms | 1000 |
| Valtio | 388 | 2.589ms | 3.201ms | 1000 |
| Jotai | 34 | 29.045ms | 32.682ms | 1000 |
| Redux Toolkit | 14 | 70.687ms | 73.216ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Preact Signals     █████████                                  4.7M ops/sec
🥉 Zen                ████                                       2.2M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX                                                          226K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 226K | 0.005ms | 0.011ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   23.6M ops/sec
🥈 Preact Signals     ████████                                   4.6M ops/sec
🥉 Zen                █████                                      3.0M ops/sec
 Zustand            ███                                        2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          318K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 318K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   24.1M ops/sec
🥈 Preact Signals     ████████████                               7.3M ops/sec
🥉 Zen                ████████████                               7.0M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.7M ops/sec
 MobX               █                                          777K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit                                                 293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 24.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 777K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Zen                ██████████████                             7.6M ops/sec
🥉 Preact Signals     █████████████                              6.8M ops/sec
 Zustand            ██████████                                 5.2M ops/sec
 Valtio             ██                                         964K ops/sec
 Jotai              █                                          729K ops/sec
 MobX               █                                          680K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 964K | 0.001ms | 0.003ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| MobX | 680K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████                             349K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          33K ops/sec
 Preact Signals     █                                          29K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 349K | 0.003ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 33K | 0.030ms | 0.051ms | 1000 |
| Preact Signals | 29K | 0.035ms | 0.043ms | 1000 |
| Valtio | 8K | 0.125ms | 0.145ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.162ms | 0.191ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   23.7M ops/sec
🥈 Preact Signals     █                                          558K ops/sec
🥉 Zen                                                           212K ops/sec
 Zustand                                                       112K ops/sec
 MobX                                                          107K ops/sec
 Valtio                                                        55K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 558K | 0.002ms | 0.002ms | 1000 |
| Zen | 212K | 0.005ms | 0.005ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| MobX | 107K | 0.009ms | 0.011ms | 1000 |
| Valtio | 55K | 0.018ms | 0.030ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.0M ops/sec
🥈 Zustand            ██████████████████████████████████████     2.9M ops/sec
🥉 Zen                ████                                       326K ops/sec
 Redux Toolkit      ████                                       290K ops/sec
 Preact Signals     ████                                       285K ops/sec
 Valtio             █                                          82K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 326K | 0.003ms | 0.004ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 285K | 0.004ms | 0.004ms | 1000 |
| Valtio | 82K | 0.012ms | 0.017ms | 1000 |
| MobX | 80K | 0.013ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   14.0M ops/sec
🥈 Solid.js           ████████████████████████████████████████   13.9M ops/sec
🥉 Preact Signals     ████████                                   2.7M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.3M ops/sec
 MobX                                                          108K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 13.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 108K | 0.011ms | 0.018ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |



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
cd benchmarks/state-management

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

- **Basic Operations**: 7 tests
- **Advanced Operations**: 4 tests
- **Async Operations**: 1 tests
- **Real-World Scenarios**: 4 tests
- **Stress Tests**: 3 tests

**Total**: 27 tests × 8 libraries = 216 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid.js](https://github.com/solidjs/solid)** (`1.9.10`)  • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.30.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Valtio](https://github.com/pmndrs/valtio)** (`2.2.0`)  • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`6.15.0`)  • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`2.10.1`)  • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)
- **[Jotai](https://github.com/pmndrs/jotai)** (`2.15.1`)  • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)

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

*Generated on 2025-11-16T21:50:36.911Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
