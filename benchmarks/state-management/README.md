# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📑 Table of Contents

- [📋 Benchmark Information](#-benchmark-information)
- [📦 Library Versions](#-library-versions)
- [📦 Bundle Size Comparison](#-bundle-size-comparison)
- [🚀 Performance Rankings](#-performance-rankings)
- [📦 Bundle Size Rankings](#-bundle-size-rankings)
- [🎯 Feature Coverage Rankings](#-feature-coverage-rankings)
- [✨ Feature Comparison](#-feature-comparison)
- [📜 Historical Results](#-historical-results)
- [📊 Detailed Results](#-detailed-results)
  - [📑 Test Categories](#-test-categories)
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 10, 2025
- **Last Run:** 4:38:08 PM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **@preact/signals** | `v2.4.0` | 3.04KB | Nov 7, 2025 | ✅ Latest |
| **@reduxjs/toolkit** | `v2.10.1` | 13.83KB | Dec 6, 2024 | ✅ Latest |
| **@sylphx/zen** | `v2.0.0` | 5.35KB | Nov 11, 2025 | ✅ Latest |
| **jotai** | `v2.15.1` | 4.29KB | Dec 6, 2024 | ✅ Latest |
| **mobx** | `v6.15.0` | 17.56KB | Dec 6, 2024 | ✅ Latest |
| **recoil** | `v0.7.7` | 23.48KB | Nov 6, 2025 | ✅ Latest |
| **solid-js** | `v1.9.10` | 3.96KB | Dec 6, 2024 | ✅ Latest |
| **valtio** | `v2.2.0` | 3.07KB | Nov 6, 2025 | ✅ Latest |
| **zustand** | `v5.0.8` | 1.17KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **zustand** | 1.17KB | 3.08KB | Baseline |
| 🥈 | **@preact/signals** | 3.04KB | 8.97KB | 2.59x |
| 🥉 | **valtio** | 3.07KB | 8.27KB | 2.62x |
| 4 | **solid-js** | 3.96KB | 11.91KB | 3.38x |
| 5 | **jotai** | 4.29KB | 11.12KB | 3.66x |
| 6 | **@sylphx/zen** | 5.35KB | 18.43KB | 4.56x |
| 7 | **@reduxjs/toolkit** | 13.83KB | 40.60KB | 11.79x |
| 8 | **mobx** | 17.56KB | 63.65KB | 14.97x |
| 9 | **recoil** | 23.48KB | 79.39KB | 20.02x |

**Size Insight:** zustand is the most lightweight at 1.17KB (gzip), while recoil is 20.02x larger at 23.48KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **jotai** | 100.0/100 | Baseline |
| 🥈 | **Concurrent Async** | 97.6/100 | 97.6% |
| 🥉 | **Async Loading** | 97.3/100 | 97.3% |
| 4 | **Large State Allocation** | 68.4/100 | 68.4% |
| 5 | **Solid Signals** | 67.5/100 | 67.5% |
| 6 | **Zen** | 64.5/100 | 64.5% |
| 7 | **Preact Signals** | 62.9/100 | 62.9% |
| 8 | **Jotai** | 34.2/100 | 34.2% |
| 9 | **High Frequency Read** | 24.6/100 | 24.6% |
| 10 | **Simple Increment** | 19.6/100 | 19.6% |
| 11 | **Simple Read** | 19.3/100 | 19.3% |
| 12 | **Zustand** | 11.6/100 | 11.6% |
| 13 | **Valtio** | 8.5/100 | 8.5% |
| 14 | **MobX** | 8.4/100 | 8.4% |
| 15 | **zustand** | 5.3/100 | 5.3% |
| 16 | **Store Creation** | 4.9/100 | 4.9% |
| 17 | **Burst Updates** | 4.8/100 | 4.8% |
| 18 | **redux-toolkit** | 0.3/100 | 0.3% |
| 19 | **Redux Toolkit** | 0.0/100 | 0.0% |
| 19 | **Deep Read Access** | 0.0/100 | 0.0% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **zustand** | 1.17KB | 100/100 | Excellent |
| 🥈 | **jotai** | 4.29KB | 83/100 | Good |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **Jotai** | 36/66 | 55% |
| 🥇 | **Zen** | 36/66 | 55% |
| 🥉 | **Zustand** | 35/66 | 53% |
| 🥉 | **MobX** | 35/66 | 53% |
| 🥉 | **Valtio** | 35/66 | 53% |
| 🥉 | **Preact Signals** | 35/66 | 53% |
| 🥉 | **Solid Signals** | 35/66 | 53% |
| 8 | **Redux Toolkit** | 34/66 | 52% |
| 9 | **jotai** | 4/66 | 6% |
| 9 | **redux-toolkit** | 4/66 | 6% |
| 9 | **zustand** | 4/66 | 6% |
| 12 | **Store Creation** | 1/66 | 2% |
| 12 | **Large State Allocation** | 1/66 | 2% |
| 12 | **Async Loading** | 1/66 | 2% |
| 12 | **Concurrent Async** | 1/66 | 2% |
| 12 | **Simple Read** | 1/66 | 2% |
| 12 | **High Frequency Read** | 1/66 | 2% |
| 12 | **Simple Increment** | 1/66 | 2% |
| 12 | **Burst Updates** | 1/66 | 2% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Compare state management libraries by their supported features

| Feature | **@preact/signals** | **@reduxjs/toolkit** | **@sylphx/zen** | **jotai** | **mobx** | **solid-js** | **valtio** | **zustand** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Native Computed Values**<br/><sub>Automatic dependency tracking for derived values using native computed/memo constructs</sub> | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Selector Pattern**<br/><sub>Manual derived state using selector functions</sub> | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Reactive Async**<br/><sub>Async computations that automatically recompute when dependencies change</sub> | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Native Batching**<br/><sub>Built-in update batching to reduce notification overhead</sub> | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ |
| **Middleware System**<br/><sub>Plugin system for extending functionality (logging, persistence, etc.)</sub> | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [async - Concurrent Async](#async-concurrent-async)
- [async - Heavy Async Load](#async-heavy-async-load)
- [async - Sequential Async](#async-sequential-async)
- [cache - Burst Access Pattern](#cache-burst-access-pattern)
- [cache - Heavy Computation](#cache-heavy-computation)
- [cache - Light Memoization](#cache-light-memoization)
- [form - Complex Form](#form-complex-form)
- [form - Nested Form](#form-nested-form)
- [form - Simple Form](#form-simple-form)
- [memory - Heavy Memory Usage](#memory-heavy-memory-usage)
- [memory - Light Memory Usage](#memory-light-memory-usage)
- [memory - Moderate Memory Usage](#memory-moderate-memory-usage)
- [read - Burst Read](#read-burst-read)
- [read - Extreme Load](#read-extreme-load)
- [read - High Frequency](#read-high-frequency)
- [read - Moderate Load](#read-moderate-load)
- [read - Single Read](#read-single-read)
- [write - Batch Operations](#write-batch-operations)
- [write - Burst Write](#write-burst-write)
- [write - Heavy Write Load](#write-heavy-write-load)
- [write - Single Write](#write-single-write)
- [Store Creation](#store-creation)
- [Simple Increment](#simple-increment)
- [High Frequency Read](#high-frequency-read)
- [Burst Updates](#burst-updates)
- [Array Splice Operations](#array-splice-operations)
- [Large Array Sort](#large-array-sort)
- [Array Find Operations](#array-find-operations)
- [Deep Object Creation](#deep-object-creation)
- [10-Level Nested Update](#10-level-nested-update)
- [Deep Read Access](#deep-read-access)
- [Complex Computed Chain](#complex-computed-chain)
- [Computed Invalidation](#computed-invalidation)
- [Subscription Cascade](#subscription-cascade)
- [Reaction Performance](#reaction-performance)
- [Multi-Store Operations](#multi-store-operations)
- [Memory Allocation](#memory-allocation)
- [Form State Management](#form-state-management)
- [Optimistic Update](#optimistic-update)
- [Undo/Redo Operations](#undoredo-operations)
- [Batch State Operations](#batch-state-operations)
- [Null Value Handling](#null-value-handling)
- [Undefined Value Handling](#undefined-value-handling)
- [Async State Loading](#async-state-loading)
- [Concurrent Async Operations](#concurrent-async-operations)
- [Computed Access](#computed-access)
- [Nested Update](#nested-update)
- [Array Push](#array-push)
- [Loading State Toggle](#loading-state-toggle)
- [Multiple Subscriptions (10 subscribers)](#multiple-subscriptions-10-subscribers)
- [Batch Updates (3 state changes)](#batch-updates-3-state-changes)
- [Array Filter](#array-filter)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels)
- [Large State Update (1000 items)](#large-state-update-1000-items)
- [Reactive Async State Access](#reactive-async-state-access)
- [Cache Performance - Caching patterns and memoization](#cache-performance-caching-patterns-and-memoization)
- [Deep Nested Updates](#deep-nested-updates)
- [Form State - Form state management](#form-state-form-state-management)
- [Read Operations - x1](#read-operations-x1)
- [Read - 1000x operations (experimental)](#read-1000x-operations-experimental)
- [Read - 10000x operations (experimental)](#read-10000x-operations-experimental)
- [Write Operations - x1](#write-operations-x1)
- [Write - 1000x operations (experimental)](#write-1000x-operations-experimental)
- [Write - 10000x operations (experimental)](#write-10000x-operations-experimental)

### async - Concurrent Async

**Performance Comparison:**

```
🥇 jotai - async (Co...  0.00
🥇 redux-toolkit - a...  0.00
🥇 zustand - async (...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - async (Concurrent async operations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - async (Concurrent async operations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - async (Concurrent async operations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - async (Concurrent async operations) is **NaNx faster** than zustand - async (Concurrent async operations) in this category.

### async - Heavy Async Load

**Performance Comparison:**

```
🥇 jotai - async (He...  0.00
🥇 redux-toolkit - a...  0.00
🥇 zustand - async (...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - async (Heavy async operations with many concurrent promises)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - async (Heavy async operations with many concurrent promises)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - async (Heavy async operations with many concurrent promises)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - async (Heavy async operations with many concurrent promises) is **NaNx faster** than zustand - async (Heavy async operations with many concurrent promises) in this category.

### async - Sequential Async

**Performance Comparison:**

```
🥇 jotai - async (Se...  0.00
🥇 redux-toolkit - a...  0.00
🥇 zustand - async (...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - async (Sequential async operations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - async (Sequential async operations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - async (Sequential async operations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - async (Sequential async operations) is **NaNx faster** than zustand - async (Sequential async operations) in this category.

### cache - Burst Access Pattern

**Performance Comparison:**

```
🥇 jotai - cache (Bu...  0.00
🥇 zustand - cache (...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - cache (Burst access pattern testing cache pressure)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - cache (Burst access pattern testing cache pressure)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

### cache - Heavy Computation

**Performance Comparison:**

```
🥇 jotai - cache (He...  0.00
🥇 zustand - cache (...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - cache (Heavy computation that benefits from caching)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - cache (Heavy computation that benefits from caching)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

### cache - Light Memoization

**Performance Comparison:**

```
🥇 jotai - cache (Li...  0.00
🥇 zustand - cache (...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - cache (Light computation with frequent cache hits)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - cache (Light computation with frequent cache hits)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

### form - Complex Form

**Performance Comparison:**

```
🥇 jotai - form (Com...  0.00
🥇 redux-toolkit - f...  0.00
🥇 zustand - form (C...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - form (Complex form with arrays and deep nesting)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - form (Complex form with arrays and deep nesting)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - form (Complex form with arrays and deep nesting)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - form (Complex form with arrays and deep nesting) is **NaNx faster** than zustand - form (Complex form with arrays and deep nesting) in this category.

### form - Nested Form

**Performance Comparison:**

```
🥇 jotai - form (For...  0.00
🥇 redux-toolkit - f...  0.00
🥇 zustand - form (F...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - form (Form with nested object structures)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - form (Form with nested object structures)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - form (Form with nested object structures)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - form (Form with nested object structures) is **NaNx faster** than zustand - form (Form with nested object structures) in this category.

### form - Simple Form

**Performance Comparison:**

```
🥇 jotai - form (Sim...  0.00
🥇 redux-toolkit - f...  0.00
🥇 zustand - form (S...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - form (Simple form with basic fields)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - form (Simple form with basic fields)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - form (Simple form with basic fields)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - form (Simple form with basic fields) is **NaNx faster** than zustand - form (Simple form with basic fields) in this category.

### memory - Heavy Memory Usage

**Performance Comparison:**

```
🥇 jotai - memory (L...  0.00
🥇 redux-toolkit - m...  0.00
🥇 zustand - memory ...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - memory (Large object creation and memory pressure)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - memory (Large object creation and memory pressure)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - memory (Large object creation and memory pressure)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - memory (Large object creation and memory pressure) is **NaNx faster** than zustand - memory (Large object creation and memory pressure) in this category.

### memory - Light Memory Usage

**Performance Comparison:**

```
🥇 jotai - memory (S...  0.00
🥇 redux-toolkit - m...  0.00
🥇 zustand - memory ...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - memory (Small object creation and cleanup)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - memory (Small object creation and cleanup)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - memory (Small object creation and cleanup)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - memory (Small object creation and cleanup) is **NaNx faster** than zustand - memory (Small object creation and cleanup) in this category.

### memory - Moderate Memory Usage

**Performance Comparison:**

```
🥇 jotai - memory (M...  0.00
🥇 redux-toolkit - m...  0.00
🥇 zustand - memory ...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - memory (Medium object creation with nested structures)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - memory (Medium object creation with nested structures)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - memory (Medium object creation with nested structures)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - memory (Medium object creation with nested structures) is **NaNx faster** than zustand - memory (Medium object creation with nested structures) in this category.

### read - Burst Read

**Performance Comparison:**

```
🥇 jotai - read (Qui...  0.00
🥇 redux-toolkit - r...  0.00
🥇 zustand - read (Q...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - read (Quick burst of 10 reads)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - read (Quick burst of 10 reads)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - read (Quick burst of 10 reads)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - read (Quick burst of 10 reads) is **NaNx faster** than zustand - read (Quick burst of 10 reads) in this category.

### read - Extreme Load

**Performance Comparison:**

```
🥇 jotai - read (Ext...  0.00
🥇 redux-toolkit - r...  0.00
🥇 zustand - read (E...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - read (Extreme read load (10000 ops))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - read (Extreme read load (10000 ops))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - read (Extreme read load (10000 ops))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - read (Extreme read load (10000 ops)) is **NaNx faster** than zustand - read (Extreme read load (10000 ops)) in this category.

### read - High Frequency

**Performance Comparison:**

```
🥇 jotai - read (Hig...  0.00
🥇 redux-toolkit - r...  0.00
🥇 zustand - read (H...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - read (High frequency read operations (1000 ops))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - read (High frequency read operations (1000 ops))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - read (High frequency read operations (1000 ops))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - read (High frequency read operations (1000 ops)) is **NaNx faster** than zustand - read (High frequency read operations (1000 ops)) in this category.

### read - Moderate Load

**Performance Comparison:**

```
🥇 jotai - read (Mod...  0.00
🥇 redux-toolkit - r...  0.00
🥇 zustand - read (M...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - read (Moderate read load (100 operations))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - read (Moderate read load (100 operations))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - read (Moderate read load (100 operations))** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - read (Moderate read load (100 operations)) is **NaNx faster** than zustand - read (Moderate read load (100 operations)) in this category.

### read - Single Read

**Performance Comparison:**

```
🥇 jotai - read (Sin...  0.00
🥇 redux-toolkit - r...  0.00
🥇 zustand - read (S...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - read (Single state access operation)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **redux-toolkit - read (Single state access operation)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **zustand - read (Single state access operation)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** jotai - read (Single state access operation) is **NaNx faster** than zustand - read (Single state access operation) in this category.

### write - Batch Operations

**Performance Comparison:**

```
🥇 jotai - write (Ba... ████████████████████████████████████████ 1.42M
🥈 zustand - write (... █ 40.05K
🥉 redux-toolkit - w... █ 1.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - write (Batch write operations (100 ops))** | 1.42M | ±0.15% | 0.7031ms | 0.7220ms | 711.14K |
| 🥈 | **zustand - write (Batch write operations (100 ops))** | 40.05K | ±0.38% | 24.9719ms | 34.7860ms | 20.02K |
| 🥉 | **redux-toolkit - write (Batch write operations (100 ops))** | 1.88K | ±1.50% | 532.8718ms | 1026.8440ms | 939.00 |

**Key Insight:** jotai - write (Batch write operations (100 ops)) is **757.89x faster** than redux-toolkit - write (Batch write operations (100 ops)) in this category.

### write - Burst Write

**Performance Comparison:**

```
🥇 jotai - write (Qu... ████████████████████████████████████████ 7.41M
🥈 zustand - write (... ██ 384.57K
🥉 redux-toolkit - w... █ 19.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - write (Quick burst of 10 writes)** | 7.41M | ±0.10% | 0.1349ms | 0.1610ms | 3.71M |
| 🥈 | **zustand - write (Quick burst of 10 writes)** | 384.57K | ±0.38% | 2.6003ms | 3.0160ms | 192.28K |
| 🥉 | **redux-toolkit - write (Quick burst of 10 writes)** | 19.55K | ±0.83% | 51.1394ms | 65.2420ms | 9.78K |

**Key Insight:** jotai - write (Quick burst of 10 writes) is **378.95x faster** than redux-toolkit - write (Quick burst of 10 writes) in this category.

### write - Heavy Write Load

**Performance Comparison:**

```
🥇 jotai - write (He... ████████████████████████████████████████ 157.17K
🥈 zustand - write (... █ 4.05K
🥉 redux-toolkit - w... █ 203.06
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - write (Heavy write operations (1000 ops))** | 157.17K | ±0.14% | 6.3626ms | 13.0440ms | 78.58K |
| 🥈 | **zustand - write (Heavy write operations (1000 ops))** | 4.05K | ±0.43% | 247.0153ms | 347.1210ms | 2.02K |
| 🥉 | **redux-toolkit - write (Heavy write operations (1000 ops))** | 203.06 | ±0.65% | 4924.5333ms | 5798.5600ms | 102.00 |

**Key Insight:** jotai - write (Heavy write operations (1000 ops)) is **773.98x faster** than redux-toolkit - write (Heavy write operations (1000 ops)) in this category.

### write - Single Write

**Performance Comparison:**

```
🥇 jotai - write (Si... ████████████████████████████████████████ 13.15M
🥈 zustand - write (... █████████ 2.84M
🥉 redux-toolkit - w... █ 193.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **jotai - write (Single state mutation operation)** | 13.15M | ±0.10% | 0.0761ms | 0.0900ms | 6.57M |
| 🥈 | **zustand - write (Single state mutation operation)** | 2.84M | ±0.47% | 0.3520ms | 0.4010ms | 1.42M |
| 🥉 | **redux-toolkit - write (Single state mutation operation)** | 193.52K | ±0.80% | 5.1674ms | 9.3470ms | 96.76K |

**Key Insight:** jotai - write (Single state mutation operation) is **67.95x faster** than redux-toolkit - write (Single state mutation operation) in this category.

### Store Creation

**Performance Comparison:**

```
🥇 Store Creation - ... ████████████████████████████████████████ 13.19M
🥈 Store Creation - ... ███████████████████████████████████████ 13.01M
🥉 Store Creation - Zen ███████████████████████████████████████ 12.84M
   Solid Signals        ███████████████████████████████ 10.32M
   Zen                  ███████████████████████████████ 10.19M
   Preact Signals       ██████████████████████████████ 9.96M
   Store Creation - ... ███████████████ 4.97M
   Zustand              █████████████ 4.24M
   Store Creation - ... ███ 888.63K
   Jotai                ██ 808.99K
   Valtio               █ 327.61K
   Store Creation - ... █ 280.01K
   Store Creation - ... █ 90.09K
   Redux Toolkit        █ 86.90K
   Store Creation - ... █ 120.39
   MobX                 █ 113.57
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Store Creation - Preact Signals** | 13.19M | ±0.17% | 0.0758ms | 0.0900ms | 6.59M |
| 🥈 | **Store Creation - Solid Signals** | 13.01M | ±0.11% | 0.0769ms | 0.0900ms | 6.50M |
| 🥉 | **Store Creation - Zen** | 12.84M | ±0.17% | 0.0779ms | 0.0910ms | 6.42M |
| 4 | **Solid Signals** | 10.32M | ±0.10% | 0.0969ms | 0.1400ms | 5.16M |
| 5 | **Zen** | 10.19M | ±0.09% | 0.0981ms | 0.1110ms | 5.09M |
| 6 | **Preact Signals** | 9.96M | ±0.10% | 0.1004ms | 0.1410ms | 4.98M |
| 7 | **Store Creation - Zustand** | 4.97M | ±2.76% | 0.2012ms | 0.4110ms | 2.49M |
| 8 | **Zustand** | 4.24M | ±0.35% | 0.2357ms | 0.4610ms | 2.12M |
| 9 | **Store Creation - Jotai** | 888.63K | ±2.16% | 1.1253ms | 1.4230ms | 444.32K |
| 10 | **Jotai** | 808.99K | ±2.06% | 1.2361ms | 1.7640ms | 404.50K |
| 11 | **Valtio** | 327.61K | ±15.40% | 3.0524ms | 5.2310ms | 163.81K |
| 12 | **Store Creation - Valtio** | 280.01K | ±21.43% | 3.5713ms | 4.5890ms | 141.39K |
| 13 | **Store Creation - Redux Toolkit** | 90.09K | ±0.72% | 11.0996ms | 22.9130ms | 45.05K |
| 14 | **Redux Toolkit** | 86.90K | ±0.88% | 11.5072ms | 23.4730ms | 43.45K |
| 15 | **Store Creation - MobX** | 120.39 | ±6.29% | 8306.5825ms | 11284.2630ms | 61.00 |
| 16 | **MobX** | 113.57 | ±7.55% | 8805.2193ms | 15360.8560ms | 57.00 |

**Key Insight:** Store Creation - Preact Signals is **116120.34x faster** than MobX in this category.

### Simple Increment

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.64M
🥈 Solid Signals        ████████████████████████████████████████ 10.59M
🥉 Zen                  ██████████████████████████████████████ 10.18M
   Preact Signals       ███████████████████████████████████ 9.37M
   Jotai                ██████████████████████████████████ 9.16M
   Zen                  ██████████████████████████████████ 9.03M
   Preact Signals       █████████████████████████████████ 8.65M
   MobX                 ██████ 1.61M
   Valtio               ██████ 1.56M
   Valtio               █████ 1.37M
   MobX                 ████ 1.12M
   Jotai                ██ 512.16K
   Redux Toolkit        █ 289.08K
   Redux Toolkit        █ 279.21K
   Zustand              █ 166.97K
   Zustand              █ 163.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 10.64M | ±0.09% | 0.0940ms | 0.1100ms | 5.32M |
| 🥈 | **Solid Signals** | 10.59M | ±0.09% | 0.0944ms | 0.1100ms | 5.30M |
| 🥉 | **Zen** | 10.18M | ±0.16% | 0.0982ms | 0.1400ms | 5.09M |
| 4 | **Preact Signals** | 9.37M | ±0.16% | 0.1068ms | 0.1700ms | 4.68M |
| 5 | **Jotai** | 9.16M | ±0.09% | 0.1092ms | 0.1400ms | 4.58M |
| 6 | **Zen** | 9.03M | ±0.10% | 0.1108ms | 0.1600ms | 4.51M |
| 7 | **Preact Signals** | 8.65M | ±0.09% | 0.1156ms | 0.1410ms | 4.33M |
| 8 | **MobX** | 1.61M | ±0.16% | 0.6196ms | 0.8210ms | 806.96K |
| 9 | **Valtio** | 1.56M | ±0.21% | 0.6420ms | 0.7110ms | 778.79K |
| 10 | **Valtio** | 1.37M | ±0.35% | 0.7310ms | 0.7910ms | 684.01K |
| 11 | **MobX** | 1.12M | ±0.34% | 0.8963ms | 1.0710ms | 557.83K |
| 12 | **Jotai** | 512.16K | ±0.76% | 1.9525ms | 4.5190ms | 256.08K |
| 13 | **Redux Toolkit** | 289.08K | ±0.81% | 3.4592ms | 6.0210ms | 144.58K |
| 14 | **Redux Toolkit** | 279.21K | ±0.45% | 3.5815ms | 6.3110ms | 139.61K |
| 15 | **Zustand** | 166.97K | ±0.22% | 5.9892ms | 6.7230ms | 83.48K |
| 16 | **Zustand** | 163.25K | ±0.72% | 6.1255ms | 11.3210ms | 81.63K |

**Key Insight:** Solid Signals is **65.15x faster** than Zustand in this category.

### High Frequency Read

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 38.42K
🥈 Jotai                ███████████████████████████████████████ 37.66K
🥉 Redux Toolkit        ███████████████████████████████████████ 37.30K
   Preact Signals       ██████████████████████████████████████ 36.79K
   Zen                  ██████████████████████████████████████ 36.76K
   Zustand              ████████████████████████████ 27.29K
   Valtio               ████████████████████ 19.26K
   MobX                 ███████████████████ 17.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 38.42K | ±0.12% | 26.0281ms | 33.5430ms | 19.21K |
| 🥈 | **Jotai** | 37.66K | ±0.08% | 26.5548ms | 33.7930ms | 18.83K |
| 🥉 | **Redux Toolkit** | 37.30K | ±0.12% | 26.8085ms | 35.2170ms | 18.65K |
| 4 | **Preact Signals** | 36.79K | ±0.09% | 27.1785ms | 34.5150ms | 18.40K |
| 5 | **Zen** | 36.76K | ±0.09% | 27.2062ms | 34.6450ms | 18.38K |
| 6 | **Zustand** | 27.29K | ±0.10% | 36.6501ms | 43.9320ms | 13.64K |
| 7 | **Valtio** | 19.26K | ±0.08% | 51.9126ms | 59.3320ms | 9.63K |
| 8 | **MobX** | 17.91K | ±0.10% | 55.8294ms | 63.4390ms | 8.96K |

**Key Insight:** Solid Signals is **2.14x faster** than MobX in this category.

### Burst Updates

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 379.48K
🥈 Jotai                ██████████████████████████████ 280.56K
🥉 Zen                  ███████████████████████████ 260.10K
   Preact Signals       ███████████████████████████ 252.93K
   Valtio               ██ 17.01K
   MobX                 █ 12.93K
   Redux Toolkit        █ 3.07K
   Zustand              █ 1.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 379.48K | ±0.16% | 2.6352ms | 2.6450ms | 189.74K |
| 🥈 | **Jotai** | 280.56K | ±0.33% | 3.5644ms | 4.2280ms | 140.28K |
| 🥉 | **Zen** | 260.10K | ±0.15% | 3.8447ms | 3.9170ms | 130.05K |
| 4 | **Preact Signals** | 252.93K | ±0.18% | 3.9537ms | 4.0570ms | 126.46K |
| 5 | **Valtio** | 17.01K | ±0.26% | 58.7930ms | 68.2780ms | 8.51K |
| 6 | **MobX** | 12.93K | ±0.28% | 77.3542ms | 91.0110ms | 6.46K |
| 7 | **Redux Toolkit** | 3.07K | ±0.87% | 326.1201ms | 652.8750ms | 1.53K |
| 8 | **Zustand** | 1.72K | ±0.25% | 580.2457ms | 715.6140ms | 862.00 |

**Key Insight:** Solid Signals is **220.19x faster** than Zustand in this category.

### Array Splice Operations

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 4.49M
🥈 Zen                  ██████████████ 1.54M
🥉 Solid Signals        █████████████ 1.51M
   Preact Signals       █████████████ 1.49M
   MobX                 █ 167.68K
   Zustand              █ 151.29K
   Valtio               █ 108.92K
   Redux Toolkit        █ 10.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Jotai** | 4.49M | ±0.53% | 0.2228ms | 0.2500ms | 2.24M |
| 🥈 | **Zen** | 1.54M | ±0.94% | 0.6512ms | 1.0720ms | 767.86K |
| 🥉 | **Solid Signals** | 1.51M | ±2.16% | 0.6640ms | 1.0820ms | 753.06K |
| 4 | **Preact Signals** | 1.49M | ±1.01% | 0.6701ms | 1.1020ms | 746.17K |
| 5 | **MobX** | 167.68K | ±0.36% | 5.9639ms | 8.9870ms | 83.84K |
| 6 | **Zustand** | 151.29K | ±0.44% | 6.6099ms | 8.6770ms | 75.64K |
| 7 | **Valtio** | 108.92K | ±7.18% | 9.1812ms | 19.4260ms | 54.46K |
| 8 | **Redux Toolkit** | 10.68K | ±0.40% | 93.6330ms | 125.3750ms | 5.34K |

**Key Insight:** Jotai is **420.20x faster** than Redux Toolkit in this category.

### Large Array Sort

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 32.26K
🥈 Preact Signals       ███████████████████████████████████████ 31.46K
🥉 Zen                  ███████████████████████████████████████ 31.36K
   Solid Signals        ███████████████████████████████████████ 31.22K
   Zustand              █████████████████████████████████ 26.33K
   MobX                 ███ 2.39K
   Valtio               ███ 2.34K
   Redux Toolkit        █ 658.61
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Jotai** | 32.26K | ±0.30% | 30.9984ms | 39.8550ms | 16.13K |
| 🥈 | **Preact Signals** | 31.46K | ±0.39% | 31.7849ms | 44.9740ms | 15.73K |
| 🥉 | **Zen** | 31.36K | ±0.37% | 31.8870ms | 46.4270ms | 15.68K |
| 4 | **Solid Signals** | 31.22K | ±0.35% | 32.0322ms | 41.4680ms | 15.61K |
| 5 | **Zustand** | 26.33K | ±0.35% | 37.9790ms | 51.8980ms | 13.17K |
| 6 | **MobX** | 2.39K | ±0.58% | 418.2841ms | 676.6800ms | 1.20K |
| 7 | **Valtio** | 2.34K | ±0.51% | 427.9769ms | 498.1750ms | 1.17K |
| 8 | **Redux Toolkit** | 658.61 | ±0.50% | 1518.3473ms | 1880.0700ms | 330.00 |

**Key Insight:** Jotai is **48.98x faster** than Redux Toolkit in this category.

### Array Find Operations

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 2.15M
🥈 Jotai                ███████████████████████████████████████ 2.10M
🥉 Zen                  ███████████████████████████████████████ 2.08M
   Preact Signals       ███████████████████████████████████████ 2.08M
   Zustand              █████████████████████████████████████ 2.00M
   Redux Toolkit        ██ 85.16K
   Valtio               █ 44.62K
   MobX                 █ 39.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 2.15M | ±0.09% | 0.4640ms | 0.5210ms | 1.08M |
| 🥈 | **Jotai** | 2.10M | ±0.09% | 0.4752ms | 0.5210ms | 1.05M |
| 🥉 | **Zen** | 2.08M | ±0.09% | 0.4813ms | 0.5310ms | 1.04M |
| 4 | **Preact Signals** | 2.08M | ±0.09% | 0.4815ms | 0.5410ms | 1.04M |
| 5 | **Zustand** | 2.00M | ±0.09% | 0.5008ms | 0.5610ms | 998.32K |
| 6 | **Redux Toolkit** | 85.16K | ±0.20% | 11.7431ms | 19.1560ms | 42.58K |
| 7 | **Valtio** | 44.62K | ±0.10% | 22.4090ms | 29.9770ms | 22.31K |
| 8 | **MobX** | 39.74K | ±0.32% | 25.1667ms | 34.7860ms | 19.87K |

**Key Insight:** Solid Signals is **54.23x faster** than MobX in this category.

### Deep Object Creation

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 2.19M
🥈 Redux Toolkit        ████████████████████████████████████████ 2.18M
🥉 Zen                  ███████████████████████████████████████ 2.16M
   Jotai                ███████████████████████████████████████ 2.16M
   Preact Signals       ███████████████████████████████████████ 2.14M
   Valtio               ███████████████████████████████████████ 2.14M
   Zustand              ██████████████████████████████████████ 2.10M
   MobX                 ███████████████████████████████ 1.73M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 2.19M | ±0.23% | 0.4559ms | 0.5210ms | 1.10M |
| 🥈 | **Redux Toolkit** | 2.18M | ±0.24% | 0.4578ms | 0.5510ms | 1.09M |
| 🥉 | **Zen** | 2.16M | ±0.26% | 0.4620ms | 0.6410ms | 1.08M |
| 4 | **Jotai** | 2.16M | ±0.28% | 0.4621ms | 0.5310ms | 1.08M |
| 5 | **Preact Signals** | 2.14M | ±0.27% | 0.4663ms | 0.5810ms | 1.07M |
| 6 | **Valtio** | 2.14M | ±0.29% | 0.4664ms | 0.5410ms | 1.07M |
| 7 | **Zustand** | 2.10M | ±0.28% | 0.4751ms | 0.5410ms | 1.05M |
| 8 | **MobX** | 1.73M | ±0.09% | 0.5795ms | 0.7220ms | 862.86K |

**Key Insight:** Solid Signals is **1.27x faster** than MobX in this category.

### 10-Level Nested Update

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 7.18M
🥈 Valtio               ██████ 1.03M
🥉 MobX                 ███ 589.73K
   Solid Signals        ██ 441.59K
   Zen                  ██ 435.37K
   Preact Signals       ██ 429.93K
   Zustand              █ 118.71K
   Redux Toolkit        █ 47.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Jotai** | 7.18M | ±0.65% | 0.1393ms | 0.2410ms | 3.59M |
| 🥈 | **Valtio** | 1.03M | ±0.22% | 0.9691ms | 1.0820ms | 515.96K |
| 🥉 | **MobX** | 589.73K | ±0.23% | 1.6957ms | 1.8740ms | 294.87K |
| 4 | **Solid Signals** | 441.59K | ±0.24% | 2.2645ms | 2.4840ms | 220.80K |
| 5 | **Zen** | 435.37K | ±0.25% | 2.2969ms | 2.6650ms | 217.69K |
| 6 | **Preact Signals** | 429.93K | ±0.17% | 2.3260ms | 2.6250ms | 214.97K |
| 7 | **Zustand** | 118.71K | ±0.26% | 8.4239ms | 11.6510ms | 59.35K |
| 8 | **Redux Toolkit** | 47.92K | ±0.40% | 20.8667ms | 31.6100ms | 23.96K |

**Key Insight:** Jotai is **149.79x faster** than Redux Toolkit in this category.

### Deep Read Access

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.10M
🥈 Redux Toolkit        ███████████████████████████████████████ 9.95M
🥉 Zen                  ███████████████████████████████████████ 9.76M
   Preact Signals       ██████████████████████████████████████ 9.70M
   Jotai                ██████████████████████████████████████ 9.54M
   Zustand              █████████████████████████████████ 8.32M
   Valtio               ██████████ 2.42M
   MobX                 ███ 711.30K
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
   Deep Read Access ... █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 10.10M | ±0.09% | 0.0990ms | 0.1200ms | 5.05M |
| 🥈 | **Redux Toolkit** | 9.95M | ±0.10% | 0.1005ms | 0.1200ms | 4.97M |
| 🥉 | **Zen** | 9.76M | ±0.16% | 0.1025ms | 0.1200ms | 4.88M |
| 4 | **Preact Signals** | 9.70M | ±0.09% | 0.1031ms | 0.1210ms | 4.85M |
| 5 | **Jotai** | 9.54M | ±0.15% | 0.1049ms | 0.1200ms | 4.77M |
| 6 | **Zustand** | 8.32M | ±0.12% | 0.1201ms | 0.1310ms | 4.16M |
| 7 | **Valtio** | 2.42M | ±0.09% | 0.4135ms | 0.4310ms | 1.21M |
| 8 | **MobX** | 711.30K | ±0.24% | 1.4059ms | 1.5630ms | 355.65K |
| 9 | **Deep Read Access - Redux Toolkit** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Zustand** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Jotai** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - MobX** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Valtio** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Preact Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Solid Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 9 | **Deep Read Access - Zen** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Solid Signals is **Infinityx faster** than Deep Read Access - Zen in this category.

### Complex Computed Chain

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 10.33M
🥈 Solid Signals        ███████████████████████████████████████ 10.19M
🥉 Preact Signals       ██████████████████████████████████████ 9.82M
   Zen                  █████████████████████████████████████ 9.58M
   Jotai                █████████████████████████████████████ 9.47M
   Zustand              ███████████████████████████████████ 9.03M
   Valtio               ███████████████████████████████ 7.92M
   MobX                 ███████████████████████████ 7.05M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Redux Toolkit** | 10.33M | ±0.10% | 0.0968ms | 0.1300ms | 5.17M |
| 🥈 | **Solid Signals** | 10.19M | ±0.15% | 0.0981ms | 0.1400ms | 5.09M |
| 🥉 | **Preact Signals** | 9.82M | ±0.16% | 0.1018ms | 0.1410ms | 4.91M |
| 4 | **Zen** | 9.58M | ±0.10% | 0.1043ms | 0.1210ms | 4.79M |
| 5 | **Jotai** | 9.47M | ±0.09% | 0.1056ms | 0.1300ms | 4.73M |
| 6 | **Zustand** | 9.03M | ±0.18% | 0.1107ms | 0.1210ms | 4.52M |
| 7 | **Valtio** | 7.92M | ±0.13% | 0.1263ms | 0.1410ms | 3.96M |
| 8 | **MobX** | 7.05M | ±0.10% | 0.1419ms | 0.1610ms | 3.52M |

**Key Insight:** Redux Toolkit is **1.47x faster** than MobX in this category.

### Computed Invalidation

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.31M
🥈 Jotai                ████████████████████████████████████ 9.22M
🥉 Preact Signals       ██████████████████████████████████ 8.82M
   Zen                  ██████████████████████████████████ 8.66M
   MobX                 ███████ 1.77M
   Valtio               █████ 1.36M
   Redux Toolkit        █ 281.05K
   Zustand              █ 167.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 10.31M | ±0.09% | 0.0970ms | 0.1210ms | 5.15M |
| 🥈 | **Jotai** | 9.22M | ±0.09% | 0.1085ms | 0.1400ms | 4.61M |
| 🥉 | **Preact Signals** | 8.82M | ±0.15% | 0.1133ms | 0.1400ms | 4.41M |
| 4 | **Zen** | 8.66M | ±0.09% | 0.1154ms | 0.1400ms | 4.33M |
| 5 | **MobX** | 1.77M | ±0.40% | 0.5661ms | 0.6020ms | 883.23K |
| 6 | **Valtio** | 1.36M | ±0.25% | 0.7374ms | 0.8120ms | 678.02K |
| 7 | **Redux Toolkit** | 281.05K | ±0.59% | 3.5581ms | 7.2440ms | 140.53K |
| 8 | **Zustand** | 167.05K | ±0.37% | 5.9863ms | 6.8930ms | 83.52K |

**Key Insight:** Solid Signals is **61.71x faster** than Zustand in this category.

### Subscription Cascade

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.39M
🥈 Valtio               ███████████████████████████████████████ 10.25M
🥉 MobX                 ███████████████████████████████████████ 10.20M
   Preact Signals       ███████████████████████████████████████ 10.17M
   Zen                  ███████████████████████████████████████ 10.11M
   Zustand              ██████████████████████████████████████ 9.75M
   Jotai                ████████████████████████████████████ 9.41M
   Redux Toolkit        ██████ 1.60M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 10.39M | ±0.09% | 0.0963ms | 0.1110ms | 5.19M |
| 🥈 | **Valtio** | 10.25M | ±0.10% | 0.0976ms | 0.1200ms | 5.12M |
| 🥉 | **MobX** | 10.20M | ±0.23% | 0.0980ms | 0.1200ms | 5.10M |
| 4 | **Preact Signals** | 10.17M | ±0.10% | 0.0983ms | 0.1510ms | 5.08M |
| 5 | **Zen** | 10.11M | ±0.09% | 0.0989ms | 0.1110ms | 5.06M |
| 6 | **Zustand** | 9.75M | ±0.26% | 0.1025ms | 0.1300ms | 4.88M |
| 7 | **Jotai** | 9.41M | ±0.09% | 0.1062ms | 0.1300ms | 4.71M |
| 8 | **Redux Toolkit** | 1.60M | ±10.98% | 0.6269ms | 1.1120ms | 797.64K |

**Key Insight:** Solid Signals is **6.51x faster** than Redux Toolkit in this category.

### Reaction Performance

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.40M
🥈 Preact Signals       ██████████████████████████████████ 8.89M
🥉 Jotai                █████████████████████████████████ 8.53M
   Zen                  ████████████████████████████████ 8.40M
   MobX                 ███████ 1.74M
   Valtio               █████ 1.35M
   Zustand              █ 164.99K
   Redux Toolkit        █ 84.60
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 10.40M | ±0.09% | 0.0962ms | 0.1110ms | 5.20M |
| 🥈 | **Preact Signals** | 8.89M | ±0.21% | 0.1125ms | 0.1300ms | 4.44M |
| 🥉 | **Jotai** | 8.53M | ±0.72% | 0.1172ms | 0.1800ms | 4.27M |
| 4 | **Zen** | 8.40M | ±0.22% | 0.1190ms | 0.1810ms | 4.20M |
| 5 | **MobX** | 1.74M | ±0.72% | 0.5755ms | 0.6110ms | 868.86K |
| 6 | **Valtio** | 1.35M | ±0.56% | 0.7403ms | 0.7920ms | 675.38K |
| 7 | **Zustand** | 164.99K | ±1.08% | 6.0610ms | 6.6930ms | 82.50K |
| 8 | **Redux Toolkit** | 84.60 | ±0.42% | 11819.8467ms | 12597.3330ms | 43.00 |

**Key Insight:** Solid Signals is **122879.38x faster** than Redux Toolkit in this category.

### Multi-Store Operations

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.04M
🥈 Jotai                █████████████████████████████████████ 9.31M
🥉 Preact Signals       ███████████████████████████████████ 8.67M
   Zen                  █████████████████████████████████ 8.37M
   MobX                 ███████ 1.74M
   Valtio               █████ 1.36M
   Zustand              █ 165.45K
   Redux Toolkit        █ 83.21
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 10.04M | ±0.11% | 0.0996ms | 0.1210ms | 5.02M |
| 🥈 | **Jotai** | 9.31M | ±0.09% | 0.1074ms | 0.1310ms | 4.65M |
| 🥉 | **Preact Signals** | 8.67M | ±0.09% | 0.1153ms | 0.1400ms | 4.33M |
| 4 | **Zen** | 8.37M | ±0.10% | 0.1195ms | 0.1700ms | 4.18M |
| 5 | **MobX** | 1.74M | ±0.78% | 0.5757ms | 0.6110ms | 868.53K |
| 6 | **Valtio** | 1.36M | ±0.68% | 0.7378ms | 0.7910ms | 677.68K |
| 7 | **Zustand** | 165.45K | ±0.56% | 6.0440ms | 6.7530ms | 82.73K |
| 8 | **Redux Toolkit** | 83.21 | ±0.31% | 12018.0504ms | 12274.2300ms | 42.00 |

**Key Insight:** Solid Signals is **120706.13x faster** than Redux Toolkit in this category.

### Memory Allocation

**Performance Comparison:**

```
🥇 Large State Alloc... ████████████████████████████████████████ 327.95
🥈 Large State Alloc... ████████████████████████████████████████ 327.35
🥉 Large State Alloc... ████████████████████████████████████████ 326.32
   Large State Alloc... ████████████████████████████████████████ 325.81
   MobX                 █████████████████████████████████████ 304.09
   Redux Toolkit        █████████████████████████████████████ 300.24
   Preact Signals       █████████████████████████████████ 269.94
   Large State Alloc... ████████████████████ 160.60
   Large State Alloc... ███████████████████ 156.66
   Zustand              ███████████████████ 155.99
   Large State Alloc... ███████████████████ 155.55
   Valtio               ███████████████████ 155.11
   Zen                  ███████████████████ 155.01
   Large State Alloc... █████████████████ 143.05
   Solid Signals        ████████ 65.37
   Jotai                ████████ 65.08
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Large State Allocation - Solid Signals** | 327.95 | ±0.28% | 3049.2563ms | 3292.7020ms | 164.00 |
| 🥈 | **Large State Allocation - Redux Toolkit** | 327.35 | ±0.27% | 3054.8524ms | 3298.0140ms | 164.00 |
| 🥉 | **Large State Allocation - Jotai** | 326.32 | ±0.34% | 3064.5148ms | 3340.1340ms | 164.00 |
| 4 | **Large State Allocation - Valtio** | 325.81 | ±0.98% | 3069.2481ms | 4427.0490ms | 163.00 |
| 5 | **MobX** | 304.09 | ±0.39% | 3288.4705ms | 3635.2400ms | 153.00 |
| 6 | **Redux Toolkit** | 300.24 | ±0.53% | 3330.7197ms | 3713.0860ms | 151.00 |
| 7 | **Preact Signals** | 269.94 | ±0.28% | 3704.4927ms | 3955.4220ms | 135.00 |
| 8 | **Large State Allocation - Preact Signals** | 160.60 | ±13.19% | 6226.8001ms | 17652.1410ms | 83.00 |
| 9 | **Large State Allocation - Zen** | 156.66 | ±12.60% | 6383.3888ms | 16966.5630ms | 79.00 |
| 10 | **Zustand** | 155.99 | ±12.05% | 6410.6481ms | 11327.2430ms | 78.00 |
| 11 | **Large State Allocation - MobX** | 155.55 | ±12.68% | 6428.8403ms | 16817.2180ms | 79.00 |
| 12 | **Valtio** | 155.11 | ±12.03% | 6446.9020ms | 11124.4330ms | 78.00 |
| 13 | **Zen** | 155.01 | ±12.15% | 6451.2752ms | 13211.6220ms | 79.00 |
| 14 | **Large State Allocation - Zustand** | 143.05 | ±20.32% | 6990.7875ms | 41149.3180ms | 72.00 |
| 15 | **Solid Signals** | 65.37 | ±47.21% | 15296.7531ms | 125852.5260ms | 37.00 |
| 16 | **Jotai** | 65.08 | ±48.64% | 15366.1383ms | 148709.5050ms | 42.00 |

**Key Insight:** Large State Allocation - Solid Signals is **5.04x faster** than Jotai in this category.

### Form State Management

**Performance Comparison:**

```
🥇 Jotai                ████████████████████████████████████████ 4.20M
🥈 Valtio               ████████████████████████████ 2.91M
🥉 MobX                 █████████████████████████ 2.58M
   Zustand              █████████ 962.29K
   Preact Signals       ███ 299.18K
   Solid Signals        ███ 298.99K
   Zen                  ███ 298.60K
   Redux Toolkit        █ 84.21
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Jotai** | 4.20M | ±0.41% | 0.2384ms | 0.2710ms | 2.10M |
| 🥈 | **Valtio** | 2.91M | ±0.12% | 0.3434ms | 0.6210ms | 1.46M |
| 🥉 | **MobX** | 2.58M | ±0.09% | 0.3878ms | 0.4310ms | 1.29M |
| 4 | **Zustand** | 962.29K | ±0.58% | 1.0392ms | 1.2830ms | 481.14K |
| 5 | **Preact Signals** | 299.18K | ±0.50% | 3.3425ms | 3.8180ms | 149.59K |
| 6 | **Solid Signals** | 298.99K | ±0.62% | 3.3446ms | 3.8070ms | 149.49K |
| 7 | **Zen** | 298.60K | ±0.66% | 3.3490ms | 3.8180ms | 149.30K |
| 8 | **Redux Toolkit** | 84.21 | ±0.51% | 11874.7455ms | 12783.4560ms | 43.00 |

**Key Insight:** Jotai is **49815.41x faster** than Redux Toolkit in this category.

### Optimistic Update

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 8.27K
🥈 Solid Signals        ████████████████████████████████████████ 8.18K
🥉 Zen                  ████████████████████████████████████████ 8.17K
   Jotai                ███████████████████████████████████████ 8.03K
   Zustand              ███████████████████████████████████████ 8.00K
   MobX                 ███████████ 2.27K
   Valtio               ███ 595.29
   Redux Toolkit        █ 0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Preact Signals** | 8.27K | ±8.07% | 120.9074ms | 216.9070ms | 4.14K |
| 🥈 | **Solid Signals** | 8.18K | ±8.33% | 122.2686ms | 205.7460ms | 4.09K |
| 🥉 | **Zen** | 8.17K | ±8.53% | 122.4035ms | 203.7920ms | 4.08K |
| 4 | **Jotai** | 8.03K | ±8.64% | 124.5176ms | 211.9570ms | 4.02K |
| 5 | **Zustand** | 8.00K | ±8.78% | 125.0657ms | 195.3370ms | 4.00K |
| 6 | **MobX** | 2.27K | ±1.75% | 439.6140ms | 1205.5930ms | 1.14K |
| 7 | **Valtio** | 595.29 | ±4.99% | 1679.8596ms | 4975.5080ms | 298.00 |
| 8 | **Redux Toolkit** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Preact Signals is **Infinityx faster** than Redux Toolkit in this category.

### Undo/Redo Operations

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.12M
🥈 Zen                  ████████████████████████████████████████ 10.04M
🥉 Preact Signals       ███████████████████████████████████████ 9.80M
   Jotai                █████████████████████████████████████ 9.43M
   Zustand              ████████████████████████████████████ 9.00M
   Valtio               █████████████████████████ 6.29M
   MobX                 ███████████ 2.74M
   Redux Toolkit        █ 84.58
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 10.12M | ±0.24% | 0.0989ms | 0.1200ms | 5.06M |
| 🥈 | **Zen** | 10.04M | ±0.24% | 0.0996ms | 0.1110ms | 5.02M |
| 🥉 | **Preact Signals** | 9.80M | ±0.27% | 0.1020ms | 0.1300ms | 4.90M |
| 4 | **Jotai** | 9.43M | ±0.09% | 0.1060ms | 0.1300ms | 4.72M |
| 5 | **Zustand** | 9.00M | ±0.09% | 0.1112ms | 0.1310ms | 4.50M |
| 6 | **Valtio** | 6.29M | ±0.09% | 0.1590ms | 0.2700ms | 3.15M |
| 7 | **MobX** | 2.74M | ±0.97% | 0.3655ms | 0.4110ms | 1.37M |
| 8 | **Redux Toolkit** | 84.58 | ±0.48% | 11823.5849ms | 12749.6270ms | 43.00 |

**Key Insight:** Solid Signals is **119595.85x faster** than Redux Toolkit in this category.

### Batch State Operations

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 6.38M
🥈 Solid Signals        ██████████████████████████████████ 5.50M
🥉 Zen                  ██████████████████████████████ 4.84M
   Zustand              █ 8.76K
   Jotai                █ 6.89K
   MobX                 █ 1.32K
   Valtio               █ 504.23
   Redux Toolkit        █ 26.73
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Preact Signals** | 6.38M | ±0.10% | 0.1566ms | 0.2510ms | 3.19M |
| 🥈 | **Solid Signals** | 5.50M | ±0.41% | 0.1818ms | 0.2810ms | 2.75M |
| 🥉 | **Zen** | 4.84M | ±0.09% | 0.2065ms | 0.3100ms | 2.42M |
| 4 | **Zustand** | 8.76K | ±19.01% | 114.1637ms | 5739.1670ms | 4.38K |
| 5 | **Jotai** | 6.89K | ±32.11% | 145.1146ms | 5298.3690ms | 3.48K |
| 6 | **MobX** | 1.32K | ±5.05% | 758.5318ms | 3648.7150ms | 660.00 |
| 7 | **Valtio** | 504.23 | ±5.87% | 1983.2219ms | 5745.8490ms | 253.00 |
| 8 | **Redux Toolkit** | 26.73 | ±0.39% | 37416.2099ms | 37880.0050ms | 14.00 |

**Key Insight:** Preact Signals is **238864.43x faster** than Redux Toolkit in this category.

### Null Value Handling

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.62M
🥈 Jotai                ██████████████████████████████████████ 9.09M
🥉 Preact Signals       ████████████████████████████████████ 8.65M
   Zen                  ████████████████████████████████████ 8.65M
   Valtio               ██████████████████ 4.32M
   MobX                 ███████ 1.76M
   Zustand              █ 142.83K
   Redux Toolkit        █ 83.25
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 9.62M | ±0.09% | 0.1039ms | 0.1310ms | 4.81M |
| 🥈 | **Jotai** | 9.09M | ±0.09% | 0.1101ms | 0.1310ms | 4.54M |
| 🥉 | **Preact Signals** | 8.65M | ±0.09% | 0.1156ms | 0.1700ms | 4.33M |
| 4 | **Zen** | 8.65M | ±0.09% | 0.1156ms | 0.1410ms | 4.32M |
| 5 | **Valtio** | 4.32M | ±0.10% | 0.2316ms | 0.2600ms | 2.16M |
| 6 | **MobX** | 1.76M | ±1.98% | 0.5679ms | 0.7110ms | 880.37K |
| 7 | **Zustand** | 142.83K | ±2.25% | 7.0015ms | 8.5270ms | 71.41K |
| 8 | **Redux Toolkit** | 83.25 | ±0.36% | 12012.6049ms | 12538.7460ms | 42.00 |

**Key Insight:** Solid Signals is **115599.88x faster** than Redux Toolkit in this category.

### Undefined Value Handling

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.64M
🥈 Jotai                ███████████████████████████████████████ 9.28M
🥉 Zen                  █████████████████████████████████████ 8.84M
   Preact Signals       ████████████████████████████████████ 8.73M
   Valtio               ██████████████████ 4.38M
   MobX                 ███████ 1.78M
   Zustand              █ 141.76K
   Redux Toolkit        █ 84.55
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 9.64M | ±0.09% | 0.1038ms | 0.1310ms | 4.82M |
| 🥈 | **Jotai** | 9.28M | ±0.09% | 0.1077ms | 0.1300ms | 4.64M |
| 🥉 | **Zen** | 8.84M | ±0.49% | 0.1131ms | 0.1400ms | 4.42M |
| 4 | **Preact Signals** | 8.73M | ±0.09% | 0.1145ms | 0.1410ms | 4.37M |
| 5 | **Valtio** | 4.38M | ±0.25% | 0.2283ms | 0.2710ms | 2.19M |
| 6 | **MobX** | 1.78M | ±1.81% | 0.5612ms | 0.6410ms | 890.89K |
| 7 | **Zustand** | 141.76K | ±2.56% | 7.0542ms | 8.0150ms | 70.88K |
| 8 | **Redux Toolkit** | 84.55 | ±0.35% | 11827.6751ms | 12147.2030ms | 43.00 |

**Key Insight:** Solid Signals is **113986.21x faster** than Redux Toolkit in this category.

### Async State Loading

**Performance Comparison:**

```
🥇 Async Loading - R... ████████████████████████████████████████ 935.13
🥈 Valtio               ████████████████████████████████████████ 930.88
🥉 Solid Signals        ████████████████████████████████████████ 927.50
   Jotai                ████████████████████████████████████████ 925.74
   Preact Signals       ████████████████████████████████████████ 925.63
   Zen                  ████████████████████████████████████████ 924.64
   MobX                 ███████████████████████████████████████ 920.36
   Async Loading - S... ███████████████████████████████████████ 919.96
   Redux Toolkit        ███████████████████████████████████████ 919.26
   Async Loading - MobX ███████████████████████████████████████ 917.92
   Zustand              ███████████████████████████████████████ 912.31
   Async Loading - V... ███████████████████████████████████████ 911.23
   Async Loading - Z... ███████████████████████████████████████ 906.37
   Async Loading - P... ███████████████████████████████████████ 904.63
   Async Loading - Zen  ███████████████████████████████████████ 904.29
   Async Loading - J... ██████████████████████████████████████ 878.83
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Async Loading - Redux Toolkit** | 935.13 | ±0.72% | 1069.3661ms | 1127.7400ms | 468.00 |
| 🥈 | **Valtio** | 930.88 | ±0.59% | 1074.2466ms | 1109.3710ms | 466.00 |
| 🥉 | **Solid Signals** | 927.50 | ±0.84% | 1078.1667ms | 1122.4470ms | 464.00 |
| 4 | **Jotai** | 925.74 | ±0.94% | 1080.2114ms | 2133.3420ms | 463.00 |
| 5 | **Preact Signals** | 925.63 | ±0.94% | 1080.3450ms | 2129.7700ms | 463.00 |
| 6 | **Zen** | 924.64 | ±1.02% | 1081.4979ms | 2132.0140ms | 463.00 |
| 7 | **MobX** | 920.36 | ±1.10% | 1086.5289ms | 2134.2940ms | 461.00 |
| 8 | **Async Loading - Solid Signals** | 919.96 | ±1.17% | 1087.0054ms | 2130.1630ms | 460.00 |
| 9 | **Redux Toolkit** | 919.26 | ±0.93% | 1087.8276ms | 2138.2020ms | 460.00 |
| 10 | **Async Loading - MobX** | 917.92 | ±1.17% | 1089.4199ms | 2133.9900ms | 459.00 |
| 11 | **Zustand** | 912.31 | ±1.26% | 1096.1128ms | 2138.0920ms | 457.00 |
| 12 | **Async Loading - Valtio** | 911.23 | ±1.43% | 1097.4121ms | 2133.0280ms | 457.00 |
| 13 | **Async Loading - Zustand** | 906.37 | ±1.26% | 1103.2988ms | 2140.3320ms | 454.00 |
| 14 | **Async Loading - Preact Signals** | 904.63 | ±1.60% | 1105.4304ms | 2138.5080ms | 453.00 |
| 15 | **Async Loading - Zen** | 904.29 | ±1.60% | 1105.8441ms | 2135.8230ms | 453.00 |
| 16 | **Async Loading - Jotai** | 878.83 | ±2.21% | 1137.8747ms | 2207.2870ms | 440.00 |

**Key Insight:** Async Loading - Redux Toolkit is **1.06x faster** than Async Loading - Jotai in this category.

### Concurrent Async Operations

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 930.08
🥈 Jotai                ████████████████████████████████████████ 925.86
🥉 Solid Signals        ████████████████████████████████████████ 924.08
   Zen                  ████████████████████████████████████████ 922.26
   Valtio               ████████████████████████████████████████ 921.64
   Zustand              ████████████████████████████████████████ 919.89
   Preact Signals       ████████████████████████████████████████ 918.54
   Redux Toolkit        ███████████████████████████████████████ 916.04
   Concurrent Async ... ███████████████████████████████████████ 913.73
   Concurrent Async ... ███████████████████████████████████████ 913.30
   Concurrent Async ... ███████████████████████████████████████ 909.72
   Concurrent Async ... ███████████████████████████████████████ 908.85
   Concurrent Async ... ███████████████████████████████████████ 908.67
   Concurrent Async ... ███████████████████████████████████████ 905.45
   Concurrent Async ... ███████████████████████████████████████ 903.16
   Concurrent Async ... ███████████████████████████████████████ 897.24
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **MobX** | 930.08 | ±0.59% | 1075.1712ms | 1109.1530ms | 466.00 |
| 🥈 | **Jotai** | 925.86 | ±1.10% | 1080.0769ms | 1100.2770ms | 463.00 |
| 🥉 | **Solid Signals** | 924.08 | ±0.83% | 1082.1578ms | 1112.3970ms | 463.00 |
| 4 | **Zen** | 922.26 | ±0.93% | 1084.2973ms | 2130.7870ms | 462.00 |
| 5 | **Valtio** | 921.64 | ±1.18% | 1085.0267ms | 2134.1180ms | 461.00 |
| 6 | **Zustand** | 919.89 | ±1.02% | 1087.0854ms | 2135.2700ms | 460.00 |
| 7 | **Preact Signals** | 918.54 | ±0.94% | 1088.6840ms | 2135.1400ms | 460.00 |
| 8 | **Redux Toolkit** | 916.04 | ±1.10% | 1091.6495ms | 2137.1830ms | 459.00 |
| 9 | **Concurrent Async - Valtio** | 913.73 | ±1.33% | 1094.4109ms | 2138.8200ms | 457.00 |
| 10 | **Concurrent Async - Jotai** | 913.30 | ±1.27% | 1094.9285ms | 2139.6410ms | 457.00 |
| 11 | **Concurrent Async - Zustand** | 909.72 | ±1.18% | 1099.2428ms | 2141.3140ms | 455.00 |
| 12 | **Concurrent Async - Preact Signals** | 908.85 | ±1.45% | 1100.2864ms | 2137.2360ms | 455.00 |
| 13 | **Concurrent Async - Redux Toolkit** | 908.67 | ±1.19% | 1100.5049ms | 2148.2960ms | 455.00 |
| 14 | **Concurrent Async - Solid Signals** | 905.45 | ±1.52% | 1104.4291ms | 2137.4980ms | 453.00 |
| 15 | **Concurrent Async - MobX** | 903.16 | ±1.51% | 1107.2267ms | 2154.2180ms | 452.00 |
| 16 | **Concurrent Async - Zen** | 897.24 | ±1.74% | 1114.5236ms | 2135.6340ms | 449.00 |

**Key Insight:** MobX is **1.04x faster** than Concurrent Async - Zen in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.21M
🥈 Zen                  ███████████████████████████████████████ 9.88M
🥉 Preact Signals       ███████████████████████████████████████ 9.87M
   Redux Toolkit        ██████████████████████████████████████ 9.75M
   Zustand              ███████████████████████████████████ 9.06M
   Valtio               █████████████████████████ 6.29M
   MobX                 █████████████ 3.20M
   Jotai                ████ 953.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 10.21M | ±0.11% | 0.0980ms | 0.1110ms | 5.10M |
| 🥈 | **Zen** | 9.88M | ±0.09% | 0.1012ms | 0.1210ms | 4.94M |
| 🥉 | **Preact Signals** | 9.87M | ±0.09% | 0.1013ms | 0.1210ms | 4.94M |
| 4 | **Redux Toolkit** | 9.75M | ±0.10% | 0.1025ms | 0.1400ms | 4.88M |
| 5 | **Zustand** | 9.06M | ±0.09% | 0.1104ms | 0.1210ms | 4.53M |
| 6 | **Valtio** | 6.29M | ±0.18% | 0.1590ms | 0.1810ms | 3.14M |
| 7 | **MobX** | 3.20M | ±0.71% | 0.3128ms | 0.3700ms | 1.60M |
| 8 | **Jotai** | 953.31K | ±0.53% | 1.0490ms | 1.1920ms | 476.65K |

**Key Insight:** Solid Signals is **10.71x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.60M
🥈 Preact Signals       ██████████████████████████████████████ 8.16M
🥉 Zen                  █████████████████████████████████████ 8.01M
   MobX                 ████████ 1.72M
   Valtio               ██████ 1.36M
   Jotai                ███ 676.08K
   Redux Toolkit        █ 201.40K
   Zustand              █ 160.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 8.60M | ±0.10% | 0.1163ms | 0.2110ms | 4.30M |
| 🥈 | **Preact Signals** | 8.16M | ±0.09% | 0.1225ms | 0.2200ms | 4.08M |
| 🥉 | **Zen** | 8.01M | ±0.39% | 0.1248ms | 0.2200ms | 4.01M |
| 4 | **MobX** | 1.72M | ±0.51% | 0.5817ms | 0.7110ms | 859.49K |
| 5 | **Valtio** | 1.36M | ±0.40% | 0.7345ms | 0.8320ms | 680.73K |
| 6 | **Jotai** | 676.08K | ±0.60% | 1.4791ms | 3.1760ms | 338.04K |
| 7 | **Redux Toolkit** | 201.40K | ±0.42% | 4.9653ms | 7.0030ms | 100.70K |
| 8 | **Zustand** | 160.03K | ±0.25% | 6.2486ms | 8.2960ms | 80.02K |

**Key Insight:** Solid Signals is **53.74x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 163.59K
🥈 MobX                 ███████████████████████████████████ 145.11K
🥉 Zustand              ███ 12.14K
   Jotai                ██ 9.60K
   Solid Signals        ██ 8.30K
   Zen                  ██ 8.30K
   Preact Signals       ██ 8.25K
   Redux Toolkit        █ 4.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Valtio** | 163.59K | ±11.16% | 6.1130ms | 7.9840ms | 81.79K |
| 🥈 | **MobX** | 145.11K | ±6.55% | 6.8912ms | 12.6140ms | 72.56K |
| 🥉 | **Zustand** | 12.14K | ±7.26% | 82.3433ms | 199.7540ms | 6.07K |
| 4 | **Jotai** | 9.60K | ±7.58% | 104.1954ms | 206.3670ms | 4.80K |
| 5 | **Solid Signals** | 8.30K | ±8.00% | 120.4289ms | 192.2400ms | 4.18K |
| 6 | **Zen** | 8.30K | ±8.07% | 120.4319ms | 185.1770ms | 4.15K |
| 7 | **Preact Signals** | 8.25K | ±8.23% | 121.2841ms | 191.8390ms | 4.12K |
| 8 | **Redux Toolkit** | 4.70K | ±1.19% | 212.6066ms | 310.5110ms | 2.35K |

**Key Insight:** Valtio is **34.78x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 8.79M
🥈 Preact Signals       ███████████████████████████████████████ 8.62M
🥉 Zen                  █████████████████████████ 5.54M
   Valtio               ███████████ 2.39M
   MobX                 █████████ 1.87M
   Jotai                ███ 562.03K
   Redux Toolkit        ██ 345.90K
   Zustand              █ 166.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 8.79M | ±0.09% | 0.1138ms | 0.2200ms | 4.40M |
| 🥈 | **Preact Signals** | 8.62M | ±0.09% | 0.1160ms | 0.2210ms | 4.31M |
| 🥉 | **Zen** | 5.54M | ±0.09% | 0.1804ms | 0.2810ms | 2.77M |
| 4 | **Valtio** | 2.39M | ±0.40% | 0.4190ms | 0.6820ms | 1.19M |
| 5 | **MobX** | 1.87M | ±0.38% | 0.5336ms | 0.6620ms | 937.01K |
| 6 | **Jotai** | 562.03K | ±11.10% | 1.7793ms | 5.0390ms | 281.07K |
| 7 | **Redux Toolkit** | 345.90K | ±0.83% | 2.8910ms | 3.6670ms | 172.95K |
| 8 | **Zustand** | 166.16K | ±0.86% | 6.0183ms | 10.4490ms | 83.08K |

**Key Insight:** Solid Signals is **52.91x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.24M
🥈 Zen                  ███████████ 1.20M
🥉 Preact Signals       ██████ 656.09K
   Zustand              █ 105.86K
   Redux Toolkit        █ 59.16K
   Jotai                █ 55.79K
   MobX                 █ 47.93K
   Valtio               █ 10.60
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 4.24M | ±2.10% | 0.2357ms | 0.2810ms | 2.12M |
| 🥈 | **Zen** | 1.20M | ±1.62% | 0.8316ms | 1.1220ms | 601.59K |
| 🥉 | **Preact Signals** | 656.09K | ±1.57% | 1.5242ms | 1.8830ms | 328.04K |
| 4 | **Zustand** | 105.86K | ±7.79% | 9.4466ms | 17.8330ms | 52.93K |
| 5 | **Redux Toolkit** | 59.16K | ±22.08% | 16.9027ms | 116.7090ms | 29.75K |
| 6 | **Jotai** | 55.79K | ±2.96% | 17.9242ms | 40.8270ms | 27.90K |
| 7 | **MobX** | 47.93K | ±10.67% | 20.8625ms | 32.9520ms | 23.97K |
| 8 | **Valtio** | 10.60 | ±28.92% | 94369.2268ms | 197332.9710ms | 10.00 |

**Key Insight:** Solid Signals is **400380.98x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.87M
🥈 Preact Signals       ████████████████████████████████ 6.21M
🥉 Zen                  ██████████████████████ 4.40M
   Valtio               ████ 817.78K
   MobX                 ███ 673.41K
   Jotai                █ 242.20K
   Redux Toolkit        █ 171.54K
   Zustand              █ 155.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 7.87M | ±0.09% | 0.1271ms | 0.2310ms | 3.94M |
| 🥈 | **Preact Signals** | 6.21M | ±0.16% | 0.1611ms | 0.2610ms | 3.10M |
| 🥉 | **Zen** | 4.40M | ±0.25% | 0.2274ms | 0.3310ms | 2.20M |
| 4 | **Valtio** | 817.78K | ±0.78% | 1.2228ms | 1.3330ms | 408.89K |
| 5 | **MobX** | 673.41K | ±1.30% | 1.4850ms | 1.6840ms | 336.70K |
| 6 | **Jotai** | 242.20K | ±1.47% | 4.1288ms | 8.8370ms | 121.10K |
| 7 | **Redux Toolkit** | 171.54K | ±1.13% | 5.8296ms | 11.3510ms | 85.77K |
| 8 | **Zustand** | 155.72K | ±0.96% | 6.4216ms | 7.3140ms | 77.86K |

**Key Insight:** Solid Signals is **50.54x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Zustand              ████████████████████████████████████████ 9.68K
🥈 Jotai                ███████████████████ 4.51K
🥉 Zen                  ███████████████ 3.69K
   Solid Signals        ██████████████ 3.32K
   Preact Signals       ██████████████ 3.31K
   Redux Toolkit        █ 162.99
   MobX                 █ 40.24
   Valtio               █ 5.85
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zustand** | 9.68K | ±2.13% | 103.3064ms | 416.8320ms | 4.84K |
| 🥈 | **Jotai** | 4.51K | ±1.16% | 221.6590ms | 601.4380ms | 2.26K |
| 🥉 | **Zen** | 3.69K | ±5.36% | 271.0359ms | 2314.0790ms | 1.84K |
| 4 | **Solid Signals** | 3.32K | ±4.91% | 301.0733ms | 2207.1100ms | 1.66K |
| 5 | **Preact Signals** | 3.31K | ±5.06% | 302.1373ms | 2310.4030ms | 1.66K |
| 6 | **Redux Toolkit** | 162.99 | ±1.36% | 6135.1780ms | 7124.6690ms | 82.00 |
| 7 | **MobX** | 40.24 | ±2.80% | 24852.3988ms | 28602.9190ms | 21.00 |
| 8 | **Valtio** | 5.85 | ±0.62% | 170902.2498ms | 173279.5990ms | 10.00 |

**Key Insight:** Zustand is **1654.32x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.19K
🥈 Jotai                ███████████████████████████████████████ 32.62K
🥉 Solid Signals        █████████████████████████████ 23.76K
   Preact Signals       ████████████████████████████ 23.59K
   Zustand              ███████████████████████ 19.44K
   Redux Toolkit        █ 403.32
   Valtio               █ 72.34
   MobX                 █ 61.42
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen** | 33.19K | ±0.83% | 30.1304ms | 122.4300ms | 16.59K |
| 🥈 | **Jotai** | 32.62K | ±1.07% | 30.6562ms | 122.5690ms | 16.34K |
| 🥉 | **Solid Signals** | 23.76K | ±2.03% | 42.0864ms | 139.3210ms | 11.88K |
| 4 | **Preact Signals** | 23.59K | ±2.20% | 42.3969ms | 141.9970ms | 11.79K |
| 5 | **Zustand** | 19.44K | ±2.78% | 51.4367ms | 153.0570ms | 9.72K |
| 6 | **Redux Toolkit** | 403.32 | ±1.98% | 2479.4414ms | 3766.0520ms | 202.00 |
| 7 | **Valtio** | 72.34 | ±2.02% | 13823.4030ms | 15935.5150ms | 37.00 |
| 8 | **MobX** | 61.42 | ±2.70% | 16280.4559ms | 22098.0500ms | 31.00 |

**Key Insight:** Zen is **540.33x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.51K
🥈 Solid Signals        █████████████ 10.76K
🥉 Preact Signals       ████████████ 10.37K
   Zustand              ████████████ 10.16K
   Jotai                ███████ 6.01K
   Redux Toolkit        █ 403.02
   Valtio               █ 72.33
   MobX                 █ 69.49
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen** | 33.51K | ±0.73% | 29.8406ms | 123.2210ms | 16.76K |
| 🥈 | **Solid Signals** | 10.76K | ±2.40% | 92.9135ms | 178.0440ms | 5.38K |
| 🥉 | **Preact Signals** | 10.37K | ±2.74% | 96.4031ms | 324.7990ms | 5.19K |
| 4 | **Zustand** | 10.16K | ±2.51% | 98.4074ms | 310.7920ms | 5.08K |
| 5 | **Jotai** | 6.01K | ±2.17% | 166.5275ms | 321.9030ms | 3.00K |
| 6 | **Redux Toolkit** | 403.02 | ±2.15% | 2481.2821ms | 3720.1060ms | 202.00 |
| 7 | **Valtio** | 72.33 | ±2.13% | 13825.2455ms | 15968.5680ms | 37.00 |
| 8 | **MobX** | 69.49 | ±4.08% | 14390.7196ms | 21797.7200ms | 36.00 |

**Key Insight:** Zen is **482.25x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.26M
🥈 Preact Signals       █████████████████████████████████████ 6.66M
🥉 Zen                  ███████████████████████████████████ 6.33M
   Valtio               ██████ 1.14M
   MobX                 █████ 969.51K
   Jotai                ████ 640.57K
   Zustand              █ 169.22K
   Redux Toolkit        █ 77.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 7.26M | ±1.24% | 0.1377ms | 0.2210ms | 3.63M |
| 🥈 | **Preact Signals** | 6.66M | ±1.97% | 0.1502ms | 0.2400ms | 3.33M |
| 🥉 | **Zen** | 6.33M | ±1.21% | 0.1580ms | 0.2510ms | 3.17M |
| 4 | **Valtio** | 1.14M | ±1.02% | 0.8771ms | 0.9710ms | 570.04K |
| 5 | **MobX** | 969.51K | ±0.82% | 1.0315ms | 1.1620ms | 484.75K |
| 6 | **Jotai** | 640.57K | ±0.48% | 1.5611ms | 3.2960ms | 320.29K |
| 7 | **Zustand** | 169.22K | ±0.96% | 5.9096ms | 8.4160ms | 84.61K |
| 8 | **Redux Toolkit** | 77.76K | ±1.12% | 12.8599ms | 22.7020ms | 38.88K |

**Key Insight:** Solid Signals is **93.37x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 115.89K
🥈 Preact Signals       ████████████████████████████████████ 103.90K
🥉 Jotai                ███████████████████████████████ 89.28K
   Zen                  ██████████████████████████████ 88.08K
   Zustand              ███████████████████████ 66.89K
   Valtio               ████████ 23.87K
   MobX                 ██████ 16.43K
   Redux Toolkit        █ 1.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Solid Signals** | 115.89K | ±1.30% | 8.6292ms | 16.8020ms | 57.94K |
| 🥈 | **Preact Signals** | 103.90K | ±1.22% | 9.6246ms | 18.5850ms | 51.95K |
| 🥉 | **Jotai** | 89.28K | ±1.37% | 11.2006ms | 21.7400ms | 44.64K |
| 4 | **Zen** | 88.08K | ±1.58% | 11.3537ms | 19.7170ms | 44.04K |
| 5 | **Zustand** | 66.89K | ±1.20% | 14.9505ms | 25.2470ms | 33.44K |
| 6 | **Valtio** | 23.87K | ±1.00% | 41.8940ms | 82.4040ms | 11.94K |
| 7 | **MobX** | 16.43K | ±1.77% | 60.8802ms | 127.6790ms | 8.21K |
| 8 | **Redux Toolkit** | 1.30K | ±4.31% | 769.3124ms | 2114.6730ms | 651.00 |

**Key Insight:** Solid Signals is **89.15x faster** than Redux Toolkit in this category.

### Reactive Async State Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 1.24M
🥈 Jotai                ███████████████████████ 709.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen** | 1.24M | ±1.11% | 0.8037ms | 1.0720ms | 622.09K |
| 🥈 | **Jotai** | 709.22K | ±1.10% | 1.4100ms | 1.8240ms | 354.61K |

### Cache Performance - Caching patterns and memoization

**Performance Comparison:**

```
🥇 Redux Toolkit - R...  0.00
🥇 Zustand - Repeate...  0.00
🥇 Jotai - Repeated ...  0.00
🥇 MobX - Repeated A...  0.00
🥇 Valtio - Repeated...  0.00
🥇 Preact Signals - ...  0.00
🥇 Solid Signals - R...  0.00
🥇 Zen - Repeated Ac...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Redux Toolkit - Repeated Access Pattern** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zustand - Repeated Access Pattern** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Jotai - Repeated Access Pattern** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **MobX - Repeated Access Pattern** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Valtio - Repeated Access Pattern** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Preact Signals - Repeated Access Pattern** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Solid Signals - Repeated Access Pattern** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zen - Repeated Access Pattern** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit - Repeated Access Pattern is **NaNx faster** than Zen - Repeated Access Pattern in this category.

### Deep Nested Updates

**Performance Comparison:**

```
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
🥇 10-Level Nested U...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **10-Level Nested Update - Redux Toolkit** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Zustand** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Jotai** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - MobX** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Valtio** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Preact Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Solid Signals** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **10-Level Nested Update - Zen** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** 10-Level Nested Update - Redux Toolkit is **NaNx faster** than 10-Level Nested Update - Zen in this category.

### Form State - Form state management

**Performance Comparison:**

```
🥇 Redux Toolkit - U...  0.00
🥇 Zustand - Update ...  0.00
🥇 Jotai - Update Mu...  0.00
🥇 MobX - Update Mul...  0.00
🥇 Valtio - Update M...  0.00
🥇 Preact Signals - ...  0.00
🥇 Solid Signals - U...  0.00
🥇 Zen - Update Mult...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Redux Toolkit - Update Multiple Fields** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zustand - Update Multiple Fields** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Jotai - Update Multiple Fields** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **MobX - Update Multiple Fields** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Valtio - Update Multiple Fields** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Preact Signals - Update Multiple Fields** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Solid Signals - Update Multiple Fields** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zen - Update Multiple Fields** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit - Update Multiple Fields is **NaNx faster** than Zen - Update Multiple Fields in this category.

### Read Operations - x1

**Performance Comparison:**

```
🥇 Simple Read - Sol... ████████████████████████████████████████ 12.78M
🥈 Simple Read - Jotai  █████████████████████████████████████ 11.95M
🥉 Simple Read - Zen    ████████████████████████████████ 10.35M
   Simple Read - Pre... ████████████████████████████████ 10.19M
   High Frequency Re... ████████████████████████ 7.66M
   High Frequency Re... ████████████████████████ 7.57M
   High Frequency Re... █████████████████ 5.45M
   High Frequency Re... ██████████████ 4.55M
   High Frequency Re... ████████████ 3.93M
   High Frequency Re... ███████████ 3.38M
   High Frequency Re... ████ 1.42M
   Simple Read - Valtio ████ 1.32M
   Simple Read - MobX   ████ 1.26M
   High Frequency Re... █ 352.29K
   Simple Read - Red... █ 308.96K
   Simple Read - Zus... █ 166.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Simple Read - Solid Signals** | 12.78M | ±0.17% | 0.0783ms | 0.1010ms | 6.39M |
| 🥈 | **Simple Read - Jotai** | 11.95M | ±0.57% | 0.0837ms | 0.1300ms | 5.97M |
| 🥉 | **Simple Read - Zen** | 10.35M | ±0.11% | 0.0966ms | 0.1200ms | 5.18M |
| 4 | **Simple Read - Preact Signals** | 10.19M | ±0.12% | 0.0981ms | 0.1600ms | 5.09M |
| 5 | **High Frequency Read - MobX** | 7.66M | ±0.16% | 0.1306ms | 0.1500ms | 3.83M |
| 6 | **High Frequency Read - Solid Signals** | 7.57M | ±0.10% | 0.1321ms | 0.1700ms | 3.78M |
| 7 | **High Frequency Read - Zen** | 5.45M | ±0.09% | 0.1834ms | 0.2010ms | 2.73M |
| 8 | **High Frequency Read - Jotai** | 4.55M | ±0.09% | 0.2197ms | 0.2300ms | 2.28M |
| 9 | **High Frequency Read - Preact Signals** | 3.93M | ±0.09% | 0.2545ms | 0.2610ms | 1.96M |
| 10 | **High Frequency Read - Redux Toolkit** | 3.38M | ±0.09% | 0.2960ms | 0.3010ms | 1.69M |
| 11 | **High Frequency Read - Zustand** | 1.42M | ±0.15% | 0.7020ms | 0.7020ms | 712.27K |
| 12 | **Simple Read - Valtio** | 1.32M | ±0.30% | 0.7576ms | 0.8110ms | 659.96K |
| 13 | **Simple Read - MobX** | 1.26M | ±0.30% | 0.7932ms | 0.9720ms | 630.35K |
| 14 | **High Frequency Read - Valtio** | 352.29K | ±0.26% | 2.8386ms | 5.8610ms | 176.15K |
| 15 | **Simple Read - Redux Toolkit** | 308.96K | ±0.45% | 3.2367ms | 5.8010ms | 154.48K |
| 16 | **Simple Read - Zustand** | 166.40K | ±0.28% | 6.0095ms | 7.8350ms | 83.20K |

**Key Insight:** Simple Read - Solid Signals is **76.78x faster** than Simple Read - Zustand in this category.

### Read - 1000x operations (experimental)

**Performance Comparison:**

```
🥇 Redux Toolkit - S...  0.00
🥇 Zustand - Simple ...  0.00
🥇 Jotai - Simple Re...  0.00
🥇 MobX - Simple Rea...  0.00
🥇 Valtio - Simple R...  0.00
🥇 Preact Signals - ...  0.00
🥇 Solid Signals - S...  0.00
🥇 Zen - Simple Read...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Redux Toolkit - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zustand - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Jotai - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **MobX - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Valtio - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Preact Signals - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Solid Signals - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zen - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit - Simple Read (1 iterations) is **NaNx faster** than Zen - Simple Read (1 iterations) in this category.

### Read - 10000x operations (experimental)

**Performance Comparison:**

```
🥇 Redux Toolkit - S...  0.00
🥇 Zustand - Simple ...  0.00
🥇 Jotai - Simple Re...  0.00
🥇 MobX - Simple Rea...  0.00
🥇 Valtio - Simple R...  0.00
🥇 Preact Signals - ...  0.00
🥇 Solid Signals - S...  0.00
🥇 Zen - Simple Read...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Redux Toolkit - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zustand - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Jotai - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **MobX - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Valtio - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Preact Signals - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Solid Signals - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zen - Simple Read (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit - Simple Read (1 iterations) is **NaNx faster** than Zen - Simple Read (1 iterations) in this category.

### Write Operations - x1

**Performance Comparison:**

```
🥇 Simple Increment ... ████████████████████████████████████████ 12.89M
🥈 Simple Increment ... ██████████████████████████████████████ 12.21M
🥉 Simple Increment ... ███████████████████████████████████ 11.39M
   Burst Updates - S... █████████████████████████████████ 10.71M
   Simple Increment ... ████████████████████████████████ 10.28M
   Burst Updates - J... ██████████████████ 5.91M
   Burst Updates - Zen  ███████████████ 4.79M
   Burst Updates - P... ██████████████ 4.55M
   Simple Increment ... ████ 1.35M
   Simple Increment ... ████ 1.27M
   Simple Increment ... █ 309.08K
   Simple Increment ... █ 171.01K
   Burst Updates - V... █ 170.23K
   Burst Updates - MobX █ 156.07K
   Burst Updates - R... █ 33.15K
   Burst Updates - Z... █ 17.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Simple Increment - Solid Signals** | 12.89M | ±0.12% | 0.0776ms | 0.1000ms | 6.44M |
| 🥈 | **Simple Increment - Jotai** | 12.21M | ±0.52% | 0.0819ms | 0.1010ms | 6.11M |
| 🥉 | **Simple Increment - Zen** | 11.39M | ±0.12% | 0.0878ms | 0.1100ms | 5.69M |
| 4 | **Burst Updates - Solid Signals** | 10.71M | ±0.17% | 0.0934ms | 0.1100ms | 5.35M |
| 5 | **Simple Increment - Preact Signals** | 10.28M | ±0.09% | 0.0973ms | 0.1100ms | 5.14M |
| 6 | **Burst Updates - Jotai** | 5.91M | ±0.80% | 0.1692ms | 0.2400ms | 2.95M |
| 7 | **Burst Updates - Zen** | 4.79M | ±0.09% | 0.2090ms | 0.2210ms | 2.39M |
| 8 | **Burst Updates - Preact Signals** | 4.55M | ±0.09% | 0.2197ms | 0.2310ms | 2.28M |
| 9 | **Simple Increment - Valtio** | 1.35M | ±0.27% | 0.7386ms | 0.7810ms | 676.92K |
| 10 | **Simple Increment - MobX** | 1.27M | ±0.29% | 0.7881ms | 0.9520ms | 634.42K |
| 11 | **Simple Increment - Redux Toolkit** | 309.08K | ±0.43% | 3.2354ms | 4.4980ms | 154.54K |
| 12 | **Simple Increment - Zustand** | 171.01K | ±0.27% | 5.8477ms | 7.5740ms | 85.50K |
| 13 | **Burst Updates - Valtio** | 170.23K | ±0.48% | 5.8744ms | 6.5320ms | 85.11K |
| 14 | **Burst Updates - MobX** | 156.07K | ±0.42% | 6.4075ms | 9.0060ms | 78.03K |
| 15 | **Burst Updates - Redux Toolkit** | 33.15K | ±0.57% | 30.1650ms | 41.2580ms | 16.58K |
| 16 | **Burst Updates - Zustand** | 17.44K | ±0.41% | 57.3333ms | 76.3940ms | 8.72K |

**Key Insight:** Simple Increment - Solid Signals is **738.84x faster** than Burst Updates - Zustand in this category.

### Write - 1000x operations (experimental)

**Performance Comparison:**

```
🥇 Redux Toolkit - S...  0.00
🥇 Zustand - Simple ...  0.00
🥇 Jotai - Simple In...  0.00
🥇 MobX - Simple Inc...  0.00
🥇 Valtio - Simple I...  0.00
🥇 Preact Signals - ...  0.00
🥇 Solid Signals - S...  0.00
🥇 Zen - Simple Incr...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Redux Toolkit - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zustand - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Jotai - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **MobX - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Valtio - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Preact Signals - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Solid Signals - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zen - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit - Simple Increment (1 iterations) is **NaNx faster** than Zen - Simple Increment (1 iterations) in this category.

### Write - 10000x operations (experimental)

**Performance Comparison:**

```
🥇 Redux Toolkit - S...  0.00
🥇 Zustand - Simple ...  0.00
🥇 Jotai - Simple In...  0.00
🥇 MobX - Simple Inc...  0.00
🥇 Valtio - Simple I...  0.00
🥇 Preact Signals - ...  0.00
🥇 Solid Signals - S...  0.00
🥇 Zen - Simple Incr...  0.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Redux Toolkit - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zustand - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Jotai - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **MobX - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Valtio - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Preact Signals - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Solid Signals - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |
| 🥇 | **Zen - Simple Increment (1 iterations)** | 0.00 | ±0.00% | NaNms | NaNms | 0.00 |

**Key Insight:** Redux Toolkit - Simple Increment (1 iterations) is **NaNx faster** than Zen - Simple Increment (1 iterations) in this category.

## 🚀 Running Benchmarks

```bash
# Install dependencies
npm install

# Run benchmarks
npm run benchmark
```

## ℹ️ About

This benchmark is automatically updated daily by GitHub Actions. Benchmarks run only when:
- A library releases a new version
- Test files are modified

**Methodology:** Each test runs multiple iterations until statistical significance is achieved. Results are averaged over 3 complete runs to ensure accuracy.

---

*Last generated: 2025-11-11T13:00:37.096Z*
