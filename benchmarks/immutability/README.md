# Immutability Benchmark 🔄

Comprehensive performance testing of JavaScript immutability libraries and patterns.

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

- **Last Updated:** November 11, 2025
- **Last Run:** 12:09:00 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
| **[immer](https://github.com/immerjs/immer)** | `v10.2.0` | 4.70KB | Nov 6, 2025 | ✅ Latest |
| **[immutability-helper](https://github.com/kolodny/immutability-helper)** | `v3.1.1` | 1.65KB | Nov 6, 2025 | ✅ Latest |
| **[immutable](https://github.com/immutable-js/immutable-js)** | `v5.1.4` | 17.74KB | Nov 6, 2025 | ✅ Latest |
| **[mutative](https://github.com/unadlib/mutative)** | `v1.3.0` | 7.16KB | Nov 6, 2025 | ✅ Latest |
| **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | `v7.1.4` | 2.71KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[immutability-helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 4.68KB | Baseline |
| 🥈 | **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 7.55KB | 1.64x |
| 🥉 | **[@sylphx/craft](https://github.com/sylphxltd/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.5/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.2/100 | 77.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.0/100 | 74.5% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.7/100 | 43.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.2/100 | 33.4% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.8/100 | 5.2% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/sylphxltd/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/sylphxltd/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/sylphxltd/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/sylphxltd/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [JSON Patches - Generate](#json-patches-generate)
- [JSON Patches - Apply](#json-patches-apply)
- [JSON Patches - Roundtrip](#json-patches-roundtrip)
- [Map - Set Operation](#map-set-operation)
- [Map - Update Nested Value](#map-update-nested-value)
- [Set - Add Operation](#set-add-operation)
- [Set - Delete Operation](#set-delete-operation)
- [Map - Large (100 items)](#map-large-100-items)
- [Set - Large (100 items)](#set-large-100-items)
- [Undo/Redo - Inverse Patches](#undoredo-inverse-patches)
- [Simple Object Update](#simple-object-update)
- [Nested Object Update](#nested-object-update)
- [Array Push](#array-push)
- [Array Remove](#array-remove)
- [Array Update](#array-update)
- [Deep Nested Update (5 levels)](#deep-nested-update-5-levels)
- [Large Array Update (1000 items)](#large-array-update-1000-items)
- [Multiple Updates (3 changes)](#multiple-updates-3-changes)

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 217.60K
🥈 Immer                █████████████████████ 113.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.60K | ±1.94% | 4.5956ms | 9.1270ms | 108.80K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.30K | ±1.51% | 8.8263ms | 19.0050ms | 56.65K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 993.96K
🥈 Immer                █████ 131.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 993.96K | ±0.41% | 1.0061ms | 1.7040ms | 496.98K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.35K | ±1.53% | 7.6134ms | 14.9980ms | 65.67K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.25K
🥈 Immer                ██████████████ 60.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.25K | ±1.72% | 5.6418ms | 11.0010ms | 88.63K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.72K | ±1.47% | 16.4686ms | 33.5030ms | 30.36K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 748.83K
🥈 Mutative             █████████████████████████ 469.36K
🥉 Immer                █████████ 176.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 748.83K | ±1.67% | 1.3354ms | 3.0160ms | 374.41K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 469.36K | ±0.68% | 2.1306ms | 2.7960ms | 234.68K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.73K | ±0.94% | 5.6583ms | 8.9160ms | 88.37K |

**Key Insight:** Craft is **4.24x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             ██████████████ 430.99K
🥉 Immer                █████ 154.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.66% | 0.7895ms | 1.1420ms | 633.32K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 430.99K | ±0.42% | 2.3203ms | 2.7450ms | 215.49K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 154.16K | ±0.35% | 6.4867ms | 13.9860ms | 77.08K |

**Key Insight:** Craft is **8.22x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 866.56K
🥈 Mutative             █████████████████████ 448.76K
🥉 Immer                ████████ 167.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 866.56K | ±0.38% | 1.1540ms | 1.4830ms | 433.28K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.76K | ±0.39% | 2.2284ms | 2.6250ms | 224.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.72K | ±0.54% | 5.9622ms | 11.2810ms | 83.86K |

**Key Insight:** Craft is **5.17x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 838.42K
🥈 Mutative             █████████████████████ 442.66K
🥉 Immer                █████████ 183.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 838.42K | ±0.38% | 1.1927ms | 1.5220ms | 419.21K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 442.66K | ±0.41% | 2.2591ms | 2.6950ms | 221.33K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.53K | ±0.34% | 5.4488ms | 7.7340ms | 91.76K |

**Key Insight:** Craft is **4.57x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 186.63K
🥈 Mutative             ████████████████████████████████ 149.51K
🥉 Immer                █████████████████ 79.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 186.63K | ±0.52% | 5.3583ms | 7.4940ms | 93.31K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.51K | ±0.53% | 6.6886ms | 12.6240ms | 74.76K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.55K | ±0.48% | 12.5711ms | 22.9520ms | 39.77K |

**Key Insight:** Craft is **2.35x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.17K
🥈 Mutative             █████████████ 74.93K
🥉 Immer                ██ 13.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.17K | ±0.45% | 4.4020ms | 5.3000ms | 113.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 74.93K | ±0.51% | 13.3454ms | 23.5240ms | 37.47K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.56K | ±0.39% | 73.7660ms | 97.3410ms | 6.78K |

**Key Insight:** Craft is **16.76x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.39K
🥈 Immer                █████████████ 72.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.39K | ±0.41% | 4.4367ms | 5.4200ms | 112.70K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.23K | ±0.28% | 13.8448ms | 24.3550ms | 36.12K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Mutative             █████████████████████████████████████ 1.00M
🥉 Immutability Helper  █████████████████████████████████████ 993.94K
   Craft                ███████████████████████████████████ 946.24K
   Immer                ██████████████████████████ 685.47K
   Seamless Immutable   █████ 128.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.69M | ±0.09% | 0.0681ms | 0.0900ms | 7.35M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.10% | 0.9311ms | 1.1720ms | 536.99K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 1.00M | ±0.20% | 0.9950ms | 1.2120ms | 502.50K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 993.94K | ±0.41% | 1.0061ms | 1.4320ms | 496.97K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 946.24K | ±2.66% | 1.0568ms | 2.6850ms | 473.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 685.47K | ±2.33% | 1.4589ms | 3.1860ms | 342.74K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.72K | ±0.33% | 7.7691ms | 10.4990ms | 64.36K |

**Key Insight:** Native Spread is **114.15x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 496.06K
🥈 Mutative             ███████████████████████████████ 384.33K
🥉 Craft                ██████████████████████████ 323.73K
   Immutable.js         ██████████████████ 228.87K
   Immer                ████████████ 150.68K
   Seamless Immutable   ███ 37.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.67M | ±0.12% | 0.0857ms | 0.1300ms | 5.84M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 496.06K | ±0.29% | 2.0159ms | 2.3640ms | 248.03K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 384.33K | ±1.33% | 2.6019ms | 5.3200ms | 192.17K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 323.73K | ±2.77% | 3.0890ms | 6.4620ms | 161.87K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 228.87K | ±0.42% | 4.3692ms | 8.8660ms | 114.44K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 150.68K | ±2.19% | 6.6364ms | 13.0950ms | 75.34K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.75K | ±0.30% | 26.4910ms | 36.2380ms | 18.88K |

**Key Insight:** Native Spread is **309.22x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.85M
🥈 Immutability Helper  ██████████████████████████████ 1.40M
🥉 Craft                ███████████ 516.56K
   Mutative             █████████ 428.49K
   Immer                ██████ 284.68K
   Seamless Immutable   █ 62.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.78M | ±0.95% | 0.0849ms | 0.1200ms | 5.89M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.85M | ±0.46% | 0.5412ms | 0.8710ms | 923.84K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.48% | 0.7146ms | 0.8520ms | 699.73K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 516.56K | ±0.40% | 1.9359ms | 2.3250ms | 258.28K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 428.49K | ±0.42% | 2.3338ms | 2.7550ms | 214.25K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 284.68K | ±0.49% | 3.5127ms | 4.2580ms | 142.34K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.08K | ±0.46% | 16.1084ms | 25.8480ms | 31.04K |

**Key Insight:** Native Spread is **189.71x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 811.68K
🥈 Immutability Helper  █████████████████████████████ 582.28K
🥉 Craft                ███████████████ 312.93K
   Mutative             ███████████ 214.56K
   Immer                ███████ 142.38K
   Seamless Immutable   ███ 58.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.67M | ±0.69% | 0.0789ms | 0.1110ms | 6.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 811.68K | ±0.86% | 1.2320ms | 1.5730ms | 405.84K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 582.28K | ±0.21% | 1.7174ms | 2.0640ms | 291.14K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 312.93K | ±0.60% | 3.1956ms | 3.5770ms | 156.47K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 214.56K | ±0.68% | 4.6608ms | 9.1470ms | 107.28K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.38K | ±0.72% | 7.0233ms | 14.0560ms | 71.19K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 58.62K | ±2.58% | 17.0598ms | 33.7630ms | 29.31K |

**Key Insight:** Native Filter is **216.15x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 486.15K
🥈 Mutative             █████████████████████████████████████ 455.23K
🥉 Immutability Helper  █████████████████████████████████ 395.36K
   Immer                ███████████████████████ 278.87K
   Immutable.js         ███████████████ 180.17K
   Seamless Immutable   ███ 31.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.55M | ±0.64% | 0.0866ms | 0.1300ms | 5.77M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 486.15K | ±0.32% | 2.0570ms | 3.3960ms | 243.07K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 455.23K | ±0.62% | 2.1967ms | 2.7860ms | 227.61K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 395.36K | ±0.44% | 2.5294ms | 4.8200ms | 197.68K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 278.87K | ±0.58% | 3.5859ms | 6.9130ms | 139.44K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 180.17K | ±0.36% | 5.5503ms | 6.4920ms | 90.08K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.34K | ±0.29% | 31.9123ms | 42.7090ms | 15.67K |

**Key Insight:** Native Map is **368.52x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 312.19K
🥈 Craft                ██████████████████████████████████ 266.88K
🥉 Mutative             ████████████████████████████ 218.11K
   Immutable.js         ██████████████████████ 172.22K
   Immer                █████████████ 98.96K
   Seamless Immutable   ███ 22.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.08M | ±0.70% | 0.1101ms | 0.1600ms | 4.54M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 312.19K | ±0.44% | 3.2032ms | 3.5670ms | 156.09K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 266.88K | ±0.49% | 3.7470ms | 5.0990ms | 133.44K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 218.11K | ±0.47% | 4.5847ms | 5.1700ms | 109.06K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.22K | ±0.49% | 5.8065ms | 6.9230ms | 86.11K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.96K | ±0.46% | 10.1050ms | 19.7170ms | 49.48K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.41K | ±0.39% | 44.6140ms | 56.1640ms | 11.21K |

**Key Insight:** Native Spread is **405.16x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 360.04K
🥈 Immer                ███ 29.68K
🥉 Craft                ██ 22.00K
   Immutability Helper  █ 6.37K
   Immutable.js         █ 689.39
   Seamless Immutable   █ 247.81
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 360.04K | ±0.82% | 2.7775ms | 3.4160ms | 180.02K |
| 🥈 | **Native Map** | 347.76K | ±0.72% | 2.8755ms | 3.4460ms | 173.88K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.68K | ±0.66% | 33.6884ms | 44.3930ms | 14.84K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.00K | ±0.58% | 45.4641ms | 54.1510ms | 11.00K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.37K | ±0.62% | 157.0871ms | 214.2980ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 689.39 | ±1.16% | 1450.5645ms | 1997.3570ms | 345.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 247.81 | ±0.79% | 4035.3027ms | 4674.1400ms | 124.00 |

**Key Insight:** Mutative is **1452.88x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.52K
🥈 Craft                ██████████████████████████████████████ 263.50K
🥉 Mutative             ████████████████████████████ 195.04K
   Immutable.js         ███████████████████████ 157.99K
   Immer                ██████████████████ 125.89K
   Seamless Immutable   ███ 18.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.34M | ±1.13% | 0.1577ms | 0.1810ms | 3.17M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.52K | ±0.44% | 3.6034ms | 4.0080ms | 138.76K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 263.50K | ±0.53% | 3.7951ms | 4.3080ms | 131.75K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 195.04K | ±0.69% | 5.1271ms | 6.0510ms | 97.52K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 157.99K | ±0.67% | 6.3296ms | 9.8790ms | 78.99K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.89K | ±0.57% | 7.9436ms | 15.9100ms | 62.95K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.62K | ±0.68% | 53.6996ms | 64.7510ms | 9.31K |

**Key Insight:** Native Spread is **340.42x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T00:17:13.188Z*
