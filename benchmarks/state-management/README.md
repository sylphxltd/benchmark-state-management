<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2018,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 84.3/100 score
- **⚖️ Best Balance**: Zen - Great performance (66.8/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 84.3/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 66.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 64.2/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 60.1/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 25.6/100)
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
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 56.4/100 | 63% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 50.1/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 47.4/100 | 53% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.8/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.0/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.0/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 84.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 66.8/100 | 79% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 64.2/100 | 76% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 60.1/100 | 71% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.6/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 17.9/100 | 21% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 14.0/100 | 17% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.4/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **84.3** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **66.8** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **64.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **60.1** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.6** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **17.9** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **14.0** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.4** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.3M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 Zen                █████████████████████████████████████      21.0M ops/sec
 Valtio             ███████████████████████████                15.1M ops/sec
 MobX               █████████████████████                      11.6M ops/sec
 Jotai              ████                                       2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 11.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   13.2M ops/sec
🥈 Zustand            ███████████████████████████████            10.3M ops/sec
🥉 Preact Signals     ████████████████████████████               9.2M ops/sec
 Solid.js           ████████████████████████████               9.2M ops/sec
 Zen                ███████████████████                        6.3M ops/sec
 MobX               ███                                        843K ops/sec
 Valtio             ██                                         500K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 13.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 10.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 843K | 0.001ms | 0.001ms | 1000 |
| Valtio | 500K | 0.002ms | 0.003ms | 1000 |
| Jotai | 31K | 0.034ms | 0.077ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Zustand            ████████████████████████████████████████   2.8M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     █████████████████████                      1.5M ops/sec
 Zen                ███████████████                            1.0M ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          49K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 87K | 0.012ms | 0.018ms | 1000 |
| Valtio | 49K | 0.022ms | 0.042ms | 1000 |
| Jotai | 3K | 0.329ms | 0.804ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   20.8M ops/sec
🥈 Zen                ██████████████████████████████████████     20.0M ops/sec
🥉 Preact Signals     █████████████████████████████              15.0M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 MobX               ███████                                    3.5M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Jotai              █                                          358K ops/sec
 Redux Toolkit                                                 154K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 358K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 154K | 0.007ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   12.4M ops/sec
🥈 Solid.js           ██████████████████████████████████████     11.7M ops/sec
🥉 Preact Signals     ████████████████████████████████████       11.3M ops/sec
 Zustand            ██                                         714K ops/sec
 MobX               ██                                         512K ops/sec
 Valtio             █                                          375K ops/sec
 Jotai                                                         37K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 11.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 11.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 714K | 0.001ms | 0.002ms | 1000 |
| MobX | 512K | 0.002ms | 0.004ms | 1000 |
| Valtio | 375K | 0.003ms | 0.004ms | 1000 |
| Jotai | 37K | 0.027ms | 0.042ms | 1000 |
| Redux Toolkit | 16K | 0.066ms | 0.101ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.5M ops/sec
🥈 Solid.js           ███████████████████████████████            3.5M ops/sec
🥉 Preact Signals     ████████████████████████                   2.7M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          70K ops/sec
 Valtio                                                        40K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 77K | 0.014ms | 0.023ms | 1000 |
| MobX | 70K | 0.014ms | 0.024ms | 1000 |
| Valtio | 40K | 0.025ms | 0.035ms | 1000 |
| Jotai | 3K | 0.303ms | 0.501ms | 1000 |
| Redux Toolkit | 2K | 0.638ms | 1.449ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   623K ops/sec
🥈 Solid.js           ███████████████████████                    358K ops/sec
🥉 Preact Signals     ████████████████████                       315K ops/sec
 Zustand                                                       8K ops/sec
 MobX                                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         342 ops/sec
 Redux Toolkit                                                 152 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 623K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 358K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 315K | 0.003ms | 0.007ms | 1000 |
| Zustand | 8K | 0.134ms | 0.263ms | 1000 |
| MobX | 7K | 0.148ms | 0.171ms | 1000 |
| Valtio | 4K | 0.255ms | 0.290ms | 1000 |
| Jotai | 342 | 2.968ms | 5.288ms | 1000 |
| Redux Toolkit | 152 | 6.596ms | 7.708ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.3M ops/sec
🥈 Preact Signals     ███████████████████████                    6.5M ops/sec
🥉 Solid.js           █████████████████                          4.7M ops/sec
 Zustand            █████████████                              3.7M ops/sec
 Valtio             ██                                         432K ops/sec
 Jotai              █                                          326K ops/sec
 MobX               █                                          228K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 432K | 0.003ms | 0.005ms | 1000 |
| Jotai | 326K | 0.003ms | 0.007ms | 1000 |
| MobX | 228K | 0.005ms | 0.012ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.040ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   9.5M ops/sec
🥈 Preact Signals     █████████████████████████████████████      8.9M ops/sec
🥉 Zustand            ██████████████                             3.4M ops/sec
 Solid.js           █████████████                              3.1M ops/sec
 Valtio             █████████                                  2.2M ops/sec
 MobX               █████                                      1.1M ops/sec
 Jotai              █                                          310K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 9.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 8.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.002ms | 1000 |
| Solid.js | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.001ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 310K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 58K | 0.019ms | 0.034ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   23.1M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.8M ops/sec
🥉 Zen                ██████████████████████████████████████     21.9M ops/sec
 Preact Signals     █████████████████████████████████████      21.4M ops/sec
 Redux Toolkit      ███████████████████████████████            17.9M ops/sec
 Valtio             ████████████████████████                   13.7M ops/sec
 MobX               ██████████████                             8.2M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 23.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 8.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   6.9M ops/sec
🥈 Preact Signals     ████████████████████████████████████       6.2M ops/sec
🥉 Zustand            █████████████████████                      3.7M ops/sec
 Solid.js           ███████████████                            2.6M ops/sec
 Valtio             ███████████████                            2.5M ops/sec
 MobX               █████                                      927K ops/sec
 Jotai              ██                                         350K ops/sec
 Redux Toolkit                                                 78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 927K | 0.001ms | 0.002ms | 1000 |
| Jotai | 350K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 78K | 0.013ms | 0.027ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   104K ops/sec
🥈 Zen                ███████████████████████████████████████    103K ops/sec
🥉 Preact Signals     ██████████████████████████████████████     98K ops/sec
 Zustand            ██████████████████████                     56K ops/sec
 Valtio             ████████████████                           43K ops/sec
 MobX               █████████████                              35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 104K | 0.010ms | 0.018ms | 1000 |
| Zen | 103K | 0.011ms | 0.019ms | 1000 |
| Preact Signals | 98K | 0.011ms | 0.027ms | 1000 |
| Zustand | 56K | 0.019ms | 0.036ms | 1000 |
| Valtio | 43K | 0.024ms | 0.034ms | 1000 |
| MobX | 35K | 0.030ms | 0.041ms | 1000 |
| Jotai | 6K | 0.181ms | 0.251ms | 1000 |
| Redux Toolkit | 3K | 0.362ms | 1.127ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.2M ops/sec
🥈 Zen                ██████████████████████████                 13.8M ops/sec
🥉 Preact Signals     ███████████████████████                    12.3M ops/sec
 Zustand            ████████                                   4.1M ops/sec
 MobX               ████                                       2.3M ops/sec
 Valtio             ██                                         1.0M ops/sec
 Jotai                                                         173K ops/sec
 Redux Toolkit                                                 131K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 173K | 0.007ms | 0.016ms | 1000 |
| Redux Toolkit | 131K | 0.009ms | 0.020ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   18.6M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   18.4M ops/sec
🥉 Zustand            ███████                                    3.2M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          478K ops/sec
 Valtio             █                                          276K ops/sec
 Jotai                                                         162K ops/sec
 Redux Toolkit                                                 67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 18.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 18.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.002ms | 1000 |
| MobX | 478K | 0.002ms | 0.003ms | 1000 |
| Valtio | 276K | 0.004ms | 0.008ms | 1000 |
| Jotai | 162K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 67K | 0.016ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.9M ops/sec
🥈 Preact Signals     █                                          120K ops/sec
🥉 Zustand            █                                          96K ops/sec
 Zen                █                                          76K ops/sec
 Valtio             █                                          61K ops/sec
 Redux Toolkit                                                 41K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 120K | 0.009ms | 0.019ms | 1000 |
| Zustand | 96K | 0.026ms | 0.033ms | 1000 |
| Zen | 76K | 0.015ms | 0.024ms | 1000 |
| Valtio | 61K | 0.048ms | 0.053ms | 1000 |
| Redux Toolkit | 41K | 0.085ms | 0.627ms | 1000 |
| MobX | 12K | 0.121ms | 1.114ms | 1000 |
| Jotai | 7K | 0.152ms | 0.815ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   10.0M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    9.7M ops/sec
🥉 Zustand            ██████████████                             3.5M ops/sec
 Solid.js           ██████████                                 2.4M ops/sec
 MobX               █████████                                  2.1M ops/sec
 Valtio             █████                                      1.1M ops/sec
 Redux Toolkit                                                 120K ops/sec
 Jotai                                                         106K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 120K | 0.009ms | 0.015ms | 1000 |
| Jotai | 106K | 0.010ms | 0.015ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             █████████████                              767K ops/sec
🥉 MobX               ████                                       241K ops/sec
 Preact Signals     ████                                       234K ops/sec
 Jotai              ███                                        164K ops/sec
 Zen                ██                                         127K ops/sec
 Zustand            ██                                         103K ops/sec
 Redux Toolkit                                                 812 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 767K | 0.001ms | 0.006ms | 1000 |
| MobX | 241K | 0.005ms | 0.013ms | 1000 |
| Preact Signals | 234K | 0.005ms | 0.016ms | 1000 |
| Jotai | 164K | 0.007ms | 0.010ms | 1000 |
| Zen | 127K | 0.008ms | 0.014ms | 1000 |
| Zustand | 103K | 0.010ms | 0.017ms | 1000 |
| Redux Toolkit | 812 | 1.261ms | 2.967ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   318K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   317K ops/sec
🥉 Solid.js           ████████████████████████████████████████   317K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ███                                        21K ops/sec
 MobX               █                                          7K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         278 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 317K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 64K | 0.016ms | 0.022ms | 1000 |
| Preact Signals | 21K | 0.047ms | 0.058ms | 1000 |
| MobX | 7K | 0.137ms | 0.156ms | 1000 |
| Valtio | 5K | 0.217ms | 0.758ms | 1000 |
| Jotai | 278 | 3.615ms | 4.322ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   37K ops/sec
🥈 Zen                ███████████                                10K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          701 ops/sec
 MobX               █                                          527 ops/sec
 Valtio                                                        400 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 37K | 0.033ms | 0.117ms | 1000 |
| Zen | 10K | 0.097ms | 0.107ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.132ms | 1000 |
| Zustand | 701 | 1.438ms | 1.921ms | 1000 |
| MobX | 527 | 1.905ms | 2.516ms | 1000 |
| Valtio | 400 | 2.509ms | 3.160ms | 1000 |
| Jotai | 34 | 29.873ms | 34.252ms | 1000 |
| Redux Toolkit | 15 | 67.000ms | 73.049ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.7M ops/sec
🥈 Preact Signals     ██████████                                 5.1M ops/sec
🥉 Zen                ████                                       2.2M ops/sec
 Valtio             ████                                       2.1M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          283K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.1M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 283K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     █████████                                  5.1M ops/sec
🥉 Zen                █████                                      3.0M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          333K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 333K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Preact Signals     █████████████                              7.1M ops/sec
🥉 Zen                ███████████                                6.1M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             █████                                      2.5M ops/sec
 MobX               █                                          812K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 812K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.5M ops/sec
🥈 Zen                ████████████████                           7.4M ops/sec
🥉 Preact Signals     ██████████████                             6.4M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         770K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 770K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         437K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          35K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 437K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Zen | 35K | 0.029ms | 0.037ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.057ms | 1000 |
| Valtio | 8K | 0.124ms | 0.145ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.166ms | 0.193ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Preact Signals     ██                                         822K ops/sec
🥉 Zen                                                           245K ops/sec
 MobX                                                          119K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        72K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 822K | 0.001ms | 0.001ms | 1000 |
| Zen | 245K | 0.004ms | 0.007ms | 1000 |
| MobX | 119K | 0.008ms | 0.012ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 72K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Zen                ████                                       352K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        281K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          81K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 352K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 281K | 0.004ms | 0.004ms | 1000 |
| Valtio | 92K | 0.011ms | 0.019ms | 1000 |
| MobX | 81K | 0.013ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   13.6M ops/sec
🥈 Solid.js           ██████████████████████████████████████     12.7M ops/sec
🥉 Preact Signals     █████████                                  3.0M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             █████                                      1.5M ops/sec
 MobX                                                          114K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 114K | 0.009ms | 0.018ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.45.2`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-18T02:26:58.125Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
