# State Management Benchmarks

Comprehensive performance benchmarks for JavaScript/TypeScript state management libraries.

## Overall Performance Score

**Based on Universal Tests**: Read, Write, Creation, Memory
**Methodology**: Geometric mean of normalized scores (fastest = 100) across all universal tests
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Overall Score | Bundle (gzip) | Last Updated |
|------|---------|---------------|---------------|--------------|
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 98.4/100 | 4.0 KB | Dec 6 |
| 🥈 2 | [**Preact Signals**](https://github.com/preactjs/signals) | 91.5/100 | 3.0 KB | Nov 7 |
| 🥉 3 | [**Zen**](https://github.com/sylphxltd/zen) | 89.6/100 | 5.3 KB | Nov 7 |
|  4 | [**Jotai**](https://github.com/pmndrs/jotai) | 50.0/100 | 4.3 KB | Dec 6 |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 10.1/100 | 3.1 KB | Nov 6 |
|  6 | [**Zustand**](https://github.com/pmndrs/zustand) | 7.4/100 | 👑 1.2 KB | Nov 6 |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 4.1/100 | 13.8 KB | Dec 6 |
|  8 | [**MobX**](https://github.com/mobxjs/mobx) | 1.6/100 | 17.6 KB | Dec 6 |

> **Note**: Groups 04 (Complexity), 05 (Cache Performance), 07 (Form State) currently have incomplete implementations and are excluded from the Overall Performance Score. These tests require refactoring to use real store implementations rather than placeholder logic.

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

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Solid Signals** | 1.9.10 | 4.0 KB | 👑 28.3M | 👑 39.9M | Dec 6 |
| 🥈 2 | **Jotai** | 2.15.1 | 4.3 KB | 24.6M | 36.3M | Dec 6 |
| 🥉 3 | **Zen** | 1.2.1 | 5.3 KB | 22.6M | 32.2M | Nov 7 |
|  4 | **Preact Signals** | 2.4.0 | 3.0 KB | 14.7M | 34.3M | Nov 7 |
|  5 | **MobX** | 6.15.0 | 17.6 KB | 9.8M | 25.2M | Dec 6 |
|  6 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 2.5M | 6.6M | Dec 6 |
|  7 | **Valtio** | 2.2.0 | 3.1 KB | 2.5M | 4.9M | Nov 6 |
|  8 | **Zustand** | 5.0.8 | 1.2 KB | 993K | 2.7M | Nov 6 |

**[View Detailed Results →](groups/01-read/README.md)**

---

### [02 - Write Operations](groups/02-write/README.md)

Simple increments and burst updates

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Solid Signals** | 1.9.10 | 4.0 KB | 👑 31.2M | 33.1M | Dec 6 |
| 🥈 2 | **Jotai** | 2.15.1 | 4.3 KB | 20.3M | 👑 33.9M | Dec 6 |
| 🥉 3 | **Preact Signals** | 2.4.0 | 3.0 KB | 18.4M | 28.2M | Nov 7 |
|  4 | **Zen** | 1.2.1 | 5.3 KB | 16.8M | 28.2M | Nov 7 |
|  5 | **Valtio** | 2.2.0 | 3.1 KB | 1.5M | 4.2M | Nov 6 |
|  6 | **MobX** | 6.15.0 | 17.6 KB | 1.1M | 3.0M | Dec 6 |
|  7 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 242K | 784K | Dec 6 |
|  8 | **Zustand** | 5.0.8 | 1.2 KB | 105K | 351K | Nov 6 |

**[View Detailed Results →](groups/02-write/README.md)**

---

### [03 - Store Creation](groups/03-creation/README.md)

Instance creation overhead

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Preact Signals** | 2.4.0 | 3.0 KB | 👑 33.4M | 👑 33.4M | Nov 7 |
| 🥈 2 | **Zen** | 1.2.1 | 5.3 KB | 32.2M | 32.2M | Nov 7 |
| 🥉 3 | **Solid Signals** | 1.9.10 | 4.0 KB | 32.1M | 32.1M | Dec 6 |
|  4 | **Zustand** | 5.0.8 | 1.2 KB | 10.9M | 10.9M | Nov 6 |
|  5 | **Jotai** | 2.15.1 | 4.3 KB | 2.3M | 2.3M | Dec 6 |
|  6 | **Valtio** | 2.2.0 | 3.1 KB | 235K | 235K | Nov 6 |
|  7 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 173K | 173K | Dec 6 |
|  8 | **MobX** | 6.15.0 | 17.6 KB | 278 | 278 | Dec 6 |

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

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **MobX** | 6.15.0 | 17.6 KB | 👑 925 | 👑 925 | Dec 6 |
| 🥈 2 | **Zen** | 1.2.1 | 5.3 KB | 924 | 924 | Nov 7 |
| 🥉 3 | **Solid Signals** | 1.9.10 | 4.0 KB | 923 | 923 | Dec 6 |
|  4 | **Jotai** | 2.15.1 | 4.3 KB | 917 | 917 | Dec 6 |
|  5 | **Zustand** | 5.0.8 | 1.2 KB | 907 | 907 | Nov 6 |
|  6 | **Preact Signals** | 2.4.0 | 3.0 KB | 904 | 904 | Nov 7 |
|  7 | **Valtio** | 2.2.0 | 3.1 KB | 898 | 898 | Nov 6 |
|  8 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 892 | 892 | Dec 6 |

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

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Jotai** | 2.15.1 | 4.3 KB | 👑 726 | 👑 872 | Dec 6 |

**[View Detailed Results →](groups/08-async-reactive/README.md)**

---

### [09 - Computed Native](groups/09-computed-native/README.md) (Feature Test)

Native computed values

**Participating Libraries**: Jotai, MobX, Solid Signals, Preact Signals, Zen

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Solid Signals** | 1.9.10 | 4.0 KB | 👑 30.8M | 👑 38.5M | Dec 6 |
| 🥈 2 | **Zen** | 1.2.1 | 5.3 KB | 7.0M | 33.6M | Nov 7 |
| 🥉 3 | **Preact Signals** | 2.4.0 | 3.0 KB | 5.1M | 22.1M | Nov 7 |
|  4 | **MobX** | 6.15.0 | 17.6 KB | 702K | 4.0M | Dec 6 |
|  5 | **Jotai** | 2.15.1 | 4.3 KB | 109K | 640K | Dec 6 |

**[View Detailed Results →](groups/09-computed-native/README.md)**

---

### [10 - Selectors](groups/10-selectors/README.md) (Feature Test)

Manual selector pattern

**Participating Libraries**: Redux Toolkit, Zustand, Valtio

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Valtio** | 2.2.0 | 3.1 KB | 👑 913K | 👑 5.3M | Nov 6 |
| 🥈 2 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 166K | 597K | Dec 6 |
| 🥉 3 | **Zustand** | 5.0.8 | 1.2 KB | 137K | 705K | Nov 6 |

**[View Detailed Results →](groups/10-selectors/README.md)**

---

### [11 - Batching Native](groups/11-batching-native/README.md) (Feature Test)

Built-in batching

**Participating Libraries**: Solid Signals, MobX, Valtio

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Solid Signals** | 1.9.10 | 4.0 KB | 👑 37.3M | 👑 42.5M | Dec 6 |
| 🥈 2 | **Valtio** | 2.2.0 | 3.1 KB | 1.7M | 4.8M | Nov 6 |
| 🥉 3 | **MobX** | 6.15.0 | 17.6 KB | 1.6M | 3.8M | Dec 6 |

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
