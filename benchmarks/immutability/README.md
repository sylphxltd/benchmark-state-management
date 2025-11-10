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
- **Last Run:** 4:31:06 PM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.3/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.4/100 | 78.0% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.0/100 | 74.7% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.7/100 | 43.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.3/100 | 33.6% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.8/100 | 5.3% |

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
🥇 Craft                ████████████████████████████████████████ 216.07K
🥈 Immer                █████████████████████ 114.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 216.07K | ±1.96% | 4.6281ms | 9.2170ms | 108.03K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 114.47K | ±1.52% | 8.7362ms | 18.4940ms | 57.23K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 930.19K
🥈 Immer                ██████ 131.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 930.19K | ±0.17% | 1.0751ms | 1.8030ms | 465.10K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.70K | ±1.64% | 7.5928ms | 15.1080ms | 65.85K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 170.30K
🥈 Immer                █████████████ 57.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 170.30K | ±1.84% | 5.8720ms | 11.4810ms | 85.15K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 57.34K | ±1.81% | 17.4395ms | 30.9580ms | 28.67K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 749.73K
🥈 Mutative             ██████████████████████████ 481.11K
🥉 Immer                █████████ 178.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 749.73K | ±1.69% | 1.3338ms | 2.9850ms | 374.87K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 481.11K | ±0.41% | 2.0785ms | 2.5540ms | 240.55K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.04K | ±0.96% | 5.6168ms | 8.9860ms | 89.02K |

**Key Insight:** Craft is **4.21x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             █████████████ 423.00K
🥉 Immer                █████ 159.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.70% | 0.7958ms | 1.1820ms | 628.32K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 423.00K | ±0.64% | 2.3640ms | 3.1260ms | 211.50K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 159.10K | ±0.61% | 6.2853ms | 12.5740ms | 79.55K |

**Key Insight:** Craft is **7.90x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 860.71K
🥈 Mutative             █████████████████████ 449.94K
🥉 Immer                ████████ 169.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 860.71K | ±0.52% | 1.1618ms | 1.5030ms | 430.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.94K | ±0.43% | 2.2225ms | 3.6070ms | 224.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 169.24K | ±0.37% | 5.9086ms | 9.2180ms | 84.62K |

**Key Insight:** Craft is **5.09x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 840.69K
🥈 Mutative             ██████████████████████ 454.37K
🥉 Immer                █████████ 181.77K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 840.69K | ±0.45% | 1.1895ms | 1.5130ms | 420.34K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 454.37K | ±0.40% | 2.2009ms | 3.1350ms | 227.18K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 181.77K | ±0.41% | 5.5014ms | 8.5160ms | 90.89K |

**Key Insight:** Craft is **4.62x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 184.23K
🥈 Mutative             █████████████████████████████████ 150.47K
🥉 Immer                █████████████████ 79.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 184.23K | ±0.47% | 5.4279ms | 8.8360ms | 92.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.47K | ±0.46% | 6.6460ms | 10.5900ms | 75.23K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 79.94K | ±0.63% | 12.5101ms | 23.3840ms | 39.97K |

**Key Insight:** Craft is **2.30x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.73K
🥈 Mutative             █████████████ 76.70K
🥉 Immer                ██ 13.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 228.73K | ±0.39% | 4.3720ms | 5.4600ms | 114.36K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.70K | ±0.43% | 13.0384ms | 22.8020ms | 38.35K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.54K | ±0.59% | 73.8362ms | 104.1250ms | 6.77K |

**Key Insight:** Craft is **16.89x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.93K
🥈 Immer                █████████████ 71.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.93K | ±0.32% | 4.4856ms | 5.1300ms | 111.47K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.93K | ±0.28% | 13.9020ms | 24.7470ms | 35.97K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.06M
🥈 Mutative             ██████████████████████████████████████ 996.04K
🥉 Immutability Helper  ████████████████████████████████████ 963.85K
   Craft                ███████████████████████████████████ 927.67K
   Immer                ██████████████████████████ 679.32K
   Seamless Immutable   █████ 127.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.14M | ±0.15% | 0.0707ms | 0.1100ms | 7.07M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.06M | ±0.39% | 0.9423ms | 1.7530ms | 530.61K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 996.04K | ±0.52% | 1.0040ms | 1.3020ms | 498.02K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 963.85K | ±0.32% | 1.0375ms | 1.6830ms | 481.92K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 927.67K | ±2.99% | 1.0780ms | 2.6750ms | 463.84K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 679.32K | ±1.87% | 1.4721ms | 3.3560ms | 339.66K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.83K | ±0.30% | 7.8226ms | 14.3870ms | 63.92K |

**Key Insight:** Native Spread is **110.61x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 529.30K
🥈 Mutative             █████████████████████████████ 384.84K
🥉 Craft                ██████████████████████████ 347.04K
   Immutable.js         █████████████████ 221.30K
   Immer                ████████████ 156.01K
   Seamless Immutable   ███ 37.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.40M | ±0.19% | 0.0877ms | 0.1400ms | 5.70M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 529.30K | ±0.62% | 1.8893ms | 2.6350ms | 264.65K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 384.84K | ±1.32% | 2.5985ms | 4.9690ms | 192.42K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 347.04K | ±2.62% | 2.8815ms | 5.2790ms | 173.52K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 221.30K | ±1.58% | 4.5187ms | 7.3230ms | 110.65K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 156.01K | ±1.94% | 6.4099ms | 11.9320ms | 78.00K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.41K | ±0.37% | 26.7332ms | 37.1790ms | 18.70K |

**Key Insight:** Native Spread is **304.76x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.82M
🥈 Immutability Helper  ████████████████████████████████ 1.44M
🥉 Craft                ███████████ 508.63K
   Mutative             █████████ 424.92K
   Immer                ██████ 277.43K
   Seamless Immutable   █ 60.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.67M | ±1.34% | 0.0857ms | 0.1200ms | 5.84M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.82M | ±0.34% | 0.5484ms | 0.7710ms | 911.66K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.44M | ±0.33% | 0.6961ms | 0.7610ms | 718.28K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 508.63K | ±0.68% | 1.9661ms | 2.4540ms | 254.32K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 424.92K | ±0.63% | 2.3534ms | 2.8750ms | 212.46K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 277.43K | ±0.74% | 3.6046ms | 7.1330ms | 138.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.88K | ±0.36% | 16.4262ms | 26.2490ms | 30.44K |

**Key Insight:** Native Spread is **191.75x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 832.24K
🥈 Immutability Helper  ████████████████████████████ 575.78K
🥉 Craft                ███████████████ 319.28K
   Mutative             ██████████ 218.09K
   Immer                ███████ 142.50K
   Seamless Immutable   ███ 61.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.24M | ±1.50% | 0.0817ms | 0.1010ms | 6.12M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 832.24K | ±0.59% | 1.2016ms | 1.5330ms | 416.12K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 575.78K | ±0.19% | 1.7368ms | 1.9140ms | 287.89K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 319.28K | ±0.35% | 3.1321ms | 3.7070ms | 159.64K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 218.09K | ±0.41% | 4.5853ms | 5.4200ms | 109.04K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.50K | ±0.35% | 7.0173ms | 15.0590ms | 71.25K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 61.18K | ±0.41% | 16.3461ms | 26.0490ms | 30.59K |

**Key Insight:** Native Filter is **200.07x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 476.14K
🥈 Mutative             ███████████████████████████████████████ 464.84K
🥉 Immutability Helper  ██████████████████████████████████ 401.02K
   Immer                ████████████████████████ 284.38K
   Immutable.js         ████████████████ 187.54K
   Seamless Immutable   ███ 31.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.07M | ±1.61% | 0.0903ms | 0.1500ms | 5.54M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 476.14K | ±1.08% | 2.1002ms | 2.6650ms | 238.07K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 464.84K | ±0.60% | 2.1513ms | 2.5040ms | 232.42K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 401.02K | ±0.27% | 2.4936ms | 3.1660ms | 200.51K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.38K | ±0.24% | 3.5164ms | 5.7710ms | 142.19K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 187.54K | ±0.73% | 5.3322ms | 10.5800ms | 93.77K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.24K | ±0.91% | 32.0075ms | 42.0880ms | 15.62K |

**Key Insight:** Native Map is **354.37x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 319.41K
🥈 Craft                ████████████████████████████████ 258.81K
🥉 Mutative             ███████████████████████████ 215.07K
   Immutable.js         █████████████████████ 171.14K
   Immer                ████████████ 97.68K
   Seamless Immutable   ███ 22.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.31M | ±0.45% | 0.1074ms | 0.1600ms | 4.66M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 319.41K | ±0.42% | 3.1308ms | 3.8070ms | 159.71K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 258.81K | ±1.06% | 3.8639ms | 4.8190ms | 129.40K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 215.07K | ±0.47% | 4.6497ms | 5.5410ms | 107.53K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 171.14K | ±1.65% | 5.8432ms | 12.8840ms | 85.57K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.68K | ±0.41% | 10.2373ms | 19.7970ms | 48.84K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.05K | ±0.57% | 45.3617ms | 61.7850ms | 11.02K |

**Key Insight:** Native Spread is **422.44x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 365.34K
🥈 Immer                ███ 29.80K
🥉 Craft                ██ 21.96K
   Immutability Helper  █ 6.34K
   Immutable.js         █ 733.22
   Seamless Immutable   █ 253.93
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 365.34K | ±0.63% | 2.7372ms | 4.4280ms | 182.67K |
| 🥈 | **Native Map** | 349.43K | ±0.79% | 2.8618ms | 3.4870ms | 174.72K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.80K | ±0.54% | 33.5570ms | 45.1050ms | 14.90K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.96K | ±0.51% | 45.5304ms | 55.7850ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.34K | ±0.49% | 157.7904ms | 282.4290ms | 3.17K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 733.22 | ±1.17% | 1363.8508ms | 1923.3310ms | 367.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 253.93 | ±0.60% | 3938.1414ms | 4409.7670ms | 127.00 |

**Key Insight:** Mutative is **1438.74x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 277.03K
🥈 Craft                ███████████████████████████████████████ 270.07K
🥉 Mutative             █████████████████████████████ 198.01K
   Immutable.js         ███████████████████████ 160.85K
   Immer                ██████████████████ 123.55K
   Seamless Immutable   ███ 18.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.45M | ±1.30% | 0.1551ms | 0.1900ms | 3.22M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 277.03K | ±0.62% | 3.6097ms | 4.2680ms | 138.51K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 270.07K | ±0.70% | 3.7027ms | 4.6590ms | 135.04K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 198.01K | ±0.53% | 5.0502ms | 6.4720ms | 99.01K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 160.85K | ±0.54% | 6.2171ms | 7.3840ms | 80.42K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 123.55K | ±0.88% | 8.0937ms | 14.2770ms | 61.78K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.93K | ±0.54% | 52.8256ms | 63.6300ms | 9.47K |

**Key Insight:** Native Spread is **340.54x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-10T18:01:15.887Z*
