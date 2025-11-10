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
- **Last Run:** 9:38:33 PM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.5/100 | 77.1% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.7/100 | 74.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.5/100 | 43.0% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.1/100 | 32.9% |
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
🥇 Craft                ████████████████████████████████████████ 214.42K
🥈 Immer                ████████████████████ 109.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 214.42K | ±2.13% | 4.6636ms | 9.4280ms | 107.21K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 109.08K | ±2.12% | 9.1674ms | 25.8290ms | 54.54K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 968.84K
🥈 Immer                █████ 130.28K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 968.84K | ±0.17% | 1.0322ms | 1.4630ms | 484.42K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.28K | ±1.60% | 7.6755ms | 15.1190ms | 65.14K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.17K
🥈 Immer                ██████████████ 60.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 175.17K | ±1.77% | 5.7088ms | 11.2210ms | 87.58K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.55K | ±1.75% | 16.5144ms | 31.7100ms | 30.28K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 747.53K
🥈 Mutative             █████████████████████████ 471.41K
🥉 Immer                █████████ 174.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 747.53K | ±2.01% | 1.3377ms | 2.8750ms | 373.77K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 471.41K | ±0.72% | 2.1213ms | 2.8760ms | 235.70K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 174.75K | ±1.03% | 5.7224ms | 9.8890ms | 87.38K |

**Key Insight:** Craft is **4.28x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 422.69K
🥉 Immer                █████ 154.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.44% | 0.7859ms | 1.1720ms | 636.23K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 422.69K | ±0.45% | 2.3658ms | 3.0360ms | 211.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 154.69K | ±0.61% | 6.4646ms | 12.5640ms | 77.34K |

**Key Insight:** Craft is **8.23x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 862.29K
🥈 Mutative             █████████████████████ 459.38K
🥉 Immer                ████████ 164.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 862.29K | ±0.45% | 1.1597ms | 1.5630ms | 431.15K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 459.38K | ±0.46% | 2.1768ms | 2.7450ms | 229.69K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 164.09K | ±0.41% | 6.0941ms | 9.1970ms | 82.05K |

**Key Insight:** Craft is **5.25x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 847.75K
🥈 Mutative             █████████████████████ 448.87K
🥉 Immer                ████████ 176.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 847.75K | ±0.49% | 1.1796ms | 1.5430ms | 423.88K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 448.87K | ±0.52% | 2.2278ms | 2.7650ms | 224.43K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.41K | ±0.50% | 5.6686ms | 8.6360ms | 88.21K |

**Key Insight:** Craft is **4.81x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 179.61K
🥈 Mutative             ████████████████████████████████ 145.92K
🥉 Immer                █████████████████ 74.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 179.61K | ±0.50% | 5.5675ms | 8.1050ms | 89.81K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 145.92K | ±0.49% | 6.8532ms | 13.0950ms | 72.96K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 74.99K | ±0.72% | 13.3343ms | 25.6780ms | 37.50K |

**Key Insight:** Craft is **2.40x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.74K
🥈 Mutative             █████████████ 76.55K
🥉 Immer                ██ 13.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 228.74K | ±0.44% | 4.3717ms | 5.4600ms | 114.37K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.55K | ±0.47% | 13.0638ms | 22.7320ms | 38.27K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.85K | ±0.43% | 72.2048ms | 97.3120ms | 6.92K |

**Key Insight:** Craft is **16.52x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.59K
🥈 Immer                █████████████ 70.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.59K | ±0.44% | 4.4725ms | 7.6540ms | 111.79K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.10K | ±0.57% | 14.2655ms | 25.6980ms | 35.05K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 995.58K
🥉 Mutative             █████████████████████████████████████ 974.97K
   Craft                ████████████████████████████████████ 955.73K
   Immer                ██████████████████████████ 693.28K
   Seamless Immutable   █████ 128.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.55M | ±0.11% | 0.0688ms | 0.1100ms | 7.27M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.15% | 0.9368ms | 1.3230ms | 533.72K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 995.58K | ±0.43% | 1.0044ms | 1.3320ms | 497.79K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 974.97K | ±0.46% | 1.0257ms | 1.5720ms | 487.49K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 955.73K | ±2.71% | 1.0463ms | 2.6950ms | 477.86K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 693.28K | ±2.07% | 1.4424ms | 3.2160ms | 346.64K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.33K | ±0.39% | 7.7926ms | 14.0860ms | 64.16K |

**Key Insight:** Native Spread is **113.35x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 512.46K
🥈 Mutative             ███████████████████████████████ 393.00K
🥉 Craft                ██████████████████████████ 337.83K
   Immutable.js         ██████████████████ 233.64K
   Immer                ████████████ 150.37K
   Seamless Immutable   ███ 37.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.76M | ±0.18% | 0.0850ms | 0.1200ms | 5.88M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 512.46K | ±0.36% | 1.9514ms | 2.3940ms | 256.32K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 393.00K | ±0.87% | 2.5445ms | 4.9690ms | 196.50K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 337.83K | ±2.69% | 2.9601ms | 5.5900ms | 168.93K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 233.64K | ±0.43% | 4.2801ms | 5.1700ms | 116.82K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 150.37K | ±2.48% | 6.6504ms | 13.0550ms | 75.18K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.08K | ±0.41% | 26.9705ms | 38.4620ms | 18.54K |

**Key Insight:** Native Spread is **317.21x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.77M
🥈 Immutability Helper  ████████████████████████████████ 1.40M
🥉 Craft                ███████████ 507.71K
   Mutative             █████████ 416.82K
   Immer                ██████ 278.01K
   Seamless Immutable   █ 62.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.01M | ±0.81% | 0.0832ms | 0.1200ms | 6.01M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.77M | ±0.54% | 0.5662ms | 0.8520ms | 883.04K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.40M | ±0.66% | 0.7156ms | 0.7820ms | 698.72K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 507.71K | ±0.70% | 1.9696ms | 2.6350ms | 253.85K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 416.82K | ±0.79% | 2.3991ms | 3.7270ms | 208.41K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.01K | ±0.65% | 3.5970ms | 6.8830ms | 139.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.17K | ±0.73% | 16.0848ms | 25.7580ms | 31.09K |

**Key Insight:** Native Spread is **193.25x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 774.99K
🥈 Immutability Helper  ██████████████████████████████ 576.02K
🥉 Craft                ████████████████ 312.48K
   Mutative             ███████████ 214.22K
   Immer                ███████ 140.59K
   Seamless Immutable   ███ 58.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.62M | ±0.88% | 0.0793ms | 0.1200ms | 6.31M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 774.99K | ±1.19% | 1.2903ms | 2.4740ms | 387.50K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 576.02K | ±0.39% | 1.7361ms | 1.9430ms | 288.01K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 312.48K | ±0.95% | 3.2003ms | 4.2580ms | 156.24K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 214.22K | ±1.00% | 4.6681ms | 5.8110ms | 107.11K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 140.59K | ±0.88% | 7.1130ms | 13.2750ms | 70.29K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 58.68K | ±5.89% | 17.0417ms | 30.8580ms | 29.34K |

**Key Insight:** Native Filter is **215.02x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 499.95K
🥈 Mutative             █████████████████████████████████████ 458.21K
🥉 Immutability Helper  ████████████████████████████████ 399.73K
   Immer                ██████████████████████ 268.74K
   Immutable.js         ███████████████ 181.41K
   Seamless Immutable   ███ 31.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.28M | ±0.79% | 0.0886ms | 0.1300ms | 5.64M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 499.95K | ±0.34% | 2.0002ms | 2.8860ms | 249.97K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 458.21K | ±0.38% | 2.1824ms | 2.7650ms | 229.11K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.73K | ±0.20% | 2.5017ms | 4.4390ms | 199.86K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 268.74K | ±0.37% | 3.7211ms | 9.0770ms | 134.37K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 181.41K | ±0.27% | 5.5125ms | 6.4210ms | 90.70K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.44K | ±0.64% | 31.8059ms | 43.7120ms | 15.72K |

**Key Insight:** Native Map is **358.88x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 309.78K
🥈 Craft                ███████████████████████████████████ 270.54K
🥉 Mutative             ████████████████████████████ 215.24K
   Immutable.js         █████████████████████ 165.86K
   Immer                █████████████ 98.87K
   Seamless Immutable   ███ 22.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.09M | ±0.80% | 0.1101ms | 0.1510ms | 4.54M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 309.78K | ±0.63% | 3.2281ms | 3.8270ms | 154.89K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 270.54K | ±0.63% | 3.6963ms | 4.4580ms | 135.27K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.24K | ±0.70% | 4.6459ms | 5.8110ms | 107.62K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 165.86K | ±0.63% | 6.0292ms | 7.5140ms | 82.93K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.87K | ±0.68% | 10.1144ms | 19.3060ms | 49.44K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.14K | ±0.63% | 45.1769ms | 57.9990ms | 11.07K |

**Key Insight:** Native Spread is **410.43x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 346.54K
🥈 Immer                ███ 29.66K
🥉 Craft                ███ 21.91K
   Immutability Helper  █ 6.31K
   Immutable.js         █ 676.42
   Seamless Immutable   █ 253.23
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 346.54K | ±0.91% | 2.8857ms | 3.6160ms | 173.27K |
| 🥈 | **Native Map** | 318.73K | ±0.80% | 3.1375ms | 4.0880ms | 159.37K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.66K | ±0.85% | 33.7099ms | 43.4710ms | 14.83K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.91K | ±0.74% | 45.6353ms | 55.7050ms | 10.96K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.31K | ±0.70% | 158.5472ms | 188.8130ms | 3.15K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 676.42 | ±1.42% | 1478.3727ms | 2125.0740ms | 339.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 253.23 | ±0.92% | 3949.0020ms | 4705.3590ms | 127.00 |

**Key Insight:** Mutative is **1368.49x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 275.35K
🥈 Craft                ███████████████████████████████████████ 269.43K
🥉 Mutative             █████████████████████████████ 200.87K
   Immutable.js         ██████████████████████ 152.75K
   Immer                ███████████████████ 127.52K
   Seamless Immutable   ███ 18.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.20M | ±1.28% | 0.1614ms | 0.1900ms | 3.10M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 275.35K | ±0.76% | 3.6317ms | 4.2480ms | 137.68K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 269.43K | ±1.05% | 3.7116ms | 4.5190ms | 134.71K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.87K | ±0.74% | 4.9783ms | 5.8410ms | 100.44K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 152.75K | ±1.05% | 6.5465ms | 10.3190ms | 76.38K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.52K | ±0.74% | 7.8418ms | 13.9860ms | 63.76K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.94K | ±0.78% | 52.7958ms | 65.6930ms | 9.47K |

**Key Insight:** Native Spread is **327.12x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T00:17:59.526Z*
