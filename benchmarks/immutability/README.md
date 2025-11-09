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
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 9, 2025
- **Last Run:** 6:17:25 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 9, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.0/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 56.7/100 | 77.7% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.9/100 | 73.8% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.8/100 | 44.9% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.4% |
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
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |

## 📊 Detailed Results

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 215.28K
🥈 Immer                █████████████████████ 110.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 215.28K | ±2.23% | 4.6450ms | 9.4080ms | 107.64K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 110.72K | ±1.69% | 9.0315ms | 19.7170ms | 55.36K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 991.54K
🥈 Immer                █████ 129.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 991.54K | ±0.21% | 1.0085ms | 1.6320ms | 495.77K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.99K | ±1.78% | 7.6929ms | 16.2700ms | 65.00K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 171.96K
🥈 Immer                ██████████████ 60.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 171.96K | ±2.17% | 5.8153ms | 11.3810ms | 85.98K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.07K | ±2.08% | 16.6480ms | 30.9680ms | 30.03K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 730.95K
🥈 Mutative             █████████████████████████ 460.78K
🥉 Immer                █████████ 172.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 730.95K | ±2.05% | 1.3681ms | 3.0250ms | 365.48K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 460.78K | ±1.09% | 2.1702ms | 3.1260ms | 230.39K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 172.90K | ±1.33% | 5.7837ms | 12.5330ms | 86.45K |

**Key Insight:** Craft is **4.23x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.27M
🥈 Mutative             █████████████ 418.05K
🥉 Immer                █████ 154.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.27M | ±0.69% | 0.7860ms | 1.1820ms | 636.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 418.05K | ±0.85% | 2.3921ms | 3.1960ms | 209.03K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 154.48K | ±0.78% | 6.4735ms | 13.3050ms | 77.24K |

**Key Insight:** Craft is **8.24x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 810.87K
🥈 Mutative             █████████████████████ 435.60K
🥉 Immer                ████████ 163.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 810.87K | ±0.55% | 1.2332ms | 1.7230ms | 405.43K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 435.60K | ±0.56% | 2.2957ms | 2.9350ms | 217.80K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 163.24K | ±0.43% | 6.1261ms | 9.0270ms | 81.62K |

**Key Insight:** Craft is **4.97x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 797.13K
🥈 Mutative             █████████████████████ 424.02K
🥉 Immer                █████████ 175.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 797.13K | ±0.78% | 1.2545ms | 1.7230ms | 398.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 424.02K | ±0.80% | 2.3584ms | 3.0550ms | 212.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 175.55K | ±0.63% | 5.6965ms | 9.8290ms | 87.77K |

**Key Insight:** Craft is **4.54x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 176.73K
🥈 Mutative             █████████████████████████████████ 143.93K
🥉 Immer                ██████████████████ 77.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 176.73K | ±0.61% | 5.6582ms | 8.7760ms | 88.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 143.93K | ±0.73% | 6.9478ms | 10.8400ms | 71.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.52K | ±1.07% | 12.8999ms | 24.4460ms | 38.76K |

**Key Insight:** Craft is **2.28x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 221.32K
🥈 Mutative             █████████████ 74.12K
🥉 Immer                ██ 13.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 221.32K | ±0.79% | 4.5184ms | 5.6400ms | 110.66K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 74.12K | ±0.80% | 13.4915ms | 23.5150ms | 37.06K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.56K | ±0.49% | 73.7574ms | 110.5570ms | 6.78K |

**Key Insight:** Craft is **16.32x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 224.69K
🥈 Immer                ████████████ 69.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 224.69K | ±0.67% | 4.4505ms | 5.4410ms | 112.35K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.72K | ±0.66% | 14.3441ms | 27.3110ms | 34.86K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.09M
🥈 Immutability Helper  █████████████████████████████████████ 993.93K
🥉 Mutative             ████████████████████████████████████ 992.11K
   Craft                ██████████████████████████████████ 928.86K
   Immer                █████████████████████████ 691.48K
   Seamless Immutable   █████ 127.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.30M | ±0.10% | 0.0699ms | 0.1100ms | 7.15M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.09M | ±0.40% | 0.9190ms | 1.0820ms | 544.04K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 993.93K | ±0.43% | 1.0061ms | 1.1720ms | 496.97K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 992.11K | ±0.42% | 1.0080ms | 1.2920ms | 496.06K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 928.86K | ±2.66% | 1.0766ms | 2.6950ms | 464.57K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 691.48K | ±2.15% | 1.4462ms | 3.1960ms | 345.74K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 127.09K | ±0.46% | 7.8686ms | 16.4320ms | 63.54K |

**Key Insight:** Native Spread is **112.52x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 481.49K
🥈 Mutative             █████████████████████████████████ 403.06K
🥉 Craft                ████████████████████████████ 338.36K
   Immutable.js         ███████████████████ 230.46K
   Immer                ████████████ 141.27K
   Seamless Immutable   ███ 36.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.78M | ±0.25% | 0.0849ms | 0.1200ms | 5.89M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 481.49K | ±1.29% | 2.0769ms | 2.5650ms | 240.74K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 403.06K | ±0.85% | 2.4810ms | 2.9360ms | 201.53K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 338.36K | ±3.34% | 2.9555ms | 5.0090ms | 169.18K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 230.46K | ±1.41% | 4.3392ms | 5.0990ms | 115.23K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.27K | ±2.41% | 7.0788ms | 16.1600ms | 70.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 36.89K | ±0.99% | 27.1075ms | 38.5340ms | 18.45K |

**Key Insight:** Native Spread is **319.36x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.72M
🥈 Immutability Helper  ██████████████████████████████ 1.30M
🥉 Craft                ████████████ 499.53K
   Mutative             █████████ 405.09K
   Immer                ██████ 274.89K
   Seamless Immutable   █ 60.34K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.77M | ±21.04% | 0.0929ms | 0.1200ms | 5.38M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.72M | ±1.08% | 0.5813ms | 0.8810ms | 860.11K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.30M | ±2.13% | 0.7702ms | 0.8010ms | 649.15K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 499.53K | ±1.46% | 2.0019ms | 2.3140ms | 249.76K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 405.09K | ±1.56% | 2.4686ms | 2.9460ms | 202.54K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 274.89K | ±1.39% | 3.6378ms | 6.5330ms | 137.44K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.34K | ±1.52% | 16.5728ms | 25.9390ms | 30.17K |

**Key Insight:** Native Spread is **178.44x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 830.62K
🥈 Immutability Helper  ███████████████████████████ 568.64K
🥉 Craft                ███████████████ 312.87K
   Mutative             ██████████ 215.54K
   Immer                ███████ 137.31K
   Seamless Immutable   ███ 59.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 11.52M | ±1.89% | 0.0868ms | 0.1100ms | 5.76M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 830.62K | ±0.85% | 1.2039ms | 1.5930ms | 415.31K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 568.64K | ±0.36% | 1.7586ms | 3.2760ms | 284.32K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 312.87K | ±0.55% | 3.1962ms | 6.8430ms | 156.44K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 215.54K | ±0.47% | 4.6394ms | 7.8950ms | 107.77K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 137.31K | ±0.59% | 7.2830ms | 16.9720ms | 68.65K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.69K | ±0.83% | 16.7545ms | 26.7700ms | 29.86K |

**Key Insight:** Native Filter is **193.01x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 479.99K
🥈 Mutative             █████████████████████████████████████ 447.92K
🥉 Immutability Helper  █████████████████████████████████ 398.41K
   Immer                ███████████████████████ 279.91K
   Immutable.js         ███████████████ 183.86K
   Seamless Immutable   ███ 31.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 10.75M | ±1.14% | 0.0931ms | 0.1410ms | 5.37M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 479.99K | ±1.24% | 2.0834ms | 2.5950ms | 240.00K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 447.92K | ±1.16% | 2.2326ms | 2.6650ms | 223.96K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 398.41K | ±0.45% | 2.5100ms | 3.2460ms | 199.21K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 279.91K | ±0.57% | 3.5726ms | 4.4490ms | 139.95K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 183.86K | ±1.56% | 5.4391ms | 6.2720ms | 91.93K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.16K | ±1.04% | 32.0935ms | 42.8400ms | 15.58K |

**Key Insight:** Native Map is **344.90x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 303.42K
🥈 Craft                ███████████████████████████████████ 265.31K
🥉 Mutative             ████████████████████████████ 214.32K
   Immutable.js         ███████████████████████ 176.84K
   Immer                █████████████ 96.60K
   Seamless Immutable   ███ 22.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.66M | ±0.51% | 0.1155ms | 0.1910ms | 4.33M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 303.42K | ±0.71% | 3.2957ms | 6.1020ms | 151.71K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 265.31K | ±0.69% | 3.7692ms | 4.3980ms | 132.65K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 214.32K | ±0.65% | 4.6659ms | 5.4100ms | 107.16K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 176.84K | ±0.31% | 5.6550ms | 6.5230ms | 88.42K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 96.60K | ±0.71% | 10.3517ms | 19.6770ms | 48.30K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.18K | ±0.34% | 45.0921ms | 57.2870ms | 11.09K |

**Key Insight:** Native Spread is **390.39x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 348.02K
🥈 Immer                ███ 29.73K
🥉 Craft                ███ 21.97K
   Immutability Helper  █ 6.36K
   Immutable.js         █ 719.74
   Seamless Immutable   █ 252.62
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 348.02K | ±0.68% | 2.8734ms | 5.0600ms | 174.01K |
| 🥈 | **Native Map** | 346.12K | ±0.95% | 2.8892ms | 3.4960ms | 173.06K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.73K | ±0.57% | 33.6350ms | 44.3930ms | 14.87K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.97K | ±0.50% | 45.5251ms | 55.3530ms | 10.98K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.36K | ±0.62% | 157.1672ms | 194.6440ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 719.74 | ±1.31% | 1389.3861ms | 2046.6800ms | 360.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 252.62 | ±0.89% | 3958.5556ms | 4587.6240ms | 127.00 |

**Key Insight:** Mutative is **1377.65x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 271.33K
🥈 Craft                ███████████████████████████████████████ 262.28K
🥉 Mutative             █████████████████████████████ 196.27K
   Immutable.js         ████████████████████████ 164.59K
   Immer                ███████████████████ 125.93K
   Seamless Immutable   ███ 18.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.17M | ±1.56% | 0.1620ms | 0.1810ms | 3.09M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 271.33K | ±0.65% | 3.6855ms | 4.4180ms | 135.67K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 262.28K | ±0.72% | 3.8127ms | 4.5290ms | 131.14K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 196.27K | ±0.79% | 5.0951ms | 7.4850ms | 98.13K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 164.59K | ±0.74% | 6.0757ms | 11.8320ms | 82.30K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.93K | ±0.54% | 7.9409ms | 14.8680ms | 62.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.98K | ±0.58% | 52.6959ms | 63.9500ms | 9.49K |

**Key Insight:** Native Spread is **325.23x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-09T13:50:38.181Z*
