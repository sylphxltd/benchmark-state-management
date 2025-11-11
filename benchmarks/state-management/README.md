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
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **@preact/signals** | `v2.4.0` | 3.04KB | Nov 7, 2025 | ✅ Latest |
| **@reduxjs/toolkit** | `v2.10.1` | 13.83KB | Dec 6, 2024 | ✅ Latest |
| **@sylphx/zen** | `v1.2.1` | 5.35KB | Nov 7, 2025 | ✅ Latest |
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

## Group Results Summary

Click on any group to view detailed benchmark results.

### [Read Operations](groups/01-read/README.md)

Simple read and high-frequency read patterns

**[View Detailed Results →](groups/01-read/README.md)**

---

### [Write Operations](groups/02-write/README.md)

Simple increments and burst updates

**[View Detailed Results →](groups/02-write/README.md)**

---

### [Store Creation](groups/03-creation/README.md)

Instance creation overhead

**[View Detailed Results →](groups/03-creation/README.md)**

---

### [Complexity](groups/04-complexity/README.md)

Deep nested state

**[View Detailed Results →](groups/04-complexity/README.md)**

---

### [Memory Allocation](groups/06-memory/README.md)

Large state allocation performance

**[View Detailed Results →](groups/06-memory/README.md)**

---

### [Form State](groups/07-form/README.md)

Multi-field updates

*No results available*

**[View Detailed Results →](groups/07-form/README.md)**

---

### [Reactive Async](groups/08-async-reactive/README.md)

Async atoms/computations

*No results available*

**[View Detailed Results →](groups/08-async-reactive/README.md)**

---

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

*Last generated: 2025-11-11T08:58:54.683Z*
