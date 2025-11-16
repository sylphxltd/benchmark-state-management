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

- **⚡ Maximum Performance**: Solid.js - Fastest overall with 81.3/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (64.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid.js** (Score: 81.3/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 64.4/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 58.8/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 56.9/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 24.5/100)
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
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 87.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 48.6/100 | 56% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 47.0/100 | 54% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 44.6/100 | 51% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.9/100 | 19% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.3/100 | 15% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.2/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.6/100 | 3% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid.js](https://github.com/solidjs/solid)** | 81.3/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 64.4/100 | 79% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 58.8/100 | 72% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Zen](https://github.com/SylphxAI/zen)** | 56.9/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.5/100 | 30% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 17.5/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.4/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.2/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid.js](https://github.com/solidjs/solid)** | **81.3** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **64.4** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **58.8** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **56.9** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **24.5** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **17.5** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.4** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **4.2** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zen                ████████████████████████████████████████   22.5M ops/sec
🥈 Solid.js           ████████████████████████████████████████   22.4M ops/sec
🥉 Zustand            ████████████████████████████████████████   22.3M ops/sec
 Redux Toolkit      ███████████████████████████████████████    22.1M ops/sec
 Preact Signals     ███████████████████████████████████████    22.1M ops/sec
 MobX               ████████████████████████████               15.8M ops/sec
 Valtio             ██████████████████████████                 14.5M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.5M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 22.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 15.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   13.2M ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   13.2M ops/sec
🥉 Solid.js           ████████████████████████████████████       12.0M ops/sec
 Preact Signals     ██████████████████████                     7.2M ops/sec
 Zen                ██████████████████                         6.0M ops/sec
 MobX               ███                                        832K ops/sec
 Valtio             ██                                         500K ops/sec
 Jotai                                                         33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 13.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 13.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 832K | 0.001ms | 0.001ms | 1000 |
| Valtio | 500K | 0.002ms | 0.004ms | 1000 |
| Jotai | 33K | 0.031ms | 0.050ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   2.8M ops/sec
🥈 Redux Toolkit      ██████████████████████                     1.5M ops/sec
🥉 Zen                ██████████████████████                     1.5M ops/sec
 Zustand            ██████████████████████                     1.5M ops/sec
 Preact Signals     ███████████████                            1.0M ops/sec
 MobX               █                                          86K ops/sec
 Valtio             █                                          53K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| MobX | 86K | 0.012ms | 0.019ms | 1000 |
| Valtio | 53K | 0.020ms | 0.030ms | 1000 |
| Jotai | 3K | 0.319ms | 0.685ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Solid.js           ████████████████████████████████████████   21.5M ops/sec
🥈 Zen                ██████████████████████████████████         18.0M ops/sec
🥉 Preact Signals     ██████████████████████                     11.6M ops/sec
 Zustand            █████████                                  4.8M ops/sec
 MobX               ██████                                     3.3M ops/sec
 Valtio             ██████                                     3.1M ops/sec
 Jotai              █                                          376K ops/sec
 Redux Toolkit                                                 161K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 376K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 161K | 0.007ms | 0.011ms | 1000 |

#### Batch Write (10x)

```
🥇 Solid.js           ████████████████████████████████████████   9.4M ops/sec
🥈 Preact Signals     █████████████████████████                  5.9M ops/sec
🥉 Zen                ███████████████████████                    5.5M ops/sec
 Zustand            ███                                        712K ops/sec
 MobX               ██                                         433K ops/sec
 Valtio             ██                                         389K ops/sec
 Jotai                                                         35K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 9.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 712K | 0.001ms | 0.003ms | 1000 |
| MobX | 433K | 0.002ms | 0.003ms | 1000 |
| Valtio | 389K | 0.003ms | 0.003ms | 1000 |
| Jotai | 35K | 0.029ms | 0.044ms | 1000 |
| Redux Toolkit | 16K | 0.063ms | 0.087ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid.js           ████████████████████████████████████████   3.6M ops/sec
🥈 Preact Signals     ██████████████████████████████             2.7M ops/sec
🥉 Zen                ████████████████████                       1.8M ops/sec
 Zustand            █                                          76K ops/sec
 MobX               █                                          50K ops/sec
 Valtio                                                        41K ops/sec
 Jotai                                                         4K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.6M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 1.8M | 0.001ms | 0.001ms | 1000 |
| Zustand | 76K | 0.013ms | 0.023ms | 1000 |
| MobX | 50K | 0.020ms | 0.029ms | 1000 |
| Valtio | 41K | 0.025ms | 0.035ms | 1000 |
| Jotai | 4K | 0.291ms | 0.588ms | 1000 |
| Redux Toolkit | 2K | 0.628ms | 1.346ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid.js           ████████████████████████████████████████   417K ops/sec
🥈 Preact Signals     ██████████████████████████████             317K ops/sec
🥉 Zen                █████████████████████                      223K ops/sec
 Zustand            █                                          8K ops/sec
 MobX               █                                          6K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         358 ops/sec
 Redux Toolkit                                                 159 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 417K | 0.002ms | 0.004ms | 1000 |
| Preact Signals | 317K | 0.003ms | 0.003ms | 1000 |
| Zen | 223K | 0.005ms | 0.005ms | 1000 |
| Zustand | 8K | 0.133ms | 0.171ms | 1000 |
| MobX | 6K | 0.173ms | 0.193ms | 1000 |
| Valtio | 4K | 0.238ms | 0.268ms | 1000 |
| Jotai | 358 | 2.837ms | 5.246ms | 1000 |
| Redux Toolkit | 159 | 6.287ms | 7.240ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   10.1M ops/sec
🥈 Zen                █████████████████████████████              7.4M ops/sec
🥉 Solid.js           ███████████████████                        4.7M ops/sec
 Zustand            █████████████                              3.4M ops/sec
 Valtio             ██                                         460K ops/sec
 Jotai              █                                          313K ops/sec
 MobX               █                                          216K ops/sec
 Redux Toolkit                                                 64K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 10.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.4M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.002ms | 1000 |
| Valtio | 460K | 0.002ms | 0.004ms | 1000 |
| Jotai | 313K | 0.003ms | 0.006ms | 1000 |
| MobX | 216K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 64K | 0.017ms | 0.030ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.9M ops/sec
🥈 Zen                ████████████████████████████████████       7.9M ops/sec
🥉 Zustand            ███████████████                            3.4M ops/sec
 Solid.js           ██████████████                             3.1M ops/sec
 Valtio             ██████████                                 2.2M ops/sec
 MobX               ████                                       909K ops/sec
 Jotai              ██                                         339K ops/sec
 Redux Toolkit                                                 59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.4M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 909K | 0.001ms | 0.002ms | 1000 |
| Jotai | 339K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.032ms | 1000 |

#### Computed Value Access

```
🥇 Zustand            ████████████████████████████████████████   22.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    22.1M ops/sec
🥉 Solid.js           ████████████████████████████████           17.9M ops/sec
 Redux Toolkit      ███████████████████████████████            17.2M ops/sec
 Zen                █████████████████████████████              16.5M ops/sec
 Valtio             ████████████████████████                   13.3M ops/sec
 MobX               █████████                                  4.9M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.1M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 17.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.0M ops/sec
🥈 Preact Signals     ██████████████████████████████████         6.0M ops/sec
🥉 Zustand            ██████████████████                         3.1M ops/sec
 Valtio             ███████████████                            2.6M ops/sec
 Solid.js           ███████████████                            2.6M ops/sec
 MobX               ██████                                     1.1M ops/sec
 Jotai              ██                                         357K ops/sec
 Redux Toolkit                                                 81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 357K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 81K | 0.012ms | 0.024ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   105K ops/sec
🥈 Solid.js           ████████████████████████████████████████   104K ops/sec
🥉 Zen                ███████████████████████████████████████    102K ops/sec
 Zustand            ██████████████████████                     58K ops/sec
 Valtio             █████████████████                          44K ops/sec
 MobX               █████████████                              35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 105K | 0.010ms | 0.018ms | 1000 |
| Solid.js | 104K | 0.010ms | 0.017ms | 1000 |
| Zen | 102K | 0.010ms | 0.016ms | 1000 |
| Zustand | 58K | 0.017ms | 0.027ms | 1000 |
| Valtio | 44K | 0.023ms | 0.033ms | 1000 |
| MobX | 35K | 0.029ms | 0.040ms | 1000 |
| Jotai | 6K | 0.173ms | 0.225ms | 1000 |
| Redux Toolkit | 3K | 0.359ms | 0.576ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid.js           ████████████████████████████████████████   21.1M ops/sec
🥈 Preact Signals     ████████████████████                       10.6M ops/sec
🥉 Zen                ██████████                                 5.2M ops/sec
 Zustand            █████████                                  5.0M ops/sec
 MobX               ████                                       2.0M ops/sec
 Valtio             ██                                         1.1M ops/sec
 Jotai                                                         196K ops/sec
 Redux Toolkit                                                 140K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| Jotai | 196K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 140K | 0.008ms | 0.014ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   19.8M ops/sec
🥈 Zen                ██████████████████████████████             14.9M ops/sec
🥉 Zustand            ███████                                    3.3M ops/sec
 Solid.js           ███                                        1.3M ops/sec
 MobX               █                                          486K ops/sec
 Valtio             █                                          286K ops/sec
 Jotai                                                         172K ops/sec
 Redux Toolkit                                                 71K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 1.3M | 0.001ms | 0.001ms | 1000 |
| MobX | 486K | 0.002ms | 0.003ms | 1000 |
| Valtio | 286K | 0.004ms | 0.005ms | 1000 |
| Jotai | 172K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 71K | 0.015ms | 0.028ms | 1000 |

#### Memory Management

```
🥇 Solid.js           ████████████████████████████████████████   4.8M ops/sec
🥈 Preact Signals     █                                          129K ops/sec
🥉 Zen                █                                          110K ops/sec
 Zustand            █                                          88K ops/sec
 Valtio                                                        57K ops/sec
 Redux Toolkit                                                 43K ops/sec
 MobX                                                          13K ops/sec
 Jotai                                                         8K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 4.8M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 129K | 0.009ms | 0.016ms | 1000 |
| Zen | 110K | 0.010ms | 0.014ms | 1000 |
| Zustand | 88K | 0.018ms | 0.039ms | 1000 |
| Valtio | 57K | 0.047ms | 0.047ms | 1000 |
| Redux Toolkit | 43K | 0.063ms | 0.058ms | 1000 |
| MobX | 13K | 0.119ms | 1.183ms | 1000 |
| Jotai | 8K | 0.154ms | 0.791ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   12.9M ops/sec
🥈 Zen                ███████████████████████████████████        11.3M ops/sec
🥉 Zustand            ███████████                                3.5M ops/sec
 Solid.js           █████████                                  2.8M ops/sec
 MobX               ██████                                     2.1M ops/sec
 Valtio             ███                                        989K ops/sec
 Redux Toolkit                                                 121K ops/sec
 Jotai                                                         105K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.3M | 0.001ms | 0.000ms | 1000 |
| Zustand | 3.5M | 0.000ms | 0.001ms | 1000 |
| Solid.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 989K | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 121K | 0.008ms | 0.017ms | 1000 |
| Jotai | 105K | 0.010ms | 0.015ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Solid.js           ████████████████████████████████████████   2.5M ops/sec
🥈 Valtio             █████████████                              836K ops/sec
🥉 MobX               ████                                       238K ops/sec
 Jotai              ███                                        166K ops/sec
 Preact Signals     ██                                         135K ops/sec
 Zen                ██                                         134K ops/sec
 Zustand            █                                          87K ops/sec
 Redux Toolkit                                                 822 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 2.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 836K | 0.001ms | 0.006ms | 1000 |
| MobX | 238K | 0.005ms | 0.019ms | 1000 |
| Jotai | 166K | 0.007ms | 0.020ms | 1000 |
| Preact Signals | 135K | 0.008ms | 0.013ms | 1000 |
| Zen | 134K | 0.008ms | 0.014ms | 1000 |
| Zustand | 87K | 0.012ms | 0.021ms | 1000 |
| Redux Toolkit | 822 | 1.243ms | 3.008ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   318K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   318K ops/sec
🥉 Zustand            ████████████████████                       160K ops/sec
 Zen                ███████                                    54K ops/sec
 Preact Signals     ██                                         19K ops/sec
 Valtio             █                                          4K ops/sec
 MobX                                                          4K ops/sec
 Jotai                                                         287 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 318K | 0.003ms | 0.003ms | 1000 |
| Redux Toolkit | 318K | 0.003ms | 0.003ms | 1000 |
| Zustand | 160K | 0.006ms | 0.007ms | 1000 |
| Zen | 54K | 0.019ms | 0.026ms | 1000 |
| Preact Signals | 19K | 0.053ms | 0.060ms | 1000 |
| Valtio | 4K | 0.251ms | 0.647ms | 1000 |
| MobX | 4K | 0.282ms | 0.293ms | 1000 |
| Jotai | 287 | 3.501ms | 4.007ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid.js           ████████████████████████████████████████   46K ops/sec
🥈 Zen                █████████                                  10K ops/sec
🥉 Preact Signals     ███████                                    8K ops/sec
 Zustand            █                                          736 ops/sec
 MobX                                                          457 ops/sec
 Valtio                                                        402 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 14 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 46K | 0.028ms | 0.358ms | 1000 |
| Zen | 10K | 0.097ms | 0.105ms | 1000 |
| Preact Signals | 8K | 0.119ms | 0.136ms | 1000 |
| Zustand | 736 | 1.374ms | 1.916ms | 1000 |
| MobX | 457 | 2.196ms | 2.792ms | 1000 |
| Valtio | 402 | 2.506ms | 3.199ms | 1000 |
| Jotai | 34 | 29.560ms | 33.470ms | 1000 |
| Redux Toolkit | 14 | 69.500ms | 72.607ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Solid.js           ████████████████████████████████████████   20.3M ops/sec
🥈 Zen                █████████████████████████████              14.6M ops/sec
🥉 Preact Signals     ██████████                                 5.0M ops/sec
 Valtio             ████                                       1.9M ops/sec
 Zustand            ██                                         1.0M ops/sec
 MobX               █                                          279K ops/sec
 Jotai                                                         110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 20.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 279K | 0.004ms | 0.005ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                █████████████████████████████              16.2M ops/sec
🥉 Preact Signals     █████████                                  5.1M ops/sec
 Zustand            ████                                       2.0M ops/sec
 Valtio             ███                                        1.8M ops/sec
 MobX               █                                          325K ops/sec
 Jotai                                                         156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.001ms | 1000 |
| MobX | 325K | 0.005ms | 0.007ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Solid.js           ████████████████████████████████████████   22.1M ops/sec
🥈 Zen                ████████████████████████████               15.6M ops/sec
🥉 Preact Signals     ██████████████                             7.5M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Valtio             ████                                       2.4M ops/sec
 MobX               █                                          792K ops/sec
 Jotai              █                                          524K ops/sec
 Redux Toolkit      █                                          293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 22.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 792K | 0.001ms | 0.002ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Solid.js           ████████████████████████████████████████   18.8M ops/sec
🥈 Preact Signals     ██████████████                             6.7M ops/sec
🥉 Zustand            ███████████                                5.2M ops/sec
 Zen                ███████                                    3.4M ops/sec
 Valtio             ██                                         1.0M ops/sec
 MobX               ██                                         760K ops/sec
 Jotai              ██                                         729K ops/sec
 Redux Toolkit      █                                          344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 18.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 760K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Solid.js           ██████████████████                         435K ops/sec
🥉 Redux Toolkit      █████████                                  230K ops/sec
 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Zen                                                           7K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Solid.js | 435K | 0.002ms | 0.002ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.036ms | 0.045ms | 1000 |
| Valtio | 8K | 0.124ms | 0.179ms | 1000 |
| Zen | 7K | 0.147ms | 0.204ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.174ms | 0.215ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Solid.js           ████████████████████████████████████████   21.8M ops/sec
🥈 Zen                ██████████████████████████████             16.6M ops/sec
🥉 Preact Signals     █                                          801K ops/sec
 MobX                                                          117K ops/sec
 Zustand                                                       112K ops/sec
 Valtio                                                        72K ops/sec
 Jotai                                                         14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 21.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 801K | 0.001ms | 0.001ms | 1000 |
| MobX | 117K | 0.009ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 72K | 0.014ms | 0.031ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Solid.js           ████████████████████████████████████████   3.7M ops/sec
🥈 Zustand            ███████████████████████████████            2.9M ops/sec
🥉 Redux Toolkit      ███                                        290K ops/sec
 Preact Signals     ███                                        278K ops/sec
 Valtio             █                                          92K ops/sec
 MobX               █                                          80K ops/sec
 Zen                █                                          76K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid.js | 3.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 278K | 0.004ms | 0.004ms | 1000 |
| Valtio | 92K | 0.012ms | 0.019ms | 1000 |
| MobX | 80K | 0.013ms | 0.022ms | 1000 |
| Zen | 76K | 0.014ms | 0.022ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   14.2M ops/sec
🥈 Solid.js           ███████████████████████████████████        12.5M ops/sec
🥉 Preact Signals     ████████                                   2.9M ops/sec
 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.5M ops/sec
 Jotai                                                         107K ops/sec
 MobX                                                          107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.2M | 0.000ms | 0.000ms | 1000 |
| Solid.js | 12.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| Jotai | 107K | 0.009ms | 0.012ms | 1000 |
| MobX | 107K | 0.012ms | 0.029ms | 1000 |
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
- **[Zen](https://github.com/SylphxAI/zen)** (`3.19.2`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
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

*Generated on 2025-11-16T05:19:32.294Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
