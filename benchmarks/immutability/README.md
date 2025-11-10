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
- **Last Run:** 6:12:12 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.8/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.8/100 | 78.0% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.0/100 | 74.2% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.3/100 | 44.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.6/100 | 33.8% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.4% |

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
🥇 Craft                ████████████████████████████████████████ 217.93K
🥈 Immer                █████████████████████ 112.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.93K | ±2.00% | 4.5887ms | 9.1170ms | 108.96K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.80K | ±1.61% | 8.8654ms | 25.7880ms | 56.40K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 938.28K
🥈 Immer                ██████ 130.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 938.28K | ±0.43% | 1.0658ms | 1.6730ms | 469.14K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.88K | ±1.48% | 7.6406ms | 16.9510ms | 65.44K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.10K
🥈 Immer                ██████████████ 60.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 175.10K | ±1.68% | 5.7109ms | 11.4720ms | 87.55K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.81K | ±1.58% | 16.4434ms | 30.1660ms | 30.41K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 736.48K
🥈 Mutative             ██████████████████████████ 479.27K
🥉 Immer                ██████████ 178.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 736.48K | ±1.56% | 1.3578ms | 2.9660ms | 368.24K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 479.27K | ±0.69% | 2.0865ms | 2.6850ms | 239.64K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.70K | ±0.94% | 5.5959ms | 9.6380ms | 89.35K |

**Key Insight:** Craft is **4.12x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.20M
🥈 Mutative             ██████████████ 426.86K
🥉 Immer                █████ 156.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.20M | ±0.41% | 0.8315ms | 1.1320ms | 601.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 426.86K | ±0.41% | 2.3427ms | 3.2060ms | 213.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.48K | ±0.69% | 6.3905ms | 15.1280ms | 78.24K |

**Key Insight:** Craft is **7.69x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 829.18K
🥈 Mutative             ██████████████████████ 446.03K
🥉 Immer                ████████ 168.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 829.18K | ±0.39% | 1.2060ms | 1.6130ms | 414.59K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 446.03K | ±0.41% | 2.2420ms | 3.7670ms | 223.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.70K | ±0.35% | 5.9278ms | 12.3230ms | 84.35K |

**Key Insight:** Craft is **4.92x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 809.82K
🥈 Mutative             ██████████████████████ 444.81K
🥉 Immer                █████████ 182.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 809.82K | ±0.43% | 1.2348ms | 1.6230ms | 404.91K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 444.81K | ±0.42% | 2.2481ms | 2.8450ms | 222.41K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.95K | ±0.37% | 5.4660ms | 7.0330ms | 91.47K |

**Key Insight:** Craft is **4.43x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.33K
🥈 Mutative             █████████████████████████████████ 150.69K
🥉 Immer                █████████████████ 79.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.33K | ±0.46% | 5.4547ms | 9.0570ms | 91.67K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.69K | ±0.48% | 6.6362ms | 10.2390ms | 75.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.18K | ±0.68% | 12.6293ms | 24.8360ms | 39.59K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.27K
🥈 Mutative             ██████████████ 76.09K
🥉 Immer                ██ 12.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.27K | ±0.40% | 4.4391ms | 5.8310ms | 112.64K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.09K | ±0.46% | 13.1427ms | 23.4930ms | 38.04K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 12.57K | ±0.36% | 79.5569ms | 101.5000ms | 6.29K |

**Key Insight:** Craft is **17.92x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.35K
🥈 Immer                █████████████ 70.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.35K | ±0.35% | 4.4572ms | 5.2300ms | 112.18K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.98K | ±0.27% | 14.0891ms | 24.7660ms | 35.49K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Immutability Helper  ████████████████████████████████████ 952.48K
🥉 Mutative             ███████████████████████████████████ 937.30K
   Craft                ███████████████████████████████████ 936.36K
   Immer                ██████████████████████████ 696.73K
   Seamless Immutable   █████ 128.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.20M | ±0.09% | 0.0981ms | 0.1200ms | 5.10M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.20% | 0.9427ms | 1.2720ms | 530.38K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 952.48K | ±0.24% | 1.0499ms | 1.4930ms | 476.24K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 937.30K | ±0.41% | 1.0669ms | 1.3930ms | 468.65K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 936.36K | ±2.66% | 1.0680ms | 2.7550ms | 468.18K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 696.73K | ±1.86% | 1.4353ms | 3.2260ms | 348.36K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.37K | ±0.36% | 7.7900ms | 14.1870ms | 64.19K |

**Key Insight:** Native Spread is **79.44x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 484.53K
🥈 Mutative             ████████████████████████████████ 392.53K
🥉 Craft                █████████████████████████ 305.26K
   Immutable.js         ██████████████████ 217.07K
   Immer                ████████████ 145.36K
   Seamless Immutable   ███ 37.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.47M | ±0.09% | 0.1181ms | 0.1400ms | 4.23M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 484.53K | ±0.71% | 2.0638ms | 2.6050ms | 242.27K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 392.53K | ±0.63% | 2.5476ms | 3.2960ms | 196.27K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 305.26K | ±3.55% | 3.2758ms | 6.5720ms | 152.63K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 217.07K | ±1.99% | 4.6068ms | 7.4540ms | 108.53K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 145.36K | ±2.20% | 6.8793ms | 13.3050ms | 72.68K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.40K | ±0.64% | 26.7388ms | 36.1380ms | 18.70K |

**Key Insight:** Native Spread is **226.47x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.75M
🥈 Immutability Helper  ███████████████████████████████ 1.38M
🥉 Craft                ████████████ 504.23K
   Mutative             █████████ 410.36K
   Immer                ██████ 276.13K
   Seamless Immutable   █ 60.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.98M | ±1.52% | 0.1113ms | 0.1400ms | 4.49M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.75M | ±0.75% | 0.5716ms | 0.9320ms | 874.77K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.38M | ±0.36% | 0.7271ms | 0.7820ms | 687.70K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 504.23K | ±0.77% | 1.9832ms | 2.4740ms | 252.12K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 410.36K | ±0.87% | 2.4369ms | 3.2160ms | 205.18K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 276.13K | ±0.85% | 3.6215ms | 7.5340ms | 138.06K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.92K | ±0.29% | 16.4146ms | 25.8570ms | 30.46K |

**Key Insight:** Native Spread is **147.48x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 826.76K
🥈 Immutability Helper  ████████████████████████████ 577.47K
🥉 Craft                ███████████████ 317.84K
   Mutative             ██████████ 216.78K
   Immer                ███████ 141.00K
   Seamless Immutable   ███ 60.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 9.28M | ±0.93% | 0.1077ms | 0.1300ms | 4.64M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 826.76K | ±0.59% | 1.2095ms | 1.6930ms | 413.38K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 577.47K | ±0.19% | 1.7317ms | 2.0240ms | 288.73K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 317.84K | ±0.31% | 3.1462ms | 3.8370ms | 158.92K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 216.78K | ±0.31% | 4.6130ms | 5.8610ms | 108.39K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.00K | ±0.40% | 7.0922ms | 12.7940ms | 70.50K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.89K | ±0.43% | 16.4236ms | 25.6480ms | 30.44K |

**Key Insight:** Native Filter is **152.44x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 494.05K
🥈 Mutative             ████████████████████████████████████ 440.22K
🥉 Immutability Helper  ████████████████████████████████ 395.72K
   Immer                ███████████████████████ 283.26K
   Immutable.js         ████████████████ 191.61K
   Seamless Immutable   ███ 31.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 7.93M | ±0.58% | 0.1261ms | 0.1410ms | 3.97M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 494.05K | ±0.56% | 2.0241ms | 2.5950ms | 247.02K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 440.22K | ±0.63% | 2.2716ms | 2.9450ms | 220.11K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 395.72K | ±0.29% | 2.5270ms | 4.0870ms | 197.86K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.26K | ±0.14% | 3.5304ms | 4.2480ms | 141.63K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 191.61K | ±0.34% | 5.2188ms | 6.4320ms | 95.81K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.35K | ±0.67% | 31.8992ms | 53.9510ms | 15.68K |

**Key Insight:** Native Map is **253.06x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 306.67K
🥈 Craft                ███████████████████████████████████ 265.84K
🥉 Mutative             ████████████████████████████ 215.27K
   Immutable.js         ███████████████████████ 172.91K
   Immer                █████████████ 99.46K
   Seamless Immutable   ███ 22.50K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.07M | ±0.61% | 0.1239ms | 0.1600ms | 4.04M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 306.67K | ±0.41% | 3.2609ms | 5.6510ms | 153.33K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 265.84K | ±0.43% | 3.7616ms | 4.9490ms | 132.92K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.27K | ±0.45% | 4.6453ms | 5.9810ms | 107.64K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 172.91K | ±0.46% | 5.7834ms | 7.2230ms | 86.45K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.46K | ±0.39% | 10.0546ms | 19.6970ms | 49.73K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.50K | ±0.37% | 44.4504ms | 54.7730ms | 11.25K |

**Key Insight:** Native Spread is **358.89x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 351.32K
🥈 Immer                ███ 29.81K
🥉 Craft                ███ 21.97K
   Immutability Helper  █ 6.47K
   Immutable.js         █ 724.53
   Seamless Immutable   █ 256.76
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 351.60K | ±0.66% | 2.8441ms | 3.5570ms | 175.80K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 351.32K | ±0.76% | 2.8464ms | 3.7470ms | 175.66K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.81K | ±0.51% | 33.5446ms | 44.6830ms | 14.91K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.97K | ±0.43% | 45.5262ms | 55.2730ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.47K | ±0.40% | 154.6598ms | 172.7320ms | 3.23K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 724.53 | ±1.25% | 1380.1999ms | 1926.7580ms | 363.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 256.76 | ±0.64% | 3894.7553ms | 4417.2180ms | 129.00 |

**Key Insight:** Native Map is **1369.40x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 272.22K
🥈 Craft                ███████████████████████████████████████ 266.84K
🥉 Mutative             ████████████████████████████ 190.20K
   Immutable.js         ███████████████████████ 159.19K
   Immer                ███████████████████ 126.07K
   Seamless Immutable   ███ 18.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 5.89M | ±0.78% | 0.1697ms | 0.2110ms | 2.95M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 272.22K | ±0.45% | 3.6735ms | 4.4180ms | 136.11K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 266.84K | ±0.51% | 3.7476ms | 6.7630ms | 133.42K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 190.20K | ±0.53% | 5.2577ms | 11.7120ms | 95.10K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 159.19K | ±0.62% | 6.2819ms | 7.4430ms | 79.59K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.07K | ±0.57% | 7.9323ms | 15.7990ms | 63.03K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.87K | ±0.49% | 53.0008ms | 73.3870ms | 9.43K |

**Key Insight:** Native Spread is **312.32x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T18:15:32.598Z*
