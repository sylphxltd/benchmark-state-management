<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2016,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-28-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 58.0/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (45.9/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 58.0/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 45.9/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 41.5/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 40.4/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 19.6/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 44.5/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 43.2/100 | 53% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 41.2/100 | 51% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.7/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.6/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.5/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.9/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 58.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 45.9/100 | 79% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 41.5/100 | 72% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 40.4/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 19.6/100 | 34% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.8/100 | 26% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.3/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.3/100 | 11% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **58.0** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **45.9** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **41.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **40.4** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **19.6** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **14.8** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **11.3** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Zen                ████████████████████████████████████████   22.4M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.1M ops/sec
 Zustand            ███████████████████████████████████████    21.8M ops/sec
 Valtio             ███████████████████████████                15.1M ops/sec
 MobX               ███████████████████████                    12.9M ops/sec
 Jotai              ████                                       2.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 12.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.2M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   13.2M ops/sec
🥈 Redux Toolkit      █████████████████████████████              9.6M ops/sec
🥉 Solid.js           ████████████████████████████               9.3M ops/sec
 Preact Signals     ████████████████████████████               9.2M ops/sec
 Zen                █████████████████                          5.5M ops/sec
 MobX               ███                                        867K ops/sec
 Valtio             ██                                         501K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 13.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 9.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 867K | 0.001ms | 0.001ms | 1000 |
| Valtio | 501K | 0.002ms | 0.004ms | 1000 |
| Jotai | 31K | 0.033ms | 0.044ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                ███████████                                782K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 782K | 0.001ms | 0.001ms | 1000 |
| MobX | 87K | 0.012ms | 0.019ms | 1000 |
| Valtio | 51K | 0.021ms | 0.038ms | 1000 |
| Jotai | 3K | 0.342ms | 0.714ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   20.8M ops/sec
🥈 Preact Signals     ███████████████████████████                14.1M ops/sec
🥉 Zen                ██████████████████████████                 13.4M ops/sec
 Zustand            █████████                                  4.6M ops/sec
 MobX               ███████                                    3.5M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Jotai              █                                          363K ops/sec
 Redux Toolkit                                                 167K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 363K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 167K | 0.007ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   12.3M ops/sec
🥈 Preact Signals     ████████████████████████████████████       11.0M ops/sec
🥉 Zen                █████████████                              4.0M ops/sec
 Zustand            ██                                         712K ops/sec
 MobX               ██                                         481K ops/sec
 Valtio             █                                          390K ops/sec
 Jotai                                                         37K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 712K | 0.001ms | 0.002ms | 1000 |
| MobX | 481K | 0.002ms | 0.003ms | 1000 |
| Valtio | 390K | 0.003ms | 0.003ms | 1000 |
| Jotai | 37K | 0.027ms | 0.043ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.097ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Preact Signals     ██████████████████████████████             2.7M ops/sec
🥉 Zen                ███████████████████                        1.7M ops/sec
 Zustand            █                                          78K ops/sec
 MobX               █                                          58K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.7M | 0.001ms | 0.001ms | 1000 |
| Zustand | 78K | 0.013ms | 0.021ms | 1000 |
| MobX | 58K | 0.018ms | 0.033ms | 1000 |
| Valtio | 41K | 0.025ms | 0.041ms | 1000 |
| Jotai | 4K | 0.295ms | 0.870ms | 1000 |
| Redux Toolkit | 2K | 0.608ms | 1.226ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   415K ops/sec
🥈 Preact Signals     ███████████████████████████████            317K ops/sec
🥉 Zen                ████████████████████                       208K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         354 ops/sec
 Redux Toolkit                                                 164 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 415K | 0.002ms | 0.004ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 208K | 0.005ms | 0.005ms | 1000 |
| Zustand | 8K | 0.129ms | 0.148ms | 1000 |
| MobX | 6K | 0.176ms | 0.205ms | 1000 |
| Valtio | 4K | 0.238ms | 0.266ms | 1000 |
| Jotai | 354 | 2.865ms | 4.803ms | 1000 |
| Redux Toolkit | 164 | 6.100ms | 6.984ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.0M ops/sec
🥈 Preact Signals     ████████████████████████████████████       9.9M ops/sec
🥉 Solid.js           █████████████████                          4.7M ops/sec
 Zustand            █████████████                              3.6M ops/sec
 Valtio             ██                                         452K ops/sec
 Jotai              █                                          342K ops/sec
 MobX               █                                          216K ops/sec
 Redux Toolkit                                                 65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.9M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 452K | 0.002ms | 0.003ms | 1000 |
| Jotai | 342K | 0.003ms | 0.004ms | 1000 |
| MobX | 216K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 65K | 0.016ms | 0.031ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   9.6M ops/sec
🥈 Zen                ███████████████████████████████████████    9.5M ops/sec
🥉 Zustand            ██████████████                             3.5M ops/sec
 Solid.js           ███████████                                2.7M ops/sec
 Valtio             ████████                                   1.9M ops/sec
 MobX               ████                                       982K ops/sec
 Jotai              █                                          294K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.002ms | 1000 |
| MobX | 982K | 0.001ms | 0.002ms | 1000 |
| Jotai | 294K | 0.004ms | 0.008ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.044ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   23.0M ops/sec
🥈 Zustand            ██████████████████████████████████████     22.1M ops/sec
🥉 Preact Signals     ██████████████████████████████████████     21.8M ops/sec
 Zen                █████████████████████████████              16.5M ops/sec
 Redux Toolkit      ████████████████████████████               16.3M ops/sec
 Valtio             ██████████████████████                     12.8M ops/sec
 MobX               █████████████                              7.5M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.5M ops/sec
🥈 Zen                █████████████████████████████████████      7.8M ops/sec
🥉 Zustand            ███████████████                            3.1M ops/sec
 Solid.js           ████████████                               2.5M ops/sec
 Valtio             ████████████                               2.5M ops/sec
 MobX               ████                                       937K ops/sec
 Jotai              ██                                         322K ops/sec
 Redux Toolkit                                                 83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 937K | 0.001ms | 0.002ms | 1000 |
| Jotai | 322K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 83K | 0.012ms | 0.025ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   17K ops/sec
🥈 Solid.js           ██                                         967 ops/sec
🥉 Zen                ██                                         962 ops/sec
 MobX               ██                                         951 ops/sec
 Preact Signals     ██                                         922 ops/sec
 Zustand            ██                                         916 ops/sec
 Valtio             ██                                         911 ops/sec
 Redux Toolkit      ██                                         821 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 17K | 0.064ms | 0.090ms | 1000 |
| Solid.js | 967 | 1.099ms | 1.883ms | 1000 |
| Zen | 962 | 1.120ms | 2.145ms | 1000 |
| MobX | 951 | 1.112ms | 1.733ms | 1000 |
| Preact Signals | 922 | 1.101ms | 2.143ms | 1000 |
| Zustand | 916 | 1.105ms | 1.871ms | 1000 |
| Valtio | 911 | 1.106ms | 1.708ms | 1000 |
| Redux Toolkit | 821 | 1.247ms | 1.895ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   109K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   109K ops/sec
🥉 Zen                ██████████████████████████████████████     103K ops/sec
 Zustand            ██████████████████████                     61K ops/sec
 Valtio             ████████████████                           45K ops/sec
 MobX               █████████████                              36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 109K | 0.009ms | 0.018ms | 1000 |
| Preact Signals | 109K | 0.010ms | 0.018ms | 1000 |
| Zen | 103K | 0.010ms | 0.014ms | 1000 |
| Zustand | 61K | 0.017ms | 0.026ms | 1000 |
| Valtio | 45K | 0.023ms | 0.032ms | 1000 |
| MobX | 36K | 0.028ms | 0.041ms | 1000 |
| Jotai | 6K | 0.178ms | 0.307ms | 1000 |
| Redux Toolkit | 3K | 0.332ms | 0.454ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   20.8M ops/sec
🥈 Preact Signals     ██████████████████████                     11.4M ops/sec
🥉 Zustand            ██████████                                 5.1M ops/sec
 Zen                ██████████                                 4.9M ops/sec
 MobX               █████                                      2.4M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         190K ops/sec
 Redux Toolkit                                                 141K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 190K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 141K | 0.009ms | 0.020ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.5M ops/sec
🥈 Zen                ███████████████████████████████            15.0M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          461K ops/sec
 Valtio             █                                          281K ops/sec
 Jotai                                                         170K ops/sec
 Redux Toolkit                                                 75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 461K | 0.002ms | 0.003ms | 1000 |
| Valtio | 281K | 0.004ms | 0.005ms | 1000 |
| Jotai | 170K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 75K | 0.014ms | 0.026ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.8M ops/sec
🥈 Zen                █                                          112K ops/sec
🥉 Preact Signals     █                                          105K ops/sec
 Zustand            █                                          100K ops/sec
 Redux Toolkit                                                 41K ops/sec
 Valtio                                                        31K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 112K | 0.009ms | 0.016ms | 1000 |
| Preact Signals | 105K | 0.010ms | 0.014ms | 1000 |
| Zustand | 100K | 0.020ms | 0.057ms | 1000 |
| Redux Toolkit | 41K | 0.065ms | 0.050ms | 1000 |
| Valtio | 31K | 0.075ms | 0.142ms | 1000 |
| MobX | 11K | 0.114ms | 0.331ms | 1000 |
| Jotai | 7K | 0.148ms | 0.351ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   14.1M ops/sec
🥈 Zen                ██████████████████████████████████         11.9M ops/sec
🥉 Zustand            ██████████                                 3.7M ops/sec
 Solid.js           ████████                                   2.8M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 128K ops/sec
 Jotai                                                         112K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 128K | 0.008ms | 0.012ms | 1000 |
| Jotai | 112K | 0.010ms | 0.018ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.0M ops/sec
🥈 Valtio             ████████████████                           837K ops/sec
🥉 MobX               █████                                      250K ops/sec
 Jotai              ███                                        163K ops/sec
 Zustand            ███                                        130K ops/sec
 Zen                ██                                         106K ops/sec
 Preact Signals     ██                                         104K ops/sec
 Redux Toolkit                                                 825 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.0M | 0.001ms | 0.002ms | 1000 |
| Valtio | 837K | 0.001ms | 0.003ms | 1000 |
| MobX | 250K | 0.004ms | 0.011ms | 1000 |
| Jotai | 163K | 0.006ms | 0.016ms | 1000 |
| Zustand | 130K | 0.008ms | 0.011ms | 1000 |
| Zen | 106K | 0.010ms | 0.019ms | 1000 |
| Preact Signals | 104K | 0.010ms | 0.018ms | 1000 |
| Redux Toolkit | 825 | 1.220ms | 1.458ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████                       160K ops/sec
🥉 Redux Toolkit      ████████████████████                       160K ops/sec
 Zen                ███████                                    54K ops/sec
 Preact Signals     ██                                         19K ops/sec
 MobX               █                                          7K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         281 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 54K | 0.019ms | 0.026ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.061ms | 1000 |
| MobX | 7K | 0.137ms | 0.146ms | 1000 |
| Valtio | 5K | 0.202ms | 0.240ms | 1000 |
| Jotai | 281 | 3.562ms | 4.170ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   38K ops/sec
🥈 Zen                ███████████                                10K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          745 ops/sec
 MobX               █                                          547 ops/sec
 Valtio                                                        422 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 38K | 0.029ms | 0.045ms | 1000 |
| Zen | 10K | 0.097ms | 0.105ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.138ms | 1000 |
| Zustand | 745 | 1.346ms | 1.859ms | 1000 |
| MobX | 547 | 1.830ms | 2.354ms | 1000 |
| Valtio | 422 | 2.376ms | 2.939ms | 1000 |
| Jotai | 34 | 29.816ms | 34.743ms | 1000 |
| Redux Toolkit | 15 | 66.307ms | 68.217ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   19.3M ops/sec
🥈 Zen                █████████████████████████████              13.8M ops/sec
🥉 Preact Signals     ███████████                                5.1M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          292K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 292K | 0.003ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Zen                ███████████████████████████                15.1M ops/sec
🥉 Preact Signals     █████████                                  5.0M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          338K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 338K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.7M ops/sec
🥈 Zen                █████████████████████████████              15.6M ops/sec
🥉 Preact Signals     ██████████████                             7.6M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             █████                                      2.5M ops/sec
 MobX               ██                                         830K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 830K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.9M ops/sec
🥈 Preact Signals     ██████████████                             6.6M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ███████                                    3.3M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         788K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 788K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         432K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Zen                                                           7K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 432K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.045ms | 1000 |
| Valtio | 8K | 0.134ms | 0.162ms | 1000 |
| Zen | 7K | 0.147ms | 0.167ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.174ms | 0.211ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   19.6M ops/sec
🥈 Zen                ████████████████████████████               13.5M ops/sec
🥉 Preact Signals     ██                                         835K ops/sec
 MobX                                                          120K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        72K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 835K | 0.001ms | 0.001ms | 1000 |
| MobX | 120K | 0.008ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 72K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        275K ops/sec
 Valtio             █                                          91K ops/sec
 MobX               █                                          78K ops/sec
 Zen                █                                          77K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 275K | 0.004ms | 0.004ms | 1000 |
| Valtio | 91K | 0.011ms | 0.018ms | 1000 |
| MobX | 78K | 0.013ms | 0.026ms | 1000 |
| Zen | 77K | 0.014ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.1M ops/sec
🥈 Solid.js           ███████████████████████████████████████    12.7M ops/sec
🥉 Preact Signals     █████████                                  2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          118K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 118K | 0.009ms | 0.014ms | 1000 |
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
- **Async Operations**: 2 tests
- **Real-World Scenarios**: 4 tests
- **Stress Tests**: 3 tests

**Total**: 28 tests × 8 libraries = 224 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid.js](https://github.com/solidjs/solid)** (`1.9.10`)  • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.18.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T04:05:10.124Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
