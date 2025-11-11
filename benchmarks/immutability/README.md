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
- **Last Run:** 6:10:15 AM UTC
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
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 72.6/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.8/100 | 78.2% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 55.1/100 | 75.9% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.4/100 | 44.6% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.5/100 | 33.7% |
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
🥇 Craft                ████████████████████████████████████████ 213.39K
🥈 Immer                █████████████████████ 111.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 213.39K | ±2.02% | 4.6863ms | 9.5180ms | 106.69K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.91K | ±1.76% | 8.9357ms | 25.5780ms | 55.96K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 963.92K
🥈 Immer                █████ 132.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 963.92K | ±0.18% | 1.0374ms | 1.3820ms | 481.96K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 132.05K | ±1.52% | 7.5728ms | 15.8790ms | 66.03K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 172.90K
🥈 Immer                ██████████████ 59.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 172.90K | ±1.62% | 5.7838ms | 11.7420ms | 86.45K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 59.34K | ±1.87% | 16.8506ms | 37.4500ms | 29.67K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 757.48K
🥈 Mutative             █████████████████████████ 472.52K
🥉 Immer                █████████ 176.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 757.48K | ±1.52% | 1.3202ms | 2.9660ms | 378.74K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 472.52K | ±0.70% | 2.1163ms | 3.1460ms | 236.26K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.77K | ±0.97% | 5.6570ms | 9.3580ms | 88.39K |

**Key Insight:** Craft is **4.29x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 421.57K
🥉 Immer                █████ 156.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 1.27M | ±0.43% | 0.7883ms | 1.1720ms | 634.29K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 421.57K | ±0.40% | 2.3721ms | 3.9270ms | 210.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 156.22K | ±0.70% | 6.4013ms | 13.7060ms | 78.11K |

**Key Insight:** Craft is **8.12x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 864.15K
🥈 Mutative             █████████████████████ 457.89K
🥉 Immer                ████████ 168.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 864.15K | ±0.36% | 1.1572ms | 1.5430ms | 432.08K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 457.89K | ±0.40% | 2.1839ms | 2.6550ms | 228.94K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.15K | ±0.52% | 5.9471ms | 10.6600ms | 84.08K |

**Key Insight:** Craft is **5.14x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 850.40K
🥈 Mutative             █████████████████████ 449.32K
🥉 Immer                █████████ 182.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 850.40K | ±0.39% | 1.1759ms | 1.5030ms | 425.20K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.32K | ±0.41% | 2.2256ms | 2.7050ms | 224.66K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 182.87K | ±0.34% | 5.4683ms | 9.0170ms | 91.44K |

**Key Insight:** Craft is **4.65x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 183.03K
🥈 Mutative             █████████████████████████████████ 149.41K
🥉 Immer                █████████████████ 80.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 183.03K | ±0.51% | 5.4636ms | 7.7750ms | 91.52K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 149.41K | ±0.52% | 6.6928ms | 10.7900ms | 74.71K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.00K | ±0.57% | 12.4993ms | 23.0130ms | 40.00K |

**Key Insight:** Craft is **2.29x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.21K
🥈 Mutative             ██████████████ 77.52K
🥉 Immer                ██ 13.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 228.21K | ±0.46% | 4.3820ms | 6.4820ms | 114.11K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.52K | ±0.50% | 12.8997ms | 22.3620ms | 38.76K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.80K | ±0.39% | 72.4798ms | 91.8920ms | 6.90K |

**Key Insight:** Craft is **16.54x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.94K
🥈 Immer                █████████████ 71.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/SylphxAI/craft)** | 222.94K | ±0.64% | 4.4855ms | 8.3450ms | 111.47K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.35K | ±0.39% | 14.0162ms | 24.8770ms | 35.67K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Immutability Helper  ████████████████████████████████████ 962.07K
🥉 Mutative             ████████████████████████████████████ 960.92K
   Craft                ████████████████████████████████ 857.95K
   Immer                █████████████████████████ 665.58K
   Seamless Immutable   █████ 126.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.68M | ±0.14% | 0.0681ms | 0.0910ms | 7.34M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.20% | 0.9459ms | 1.8140ms | 528.57K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 962.07K | ±0.14% | 1.0394ms | 1.6430ms | 481.04K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 960.92K | ±0.70% | 1.0407ms | 1.6630ms | 480.46K |
| 5 | **[Craft](https://github.com/SylphxAI/craft)** | 857.95K | ±2.74% | 1.1656ms | 2.7050ms | 428.98K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 665.58K | ±2.06% | 1.5025ms | 3.2760ms | 332.79K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 126.55K | ±0.42% | 7.9018ms | 14.6770ms | 63.28K |

**Key Insight:** Native Spread is **116.01x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 524.37K
🥈 Mutative             ██████████████████████████████ 398.83K
🥉 Craft                ██████████████████████████ 343.00K
   Immutable.js         █████████████████ 228.46K
   Immer                ████████████ 154.97K
   Seamless Immutable   ███ 36.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.74M | ±0.15% | 0.0852ms | 0.1300ms | 5.87M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 524.37K | ±0.35% | 1.9070ms | 2.6250ms | 262.19K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 398.83K | ±0.79% | 2.5073ms | 4.7190ms | 199.42K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 343.00K | ±2.62% | 2.9154ms | 5.3500ms | 171.50K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 228.46K | ±1.50% | 4.3771ms | 7.4940ms | 114.23K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.97K | ±2.21% | 6.4530ms | 11.7620ms | 77.48K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.75K | ±0.52% | 27.2142ms | 51.4460ms | 18.37K |

**Key Insight:** Native Spread is **319.54x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.68M
🥈 Immutability Helper  ██████████████████████████████████ 1.44M
🥉 Craft                ████████████ 509.93K
   Mutative             ██████████ 426.20K
   Immer                ███████ 278.51K
   Seamless Immutable   █ 62.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.92M | ±0.69% | 0.0839ms | 0.1210ms | 5.96M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.68M | ±2.91% | 0.5954ms | 0.9620ms | 839.78K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.44M | ±0.34% | 0.6941ms | 0.8120ms | 720.37K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 509.93K | ±0.57% | 1.9611ms | 2.3740ms | 254.96K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 426.20K | ±0.47% | 2.3463ms | 2.7960ms | 213.10K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 278.51K | ±0.56% | 3.5906ms | 6.7730ms | 139.25K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.19K | ±0.40% | 16.0807ms | 25.3570ms | 31.09K |

**Key Insight:** Native Spread is **191.72x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 814.78K
🥈 Immutability Helper  ████████████████████████████ 580.32K
🥉 Craft                ███████████████ 314.08K
   Mutative             ███████████ 217.96K
   Immer                ███████ 142.47K
   Seamless Immutable   ███ 60.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.40M | ±1.02% | 0.0807ms | 0.1100ms | 6.20M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 814.78K | ±0.60% | 1.2273ms | 2.3140ms | 407.39K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.32K | ±0.24% | 1.7232ms | 1.8840ms | 290.16K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 314.08K | ±0.41% | 3.1839ms | 3.7670ms | 157.04K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.96K | ±0.41% | 4.5881ms | 5.6200ms | 108.98K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.47K | ±0.38% | 7.0189ms | 14.0360ms | 71.24K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.64K | ±0.60% | 16.4897ms | 25.6680ms | 30.32K |

**Key Insight:** Native Filter is **204.40x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 475.47K
🥈 Mutative             ██████████████████████████████████████ 456.16K
🥉 Immutability Helper  ██████████████████████████████████ 400.46K
   Immer                ████████████████████████ 284.14K
   Immutable.js         ████████████████ 189.23K
   Seamless Immutable   ███ 31.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.21M | ±0.95% | 0.0892ms | 0.1300ms | 5.60M |
| 🥈 | **[Craft](https://github.com/SylphxAI/craft)** | 475.47K | ±0.93% | 2.1032ms | 2.7650ms | 237.83K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 456.16K | ±0.71% | 2.1922ms | 2.6450ms | 228.08K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 400.46K | ±0.15% | 2.4971ms | 2.9950ms | 200.23K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.14K | ±0.36% | 3.5194ms | 7.2140ms | 142.07K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.23K | ±0.68% | 5.2844ms | 10.0390ms | 94.62K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.30K | ±0.66% | 31.9527ms | 55.7050ms | 15.65K |

**Key Insight:** Native Map is **358.03x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.37K
🥈 Craft                ██████████████████████████████████ 262.30K
🥉 Mutative             ████████████████████████████ 218.17K
   Immutable.js         ███████████████████████ 179.52K
   Immer                █████████████ 98.62K
   Seamless Immutable   ███ 22.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.16M | ±0.68% | 0.1092ms | 0.1700ms | 4.58M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.37K | ±0.55% | 3.2534ms | 5.7710ms | 153.68K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 262.30K | ±0.48% | 3.8125ms | 4.6590ms | 131.15K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 218.17K | ±0.49% | 4.5836ms | 5.3500ms | 109.09K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 179.52K | ±0.50% | 5.5704ms | 6.7430ms | 89.76K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.62K | ±0.46% | 10.1395ms | 19.2860ms | 49.31K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.39K | ±0.40% | 44.6662ms | 56.8360ms | 11.20K |

**Key Insight:** Native Spread is **409.06x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 354.05K
🥈 Immer                ███ 29.94K
🥉 Craft                ██ 22.01K
   Immutability Helper  █ 6.42K
   Immutable.js         █ 715.08
   Seamless Immutable   █ 248.60
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 354.05K | ±0.81% | 2.8245ms | 4.9190ms | 177.02K |
| 🥈 | **Native Map** | 336.63K | ±1.40% | 2.9706ms | 3.5270ms | 168.31K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.94K | ±0.62% | 33.3965ms | 44.9440ms | 14.97K |
| 4 | **[Craft](https://github.com/SylphxAI/craft)** | 22.01K | ±0.66% | 45.4311ms | 54.5120ms | 11.01K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.42K | ±0.70% | 155.7417ms | 175.3670ms | 3.21K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 715.08 | ±1.25% | 1398.4493ms | 1983.7400ms | 358.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 248.60 | ±0.99% | 4022.5175ms | 4752.6150ms | 125.00 |

**Key Insight:** Mutative is **1424.16x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.51K
🥈 Craft                ██████████████████████████████████████ 264.51K
🥉 Mutative             ████████████████████████████ 197.65K
   Immutable.js         ████████████████████████ 165.22K
   Immer                ██████████████████ 125.44K
   Seamless Immutable   ███ 18.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.40M | ±1.09% | 0.1562ms | 0.1810ms | 3.20M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.51K | ±0.49% | 3.5777ms | 4.0770ms | 139.76K |
| 🥉 | **[Craft](https://github.com/SylphxAI/craft)** | 264.51K | ±0.93% | 3.7806ms | 4.4180ms | 132.26K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 197.65K | ±0.81% | 5.0595ms | 6.0610ms | 98.83K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 165.22K | ±0.74% | 6.0525ms | 7.1630ms | 82.61K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.44K | ±1.02% | 7.9722ms | 14.0660ms | 62.72K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.85K | ±0.77% | 53.0591ms | 79.4790ms | 9.42K |

**Key Insight:** Native Spread is **339.59x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-11T06:45:27.933Z*
