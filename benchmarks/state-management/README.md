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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 72.2/100 score
- **⚖️ Best Balance**: Zen - Great performance (57.0/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 72.2/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 57.0/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 52.7/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 34.2/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 27.8/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 72.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 57.0/100 | 79% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 52.7/100 | 73% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 34.2/100 | 47% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 27.8/100 | 39% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 24.7/100 | 34% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 6.6/100 | 9% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.8/100 | 4% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **72.2** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **57.0** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **52.7** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **34.2** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **27.8** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **24.7** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **6.6** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **2.8** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   23.7M ops/sec
🥈 Preact Signals     ███████████████████████████████████        20.6M ops/sec
🥉 Redux Toolkit      ████████████████████████████               16.9M ops/sec
 Valtio             ███████████████████████████                16.3M ops/sec
 Zustand            ████████████████████████                   14.4M ops/sec
 Zen                █████████████████████                      12.3M ops/sec
 MobX               █████████████████                          9.9M ops/sec
 Jotai              ███████                                    4.0M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 23.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 16.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 14.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 12.3M | 0.000ms | 0.000ms | 1000 |
| MobX | 9.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 4.0M | 0.000ms | 0.002ms | 1000 |

#### Moderate Read (100x)

```
🥇 Preact Signals     ████████████████████████████████████████   21.2M ops/sec
🥈 Solid Signals      █████████████████████████                  13.0M ops/sec
🥉 Redux Toolkit      █████████████████████                      11.3M ops/sec
 MobX               ██████████████████                         9.4M ops/sec
 Zustand            █████████████████                          9.1M ops/sec
 Valtio             ████████████████                           8.2M ops/sec
 Zen                █████████████                              7.1M ops/sec
 Jotai              █████                                      2.7M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 21.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 13.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 9.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 9.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 8.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 7.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 2.7M | 0.000ms | 0.002ms | 1000 |

#### Single Read

```
🥇 Preact Signals     ████████████████████████████████████████   21.5M ops/sec
🥈 Solid Signals      ███████████████████████████████████        18.6M ops/sec
🥉 Zustand            ██████████████████████████████████         18.2M ops/sec
 Zen                ███████████████████████████                14.7M ops/sec
 Redux Toolkit      ██████████████████                         9.5M ops/sec
 MobX               █████████                                  4.6M ops/sec
 Valtio             ██████                                     3.2M ops/sec
 Jotai              ███                                        1.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 21.5M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 18.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 18.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 14.7M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 9.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.6M | 0.000ms | 0.002ms | 1000 |
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.4M | 0.001ms | 0.004ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   20.4M ops/sec
🥈 Zen                █████████████████████████████████████      18.7M ops/sec
🥉 Solid Signals      ██████████████                             7.1M ops/sec
 Zustand            ██████████                                 5.2M ops/sec
 MobX               ████████                                   4.0M ops/sec
 Valtio             ██████                                     3.1M ops/sec
 Jotai              █                                          611K ops/sec
 Redux Toolkit                                                 180K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 20.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 18.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 7.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.0M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 611K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 180K | 0.006ms | 0.010ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   21.5M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    20.9M ops/sec
🥉 Solid Signals      ██████████████████████████████████         18.1M ops/sec
 MobX               █████████████                              6.9M ops/sec
 Zustand            ██████████                                 5.5M ops/sec
 Valtio             █████████                                  4.7M ops/sec
 Jotai              █                                          650K ops/sec
 Redux Toolkit                                                 233K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 18.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 6.9M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.7M | 0.000ms | 0.001ms | 1000 |
| Jotai | 650K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 233K | 0.004ms | 0.017ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Preact Signals     ████████████████████████████████████████   20.9M ops/sec
🥈 Zen                ███████████                                5.9M ops/sec
🥉 Solid Signals      ██████████                                 5.5M ops/sec
 MobX               ████████                                   4.0M ops/sec
 Valtio             ███████                                    3.5M ops/sec
 Zustand            ██████                                     3.1M ops/sec
 Jotai              █                                          610K ops/sec
 Redux Toolkit                                                 176K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 20.9M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 4.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 610K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 176K | 0.006ms | 0.019ms | 1000 |

#### Single Write

```
🥇 Preact Signals     ████████████████████████████████████████   18.7M ops/sec
🥈 Zen                ███████████████████                        8.8M ops/sec
🥉 Solid Signals      ██████████████████                         8.6M ops/sec
 Zustand            ██████                                     2.7M ops/sec
 MobX               ███                                        1.2M ops/sec
 Valtio             ██                                         868K ops/sec
 Jotai              █                                          250K ops/sec
 Redux Toolkit                                                 103K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 18.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.8M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 8.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.7M | 0.000ms | 0.002ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.010ms | 1000 |
| Valtio | 868K | 0.001ms | 0.005ms | 1000 |
| Jotai | 250K | 0.004ms | 0.012ms | 1000 |
| Redux Toolkit | 103K | 0.010ms | 0.062ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Zustand            █████████████████████████████████████      1.1M ops/sec
🥉 Valtio             ████████████████████████████████           931K ops/sec
 Zen                █████████████████████                      615K ops/sec
 Jotai              ████████████████                           458K ops/sec
 MobX               ██████████                                 302K ops/sec
 Preact Signals     █                                          32K ops/sec
 Redux Toolkit                                                 4K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zustand | 1.1M | 0.001ms | 0.002ms | 1000 |
| Valtio | 931K | 0.001ms | 0.005ms | 1000 |
| Zen | 615K | 0.002ms | 0.005ms | 1000 |
| Jotai | 458K | 0.002ms | 0.005ms | 1000 |
| MobX | 302K | 0.003ms | 0.014ms | 1000 |
| Preact Signals | 32K | 0.034ms | 0.053ms | 1000 |
| Redux Toolkit | 4K | 0.275ms | 0.534ms | 1000 |

#### Array Update

```
🥇 Solid Signals      ████████████████████████████████████████   7.2M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   7.2M ops/sec
🥉 Zen                █████████████████████████████████████      6.7M ops/sec
 Valtio             ██████████████████████████████████         6.2M ops/sec
 MobX               █████████████                              2.3M ops/sec
 Zustand            ██████████                                 1.8M ops/sec
 Jotai              ████                                       663K ops/sec
 Redux Toolkit      █                                          174K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 7.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 6.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.3M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.8M | 0.001ms | 0.001ms | 1000 |
| Jotai | 663K | 0.002ms | 0.003ms | 1000 |
| Redux Toolkit | 174K | 0.006ms | 0.014ms | 1000 |

#### Computed Value Access

```
🥇 Solid Signals      ████████████████████████████████████████   25.2M ops/sec
🥈 Zen                ███████████████████████████████████        22.0M ops/sec
🥉 Preact Signals     ████████████████████████                   15.2M ops/sec
 Zustand            ████████                                   5.1M ops/sec
 Valtio             ███████                                    4.4M ops/sec
 Redux Toolkit      █████                                      3.1M ops/sec
 MobX               ████                                       2.2M ops/sec
 Jotai              ███                                        1.8M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 25.2M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.4M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 3.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.2M | 0.000ms | 0.004ms | 1000 |
| Jotai | 1.8M | 0.001ms | 0.002ms | 1000 |

#### Nested Object Update

```
🥇 Preact Signals     ████████████████████████████████████████   8.4M ops/sec
🥈 Zen                ██████████████████████████████████████     8.1M ops/sec
🥉 Zustand            ██████████████████████                     4.6M ops/sec
 Solid Signals      ██████████████████                         3.9M ops/sec
 Valtio             █████████████████                          3.6M ops/sec
 MobX               ██████████                                 2.0M ops/sec
 Jotai              ██                                         430K ops/sec
 Redux Toolkit      █                                          206K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 8.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 3.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.0M | 0.000ms | 0.003ms | 1000 |
| Jotai | 430K | 0.002ms | 0.011ms | 1000 |
| Redux Toolkit | 206K | 0.005ms | 0.013ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Zen                ████████████████████████████████████████   604K ops/sec
🥈 Solid Signals      ███████████████████████████████████        529K ops/sec
🥉 Preact Signals     █████████████████████████████████          496K ops/sec
 MobX               ████████████████████                       308K ops/sec
 Zustand            ███████████████████                        292K ops/sec
 Valtio             █████████████████                          255K ops/sec
 Jotai              ███                                        49K ops/sec
 Redux Toolkit      █                                          14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 604K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 529K | 0.002ms | 0.006ms | 1000 |
| Preact Signals | 496K | 0.002ms | 0.003ms | 1000 |
| MobX | 308K | 0.003ms | 0.007ms | 1000 |
| Zustand | 292K | 0.003ms | 0.008ms | 1000 |
| Valtio | 255K | 0.004ms | 0.009ms | 1000 |
| Jotai | 49K | 0.020ms | 0.030ms | 1000 |
| Redux Toolkit | 14K | 0.071ms | 0.195ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   136K ops/sec
🥈 Zen                ███████████████████████████████████████    134K ops/sec
🥉 Preact Signals     █████████████████████████████████          113K ops/sec
 MobX               ███████████████████████████████            106K ops/sec
 Zustand            █████████████████████████████              98K ops/sec
 Valtio             ███████████████████████████                92K ops/sec
 Jotai              █████                                      17K ops/sec
 Redux Toolkit      ██                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 136K | 0.007ms | 0.019ms | 1000 |
| Zen | 134K | 0.007ms | 0.022ms | 1000 |
| Preact Signals | 113K | 0.009ms | 0.012ms | 1000 |
| MobX | 106K | 0.009ms | 0.017ms | 1000 |
| Zustand | 98K | 0.010ms | 0.015ms | 1000 |
| Valtio | 92K | 0.011ms | 0.016ms | 1000 |
| Jotai | 17K | 0.057ms | 0.087ms | 1000 |
| Redux Toolkit | 7K | 0.149ms | 0.445ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid Signals      ████████████████████████████████████████   14.8M ops/sec
🥈 Preact Signals     ███████████████████████████████            11.6M ops/sec
🥉 Zen                ██████████████████████████████             11.0M ops/sec
 Valtio             ██████████████                             5.2M ops/sec
 MobX               ██████████████                             5.1M ops/sec
 Zustand            ██████████                                 3.8M ops/sec
 Jotai              █                                          427K ops/sec
 Redux Toolkit      █                                          238K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 14.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.8M | 0.000ms | 0.001ms | 1000 |
| Jotai | 427K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 238K | 0.004ms | 0.008ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   1.8M ops/sec
🥈 Valtio             ███████████████████████████████████        1.5M ops/sec
🥉 Zustand            █████████████                              579K ops/sec
 Solid Signals      ███████████                                470K ops/sec
 Zen                ████████                                   365K ops/sec
 Jotai              █████                                      215K ops/sec
 Preact Signals                                                22K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.8M | 0.001ms | 0.003ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.003ms | 1000 |
| Zustand | 579K | 0.002ms | 0.003ms | 1000 |
| Solid Signals | 470K | 0.002ms | 0.006ms | 1000 |
| Zen | 365K | 0.003ms | 0.009ms | 1000 |
| Jotai | 215K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 22K | 0.053ms | 0.363ms | 1000 |
| Redux Toolkit | 3K | 0.381ms | 0.866ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   2.7M ops/sec
🥈 Zen                ███                                        212K ops/sec
🥉 Zustand            ██                                         140K ops/sec
 Preact Signals     ██                                         135K ops/sec
 Redux Toolkit      █                                          49K ops/sec
 Valtio             █                                          47K ops/sec
 Jotai                                                         16K ops/sec
 MobX                                                          14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.7M | 0.000ms | 0.003ms | 1000 |
| Zen | 212K | 0.005ms | 0.012ms | 1000 |
| Zustand | 140K | 0.007ms | 0.044ms | 1000 |
| Preact Signals | 135K | 0.008ms | 0.015ms | 1000 |
| Redux Toolkit | 49K | 0.020ms | 0.074ms | 1000 |
| Valtio | 47K | 0.021ms | 0.075ms | 1000 |
| Jotai | 16K | 0.061ms | 0.107ms | 1000 |
| MobX | 14K | 0.073ms | 0.585ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Valtio             ████████████████████████████████████████   7.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      7.2M ops/sec
🥉 Solid Signals      ████████████████████████████████████       7.0M ops/sec
 Zen                ███████████████████████████████            5.9M ops/sec
 MobX               ██████████████                             2.7M ops/sec
 Zustand            ███████████                                2.1M ops/sec
 Jotai              ██                                         298K ops/sec
 Redux Toolkit      █                                          123K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 7.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 7.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 5.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 298K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 123K | 0.008ms | 0.012ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   30.7M ops/sec
🥈 MobX               ███████████████████████████████████        27.0M ops/sec
🥉 Valtio             ██████████████████████████████             23.3M ops/sec
 Preact Signals     ██████████████████████████                 20.3M ops/sec
 Redux Toolkit      ██████████████████████                     16.6M ops/sec
 Zustand            ██████████████████                         13.6M ops/sec
 Zen                █████████████                              9.8M ops/sec
 Jotai              █████                                      4.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 30.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 27.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 23.3M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.3M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 16.6M | 0.000ms | 0.000ms | 1000 |
| Zustand | 13.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 9.8M | 0.000ms | 0.001ms | 1000 |
| Jotai | 4.2M | 0.000ms | 0.001ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Preact Signals     ████████████████████████████████████████   19.5M ops/sec
🥈 Solid Signals      █████████████████████████████████          16.2M ops/sec
🥉 Zen                ███████████████████████████████            15.0M ops/sec
 MobX               ████████████████████                       9.9M ops/sec
 Zustand            ███████████████                            7.3M ops/sec
 Valtio             ████████████                               5.8M ops/sec
 Jotai              ██                                         851K ops/sec
 Redux Toolkit      █                                          322K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 19.5M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 16.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 15.0M | 0.000ms | 0.000ms | 1000 |
| MobX | 9.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 7.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.8M | 0.000ms | 0.001ms | 1000 |
| Jotai | 851K | 0.001ms | 0.004ms | 1000 |
| Redux Toolkit | 322K | 0.003ms | 0.007ms | 1000 |

#### Large Array (1000 items)

```
🥇 Solid Signals      ████████████████████████████████████████   148K ops/sec
🥈 Zen                ███████████████████████████████████████    146K ops/sec
🥉 Preact Signals     █████████████████████████████████████      138K ops/sec
 Zustand            █████████████████████████████████████      137K ops/sec
 Jotai              ██████████████████████████                 95K ops/sec
 MobX               █████                                      18K ops/sec
 Valtio             ██                                         6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 148K | 0.007ms | 0.012ms | 1000 |
| Zen | 146K | 0.007ms | 0.012ms | 1000 |
| Preact Signals | 138K | 0.009ms | 0.020ms | 1000 |
| Zustand | 137K | 0.007ms | 0.012ms | 1000 |
| Jotai | 95K | 0.011ms | 0.017ms | 1000 |
| MobX | 18K | 0.057ms | 0.078ms | 1000 |
| Valtio | 6K | 0.158ms | 0.403ms | 1000 |
| Redux Toolkit | 1K | 0.830ms | 1.249ms | 1000 |


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
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
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

*Generated on 2025-11-13T17:32:30.654Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
