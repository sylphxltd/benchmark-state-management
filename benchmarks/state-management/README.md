<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2015,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 59.7/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (45.6/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 59.7/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 45.6/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 45.0/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 44.5/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 20.9/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 80.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 45.5/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 43.7/100 | 54% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 40.4/100 | 50% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.5/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.3/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.0/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.9/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 59.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 45.6/100 | 76% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 45.0/100 | 75% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 44.5/100 | 75% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 20.9/100 | 35% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 16.3/100 | 27% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.9/100 | 20% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.5/100 | 11% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **59.7** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **45.6** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **45.0** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **44.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **20.9** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **16.3** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **11.9** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.5** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.5M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.3M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.3M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 Zen                █████████████████████████████████          18.7M ops/sec
 MobX               ██████████████████████████████             17.1M ops/sec
 Valtio             ███████████████████████████                15.1M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.1M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   12.5M ops/sec
🥈 Zustand            ███████████████████████████████            9.7M ops/sec
🥉 Redux Toolkit      ████████████████████████                   7.4M ops/sec
 Preact Signals     ██████████████                             4.4M ops/sec
 Zen                ██████████████                             4.3M ops/sec
 MobX               ███                                        844K ops/sec
 Valtio             ██                                         500K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 7.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 844K | 0.001ms | 0.001ms | 1000 |
| Valtio | 500K | 0.003ms | 0.004ms | 1000 |
| Jotai | 32K | 0.033ms | 0.051ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Zustand            ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥉 Solid.js           ████████████████████████████████████████   2.8M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                ███████████                                769K ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          50K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 769K | 0.001ms | 0.002ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 50K | 0.021ms | 0.041ms | 1000 |
| Jotai | 3K | 0.334ms | 0.773ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Zen                ████████████████████████████████████       19.6M ops/sec
🥉 Preact Signals     ████████████                               6.4M ops/sec
 Zustand            █████████                                  4.8M ops/sec
 MobX               ██████                                     3.4M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Jotai              █                                          334K ops/sec
 Redux Toolkit                                                 153K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 334K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 153K | 0.007ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   12.7M ops/sec
🥈 Solid.js           ████████████████████████████               9.0M ops/sec
🥉 Zen                ████████████████                           5.0M ops/sec
 Zustand            ██                                         727K ops/sec
 MobX               ██                                         526K ops/sec
 Valtio             █                                          381K ops/sec
 Jotai                                                         33K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 727K | 0.001ms | 0.002ms | 1000 |
| MobX | 526K | 0.002ms | 0.003ms | 1000 |
| Valtio | 381K | 0.003ms | 0.003ms | 1000 |
| Jotai | 33K | 0.030ms | 0.042ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.097ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.4M ops/sec
🥈 Preact Signals     ████████████████████████████████           2.7M ops/sec
🥉 Zen                █████████████                              1.1M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          60K ops/sec
 Valtio                                                        40K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.001ms | 1000 |
| Zustand | 77K | 0.013ms | 0.022ms | 1000 |
| MobX | 60K | 0.017ms | 0.026ms | 1000 |
| Valtio | 40K | 0.025ms | 0.035ms | 1000 |
| Jotai | 3K | 0.299ms | 0.626ms | 1000 |
| Redux Toolkit | 2K | 0.633ms | 1.458ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   361K ops/sec
🥈 Zen                ██████████████                             126K ops/sec
🥉 Preact Signals     ███████████                                100K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         353 ops/sec
 Redux Toolkit                                                 153 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 361K | 0.003ms | 0.005ms | 1000 |
| Zen | 126K | 0.008ms | 0.015ms | 1000 |
| Preact Signals | 100K | 0.011ms | 0.021ms | 1000 |
| Zustand | 8K | 0.134ms | 0.157ms | 1000 |
| MobX | 6K | 0.159ms | 0.185ms | 1000 |
| Valtio | 4K | 0.253ms | 0.289ms | 1000 |
| Jotai | 353 | 2.872ms | 4.786ms | 1000 |
| Redux Toolkit | 153 | 6.561ms | 7.601ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   10.0M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   9.9M ops/sec
🥉 Solid.js           ██████████████████                         4.4M ops/sec
 Zustand            ██████████████                             3.4M ops/sec
 Valtio             ██                                         427K ops/sec
 Jotai              █                                          295K ops/sec
 MobX               █                                          214K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.9M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 427K | 0.002ms | 0.004ms | 1000 |
| Jotai | 295K | 0.004ms | 0.007ms | 1000 |
| MobX | 214K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.038ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   8.6M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   8.6M ops/sec
🥉 Zustand            ████████████████                           3.4M ops/sec
 Solid.js           ██████████████                             3.1M ops/sec
 Valtio             ██████████                                 2.1M ops/sec
 MobX               █████                                      983K ops/sec
 Jotai              ██                                         330K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 8.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 983K | 0.001ms | 0.002ms | 1000 |
| Jotai | 330K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.034ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.0M ops/sec
🥈 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥉 Preact Signals     █████████████████████████████████          18.0M ops/sec
 Zen                ████████████████████████████████           17.8M ops/sec
 Redux Toolkit      ████████████████████████████               15.6M ops/sec
 Valtio             ██████████████████████                     12.3M ops/sec
 MobX               ██████████                                 5.5M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 18.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 15.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   5.9M ops/sec
🥈 Preact Signals     █████████████████████████████████████      5.5M ops/sec
🥉 Zustand            ████████████████████                       2.9M ops/sec
 Valtio             █████████████████                          2.5M ops/sec
 Solid.js           ███████████████                            2.2M ops/sec
 MobX               ████████                                   1.2M ops/sec
 Jotai              ██                                         337K ops/sec
 Redux Toolkit      █                                          80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 5.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 337K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 80K | 0.013ms | 0.023ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   18K ops/sec
🥈 Zustand            ██                                         930 ops/sec
🥉 Zen                ██                                         915 ops/sec
 Solid.js           ██                                         913 ops/sec
 MobX               ██                                         912 ops/sec
 Valtio             ██                                         906 ops/sec
 Preact Signals     ██                                         905 ops/sec
 Redux Toolkit      ██                                         785 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 18K | 0.060ms | 0.088ms | 1000 |
| Zustand | 930 | 1.130ms | 2.163ms | 1000 |
| Zen | 915 | 1.119ms | 2.144ms | 1000 |
| Solid.js | 913 | 1.117ms | 2.143ms | 1000 |
| MobX | 912 | 1.141ms | 2.171ms | 1000 |
| Valtio | 906 | 1.124ms | 2.154ms | 1000 |
| Preact Signals | 905 | 1.129ms | 2.147ms | 1000 |
| Redux Toolkit | 785 | 1.297ms | 2.341ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   105K ops/sec
🥈 Solid.js           ███████████████████████████████████████    104K ops/sec
🥉 Zen                ███████████████████████████████████████    101K ops/sec
 Zustand            ██████████████████████                     57K ops/sec
 Valtio             ████████████████                           43K ops/sec
 MobX               ██████████████                             36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 105K | 0.010ms | 0.018ms | 1000 |
| Solid.js | 104K | 0.010ms | 0.019ms | 1000 |
| Zen | 101K | 0.011ms | 0.019ms | 1000 |
| Zustand | 57K | 0.018ms | 0.028ms | 1000 |
| Valtio | 43K | 0.024ms | 0.034ms | 1000 |
| MobX | 36K | 0.029ms | 0.041ms | 1000 |
| Jotai | 6K | 0.185ms | 0.765ms | 1000 |
| Redux Toolkit | 3K | 0.376ms | 1.106ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   20.5M ops/sec
🥈 Preact Signals     █████████████████████                      11.0M ops/sec
🥉 Zen                ███████████████                            7.9M ops/sec
 Zustand            ██████████                                 5.0M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         184K ops/sec
 Redux Toolkit                                                 130K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.003ms | 1000 |
| Jotai | 184K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 130K | 0.008ms | 0.020ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.8M ops/sec
🥈 Zen                ███████████████████████████████            15.5M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          447K ops/sec
 Valtio             █                                          279K ops/sec
 Jotai                                                         162K ops/sec
 Redux Toolkit                                                 70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 447K | 0.002ms | 0.003ms | 1000 |
| Valtio | 279K | 0.004ms | 0.005ms | 1000 |
| Jotai | 162K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 70K | 0.015ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   5.1M ops/sec
🥈 Zen                █                                          131K ops/sec
🥉 Preact Signals     █                                          113K ops/sec
 Zustand            █                                          104K ops/sec
 Valtio                                                        58K ops/sec
 Redux Toolkit                                                 42K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 131K | 0.008ms | 0.011ms | 1000 |
| Preact Signals | 113K | 0.010ms | 0.019ms | 1000 |
| Zustand | 104K | 0.015ms | 0.025ms | 1000 |
| Valtio | 58K | 0.046ms | 0.042ms | 1000 |
| Redux Toolkit | 42K | 0.049ms | 0.061ms | 1000 |
| MobX | 12K | 0.116ms | 0.863ms | 1000 |
| Jotai | 7K | 0.153ms | 0.813ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.4M ops/sec
🥈 Zen                ████████████████████████████████████       12.1M ops/sec
🥉 Zustand            ███████████                                3.6M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.2M ops/sec
 Redux Toolkit                                                 121K ops/sec
 Jotai                                                         112K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.2M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 121K | 0.009ms | 0.020ms | 1000 |
| Jotai | 112K | 0.009ms | 0.019ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             █████████████                              786K ops/sec
🥉 MobX               ████                                       219K ops/sec
 Jotai              ███                                        172K ops/sec
 Preact Signals     ██                                         129K ops/sec
 Zen                ██                                         106K ops/sec
 Zustand            █                                          81K ops/sec
 Redux Toolkit                                                 814 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.002ms | 1000 |
| Valtio | 786K | 0.001ms | 0.007ms | 1000 |
| MobX | 219K | 0.006ms | 0.019ms | 1000 |
| Jotai | 172K | 0.006ms | 0.012ms | 1000 |
| Preact Signals | 129K | 0.008ms | 0.016ms | 1000 |
| Zen | 106K | 0.010ms | 0.028ms | 1000 |
| Zustand | 81K | 0.012ms | 0.021ms | 1000 |
| Redux Toolkit | 814 | 1.259ms | 3.175ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   318K ops/sec
🥈 Solid.js           ████████████████████████████████████████   318K ops/sec
🥉 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          3K ops/sec
 Jotai                                                         278 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zen | 64K | 0.016ms | 0.023ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.056ms | 1000 |
| Valtio | 5K | 0.207ms | 0.657ms | 1000 |
| MobX | 3K | 0.288ms | 0.310ms | 1000 |
| Jotai | 278 | 3.608ms | 4.141ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   44K ops/sec
🥈 Preact Signals     ████████                                   8K ops/sec
🥉 Zen                ███████                                    8K ops/sec
 Zustand            █                                          747 ops/sec
 MobX                                                          458 ops/sec
 Valtio                                                        426 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 44K | 0.029ms | 0.357ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.138ms | 1000 |
| Zen | 8K | 0.128ms | 0.145ms | 1000 |
| Zustand | 747 | 1.351ms | 1.891ms | 1000 |
| MobX | 458 | 2.194ms | 2.805ms | 1000 |
| Valtio | 426 | 2.362ms | 2.979ms | 1000 |
| Jotai | 33 | 29.956ms | 33.468ms | 1000 |
| Redux Toolkit | 14 | 70.012ms | 73.328ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.5M ops/sec
🥈 Zen                ███████████████████████████                14.0M ops/sec
🥉 Preact Signals     █████████                                  4.7M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          277K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 277K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Zen                ███████████████████████████                14.8M ops/sec
🥉 Preact Signals     █████████                                  4.8M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          314K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 314K | 0.004ms | 0.007ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Zen                ██████████████████████████                 14.5M ops/sec
🥉 Preact Signals     █████████████                              7.1M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               █                                          805K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 805K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.8M ops/sec
🥈 Preact Signals     ██████████████                             6.6M ops/sec
🥉 Zen                ███████████                                5.3M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         786K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 786K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           █████████████████                          422K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Zen                █                                          20K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 422K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.035ms | 0.043ms | 1000 |
| Zen | 20K | 0.049ms | 0.066ms | 1000 |
| Valtio | 8K | 0.122ms | 0.139ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.170ms | 0.204ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥈 Zen                ████████████████████████████               15.5M ops/sec
🥉 Preact Signals     █                                          755K ops/sec
 MobX                                                          120K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        71K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 755K | 0.001ms | 0.001ms | 1000 |
| MobX | 120K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 71K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        279K ops/sec
 Zen                ██                                         208K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          81K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 279K | 0.004ms | 0.004ms | 1000 |
| Zen | 208K | 0.005ms | 0.005ms | 1000 |
| Valtio | 92K | 0.011ms | 0.021ms | 1000 |
| MobX | 81K | 0.012ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   14.7M ops/sec
🥈 Zen                █████████████████████████████████████      13.5M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          113K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 14.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 113K | 0.009ms | 0.018ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.13.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
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

*Generated on 2025-11-15T22:06:01.918Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
