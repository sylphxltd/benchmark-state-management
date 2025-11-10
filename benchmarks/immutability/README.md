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
- **Last Run:** 12:17:59 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.4/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.7/100 | 77.2% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.3/100 | 75.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.2/100 | 43.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.6/100 | 33.5% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 4.0/100 | 5.4% |

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
🥇 Craft                ████████████████████████████████████████ 213.50K
🥈 Immer                █████████████████████ 110.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 213.50K | ±2.24% | 4.6839ms | 9.2270ms | 106.75K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.19K | ±1.84% | 9.0750ms | 19.2770ms | 55.10K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 998.28K
🥈 Immer                █████ 129.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 998.28K | ±0.45% | 1.0017ms | 1.4030ms | 499.14K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.57K | ±1.73% | 7.7176ms | 17.6930ms | 64.79K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 172.72K
🥈 Immer                ██████████████ 60.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 172.72K | ±1.86% | 5.7897ms | 11.2110ms | 86.36K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.39K | ±1.76% | 16.5601ms | 31.2990ms | 30.19K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 706.82K
🥈 Mutative             ██████████████████████████ 466.39K
🥉 Immer                ██████████ 175.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 706.82K | ±2.02% | 1.4148ms | 3.0860ms | 353.48K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 466.39K | ±0.81% | 2.1441ms | 2.9050ms | 233.20K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.19K | ±1.15% | 5.7082ms | 9.5270ms | 87.59K |

**Key Insight:** Craft is **4.03x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             █████████████ 416.47K
🥉 Immer                █████ 154.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.83% | 0.7923ms | 1.3130ms | 631.04K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 416.47K | ±0.72% | 2.4012ms | 3.3260ms | 208.23K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 154.69K | ±0.59% | 6.4645ms | 13.9360ms | 77.35K |

**Key Insight:** Craft is **8.16x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 842.45K
🥈 Mutative             █████████████████████ 445.56K
🥉 Immer                ████████ 163.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 842.45K | ±0.57% | 1.1870ms | 1.6530ms | 421.22K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 445.56K | ±0.58% | 2.2443ms | 2.8650ms | 222.78K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 163.22K | ±0.75% | 6.1267ms | 11.5720ms | 81.61K |

**Key Insight:** Craft is **5.16x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 831.11K
🥈 Mutative             █████████████████████ 436.62K
🥉 Immer                █████████ 179.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 831.11K | ±0.59% | 1.2032ms | 1.6030ms | 415.56K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 436.62K | ±0.58% | 2.2903ms | 2.9050ms | 218.31K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.31K | ±0.46% | 5.5771ms | 7.6840ms | 89.65K |

**Key Insight:** Craft is **4.64x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.21K
🥈 Mutative             ████████████████████████████████ 148.77K
🥉 Immer                █████████████████ 78.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 183.21K | ±0.52% | 5.4582ms | 8.5870ms | 91.61K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.77K | ±0.53% | 6.7219ms | 10.7200ms | 74.38K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.88K | ±0.69% | 12.6782ms | 24.4860ms | 39.44K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.58K
🥈 Mutative             █████████████ 75.44K
🥉 Immer                ██ 13.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.58K | ±0.56% | 4.4528ms | 6.5730ms | 112.29K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.44K | ±0.54% | 13.2559ms | 23.3740ms | 37.72K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.97K | ±0.48% | 71.5982ms | 89.2880ms | 6.98K |

**Key Insight:** Craft is **16.08x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 220.81K
🥈 Immer                █████████████ 69.08K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 220.81K | ±0.61% | 4.5288ms | 5.4100ms | 110.41K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.08K | ±0.52% | 14.4769ms | 26.3100ms | 34.54K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.04M
🥈 Mutative             ██████████████████████████████████████ 979.60K
🥉 Immutability Helper  ██████████████████████████████████████ 973.94K
   Craft                ████████████████████████████████████ 936.59K
   Immer                ██████████████████████████ 682.30K
   Seamless Immutable   █████ 127.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.34M | ±0.11% | 0.0697ms | 0.1100ms | 7.17M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.04M | ±0.25% | 0.9658ms | 1.6430ms | 517.72K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 979.60K | ±0.57% | 1.0208ms | 1.4320ms | 489.80K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 973.94K | ±0.63% | 1.0268ms | 1.4120ms | 486.97K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 936.59K | ±2.88% | 1.0677ms | 2.7450ms | 468.30K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 682.30K | ±1.87% | 1.4656ms | 3.2870ms | 341.15K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.87K | ±0.45% | 7.8205ms | 15.1680ms | 63.94K |

**Key Insight:** Native Spread is **112.14x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 517.42K
🥈 Mutative             ██████████████████████████████ 381.60K
🥉 Craft                █████████████████████████ 325.81K
   Immutable.js         ██████████████████ 229.59K
   Immer                ████████████ 149.41K
   Seamless Immutable   ███ 37.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.74M | ±0.17% | 0.0852ms | 0.1310ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 517.42K | ±0.59% | 1.9327ms | 2.6650ms | 258.71K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 381.60K | ±3.83% | 2.6205ms | 4.9090ms | 190.80K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 325.81K | ±3.08% | 3.0693ms | 5.7200ms | 162.91K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 229.59K | ±0.69% | 4.3555ms | 5.2900ms | 114.80K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 149.41K | ±2.66% | 6.6928ms | 13.3140ms | 74.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.86K | ±0.42% | 26.4112ms | 36.5370ms | 18.93K |

**Key Insight:** Native Spread is **310.02x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.69M
🥈 Immutability Helper  █████████████████████████████████ 1.39M
🥉 Craft                ████████████ 500.98K
   Mutative             ██████████ 415.76K
   Immer                ███████ 275.61K
   Seamless Immutable   █ 61.78K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 12.16M | ±0.79% | 0.0822ms | 0.1200ms | 6.08M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.69M | ±0.78% | 0.5929ms | 1.1020ms | 843.30K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.39M | ±0.53% | 0.7217ms | 0.8220ms | 692.82K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 500.98K | ±0.81% | 1.9961ms | 2.6540ms | 250.49K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 415.76K | ±0.95% | 2.4052ms | 3.1060ms | 207.88K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 275.61K | ±0.71% | 3.6283ms | 7.1640ms | 137.81K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.78K | ±0.44% | 16.1872ms | 26.6600ms | 30.89K |

**Key Insight:** Native Spread is **196.88x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 778.11K
🥈 Immutability Helper  █████████████████████████████ 570.87K
🥉 Craft                ████████████████ 316.90K
   Mutative             ███████████ 217.00K
   Immer                ███████ 139.62K
   Seamless Immutable   ███ 60.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.77M | ±1.65% | 0.0850ms | 0.1100ms | 5.88M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 778.11K | ±0.96% | 1.2852ms | 1.7630ms | 389.06K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 570.87K | ±0.38% | 1.7517ms | 2.1240ms | 285.44K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 316.90K | ±0.60% | 3.1555ms | 3.8370ms | 158.45K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.00K | ±0.63% | 4.6082ms | 5.8310ms | 108.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 139.62K | ±0.56% | 7.1623ms | 16.9120ms | 69.81K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.33K | ±0.81% | 16.5745ms | 26.5800ms | 30.17K |

**Key Insight:** Native Filter is **195.01x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 483.96K
🥈 Mutative             ████████████████████████████████████ 440.15K
🥉 Immutability Helper  █████████████████████████████████ 397.59K
   Immer                ███████████████████████ 281.53K
   Immutable.js         ███████████████ 180.74K
   Seamless Immutable   ███ 31.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.52M | ±2.15% | 0.0951ms | 0.1300ms | 5.26M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 483.96K | ±1.39% | 2.0663ms | 2.6650ms | 241.98K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 440.15K | ±1.53% | 2.2719ms | 2.7760ms | 220.08K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 397.59K | ±0.59% | 2.5151ms | 3.3060ms | 198.80K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 281.53K | ±0.37% | 3.5520ms | 4.3880ms | 140.76K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 180.74K | ±1.56% | 5.5327ms | 8.4360ms | 90.37K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.35K | ±1.08% | 31.9022ms | 43.2810ms | 15.67K |

**Key Insight:** Native Map is **335.56x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 306.30K
🥈 Craft                ███████████████████████████████████ 264.42K
🥉 Mutative             ████████████████████████████ 212.71K
   Immutable.js         ███████████████████████ 173.78K
   Immer                █████████████ 97.85K
   Seamless Immutable   ███ 22.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.60M | ±1.11% | 0.1163ms | 0.1510ms | 4.30M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 306.30K | ±0.89% | 3.2647ms | 3.9880ms | 153.15K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 264.42K | ±0.91% | 3.7818ms | 4.5590ms | 132.21K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 212.71K | ±0.87% | 4.7013ms | 8.0850ms | 106.35K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 173.78K | ±0.38% | 5.7544ms | 7.8040ms | 86.89K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.85K | ±0.76% | 10.2201ms | 19.7770ms | 48.92K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.18K | ±0.61% | 45.0878ms | 57.4090ms | 11.09K |

**Key Insight:** Native Spread is **387.57x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 333.60K
🥈 Immer                ████ 29.34K
🥉 Craft                ███ 21.92K
   Immutability Helper  █ 6.27K
   Immutable.js         █ 716.75
   Seamless Immutable   █ 254.61
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 343.29K | ±1.10% | 2.9130ms | 3.8680ms | 171.65K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 333.60K | ±1.02% | 2.9976ms | 4.9290ms | 166.80K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.34K | ±0.80% | 34.0819ms | 51.1760ms | 14.67K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.92K | ±0.64% | 45.6229ms | 58.8200ms | 10.96K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.27K | ±0.74% | 159.3870ms | 185.0690ms | 3.14K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 716.75 | ±1.80% | 1395.1958ms | 2188.4350ms | 359.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.61 | ±1.16% | 3927.5346ms | 4724.7840ms | 128.00 |

**Key Insight:** Native Map is **1348.30x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 270.23K
🥈 Craft                ███████████████████████████████████████ 265.38K
🥉 Mutative             █████████████████████████████ 193.28K
   Immutable.js         ███████████████████████ 155.36K
   Immer                ███████████████████ 125.06K
   Seamless Immutable   ███ 18.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.13M | ±1.98% | 0.1631ms | 0.1800ms | 3.07M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 270.23K | ±1.09% | 3.7005ms | 4.5690ms | 135.12K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 265.38K | ±1.28% | 3.7682ms | 6.3720ms | 132.69K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 193.28K | ±1.26% | 5.1738ms | 6.2020ms | 96.64K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 155.36K | ±1.33% | 6.4366ms | 7.8450ms | 77.68K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.06K | ±1.13% | 7.9960ms | 12.0220ms | 62.53K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.66K | ±0.88% | 53.5802ms | 74.4710ms | 9.33K |

**Key Insight:** Native Spread is **328.60x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T01:43:46.486Z*
