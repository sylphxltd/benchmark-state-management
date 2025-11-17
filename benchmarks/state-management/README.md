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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 84.2/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (64.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 84.2/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 64.4/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 63.2/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 60.0/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 25.1/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 88.4/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 52.2/100 | 59% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 48.8/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 47.7/100 | 54% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.5/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.8/100 | 16% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.1/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.7/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 84.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 64.4/100 | 76% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 63.2/100 | 75% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 60.0/100 | 71% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.1/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 18.8/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.8/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.4/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **84.2** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **64.4** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **63.2** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **60.0** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.1** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.8** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.4** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
🥉 Zustand            ███████████████████████████████████████    22.0M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.0M ops/sec
 Zen                ███████████████████████████████            17.4M ops/sec
 MobX               ██████████████████████████████             17.0M ops/sec
 Valtio             ██████████████████████████                 14.4M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 17.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.4M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid.js           ████████████████████████████████████████   11.9M ops/sec
🥈 Redux Toolkit      ███████████████████████████████████████    11.7M ops/sec
🥉 Zustand            ███████████████████████████████████████    11.7M ops/sec
 Preact Signals     ████████████████████████████               8.3M ops/sec
 Zen                ███████████████████████████                8.0M ops/sec
 MobX               ███                                        832K ops/sec
 Valtio             ██                                         475K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 11.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 11.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 832K | 0.001ms | 0.001ms | 1000 |
| Valtio | 475K | 0.002ms | 0.003ms | 1000 |
| Jotai | 32K | 0.032ms | 0.044ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.7M ops/sec
🥈 Zustand            ██████████████████████                     1.5M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 Zen                ██████████████████████                     1.5M ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          47K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 87K | 0.012ms | 0.018ms | 1000 |
| Valtio | 47K | 0.023ms | 0.040ms | 1000 |
| Jotai | 3K | 0.328ms | 0.721ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.0M ops/sec
🥈 Zen                ██████████████████████████████████████     19.9M ops/sec
🥉 Preact Signals     █████████████████████████████████████      19.5M ops/sec
 Zustand            ██████████                                 5.1M ops/sec
 MobX               ██████                                     3.4M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          378K ops/sec
 Redux Toolkit                                                 164K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 378K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 164K | 0.006ms | 0.012ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   15.3M ops/sec
🥈 Preact Signals     █████████████████████████████████          12.7M ops/sec
🥉 Solid.js           █████████████████████████                  9.5M ops/sec
 Zustand            ██                                         738K ops/sec
 MobX               ██                                         585K ops/sec
 Valtio             █                                          404K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 15.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 738K | 0.001ms | 0.002ms | 1000 |
| MobX | 585K | 0.002ms | 0.003ms | 1000 |
| Valtio | 404K | 0.003ms | 0.003ms | 1000 |
| Jotai | 35K | 0.029ms | 0.047ms | 1000 |
| Redux Toolkit | 16K | 0.063ms | 0.098ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   4.5M ops/sec
🥈 Solid.js           ████████████████████████████████           3.6M ops/sec
🥉 Preact Signals     ████████████████████████                   2.7M ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          63K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 4.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 76K | 0.014ms | 0.022ms | 1000 |
| MobX | 63K | 0.016ms | 0.025ms | 1000 |
| Valtio | 41K | 0.025ms | 0.034ms | 1000 |
| Jotai | 4K | 0.284ms | 0.884ms | 1000 |
| Redux Toolkit | 2K | 0.621ms | 1.253ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   621K ops/sec
🥈 Solid.js           ████████████████████████                   380K ops/sec
🥉 Preact Signals     ███████                                    112K ops/sec
 Zustand                                                       8K ops/sec
 MobX                                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         358 ops/sec
 Redux Toolkit                                                 164 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 621K | 0.002ms | 0.002ms | 1000 |
| Solid.js | 380K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 112K | 0.009ms | 0.017ms | 1000 |
| Zustand | 8K | 0.130ms | 0.155ms | 1000 |
| MobX | 7K | 0.154ms | 0.179ms | 1000 |
| Valtio | 4K | 0.255ms | 0.322ms | 1000 |
| Jotai | 358 | 2.856ms | 4.853ms | 1000 |
| Redux Toolkit | 164 | 6.098ms | 6.888ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.0M ops/sec
🥈 Preact Signals     ███████████████████████████████████        9.7M ops/sec
🥉 Solid.js           ████████████████                           4.4M ops/sec
 Zustand            █████████████                              3.5M ops/sec
 Valtio             █                                          346K ops/sec
 Jotai              █                                          319K ops/sec
 MobX               █                                          208K ops/sec
 Redux Toolkit                                                 63K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 346K | 0.003ms | 0.008ms | 1000 |
| Jotai | 319K | 0.003ms | 0.006ms | 1000 |
| MobX | 208K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 63K | 0.016ms | 0.032ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   8.6M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   8.5M ops/sec
🥉 Zustand            ████████████████                           3.5M ops/sec
 Solid.js           ██████████████                             3.1M ops/sec
 Valtio             ██████████                                 2.2M ops/sec
 MobX               █████                                      977K ops/sec
 Jotai              ██                                         327K ops/sec
 Redux Toolkit                                                 60K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 977K | 0.001ms | 0.002ms | 1000 |
| Jotai | 327K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 60K | 0.017ms | 0.030ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zustand            ████████████████████████████████████████   21.8M ops/sec
🥉 Zen                █████████████████████████████████████      20.6M ops/sec
 Preact Signals     █████████████████████████████████          17.9M ops/sec
 Redux Toolkit      █████████████████████████████              16.1M ops/sec
 Valtio             ███████████████████████                    12.7M ops/sec
 MobX               █████████                                  5.2M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 20.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 12.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   6.3M ops/sec
🥈 Zen                ███████████████████████████████████████    6.0M ops/sec
🥉 Zustand            ████████████████████                       3.1M ops/sec
 Valtio             ████████████████                           2.5M ops/sec
 Solid.js           ███████████████                            2.3M ops/sec
 MobX               ████████                                   1.3M ops/sec
 Jotai              ██                                         333K ops/sec
 Redux Toolkit      █                                          81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 333K | 0.003ms | 0.004ms | 1000 |
| Redux Toolkit | 81K | 0.013ms | 0.024ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   104K ops/sec
🥈 Solid.js           ████████████████████████████████████████   103K ops/sec
🥉 Zen                ████████████████████████████████████████   103K ops/sec
 Zustand            ███████████████████████                    60K ops/sec
 Valtio             █████████████████                          44K ops/sec
 MobX               ██████████████                             35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 104K | 0.010ms | 0.015ms | 1000 |
| Solid.js | 103K | 0.010ms | 0.018ms | 1000 |
| Zen | 103K | 0.010ms | 0.015ms | 1000 |
| Zustand | 60K | 0.017ms | 0.026ms | 1000 |
| Valtio | 44K | 0.024ms | 0.033ms | 1000 |
| MobX | 35K | 0.029ms | 0.041ms | 1000 |
| Jotai | 6K | 0.168ms | 0.294ms | 1000 |
| Redux Toolkit | 3K | 0.342ms | 0.969ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.7M ops/sec
🥈 Zen                ██████████████████████████                 13.9M ops/sec
🥉 Preact Signals     ███████████████████████                    12.3M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         174K ops/sec
 Redux Toolkit                                                 147K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 174K | 0.006ms | 0.011ms | 1000 |
| Redux Toolkit | 147K | 0.007ms | 0.014ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.0M ops/sec
🥈 Zen                ████████████████████████████████████████   18.9M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          473K ops/sec
 Valtio             █                                          285K ops/sec
 Jotai                                                         173K ops/sec
 Redux Toolkit                                                 73K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 473K | 0.002ms | 0.003ms | 1000 |
| Valtio | 285K | 0.004ms | 0.005ms | 1000 |
| Jotai | 173K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 73K | 0.014ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.5M ops/sec
🥈 Preact Signals     █                                          127K ops/sec
🥉 Zustand            █                                          99K ops/sec
 Zen                █                                          97K ops/sec
 Valtio             █                                          67K ops/sec
 Redux Toolkit                                                 46K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 127K | 0.008ms | 0.013ms | 1000 |
| Zustand | 99K | 0.024ms | 0.038ms | 1000 |
| Zen | 97K | 0.012ms | 0.023ms | 1000 |
| Valtio | 67K | 0.040ms | 0.045ms | 1000 |
| Redux Toolkit | 46K | 0.051ms | 0.070ms | 1000 |
| MobX | 11K | 0.124ms | 0.997ms | 1000 |
| Jotai | 7K | 0.150ms | 0.760ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   13.9M ops/sec
🥈 Zen                ███████████████████████████████████████    13.6M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ████████                                   2.8M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.0M ops/sec
 Redux Toolkit                                                 130K ops/sec
 Jotai                                                         114K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 13.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 130K | 0.009ms | 0.014ms | 1000 |
| Jotai | 114K | 0.010ms | 0.017ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.5M ops/sec
🥈 Valtio             ███████████████                            930K ops/sec
🥉 MobX               ███                                        202K ops/sec
 Jotai              ██                                         141K ops/sec
 Preact Signals     ██                                         134K ops/sec
 Zen                ██                                         110K ops/sec
 Zustand            █                                          89K ops/sec
 Redux Toolkit                                                 825 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.5M | 0.000ms | 0.002ms | 1000 |
| Valtio | 930K | 0.001ms | 0.006ms | 1000 |
| MobX | 202K | 0.006ms | 0.015ms | 1000 |
| Jotai | 141K | 0.008ms | 0.022ms | 1000 |
| Preact Signals | 134K | 0.008ms | 0.017ms | 1000 |
| Zen | 110K | 0.010ms | 0.016ms | 1000 |
| Zustand | 89K | 0.011ms | 0.020ms | 1000 |
| Redux Toolkit | 825 | 1.241ms | 3.128ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████████████████████████   318K ops/sec
🥉 Redux Toolkit      ████████████████████████████████           258K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          3K ops/sec
 Jotai                                                         285 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 258K | 0.007ms | 0.091ms | 1000 |
| Zen | 64K | 0.016ms | 0.022ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.057ms | 1000 |
| Valtio | 5K | 0.210ms | 0.632ms | 1000 |
| MobX | 3K | 0.324ms | 0.338ms | 1000 |
| Jotai | 285 | 3.523ms | 4.011ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   45K ops/sec
🥈 Zen                █████████                                  10K ops/sec
🥉 Preact Signals     ███████                                    8K ops/sec
 Zustand            █                                          750 ops/sec
 MobX                                                          432 ops/sec
 Valtio                                                        407 ops/sec
 Jotai                                                         35 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 45K | 0.027ms | 0.363ms | 1000 |
| Zen | 10K | 0.100ms | 0.107ms | 1000 |
| Preact Signals | 8K | 0.122ms | 0.135ms | 1000 |
| Zustand | 750 | 1.343ms | 1.807ms | 1000 |
| MobX | 432 | 2.323ms | 2.815ms | 1000 |
| Valtio | 407 | 2.490ms | 4.281ms | 1000 |
| Jotai | 35 | 28.602ms | 32.194ms | 1000 |
| Redux Toolkit | 15 | 66.479ms | 70.069ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.5M ops/sec
🥈 Preact Signals     ██████████                                 5.2M ops/sec
🥉 Zen                ████                                       2.2M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          284K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 284K | 0.004ms | 0.007ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     █████████                                  5.0M ops/sec
🥉 Zen                █████                                      3.0M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          335K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 335K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.2M ops/sec
🥈 Preact Signals     █████████████                              7.2M ops/sec
🥉 Zen                ████████████                               6.9M ops/sec
 Zustand            ████████                                   4.7M ops/sec
 Valtio             ████                                       2.5M ops/sec
 MobX               █                                          790K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 790K | 0.001ms | 0.003ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.6M ops/sec
🥈 Zen                █████████████████                          7.8M ops/sec
🥉 Preact Signals     ██████████████                             6.7M ops/sec
 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         761K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| MobX | 761K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         437K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Zen                █                                          34K ops/sec
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
| Zen | 34K | 0.030ms | 0.063ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.044ms | 1000 |
| Valtio | 8K | 0.123ms | 0.143ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.168ms | 0.188ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥈 Preact Signals     █                                          729K ops/sec
🥉 Zen                                                           246K ops/sec
 MobX                                                          121K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        71K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 729K | 0.001ms | 0.002ms | 1000 |
| Zen | 246K | 0.004ms | 0.004ms | 1000 |
| MobX | 121K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 71K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Zen                ████                                       343K ops/sec
 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        278K ops/sec
 Valtio             █                                          93K ops/sec
 MobX               █                                          75K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Zen | 343K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 278K | 0.004ms | 0.004ms | 1000 |
| Valtio | 93K | 0.011ms | 0.015ms | 1000 |
| MobX | 75K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   14.1M ops/sec
🥈 Solid.js           ████████████████████████████████████       12.6M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          113K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 113K | 0.009ms | 0.014ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.44.2`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-17T07:10:30.348Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
