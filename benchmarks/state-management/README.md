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

- **⚡ Maximum Performance**: Preact Signals - Fastest overall with 79.2/100 score
- **⚖️ Best Balance**: Zen - Great performance (78.6/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Preact Signals** (Score: 79.2/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 78.6/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 67.8/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 29.1/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 17.0/100)
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
| 🥇 1 | **[Zen](https://github.com/SylphxAI/zen)** | 79.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 69.7/100 | 88% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 57.0/100 | 72% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 26.6/100 | 34% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 20.9/100 | 26% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.2/100 | 15% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.8/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Preact Signals](https://github.com/preactjs/signals)** | 79.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 78.6/100 | 99% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 67.8/100 | 86% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 29.1/100 | 37% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 17.0/100 | 21% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.5/100 | 17% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.1/100 | 6% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Preact Signals](https://github.com/preactjs/signals)** | **79.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **78.6** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **67.8** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **29.1** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **17.0** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.5** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **5.1** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   22.1M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.1M ops/sec
 Zen                ████████████████████████████████████████   22.0M ops/sec
 MobX               ███████████████████████████                15.2M ops/sec
 Valtio             ██████████████████████████                 14.6M ops/sec
 Jotai              ████                                       2.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 15.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.3M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   11.6M ops/sec
🥈 Zustand            ████████████████████████████████████████   11.6M ops/sec
🥉 Preact Signals     ███████████████████████████████            9.0M ops/sec
 Zen                ███████████████████████████████            9.0M ops/sec
 MobX               ███                                        856K ops/sec
 Valtio             ██                                         505K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 11.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 856K | 0.001ms | 0.001ms | 1000 |
| Valtio | 505K | 0.003ms | 0.004ms | 1000 |
| Jotai | 31K | 0.033ms | 0.055ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Zustand            ████████████████████████████████████████   1.5M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   1.5M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   1.5M ops/sec
 Zen                ████████████████████████████████████████   1.5M ops/sec
 MobX               ██                                         87K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 87K | 0.012ms | 0.019ms | 1000 |
| Valtio | 53K | 0.020ms | 0.031ms | 1000 |
| Jotai | 3K | 0.319ms | 0.741ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   20.0M ops/sec
🥈 Preact Signals     ███████████████████████                    11.6M ops/sec
🥉 Zustand            ██████████                                 5.0M ops/sec
 MobX               ███████                                    3.3M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          357K ops/sec
 Redux Toolkit                                                 162K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 357K | 0.003ms | 0.008ms | 1000 |
| Redux Toolkit | 162K | 0.006ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   14.6M ops/sec
🥈 Preact Signals     ██████████████████████████████████         12.4M ops/sec
🥉 Zustand            ██                                         703K ops/sec
 MobX               ██                                         553K ops/sec
 Valtio             █                                          401K ops/sec
 Jotai                                                         32K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 703K | 0.001ms | 0.002ms | 1000 |
| MobX | 553K | 0.002ms | 0.003ms | 1000 |
| Valtio | 401K | 0.003ms | 0.004ms | 1000 |
| Jotai | 32K | 0.032ms | 0.063ms | 1000 |
| Redux Toolkit | 16K | 0.066ms | 0.092ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.5M ops/sec
🥈 Preact Signals     ████████████████████████                   2.7M ops/sec
🥉 Zustand            █                                          75K ops/sec
 MobX               █                                          62K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 75K | 0.014ms | 0.023ms | 1000 |
| MobX | 62K | 0.016ms | 0.027ms | 1000 |
| Valtio | 41K | 0.024ms | 0.034ms | 1000 |
| Jotai | 3K | 0.297ms | 0.880ms | 1000 |
| Redux Toolkit | 2K | 0.642ms | 1.348ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   622K ops/sec
🥈 Preact Signals     ████████████████████                       318K ops/sec
🥉 Zustand                                                       8K ops/sec
 MobX                                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         343 ops/sec
 Redux Toolkit                                                 160 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 622K | 0.002ms | 0.002ms | 1000 |
| Preact Signals | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 8K | 0.135ms | 0.153ms | 1000 |
| MobX | 7K | 0.138ms | 0.163ms | 1000 |
| Valtio | 4K | 0.235ms | 0.261ms | 1000 |
| Jotai | 343 | 2.978ms | 5.146ms | 1000 |
| Redux Toolkit | 160 | 6.267ms | 7.071ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.7M ops/sec
🥈 Preact Signals     ██████████████████████████                 7.6M ops/sec
🥉 Zustand            ███████████                                3.1M ops/sec
 Valtio             █                                          424K ops/sec
 Jotai              █                                          323K ops/sec
 MobX               █                                          196K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 424K | 0.007ms | 0.005ms | 1000 |
| Jotai | 323K | 0.003ms | 0.006ms | 1000 |
| MobX | 196K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 59K | 0.018ms | 0.040ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.8M ops/sec
🥈 Preact Signals     ████████████████████████████████████       9.0M ops/sec
🥉 Zustand            ██████████████                             3.6M ops/sec
 Valtio             █████████                                  2.1M ops/sec
 MobX               ████                                       1.1M ops/sec
 Jotai              █                                          309K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 309K | 0.003ms | 0.008ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.032ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.4M ops/sec
🥈 Zen                ██████████████████████████████████████     21.4M ops/sec
🥉 Preact Signals     ██████████████████████████████████████     21.4M ops/sec
 Redux Toolkit      ███████████████████████████████            17.5M ops/sec
 Valtio             ████████████████████████                   13.6M ops/sec
 MobX               ██████████████                             7.7M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.7M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   8.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████        7.3M ops/sec
🥉 Zustand            █████████████████                          3.5M ops/sec
 Valtio             █████████████                              2.8M ops/sec
 MobX               ██████                                     1.3M ops/sec
 Jotai              ██                                         330K ops/sec
 Redux Toolkit                                                 80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 330K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 80K | 0.013ms | 0.026ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   111K ops/sec
🥈 Zen                ████████████████████████████████████████   110K ops/sec
🥉 Zustand            █████████████████████                      59K ops/sec
 Valtio             ███████████████                            41K ops/sec
 MobX               █████████████                              36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 111K | 0.010ms | 0.018ms | 1000 |
| Zen | 110K | 0.009ms | 0.013ms | 1000 |
| Zustand | 59K | 0.017ms | 0.026ms | 1000 |
| Valtio | 41K | 0.024ms | 0.035ms | 1000 |
| MobX | 36K | 0.029ms | 0.038ms | 1000 |
| Jotai | 6K | 0.182ms | 0.231ms | 1000 |
| Redux Toolkit | 3K | 0.359ms | 0.503ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   12.5M ops/sec
🥈 Preact Signals     ████████████████████████████████████       11.3M ops/sec
🥉 Zustand            ████████████████                           4.9M ops/sec
 MobX               ███████                                    2.3M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Jotai              █                                          188K ops/sec
 Redux Toolkit                                                 133K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 188K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 133K | 0.008ms | 0.018ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.7M ops/sec
🥈 Zen                ████████████████████████████████████████   19.6M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 MobX               █                                          452K ops/sec
 Valtio             █                                          284K ops/sec
 Jotai                                                         153K ops/sec
 Redux Toolkit                                                 70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 452K | 0.002ms | 0.003ms | 1000 |
| Valtio | 284K | 0.004ms | 0.006ms | 1000 |
| Jotai | 153K | 0.007ms | 0.014ms | 1000 |
| Redux Toolkit | 70K | 0.015ms | 0.028ms | 1000 |

#### Memory Management

```
🥇 Preact Signals     ████████████████████████████████████████   114K ops/sec
🥈 Zustand            █████████████████████████████████          93K ops/sec
🥉 Zen                ███████████████████████████████            89K ops/sec
 Valtio             ████████████████████                       58K ops/sec
 Redux Toolkit      ███████████████                            43K ops/sec
 MobX               ████                                       12K ops/sec
 Jotai              ███                                        8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 114K | 0.009ms | 0.019ms | 1000 |
| Zustand | 93K | 0.020ms | 0.030ms | 1000 |
| Zen | 89K | 0.013ms | 0.022ms | 1000 |
| Valtio | 58K | 0.051ms | 0.044ms | 1000 |
| Redux Toolkit | 43K | 0.053ms | 0.062ms | 1000 |
| MobX | 12K | 0.122ms | 1.147ms | 1000 |
| Jotai | 8K | 0.147ms | 0.763ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   14.2M ops/sec
🥈 Preact Signals     ████████████████████████████████           11.5M ops/sec
🥉 Zustand            █████████                                  3.3M ops/sec
 MobX               █████                                      1.8M ops/sec
 Valtio             ███                                        1.0M ops/sec
 Redux Toolkit                                                 118K ops/sec
 Jotai                                                         101K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.8M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 118K | 0.009ms | 0.013ms | 1000 |
| Jotai | 101K | 0.011ms | 0.019ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Valtio             ████████████████████████████████████████   831K ops/sec
🥈 MobX               ███████████                                234K ops/sec
🥉 Jotai              ████████                                   160K ops/sec
 Preact Signals     ██████                                     129K ops/sec
 Zen                █████                                      105K ops/sec
 Zustand            █████                                      96K ops/sec
 Redux Toolkit                                                 800 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 831K | 0.001ms | 0.006ms | 1000 |
| MobX | 234K | 0.005ms | 0.015ms | 1000 |
| Jotai | 160K | 0.008ms | 0.015ms | 1000 |
| Preact Signals | 129K | 0.008ms | 0.017ms | 1000 |
| Zen | 105K | 0.010ms | 0.015ms | 1000 |
| Zustand | 96K | 0.011ms | 0.020ms | 1000 |
| Redux Toolkit | 800 | 1.283ms | 3.170ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   160K ops/sec
🥈 Zustand            ████████████████████████████████████████   160K ops/sec
🥉 Zen                ████████████████                           64K ops/sec
 Preact Signals     █████                                      19K ops/sec
 MobX               ██                                         7K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         288 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 160K | 0.006ms | 0.006ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 64K | 0.016ms | 0.023ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.069ms | 1000 |
| MobX | 7K | 0.138ms | 0.153ms | 1000 |
| Valtio | 5K | 0.205ms | 0.640ms | 1000 |
| Jotai | 288 | 3.485ms | 4.087ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   10K ops/sec
🥈 Preact Signals     ███████████████████████████████████        8K ops/sec
🥉 Zustand            ███                                        755 ops/sec
 MobX               ██                                         524 ops/sec
 Valtio             ██                                         405 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10K | 0.114ms | 0.271ms | 1000 |
| Preact Signals | 8K | 0.122ms | 0.140ms | 1000 |
| Zustand | 755 | 1.335ms | 1.811ms | 1000 |
| MobX | 524 | 1.915ms | 2.414ms | 1000 |
| Valtio | 405 | 2.484ms | 3.125ms | 1000 |
| Jotai | 33 | 30.730ms | 34.343ms | 1000 |
| Redux Toolkit | 15 | 66.406ms | 71.155ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   5.1M ops/sec
🥈 Zen                █████████████████                          2.2M ops/sec
🥉 Valtio             ████████████████                           2.0M ops/sec
 Zustand            ████████                                   1.0M ops/sec
 MobX               ██                                         280K ops/sec
 Jotai              █                                          110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 280K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   4.9M ops/sec
🥈 Zen                ████████████████████████                   3.0M ops/sec
🥉 Zustand            ████████████████                           2.0M ops/sec
 Valtio             ███████████                                1.4M ops/sec
 MobX               ██                                         288K ops/sec
 Jotai              █                                          156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 288K | 0.004ms | 0.009ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   7.2M ops/sec
🥈 Zen                ████████████████████████████████████       6.6M ops/sec
🥉 Zustand            ██████████████████████████                 4.7M ops/sec
 Valtio             ██████████████                             2.5M ops/sec
 MobX               ████                                       806K ops/sec
 Jotai              ███                                        524K ops/sec
 Redux Toolkit      ██                                         293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 806K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Zen                ████████████████████████████████████████   7.8M ops/sec
🥈 Preact Signals     ████████████████████████████████           6.3M ops/sec
🥉 Zustand            ███████████████████████████                5.2M ops/sec
 Valtio             █████                                      1.0M ops/sec
 MobX               ████                                       754K ops/sec
 Jotai              ████                                       729K ops/sec
 Redux Toolkit      ██                                         344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 754K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Redux Toolkit      █████████                                  230K ops/sec
🥉 Zen                █                                          35K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 35K | 0.029ms | 0.037ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.052ms | 1000 |
| Valtio | 8K | 0.125ms | 0.154ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.171ms | 0.188ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   746K ops/sec
🥈 Zen                ████████████                               224K ops/sec
🥉 MobX               ██████                                     119K ops/sec
 Zustand            ██████                                     112K ops/sec
 Valtio             ████                                       74K ops/sec
 Jotai              █                                          14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 746K | 0.001ms | 0.001ms | 1000 |
| Zen | 224K | 0.005ms | 0.007ms | 1000 |
| MobX | 119K | 0.008ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 74K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Zustand            ████████████████████████████████████████   2.9M ops/sec
🥈 Zen                █████                                      358K ops/sec
🥉 Redux Toolkit      ████                                       290K ops/sec
 Preact Signals     ████                                       269K ops/sec
 Valtio             █                                          93K ops/sec
 MobX               █                                          78K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 358K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 269K | 0.004ms | 0.007ms | 1000 |
| Valtio | 93K | 0.011ms | 0.020ms | 1000 |
| MobX | 78K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.6M ops/sec
🥈 Preact Signals     ████████                                   2.9M ops/sec
🥉 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          115K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 115K | 0.010ms | 0.020ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.46.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-18T05:40:58.921Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
