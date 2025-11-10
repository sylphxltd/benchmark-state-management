# State Management Benchmarks

Comprehensive performance benchmarks for JavaScript/TypeScript state management libraries.

## Overall Performance Score

**Based on Universal Tests**: Read, Write, Creation, Memory
**Methodology**: Geometric mean of operations per second across all universal tests

| Rank | Library | Score (ops/sec) | vs Leader |
|------|---------|-----------------|-----------|
| 🥇 1 | **Solid Signals** | **2.5M** | Baseline |
| 🥈 2 | **Preact Signals** | **2.3M** | 0.93x |
| 🥉 3 | **Zen** | **2.3M** | 0.91x |
|  4 | **Jotai** | **1.3M** | 0.51x |
|  5 | **Valtio** | **258K** | 0.10x |
|  6 | **Zustand** | **188K** | 0.08x |
|  7 | **Redux Toolkit** | **104K** | 0.04x |
|  8 | **MobX** | **42K** | 0.02x |

> **Note**: Groups 04 (Complexity), 05 (Cache), and 07 (Form) currently have incomplete implementations and are excluded from the Overall Performance Score. These tests require refactoring to use real store implementations rather than placeholder logic.

---

## Library Comparison

| Library | Version | Bundle Size (gzip) | Overall Score | Read | Write | Creation | Memory |
|---------|---------|-------------------|---------------|------|-------|----------|--------|
| Solid Signals | 1.9.10 | 4.0 KB | 👑 2.5M | 👑 39.9M | 33.1M | 32.1M | 923 |
| Preact Signals | 2.4.0 | 3.0 KB | 2.3M | 34.3M | 28.2M | 👑 33.4M | 904 |
| Zen | 1.2.1 | 5.3 KB | 2.3M | 32.2M | 28.2M | 32.2M | 924 |
| Jotai | 2.15.1 | 4.3 KB | 1.3M | 36.3M | 👑 33.9M | 2.3M | 917 |
| Valtio | 2.2.0 | 3.1 KB | 258K | 4.9M | 4.2M | 235K | 898 |
| Zustand | 5.0.8 | 👑 1.2 KB | 188K | 363K | 351K | 10.9M | 907 |
| Redux Toolkit | 2.10.1 | 13.8 KB | 104K | 960K | 784K | 173K | 892 |
| MobX | 6.15.0 | 17.6 KB | 42K | 3.8M | 3.0M | 278 | 👑 925 |

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

### Universal Tests (01-06)

All 8 libraries participate equally. Used to calculate Overall Performance Score.

- **01 - Read Operations**: Simple read and high-frequency read patterns
- **02 - Write Operations**: Simple increments and burst updates
- **03 - Store Creation**: Instance creation overhead
- **04 - Complexity**: Deep nested state *(Implementation incomplete)*
- **05 - Cache Performance**: Repeated access patterns *(Implementation incomplete)*
- **06 - Memory Allocation**: Large state allocation performance
- **07 - Form State**: Multi-field updates *(Implementation incomplete)*

### Feature Tests (08-11)

Libraries participate only if they have native support for the tested capability.

- **08 - Reactive Async**: Async atoms/computations (Jotai only)
- **09 - Computed Native**: Native computed values (5 libraries)
- **10 - Selectors**: Manual selector pattern (3 libraries)
- **11 - Batching Native**: Built-in batching (3 libraries)

---

## Detailed Results

### 01 - Read Operations

**Simple Read** (single value access)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 39.9M | 1.00x (fastest) |
| Jotai | 36.3M | 0.91x |
| Preact Signals | 34.3M | 0.86x |
| Zen | 32.2M | 0.81x |
| Valtio | 4.9M | 0.12x |
| MobX | 3.8M | 0.10x |
| Redux Toolkit | 960K | 0.02x |
| Zustand | 363K | 0.01x |

---

### 02 - Write Operations

**Simple Increment** (single value update)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Jotai | 33.9M | 1.00x (fastest) |
| Solid Signals | 33.1M | 0.98x |
| Zen | 28.2M | 0.83x |
| Preact Signals | 28.2M | 0.83x |
| Valtio | 4.2M | 0.13x |
| MobX | 3.0M | 0.09x |
| Redux Toolkit | 784K | 0.02x |
| Zustand | 351K | 0.01x |

---

### 03 - Store Creation

**Store/Instance Creation Overhead**

| Library | ops/sec | Relative |
|---------|---------|----------|
| Preact Signals | 33.4M | 1.00x (fastest) |
| Zen | 32.2M | 0.96x |
| Solid Signals | 32.1M | 0.96x |
| Zustand | 10.9M | 0.33x |
| Jotai | 2.3M | 0.07x |
| Valtio | 235K | 0.01x |
| Redux Toolkit | 173K | 0.01x |
| MobX | 278 | 0.00x |

> **Note**: MobX's low creation performance is expected due to makeAutoObservable overhead.

---

### 06 - Memory Allocation

**Large State Allocation** (1000-field objects)

| Library | ops/sec | Relative |
|---------|---------|----------|
| MobX | 925 | 1.00x (fastest) |
| Zen | 924 | 1.00x |
| Solid Signals | 923 | 1.00x |
| Jotai | 917 | 0.99x |
| Zustand | 907 | 0.98x |
| Preact Signals | 904 | 0.98x |
| Valtio | 898 | 0.97x |
| Redux Toolkit | 892 | 0.96x |

> **Note**: All libraries perform similarly for large state allocation, indicating minimal per-field overhead.

---

### 08 - Reactive Async (Feature Test)

**Participating Libraries**: Jotai only

| Benchmark | ops/sec |
|-----------|---------|
| Reactive Async Read | 872 |
| Async Chain (2 levels) | 433 |
| Complex Async Object | 863 |
| Concurrent Async (3 atoms) | 854 |

---

### 09 - Computed Native (Feature Test)

**Participating Libraries**: Jotai, MobX, Solid Signals, Preact Signals, Zen

**Simple Computed** (value * 2)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 38.5M | 1.00x (fastest) |
| Zen | 22.4M | 0.58x |
| Preact Signals | 22.1M | 0.57x |
| MobX | 4.0M | 0.11x |
| Jotai | 640K | 0.02x |

**Chained Computed** (computed from computed, 2 levels)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 37.9M | 1.00x (fastest) |
| Zen | 33.6M | 0.89x |
| Preact Signals | 12.1M | 0.32x |
| MobX | 2.2M | 0.06x |
| Jotai | 394K | 0.01x |

**Computed Update Performance** (triggering computed recalculation)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 19.9M | 1.00x (fastest) |
| Preact Signals | 486K | 0.02x |
| Zen | 454K | 0.02x |
| MobX | 40K | 0.00x |
| Jotai | 5K | 0.00x |

---

### 10 - Selectors (Feature Test)

**Participating Libraries**: Redux Toolkit, Zustand, Valtio

**Simple Selector**

| Library | ops/sec | Relative |
|---------|---------|----------|
| Valtio | 5.3M | 1.00x (fastest) |
| Redux Toolkit | 597K | 0.11x |
| Zustand | 365K | 0.07x |

---

### 11 - Batching Native (Feature Test)

**Participating Libraries**: Solid Signals, MobX, Valtio

**Batched Updates** (3 fields)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 39.8M | 1.00x (fastest) |
| Valtio | 4.8M | 0.12x |
| MobX | 3.3M | 0.08x |

**Large Batch** (100 updates)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 27.9M | 1.00x (fastest) |
| MobX | 146K | 0.01x |
| Valtio | 68K | 0.00x |

**Unbatched Updates** (3 fields, no batching)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 42.5M | 1.00x (fastest) |
| Valtio | 4.8M | 0.11x |
| MobX | 3.8M | 0.09x |

**Batch with Subscriptions** (3 fields with observers)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Solid Signals | 41.1M | 1.00x (fastest) |
| Valtio | 4.7M | 0.11x |
| MobX | 3.2M | 0.08x |

---

## Methodology

### Universal Test Standards

- **All libraries participate** in tests 01-07 (excluding incomplete tests)
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
- **Preact Signals**: Excellent balance of speed and bundle size (3.1 KB)
- **Zen**: Similar performance to Preact, slightly larger bundle (5.5 KB)
- **Jotai**: Very fast read/write, slower creation, unique async capabilities
- **Valtio**: Simple API, moderate performance, good for nested mutations
- **Zustand**: Minimal bundle (1.2 KB), simple API, moderate performance
- **Redux Toolkit**: Feature-rich, DevTools support, larger bundle (14.2 KB)
- **MobX**: Automatic tracking, slow creation, largest bundle (18.0 KB)

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

This benchmark category follows [BENCHMARK_STANDARD.md](../../BENCHMARK_STANDARD.md) v1.0.0:

- ✅ Universal tests (01-03, 06) use real APIs for all libraries
- ✅ Feature tests (08-11) only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ⚠️ Groups 04, 05, 07 require implementation updates
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
