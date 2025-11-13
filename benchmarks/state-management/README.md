<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-8-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-20-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 70.6/100 score
- **⚖️ Best Balance**: Zen - Great performance (54.8/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 70.6/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 54.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 50.4/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Valtio** (Score: 25.7/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 23.7/100)
- Simple, scalable state management with transparent reactive programming
- **Best for**: Automatic tracking, slow creation, largest bundle
- [GitHub](https://github.com/mobxjs/mobx) • [npm](https://www.npmjs.com/package/mobx)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 70.6/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 54.8/100 | 78% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 50.4/100 | 71% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.7/100 | 36% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 23.7/100 | 34% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Zustand](https://github.com/pmndrs/zustand)** | 21.7/100 | 31% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.4/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.7/100 | 2% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **70.6** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **54.8** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **50.4** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.7** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **23.7** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **21.7** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **3.4** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **1.7** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Zustand            ████████████████████████████████████████   17.8M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   17.7M ops/sec
🥉 Solid Signals      ███████████████████████████████████████    17.3M ops/sec
 Valtio             ███████████████████████████████████████    17.2M ops/sec
 Zen                █████████████████████████████████████      16.6M ops/sec
 Redux Toolkit      █████████████████████████████████████      16.6M ops/sec
 MobX               ██████████████████████████████             13.5M ops/sec
 Jotai              ██████                                     2.7M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 17.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 17.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 17.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 13.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.7M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Valtio             ████████████████████████████████████████   17.7M ops/sec
🥈 Zustand            ████████████████████████████████████████   17.6M ops/sec
🥉 Preact Signals     ███████████████████████████████████████    17.3M ops/sec
 Solid Signals      ██████████████████████████████████████     16.6M ops/sec
 Zen                █████████████████████████████████████      16.5M ops/sec
 Redux Toolkit      ██████████████████████████████████         15.1M ops/sec
 MobX               █████████████████████████████              12.8M ops/sec
 Jotai              ██████                                     2.6M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 17.7M | 0.000ms | 0.000ms | 1000 |
| Zustand | 17.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 16.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 15.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 12.8M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.6M | 0.000ms | 0.001ms | 1000 |

#### Single Read

```
🥇 Redux Toolkit      ████████████████████████████████████████   21.5M ops/sec
🥈 Solid Signals      ████████████████████████████████████       19.4M ops/sec
🥉 Zen                ████████████████████████████████████       19.3M ops/sec
 Preact Signals     ██████████████████████████████████         18.1M ops/sec
 Zustand            █████████████████████████████████          17.7M ops/sec
 Valtio             █████████████████████████████████          17.6M ops/sec
 MobX               ████████████████████████                   12.9M ops/sec
 Jotai              █████                                      2.6M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 21.5M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 19.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 18.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 17.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 17.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 12.9M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.6M | 0.000ms | 0.001ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Solid Signals      ████████████████████████████████████████   18.6M ops/sec
🥈 Preact Signals     ████████████████████████████████████       16.9M ops/sec
🥉 Zen                ████████████████████████████████████       16.9M ops/sec
 MobX               █████████                                  4.2M ops/sec
 Zustand            ████████                                   3.9M ops/sec
 Valtio             ███████                                    3.3M ops/sec
 Jotai              █                                          411K ops/sec
 Redux Toolkit                                                 121K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 18.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 411K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 121K | 0.008ms | 0.017ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   27.8M ops/sec
🥈 Zen                █████████████████████████████████          22.7M ops/sec
🥉 Preact Signals     ███████████████████                        13.2M ops/sec
 MobX               ███████                                    5.2M ops/sec
 Zustand            ██████                                     4.0M ops/sec
 Valtio             █████                                      3.3M ops/sec
 Jotai              █                                          356K ops/sec
 Redux Toolkit                                                 118K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 27.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 13.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 356K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 118K | 0.009ms | 0.016ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Preact Signals     ████████████████████████████████████████   21.5M ops/sec
🥈 Zen                ███████████████████████████████████████    21.0M ops/sec
🥉 Solid Signals      ████████████████████████████████████       19.5M ops/sec
 MobX               █████████                                  4.9M ops/sec
 Zustand            ███████                                    4.0M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              █                                          277K ops/sec
 Redux Toolkit                                                 124K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 21.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 19.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 277K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 124K | 0.009ms | 0.016ms | 1000 |

#### Single Write

```
🥇 Solid Signals      ████████████████████████████████████████   18.4M ops/sec
🥈 Zen                ████████████████████████████████████       16.6M ops/sec
🥉 Preact Signals     ████████████████████████████████           14.7M ops/sec
 MobX               █████████                                  4.3M ops/sec
 Zustand            ████████                                   3.6M ops/sec
 Valtio             ███████                                    3.1M ops/sec
 Jotai              █                                          395K ops/sec
 Redux Toolkit                                                 122K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 18.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 16.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 395K | 0.003ms | 0.004ms | 1000 |
| Redux Toolkit | 122K | 0.008ms | 0.016ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Valtio             ████████████████████████████████████████   305K ops/sec
🥈 MobX               ██████████████████████████████████         259K ops/sec
🥉 Zustand            ████                                       32K ops/sec
 Zen                ████                                       30K ops/sec
 Solid Signals      ████                                       30K ops/sec
 Preact Signals     ████                                       30K ops/sec
 Jotai              ████                                       27K ops/sec
 Redux Toolkit                                                 585 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 305K | 0.004ms | 0.009ms | 1000 |
| MobX | 259K | 0.004ms | 0.029ms | 1000 |
| Zustand | 32K | 0.034ms | 0.097ms | 1000 |
| Zen | 30K | 0.037ms | 0.103ms | 1000 |
| Solid Signals | 30K | 0.039ms | 0.173ms | 1000 |
| Preact Signals | 30K | 0.044ms | 0.252ms | 1000 |
| Jotai | 27K | 0.052ms | 0.189ms | 1000 |
| Redux Toolkit | 585 | 1.950ms | 3.060ms | 1000 |

#### Array Update

```
🥇 Valtio             ████████████████████████████████████████   8.6M ops/sec
🥈 Preact Signals     █████████████████████████████████          7.1M ops/sec
🥉 Zen                ████████████████████████████████           6.9M ops/sec
 Solid Signals      ███████████████████████████████            6.6M ops/sec
 MobX               █████████████                              2.9M ops/sec
 Zustand            █████████████                              2.9M ops/sec
 Jotai              █                                          314K ops/sec
 Redux Toolkit                                                 73K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 8.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 6.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 314K | 0.003ms | 0.009ms | 1000 |
| Redux Toolkit | 73K | 0.015ms | 0.034ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   23.2M ops/sec
🥈 Solid Signals      ███████████████████████████████████████    22.6M ops/sec
🥉 Preact Signals     ████████████████████████████               16.1M ops/sec
 Redux Toolkit      ██████████████████████████                 14.9M ops/sec
 Valtio             █████████████████████████                  14.4M ops/sec
 MobX               █████████████                              7.4M ops/sec
 Zustand            ███████                                    3.8M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 23.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 22.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.1M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 14.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 14.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 3.8M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Solid Signals      ████████████████████████████████████████   11.2M ops/sec
🥈 Zen                █████████████████████████████████████      10.5M ops/sec
🥉 Preact Signals     █████████████████████████████████████      10.3M ops/sec
 Valtio             ████████████                               3.4M ops/sec
 Zustand            ████████████                               3.3M ops/sec
 MobX               ███████████                                3.0M ops/sec
 Jotai              █                                          373K ops/sec
 Redux Toolkit                                                 74K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 10.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.0M | 0.000ms | 0.001ms | 1000 |
| Jotai | 373K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 74K | 0.015ms | 0.032ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Solid Signals      ████████████████████████████████████████   461K ops/sec
🥈 Zen                ████████████████████████████████████████   455K ops/sec
🥉 Preact Signals     ██████████████████████████████████████     434K ops/sec
 MobX               █████████████████                          192K ops/sec
 Zustand            █████████████                              153K ops/sec
 Valtio             ██████████                                 119K ops/sec
 Jotai              ██                                         20K ops/sec
 Redux Toolkit      █                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 461K | 0.002ms | 0.003ms | 1000 |
| Zen | 455K | 0.002ms | 0.003ms | 1000 |
| Preact Signals | 434K | 0.003ms | 0.004ms | 1000 |
| MobX | 192K | 0.005ms | 0.007ms | 1000 |
| Zustand | 153K | 0.007ms | 0.011ms | 1000 |
| Valtio | 119K | 0.008ms | 0.012ms | 1000 |
| Jotai | 20K | 0.053ms | 0.072ms | 1000 |
| Redux Toolkit | 6K | 0.175ms | 0.246ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Zen                ████████████████████████████████████████   94K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    91K ops/sec
🥉 Solid Signals      ██████████████████████████████████████     90K ops/sec
 MobX               ███████████████████████                    53K ops/sec
 Zustand            ███████████████████                        46K ops/sec
 Valtio             ████████████████                           37K ops/sec
 Jotai              ███                                        7K ops/sec
 Redux Toolkit      █                                          2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 94K | 0.011ms | 0.016ms | 1000 |
| Preact Signals | 91K | 0.012ms | 0.017ms | 1000 |
| Solid Signals | 90K | 0.011ms | 0.018ms | 1000 |
| MobX | 53K | 0.019ms | 0.026ms | 1000 |
| Zustand | 46K | 0.022ms | 0.030ms | 1000 |
| Valtio | 37K | 0.028ms | 0.036ms | 1000 |
| Jotai | 7K | 0.159ms | 0.318ms | 1000 |
| Redux Toolkit | 2K | 0.456ms | 1.133ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid Signals      ████████████████████████████████████████   20.6M ops/sec
🥈 Zen                ██████████████████████████████████████     19.8M ops/sec
🥉 Preact Signals     ███████████████████████████                14.1M ops/sec
 MobX               ██████                                     3.2M ops/sec
 Valtio             █████                                      2.3M ops/sec
 Zustand            ████                                       2.2M ops/sec
 Jotai                                                         216K ops/sec
 Redux Toolkit                                                 106K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 20.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 14.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 216K | 0.005ms | 0.010ms | 1000 |
| Redux Toolkit | 106K | 0.012ms | 0.021ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   890K ops/sec
🥈 Valtio             ████████████████████████                   529K ops/sec
🥉 Zen                █                                          21K ops/sec
 Jotai              █                                          21K ops/sec
 Zustand            █                                          21K ops/sec
 Preact Signals     █                                          19K ops/sec
 Solid Signals      █                                          19K ops/sec
 Redux Toolkit                                                 445 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 890K | 0.001ms | 0.002ms | 1000 |
| Valtio | 529K | 0.002ms | 0.003ms | 1000 |
| Zen | 21K | 0.053ms | 0.148ms | 1000 |
| Jotai | 21K | 0.055ms | 0.146ms | 1000 |
| Zustand | 21K | 0.056ms | 0.206ms | 1000 |
| Preact Signals | 19K | 0.059ms | 0.553ms | 1000 |
| Solid Signals | 19K | 0.063ms | 0.277ms | 1000 |
| Redux Toolkit | 445 | 2.628ms | 4.451ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   14.0M ops/sec
🥈 Zen                                                           123K ops/sec
🥉 Preact Signals                                                115K ops/sec
 Zustand                                                       96K ops/sec
 Valtio                                                        50K ops/sec
 Redux Toolkit                                                 38K ops/sec
 MobX                                                          9K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 14.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 123K | 0.009ms | 0.014ms | 1000 |
| Preact Signals | 115K | 0.010ms | 0.018ms | 1000 |
| Zustand | 96K | 0.024ms | 0.025ms | 1000 |
| Valtio | 50K | 0.051ms | 0.051ms | 1000 |
| Redux Toolkit | 38K | 0.065ms | 0.074ms | 1000 |
| MobX | 9K | 0.154ms | 1.061ms | 1000 |
| Jotai | 7K | 0.154ms | 0.782ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Valtio             ████████████████████████████████████████   9.4M ops/sec
🥈 Zen                ████████████████████████████████████       8.4M ops/sec
🥉 Solid Signals      ████████████████████████████████████       8.4M ops/sec
 Preact Signals     ██████████████████████████████████         7.9M ops/sec
 MobX               ██████                                     1.4M ops/sec
 Zustand            ██████                                     1.3M ops/sec
 Jotai              █                                          126K ops/sec
 Redux Toolkit                                                 44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 9.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 8.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 1.4M | 0.001ms | 0.001ms | 1000 |
| Zustand | 1.3M | 0.001ms | 0.001ms | 1000 |
| Jotai | 126K | 0.009ms | 0.014ms | 1000 |
| Redux Toolkit | 44K | 0.023ms | 0.034ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   25.4M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     23.9M ops/sec
🥉 Zen                █████████████████████████████████████      23.8M ops/sec
 Zustand            ██████████████████████████████████         21.5M ops/sec
 Redux Toolkit      ██████████████████████████████████         21.4M ops/sec
 Valtio             ████████████████████████████████           20.4M ops/sec
 MobX               ██████████████████████                     14.2M ops/sec
 Jotai              ████                                       2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 25.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 23.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 23.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 21.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 21.4M | 0.000ms | 0.000ms | 1000 |
| Valtio | 20.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 14.2M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.001ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   22.5M ops/sec
🥈 Zen                █████████████████████████████████████      21.1M ops/sec
🥉 Preact Signals     ████████████████████████████████████       20.4M ops/sec
 MobX               ████████                                   4.7M ops/sec
 Zustand            ███████                                    3.8M ops/sec
 Valtio             ████                                       2.3M ops/sec
 Jotai              █                                          362K ops/sec
 Redux Toolkit                                                 117K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 22.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.8M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 362K | 0.003ms | 0.005ms | 1000 |
| Redux Toolkit | 117K | 0.009ms | 0.021ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   194K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    187K ops/sec
🥉 Solid Signals      █████████████████████████████████████      179K ops/sec
 Zustand            ████████████████████████                   115K ops/sec
 Jotai              ██████████████                             67K ops/sec
 MobX               ██                                         9K ops/sec
 Valtio                                                        2K ops/sec
 Redux Toolkit                                                 391 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 194K | 0.006ms | 0.008ms | 1000 |
| Preact Signals | 187K | 0.006ms | 0.008ms | 1000 |
| Solid Signals | 179K | 0.006ms | 0.009ms | 1000 |
| Zustand | 115K | 0.009ms | 0.013ms | 1000 |
| Jotai | 67K | 0.017ms | 0.035ms | 1000 |
| MobX | 9K | 0.117ms | 0.156ms | 1000 |
| Valtio | 2K | 0.537ms | 1.270ms | 1000 |
| Redux Toolkit | 391 | 2.587ms | 3.434ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Warmup**: 100 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Geometric mean prevents single test from dominating
- Score of 50 = half the speed of the fastest library on average

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

**Total**: 20 tests × 8 libraries = 160 benchmark runs

---

## 🚀 Libraries Tested

- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) v3.0.0 • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) v2.4.0 • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) v2.15.1 • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) v2.10.1 • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)

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

*Generated on 2025-11-13T18:21:46.527Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
