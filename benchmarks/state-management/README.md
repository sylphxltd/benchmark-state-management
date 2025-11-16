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
- **⚖️ Best Balance**: Zen - Great performance (67.1/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 82.3/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 67.1/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 64.7/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 61.2/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 25.8/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 85.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 57.6/100 | 67% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 49.0/100 | 57% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 46.3/100 | 54% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 18.4/100 | 22% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.8/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.0/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.8/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 82.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 67.1/100 | 81% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 64.7/100 | 79% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 61.2/100 | 74% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.8/100 | 31% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 18.9/100 | 23% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 14.0/100 | 17% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.5/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **82.3** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **67.1** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **64.7** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **61.2** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.8** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.9** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **14.0** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.5** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.3M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.3M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.1M ops/sec
 Zen                ██████████████████████████████████████     21.5M ops/sec
 MobX               █████████████████████████████              16.5M ops/sec
 Valtio             ██████████████████████████                 14.6M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.9M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   11.7M ops/sec
🥉 Zustand            ████████████████████████████████           9.5M ops/sec
 Zen                █████████████████████████████              8.6M ops/sec
 Preact Signals     ██████████████                             4.2M ops/sec
 MobX               ███                                        836K ops/sec
 Valtio             ██                                         509K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 836K | 0.001ms | 0.001ms | 1000 |
| Valtio | 509K | 0.002ms | 0.003ms | 1000 |
| Jotai | 32K | 0.033ms | 0.047ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.7M ops/sec
🥈 Zustand            ██████████████████████                     1.5M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 Zen                ██████████████████████                     1.5M ops/sec
 MobX               █                                          84K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 84K | 0.012ms | 0.019ms | 1000 |
| Valtio | 51K | 0.021ms | 0.032ms | 1000 |
| Jotai | 3K | 0.328ms | 0.730ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   20.2M ops/sec
🥈 Preact Signals     ████████████████████████████████           16.4M ops/sec
🥉 Solid.js           ████████████████████████████               14.1M ops/sec
 Zustand            ██████████                                 5.2M ops/sec
 MobX               ███████                                    3.4M ops/sec
 Valtio             ███████                                    3.3M ops/sec
 Jotai              █                                          340K ops/sec
 Redux Toolkit                                                 149K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 14.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 340K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 149K | 0.008ms | 0.016ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   15.2M ops/sec
🥈 Preact Signals     ██████████████████████████████             11.4M ops/sec
🥉 Solid.js           ██████████████████                         7.0M ops/sec
 Zustand            ██                                         711K ops/sec
 MobX               █                                          533K ops/sec
 Valtio             █                                          411K ops/sec
 Jotai                                                         34K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 15.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 7.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 711K | 0.002ms | 0.009ms | 1000 |
| MobX | 533K | 0.002ms | 0.003ms | 1000 |
| Valtio | 411K | 0.002ms | 0.005ms | 1000 |
| Jotai | 34K | 0.030ms | 0.046ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.091ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.0M ops/sec
🥈 Solid.js           ███████████████████████████████████        3.5M ops/sec
🥉 Preact Signals     ███████████████████████████                2.7M ops/sec
 Zustand            █                                          73K ops/sec
 MobX               █                                          66K ops/sec
 Valtio                                                        42K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 73K | 0.014ms | 0.023ms | 1000 |
| MobX | 66K | 0.015ms | 0.025ms | 1000 |
| Valtio | 42K | 0.024ms | 0.034ms | 1000 |
| Jotai | 4K | 0.290ms | 0.537ms | 1000 |
| Redux Toolkit | 2K | 0.645ms | 1.304ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   623K ops/sec
🥈 Solid.js           ██████████████████████████                 403K ops/sec
🥉 Preact Signals     ███████                                    103K ops/sec
 Zustand                                                       8K ops/sec
 MobX                                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         357 ops/sec
 Redux Toolkit                                                 157 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 623K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 403K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 103K | 0.010ms | 0.017ms | 1000 |
| Zustand | 8K | 0.132ms | 0.155ms | 1000 |
| MobX | 7K | 0.155ms | 0.181ms | 1000 |
| Valtio | 4K | 0.241ms | 0.275ms | 1000 |
| Jotai | 357 | 2.846ms | 5.280ms | 1000 |
| Redux Toolkit | 157 | 6.395ms | 7.394ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   9.9M ops/sec
🥈 Preact Signals     █████████████████████████████████████      9.1M ops/sec
🥉 Solid.js           ██████████████████                         4.4M ops/sec
 Zustand            █████████████                              3.2M ops/sec
 Valtio             ██                                         426K ops/sec
 Jotai              █                                          313K ops/sec
 MobX               █                                          206K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 426K | 0.002ms | 0.004ms | 1000 |
| Jotai | 313K | 0.003ms | 0.006ms | 1000 |
| MobX | 206K | 0.005ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.034ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   8.7M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     8.3M ops/sec
🥉 Zustand            ███████████████                            3.4M ops/sec
 Solid.js           █████████████                              2.8M ops/sec
 Valtio             ██████████                                 2.1M ops/sec
 MobX               █████                                      986K ops/sec
 Jotai              █                                          298K ops/sec
 Redux Toolkit                                                 57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 8.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 986K | 0.001ms | 0.002ms | 1000 |
| Jotai | 298K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 57K | 0.018ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   19.1M ops/sec
🥈 Solid.js           █████████████████████████████████████      17.6M ops/sec
🥉 Preact Signals     ████████████████████████████████████       17.3M ops/sec
 Zen                ████████████████████████████████████       17.2M ops/sec
 Redux Toolkit      ██████████████████████████████             14.5M ops/sec
 Valtio             █████████████████████████                  11.9M ops/sec
 MobX               ███████████                                5.3M ops/sec
 Jotai              ███                                        1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 19.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 17.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 14.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 11.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   6.1M ops/sec
🥈 Zen                ████████████████████████████████████       5.4M ops/sec
🥉 Zustand            █████████████████████                      3.2M ops/sec
 Valtio             ██████████████████                         2.7M ops/sec
 Solid.js           ███████████████                            2.3M ops/sec
 MobX               ████████                                   1.2M ops/sec
 Jotai              ██                                         329K ops/sec
 Redux Toolkit      █                                          77K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 6.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 329K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 77K | 0.014ms | 0.025ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   106K ops/sec
🥈 Zen                ████████████████████████████████████████   105K ops/sec
🥉 Solid.js           ████████████████████████████████████████   104K ops/sec
 Zustand            ███████████████████████                    60K ops/sec
 Valtio             ████████████████                           43K ops/sec
 MobX               █████████████                              34K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 106K | 0.010ms | 0.018ms | 1000 |
| Zen | 105K | 0.010ms | 0.012ms | 1000 |
| Solid.js | 104K | 0.010ms | 0.018ms | 1000 |
| Zustand | 60K | 0.017ms | 0.027ms | 1000 |
| Valtio | 43K | 0.024ms | 0.033ms | 1000 |
| MobX | 34K | 0.030ms | 0.041ms | 1000 |
| Jotai | 6K | 0.171ms | 0.219ms | 1000 |
| Redux Toolkit | 3K | 0.363ms | 0.479ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   19.0M ops/sec
🥈 Zen                ██████████████████████                     10.6M ops/sec
🥉 Preact Signals     █████████████████████                      9.9M ops/sec
 Zustand            ██████████                                 4.8M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.0M ops/sec
 Jotai                                                         188K ops/sec
 Redux Toolkit                                                 138K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 188K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 138K | 0.007ms | 0.018ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   17.2M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   17.0M ops/sec
🥉 Zustand            ███████                                    3.2M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          455K ops/sec
 Valtio             █                                          273K ops/sec
 Jotai                                                         154K ops/sec
 Redux Toolkit                                                 68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 17.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 455K | 0.002ms | 0.003ms | 1000 |
| Valtio | 273K | 0.004ms | 0.006ms | 1000 |
| Jotai | 154K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 68K | 0.016ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.6M ops/sec
🥈 Preact Signals     █                                          109K ops/sec
🥉 Zustand            █                                          104K ops/sec
 Zen                █                                          94K ops/sec
 Valtio             █                                          64K ops/sec
 Redux Toolkit                                                 23K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 109K | 0.010ms | 0.020ms | 1000 |
| Zustand | 104K | 0.012ms | 0.020ms | 1000 |
| Zen | 94K | 0.012ms | 0.020ms | 1000 |
| Valtio | 64K | 0.021ms | 0.038ms | 1000 |
| Redux Toolkit | 23K | 0.052ms | 0.091ms | 1000 |
| MobX | 11K | 0.119ms | 0.739ms | 1000 |
| Jotai | 7K | 0.159ms | 0.601ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   12.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    12.0M ops/sec
🥉 Zustand            ███████████                                3.5M ops/sec
 Solid.js           ████████                                   2.6M ops/sec
 MobX               ██████                                     1.9M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 117K ops/sec
 Jotai                                                         111K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.9M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 117K | 0.009ms | 0.020ms | 1000 |
| Jotai | 111K | 0.009ms | 0.019ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.2M ops/sec
🥈 Valtio             ██████████████                             774K ops/sec
🥉 MobX               ████                                       238K ops/sec
 Jotai              ███                                        171K ops/sec
 Zustand            ██                                         130K ops/sec
 Preact Signals     ██                                         101K ops/sec
 Zen                ██                                         98K ops/sec
 Redux Toolkit                                                 839 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.2M | 0.001ms | 0.001ms | 1000 |
| Valtio | 774K | 0.001ms | 0.004ms | 1000 |
| MobX | 238K | 0.005ms | 0.019ms | 1000 |
| Jotai | 171K | 0.007ms | 0.009ms | 1000 |
| Zustand | 130K | 0.008ms | 0.013ms | 1000 |
| Preact Signals | 101K | 0.011ms | 0.019ms | 1000 |
| Zen | 98K | 0.010ms | 0.019ms | 1000 |
| Redux Toolkit | 839 | 1.203ms | 1.432ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   317K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   317K ops/sec
🥉 Zustand            ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         277 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 317K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 317K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 80K | 0.012ms | 0.019ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.058ms | 1000 |
| Valtio | 5K | 0.202ms | 0.642ms | 1000 |
| MobX | 4K | 0.263ms | 0.280ms | 1000 |
| Jotai | 277 | 3.614ms | 4.198ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   40K ops/sec
🥈 Zen                ███████████                                11K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          757 ops/sec
 MobX                                                          477 ops/sec
 Valtio                                                        374 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 40K | 0.029ms | 0.050ms | 1000 |
| Zen | 11K | 0.094ms | 0.103ms | 1000 |
| Preact Signals | 8K | 0.118ms | 0.127ms | 1000 |
| Zustand | 757 | 1.329ms | 1.853ms | 1000 |
| MobX | 477 | 2.100ms | 2.674ms | 1000 |
| Valtio | 374 | 2.679ms | 3.255ms | 1000 |
| Jotai | 34 | 29.281ms | 32.743ms | 1000 |
| Redux Toolkit | 15 | 65.966ms | 68.883ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   17.4M ops/sec
🥈 Preact Signals     ██████████                                 4.4M ops/sec
🥉 Zen                █████                                      2.1M ops/sec
 Valtio             ████                                       1.9M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          276K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 17.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 276K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.4M ops/sec
🥈 Preact Signals     █████████                                  4.7M ops/sec
🥉 Zen                █████                                      2.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.6M ops/sec
 MobX               █                                          306K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.001ms | 1000 |
| MobX | 306K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.2M ops/sec
🥈 Preact Signals     ██████████████                             7.7M ops/sec
🥉 Zen                ████████████                               6.3M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               █                                          781K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.003ms | 0.001ms | 1000 |
| MobX | 781K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   16.6M ops/sec
🥈 Zen                ██████████████████                         7.4M ops/sec
🥉 Preact Signals     ███████████████                            6.3M ops/sec
 Zustand            █████████████                              5.2M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         730K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 16.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 730K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           █████████████████                          426K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          35K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 426K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 35K | 0.029ms | 0.044ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.053ms | 1000 |
| Valtio | 8K | 0.126ms | 0.157ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.172ms | 0.210ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   18.1M ops/sec
🥈 Preact Signals     ██                                         837K ops/sec
🥉 Zen                █                                          244K ops/sec
 MobX                                                          117K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        64K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 837K | 0.001ms | 0.001ms | 1000 |
| Zen | 244K | 0.004ms | 0.008ms | 1000 |
| MobX | 117K | 0.009ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 64K | 0.017ms | 0.033ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Zustand            █████████████████████████████████          2.9M ops/sec
🥉 Zen                ████                                       340K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        269K ops/sec
 Valtio             █                                          91K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 340K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 269K | 0.004ms | 0.006ms | 1000 |
| Valtio | 91K | 0.011ms | 0.019ms | 1000 |
| MobX | 80K | 0.013ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   12.2M ops/sec
🥈 Solid.js           █████████████████████████████████████      11.4M ops/sec
🥉 Preact Signals     ████████                                   2.5M ops/sec
 Zustand            ███████                                    2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          116K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 11.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 116K | 0.009ms | 0.013ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.38.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
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

*Generated on 2025-11-16T23:36:05.923Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
