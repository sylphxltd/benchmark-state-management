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
- **Last Run:** 6:15:32 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.2/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.1/100 | 78.0% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.9/100 | 73.6% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 43.7% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.5% |
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
🥇 Craft                ████████████████████████████████████████ 217.96K
🥈 Immer                ████████████████████ 111.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.96K | ±1.95% | 4.5880ms | 9.2170ms | 108.98K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.45K | ±1.81% | 8.9724ms | 25.6670ms | 55.73K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 948.57K
🥈 Immer                ██████ 131.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 948.57K | ±0.16% | 1.0542ms | 1.3520ms | 474.29K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.80K | ±1.43% | 7.5875ms | 15.7200ms | 65.90K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 179.11K
🥈 Immer                █████████████ 60.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 179.11K | ±1.42% | 5.5831ms | 10.7900ms | 89.56K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.41K | ±1.36% | 16.5527ms | 30.6570ms | 30.21K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 722.28K
🥈 Mutative             ██████████████████████████ 472.97K
🥉 Immer                ██████████ 178.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 722.28K | ±1.49% | 1.3845ms | 2.7340ms | 361.14K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 472.97K | ±0.63% | 2.1143ms | 2.6650ms | 236.49K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.32K | ±0.82% | 5.6078ms | 9.5380ms | 89.16K |

**Key Insight:** Craft is **4.05x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.21M
🥈 Mutative             ██████████████ 433.39K
🥉 Immer                █████ 157.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.21M | ±0.41% | 0.8259ms | 1.1420ms | 605.41K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 433.39K | ±0.39% | 2.3074ms | 2.6750ms | 216.69K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.86K | ±0.53% | 6.3348ms | 12.0930ms | 78.93K |

**Key Insight:** Craft is **7.67x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 842.38K
🥈 Mutative             █████████████████████ 450.02K
🥉 Immer                ████████ 169.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 842.38K | ±0.38% | 1.1871ms | 1.5030ms | 421.19K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 450.02K | ±0.40% | 2.2221ms | 2.5950ms | 225.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.94K | ±0.30% | 5.8843ms | 8.9670ms | 84.97K |

**Key Insight:** Craft is **4.96x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 816.75K
🥈 Mutative             ██████████████████████ 444.43K
🥉 Immer                █████████ 182.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 816.75K | ±0.46% | 1.2244ms | 1.5830ms | 408.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 444.43K | ±0.40% | 2.2501ms | 2.6760ms | 222.21K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.47K | ±0.30% | 5.4803ms | 7.3940ms | 91.24K |

**Key Insight:** Craft is **4.48x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 188.48K
🥈 Mutative             ████████████████████████████████ 152.75K
🥉 Immer                █████████████████ 80.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 188.48K | ±0.46% | 5.3056ms | 8.0250ms | 94.24K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 152.75K | ±0.45% | 6.5464ms | 9.9090ms | 76.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.45K | ±0.69% | 12.4307ms | 24.3460ms | 40.22K |

**Key Insight:** Craft is **2.34x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 231.43K
🥈 Mutative             █████████████ 78.03K
🥉 Immer                ██ 13.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 231.43K | ±0.43% | 4.3210ms | 5.5800ms | 115.73K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 78.03K | ±0.46% | 12.8156ms | 22.4220ms | 39.02K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.64K | ±0.28% | 73.2997ms | 86.6010ms | 6.82K |

**Key Insight:** Craft is **16.96x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.56K
🥈 Immer                █████████████ 72.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.56K | ±0.35% | 4.4532ms | 5.3500ms | 112.28K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.08K | ±0.29% | 13.8744ms | 24.5050ms | 36.04K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.09M
🥈 Mutative             ████████████████████████████████████ 992.63K
🥉 Craft                ████████████████████████████████████ 974.27K
   Immutability Helper  ████████████████████████████████████ 971.69K
   Immer                ██████████████████████████ 699.60K
   Seamless Immutable   █████ 128.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.23M | ±0.10% | 0.0703ms | 0.1100ms | 7.11M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.09M | ±0.28% | 0.9188ms | 1.5130ms | 544.19K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 992.63K | ±0.13% | 1.0074ms | 1.2420ms | 496.31K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 974.27K | ±2.49% | 1.0264ms | 2.6950ms | 487.13K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 971.69K | ±0.15% | 1.0291ms | 1.9030ms | 485.85K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 699.60K | ±1.63% | 1.4294ms | 3.2560ms | 349.80K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.85K | ±0.28% | 7.7612ms | 15.2890ms | 64.42K |

**Key Insight:** Native Spread is **110.43x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 524.08K
🥈 Mutative             █████████████████████████████ 384.41K
🥉 Craft                ██████████████████████████ 343.38K
   Immutable.js         ██████████████████ 231.49K
   Immer                ████████████ 156.39K
   Seamless Immutable   ███ 37.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.54M | ±0.17% | 0.0866ms | 0.1400ms | 5.77M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 524.08K | ±0.30% | 1.9081ms | 2.1740ms | 262.04K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 384.41K | ±3.40% | 2.6014ms | 4.9800ms | 192.21K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 343.38K | ±2.44% | 2.9123ms | 5.3200ms | 172.00K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 231.49K | ±0.60% | 4.3198ms | 6.4220ms | 115.75K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 156.39K | ±1.87% | 6.3941ms | 11.7220ms | 78.20K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.84K | ±0.31% | 26.4289ms | 36.9490ms | 18.92K |

**Key Insight:** Native Spread is **305.01x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.74M
🥈 Immutability Helper  ████████████████████████████████ 1.41M
🥉 Craft                ████████████ 517.51K
   Mutative             ██████████ 427.96K
   Immer                ██████ 282.55K
   Seamless Immutable   █ 63.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.38M | ±1.14% | 0.0879ms | 0.1200ms | 5.69M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.74M | ±0.47% | 0.5749ms | 0.7720ms | 869.66K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.41M | ±0.53% | 0.7117ms | 0.7810ms | 702.53K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 517.51K | ±0.35% | 1.9323ms | 2.2540ms | 258.75K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 427.96K | ±0.46% | 2.3367ms | 2.7550ms | 213.98K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 282.55K | ±0.32% | 3.5392ms | 4.0380ms | 141.28K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 63.06K | ±0.42% | 15.8573ms | 25.3580ms | 31.53K |

**Key Insight:** Native Spread is **180.49x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 783.54K
🥈 Immutability Helper  █████████████████████████████ 568.83K
🥉 Craft                ████████████████ 320.79K
   Mutative             ███████████ 217.92K
   Immer                ███████ 141.62K
   Seamless Immutable   ███ 58.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.61M | ±0.92% | 0.0793ms | 0.1100ms | 6.30M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 783.54K | ±0.78% | 1.2763ms | 1.5830ms | 391.77K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 568.83K | ±0.28% | 1.7580ms | 1.9040ms | 284.42K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 320.79K | ±0.47% | 3.1174ms | 3.5060ms | 160.39K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.92K | ±0.61% | 4.5889ms | 5.2400ms | 108.96K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.62K | ±0.44% | 7.0612ms | 9.0370ms | 70.81K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 58.49K | ±1.54% | 17.0972ms | 34.1740ms | 29.25K |

**Key Insight:** Native Filter is **215.53x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 498.71K
🥈 Mutative             █████████████████████████████████████ 462.60K
🥉 Immutability Helper  ████████████████████████████████ 395.24K
   Immer                ██████████████████████ 276.03K
   Immutable.js         ███████████████ 189.42K
   Seamless Immutable   ██ 31.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.59M | ±0.61% | 0.0863ms | 0.1200ms | 5.79M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 498.71K | ±0.29% | 2.0052ms | 2.4050ms | 249.36K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 462.60K | ±0.62% | 2.1617ms | 2.6950ms | 231.30K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 395.24K | ±0.45% | 2.5301ms | 4.2880ms | 197.62K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 276.03K | ±0.66% | 3.6228ms | 7.2240ms | 138.01K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.42K | ±0.36% | 5.2794ms | 6.5430ms | 94.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.04K | ±0.35% | 32.2163ms | 64.8600ms | 15.52K |

**Key Insight:** Native Map is **373.38x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 313.61K
🥈 Craft                ██████████████████████████████████ 269.43K
🥉 Mutative             ████████████████████████████ 217.27K
   Immutable.js         ██████████████████████ 174.78K
   Immer                █████████████ 98.24K
   Seamless Immutable   ███ 22.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.90M | ±0.76% | 0.1124ms | 0.1810ms | 4.45M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 313.61K | ±0.42% | 3.1887ms | 3.5470ms | 156.81K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 269.43K | ±0.46% | 3.7115ms | 4.3880ms | 134.72K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 217.27K | ±0.48% | 4.6025ms | 5.2900ms | 108.64K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 174.78K | ±0.28% | 5.7214ms | 6.8630ms | 87.39K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.24K | ±0.47% | 10.1791ms | 19.2960ms | 49.12K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.36K | ±0.33% | 44.7323ms | 54.7820ms | 11.18K |

**Key Insight:** Native Spread is **398.09x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 363.67K
🥈 Immer                ███ 29.57K
🥉 Craft                ██ 21.99K
   Immutability Helper  █ 6.25K
   Immutable.js         █ 725.32
   Seamless Immutable   █ 252.85
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 363.67K | ±0.80% | 2.7497ms | 3.5660ms | 181.84K |
| 🥈 | **Native Map** | 346.95K | ±0.67% | 2.8823ms | 3.5170ms | 173.48K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.57K | ±0.49% | 33.8145ms | 43.7910ms | 14.79K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.99K | ±0.51% | 45.4753ms | 57.0960ms | 10.99K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.25K | ±0.42% | 160.1200ms | 184.5630ms | 3.12K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 725.32 | ±1.15% | 1378.7059ms | 1887.6930ms | 363.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.85 | ±0.95% | 3954.8448ms | 4695.1480ms | 127.00 |

**Key Insight:** Mutative is **1438.28x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 276.81K
🥈 Craft                ████████████████████████████████████████ 273.89K
🥉 Mutative             █████████████████████████████ 197.34K
   Immutable.js         ███████████████████████ 161.24K
   Immer                ███████████████████ 128.03K
   Seamless Immutable   ███ 19.06K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.31M | ±1.06% | 0.1584ms | 0.1800ms | 3.16M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 276.81K | ±0.57% | 3.6126ms | 4.2880ms | 138.40K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.89K | ±0.50% | 3.6511ms | 4.0870ms | 136.94K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.34K | ±0.60% | 5.0675ms | 9.3970ms | 98.67K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 161.24K | ±0.61% | 6.2018ms | 7.7750ms | 80.62K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 128.03K | ±0.53% | 7.8109ms | 12.6630ms | 64.01K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.06K | ±0.55% | 52.4742ms | 62.5060ms | 9.53K |

**Key Insight:** Native Spread is **331.35x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T18:41:36.423Z*
