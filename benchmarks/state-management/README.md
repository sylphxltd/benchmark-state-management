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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 82.3/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (67.3/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 82.3/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 67.3/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 61.8/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 28.4/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 23.1/100)
- Simple, scalable state management with transparent reactive programming
- **Best for**: Automatic tracking, slow creation, largest bundle
- [GitHub](https://github.com/mobxjs/mobx) • [npm](https://www.npmjs.com/package/mobx)


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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 87.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zustand](https://github.com/pmndrs/zustand)** | 45.2/100 | 52% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 44.2/100 | 50% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.7/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[Zen](https://github.com/SylphxAI/zen)** | 16.9/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 15.8/100 | 18% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.3/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 82.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 67.3/100 | 82% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 61.8/100 | 75% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 28.4/100 | 34% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 23.1/100 | 28% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Zen](https://github.com/SylphxAI/zen)** | 21.0/100 | 25% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 15.7/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.6/100 | 6% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **82.3** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **67.3** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **61.8** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **28.4** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **23.1** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Zen](https://github.com/SylphxAI/zen)** | **21.0** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **15.7** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.6** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.5M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.3M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.1M ops/sec
 Zen                ██████████████████████████████████████     21.3M ops/sec
 MobX               ███████████████████████████████            17.3M ops/sec
 Valtio             ███████████████████████████                15.1M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.1M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   13.3M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   13.2M ops/sec
🥉 Preact Signals     ████████████████████████████               9.2M ops/sec
 Solid.js           █████████████████████████                  8.3M ops/sec
 Zen                █████████████                              4.3M ops/sec
 MobX               ███                                        844K ops/sec
 Valtio             ██                                         502K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 13.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 8.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 844K | 0.001ms | 0.001ms | 1000 |
| Valtio | 502K | 0.002ms | 0.003ms | 1000 |
| Jotai | 31K | 0.034ms | 0.074ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ██████████████████████                     1.5M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Zen                ███████████                                779K ops/sec
 Preact Signals     ███████████                                777K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 779K | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 777K | 0.001ms | 0.001ms | 1000 |
| MobX | 87K | 0.012ms | 0.018ms | 1000 |
| Valtio | 51K | 0.021ms | 0.030ms | 1000 |
| Jotai | 3K | 0.329ms | 0.724ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   20.8M ops/sec
🥈 Zen                ██████████████████████████████████████     19.6M ops/sec
🥉 Preact Signals     ████████████                               6.3M ops/sec
 Zustand            ██████████                                 5.0M ops/sec
 MobX               ███████                                    3.4M ops/sec
 Valtio             ██████                                     2.9M ops/sec
 Jotai              █                                          351K ops/sec
 Redux Toolkit                                                 161K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 351K | 0.003ms | 0.010ms | 1000 |
| Redux Toolkit | 161K | 0.006ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   13.5M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     12.7M ops/sec
🥉 Solid.js           ███████████████████████████                9.0M ops/sec
 Zustand            ██                                         739K ops/sec
 MobX               ██                                         555K ops/sec
 Valtio             █                                          409K ops/sec
 Jotai                                                         34K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 739K | 0.001ms | 0.002ms | 1000 |
| MobX | 555K | 0.002ms | 0.003ms | 1000 |
| Valtio | 409K | 0.002ms | 0.003ms | 1000 |
| Jotai | 34K | 0.029ms | 0.041ms | 1000 |
| Redux Toolkit | 16K | 0.063ms | 0.110ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zen                █████████████████████████████████████      3.3M ops/sec
🥉 Preact Signals     ██████████████████████████████             2.7M ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          61K ops/sec
 Valtio                                                        42K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 76K | 0.014ms | 0.022ms | 1000 |
| MobX | 61K | 0.017ms | 0.028ms | 1000 |
| Valtio | 42K | 0.024ms | 0.034ms | 1000 |
| Jotai | 4K | 0.285ms | 0.873ms | 1000 |
| Redux Toolkit | 2K | 0.603ms | 1.249ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   417K ops/sec
🥈 Zen                ██████████████████████████████████████     395K ops/sec
🥉 Preact Signals     ██████████                                 104K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         354 ops/sec
 Redux Toolkit                                                 164 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 417K | 0.002ms | 0.004ms | 1000 |
| Zen | 395K | 0.003ms | 0.003ms | 1000 |
| Preact Signals | 104K | 0.010ms | 0.018ms | 1000 |
| Zustand | 8K | 0.130ms | 0.158ms | 1000 |
| MobX | 7K | 0.150ms | 0.178ms | 1000 |
| Valtio | 4K | 0.243ms | 0.276ms | 1000 |
| Jotai | 354 | 2.875ms | 4.935ms | 1000 |
| Redux Toolkit | 164 | 6.127ms | 7.065ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   10.1M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   10.0M ops/sec
🥉 Solid.js           ██████████████████                         4.5M ops/sec
 Zustand            ██████████████                             3.5M ops/sec
 Valtio             ██                                         451K ops/sec
 Jotai              █                                          332K ops/sec
 MobX               █                                          211K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 451K | 0.002ms | 0.003ms | 1000 |
| Jotai | 332K | 0.003ms | 0.005ms | 1000 |
| MobX | 211K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 59K | 0.019ms | 0.043ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.1M ops/sec
🥈 Preact Signals     █████████████████████████████████████      8.3M ops/sec
🥉 Zustand            ███████████████                            3.3M ops/sec
 Solid.js           █████████████                              2.9M ops/sec
 Valtio             █████████                                  2.2M ops/sec
 MobX               █████                                      1.1M ops/sec
 Jotai              █                                          312K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 312K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.032ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   20.9M ops/sec
🥈 Zen                ██████████████████████████████████████     19.6M ops/sec
🥉 Solid.js           █████████████████████████████████████      19.5M ops/sec
 Preact Signals     █████████████████████████████████          17.4M ops/sec
 Redux Toolkit      ███████████████████████████████            16.1M ops/sec
 Valtio             ████████████████████████                   12.3M ops/sec
 MobX               ██████████████                             7.3M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 20.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 19.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   7.5M ops/sec
🥈 Zen                ███████████████████████████████            5.8M ops/sec
🥉 Zustand            ██████████████████                         3.4M ops/sec
 Valtio             ███████████████                            2.8M ops/sec
 Solid.js           █████████████                              2.5M ops/sec
 MobX               ███████                                    1.4M ops/sec
 Jotai              ██                                         369K ops/sec
 Redux Toolkit                                                 84K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.4M | 0.001ms | 0.001ms | 1000 |
| Jotai | 369K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 84K | 0.012ms | 0.024ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   109K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   107K ops/sec
🥉 Zen                ██████████████████████████████████████     102K ops/sec
 Zustand            ██████████████████████                     59K ops/sec
 Valtio             ████████████████                           44K ops/sec
 MobX               █████████████                              36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 109K | 0.009ms | 0.014ms | 1000 |
| Preact Signals | 107K | 0.009ms | 0.012ms | 1000 |
| Zen | 102K | 0.011ms | 0.018ms | 1000 |
| Zustand | 59K | 0.017ms | 0.026ms | 1000 |
| Valtio | 44K | 0.023ms | 0.032ms | 1000 |
| MobX | 36K | 0.028ms | 0.041ms | 1000 |
| Jotai | 6K | 0.172ms | 0.239ms | 1000 |
| Redux Toolkit | 3K | 0.334ms | 0.945ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Preact Signals     ████████████████████████                   12.6M ops/sec
🥉 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.4M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         198K ops/sec
 Redux Toolkit                                                 140K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.003ms | 1000 |
| Jotai | 198K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 140K | 0.007ms | 0.015ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   18.6M ops/sec
🥈 Zen                ███████████████████████████████████████    18.1M ops/sec
🥉 Zustand            ███████                                    3.2M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          471K ops/sec
 Valtio             █                                          286K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.002ms | 1000 |
| MobX | 471K | 0.002ms | 0.003ms | 1000 |
| Valtio | 286K | 0.004ms | 0.005ms | 1000 |
| Jotai | 156K | 0.007ms | 0.010ms | 1000 |
| Redux Toolkit | 70K | 0.014ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.8M ops/sec
🥈 Preact Signals     █                                          130K ops/sec
🥉 Zustand            █                                          96K ops/sec
 Valtio             █                                          62K ops/sec
 Redux Toolkit                                                 44K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 130K | 0.009ms | 0.015ms | 1000 |
| Zustand | 96K | 0.024ms | 0.032ms | 1000 |
| Valtio | 62K | 0.044ms | 0.049ms | 1000 |
| Redux Toolkit | 44K | 0.042ms | 0.059ms | 1000 |
| MobX | 12K | 0.111ms | 0.951ms | 1000 |
| Jotai | 7K | 0.154ms | 0.927ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.7M ops/sec
🥈 Zen                █████████████████████████████████████      12.6M ops/sec
🥉 Zustand            ██████████                                 3.5M ops/sec
 Solid.js           ████████                                   2.7M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 125K ops/sec
 Jotai                                                         114K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 125K | 0.009ms | 0.019ms | 1000 |
| Jotai | 114K | 0.009ms | 0.013ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.5M ops/sec
🥈 Valtio             ██████████████                             847K ops/sec
🥉 MobX               ████                                       256K ops/sec
 Jotai              ███                                        197K ops/sec
 Zustand            ██                                         133K ops/sec
 Zen                ██                                         106K ops/sec
 Preact Signals     ██                                         105K ops/sec
 Redux Toolkit                                                 835 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 847K | 0.001ms | 0.007ms | 1000 |
| MobX | 256K | 0.005ms | 0.014ms | 1000 |
| Jotai | 197K | 0.005ms | 0.009ms | 1000 |
| Zustand | 133K | 0.008ms | 0.017ms | 1000 |
| Zen | 106K | 0.010ms | 0.014ms | 1000 |
| Preact Signals | 105K | 0.010ms | 0.020ms | 1000 |
| Redux Toolkit | 835 | 1.229ms | 2.888ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   317K ops/sec
🥉 Zustand            ████████████████████                       160K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ███                                        20K ops/sec
 MobX               █                                          8K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         288 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 317K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 64K | 0.016ms | 0.026ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.057ms | 1000 |
| MobX | 8K | 0.128ms | 0.136ms | 1000 |
| Valtio | 5K | 0.201ms | 0.634ms | 1000 |
| Jotai | 288 | 3.487ms | 3.950ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   45K ops/sec
🥈 Zen                ████████                                   9K ops/sec
🥉 Preact Signals     ████████                                   9K ops/sec
 Zustand            █                                          749 ops/sec
 MobX                                                          510 ops/sec
 Valtio                                                        412 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 16 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 45K | 0.027ms | 0.393ms | 1000 |
| Zen | 9K | 0.106ms | 0.115ms | 1000 |
| Preact Signals | 9K | 0.115ms | 0.127ms | 1000 |
| Zustand | 749 | 1.346ms | 1.858ms | 1000 |
| MobX | 510 | 1.967ms | 2.516ms | 1000 |
| Valtio | 412 | 2.439ms | 3.000ms | 1000 |
| Jotai | 34 | 29.621ms | 33.294ms | 1000 |
| Redux Toolkit | 16 | 64.462ms | 71.408ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.7M ops/sec
🥈 Preact Signals     ██████████                                 5.3M ops/sec
🥉 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          287K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 287K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.7M ops/sec
🥈 Preact Signals     █████████                                  5.0M ops/sec
🥉 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          336K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 336K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.6M ops/sec
🥈 Preact Signals     █████████████                              7.1M ops/sec
🥉 Zustand            █████████                                  4.7M ops/sec
 Valtio             █████                                      2.5M ops/sec
 MobX               ██                                         818K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 818K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.6M ops/sec
🥈 Preact Signals     ███████████████                            6.8M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         797K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| MobX | 797K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         429K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 429K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.051ms | 1000 |
| Valtio | 8K | 0.123ms | 0.138ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.176ms | 0.208ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Preact Signals     ██                                         833K ops/sec
🥉 MobX                                                          119K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        72K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 833K | 0.001ms | 0.001ms | 1000 |
| MobX | 119K | 0.008ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 72K | 0.015ms | 0.026ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.4M ops/sec
🥈 Zustand            ██████████████████████████████████         2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        277K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          77K ops/sec
 Jotai              █                                          58K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 277K | 0.004ms | 0.004ms | 1000 |
| Valtio | 92K | 0.011ms | 0.015ms | 1000 |
| MobX | 77K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   14.2M ops/sec
🥈 Solid.js           ████████████████████████████████████       12.7M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          117K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 117K | 0.009ms | 0.014ms | 1000 |
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
- **[Valtio](https://github.com/pmndrs/valtio)** (`2.2.0`)  • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`6.15.0`)  • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.27.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T21:29:41.908Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
