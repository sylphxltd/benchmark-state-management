<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Zen - Fastest overall with 67.5/100 score
- **⚖️ Best Balance**: Valtio - Great performance (25.8/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen** (Score: 67.5/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Valtio** (Score: 25.8/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 24.5/100)
- Simple, scalable state management with transparent reactive programming
- **Best for**: Automatic tracking, slow creation, largest bundle
- [GitHub](https://github.com/mobxjs/mobx) • [npm](https://www.npmjs.com/package/mobx)


**Jotai** (Score: 0.0/100)
- Primitive and flexible state management for React
- **Best for**: Very fast read/write, slower creation, unique async capabilities
- [GitHub](https://github.com/pmndrs/jotai) • [npm](https://www.npmjs.com/package/jotai)


**Preact Signals** (Score: 0.0/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 28 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen](https://github.com/SylphxAI/zen)** | 67.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥈 2 | **[Valtio](https://github.com/pmndrs/valtio)** | 25.8/100 | 38% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
| 🥉 3 | **[MobX](https://github.com/mobxjs/mobx)** | 24.5/100 | 36% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  4 | **[Jotai](https://github.com/pmndrs/jotai)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  5 | **[Preact Signals](https://github.com/preactjs/signals)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |
|  7 | **[Solid Signals](https://github.com/solidjs/solid)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
|  8 | **[Zustand](https://github.com/pmndrs/zustand)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen](https://github.com/SylphxAI/zen)** | **67.5** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **25.8** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **24.5** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **0.0** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **0.0** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **0.0** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |
| **[Solid Signals](https://github.com/solidjs/solid)** | **0.0** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **0.0** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   29.7M ops/sec
🥈 Valtio             ████████████████████████████████████       26.5M ops/sec
🥉 Redux Toolkit      ███████████████████████████████████        26.3M ops/sec
 Zen                ██████████████████████████████             22.1M ops/sec
 MobX               ████████████████████████████               20.4M ops/sec
 Preact Signals     ███████████████████████████                20.1M ops/sec
 Zustand            █████████████████████                      15.3M ops/sec
 Jotai              ██████                                     4.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 29.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 26.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 26.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 22.1M | 0.000ms | 0.000ms | 1000 |
| MobX | 20.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 15.3M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.2M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zen                ████████████████████████████████████████   22.1M ops/sec
🥈 Preact Signals     ████████████████████████████████████       19.8M ops/sec
🥉 Valtio             ████████████████████████████               15.5M ops/sec
 Redux Toolkit      ██████████████████                         9.9M ops/sec
 Solid Signals      ███████████████                            8.2M ops/sec
 MobX               ██████████████                             7.5M ops/sec
 Zustand            ███████                                    3.8M ops/sec
 Jotai              ██                                         1.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Valtio | 15.5M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 9.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 8.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.5M | 0.000ms | 0.002ms | 1000 |
| Zustand | 3.8M | 0.000ms | 0.002ms | 1000 |
| Jotai | 1.1M | 0.001ms | 0.004ms | 1000 |

#### Single Read

```
🥇 Zen                ████████████████████████████████████████   22.3M ops/sec
🥈 Zustand            ████████████████████████████████████████   22.1M ops/sec
🥉 Solid Signals      ████████████████████████████████           18.0M ops/sec
 Redux Toolkit      ████████████████████████████████           17.7M ops/sec
 Preact Signals     ██████████████████████████████             16.6M ops/sec
 Valtio             ████████████████                           8.9M ops/sec
 MobX               ███████████                                6.1M ops/sec
 Jotai              ██                                         1.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 22.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 22.1M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 18.0M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 17.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 16.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 8.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 6.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 1.3M | 0.001ms | 0.003ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   20.1M ops/sec
🥈 Preact Signals     ███████████████████████████████████        17.6M ops/sec
🥉 Solid Signals      ███████████                                5.5M ops/sec
 MobX               ███████████                                5.4M ops/sec
 Zustand            ███████████                                5.3M ops/sec
 Valtio             ███████                                    3.3M ops/sec
 Jotai              █                                          646K ops/sec
 Redux Toolkit                                                 162K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.5M | 0.000ms | 0.001ms | 1000 |
| MobX | 5.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 5.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.3M | 0.000ms | 0.002ms | 1000 |
| Jotai | 646K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 162K | 0.006ms | 0.019ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   17.9M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    17.6M ops/sec
🥉 Solid Signals      ██████████████                             6.4M ops/sec
 Zustand            █████████████                              5.6M ops/sec
 MobX               ██████████                                 4.7M ops/sec
 Valtio             █████████                                  4.2M ops/sec
 Jotai              █                                          637K ops/sec
 Redux Toolkit      █                                          255K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 17.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 17.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.4M | 0.000ms | 0.002ms | 1000 |
| Zustand | 5.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.7M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 637K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 255K | 0.004ms | 0.008ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   20.0M ops/sec
🥈 Preact Signals     █████████████████████████████████████      18.6M ops/sec
🥉 Solid Signals      ███████████                                5.6M ops/sec
 MobX               █████                                      2.7M ops/sec
 Zustand            █████                                      2.3M ops/sec
 Valtio             ████                                       1.8M ops/sec
 Jotai              █                                          599K ops/sec
 Redux Toolkit                                                 219K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.0M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 18.6M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 5.6M | 0.000ms | 0.000ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.3M | 0.000ms | 0.002ms | 1000 |
| Valtio | 1.8M | 0.001ms | 0.002ms | 1000 |
| Jotai | 599K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 219K | 0.005ms | 0.009ms | 1000 |

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   21.7M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    20.9M ops/sec
🥉 Solid Signals      ████████████████████████████████           17.1M ops/sec
 Zustand            ██████████                                 5.4M ops/sec
 Valtio             █████                                      2.6M ops/sec
 MobX               ███                                        1.6M ops/sec
 Jotai              █                                          444K ops/sec
 Redux Toolkit                                                 132K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 20.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 17.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.6M | 0.001ms | 0.003ms | 1000 |
| Jotai | 444K | 0.002ms | 0.009ms | 1000 |
| Redux Toolkit | 132K | 0.008ms | 0.033ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zustand            ████████████████████████████████████████   943K ops/sec
🥈 Solid Signals      ████████████████████████████████████████   941K ops/sec
🥉 Valtio             ███████████████████████████████████████    921K ops/sec
 Jotai              ██████████████████                         425K ops/sec
 MobX               ██████████████                             330K ops/sec
 Preact Signals     █                                          29K ops/sec
 Zen                █                                          27K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 943K | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 941K | 0.001ms | 0.003ms | 1000 |
| Valtio | 921K | 0.001ms | 0.005ms | 1000 |
| Jotai | 425K | 0.002ms | 0.005ms | 1000 |
| MobX | 330K | 0.003ms | 0.010ms | 1000 |
| Preact Signals | 29K | 0.038ms | 0.110ms | 1000 |
| Zen | 27K | 0.041ms | 0.112ms | 1000 |
| Redux Toolkit | 3K | 0.302ms | 0.646ms | 1000 |

#### Array Update

```
🥇 Preact Signals     ████████████████████████████████████████   7.0M ops/sec
🥈 Zen                ████████████████████████████████████████   6.9M ops/sec
🥉 Solid Signals      ████████████████████████████████████████   6.9M ops/sec
 Valtio             ██████████████████████████████             5.2M ops/sec
 Zustand            ███████████████████████████                4.7M ops/sec
 MobX               ██████████████                             2.4M ops/sec
 Jotai              ███                                        598K ops/sec
 Redux Toolkit      █                                          149K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 7.0M | 0.000ms | 0.000ms | 1000 |
| Zen | 6.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.9M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.002ms | 1000 |
| Jotai | 598K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 149K | 0.007ms | 0.018ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   20.5M ops/sec
🥈 Preact Signals     ██████████████████████████████             15.2M ops/sec
🥉 Valtio             █████████████                              6.8M ops/sec
 Solid Signals      ████████████                               6.1M ops/sec
 Zustand            █████████                                  4.7M ops/sec
 Redux Toolkit      ██████                                     3.2M ops/sec
 MobX               ████                                       1.9M ops/sec
 Jotai              ██                                         1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 20.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 15.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 6.8M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 6.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 4.7M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 3.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.9M | 0.001ms | 0.004ms | 1000 |
| Jotai | 1.2M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   8.5M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    8.4M ops/sec
🥉 Solid Signals      ██████████████████████████████████████     8.0M ops/sec
 Zustand            ████████████████████                       4.2M ops/sec
 Valtio             ██████████████                             3.1M ops/sec
 MobX               █████████                                  1.9M ops/sec
 Jotai              ███                                        629K ops/sec
 Redux Toolkit      █                                          197K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 8.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 8.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 8.0M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.1M | 0.000ms | 0.003ms | 1000 |
| MobX | 1.9M | 0.001ms | 0.004ms | 1000 |
| Jotai | 629K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 197K | 0.005ms | 0.015ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Zen                ████████████████████████████████████████   536K ops/sec
🥈 Preact Signals     ███████████████████████████████████████    525K ops/sec
🥉 Solid Signals      ██████████████████████████                 342K ops/sec
 Zustand            ███████████████████████                    309K ops/sec
 Valtio             ███████████████                            205K ops/sec
 MobX               ████████████                               165K ops/sec
 Jotai              ███                                        41K ops/sec
 Redux Toolkit      █                                          14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 536K | 0.002ms | 0.002ms | 1000 |
| Preact Signals | 525K | 0.002ms | 0.003ms | 1000 |
| Solid Signals | 342K | 0.003ms | 0.008ms | 1000 |
| Zustand | 309K | 0.003ms | 0.007ms | 1000 |
| Valtio | 205K | 0.005ms | 0.010ms | 1000 |
| MobX | 165K | 0.006ms | 0.024ms | 1000 |
| Jotai | 41K | 0.024ms | 0.089ms | 1000 |
| Redux Toolkit | 14K | 0.073ms | 0.121ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   155K ops/sec
🥈 Preact Signals     █████████████████████████████              114K ops/sec
🥉 Zen                ████████████████████████████               108K ops/sec
 Zustand            ██████████████████████████                 103K ops/sec
 MobX               ██████████████████████████                 102K ops/sec
 Valtio             █████████████████████                      81K ops/sec
 Jotai              ████                                       16K ops/sec
 Redux Toolkit      ██                                         6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 155K | 0.006ms | 0.014ms | 1000 |
| Preact Signals | 114K | 0.009ms | 0.011ms | 1000 |
| Zen | 108K | 0.009ms | 0.015ms | 1000 |
| Zustand | 103K | 0.010ms | 0.014ms | 1000 |
| MobX | 102K | 0.010ms | 0.021ms | 1000 |
| Valtio | 81K | 0.012ms | 0.019ms | 1000 |
| Jotai | 16K | 0.064ms | 0.148ms | 1000 |
| Redux Toolkit | 6K | 0.164ms | 0.577ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   19.3M ops/sec
🥈 Solid Signals      ████████████████████████████████████       17.5M ops/sec
🥉 Preact Signals     ███████████████████████                    11.2M ops/sec
 Valtio             ██████████                                 5.1M ops/sec
 MobX               ██████████                                 4.8M ops/sec
 Zustand            ███████                                    3.6M ops/sec
 Jotai              █                                          364K ops/sec
 Redux Toolkit      █                                          253K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.3M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 17.5M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 11.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 5.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| Jotai | 364K | 0.003ms | 0.006ms | 1000 |
| Redux Toolkit | 253K | 0.004ms | 0.009ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   1.6M ops/sec
🥈 Valtio             █████████████████████████████████████      1.5M ops/sec
🥉 Zustand            ███████████                                417K ops/sec
 Solid Signals      █████████                                  366K ops/sec
 Jotai              ██████                                     230K ops/sec
 Preact Signals     █                                          21K ops/sec
 Zen                                                           20K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.6M | 0.001ms | 0.003ms | 1000 |
| Valtio | 1.5M | 0.001ms | 0.002ms | 1000 |
| Zustand | 417K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 366K | 0.003ms | 0.005ms | 1000 |
| Jotai | 230K | 0.004ms | 0.008ms | 1000 |
| Preact Signals | 21K | 0.059ms | 0.215ms | 1000 |
| Zen | 20K | 0.059ms | 0.283ms | 1000 |
| Redux Toolkit | 2K | 0.408ms | 1.027ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   947K ops/sec
🥈 Zen                ██████                                     148K ops/sec
🥉 Preact Signals     █████                                      116K ops/sec
 Zustand            ████                                       101K ops/sec
 Redux Toolkit      ██                                         52K ops/sec
 Valtio             ██                                         44K ops/sec
 Jotai              █                                          15K ops/sec
 MobX               █                                          12K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 947K | 0.001ms | 0.005ms | 1000 |
| Zen | 148K | 0.007ms | 0.010ms | 1000 |
| Preact Signals | 116K | 0.009ms | 0.016ms | 1000 |
| Zustand | 101K | 0.010ms | 0.039ms | 1000 |
| Redux Toolkit | 52K | 0.019ms | 0.055ms | 1000 |
| Valtio | 44K | 0.023ms | 0.080ms | 1000 |
| Jotai | 15K | 0.067ms | 0.201ms | 1000 |
| MobX | 12K | 0.083ms | 0.860ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   7.8M ops/sec
🥈 Preact Signals     █████████████████████████████████████      7.3M ops/sec
🥉 Valtio             █████████████████████████████████████      7.2M ops/sec
 Solid Signals      ████████████████████                       4.0M ops/sec
 MobX               ████████████                               2.4M ops/sec
 Zustand            ██████████                                 2.1M ops/sec
 Jotai              █                                          267K ops/sec
 Redux Toolkit      █                                          106K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 7.8M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.3M | 0.000ms | 0.000ms | 1000 |
| Valtio | 7.2M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 4.0M | 0.000ms | 0.002ms | 1000 |
| MobX | 2.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 267K | 0.004ms | 0.007ms | 1000 |
| Redux Toolkit | 106K | 0.009ms | 0.014ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 MobX               ████████████████████████████████████████   29.9M ops/sec
🥈 Preact Signals     ██████████████████████████████             22.5M ops/sec
🥉 Zen                █████████████████████████████              21.6M ops/sec
 Valtio             ████████████████████████████               20.7M ops/sec
 Solid Signals      ████████████████████████                   18.1M ops/sec
 Zustand            ██████████████████                         13.6M ops/sec
 Redux Toolkit      ████████████████                           11.7M ops/sec
 Jotai              ██████                                     4.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 29.9M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 22.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 21.6M | 0.000ms | 0.000ms | 1000 |
| Valtio | 20.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 18.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 13.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.7M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.5M | 0.000ms | 0.001ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   19.8M ops/sec
🥈 Zen                ██████████████████████████████████████     19.1M ops/sec
🥉 Preact Signals     █████████████████████████████████████      18.4M ops/sec
 MobX               ██████████████████████                     10.8M ops/sec
 Zustand            ███████████████                            7.3M ops/sec
 Valtio             █████████████                              6.3M ops/sec
 Jotai              ██                                         881K ops/sec
 Redux Toolkit                                                 187K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 19.8M | 0.000ms | 0.000ms | 1000 |
| Zen | 19.1M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 18.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 10.8M | 0.000ms | 0.000ms | 1000 |
| Zustand | 7.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 6.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 881K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 187K | 0.005ms | 0.035ms | 1000 |

#### Large Array (1000 items)

```
🥇 Preact Signals     ████████████████████████████████████████   219K ops/sec
🥈 Zen                ██████████████████████████████████████     207K ops/sec
🥉 Solid Signals      ████████████████████████████               155K ops/sec
 Zustand            ███████████████████████                    125K ops/sec
 Jotai              █████████████████                          92K ops/sec
 MobX               ███                                        15K ops/sec
 Valtio             █                                          6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 219K | 0.005ms | 0.007ms | 1000 |
| Zen | 207K | 0.005ms | 0.007ms | 1000 |
| Solid Signals | 155K | 0.006ms | 0.012ms | 1000 |
| Zustand | 125K | 0.008ms | 0.013ms | 1000 |
| Jotai | 92K | 0.011ms | 0.016ms | 1000 |
| MobX | 15K | 0.068ms | 0.110ms | 1000 |
| Valtio | 6K | 0.178ms | 0.516ms | 1000 |
| Redux Toolkit | 1K | 0.890ms | 1.423ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 Zen                ████████████████████████████████████████   14.5M ops/sec
🥈 MobX               █████████████████████████                  8.9M ops/sec
🥉 Solid Signals      █████████████████                          6.3M ops/sec
 Valtio             █████████████                              4.6M ops/sec
 Zustand            ███                                        1.0M ops/sec
 Jotai                                                         0 ops/sec
 Preact Signals                                                0 ops/sec
 Redux Toolkit                                                 0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 14.5M | 0.000ms | 0.000ms | 1000 |
| MobX | 8.9M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 6.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Zen                ████████████████████████████████████████   17.5M ops/sec
🥈 Valtio             ███                                        1.2M ops/sec
🥉 MobX               ███                                        1.1M ops/sec
 Jotai                                                         0 ops/sec
 Preact Signals                                                0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Solid Signals                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 17.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.2M | 0.001ms | 0.002ms | 1000 |
| MobX | 1.1M | 0.001ms | 0.002ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Zen                ████████████████████████████████████████   19.7M ops/sec
🥈 Valtio             ███████                                    3.4M ops/sec
🥉 MobX               ████                                       1.7M ops/sec
 Jotai                                                         0 ops/sec
 Preact Signals                                                0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Solid Signals                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.7M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.4M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.7M | 0.001ms | 0.004ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |

#### Dynamic Dependencies

```
🥇 Zen                ████████████████████████████████████████   19.9M ops/sec
🥈 MobX               ████████████████████████████████           16.0M ops/sec
🥉 Solid Signals      █████████████████████                      10.3M ops/sec
 Zustand            █████████████                              6.3M ops/sec
 Valtio             ███████████                                5.3M ops/sec
 Jotai                                                         0 ops/sec
 Preact Signals                                                0 ops/sec
 Redux Toolkit                                                 0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 19.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 16.0M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 10.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 6.3M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 Zen                ████████████████████████████████████████   2.7M ops/sec
🥈 MobX               ██████████████                             926K ops/sec
🥉 Solid Signals      ████████████                               787K ops/sec
 Valtio             ████                                       243K ops/sec
 Jotai                                                         0 ops/sec
 Preact Signals                                                0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 926K | 0.001ms | 0.003ms | 1000 |
| Solid Signals | 787K | 0.001ms | 0.009ms | 1000 |
| Valtio | 243K | 0.004ms | 0.020ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Zen                ████████████████████████████████████████   17.9M ops/sec
🥈 Valtio             ███                                        1.3M ops/sec
🥉 MobX               ██                                         937K ops/sec
 Jotai                                                         0 ops/sec
 Preact Signals                                                0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Solid Signals                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 17.9M | 0.000ms | 0.000ms | 1000 |
| Valtio | 1.3M | 0.001ms | 0.002ms | 1000 |
| MobX | 937K | 0.001ms | 0.003ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 MobX               ████████████████████████████████████████   1.3M ops/sec
🥈 Solid Signals      ████████████████████████████████████       1.2M ops/sec
🥉 Zen                ██████████████████████████████████         1.1M ops/sec
 Valtio             ███████████████                            492K ops/sec
 Zustand            ███                                        108K ops/sec
 Jotai                                                         0 ops/sec
 Preact Signals                                                0 ops/sec
 Redux Toolkit                                                 0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.3M | 0.001ms | 0.005ms | 1000 |
| Solid Signals | 1.2M | 0.001ms | 0.005ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.001ms | 1000 |
| Valtio | 492K | 0.002ms | 0.007ms | 1000 |
| Zustand | 108K | 0.009ms | 0.012ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 Zen                ████████████████████████████████████████   11.9M ops/sec
🥈 Solid Signals      █████████████                              3.9M ops/sec
🥉 MobX               ███████                                    2.2M ops/sec
 Valtio             █████                                      1.6M ops/sec
 Jotai                                                         0 ops/sec
 Preact Signals                                                0 ops/sec
 Redux Toolkit                                                 0 ops/sec
 Zustand                                                       0 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 11.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 3.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.2M | 0.000ms | 0.003ms | 1000 |
| Valtio | 1.6M | 0.001ms | 0.003ms | 1000 |
| Jotai | 0 | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 0 | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 0 | 0.000ms | 0.000ms | 1000 |
| Zustand | 0 | 0.000ms | 0.000ms | 1000 |


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

**Total**: 28 tests × 8 libraries = 224 benchmark runs

---

## 🚀 Libraries Tested

- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) v3.0.0 • 1.66 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 2.66 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 17.56 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) v2.15.1 • 4.29 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) v2.4.0 • 3.04 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) v2.10.1 • 13.83 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)
- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 3.96 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.59 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)

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

*Generated on 2025-11-13T21:09:48.021Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
