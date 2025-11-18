<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2018,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-7-green?style=flat-square)](#-libraries-tested)
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

- **⚡ Maximum Performance**: Preact Signals - Fastest overall with 82.9/100 score
- **⚖️ Best Balance**: Zustand - Great performance (68.9/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Preact Signals** (Score: 82.9/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 68.9/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 63.7/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 29.3/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 17.2/100)
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
| 🥇 1 | **[Preact Signals](https://github.com/preactjs/signals)** | 71.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 65.0/100 | 91% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 53.0/100 | 74% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 27.1/100 | 38% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 20.2/100 | 28% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.1/100 | 14% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.0/100 | 6% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Preact Signals](https://github.com/preactjs/signals)** | 82.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥈 2 | **[Zustand](https://github.com/pmndrs/zustand)** | 68.9/100 | 83% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 63.7/100 | 77% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 29.3/100 | 35% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 17.2/100 | 21% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.3/100 | 15% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.3/100 | 6% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Preact Signals](https://github.com/preactjs/signals)** | **82.9** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **68.9** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **63.7** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **29.3** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **17.2** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.3** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **5.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   22.2M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
🥉 Redux Toolkit      ████████████████████████████████████████   22.1M ops/sec
 Zen                █████████████████████████████████          18.1M ops/sec
 MobX               ██████████████████████████████             16.6M ops/sec
 Valtio             ███████████████████████████                14.9M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   11.0M ops/sec
🥈 Preact Signals     █████████████████████████████████          9.0M ops/sec
🥉 Zustand            ███████████████████████████████            8.6M ops/sec
 Zen                █████████████████                          4.6M ops/sec
 MobX               ███                                        827K ops/sec
 Valtio             ██                                         525K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 11.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 827K | 0.001ms | 0.002ms | 1000 |
| Valtio | 525K | 0.002ms | 0.004ms | 1000 |
| Jotai | 31K | 0.033ms | 0.052ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Zustand            ████████████████████████████████████████   2.7M ops/sec
🥈 Redux Toolkit      ██████████████████████                     1.5M ops/sec
🥉 Preact Signals     █████████████                              896K ops/sec
 Zen                ███████████                                769K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.7M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 896K | 0.002ms | 0.023ms | 1000 |
| Zen | 769K | 0.001ms | 0.001ms | 1000 |
| MobX | 87K | 0.012ms | 0.018ms | 1000 |
| Valtio | 53K | 0.020ms | 0.028ms | 1000 |
| Jotai | 3K | 0.335ms | 0.736ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   19.9M ops/sec
🥈 Preact Signals     ███████████████████████████████            15.2M ops/sec
🥉 Zustand            █████████                                  4.6M ops/sec
 MobX               ███████                                    3.6M ops/sec
 Valtio             ██████                                     3.1M ops/sec
 Jotai              █                                          348K ops/sec
 Redux Toolkit                                                 163K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 348K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 163K | 0.006ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   11.7M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     11.1M ops/sec
🥉 Zustand            ██                                         667K ops/sec
 MobX               ██                                         571K ops/sec
 Valtio             █                                          353K ops/sec
 Jotai                                                         36K ops/sec
 Redux Toolkit                                                 15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 667K | 0.002ms | 0.002ms | 1000 |
| MobX | 571K | 0.002ms | 0.004ms | 1000 |
| Valtio | 353K | 0.003ms | 0.004ms | 1000 |
| Jotai | 36K | 0.029ms | 0.042ms | 1000 |
| Redux Toolkit | 15K | 0.068ms | 0.120ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   3.3M ops/sec
🥈 Preact Signals     █████████                                  725K ops/sec
🥉 Zustand            █                                          77K ops/sec
 MobX               █                                          71K ops/sec
 Valtio                                                        37K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 725K | 0.001ms | 0.002ms | 1000 |
| Zustand | 77K | 0.013ms | 0.031ms | 1000 |
| MobX | 71K | 0.014ms | 0.024ms | 1000 |
| Valtio | 37K | 0.027ms | 0.036ms | 1000 |
| Jotai | 3K | 0.305ms | 0.900ms | 1000 |
| Redux Toolkit | 2K | 0.642ms | 1.385ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   396K ops/sec
🥈 Preact Signals     ████████████████████████████████           318K ops/sec
🥉 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         340 ops/sec
 Redux Toolkit                                                 158 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 396K | 0.003ms | 0.003ms | 1000 |
| Preact Signals | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 8K | 0.131ms | 0.154ms | 1000 |
| MobX | 7K | 0.154ms | 0.180ms | 1000 |
| Valtio | 4K | 0.267ms | 0.321ms | 1000 |
| Jotai | 340 | 3.008ms | 5.401ms | 1000 |
| Redux Toolkit | 158 | 6.366ms | 8.724ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.4M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     10.7M ops/sec
🥉 Zustand            █████████████                              3.7M ops/sec
 Valtio             ██                                         460K ops/sec
 Jotai              █                                          335K ops/sec
 MobX               █                                          213K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 460K | 0.002ms | 0.004ms | 1000 |
| Jotai | 335K | 0.003ms | 0.005ms | 1000 |
| MobX | 213K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.032ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   9.2M ops/sec
🥈 Zen                ███████████████████████████████████████    8.9M ops/sec
🥉 Zustand            ███████████████                            3.4M ops/sec
 Valtio             ████████                                   1.9M ops/sec
 MobX               ████                                       936K ops/sec
 Jotai              █                                          318K ops/sec
 Redux Toolkit                                                 57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.002ms | 1000 |
| MobX | 936K | 0.001ms | 0.002ms | 1000 |
| Jotai | 318K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 57K | 0.018ms | 0.036ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    21.7M ops/sec
🥉 Zen                ████████████████████████████               15.6M ops/sec
 Redux Toolkit      ███████████████████████                    12.7M ops/sec
 Valtio             ██████████████████████                     12.4M ops/sec
 MobX               ██████████                                 5.4M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 12.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.4M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.6M ops/sec
🥈 Preact Signals     ████████████████████████████████           6.2M ops/sec
🥉 Zustand            █████████████████                          3.3M ops/sec
 Valtio             █████████████                              2.5M ops/sec
 MobX               ██████                                     1.2M ops/sec
 Jotai              ██                                         311K ops/sec
 Redux Toolkit                                                 81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 311K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 81K | 0.013ms | 0.024ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Zen                ████████████████████████████████████████   108K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   107K ops/sec
🥉 Zustand            ██████████████████████                     59K ops/sec
 Valtio             ████████████████                           44K ops/sec
 MobX               █████████████                              35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 108K | 0.009ms | 0.013ms | 1000 |
| Preact Signals | 107K | 0.010ms | 0.016ms | 1000 |
| Zustand | 59K | 0.017ms | 0.026ms | 1000 |
| Valtio | 44K | 0.023ms | 0.033ms | 1000 |
| MobX | 35K | 0.029ms | 0.039ms | 1000 |
| Jotai | 6K | 0.185ms | 0.371ms | 1000 |
| Redux Toolkit | 3K | 0.353ms | 0.441ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Preact Signals     ████████████████████████████████████████   11.0M ops/sec
🥈 Zen                ██████████████████████████████████         9.3M ops/sec
🥉 Zustand            █████████████████                          4.8M ops/sec
 MobX               ███████                                    2.0M ops/sec
 Valtio             ████                                       1.1M ops/sec
 Jotai              █                                          192K ops/sec
 Redux Toolkit      █                                          139K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 11.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 192K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 139K | 0.007ms | 0.019ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.7M ops/sec
🥈 Zen                █████████████████████████████████████      18.2M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 MobX               █                                          442K ops/sec
 Valtio             █                                          282K ops/sec
 Jotai                                                         154K ops/sec
 Redux Toolkit                                                 68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 442K | 0.002ms | 0.003ms | 1000 |
| Valtio | 282K | 0.004ms | 0.006ms | 1000 |
| Jotai | 154K | 0.007ms | 0.017ms | 1000 |
| Redux Toolkit | 68K | 0.016ms | 0.030ms | 1000 |

#### Memory Management

```
🥇 Preact Signals     ████████████████████████████████████████   131K ops/sec
🥈 Zustand            █████████████████████████████████          109K ops/sec
🥉 Zen                █████████████████████████████              96K ops/sec
 Valtio             ████████████████████                       67K ops/sec
 Redux Toolkit      ██████████████                             46K ops/sec
 MobX               ████                                       12K ops/sec
 Jotai              ██                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 131K | 0.009ms | 0.017ms | 1000 |
| Zustand | 109K | 0.014ms | 0.026ms | 1000 |
| Zen | 96K | 0.012ms | 0.020ms | 1000 |
| Valtio | 67K | 0.054ms | 0.053ms | 1000 |
| Redux Toolkit | 46K | 0.042ms | 0.055ms | 1000 |
| MobX | 12K | 0.121ms | 0.979ms | 1000 |
| Jotai | 7K | 0.154ms | 0.882ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.9M ops/sec
🥈 Zen                ██████████████████████████████████████     13.3M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 122K ops/sec
 Jotai                                                         110K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 122K | 0.008ms | 0.020ms | 1000 |
| Jotai | 110K | 0.009ms | 0.015ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Valtio             ████████████████████████████████████████   764K ops/sec
🥈 MobX               ██████████                                 197K ops/sec
🥉 Jotai              ███████                                    132K ops/sec
 Zen                ██████                                     109K ops/sec
 Preact Signals     █████                                      98K ops/sec
 Zustand            █████                                      90K ops/sec
 Redux Toolkit                                                 805 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 764K | 0.001ms | 0.006ms | 1000 |
| MobX | 197K | 0.006ms | 0.016ms | 1000 |
| Jotai | 132K | 0.009ms | 0.025ms | 1000 |
| Zen | 109K | 0.009ms | 0.019ms | 1000 |
| Preact Signals | 98K | 0.010ms | 0.020ms | 1000 |
| Zustand | 90K | 0.012ms | 0.018ms | 1000 |
| Redux Toolkit | 805 | 1.272ms | 3.016ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   292K ops/sec
🥈 Zustand            ██████████████████████                     160K ops/sec
🥉 Zen                ███████                                    53K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         288 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 292K | 0.004ms | 0.008ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 53K | 0.019ms | 0.026ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.066ms | 1000 |
| Valtio | 5K | 0.202ms | 0.612ms | 1000 |
| MobX | 4K | 0.285ms | 0.326ms | 1000 |
| Jotai | 288 | 3.484ms | 3.949ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   10K ops/sec
🥈 Preact Signals     █████████████████████████████████          8K ops/sec
🥉 Zustand            ███                                        751 ops/sec
 MobX               ██                                         448 ops/sec
 Valtio             ██                                         399 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10K | 0.101ms | 0.120ms | 1000 |
| Preact Signals | 8K | 0.122ms | 0.144ms | 1000 |
| Zustand | 751 | 1.343ms | 1.826ms | 1000 |
| MobX | 448 | 2.236ms | 2.746ms | 1000 |
| Valtio | 399 | 2.512ms | 3.031ms | 1000 |
| Jotai | 33 | 30.000ms | 35.836ms | 1000 |
| Redux Toolkit | 14 | 69.969ms | 73.957ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   5.5M ops/sec
🥈 Valtio             ██████████████                             2.0M ops/sec
🥉 Zen                ███████████                                1.6M ops/sec
 Zustand            ███████                                    1.0M ops/sec
 MobX               ██                                         277K ops/sec
 Jotai              █                                          110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.6M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 277K | 0.005ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   5.0M ops/sec
🥈 Zustand            ████████████████                           2.0M ops/sec
🥉 Zen                ███████████████                            1.9M ops/sec
 Valtio             ████████████                               1.5M ops/sec
 MobX               ███                                        334K ops/sec
 Jotai              █                                          156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.9M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 334K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   7.5M ops/sec
🥈 Zustand            █████████████████████████                  4.7M ops/sec
🥉 Zen                ████████████████████████                   4.4M ops/sec
 Valtio             ██████████████                             2.5M ops/sec
 MobX               ████                                       799K ops/sec
 Jotai              ███                                        524K ops/sec
 Redux Toolkit      ██                                         293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 799K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Preact Signals     ████████████████████████████████████████   6.2M ops/sec
🥈 Zen                ███████████████████████████████████████    6.0M ops/sec
🥉 Zustand            ██████████████████████████████████         5.2M ops/sec
 Valtio             ███████                                    1.0M ops/sec
 MobX               █████                                      781K ops/sec
 Jotai              █████                                      729K ops/sec
 Redux Toolkit      ██                                         344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 6.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 781K | 0.001ms | 0.003ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Redux Toolkit      █████████                                  230K ops/sec
🥉 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
 Zen                                                           5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.044ms | 1000 |
| Valtio | 8K | 0.128ms | 0.148ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.170ms | 0.210ms | 1000 |
| Zen | 5K | 0.215ms | 0.263ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   722K ops/sec
🥈 Zen                █████████                                  169K ops/sec
🥉 MobX               ███████                                    119K ops/sec
 Zustand            ██████                                     112K ops/sec
 Valtio             ████                                       73K ops/sec
 Jotai              █                                          14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 722K | 0.001ms | 0.001ms | 1000 |
| Zen | 169K | 0.007ms | 0.008ms | 1000 |
| MobX | 119K | 0.009ms | 0.012ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 73K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Zustand            ████████████████████████████████████████   2.9M ops/sec
🥈 Redux Toolkit      ████                                       290K ops/sec
🥉 Preact Signals     ████                                       275K ops/sec
 Zen                ██                                         138K ops/sec
 Valtio             █                                          93K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 275K | 0.004ms | 0.007ms | 1000 |
| Zen | 138K | 0.007ms | 0.009ms | 1000 |
| Valtio | 93K | 0.011ms | 0.019ms | 1000 |
| MobX | 80K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   14.0M ops/sec
🥈 Preact Signals     ████████                                   2.8M ops/sec
🥉 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          115K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 115K | 0.009ms | 0.019ms | 1000 |
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

**Total**: 27 tests × 7 libraries = 189 benchmark runs

---

## 🚀 Libraries Tested

- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.47.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-18T07:01:53.837Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
