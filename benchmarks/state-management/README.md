# State Management Benchmarks

Comprehensive performance benchmarks for JavaScript/TypeScript state management libraries.

## 📑 Table of Contents

- [Overall Performance Score](#overall-performance-score)
- [Performance by Group](#performance-by-group)
- [Feature Support Matrix](#feature-support-matrix)
- [Test Categories](#test-categories)
- [Group Results Summary](#group-results-summary)
- [Methodology](#methodology)
- [Key Insights](#key-insights)
- [Running Benchmarks](#running-benchmarks)

---

## Overall Performance Score

**Based on Universal Tests**: Read, Write, Creation, Memory

**Methodology**:
1. Each library's raw performance (ops/sec) is measured for each test
2. Scores are normalized to an index where the fastest library = 100
   - Formula: `Index = (Library_Speed / Fastest_Speed) × 100`
3. The overall score is the geometric mean of all normalized indices
   - Formula: `Overall = ⁿ√(Index₁ × Index₂ × ... × Indexₙ)`
4. Geometric mean prevents any single test from dominating the overall score

**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Overall Score | Bundle (gzip) | Last Updated |
|:----:|---------|---------|---------------|---------------|--------------|
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 1.9.10 | 👑 98.4/100 | 4.0 KB | Dec 6 |
| 🥈 2 | [**Preact Signals**](https://github.com/preactjs/signals) | 2.4.0 | 91.5/100 | 3.0 KB | Nov 7 |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 1.2.1 | 89.6/100 | 5.3 KB | Nov 7 |
|  4 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.15.1 | 50.0/100 | 4.3 KB | Dec 6 |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.2.0 | 10.1/100 | 3.1 KB | Nov 6 |
|  6 | [**Zustand**](https://github.com/pmndrs/zustand) | 5.0.8 | 7.4/100 | 👑 1.2 KB | Nov 6 |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2.10.1 | 4.1/100 | 13.8 KB | Dec 6 |
|  8 | [**MobX**](https://github.com/mobxjs/mobx) | 6.15.0 | 1.6/100 | 17.6 KB | Dec 6 |

---

## Performance by Group

See which library wins in each test group:

| Library | [01](#01---read-operations) | [02](#02---write-operations) | [03](#03---store-creation) | [04](#04---complexity) | [05](#05---cache-performance) | [06](#06---memory-allocation) | [07](#07---form-state) | [08](#08---reactive-async) | [09](#09---computed-native) | [10](#10---selectors) | [11](#11---batching-native) |
|---------|------|------|------|------|------|------|------|------|------|------|------|
| [**Solid Signals**](https://github.com/solidjs/solid) | 🥇 | 🥇 | 4 | 🥇 | - | 5 | 🥇 | - | - | - | 🥇 |
| [**Preact Signals**](https://github.com/preactjs/signals) | 4 | 🥈 | 🥇 | - | - | 🥇 | - | - | - | - | - |
| [**Zen**](https://github.com/SylphxAI/zen) | 🥉 | 🥉 | 🥈 | - | - | 🥈 | - | - | - | - | - |
| [**Jotai**](https://github.com/pmndrs/jotai) | 8 | 7 | 6 | 4 | - | 7 | 5 | 🥉 | - | - | - |
| [**Valtio**](https://github.com/pmndrs/valtio) | 5 | 6 | 8 | - | - | - | 🥉 | - | - | - | 🥈 |
| [**Zustand**](https://github.com/pmndrs/zustand) | 🥈 | 4 | 5 | 🥈 | - | 4 | 🥈 | - | - | - | - |
| [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 6 | 8 | 🥉 | - | - | 🥉 | - | - | - | - | - |
| [**MobX**](https://github.com/mobxjs/mobx) | 7 | 5 | 7 | 🥉 | - | 6 | 4 | - | - | - | 🥉 |

**Legend:** 🥇 1st place | 🥈 2nd place | 🥉 3rd place | - Not applicable

---

## Feature Support Matrix

| Feature | Description | Libraries |
|---------|-------------|-----------|
| **Native Computed Values** | Automatic dependency tracking for derived values using native computed/memo constructs | Jotai, MobX, Solid Signals, Preact Signals, Zen |
| **Selector Pattern** | Manual derived state using selector functions | Redux Toolkit, Zustand, Valtio |
| **Reactive Async** | Async computations that automatically recompute when dependencies change | Jotai |
| **Native Batching** | Built-in update batching to reduce notification overhead | Solid Signals, MobX, Valtio |
| **Middleware System** | Plugin system for extending functionality (logging, persistence, etc.) | Redux Toolkit, Zustand |

---

## Test Categories

### Universal Tests (01, 02, 03, 04, 05, 06, 07)

All 8 libraries participate equally. Used to calculate Overall Performance Score.

- **01 - Read Operations**: Simple read and high-frequency read patterns
- **02 - Write Operations**: Simple increments and burst updates
- **03 - Store Creation**: Instance creation overhead
- **04 - Complexity**: Deep nested state
- **05 - Cache Performance**: Repeated access patterns
- **06 - Memory Allocation**: Large state allocation performance
- **07 - Form State**: Multi-field updates

### Feature Tests (08, 09, 10, 11)

Libraries participate only if they have native support for the tested capability.

- **08 - Reactive Async**: Async atoms/computations (Jotai only)
- **09 - Computed Native**: Native computed values (5 libraries)
- **10 - Selectors**: Manual selector pattern (3 libraries)
- **11 - Batching Native**: Built-in batching (3 libraries)

---

## Group Results Summary

Click on any group to view detailed benchmark results.

### [01 - Read Operations](groups/01-read/README.md)

Simple read and high-frequency read patterns

```
🥇   Solid Signals      ████████████████████████████████████████      9.6M ops/sec
🥈   Zustand            ████████████████                              4.0M ops/sec
🥉   Zen                █████                                         1.2M ops/sec
4.   Preact Signals     █████                                         1.2M ops/sec
5.   Valtio             ███                                           713K ops/sec
6.   Redux Toolkit      ██                                            528K ops/sec
7.   MobX               ██                                            433K ops/sec
8.   Jotai                                                             54K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 👑 9.6M |
| 🥈 2 | **Zustand** | 4.0M |
| 🥉 3 | **Zen** | 1.2M |
|  4 | **Preact Signals** | 1.2M |
|  5 | **Valtio** | 713K |
|  6 | **Redux Toolkit** | 528K |
|  7 | **MobX** | 433K |
|  8 | **Jotai** | 54K |

**[View Detailed Results →](groups/01-read/README.md)**

---

### [02 - Write Operations](groups/02-write/README.md)

Simple increments and burst updates

```
🥇   Solid Signals      ████████████████████████████████████████      4.4M ops/sec
🥈   Preact Signals     ████████                                      845K ops/sec
🥉   Zen                ███████                                       783K ops/sec
4.   Zustand            ███                                           363K ops/sec
5.   MobX               █                                              79K ops/sec
6.   Valtio             █                                              65K ops/sec
7.   Jotai                                                             18K ops/sec
8.   Redux Toolkit                                                     10K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 👑 4.4M |
| 🥈 2 | **Preact Signals** | 845K |
| 🥉 3 | **Zen** | 783K |
|  4 | **Zustand** | 363K |
|  5 | **MobX** | 79K |
|  6 | **Valtio** | 65K |
|  7 | **Jotai** | 18K |
|  8 | **Redux Toolkit** | 10K |

**[View Detailed Results →](groups/02-write/README.md)**

---

### [03 - Store Creation](groups/03-creation/README.md)

Instance creation overhead

```
🥇   Preact Signals     ████████████████████████████████████████     50.3M ops/sec
🥈   Zen                ████████████████████████████████████████     50.1M ops/sec
🥉   Redux Toolkit      ████████████████████████████████████████     50.0M ops/sec
4.   Solid Signals      ███                                           3.2M ops/sec
5.   Zustand                                                          180K ops/sec
6.   Jotai                                                             14K ops/sec
7.   MobX                                                               8K ops/sec
8.   Valtio                                                             5K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Preact Signals** | 👑 50.3M |
| 🥈 2 | **Zen** | 50.1M |
| 🥉 3 | **Redux Toolkit** | 50.0M |
|  4 | **Solid Signals** | 3.2M |
|  5 | **Zustand** | 180K |
|  6 | **Jotai** | 14K |
|  7 | **MobX** | 8K |
|  8 | **Valtio** | 5K |

**[View Detailed Results →](groups/03-creation/README.md)**

---

### [04 - Complexity](groups/04-complexity/README.md)

Deep nested state

```
🥇   Solid Signals      ████████████████████████████████████████      6.7M ops/sec
🥈   Zustand            ██████████████████████████                    4.4M ops/sec
🥉   MobX               ██████████████                                2.4M ops/sec
4.   Jotai              ███████                                       1.1M ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 👑 6.7M |
| 🥈 2 | **Zustand** | 4.4M |
| 🥉 3 | **MobX** | 2.4M |
|  4 | **Jotai** | 1.1M |

**[View Detailed Results →](groups/04-complexity/README.md)**

---

### [05 - Cache Performance](groups/05-cache/README.md)

Repeated access patterns

*No results available*

**[View Detailed Results →](groups/05-cache/README.md)**

---

### [06 - Memory Allocation](groups/06-memory/README.md)

Large state allocation performance

```
🥇   Preact Signals     ████████████████████████████████████████     47.4M ops/sec
🥈   Zen                ████████████████████████████████████████     47.2M ops/sec
🥉   Redux Toolkit      ██████                                        7.0M ops/sec
4.   Zustand            ████                                          4.9M ops/sec
5.   Solid Signals      ██                                            2.1M ops/sec
6.   MobX               █                                             1.1M ops/sec
7.   Jotai              █                                             971K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Preact Signals** | 👑 47.4M |
| 🥈 2 | **Zen** | 47.2M |
| 🥉 3 | **Redux Toolkit** | 7.0M |
|  4 | **Zustand** | 4.9M |
|  5 | **Solid Signals** | 2.1M |
|  6 | **MobX** | 1.1M |
|  7 | **Jotai** | 971K |

**[View Detailed Results →](groups/06-memory/README.md)**

---

### [07 - Form State](groups/07-form/README.md)

Multi-field updates

```
🥇   Solid Signals      ████████████████████████████████████████     24.0M ops/sec
🥈   Zustand            ████████████████████████████████             18.9M ops/sec
🥉   Valtio             ███████                                       4.4M ops/sec
4.   MobX               ████                                          2.2M ops/sec
5.   Jotai              ████                                          2.2M ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 👑 24.0M |
| 🥈 2 | **Zustand** | 18.9M |
| 🥉 3 | **Valtio** | 4.4M |
|  4 | **MobX** | 2.2M |
|  5 | **Jotai** | 2.2M |

**[View Detailed Results →](groups/07-form/README.md)**

---

### [08 - Reactive Async](groups/08-async-reactive/README.md) (Feature Test)

Async atoms/computations

**Participating Libraries**: Jotai

```
🥇   Valtio             ████████████████████████████████████████      741K ops/sec
🥈   Zustand            ███████████████████████████████████████       721K ops/sec
🥉   Jotai              ████████████████████████████████████          676K ops/sec
4.   Solid Signals      ███████████████████████████████████           657K ops/sec
5.   MobX               ██████████████████████████████████            639K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Valtio** | 👑 741K |
| 🥈 2 | **Zustand** | 721K |
| 🥉 3 | **Jotai** | 676K |
|  4 | **Solid Signals** | 657K |
|  5 | **MobX** | 639K |

**[View Detailed Results →](groups/08-async-reactive/README.md)**

---

### [09 - Computed Native](groups/09-computed-native/README.md) (Feature Test)

Native computed values

**Participating Libraries**: Jotai, MobX, Solid Signals, Preact Signals, Zen

*No results available*

**[View Detailed Results →](groups/09-computed-native/README.md)**

---

### [10 - Selectors](groups/10-selectors/README.md) (Feature Test)

Manual selector pattern

**Participating Libraries**: Redux Toolkit, Zustand, Valtio

*No results available*

**[View Detailed Results →](groups/10-selectors/README.md)**

---

### [11 - Batching Native](groups/11-batching-native/README.md) (Feature Test)

Built-in batching

**Participating Libraries**: Solid Signals, MobX, Valtio

```
🥇   Solid Signals      ████████████████████████████████████████     37.2M ops/sec
🥈   Valtio             ██                                            1.7M ops/sec
🥉   MobX               █                                             1.4M ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 👑 37.2M |
| 🥈 2 | **Valtio** | 1.7M |
| 🥉 3 | **MobX** | 1.4M |

**[View Detailed Results →](groups/11-batching-native/README.md)**

---

## Methodology

### Universal Test Standards

- **All libraries participate** in universal tests (excluding incomplete tests)
- Results are **normalized** and combined using **geometric mean**
- Tests use **actual library APIs**, not synthetic constructs
- Each benchmark runs for sufficient iterations to achieve statistical significance

### Feature Test Standards

- **Only libraries with native support** participate
- Tests measure **real-world usage patterns** of the feature
- No placeholder or workaround implementations
- Separate rankings for each feature

### Benchmark Environment

- **Runtime**: Node.js v25.0.0
- **Framework**: Vitest Bench
- **Hardware**: [System-dependent]
- **Iterations**: Automatically determined by Vitest for statistical significance

---

## Key Insights

### Performance Tiers

1. **Signal-based (Tier S)**: Solid Signals, Preact Signals, Zen - Exceptional performance across all operations
2. **Atom-based (Tier A)**: Jotai - Very fast but creation overhead impacts overall score
3. **Proxy-based (Tier B)**: Valtio - Moderate performance with good ergonomics
4. **Store-based (Tier C)**: Zustand, Redux Toolkit - Lower raw performance but predictable
5. **Observable-based (Tier D)**: MobX - High creation cost, moderate runtime performance

### Trade-offs

- **Solid Signals**: Fastest overall, but requires Solid.js ecosystem
- **Preact Signals**: Excellent balance of speed and bundle size
- **Zen**: Similar performance to Preact, slightly larger bundle
- **Jotai**: Very fast read/write, slower creation, unique async capabilities
- **Valtio**: Simple API, moderate performance, good for nested mutations
- **Zustand**: Minimal bundle, simple API, moderate performance
- **Redux Toolkit**: Feature-rich, DevTools support, larger bundle
- **MobX**: Automatic tracking, slow creation, largest bundle

---

## Running Benchmarks

```bash
# Run all benchmarks
npm run benchmark

# Run specific groups
npm run benchmark:read
npm run benchmark:write
npm run benchmark:creation
```

---

## Compliance

This benchmark category follows [../../BENCHMARK_STANDARD.md](../../BENCHMARK_STANDARD.md) v1.0.0:

- ✅ Universal tests (1, 2, 3, 4, 5, 6, 7) use real APIs for all libraries
- ✅ Feature tests (8, 9, 10, 11) only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
