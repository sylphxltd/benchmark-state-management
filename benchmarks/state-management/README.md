<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2017,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 85.1/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (62.2/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 85.1/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 62.2/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 59.3/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 59.3/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 24.8/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 88.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 51.6/100 | 58% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 47.5/100 | 53% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 46.7/100 | 52% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.3/100 | 19% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.7/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.8/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 85.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 62.2/100 | 73% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 59.3/100 | 70% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 59.3/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.8/100 | 29% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 19.3/100 | 23% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.7/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.3/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **85.1** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **62.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **59.3** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **59.3** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **24.8** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **19.3** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.7** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   22.1M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   22.1M ops/sec
 Zustand            ███████████████████████████████████████    22.0M ops/sec
 Zen                ███████████████████████████████            17.4M ops/sec
 MobX               ██████████████████████████████             16.9M ops/sec
 Valtio             ███████████████████████████                15.0M ops/sec
 Jotai              ████                                       2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.0M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.9M ops/sec
🥈 Redux Toolkit      ███████████████████████████████████████    11.5M ops/sec
🥉 Zustand            █████████████████████████████              8.8M ops/sec
 Zen                █████████████████████████████              8.6M ops/sec
 Preact Signals     ██████████████                             4.2M ops/sec
 MobX               ███                                        814K ops/sec
 Valtio             ██                                         511K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 814K | 0.001ms | 0.001ms | 1000 |
| Valtio | 511K | 0.002ms | 0.003ms | 1000 |
| Jotai | 32K | 0.033ms | 0.051ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Zustand            ████████████████████████████████████████   2.7M ops/sec
🥈 Solid.js           ████████████████████████████████████████   2.7M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 Zen                ██████████████████████                     1.5M ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 51K | 0.021ms | 0.041ms | 1000 |
| Jotai | 3K | 0.330ms | 0.764ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.4M ops/sec
🥈 Zen                ██████████████████████████████████████     20.5M ops/sec
🥉 Preact Signals     ████████████████████████████               15.0M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 MobX               ████                                       2.3M ops/sec
 Jotai              █                                          328K ops/sec
 Redux Toolkit                                                 155K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 328K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 155K | 0.007ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   11.4M ops/sec
🥈 Solid.js           █████████████████████████████████████      10.6M ops/sec
🥉 Zen                ███████████████████████████████████        10.0M ops/sec
 Zustand            ███                                        714K ops/sec
 MobX               ██                                         447K ops/sec
 Valtio             █                                          364K ops/sec
 Jotai                                                         36K ops/sec
 Redux Toolkit                                                 15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 10.6M | 0.001ms | 0.001ms | 1000 |
| Zen | 10.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 714K | 0.001ms | 0.002ms | 1000 |
| MobX | 447K | 0.002ms | 0.004ms | 1000 |
| Valtio | 364K | 0.003ms | 0.004ms | 1000 |
| Jotai | 36K | 0.030ms | 0.055ms | 1000 |
| Redux Toolkit | 15K | 0.069ms | 0.134ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.1M ops/sec
🥈 Solid.js           ████████████████████████████████████       3.7M ops/sec
🥉 Preact Signals     ██████████████████████████                 2.7M ops/sec
 Zustand            █                                          74K ops/sec
 MobX               █                                          66K ops/sec
 Valtio                                                        39K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 74K | 0.014ms | 0.023ms | 1000 |
| MobX | 66K | 0.016ms | 0.024ms | 1000 |
| Valtio | 39K | 0.026ms | 0.036ms | 1000 |
| Jotai | 4K | 0.296ms | 0.883ms | 1000 |
| Redux Toolkit | 2K | 0.644ms | 1.415ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   619K ops/sec
🥈 Solid.js           ████████████████████████                   374K ops/sec
🥉 Preact Signals     █████████████████████                      318K ops/sec
 Zustand                                                       7K ops/sec
 MobX                                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         347 ops/sec
 Redux Toolkit                                                 153 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 619K | 0.002ms | 0.004ms | 1000 |
| Solid.js | 374K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 7K | 0.137ms | 0.185ms | 1000 |
| MobX | 6K | 0.158ms | 0.187ms | 1000 |
| Valtio | 4K | 0.263ms | 0.296ms | 1000 |
| Jotai | 347 | 2.935ms | 5.287ms | 1000 |
| Redux Toolkit | 153 | 6.556ms | 7.446ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.5M ops/sec
🥈 Preact Signals     ████████████████████████████████████       10.3M ops/sec
🥉 Solid.js           ████████████████                           4.7M ops/sec
 Zustand            ████████████                               3.5M ops/sec
 Valtio             █                                          425K ops/sec
 Jotai              █                                          298K ops/sec
 MobX               █                                          209K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 425K | 0.003ms | 0.004ms | 1000 |
| Jotai | 298K | 0.004ms | 0.008ms | 1000 |
| MobX | 209K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.037ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.9M ops/sec
🥈 Preact Signals     █████████████████████████████████████      9.2M ops/sec
🥉 Zustand            ██████████████                             3.5M ops/sec
 Solid.js           █████████████                              3.2M ops/sec
 Valtio             █████████                                  2.2M ops/sec
 MobX               ████                                       975K ops/sec
 Jotai              █                                          232K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 9.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 975K | 0.001ms | 0.002ms | 1000 |
| Jotai | 232K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 58K | 0.017ms | 0.034ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   23.0M ops/sec
🥈 Zustand            ███████████████████████████████████████    22.6M ops/sec
🥉 Preact Signals     ██████████████████████████████████████     22.0M ops/sec
 Zen                ████████████████████████████               16.1M ops/sec
 Redux Toolkit      ████████████████████████                   13.8M ops/sec
 Valtio             █████████████████████                      12.0M ops/sec
 MobX               █████████████                              7.7M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.7M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   8.3M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   8.3M ops/sec
🥉 Zustand            ██████████████                             3.0M ops/sec
 Valtio             █████████████                              2.7M ops/sec
 Solid.js           ████████████                               2.5M ops/sec
 MobX               ████                                       902K ops/sec
 Jotai              ██                                         343K ops/sec
 Redux Toolkit                                                 79K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 902K | 0.001ms | 0.002ms | 1000 |
| Jotai | 343K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 79K | 0.013ms | 0.025ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   101K ops/sec
🥈 Zen                ███████████████████████████████████████    99K ops/sec
🥉 Preact Signals     ███████████████████████████                69K ops/sec
 Zustand            ███████████████████████                    59K ops/sec
 Valtio             █████████████████                          43K ops/sec
 MobX               ██████████████                             34K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 101K | 0.010ms | 0.018ms | 1000 |
| Zen | 99K | 0.010ms | 0.014ms | 1000 |
| Preact Signals | 69K | 0.015ms | 0.029ms | 1000 |
| Zustand | 59K | 0.017ms | 0.032ms | 1000 |
| Valtio | 43K | 0.024ms | 0.033ms | 1000 |
| MobX | 34K | 0.030ms | 0.042ms | 1000 |
| Jotai | 6K | 0.182ms | 0.307ms | 1000 |
| Redux Toolkit | 3K | 0.368ms | 1.102ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Zen                ████████████████████████                   12.5M ops/sec
🥉 Preact Signals     █████████████████████                      11.2M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.3M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         191K ops/sec
 Redux Toolkit                                                 135K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 191K | 0.006ms | 0.011ms | 1000 |
| Redux Toolkit | 135K | 0.008ms | 0.012ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.6M ops/sec
🥈 Zen                ███████████████████████████████████████    19.3M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          454K ops/sec
 Valtio             █                                          275K ops/sec
 Jotai                                                         158K ops/sec
 Redux Toolkit                                                 67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.002ms | 1000 |
| MobX | 454K | 0.002ms | 0.003ms | 1000 |
| Valtio | 275K | 0.004ms | 0.005ms | 1000 |
| Jotai | 158K | 0.009ms | 0.014ms | 1000 |
| Redux Toolkit | 67K | 0.016ms | 0.032ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.6M ops/sec
🥈 Preact Signals     █                                          108K ops/sec
🥉 Zustand            █                                          97K ops/sec
 Zen                █                                          94K ops/sec
 Valtio             █                                          61K ops/sec
 Redux Toolkit                                                 27K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 108K | 0.010ms | 0.019ms | 1000 |
| Zustand | 97K | 0.023ms | 0.026ms | 1000 |
| Zen | 94K | 0.012ms | 0.020ms | 1000 |
| Valtio | 61K | 0.051ms | 0.044ms | 1000 |
| Redux Toolkit | 27K | 0.080ms | 0.086ms | 1000 |
| MobX | 12K | 0.120ms | 1.011ms | 1000 |
| Jotai | 7K | 0.154ms | 0.908ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.8M ops/sec
🥈 Zen                ███████████████████████████████████████    13.6M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 119K ops/sec
 Jotai                                                         104K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 119K | 0.009ms | 0.015ms | 1000 |
| Jotai | 104K | 0.011ms | 0.019ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             █████████████                              797K ops/sec
🥉 MobX               ████                                       239K ops/sec
 Jotai              ███                                        154K ops/sec
 Preact Signals     ██                                         132K ops/sec
 Zen                ██                                         104K ops/sec
 Zustand            ██                                         90K ops/sec
 Redux Toolkit                                                 820 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.002ms | 1000 |
| Valtio | 797K | 0.001ms | 0.007ms | 1000 |
| MobX | 239K | 0.005ms | 0.015ms | 1000 |
| Jotai | 154K | 0.008ms | 0.011ms | 1000 |
| Preact Signals | 132K | 0.008ms | 0.014ms | 1000 |
| Zen | 104K | 0.010ms | 0.028ms | 1000 |
| Zustand | 90K | 0.011ms | 0.021ms | 1000 |
| Redux Toolkit | 820 | 1.248ms | 3.174ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
🥉 Zustand            ████████████████████████████████████████   318K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        20K ops/sec
 MobX               █                                          7K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         276 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Zen | 80K | 0.013ms | 0.019ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.058ms | 1000 |
| MobX | 7K | 0.138ms | 0.154ms | 1000 |
| Valtio | 5K | 0.212ms | 0.702ms | 1000 |
| Jotai | 276 | 3.635ms | 4.183ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   39K ops/sec
🥈 Zen                ███████████                                11K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          738 ops/sec
 MobX                                                          481 ops/sec
 Valtio                                                        387 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 39K | 0.031ms | 0.402ms | 1000 |
| Zen | 11K | 0.093ms | 0.101ms | 1000 |
| Preact Signals | 8K | 0.121ms | 0.222ms | 1000 |
| Zustand | 738 | 1.373ms | 1.959ms | 1000 |
| MobX | 481 | 2.093ms | 2.758ms | 1000 |
| Valtio | 387 | 2.600ms | 3.279ms | 1000 |
| Jotai | 33 | 30.599ms | 34.124ms | 1000 |
| Redux Toolkit | 14 | 72.748ms | 75.708ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.5M ops/sec
🥈 Preact Signals     ██████████                                 5.1M ops/sec
🥉 Zen                ████                                       2.2M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          270K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 270K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     █████████                                  4.9M ops/sec
🥉 Zen                ██████                                     3.1M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          315K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 315K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.6M ops/sec
🥈 Preact Signals     █████████████                              7.2M ops/sec
🥉 Zen                ███████████                                6.4M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.5M ops/sec
 MobX               █                                          617K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 617K | 0.002ms | 0.004ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.2M ops/sec
🥈 Zen                ████████████████                           7.8M ops/sec
🥉 Preact Signals     ██████████████                             6.7M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         995K ops/sec
 MobX               ██                                         735K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 995K | 0.001ms | 0.002ms | 1000 |
| MobX | 735K | 0.001ms | 0.003ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           █████████████████                          425K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                ██                                         37K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 425K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 37K | 0.027ms | 0.036ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.045ms | 1000 |
| Valtio | 8K | 0.124ms | 0.147ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.173ms | 0.199ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥈 Preact Signals     █                                          771K ops/sec
🥉 Zen                                                           251K ops/sec
 MobX                                                          124K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        72K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 771K | 0.001ms | 0.001ms | 1000 |
| Zen | 251K | 0.004ms | 0.004ms | 1000 |
| MobX | 124K | 0.008ms | 0.010ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 72K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Zen                ████                                       356K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        276K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          78K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 356K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 276K | 0.004ms | 0.004ms | 1000 |
| Valtio | 92K | 0.011ms | 0.015ms | 1000 |
| MobX | 78K | 0.013ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.1M ops/sec
🥈 Solid.js           ███████████████████████████████████████    12.7M ops/sec
🥉 Preact Signals     ████████                                   2.5M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          115K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 115K | 0.009ms | 0.016ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.45.1`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-17T23:29:35.239Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
