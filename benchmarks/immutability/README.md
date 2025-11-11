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
- **Last Run:** 1:24:02 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.4/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.2/100 | 77.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.3/100 | 74.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 43.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.7/100 | 33.7% |
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
🥇 Craft                ████████████████████████████████████████ 219.50K
🥈 Immer                ████████████████████ 111.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 219.50K | ±1.97% | 4.5559ms | 9.1070ms | 109.75K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.88K | ±1.59% | 8.9378ms | 25.3680ms | 55.94K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 991.34K
🥈 Immer                █████ 129.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 991.34K | ±0.17% | 1.0087ms | 1.5130ms | 495.67K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.12K | ±1.55% | 7.7448ms | 17.4730ms | 64.56K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.50K
🥈 Immer                ██████████████ 60.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.50K | ±1.52% | 5.7308ms | 11.7110ms | 87.25K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.95K | ±1.64% | 16.4064ms | 29.8860ms | 30.48K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 730.19K
🥈 Mutative             ██████████████████████████ 471.66K
🥉 Immer                ██████████ 177.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 730.19K | ±1.56% | 1.3695ms | 3.0350ms | 365.10K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 471.66K | ±0.66% | 2.1202ms | 3.4470ms | 235.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.49K | ±0.96% | 5.6340ms | 8.8660ms | 88.75K |

**Key Insight:** Craft is **4.11x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.21M
🥈 Mutative             ██████████████ 431.41K
🥉 Immer                █████ 158.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.21M | ±0.45% | 0.8277ms | 1.1520ms | 604.09K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 431.41K | ±0.42% | 2.3180ms | 2.7060ms | 215.71K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 158.39K | ±0.41% | 6.3134ms | 13.6050ms | 79.20K |

**Key Insight:** Craft is **7.63x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 840.29K
🥈 Mutative             █████████████████████ 450.12K
🥉 Immer                ████████ 167.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 840.29K | ±0.39% | 1.1901ms | 1.5130ms | 420.14K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 450.12K | ±0.39% | 2.2216ms | 2.8550ms | 225.06K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.80K | ±0.33% | 5.9594ms | 8.5160ms | 83.90K |

**Key Insight:** Craft is **5.01x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 804.74K
🥈 Mutative             ██████████████████████ 440.37K
🥉 Immer                █████████ 181.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 804.74K | ±0.48% | 1.2426ms | 1.5830ms | 402.37K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 440.37K | ±0.56% | 2.2708ms | 2.9350ms | 220.19K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.19K | ±0.39% | 5.5191ms | 7.8150ms | 90.59K |

**Key Insight:** Craft is **4.44x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.86K
🥈 Mutative             █████████████████████████████████ 145.54K
🥉 Immer                ██████████████████ 78.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.86K | ±0.46% | 5.6223ms | 8.2650ms | 88.93K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 145.54K | ±0.45% | 6.8711ms | 10.7700ms | 72.77K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.00K | ±0.72% | 12.8204ms | 24.2960ms | 39.00K |

**Key Insight:** Craft is **2.28x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.21K
🥈 Mutative             ██████████████ 76.83K
🥉 Immer                ██ 13.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.21K | ±0.44% | 4.4013ms | 7.1830ms | 113.60K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.83K | ±0.47% | 13.0153ms | 22.6620ms | 38.42K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.77K | ±0.38% | 72.6260ms | 87.5640ms | 6.88K |

**Key Insight:** Craft is **16.50x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.89K
🥈 Immer                █████████████ 72.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.89K | ±0.39% | 4.4073ms | 5.1500ms | 113.45K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.08K | ±0.75% | 13.8733ms | 24.6760ms | 36.04K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.05M
🥈 Immutability Helper  ██████████████████████████████████████ 999.25K
🥉 Mutative             █████████████████████████████████████ 971.37K
   Craft                ████████████████████████████████████ 957.89K
   Immer                ███████████████████████████ 708.28K
   Seamless Immutable   █████ 127.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.44M | ±0.10% | 0.0692ms | 0.1100ms | 7.22M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.05M | ±0.16% | 0.9485ms | 1.4930ms | 527.16K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 999.25K | ±0.36% | 1.0007ms | 1.2430ms | 499.63K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 971.37K | ±0.48% | 1.0295ms | 1.2920ms | 485.69K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 957.89K | ±2.38% | 1.0440ms | 2.6350ms | 478.95K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 708.28K | ±1.80% | 1.4119ms | 3.2260ms | 354.14K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.82K | ±0.28% | 7.8236ms | 16.2700ms | 63.91K |

**Key Insight:** Native Spread is **113.00x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 484.95K
🥈 Mutative             █████████████████████████████████ 394.92K
🥉 Craft                █████████████████████████████ 348.04K
   Immutable.js         ███████████████████ 234.28K
   Immer                █████████████ 154.06K
   Seamless Immutable   ███ 37.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.74M | ±0.21% | 0.0852ms | 0.1200ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 484.95K | ±0.75% | 2.0621ms | 3.7170ms | 242.48K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 394.92K | ±0.82% | 2.5322ms | 2.9850ms | 197.46K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 348.04K | ±2.92% | 2.8733ms | 4.8090ms | 174.02K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 234.28K | ±0.76% | 4.2684ms | 5.3600ms | 117.14K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.06K | ±2.06% | 6.4909ms | 11.8620ms | 77.03K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.55K | ±0.59% | 26.6289ms | 36.0480ms | 18.78K |

**Key Insight:** Native Spread is **312.53x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.78M
🥈 Immutability Helper  ███████████████████████████████ 1.37M
🥉 Craft                ███████████ 501.67K
   Mutative             █████████ 408.43K
   Immer                ██████ 277.90K
   Seamless Immutable   █ 60.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.34M | ±0.94% | 0.0810ms | 0.1200ms | 6.17M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.78M | ±0.90% | 0.5613ms | 0.8410ms | 890.84K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±1.46% | 0.7323ms | 0.8010ms | 682.80K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 501.67K | ±1.21% | 1.9934ms | 2.6950ms | 250.83K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 408.43K | ±0.81% | 2.4484ms | 4.2270ms | 204.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 277.90K | ±0.89% | 3.5984ms | 7.5440ms | 138.95K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.67K | ±1.46% | 16.4832ms | 25.3170ms | 30.33K |

**Key Insight:** Native Spread is **203.45x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 802.11K
🥈 Immutability Helper  █████████████████████████████ 582.97K
🥉 Craft                ████████████████ 319.68K
   Mutative             ███████████ 220.71K
   Immer                ███████ 143.21K
   Seamless Immutable   ███ 61.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.15M | ±1.17% | 0.0823ms | 0.1100ms | 6.07M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 802.11K | ±0.69% | 1.2467ms | 1.5930ms | 401.06K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 582.97K | ±0.22% | 1.7153ms | 2.1340ms | 291.49K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 319.68K | ±0.32% | 3.1281ms | 3.8370ms | 159.84K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 220.71K | ±0.43% | 4.5309ms | 5.4500ms | 110.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.21K | ±0.53% | 6.9830ms | 12.5640ms | 71.60K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.12K | ±0.51% | 16.3617ms | 29.5550ms | 30.56K |

**Key Insight:** Native Filter is **198.75x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 498.92K
🥈 Mutative             ████████████████████████████████████ 452.94K
🥉 Immutability Helper  ████████████████████████████████ 400.81K
   Immer                ███████████████████████ 283.78K
   Immutable.js         ███████████████ 182.48K
   Seamless Immutable   ███ 31.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.40M | ±0.95% | 0.0877ms | 0.1210ms | 5.70M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 498.92K | ±0.75% | 2.0043ms | 2.5150ms | 249.46K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 452.94K | ±0.79% | 2.2078ms | 2.6150ms | 226.47K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.81K | ±0.39% | 2.4949ms | 2.9450ms | 200.41K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.78K | ±0.30% | 3.5238ms | 4.3190ms | 141.89K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 182.48K | ±1.07% | 5.4801ms | 7.7750ms | 91.24K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.38K | ±0.68% | 31.8683ms | 49.9730ms | 15.69K |

**Key Insight:** Native Map is **363.17x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 311.83K
🥈 Craft                ██████████████████████████████████ 267.37K
🥉 Mutative             ████████████████████████████ 214.61K
   Immutable.js         █████████████████████ 167.55K
   Immer                █████████████ 98.82K
   Seamless Immutable   ███ 22.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.90M | ±0.82% | 0.1123ms | 0.1600ms | 4.45M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 311.83K | ±0.50% | 3.2069ms | 3.6170ms | 155.91K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 267.37K | ±0.46% | 3.7402ms | 4.1780ms | 133.68K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 214.61K | ±0.55% | 4.6596ms | 5.4500ms | 107.31K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 167.55K | ±0.49% | 5.9683ms | 6.8930ms | 83.78K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.82K | ±0.63% | 10.1195ms | 19.9770ms | 49.41K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.52K | ±0.42% | 44.4108ms | 54.5320ms | 11.26K |

**Key Insight:** Native Spread is **395.29x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 356.38K
🥈 Immer                ███ 29.59K
🥉 Craft                ██ 21.90K
   Immutability Helper  █ 6.36K
   Immutable.js         █ 721.53
   Seamless Immutable   █ 253.20
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 356.38K | ±0.82% | 2.8060ms | 4.9090ms | 178.19K |
| 🥈 | **Native Map** | 326.37K | ±0.81% | 3.0640ms | 3.6660ms | 163.18K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.59K | ±0.59% | 33.7959ms | 44.6130ms | 14.79K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.90K | ±0.67% | 45.6602ms | 59.3810ms | 10.95K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.36K | ±0.71% | 157.3139ms | 189.5250ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 721.53 | ±1.22% | 1385.9408ms | 1963.9040ms | 361.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 253.20 | ±0.84% | 3949.5100ms | 4680.0670ms | 127.00 |

**Key Insight:** Mutative is **1407.54x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.14K
🥈 Craft                ███████████████████████████████████████ 272.71K
🥉 Mutative             █████████████████████████████ 198.95K
   Immutable.js         ███████████████████████ 161.06K
   Immer                ██████████████████ 127.74K
   Seamless Immutable   ███ 18.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.18M | ±1.33% | 0.1618ms | 0.1900ms | 3.09M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.14K | ±0.58% | 3.6083ms | 5.2100ms | 138.57K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 272.71K | ±0.60% | 3.6669ms | 4.1280ms | 136.35K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 198.95K | ±0.75% | 5.0265ms | 6.3020ms | 99.47K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.06K | ±0.74% | 6.2090ms | 9.2380ms | 80.53K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.74K | ±0.64% | 7.8284ms | 15.2680ms | 63.87K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.95K | ±0.67% | 52.7712ms | 63.7900ms | 9.47K |

**Key Insight:** Native Spread is **326.09x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T01:28:24.557Z*
