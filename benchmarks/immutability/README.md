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
- **Last Run:** 8:29:05 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.9/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.5/100 | 78.9% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.7/100 | 76.4% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.6/100 | 44.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 25.0/100 | 34.3% |
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
🥇 Craft                ████████████████████████████████████████ 207.98K
🥈 Immer                █████████████████████ 110.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 207.98K | ±2.42% | 4.8081ms | 9.1270ms | 104.02K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.34K | ±1.88% | 9.0630ms | 19.4760ms | 55.17K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 963.63K
🥈 Immer                █████ 128.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 963.63K | ±0.20% | 1.0377ms | 1.2030ms | 481.81K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 128.87K | ±1.85% | 7.7596ms | 17.2920ms | 64.44K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 169.51K
🥈 Immer                ██████████████ 59.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 169.51K | ±2.13% | 5.8993ms | 12.1630ms | 84.76K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.31K | ±2.11% | 16.8592ms | 31.2590ms | 29.66K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 709.30K
🥈 Mutative             ██████████████████████████ 456.66K
🥉 Immer                ██████████ 176.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 709.30K | ±1.77% | 1.4098ms | 3.0460ms | 354.65K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 456.66K | ±0.61% | 2.1898ms | 3.2160ms | 228.33K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.40K | ±1.18% | 5.6688ms | 11.3710ms | 88.20K |

**Key Insight:** Craft is **4.02x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.15M
🥈 Mutative             ███████████████ 422.65K
🥉 Immer                █████ 155.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.15M | ±0.66% | 0.8697ms | 1.2920ms | 574.93K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 422.65K | ±0.57% | 2.3660ms | 3.0860ms | 211.32K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 155.76K | ±0.75% | 6.4202ms | 13.0850ms | 77.88K |

**Key Insight:** Craft is **7.38x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 806.97K
🥈 Mutative             ██████████████████████ 445.27K
🥉 Immer                ████████ 164.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 806.97K | ±0.54% | 1.2392ms | 1.6730ms | 403.49K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.27K | ±0.56% | 2.2458ms | 2.7850ms | 222.63K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 164.33K | ±0.60% | 6.0853ms | 12.8340ms | 82.17K |

**Key Insight:** Craft is **4.91x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 790.47K
🥈 Mutative             ██████████████████████ 434.68K
🥉 Immer                █████████ 183.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 790.47K | ±0.71% | 1.2651ms | 1.7430ms | 395.23K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 434.68K | ±0.70% | 2.3006ms | 2.9350ms | 217.34K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 183.39K | ±0.55% | 5.4527ms | 8.0950ms | 91.70K |

**Key Insight:** Craft is **4.31x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.22K
🥈 Mutative             █████████████████████████████████ 144.63K
🥉 Immer                ██████████████████ 78.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.22K | ±0.74% | 5.6747ms | 8.4060ms | 88.11K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 144.63K | ±0.76% | 6.9142ms | 12.0030ms | 72.31K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.45K | ±0.93% | 12.7474ms | 23.6740ms | 39.23K |

**Key Insight:** Craft is **2.25x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 218.50K
🥈 Mutative             ██████████████ 74.03K
🥉 Immer                ██ 13.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 218.50K | ±0.62% | 4.5767ms | 5.9010ms | 109.25K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 74.03K | ±0.65% | 13.5074ms | 23.5640ms | 37.02K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.24K | ±0.88% | 75.5389ms | 139.8810ms | 6.62K |

**Key Insight:** Craft is **16.51x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 216.89K
🥈 Immer                █████████████ 69.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.89K | ±0.76% | 4.6106ms | 7.6540ms | 108.45K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.81K | ±0.41% | 14.3246ms | 25.0870ms | 34.91K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.07M
🥈 Immutability Helper  █████████████████████████████████████ 981.68K
🥉 Mutative             ████████████████████████████████████ 970.03K
   Craft                ██████████████████████████████████ 913.83K
   Immer                ██████████████████████████ 695.17K
   Seamless Immutable   █████ 127.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.71M | ±0.11% | 0.0680ms | 0.1000ms | 7.36M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.07M | ±0.22% | 0.9381ms | 1.1730ms | 532.99K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 981.68K | ±0.68% | 1.0187ms | 1.2930ms | 490.84K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 970.03K | ±0.64% | 1.0309ms | 1.5230ms | 485.01K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 913.83K | ±2.97% | 1.0943ms | 2.7250ms | 456.92K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 695.17K | ±2.22% | 1.4385ms | 3.2160ms | 347.59K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.88K | ±0.42% | 7.8195ms | 14.8970ms | 63.94K |

**Key Insight:** Native Spread is **115.04x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 519.25K
🥈 Mutative             ██████████████████████████████ 388.68K
🥉 Craft                █████████████████████████ 326.18K
   Immutable.js         ██████████████████ 230.43K
   Immer                ████████████ 150.00K
   Seamless Immutable   ███ 36.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.73M | ±0.18% | 0.0852ms | 0.1300ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 519.25K | ±0.58% | 1.9258ms | 2.8060ms | 259.63K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 388.68K | ±2.36% | 2.5728ms | 5.0790ms | 194.34K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 326.18K | ±3.13% | 3.0658ms | 5.4800ms | 163.09K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 230.43K | ±0.55% | 4.3397ms | 7.7450ms | 115.22K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 150.00K | ±2.24% | 6.6665ms | 15.5990ms | 75.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.89K | ±0.46% | 27.1045ms | 43.4600ms | 18.45K |

**Key Insight:** Native Spread is **317.96x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.71M
🥈 Immutability Helper  ██████████████████████████████████ 1.44M
🥉 Craft                ████████████ 498.37K
   Mutative             ██████████ 420.00K
   Immer                ██████ 275.31K
   Seamless Immutable   █ 61.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.22M | ±0.75% | 0.0818ms | 0.1200ms | 6.11M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.71M | ±3.89% | 0.5851ms | 0.9520ms | 854.51K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.44M | ±0.57% | 0.6938ms | 0.7810ms | 720.65K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 498.37K | ±0.81% | 2.0065ms | 2.4950ms | 249.19K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 420.00K | ±0.91% | 2.3810ms | 3.0760ms | 210.00K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 275.31K | ±0.75% | 3.6323ms | 7.6940ms | 137.65K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.32K | ±0.46% | 16.3071ms | 27.8320ms | 30.66K |

**Key Insight:** Native Spread is **199.24x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 777.07K
🥈 Immutability Helper  ██████████████████████████████ 580.14K
🥉 Craft                ████████████████ 314.35K
   Mutative             ███████████ 217.67K
   Immer                ███████ 141.26K
   Seamless Immutable   ███ 60.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.48M | ±1.88% | 0.0871ms | 0.1200ms | 5.74M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 777.07K | ±1.34% | 1.2869ms | 1.9130ms | 388.53K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.14K | ±0.40% | 1.7237ms | 1.8740ms | 290.07K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 314.35K | ±0.67% | 3.1812ms | 3.8580ms | 157.18K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.67K | ±0.64% | 4.5942ms | 5.7210ms | 108.83K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.26K | ±0.67% | 7.0793ms | 12.9040ms | 70.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.83K | ±0.84% | 16.4385ms | 26.0290ms | 30.42K |

**Key Insight:** Native Filter is **188.69x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 479.39K
🥈 Mutative             █████████████████████████████████████ 438.48K
🥉 Immutability Helper  ██████████████████████████████████ 403.33K
   Immer                ███████████████████████ 279.01K
   Immutable.js         ████████████████ 189.64K
   Seamless Immutable   ███ 30.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.35M | ±2.26% | 0.0966ms | 0.1400ms | 5.18M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 479.39K | ±1.45% | 2.0860ms | 2.7850ms | 239.70K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 438.48K | ±1.69% | 2.2806ms | 3.0360ms | 219.24K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 403.33K | ±0.47% | 2.4794ms | 3.3360ms | 201.66K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 279.01K | ±0.62% | 3.5840ms | 6.4020ms | 139.51K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.64K | ±1.57% | 5.2732ms | 6.0210ms | 94.82K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 30.81K | ±1.12% | 32.4620ms | 49.4220ms | 15.40K |

**Key Insight:** Native Map is **336.10x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 305.60K
🥈 Craft                ██████████████████████████████████ 256.72K
🥉 Mutative             ████████████████████████████ 210.31K
   Immutable.js         ████████████████████████ 179.98K
   Immer                █████████████ 96.98K
   Seamless Immutable   ███ 21.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.76M | ±1.22% | 0.1141ms | 0.1710ms | 4.38M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 305.60K | ±0.92% | 3.2723ms | 4.4890ms | 152.80K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 256.72K | ±0.99% | 3.8953ms | 4.7590ms | 128.36K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 210.31K | ±0.98% | 4.7548ms | 5.7810ms | 105.16K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 179.98K | ±0.49% | 5.5563ms | 6.8730ms | 89.99K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.98K | ±0.80% | 10.3113ms | 21.1700ms | 48.49K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 21.96K | ±0.64% | 45.5326ms | 81.0210ms | 10.98K |

**Key Insight:** Native Spread is **398.99x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 333.78K
🥈 Immer                ████ 29.69K
🥉 Craft                ███ 21.87K
   Immutability Helper  █ 6.37K
   Immutable.js         █ 697.46
   Seamless Immutable   █ 250.12
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 334.11K | ±1.55% | 2.9931ms | 3.7970ms | 167.05K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 333.78K | ±1.19% | 2.9960ms | 3.8370ms | 166.89K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.69K | ±0.80% | 33.6831ms | 46.5070ms | 14.85K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.87K | ±0.69% | 45.7342ms | 58.3080ms | 10.93K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.37K | ±0.75% | 157.0583ms | 187.2580ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 697.46 | ±2.11% | 1433.7803ms | 2345.1660ms | 349.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 250.12 | ±1.06% | 3998.1181ms | 4804.6650ms | 126.00 |

**Key Insight:** Native Map is **1335.80x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 269.36K
🥈 Craft                ███████████████████████████████████████ 261.59K
🥉 Mutative             █████████████████████████████ 196.57K
   Immutable.js         ███████████████████████ 157.69K
   Immer                ██████████████████ 123.38K
   Seamless Immutable   ███ 18.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.01M | ±2.16% | 0.1665ms | 0.1900ms | 3.00M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 269.36K | ±1.14% | 3.7126ms | 4.5390ms | 134.68K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 261.59K | ±1.24% | 3.8228ms | 4.6490ms | 130.79K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 196.57K | ±1.13% | 5.0873ms | 5.9510ms | 98.28K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 157.69K | ±1.38% | 6.3414ms | 8.2750ms | 78.85K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 123.38K | ±1.02% | 8.1050ms | 17.3620ms | 61.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.68K | ±0.93% | 53.5439ms | 70.6720ms | 9.34K |

**Key Insight:** Native Spread is **321.55x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T21:05:42.491Z*
