# State Management Benchmarks

Comprehensive performance benchmarks for JavaScript/TypeScript state management libraries.

## Overall Performance Score

**Based on Universal Tests**: Read, Write, Creation, Memory
**Methodology**: Geometric mean of operations per second across all universal tests
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Overall Score | Read | Write | Creation | Memory | Last Updated |
|------|---------|---------|---------------|---------------|------|-------|----------|--------|--------------|
| 🥇 1 | **Solid Signals** | 1.9.10 | 4.0 KB | 👑 2.5M | 👑 39.9M | 33.1M | 32.1M | 923 | Dec 6 |
| 🥈 2 | **Preact Signals** | 2.4.0 | 3.0 KB | 2.3M | 34.3M | 28.2M | 👑 33.4M | 904 | Nov 7 |
| 🥉 3 | **Zen** | 1.2.1 | 5.3 KB | 2.3M | 32.2M | 28.2M | 32.2M | 924 | Nov 7 |
|  4 | **Jotai** | 2.15.1 | 4.3 KB | 1.3M | 36.3M | 👑 33.9M | 2.3M | 917 | Dec 6 |
|  5 | **Valtio** | 2.2.0 | 3.1 KB | 258K | 4.9M | 4.2M | 235K | 898 | Nov 6 |
|  6 | **Zustand** | 5.0.8 | 👑 1.2 KB | 188K | 363K | 351K | 10.9M | 907 | Nov 6 |
|  7 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 104K | 960K | 784K | 173K | 892 | Dec 6 |
|  8 | **MobX** | 6.15.0 | 17.6 KB | 42K | 3.8M | 3.0M | 278 | 👑 925 | Dec 6 |

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

### [01 - Read Operations](groups/01-read/)

Simple read and high-frequency read patterns

**Top Performer**: 👑 **Solid Signals** - 39.9M ops/sec

**[View Detailed Results →](groups/01-read/)**

---

### [02 - Write Operations](groups/02-write/)

Simple increments and burst updates

**Top Performer**: 👑 **Jotai** - 33.9M ops/sec

**[View Detailed Results →](groups/02-write/)**

---

### [03 - Store Creation](groups/03-creation/)

Instance creation overhead

**Top Performer**: 👑 **Preact Signals** - 33.4M ops/sec

**[View Detailed Results →](groups/03-creation/)**

---

### [04 - Complexity](groups/04-complexity/)

Deep nested state

⚠️ *Implementation incomplete - excluded from Overall Performance Score*

**[View Group Details →](groups/04-complexity/)**

---

### [05 - Cache Performance](groups/05-cache/)

Repeated access patterns

⚠️ *Implementation incomplete - excluded from Overall Performance Score*

**[View Group Details →](groups/05-cache/)**

---

### [06 - Memory Allocation](groups/06-memory/)

Large state allocation performance

**Top Performer**: 👑 **MobX** - 925 ops/sec

**[View Detailed Results →](groups/06-memory/)**

---

### [07 - Form State](groups/07-form/)

Multi-field updates

⚠️ *Implementation incomplete - excluded from Overall Performance Score*

**[View Group Details →](groups/07-form/)**

---

### [08 - Reactive Async](groups/08-async-reactive/) (Feature Test)

Async atoms/computations

**Participating Libraries**: Jotai

**Top Performer**: 👑 **Jotai** - 872 ops/sec

**[View Detailed Results →](groups/08-async-reactive/)**

---

### [09 - Computed Native](groups/09-computed-native/) (Feature Test)

Native computed values

**Participating Libraries**: Jotai, MobX, Solid Signals, Preact Signals, Zen

**Top Performer**: 👑 **Solid Signals** - 38.5M ops/sec

**[View Detailed Results →](groups/09-computed-native/)**

---

### [10 - Selectors](groups/10-selectors/) (Feature Test)

Manual selector pattern

**Participating Libraries**: Redux Toolkit, Zustand, Valtio

**Top Performer**: 👑 **Valtio** - 5.3M ops/sec

**[View Detailed Results →](groups/10-selectors/)**

---

### [11 - Batching Native](groups/11-batching-native/) (Feature Test)

Built-in batching

**Participating Libraries**: Solid Signals, MobX, Valtio

**Top Performer**: 👑 **Solid Signals** - 42.5M ops/sec

**[View Detailed Results →](groups/11-batching-native/)**

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
