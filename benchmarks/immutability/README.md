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

- **Last Updated:** November 10, 2025
- **Last Run:** 6:41:36 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 10, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.2/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.0/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.1/100 | 73.9% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.6/100 | 43.2% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.5% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

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
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

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
🥇 Craft                ████████████████████████████████████████ 213.06K
🥈 Immer                █████████████████████ 113.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 213.06K | ±1.96% | 4.6936ms | 9.2670ms | 106.53K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.80K | ±1.51% | 8.7876ms | 19.2360ms | 56.90K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 978.61K
🥈 Immer                █████ 129.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 978.61K | ±0.44% | 1.0219ms | 1.6630ms | 489.31K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.84K | ±1.59% | 7.7019ms | 17.0820ms | 64.92K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 173.63K
🥈 Immer                ██████████████ 60.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 173.63K | ±1.71% | 5.7593ms | 10.9000ms | 86.82K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.10K | ±1.51% | 16.6398ms | 34.3550ms | 30.05K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 744.14K
🥈 Mutative             ██████████████████████████ 480.25K
🥉 Immer                ██████████ 177.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 744.14K | ±1.69% | 1.3438ms | 2.9750ms | 372.07K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 480.25K | ±0.39% | 2.0822ms | 2.4850ms | 240.13K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.35K | ±0.96% | 5.6384ms | 11.5220ms | 88.68K |

**Key Insight:** Craft is **4.20x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             ██████████████ 431.54K
🥉 Immer                █████ 159.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.62% | 0.7886ms | 1.1620ms | 634.00K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 431.54K | ±0.40% | 2.3173ms | 2.7550ms | 215.77K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.19K | ±0.30% | 6.2818ms | 14.0960ms | 79.59K |

**Key Insight:** Craft is **7.97x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 864.82K
🥈 Mutative             █████████████████████ 448.87K
🥉 Immer                ████████ 167.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 864.82K | ±0.37% | 1.1563ms | 1.4830ms | 432.41K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.87K | ±0.41% | 2.2278ms | 2.6350ms | 224.44K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.97K | ±0.55% | 5.9534ms | 10.8710ms | 83.99K |

**Key Insight:** Craft is **5.15x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 853.58K
🥈 Mutative             █████████████████████ 445.58K
🥉 Immer                █████████ 185.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 853.58K | ±0.36% | 1.1715ms | 1.4630ms | 426.79K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.58K | ±0.40% | 2.2443ms | 2.6550ms | 222.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 185.51K | ±0.36% | 5.3906ms | 8.6360ms | 92.75K |

**Key Insight:** Craft is **4.60x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.82K
🥈 Mutative             █████████████████████████████████ 150.65K
🥉 Immer                ██████████████████ 81.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.82K | ±0.52% | 5.4401ms | 7.6240ms | 91.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.65K | ±0.51% | 6.6380ms | 10.2100ms | 75.33K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 81.57K | ±0.47% | 12.2590ms | 22.8230ms | 40.79K |

**Key Insight:** Craft is **2.25x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.38K
🥈 Mutative             █████████████ 75.23K
🥉 Immer                ██ 13.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.38K | ±0.45% | 4.4568ms | 5.8010ms | 112.19K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.23K | ±0.48% | 13.2923ms | 22.6620ms | 37.62K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.55K | ±0.30% | 73.7816ms | 90.6090ms | 6.78K |

**Key Insight:** Craft is **16.55x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.33K
🥈 Immer                █████████████ 71.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.33K | ±0.43% | 4.4978ms | 5.2490ms | 111.17K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.26K | ±0.27% | 14.0336ms | 24.6760ms | 35.63K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 998.36K
🥉 Mutative             █████████████████████████████████████ 997.52K
   Craft                ████████████████████████████████████ 948.55K
   Immer                ███████████████████████████ 711.11K
   Seamless Immutable   █████ 130.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.69M | ±0.09% | 0.0681ms | 0.0900ms | 7.35M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.11% | 0.9363ms | 1.1730ms | 534.02K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 998.36K | ±0.33% | 1.0016ms | 1.1630ms | 499.18K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 997.52K | ±0.41% | 1.0025ms | 1.3220ms | 498.76K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 948.55K | ±2.51% | 1.0542ms | 2.6960ms | 474.28K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 711.11K | ±1.65% | 1.4063ms | 3.2360ms | 355.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 130.88K | ±0.22% | 7.6406ms | 11.0100ms | 65.44K |

**Key Insight:** Native Spread is **112.27x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 489.21K
🥈 Mutative             ████████████████████████████████ 394.90K
🥉 Craft                ████████████████████████████ 342.65K
   Immutable.js         ███████████████████ 234.60K
   Immer                █████████████ 155.09K
   Seamless Immutable   ███ 38.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.72M | ±0.14% | 0.0853ms | 0.1200ms | 5.86M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 489.21K | ±0.35% | 2.0441ms | 2.4350ms | 244.60K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 394.90K | ±0.71% | 2.5323ms | 4.9100ms | 197.45K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 342.65K | ±2.56% | 2.9184ms | 5.4400ms | 171.33K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 234.60K | ±0.21% | 4.2626ms | 4.9400ms | 117.30K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 155.09K | ±1.84% | 6.4479ms | 11.6020ms | 77.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 38.09K | ±0.29% | 26.2529ms | 35.8070ms | 19.05K |

**Key Insight:** Native Spread is **307.75x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.72M
🥈 Immutability Helper  ████████████████████████████████ 1.38M
🥉 Craft                ████████████ 504.17K
   Mutative             ██████████ 425.52K
   Immer                ██████ 272.92K
   Seamless Immutable   █ 63.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.71M | ±1.04% | 0.0854ms | 0.1100ms | 5.85M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.72M | ±0.44% | 0.5803ms | 0.8110ms | 861.64K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.38M | ±0.46% | 0.7225ms | 0.8020ms | 692.00K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 504.17K | ±0.47% | 1.9835ms | 2.3340ms | 252.08K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 425.52K | ±0.43% | 2.3501ms | 3.0350ms | 212.76K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 272.92K | ±0.41% | 3.6641ms | 4.6490ms | 136.46K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 63.05K | ±0.43% | 15.8604ms | 25.2370ms | 31.53K |

**Key Insight:** Native Spread is **185.67x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 802.28K
🥈 Immutability Helper  ████████████████████████████ 571.11K
🥉 Craft                ████████████████ 317.39K
   Mutative             ███████████ 219.09K
   Immer                ███████ 138.76K
   Seamless Immutable   ███ 61.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.74M | ±0.69% | 0.0785ms | 0.1100ms | 6.37M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 802.28K | ±0.88% | 1.2465ms | 1.9340ms | 401.14K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 571.11K | ±0.21% | 1.7510ms | 2.3040ms | 285.56K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 317.39K | ±0.41% | 3.1507ms | 3.7970ms | 158.69K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 219.09K | ±0.40% | 4.5644ms | 5.2190ms | 109.55K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 138.76K | ±0.59% | 7.2069ms | 15.4990ms | 69.38K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.07K | ±0.55% | 16.3737ms | 25.6980ms | 30.54K |

**Key Insight:** Native Filter is **208.55x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 498.19K
🥈 Mutative             █████████████████████████████████████ 462.84K
🥉 Immutability Helper  ████████████████████████████████ 400.77K
   Immer                ██████████████████████ 276.63K
   Immutable.js         ██████████████ 178.42K
   Seamless Immutable   ███ 31.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.25M | ±1.07% | 0.0889ms | 0.1200ms | 5.62M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 498.19K | ±0.44% | 2.0073ms | 2.4040ms | 249.09K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 462.84K | ±0.48% | 2.1606ms | 2.5350ms | 231.42K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.77K | ±0.19% | 2.4952ms | 3.0360ms | 200.38K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 276.63K | ±0.18% | 3.6150ms | 4.7380ms | 138.31K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 178.42K | ±0.49% | 5.6048ms | 6.5820ms | 89.21K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.99K | ±0.43% | 31.2639ms | 41.6880ms | 15.99K |

**Key Insight:** Native Map is **351.69x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 312.73K
🥈 Craft                ███████████████████████████████████ 271.11K
🥉 Mutative             ████████████████████████████ 216.91K
   Immutable.js         ██████████████████████ 169.11K
   Immer                █████████████ 98.52K
   Seamless Immutable   ███ 22.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.72M | ±0.90% | 0.1147ms | 0.1410ms | 4.36M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 312.73K | ±0.54% | 3.1976ms | 3.9980ms | 156.37K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.11K | ±0.59% | 3.6885ms | 4.3780ms | 135.56K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.91K | ±0.66% | 4.6102ms | 5.4700ms | 108.46K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 169.11K | ±0.67% | 5.9133ms | 7.0330ms | 84.59K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.52K | ±0.59% | 10.1498ms | 19.6270ms | 49.26K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.60K | ±0.50% | 44.2382ms | 54.2810ms | 11.30K |

**Key Insight:** Native Spread is **385.81x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 371.50K
🥈 Immer                ███ 29.79K
🥉 Craft                ██ 21.95K
   Immutability Helper  █ 6.36K
   Immutable.js         █ 689.94
   Seamless Immutable   █ 254.24
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 371.50K | ±0.65% | 2.6918ms | 4.0570ms | 185.75K |
| 🥈 | **Native Map** | 354.20K | ±0.57% | 2.8233ms | 3.3670ms | 177.10K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.79K | ±0.44% | 33.5738ms | 43.8520ms | 14.89K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.95K | ±0.42% | 45.5485ms | 56.8560ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.36K | ±0.45% | 157.1462ms | 215.3020ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 689.94 | ±0.93% | 1449.3932ms | 1860.4680ms | 346.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.24 | ±0.85% | 3933.2660ms | 5036.1950ms | 128.00 |

**Key Insight:** Mutative is **1461.22x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.20K
🥈 Craft                ████████████████████████████████████████ 276.29K
🥉 Mutative             █████████████████████████████ 201.06K
   Immutable.js         ███████████████████████ 161.23K
   Immer                ██████████████████ 126.86K
   Seamless Immutable   ███ 19.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.57M | ±0.78% | 0.1523ms | 0.1900ms | 3.28M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.20K | ±0.42% | 3.5817ms | 4.0980ms | 139.60K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 276.29K | ±0.39% | 3.6194ms | 4.2980ms | 138.14K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 201.06K | ±0.44% | 4.9736ms | 5.8210ms | 100.53K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.23K | ±0.45% | 6.2024ms | 7.4940ms | 80.61K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.86K | ±0.43% | 7.8829ms | 15.2280ms | 63.43K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.24K | ±0.32% | 51.9818ms | 65.1310ms | 9.62K |

**Key Insight:** Native Spread is **341.38x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T18:48:00.390Z*
