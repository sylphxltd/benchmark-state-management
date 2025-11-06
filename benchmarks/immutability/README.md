# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** January 1, 2025
- **Last Run:** 12:00:00 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 6, 2025 | ✅ Latest |
| **[immer](https://github.com/immerjs/immer)** | `v10.2.0` | 4.70KB | Nov 6, 2025 | ✅ Latest |
| **[immutability-helper](https://github.com/kolodny/immutability-helper)** | `v3.1.1` | 1.65KB | Nov 6, 2025 | ✅ Latest |
| **[immutable](https://github.com/immutable-js/immutable-js)** | `v5.1.4` | 17.74KB | Nov 6, 2025 | ✅ Latest |
| **[mutative](https://github.com/unadlib/mutative)** | `v1.3.0` | N/A | Nov 6, 2025 | ✅ Latest |
| **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | `v7.1.4` | 2.71KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[immutability-helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 4.68KB | Baseline |
| 🥈 | **[seamless-immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 7.55KB | 1.64x |
| 🥉 | **[@sylphx/craft](https://github.com/sylphxltd/craft)** | 2.76KB | 9.56KB | 1.67x |
| 4 | **[immer](https://github.com/immerjs/immer)** | 4.70KB | 13.83KB | 2.84x |
| 5 | **[immutable](https://github.com/immutable-js/immutable-js)** | 17.74KB | 65.04KB | 10.73x |

**Size Insight:** immutability-helper is the most lightweight at 1.65KB (gzip), while immutable is 10.73x larger at 17.74KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.0/100 | Baseline |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 52.7/100 | 73.2% |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 51.1/100 | 71.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.5/100 | 43.8% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 23.8/100 | 33.1% |
| 6 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 3.6/100 | 5.0% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.65KB | 100/100 | Excellent |
| 🥈 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 2.71KB | 93/100 | Excellent |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 2.76KB | 93/100 | Excellent |
| 4 | **[Immer](https://github.com/immerjs/immer)** | 4.70KB | 81/100 | Good |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 17.74KB | 53/100 | Average |

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

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |
| 2025-11-04 | [View Results](./results/2025-11-04.json) |
| 2025-11-03 | [View Results](./results/2025-11-03.json) |

## 📊 Detailed Results

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 887.10K
🥈 Immer                ███████████████████ 429.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 887.10K | ±0.39% | 1.1273ms | 1.3750ms | 443.55K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 429.22K | ±1.32% | 2.3298ms | 3.1250ms | 214.61K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 4.05M
🥈 Immer                █████ 488.61K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 4.05M | ±0.04% | 0.2467ms | 0.2920ms | 2.03M |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 488.61K | ±0.56% | 2.0466ms | 2.7080ms | 244.31K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 679.38K
🥈 Immer                █████████████ 227.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 679.38K | ±0.19% | 1.4719ms | 1.8330ms | 339.69K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 227.67K | ±0.18% | 4.3923ms | 5.2080ms | 113.84K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 2.69M
🥈 Mutative             █████████████████████ 1.43M
🥉 Immer                █████████ 602.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 2.69M | ±0.81% | 0.3714ms | 0.4590ms | 1.35M |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 1.43M | ±0.17% | 0.6993ms | 0.9170ms | 715.01K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 602.80K | ±0.15% | 1.6589ms | 1.9590ms | 301.40K |

**Key Insight:** Craft is **4.47x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 3.71M
🥈 Mutative             ██████████████ 1.26M
🥉 Immer                █████ 501.83K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 3.71M | ±1.90% | 0.2693ms | 0.3750ms | 1.86M |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 1.26M | ±0.13% | 0.7914ms | 1.0410ms | 631.77K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 501.83K | ±0.16% | 1.9927ms | 2.4170ms | 250.91K |

**Key Insight:** Craft is **7.40x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 2.79M
🥈 Mutative             ██████████████████ 1.27M
🥉 Immer                ███████ 502.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 2.79M | ±0.17% | 0.3588ms | 0.4590ms | 1.39M |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 1.27M | ±0.29% | 0.7895ms | 1.0840ms | 633.28K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 502.49K | ±2.38% | 1.9901ms | 2.5000ms | 251.25K |

**Key Insight:** Craft is **5.55x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 2.71M
🥈 Mutative             ███████████████████ 1.30M
🥉 Immer                ████████ 570.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 2.71M | ±0.18% | 0.3686ms | 0.4590ms | 1.36M |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 1.30M | ±0.19% | 0.7692ms | 1.0000ms | 650.06K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 570.60K | ±2.32% | 1.7525ms | 2.2500ms | 285.30K |

**Key Insight:** Craft is **4.75x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 392.99K
🥈 Mutative             ██████████████████████████████████ 329.44K
🥉 Immer                ███████████████████ 185.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 392.99K | ±0.22% | 2.5446ms | 3.1660ms | 196.50K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 329.44K | ±0.18% | 3.0354ms | 3.6250ms | 164.72K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 185.89K | ±0.81% | 5.3795ms | 6.2080ms | 92.95K |

**Key Insight:** Craft is **2.11x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.49M
🥈 Mutative             █████ 205.21K
🥉 Immer                █ 35.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.49M | ±0.17% | 0.6692ms | 1.0000ms | 747.12K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 205.21K | ±0.19% | 4.8731ms | 5.5830ms | 102.61K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 35.70K | ±0.15% | 28.0096ms | 32.1670ms | 17.85K |

**Key Insight:** Craft is **41.85x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 625.84K
🥈 Immer                ██████████████ 211.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 625.84K | ±0.16% | 1.5979ms | 1.9160ms | 312.92K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 211.93K | ±2.23% | 4.7184ms | 12.0000ms | 105.97K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 4.24M
🥈 Immutable.js         ███████████████████████████████████ 3.68M
🥉 Immutability Helper  ██████████████████████████████ 3.14M
   Mutative             ████████████████████████████ 3.00M
   Immer                ██████████████████████████ 2.75M
   Seamless Immutable   ████ 371.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 45.90M | ±0.07% | 0.0218ms | 0.0420ms | 22.95M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 4.24M | ±0.17% | 0.2358ms | 0.2920ms | 2.12M |
| 🥉 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 3.68M | ±0.26% | 0.2715ms | 0.3340ms | 1.84M |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 3.14M | ±0.15% | 0.3184ms | 0.4160ms | 1.57M |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 3.00M | ±0.09% | 0.3333ms | 0.4170ms | 1.50M |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 2.75M | ±0.68% | 0.3633ms | 0.7910ms | 1.38M |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 371.60K | ±1.48% | 2.6911ms | 3.2500ms | 185.80K |

**Key Insight:** Native Spread is **123.52x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 1.53M
🥈 Craft                █████████████████████████████████ 1.26M
🥉 Mutative             ███████████████████████████████ 1.17M
   Immutable.js         ██████████████████ 686.40K
   Immer                █████████████████ 634.86K
   Seamless Immutable   ███ 105.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 34.54M | ±1.57% | 0.0290ms | 0.0420ms | 17.27M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.53M | ±0.37% | 0.6535ms | 0.7920ms | 765.13K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.78% | 0.7915ms | 1.0000ms | 631.69K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 1.17M | ±0.93% | 0.8557ms | 1.2910ms | 584.34K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 686.40K | ±1.72% | 1.4569ms | 1.7500ms | 343.68K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 634.86K | ±0.37% | 1.5752ms | 1.9580ms | 317.43K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 105.01K | ±4.20% | 9.5226ms | 11.4580ms | 52.51K |

**Key Insight:** Native Spread is **328.91x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 5.24M
🥈 Immutability Helper  ████████████████████████████████████ 4.70M
🥉 Craft                ████████████ 1.60M
   Mutative             ██████████ 1.34M
   Immer                ███████ 935.34K
   Seamless Immutable   █ 168.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 36.49M | ±0.52% | 0.0274ms | 0.0420ms | 18.24M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 5.24M | ±0.69% | 0.1909ms | 0.4580ms | 2.62M |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 4.70M | ±0.46% | 0.2126ms | 0.2920ms | 2.35M |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 1.60M | ±0.29% | 0.6250ms | 0.7910ms | 799.96K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 1.34M | ±0.38% | 0.7453ms | 0.9580ms | 670.85K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 935.34K | ±0.22% | 1.0691ms | 1.2920ms | 467.67K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 168.18K | ±0.43% | 5.9460ms | 7.2500ms | 84.09K |

**Key Insight:** Native Spread is **216.96x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 2.31M
🥈 Immutability Helper  ██████████████████████████████ 1.73M
🥉 Craft                █████████████████ 982.36K
   Mutative             ███████████ 655.40K
   Immer                ████████ 439.53K
   Seamless Immutable   ███ 170.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 38.97M | ±1.77% | 0.0257ms | 0.0420ms | 19.49M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 2.31M | ±0.53% | 0.4320ms | 0.9580ms | 1.16M |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.73M | ±0.29% | 0.5767ms | 0.7080ms | 866.93K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 982.36K | ±0.30% | 1.0180ms | 1.2500ms | 491.18K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 655.40K | ±0.32% | 1.5258ms | 1.8340ms | 327.70K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 439.53K | ±0.32% | 2.2752ms | 2.8330ms | 219.77K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 170.33K | ±0.39% | 5.8711ms | 7.2080ms | 85.16K |

**Key Insight:** Native Filter is **228.82x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.36M
🥈 Mutative             ██████████████████████████████████████ 1.31M
🥉 Immutability Helper  ███████████████████████████████████ 1.18M
   Immer                ███████████████████████████ 927.32K
   Immutable.js         ███████████████ 511.51K
   Seamless Immutable   ██ 85.00K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 33.28M | ±2.47% | 0.0301ms | 0.0830ms | 16.64M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 1.36M | ±0.37% | 0.7331ms | 1.7920ms | 682.07K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 1.31M | ±0.69% | 0.7650ms | 1.8750ms | 653.60K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.18M | ±0.78% | 0.8489ms | 1.0830ms | 589.01K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 927.32K | ±0.64% | 1.0784ms | 1.4170ms | 463.66K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 511.51K | ±0.82% | 1.9550ms | 2.7080ms | 255.75K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 85.00K | ±0.57% | 11.7654ms | 26.2090ms | 42.50K |

**Key Insight:** Native Map is **391.52x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 844.26K
🥈 Craft                ██████████████████████████████ 641.50K
🥉 Mutative             ████████████████████████████ 600.83K
   Immutable.js         ███████████████████████ 487.23K
   Immer                ██████████████ 287.55K
   Seamless Immutable   ███ 63.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 24.67M | ±0.10% | 0.0405ms | 0.0830ms | 12.34M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 844.26K | ±0.30% | 1.1845ms | 1.4590ms | 422.13K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 641.50K | ±0.52% | 1.5589ms | 3.4580ms | 320.75K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 600.83K | ±0.12% | 1.6644ms | 2.0840ms | 300.42K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 487.23K | ±0.48% | 2.0524ms | 2.5000ms | 243.62K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 287.55K | ±0.56% | 3.4777ms | 4.2080ms | 143.77K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 63.01K | ±0.29% | 15.8711ms | 19.6250ms | 31.50K |

**Key Insight:** Native Spread is **391.60x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 1.02M
🥈 Immer                ███ 73.90K
🥉 Craft                ██ 41.27K
   Immutability Helper  █ 14.18K
   Immutable.js          2.13K
   Seamless Immutable    740.36
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 1.02M | ±0.77% | 0.9767ms | 2.2500ms | 511.93K |
| 🥈 | **Native Map** | 543.72K | ±0.32% | 1.8392ms | 2.2500ms | 271.86K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 73.90K | ±0.31% | 13.5312ms | 19.7080ms | 36.95K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 41.27K | ±1.90% | 24.2304ms | 29.6250ms | 20.64K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 14.18K | ±0.23% | 70.5146ms | 79.0420ms | 7.09K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 2.13K | ±0.32% | 469.4012ms | 626.0830ms | 1.07K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 740.36 | ±0.56% | 1350.7028ms | 1595.8340ms | 371.00 |

**Key Insight:** Mutative is **1382.94x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 814.99K
🥈 Craft                █████████████████████████████████ 676.70K
🥉 Mutative             ███████████████████████████ 556.54K
   Immutable.js         ██████████████████████ 453.24K
   Immer                ██████████████████ 376.87K
   Seamless Immutable   ███ 53.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 31.38M | ±0.04% | 0.0319ms | 0.0420ms | 15.69M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 814.99K | ±0.26% | 1.2270ms | 1.5000ms | 407.49K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 676.70K | ±0.43% | 1.4778ms | 1.9580ms | 338.35K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 556.54K | ±0.24% | 1.7968ms | 2.1670ms | 278.27K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 453.24K | ±0.33% | 2.2063ms | 2.7080ms | 226.62K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 376.87K | ±0.28% | 2.6534ms | 3.1250ms | 188.44K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 53.13K | ±0.24% | 18.8216ms | 22.3340ms | 26.57K |

**Key Insight:** Native Spread is **590.61x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-06T22:45:49.121Z*
