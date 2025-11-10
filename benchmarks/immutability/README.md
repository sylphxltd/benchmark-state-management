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
- **Last Run:** 3:05:40 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.3/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.6/100 | 78.6% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.3/100 | 74.1% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.8/100 | 43.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.8/100 | 33.8% |
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
🥇 Craft                ████████████████████████████████████████ 216.54K
🥈 Immer                █████████████████████ 111.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.54K | ±1.88% | 4.6181ms | 9.3180ms | 108.27K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.00K | ±1.85% | 9.0091ms | 25.1370ms | 55.50K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 942.10K
🥈 Immer                ██████ 131.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 942.10K | ±0.46% | 1.0615ms | 1.3420ms | 471.05K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.08K | ±1.49% | 7.6288ms | 16.0800ms | 65.54K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.63K
🥈 Immer                ██████████████ 60.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.63K | ±1.58% | 5.7265ms | 11.1000ms | 87.31K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.23K | ±1.51% | 16.6038ms | 34.3440ms | 30.11K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 731.11K
🥈 Mutative             ██████████████████████████ 479.27K
🥉 Immer                ██████████ 177.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 731.11K | ±1.58% | 1.3678ms | 2.8560ms | 365.55K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 479.27K | ±0.41% | 2.0865ms | 2.6050ms | 239.64K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.10K | ±0.91% | 5.6466ms | 11.2710ms | 88.55K |

**Key Insight:** Craft is **4.13x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.20M
🥈 Mutative             ██████████████ 425.34K
🥉 Immer                █████ 159.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.20M | ±0.57% | 0.8315ms | 1.2830ms | 601.35K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 425.34K | ±0.40% | 2.3511ms | 2.9950ms | 212.67K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.08K | ±0.37% | 6.2860ms | 11.0200ms | 79.54K |

**Key Insight:** Craft is **7.56x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 836.16K
🥈 Mutative             ██████████████████████ 452.47K
🥉 Immer                ████████ 166.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 836.16K | ±0.36% | 1.1959ms | 1.5220ms | 418.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 452.47K | ±0.40% | 2.2101ms | 2.7250ms | 226.24K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 166.79K | ±0.79% | 5.9955ms | 12.3730ms | 83.40K |

**Key Insight:** Craft is **5.01x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 828.13K
🥈 Mutative             ██████████████████████ 449.20K
🥉 Immer                █████████ 185.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 828.13K | ±0.37% | 1.2075ms | 1.5130ms | 414.06K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.20K | ±0.36% | 2.2262ms | 2.7060ms | 224.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 185.07K | ±0.32% | 5.4034ms | 8.0150ms | 92.53K |

**Key Insight:** Craft is **4.47x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.15K
🥈 Mutative             █████████████████████████████████ 149.09K
🥉 Immer                █████████████████ 79.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.15K | ±0.51% | 5.4600ms | 8.6460ms | 91.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.09K | ±0.51% | 6.7075ms | 10.9000ms | 74.54K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.63K | ±0.51% | 12.5580ms | 23.1030ms | 39.82K |

**Key Insight:** Craft is **2.30x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.74K
🥈 Mutative             ██████████████ 77.22K
🥉 Immer                ██ 13.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.74K | ±0.46% | 4.4103ms | 5.6810ms | 113.37K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.22K | ±0.49% | 12.9508ms | 22.2620ms | 38.61K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.51K | ±0.32% | 74.0039ms | 92.4030ms | 6.76K |

**Key Insight:** Craft is **16.78x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.38K
🥈 Immer                █████████████ 72.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.38K | ±0.36% | 4.4174ms | 5.1400ms | 113.19K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.63K | ±0.28% | 13.7688ms | 24.3250ms | 36.31K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.04M
🥈 Craft                █████████████████████████████████████ 970.10K
🥉 Immutability Helper  █████████████████████████████████████ 961.38K
   Mutative             ████████████████████████████████████ 941.69K
   Immer                ██████████████████████████ 687.66K
   Seamless Immutable   █████ 126.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.40M | ±0.10% | 0.0695ms | 0.1000ms | 7.20M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.04M | ±0.14% | 0.9612ms | 1.1320ms | 520.19K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 970.10K | ±2.46% | 1.0308ms | 2.6450ms | 485.05K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 961.38K | ±0.34% | 1.0402ms | 1.2020ms | 480.69K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 941.69K | ±0.38% | 1.0619ms | 1.3630ms | 470.85K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 687.66K | ±1.86% | 1.4542ms | 3.2670ms | 343.83K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 126.80K | ±0.27% | 7.8867ms | 15.2290ms | 63.40K |

**Key Insight:** Native Spread is **113.54x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 521.68K
🥈 Mutative             ███████████████████████████████ 401.02K
🥉 Craft                ██████████████████████████ 344.18K
   Immutable.js         ██████████████████ 231.98K
   Immer                ████████████ 154.27K
   Seamless Immutable   ███ 37.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.72M | ±0.55% | 0.0854ms | 0.1200ms | 5.86M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 521.68K | ±0.35% | 1.9169ms | 2.2740ms | 260.84K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 401.02K | ±0.75% | 2.4936ms | 4.3780ms | 200.51K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 344.18K | ±2.35% | 2.9055ms | 5.2590ms | 172.09K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 231.98K | ±0.36% | 4.3108ms | 5.2890ms | 115.99K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.27K | ±1.91% | 6.4822ms | 11.4810ms | 77.14K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.39K | ±0.48% | 26.7459ms | 46.0760ms | 18.70K |

**Key Insight:** Native Spread is **313.36x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.71M
🥈 Immutability Helper  █████████████████████████████████ 1.41M
🥉 Craft                ████████████ 499.97K
   Mutative             ██████████ 428.46K
   Immer                ███████ 278.89K
   Seamless Immutable   █ 61.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.96M | ±0.68% | 0.0836ms | 0.1110ms | 5.98M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.71M | ±0.59% | 0.5832ms | 1.1120ms | 857.32K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.30% | 0.7101ms | 0.7720ms | 704.12K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 499.97K | ±0.33% | 2.0001ms | 2.3950ms | 249.99K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 428.46K | ±0.38% | 2.3339ms | 2.7150ms | 214.23K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.89K | ±0.38% | 3.5857ms | 6.2610ms | 139.44K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.76K | ±0.28% | 16.1927ms | 25.6480ms | 30.88K |

**Key Insight:** Native Spread is **193.70x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 814.79K
🥈 Immutability Helper  ████████████████████████████ 578.56K
🥉 Craft                ███████████████ 315.39K
   Mutative             ███████████ 220.10K
   Immer                ███████ 143.11K
   Seamless Immutable   ███ 60.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.35M | ±1.09% | 0.0810ms | 0.1100ms | 6.18M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 814.79K | ±0.60% | 1.2273ms | 1.5930ms | 407.39K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.56K | ±0.23% | 1.7284ms | 1.8240ms | 289.28K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 315.39K | ±0.30% | 3.1707ms | 3.5360ms | 157.69K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 220.10K | ±0.27% | 4.5433ms | 5.2500ms | 110.05K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.11K | ±0.30% | 6.9876ms | 12.0220ms | 71.56K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.68K | ±0.34% | 16.4803ms | 26.1690ms | 30.34K |

**Key Insight:** Native Filter is **203.56x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 487.98K
🥈 Mutative             ██████████████████████████████████████ 461.41K
🥉 Immutability Helper  █████████████████████████████████ 397.77K
   Immer                ████████████████████████ 287.77K
   Immutable.js         ███████████████ 186.82K
   Seamless Immutable   ███ 31.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.30M | ±1.06% | 0.0885ms | 0.1300ms | 5.65M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 487.98K | ±0.58% | 2.0493ms | 2.4240ms | 243.99K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 461.41K | ±0.60% | 2.1673ms | 2.5340ms | 230.70K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 397.77K | ±0.27% | 2.5140ms | 3.0060ms | 198.89K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 287.77K | ±0.30% | 3.4750ms | 4.4580ms | 143.89K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 186.82K | ±0.61% | 5.3528ms | 7.2640ms | 93.41K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.47K | ±0.61% | 31.7733ms | 43.1910ms | 15.74K |

**Key Insight:** Native Map is **359.11x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 301.41K
🥈 Craft                ████████████████████████████████████ 267.98K
🥉 Mutative             █████████████████████████████ 215.17K
   Immutable.js         ██████████████████████ 168.31K
   Immer                █████████████ 99.83K
   Seamless Immutable   ███ 22.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.27M | ±0.67% | 0.1078ms | 0.1400ms | 4.64M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 301.41K | ±0.41% | 3.3178ms | 3.7470ms | 150.70K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 267.98K | ±0.49% | 3.7316ms | 4.7390ms | 133.99K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.17K | ±0.46% | 4.6475ms | 6.2710ms | 107.58K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.31K | ±0.51% | 5.9415ms | 7.0530ms | 84.16K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.83K | ±0.41% | 10.0166ms | 19.2360ms | 49.92K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.27K | ±0.35% | 44.9030ms | 81.0220ms | 11.14K |

**Key Insight:** Native Spread is **416.40x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 369.30K
🥈 Immer                ███ 30.01K
🥉 Craft                ██ 22.11K
   Immutability Helper  █ 6.41K
   Immutable.js         █ 693.56
   Seamless Immutable   █ 252.93
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 369.30K | ±0.85% | 2.7078ms | 3.4970ms | 184.65K |
| 🥈 | **Native Map** | 345.30K | ±0.73% | 2.8960ms | 3.8470ms | 172.65K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.01K | ±0.43% | 33.3261ms | 44.0220ms | 15.00K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.11K | ±0.35% | 45.2312ms | 54.6020ms | 11.05K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.41K | ±0.50% | 156.0979ms | 283.7810ms | 3.20K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 693.56 | ±1.48% | 1441.8278ms | 2170.1310ms | 347.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.93 | ±0.53% | 3953.5881ms | 4382.2810ms | 127.00 |

**Key Insight:** Mutative is **1460.05x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 271.08K
🥈 Immutability Helper  ████████████████████████████████████████ 270.15K
🥉 Mutative             ██████████████████████████████ 201.97K
   Immutable.js         ████████████████████████ 160.29K
   Immer                ███████████████████ 128.88K
   Seamless Immutable   ███ 19.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.42M | ±1.06% | 0.1558ms | 0.1810ms | 3.21M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 271.08K | ±0.48% | 3.6889ms | 4.1870ms | 135.54K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 270.15K | ±0.46% | 3.7017ms | 4.0880ms | 135.07K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 201.97K | ±0.49% | 4.9512ms | 5.7200ms | 100.99K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.29K | ±0.58% | 6.2388ms | 7.7550ms | 80.14K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.88K | ±0.47% | 7.7589ms | 15.0380ms | 64.44K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.10K | ±0.38% | 52.3558ms | 63.9600ms | 9.55K |

**Key Insight:** Native Spread is **335.96x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T15:21:12.393Z*
