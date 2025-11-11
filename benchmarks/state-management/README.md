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

> **Note**: Groups 04 (Complexity), 05 (Cache Performance), 07 (Form State) currently have incomplete implementations and are excluded from the Overall Performance Score. These tests require refactoring to use real store implementations rather than placeholder logic.

---

## Performance by Group

See which library wins in each test group:

| Library | [01](#01---read-operations) | [02](#02---write-operations) | [03](#03---store-creation) | [04](#04---complexity) | [05](#05---cache-performance) | [06](#06---memory-allocation) | [07](#07---form-state) | [08](#08---reactive-async) | [09](#09---computed-native) | [10](#10---selectors) | [11](#11---batching-native) |
|---------|------|------|------|------|------|------|------|------|------|------|------|
| [**Solid Signals**](https://github.com/solidjs/solid) | 🥉 | 🥇 | 5 | - | - | 🥇 | - | - | - | - | 🥇 |
| [**Preact Signals**](https://github.com/preactjs/signals) | 4 | 🥉 | 4 | - | - | 🥉 | - | - | - | - | - |
| [**Zen**](https://github.com/SylphxAI/zen) | 🥈 | 4 | 6 | - | - | 4 | - | - | - | - | - |
| [**Jotai**](https://github.com/pmndrs/jotai) | 🥇 | 🥈 | 🥉 | - | - | 🥈 | - | - | - | - | - |
| [**Valtio**](https://github.com/pmndrs/valtio) | 7 | 5 | 🥈 | - | - | 5 | - | - | - | - | 🥈 |
| [**Zustand**](https://github.com/pmndrs/zustand) | 8 | 8 | 8 | - | - | 8 | - | - | - | - | - |
| [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 6 | 7 | 7 | - | - | 7 | - | - | - | - | - |
| [**MobX**](https://github.com/mobxjs/mobx) | 5 | 6 | 🥇 | - | - | 6 | - | - | - | - | 🥉 |

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
- **04 - Complexity**: Deep nested state *(Implementation incomplete)*
- **05 - Cache Performance**: Repeated access patterns *(Implementation incomplete)*
- **06 - Memory Allocation**: Large state allocation performance
- **07 - Form State**: Multi-field updates *(Implementation incomplete)*

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
🥇   Jotai              ████████████████████████████████████████      1.2M ops/sec
🥈   Zen                ████████████████████████████████████████      1.2M ops/sec
🥉   Solid Signals      ███████████████████████████████████████       1.2M ops/sec
4.   Preact Signals     ███████████████████████████████████████       1.2M ops/sec
5.   MobX               ████████████████████████                      727K ops/sec
6.   Redux Toolkit      █████████████████                             528K ops/sec
7.   Valtio             ███████████████                               454K ops/sec
8.   Zustand            ████████████                                  375K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Jotai** | 👑 1.2M |
| 🥈 2 | **Zen** | 1.2M |
| 🥉 3 | **Solid Signals** | 1.2M |
|  4 | **Preact Signals** | 1.2M |
|  5 | **MobX** | 727K |
|  6 | **Redux Toolkit** | 528K |
|  7 | **Valtio** | 454K |
|  8 | **Zustand** | 375K |

**[View Detailed Results →](groups/01-read/README.md)**

---

### [02 - Write Operations](groups/02-write/README.md)

Simple increments and burst updates

```
🥇   Solid Signals      ████████████████████████████████████████      1.3M ops/sec
🥈   Jotai              ████████████████████████████                  895K ops/sec
🥉   Preact Signals     ███████████████████████████                   845K ops/sec
4.   Zen                █████████████████████████                     783K ops/sec
5.   Valtio             ██                                             56K ops/sec
6.   MobX               █                                              41K ops/sec
7.   Redux Toolkit                                                     10K ops/sec
8.   Zustand                                                            4K ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 👑 1.3M |
| 🥈 2 | **Jotai** | 895K |
| 🥉 3 | **Preact Signals** | 845K |
|  4 | **Zen** | 783K |
|  5 | **Valtio** | 56K |
|  6 | **MobX** | 41K |
|  7 | **Redux Toolkit** | 10K |
|  8 | **Zustand** | 4K |

**[View Detailed Results →](groups/02-write/README.md)**

---

### [03 - Store Creation](groups/03-creation/README.md)

Instance creation overhead

```
🥇   MobX               ████████████████████████████████████████     51.0M ops/sec
🥈   Valtio             ████████████████████████████████████████     51.0M ops/sec
🥉   Jotai              ████████████████████████████████████████     50.8M ops/sec
4.   Preact Signals     ███████████████████████████████████████      50.3M ops/sec
5.   Solid Signals      ███████████████████████████████████████      50.1M ops/sec
6.   Zen                ███████████████████████████████████████      50.1M ops/sec
7.   Redux Toolkit      ███████████████████████████████████████      50.0M ops/sec
8.   Zustand            ███████████████████████████████████████      50.0M ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **MobX** | 👑 51.0M |
| 🥈 2 | **Valtio** | 51.0M |
| 🥉 3 | **Jotai** | 50.8M |
|  4 | **Preact Signals** | 50.3M |
|  5 | **Solid Signals** | 50.1M |
|  6 | **Zen** | 50.1M |
|  7 | **Redux Toolkit** | 50.0M |
|  8 | **Zustand** | 50.0M |

**[View Detailed Results →](groups/03-creation/README.md)**

---

### [04 - Complexity](groups/04-complexity/README.md)

Deep nested state

⚠️ *Implementation incomplete - excluded from Overall Performance Score*

**[View Detailed Results →](groups/04-complexity/README.md)**

---

### [05 - Cache Performance](groups/05-cache/README.md)

Repeated access patterns

⚠️ *Implementation incomplete - excluded from Overall Performance Score*

**[View Detailed Results →](groups/05-cache/README.md)**

---

### [06 - Memory Allocation](groups/06-memory/README.md)

Large state allocation performance

```
🥇   Solid Signals      ████████████████████████████████████████     49.9M ops/sec
🥈   Jotai              ███████████████████████████████████████      48.6M ops/sec
🥉   Preact Signals     ██████████████████████████████████████       47.4M ops/sec
4.   Zen                ██████████████████████████████████████       47.2M ops/sec
5.   Valtio             ████████████                                 15.2M ops/sec
6.   MobX               ████████████                                 14.4M ops/sec
7.   Redux Toolkit      ██████                                        7.0M ops/sec
8.   Zustand            ███                                           4.3M ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 👑 49.9M |
| 🥈 2 | **Jotai** | 48.6M |
| 🥉 3 | **Preact Signals** | 47.4M |
|  4 | **Zen** | 47.2M |
|  5 | **Valtio** | 15.2M |
|  6 | **MobX** | 14.4M |
|  7 | **Redux Toolkit** | 7.0M |
|  8 | **Zustand** | 4.3M |

**[View Detailed Results →](groups/06-memory/README.md)**

---

### [07 - Form State](groups/07-form/README.md)

Multi-field updates

⚠️ *Implementation incomplete - excluded from Overall Performance Score*

**[View Detailed Results →](groups/07-form/README.md)**

---

### [08 - Reactive Async](groups/08-async-reactive/README.md) (Feature Test)

Async atoms/computations

**Participating Libraries**: Jotai

*No results available*

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
🥇   Solid Signals      ████████████████████████████████████████     37.4M ops/sec
🥈   Valtio             ██                                            1.7M ops/sec
🥉   MobX               ██                                            1.5M ops/sec
```

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | **Solid Signals** | 👑 37.4M |
| 🥈 2 | **Valtio** | 1.7M |
| 🥉 3 | **MobX** | 1.5M |

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

- ✅ Universal tests (1, 2, 3, 6) use real APIs for all libraries
- ✅ Feature tests (8, 9, 10, 11) only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ⚠️ Groups 4, 5, 7 require implementation updates
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
