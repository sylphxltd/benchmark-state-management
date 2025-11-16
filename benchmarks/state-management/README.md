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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 81.5/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (65.7/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 81.5/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 65.7/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 57.3/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 25.4/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 19.7/100)
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
| 🥈 2 | **[Zustand](https://github.com/pmndrs/zustand)** | 46.8/100 | 53% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 46.2/100 | 53% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 17.3/100 | 20% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.3/100 | 20% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 15.1/100 | 17% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.5/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.3/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 65.7/100 | 81% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 57.3/100 | 70% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.4/100 | 31% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 19.7/100 | 24% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Zen](https://github.com/SylphxAI/zen)** | 18.2/100 | 22% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12.8/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.7/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **81.5** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **65.7** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **57.3** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.4** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **19.7** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Zen](https://github.com/SylphxAI/zen)** | **18.2** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **12.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **3.7** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Preact Signals     ████████████████████████████████████████   22.4M ops/sec
🥈 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥉 Redux Toolkit      ████████████████████████████████████████   22.2M ops/sec
 Zustand            ████████████████████████████████████████   22.2M ops/sec
 Zen                ███████████████████████████████████████    21.8M ops/sec
 MobX               ███████████████████████████████            17.1M ops/sec
 Valtio             ██████████████████████████                 14.7M ops/sec
 Jotai              ███                                        1.8M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 22.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 17.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.7M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.8M | 0.001ms | 0.003ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   13.0M ops/sec
🥈 Solid.js           ██████████████████████████████████████     12.4M ops/sec
🥉 Zustand            █████████████████████████████              9.5M ops/sec
 Preact Signals     ████████████████████████████               9.0M ops/sec
 Zen                ████████████████                           5.4M ops/sec
 MobX               ███                                        844K ops/sec
 Valtio             █                                          402K ops/sec
 Jotai                                                         30K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 13.0M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 9.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 844K | 0.001ms | 0.001ms | 1000 |
| Valtio | 402K | 0.003ms | 0.006ms | 1000 |
| Jotai | 30K | 0.034ms | 0.054ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Zustand            ████████████████████████████████████████   2.8M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 Zen                ███████████                                777K ops/sec
 MobX               █                                          87K ops/sec
 Valtio             █                                          51K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 777K | 0.001ms | 0.001ms | 1000 |
| MobX | 87K | 0.012ms | 0.018ms | 1000 |
| Valtio | 51K | 0.021ms | 0.029ms | 1000 |
| Jotai | 3K | 0.320ms | 0.766ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   20.4M ops/sec
🥈 Zen                ██████████████████████████████████████     19.4M ops/sec
🥉 Preact Signals     ██████████████████████                     11.4M ops/sec
 Zustand            ██████████                                 4.9M ops/sec
 MobX               ██████                                     3.2M ops/sec
 Valtio             ██████                                     3.1M ops/sec
 Jotai              █                                          316K ops/sec
 Redux Toolkit                                                 161K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 316K | 0.004ms | 0.009ms | 1000 |
| Redux Toolkit | 161K | 0.006ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   13.6M ops/sec
🥈 Solid.js           ██████████████████████████                 8.9M ops/sec
🥉 Preact Signals     █████████████████                          5.8M ops/sec
 Zustand            ██                                         708K ops/sec
 MobX               ██                                         573K ops/sec
 Valtio             █                                          391K ops/sec
 Jotai                                                         33K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 8.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 708K | 0.001ms | 0.002ms | 1000 |
| MobX | 573K | 0.002ms | 0.003ms | 1000 |
| Valtio | 391K | 0.003ms | 0.004ms | 1000 |
| Jotai | 33K | 0.030ms | 0.043ms | 1000 |
| Redux Toolkit | 16K | 0.064ms | 0.093ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.8M ops/sec
🥈 Zen                ███████████████████████████████████        3.3M ops/sec
🥉 Preact Signals     █████████████████████████████              2.7M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          66K ops/sec
 Valtio                                                        43K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 77K | 0.013ms | 0.022ms | 1000 |
| MobX | 66K | 0.015ms | 0.026ms | 1000 |
| Valtio | 43K | 0.023ms | 0.033ms | 1000 |
| Jotai | 3K | 0.296ms | 0.597ms | 1000 |
| Redux Toolkit | 2K | 0.642ms | 1.513ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   395K ops/sec
🥈 Solid.js           ███████████████████████████████████████    388K ops/sec
🥉 Preact Signals     ████████████████████████████████           317K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         349 ops/sec
 Redux Toolkit                                                 155 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 395K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 388K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zustand | 8K | 0.133ms | 0.156ms | 1000 |
| MobX | 7K | 0.141ms | 0.188ms | 1000 |
| Valtio | 4K | 0.235ms | 0.263ms | 1000 |
| Jotai | 349 | 2.923ms | 5.419ms | 1000 |
| Redux Toolkit | 155 | 6.469ms | 7.633ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   11.2M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     10.6M ops/sec
🥉 Solid.js           █████████████████                          4.7M ops/sec
 Zustand            ███████████                                3.1M ops/sec
 Valtio             █                                          411K ops/sec
 Jotai              █                                          317K ops/sec
 MobX               █                                          195K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 411K | 0.003ms | 0.004ms | 1000 |
| Jotai | 317K | 0.003ms | 0.007ms | 1000 |
| MobX | 195K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 61K | 0.017ms | 0.032ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   6.8M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   6.7M ops/sec
🥉 Zustand            ██████████████████                         3.0M ops/sec
 Solid.js           ███████████████                            2.5M ops/sec
 Valtio             ████████████                               2.0M ops/sec
 MobX               ██████                                     1.1M ops/sec
 Jotai              █                                          251K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.002ms | 0.002ms | 1000 |
| Jotai | 251K | 0.004ms | 0.009ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.032ms | 1000 |

#### Computed Value Access

```
🥇 Solid.js           ████████████████████████████████████████   22.5M ops/sec
🥈 Zen                ██████████████████████████████████████     21.5M ops/sec
🥉 Zustand            █████████████████████████████████████      21.0M ops/sec
 Preact Signals     ███████████████████████████████████        19.8M ops/sec
 Redux Toolkit      ███████████████████████████████            17.6M ops/sec
 Valtio             █████████████████████████                  13.8M ops/sec
 MobX               ██████████████                             7.6M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.1M ops/sec
🥈 Zen                ████████████████████████████████████████   8.1M ops/sec
🥉 Zustand            ██████████████████                         3.6M ops/sec
 Valtio             ██████████████                             2.9M ops/sec
 Solid.js           ████████████                               2.5M ops/sec
 MobX               ██████                                     1.3M ops/sec
 Jotai              ██                                         316K ops/sec
 Redux Toolkit                                                 80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 316K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 80K | 0.013ms | 0.019ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Solid.js           ████████████████████████████████████████   107K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    104K ops/sec
🥉 Zen                ██████████████████████████████████████     101K ops/sec
 Zustand            ██████████████████████                     58K ops/sec
 Valtio             ███████████████                            41K ops/sec
 MobX               █████████████                              36K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 107K | 0.009ms | 0.014ms | 1000 |
| Preact Signals | 104K | 0.010ms | 0.019ms | 1000 |
| Zen | 101K | 0.011ms | 0.019ms | 1000 |
| Zustand | 58K | 0.018ms | 0.027ms | 1000 |
| Valtio | 41K | 0.025ms | 0.035ms | 1000 |
| MobX | 36K | 0.028ms | 0.039ms | 1000 |
| Jotai | 6K | 0.175ms | 0.220ms | 1000 |
| Redux Toolkit | 3K | 0.356ms | 0.472ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Preact Signals     ████████████████████                       10.6M ops/sec
🥉 Zustand            █████████                                  4.9M ops/sec
 MobX               ████                                       2.3M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         174K ops/sec
 Redux Toolkit                                                 133K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 174K | 0.006ms | 0.017ms | 1000 |
| Redux Toolkit | 133K | 0.008ms | 0.019ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   14.1M ops/sec
🥈 Zen                ███████████████████████████████████████    13.6M ops/sec
🥉 Zustand            █████████                                  3.0M ops/sec
 Solid.js           ███                                        1.2M ops/sec
 MobX               █                                          418K ops/sec
 Valtio             █                                          266K ops/sec
 Jotai                                                         154K ops/sec
 Redux Toolkit                                                 67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.2M | 0.001ms | 0.002ms | 1000 |
| MobX | 418K | 0.002ms | 0.005ms | 1000 |
| Valtio | 266K | 0.004ms | 0.005ms | 1000 |
| Jotai | 154K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 67K | 0.015ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.3M ops/sec
🥈 Preact Signals     █                                          111K ops/sec
🥉 Zustand            █                                          99K ops/sec
 Valtio             █                                          63K ops/sec
 Redux Toolkit                                                 43K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 111K | 0.010ms | 0.018ms | 1000 |
| Zustand | 99K | 0.024ms | 0.031ms | 1000 |
| Valtio | 63K | 0.043ms | 0.039ms | 1000 |
| Redux Toolkit | 43K | 0.063ms | 0.072ms | 1000 |
| MobX | 12K | 0.118ms | 1.028ms | 1000 |
| Jotai | 7K | 0.152ms | 0.718ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   15.0M ops/sec
🥈 Zen                ███████████████████████████████████        13.2M ops/sec
🥉 Zustand            ████████                                   3.2M ops/sec
 Solid.js           ████████                                   2.8M ops/sec
 MobX               █████                                      1.8M ops/sec
 Valtio             ███                                        993K ops/sec
 Redux Toolkit                                                 121K ops/sec
 Jotai                                                         112K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 15.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.8M | 0.001ms | 0.001ms | 1000 |
| Valtio | 993K | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 121K | 0.009ms | 0.020ms | 1000 |
| Jotai | 112K | 0.009ms | 0.013ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.5M ops/sec
🥈 Valtio             █████████████                              828K ops/sec
🥉 MobX               ████                                       232K ops/sec
 Jotai              ██                                         150K ops/sec
 Zustand            ██                                         133K ops/sec
 Zen                ██                                         107K ops/sec
 Preact Signals     ██                                         106K ops/sec
 Redux Toolkit                                                 813 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 828K | 0.001ms | 0.007ms | 1000 |
| MobX | 232K | 0.005ms | 0.013ms | 1000 |
| Jotai | 150K | 0.009ms | 0.025ms | 1000 |
| Zustand | 133K | 0.008ms | 0.012ms | 1000 |
| Zen | 107K | 0.009ms | 0.015ms | 1000 |
| Preact Signals | 106K | 0.010ms | 0.013ms | 1000 |
| Redux Toolkit | 813 | 1.258ms | 3.156ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   318K ops/sec
🥈 Solid.js           ████████████████████████████████████████   317K ops/sec
🥉 Redux Toolkit      ████████████████████                       160K ops/sec
 Zen                ████████                                   64K ops/sec
 Preact Signals     ██                                         19K ops/sec
 MobX               █                                          7K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         278 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Solid.js | 317K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.007ms | 1000 |
| Zen | 64K | 0.016ms | 0.022ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.061ms | 1000 |
| MobX | 7K | 0.138ms | 0.154ms | 1000 |
| Valtio | 5K | 0.206ms | 0.597ms | 1000 |
| Jotai | 278 | 3.618ms | 4.157ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   38K ops/sec
🥈 Zen                ██████████                                 9K ops/sec
🥉 Preact Signals     █████████                                  8K ops/sec
 Zustand            █                                          731 ops/sec
 MobX               █                                          527 ops/sec
 Valtio                                                        424 ops/sec
 Jotai                                                         32 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 38K | 0.034ms | 0.419ms | 1000 |
| Zen | 9K | 0.106ms | 0.118ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.132ms | 1000 |
| Zustand | 731 | 1.383ms | 1.978ms | 1000 |
| MobX | 527 | 1.911ms | 2.506ms | 1000 |
| Valtio | 424 | 2.368ms | 2.972ms | 1000 |
| Jotai | 32 | 30.855ms | 34.978ms | 1000 |
| Redux Toolkit | 15 | 68.862ms | 71.650ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.9M ops/sec
🥈 Preact Signals     ██████████                                 5.0M ops/sec
🥉 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          275K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 275K | 0.004ms | 0.006ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.0M ops/sec
🥈 Preact Signals     █████████                                  5.0M ops/sec
🥉 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.7M ops/sec
 MobX               █                                          317K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.001ms | 1000 |
| MobX | 317K | 0.003ms | 0.004ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.3M ops/sec
🥈 Preact Signals     █████████████                              7.3M ops/sec
🥉 Zustand            ████████                                   4.7M ops/sec
 Valtio             █████                                      2.6M ops/sec
 MobX               █                                          800K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 800K | 0.001ms | 0.003ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   19.6M ops/sec
🥈 Preact Signals     █████████████                              6.5M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Valtio             ██                                         1.1M ops/sec
 MobX               ██                                         770K ops/sec
 Jotai              █                                          729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 19.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| MobX | 770K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         435K ops/sec
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
| Solid.js | 435K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.045ms | 1000 |
| Valtio | 8K | 0.123ms | 0.135ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.171ms | 0.198ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.4M ops/sec
🥈 Preact Signals     █                                          729K ops/sec
🥉 MobX                                                          123K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        73K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 729K | 0.001ms | 0.001ms | 1000 |
| MobX | 123K | 0.008ms | 0.010ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 73K | 0.014ms | 0.025ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.5M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        273K ops/sec
 Valtio             █                                          93K ops/sec
 MobX               █                                          79K ops/sec
 Jotai              █                                          58K ops/sec
 Zen                                                           0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 273K | 0.004ms | 0.004ms | 1000 |
| Valtio | 93K | 0.011ms | 0.019ms | 1000 |
| MobX | 79K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |
| Zen | 0 | 0.000ms | 0.000ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   14.6M ops/sec
🥈 Solid.js           ████████████████████████████████████       13.1M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.6M ops/sec
 MobX                                                          116K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.6M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 13.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.001ms | 1000 |
| MobX | 116K | 0.009ms | 0.017ms | 1000 |
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

*Generated on 2025-11-16T19:10:43.302Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
