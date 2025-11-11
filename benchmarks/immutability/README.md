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
- **Last Run:** 4:08:09 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/SylphxAI/craft)** | `v1.2.1` | 2.76KB | Nov 11, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥉 | **[@sylphx/craft](https://github.com/SylphxAI/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[mutative](https://github.com/unadlib/mutative)** | 7.16KB | 22.26KB | 4.33x |
| 6 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 72.8/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.1/100 | 78.4% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.0/100 | 74.2% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.6/100 | 43.4% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.7/100 | 33.9% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.4% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 7.16KB | 72/100 | Average |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Immer](https://github.com/immerjs/immer)** | 18/18 | 100% |
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 18/18 | 100% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 14/18 | 78% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 8/18 | 44% |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 8/18 | 44% |
| 4 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 8/18 | 44% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across immutability libraries

| Feature | **Craft** | **Immer** | **Immutability Helper** | **Immutable.js** | **Mutative** | **Seamless Immutable** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/SylphxAI/craft#100-type-safe) | ✅ | [✅](https://github.com/kolodny/immutability-helper/blob/master/index.d.ts) | ✅ | ✅ | ✅ |
| **Auto Freeze**<br/><sub>Automatically freezes objects (Object.freeze) in dev mode</sub> | [✅](https://github.com/SylphxAI/craft#current) | [✅](https://immerjs.github.io/immer/api#setautofreeze) | ❌ | ❌ | ❌ | [✅](https://github.com/rtfeldman/seamless-immutable#immutability) |
| **Structural Sharing**<br/><sub>Uses structural sharing for memory efficiency</sub> | ✅ | [✅](https://immerjs.github.io/immer/performance) | [✅](https://github.com/kolodny/immutability-helper#overview) | [✅](https://immutable-js.com/#the-case-for-immutability) | [✅](https://github.com/unadlib/mutative#shallow-copy-optimization) | [✅](https://github.com/rtfeldman/seamless-immutable#usage) |
| **Custom Data Structures**<br/><sub>Provides custom immutable data structures (List, Map, Set, etc.)</sub> | [✅](https://github.com/SylphxAI/craft#map-set-support) | ❌ | ❌ | [✅](https://immutable-js.com/docs/v4.3.0) | ❌ | ❌ |
| **Mutable-style API**<br/><sub>Allows mutable-style API that produces immutable results</sub> | [✅](https://github.com/SylphxAI/craft) | [✅](https://immerjs.github.io/immer/) | ❌ | ❌ | ✅ | ❌ |
| **JSON Compatible**<br/><sub>Works with plain JavaScript objects (JSON-serializable)</sub> | [✅](https://github.com/SylphxAI/craft#json-patches) | ✅ | ✅ | [✅](https://immutable-js.com/docs/v4.3.0/Collection/#toJSON()) | [✅](https://github.com/unadlib/mutative#json-patch) | ✅ |

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
🥇 Craft                ████████████████████████████████████████ 220.05K
🥈 Immer                █████████████████████ 116.71K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 220.05K | ±1.89% | 4.5445ms | 9.0670ms | 110.02K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 116.71K | ±1.39% | 8.5681ms | 18.2440ms | 58.36K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 968.69K
🥈 Immer                █████ 131.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 968.69K | ±0.15% | 1.0323ms | 1.4520ms | 484.35K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.79K | ±1.43% | 7.5878ms | 17.3230ms | 65.92K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.82K
🥈 Immer                ██████████████ 60.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 176.82K | ±1.59% | 5.6556ms | 10.9110ms | 88.41K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.45K | ±1.47% | 16.5426ms | 31.5100ms | 30.23K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 745.08K
🥈 Mutative             █████████████████████████ 474.39K
🥉 Immer                ██████████ 181.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 745.08K | ±1.49% | 1.3421ms | 2.9460ms | 372.54K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 474.39K | ±0.64% | 2.1080ms | 2.4950ms | 237.20K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.43K | ±0.78% | 5.5117ms | 10.2590ms | 90.72K |

**Key Insight:** Craft is **4.11x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.25M
🥈 Mutative             ██████████████ 432.36K
🥉 Immer                █████ 159.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.25M | ±0.36% | 0.8004ms | 1.0930ms | 624.68K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 432.36K | ±0.38% | 2.3129ms | 2.6450ms | 216.18K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.92K | ±0.51% | 6.2532ms | 12.2330ms | 79.96K |

**Key Insight:** Craft is **7.81x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 864.16K
🥈 Mutative             ██████████████████████ 466.21K
🥉 Immer                ████████ 174.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 864.16K | ±0.35% | 1.1572ms | 1.4130ms | 432.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 466.21K | ±0.38% | 2.1450ms | 2.4350ms | 233.11K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 174.01K | ±0.30% | 5.7468ms | 6.8330ms | 87.00K |

**Key Insight:** Craft is **4.97x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 837.38K
🥈 Mutative             ██████████████████████ 457.56K
🥉 Immer                █████████ 187.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 837.38K | ±0.36% | 1.1942ms | 1.4230ms | 418.69K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.56K | ±0.41% | 2.1855ms | 2.5540ms | 228.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 187.38K | ±0.30% | 5.3368ms | 6.4120ms | 93.69K |

**Key Insight:** Craft is **4.47x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.30K
🥈 Mutative             ████████████████████████████████ 143.09K
🥉 Immer                ██████████████████ 78.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 177.30K | ±0.44% | 5.6403ms | 9.6180ms | 88.65K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 143.09K | ±0.44% | 6.9885ms | 12.0320ms | 71.55K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.49K | ±0.69% | 12.7399ms | 23.9050ms | 39.25K |

**Key Insight:** Craft is **2.26x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 231.55K
🥈 Mutative             █████████████ 78.06K
🥉 Immer                ██ 13.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 231.55K | ±0.41% | 4.3188ms | 4.9800ms | 115.77K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 78.06K | ±0.44% | 12.8108ms | 22.3020ms | 39.03K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.97K | ±0.26% | 71.5940ms | 84.9500ms | 6.98K |

**Key Insight:** Craft is **16.58x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.47K
🥈 Immer                █████████████ 72.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.47K | ±0.33% | 4.4157ms | 5.1600ms | 113.23K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.22K | ±0.24% | 13.8462ms | 24.2860ms | 36.11K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.05M
🥈 Immutability Helper  █████████████████████████████████████ 966.80K
🥉 Mutative             ████████████████████████████████████ 955.87K
   Craft                ████████████████████████████████████ 938.82K
   Immer                ███████████████████████████ 704.28K
   Seamless Immutable   █████ 128.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.56M | ±0.09% | 0.0687ms | 0.0900ms | 7.28M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.05M | ±0.10% | 0.9500ms | 1.0120ms | 526.33K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 966.80K | ±0.31% | 1.0343ms | 1.1720ms | 483.40K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 955.87K | ±0.37% | 1.0462ms | 1.2820ms | 477.94K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 938.82K | ±2.43% | 1.0652ms | 2.6750ms | 469.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 704.28K | ±1.71% | 1.4199ms | 3.2260ms | 352.14K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.36K | ±0.21% | 7.7907ms | 13.6860ms | 64.18K |

**Key Insight:** Native Spread is **113.41x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 493.30K
🥈 Mutative             ████████████████████████████████ 399.57K
🥉 Craft                ███████████████████████████ 338.46K
   Immutable.js         █████████████████ 210.84K
   Immer                ████████████ 144.38K
   Seamless Immutable   ███ 37.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.68M | ±0.10% | 0.0856ms | 0.1110ms | 5.84M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 493.30K | ±0.49% | 2.0272ms | 3.4970ms | 246.65K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 399.57K | ±0.51% | 2.5027ms | 4.0970ms | 199.79K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 338.46K | ±3.01% | 2.9545ms | 5.2690ms | 169.23K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 210.84K | ±1.74% | 4.7429ms | 9.1870ms | 105.45K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 144.38K | ±1.89% | 6.9262ms | 15.9300ms | 72.19K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.92K | ±0.38% | 26.3690ms | 35.9570ms | 18.96K |

**Key Insight:** Native Spread is **308.07x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.75M
🥈 Immutability Helper  ███████████████████████████████ 1.37M
🥉 Craft                ███████████ 500.61K
   Mutative             ██████████ 422.56K
   Immer                ███████ 285.36K
   Seamless Immutable   █ 62.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.67M | ±1.31% | 0.0857ms | 0.1200ms | 5.84M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.75M | ±0.70% | 0.5712ms | 0.7710ms | 875.29K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.37M | ±0.74% | 0.7308ms | 0.9420ms | 684.21K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 500.61K | ±0.52% | 1.9976ms | 2.3850ms | 250.31K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 422.56K | ±0.64% | 2.3665ms | 2.7960ms | 211.28K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 285.36K | ±0.57% | 3.5044ms | 7.7250ms | 142.68K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.47K | ±0.52% | 16.0084ms | 25.4380ms | 31.23K |

**Key Insight:** Native Spread is **186.85x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 810.25K
🥈 Immutability Helper  █████████████████████████████ 578.80K
🥉 Craft                ███████████████ 310.90K
   Mutative             ███████████ 212.73K
   Immer                ███████ 143.09K
   Seamless Immutable   ███ 62.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.58M | ±0.92% | 0.0795ms | 0.1200ms | 6.29M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 810.25K | ±0.41% | 1.2342ms | 1.5030ms | 405.13K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.80K | ±0.17% | 1.7277ms | 1.8540ms | 289.40K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 310.90K | ±0.24% | 3.2165ms | 6.2620ms | 155.45K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 212.73K | ±0.30% | 4.7008ms | 5.3500ms | 106.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.09K | ±0.28% | 6.9884ms | 12.4330ms | 71.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.83K | ±0.27% | 15.9150ms | 25.3480ms | 31.42K |

**Key Insight:** Native Filter is **200.23x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 495.74K
🥈 Mutative             ██████████████████████████████████████ 466.31K
🥉 Immutability Helper  ████████████████████████████████ 401.89K
   Immer                ███████████████████████ 281.35K
   Immutable.js         ███████████████ 189.41K
   Seamless Immutable   ███ 31.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.54M | ±0.61% | 0.0866ms | 0.1300ms | 5.77M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 495.74K | ±0.27% | 2.0172ms | 2.7350ms | 247.87K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 466.31K | ±0.35% | 2.1445ms | 2.4650ms | 233.16K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 401.89K | ±0.16% | 2.4883ms | 4.2380ms | 200.94K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 281.35K | ±0.25% | 3.5543ms | 7.1040ms | 140.68K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.41K | ±0.36% | 5.2795ms | 10.4790ms | 94.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.85K | ±0.52% | 31.3949ms | 45.6760ms | 15.93K |

**Key Insight:** Native Map is **362.43x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 313.72K
🥈 Craft                ██████████████████████████████████ 264.44K
🥉 Mutative             ████████████████████████████ 218.76K
   Immutable.js         ██████████████████████ 169.87K
   Immer                █████████████ 100.36K
   Seamless Immutable   ███ 22.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.94M | ±0.63% | 0.1118ms | 0.1800ms | 4.47M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 313.72K | ±0.35% | 3.1875ms | 3.4770ms | 156.86K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 264.44K | ±0.43% | 3.7816ms | 4.8990ms | 132.22K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 218.76K | ±0.43% | 4.5713ms | 5.1500ms | 109.38K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 169.87K | ±0.43% | 5.8867ms | 6.5820ms | 84.94K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 100.36K | ±0.37% | 9.9638ms | 19.4160ms | 50.18K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.55K | ±0.29% | 44.3373ms | 57.6980ms | 11.28K |

**Key Insight:** Native Spread is **396.59x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 369.02K
🥈 Immer                ███ 30.10K
🥉 Craft                ██ 22.14K
   Immutability Helper  █ 6.44K
   Immutable.js         █ 726.68
   Seamless Immutable   █ 260.15
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 369.02K | ±0.80% | 2.7099ms | 4.9590ms | 184.51K |
| 🥈 | **Native Map** | 357.32K | ±0.66% | 2.7986ms | 4.5690ms | 178.66K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.10K | ±0.37% | 33.2227ms | 43.6610ms | 15.05K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 22.14K | ±0.28% | 45.1607ms | 54.2320ms | 11.07K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.44K | ±0.33% | 155.3825ms | 188.4930ms | 3.22K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 726.68 | ±0.99% | 1376.1196ms | 1832.2430ms | 364.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 260.15 | ±0.44% | 3843.9943ms | 4279.7880ms | 131.00 |

**Key Insight:** Mutative is **1418.50x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.22K
🥈 Craft                ███████████████████████████████████████ 269.71K
🥉 Mutative             █████████████████████████████ 200.98K
   Immutable.js         ███████████████████████ 160.15K
   Immer                ███████████████████ 130.43K
   Seamless Immutable   ███ 19.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.39M | ±0.95% | 0.1564ms | 0.1810ms | 3.20M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.22K | ±0.37% | 3.5814ms | 3.8970ms | 139.61K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 269.71K | ±0.44% | 3.7077ms | 4.1070ms | 134.85K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.98K | ±0.40% | 4.9757ms | 5.7010ms | 100.49K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.15K | ±0.55% | 6.2442ms | 12.1520ms | 80.08K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 130.43K | ±0.40% | 7.6668ms | 14.1770ms | 65.22K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.46K | ±0.35% | 51.3916ms | 61.9360ms | 9.73K |

**Key Insight:** Native Spread is **328.53x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T04:37:25.191Z*
