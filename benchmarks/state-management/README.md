<div align="center">

# State Management Benchmarks

Comprehensive performance benchmarks for React state-management libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2011,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 79.6/100 score
- **⚖️ Best Balance**: Zen - Great performance (78.8/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 79.6/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 78.8/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 64.0/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 35.7/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 5.9/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 79.6/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 78.8/100 | 99% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 64.0/100 | 80% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 35.7/100 | 45% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.9/100 | 7% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.3/100 | 5% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.9/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.6/100 | 2% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **79.6** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **78.8** | **1.19 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **64.0** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **35.7** | **1.17 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **5.9** | **3.07 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **4.3** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **2.9** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **1.6** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   2.2M ops/sec
🥈 Zen                ███████████████████████████████████        1.9M ops/sec
🥉 Preact Signals     ████████████████████████████████           1.7M ops/sec
 Solid Signals      ██████████████████████████████             1.6M ops/sec
 Jotai              █████                                      249K ops/sec
 Valtio             ██                                         103K ops/sec
 Redux Toolkit      ██                                         88K ops/sec
 MobX               ██                                         88K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.2M | 0.000ms | 0.002ms | 1000 |
| Zen | 1.9M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.7M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.6M | 0.001ms | 0.002ms | 1000 |
| Jotai | 249K | 0.004ms | 0.008ms | 1000 |
| Valtio | 103K | 0.010ms | 0.027ms | 1000 |
| Redux Toolkit | 88K | 0.011ms | 0.024ms | 1000 |
| MobX | 88K | 0.011ms | 0.030ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   2.2M ops/sec
🥈 Zen                ███████████████████████████████████        1.9M ops/sec
🥉 Preact Signals     ██████████████████████████████             1.6M ops/sec
 Solid Signals      ███████████████████████████                1.5M ops/sec
 Valtio             ███                                        176K ops/sec
 MobX               ██                                         105K ops/sec
 Redux Toolkit      ██                                         99K ops/sec
 Jotai              █                                          46K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.9M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.6M | 0.001ms | 0.001ms | 1000 |
| Solid Signals | 1.5M | 0.001ms | 0.002ms | 1000 |
| Valtio | 176K | 0.006ms | 0.013ms | 1000 |
| MobX | 105K | 0.010ms | 0.018ms | 1000 |
| Redux Toolkit | 99K | 0.010ms | 0.043ms | 1000 |
| Jotai | 46K | 0.022ms | 0.062ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   1.3M ops/sec
🥈 Preact Signals     ███████████████████████████████            1.0M ops/sec
🥉 Zustand            ████████████████████████████               890K ops/sec
 Zen                ████████████████████                       641K ops/sec
 Valtio             █████                                      172K ops/sec
 Redux Toolkit      ████                                       116K ops/sec
 MobX               ██                                         67K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.3M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.003ms | 1000 |
| Zustand | 890K | 0.001ms | 0.002ms | 1000 |
| Zen | 641K | 0.002ms | 0.003ms | 1000 |
| Valtio | 172K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 116K | 0.009ms | 0.014ms | 1000 |
| MobX | 67K | 0.015ms | 0.024ms | 1000 |
| Jotai | 7K | 0.144ms | 0.382ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   3.4M ops/sec
🥈 Preact Signals     ███████████████████████████████████        2.9M ops/sec
🥉 Solid Signals      ███████████████████████████████            2.6M ops/sec
 Zustand            ███████████████████████                    2.0M ops/sec
 Jotai              ██                                         200K ops/sec
 Valtio             ██                                         195K ops/sec
 MobX               █                                          113K ops/sec
 Redux Toolkit      █                                          60K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.001ms | 0.001ms | 1000 |
| Jotai | 200K | 0.005ms | 0.010ms | 1000 |
| Valtio | 195K | 0.005ms | 0.011ms | 1000 |
| MobX | 113K | 0.009ms | 0.017ms | 1000 |
| Redux Toolkit | 60K | 0.017ms | 0.028ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   2.5M ops/sec
🥈 Solid Signals      ███████████████████████████████████████    2.4M ops/sec
🥉 Preact Signals     ███████████████████████████████████████    2.4M ops/sec
 Zustand            █████████                                  534K ops/sec
 Valtio             ███                                        170K ops/sec
 MobX               ██                                         98K ops/sec
 Jotai              █                                          66K ops/sec
 Redux Toolkit                                                 22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.5M | 0.000ms | 0.002ms | 1000 |
| Solid Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 534K | 0.002ms | 0.005ms | 1000 |
| Valtio | 170K | 0.006ms | 0.011ms | 1000 |
| MobX | 98K | 0.010ms | 0.030ms | 1000 |
| Jotai | 66K | 0.015ms | 0.020ms | 1000 |
| Redux Toolkit | 22K | 0.045ms | 0.070ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   1.4M ops/sec
🥈 Solid Signals      ████████████████████████████████           1.2M ops/sec
🥉 Preact Signals     █████████████████████████████              1.0M ops/sec
 Zustand            ███                                        118K ops/sec
 MobX               ██                                         67K ops/sec
 Valtio             ██                                         58K ops/sec
 Jotai                                                         10K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 1.4M | 0.001ms | 0.001ms | 1000 |
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.0M | 0.001ms | 0.002ms | 1000 |
| Zustand | 118K | 0.008ms | 0.011ms | 1000 |
| MobX | 67K | 0.015ms | 0.022ms | 1000 |
| Valtio | 58K | 0.017ms | 0.039ms | 1000 |
| Jotai | 10K | 0.096ms | 0.168ms | 1000 |
| Redux Toolkit | 3K | 0.304ms | 0.679ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   412K ops/sec
🥈 Preact Signals     ████████████████████████████               285K ops/sec
🥉 Solid Signals      ██████████████████████                     230K ops/sec
 Zustand            █                                          14K ops/sec
 MobX               █                                          12K ops/sec
 Valtio             █                                          9K ops/sec
 Jotai                                                         1K ops/sec
 Redux Toolkit                                                 341 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 412K | 0.002ms | 0.005ms | 1000 |
| Preact Signals | 285K | 0.004ms | 0.007ms | 1000 |
| Solid Signals | 230K | 0.004ms | 0.012ms | 1000 |
| Zustand | 14K | 0.074ms | 0.084ms | 1000 |
| MobX | 12K | 0.080ms | 0.101ms | 1000 |
| Valtio | 9K | 0.107ms | 0.145ms | 1000 |
| Jotai | 1K | 0.895ms | 1.437ms | 1000 |
| Redux Toolkit | 341 | 2.932ms | 3.757ms | 1000 |

### Advanced Operations

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   2.8M ops/sec
🥈 Solid Signals      ███████████████████████████████████        2.4M ops/sec
🥉 Zustand            █████████████████████████████████          2.3M ops/sec
 Preact Signals     ██████████                                 699K ops/sec
 Jotai              ███                                        209K ops/sec
 Valtio             ███                                        194K ops/sec
 MobX               ██                                         118K ops/sec
 Redux Toolkit      █                                          61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 699K | 0.001ms | 0.002ms | 1000 |
| Jotai | 209K | 0.005ms | 0.010ms | 1000 |
| Valtio | 194K | 0.005ms | 0.008ms | 1000 |
| MobX | 118K | 0.008ms | 0.014ms | 1000 |
| Redux Toolkit | 61K | 0.016ms | 0.030ms | 1000 |

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   3.1M ops/sec
🥈 Preact Signals     ███████████████████████████████████        2.7M ops/sec
🥉 Solid Signals      ████████████████████████████████           2.5M ops/sec
 Zustand            ████████████████████████████               2.1M ops/sec
 Jotai              ███                                        234K ops/sec
 Valtio             ██                                         120K ops/sec
 MobX               █                                          89K ops/sec
 Redux Toolkit      █                                          57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.001ms | 1000 |
| Jotai | 234K | 0.004ms | 0.008ms | 1000 |
| Valtio | 120K | 0.008ms | 0.028ms | 1000 |
| MobX | 89K | 0.011ms | 0.020ms | 1000 |
| Redux Toolkit | 57K | 0.018ms | 0.028ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   2.6M ops/sec
🥈 Preact Signals     ████████████████████████████████████       2.4M ops/sec
🥉 Solid Signals      █████████████████████████████████          2.2M ops/sec
 Zustand            ███████████████                            967K ops/sec
 Jotai              ███                                        176K ops/sec
 Valtio             ██                                         141K ops/sec
 MobX               █                                          74K ops/sec
 Redux Toolkit      █                                          43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.6M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.002ms | 1000 |
| Solid Signals | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 967K | 0.001ms | 0.005ms | 1000 |
| Jotai | 176K | 0.006ms | 0.010ms | 1000 |
| Valtio | 141K | 0.007ms | 0.018ms | 1000 |
| MobX | 74K | 0.013ms | 0.073ms | 1000 |
| Redux Toolkit | 43K | 0.023ms | 0.045ms | 1000 |

#### Computed Value Access

```
🥇 Solid Signals      ████████████████████████████████████████   2.8M ops/sec
🥈 Zustand            ███████████████████████████████████████    2.7M ops/sec
🥉 Preact Signals     ██████████████████████████████████         2.4M ops/sec
 Zen                ████████████████████████████               2.0M ops/sec
 Jotai              ███                                        184K ops/sec
 Valtio             ██                                         154K ops/sec
 Redux Toolkit      ██                                         132K ops/sec
 MobX               ██                                         114K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.002ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 184K | 0.005ms | 0.010ms | 1000 |
| Valtio | 154K | 0.006ms | 0.008ms | 1000 |
| Redux Toolkit | 132K | 0.008ms | 0.012ms | 1000 |
| MobX | 114K | 0.009ms | 0.018ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Zen                ████████████████████████████████████████   678K ops/sec
🥈 Preact Signals     ██████████████████████████████████████     636K ops/sec
🥉 Solid Signals      ███████████████████████████████            524K ops/sec
 Zustand            ██████████████████                         305K ops/sec
 Valtio             ██████                                     107K ops/sec
 MobX               █████                                      93K ops/sec
 Jotai              ███                                        44K ops/sec
 Redux Toolkit      █                                          12K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 678K | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 636K | 0.002ms | 0.003ms | 1000 |
| Solid Signals | 524K | 0.002ms | 0.006ms | 1000 |
| Zustand | 305K | 0.003ms | 0.006ms | 1000 |
| Valtio | 107K | 0.009ms | 0.018ms | 1000 |
| MobX | 93K | 0.011ms | 0.018ms | 1000 |
| Jotai | 44K | 0.023ms | 0.034ms | 1000 |
| Redux Toolkit | 12K | 0.080ms | 0.131ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Zen                ████████████████████████████████████████   203K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   201K ops/sec
🥉 Solid Signals      ███████████████████████████████████        178K ops/sec
 Zustand            ███████████████████                        94K ops/sec
 Valtio             ███████████                                58K ops/sec
 MobX               ███████████                                58K ops/sec
 Jotai              ███                                        16K ops/sec
 Redux Toolkit      █                                          6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 203K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 201K | 0.005ms | 0.008ms | 1000 |
| Solid Signals | 178K | 0.006ms | 0.008ms | 1000 |
| Zustand | 94K | 0.011ms | 0.014ms | 1000 |
| Valtio | 58K | 0.017ms | 0.029ms | 1000 |
| MobX | 58K | 0.017ms | 0.025ms | 1000 |
| Jotai | 16K | 0.062ms | 0.099ms | 1000 |
| Redux Toolkit | 6K | 0.178ms | 0.595ms | 1000 |

### Real-World Scenarios

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   3.1M ops/sec
🥈 Preact Signals     ████████████████████████████████████       2.8M ops/sec
🥉 Solid Signals      ███████████████████████████████            2.4M ops/sec
 Zustand            ██████████████████                         1.4M ops/sec
 Valtio             ██                                         163K ops/sec
 Jotai              ██                                         135K ops/sec
 MobX               ██                                         121K ops/sec
 Redux Toolkit      █                                          49K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.4M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.4M | 0.001ms | 0.002ms | 1000 |
| Valtio | 163K | 0.006ms | 0.010ms | 1000 |
| Jotai | 135K | 0.007ms | 0.013ms | 1000 |
| MobX | 121K | 0.008ms | 0.014ms | 1000 |
| Redux Toolkit | 49K | 0.020ms | 0.027ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   2.7M ops/sec
🥈 Zen                ███████████████████████████████████████    2.7M ops/sec
🥉 Solid Signals      ███████████████████████████████████        2.4M ops/sec
 Zustand            █████████████████████                      1.4M ops/sec
 Jotai              ███                                        173K ops/sec
 Valtio             ██                                         171K ops/sec
 MobX               ██                                         116K ops/sec
 Redux Toolkit      █                                          45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.4M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.4M | 0.001ms | 0.003ms | 1000 |
| Jotai | 173K | 0.006ms | 0.011ms | 1000 |
| Valtio | 171K | 0.006ms | 0.010ms | 1000 |
| MobX | 116K | 0.009ms | 0.014ms | 1000 |
| Redux Toolkit | 45K | 0.022ms | 0.039ms | 1000 |

#### Cache Invalidation

```
🥇 Solid Signals      ████████████████████████████████████████   3.3M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    3.2M ops/sec
🥉 Zen                █████████████████████████████████████      3.0M ops/sec
 Zustand            ██████████████████████                     1.8M ops/sec
 Jotai              ██                                         191K ops/sec
 Valtio             ██                                         166K ops/sec
 MobX               █                                          119K ops/sec
 Redux Toolkit      █                                          70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 3.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.0M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.8M | 0.001ms | 0.002ms | 1000 |
| Jotai | 191K | 0.005ms | 0.011ms | 1000 |
| Valtio | 166K | 0.006ms | 0.009ms | 1000 |
| MobX | 119K | 0.008ms | 0.014ms | 1000 |
| Redux Toolkit | 70K | 0.014ms | 0.022ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   1.3M ops/sec
🥈 Zen                █████                                      169K ops/sec
🥉 Zustand            ████                                       141K ops/sec
 Preact Signals     ████                                       136K ops/sec
 Valtio             ██                                         63K ops/sec
 Redux Toolkit      █                                          46K ops/sec
 MobX               █                                          17K ops/sec
 Jotai                                                         15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.3M | 0.001ms | 0.003ms | 1000 |
| Zen | 169K | 0.006ms | 0.009ms | 1000 |
| Zustand | 141K | 0.007ms | 0.018ms | 1000 |
| Preact Signals | 136K | 0.007ms | 0.012ms | 1000 |
| Valtio | 63K | 0.016ms | 0.032ms | 1000 |
| Redux Toolkit | 46K | 0.022ms | 0.040ms | 1000 |
| MobX | 17K | 0.060ms | 0.164ms | 1000 |
| Jotai | 15K | 0.068ms | 0.247ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   360K ops/sec
🥈 Zustand            █████████████████████                      188K ops/sec
🥉 Zen                ███████████                                95K ops/sec
 Preact Signals     ████████                                   76K ops/sec
 Redux Toolkit      ██████                                     54K ops/sec
 Valtio             ████                                       40K ops/sec
 MobX               █                                          13K ops/sec
 Jotai                                                         619 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 360K | 0.003ms | 0.003ms | 1000 |
| Zustand | 188K | 0.005ms | 0.007ms | 1000 |
| Zen | 95K | 0.010ms | 0.012ms | 1000 |
| Preact Signals | 76K | 0.013ms | 0.016ms | 1000 |
| Redux Toolkit | 54K | 0.019ms | 0.026ms | 1000 |
| Valtio | 40K | 0.025ms | 0.029ms | 1000 |
| MobX | 13K | 0.077ms | 0.089ms | 1000 |
| Jotai | 619 | 1.615ms | 2.221ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   58K ops/sec
🥈 Solid Signals      ██████████████████                         26K ops/sec
🥉 Preact Signals     ██████████████████                         26K ops/sec
 MobX               █                                          1K ops/sec
 Zustand            █                                          1K ops/sec
 Valtio             █                                          883 ops/sec
 Jotai                                                         101 ops/sec
 Redux Toolkit                                                 31 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 58K | 0.017ms | 0.021ms | 1000 |
| Solid Signals | 26K | 0.038ms | 0.279ms | 1000 |
| Preact Signals | 26K | 0.038ms | 0.041ms | 1000 |
| MobX | 1K | 0.741ms | 1.275ms | 1000 |
| Zustand | 1K | 0.794ms | 1.203ms | 1000 |
| Valtio | 883 | 1.133ms | 1.997ms | 1000 |
| Jotai | 101 | 9.902ms | 14.213ms | 1000 |
| Redux Toolkit | 31 | 32.424ms | 43.046ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   171K ops/sec
🥈 Zustand            █████████████████████████████              124K ops/sec
🥉 Solid Signals      █████████████████████                      89K ops/sec
 Preact Signals     ████████████████████                       85K ops/sec
 Jotai              ██████████████████                         78K ops/sec
 MobX               ███                                        14K ops/sec
 Valtio             █                                          5K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 171K | 0.006ms | 0.012ms | 1000 |
| Zustand | 124K | 0.008ms | 0.013ms | 1000 |
| Solid Signals | 89K | 0.011ms | 0.029ms | 1000 |
| Preact Signals | 85K | 0.012ms | 0.030ms | 1000 |
| Jotai | 78K | 0.013ms | 0.026ms | 1000 |
| MobX | 14K | 0.071ms | 0.127ms | 1000 |
| Valtio | 5K | 0.205ms | 0.733ms | 1000 |
| Redux Toolkit | 1K | 0.725ms | 1.303ms | 1000 |


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

- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) (3.96 KB gzip) - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) (1.19 KB gzip) - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) (3.04 KB gzip) - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) (1.17 KB gzip) - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) (3.07 KB gzip) - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) (17.56 KB gzip) - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) (4.29 KB gzip) - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) (13.83 KB gzip) - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)

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

*Generated on 2025-11-12T06:12:26.789Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
