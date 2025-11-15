<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 84.9/100 score
- **⚖️ Best Balance**: Zen - Great performance (51.5/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 84.9/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 51.5/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 45.3/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Preact Signals** (Score: 35.9/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Valtio** (Score: 34.3/100)
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
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 78.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zustand](https://github.com/pmndrs/zustand)** | 44.5/100 | 57% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 43.9/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 27.1/100 | 35% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.5/100 | 33% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 24.8/100 | 32% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.5/100 | 10% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.1/100 | 9% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 84.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 51.5/100 | 61% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 45.3/100 | 53% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 35.9/100 | 42% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 34.3/100 | 40% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 27.5/100 | 32% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.5/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.9/100 | 8% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **84.9** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **51.5** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **45.3** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **35.9** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **34.3** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **27.5** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **10.5** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.9** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Valtio             ████████████████████████████████████████   31.2M ops/sec
🥈 Solid Signals      ████████████████████████████████████       28.2M ops/sec
🥉 Redux Toolkit      █████████████████████████████████          25.6M ops/sec
 MobX               █████████████████████████                  19.5M ops/sec
 Zustand            ████████████████                           12.2M ops/sec
 Jotai              █████                                      4.3M ops/sec
 Zen                ████                                       2.8M ops/sec
 Preact Signals     █                                          1.0M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 31.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 28.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 25.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 19.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 12.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.3M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   23.8M ops/sec
🥈 Zustand            ███████████████████████                    13.7M ops/sec
🥉 Zen                █████████████████████                      12.7M ops/sec
 Redux Toolkit      █████████████████                          10.3M ops/sec
 Valtio             ██████████████                             8.3M ops/sec
 Preact Signals     ████████████                               7.4M ops/sec
 MobX               ████████████                               7.0M ops/sec
 Jotai              █████                                      2.8M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 23.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 13.7M | 0.000ms | 0.001ms | 1000 |
| Zen | 12.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 10.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 8.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.0M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.8M | 0.000ms | 0.002ms | 1000 |

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   23.5M ops/sec
🥈 Zen                ██████████████████████████████████████     22.6M ops/sec
🥉 Solid Signals      █████████████████████████████████████      22.0M ops/sec
 Preact Signals     █████████████████████████████████████      21.6M ops/sec
 Redux Toolkit      ███████████████████████████                15.9M ops/sec
 Valtio             ███████████████                            9.0M ops/sec
 MobX               ███████████                                6.4M ops/sec
 Jotai              ███                                        1.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 23.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 22.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 15.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 9.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 6.4M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.5M | 0.001ms | 0.004ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   11.2M ops/sec
🥈 Solid Signals      ████████████████████                       5.6M ops/sec
🥉 MobX               ███████████████████                        5.2M ops/sec
 Zustand            ██████████████████                         5.0M ops/sec
 Valtio             ████████████                               3.4M ops/sec
 Zen                ████████████                               3.3M ops/sec
 Jotai              ██                                         644K ops/sec
 Redux Toolkit      █                                          194K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 644K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 194K | 0.005ms | 0.009ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   17.1M ops/sec
🥈 MobX               ████████████████                           7.0M ops/sec
🥉 Zustand            ██████████████                             6.2M ops/sec
 Valtio             ████████████                               5.2M ops/sec
 Zen                ██████                                     2.6M ops/sec
 Preact Signals     ██                                         981K ops/sec
 Jotai              ██                                         691K ops/sec
 Redux Toolkit      █                                          283K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 17.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 7.0M | 0.000ms | 0.001ms | 1000 |
| Zustand | 6.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 981K | 0.001ms | 0.002ms | 1000 |
| Jotai | 691K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 283K | 0.004ms | 0.007ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   5.8M ops/sec
🥈 Valtio             ███████████████████████████████████        5.1M ops/sec
🥉 MobX               ███████████████████████████                3.9M ops/sec
 Zustand            █████████████████████                      3.1M ops/sec
 Jotai              █████                                      725K ops/sec
 Zen                ███                                        374K ops/sec
 Redux Toolkit      █                                          191K ops/sec
 Preact Signals     █                                          110K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 5.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 725K | 0.001ms | 0.004ms | 1000 |
| Zen | 374K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 191K | 0.005ms | 0.008ms | 1000 |
| Preact Signals | 110K | 0.009ms | 0.012ms | 1000 |

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   21.9M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    21.2M ops/sec
🥉 Solid Signals      ████████████████████████████████           17.3M ops/sec
 Zustand            ██████████                                 5.5M ops/sec
 Valtio             █████                                      2.6M ops/sec
 MobX               ███                                        1.5M ops/sec
 Jotai              █                                          452K ops/sec
 Redux Toolkit                                                 134K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 17.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.5M | 0.001ms | 0.003ms | 1000 |
| Jotai | 452K | 0.002ms | 0.009ms | 1000 |
| Redux Toolkit | 134K | 0.007ms | 0.035ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.6M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    11.2M ops/sec
🥉 Solid Signals      ████                                       1.2M ops/sec
 Zustand            ████                                       1.1M ops/sec
 Valtio             ███                                        916K ops/sec
 Jotai              ██                                         469K ops/sec
 MobX               █                                          332K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zustand | 1.1M | 0.001ms | 0.002ms | 1000 |
| Valtio | 916K | 0.001ms | 0.004ms | 1000 |
| Jotai | 469K | 0.002ms | 0.004ms | 1000 |
| MobX | 332K | 0.003ms | 0.010ms | 1000 |
| Redux Toolkit | 4K | 0.270ms | 0.530ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.5M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    9.4M ops/sec
🥉 Solid Signals      ██████████████████████████████             7.2M ops/sec
 Valtio             ████████████████████████                   5.7M ops/sec
 Zustand            █████████████████████                      4.9M ops/sec
 MobX               ███████████                                2.6M ops/sec
 Jotai              ███                                        667K ops/sec
 Redux Toolkit      █                                          157K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 7.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.6M | 0.000ms | 0.002ms | 1000 |
| Jotai | 667K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 157K | 0.006ms | 0.012ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     █████████████████████████████████████      20.8M ops/sec
🥉 Solid Signals      ███████████████████████████████████        19.4M ops/sec
 Zustand            ████████████                               6.8M ops/sec
 Valtio             ████████                                   4.6M ops/sec
 Redux Toolkit      ██████                                     3.1M ops/sec
 MobX               ████                                       2.4M ops/sec
 Jotai              ███                                        1.9M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.8M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 19.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 6.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 4.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 3.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.004ms | 1000 |
| Jotai | 1.9M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.0M ops/sec
🥈 Zen                ███████████████████████████████████        7.1M ops/sec
🥉 Solid Signals      █████████████████████                      4.2M ops/sec
 Zustand            ████████████████████                       4.0M ops/sec
 Valtio             ███████████████                            3.0M ops/sec
 MobX               ████████                                   1.6M ops/sec
 Jotai              ███                                        678K ops/sec
 Redux Toolkit      █                                          223K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.1M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 4.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.6M | 0.001ms | 0.002ms | 1000 |
| Jotai | 678K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 223K | 0.004ms | 0.013ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Solid Signals      ████████████████████████████████████████   658K ops/sec
🥈 Zustand            ████████████████████                       331K ops/sec
🥉 MobX               ███████████████████                        317K ops/sec
 Valtio             ████████████████                           262K ops/sec
 Jotai              ███                                        49K ops/sec
 Redux Toolkit      █                                          16K ops/sec
 Preact Signals                                                922 ops/sec
 Zen                                                           836 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 658K | 0.002ms | 0.005ms | 1000 |
| Zustand | 331K | 0.003ms | 0.007ms | 1000 |
| MobX | 317K | 0.003ms | 0.006ms | 1000 |
| Valtio | 262K | 0.004ms | 0.007ms | 1000 |
| Jotai | 49K | 0.020ms | 0.028ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.094ms | 1000 |
| Preact Signals | 922 | 1.134ms | 2.167ms | 1000 |
| Zen | 836 | 1.320ms | 2.713ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   171K ops/sec
🥈 MobX               █████████████████████████                  108K ops/sec
🥉 Zen                █████████████████████████                  107K ops/sec
 Preact Signals     █████████████████████████                  107K ops/sec
 Zustand            █████████████████████████                  106K ops/sec
 Valtio             █████████████████████                      90K ops/sec
 Jotai              ████                                       18K ops/sec
 Redux Toolkit      ██                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 171K | 0.006ms | 0.011ms | 1000 |
| MobX | 108K | 0.009ms | 0.015ms | 1000 |
| Zen | 107K | 0.010ms | 0.019ms | 1000 |
| Preact Signals | 107K | 0.010ms | 0.019ms | 1000 |
| Zustand | 106K | 0.009ms | 0.013ms | 1000 |
| Valtio | 90K | 0.011ms | 0.016ms | 1000 |
| Jotai | 18K | 0.056ms | 0.080ms | 1000 |
| Redux Toolkit | 7K | 0.147ms | 0.427ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   20.2M ops/sec
🥈 Solid Signals      ████████████████████████████████           16.2M ops/sec
🥉 Preact Signals     ██████████████████████                     11.4M ops/sec
 Valtio             ███████████                                5.5M ops/sec
 MobX               ██████████                                 5.3M ops/sec
 Zustand            ███████                                    3.3M ops/sec
 Jotai              █                                          373K ops/sec
 Redux Toolkit      █                                          274K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 16.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 5.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 373K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 274K | 0.004ms | 0.008ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   19.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    19.1M ops/sec
🥉 MobX               ███                                        1.6M ops/sec
 Valtio             ███                                        1.5M ops/sec
 Solid Signals      █                                          459K ops/sec
 Zustand            █                                          443K ops/sec
 Jotai                                                         227K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 1.6M | 0.001ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 459K | 0.002ms | 0.004ms | 1000 |
| Zustand | 443K | 0.002ms | 0.004ms | 1000 |
| Jotai | 227K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 3K | 0.376ms | 0.843ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   2.6M ops/sec
🥈 Zustand            ███                                        191K ops/sec
🥉 Zen                ██                                         157K ops/sec
 Preact Signals     ██                                         130K ops/sec
 Valtio             █                                          63K ops/sec
 Redux Toolkit      █                                          50K ops/sec
 Jotai                                                         17K ops/sec
 MobX                                                          13K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.6M | 0.000ms | 0.002ms | 1000 |
| Zustand | 191K | 0.005ms | 0.013ms | 1000 |
| Zen | 157K | 0.006ms | 0.011ms | 1000 |
| Preact Signals | 130K | 0.009ms | 0.016ms | 1000 |
| Valtio | 63K | 0.016ms | 0.083ms | 1000 |
| Redux Toolkit | 50K | 0.020ms | 0.093ms | 1000 |
| Jotai | 17K | 0.059ms | 0.167ms | 1000 |
| MobX | 13K | 0.075ms | 0.760ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   14.6M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    14.2M ops/sec
🥉 Valtio             █████████████████████                      7.7M ops/sec
 Solid Signals      ███████████████████                        6.9M ops/sec
 MobX               ███████                                    2.6M ops/sec
 Zustand            ██████                                     2.1M ops/sec
 Jotai              █                                          306K ops/sec
 Redux Toolkit                                                 117K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 7.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 306K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 117K | 0.009ms | 0.012ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 MobX               ████████████████████████████████████████   26.0M ops/sec
🥈 Valtio             ████████████████████████████████████████   25.8M ops/sec
🥉 Zustand            ████████████████████████                   15.9M ops/sec
 Solid Signals      ██████████████████████                     14.5M ops/sec
 Redux Toolkit      ██████████████████████                     14.1M ops/sec
 Jotai              ████                                       2.7M ops/sec
 Zen                                                           104K ops/sec
 Preact Signals                                                19K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 26.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 25.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 15.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 14.5M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 14.1M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.7M | 0.000ms | 0.002ms | 1000 |
| Zen | 104K | 0.010ms | 0.019ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.071ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   19.2M ops/sec
🥈 MobX               ███████████████████                        9.3M ops/sec
🥉 Zustand            ███████████████                            7.2M ops/sec
 Valtio             █████████████                              6.1M ops/sec
 Jotai              ██                                         894K ops/sec
 Redux Toolkit      █                                          318K ops/sec
 Zen                                                           13K ops/sec
 Preact Signals                                                8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 19.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 9.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 7.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 6.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 894K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 318K | 0.003ms | 0.005ms | 1000 |
| Zen | 13K | 0.078ms | 0.089ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.137ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   334K ops/sec
🥈 Preact Signals     ████████████████████                       164K ops/sec
🥉 Solid Signals      █████████████████                          144K ops/sec
 Zustand            █████████████████                          142K ops/sec
 Jotai              █████████████                              107K ops/sec
 MobX               ██                                         18K ops/sec
 Valtio             █                                          6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 334K | 0.004ms | 0.006ms | 1000 |
| Preact Signals | 164K | 0.006ms | 0.010ms | 1000 |
| Solid Signals | 144K | 0.007ms | 0.012ms | 1000 |
| Zustand | 142K | 0.007ms | 0.010ms | 1000 |
| Jotai | 107K | 0.009ms | 0.013ms | 1000 |
| MobX | 18K | 0.057ms | 0.071ms | 1000 |
| Valtio | 6K | 0.157ms | 0.381ms | 1000 |
| Redux Toolkit | 1K | 0.805ms | 1.146ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Zen                ████████████████████████████████████████   19.3M ops/sec
🥈 MobX               ███████████████████                        9.3M ops/sec
🥉 Solid Signals      █████████████                              6.3M ops/sec
 Preact Signals     ███████████                                5.2M ops/sec
 Valtio             █████████                                  4.5M ops/sec
 Zustand            ██                                         1.0M ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 9.3M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 6.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 4.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Zen                ████████████████████████████████████████   19.9M ops/sec
🥈 Solid Signals      ███████████████████                        9.2M ops/sec
🥉 Preact Signals     ██████████                                 4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.6M ops/sec
 MobX               ███                                        1.3M ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 9.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Zen                ████████████████████████████████████████   19.9M ops/sec
🥈 Solid Signals      █████████████████████████████████████      18.3M ops/sec
🥉 Preact Signals     █████████████                              6.7M ops/sec
 Valtio             ████████████                               5.8M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 MobX               █████                                      2.7M ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 18.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 MobX               ████████████████████████████████████████   16.0M ops/sec
🥈 Zen                ████████████████████████████████████████   15.8M ops/sec
🥉 Solid Signals      ███████████████████████████████            12.3M ops/sec
 Preact Signals     █████████████████                          6.9M ops/sec
 Valtio             █████████████                              5.4M ops/sec
 Zustand            █████████████                              5.2M ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 16.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.8M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 12.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 MobX               ███████████████████████████████████        1.0M ops/sec
🥉 Zustand            ██████████████████████████████████         977K ops/sec
 Valtio             ██████████                                 296K ops/sec
 Redux Toolkit      ████████                                   230K ops/sec
 Zen                ██                                         61K ops/sec
 Preact Signals     █                                          28K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.004ms | 1000 |
| MobX | 1.0M | 0.001ms | 0.003ms | 1000 |
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Valtio | 296K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 61K | 0.016ms | 0.024ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.044ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   19.3M ops/sec
🥈 Preact Signals     ██████                                     3.0M ops/sec
🥉 Solid Signals      █████                                      2.5M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.5M ops/sec
 MobX               ██                                         940K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 940K | 0.001ms | 0.003ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Zen                ████████████████████████████████████████   19.6M ops/sec
🥈 MobX               ███                                        1.5M ops/sec
🥉 Solid Signals      ███                                        1.3M ops/sec
 Preact Signals     █                                          718K ops/sec
 Valtio             █                                          517K ops/sec
 Zustand                                                       112K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 1.5M | 0.001ms | 0.001ms | 1000 |
| Solid Signals | 1.3M | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 718K | 0.001ms | 0.002ms | 1000 |
| Valtio | 517K | 0.002ms | 0.005ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid Signals      ████████████████████████████████████████   4.0M ops/sec
🥈 Zustand            █████████████████████████████              2.9M ops/sec
🥉 MobX               ███████████████████████████                2.7M ops/sec
 Valtio             ████████████████                           1.6M ops/sec
 Zen                █████                                      548K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        273K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 4.0M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.003ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.002ms | 1000 |
| Zen | 548K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 273K | 0.004ms | 0.004ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |



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

- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.1.1`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) v2.10.1 • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) v2.15.1 • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)

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

*Generated on 2025-11-15T18:07:05.790Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
