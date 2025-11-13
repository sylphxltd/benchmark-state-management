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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 82.9/100 score
- **⚖️ Best Balance**: Zen - Great performance (54.9/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 82.9/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 54.9/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 45.7/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Valtio** (Score: 40.1/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


**MobX** (Score: 36.7/100)
- Simple, scalable state management with transparent reactive programming
- **Best for**: Automatic tracking, slow creation, largest bundle
- [GitHub](https://github.com/mobxjs/mobx) • [npm](https://www.npmjs.com/package/mobx)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 82.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 54.9/100 | 66% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 45.7/100 | 55% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Valtio](https://github.com/pmndrs/valtio)** | 40.1/100 | 48% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  5 | **[MobX](https://github.com/mobxjs/mobx)** | 36.7/100 | 44% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  6 | **[Zustand](https://github.com/pmndrs/zustand)** | 31.5/100 | 38% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.3/100 | 9% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.4/100 | 4% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **82.9** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **54.9** | **1.66 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **45.7** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **40.1** | **2.66 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **36.7** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **31.5** | **0.59 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **7.3** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **3.4** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### High-Frequency Read (1000x)

```
🥇 Valtio             ████████████████████████████████████████   30.9M ops/sec
🥈 Solid Signals      ████████████████████████████████████████   30.8M ops/sec
🥉 Redux Toolkit      █████████████████████████████████████      28.6M ops/sec
 Preact Signals     ███████████████████████████████████        27.2M ops/sec
 MobX               ████████████████████████                   18.6M ops/sec
 Zen                ████████████████████                       15.1M ops/sec
 Zustand            ███████████████████                        14.8M ops/sec
 Jotai              ██████                                     4.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 30.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 30.8M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 28.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 27.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 18.6M | 0.000ms | 0.001ms | 1000 |
| Zen | 15.1M | 0.000ms | 0.000ms | 1000 |
| Zustand | 14.8M | 0.000ms | 0.000ms | 1000 |
| Jotai | 4.3M | 0.000ms | 0.001ms | 1000 |

#### Moderate Read (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   13.6M ops/sec
🥈 Zen                ████████████████████████                   8.2M ops/sec
🥉 Zustand            ████████████████████████                   8.0M ops/sec
 Valtio             ███████████████████████                    7.7M ops/sec
 Preact Signals     ███████████████████                        6.6M ops/sec
 Redux Toolkit      ███████████████████                        6.4M ops/sec
 MobX               █████████                                  3.2M ops/sec
 Jotai              ███████                                    2.5M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 13.6M | 0.000ms | 0.000ms | 1000 |
| Zen | 8.2M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 7.7M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.6M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 6.4M | 0.000ms | 0.000ms | 1000 |
| MobX | 3.2M | 0.000ms | 0.003ms | 1000 |
| Jotai | 2.5M | 0.000ms | 0.002ms | 1000 |

#### Single Read

```
🥇 Redux Toolkit      ████████████████████████████████████████   16.7M ops/sec
🥈 Solid Signals      ██████████████████████████████████         14.3M ops/sec
🥉 Zustand            ███████████████████████████                11.2M ops/sec
 Valtio             █████████████████████                      8.8M ops/sec
 Zen                █████████████████                          7.3M ops/sec
 MobX               ███████████████                            6.4M ops/sec
 Preact Signals     ███████                                    2.9M ops/sec
 Jotai              ███                                        1.4M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Redux Toolkit | 16.7M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 14.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 11.2M | 0.000ms | 0.000ms | 1000 |
| Valtio | 8.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 7.3M | 0.000ms | 0.001ms | 1000 |
| MobX | 6.4M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.001ms | 1000 |
| Jotai | 1.4M | 0.001ms | 0.004ms | 1000 |

### Basic Write Operations

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   12.1M ops/sec
🥈 Zen                ████████████████████████████████████       10.9M ops/sec
🥉 Solid Signals      ███████████████████████████                8.2M ops/sec
 Zustand            ████████████████                           4.8M ops/sec
 MobX               ███████████████                            4.5M ops/sec
 Valtio             ██████████                                 2.9M ops/sec
 Jotai              █                                          451K ops/sec
 Redux Toolkit      █                                          196K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 12.1M | 0.000ms | 0.000ms | 1000 |
| Zen | 10.9M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 8.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.8M | 0.000ms | 0.001ms | 1000 |
| MobX | 4.5M | 0.000ms | 0.001ms | 1000 |
| Valtio | 2.9M | 0.000ms | 0.002ms | 1000 |
| Jotai | 451K | 0.002ms | 0.006ms | 1000 |
| Redux Toolkit | 196K | 0.005ms | 0.010ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   21.4M ops/sec
🥈 Solid Signals      ████████████████████████████               15.0M ops/sec
🥉 Preact Signals     ██████████████                             7.7M ops/sec
 MobX               ██████████                                 5.3M ops/sec
 Zustand            █████████                                  4.6M ops/sec
 Valtio             ███████                                    3.5M ops/sec
 Jotai              █                                          530K ops/sec
 Redux Toolkit                                                 256K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 21.4M | 0.000ms | 0.000ms | 1000 |
| Solid Signals | 15.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 7.7M | 0.000ms | 0.000ms | 1000 |
| MobX | 5.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 3.5M | 0.000ms | 0.002ms | 1000 |
| Jotai | 530K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 256K | 0.004ms | 0.007ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   5.7M ops/sec
🥈 Zen                ███████████████████████████████████████    5.6M ops/sec
🥉 Preact Signals     ████████████████████████████████           4.5M ops/sec
 Valtio             ███████████████████████████                3.9M ops/sec
 MobX               ██████████████████████                     3.1M ops/sec
 Zustand            █████████████████                          2.5M ops/sec
 Jotai              ███                                        442K ops/sec
 Redux Toolkit      █                                          196K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 5.7M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.6M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 4.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 3.9M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.5M | 0.000ms | 0.001ms | 1000 |
| Jotai | 442K | 0.002ms | 0.009ms | 1000 |
| Redux Toolkit | 196K | 0.005ms | 0.009ms | 1000 |

#### Single Write

```
🥇 Solid Signals      ████████████████████████████████████████   17.0M ops/sec
🥈 Zen                ████████████████████████████               12.1M ops/sec
🥉 Preact Signals     ███████████████                            6.4M ops/sec
 Zustand            ████████                                   3.6M ops/sec
 Valtio             █████                                      2.2M ops/sec
 MobX               ███                                        1.3M ops/sec
 Jotai              █                                          433K ops/sec
 Redux Toolkit                                                 127K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 17.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 12.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 6.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.002ms | 1000 |
| Valtio | 2.2M | 0.000ms | 0.002ms | 1000 |
| MobX | 1.3M | 0.001ms | 0.003ms | 1000 |
| Jotai | 433K | 0.002ms | 0.009ms | 1000 |
| Redux Toolkit | 127K | 0.008ms | 0.032ms | 1000 |

### Advanced Operations

#### Array Push

```
🥇 Solid Signals      ████████████████████████████████████████   915K ops/sec
🥈 Valtio             ████████████████████████████████           729K ops/sec
🥉 Zustand            ███████████████████████████████            720K ops/sec
 Preact Signals     ████████████████████████                   543K ops/sec
 Jotai              ██████████████████                         421K ops/sec
 Zen                █████████████████                          400K ops/sec
 MobX               █████████████                              307K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 915K | 0.001ms | 0.003ms | 1000 |
| Valtio | 729K | 0.001ms | 0.006ms | 1000 |
| Zustand | 720K | 0.001ms | 0.004ms | 1000 |
| Preact Signals | 543K | 0.002ms | 0.004ms | 1000 |
| Jotai | 421K | 0.002ms | 0.005ms | 1000 |
| Zen | 400K | 0.003ms | 0.004ms | 1000 |
| MobX | 307K | 0.003ms | 0.010ms | 1000 |
| Redux Toolkit | 3K | 0.337ms | 0.867ms | 1000 |

#### Array Update

```
🥇 Solid Signals      ████████████████████████████████████████   5.4M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     5.2M ops/sec
🥉 Valtio             ██████████████████████████████████████     5.1M ops/sec
 Zen                ██████████████████████████████████         4.6M ops/sec
 Zustand            ███████████████████████████                3.6M ops/sec
 MobX               ████████████████                           2.2M ops/sec
 Jotai              ████                                       492K ops/sec
 Redux Toolkit      █                                          139K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 5.4M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 5.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.2M | 0.000ms | 0.002ms | 1000 |
| Jotai | 492K | 0.002ms | 0.005ms | 1000 |
| Redux Toolkit | 139K | 0.007ms | 0.014ms | 1000 |

#### Computed Value Access

```
🥇 Solid Signals      ████████████████████████████████████████   15.5M ops/sec
🥈 Zen                █████████████████████████████              11.1M ops/sec
🥉 Valtio             ███████████████████████████                10.4M ops/sec
 Zustand            ███████████████                            5.8M ops/sec
 Redux Toolkit      █████████████                              5.1M ops/sec
 Preact Signals     ██████                                     2.1M ops/sec
 MobX               █████                                      1.9M ops/sec
 Jotai              ███                                        1.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 15.5M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.1M | 0.000ms | 0.000ms | 1000 |
| Valtio | 10.4M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.8M | 0.000ms | 0.001ms | 1000 |
| Redux Toolkit | 5.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.9M | 0.001ms | 0.004ms | 1000 |
| Jotai | 1.1M | 0.001ms | 0.001ms | 1000 |

#### Nested Object Update

```
🥇 Solid Signals      ████████████████████████████████████████   9.0M ops/sec
🥈 Zen                █████████████████                          3.9M ops/sec
🥉 Preact Signals     █████████████                              3.0M ops/sec
 Valtio             █████████                                  2.1M ops/sec
 Zustand            █████████                                  2.1M ops/sec
 MobX               ███████                                    1.5M ops/sec
 Jotai              ██                                         505K ops/sec
 Redux Toolkit      █                                          142K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 9.0M | 0.000ms | 0.001ms | 1000 |
| Zen | 3.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.0M | 0.000ms | 0.000ms | 1000 |
| Valtio | 2.1M | 0.000ms | 0.004ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.001ms | 1000 |
| MobX | 1.5M | 0.001ms | 0.003ms | 1000 |
| Jotai | 505K | 0.002ms | 0.004ms | 1000 |
| Redux Toolkit | 142K | 0.007ms | 0.023ms | 1000 |

### Async Operations

#### Async Throughput (20 ops)

```
🥇 Preact Signals     ████████████████████████████████████████   639K ops/sec
🥈 Solid Signals      █████████████████████████████████████      591K ops/sec
🥉 Zen                ██████████████████████████████████         542K ops/sec
 Zustand            ████████████████                           261K ops/sec
 MobX               ████████████████                           248K ops/sec
 Valtio             █████████████                              200K ops/sec
 Jotai              ███                                        40K ops/sec
 Redux Toolkit      █                                          13K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 639K | 0.002ms | 0.005ms | 1000 |
| Solid Signals | 591K | 0.002ms | 0.006ms | 1000 |
| Zen | 542K | 0.002ms | 0.008ms | 1000 |
| Zustand | 261K | 0.004ms | 0.008ms | 1000 |
| MobX | 248K | 0.004ms | 0.008ms | 1000 |
| Valtio | 200K | 0.005ms | 0.013ms | 1000 |
| Jotai | 40K | 0.025ms | 0.059ms | 1000 |
| Redux Toolkit | 13K | 0.080ms | 0.214ms | 1000 |

#### Concurrent Updates (50x)

```
🥇 Solid Signals      ████████████████████████████████████████   146K ops/sec
🥈 Preact Signals     ████████████████████████████████████████   146K ops/sec
🥉 Zustand            ██████████████████████████                 95K ops/sec
 Zen                ██████████████████████████                 95K ops/sec
 MobX               ███████████████████████                    86K ops/sec
 Valtio             █████████████████████                      76K ops/sec
 Jotai              ████                                       14K ops/sec
 Redux Toolkit      ██                                         6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 146K | 0.007ms | 0.022ms | 1000 |
| Preact Signals | 146K | 0.007ms | 0.011ms | 1000 |
| Zustand | 95K | 0.011ms | 0.018ms | 1000 |
| Zen | 95K | 0.011ms | 0.034ms | 1000 |
| MobX | 86K | 0.012ms | 0.028ms | 1000 |
| Valtio | 76K | 0.013ms | 0.020ms | 1000 |
| Jotai | 14K | 0.071ms | 0.174ms | 1000 |
| Redux Toolkit | 6K | 0.176ms | 0.568ms | 1000 |

### Real-World Scenarios

#### Cache Invalidation

```
🥇 Solid Signals      ████████████████████████████████████████   15.4M ops/sec
🥈 Zen                ██████████████████████████████             11.5M ops/sec
🥉 Valtio             ███████████                                4.2M ops/sec
 MobX               █████████                                  3.5M ops/sec
 Zustand            ████████                                   3.1M ops/sec
 Preact Signals     ██████                                     2.2M ops/sec
 Jotai              █                                          334K ops/sec
 Redux Toolkit      █                                          230K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 15.4M | 0.000ms | 0.000ms | 1000 |
| Zen | 11.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 4.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 3.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 3.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.2M | 0.000ms | 0.003ms | 1000 |
| Jotai | 334K | 0.003ms | 0.007ms | 1000 |
| Redux Toolkit | 230K | 0.004ms | 0.009ms | 1000 |

#### Complex Form (nested + array)

```
🥇 MobX               ████████████████████████████████████████   1.6M ops/sec
🥈 Valtio             ████████████████████████████████████       1.4M ops/sec
🥉 Preact Signals     ███████████                                415K ops/sec
 Zen                ██████████                                 404K ops/sec
 Zustand            ██████████                                 402K ops/sec
 Solid Signals      ██████████                                 397K ops/sec
 Jotai              ██████                                     220K ops/sec
 Redux Toolkit                                                 2K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.6M | 0.001ms | 0.003ms | 1000 |
| Valtio | 1.4M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 415K | 0.002ms | 0.004ms | 1000 |
| Zen | 404K | 0.002ms | 0.006ms | 1000 |
| Zustand | 402K | 0.002ms | 0.004ms | 1000 |
| Solid Signals | 397K | 0.003ms | 0.005ms | 1000 |
| Jotai | 220K | 0.005ms | 0.009ms | 1000 |
| Redux Toolkit | 2K | 0.436ms | 1.159ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   1.9M ops/sec
🥈 Zen                ████                                       177K ops/sec
🥉 Preact Signals     ███                                        126K ops/sec
 Zustand            ██                                         99K ops/sec
 Redux Toolkit      █                                          48K ops/sec
 Valtio             █                                          45K ops/sec
 Jotai                                                         14K ops/sec
 MobX                                                          11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.9M | 0.001ms | 0.004ms | 1000 |
| Zen | 177K | 0.006ms | 0.012ms | 1000 |
| Preact Signals | 126K | 0.008ms | 0.026ms | 1000 |
| Zustand | 99K | 0.010ms | 0.063ms | 1000 |
| Redux Toolkit | 48K | 0.021ms | 0.070ms | 1000 |
| Valtio | 45K | 0.022ms | 0.079ms | 1000 |
| Jotai | 14K | 0.072ms | 0.174ms | 1000 |
| MobX | 11K | 0.088ms | 0.768ms | 1000 |

#### Simple Form (3 fields)

```
🥇 Valtio             ████████████████████████████████████████   7.4M ops/sec
🥈 Preact Signals     ████████████████████████████████████       6.7M ops/sec
🥉 Zen                █████████████████████████████████          6.0M ops/sec
 Solid Signals      ██████████████████████████████             5.6M ops/sec
 MobX               ██████████████                             2.7M ops/sec
 Zustand            ███████████                                2.1M ops/sec
 Jotai              ██                                         279K ops/sec
 Redux Toolkit      █                                          96K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 7.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 6.7M | 0.000ms | 0.001ms | 1000 |
| Zen | 6.0M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 5.6M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.7M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 279K | 0.004ms | 0.006ms | 1000 |
| Redux Toolkit | 96K | 0.010ms | 0.014ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   18.9M ops/sec
🥈 Redux Toolkit      ████████████████████████                   11.3M ops/sec
🥉 Zustand            ██████████████████                         8.5M ops/sec
 Valtio             ██████████████████                         8.4M ops/sec
 Preact Signals     █████████████████                          7.9M ops/sec
 MobX               ███████████████                            7.2M ops/sec
 Zen                █████████                                  4.5M ops/sec
 Jotai              █████                                      2.6M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 18.9M | 0.000ms | 0.000ms | 1000 |
| Redux Toolkit | 11.3M | 0.000ms | 0.000ms | 1000 |
| Zustand | 8.5M | 0.000ms | 0.000ms | 1000 |
| Valtio | 8.4M | 0.000ms | 0.000ms | 1000 |
| Preact Signals | 7.9M | 0.000ms | 0.000ms | 1000 |
| MobX | 7.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 4.5M | 0.000ms | 0.000ms | 1000 |
| Jotai | 2.6M | 0.000ms | 0.002ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Preact Signals     ████████████████████████████████████████   15.2M ops/sec
🥈 MobX               ████████████████████████                   9.3M ops/sec
🥉 Zen                ██████████████                             5.5M ops/sec
 Solid Signals      ██████████████                             5.4M ops/sec
 Valtio             ██████████████                             5.3M ops/sec
 Zustand            ███████████                                4.3M ops/sec
 Jotai              ██                                         813K ops/sec
 Redux Toolkit      █                                          266K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 15.2M | 0.000ms | 0.000ms | 1000 |
| MobX | 9.3M | 0.000ms | 0.000ms | 1000 |
| Zen | 5.5M | 0.000ms | 0.002ms | 1000 |
| Solid Signals | 5.4M | 0.000ms | 0.001ms | 1000 |
| Valtio | 5.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 4.3M | 0.000ms | 0.001ms | 1000 |
| Jotai | 813K | 0.001ms | 0.003ms | 1000 |
| Redux Toolkit | 266K | 0.004ms | 0.007ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   135K ops/sec
🥈 Solid Signals      █████████████████████████████████████      125K ops/sec
🥉 Preact Signals     ██████████████████████████████████         115K ops/sec
 Zustand            █████████████████████████████████          111K ops/sec
 Jotai              █████████████████████████████              98K ops/sec
 MobX               ████                                       15K ops/sec
 Valtio             ██                                         5K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 135K | 0.007ms | 0.013ms | 1000 |
| Solid Signals | 125K | 0.008ms | 0.012ms | 1000 |
| Preact Signals | 115K | 0.009ms | 0.013ms | 1000 |
| Zustand | 111K | 0.009ms | 0.013ms | 1000 |
| Jotai | 98K | 0.010ms | 0.015ms | 1000 |
| MobX | 15K | 0.068ms | 0.107ms | 1000 |
| Valtio | 5K | 0.194ms | 0.474ms | 1000 |
| Redux Toolkit | 1K | 0.939ms | 1.515ms | 1000 |

### 07-reactivity-patterns

#### Deep Chain (10 layers)

```
🥇 MobX               ████████████████████████████████████████   8.6M ops/sec
🥈 Valtio             ███████████████████                        4.1M ops/sec
🥉 Zustand            ████                                       966K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 8.6M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.1M | 0.000ms | 0.001ms | 1000 |
| Zustand | 966K | 0.001ms | 0.002ms | 1000 |

#### Deep Diamond (5 layers)

```
🥇 Valtio             ████████████████████████████████████████   1.3M ops/sec
🥈 MobX               ████████████████████████████████████       1.2M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 1.3M | 0.001ms | 0.002ms | 1000 |
| MobX | 1.2M | 0.001ms | 0.003ms | 1000 |

#### Diamond Pattern (3 layers)

```
🥇 Valtio             ████████████████████████████████████████   3.2M ops/sec
🥈 MobX               ███████████████████████████                2.1M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 3.2M | 0.000ms | 0.001ms | 1000 |
| MobX | 2.1M | 0.000ms | 0.002ms | 1000 |

#### Dynamic Dependencies

```
🥇 MobX               ████████████████████████████████████████   16.9M ops/sec
🥈 Zustand            ████████████                               5.1M ops/sec
🥉 Valtio             ██████████                                 4.3M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 16.9M | 0.000ms | 0.000ms | 1000 |
| Zustand | 5.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 4.3M | 0.000ms | 0.001ms | 1000 |

#### Massive Fanout (1→1000)

```
🥇 MobX               ████████████████████████████████████████   760K ops/sec
🥈 Valtio             █████████████                              251K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 760K | 0.001ms | 0.003ms | 1000 |
| Valtio | 251K | 0.004ms | 0.007ms | 1000 |

#### Repeated Diamonds (5x)

```
🥇 Valtio             ████████████████████████████████████████   1.5M ops/sec
🥈 MobX               ██████████████████████████                 928K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Valtio | 1.5M | 0.001ms | 0.002ms | 1000 |
| MobX | 928K | 0.001ms | 0.003ms | 1000 |

#### Very Deep Chain (100 layers)

```
🥇 MobX               ████████████████████████████████████████   1.4M ops/sec
🥈 Valtio             ██████████████                             470K ops/sec
🥉 Zustand            ███                                        90K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 1.4M | 0.001ms | 0.003ms | 1000 |
| Valtio | 470K | 0.002ms | 0.010ms | 1000 |
| Zustand | 90K | 0.011ms | 0.014ms | 1000 |

#### Wide Fanout (1→100)

```
🥇 MobX               ████████████████████████████████████████   2.0M ops/sec
🥈 Valtio             █████████████████████████████████          1.7M ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| MobX | 2.0M | 0.000ms | 0.006ms | 1000 |
| Valtio | 1.7M | 0.001ms | 0.002ms | 1000 |


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

*Generated on 2025-11-13T21:02:39.194Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
