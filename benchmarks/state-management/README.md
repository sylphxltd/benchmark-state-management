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

- **⚡ Maximum Performance**: Solid Signals - Fastest overall with 78.2/100 score
- **⚖️ Best Balance**: Preact Signals - Great performance (70.0/100) with good ecosystem
- **🎯 Popular Choice**: Zustand - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Solid Signals** (Score: 78.2/100)
- Fine-grained reactivity primitive from Solid.js for building performant UIs
- **Best for**: Fastest overall, but requires Solid.js ecosystem
- [GitHub](https://github.com/solidjs/solid) • [npm](https://www.npmjs.com/package/solid-js)


**Preact Signals** (Score: 70.0/100)
- Fast and reactive signals for Preact and React with automatic dependency tracking
- **Best for**: Excellent balance of speed and bundle size
- [GitHub](https://github.com/preactjs/signals) • [npm](https://www.npmjs.com/package/@preact/signals)


**Zen** (Score: 68.9/100)
- Minimal and fast state management with signal-based reactivity
- **Best for**: Similar performance to Preact, slightly larger bundle
- [GitHub](https://github.com/SylphxAI/zen) • [npm](https://www.npmjs.com/package/@sylphx/zen)


**Zustand** (Score: 38.6/100)
- Small, fast and scalable bearbones state management solution
- **Best for**: Minimal bundle, simple API, moderate performance
- [GitHub](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand)


**Valtio** (Score: 6.9/100)
- Proxy-based state management library that makes state usage simple
- **Best for**: Simple API, moderate performance, good for nested mutations
- [GitHub](https://github.com/pmndrs/valtio) • [npm](https://www.npmjs.com/package/valtio)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 20 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Solid Signals](https://github.com/solidjs/solid)** | 78.2/100 | 100% of fastest | [📦](https://www.npmjs.com/package/solid-js) [📊](https://bundlephobia.com/package/solid-js) |
| 🥈 2 | **[Preact Signals](https://github.com/preactjs/signals)** | 70.0/100 | 89% of fastest | [📦](https://www.npmjs.com/package/@preact/signals) [📊](https://bundlephobia.com/package/@preact/signals) |
| 🥉 3 | **[Zen](https://github.com/SylphxAI/zen)** | 68.9/100 | 88% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen) [📊](https://bundlephobia.com/package/@sylphx/zen) |
|  4 | **[Zustand](https://github.com/pmndrs/zustand)** | 38.6/100 | 49% of fastest | [📦](https://www.npmjs.com/package/zustand) [📊](https://bundlephobia.com/package/zustand) |
|  5 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.9/100 | 9% of fastest | [📦](https://www.npmjs.com/package/valtio) [📊](https://bundlephobia.com/package/valtio) |
|  6 | **[MobX](https://github.com/mobxjs/mobx)** | 5.1/100 | 7% of fastest | [📦](https://www.npmjs.com/package/mobx) [📊](https://bundlephobia.com/package/mobx) |
|  7 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.7/100 | 5% of fastest | [📦](https://www.npmjs.com/package/jotai) [📊](https://bundlephobia.com/package/jotai) |
|  8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.3/100 | 3% of fastest | [📦](https://www.npmjs.com/package/@reduxjs/toolkit) [📊](https://bundlephobia.com/package/@reduxjs/toolkit) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Description | Best For |
|---------|:-----:|-------------|----------|
| **[Solid Signals](https://github.com/solidjs/solid)** | **78.2** | Fine-grained reactivity primitive from Solid.js fo... | Fastest overall, but requires Solid.js e... |
| **[Preact Signals](https://github.com/preactjs/signals)** | **70.0** | Fast and reactive signals for Preact and React wit... | Excellent balance of speed and bundle si... |
| **[Zen](https://github.com/SylphxAI/zen)** | **68.9** | Minimal and fast state management with signal-base... | Similar performance to Preact, slightly ... |
| **[Zustand](https://github.com/pmndrs/zustand)** | **38.6** | Small, fast and scalable bearbones state managemen... | Minimal bundle, simple API, moderate per... |
| **[Valtio](https://github.com/pmndrs/valtio)** | **6.9** | Proxy-based state management library that makes st... | Simple API, moderate performance, good f... |
| **[MobX](https://github.com/mobxjs/mobx)** | **5.1** | Simple, scalable state management with transparent... | Automatic tracking, slow creation, large... |
| **[Jotai](https://github.com/pmndrs/jotai)** | **3.7** | Primitive and flexible state management for React... | Very fast read/write, slower creation, u... |
| **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | **2.3** | The official, opinionated, batteries-included tool... | Feature-rich, DevTools support, larger b... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### Basic Read Operations

#### Single Read

```
🥇 Zustand            ████████████████████████████████████████   1.6M ops/sec
🥈 Preact Signals     ████████████████████████████████████████   1.6M ops/sec
🥉 Solid Signals      ██████████████████████████████████████     1.6M ops/sec
 Zen                ███████████████████████                    923K ops/sec
 Jotai              █████                                      204K ops/sec
 Valtio             ██                                         96K ops/sec
 MobX               ██                                         73K ops/sec
 Redux Toolkit      ██                                         68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 1.6M | 0.001ms | 0.003ms | 1000 |
| Preact Signals | 1.6M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.6M | 0.001ms | 0.003ms | 1000 |
| Zen | 923K | 0.001ms | 0.006ms | 1000 |
| Jotai | 204K | 0.005ms | 0.021ms | 1000 |
| Valtio | 96K | 0.010ms | 0.074ms | 1000 |
| MobX | 73K | 0.014ms | 0.064ms | 1000 |
| Redux Toolkit | 68K | 0.015ms | 0.078ms | 1000 |

#### Moderate Read (100x)

```
🥇 Zustand            ████████████████████████████████████████   2.1M ops/sec
🥈 Preact Signals     ██████████████████████████████             1.6M ops/sec
🥉 Zen                ████████████████████████████               1.5M ops/sec
 Solid Signals      ████████████████████████                   1.3M ops/sec
 Valtio             ███                                        158K ops/sec
 Redux Toolkit      ██                                         116K ops/sec
 MobX               ██                                         96K ops/sec
 Jotai              █                                          43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 2.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 1.6M | 0.001ms | 0.002ms | 1000 |
| Zen | 1.5M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 1.3M | 0.001ms | 0.002ms | 1000 |
| Valtio | 158K | 0.006ms | 0.023ms | 1000 |
| Redux Toolkit | 116K | 0.009ms | 0.017ms | 1000 |
| MobX | 96K | 0.010ms | 0.042ms | 1000 |
| Jotai | 43K | 0.023ms | 0.076ms | 1000 |

#### High-Frequency Read (1000x)

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Preact Signals     █████████████████████████████████          990K ops/sec
🥉 Zustand            ██████████████████████████████             901K ops/sec
 Zen                ████████                                   233K ops/sec
 Valtio             ██████                                     167K ops/sec
 Redux Toolkit      ███                                        97K ops/sec
 MobX               ██                                         62K ops/sec
 Jotai                                                         6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 990K | 0.001ms | 0.003ms | 1000 |
| Zustand | 901K | 0.001ms | 0.002ms | 1000 |
| Zen | 233K | 0.004ms | 0.006ms | 1000 |
| Valtio | 167K | 0.006ms | 0.009ms | 1000 |
| Redux Toolkit | 97K | 0.010ms | 0.053ms | 1000 |
| MobX | 62K | 0.016ms | 0.045ms | 1000 |
| Jotai | 6K | 0.155ms | 0.463ms | 1000 |

### Basic Write Operations

#### Single Write

```
🥇 Zen                ████████████████████████████████████████   3.0M ops/sec
🥈 Preact Signals     ████████████████████████████████████       2.7M ops/sec
🥉 Solid Signals      █████████████████████████████████          2.5M ops/sec
 Zustand            █████████████████████                      1.6M ops/sec
 Jotai              ███                                        203K ops/sec
 Valtio             ███                                        189K ops/sec
 MobX               █                                          111K ops/sec
 Redux Toolkit      █                                          59K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.0M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.002ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.6M | 0.001ms | 0.002ms | 1000 |
| Jotai | 203K | 0.005ms | 0.010ms | 1000 |
| Valtio | 189K | 0.005ms | 0.013ms | 1000 |
| MobX | 111K | 0.009ms | 0.016ms | 1000 |
| Redux Toolkit | 59K | 0.017ms | 0.044ms | 1000 |

#### Batch Write (10x)

```
🥇 Preact Signals     ████████████████████████████████████████   2.4M ops/sec
🥈 Zen                ███████████████████████                    1.4M ops/sec
🥉 Solid Signals      ██████████████                             807K ops/sec
 Zustand            █████████████                              757K ops/sec
 Valtio             ███                                        151K ops/sec
 MobX               ██                                         96K ops/sec
 Jotai              █                                          64K ops/sec
 Redux Toolkit                                                 22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Zen | 1.4M | 0.001ms | 0.002ms | 1000 |
| Solid Signals | 807K | 0.001ms | 0.003ms | 1000 |
| Zustand | 757K | 0.001ms | 0.003ms | 1000 |
| Valtio | 151K | 0.007ms | 0.025ms | 1000 |
| MobX | 96K | 0.010ms | 0.036ms | 1000 |
| Jotai | 64K | 0.016ms | 0.036ms | 1000 |
| Redux Toolkit | 22K | 0.045ms | 0.076ms | 1000 |

#### Burst Write (100x)

```
🥇 Solid Signals      ████████████████████████████████████████   1.2M ops/sec
🥈 Preact Signals     ██████████████████████████████             937K ops/sec
🥉 Zen                ███████████████                            464K ops/sec
 Zustand            ███                                        108K ops/sec
 MobX               ██                                         63K ops/sec
 Valtio             █                                          46K ops/sec
 Jotai                                                         10K ops/sec
 Redux Toolkit                                                 3K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 1.2M | 0.001ms | 0.002ms | 1000 |
| Preact Signals | 937K | 0.001ms | 0.002ms | 1000 |
| Zen | 464K | 0.002ms | 0.004ms | 1000 |
| Zustand | 108K | 0.009ms | 0.014ms | 1000 |
| MobX | 63K | 0.016ms | 0.022ms | 1000 |
| Valtio | 46K | 0.022ms | 0.057ms | 1000 |
| Jotai | 10K | 0.099ms | 0.134ms | 1000 |
| Redux Toolkit | 3K | 0.362ms | 0.929ms | 1000 |

#### Heavy Write (1000x)

```
🥇 Preact Signals     ████████████████████████████████████████   249K ops/sec
🥈 Solid Signals      ██████████████████████████████████████     235K ops/sec
🥉 Zen                ██████████████████████████████████         213K ops/sec
 MobX               ██                                         14K ops/sec
 Zustand            ██                                         12K ops/sec
 Valtio             █                                          9K ops/sec
 Jotai                                                         1K ops/sec
 Redux Toolkit                                                 313 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Preact Signals | 249K | 0.004ms | 0.009ms | 1000 |
| Solid Signals | 235K | 0.004ms | 0.008ms | 1000 |
| Zen | 213K | 0.005ms | 0.011ms | 1000 |
| MobX | 14K | 0.073ms | 0.101ms | 1000 |
| Zustand | 12K | 0.083ms | 0.098ms | 1000 |
| Valtio | 9K | 0.116ms | 0.174ms | 1000 |
| Jotai | 1K | 0.947ms | 1.593ms | 1000 |
| Redux Toolkit | 313 | 3.194ms | 4.964ms | 1000 |

### Advanced Operations

#### Nested Object Update

```
🥇 Zen                ████████████████████████████████████████   2.9M ops/sec
🥈 Preact Signals     ██████████████████████████████████████     2.8M ops/sec
🥉 Solid Signals      ████████████████████████████████           2.3M ops/sec
 Zustand            ████████████████████████████               2.1M ops/sec
 Jotai              ███                                        184K ops/sec
 Valtio             ██                                         164K ops/sec
 MobX               ██                                         119K ops/sec
 Redux Toolkit      █                                          66K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 2.9M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.8M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.3M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 184K | 0.005ms | 0.010ms | 1000 |
| Valtio | 164K | 0.006ms | 0.011ms | 1000 |
| MobX | 119K | 0.008ms | 0.015ms | 1000 |
| Redux Toolkit | 66K | 0.015ms | 0.024ms | 1000 |

#### Array Push

```
🥇 Zen                ████████████████████████████████████████   3.5M ops/sec
🥈 Preact Signals     ███████████████████████████████            2.7M ops/sec
🥉 Solid Signals      ███████████████████████████                2.4M ops/sec
 Zustand            ████████████████████████                   2.1M ops/sec
 Jotai              ██                                         216K ops/sec
 Valtio             █                                          120K ops/sec
 MobX               █                                          91K ops/sec
 Redux Toolkit      █                                          48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.7M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.002ms | 1000 |
| Jotai | 216K | 0.005ms | 0.011ms | 1000 |
| Valtio | 120K | 0.008ms | 0.029ms | 1000 |
| MobX | 91K | 0.011ms | 0.032ms | 1000 |
| Redux Toolkit | 48K | 0.021ms | 0.045ms | 1000 |

#### Array Update

```
🥇 Zen                ████████████████████████████████████████   3.1M ops/sec
🥈 Preact Signals     █████████████████████████████████          2.5M ops/sec
🥉 Solid Signals      ████████████████████████████               2.2M ops/sec
 Zustand            ████████████████████                       1.5M ops/sec
 Valtio             ██                                         121K ops/sec
 Jotai              ██                                         119K ops/sec
 MobX               █                                          81K ops/sec
 Redux Toolkit      █                                          42K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.1M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.5M | 0.000ms | 0.002ms | 1000 |
| Solid Signals | 2.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 1.5M | 0.001ms | 0.002ms | 1000 |
| Valtio | 121K | 0.008ms | 0.014ms | 1000 |
| Jotai | 119K | 0.008ms | 0.034ms | 1000 |
| MobX | 81K | 0.012ms | 0.020ms | 1000 |
| Redux Toolkit | 42K | 0.024ms | 0.063ms | 1000 |

#### Computed Value Access

```
🥇 Zen                ████████████████████████████████████████   3.4M ops/sec
🥈 Zustand            ██████████████████████████████             2.5M ops/sec
🥉 Solid Signals      █████████████████████████████              2.5M ops/sec
 Preact Signals     ███████████████████████████                2.2M ops/sec
 Jotai              ███                                        249K ops/sec
 Valtio             ██                                         172K ops/sec
 Redux Toolkit      █                                          112K ops/sec
 MobX               █                                          109K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.4M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.5M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.2M | 0.000ms | 0.003ms | 1000 |
| Jotai | 249K | 0.004ms | 0.009ms | 1000 |
| Valtio | 172K | 0.006ms | 0.010ms | 1000 |
| Redux Toolkit | 112K | 0.009ms | 0.018ms | 1000 |
| MobX | 109K | 0.009ms | 0.019ms | 1000 |

### Async Operations

#### Sequential Async (3 ops)

```
🥇 Zen                ████████████████████████████████████████   294 ops/sec
🥈 Zustand            ████████████████████████████████████████   294 ops/sec
🥉 Solid Signals      ████████████████████████████████████████   292 ops/sec
 Preact Signals     ████████████████████████████████████████   292 ops/sec
 Valtio             ████████████████████████████████████████   291 ops/sec
 MobX               ██████████████████████████████████████     281 ops/sec
 Jotai              ██████████████████████████████████████     280 ops/sec
 Redux Toolkit      ██████████████████████████████████████     279 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 294 | 3.397ms | 3.451ms | 1000 |
| Zustand | 294 | 3.406ms | 3.822ms | 1000 |
| Solid Signals | 292 | 3.428ms | 4.290ms | 1000 |
| Preact Signals | 292 | 3.430ms | 4.198ms | 1000 |
| Valtio | 291 | 3.433ms | 4.036ms | 1000 |
| MobX | 281 | 3.556ms | 4.446ms | 1000 |
| Jotai | 280 | 3.574ms | 4.793ms | 1000 |
| Redux Toolkit | 279 | 3.583ms | 4.430ms | 1000 |

#### Concurrent Async (3 ops)

```
🥇 Zustand            ████████████████████████████████████████   877 ops/sec
🥈 Zen                ████████████████████████████████████████   872 ops/sec
🥉 Solid Signals      ████████████████████████████████████████   867 ops/sec
 Preact Signals     ████████████████████████████████████████   867 ops/sec
 Valtio             ███████████████████████████████████████    857 ops/sec
 MobX               ██████████████████████████████████████     833 ops/sec
 Redux Toolkit      ██████████████████████████████████████     826 ops/sec
 Jotai              ██████████████████████████████████████     825 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zustand | 877 | 1.141ms | 1.489ms | 1000 |
| Zen | 872 | 1.146ms | 1.536ms | 1000 |
| Solid Signals | 867 | 1.153ms | 1.683ms | 1000 |
| Preact Signals | 867 | 1.154ms | 1.741ms | 1000 |
| Valtio | 857 | 1.167ms | 1.648ms | 1000 |
| MobX | 833 | 1.200ms | 1.930ms | 1000 |
| Redux Toolkit | 826 | 1.210ms | 1.837ms | 1000 |
| Jotai | 825 | 1.212ms | 2.194ms | 1000 |

### Real-World Scenarios

#### Simple Form (3 fields)

```
🥇 Zen                ████████████████████████████████████████   3.5M ops/sec
🥈 Preact Signals     ██████████████████████████████             2.6M ops/sec
🥉 Solid Signals      ████████████████████████████               2.4M ops/sec
 Zustand            ██████████████                             1.2M ops/sec
 Valtio             ██                                         150K ops/sec
 Jotai              ██                                         138K ops/sec
 MobX               █                                          113K ops/sec
 Redux Toolkit                                                 42K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.4M | 0.000ms | 0.002ms | 1000 |
| Zustand | 1.2M | 0.001ms | 0.004ms | 1000 |
| Valtio | 150K | 0.007ms | 0.017ms | 1000 |
| Jotai | 138K | 0.007ms | 0.012ms | 1000 |
| MobX | 113K | 0.009ms | 0.016ms | 1000 |
| Redux Toolkit | 42K | 0.024ms | 0.096ms | 1000 |

#### Complex Form (nested + array)

```
🥇 Zen                ████████████████████████████████████████   3.5M ops/sec
🥈 Preact Signals     ███████████████████████████████            2.6M ops/sec
🥉 Solid Signals      █████████████████████████████              2.5M ops/sec
 Zustand            ███████                                    582K ops/sec
 Valtio             ██                                         184K ops/sec
 Jotai              ██                                         182K ops/sec
 MobX               █                                          102K ops/sec
 Redux Toolkit      █                                          47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 2.6M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 2.5M | 0.000ms | 0.001ms | 1000 |
| Zustand | 582K | 0.002ms | 0.002ms | 1000 |
| Valtio | 184K | 0.005ms | 0.009ms | 1000 |
| Jotai | 182K | 0.006ms | 0.011ms | 1000 |
| MobX | 102K | 0.010ms | 0.016ms | 1000 |
| Redux Toolkit | 47K | 0.021ms | 0.032ms | 1000 |

#### Cache Invalidation

```
🥇 Zen                ████████████████████████████████████████   3.5M ops/sec
🥈 Preact Signals     ████████████████████████████████████       3.2M ops/sec
🥉 Solid Signals      ████████████████████████████████████       3.2M ops/sec
 Zustand            ███████████████████████                    2.1M ops/sec
 Valtio             ██                                         190K ops/sec
 Jotai              ██                                         139K ops/sec
 MobX               █                                          117K ops/sec
 Redux Toolkit      █                                          70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 3.5M | 0.000ms | 0.001ms | 1000 |
| Preact Signals | 3.2M | 0.000ms | 0.001ms | 1000 |
| Solid Signals | 3.2M | 0.000ms | 0.001ms | 1000 |
| Zustand | 2.1M | 0.000ms | 0.001ms | 1000 |
| Valtio | 190K | 0.005ms | 0.010ms | 1000 |
| Jotai | 139K | 0.007ms | 0.011ms | 1000 |
| MobX | 117K | 0.009ms | 0.015ms | 1000 |
| Redux Toolkit | 70K | 0.014ms | 0.022ms | 1000 |

#### Memory Management

```
🥇 Solid Signals      ████████████████████████████████████████   782K ops/sec
🥈 Zen                █████████████                              254K ops/sec
🥉 Zustand            ████████                                   165K ops/sec
 Preact Signals     █████                                      105K ops/sec
 Valtio             ███                                        56K ops/sec
 Redux Toolkit      ██                                         47K ops/sec
 MobX               █                                          16K ops/sec
 Jotai              █                                          15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 782K | 0.001ms | 0.002ms | 1000 |
| Zen | 254K | 0.004ms | 0.007ms | 1000 |
| Zustand | 165K | 0.006ms | 0.011ms | 1000 |
| Preact Signals | 105K | 0.009ms | 0.031ms | 1000 |
| Valtio | 56K | 0.018ms | 0.050ms | 1000 |
| Redux Toolkit | 47K | 0.021ms | 0.042ms | 1000 |
| MobX | 16K | 0.064ms | 0.223ms | 1000 |
| Jotai | 15K | 0.068ms | 0.143ms | 1000 |

### Performance Stress Tests

#### Extreme Read (10000x)

```
🥇 Solid Signals      ████████████████████████████████████████   341K ops/sec
🥈 Zustand            █████████████████████                      178K ops/sec
🥉 Preact Signals     ████████                                   71K ops/sec
 Redux Toolkit      ██████                                     51K ops/sec
 Zen                █████                                      42K ops/sec
 Valtio             ████                                       34K ops/sec
 MobX               █                                          10K ops/sec
 Jotai                                                         571 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Solid Signals | 341K | 0.003ms | 0.004ms | 1000 |
| Zustand | 178K | 0.006ms | 0.009ms | 1000 |
| Preact Signals | 71K | 0.014ms | 0.028ms | 1000 |
| Redux Toolkit | 51K | 0.020ms | 0.031ms | 1000 |
| Zen | 42K | 0.024ms | 0.030ms | 1000 |
| Valtio | 34K | 0.029ms | 0.042ms | 1000 |
| MobX | 10K | 0.099ms | 0.120ms | 1000 |
| Jotai | 571 | 1.751ms | 3.002ms | 1000 |

#### Extreme Write (10000x)

```
🥇 Zen                ████████████████████████████████████████   29K ops/sec
🥈 Solid Signals      ████████████████████████████████████       26K ops/sec
🥉 Preact Signals     ████████████████████████████████           24K ops/sec
 MobX               ██                                         1K ops/sec
 Zustand            █                                          969 ops/sec
 Valtio             █                                          871 ops/sec
 Jotai                                                         88 ops/sec
 Redux Toolkit                                                 26 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 29K | 0.034ms | 0.246ms | 1000 |
| Solid Signals | 26K | 0.038ms | 0.278ms | 1000 |
| Preact Signals | 24K | 0.042ms | 0.045ms | 1000 |
| MobX | 1K | 0.774ms | 1.351ms | 1000 |
| Zustand | 969 | 1.032ms | 2.079ms | 1000 |
| Valtio | 871 | 1.148ms | 1.941ms | 1000 |
| Jotai | 88 | 11.367ms | 18.226ms | 1000 |
| Redux Toolkit | 26 | 38.512ms | 55.573ms | 1000 |

#### Large Array (1000 items)

```
🥇 Zen                ████████████████████████████████████████   239K ops/sec
🥈 Zustand            ████████████████████                       117K ops/sec
🥉 Solid Signals      ██████████████████                         107K ops/sec
 Preact Signals     ████████████████                           98K ops/sec
 Jotai              ██████████████                             82K ops/sec
 MobX               ██                                         14K ops/sec
 Valtio             █                                          5K ops/sec
 Redux Toolkit                                                 1K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen | 239K | 0.004ms | 0.009ms | 1000 |
| Zustand | 117K | 0.009ms | 0.012ms | 1000 |
| Solid Signals | 107K | 0.009ms | 0.013ms | 1000 |
| Preact Signals | 98K | 0.010ms | 0.013ms | 1000 |
| Jotai | 82K | 0.012ms | 0.023ms | 1000 |
| MobX | 14K | 0.073ms | 0.132ms | 1000 |
| Valtio | 5K | 0.200ms | 0.333ms | 1000 |
| Redux Toolkit | 1K | 0.791ms | 1.449ms | 1000 |


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

- **[Solid Signals](https://github.com/solidjs/solid)** (`solid-js`) - [📦 npm](https://www.npmjs.com/package/solid-js) • [📊 bundle size](https://bundlephobia.com/package/solid-js)
- **[Preact Signals](https://github.com/preactjs/signals)** (`@preact/signals`) - [📦 npm](https://www.npmjs.com/package/@preact/signals) • [📊 bundle size](https://bundlephobia.com/package/@preact/signals)
- **[Zen](https://github.com/SylphxAI/zen)** (`@sylphx/zen`) - [📦 npm](https://www.npmjs.com/package/@sylphx/zen) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen)
- **[Zustand](https://github.com/pmndrs/zustand)** (`zustand`) - [📦 npm](https://www.npmjs.com/package/zustand) • [📊 bundle size](https://bundlephobia.com/package/zustand)
- **[Valtio](https://github.com/pmndrs/valtio)** (`valtio`) - [📦 npm](https://www.npmjs.com/package/valtio) • [📊 bundle size](https://bundlephobia.com/package/valtio)
- **[MobX](https://github.com/mobxjs/mobx)** (`mobx`) - [📦 npm](https://www.npmjs.com/package/mobx) • [📊 bundle size](https://bundlephobia.com/package/mobx)
- **[Jotai](https://github.com/pmndrs/jotai)** (`jotai`) - [📦 npm](https://www.npmjs.com/package/jotai) • [📊 bundle size](https://bundlephobia.com/package/jotai)
- **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** (`@reduxjs/toolkit`) - [📦 npm](https://www.npmjs.com/package/@reduxjs/toolkit) • [📊 bundle size](https://bundlephobia.com/package/@reduxjs/toolkit)

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

*Generated on 2025-11-11T21:21:49.205Z*

[⬆️ Back to Top](#state-management-benchmarks) • [⬅️ Main README](../../README.md)

</div>
