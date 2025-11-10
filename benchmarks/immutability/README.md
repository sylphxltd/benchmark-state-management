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
- **Last Run:** 1:05:45 PM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.1/100 | 78.4% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.8/100 | 75.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.5/100 | 44.6% |
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
🥇 Craft                ████████████████████████████████████████ 217.34K
🥈 Immer                █████████████████████ 114.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.34K | ±1.90% | 4.6010ms | 9.0460ms | 108.67K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 114.18K | ±1.68% | 8.7581ms | 19.0350ms | 57.09K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 992.04K
🥈 Immer                █████ 130.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 992.04K | ±0.16% | 1.0080ms | 1.1520ms | 496.02K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 130.91K | ±1.41% | 7.6386ms | 14.0470ms | 65.46K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.44K
🥈 Immer                ██████████████ 61.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.44K | ±1.47% | 5.6358ms | 11.6420ms | 88.72K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.58K | ±1.42% | 16.2400ms | 29.8260ms | 30.79K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 728.15K
🥈 Mutative             ██████████████████████████ 475.18K
🥉 Immer                ██████████ 179.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 728.15K | ±1.69% | 1.3734ms | 2.9050ms | 364.07K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 475.18K | ±0.65% | 2.1045ms | 3.3360ms | 237.59K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.05K | ±0.89% | 5.5849ms | 11.3420ms | 89.53K |

**Key Insight:** Craft is **4.07x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.20M
🥈 Mutative             ██████████████ 421.51K
🥉 Immer                █████ 157.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.20M | ±0.42% | 0.8348ms | 1.1820ms | 598.92K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 421.51K | ±0.43% | 2.3724ms | 3.1360ms | 210.75K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.67K | ±0.55% | 6.3423ms | 12.3130ms | 78.84K |

**Key Insight:** Craft is **7.60x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 833.33K
🥈 Mutative             ██████████████████████ 451.91K
🥉 Immer                ████████ 169.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 833.33K | ±0.35% | 1.2000ms | 1.4730ms | 416.67K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.91K | ±0.37% | 2.2128ms | 2.5350ms | 225.95K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.04K | ±0.30% | 5.9158ms | 9.6280ms | 84.52K |

**Key Insight:** Craft is **4.93x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 803.16K
🥈 Mutative             ██████████████████████ 442.82K
🥉 Immer                █████████ 181.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 803.16K | ±0.37% | 1.2451ms | 1.5220ms | 401.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 442.82K | ±0.40% | 2.2583ms | 2.5750ms | 221.41K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.67K | ±0.30% | 5.5045ms | 10.7100ms | 90.83K |

**Key Insight:** Craft is **4.42x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 185.23K
🥈 Mutative             ████████████████████████████████ 150.44K
🥉 Immer                █████████████████ 79.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 185.23K | ±0.44% | 5.3988ms | 6.4620ms | 92.63K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.44K | ±0.47% | 6.6473ms | 11.8720ms | 75.22K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.44K | ±0.82% | 12.5874ms | 23.7750ms | 39.72K |

**Key Insight:** Craft is **2.33x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.59K
🥈 Mutative             ██████████████ 75.52K
🥉 Immer                ██ 13.79K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.59K | ±0.40% | 4.4724ms | 5.1500ms | 111.80K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.52K | ±0.43% | 13.2424ms | 23.3530ms | 37.76K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.79K | ±0.67% | 72.5389ms | 99.3950ms | 6.89K |

**Key Insight:** Craft is **16.22x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 229.23K
🥈 Immer                █████████████ 72.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 229.23K | ±0.30% | 4.3624ms | 4.9890ms | 114.62K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.57K | ±0.23% | 13.7803ms | 24.0560ms | 36.28K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.08M
🥈 Mutative             ████████████████████████████████████ 987.61K
🥉 Immutability Helper  ████████████████████████████████████ 971.93K
   Craft                ███████████████████████████████████ 962.31K
   Immer                █████████████████████████ 682.66K
   Seamless Immutable   █████ 130.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.61M | ±0.09% | 0.0684ms | 0.1000ms | 7.31M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.08M | ±0.16% | 0.9220ms | 1.0520ms | 542.28K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 987.61K | ±0.14% | 1.0125ms | 1.2030ms | 493.80K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 971.93K | ±0.16% | 1.0289ms | 1.2630ms | 485.96K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 962.31K | ±2.46% | 1.0392ms | 2.6350ms | 481.16K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 682.66K | ±1.92% | 1.4649ms | 3.1950ms | 341.33K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 130.78K | ±0.28% | 7.6466ms | 14.2360ms | 65.39K |

**Key Insight:** Native Spread is **111.75x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 530.13K
🥈 Mutative             █████████████████████████████ 389.51K
🥉 Craft                ████████████████████████ 320.10K
   Immutable.js         █████████████████ 229.19K
   Immer                ███████████ 146.67K
   Seamless Immutable   ███ 36.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.81M | ±0.13% | 0.0847ms | 0.1100ms | 5.91M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 530.13K | ±0.27% | 1.8863ms | 2.1040ms | 265.06K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 389.51K | ±2.91% | 2.5673ms | 4.8490ms | 194.76K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 320.10K | ±2.87% | 3.1240ms | 6.5320ms | 160.05K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 229.19K | ±0.38% | 4.3632ms | 8.3660ms | 114.60K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 146.67K | ±2.42% | 6.8182ms | 13.6860ms | 73.33K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.73K | ±0.33% | 27.2258ms | 48.2490ms | 18.36K |

**Key Insight:** Native Spread is **321.56x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.79M
🥈 Immutability Helper  ███████████████████████████████ 1.41M
🥉 Craft                ███████████ 514.89K
   Mutative             ██████████ 428.69K
   Immer                ██████ 282.75K
   Seamless Immutable   █ 60.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.56M | ±1.12% | 0.0865ms | 0.1200ms | 5.78M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.79M | ±0.44% | 0.5574ms | 0.7910ms | 897.00K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.41% | 0.7087ms | 0.7610ms | 705.50K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 514.89K | ±0.34% | 1.9421ms | 2.2440ms | 257.45K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 428.69K | ±0.46% | 2.3327ms | 2.7550ms | 214.35K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 282.75K | ±0.33% | 3.5366ms | 7.0440ms | 141.38K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.87K | ±0.36% | 16.4289ms | 26.2090ms | 30.43K |

**Key Insight:** Native Spread is **189.87x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 776.68K
🥈 Immutability Helper  ██████████████████████████████ 580.85K
🥉 Craft                ████████████████ 319.61K
   Mutative             ███████████ 217.00K
   Immer                ███████ 144.22K
   Seamless Immutable   ███ 60.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.83M | ±0.87% | 0.0780ms | 0.1110ms | 6.41M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 776.68K | ±0.77% | 1.2875ms | 1.5630ms | 388.34K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.85K | ±0.26% | 1.7216ms | 1.8240ms | 290.42K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 319.61K | ±0.75% | 3.1288ms | 3.7070ms | 159.80K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.00K | ±0.57% | 4.6083ms | 5.2800ms | 108.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 144.22K | ±0.43% | 6.9339ms | 11.9020ms | 72.11K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.46K | ±0.44% | 16.5408ms | 26.3490ms | 30.23K |

**Key Insight:** Native Filter is **212.15x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 487.23K
🥈 Mutative             ██████████████████████████████████████ 461.88K
🥉 Immutability Helper  █████████████████████████████████ 403.99K
   Immer                ███████████████████████ 283.03K
   Immutable.js         ████████████████ 196.79K
   Seamless Immutable   ███ 31.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.19M | ±1.10% | 0.0894ms | 0.1200ms | 5.60M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 487.23K | ±0.41% | 2.0524ms | 2.4350ms | 243.62K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 461.88K | ±0.49% | 2.1651ms | 2.5350ms | 230.94K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 403.99K | ±0.21% | 2.4753ms | 2.8950ms | 202.00K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 283.03K | ±0.24% | 3.5332ms | 7.2540ms | 141.52K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 196.79K | ±0.47% | 5.0815ms | 5.6910ms | 98.40K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.45K | ±0.43% | 31.7975ms | 42.0190ms | 15.72K |

**Key Insight:** Native Map is **355.85x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 312.22K
🥈 Craft                ██████████████████████████████████ 268.31K
🥉 Mutative             ███████████████████████████ 213.94K
   Immutable.js         ███████████████████████ 178.22K
   Immer                █████████████ 98.90K
   Seamless Immutable   ███ 22.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.85M | ±0.90% | 0.1130ms | 0.1500ms | 4.42M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 312.22K | ±0.53% | 3.2028ms | 3.5370ms | 156.11K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 268.31K | ±0.62% | 3.7271ms | 6.2820ms | 134.16K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.94K | ±0.66% | 4.6742ms | 5.9110ms | 106.97K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 178.22K | ±0.31% | 5.6110ms | 6.6720ms | 89.11K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.90K | ±0.48% | 10.1109ms | 19.5860ms | 49.45K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.57K | ±0.40% | 44.3004ms | 56.3750ms | 11.29K |

**Key Insight:** Native Spread is **391.96x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 351.48K
🥈 Immer                ███ 29.87K
🥉 Craft                ███ 22.03K
   Immutability Helper  █ 6.51K
   Immutable.js         █ 741.15
   Seamless Immutable   █ 257.31
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 361.91K | ±0.49% | 2.7631ms | 3.4570ms | 180.95K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 351.48K | ±0.86% | 2.8451ms | 5.0900ms | 175.74K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.87K | ±0.42% | 33.4786ms | 49.1320ms | 14.94K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.03K | ±0.30% | 45.3967ms | 64.6310ms | 11.02K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.51K | ±0.26% | 153.5584ms | 173.9650ms | 3.26K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 741.15 | ±1.17% | 1349.2561ms | 1911.8350ms | 371.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 257.31 | ±0.70% | 3886.3619ms | 4840.2680ms | 129.00 |

**Key Insight:** Native Map is **1406.50x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.44K
🥈 Craft                ███████████████████████████████████████ 271.16K
🥉 Mutative             █████████████████████████████ 199.62K
   Immutable.js         ████████████████████████ 165.79K
   Immer                ███████████████████ 128.51K
   Seamless Immutable   ███ 19.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.49M | ±0.54% | 0.1541ms | 0.1910ms | 3.25M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.44K | ±0.29% | 3.6044ms | 3.9380ms | 138.72K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.16K | ±0.50% | 3.6879ms | 5.6100ms | 135.58K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 199.62K | ±0.39% | 5.0094ms | 5.4600ms | 99.81K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 165.79K | ±0.55% | 6.0316ms | 7.5950ms | 82.90K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.51K | ±0.33% | 7.7817ms | 14.6870ms | 64.25K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.20K | ±0.32% | 52.0722ms | 62.4170ms | 9.60K |

**Key Insight:** Native Spread is **338.01x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T14:37:01.633Z*
