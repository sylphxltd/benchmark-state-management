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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 83.3/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (68.8/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 83.3/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 68.8/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 61.5/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 28.3/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 21.3/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 87.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 49.0/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 47.1/100 | 54% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.9/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[Zen](https://github.com/SylphxAI/zen)** | 15.9/100 | 18% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.1/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.7/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 83.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 68.8/100 | 83% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 61.5/100 | 74% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 28.3/100 | 34% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 21.3/100 | 26% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Zen](https://github.com/SylphxAI/zen)** | 19.9/100 | 24% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 15.2/100 | 18% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.5/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **83.3** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **68.8** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **61.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **28.3** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **21.3** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Zen](https://github.com/SylphxAI/zen)** | **19.9** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **15.2** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.5** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.2M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ████████████████████████████████████████   22.2M ops/sec
 Zen                ███████████████████████████████████        19.3M ops/sec
 MobX               ███████████████████████████████            17.4M ops/sec
 Valtio             ███████████████████████████                14.8M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.8M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   12.5M ops/sec
🥈 Redux Toolkit      ██████████████████████████████             9.5M ops/sec
🥉 Preact Signals     ████████████████████████████               8.8M ops/sec
 Zustand            █████████████████████████                  7.7M ops/sec
 Zen                ███████████████████                        5.8M ops/sec
 MobX               ███                                        821K ops/sec
 Valtio             ██                                         498K ops/sec
 Jotai                                                         30K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 7.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 821K | 0.001ms | 0.001ms | 1000 |
| Valtio | 498K | 0.002ms | 0.003ms | 1000 |
| Jotai | 30K | 0.034ms | 0.051ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   2.8M ops/sec
🥉 Zustand            █████████████████████                      1.5M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                █████████                                  602K ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          52K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.002ms | 1000 |
| Zen | 602K | 0.002ms | 0.004ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 52K | 0.021ms | 0.029ms | 1000 |
| Jotai | 3K | 0.342ms | 0.850ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Preact Signals     █████████████████████████████████████      19.6M ops/sec
🥉 Zen                █████████████████████████████              15.7M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ███████                                    3.5M ops/sec
 Valtio             ██████                                     3.3M ops/sec
 Jotai              █                                          357K ops/sec
 Redux Toolkit                                                 160K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 357K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   12.7M ops/sec
🥈 Zen                ████████████████████████████████████       11.5M ops/sec
🥉 Solid.js           ███████████████████████                    7.4M ops/sec
 Zustand            ██                                         726K ops/sec
 MobX               ██                                         552K ops/sec
 Valtio             █                                          389K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 7.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 726K | 0.001ms | 0.002ms | 1000 |
| MobX | 552K | 0.002ms | 0.003ms | 1000 |
| Valtio | 389K | 0.003ms | 0.004ms | 1000 |
| Jotai | 35K | 0.030ms | 0.043ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.088ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.3M ops/sec
🥈 Preact Signals     █████████████████████████████████          2.7M ops/sec
🥉 Zen                ███████████████████████████████            2.5M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          67K ops/sec
 Valtio                                                        39K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 77K | 0.013ms | 0.022ms | 1000 |
| MobX | 67K | 0.015ms | 0.025ms | 1000 |
| Valtio | 39K | 0.026ms | 0.035ms | 1000 |
| Jotai | 4K | 0.295ms | 0.944ms | 1000 |
| Redux Toolkit | 2K | 0.644ms | 1.395ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   388K ops/sec
🥈 Zen                ██████████████████████████████             288K ops/sec
🥉 Preact Signals     ███████████                                109K ops/sec
 Zustand            █                                          7K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         341 ops/sec
 Redux Toolkit                                                 154 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 388K | 0.003ms | 0.005ms | 1000 |
| Zen | 288K | 0.004ms | 0.004ms | 1000 |
| Preact Signals | 109K | 0.009ms | 0.017ms | 1000 |
| Zustand | 7K | 0.135ms | 0.159ms | 1000 |
| MobX | 6K | 0.160ms | 0.198ms | 1000 |
| Valtio | 4K | 0.258ms | 0.361ms | 1000 |
| Jotai | 341 | 2.988ms | 5.297ms | 1000 |
| Redux Toolkit | 154 | 6.535ms | 7.686ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   9.8M ops/sec
🥈 Zen                ██████████████████████████████████████     9.2M ops/sec
🥉 Solid.js           █████████████████                          4.3M ops/sec
 Zustand            ███████████████                            3.7M ops/sec
 Valtio             ██                                         419K ops/sec
 Jotai              █                                          314K ops/sec
 MobX               █                                          236K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 4.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 419K | 0.002ms | 0.004ms | 1000 |
| Jotai | 314K | 0.003ms | 0.007ms | 1000 |
| MobX | 236K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.036ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.7M ops/sec
🥈 Zen                █████████████████████████████████████      8.1M ops/sec
🥉 Zustand            ███████████████                            3.3M ops/sec
 Solid.js           ██████████████                             3.0M ops/sec
 Valtio             ██████████                                 2.2M ops/sec
 MobX               █████                                      1.0M ops/sec
 Jotai              █                                          289K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 289K | 0.004ms | 0.008ms | 1000 |
| Redux Toolkit | 58K | 0.019ms | 0.034ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Zustand            ████████████████████████████████████████   21.8M ops/sec
🥉 Zen                ██████████████████████████████████████     21.1M ops/sec
 Preact Signals     ████████████████████████████████           17.8M ops/sec
 Redux Toolkit      █████████████████████████████              16.2M ops/sec
 Valtio             ████████████████████████                   13.3M ops/sec
 MobX               ██████████                                 5.6M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   5.9M ops/sec
🥈 Zen                ███████████████████████████████████        5.2M ops/sec
🥉 Zustand            ████████████████████                       2.9M ops/sec
 Valtio             █████████████████                          2.5M ops/sec
 Solid.js           ███████████████                            2.2M ops/sec
 MobX               ████████                                   1.2M ops/sec
 Jotai              ██                                         298K ops/sec
 Redux Toolkit      █                                          78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.9M | 0.000ms | 0.001ms | 1000 |
| Zen | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 298K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 78K | 0.013ms | 0.026ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   111K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   111K ops/sec
🥉 Zen                ██████████████████████████████████████     105K ops/sec
 Zustand            ██████████████████████                     61K ops/sec
 Valtio             ████████████████                           43K ops/sec
 MobX               █████████████                              36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 111K | 0.010ms | 0.015ms | 1000 |
| Preact Signals | 111K | 0.010ms | 0.014ms | 1000 |
| Zen | 105K | 0.010ms | 0.016ms | 1000 |
| Zustand | 61K | 0.017ms | 0.026ms | 1000 |
| Valtio | 43K | 0.024ms | 0.033ms | 1000 |
| MobX | 36K | 0.030ms | 0.041ms | 1000 |
| Jotai | 6K | 0.181ms | 0.241ms | 1000 |
| Redux Toolkit | 3K | 0.362ms | 1.103ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.6M ops/sec
🥈 Preact Signals     ███████████████████████                    12.7M ops/sec
🥉 Zustand            █████████                                  5.0M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         163K ops/sec
 Redux Toolkit                                                 139K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 163K | 0.007ms | 0.013ms | 1000 |
| Redux Toolkit | 139K | 0.007ms | 0.017ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   18.8M ops/sec
🥈 Zen                ███████████████████████████████            14.4M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          469K ops/sec
 Valtio             █                                          271K ops/sec
 Jotai                                                         162K ops/sec
 Redux Toolkit                                                 70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 469K | 0.002ms | 0.003ms | 1000 |
| Valtio | 271K | 0.005ms | 0.007ms | 1000 |
| Jotai | 162K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 70K | 0.014ms | 0.028ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.8M ops/sec
🥈 Preact Signals     █                                          123K ops/sec
🥉 Zustand            █                                          95K ops/sec
 Valtio             █                                          63K ops/sec
 Redux Toolkit                                                 43K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 123K | 0.009ms | 0.017ms | 1000 |
| Zustand | 95K | 0.021ms | 0.032ms | 1000 |
| Valtio | 63K | 0.047ms | 0.054ms | 1000 |
| Redux Toolkit | 43K | 0.051ms | 0.065ms | 1000 |
| MobX | 12K | 0.118ms | 1.017ms | 1000 |
| Jotai | 7K | 0.150ms | 0.887ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.4M ops/sec
🥈 Zen                ██████████████████████████████████         11.5M ops/sec
🥉 Zustand            ███████████                                3.5M ops/sec
 Solid.js           ███████                                    2.3M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 122K ops/sec
 Jotai                                                         106K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 122K | 0.008ms | 0.012ms | 1000 |
| Jotai | 106K | 0.010ms | 0.016ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.2M ops/sec
🥈 Valtio             ██████████████                             783K ops/sec
🥉 MobX               ███                                        184K ops/sec
 Jotai              ███                                        151K ops/sec
 Zustand            ██                                         133K ops/sec
 Zen                ██                                         103K ops/sec
 Preact Signals     ██                                         103K ops/sec
 Redux Toolkit                                                 801 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.2M | 0.000ms | 0.002ms | 1000 |
| Valtio | 783K | 0.002ms | 0.009ms | 1000 |
| MobX | 184K | 0.007ms | 0.023ms | 1000 |
| Jotai | 151K | 0.007ms | 0.016ms | 1000 |
| Zustand | 133K | 0.008ms | 0.011ms | 1000 |
| Zen | 103K | 0.011ms | 0.014ms | 1000 |
| Preact Signals | 103K | 0.010ms | 0.019ms | 1000 |
| Redux Toolkit | 801 | 1.285ms | 2.955ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████████████████████████   318K ops/sec
🥉 Solid.js           ████████████████████████████████████████   314K ops/sec
 Zen                ███████                                    53K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         280 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 314K | 0.003ms | 0.008ms | 1000 |
| Zen | 53K | 0.019ms | 0.026ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.058ms | 1000 |
| Valtio | 5K | 0.209ms | 0.695ms | 1000 |
| MobX | 4K | 0.279ms | 0.337ms | 1000 |
| Jotai | 280 | 3.591ms | 4.173ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   36K ops/sec
🥈 Preact Signals     ██████████                                 9K ops/sec
🥉 Zen                ███████                                    6K ops/sec
 Zustand            █                                          718 ops/sec
 MobX               █                                          469 ops/sec
 Valtio                                                        399 ops/sec
 Jotai                                                         32 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 36K | 0.034ms | 0.437ms | 1000 |
| Preact Signals | 9K | 0.115ms | 0.125ms | 1000 |
| Zen | 6K | 0.160ms | 0.204ms | 1000 |
| Zustand | 718 | 1.406ms | 1.981ms | 1000 |
| MobX | 469 | 2.139ms | 2.737ms | 1000 |
| Valtio | 399 | 2.518ms | 3.145ms | 1000 |
| Jotai | 32 | 30.854ms | 35.381ms | 1000 |
| Redux Toolkit | 14 | 70.622ms | 74.158ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Preact Signals     ██████████                                 5.4M ops/sec
🥉 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          289K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 289K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     █████████                                  5.1M ops/sec
🥉 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          328K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 328K | 0.004ms | 0.008ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     █████████████                              7.4M ops/sec
🥉 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.5M ops/sec
 MobX               █                                          794K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 794K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.5M ops/sec
🥈 Preact Signals     ██████████████                             6.9M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         749K ops/sec
 Jotai              █                                          729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 749K | 0.001ms | 0.003ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         436K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 436K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.045ms | 1000 |
| Valtio | 8K | 0.123ms | 0.142ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.169ms | 0.212ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.6M ops/sec
🥈 Preact Signals     █                                          743K ops/sec
🥉 MobX                                                          121K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        86K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 743K | 0.001ms | 0.001ms | 1000 |
| MobX | 121K | 0.008ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 86K | 0.012ms | 0.021ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        282K ops/sec
 Valtio             █                                          107K ops/sec
 MobX               █                                          79K ops/sec
 Jotai              █                                          58K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 282K | 0.004ms | 0.004ms | 1000 |
| Valtio | 107K | 0.010ms | 0.019ms | 1000 |
| MobX | 79K | 0.013ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   12.9M ops/sec
🥈 Zen                ██████████████████████████████████████     12.3M ops/sec
🥉 Preact Signals     █████████                                  2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 Jotai                                                         107K ops/sec
 MobX                                                          107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 12.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| MobX | 107K | 0.011ms | 0.027ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.24.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T09:20:52.857Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
