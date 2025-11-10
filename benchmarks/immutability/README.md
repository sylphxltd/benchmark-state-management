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
- **Last Run:** 6:48:00 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.6/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.9/100 | 78.4% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.2/100 | 76.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.5/100 | 44.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.6% |
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
🥇 Craft                ████████████████████████████████████████ 216.65K
🥈 Immer                █████████████████████ 112.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.65K | ±2.34% | 4.6158ms | 9.1270ms | 108.32K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 112.65K | ±1.77% | 8.8768ms | 18.9350ms | 56.33K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 988.62K
🥈 Immer                █████ 128.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 988.62K | ±0.47% | 1.0115ms | 1.5430ms | 494.31K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.07K | ±1.94% | 7.8083ms | 15.2280ms | 64.03K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 174.42K
🥈 Immer                ██████████████ 60.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 174.42K | ±1.76% | 5.7331ms | 11.9220ms | 87.21K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.23K | ±1.80% | 16.6024ms | 32.4300ms | 30.12K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 738.65K
🥈 Mutative             ██████████████████████████ 472.53K
🥉 Immer                ██████████ 177.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 738.65K | ±1.74% | 1.3538ms | 3.0160ms | 369.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 472.53K | ±0.66% | 2.1163ms | 2.7550ms | 236.26K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.35K | ±0.99% | 5.6384ms | 9.1370ms | 88.68K |

**Key Insight:** Craft is **4.16x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             █████████████ 423.62K
🥉 Immer                █████ 156.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.44% | 0.7909ms | 1.1720ms | 632.23K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 423.62K | ±0.40% | 2.3606ms | 3.0150ms | 211.81K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.78K | ±0.59% | 6.3785ms | 12.4830ms | 78.39K |

**Key Insight:** Craft is **8.07x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 869.29K
🥈 Mutative             █████████████████████ 453.16K
🥉 Immer                ████████ 165.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 869.29K | ±0.41% | 1.1504ms | 1.5030ms | 434.65K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 453.16K | ±0.42% | 2.2067ms | 2.8350ms | 226.58K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.21K | ±0.39% | 6.0527ms | 13.8250ms | 82.61K |

**Key Insight:** Craft is **5.26x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 846.13K
🥈 Mutative             █████████████████████ 443.79K
🥉 Immer                ████████ 178.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 846.13K | ±0.39% | 1.1819ms | 1.4930ms | 423.07K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 443.79K | ±0.44% | 2.2533ms | 2.8150ms | 221.89K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.82K | ±0.36% | 5.5923ms | 6.9830ms | 89.41K |

**Key Insight:** Craft is **4.73x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 178.39K
🥈 Mutative             ████████████████████████████████ 144.82K
🥉 Immer                ██████████████████ 79.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 178.39K | ±0.55% | 5.6057ms | 9.2270ms | 89.19K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 144.82K | ±0.57% | 6.9050ms | 13.6460ms | 72.41K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.74K | ±0.50% | 12.5403ms | 23.0930ms | 39.87K |

**Key Insight:** Craft is **2.24x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.31K
🥈 Mutative             █████████████ 74.87K
🥉 Immer                ██ 13.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.31K | ±0.56% | 4.4982ms | 6.7620ms | 111.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 74.87K | ±0.52% | 13.3565ms | 23.5130ms | 37.44K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.54K | ±0.41% | 73.8616ms | 89.8970ms | 6.77K |

**Key Insight:** Craft is **16.42x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.39K
🥈 Immer                ████████████ 69.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.39K | ±0.49% | 4.4566ms | 5.3810ms | 112.19K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.65K | ±0.45% | 14.3579ms | 25.4970ms | 34.83K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Immutability Helper  █████████████████████████████████████ 997.25K
🥉 Mutative             ████████████████████████████████████ 969.48K
   Craft                ██████████████████████████████████ 906.99K
   Immer                ██████████████████████████ 691.52K
   Seamless Immutable   █████ 128.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.45M | ±0.11% | 0.0692ms | 0.1100ms | 7.23M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.14% | 0.9264ms | 1.1020ms | 539.74K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 997.25K | ±0.46% | 1.0028ms | 1.7330ms | 498.63K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 969.48K | ±0.41% | 1.0315ms | 1.3520ms | 484.74K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 906.99K | ±2.57% | 1.1025ms | 2.7650ms | 453.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 691.52K | ±1.88% | 1.4461ms | 3.2360ms | 345.76K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.06K | ±0.36% | 7.8088ms | 15.8990ms | 64.03K |

**Key Insight:** Native Spread is **112.85x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 489.98K
🥈 Mutative             ████████████████████████████████ 391.79K
🥉 Craft                ███████████████████████████ 324.86K
   Immutable.js         ██████████████████ 225.71K
   Immer                ████████████ 151.41K
   Seamless Immutable   ███ 37.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.70M | ±0.10% | 0.0854ms | 0.1400ms | 5.85M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 489.98K | ±1.35% | 2.0409ms | 3.5460ms | 244.99K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 391.79K | ±1.25% | 2.5524ms | 3.1960ms | 195.99K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 324.86K | ±3.62% | 3.0782ms | 5.1800ms | 162.43K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 225.71K | ±1.47% | 4.4305ms | 6.0510ms | 112.86K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 151.41K | ±2.52% | 6.6044ms | 12.2630ms | 75.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.25K | ±0.99% | 26.8431ms | 37.0290ms | 18.63K |

**Key Insight:** Native Spread is **314.16x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.71M
🥈 Immutability Helper  █████████████████████████████████ 1.40M
🥉 Craft                ███████████ 487.15K
   Mutative             █████████ 406.08K
   Immer                ██████ 267.98K
   Seamless Immutable   █ 61.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.65M | ±23.18% | 0.0939ms | 0.1200ms | 5.32M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.71M | ±0.73% | 0.5836ms | 0.8510ms | 856.79K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.77% | 0.7152ms | 0.7820ms | 699.06K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 487.15K | ±0.61% | 2.0528ms | 2.4540ms | 243.57K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 406.08K | ±0.82% | 2.4626ms | 4.1480ms | 203.04K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 267.98K | ±1.19% | 3.7316ms | 6.3610ms | 133.99K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.21K | ±0.86% | 16.3384ms | 25.7380ms | 30.60K |

**Key Insight:** Native Spread is **173.94x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 780.20K
🥈 Immutability Helper  ██████████████████████████████ 576.87K
🥉 Craft                ████████████████ 310.96K
   Mutative             ███████████ 218.89K
   Immer                ███████ 141.01K
   Seamless Immutable   ███ 60.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.26M | ±1.15% | 0.0815ms | 0.1100ms | 6.13M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 780.20K | ±0.60% | 1.2817ms | 1.7540ms | 390.10K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 576.87K | ±0.22% | 1.7335ms | 2.0930ms | 288.43K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 310.96K | ±0.50% | 3.2158ms | 3.8570ms | 155.48K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.89K | ±0.47% | 4.5685ms | 6.0020ms | 109.45K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.01K | ±0.51% | 7.0918ms | 12.6140ms | 70.50K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.09K | ±0.50% | 16.6409ms | 26.3590ms | 30.05K |

**Key Insight:** Native Filter is **204.07x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 467.52K
🥈 Mutative             ███████████████████████████████████████ 456.62K
🥉 Immutability Helper  ██████████████████████████████████ 400.05K
   Immer                ████████████████████████ 281.85K
   Immutable.js         █████████████████ 193.59K
   Seamless Immutable   ███ 31.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.31M | ±0.67% | 0.0884ms | 0.1400ms | 5.66M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 467.52K | ±1.22% | 2.1390ms | 2.6750ms | 233.76K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 456.62K | ±0.81% | 2.1900ms | 2.6650ms | 228.31K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.05K | ±0.33% | 2.4997ms | 3.0550ms | 200.03K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 281.85K | ±0.30% | 3.5480ms | 4.9190ms | 140.93K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 193.59K | ±0.79% | 5.1657ms | 5.9110ms | 96.79K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.51K | ±0.66% | 31.7377ms | 41.6470ms | 15.76K |

**Key Insight:** Native Map is **359.03x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 312.26K
🥈 Craft                ███████████████████████████████████ 269.90K
🥉 Mutative             ████████████████████████████ 216.41K
   Immutable.js         ██████████████████████ 174.20K
   Immer                █████████████ 98.75K
   Seamless Immutable   ███ 22.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.50M | ±0.83% | 0.1176ms | 0.1600ms | 4.25M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 312.26K | ±0.64% | 3.2024ms | 3.7270ms | 156.13K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 269.90K | ±0.55% | 3.7051ms | 4.4280ms | 134.95K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.41K | ±0.52% | 4.6208ms | 5.2890ms | 108.21K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 174.20K | ±0.65% | 5.7406ms | 6.6230ms | 87.10K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.75K | ±0.38% | 10.1268ms | 19.6060ms | 49.37K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.10K | ±0.47% | 45.2438ms | 58.9290ms | 11.05K |

**Key Insight:** Native Spread is **384.62x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 347.81K
🥈 Immer                ███ 29.03K
🥉 Craft                ███ 21.81K
   Immutability Helper  █ 6.26K
   Immutable.js         █ 703.60
   Seamless Immutable   █ 253.55
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 347.81K | ±0.97% | 2.8751ms | 3.6070ms | 173.91K |
| 🥈 | **Native Map** | 343.46K | ±0.89% | 2.9116ms | 3.8180ms | 171.73K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.03K | ±0.79% | 34.4445ms | 45.2740ms | 14.52K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.81K | ±0.64% | 45.8601ms | 58.1980ms | 10.90K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.26K | ±0.81% | 159.6955ms | 192.0160ms | 3.13K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 703.60 | ±2.10% | 1421.2661ms | 2803.8970ms | 353.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 253.55 | ±0.96% | 3943.9725ms | 4722.9820ms | 127.00 |

**Key Insight:** Mutative is **1371.76x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 276.45K
🥈 Craft                █████████████████████████████████████ 255.36K
🥉 Mutative             █████████████████████████████ 197.07K
   Immutable.js         ███████████████████████ 159.88K
   Immer                ██████████████████ 126.60K
   Seamless Immutable   ███ 18.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.15M | ±1.22% | 0.1626ms | 0.2200ms | 3.08M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 276.45K | ±0.48% | 3.6172ms | 4.1070ms | 138.23K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 255.36K | ±0.53% | 3.9160ms | 4.5380ms | 127.68K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.07K | ±0.94% | 5.0743ms | 5.9010ms | 98.54K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 159.88K | ±0.59% | 6.2548ms | 7.5050ms | 79.94K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.60K | ±0.89% | 7.8991ms | 13.5250ms | 63.30K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.97K | ±0.80% | 52.7232ms | 64.0080ms | 9.48K |

**Key Insight:** Native Spread is **324.27x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T19:02:26.006Z*
