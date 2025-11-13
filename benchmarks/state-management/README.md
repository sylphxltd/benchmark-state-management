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

- **⚡ Maximum Performance**: Zen - Fastest overall with 81.9/100 score
- **⚖️ Best Balance**: Solid Signals - Great performance (78.6/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen** (Score: 81.9/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Solid Signals** (Score: 78.6/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zustand** (Score: 42.1/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Preact Signals** (Score: 19.8/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Valtio** (Score: 6.5/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen](https://github.com/SylphxAI/zen)** | 81.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥈 2 | **[Solid Signals](https://github.com/solidjs/solid)** | 78.6/100 | 96% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥉 3 | **[Zustand](https://github.com/pmndrs/zustand)** | 42.1/100 | 51% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  4 | **[Preact Signals](https://github.com/preactjs/signals)** | 19.8/100 | 24% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.5/100 | 8% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.8/100 | 6% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.3/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.8/100 | 2% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen](https://github.com/SylphxAI/zen)** | **81.9** | **1.68 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Solid Signals](https://github.com/solidjs/solid)** | **78.6** | **5.17 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **42.1** | **0.24 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **19.8** | **1.63 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **6.5** | **0.24 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **4.8** | **46.80 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **3.3** | **0.24 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **1.8** | **18.23 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Zen                ███████████████████████████████████████    1.1M ops/sec
🥉 Zustand            █████████████████████████████████          973K ops/sec
 Preact Signals     ███████                                    207K ops/sec
 Valtio             █████                                      142K ops/sec
 Redux Toolkit      ███                                        96K ops/sec
 MobX               ██                                         58K ops/sec
 Jotai                                                         6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Zen | 1.1M | 0.001ms | 0.003ms | 1000 |
| Zustand | 973K | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 207K | 0.005ms | 0.019ms | 1000 |
| Valtio | 142K | 0.007ms | 0.014ms | 1000 |
| Redux Toolkit | 96K | 0.010ms | 0.023ms | 1000 |
| MobX | 58K | 0.017ms | 0.029ms | 1000 |
| Jotai | 6K | 0.155ms | 0.457ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   2.0M ops/sec
🥈 Zen                █████████████████████████████              1.5M ops/sec
🥉 Solid Signals      ██████████████████████                     1.1M ops/sec
 Preact Signals     ██████                                     281K ops/sec
 Valtio             ███                                        161K ops/sec
 Redux Toolkit      ██                                         105K ops/sec
 MobX               ██                                         101K ops/sec
 Jotai              █                                          47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.001ms | 1000 |
| Solid Signals | 1.1M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 281K | 0.004ms | 0.014ms | 1000 |
| Valtio | 161K | 0.006ms | 0.012ms | 1000 |
| Redux Toolkit | 105K | 0.010ms | 0.018ms | 1000 |
| MobX | 101K | 0.010ms | 0.021ms | 1000 |
| Jotai | 47K | 0.021ms | 0.056ms | 1000 |

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   1.8M ops/sec
🥈 Zen                ██████████████████████████████             1.4M ops/sec
🥉 Solid Signals      ███████████████████████████                1.2M ops/sec
 Preact Signals     ███████                                    342K ops/sec
 Jotai              ██████                                     261K ops/sec
 Valtio             ███                                        123K ops/sec
 MobX               ██                                         99K ops/sec
 Redux Toolkit      █                                          63K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 1.8M | 0.001ms | 0.004ms | 1000 |
| Zen | 1.4M | 0.001ms | 0.003ms | 1000 |
| Solid Signals | 1.2M | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 342K | 0.003ms | 0.011ms | 1000 |
| Jotai | 261K | 0.004ms | 0.009ms | 1000 |
| Valtio | 123K | 0.008ms | 0.017ms | 1000 |
| MobX | 99K | 0.010ms | 0.020ms | 1000 |
| Redux Toolkit | 63K | 0.016ms | 0.062ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   2.4M ops/sec
🥈 Solid Signals      ███████████████████████████████            1.8M ops/sec
🥉 Zustand            ████████████                               732K ops/sec
 Preact Signals     ██████                                     368K ops/sec
 Valtio             ██                                         129K ops/sec
 MobX               ██                                         93K ops/sec
 Jotai              █                                          61K ops/sec
 Redux Toolkit                                                 22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.4M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 1.8M | 0.001ms | 0.001ms | 1000 |
| Zustand | 732K | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 368K | 0.003ms | 0.011ms | 1000 |
| Valtio | 129K | 0.008ms | 0.029ms | 1000 |
| MobX | 93K | 0.011ms | 0.020ms | 1000 |
| Jotai | 61K | 0.016ms | 0.027ms | 1000 |
| Redux Toolkit | 22K | 0.046ms | 0.075ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   716K ops/sec
🥈 Preact Signals     ██████████████                             248K ops/sec
🥉 Zen                █████████████                              235K ops/sec
 Zustand            ██████                                     108K ops/sec
 MobX               ███                                        61K ops/sec
 Valtio             ███                                        54K ops/sec
 Jotai              █                                          10K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 716K | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 248K | 0.004ms | 0.014ms | 1000 |
| Zen | 235K | 0.004ms | 0.010ms | 1000 |
| Zustand | 108K | 0.009ms | 0.014ms | 1000 |
| MobX | 61K | 0.016ms | 0.026ms | 1000 |
| Valtio | 54K | 0.018ms | 0.026ms | 1000 |
| Jotai | 10K | 0.101ms | 0.150ms | 1000 |
| Redux Toolkit | 3K | 0.334ms | 0.741ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   416K ops/sec
🥈 Solid Signals      ██████████████████████                     233K ops/sec
🥉 Preact Signals     ██████████                                 104K ops/sec
 MobX               █                                          13K ops/sec
 Zustand            █                                          12K ops/sec
 Valtio             █                                          9K ops/sec
 Jotai                                                         1K ops/sec
 Redux Toolkit                                                 324 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 416K | 0.002ms | 0.005ms | 1000 |
| Solid Signals | 233K | 0.004ms | 0.013ms | 1000 |
| Preact Signals | 104K | 0.010ms | 0.032ms | 1000 |
| MobX | 13K | 0.075ms | 0.110ms | 1000 |
| Zustand | 12K | 0.084ms | 0.190ms | 1000 |
| Valtio | 9K | 0.110ms | 0.165ms | 1000 |
| Jotai | 1K | 0.918ms | 1.339ms | 1000 |
| Redux Toolkit | 324 | 3.089ms | 3.939ms | 1000 |

#### Single Write

```
🥇 Solid Signals      ████████████████████████████████████████   2.2M ops/sec
🥈 Zen                ████████████████████████████████████████   2.2M ops/sec
🥉 Zustand            ████████████████████████████████████████   2.2M ops/sec
 Preact Signals     ████████                                   428K ops/sec
 Jotai              ████                                       199K ops/sec
 Valtio             ███                                        161K ops/sec
 MobX               ██                                         105K ops/sec
 Redux Toolkit      █                                          53K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 428K | 0.002ms | 0.012ms | 1000 |
| Jotai | 199K | 0.005ms | 0.010ms | 1000 |
| Valtio | 161K | 0.006ms | 0.014ms | 1000 |
| MobX | 105K | 0.010ms | 0.019ms | 1000 |
| Redux Toolkit | 53K | 0.019ms | 0.033ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   3.0M ops/sec
🥈 Solid Signals      ██████████████████████████████████         2.5M ops/sec
🥉 Zustand            █████████████████████████████              2.2M ops/sec
 Preact Signals     █████                                      382K ops/sec
 Jotai              ███                                        224K ops/sec
 Valtio             ██                                         140K ops/sec
 MobX               █                                          84K ops/sec
 Redux Toolkit      █                                          56K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 382K | 0.003ms | 0.011ms | 1000 |
| Jotai | 224K | 0.004ms | 0.009ms | 1000 |
| Valtio | 140K | 0.007ms | 0.013ms | 1000 |
| MobX | 84K | 0.012ms | 0.020ms | 1000 |
| Redux Toolkit | 56K | 0.018ms | 0.027ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   2.6M ops/sec
🥈 Solid Signals      ███████████████████████████████████        2.2M ops/sec
🥉 Zustand            ██████████████████████████                 1.6M ops/sec
 Jotai              ███                                        173K ops/sec
 Preact Signals     ██                                         126K ops/sec
 Valtio             ██                                         125K ops/sec
 MobX               █                                          82K ops/sec
 Redux Toolkit      █                                          41K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.6M | 0.001ms | 0.002ms | 1000 |
| Jotai | 173K | 0.006ms | 0.010ms | 1000 |
| Preact Signals | 126K | 0.008ms | 0.014ms | 1000 |
| Valtio | 125K | 0.008ms | 0.017ms | 1000 |
| MobX | 82K | 0.012ms | 0.018ms | 1000 |
| Redux Toolkit | 41K | 0.025ms | 0.046ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   2.7M ops/sec
🥈 Zustand            ███████████████████████████████████████    2.6M ops/sec
🥉 Solid Signals      █████████████                              885K ops/sec
 Preact Signals     █████                                      354K ops/sec
 Jotai              ███                                        212K ops/sec
 Valtio             ██                                         165K ops/sec
 Redux Toolkit      ██                                         123K ops/sec
 MobX               █                                          91K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 885K | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 354K | 0.003ms | 0.022ms | 1000 |
| Jotai | 212K | 0.005ms | 0.013ms | 1000 |
| Valtio | 165K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 123K | 0.008ms | 0.013ms | 1000 |
| MobX | 91K | 0.011ms | 0.020ms | 1000 |

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   2.7M ops/sec
🥈 Solid Signals      █████████████████████████████████████      2.5M ops/sec
🥉 Zustand            ████████████████████████████████           2.2M ops/sec
 Preact Signals     █████                                      372K ops/sec
 Jotai              ███                                        225K ops/sec
 Valtio             ███                                        174K ops/sec
 MobX               ██                                         121K ops/sec
 Redux Toolkit      █                                          67K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 372K | 0.003ms | 0.012ms | 1000 |
| Jotai | 225K | 0.004ms | 0.010ms | 1000 |
| Valtio | 174K | 0.006ms | 0.008ms | 1000 |
| MobX | 121K | 0.008ms | 0.015ms | 1000 |
| Redux Toolkit | 67K | 0.015ms | 0.023ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Zen                ████████████████████████████████████████   569K ops/sec
🥈 Solid Signals      ██████████████████████████████████████     542K ops/sec
🥉 Zustand            ████████████████████                       289K ops/sec
 Preact Signals     █████████                                  134K ops/sec
 Valtio             ███████                                    97K ops/sec
 MobX               █████                                      78K ops/sec
 Jotai              ███                                        42K ops/sec
 Redux Toolkit      █                                          11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 569K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 542K | 0.002ms | 0.004ms | 1000 |
| Zustand | 289K | 0.003ms | 0.005ms | 1000 |
| Preact Signals | 134K | 0.007ms | 0.023ms | 1000 |
| Valtio | 97K | 0.010ms | 0.018ms | 1000 |
| MobX | 78K | 0.013ms | 0.020ms | 1000 |
| Jotai | 42K | 0.024ms | 0.041ms | 1000 |
| Redux Toolkit | 11K | 0.090ms | 0.136ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   142K ops/sec
🥈 Zen                ████████████████████████████████           113K ops/sec
🥉 Zustand            ██████████████████████████                 91K ops/sec
 Valtio             ██████████████                             50K ops/sec
 MobX               ██████████████                             49K ops/sec
 Preact Signals     █████████████                              45K ops/sec
 Jotai              ████                                       15K ops/sec
 Redux Toolkit      █                                          5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 142K | 0.007ms | 0.020ms | 1000 |
| Zen | 113K | 0.009ms | 0.022ms | 1000 |
| Zustand | 91K | 0.011ms | 0.016ms | 1000 |
| Valtio | 50K | 0.020ms | 0.027ms | 1000 |
| MobX | 49K | 0.020ms | 0.032ms | 1000 |
| Preact Signals | 45K | 0.022ms | 0.056ms | 1000 |
| Jotai | 15K | 0.067ms | 0.100ms | 1000 |
| Redux Toolkit | 5K | 0.190ms | 0.635ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   3.0M ops/sec
🥈 Solid Signals      ████████████████████████████████████       2.7M ops/sec
🥉 Zustand            █████████████████████                      1.5M ops/sec
 Preact Signals     ████████████████████                       1.5M ops/sec
 Jotai              ██                                         183K ops/sec
 Valtio             ██                                         155K ops/sec
 MobX               █                                          91K ops/sec
 Redux Toolkit      █                                          64K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.5M | 0.001ms | 0.001ms | 1000 |
| Jotai | 183K | 0.005ms | 0.011ms | 1000 |
| Valtio | 155K | 0.006ms | 0.011ms | 1000 |
| MobX | 91K | 0.011ms | 0.019ms | 1000 |
| Redux Toolkit | 64K | 0.016ms | 0.024ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   2.2M ops/sec
🥈 Zustand            ███████████████████████████████            1.7M ops/sec
🥉 Solid Signals      ████████████████████                       1.1M ops/sec
 Preact Signals     █████████████████                          924K ops/sec
 Jotai              ███                                        149K ops/sec
 Valtio             ██                                         130K ops/sec
 MobX               ██                                         103K ops/sec
 Redux Toolkit      █                                          42K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.2M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.7M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.1M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 924K | 0.001ms | 0.003ms | 1000 |
| Jotai | 149K | 0.007ms | 0.013ms | 1000 |
| Valtio | 130K | 0.008ms | 0.010ms | 1000 |
| MobX | 103K | 0.010ms | 0.018ms | 1000 |
| Redux Toolkit | 42K | 0.024ms | 0.033ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Zen                █████                                      162K ops/sec
🥉 Zustand            █████                                      150K ops/sec
 Valtio             ██                                         60K ops/sec
 Preact Signals     █                                          44K ops/sec
 Redux Toolkit      █                                          43K ops/sec
 MobX               █                                          16K ops/sec
 Jotai                                                         14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.004ms | 1000 |
| Zen | 162K | 0.006ms | 0.010ms | 1000 |
| Zustand | 150K | 0.007ms | 0.013ms | 1000 |
| Valtio | 60K | 0.017ms | 0.034ms | 1000 |
| Preact Signals | 44K | 0.022ms | 0.063ms | 1000 |
| Redux Toolkit | 43K | 0.023ms | 0.038ms | 1000 |
| MobX | 16K | 0.063ms | 0.113ms | 1000 |
| Jotai | 14K | 0.072ms | 0.096ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   2.8M ops/sec
🥈 Solid Signals      ██████████████████████████████████         2.3M ops/sec
🥉 Preact Signals     ███████████████████                        1.3M ops/sec
 Zustand            ███████████                                781K ops/sec
 Valtio             ██                                         165K ops/sec
 Jotai              ██                                         146K ops/sec
 MobX               █                                          93K ops/sec
 Redux Toolkit      █                                          45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.3M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 1.3M | 0.001ms | 0.002ms | 1000 |
| Zustand | 781K | 0.001ms | 0.002ms | 1000 |
| Valtio | 165K | 0.006ms | 0.011ms | 1000 |
| Jotai | 146K | 0.007ms | 0.012ms | 1000 |
| MobX | 93K | 0.011ms | 0.016ms | 1000 |
| Redux Toolkit | 45K | 0.022ms | 0.031ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Zen                ████████████████████████████████████████   325K ops/sec
🥈 Solid Signals      ████████████████████████████████████████   322K ops/sec
🥉 Zustand            ██████████████████████                     177K ops/sec
 Preact Signals     ██████                                     51K ops/sec
 Redux Toolkit      ██████                                     47K ops/sec
 Valtio             ████                                       29K ops/sec
 MobX               █                                          10K ops/sec
 Jotai                                                         557 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 325K | 0.003ms | 0.004ms | 1000 |
| Solid Signals | 322K | 0.003ms | 0.004ms | 1000 |
| Zustand | 177K | 0.006ms | 0.007ms | 1000 |
| Preact Signals | 51K | 0.020ms | 0.028ms | 1000 |
| Redux Toolkit | 47K | 0.021ms | 0.028ms | 1000 |
| Valtio | 29K | 0.034ms | 0.045ms | 1000 |
| MobX | 10K | 0.100ms | 0.120ms | 1000 |
| Jotai | 557 | 1.794ms | 2.702ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   32K ops/sec
🥈 Solid Signals      ███████████████████████████████            25K ops/sec
🥉 Preact Signals     ██████████████████                         14K ops/sec
 MobX               ██                                         2K ops/sec
 Zustand            ██                                         1K ops/sec
 Valtio             █                                          1K ops/sec
 Jotai                                                         102 ops/sec
 Redux Toolkit                                                 32 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 32K | 0.031ms | 0.041ms | 1000 |
| Solid Signals | 25K | 0.040ms | 0.291ms | 1000 |
| Preact Signals | 14K | 0.069ms | 0.123ms | 1000 |
| MobX | 2K | 0.632ms | 0.912ms | 1000 |
| Zustand | 1K | 0.728ms | 0.933ms | 1000 |
| Valtio | 1K | 0.997ms | 1.321ms | 1000 |
| Jotai | 102 | 9.831ms | 12.859ms | 1000 |
| Redux Toolkit | 32 | 31.139ms | 37.904ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   163K ops/sec
🥈 Solid Signals      ██████████████████████████████████         136K ops/sec
🥉 Zustand            █████████████████████████████              119K ops/sec
 Jotai              ██████████████████                         72K ops/sec
 Preact Signals     ██████████████                             59K ops/sec
 MobX               ████                                       15K ops/sec
 Valtio             █                                          6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 163K | 0.006ms | 0.013ms | 1000 |
| Solid Signals | 136K | 0.007ms | 0.011ms | 1000 |
| Zustand | 119K | 0.008ms | 0.011ms | 1000 |
| Jotai | 72K | 0.014ms | 0.019ms | 1000 |
| Preact Signals | 59K | 0.017ms | 0.040ms | 1000 |
| MobX | 15K | 0.065ms | 0.092ms | 1000 |
| Valtio | 6K | 0.176ms | 0.617ms | 1000 |
| Redux Toolkit | 1K | 0.703ms | 1.126ms | 1000 |


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

- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) v3.0.0 • 1.68 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) v1.9.10 • 5.17 KB gzip - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) v5.0.8 • 0.24 KB gzip - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) v2.4.0 • 1.63 KB gzip - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) v2.2.0 • 0.24 KB gzip - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) v6.15.0 • 46.80 KB gzip - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) v2.15.1 • 0.24 KB gzip - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) v2.10.1 • 18.23 KB gzip - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)

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

*Generated on 2025-11-13T14:30:32.954Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
