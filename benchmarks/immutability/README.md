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
- **Last Run:** 7:18:14 PM UTC
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
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.2/100 | 78.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.2/100 | 74.3% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.8/100 | 43.6% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.6% |
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
🥇 Craft                ████████████████████████████████████████ 219.71K
🥈 Immer                █████████████████████ 113.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 219.71K | ±1.88% | 4.5514ms | 8.7160ms | 109.86K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 113.51K | ±1.62% | 8.8096ms | 24.3360ms | 56.76K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.02M
🥈 Immer                █████ 132.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.02M | ±0.16% | 0.9847ms | 1.1020ms | 507.79K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.90K | ±1.48% | 7.5246ms | 15.9600ms | 66.45K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.38K
🥈 Immer                ██████████████ 60.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.38K | ±1.70% | 5.6696ms | 11.1100ms | 88.19K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.74K | ±1.58% | 16.4640ms | 33.0320ms | 30.37K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 733.17K
🥈 Mutative             ██████████████████████████ 478.58K
🥉 Immer                ██████████ 179.81K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 733.17K | ±1.55% | 1.3639ms | 2.9650ms | 366.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 478.58K | ±0.71% | 2.0895ms | 3.5170ms | 239.29K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 179.81K | ±0.88% | 5.5614ms | 9.6580ms | 89.91K |

**Key Insight:** Craft is **4.08x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.22M
🥈 Mutative             ██████████████ 433.71K
🥉 Immer                █████ 156.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.22M | ±0.37% | 0.8180ms | 1.0920ms | 611.27K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 433.71K | ±0.38% | 2.3057ms | 2.6450ms | 216.86K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.34K | ±0.53% | 6.3965ms | 12.1620ms | 78.17K |

**Key Insight:** Craft is **7.82x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 853.51K
🥈 Mutative             ██████████████████████ 462.56K
🥉 Immer                ████████ 169.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 853.51K | ±0.37% | 1.1716ms | 1.4630ms | 426.75K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 462.56K | ±0.36% | 2.1619ms | 2.4750ms | 231.28K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.84K | ±0.31% | 5.8877ms | 13.3950ms | 84.92K |

**Key Insight:** Craft is **5.03x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 830.61K
🥈 Mutative             ██████████████████████ 451.19K
🥉 Immer                █████████ 185.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 830.61K | ±0.39% | 1.2039ms | 1.5320ms | 415.30K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 451.19K | ±0.45% | 2.2163ms | 2.8160ms | 225.60K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 185.36K | ±0.29% | 5.3950ms | 7.7040ms | 92.68K |

**Key Insight:** Craft is **4.48x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 182.58K
🥈 Mutative             █████████████████████████████████ 149.79K
🥉 Immer                █████████████████ 79.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 182.58K | ±0.45% | 5.4771ms | 7.9350ms | 91.29K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.79K | ±0.43% | 6.6758ms | 9.9380ms | 74.90K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.82K | ±0.75% | 12.5279ms | 23.1630ms | 39.91K |

**Key Insight:** Craft is **2.29x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 223.90K
🥈 Mutative             ██████████████ 76.63K
🥉 Immer                ██ 13.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 223.90K | ±0.41% | 4.4663ms | 5.4300ms | 111.95K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.63K | ±0.43% | 13.0498ms | 22.8030ms | 38.31K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.51K | ±0.36% | 74.0101ms | 131.7470ms | 6.76K |

**Key Insight:** Craft is **16.57x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 227.29K
🥈 Immer                █████████████ 72.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 227.29K | ±0.34% | 4.3996ms | 5.7610ms | 113.65K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 72.67K | ±0.29% | 13.7617ms | 24.3950ms | 36.33K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Immutability Helper  ██████████████████████████████████████ 1.00M
🥉 Mutative             █████████████████████████████████████ 982.17K
   Craft                ████████████████████████████████████ 964.26K
   Immer                ███████████████████████████ 705.94K
   Seamless Immutable   █████ 131.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.60M | ±0.09% | 0.0685ms | 0.1100ms | 7.30M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.14% | 0.9461ms | 1.0820ms | 528.49K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.00M | ±0.28% | 0.9971ms | 1.2220ms | 501.47K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 982.17K | ±0.41% | 1.0182ms | 1.7330ms | 491.08K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 964.26K | ±2.43% | 1.0371ms | 2.6750ms | 482.13K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 705.94K | ±1.82% | 1.4166ms | 3.2070ms | 352.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 131.46K | ±0.20% | 7.6071ms | 9.9890ms | 65.73K |

**Key Insight:** Native Spread is **111.04x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 520.39K
🥈 Mutative             ███████████████████████████████ 397.55K
🥉 Craft                ███████████████████████████ 350.48K
   Immutable.js         █████████████████ 227.40K
   Immer                ████████████ 154.60K
   Seamless Immutable   ███ 37.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.73M | ±0.09% | 0.0853ms | 0.1400ms | 5.86M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 520.39K | ±0.59% | 1.9216ms | 2.4750ms | 260.20K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 397.55K | ±0.51% | 2.5154ms | 2.8350ms | 198.78K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 350.48K | ±2.55% | 2.8532ms | 4.7490ms | 175.24K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 227.40K | ±0.62% | 4.3974ms | 5.0190ms | 113.70K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.60K | ±1.85% | 6.4684ms | 14.7870ms | 77.30K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.59K | ±0.41% | 26.6059ms | 36.1770ms | 18.79K |

**Key Insight:** Native Spread is **312.05x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.83M
🥈 Immutability Helper  ███████████████████████████████ 1.42M
🥉 Craft                ███████████ 495.91K
   Mutative             █████████ 421.28K
   Immer                ██████ 281.72K
   Seamless Immutable   █ 61.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.36M | ±22.19% | 0.0965ms | 0.1200ms | 5.18M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.83M | ±0.68% | 0.5472ms | 0.9910ms | 913.66K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.42M | ±0.62% | 0.7062ms | 0.7610ms | 708.00K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 495.91K | ±0.54% | 2.0165ms | 2.5540ms | 247.96K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 421.28K | ±0.61% | 2.3737ms | 2.7650ms | 210.64K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 281.72K | ±0.58% | 3.5496ms | 5.6000ms | 140.86K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.14K | ±0.50% | 16.3547ms | 25.8390ms | 30.57K |

**Key Insight:** Native Spread is **169.47x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 800.77K
🥈 Immutability Helper  █████████████████████████████ 580.20K
🥉 Craft                ████████████████ 318.78K
   Mutative             ███████████ 217.86K
   Immer                ███████ 143.87K
   Seamless Immutable   ███ 61.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.56M | ±0.96% | 0.0796ms | 0.1100ms | 6.28M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 800.77K | ±0.54% | 1.2488ms | 1.5630ms | 400.39K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.20K | ±0.13% | 1.7235ms | 1.8740ms | 290.10K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 318.78K | ±0.23% | 3.1370ms | 3.4960ms | 159.39K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.86K | ±0.27% | 4.5901ms | 5.2800ms | 108.93K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 143.87K | ±0.31% | 6.9506ms | 11.8220ms | 71.94K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.48K | ±0.35% | 16.2643ms | 26.0080ms | 30.74K |

**Key Insight:** Native Filter is **204.30x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 496.95K
🥈 Mutative             █████████████████████████████████████ 456.94K
🥉 Immutability Helper  ████████████████████████████████ 402.56K
   Immer                ███████████████████████ 289.63K
   Immutable.js         ███████████████ 188.59K
   Seamless Immutable   ███ 31.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.66M | ±0.64% | 0.0858ms | 0.1310ms | 5.83M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 496.95K | ±0.55% | 2.0123ms | 2.3650ms | 248.47K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 456.94K | ±0.59% | 2.1885ms | 2.5750ms | 228.47K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 402.56K | ±0.28% | 2.4841ms | 2.8550ms | 201.28K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 289.63K | ±0.22% | 3.4526ms | 4.1280ms | 144.82K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 188.59K | ±0.56% | 5.3026ms | 7.2430ms | 94.29K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.18K | ±0.52% | 32.0741ms | 57.0170ms | 15.59K |

**Key Insight:** Native Map is **373.92x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 308.61K
🥈 Craft                ███████████████████████████████████ 270.85K
🥉 Mutative             ████████████████████████████ 215.97K
   Immutable.js         ███████████████████████ 173.68K
   Immer                █████████████ 99.80K
   Seamless Immutable   ███ 22.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.20M | ±0.62% | 0.1087ms | 0.1400ms | 4.60M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 308.61K | ±0.36% | 3.2403ms | 3.5970ms | 154.31K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 270.85K | ±0.43% | 3.6920ms | 4.3880ms | 135.43K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.97K | ±0.41% | 4.6303ms | 5.2800ms | 107.99K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 173.68K | ±0.23% | 5.7577ms | 11.4820ms | 86.84K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 99.80K | ±0.37% | 10.0196ms | 19.5960ms | 49.90K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.32K | ±0.30% | 44.7931ms | 54.5820ms | 11.16K |

**Key Insight:** Native Spread is **412.00x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 371.51K
🥈 Immer                ███ 29.92K
🥉 Craft                ██ 21.75K
   Immutability Helper  █ 6.41K
   Immutable.js         █ 712.16
   Seamless Immutable   █ 250.84
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 371.51K | ±0.79% | 2.6917ms | 3.3560ms | 185.75K |
| 🥈 | **Native Map** | 351.87K | ±0.68% | 2.8420ms | 3.3060ms | 175.93K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.92K | ±0.39% | 33.4229ms | 45.3050ms | 14.96K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.75K | ±0.40% | 45.9781ms | 63.3990ms | 10.88K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.41K | ±0.53% | 155.9601ms | 172.2920ms | 3.21K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 712.16 | ±1.48% | 1404.1867ms | 2572.5410ms | 357.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 250.84 | ±0.94% | 3986.6027ms | 5072.7950ms | 126.00 |

**Key Insight:** Mutative is **1481.06x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 271.73K
🥈 Craft                ███████████████████████████████████████ 267.03K
🥉 Mutative             █████████████████████████████ 198.18K
   Immutable.js         ███████████████████████ 159.41K
   Immer                ██████████████████ 122.53K
   Seamless Immutable   ███ 19.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.38M | ±1.00% | 0.1568ms | 0.1800ms | 3.19M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 271.73K | ±0.41% | 3.6801ms | 4.0480ms | 135.87K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 267.03K | ±0.59% | 3.7449ms | 4.4780ms | 133.51K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 198.18K | ±0.58% | 5.0460ms | 5.7610ms | 99.09K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 159.41K | ±0.59% | 6.2733ms | 9.1670ms | 79.70K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 122.53K | ±1.00% | 8.1610ms | 16.4400ms | 61.27K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.12K | ±0.47% | 52.2978ms | 68.5580ms | 9.56K |

**Key Insight:** Native Spread is **333.51x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T20:29:05.139Z*
