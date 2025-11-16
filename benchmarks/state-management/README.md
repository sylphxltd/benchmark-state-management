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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 61.7/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (51.2/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 61.7/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 51.2/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 45.9/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 42.9/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 21.3/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 79.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 43.7/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 43.0/100 | 54% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 40.9/100 | 52% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.4/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.2/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.6/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.8/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 61.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 51.2/100 | 83% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 45.9/100 | 75% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 42.9/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 21.3/100 | 34% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 16.4/100 | 27% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.0/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.6/100 | 9% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **61.7** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **51.2** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **45.9** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **42.9** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **21.3** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **16.4** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.0** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **5.6** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.3M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   22.3M ops/sec
 Redux Toolkit      ████████████████████████████████████████   22.1M ops/sec
 Zen                ██████████████████████████████████         18.8M ops/sec
 MobX               ███████████████████████████████            17.1M ops/sec
 Valtio             ███████████████████████████                14.9M ops/sec
 Jotai              ████                                       2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   12.5M ops/sec
🥈 Redux Toolkit      ██████████████████████████████████████     11.8M ops/sec
🥉 Solid.js           █████████████████████████████              9.2M ops/sec
 Preact Signals     ███████████████████                        6.0M ops/sec
 Zen                ████████████████                           5.0M ops/sec
 MobX               ███                                        821K ops/sec
 Valtio             ██                                         518K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 12.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.8M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 821K | 0.001ms | 0.001ms | 1000 |
| Valtio | 518K | 0.002ms | 0.004ms | 1000 |
| Jotai | 31K | 0.033ms | 0.045ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ██████████████████████                     1.5M ops/sec
🥉 Zustand            ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 Zen                █████████                                  617K ops/sec
 MobX               █                                          85K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zen | 617K | 0.002ms | 0.003ms | 1000 |
| MobX | 85K | 0.012ms | 0.019ms | 1000 |
| Valtio | 53K | 0.020ms | 0.029ms | 1000 |
| Jotai | 3K | 0.315ms | 0.702ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.4M ops/sec
🥈 Zen                █████████████████████████                  13.4M ops/sec
🥉 Preact Signals     ██████████████████                         9.4M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ██████                                     3.2M ops/sec
 Valtio             ██████                                     3.0M ops/sec
 Jotai              █                                          336K ops/sec
 Redux Toolkit                                                 160K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 336K | 0.004ms | 0.009ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   9.5M ops/sec
🥈 Preact Signals     ████████████████████████                   5.7M ops/sec
🥉 Zen                ███████████████████                        4.6M ops/sec
 Zustand            ███                                        716K ops/sec
 MobX               ██                                         569K ops/sec
 Valtio             ██                                         385K ops/sec
 Jotai                                                         33K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 716K | 0.001ms | 0.002ms | 1000 |
| MobX | 569K | 0.002ms | 0.003ms | 1000 |
| Valtio | 385K | 0.003ms | 0.004ms | 1000 |
| Jotai | 33K | 0.033ms | 0.069ms | 1000 |
| Redux Toolkit | 16K | 0.062ms | 0.087ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Preact Signals     ██████████████████████████████             2.7M ops/sec
🥉 Zen                ████████████████████                       1.8M ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          72K ops/sec
 Valtio                                                        39K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.8M | 0.001ms | 0.001ms | 1000 |
| Zustand | 76K | 0.013ms | 0.023ms | 1000 |
| MobX | 72K | 0.014ms | 0.024ms | 1000 |
| Valtio | 39K | 0.026ms | 0.035ms | 1000 |
| Jotai | 3K | 0.303ms | 0.608ms | 1000 |
| Redux Toolkit | 2K | 0.619ms | 1.272ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   379K ops/sec
🥈 Preact Signals     █████████████████████████████████          317K ops/sec
🥉 Zen                ████████████████████████                   223K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         352 ops/sec
 Redux Toolkit                                                 162 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 379K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 223K | 0.004ms | 0.005ms | 1000 |
| Zustand | 8K | 0.132ms | 0.156ms | 1000 |
| MobX | 7K | 0.135ms | 0.163ms | 1000 |
| Valtio | 4K | 0.247ms | 0.289ms | 1000 |
| Jotai | 352 | 2.903ms | 5.098ms | 1000 |
| Redux Toolkit | 162 | 6.198ms | 7.218ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.1M ops/sec
🥈 Zen                █████████████████████████████              7.3M ops/sec
🥉 Solid.js           ███████████████                            3.8M ops/sec
 Zustand            ██████████████                             3.7M ops/sec
 Valtio             ██                                         431K ops/sec
 Jotai              █                                          300K ops/sec
 MobX               █                                          186K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 431K | 0.003ms | 0.006ms | 1000 |
| Jotai | 300K | 0.003ms | 0.006ms | 1000 |
| MobX | 186K | 0.006ms | 0.015ms | 1000 |
| Redux Toolkit | 61K | 0.018ms | 0.042ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   9.3M ops/sec
🥈 Zen                ███████████████████████████████████        8.2M ops/sec
🥉 Zustand            ███████████████                            3.5M ops/sec
 Solid.js           █████████████                              3.1M ops/sec
 Valtio             █████████                                  2.1M ops/sec
 MobX               ████                                       872K ops/sec
 Jotai              █                                          313K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 9.3M | 0.000ms | 0.001ms | 1000 |
| Zen | 8.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 872K | 0.001ms | 0.002ms | 1000 |
| Jotai | 313K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 58K | 0.019ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.7M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    22.2M ops/sec
🥉 Solid.js           ███████████████████████████████            17.3M ops/sec
 Redux Toolkit      █████████████████████████████              16.6M ops/sec
 Zen                █████████████████████████████              16.5M ops/sec
 Valtio             ████████████████████████                   13.7M ops/sec
 MobX               ██████████                                 5.4M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 17.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.4M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   6.8M ops/sec
🥈 Preact Signals     ███████████████████████████████████        5.9M ops/sec
🥉 Zustand            ████████████████                           2.7M ops/sec
 Valtio             ███████████████                            2.6M ops/sec
 Solid.js           ███████████████                            2.5M ops/sec
 MobX               ███████                                    1.2M ops/sec
 Jotai              ██                                         345K ops/sec
 Redux Toolkit                                                 80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.002ms | 1000 |
| Jotai | 345K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 80K | 0.014ms | 0.027ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   19K ops/sec
🥈 Redux Toolkit      █                                          538 ops/sec
🥉 MobX               █                                          501 ops/sec
 Preact Signals     █                                          501 ops/sec
 Zen                █                                          501 ops/sec
 Zustand            █                                          501 ops/sec
 Valtio             █                                          501 ops/sec
 Solid.js           █                                          501 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 19K | 0.056ms | 0.079ms | 1000 |
| Redux Toolkit | 538 | 1.992ms | 2.764ms | 1000 |
| MobX | 501 | 1.997ms | 2.372ms | 1000 |
| Preact Signals | 501 | 1.998ms | 2.404ms | 1000 |
| Zen | 501 | 2.004ms | 2.392ms | 1000 |
| Zustand | 501 | 1.998ms | 2.329ms | 1000 |
| Valtio | 501 | 1.998ms | 2.273ms | 1000 |
| Solid.js | 501 | 1.998ms | 2.064ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   114K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    112K ops/sec
🥉 Zen                ██████████████████████████████████████     108K ops/sec
 Zustand            █████████████████████                      59K ops/sec
 Valtio             ████████████████                           44K ops/sec
 MobX               █████████████                              37K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 114K | 0.009ms | 0.012ms | 1000 |
| Preact Signals | 112K | 0.009ms | 0.014ms | 1000 |
| Zen | 108K | 0.010ms | 0.018ms | 1000 |
| Zustand | 59K | 0.017ms | 0.027ms | 1000 |
| Valtio | 44K | 0.023ms | 0.033ms | 1000 |
| MobX | 37K | 0.028ms | 0.045ms | 1000 |
| Jotai | 6K | 0.173ms | 0.380ms | 1000 |
| Redux Toolkit | 3K | 0.343ms | 0.988ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.2M ops/sec
🥈 Preact Signals     ███████████████████████                    12.1M ops/sec
🥉 Zen                ██████████                                 5.4M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         185K ops/sec
 Redux Toolkit                                                 140K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.2M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 12.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Jotai | 185K | 0.006ms | 0.012ms | 1000 |
| Redux Toolkit | 140K | 0.007ms | 0.018ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   18.8M ops/sec
🥈 Zen                ████████████████████████████████           15.1M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.4M ops/sec
 MobX               █                                          461K ops/sec
 Valtio             █                                          279K ops/sec
 Jotai                                                         180K ops/sec
 Redux Toolkit                                                 75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.4M | 0.001ms | 0.001ms | 1000 |
| MobX | 461K | 0.002ms | 0.003ms | 1000 |
| Valtio | 279K | 0.004ms | 0.006ms | 1000 |
| Jotai | 180K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 75K | 0.014ms | 0.027ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   5.0M ops/sec
🥈 Zen                █                                          122K ops/sec
🥉 Zustand            █                                          111K ops/sec
 Preact Signals     █                                          106K ops/sec
 Valtio                                                        55K ops/sec
 Redux Toolkit                                                 46K ops/sec
 MobX                                                          11K ops/sec
 Jotai                                                         8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 5.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 122K | 0.009ms | 0.016ms | 1000 |
| Zustand | 111K | 0.014ms | 0.030ms | 1000 |
| Preact Signals | 106K | 0.010ms | 0.019ms | 1000 |
| Valtio | 55K | 0.042ms | 0.046ms | 1000 |
| Redux Toolkit | 46K | 0.048ms | 0.069ms | 1000 |
| MobX | 11K | 0.128ms | 1.094ms | 1000 |
| Jotai | 8K | 0.150ms | 0.818ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   12.7M ops/sec
🥈 Zen                ███████████████████████████████████████    12.4M ops/sec
🥉 Zustand            ███████████                                3.6M ops/sec
 Solid.js           █████████                                  2.8M ops/sec
 MobX               ██████                                     2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 129K ops/sec
 Jotai                                                         117K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Redux Toolkit | 129K | 0.008ms | 0.013ms | 1000 |
| Jotai | 117K | 0.009ms | 0.016ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.4M ops/sec
🥈 Valtio             █████████████                              781K ops/sec
🥉 MobX               ████                                       220K ops/sec
 Jotai              ███                                        186K ops/sec
 Zen                ██                                         133K ops/sec
 Preact Signals     ██                                         133K ops/sec
 Zustand            ██                                         106K ops/sec
 Redux Toolkit                                                 824 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 781K | 0.001ms | 0.006ms | 1000 |
| MobX | 220K | 0.005ms | 0.015ms | 1000 |
| Jotai | 186K | 0.006ms | 0.011ms | 1000 |
| Zen | 133K | 0.008ms | 0.016ms | 1000 |
| Preact Signals | 133K | 0.008ms | 0.017ms | 1000 |
| Zustand | 106K | 0.010ms | 0.028ms | 1000 |
| Redux Toolkit | 824 | 1.234ms | 2.780ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
🥉 Zustand            ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ███                                        20K ops/sec
 Valtio             █                                          5K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         282 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 80K | 0.013ms | 0.029ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.059ms | 1000 |
| Valtio | 5K | 0.211ms | 0.659ms | 1000 |
| MobX | 4K | 0.274ms | 0.289ms | 1000 |
| Jotai | 282 | 3.555ms | 4.078ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   37K ops/sec
🥈 Zen                ████████████                               11K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          750 ops/sec
 MobX                                                          437 ops/sec
 Valtio                                                        404 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 37K | 0.033ms | 0.421ms | 1000 |
| Zen | 11K | 0.091ms | 0.107ms | 1000 |
| Preact Signals | 8K | 0.118ms | 0.126ms | 1000 |
| Zustand | 750 | 1.345ms | 1.831ms | 1000 |
| MobX | 437 | 2.293ms | 2.834ms | 1000 |
| Valtio | 404 | 2.483ms | 3.019ms | 1000 |
| Jotai | 34 | 29.317ms | 33.906ms | 1000 |
| Redux Toolkit | 15 | 66.917ms | 71.029ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.6M ops/sec
🥈 Zen                ███████████████████████████                13.8M ops/sec
🥉 Preact Signals     ███████████                                5.4M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          286K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 286K | 0.004ms | 0.007ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                ███████████████████████████                14.7M ops/sec
🥉 Preact Signals     █████████                                  5.2M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          340K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 340K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                █████████████████████████████              16.1M ops/sec
🥉 Preact Signals     ██████████████                             7.6M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ████                                       2.5M ops/sec
 MobX               █                                          784K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 784K | 0.001ms | 0.003ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.1M ops/sec
🥈 Preact Signals     ██████████████                             6.6M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ███████                                    3.3M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         779K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 779K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         435K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          28K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
 Zen                                                           4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 435K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 28K | 0.036ms | 0.044ms | 1000 |
| Valtio | 8K | 0.124ms | 0.139ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.169ms | 0.201ms | 1000 |
| Zen | 4K | 0.244ms | 0.291ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.9M ops/sec
🥈 Zen                █████████████████████████████              15.6M ops/sec
🥉 Preact Signals     ██                                         829K ops/sec
 MobX                                                          116K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        72K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 829K | 0.001ms | 0.001ms | 1000 |
| MobX | 116K | 0.009ms | 0.010ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 72K | 0.014ms | 0.024ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        281K ops/sec
 Valtio             █                                          91K ops/sec
 Zen                █                                          81K ops/sec
 MobX               █                                          81K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 281K | 0.004ms | 0.006ms | 1000 |
| Valtio | 91K | 0.011ms | 0.019ms | 1000 |
| Zen | 81K | 0.013ms | 0.022ms | 1000 |
| MobX | 81K | 0.013ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   15.2M ops/sec
🥈 Zen                ████████████████████████████████████       13.6M ops/sec
🥉 Preact Signals     ███████                                    2.8M ops/sec
 Zustand            █████                                      2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          110K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 15.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 110K | 0.013ms | 0.023ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.16.1`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T02:43:18.805Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
