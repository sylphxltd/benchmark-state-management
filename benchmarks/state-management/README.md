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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 83.7/100 score
- **⚖️ Best Balance**: Zen - Great performance (81.5/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 83.7/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Zen** (Score: 81.5/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Preact Signals** (Score: 67.6/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zustand** (Score: 39.6/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 7.5/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 83.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Zen](https://github.com/SylphxAI/zen)** | 81.5/100 | 97% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
| 🥉 3 | **[Preact Signals](https://github.com/preactjs/signals)** | 67.6/100 | 81% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 39.6/100 | 47% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 7.5/100 | 9% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 5.4/100 | 6% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.7/100 | 4% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.4/100 | 3% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **83.7** | **3.96 KB** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Zen](https://github.com/SylphxAI/zen)** | **81.5** | **1.19 KB** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **67.6** | **3.04 KB** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **39.6** | **1.17 KB** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **7.5** | **3.07 KB** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **5.4** | **17.56 KB** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **3.7** | **4.29 KB** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **2.4** | **13.83 KB** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zen                ████████████████████████████████████████   2.3M ops/sec
🥈 Zustand            ████████████████████████████████████       2.0M ops/sec
🥉 Preact Signals     ██████████████████████████████             1.7M ops/sec
 Solid Signals      █████████████████████████                  1.4M ops/sec
 Jotai              █████                                      266K ops/sec
 Valtio             ██                                         117K ops/sec
 Redux Toolkit      ██                                         97K ops/sec
 MobX               ██                                         96K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.0M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 1.7M | 0.001ms | 0.003ms | 1000 |
| Solid Signals | 1.4M | 0.001ms | 0.003ms | 1000 |
| Jotai | 266K | 0.004ms | 0.009ms | 1000 |
| Valtio | 117K | 0.009ms | 0.019ms | 1000 |
| Redux Toolkit | 97K | 0.010ms | 0.020ms | 1000 |
| MobX | 96K | 0.010ms | 0.023ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   2.2M ops/sec
🥈 Zen                ████████████████████████████████████       2.0M ops/sec
🥉 Preact Signals     ██████████████████████████████             1.6M ops/sec
 Solid Signals      ██████████████████████████                 1.4M ops/sec
 Valtio             ███                                        177K ops/sec
 Redux Toolkit      ██                                         119K ops/sec
 MobX               ██                                         108K ops/sec
 Jotai              █                                          50K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.001ms | 1000 |
| Preact Signals | 1.6M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.4M | 0.001ms | 0.002ms | 1000 |
| Valtio | 177K | 0.006ms | 0.014ms | 1000 |
| Redux Toolkit | 119K | 0.008ms | 0.015ms | 1000 |
| MobX | 108K | 0.009ms | 0.019ms | 1000 |
| Jotai | 50K | 0.020ms | 0.028ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Preact Signals     ███████████████████████████████████        1.1M ops/sec
🥉 Zustand            ███████████████████████████████            954K ops/sec
 Zen                █████████████████████                      642K ops/sec
 Valtio             █████                                      166K ops/sec
 Redux Toolkit      ████                                       120K ops/sec
 MobX               ██                                         67K ops/sec
 Jotai                                                         7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 1.1M | 0.001ms | 0.003ms | 1000 |
| Zustand | 954K | 0.001ms | 0.002ms | 1000 |
| Zen | 642K | 0.002ms | 0.003ms | 1000 |
| Valtio | 166K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 120K | 0.008ms | 0.013ms | 1000 |
| MobX | 67K | 0.015ms | 0.023ms | 1000 |
| Jotai | 7K | 0.138ms | 0.315ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   3.3M ops/sec
🥈 Preact Signals     ███████████████████████████████████        2.9M ops/sec
🥉 Solid Signals      ███████████████████████████████            2.6M ops/sec
 Zustand            ███████████████████████                    1.9M ops/sec
 Jotai              ██                                         207K ops/sec
 Valtio             ██                                         190K ops/sec
 MobX               █                                          115K ops/sec
 Redux Toolkit      █                                          62K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.9M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.9M | 0.001ms | 0.001ms | 1000 |
| Jotai | 207K | 0.005ms | 0.010ms | 1000 |
| Valtio | 190K | 0.005ms | 0.013ms | 1000 |
| MobX | 115K | 0.009ms | 0.016ms | 1000 |
| Redux Toolkit | 62K | 0.016ms | 0.026ms | 1000 |

#### Batch Write (10x)

```
🥇 Zen                ████████████████████████████████████████   3.0M ops/sec
🥈 Solid Signals      ██████████████████████████████             2.3M ops/sec
🥉 Preact Signals     ██████████████████████████                 1.9M ops/sec
 Zustand            ████████                                   643K ops/sec
 Valtio             ██                                         149K ops/sec
 MobX               █                                          110K ops/sec
 Jotai              █                                          67K ops/sec
 Redux Toolkit                                                 23K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.0M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.3M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 1.9M | 0.001ms | 0.002ms | 1000 |
| Zustand | 643K | 0.002ms | 0.003ms | 1000 |
| Valtio | 149K | 0.007ms | 0.012ms | 1000 |
| MobX | 110K | 0.009ms | 0.015ms | 1000 |
| Jotai | 67K | 0.015ms | 0.022ms | 1000 |
| Redux Toolkit | 23K | 0.044ms | 0.062ms | 1000 |

#### Burst Write (100x)

```
🥇 Zen                ████████████████████████████████████████   1.4M ops/sec
🥈 Solid Signals      ██████████████████████████████████         1.2M ops/sec
🥉 Preact Signals     ███████████████████████████                971K ops/sec
 Zustand            ███                                        117K ops/sec
 MobX               ██                                         70K ops/sec
 Valtio             ██                                         59K ops/sec
 Jotai                                                         11K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 1.4M | 0.001ms | 0.001ms | 1000 |
| Solid Signals | 1.2M | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 971K | 0.001ms | 0.002ms | 1000 |
| Zustand | 117K | 0.009ms | 0.011ms | 1000 |
| MobX | 70K | 0.014ms | 0.021ms | 1000 |
| Valtio | 59K | 0.017ms | 0.027ms | 1000 |
| Jotai | 11K | 0.091ms | 0.137ms | 1000 |
| Redux Toolkit | 3K | 0.296ms | 0.593ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Zen                ████████████████████████████████████████   441K ops/sec
🥈 Preact Signals     ██████████████████████████                 290K ops/sec
🥉 Solid Signals      ██████████████████████                     240K ops/sec
 MobX               █                                          14K ops/sec
 Zustand            █                                          14K ops/sec
 Valtio             █                                          9K ops/sec
 Jotai                                                         1K ops/sec
 Redux Toolkit                                                 355 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 441K | 0.002ms | 0.005ms | 1000 |
| Preact Signals | 290K | 0.003ms | 0.007ms | 1000 |
| Solid Signals | 240K | 0.004ms | 0.012ms | 1000 |
| MobX | 14K | 0.070ms | 0.086ms | 1000 |
| Zustand | 14K | 0.072ms | 0.086ms | 1000 |
| Valtio | 9K | 0.106ms | 0.141ms | 1000 |
| Jotai | 1K | 0.840ms | 1.139ms | 1000 |
| Redux Toolkit | 355 | 2.815ms | 3.270ms | 1000 |

### Advanced Operations

#### Nested Object Update

```
🥇 Solid Signals      ████████████████████████████████████████   2.4M ops/sec
🥈 Zen                ███████████████████████████████████████    2.4M ops/sec
🥉 Zustand            ████████████████████████████████████       2.2M ops/sec
 Preact Signals     ████████████                               701K ops/sec
 Jotai              ████                                       230K ops/sec
 Valtio             ████                                       217K ops/sec
 MobX               ██                                         120K ops/sec
 Redux Toolkit      █                                          69K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.4M | 0.000ms | 0.003ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 701K | 0.001ms | 0.003ms | 1000 |
| Jotai | 230K | 0.004ms | 0.009ms | 1000 |
| Valtio | 217K | 0.005ms | 0.006ms | 1000 |
| MobX | 120K | 0.008ms | 0.013ms | 1000 |
| Redux Toolkit | 69K | 0.014ms | 0.021ms | 1000 |

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   3.2M ops/sec
🥈 Preact Signals     ███████████████████████████████████        2.8M ops/sec
🥉 Solid Signals      ███████████████████████████████            2.5M ops/sec
 Zustand            ████████████████████████████               2.2M ops/sec
 Jotai              ███                                        236K ops/sec
 Valtio             ██                                         136K ops/sec
 MobX               █                                          91K ops/sec
 Redux Toolkit      █                                          58K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Jotai | 236K | 0.004ms | 0.008ms | 1000 |
| Valtio | 136K | 0.007ms | 0.015ms | 1000 |
| MobX | 91K | 0.011ms | 0.018ms | 1000 |
| Redux Toolkit | 58K | 0.017ms | 0.025ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   2.7M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     2.6M ops/sec
🥉 Solid Signals      █████████████████████████████████          2.2M ops/sec
 Zustand            ████████████████████████                   1.6M ops/sec
 Jotai              ███                                        182K ops/sec
 Valtio             ██                                         158K ops/sec
 MobX               █                                          91K ops/sec
 Redux Toolkit      █                                          44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.7M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 2.6M | 0.000ms | 0.002ms | 1000 |
| Solid Signals | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.6M | 0.001ms | 0.002ms | 1000 |
| Jotai | 182K | 0.005ms | 0.010ms | 1000 |
| Valtio | 158K | 0.006ms | 0.010ms | 1000 |
| MobX | 91K | 0.011ms | 0.016ms | 1000 |
| Redux Toolkit | 44K | 0.023ms | 0.033ms | 1000 |

#### Computed Value Access

```
🥇 Solid Signals      ████████████████████████████████████████   2.8M ops/sec
🥈 Zustand            ███████████████████████████████████████    2.7M ops/sec
🥉 Preact Signals     ██████████████████████████████████         2.4M ops/sec
 Zen                █████████████████████████████              2.0M ops/sec
 Jotai              ███                                        186K ops/sec
 Valtio             ██                                         159K ops/sec
 Redux Toolkit      ██                                         132K ops/sec
 MobX               ██                                         107K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.7M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.4M | 0.000ms | 0.002ms | 1000 |
| Zen | 2.0M | 0.001ms | 0.002ms | 1000 |
| Jotai | 186K | 0.005ms | 0.010ms | 1000 |
| Valtio | 159K | 0.006ms | 0.008ms | 1000 |
| Redux Toolkit | 132K | 0.008ms | 0.012ms | 1000 |
| MobX | 107K | 0.009ms | 0.018ms | 1000 |

### Async Operations

#### Sequential Async (3 ops)

```
🥇 Zen                ████████████████████████████████████████   288 ops/sec
🥈 Preact Signals     ████████████████████████████████████████   287 ops/sec
🥉 Solid Signals      ████████████████████████████████████████   286 ops/sec
 Zustand            ████████████████████████████████████████   286 ops/sec
 Valtio             ███████████████████████████████████████    278 ops/sec
 Jotai              ████████████████████████████████████       258 ops/sec
 MobX               ███████████████████████████████████        253 ops/sec
 Redux Toolkit      ██████████████████████████████████         245 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 288 | 3.476ms | 4.388ms | 1000 |
| Preact Signals | 287 | 3.486ms | 5.166ms | 1000 |
| Solid Signals | 286 | 3.495ms | 5.133ms | 1000 |
| Zustand | 286 | 3.500ms | 4.984ms | 1000 |
| Valtio | 278 | 3.596ms | 5.397ms | 1000 |
| Jotai | 258 | 3.878ms | 5.772ms | 1000 |
| MobX | 253 | 3.949ms | 6.188ms | 1000 |
| Redux Toolkit | 245 | 4.082ms | 6.332ms | 1000 |

#### Concurrent Async (3 ops)

```
🥇 Zen                ████████████████████████████████████████   852 ops/sec
🥈 Solid Signals      ████████████████████████████████████████   847 ops/sec
🥉 Zustand            ███████████████████████████████████████    838 ops/sec
 Preact Signals     ███████████████████████████████████████    836 ops/sec
 Valtio             ██████████████████████████████████████     802 ops/sec
 MobX               ██████████████████████████████████         730 ops/sec
 Jotai              ██████████████████████████████████         728 ops/sec
 Redux Toolkit      ██████████████████████████████████         715 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 852 | 1.174ms | 1.734ms | 1000 |
| Solid Signals | 847 | 1.180ms | 1.758ms | 1000 |
| Zustand | 838 | 1.193ms | 2.750ms | 1000 |
| Preact Signals | 836 | 1.196ms | 3.015ms | 1000 |
| Valtio | 802 | 1.247ms | 2.754ms | 1000 |
| MobX | 730 | 1.370ms | 3.312ms | 1000 |
| Jotai | 728 | 1.374ms | 3.610ms | 1000 |
| Redux Toolkit | 715 | 1.399ms | 3.559ms | 1000 |

### Real-World Scenarios

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   2.9M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     2.8M ops/sec
🥉 Solid Signals      ████████████████████████████████           2.3M ops/sec
 Zustand            █████████                                  633K ops/sec
 Valtio             ██                                         145K ops/sec
 MobX               █                                          105K ops/sec
 Jotai              █                                          37K ops/sec
 Redux Toolkit                                                 32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.9M | 0.000ms | 0.002ms | 1000 |
| Preact Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.3M | 0.000ms | 0.003ms | 1000 |
| Zustand | 633K | 0.002ms | 0.006ms | 1000 |
| Valtio | 145K | 0.007ms | 0.014ms | 1000 |
| MobX | 105K | 0.010ms | 0.015ms | 1000 |
| Jotai | 37K | 0.027ms | 0.089ms | 1000 |
| Redux Toolkit | 32K | 0.032ms | 0.049ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Preact Signals     ████████████████████████████████████████   2.8M ops/sec
🥈 Zen                ████████████████████████████████████████   2.7M ops/sec
🥉 Solid Signals      █████████████████████████████████████      2.6M ops/sec
 Zustand            █████████                                  638K ops/sec
 Valtio             ███                                        191K ops/sec
 Jotai              ███                                        185K ops/sec
 MobX               ██                                         111K ops/sec
 Redux Toolkit      █                                          50K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.6M | 0.000ms | 0.001ms | 1000 |
| Zustand | 638K | 0.002ms | 0.002ms | 1000 |
| Valtio | 191K | 0.005ms | 0.008ms | 1000 |
| Jotai | 185K | 0.005ms | 0.012ms | 1000 |
| MobX | 111K | 0.009ms | 0.014ms | 1000 |
| Redux Toolkit | 50K | 0.020ms | 0.028ms | 1000 |

#### Cache Invalidation

```
🥇 Solid Signals      ████████████████████████████████████████   3.2M ops/sec
🥈 Preact Signals     ███████████████████████████████████████    3.1M ops/sec
🥉 Zen                ███████████████████████████████████        2.8M ops/sec
 Zustand            ████████████████████████████               2.2M ops/sec
 Valtio             ███                                        209K ops/sec
 Jotai              ██                                         161K ops/sec
 MobX               ██                                         123K ops/sec
 Redux Toolkit      █                                          75K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 3.2M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.1M | 0.000ms | 0.001ms | 1000 |
| Zen | 2.8M | 0.000ms | 0.002ms | 1000 |
| Zustand | 2.2M | 0.000ms | 0.001ms | 1000 |
| Valtio | 209K | 0.005ms | 0.008ms | 1000 |
| Jotai | 161K | 0.006ms | 0.009ms | 1000 |
| MobX | 123K | 0.008ms | 0.014ms | 1000 |
| Redux Toolkit | 75K | 0.013ms | 0.022ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   917K ops/sec
🥈 Zen                █████████                                  199K ops/sec
🥉 Zustand            ████████                                   187K ops/sec
 Preact Signals     ██████                                     136K ops/sec
 Valtio             ███                                        63K ops/sec
 Redux Toolkit      ██                                         52K ops/sec
 MobX               █                                          18K ops/sec
 Jotai              █                                          16K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 917K | 0.001ms | 0.002ms | 1000 |
| Zen | 199K | 0.005ms | 0.008ms | 1000 |
| Zustand | 187K | 0.005ms | 0.007ms | 1000 |
| Preact Signals | 136K | 0.007ms | 0.011ms | 1000 |
| Valtio | 63K | 0.016ms | 0.035ms | 1000 |
| Redux Toolkit | 52K | 0.019ms | 0.037ms | 1000 |
| MobX | 18K | 0.055ms | 0.143ms | 1000 |
| Jotai | 16K | 0.063ms | 0.090ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   359K ops/sec
🥈 Zustand            █████████████████████                      188K ops/sec
🥉 Zen                ███████████                                97K ops/sec
 Preact Signals     ████████                                   76K ops/sec
 Redux Toolkit      ██████                                     54K ops/sec
 Valtio             ████                                       40K ops/sec
 MobX               █                                          11K ops/sec
 Jotai                                                         588 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 359K | 0.003ms | 0.004ms | 1000 |
| Zustand | 188K | 0.005ms | 0.006ms | 1000 |
| Zen | 97K | 0.010ms | 0.011ms | 1000 |
| Preact Signals | 76K | 0.013ms | 0.027ms | 1000 |
| Redux Toolkit | 54K | 0.018ms | 0.024ms | 1000 |
| Valtio | 40K | 0.025ms | 0.029ms | 1000 |
| MobX | 11K | 0.090ms | 0.097ms | 1000 |
| Jotai | 588 | 1.701ms | 2.294ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   28K ops/sec
🥈 Solid Signals      ███████████████████████████████████████    28K ops/sec
🥉 Preact Signals     █████████████████████████████████████      26K ops/sec
 MobX               ██                                         1K ops/sec
 Zustand            ██                                         1K ops/sec
 Valtio             █                                          1K ops/sec
 Jotai                                                         110 ops/sec
 Redux Toolkit                                                 32 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 28K | 0.035ms | 0.038ms | 1000 |
| Solid Signals | 28K | 0.036ms | 0.238ms | 1000 |
| Preact Signals | 26K | 0.038ms | 0.048ms | 1000 |
| MobX | 1K | 0.681ms | 0.968ms | 1000 |
| Zustand | 1K | 0.772ms | 0.965ms | 1000 |
| Valtio | 1K | 0.942ms | 1.252ms | 1000 |
| Jotai | 110 | 9.120ms | 10.280ms | 1000 |
| Redux Toolkit | 32 | 31.462ms | 33.869ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   191K ops/sec
🥈 Zustand            ███████████████████████████                130K ops/sec
🥉 Preact Signals     ███████████████████████                    112K ops/sec
 Solid Signals      ██████████████████████                     107K ops/sec
 Jotai              ██████████████████                         85K ops/sec
 MobX               ███                                        16K ops/sec
 Valtio             █                                          6K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 191K | 0.005ms | 0.010ms | 1000 |
| Zustand | 130K | 0.008ms | 0.012ms | 1000 |
| Preact Signals | 112K | 0.009ms | 0.012ms | 1000 |
| Solid Signals | 107K | 0.009ms | 0.014ms | 1000 |
| Jotai | 85K | 0.012ms | 0.024ms | 1000 |
| MobX | 16K | 0.062ms | 0.103ms | 1000 |
| Valtio | 6K | 0.169ms | 0.228ms | 1000 |
| Redux Toolkit | 1K | 0.675ms | 1.108ms | 1000 |


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

*Generated on 2025-11-11T22:06:51.064Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
