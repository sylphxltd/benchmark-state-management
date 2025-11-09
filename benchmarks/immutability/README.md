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

- **Last Updated:** November 9, 2025
- **Last Run:** 6:43:04 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 9, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.7/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.1/100 | 74.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.1/100 | 42.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.3/100 | 33.4% |
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
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |

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
🥇 Craft                ████████████████████████████████████████ 211.39K
🥈 Immer                █████████████████████ 112.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 211.39K | ±2.33% | 4.7307ms | 9.3070ms | 105.72K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.67K | ±1.89% | 8.8756ms | 18.8150ms | 56.33K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 958.77K
🥈 Immer                █████ 128.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 958.77K | ±0.19% | 1.0430ms | 1.6740ms | 479.39K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.88K | ±1.76% | 7.7590ms | 17.9530ms | 64.44K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 173.30K
🥈 Immer                ██████████████ 59.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 173.30K | ±1.87% | 5.7704ms | 11.3510ms | 86.65K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.62K | ±1.86% | 16.7738ms | 31.6190ms | 29.81K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 736.60K
🥈 Mutative             ██████████████████████████ 472.17K
🥉 Immer                █████████ 171.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 736.60K | ±1.81% | 1.3576ms | 2.9460ms | 368.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 472.17K | ±0.75% | 2.1179ms | 3.0060ms | 236.08K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 171.92K | ±1.15% | 5.8167ms | 10.5900ms | 85.96K |

**Key Insight:** Craft is **4.28x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.23M
🥈 Mutative             ██████████████ 423.94K
🥉 Immer                █████ 156.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.23M | ±0.62% | 0.8148ms | 1.2020ms | 613.64K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 423.94K | ±0.56% | 2.3588ms | 2.8860ms | 211.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.95K | ±0.78% | 6.3715ms | 10.2500ms | 78.47K |

**Key Insight:** Craft is **7.82x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 867.75K
🥈 Mutative             █████████████████████ 445.27K
🥉 Immer                ████████ 166.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 867.75K | ±0.49% | 1.1524ms | 1.5430ms | 433.87K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.27K | ±0.61% | 2.2458ms | 3.0060ms | 222.64K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 166.42K | ±0.50% | 6.0090ms | 9.1470ms | 83.21K |

**Key Insight:** Craft is **5.21x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 843.07K
🥈 Mutative             █████████████████████ 448.52K
🥉 Immer                █████████ 180.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 843.07K | ±0.57% | 1.1861ms | 1.5530ms | 421.54K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.52K | ±0.49% | 2.2296ms | 2.7550ms | 224.26K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.53K | ±0.55% | 5.5394ms | 7.0030ms | 90.26K |

**Key Insight:** Craft is **4.67x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 180.31K
🥈 Mutative             █████████████████████████████████ 147.70K
🥉 Immer                █████████████████ 75.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 180.31K | ±0.52% | 5.5459ms | 8.2360ms | 90.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 147.70K | ±0.51% | 6.7705ms | 11.4620ms | 73.85K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 75.21K | ±0.74% | 13.2959ms | 25.9790ms | 37.61K |

**Key Insight:** Craft is **2.40x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.51K
🥈 Mutative             ██████████████ 76.25K
🥉 Immer                ██ 13.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.51K | ±0.55% | 4.4343ms | 5.9810ms | 112.76K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.25K | ±0.54% | 13.1149ms | 22.7220ms | 38.13K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.67K | ±0.46% | 73.1354ms | 116.6880ms | 6.84K |

**Key Insight:** Craft is **16.49x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.90K
🥈 Immer                █████████████ 70.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.90K | ±0.48% | 4.4862ms | 5.2700ms | 111.45K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.08K | ±0.60% | 14.2686ms | 25.1870ms | 35.04K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  ██████████████████████████████████████ 1.02M
🥉 Mutative             █████████████████████████████████████ 985.22K
   Craft                ████████████████████████████████████ 974.40K
   Immer                ██████████████████████████ 711.19K
   Seamless Immutable   █████ 127.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.78M | ±0.09% | 0.0676ms | 0.0900ms | 7.39M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.14% | 0.9309ms | 1.0930ms | 537.12K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.02M | ±0.33% | 0.9826ms | 1.0720ms | 508.84K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 985.22K | ±0.39% | 1.0150ms | 1.2830ms | 492.61K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 974.40K | ±2.65% | 1.0263ms | 2.6550ms | 487.20K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 711.19K | ±1.83% | 1.4061ms | 3.1360ms | 355.60K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.16K | ±0.28% | 7.8638ms | 13.8960ms | 63.58K |

**Key Insight:** Native Spread is **116.26x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 510.41K
🥈 Mutative             ███████████████████████████████ 400.32K
🥉 Craft                ██████████████████████████ 332.82K
   Immutable.js         ████████████████ 208.07K
   Immer                ████████████ 148.12K
   Seamless Immutable   ███ 37.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.76M | ±0.09% | 0.0850ms | 0.1310ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 510.41K | ±0.61% | 1.9592ms | 3.4670ms | 255.20K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 400.32K | ±0.59% | 2.4980ms | 3.2170ms | 200.16K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 332.82K | ±3.10% | 3.0046ms | 5.5210ms | 166.41K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 208.07K | ±1.96% | 4.8060ms | 8.5960ms | 104.04K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 148.12K | ±2.02% | 6.7512ms | 16.4000ms | 74.06K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.80K | ±0.52% | 26.4528ms | 38.4720ms | 18.90K |

**Key Insight:** Native Spread is **311.07x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.80M
🥈 Immutability Helper  ███████████████████████████████ 1.40M
🥉 Craft                ███████████ 513.55K
   Mutative             █████████ 416.90K
   Immer                ██████ 281.35K
   Seamless Immutable   █ 61.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.94M | ±1.32% | 0.0838ms | 0.1200ms | 5.97M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.80M | ±0.69% | 0.5544ms | 0.7110ms | 901.86K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.73% | 0.7154ms | 0.7610ms | 698.91K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 513.55K | ±0.64% | 1.9472ms | 2.3550ms | 256.78K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 416.90K | ±0.79% | 2.3987ms | 2.7760ms | 208.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.35K | ±0.77% | 3.5543ms | 5.7700ms | 140.67K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.02K | ±0.79% | 16.3871ms | 25.6580ms | 30.51K |

**Key Insight:** Native Spread is **195.66x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 839.99K
🥈 Immutability Helper  ███████████████████████████ 576.63K
🥉 Craft                ███████████████ 322.99K
   Mutative             ███████████ 220.50K
   Immer                ███████ 141.82K
   Seamless Immutable   ███ 60.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.77M | ±0.69% | 0.0783ms | 0.1100ms | 6.39M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 839.99K | ±0.70% | 1.1905ms | 1.5930ms | 420.00K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 576.63K | ±0.18% | 1.7342ms | 1.9140ms | 288.31K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 322.99K | ±0.25% | 3.0961ms | 3.6970ms | 161.50K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 220.50K | ±0.26% | 4.5351ms | 5.2600ms | 110.25K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.82K | ±0.65% | 7.0513ms | 15.3890ms | 70.91K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.92K | ±0.55% | 16.4151ms | 27.6010ms | 30.46K |

**Key Insight:** Native Filter is **209.62x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 500.83K
🥈 Mutative             █████████████████████████████████████ 463.51K
🥉 Immutability Helper  ████████████████████████████████ 397.88K
   Immer                ██████████████████████ 279.16K
   Immutable.js         ███████████████ 182.90K
   Seamless Immutable   ██ 30.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.70M | ±0.62% | 0.0855ms | 0.1210ms | 5.85M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 500.83K | ±0.32% | 1.9967ms | 2.5050ms | 250.41K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 463.51K | ±0.61% | 2.1574ms | 2.6050ms | 231.76K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 397.88K | ±0.43% | 2.5133ms | 4.2790ms | 198.94K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 279.16K | ±0.76% | 3.5822ms | 7.1730ms | 139.58K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 182.90K | ±0.36% | 5.4674ms | 6.3420ms | 91.45K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 30.97K | ±0.31% | 32.2843ms | 43.0800ms | 15.49K |

**Key Insight:** Native Map is **377.64x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 303.72K
🥈 Craft                ██████████████████████████████████ 261.83K
🥉 Mutative             ████████████████████████████ 216.27K
   Immutable.js         ██████████████████████ 166.24K
   Immer                █████████████ 97.46K
   Seamless Immutable   ███ 21.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.83M | ±1.01% | 0.1133ms | 0.1700ms | 4.41M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 303.72K | ±0.85% | 3.2925ms | 4.2390ms | 151.86K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 261.83K | ±0.48% | 3.8193ms | 4.6990ms | 130.91K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.27K | ±0.56% | 4.6239ms | 5.4400ms | 108.13K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 166.24K | ±0.91% | 6.0155ms | 11.4820ms | 83.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.46K | ±0.49% | 10.2602ms | 19.5770ms | 48.73K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.35K | ±0.69% | 46.8353ms | 92.6430ms | 10.68K |

**Key Insight:** Native Spread is **413.45x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 343.68K
🥈 Immer                ███ 29.77K
🥉 Craft                ███ 21.99K
   Immutability Helper  █ 6.28K
   Immutable.js         █ 646.13
   Seamless Immutable   █ 248.62
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 347.16K | ±0.83% | 2.8805ms | 3.5070ms | 173.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 343.68K | ±0.93% | 2.9097ms | 3.4970ms | 171.84K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.77K | ±0.78% | 33.5943ms | 43.8020ms | 14.88K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.99K | ±0.69% | 45.4683ms | 53.9610ms | 11.00K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.28K | ±0.80% | 159.3512ms | 282.2090ms | 3.14K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 646.13 | ±1.77% | 1547.6755ms | 2454.4190ms | 324.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 248.62 | ±0.96% | 4022.2526ms | 4823.7680ms | 125.00 |

**Key Insight:** Native Map is **1396.36x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 268.79K
🥈 Craft                █████████████████████████████████████ 250.58K
🥉 Mutative             █████████████████████████████ 195.93K
   Immutable.js         ███████████████████████ 155.04K
   Immer                ███████████████████ 124.92K
   Seamless Immutable   ███ 18.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.27M | ±1.62% | 0.1594ms | 0.1810ms | 3.14M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 268.79K | ±0.95% | 3.7204ms | 4.3790ms | 134.39K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 250.58K | ±1.05% | 3.9907ms | 4.7490ms | 125.29K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 195.93K | ±0.99% | 5.1038ms | 5.8710ms | 97.97K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 155.04K | ±1.11% | 6.4500ms | 9.3380ms | 77.52K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 124.92K | ±0.92% | 8.0052ms | 14.8770ms | 62.46K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.47K | ±0.88% | 54.1418ms | 74.7700ms | 9.24K |

**Key Insight:** Native Spread is **339.60x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T21:20:28.729Z*
