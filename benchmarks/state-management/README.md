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
- **⚖️ Best Balance**: Zustand - Great performance (68.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Preact Signals** (Score: 82.9/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 68.4/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 68.3/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 28.7/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 18.1/100)
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
| 🥇 1 | **[Preact Signals](https://github.com/preactjs/signals)** | 72.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 72.2/100 | 99% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 56.5/100 | 78% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 26.3/100 | 36% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 21.6/100 | 30% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 11.8/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.9/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Preact Signals](https://github.com/preactjs/signals)** | 82.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥈 2 | **[Zustand](https://github.com/pmndrs/zustand)** | 68.4/100 | 82% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 68.3/100 | 82% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 28.7/100 | 35% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 18.1/100 | 22% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.0/100 | 16% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.3/100 | 6% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Preact Signals](https://github.com/preactjs/signals)** | **82.9** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **68.4** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **68.3** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **28.7** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **18.1** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **13.0** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **5.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   22.3M ops/sec
🥈 Zen                ████████████████████████████████████████   22.2M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   22.2M ops/sec
 Redux Toolkit      ████████████████████████████████████████   22.0M ops/sec
 MobX               ████████████████████████████               15.8M ops/sec
 Valtio             ██████████████████████████                 14.6M ops/sec
 Jotai              ████                                       2.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 22.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 15.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.6M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.4M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   13.0M ops/sec
🥈 Zustand            ██████████████████████████████████████     12.5M ops/sec
🥉 Preact Signals     ██████████████████████                     7.2M ops/sec
 Zen                █████████                                  2.8M ops/sec
 MobX               ███                                        888K ops/sec
 Valtio             █                                          468K ops/sec
 Jotai                                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 13.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 12.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 2.8M | 0.000ms | 0.000ms | 1000 |
| MobX | 888K | 0.001ms | 0.001ms | 1000 |
| Valtio | 468K | 0.002ms | 0.004ms | 1000 |
| Jotai | 32K | 0.032ms | 0.048ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Redux Toolkit      ████████████████████████████████████████   1.5M ops/sec
🥈 Zustand            ████████████████████████████████████████   1.5M ops/sec
🥉 Preact Signals     ████████████████████████████████████████   1.5M ops/sec
 Zen                ██████████████                             522K ops/sec
 MobX               ██                                         91K ops/sec
 Valtio             █                                          52K ops/sec
 Jotai                                                         3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Zen | 522K | 0.002ms | 0.004ms | 1000 |
| MobX | 91K | 0.011ms | 0.018ms | 1000 |
| Valtio | 52K | 0.020ms | 0.031ms | 1000 |
| Jotai | 3K | 0.329ms | 0.749ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Preact Signals     ████████████████████████████████████████   21.3M ops/sec
🥈 Zen                ████████████████████████████████████████   21.2M ops/sec
🥉 Zustand            █████████                                  5.0M ops/sec
 MobX               ███████                                    3.5M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          360K ops/sec
 Redux Toolkit                                                 155K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 21.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 360K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 155K | 0.007ms | 0.010ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   13.4M ops/sec
🥈 Preact Signals     █████████████████                          5.5M ops/sec
🥉 Zustand            ██                                         696K ops/sec
 MobX               ██                                         542K ops/sec
 Valtio             █                                          383K ops/sec
 Jotai                                                         37K ops/sec
 Redux Toolkit                                                 16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 13.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 5.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 696K | 0.001ms | 0.003ms | 1000 |
| MobX | 542K | 0.002ms | 0.005ms | 1000 |
| Valtio | 383K | 0.003ms | 0.004ms | 1000 |
| Jotai | 37K | 0.027ms | 0.039ms | 1000 |
| Redux Toolkit | 16K | 0.065ms | 0.100ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   3.1M ops/sec
🥈 Preact Signals     █████████████                              1.0M ops/sec
🥉 Zustand            █                                          73K ops/sec
 MobX               █                                          69K ops/sec
 Valtio             █                                          41K ops/sec
 Jotai                                                         3K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.001ms | 1000 |
| Zustand | 73K | 0.014ms | 0.023ms | 1000 |
| MobX | 69K | 0.015ms | 0.025ms | 1000 |
| Valtio | 41K | 0.025ms | 0.035ms | 1000 |
| Jotai | 3K | 0.301ms | 0.593ms | 1000 |
| Redux Toolkit | 2K | 0.654ms | 1.279ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   389K ops/sec
🥈 Preact Signals     ████████████████████████████████           313K ops/sec
🥉 Zustand            █                                          8K ops/sec
 MobX               █                                          7K ops/sec
 Valtio                                                        4K ops/sec
 Jotai                                                         345 ops/sec
 Redux Toolkit                                                 152 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 389K | 0.003ms | 0.003ms | 1000 |
| Preact Signals | 313K | 0.003ms | 0.005ms | 1000 |
| Zustand | 8K | 0.132ms | 0.161ms | 1000 |
| MobX | 7K | 0.145ms | 0.166ms | 1000 |
| Valtio | 4K | 0.240ms | 0.308ms | 1000 |
| Jotai | 345 | 2.948ms | 5.246ms | 1000 |
| Redux Toolkit | 152 | 6.578ms | 7.771ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   11.2M ops/sec
🥈 Zen                █████████████████████████████████████      10.5M ops/sec
🥉 Zustand            █████████████                              3.6M ops/sec
 Valtio             ██                                         434K ops/sec
 Jotai              █                                          323K ops/sec
 MobX               █                                          203K ops/sec
 Redux Toolkit                                                 60K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.5M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 434K | 0.002ms | 0.004ms | 1000 |
| Jotai | 323K | 0.003ms | 0.007ms | 1000 |
| MobX | 203K | 0.005ms | 0.012ms | 1000 |
| Redux Toolkit | 60K | 0.017ms | 0.032ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   10.0M ops/sec
🥈 Preact Signals     █████████████████████████                  6.2M ops/sec
🥉 Zustand            ████████████                               2.9M ops/sec
 Valtio             ████████                                   1.9M ops/sec
 MobX               ████                                       943K ops/sec
 Jotai              █                                          323K ops/sec
 Redux Toolkit                                                 58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.9M | 0.001ms | 0.001ms | 1000 |
| MobX | 943K | 0.001ms | 0.002ms | 1000 |
| Jotai | 323K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 58K | 0.018ms | 0.034ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   22.8M ops/sec
🥈 Zustand            ███████████████████████████████████████    22.5M ops/sec
🥉 Preact Signals     █████████████████████████████████████      21.2M ops/sec
 Redux Toolkit      ████████████████████████████               15.8M ops/sec
 Valtio             ████████████████████████                   13.4M ops/sec
 MobX               ██████████████                             8.2M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 21.2M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 15.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 13.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 8.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   7.3M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    7.1M ops/sec
🥉 Zustand            █████████████████                          3.2M ops/sec
 Valtio             ███████████████                            2.8M ops/sec
 MobX               ███████                                    1.3M ops/sec
 Jotai              ██                                         342K ops/sec
 Redux Toolkit                                                 80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.002ms | 1000 |
| Jotai | 342K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 80K | 0.013ms | 0.026ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   103K ops/sec
🥈 Zen                ███████████████████████████████████████    101K ops/sec
🥉 Zustand            ███████████████████████                    59K ops/sec
 Valtio             █████████████████                          43K ops/sec
 MobX               █████████████                              35K ops/sec
 Jotai              ██                                         6K ops/sec
 Redux Toolkit      █                                          3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 103K | 0.010ms | 0.013ms | 1000 |
| Zen | 101K | 0.010ms | 0.013ms | 1000 |
| Zustand | 59K | 0.017ms | 0.027ms | 1000 |
| Valtio | 43K | 0.024ms | 0.033ms | 1000 |
| MobX | 35K | 0.030ms | 0.043ms | 1000 |
| Jotai | 6K | 0.176ms | 0.316ms | 1000 |
| Redux Toolkit | 3K | 0.359ms | 1.079ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Preact Signals     ████████████████████████████████████████   11.6M ops/sec
🥈 Zen                ██████████████████████████                 7.4M ops/sec
🥉 Zustand            █████████████████                          4.8M ops/sec
 MobX               ████████                                   2.4M ops/sec
 Valtio             ████                                       1.1M ops/sec
 Jotai              █                                          197K ops/sec
 Redux Toolkit                                                 136K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 197K | 0.005ms | 0.008ms | 1000 |
| Redux Toolkit | 136K | 0.008ms | 0.012ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   14.2M ops/sec
🥈 Zen                █████████████████████████████████          11.6M ops/sec
🥉 Zustand            ████████                                   3.0M ops/sec
 MobX               █                                          434K ops/sec
 Valtio             █                                          269K ops/sec
 Jotai                                                         154K ops/sec
 Redux Toolkit                                                 67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.0M | 0.000ms | 0.001ms | 1000 |
| MobX | 434K | 0.002ms | 0.004ms | 1000 |
| Valtio | 269K | 0.006ms | 0.005ms | 1000 |
| Jotai | 154K | 0.007ms | 0.012ms | 1000 |
| Redux Toolkit | 67K | 0.015ms | 0.029ms | 1000 |

#### Memory Management

```
🥇 Preact Signals     ████████████████████████████████████████   125K ops/sec
🥈 Zustand            ███████████████████████████████            97K ops/sec
🥉 Zen                ██████████████████████████████             92K ops/sec
 Valtio             ████████████████                           49K ops/sec
 Redux Toolkit      ██████████████                             43K ops/sec
 MobX               ████                                       12K ops/sec
 Jotai              ██                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 125K | 0.009ms | 0.017ms | 1000 |
| Zustand | 97K | 0.085ms | 0.039ms | 1000 |
| Zen | 92K | 0.012ms | 0.020ms | 1000 |
| Valtio | 49K | 0.120ms | 0.039ms | 1000 |
| Redux Toolkit | 43K | 0.042ms | 0.055ms | 1000 |
| MobX | 12K | 0.106ms | 0.759ms | 1000 |
| Jotai | 7K | 0.149ms | 0.593ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Preact Signals     ████████████████████████████████████████   14.8M ops/sec
🥈 Zen                █████████████████████████████████████      13.9M ops/sec
🥉 Zustand            ██████████                                 3.6M ops/sec
 MobX               █████                                      1.8M ops/sec
 Valtio             ███                                        1.1M ops/sec
 Redux Toolkit                                                 120K ops/sec
 Jotai                                                         106K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 14.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 13.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 1.8M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.002ms | 1000 |
| Redux Toolkit | 120K | 0.009ms | 0.012ms | 1000 |
| Jotai | 106K | 0.011ms | 0.018ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Valtio             ████████████████████████████████████████   910K ops/sec
🥈 MobX               ███████████                                242K ops/sec
🥉 Jotai              ███████                                    159K ops/sec
 Preact Signals     ██████                                     128K ops/sec
 Zen                ████                                       102K ops/sec
 Zustand            ████                                       93K ops/sec
 Redux Toolkit                                                 830 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 910K | 0.001ms | 0.004ms | 1000 |
| MobX | 242K | 0.005ms | 0.012ms | 1000 |
| Jotai | 159K | 0.010ms | 0.020ms | 1000 |
| Preact Signals | 128K | 0.008ms | 0.014ms | 1000 |
| Zen | 102K | 0.010ms | 0.020ms | 1000 |
| Zustand | 93K | 0.012ms | 0.023ms | 1000 |
| Redux Toolkit | 830 | 1.222ms | 1.665ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   160K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████████   160K ops/sec
🥉 Zen                █████████████                              53K ops/sec
 Preact Signals     █████                                      20K ops/sec
 MobX               ██                                         8K ops/sec
 Valtio             █                                          5K ops/sec
 Jotai                                                         284 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 160K | 0.006ms | 0.006ms | 1000 |
| Redux Toolkit | 160K | 0.006ms | 0.007ms | 1000 |
| Zen | 53K | 0.019ms | 0.028ms | 1000 |
| Preact Signals | 20K | 0.050ms | 0.057ms | 1000 |
| MobX | 8K | 0.125ms | 0.133ms | 1000 |
| Valtio | 5K | 0.200ms | 0.360ms | 1000 |
| Jotai | 284 | 3.527ms | 4.175ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   10K ops/sec
🥈 Preact Signals     ██████████████████████████████████         9K ops/sec
🥉 Zustand            ███                                        744 ops/sec
 MobX               ██                                         557 ops/sec
 Valtio             ██                                         418 ops/sec
 Jotai                                                         34 ops/sec
 Redux Toolkit                                                 15 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 10K | 0.097ms | 0.105ms | 1000 |
| Preact Signals | 9K | 0.115ms | 0.124ms | 1000 |
| Zustand | 744 | 1.352ms | 1.936ms | 1000 |
| MobX | 557 | 1.802ms | 2.398ms | 1000 |
| Valtio | 418 | 2.399ms | 3.018ms | 1000 |
| Jotai | 34 | 29.532ms | 32.541ms | 1000 |
| Redux Toolkit | 15 | 67.068ms | 70.480ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   5.3M ops/sec
🥈 Valtio             ████████████████                           2.1M ops/sec
🥉 Zen                ████████████                               1.6M ops/sec
 Zustand            ████████                                   1.0M ops/sec
 MobX               ██                                         262K ops/sec
 Jotai              █                                          110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.6M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| MobX | 262K | 0.006ms | 0.009ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   5.2M ops/sec
🥈 Zustand            ████████████████                           2.0M ops/sec
🥉 Zen                ██████████████                             1.9M ops/sec
 Valtio             ███████████                                1.5M ops/sec
 MobX               ██                                         309K ops/sec
 Jotai              █                                          156K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.9M | 0.001ms | 0.001ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| MobX | 309K | 0.004ms | 0.006ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   7.6M ops/sec
🥈 Zustand            █████████████████████████                  4.7M ops/sec
🥉 Zen                ████████████████████████                   4.5M ops/sec
 Valtio             █████████████                              2.6M ops/sec
 MobX               ████                                       833K ops/sec
 Jotai              ███                                        524K ops/sec
 Redux Toolkit      ██                                         293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 833K | 0.003ms | 0.003ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Preact Signals     ████████████████████████████████████████   6.5M ops/sec
🥈 Zen                █████████████████████████████████████      6.0M ops/sec
🥉 Zustand            ████████████████████████████████           5.2M ops/sec
 Valtio             ███████                                    1.1M ops/sec
 MobX               █████                                      772K ops/sec
 Jotai              ████                                       729K ops/sec
 Redux Toolkit      ██                                         344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 6.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 1.1M | 0.001ms | 0.001ms | 1000 |
| MobX | 772K | 0.001ms | 0.002ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Redux Toolkit      █████████                                  230K ops/sec
🥉 Preact Signals     █                                          27K ops/sec
 Valtio                                                        8K ops/sec
 Jotai                                                         7K ops/sec
 MobX                                                          6K ops/sec
 Zen                                                           5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 27K | 0.036ms | 0.045ms | 1000 |
| Valtio | 8K | 0.127ms | 0.180ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| MobX | 6K | 0.174ms | 0.194ms | 1000 |
| Zen | 5K | 0.221ms | 0.243ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   742K ops/sec
🥈 Zen                █████████                                  162K ops/sec
🥉 MobX               ███████                                    122K ops/sec
 Zustand            ██████                                     112K ops/sec
 Valtio             ████                                       72K ops/sec
 Jotai              █                                          14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 742K | 0.001ms | 0.001ms | 1000 |
| Zen | 162K | 0.007ms | 0.008ms | 1000 |
| MobX | 122K | 0.008ms | 0.009ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Valtio | 72K | 0.014ms | 0.026ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Zustand            ████████████████████████████████████████   2.9M ops/sec
🥈 Redux Toolkit      ████                                       290K ops/sec
🥉 Preact Signals     ████                                       284K ops/sec
 Zen                ██                                         129K ops/sec
 Valtio             █                                          93K ops/sec
 MobX               █                                          80K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 284K | 0.004ms | 0.004ms | 1000 |
| Zen | 129K | 0.008ms | 0.010ms | 1000 |
| Valtio | 93K | 0.011ms | 0.019ms | 1000 |
| MobX | 80K | 0.013ms | 0.023ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   14.2M ops/sec
🥈 Preact Signals     ████████                                   3.0M ops/sec
🥉 Zustand            ██████                                     2.0M ops/sec
 Valtio             ████                                       1.6M ops/sec
 MobX                                                          113K ops/sec
 Jotai                                                         107K ops/sec
 Redux Toolkit                                                 61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.001ms | 1000 |
| MobX | 113K | 0.011ms | 0.019ms | 1000 |
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

*Generated on 2025-11-18T06:26:52.062Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
