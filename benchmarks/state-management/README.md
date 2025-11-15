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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 57.8/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (46.1/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 57.8/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 46.1/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 43.5/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 41.1/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 20.7/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 79.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zustand](https://github.com/pmndrs/zustand)** | 44.1/100 | 56% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 43.6/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 43.3/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.6/100 | 21% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.4/100 | 18% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 8.9/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.9/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 57.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 46.1/100 | 80% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 43.5/100 | 75% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 41.1/100 | 71% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 20.7/100 | 36% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 16.3/100 | 28% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.0/100 | 19% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.3/100 | 11% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **57.8** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **46.1** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **43.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **41.1** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **20.7** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **16.3** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **11.0** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   22.3M ops/sec
🥉 Zustand            ███████████████████████████████████████    22.1M ops/sec
 Redux Toolkit      ████████████████████████████████████       20.2M ops/sec
 Zen                ██████████████████████████████████         18.8M ops/sec
 MobX               █████████████████████████████              16.3M ops/sec
 Valtio             ███████████████████████████                15.0M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 20.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.0M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   11.6M ops/sec
🥈 Zustand            █████████████████████████████████          9.7M ops/sec
🥉 Solid.js           ████████████████████████████████           9.3M ops/sec
 Preact Signals     ██████████████████                         5.3M ops/sec
 Zen                ████████████████                           4.5M ops/sec
 MobX               ███                                        843K ops/sec
 Valtio             ██                                         506K ops/sec
 Jotai                                                         31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 9.7M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 9.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 843K | 0.001ms | 0.001ms | 1000 |
| Valtio | 506K | 0.003ms | 0.004ms | 1000 |
| Jotai | 31K | 0.033ms | 0.054ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Zustand            ████████████████████████████████████████   2.8M ops/sec
🥉 Redux Toolkit      ██████████████████████                     1.5M ops/sec
 Preact Signals     ██████████████████████                     1.5M ops/sec
 Zen                ████████                                   572K ops/sec
 MobX               █                                          86K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 572K | 0.002ms | 0.006ms | 1000 |
| MobX | 86K | 0.012ms | 0.025ms | 1000 |
| Valtio | 53K | 0.020ms | 0.031ms | 1000 |
| Jotai | 3K | 0.323ms | 0.773ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.3M ops/sec
🥈 Zen                ████████████████████████████████████       19.0M ops/sec
🥉 Preact Signals     ████████████████████████                   12.9M ops/sec
 Zustand            █████████                                  4.9M ops/sec
 MobX               ██████                                     3.2M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          318K ops/sec
 Redux Toolkit                                                 159K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 12.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 318K | 0.004ms | 0.009ms | 1000 |
| Redux Toolkit | 159K | 0.006ms | 0.012ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   9.5M ops/sec
🥈 Preact Signals     ████████████████████████                   5.7M ops/sec
🥉 Zen                ██████████████████                         4.3M ops/sec
 Zustand            ███                                        726K ops/sec
 MobX               ██                                         568K ops/sec
 Valtio             ██                                         368K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 9.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 726K | 0.001ms | 0.002ms | 1000 |
| MobX | 568K | 0.002ms | 0.003ms | 1000 |
| Valtio | 368K | 0.003ms | 0.004ms | 1000 |
| Jotai | 35K | 0.031ms | 0.043ms | 1000 |
| Redux Toolkit | 16K | 0.063ms | 0.082ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Preact Signals     ██████████████████████████████             2.7M ops/sec
🥉 Zen                ███████████                                1.0M ops/sec
 Zustand            █                                          77K ops/sec
 MobX               █                                          65K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 77K | 0.013ms | 0.022ms | 1000 |
| MobX | 65K | 0.015ms | 0.024ms | 1000 |
| Valtio | 41K | 0.025ms | 0.034ms | 1000 |
| Jotai | 4K | 0.293ms | 0.608ms | 1000 |
| Redux Toolkit | 2K | 0.639ms | 1.457ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   354K ops/sec
🥈 Preact Signals     ████████████████████████████████████       317K ops/sec
🥉 Zen                █████████████                              117K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         346 ops/sec
 Redux Toolkit                                                 157 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 354K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.004ms | 1000 |
| Zen | 117K | 0.009ms | 0.010ms | 1000 |
| Zustand | 8K | 0.132ms | 0.150ms | 1000 |
| MobX | 7K | 0.146ms | 0.169ms | 1000 |
| Valtio | 4K | 0.249ms | 0.284ms | 1000 |
| Jotai | 346 | 2.930ms | 4.705ms | 1000 |
| Redux Toolkit | 157 | 6.387ms | 7.378ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.5M ops/sec
🥈 Zen                ████████████████████████████               7.3M ops/sec
🥉 Solid.js           ██████████████                             3.8M ops/sec
 Zustand            █████████████                              3.5M ops/sec
 Valtio             ██                                         428K ops/sec
 Jotai              █                                          314K ops/sec
 MobX               █                                          206K ops/sec
 Redux Toolkit                                                 62K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 3.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 428K | 0.002ms | 0.003ms | 1000 |
| Jotai | 314K | 0.003ms | 0.008ms | 1000 |
| MobX | 206K | 0.005ms | 0.011ms | 1000 |
| Redux Toolkit | 62K | 0.017ms | 0.034ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.9M ops/sec
🥈 Zen                ██████████████████████████████████████     8.4M ops/sec
🥉 Zustand            ████████████████                           3.5M ops/sec
 Solid.js           █████████████                              3.0M ops/sec
 Valtio             ██████████                                 2.3M ops/sec
 MobX               ████                                       956K ops/sec
 Jotai              █                                          327K ops/sec
 Redux Toolkit                                                 57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.9M | 0.000ms | 0.001ms | 1000 |
| Zen | 8.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 956K | 0.001ms | 0.002ms | 1000 |
| Jotai | 327K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 57K | 0.018ms | 0.035ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.2M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     21.3M ops/sec
🥉 Solid.js           ████████████████████████████████           17.9M ops/sec
 Zen                █████████████████████████████              16.2M ops/sec
 Valtio             █████████████████████████                  13.6M ops/sec
 Redux Toolkit      ████████████████████████                   13.4M ops/sec
 MobX               █████████████                              7.3M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.3M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 17.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   6.8M ops/sec
🥈 Preact Signals     ████████████████████████████████           5.5M ops/sec
🥉 Zustand            ██████████████████                         3.0M ops/sec
 Valtio             ███████████████                            2.6M ops/sec
 Solid.js           ███████████████                            2.6M ops/sec
 MobX               ██████                                     1.1M ops/sec
 Jotai              ██                                         355K ops/sec
 Redux Toolkit                                                 78K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 6.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 355K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 78K | 0.013ms | 0.024ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Jotai              ████████████████████████████████████████   18K ops/sec
🥈 Valtio             ██                                         992 ops/sec
🥉 Solid.js           ██                                         975 ops/sec
 Zen                ██                                         960 ops/sec
 MobX               ██                                         936 ops/sec
 Zustand            ██                                         924 ops/sec
 Preact Signals     ██                                         923 ops/sec
 Redux Toolkit      ██                                         794 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Jotai | 18K | 0.060ms | 0.084ms | 1000 |
| Valtio | 992 | 1.096ms | 1.677ms | 1000 |
| Solid.js | 975 | 1.096ms | 1.880ms | 1000 |
| Zen | 960 | 1.123ms | 2.159ms | 1000 |
| MobX | 936 | 1.106ms | 1.721ms | 1000 |
| Zustand | 924 | 1.100ms | 1.789ms | 1000 |
| Preact Signals | 923 | 1.092ms | 1.665ms | 1000 |
| Redux Toolkit | 794 | 1.272ms | 1.986ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   104K ops/sec
🥈 Solid.js           ███████████████████████████████████████    103K ops/sec
🥉 Zen                ██████████████████████████████████████     98K ops/sec
 Zustand            ███████████████████████                    60K ops/sec
 Valtio             █████████████████                          43K ops/sec
 MobX               ██████████████                             35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 104K | 0.010ms | 0.019ms | 1000 |
| Solid.js | 103K | 0.010ms | 0.018ms | 1000 |
| Zen | 98K | 0.010ms | 0.019ms | 1000 |
| Zustand | 60K | 0.017ms | 0.029ms | 1000 |
| Valtio | 43K | 0.024ms | 0.034ms | 1000 |
| MobX | 35K | 0.030ms | 0.041ms | 1000 |
| Jotai | 6K | 0.189ms | 0.802ms | 1000 |
| Redux Toolkit | 3K | 0.346ms | 0.986ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Preact Signals     ████████████████████                       10.5M ops/sec
🥉 Zen                █████████████                              6.7M ops/sec
 Zustand            █████████                                  5.0M ops/sec
 MobX               ████                                       2.3M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         193K ops/sec
 Redux Toolkit                                                 136K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 193K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 136K | 0.008ms | 0.021ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.0M ops/sec
🥈 Zen                ██████████████████████████████████         16.0M ops/sec
🥉 Zustand            ███████                                    3.2M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          458K ops/sec
 Valtio             █                                          273K ops/sec
 Jotai                                                         161K ops/sec
 Redux Toolkit                                                 70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.002ms | 1000 |
| MobX | 458K | 0.002ms | 0.003ms | 1000 |
| Valtio | 273K | 0.005ms | 0.006ms | 1000 |
| Jotai | 161K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 70K | 0.015ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   5.1M ops/sec
🥈 Zen                █                                          114K ops/sec
🥉 Preact Signals     █                                          109K ops/sec
 Zustand            █                                          80K ops/sec
 Valtio                                                        53K ops/sec
 Redux Toolkit                                                 44K ops/sec
 MobX                                                          10K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 114K | 0.009ms | 0.019ms | 1000 |
| Preact Signals | 109K | 0.010ms | 0.019ms | 1000 |
| Zustand | 80K | 0.030ms | 0.037ms | 1000 |
| Valtio | 53K | 0.048ms | 0.052ms | 1000 |
| Redux Toolkit | 44K | 0.042ms | 0.066ms | 1000 |
| MobX | 10K | 0.160ms | 0.997ms | 1000 |
| Jotai | 7K | 0.158ms | 0.944ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   15.2M ops/sec
🥈 Zen                ███████████████████████████████            11.7M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 Solid.js           ███████                                    2.7M ops/sec
 MobX               █████                                      2.0M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 122K ops/sec
 Jotai                                                         112K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 15.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 122K | 0.009ms | 0.015ms | 1000 |
| Jotai | 112K | 0.009ms | 0.014ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.2M ops/sec
🥈 Valtio             █████████████                              715K ops/sec
🥉 MobX               ████                                       222K ops/sec
 Jotai              ███                                        170K ops/sec
 Zustand            ██                                         130K ops/sec
 Zen                ██                                         104K ops/sec
 Preact Signals     ██                                         101K ops/sec
 Redux Toolkit                                                 809 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 715K | 0.002ms | 0.007ms | 1000 |
| MobX | 222K | 0.005ms | 0.016ms | 1000 |
| Jotai | 170K | 0.006ms | 0.016ms | 1000 |
| Zustand | 130K | 0.008ms | 0.015ms | 1000 |
| Zen | 104K | 0.010ms | 0.019ms | 1000 |
| Preact Signals | 101K | 0.010ms | 0.023ms | 1000 |
| Redux Toolkit | 809 | 1.269ms | 3.278ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Zustand            ████████████████████████████████████████   318K ops/sec
🥉 Redux Toolkit      ████████████████████                       160K ops/sec
 Zen                ██████████                                 80K ops/sec
 Preact Signals     ██                                         19K ops/sec
 MobX               █                                          7K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         285 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.006ms | 1000 |
| Zen | 80K | 0.012ms | 0.019ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.065ms | 1000 |
| MobX | 7K | 0.141ms | 0.161ms | 1000 |
| Valtio | 5K | 0.225ms | 0.681ms | 1000 |
| Jotai | 285 | 3.529ms | 4.090ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   35K ops/sec
🥈 Preact Signals     ██████████                                 8K ops/sec
🥉 Zen                ███████                                    6K ops/sec
 Zustand            █                                          731 ops/sec
 MobX               █                                          528 ops/sec
 Valtio                                                        402 ops/sec
 Jotai                                                         33 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 35K | 0.034ms | 0.417ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.133ms | 1000 |
| Zen | 6K | 0.172ms | 0.190ms | 1000 |
| Zustand | 731 | 1.380ms | 1.916ms | 1000 |
| MobX | 528 | 1.904ms | 2.483ms | 1000 |
| Valtio | 402 | 2.498ms | 3.118ms | 1000 |
| Jotai | 33 | 30.010ms | 33.348ms | 1000 |
| Redux Toolkit | 14 | 71.160ms | 74.744ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.1M ops/sec
🥈 Zen                █████████████                              6.7M ops/sec
🥉 Preact Signals     ██████████                                 5.2M ops/sec
 Valtio             ████                                       2.0M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          277K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 277K | 0.005ms | 0.008ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.8M ops/sec
🥈 Preact Signals     █████████                                  5.0M ops/sec
🥉 Zen                █████████                                  4.9M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          324K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 4.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 324K | 0.003ms | 0.005ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                ████████████████████                       10.8M ops/sec
🥉 Preact Signals     █████████████                              7.4M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ████                                       2.5M ops/sec
 MobX               █                                          769K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 769K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   17.8M ops/sec
🥈 Preact Signals     ██████████████                             6.3M ops/sec
🥉 Zen                ████████████                               5.3M ops/sec
 Zustand            ████████████                               5.2M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         776K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 17.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 776K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           █████████████████                          422K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          27K ops/sec
 Zen                █                                          14K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 422K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.037ms | 0.045ms | 1000 |
| Zen | 14K | 0.075ms | 0.094ms | 1000 |
| Valtio | 8K | 0.123ms | 0.142ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.169ms | 0.208ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Zen                ██                                         1.1M ops/sec
🥉 Preact Signals     ██                                         812K ops/sec
 MobX                                                          119K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        65K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 812K | 0.001ms | 0.001ms | 1000 |
| MobX | 119K | 0.008ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 65K | 0.017ms | 0.027ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Zustand            ████████████████████████████████           2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ██                                         219K ops/sec
 Zen                ██                                         150K ops/sec
 Valtio             █                                          89K ops/sec
 MobX               █                                          77K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 219K | 0.005ms | 0.005ms | 1000 |
| Zen | 150K | 0.007ms | 0.009ms | 1000 |
| Valtio | 89K | 0.011ms | 0.020ms | 1000 |
| MobX | 77K | 0.013ms | 0.021ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Solid.js           ████████████████████████████████████████   14.5M ops/sec
🥈 Zen                ███████████████████████████                9.7M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 MobX                                                          108K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 14.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 108K | 0.011ms | 0.020ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.14.0`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-15T23:54:25.463Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
