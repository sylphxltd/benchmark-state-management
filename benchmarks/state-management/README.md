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
| 🥇 | **Zen** | 11.0/100 | Baseline |
| 🥈 | **Solid Signals** | 9.8/100 | 89.1% |
| 🥉 | **Preact Signals** | 8.6/100 | 78.2% |
| 4 | **Zustand** | 4.2/100 | 38.2% |
| 5 | **MobX** | 0.6/100 | 5.5% |
| 6 | **Valtio** | 0.5/100 | 4.5% |
| 7 | **Jotai** | 0.3/100 | 2.7% |
| 8 | **Redux Toolkit** | 0.2/100 | 1.8% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **Jotai** | 7/7 | 100% |
| 🥇 | **MobX** | 7/7 | 100% |
| 🥇 | **Preact Signals** | 7/7 | 100% |
| 🥇 | **Solid Signals** | 7/7 | 100% |
| 🥇 | **Zen** | 7/7 | 100% |
| 🥇 | **Zustand** | 7/7 | 100% |
| 7 | **Redux Toolkit** | 5/7 | 71% |
| 7 | **Valtio** | 5/7 | 71% |

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

- [Read](#read)
- [Write](#write)
- [Creation](#creation)
- [Complexity](#complexity)
- [Memory](#memory)
- [Form](#form)
- [Async Reactive](#async-reactive)

### Read

**Performance Comparison:**

```
🥇 Zen - Simple Read    ████████████████████████████████████████ 47.24M
🥈 Zen - High Freque... ████████████████████████████████████████ 46.92M
🥉 Solid Signals - S... ███████████████████████████ 31.61M
   Zen - High Freque... ██████████████████████████ 30.44M
   Preact Signals - ... █████████████████████████ 30.01M
   Solid Signals - H... ███████████████████████ 26.61M
   Zustand - High Fr... ████████████████████ 23.89M
   Preact Signals - ... ██████████████████ 21.62M
   Redux Toolkit - H... ████████████████ 19.12M
   Solid Signals - H... ████████████ 14.42M
   Zustand - Simple ... ███████████ 12.91M
   Valtio - High Fre... ██████ 7.03M
   Zustand - High Fr... █████ 5.69M
   MobX - Simple Read   ███ 3.91M
   Redux Toolkit - H... ███ 3.76M
   Zen - High Freque... ███ 3.72M
   MobX - High Frequ... ███ 3.37M
   Preact Signals - ... ███ 3.27M
   Valtio - Simple Read ███ 2.98M
   Solid Signals - H... ██ 2.44M
   Valtio - High Fre... █ 947.55K
   Jotai - Simple Read  █ 789.03K
   Zustand - High Fr... █ 618.26K
   Redux Toolkit - S... █ 576.82K
   Redux Toolkit - H... █ 487.21K
   Jotai - High Freq... █ 429.84K
   Zen - High Freque... █ 409.74K
   MobX - High Frequ... █ 368.26K
   Preact Signals - ... █ 347.10K
   Solid Signals - H... █ 280.49K
   Valtio - High Fre... █ 92.62K
   Preact Signals - ... █ 51.52K
   Zustand - High Fr... █ 49.21K
   Jotai - High Freq... █ 45.07K
   MobX - High Frequ... █ 40.00K
   Redux Toolkit - H... █ 39.87K
   Valtio - High Fre... █ 9.31K
   Jotai - High Freq... █ 4.32K
   MobX - High Frequ... █ 4.24K
   Jotai - High Freq... █ 410.17
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen - Simple Read** | 47.24M | ±0.06% | 0.0000ms | 0.0000ms | 23.62M |
| 🥈 | **Zen - High Frequency Read (x10)** | 46.92M | ±0.05% | 0.0000ms | 0.0000ms | 23.46M |
| 🥉 | **Solid Signals - Simple Read** | 31.61M | ±2.61% | 0.0000ms | 0.1000ms | 15.81M |
| 4 | **Zen - High Frequency Read (x100)** | 30.44M | ±0.03% | 0.0000ms | 0.0000ms | 15.22M |
| 5 | **Preact Signals - Simple Read** | 30.01M | ±2.10% | 0.0000ms | 0.1000ms | 15.00M |
| 6 | **Solid Signals - High Frequency Read (x10)** | 26.61M | ±2.36% | 0.0000ms | 0.1000ms | 13.31M |
| 7 | **Zustand - High Frequency Read (x10)** | 23.89M | ±2.75% | 0.0000ms | 0.1000ms | 11.95M |
| 8 | **Preact Signals - High Frequency Read (x10)** | 21.62M | ±1.78% | 0.0000ms | 0.1000ms | 10.81M |
| 9 | **Redux Toolkit - High Frequency Read (x10)** | 19.12M | ±2.50% | 0.1000ms | 0.1000ms | 9.56M |
| 10 | **Solid Signals - High Frequency Read (x100)** | 14.42M | ±11.29% | 0.1000ms | 0.1000ms | 7.21M |
| 11 | **Zustand - Simple Read** | 12.91M | ±4.27% | 0.1000ms | 0.1000ms | 6.45M |
| 12 | **Valtio - High Frequency Read (x10)** | 7.03M | ±4.31% | 0.1000ms | 0.2000ms | 3.52M |
| 13 | **Zustand - High Frequency Read (x100)** | 5.69M | ±3.10% | 0.2000ms | 0.3000ms | 2.84M |
| 14 | **MobX - Simple Read** | 3.91M | ±1.63% | 0.3000ms | 0.5000ms | 1.96M |
| 15 | **Redux Toolkit - High Frequency Read (x100)** | 3.76M | ±4.20% | 0.3000ms | 0.3000ms | 1.88M |
| 16 | **Zen - High Frequency Read (x1000)** | 3.72M | ±0.02% | 0.3000ms | 0.3000ms | 1.86M |
| 17 | **MobX - High Frequency Read (x10)** | 3.37M | ±5.16% | 0.3000ms | 0.5000ms | 1.69M |
| 18 | **Preact Signals - High Frequency Read (x100)** | 3.27M | ±10.48% | 0.3000ms | 0.3000ms | 1.64M |
| 19 | **Valtio - Simple Read** | 2.98M | ±2.41% | 0.3000ms | 0.5000ms | 1.49M |
| 20 | **Solid Signals - High Frequency Read (x1000)** | 2.44M | ±2.92% | 0.4000ms | 0.5000ms | 1.22M |
| 21 | **Valtio - High Frequency Read (x100)** | 947.55K | ±3.72% | 1.1000ms | 1.5000ms | 473.77K |
| 22 | **Jotai - Simple Read** | 789.03K | ±3.61% | 1.3000ms | 2.9000ms | 394.52K |
| 23 | **Zustand - High Frequency Read (x1000)** | 618.26K | ±6.60% | 1.6000ms | 1.8000ms | 309.13K |
| 24 | **Redux Toolkit - Simple Read** | 576.82K | ±1.88% | 1.7000ms | 3.6000ms | 288.41K |
| 25 | **Redux Toolkit - High Frequency Read (x1000)** | 487.21K | ±2.23% | 2.1000ms | 2.6000ms | 243.60K |
| 26 | **Jotai - High Frequency Read (x10)** | 429.84K | ±2.61% | 2.3000ms | 3.9000ms | 214.92K |
| 27 | **Zen - High Frequency Read (x10000)** | 409.74K | ±0.03% | 2.4000ms | 2.9000ms | 204.87K |
| 28 | **MobX - High Frequency Read (x100)** | 368.26K | ±6.69% | 2.7000ms | 4.9000ms | 184.13K |
| 29 | **Preact Signals - High Frequency Read (x1000)** | 347.10K | ±12.09% | 2.9000ms | 2.5000ms | 173.55K |
| 30 | **Solid Signals - High Frequency Read (x10000)** | 280.49K | ±1.63% | 3.6000ms | 4.8000ms | 140.25K |
| 31 | **Valtio - High Frequency Read (x1000)** | 92.62K | ±2.02% | 10.8000ms | 22.4000ms | 46.31K |
| 32 | **Preact Signals - High Frequency Read (x10000)** | 51.52K | ±4.42% | 19.4000ms | 50.0000ms | 25.76K |
| 33 | **Zustand - High Frequency Read (x10000)** | 49.21K | ±8.05% | 20.3000ms | 68.3000ms | 24.60K |
| 34 | **Jotai - High Frequency Read (x100)** | 45.07K | ±4.13% | 22.2000ms | 76.8000ms | 22.54K |
| 35 | **MobX - High Frequency Read (x1000)** | 40.00K | ±3.30% | 25.0000ms | 84.4000ms | 20.00K |
| 36 | **Redux Toolkit - High Frequency Read (x10000)** | 39.87K | ±7.99% | 25.1000ms | 68.7000ms | 19.93K |
| 37 | **Valtio - High Frequency Read (x10000)** | 9.31K | ±3.35% | 107.4000ms | 342.4000ms | 4.67K |
| 38 | **Jotai - High Frequency Read (x1000)** | 4.32K | ±4.05% | 231.5000ms | 848.1000ms | 2.16K |
| 39 | **MobX - High Frequency Read (x10000)** | 4.24K | ±3.31% | 235.9000ms | 883.7000ms | 2.12K |
| 40 | **Jotai - High Frequency Read (x10000)** | 410.17 | ±6.48% | 2438.0000ms | 5531.7000ms | 206.00 |

**Key Insight:** Zen - Simple Read is **115178.84x faster** than Jotai - High Frequency Read (x10000) in this category.

### Write

**Performance Comparison:**

```
🥇 Zen - Single Update  ████████████████████████████████████████ 48.03M
🥈 Zen - Batch Updat... ███████████████████████ 27.04M
🥉 Preact Signals - ... ██████████████████████ 26.14M
   Solid Signals - S... █████████████████████ 25.73M
   Solid Signals - B... ████████████████████ 23.71M
   Zustand - Single ... ██████████ 12.17M
   Preact Signals - ... █████████ 11.17M
   Solid Signals - B... █████ 6.03M
   Zen - Batch Updat... ████ 4.66M
   MobX - Single Update ███ 4.04M
   Valtio - Single U... ███ 3.10M
   Zustand - Batch U... ██ 2.00M
   Preact Signals - ... █ 1.78M
   Jotai - Single Up... █ 970.34K
   Redux Toolkit - S... █ 541.14K
   Solid Signals - B... █ 516.73K
   Zen - Batch Updat... █ 514.75K
   MobX - Batch Upda... █ 448.61K
   Valtio - Batch Up... █ 362.37K
   Zustand - Batch U... █ 233.06K
   Preact Signals - ... █ 181.61K
   Jotai - Batch Upd... █ 99.76K
   Solid Signals - B... █ 73.64K
   Zen - Batch Updat... █ 49.33K
   MobX - Batch Upda... █ 47.93K
   Redux Toolkit - B... █ 42.09K
   Valtio - Batch Up... █ 33.69K
   Zustand - Batch U... █ 24.01K
   Preact Signals - ... █ 17.39K
   Jotai - Batch Upd... █ 10.82K
   MobX - Batch Upda... █ 4.55K
   Redux Toolkit - B... █ 4.06K
   Valtio - Batch Up... █ 2.74K
   Zustand - Batch U... █ 2.30K
   Jotai - Batch Upd... █ 986.45
   MobX - Batch Upda... █ 379.94
   Valtio - Batch Up... █ 284.55
   Redux Toolkit - B... █ 279.83
   Jotai - Batch Upd... █ 113.22
   Redux Toolkit - B... █ 31.91
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen - Single Update** | 48.03M | ±0.04% | 0.0000ms | 0.0000ms | 24.02M |
| 🥈 | **Zen - Batch Update (x10)** | 27.04M | ±0.03% | 0.0000ms | 0.0000ms | 13.52M |
| 🥉 | **Preact Signals - Single Update** | 26.14M | ±3.43% | 0.0000ms | 0.1000ms | 13.07M |
| 4 | **Solid Signals - Single Update** | 25.73M | ±4.95% | 0.0000ms | 0.1000ms | 12.86M |
| 5 | **Solid Signals - Batch Update (x10)** | 23.71M | ±6.57% | 0.0000ms | 0.1000ms | 11.85M |
| 6 | **Zustand - Single Update** | 12.17M | ±6.06% | 0.1000ms | 0.1000ms | 6.08M |
| 7 | **Preact Signals - Batch Update (x10)** | 11.17M | ±4.60% | 0.1000ms | 0.1000ms | 5.59M |
| 8 | **Solid Signals - Batch Update (x100)** | 6.03M | ±2.72% | 0.2000ms | 0.2000ms | 3.02M |
| 9 | **Zen - Batch Update (x100)** | 4.66M | ±0.02% | 0.2000ms | 0.3000ms | 2.33M |
| 10 | **MobX - Single Update** | 4.04M | ±2.44% | 0.2000ms | 0.4000ms | 2.02M |
| 11 | **Valtio - Single Update** | 3.10M | ±2.82% | 0.3000ms | 0.5000ms | 1.55M |
| 12 | **Zustand - Batch Update (x10)** | 2.00M | ±3.84% | 0.5000ms | 0.9000ms | 1.00M |
| 13 | **Preact Signals - Batch Update (x100)** | 1.78M | ±3.95% | 0.6000ms | 0.7000ms | 888.47K |
| 14 | **Jotai - Single Update** | 970.34K | ±4.40% | 1.0000ms | 2.2000ms | 487.75K |
| 15 | **Redux Toolkit - Single Update** | 541.14K | ±2.23% | 1.8000ms | 3.6000ms | 270.57K |
| 16 | **Solid Signals - Batch Update (x1000)** | 516.73K | ±12.00% | 1.9000ms | 1.8000ms | 258.37K |
| 17 | **Zen - Batch Update (x1000)** | 514.75K | ±0.02% | 1.9000ms | 2.4000ms | 257.37K |
| 18 | **MobX - Batch Update (x10)** | 448.61K | ±5.27% | 2.2000ms | 3.3000ms | 224.31K |
| 19 | **Valtio - Batch Update (x10)** | 362.37K | ±4.14% | 2.8000ms | 4.4000ms | 181.18K |
| 20 | **Zustand - Batch Update (x100)** | 233.06K | ±2.76% | 4.3000ms | 7.6000ms | 116.53K |
| 21 | **Preact Signals - Batch Update (x1000)** | 181.61K | ±1.98% | 5.5000ms | 6.3000ms | 90.81K |
| 22 | **Jotai - Batch Update (x10)** | 99.76K | ±6.32% | 10.0000ms | 35.3000ms | 49.88K |
| 23 | **Solid Signals - Batch Update (x10000)** | 73.64K | ±1.40% | 13.6000ms | 22.2000ms | 36.82K |
| 24 | **Zen - Batch Update (x10000)** | 49.33K | ±0.03% | 20.3000ms | 23.0000ms | 24.67K |
| 25 | **MobX - Batch Update (x100)** | 47.93K | ±4.63% | 20.9000ms | 74.3000ms | 23.97K |
| 26 | **Redux Toolkit - Batch Update (x10)** | 42.09K | ±7.73% | 23.8000ms | 97.9000ms | 21.05K |
| 27 | **Valtio - Batch Update (x100)** | 33.69K | ±3.63% | 29.7000ms | 122.2000ms | 16.84K |
| 28 | **Zustand - Batch Update (x1000)** | 24.01K | ±2.16% | 41.6000ms | 123.4000ms | 12.01K |
| 29 | **Preact Signals - Batch Update (x10000)** | 17.39K | ±5.05% | 57.5000ms | 187.9000ms | 8.70K |
| 30 | **Jotai - Batch Update (x100)** | 10.82K | ±2.37% | 92.4000ms | 326.4000ms | 5.41K |
| 31 | **MobX - Batch Update (x1000)** | 4.55K | ±4.86% | 219.9000ms | 1109.6000ms | 2.27K |
| 32 | **Redux Toolkit - Batch Update (x100)** | 4.06K | ±10.50% | 246.2000ms | 2547.8000ms | 2.03K |
| 33 | **Valtio - Batch Update (x1000)** | 2.74K | ±8.31% | 365.5000ms | 2128.7000ms | 1.37K |
| 34 | **Zustand - Batch Update (x10000)** | 2.30K | ±5.96% | 435.1000ms | 1208.4000ms | 1.15K |
| 35 | **Jotai - Batch Update (x1000)** | 986.45 | ±4.47% | 1013.7000ms | 2556.5000ms | 494.00 |
| 36 | **MobX - Batch Update (x10000)** | 379.94 | ±9.16% | 2632.0000ms | 8532.7000ms | 190.00 |
| 37 | **Valtio - Batch Update (x10000)** | 284.55 | ±11.24% | 3514.4000ms | 13327.2000ms | 143.00 |
| 38 | **Redux Toolkit - Batch Update (x1000)** | 279.83 | ±17.91% | 3573.6000ms | 24866.3000ms | 141.00 |
| 39 | **Jotai - Batch Update (x10000)** | 113.22 | ±7.38% | 8832.1000ms | 14574.2000ms | 57.00 |
| 40 | **Redux Toolkit - Batch Update (x10000)** | 31.91 | ±21.19% | 31340.9000ms | 54016.2000ms | 17.00 |

**Key Insight:** Zen - Single Update is **1505375.28x faster** than Redux Toolkit - Batch Update (x10000) in this category.

### Creation

**Performance Comparison:**

```
🥇 Zen - Store Creat... ████████████████████████████████████████ 45.46M
🥈 Preact Signals - ... ███████████████████████████ 30.69M
🥉 Solid Signals - S... █████████████████████████ 28.61M
   Preact Signals - ... ████████████████████████ 27.29M
   Solid Signals - S... ██████████████████ 20.50M
   Zen - Store Creat... ███████████████ 17.00M
   Preact Signals - ... ███████████████ 16.49M
   Zustand - Store C... ██████ 7.05M
   Solid Signals - S... ████ 4.05M
   Preact Signals - ... ██ 2.64M
   Zen - Store Creat... ██ 2.24M
   Zustand - Store C... █ 880.26K
   Jotai - Store Cre... █ 525.33K
   Solid Signals - S... █ 448.70K
   Valtio - Store Cr... █ 361.49K
   Preact Signals - ... █ 289.16K
   MobX - Store Crea... █ 251.08K
   Zen - Store Creat... █ 213.35K
   Zustand - Store C... █ 104.47K
   Redux Toolkit - S... █ 57.20K
   Jotai - Store Cre... █ 56.89K
   Solid Signals - S... █ 54.62K
   MobX - Store Crea... █ 42.49K
   Zen - Store Creat... █ 23.13K
   Valtio - Store Cr... █ 21.94K
   Zustand - Store C... █ 9.40K
   Redux Toolkit - S... █ 7.47K
   Jotai - Store Cre... █ 4.36K
   Valtio - Store Cr... █ 3.73K
   MobX - Store Crea... █ 3.73K
   Zustand - Store C... █ 1.10K
   Redux Toolkit - S... █ 753.63
   Jotai - Store Cre... █ 489.80
   Valtio - Store Cr... █ 485.94
   MobX - Store Crea... █ 375.73
   Redux Toolkit - S... █ 68.91
   Jotai - Store Cre... █ 55.89
   MobX - Store Crea... █ 38.50
   Redux Toolkit - S... █ 8.35
   Valtio - Store Cr... █ 6.42
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen - Store Creation (x1)** | 45.46M | ±0.07% | 0.0000ms | 0.0000ms | 22.73M |
| 🥈 | **Preact Signals - Store Creation (x1)** | 30.69M | ±0.92% | 0.0000ms | 0.1000ms | 15.35M |
| 🥉 | **Solid Signals - Store Creation (x1)** | 28.61M | ±1.63% | 0.0000ms | 0.1000ms | 14.31M |
| 4 | **Preact Signals - Store Creation (x10)** | 27.29M | ±1.54% | 0.0000ms | 0.1000ms | 13.64M |
| 5 | **Solid Signals - Store Creation (x10)** | 20.50M | ±2.19% | 0.0000ms | 0.1000ms | 10.25M |
| 6 | **Zen - Store Creation (x10)** | 17.00M | ±3.09% | 0.1000ms | 0.1000ms | 8.50M |
| 7 | **Preact Signals - Store Creation (x100)** | 16.49M | ±0.89% | 0.1000ms | 0.1000ms | 8.25M |
| 8 | **Zustand - Store Creation (x1)** | 7.05M | ±3.17% | 0.1000ms | 0.2000ms | 3.52M |
| 9 | **Solid Signals - Store Creation (x100)** | 4.05M | ±1.30% | 0.2000ms | 0.8000ms | 2.03M |
| 10 | **Preact Signals - Store Creation (x1000)** | 2.64M | ±0.71% | 0.4000ms | 0.5000ms | 1.32M |
| 11 | **Zen - Store Creation (x100)** | 2.24M | ±0.23% | 0.4000ms | 0.7000ms | 1.12M |
| 12 | **Zustand - Store Creation (x10)** | 880.26K | ±5.23% | 1.1000ms | 2.0000ms | 440.13K |
| 13 | **Jotai - Store Creation (x1)** | 525.33K | ±35.74% | 1.9000ms | 1.9000ms | 266.37K |
| 14 | **Solid Signals - Store Creation (x1000)** | 448.70K | ±2.47% | 2.2000ms | 6.5000ms | 224.35K |
| 15 | **Valtio - Store Creation (x1)** | 361.49K | ±63.51% | 2.8000ms | 3.2000ms | 183.11K |
| 16 | **Preact Signals - Store Creation (x10000)** | 289.16K | ±0.85% | 3.5000ms | 7.2000ms | 144.58K |
| 17 | **MobX - Store Creation (x1)** | 251.08K | ±13.90% | 4.0000ms | 6.8000ms | 125.56K |
| 18 | **Zen - Store Creation (x1000)** | 213.35K | ±3.25% | 4.7000ms | 32.5000ms | 106.67K |
| 19 | **Zustand - Store Creation (x100)** | 104.47K | ±2.14% | 9.6000ms | 21.7000ms | 52.23K |
| 20 | **Redux Toolkit - Store Creation (x1)** | 57.20K | ±11.63% | 17.5000ms | 77.2000ms | 28.64K |
| 21 | **Jotai - Store Creation (x10)** | 56.89K | ±37.09% | 17.6000ms | 17.6000ms | 28.46K |
| 22 | **Solid Signals - Store Creation (x10000)** | 54.62K | ±0.96% | 18.3000ms | 50.7000ms | 27.31K |
| 23 | **MobX - Store Creation (x10)** | 42.49K | ±5.31% | 23.5000ms | 84.9000ms | 21.25K |
| 24 | **Zen - Store Creation (x10000)** | 23.13K | ±0.18% | 43.2000ms | 58.6000ms | 11.57K |
| 25 | **Valtio - Store Creation (x10)** | 21.94K | ±119.46% | 45.6000ms | 66.0000ms | 10.97K |
| 26 | **Zustand - Store Creation (x1000)** | 9.40K | ±5.17% | 106.4000ms | 456.3000ms | 4.70K |
| 27 | **Redux Toolkit - Store Creation (x10)** | 7.47K | ±9.53% | 134.0000ms | 599.6000ms | 3.75K |
| 28 | **Jotai - Store Creation (x100)** | 4.36K | ±47.93% | 229.5000ms | 1188.0000ms | 2.18K |
| 29 | **Valtio - Store Creation (x100)** | 3.73K | ±36.34% | 267.8000ms | 1313.4000ms | 1.87K |
| 30 | **MobX - Store Creation (x100)** | 3.73K | ±7.74% | 267.9000ms | 1416.8000ms | 1.87K |
| 31 | **Zustand - Store Creation (x10000)** | 1.10K | ±4.48% | 907.6000ms | 3322.3000ms | 551.00 |
| 32 | **Redux Toolkit - Store Creation (x100)** | 753.63 | ±11.02% | 1326.9000ms | 8244.4000ms | 377.00 |
| 33 | **Jotai - Store Creation (x1000)** | 489.80 | ±39.87% | 2041.6000ms | 39319.3000ms | 245.00 |
| 34 | **Valtio - Store Creation (x1000)** | 485.94 | ±25.02% | 2057.9000ms | 25391.0000ms | 243.00 |
| 35 | **MobX - Store Creation (x1000)** | 375.73 | ±13.62% | 2661.5000ms | 16761.9000ms | 188.00 |
| 36 | **Redux Toolkit - Store Creation (x1000)** | 68.91 | ±17.24% | 14512.6000ms | 40383.0000ms | 35.00 |
| 37 | **Jotai - Store Creation (x10000)** | 55.89 | ±34.29% | 17892.7000ms | 48856.5000ms | 28.00 |
| 38 | **MobX - Store Creation (x10000)** | 38.50 | ±17.07% | 25974.4000ms | 55786.3000ms | 20.00 |
| 39 | **Redux Toolkit - Store Creation (x10000)** | 8.35 | ±9.36% | 119700.0000ms | 151520.0000ms | 10.00 |
| 40 | **Valtio - Store Creation (x10000)** | 6.42 | ±178.71% | 155850.0000ms | 2825620.0000ms | 21.00 |

**Key Insight:** Zen - Store Creation (x1) is **7085614.22x faster** than Valtio - Store Creation (x10000) in this category.

### Complexity

**Performance Comparison:**

```
🥇 Zen - Deep Nested... ████████████████████████████████████████ 47.02M
🥈 Zen - Large Array... █████████████████████████████████████ 43.53M
🥉 Preact Signals - ... ██████████████████████████████ 34.76M
   Preact Signals - ... ████████████████████████████ 32.89M
   Solid Signals - D... ███████████████████████████ 32.15M
   Solid Signals - L... ██████████████████████████ 30.02M
   Zen - Array Splic... ████████████████████████ 27.83M
   Zustand - Deep Ne... ███████████████████████ 26.47M
   Solid Signals - A... ██████████████████ 20.81M
   Preact Signals - ... █████████████████ 20.27M
   Zen - Deep Nested... ████████████ 13.96M
   Solid Signals - D... █████████ 10.65M
   Preact Signals - ... ████████ 9.87M
   Zustand - Deep Ne... █████ 5.80M
   MobX - Large Arra... █████ 5.77M
   Zustand - Multi-f... ████ 4.34M
   Jotai - Large Arr... ███ 4.05M
   Jotai - Deep Nest... ███ 3.36M
   MobX - Array Spli... ██ 2.42M
   Zustand - Array S... ██ 2.18M
   MobX - Deep Neste... █ 1.71M
   MobX - Deep Neste... █ 1.37M
   Jotai - Array Spl... █ 932.09K
   Jotai - Deep Nest... █ 711.40K
   MobX - Multi-fiel... █ 154.46K
   Zustand - Large A... █ 40.25K
   Jotai - Multi-fie... █ 16.73K
   Preact Signals - ... █ 16.71K
   Zen - Multi-field... █ 15.60K
   Solid Signals - M... █ 14.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen - Deep Nested Read (10 levels)** | 47.02M | ±0.04% | 0.0000ms | 0.0000ms | 23.51M |
| 🥈 | **Zen - Large Array Map (1000 items)** | 43.53M | ±5.79% | 0.0000ms | 0.0000ms | 21.76M |
| 🥉 | **Preact Signals - Deep Nested Read (10 levels)** | 34.76M | ±0.26% | 0.0000ms | 0.0000ms | 17.38M |
| 4 | **Preact Signals - Large Array Map (1000 items)** | 32.89M | ±1.35% | 0.0000ms | 0.0000ms | 16.44M |
| 5 | **Solid Signals - Deep Nested Read (10 levels)** | 32.15M | ±1.37% | 0.0000ms | 0.1000ms | 16.08M |
| 6 | **Solid Signals - Large Array Map (1000 items)** | 30.02M | ±1.93% | 0.0000ms | 0.1000ms | 15.01M |
| 7 | **Zen - Array Splice (middle)** | 27.83M | ±0.03% | 0.0000ms | 0.0000ms | 13.92M |
| 8 | **Zustand - Deep Nested Read (10 levels)** | 26.47M | ±1.28% | 0.0000ms | 0.1000ms | 13.24M |
| 9 | **Solid Signals - Array Splice (middle)** | 20.81M | ±0.12% | 0.0000ms | 0.1000ms | 10.41M |
| 10 | **Preact Signals - Array Splice (middle)** | 20.27M | ±0.65% | 0.0000ms | 0.1000ms | 10.13M |
| 11 | **Zen - Deep Nested Write (10 levels)** | 13.96M | ±0.45% | 0.1000ms | 0.1000ms | 6.98M |
| 12 | **Solid Signals - Deep Nested Write (10 levels)** | 10.65M | ±0.21% | 0.1000ms | 0.2000ms | 5.33M |
| 13 | **Preact Signals - Deep Nested Write (10 levels)** | 9.87M | ±0.81% | 0.1000ms | 0.2000ms | 4.94M |
| 14 | **Zustand - Deep Nested Write (10 levels)** | 5.80M | ±2.48% | 0.2000ms | 0.3000ms | 2.90M |
| 15 | **MobX - Large Array Map (1000 items)** | 5.77M | ±4.28% | 0.2000ms | 0.3000ms | 2.89M |
| 16 | **Zustand - Multi-field Update (unrelated)** | 4.34M | ±2.01% | 0.2000ms | 0.4000ms | 2.17M |
| 17 | **Jotai - Large Array Map (1000 items)** | 4.05M | ±2.78% | 0.2000ms | 0.4000ms | 2.03M |
| 18 | **Jotai - Deep Nested Read (10 levels)** | 3.36M | ±7.68% | 0.3000ms | 0.4000ms | 1.68M |
| 19 | **MobX - Array Splice (middle)** | 2.42M | ±3.40% | 0.4000ms | 0.6000ms | 1.21M |
| 20 | **Zustand - Array Splice (middle)** | 2.18M | ±1.57% | 0.5000ms | 1.4000ms | 1.09M |
| 21 | **MobX - Deep Nested Read (10 levels)** | 1.71M | ±1.38% | 0.6000ms | 1.0000ms | 857.12K |
| 22 | **MobX - Deep Nested Write (10 levels)** | 1.37M | ±2.56% | 0.7000ms | 1.2000ms | 684.56K |
| 23 | **Jotai - Array Splice (middle)** | 932.09K | ±2.37% | 1.1000ms | 1.9000ms | 466.08K |
| 24 | **Jotai - Deep Nested Write (10 levels)** | 711.40K | ±5.04% | 1.4000ms | 3.3000ms | 355.70K |
| 25 | **MobX - Multi-field Update (unrelated)** | 154.46K | ±10.12% | 6.5000ms | 15.2000ms | 77.23K |
| 26 | **Zustand - Large Array Map (1000 items)** | 40.25K | ±3.79% | 24.8000ms | 95.8000ms | 20.12K |
| 27 | **Jotai - Multi-field Update (unrelated)** | 16.73K | ±9.47% | 59.8000ms | 161.9000ms | 8.37K |
| 28 | **Preact Signals - Multi-field Update (unrelated)** | 16.71K | ±12.35% | 59.8000ms | 100.9000ms | 8.36K |
| 29 | **Zen - Multi-field Update (unrelated)** | 15.60K | ±13.94% | 64.1000ms | 114.5000ms | 7.80K |
| 30 | **Solid Signals - Multi-field Update (unrelated)** | 14.46K | ±13.35% | 69.1000ms | 139.8000ms | 7.23K |

**Key Insight:** Zen - Deep Nested Read (10 levels) is **3251.38x faster** than Solid Signals - Multi-field Update (unrelated) in this category.

### Memory

**Performance Comparison:**

```
🥇 Zen - Large State... ████████████████████████████████████████ 49.83M
🥈 Preact Signals - ... ████████████████████████████████ 39.29M
🥉 Solid Signals - L... ███████████████████████████████ 38.56M
   Zustand - Large S... ██████████████████████████ 32.94M
   Redux Toolkit - L... ████████████████████████ 29.36M
   MobX - Large Stat... █████████████ 15.78M
   Jotai - Large Sta... ███ 3.30M
   Zustand - Large S... ██ 2.14M
   MobX - Large Stat... █ 1.82M
   Zen - Large State... █ 466.92K
   Zustand - Large S... █ 443.10K
   Zen - Large State... █ 435.41K
   Solid Signals - L... █ 369.70K
   Preact Signals - ... █ 367.47K
   Solid Signals - L... █ 321.78K
   Preact Signals - ... █ 320.18K
   Jotai - Large Sta... █ 125.43K
   Jotai - Large Sta... █ 87.26K
   Redux Toolkit - L... █ 24.84K
   Redux Toolkit - L... █ 13.41K
   MobX - Large Stat... █ 9.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen - Large State Read (1000 items)** | 49.83M | ±0.04% | 0.0000ms | 0.0000ms | 24.92M |
| 🥈 | **Preact Signals - Large State Read (1000 items)** | 39.29M | ±0.08% | 0.0000ms | 0.0000ms | 19.64M |
| 🥉 | **Solid Signals - Large State Read (1000 items)** | 38.56M | ±0.51% | 0.0000ms | 0.0000ms | 19.28M |
| 4 | **Zustand - Large State Read (1000 items)** | 32.94M | ±1.64% | 0.0000ms | 0.0000ms | 16.47M |
| 5 | **Redux Toolkit - Large State Read (1000 items)** | 29.36M | ±1.03% | 0.0000ms | 0.1000ms | 14.68M |
| 6 | **MobX - Large State Read (1000 items)** | 15.78M | ±3.14% | 0.1000ms | 0.1000ms | 7.89M |
| 7 | **Jotai - Large State Read (1000 items)** | 3.30M | ±2.66% | 0.3000ms | 0.4000ms | 1.65M |
| 8 | **Zustand - Large State Update (1000 items)** | 2.14M | ±1.85% | 0.5000ms | 1.6000ms | 1.07M |
| 9 | **MobX - Large State Update (1000 items)** | 1.82M | ±1.73% | 0.6000ms | 0.9000ms | 908.47K |
| 10 | **Zen - Large State Filter** | 466.92K | ±0.55% | 2.1000ms | 7.4000ms | 233.46K |
| 11 | **Zustand - Large State Filter** | 443.10K | ±0.70% | 2.3000ms | 7.7000ms | 221.55K |
| 12 | **Zen - Large State Update (1000 items)** | 435.41K | ±0.55% | 2.3000ms | 5.2000ms | 217.71K |
| 13 | **Solid Signals - Large State Filter** | 369.70K | ±0.63% | 2.7000ms | 8.7000ms | 184.85K |
| 14 | **Preact Signals - Large State Filter** | 367.47K | ±0.61% | 2.7000ms | 9.3000ms | 183.74K |
| 15 | **Solid Signals - Large State Update (1000 items)** | 321.78K | ±0.53% | 3.1000ms | 8.6000ms | 160.89K |
| 16 | **Preact Signals - Large State Update (1000 items)** | 320.18K | ±0.68% | 3.1000ms | 8.5000ms | 160.09K |
| 17 | **Jotai - Large State Filter** | 125.43K | ±4.64% | 8.0000ms | 27.8000ms | 62.71K |
| 18 | **Jotai - Large State Update (1000 items)** | 87.26K | ±4.69% | 11.5000ms | 40.2000ms | 43.63K |
| 19 | **Redux Toolkit - Large State Filter** | 24.84K | ±2.01% | 40.3000ms | 107.8000ms | 12.42K |
| 20 | **Redux Toolkit - Large State Update (1000 items)** | 13.41K | ±5.51% | 74.6000ms | 255.5000ms | 6.71K |
| 21 | **MobX - Large State Filter** | 9.61K | ±4.39% | 104.1000ms | 389.6000ms | 4.80K |

**Key Insight:** Zen - Large State Read (1000 items) is **5186.28x faster** than MobX - Large State Filter in this category.

### Form

**Performance Comparison:**

```
🥇 Zen - Conditional... ████████████████████████████████████████ 46.72M
🥈 Solid Signals - C... █████████████████████████████████ 39.07M
🥉 Preact Signals - ... █████████████████████████████████ 38.39M
   Zustand - Conditi... █████████████████████████████ 34.02M
   Zen - Full Form R... ███████████████████████████ 31.46M
   Solid Signals - F... ██████████████████████ 25.96M
   Preact Signals - ... ██████████████████████ 25.42M
   Zen - Single Fiel... ██████████████████ 20.52M
   Zen - Multiple Fi... ████████████████ 18.33M
   Zen - Nested Fiel... ███████████████ 17.03M
   Preact Signals - ... ██████████████ 16.80M
   Solid Signals - S... ██████████████ 16.51M
   Valtio - Conditio... ██████████████ 16.29M
   Solid Signals - M... ████████████ 14.57M
   Preact Signals - ... ████████████ 14.19M
   Preact Signals - ... ████████████ 13.90M
   Solid Signals - N... ████████████ 13.53M
   Zustand - Full Fo... ███████████ 12.82M
   Zustand - Single ... ███████████ 12.54M
   Zustand - Multipl... ████████ 9.63M
   Valtio - Single F... ████████ 9.29M
   Zustand - Nested ... ████████ 9.18M
   Valtio - Nested F... ███████ 7.63M
   MobX - Conditiona... █████ 5.31M
   MobX - Single Fie... ████ 4.84M
   Jotai - Condition... ███ 3.72M
   MobX - Nested Fie... ███ 3.36M
   Valtio - Multiple... █ 1.57M
   Jotai - Full Form... █ 1.23M
   MobX - Multiple F... █ 908.81K
   Jotai - Single Fi... █ 905.03K
   Jotai - Nested Fi... █ 877.14K
   Jotai - Multiple ... █ 799.94K
   Valtio - Full For... █ 65.19K
   MobX - Full Form ... █ 63.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zen - Conditional Field Update** | 46.72M | ±0.04% | 0.0000ms | 0.0000ms | 23.36M |
| 🥈 | **Solid Signals - Conditional Field Update** | 39.07M | ±0.08% | 0.0000ms | 0.0000ms | 19.53M |
| 🥉 | **Preact Signals - Conditional Field Update** | 38.39M | ±0.12% | 0.0000ms | 0.0000ms | 19.19M |
| 4 | **Zustand - Conditional Field Update** | 34.02M | ±0.59% | 0.0000ms | 0.0000ms | 17.01M |
| 5 | **Zen - Full Form Reset** | 31.46M | ±2.04% | 0.0000ms | 0.0000ms | 15.73M |
| 6 | **Solid Signals - Full Form Reset** | 25.96M | ±0.55% | 0.0000ms | 0.1000ms | 12.98M |
| 7 | **Preact Signals - Full Form Reset** | 25.42M | ±0.54% | 0.0000ms | 0.1000ms | 12.71M |
| 8 | **Zen - Single Field Update** | 20.52M | ±0.08% | 0.0000ms | 0.1000ms | 10.26M |
| 9 | **Zen - Multiple Fields Update (3 fields)** | 18.33M | ±0.28% | 0.1000ms | 0.1000ms | 9.16M |
| 10 | **Zen - Nested Field Update** | 17.03M | ±0.36% | 0.1000ms | 0.1000ms | 8.51M |
| 11 | **Preact Signals - Single Field Update** | 16.80M | ±0.26% | 0.1000ms | 0.1000ms | 8.40M |
| 12 | **Solid Signals - Single Field Update** | 16.51M | ±0.31% | 0.1000ms | 0.1000ms | 8.26M |
| 13 | **Valtio - Conditional Field Update** | 16.29M | ±8.37% | 0.1000ms | 0.1000ms | 8.15M |
| 14 | **Solid Signals - Multiple Fields Update (3 fields)** | 14.57M | ±0.55% | 0.1000ms | 0.1000ms | 7.29M |
| 15 | **Preact Signals - Multiple Fields Update (3 fields)** | 14.19M | ±0.48% | 0.1000ms | 0.1000ms | 7.09M |
| 16 | **Preact Signals - Nested Field Update** | 13.90M | ±0.67% | 0.1000ms | 0.1000ms | 6.95M |
| 17 | **Solid Signals - Nested Field Update** | 13.53M | ±0.67% | 0.1000ms | 0.1000ms | 6.76M |
| 18 | **Zustand - Full Form Reset** | 12.82M | ±7.25% | 0.1000ms | 0.2000ms | 6.41M |
| 19 | **Zustand - Single Field Update** | 12.54M | ±1.15% | 0.1000ms | 0.2000ms | 6.27M |
| 20 | **Zustand - Multiple Fields Update (3 fields)** | 9.63M | ±1.69% | 0.1000ms | 0.2000ms | 4.81M |
| 21 | **Valtio - Single Field Update** | 9.29M | ±0.85% | 0.1000ms | 0.2000ms | 4.64M |
| 22 | **Zustand - Nested Field Update** | 9.18M | ±0.09% | 0.1000ms | 0.2000ms | 4.59M |
| 23 | **Valtio - Nested Field Update** | 7.63M | ±4.95% | 0.1000ms | 0.2000ms | 3.81M |
| 24 | **MobX - Conditional Field Update** | 5.31M | ±2.44% | 0.2000ms | 0.3000ms | 2.65M |
| 25 | **MobX - Single Field Update** | 4.84M | ±1.91% | 0.2000ms | 0.3000ms | 2.42M |
| 26 | **Jotai - Conditional Field Update** | 3.72M | ±3.34% | 0.3000ms | 0.4000ms | 1.86M |
| 27 | **MobX - Nested Field Update** | 3.36M | ±2.02% | 0.3000ms | 0.5000ms | 1.68M |
| 28 | **Valtio - Multiple Fields Update (3 fields)** | 1.57M | ±2.26% | 0.6000ms | 1.0000ms | 786.24K |
| 29 | **Jotai - Full Form Reset** | 1.23M | ±3.07% | 0.8000ms | 1.2000ms | 614.14K |
| 30 | **MobX - Multiple Fields Update (3 fields)** | 908.81K | ±1.53% | 1.1000ms | 1.9000ms | 454.40K |
| 31 | **Jotai - Single Field Update** | 905.03K | ±2.69% | 1.1000ms | 2.3000ms | 452.51K |
| 32 | **Jotai - Nested Field Update** | 877.14K | ±2.25% | 1.1000ms | 2.0000ms | 438.57K |
| 33 | **Jotai - Multiple Fields Update (3 fields)** | 799.94K | ±3.17% | 1.3000ms | 2.3000ms | 399.97K |
| 34 | **Valtio - Full Form Reset** | 65.19K | ±36.13% | 15.3000ms | 28.0000ms | 32.59K |
| 35 | **MobX - Full Form Reset** | 63.56K | ±3.23% | 15.7000ms | 62.2000ms | 31.78K |

**Key Insight:** Zen - Conditional Field Update is **735.06x faster** than MobX - Full Form Reset in this category.

### Async Reactive

**Performance Comparison:**

```
🥇 Zustand - Async C... ████████████████████████████████████████ 878.17
🥈 Zustand - Async C... ████████████████████████████████████████ 873.52
🥉 Zustand - Complex... ████████████████████████████████████████ 871.91
   Redux Toolkit - A... ██████████████████████████████████████ 837.51
   Redux Toolkit - A... ██████████████████████████████████████ 831.26
   Redux Toolkit - C... ███████████████████████████████████ 770.55
   Zustand - Chained... ████████████████████ 438.44
   Redux Toolkit - C... ███████████████████ 424.43
   Redux Toolkit - C... ███████████████████ 419.32
   Zustand - Concurr... ███████████████████ 414.72
   Valtio - Complex ... ████ 91.81
   Preact Signals - ... ████ 91.64
   Valtio - Async Co... ████ 91.53
   Solid Signals - A... ████ 91.26
   Solid Signals - C... ████ 90.96
   MobX - Async Comp... ████ 90.87
   Preact Signals - ... ████ 90.83
   Solid Signals - A... ████ 90.80
   MobX - Complex As... ████ 90.78
   MobX - Async Comp... ████ 90.74
   Zen - Async Compu... ████ 90.68
   Solid Signals - C... ████ 90.67
   Valtio - Concurre... ████ 90.65
   Zen - Concurrent ... ████ 90.60
   Zen - Async Compu... ████ 90.33
   Preact Signals - ... ████ 90.32
   Zen - Complex Asy... ████ 89.89
   Preact Signals - ... ████ 89.86
   Valtio - Async Co... ████ 89.75
   MobX - Concurrent... ████ 89.23
   Jotai - Async Com... ████ 89.08
   Valtio - Chained ... ████ 88.79
   Solid Signals - C... ████ 88.64
   Preact Signals - ... ████ 88.34
   Jotai - Async Com... ████ 88.33
   Zen - Chained Asy... ████ 87.87
   Jotai - Complex A... ████ 87.70
   Jotai - Concurren... ████ 86.66
   Jotai - Chained A... ████ 85.67
   MobX - Chained As... ████ 77.82
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Zustand - Async Computed with Dependency Update** | 878.17 | ±1.80% | 1138.7000ms | 1364.0000ms | 440.00 |
| 🥈 | **Zustand - Async Computed Read** | 873.52 | ±1.38% | 1144.8000ms | 1336.9000ms | 437.00 |
| 🥉 | **Zustand - Complex Async Dependencies** | 871.91 | ±0.80% | 1146.9000ms | 1267.8000ms | 436.00 |
| 4 | **Redux Toolkit - Async Computed with Dependency Update** | 837.51 | ±1.27% | 1194.0000ms | 1400.9000ms | 419.00 |
| 5 | **Redux Toolkit - Async Computed Read** | 831.26 | ±2.34% | 1203.0000ms | 2056.9000ms | 416.00 |
| 6 | **Redux Toolkit - Complex Async Dependencies** | 770.55 | ±3.62% | 1297.8000ms | 3049.6000ms | 386.00 |
| 7 | **Zustand - Chained Async Computed** | 438.44 | ±1.06% | 2280.8000ms | 2463.8000ms | 220.00 |
| 8 | **Redux Toolkit - Concurrent Async Reads** | 424.43 | ±2.24% | 2356.1000ms | 4015.9000ms | 213.00 |
| 9 | **Redux Toolkit - Chained Async Computed** | 419.32 | ±1.68% | 2384.8000ms | 3098.2000ms | 210.00 |
| 10 | **Zustand - Concurrent Async Reads** | 414.72 | ±4.81% | 2411.3000ms | 5165.8000ms | 208.00 |
| 11 | **Valtio - Complex Async Dependencies** | 91.81 | ±0.83% | 10892.6000ms | 11198.4000ms | 46.00 |
| 12 | **Preact Signals - Async Computed Read** | 91.64 | ±0.90% | 10912.3000ms | 11107.3000ms | 46.00 |
| 13 | **Valtio - Async Computed with Dependency Update** | 91.53 | ±1.26% | 10925.8000ms | 13102.1000ms | 46.00 |
| 14 | **Solid Signals - Async Computed Read** | 91.26 | ±0.63% | 10958.2000ms | 11117.2000ms | 46.00 |
| 15 | **Solid Signals - Complex Async Dependencies** | 90.96 | ±0.74% | 10993.5000ms | 11295.5000ms | 46.00 |
| 16 | **MobX - Async Computed Read** | 90.87 | ±1.11% | 11005.0000ms | 11745.0000ms | 46.00 |
| 17 | **Preact Signals - Async Computed with Dependency Update** | 90.83 | ±0.50% | 11009.4000ms | 11184.2000ms | 46.00 |
| 18 | **Solid Signals - Async Computed with Dependency Update** | 90.80 | ±0.98% | 11012.8000ms | 11434.0000ms | 46.00 |
| 19 | **MobX - Complex Async Dependencies** | 90.78 | ±0.96% | 11016.0000ms | 12088.2000ms | 46.00 |
| 20 | **MobX - Async Computed with Dependency Update** | 90.74 | ±1.17% | 11020.0000ms | 12041.0000ms | 46.00 |
| 21 | **Zen - Async Computed Read** | 90.68 | ±0.64% | 11027.8000ms | 11336.7000ms | 46.00 |
| 22 | **Solid Signals - Concurrent Async Reads** | 90.67 | ±1.26% | 11029.4000ms | 11674.6000ms | 46.00 |
| 23 | **Valtio - Concurrent Async Reads** | 90.65 | ±1.49% | 11031.9000ms | 11822.5000ms | 46.00 |
| 24 | **Zen - Concurrent Async Reads** | 90.60 | ±1.44% | 11037.5000ms | 11742.5000ms | 46.00 |
| 25 | **Zen - Async Computed with Dependency Update** | 90.33 | ±0.73% | 11070.3000ms | 11563.8000ms | 46.00 |
| 26 | **Preact Signals - Complex Async Dependencies** | 90.32 | ±0.79% | 11072.0000ms | 11358.8000ms | 46.00 |
| 27 | **Zen - Complex Async Dependencies** | 89.89 | ±0.87% | 11124.3000ms | 11522.0000ms | 45.00 |
| 28 | **Preact Signals - Concurrent Async Reads** | 89.86 | ±1.36% | 11128.9000ms | 11822.0000ms | 45.00 |
| 29 | **Valtio - Async Computed Read** | 89.75 | ±1.37% | 11141.5000ms | 12957.7000ms | 45.00 |
| 30 | **MobX - Concurrent Async Reads** | 89.23 | ±1.90% | 11207.4000ms | 14202.3000ms | 45.00 |
| 31 | **Jotai - Async Computed Read** | 89.08 | ±2.26% | 11225.5000ms | 13679.1000ms | 45.00 |
| 32 | **Valtio - Chained Async Computed** | 88.79 | ±0.80% | 11262.6000ms | 12077.2000ms | 45.00 |
| 33 | **Solid Signals - Chained Async Computed** | 88.64 | ±0.72% | 11281.0000ms | 11599.1000ms | 45.00 |
| 34 | **Preact Signals - Chained Async Computed** | 88.34 | ±0.36% | 11320.2000ms | 11590.8000ms | 45.00 |
| 35 | **Jotai - Async Computed with Dependency Update** | 88.33 | ±2.56% | 11321.1000ms | 15919.3000ms | 45.00 |
| 36 | **Zen - Chained Async Computed** | 87.87 | ±0.68% | 11380.3000ms | 11868.8000ms | 44.00 |
| 37 | **Jotai - Complex Async Dependencies** | 87.70 | ±2.28% | 11402.2000ms | 14165.9000ms | 44.00 |
| 38 | **Jotai - Concurrent Async Reads** | 86.66 | ±2.69% | 11539.7000ms | 15371.5000ms | 44.00 |
| 39 | **Jotai - Chained Async Computed** | 85.67 | ±1.66% | 11673.2000ms | 14076.2000ms | 43.00 |
| 40 | **MobX - Chained Async Computed** | 77.82 | ±14.31% | 12850.1000ms | 32774.5000ms | 39.00 |

**Key Insight:** Zustand - Async Computed with Dependency Update is **11.28x faster** than MobX - Chained Async Computed in this category.

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

*Last generated: 2025-11-11T13:14:29.088Z*
