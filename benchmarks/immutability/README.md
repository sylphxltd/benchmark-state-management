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
- **Last Run:** 4:51:19 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 73.3/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.5/100 | 77.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 74.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.1/100 | 43.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.3% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.9/100 | 5.3% |

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
🥇 Craft                ████████████████████████████████████████ 217.20K
🥈 Immer                █████████████████████ 111.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 217.20K | ±2.00% | 4.6041ms | 9.2280ms | 108.60K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.80K | ±1.66% | 8.9449ms | 19.1560ms | 55.90K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 960.45K
🥈 Immer                █████ 126.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 960.45K | ±0.16% | 1.0412ms | 1.4030ms | 480.23K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 126.63K | ±1.40% | 7.8971ms | 15.2180ms | 63.31K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.81K
🥈 Immer                █████████████ 58.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 176.81K | ±1.59% | 5.6558ms | 11.0100ms | 88.41K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 58.60K | ±1.52% | 17.0643ms | 32.6310ms | 29.30K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 753.25K
🥈 Mutative             █████████████████████████ 479.14K
🥉 Immer                ██████████ 179.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 753.25K | ±1.51% | 1.3276ms | 2.9960ms | 376.63K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 479.14K | ±0.66% | 2.0871ms | 3.6970ms | 239.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.69K | ±0.87% | 5.5653ms | 8.9770ms | 89.84K |

**Key Insight:** Craft is **4.19x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.28M
🥈 Mutative             █████████████ 429.66K
🥉 Immer                █████ 157.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.28M | ±0.40% | 0.7842ms | 1.1020ms | 637.55K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 429.66K | ±0.41% | 2.3274ms | 3.9270ms | 214.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.48K | ±0.54% | 6.3500ms | 12.9140ms | 78.74K |

**Key Insight:** Craft is **8.10x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 874.14K
🥈 Mutative             █████████████████████ 448.45K
🥉 Immer                ████████ 169.71K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 874.14K | ±0.39% | 1.1440ms | 1.4730ms | 437.07K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.45K | ±0.38% | 2.2299ms | 2.6040ms | 224.22K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.71K | ±0.38% | 5.8923ms | 7.6340ms | 84.86K |

**Key Insight:** Craft is **5.15x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 853.16K
🥈 Mutative             █████████████████████ 449.20K
🥉 Immer                █████████ 184.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 853.16K | ±0.39% | 1.1721ms | 1.4430ms | 426.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.20K | ±0.43% | 2.2262ms | 2.6450ms | 224.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 184.20K | ±0.34% | 5.4289ms | 8.4960ms | 92.10K |

**Key Insight:** Craft is **4.63x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 186.24K
🥈 Mutative             ████████████████████████████████ 150.51K
🥉 Immer                █████████████████ 80.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 186.24K | ±0.45% | 5.3693ms | 8.0550ms | 93.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.51K | ±0.46% | 6.6442ms | 11.8620ms | 75.27K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.20K | ±0.65% | 12.4695ms | 23.5540ms | 40.10K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.47K
🥈 Mutative             █████████████ 76.57K
🥉 Immer                ██ 13.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 229.47K | ±0.40% | 4.3580ms | 5.3100ms | 114.73K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.57K | ±0.44% | 13.0598ms | 22.5820ms | 38.29K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.94K | ±0.29% | 71.7603ms | 84.9690ms | 6.97K |

**Key Insight:** Craft is **16.47x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.57K
🥈 Immer                ████████████ 69.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 226.57K | ±0.33% | 4.4137ms | 5.5310ms | 113.28K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.19K | ±0.67% | 14.4525ms | 25.7480ms | 34.60K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Mutative             ████████████████████████████████████ 976.53K
🥉 Immutability Helper  ████████████████████████████████████ 961.84K
   Craft                ███████████████████████████████████ 939.18K
   Immer                ██████████████████████████ 709.98K
   Seamless Immutable   █████ 126.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.72M | ±0.09% | 0.0679ms | 0.0910ms | 7.36M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.28% | 0.9296ms | 1.4530ms | 537.86K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 976.53K | ±0.38% | 1.0240ms | 1.2820ms | 488.26K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 961.84K | ±0.14% | 1.0397ms | 1.9840ms | 480.92K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 939.18K | ±2.80% | 1.0648ms | 2.6950ms | 469.59K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 709.98K | ±1.68% | 1.4085ms | 3.1760ms | 354.99K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 126.42K | ±0.26% | 7.9102ms | 16.1200ms | 63.21K |

**Key Insight:** Native Spread is **116.43x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 518.54K
🥈 Mutative             ██████████████████████████████ 385.76K
🥉 Craft                ██████████████████████████ 342.77K
   Immutable.js         ██████████████████ 231.72K
   Immer                ████████████ 154.49K
   Seamless Immutable   ███ 37.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.74M | ±0.16% | 0.0852ms | 0.1210ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 518.54K | ±0.30% | 1.9285ms | 2.2140ms | 259.27K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 385.76K | ±3.27% | 2.5923ms | 4.7490ms | 192.88K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 342.77K | ±2.35% | 2.9174ms | 5.4210ms | 171.38K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 231.72K | ±0.36% | 4.3156ms | 4.9690ms | 115.86K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.49K | ±1.76% | 6.4730ms | 11.7520ms | 77.25K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.34K | ±0.43% | 26.7807ms | 37.4000ms | 18.67K |

**Key Insight:** Native Spread is **314.28x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.70M
🥈 Immutability Helper  ██████████████████████████████████ 1.44M
🥉 Craft                ████████████ 506.47K
   Mutative             ██████████ 428.47K
   Immer                ███████ 279.58K
   Seamless Immutable   █ 61.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.91M | ±0.68% | 0.0840ms | 0.1200ms | 5.95M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.70M | ±0.57% | 0.5871ms | 0.9420ms | 851.68K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.44M | ±0.31% | 0.6965ms | 0.8220ms | 717.90K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 506.47K | ±0.36% | 1.9745ms | 2.2840ms | 253.23K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 428.47K | ±0.39% | 2.3339ms | 2.7050ms | 214.24K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 279.58K | ±0.34% | 3.5768ms | 7.5040ms | 139.79K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.81K | ±0.24% | 16.1787ms | 25.7790ms | 30.91K |

**Key Insight:** Native Spread is **192.62x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 784.83K
🥈 Immutability Helper  ██████████████████████████████ 580.58K
🥉 Craft                ████████████████ 322.46K
   Mutative             ███████████ 218.38K
   Immer                ███████ 143.08K
   Seamless Immutable   ███ 61.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.47M | ±0.99% | 0.0802ms | 0.1100ms | 6.23M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 784.83K | ±0.56% | 1.2742ms | 1.5830ms | 392.42K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.58K | ±0.17% | 1.7224ms | 1.8540ms | 290.29K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 322.46K | ±0.35% | 3.1011ms | 3.5070ms | 161.23K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.38K | ±0.30% | 4.5791ms | 5.2290ms | 109.19K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.08K | ±0.37% | 6.9893ms | 12.3230ms | 71.54K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.49K | ±0.44% | 16.2623ms | 25.7990ms | 30.75K |

**Key Insight:** Native Filter is **202.76x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 498.61K
🥈 Mutative             █████████████████████████████████████ 459.69K
🥉 Immutability Helper  ████████████████████████████████ 400.78K
   Immer                ███████████████████████ 282.85K
   Immutable.js         ███████████████ 189.10K
   Seamless Immutable   ███ 31.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.40M | ±0.95% | 0.0877ms | 0.1300ms | 5.70M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 498.61K | ±0.51% | 2.0056ms | 2.3550ms | 249.31K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 459.69K | ±0.61% | 2.1754ms | 2.5440ms | 229.84K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.78K | ±0.26% | 2.4951ms | 2.8550ms | 200.39K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 282.85K | ±0.15% | 3.5354ms | 6.0010ms | 141.43K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.10K | ±0.61% | 5.2883ms | 6.1520ms | 94.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.68K | ±0.46% | 31.5703ms | 50.1640ms | 15.84K |

**Key Insight:** Native Map is **359.84x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 311.50K
🥈 Craft                ███████████████████████████████████ 270.72K
🥉 Mutative             ████████████████████████████ 215.14K
   Immutable.js         ██████████████████████ 174.06K
   Immer                █████████████ 100.32K
   Seamless Immutable   ███ 22.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.13M | ±0.65% | 0.1096ms | 0.1410ms | 4.56M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 311.50K | ±0.39% | 3.2103ms | 5.7910ms | 155.75K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 270.72K | ±0.43% | 3.6938ms | 4.3280ms | 135.36K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.14K | ±0.43% | 4.6482ms | 5.5100ms | 107.57K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 174.06K | ±0.25% | 5.7452ms | 8.2350ms | 87.03K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 100.32K | ±0.38% | 9.9677ms | 19.5070ms | 50.16K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.51K | ±0.29% | 44.4213ms | 54.2010ms | 11.26K |

**Key Insight:** Native Spread is **405.38x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 355.32K
🥈 Immer                ███ 30.16K
🥉 Craft                ██ 21.99K
   Immutability Helper  █ 6.37K
   Immutable.js         █ 717.21
   Seamless Immutable   █ 254.73
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 357.77K | ±0.66% | 2.7951ms | 3.3960ms | 178.89K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 355.32K | ±0.82% | 2.8144ms | 5.3200ms | 177.66K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 30.16K | ±0.40% | 33.1604ms | 42.7090ms | 15.08K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 21.99K | ±0.35% | 45.4691ms | 58.0780ms | 11.00K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.37K | ±0.34% | 157.0309ms | 179.1750ms | 3.19K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 717.21 | ±1.25% | 1394.2861ms | 2006.3580ms | 359.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.73 | ±0.55% | 3925.7480ms | 4388.7200ms | 128.00 |

**Key Insight:** Native Map is **1404.52x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 278.22K
🥈 Craft                ████████████████████████████████████████ 276.35K
🥉 Mutative             █████████████████████████████ 199.20K
   Immutable.js         ███████████████████████ 163.27K
   Immer                ██████████████████ 128.16K
   Seamless Immutable   ███ 18.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.30M | ±1.02% | 0.1588ms | 0.1810ms | 3.15M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 278.22K | ±0.42% | 3.5943ms | 3.9980ms | 139.11K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 276.35K | ±0.48% | 3.6186ms | 4.0780ms | 138.18K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.20K | ±0.49% | 5.0200ms | 5.6610ms | 99.60K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 163.27K | ±0.56% | 6.1247ms | 7.1730ms | 81.64K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.16K | ±0.45% | 7.8025ms | 16.2300ms | 64.08K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.88K | ±0.40% | 52.9707ms | 64.0200ms | 9.44K |

**Key Insight:** Native Spread is **333.48x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T05:02:05.331Z*
