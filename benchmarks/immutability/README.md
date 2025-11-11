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
- **Last Run:** 12:00:31 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.3/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.7/100 | 78.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.4/100 | 74.2% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.2/100 | 43.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 25.1/100 | 34.2% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.5% |

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
🥇 Craft                ████████████████████████████████████████ 213.10K
🥈 Immer                █████████████████████ 113.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 213.10K | ±2.27% | 4.6925ms | 9.4280ms | 106.55K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.90K | ±1.74% | 8.7796ms | 19.6570ms | 56.95K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 928.24K
🥈 Immer                ██████ 130.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 928.24K | ±0.42% | 1.0773ms | 1.6830ms | 464.12K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.03K | ±1.64% | 7.6907ms | 17.5320ms | 65.01K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 171.90K
🥈 Immer                ██████████████ 60.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 171.90K | ±1.78% | 5.8173ms | 11.4720ms | 85.95K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.59K | ±1.71% | 16.5050ms | 31.1180ms | 30.29K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 712.51K
🥈 Mutative             ██████████████████████████ 470.36K
🥉 Immer                ██████████ 178.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 712.51K | ±1.77% | 1.4035ms | 3.1160ms | 356.26K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 470.36K | ±0.72% | 2.1260ms | 2.8750ms | 235.18K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.02K | ±1.03% | 5.6175ms | 9.0570ms | 89.01K |

**Key Insight:** Craft is **4.00x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.18M
🥈 Mutative             ██████████████ 419.42K
🥉 Immer                █████ 156.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.18M | ±0.48% | 0.8485ms | 1.2430ms | 589.27K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 419.42K | ±0.47% | 2.3842ms | 3.0060ms | 209.71K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.64K | ±0.49% | 6.3840ms | 11.7910ms | 78.32K |

**Key Insight:** Craft is **7.52x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 806.36K
🥈 Mutative             ██████████████████████ 449.90K
🥉 Immer                ████████ 167.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 806.36K | ±0.50% | 1.2401ms | 1.7340ms | 403.18K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.90K | ±0.53% | 2.2227ms | 2.7650ms | 224.95K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 167.06K | ±0.53% | 5.9859ms | 10.6600ms | 83.53K |

**Key Insight:** Craft is **4.83x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 800.21K
🥈 Mutative             ██████████████████████ 444.41K
🥉 Immer                █████████ 182.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 800.21K | ±0.44% | 1.2497ms | 1.6230ms | 400.11K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 444.41K | ±0.56% | 2.2502ms | 2.8250ms | 222.21K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.43K | ±0.52% | 5.4814ms | 9.4880ms | 91.22K |

**Key Insight:** Craft is **4.39x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 182.20K
🥈 Mutative             █████████████████████████████████ 148.59K
🥉 Immer                █████████████████ 78.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 182.20K | ±0.50% | 5.4885ms | 8.4250ms | 91.10K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.59K | ±0.47% | 6.7299ms | 12.2120ms | 74.30K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.85K | ±0.68% | 12.6824ms | 24.2050ms | 39.42K |

**Key Insight:** Craft is **2.31x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.65K
🥈 Mutative             ██████████████ 75.70K
🥉 Immer                ██ 13.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.65K | ±0.45% | 4.4914ms | 5.9110ms | 111.33K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.70K | ±0.50% | 13.2095ms | 23.1530ms | 37.85K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.68K | ±0.39% | 73.1203ms | 96.7000ms | 6.84K |

**Key Insight:** Craft is **16.28x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.29K
🥈 Immer                █████████████ 69.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.29K | ±0.38% | 4.4985ms | 5.9310ms | 111.15K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.72K | ±0.55% | 14.3429ms | 27.9020ms | 34.86K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.05M
🥈 Immutability Helper  █████████████████████████████████████ 978.86K
🥉 Mutative             ████████████████████████████████████ 955.70K
   Craft                ████████████████████████████████████ 937.78K
   Immer                ██████████████████████████ 682.60K
   Seamless Immutable   █████ 128.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.64M | ±0.09% | 0.0683ms | 0.0900ms | 7.32M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.05M | ±0.11% | 0.9491ms | 1.3820ms | 526.83K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 978.86K | ±0.51% | 1.0216ms | 1.2630ms | 489.43K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 955.70K | ±0.69% | 1.0464ms | 1.7230ms | 477.85K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 937.78K | ±2.92% | 1.0663ms | 2.6950ms | 468.89K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 682.60K | ±1.96% | 1.4650ms | 3.2460ms | 341.30K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.65K | ±0.32% | 7.7731ms | 13.8950ms | 64.33K |

**Key Insight:** Native Spread is **113.78x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 477.09K
🥈 Mutative             █████████████████████████████████ 390.76K
🥉 Craft                █████████████████████████████ 340.81K
   Immutable.js         ███████████████████ 227.76K
   Immer                █████████████ 155.87K
   Seamless Immutable   ███ 37.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.76M | ±0.17% | 0.0850ms | 0.1200ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 477.09K | ±0.87% | 2.0960ms | 2.5940ms | 238.55K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 390.76K | ±0.70% | 2.5591ms | 4.4280ms | 195.38K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 340.81K | ±3.31% | 2.9342ms | 4.8090ms | 170.41K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 227.76K | ±0.82% | 4.3906ms | 6.1920ms | 113.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 155.87K | ±2.10% | 6.4157ms | 11.3720ms | 77.94K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.67K | ±1.00% | 26.5487ms | 41.3170ms | 18.83K |

**Key Insight:** Native Spread is **312.28x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.70M
🥈 Immutability Helper  ███████████████████████████████ 1.33M
🥉 Craft                ████████████ 496.28K
   Mutative             ██████████ 418.24K
   Immer                ███████ 278.92K
   Seamless Immutable   █ 59.71K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.88M | ±2.35% | 0.0919ms | 0.1210ms | 5.44M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.70M | ±0.94% | 0.5889ms | 0.8410ms | 849.00K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.33M | ±1.80% | 0.7522ms | 0.7920ms | 664.70K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 496.28K | ±1.15% | 2.0150ms | 2.5340ms | 248.14K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 418.24K | ±1.14% | 2.3910ms | 2.9660ms | 209.12K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.92K | ±1.37% | 3.5852ms | 4.2680ms | 139.46K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.71K | ±1.36% | 16.7476ms | 25.9780ms | 29.86K |

**Key Insight:** Native Spread is **182.30x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 789.14K
🥈 Immutability Helper  █████████████████████████████ 578.63K
🥉 Craft                ████████████████ 313.92K
   Mutative             ███████████ 217.12K
   Immer                ███████ 143.04K
   Seamless Immutable   ███ 60.02K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.21M | ±1.14% | 0.0819ms | 0.1100ms | 6.10M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 789.14K | ±0.63% | 1.2672ms | 1.6730ms | 394.57K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.63K | ±0.19% | 1.7282ms | 1.8630ms | 289.31K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 313.92K | ±0.47% | 3.1856ms | 3.9670ms | 156.96K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.12K | ±0.50% | 4.6058ms | 5.8110ms | 108.56K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.04K | ±0.51% | 6.9911ms | 14.9080ms | 71.52K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.02K | ±0.47% | 16.6608ms | 26.4590ms | 30.01K |

**Key Insight:** Native Filter is **203.35x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 488.55K
🥈 Mutative             ████████████████████████████████████ 441.97K
🥉 Immutability Helper  ████████████████████████████████ 393.39K
   Immer                ███████████████████████ 286.18K
   Immutable.js         ███████████████ 180.99K
   Seamless Immutable   ███ 31.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.31M | ±0.91% | 0.0884ms | 0.1400ms | 5.66M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 488.55K | ±0.88% | 2.0469ms | 2.5350ms | 244.27K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 441.97K | ±0.91% | 2.2626ms | 2.8750ms | 220.99K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 393.39K | ±0.43% | 2.5420ms | 3.1460ms | 196.69K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 286.18K | ±0.33% | 3.4943ms | 4.5680ms | 143.09K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 180.99K | ±0.79% | 5.5253ms | 9.2870ms | 90.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.24K | ±0.99% | 32.0136ms | 44.4530ms | 15.62K |

**Key Insight:** Native Map is **362.14x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 311.62K
🥈 Craft                ██████████████████████████████████ 267.29K
🥉 Mutative             ███████████████████████████ 208.34K
   Immutable.js         ███████████████████████ 175.56K
   Immer                █████████████ 98.09K
   Seamless Immutable   ███ 22.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.11M | ±0.49% | 0.1097ms | 0.1700ms | 4.56M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 311.62K | ±0.36% | 3.2091ms | 3.8870ms | 155.81K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 267.29K | ±0.54% | 3.7412ms | 4.4880ms | 133.65K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 208.34K | ±0.63% | 4.7997ms | 7.4940ms | 104.17K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 175.56K | ±0.77% | 5.6959ms | 12.1330ms | 87.78K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.09K | ±0.47% | 10.1947ms | 19.7170ms | 49.05K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.49K | ±0.39% | 44.4663ms | 78.2650ms | 11.24K |

**Key Insight:** Native Spread is **405.29x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 358.41K
🥈 Immer                ███ 29.90K
🥉 Craft                ██ 21.81K
   Immutability Helper  █ 6.38K
   Immutable.js         █ 690.69
   Seamless Immutable   █ 256.80
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 358.41K | ±0.65% | 2.7901ms | 3.5570ms | 179.21K |
| 🥈 | **Native Map** | 346.14K | ±0.57% | 2.8890ms | 4.2880ms | 173.07K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.90K | ±0.53% | 33.4401ms | 43.3310ms | 14.95K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.81K | ±0.49% | 45.8436ms | 56.1240ms | 10.91K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.38K | ±0.49% | 156.8409ms | 185.3950ms | 3.19K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 690.69 | ±1.29% | 1447.8179ms | 1980.6240ms | 346.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 256.80 | ±0.68% | 3894.0586ms | 4444.5760ms | 129.00 |

**Key Insight:** Mutative is **1395.69x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 271.48K
🥈 Craft                ███████████████████████████████████████ 264.98K
🥉 Mutative             █████████████████████████████ 199.04K
   Immutable.js         ████████████████████████ 162.94K
   Immer                ██████████████████ 125.26K
   Seamless Immutable   ███ 19.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.49M | ±0.98% | 0.1542ms | 0.2000ms | 3.24M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 271.48K | ±0.50% | 3.6835ms | 4.3480ms | 135.74K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 264.98K | ±0.55% | 3.7739ms | 4.4390ms | 132.49K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.04K | ±0.57% | 5.0240ms | 6.3220ms | 99.52K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 162.94K | ±0.57% | 6.1372ms | 9.0760ms | 81.47K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.26K | ±0.63% | 7.9837ms | 16.0500ms | 62.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.12K | ±0.63% | 52.3112ms | 78.3960ms | 9.56K |

**Key Insight:** Native Spread is **339.34x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T00:09:00.343Z*
