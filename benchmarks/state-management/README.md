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

- **⚡ Maximum Performance**: Zustand - Fastest overall with 71.1/100 score
- **⚖️ Best Balance**: Zen - Great performance (53.4/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zustand** (Score: 71.1/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Zen** (Score: 53.4/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 49.8/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen Ultimate** (Score: 46.5/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/zen-ultimate)


**Valtio** (Score: 25.4/100)
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
| 🥇 1 | **[Zustand](https://github.com/pmndrs/zustand)** | 62.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 53.9/100 | 86% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Zen Ultimate](#)** | 44.8/100 | 72% of fastest | [📦](#) [📊](#) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 44.1/100 | 71% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.4/100 | 28% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 14.1/100 | 23% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.4/100 | 12% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.2/100 | 7% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zustand](https://github.com/pmndrs/zustand)** | 71.1/100 | 100% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 53.4/100 | 75% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 49.8/100 | 70% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zen Ultimate](#)** | 46.5/100 | 65% of fastest | [📦](https://www.npmjs.com/package/zen-ultimate) [📊](https://bundlephobia.com/package/zen-ultimate) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.4/100 | 36% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 13.9/100 | 19% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.8/100 | 11% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  8 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.4/100 | 10% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zustand](https://github.com/pmndrs/zustand)** | **71.1** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Zen](https://github.com/SylphxAI/zen)** | **53.4** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **49.8** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen Ultimate](#)** | **46.5** | N/A | State management solution... | General purpose... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.4** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **13.9** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **7.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **7.4** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   14.7M ops/sec
🥈 Zen                ██████████████████████████                 9.7M ops/sec
🥉 Preact Signals     ███████████████████                        6.9M ops/sec
 Zen Ultimate       ██████████████████                         6.7M ops/sec
 MobX               █████████                                  3.2M ops/sec
 Valtio             ██████                                     2.4M ops/sec
 Redux Toolkit      ██████                                     2.3M ops/sec
 Jotai              ███                                        921K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 14.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.9M | 0.000ms | 0.001ms | 1000 |
| Zen Ultimate | 6.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.003ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.003ms | 1000 |
| Redux Toolkit | 2.3M | 0.000ms | 0.003ms | 1000 |
| Jotai | 921K | 0.001ms | 0.009ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   2.8M ops/sec
🥈 Zen                ██████████████████████████████             2.1M ops/sec
🥉 Redux Toolkit      █████████████████                          1.2M ops/sec
 Preact Signals     █████████████████                          1.2M ops/sec
 MobX               █████████████                              894K ops/sec
 Zen Ultimate       ████████████                               841K ops/sec
 Valtio             ████                                       260K ops/sec
 Jotai              █                                          47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.8M | 0.000ms | 0.004ms | 1000 |
| Zen | 2.1M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 1.2M | 0.001ms | 0.006ms | 1000 |
| Preact Signals | 1.2M | 0.001ms | 0.007ms | 1000 |
| MobX | 894K | 0.001ms | 0.004ms | 1000 |
| Zen Ultimate | 841K | 0.001ms | 0.006ms | 1000 |
| Valtio | 260K | 0.004ms | 0.015ms | 1000 |
| Jotai | 47K | 0.021ms | 0.061ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Zustand            ████████████████████████████████████████   1.4M ops/sec
🥈 Redux Toolkit      ████████████████████████████               994K ops/sec
🥉 Zen Ultimate       ███████████████                            537K ops/sec
 Zen                █████████████                              448K ops/sec
 Preact Signals     ████████                                   278K ops/sec
 MobX               ████                                       152K ops/sec
 Valtio             ██                                         70K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 1.4M | 0.001ms | 0.005ms | 1000 |
| Redux Toolkit | 994K | 0.001ms | 0.005ms | 1000 |
| Zen Ultimate | 537K | 0.002ms | 0.005ms | 1000 |
| Zen | 448K | 0.002ms | 0.003ms | 1000 |
| Preact Signals | 278K | 0.004ms | 0.007ms | 1000 |
| MobX | 152K | 0.007ms | 0.010ms | 1000 |
| Valtio | 70K | 0.014ms | 0.024ms | 1000 |
| Jotai | 7K | 0.148ms | 0.405ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   12.7M ops/sec
🥈 Zen Ultimate       █████████████████████████                  7.9M ops/sec
🥉 Preact Signals     ███████████████████████                    7.3M ops/sec
 Zustand            █████████████████                          5.3M ops/sec
 Valtio             ███████                                    2.2M ops/sec
 MobX               ████                                       1.2M ops/sec
 Jotai              ██                                         521K ops/sec
 Redux Toolkit                                                 154K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 12.7M | 0.000ms | 0.000ms | 1000 |
| Zen Ultimate | 7.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.002ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.007ms | 1000 |
| Jotai | 521K | 0.002ms | 0.008ms | 1000 |
| Redux Toolkit | 154K | 0.006ms | 0.031ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen Ultimate       ████████████████████████████████████████   2.1M ops/sec
🥈 Zen                ███████████████████████████████████████    2.0M ops/sec
🥉 Preact Signals     █████████████████                          854K ops/sec
 Valtio             █████████                                  472K ops/sec
 Zustand            █████████                                  469K ops/sec
 MobX               ████████                                   393K ops/sec
 Jotai              ██                                         84K ops/sec
 Redux Toolkit      █                                          33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Ultimate | 2.1M | 0.000ms | 0.003ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 854K | 0.001ms | 0.002ms | 1000 |
| Valtio | 472K | 0.002ms | 0.006ms | 1000 |
| Zustand | 469K | 0.002ms | 0.004ms | 1000 |
| MobX | 393K | 0.003ms | 0.005ms | 1000 |
| Jotai | 84K | 0.012ms | 0.017ms | 1000 |
| Redux Toolkit | 33K | 0.030ms | 0.075ms | 1000 |

#### Burst Write (100x)

```
🥇 Preact Signals     ████████████████████████████████████████   1.1M ops/sec
🥈 Zen Ultimate       ██████████████████████████                 724K ops/sec
🥉 Zen                ████████████                               328K ops/sec
 Zustand            █████                                      142K ops/sec
 MobX               ████                                       103K ops/sec
 Valtio             ███                                        79K ops/sec
 Jotai                                                         10K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 1.1M | 0.001ms | 0.005ms | 1000 |
| Zen Ultimate | 724K | 0.001ms | 0.009ms | 1000 |
| Zen | 328K | 0.003ms | 0.010ms | 1000 |
| Zustand | 142K | 0.007ms | 0.009ms | 1000 |
| MobX | 103K | 0.010ms | 0.026ms | 1000 |
| Valtio | 79K | 0.013ms | 0.024ms | 1000 |
| Jotai | 10K | 0.101ms | 0.507ms | 1000 |
| Redux Toolkit | 4K | 0.232ms | 0.638ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen Ultimate       ████████████████████████████████████████   279K ops/sec
🥈 Zen                █████████████████████████████████████      260K ops/sec
🥉 Preact Signals     ██████████████████████████                 179K ops/sec
 Zustand            ███                                        18K ops/sec
 MobX               ██                                         15K ops/sec
 Valtio             █                                          10K ops/sec
 Jotai                                                         1K ops/sec
 Redux Toolkit                                                 439 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Ultimate | 279K | 0.004ms | 0.009ms | 1000 |
| Zen | 260K | 0.004ms | 0.009ms | 1000 |
| Preact Signals | 179K | 0.006ms | 0.012ms | 1000 |
| Zustand | 18K | 0.056ms | 0.070ms | 1000 |
| MobX | 15K | 0.068ms | 0.101ms | 1000 |
| Valtio | 10K | 0.103ms | 0.166ms | 1000 |
| Jotai | 1K | 0.948ms | 1.915ms | 1000 |
| Redux Toolkit | 439 | 2.276ms | 2.989ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Preact Signals     ████████████████████████████████████████   7.3M ops/sec
🥈 Zustand            ███████████████████████████                4.9M ops/sec
🥉 Zen                ███████████████████████                    4.2M ops/sec
 Zen Ultimate       █████████████████████                      3.9M ops/sec
 Jotai              ████                                       812K ops/sec
 Valtio             ███                                        538K ops/sec
 MobX               ██                                         328K ops/sec
 Redux Toolkit      █                                          129K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.9M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.2M | 0.000ms | 0.001ms | 1000 |
| Zen Ultimate | 3.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 812K | 0.001ms | 0.003ms | 1000 |
| Valtio | 538K | 0.002ms | 0.011ms | 1000 |
| MobX | 328K | 0.003ms | 0.013ms | 1000 |
| Redux Toolkit | 129K | 0.008ms | 0.029ms | 1000 |

#### Array Update

```
🥇 Zen Ultimate       ████████████████████████████████████████   7.3M ops/sec
🥈 Zustand            ████████████████████████                   4.4M ops/sec
🥉 Preact Signals     ██████████████████████                     4.0M ops/sec
 Zen                ████████████████████                       3.6M ops/sec
 Valtio             █████████████                              2.4M ops/sec
 Jotai              █████                                      847K ops/sec
 MobX               ████                                       743K ops/sec
 Redux Toolkit      █                                          131K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Ultimate | 7.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.4M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 4.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.6M | 0.000ms | 0.002ms | 1000 |
| Valtio | 2.4M | 0.000ms | 0.002ms | 1000 |
| Jotai | 847K | 0.001ms | 0.004ms | 1000 |
| MobX | 743K | 0.001ms | 0.010ms | 1000 |
| Redux Toolkit | 131K | 0.008ms | 0.031ms | 1000 |

#### Computed Value Access

```
🥇 Zen Ultimate       ████████████████████████████████████████   19.1M ops/sec
🥈 Zen                █████████████████████████████████          15.6M ops/sec
🥉 Zustand            ███████████████████████████                12.8M ops/sec
 Redux Toolkit      █████████████                              6.4M ops/sec
 Valtio             █████████████                              6.2M ops/sec
 Preact Signals     █████████                                  4.3M ops/sec
 Jotai              █████                                      2.5M ops/sec
 MobX               █████                                      2.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Ultimate | 19.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 15.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 12.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 6.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 6.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 4.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.004ms | 1000 |

#### Nested Object Update

```
🥇 Valtio             ████████████████████████████████████████   4.2M ops/sec
🥈 Zen Ultimate       █████████████████████████████████████      3.8M ops/sec
🥉 Zen                ███████████████████████████████            3.2M ops/sec
 Zustand            ██████████████████████████████             3.2M ops/sec
 Preact Signals     █████████████████████████████              3.1M ops/sec
 MobX               ████████                                   834K ops/sec
 Jotai              ██████                                     673K ops/sec
 Redux Toolkit      █                                          127K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 4.2M | 0.000ms | 0.001ms | 1000 |
| Zen Ultimate | 3.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.2M | 0.000ms | 0.003ms | 1000 |
| Preact Signals | 3.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 834K | 0.001ms | 0.010ms | 1000 |
| Jotai | 673K | 0.001ms | 0.005ms | 1000 |
| Redux Toolkit | 127K | 0.008ms | 0.041ms | 1000 |

### Async Operations

#### Concurrent Updates (50x)

```
🥇 Preact Signals     ████████████████████████████████████████   167K ops/sec
🥈 Zustand            ████████████████████████████               117K ops/sec
🥉 Valtio             ██████████████████████                     94K ops/sec
 Zen Ultimate       ████████████████████                       83K ops/sec
 Zen                ██████████████████                         75K ops/sec
 MobX               ████████████████                           66K ops/sec
 Jotai              ████                                       17K ops/sec
 Redux Toolkit      ██                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 167K | 0.006ms | 0.013ms | 1000 |
| Zustand | 117K | 0.009ms | 0.012ms | 1000 |
| Valtio | 94K | 0.011ms | 0.017ms | 1000 |
| Zen Ultimate | 83K | 0.012ms | 0.044ms | 1000 |
| Zen | 75K | 0.013ms | 0.043ms | 1000 |
| MobX | 66K | 0.015ms | 0.026ms | 1000 |
| Jotai | 17K | 0.061ms | 0.177ms | 1000 |
| Redux Toolkit | 7K | 0.135ms | 0.535ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   8.6M ops/sec
🥈 Zustand            ███████████████████████████                5.9M ops/sec
🥉 Zen Ultimate       ██████████████████████                     4.7M ops/sec
 MobX               █████████████████████                      4.5M ops/sec
 Preact Signals     █████████████████████                      4.5M ops/sec
 Valtio             ████████                                   1.7M ops/sec
 Redux Toolkit      ██                                         351K ops/sec
 Jotai              █                                          305K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.9M | 0.000ms | 0.001ms | 1000 |
| Zen Ultimate | 4.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 4.5M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 351K | 0.003ms | 0.006ms | 1000 |
| Jotai | 305K | 0.003ms | 0.005ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen Ultimate       ████████████████████████████████████████   15.7M ops/sec
🥈 Preact Signals     █████████████████████████████████████      14.4M ops/sec
🥉 Zen                ██████████████████████████████             11.6M ops/sec
 Zustand            ███████████████                            5.8M ops/sec
 MobX               ██                                         884K ops/sec
 Valtio             █                                          575K ops/sec
 Jotai              █                                          493K ops/sec
 Redux Toolkit                                                 172K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Ultimate | 15.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 884K | 0.001ms | 0.003ms | 1000 |
| Valtio | 575K | 0.002ms | 0.004ms | 1000 |
| Jotai | 493K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 172K | 0.006ms | 0.013ms | 1000 |

#### Memory Management

```
🥇 Zen                ████████████████████████████████████████   181K ops/sec
🥈 Zen Ultimate       ████████████████████████████████████████   179K ops/sec
🥉 Zustand            ████████████████████████                   107K ops/sec
 Preact Signals     ██████████████████████                     100K ops/sec
 Redux Toolkit      ██████████                                 47K ops/sec
 Valtio             ██████████                                 46K ops/sec
 MobX               ████                                       18K ops/sec
 Jotai              ████                                       16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 181K | 0.006ms | 0.012ms | 1000 |
| Zen Ultimate | 179K | 0.006ms | 0.011ms | 1000 |
| Zustand | 107K | 0.009ms | 0.048ms | 1000 |
| Preact Signals | 100K | 0.010ms | 0.036ms | 1000 |
| Redux Toolkit | 47K | 0.021ms | 0.121ms | 1000 |
| Valtio | 46K | 0.022ms | 0.076ms | 1000 |
| MobX | 18K | 0.056ms | 0.582ms | 1000 |
| Jotai | 16K | 0.063ms | 0.385ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen Ultimate       ████████████████████████████████████████   13.2M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   13.2M ops/sec
🥉 Zen                ████████████████████████████████████       11.9M ops/sec
 Zustand            ███████████████████                        6.3M ops/sec
 MobX               ██████████                                 3.2M ops/sec
 Valtio             █████                                      1.5M ops/sec
 Jotai              █                                          260K ops/sec
 Redux Toolkit      █                                          234K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Ultimate | 13.2M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 6.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.001ms | 1000 |
| Jotai | 260K | 0.004ms | 0.006ms | 1000 |
| Redux Toolkit | 234K | 0.004ms | 0.006ms | 1000 |

### Performance Stress Tests

#### Large Array (1000 items)

```
🥇 Valtio             ████████████████████████████████████████   1.7M ops/sec
🥈 Jotai              ███████                                    302K ops/sec
🥉 MobX               ██████                                     269K ops/sec
 Preact Signals     █████                                      211K ops/sec
 Zen Ultimate       █████                                      208K ops/sec
 Zen                █████                                      200K ops/sec
 Zustand            █████                                      196K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 1.7M | 0.001ms | 0.006ms | 1000 |
| Jotai | 302K | 0.003ms | 0.009ms | 1000 |
| MobX | 269K | 0.004ms | 0.023ms | 1000 |
| Preact Signals | 211K | 0.005ms | 0.007ms | 1000 |
| Zen Ultimate | 208K | 0.005ms | 0.012ms | 1000 |
| Zen | 200K | 0.005ms | 0.012ms | 1000 |
| Zustand | 196K | 0.005ms | 0.007ms | 1000 |
| Redux Toolkit | 2K | 0.618ms | 1.725ms | 1000 |

#### Extreme Read (10000x)

```
🥇 Zustand            ████████████████████████████████████████   319K ops/sec
🥈 Redux Toolkit      ████████████████████████████████████       289K ops/sec
🥉 Zen                ███████████████                            117K ops/sec
 Zen Ultimate       ██████████████                             112K ops/sec
 Preact Signals     ██████                                     49K ops/sec
 MobX               ██                                         12K ops/sec
 Valtio             █                                          8K ops/sec
 Jotai                                                         619 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 319K | 0.003ms | 0.012ms | 1000 |
| Redux Toolkit | 289K | 0.003ms | 0.023ms | 1000 |
| Zen | 117K | 0.009ms | 0.030ms | 1000 |
| Zen Ultimate | 112K | 0.009ms | 0.028ms | 1000 |
| Preact Signals | 49K | 0.021ms | 0.027ms | 1000 |
| MobX | 12K | 0.081ms | 0.095ms | 1000 |
| Valtio | 8K | 0.129ms | 0.340ms | 1000 |
| Jotai | 619 | 1.616ms | 2.565ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Preact Signals     ████████████████████████████████████████   25K ops/sec
🥈 Zen Ultimate       ████████████████████████████               18K ops/sec
🥉 Zen                ██████████████████████████                 16K ops/sec
 Zustand            ███                                        2K ops/sec
 MobX               ██                                         1K ops/sec
 Valtio             ██                                         1K ops/sec
 Jotai                                                         104 ops/sec
 Redux Toolkit                                                 39 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 25K | 0.040ms | 0.059ms | 1000 |
| Zen Ultimate | 18K | 0.057ms | 0.091ms | 1000 |
| Zen | 16K | 0.061ms | 0.097ms | 1000 |
| Zustand | 2K | 0.581ms | 0.837ms | 1000 |
| MobX | 1K | 0.791ms | 1.093ms | 1000 |
| Valtio | 1K | 0.927ms | 1.258ms | 1000 |
| Jotai | 104 | 9.576ms | 11.953ms | 1000 |
| Redux Toolkit | 39 | 25.369ms | 31.326ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   3.9M ops/sec
🥈 Zen                ██████████████                             1.4M ops/sec
🥉 Zen Ultimate       ███████████                                1.0M ops/sec
 Zustand            ██████████                                 1.0M ops/sec
 Valtio             █████████                                  834K ops/sec
 MobX               ███                                        268K ops/sec
 Jotai              █                                          110K ops/sec
 Redux Toolkit                                                 38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 3.9M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.4M | 0.001ms | 0.002ms | 1000 |
| Zen Ultimate | 1.0M | 0.001ms | 0.004ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| Valtio | 834K | 0.001ms | 0.006ms | 1000 |
| MobX | 268K | 0.004ms | 0.009ms | 1000 |
| Jotai | 110K | 0.009ms | 0.012ms | 1000 |
| Redux Toolkit | 38K | 0.026ms | 0.032ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Zustand            ████████████████████████████████████████   2.0M ops/sec
🥈 Preact Signals     ████████████████████████████████           1.6M ops/sec
🥉 Valtio             ████████                                   409K ops/sec
 MobX               █████                                      228K ops/sec
 Zen                ████                                       214K ops/sec
 Zen Ultimate       ███                                        157K ops/sec
 Jotai              ███                                        156K ops/sec
 Redux Toolkit      █                                          61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 1.6M | 0.001ms | 0.001ms | 1000 |
| Valtio | 409K | 0.002ms | 0.003ms | 1000 |
| MobX | 228K | 0.004ms | 0.020ms | 1000 |
| Zen | 214K | 0.005ms | 0.019ms | 1000 |
| Zen Ultimate | 157K | 0.006ms | 0.016ms | 1000 |
| Jotai | 156K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.023ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Zustand            ████████████████████████████████████████   4.7M ops/sec
🥈 Preact Signals     ████████████████████████████████           3.7M ops/sec
🥉 Valtio             ██████████████████████                     2.6M ops/sec
 Zen                ██████████                                 1.2M ops/sec
 Jotai              ████                                       524K ops/sec
 Zen Ultimate       ███                                        355K ops/sec
 MobX               ███                                        336K ops/sec
 Redux Toolkit      ██                                         293K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.002ms | 1000 |
| Zen | 1.2M | 0.001ms | 0.005ms | 1000 |
| Jotai | 524K | 0.002ms | 0.004ms | 1000 |
| Zen Ultimate | 355K | 0.003ms | 0.007ms | 1000 |
| MobX | 336K | 0.003ms | 0.022ms | 1000 |
| Redux Toolkit | 293K | 0.003ms | 0.006ms | 1000 |

#### Dynamic Dependencies

```
🥇 Zustand            ████████████████████████████████████████   5.2M ops/sec
🥈 Zen                ████████████████████                       2.6M ops/sec
🥉 Zen Ultimate       ███████████████████                        2.5M ops/sec
 Preact Signals     ██████████████████                         2.4M ops/sec
 Valtio             ████████████                               1.6M ops/sec
 MobX               ████████                                   990K ops/sec
 Jotai              ██████                                     729K ops/sec
 Redux Toolkit      ███                                        344K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.6M | 0.000ms | 0.001ms | 1000 |
| Zen Ultimate | 2.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.002ms | 1000 |
| MobX | 990K | 0.001ms | 0.006ms | 1000 |
| Jotai | 729K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 344K | 0.003ms | 0.005ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zustand            ████████████████████████████████████████   977K ops/sec
🥈 Redux Toolkit      █████████                                  230K ops/sec
🥉 Preact Signals     ██                                         44K ops/sec
 Valtio             █                                          14K ops/sec
 MobX                                                          12K ops/sec
 Jotai                                                         7K ops/sec
 Zen Ultimate                                                  3K ops/sec
 Zen                                                           3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 977K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 44K | 0.023ms | 0.054ms | 1000 |
| Valtio | 14K | 0.071ms | 0.093ms | 1000 |
| MobX | 12K | 0.084ms | 0.111ms | 1000 |
| Jotai | 7K | 0.147ms | 0.339ms | 1000 |
| Zen Ultimate | 3K | 0.350ms | 1.102ms | 1000 |
| Zen | 3K | 0.363ms | 1.143ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 Preact Signals     ████████████████████████████████████████   521K ops/sec
🥈 MobX               █████████████                              168K ops/sec
🥉 Zen Ultimate       ███████████                                138K ops/sec
 Zustand            █████████                                  112K ops/sec
 Zen                █████████                                  112K ops/sec
 Valtio             ███████                                    96K ops/sec
 Jotai              █                                          14K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 521K | 0.002ms | 0.003ms | 1000 |
| MobX | 168K | 0.006ms | 0.011ms | 1000 |
| Zen Ultimate | 138K | 0.007ms | 0.011ms | 1000 |
| Zustand | 112K | 0.009ms | 0.017ms | 1000 |
| Zen | 112K | 0.009ms | 0.012ms | 1000 |
| Valtio | 96K | 0.010ms | 0.017ms | 1000 |
| Jotai | 14K | 0.074ms | 0.092ms | 1000 |
| Redux Toolkit | 4K | 0.255ms | 0.502ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Zustand            ████████████████████████████████████████   2.9M ops/sec
🥈 Preact Signals     █████                                      332K ops/sec
🥉 Redux Toolkit      ████                                       290K ops/sec
 Valtio             ██                                         156K ops/sec
 MobX               ██                                         119K ops/sec
 Zen                █                                          62K ops/sec
 Zen Ultimate       █                                          61K ops/sec
 Jotai              █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.9M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 332K | 0.003ms | 0.013ms | 1000 |
| Redux Toolkit | 290K | 0.003ms | 0.010ms | 1000 |
| Valtio | 156K | 0.006ms | 0.014ms | 1000 |
| MobX | 119K | 0.008ms | 0.026ms | 1000 |
| Zen | 62K | 0.016ms | 0.030ms | 1000 |
| Zen Ultimate | 61K | 0.017ms | 0.041ms | 1000 |
| Jotai | 58K | 0.017ms | 0.023ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zustand            ████████████████████████████████████████   2.0M ops/sec
🥈 Zen Ultimate       ████████████████████████████████████       1.8M ops/sec
🥉 Zen                █████████████████████████████████          1.7M ops/sec
 Preact Signals     ███████████████████████                    1.2M ops/sec
 Valtio             ███████████████████                        992K ops/sec
 MobX               █████                                      231K ops/sec
 Jotai              ██                                         107K ops/sec
 Redux Toolkit      █                                          61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Zen Ultimate | 1.8M | 0.001ms | 0.005ms | 1000 |
| Zen | 1.7M | 0.001ms | 0.005ms | 1000 |
| Preact Signals | 1.2M | 0.001ms | 0.004ms | 1000 |
| Valtio | 992K | 0.001ms | 0.003ms | 1000 |
| MobX | 231K | 0.004ms | 0.015ms | 1000 |
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

- **[Zustand](https://github.com/pmndrs/zustand)** (`5.0.8`)  • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Zen](https://github.com/SylphxAI/zen)** (`3.1.1`)  • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Preact Signals](https://github.com/preactjs/signals)** (`2.4.0`)  • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zen Ultimate](#)** (`unknown`)  - [📦 npm](https://www.npmjs.com/package/zen-ultimate) • [📊 bundle size](https://bundlephobia.com/package/zen-ultimate)
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

*Generated on 2025-11-18T16:42:16.003Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
