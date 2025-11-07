# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 3:55:44 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/craft](https://github.com/sylphxltd/craft)** | `v1.2.1` | 2.76KB | Nov 7, 2025 | ⚠️ v1.3.0 incompatible |
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.8/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.6/100 | 78.0% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.5/100 | 73.8% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.8/100 | 43.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.9/100 | 33.7% |
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

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |
| 2025-11-04 | [View Results](./results/2025-11-04.json) |
| 2025-11-03 | [View Results](./results/2025-11-03.json) |

## 📊 Detailed Results

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 214.58K
🥈 Immer                ████████████████████ 109.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 214.58K | ±2.33% | 4.6603ms | 9.5080ms | 107.29K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 109.26K | ±2.06% | 9.1521ms | 26.3090ms | 54.63K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 911.64K
🥈 Immer                ██████ 129.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 911.64K | ±0.21% | 1.0969ms | 2.0730ms | 455.82K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.37K | ±1.71% | 7.7295ms | 15.6490ms | 64.69K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 170.37K
🥈 Immer                ██████████████ 60.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 170.37K | ±1.82% | 5.8696ms | 12.0230ms | 85.19K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.24K | ±1.83% | 16.6003ms | 31.3180ms | 30.12K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 734.32K
🥈 Mutative             █████████████████████████ 466.54K
🥉 Immer                ██████████ 177.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 734.32K | ±1.68% | 1.3618ms | 2.9350ms | 367.16K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 466.54K | ±0.74% | 2.1434ms | 3.2960ms | 233.27K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.85K | ±1.00% | 5.6226ms | 9.4970ms | 88.93K |

**Key Insight:** Craft is **4.13x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.22M
🥈 Mutative             ██████████████ 423.66K
🥉 Immer                █████ 157.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.22M | ±0.51% | 0.8229ms | 1.2230ms | 607.58K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 423.66K | ±0.67% | 2.3604ms | 3.0150ms | 211.83K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.68K | ±0.68% | 6.3418ms | 13.9960ms | 78.84K |

**Key Insight:** Craft is **7.71x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 835.13K
🥈 Mutative             ██████████████████████ 450.94K
🥉 Immer                ████████ 165.55K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 835.13K | ±0.50% | 1.1974ms | 1.6230ms | 417.57K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 450.94K | ±0.47% | 2.2176ms | 2.7650ms | 225.47K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 165.55K | ±0.42% | 6.0406ms | 10.1290ms | 82.77K |

**Key Insight:** Craft is **5.04x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 804.38K
🥈 Mutative             ██████████████████████ 444.03K
🥉 Immer                █████████ 178.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 804.38K | ±0.53% | 1.2432ms | 1.7930ms | 402.19K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 444.03K | ±0.49% | 2.2521ms | 2.7650ms | 222.02K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.23K | ±0.45% | 5.6108ms | 11.4110ms | 89.11K |

**Key Insight:** Craft is **4.51x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 181.05K
🥈 Mutative             █████████████████████████████████ 148.42K
🥉 Immer                █████████████████ 77.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 181.05K | ±0.49% | 5.5235ms | 8.6260ms | 90.52K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.42K | ±0.51% | 6.7377ms | 11.3510ms | 74.22K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 77.86K | ±0.75% | 12.8443ms | 25.9990ms | 38.93K |

**Key Insight:** Craft is **2.33x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 225.27K
🥈 Mutative             █████████████ 75.67K
🥉 Immer                ██ 13.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 225.27K | ±0.47% | 4.4392ms | 5.8710ms | 112.63K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 75.67K | ±0.50% | 13.2144ms | 23.3030ms | 37.84K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.32K | ±0.48% | 75.0882ms | 108.9430ms | 6.66K |

**Key Insight:** Craft is **16.91x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 219.07K
🥈 Immer                █████████████ 71.23K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 219.07K | ±0.45% | 4.5648ms | 5.6310ms | 109.53K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 71.23K | ±0.36% | 14.0384ms | 25.0770ms | 35.62K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.03M
🥈 Mutative             █████████████████████████████████████ 950.54K
🥉 Craft                █████████████████████████████████████ 947.21K
   Immutability Helper  ███████████████████████████████████ 908.54K
   Immer                ██████████████████████████ 665.26K
   Seamless Immutable   █████ 128.17K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.61M | ±0.10% | 0.0685ms | 0.1000ms | 7.30M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.03M | ±0.19% | 0.9674ms | 1.6430ms | 516.83K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 950.54K | ±0.76% | 1.0520ms | 1.6930ms | 475.27K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 947.21K | ±2.93% | 1.0557ms | 2.7150ms | 473.61K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 908.54K | ±0.53% | 1.1007ms | 2.0340ms | 454.27K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 665.26K | ±2.25% | 1.5032ms | 3.3260ms | 332.63K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.17K | ±0.93% | 7.8021ms | 15.9090ms | 64.09K |

**Key Insight:** Native Spread is **113.95x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 464.80K
🥈 Mutative             █████████████████████████████████ 387.46K
🥉 Craft                █████████████████████████████ 338.36K
   Immutable.js         ██████████████████ 204.26K
   Immer                █████████████ 152.75K
   Seamless Immutable   ███ 37.07K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.62M | ±0.11% | 0.0861ms | 0.1400ms | 5.81M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 464.80K | ±1.65% | 2.1515ms | 3.8070ms | 232.40K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 387.46K | ±1.31% | 2.5809ms | 3.2060ms | 193.90K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 338.36K | ±3.67% | 2.9555ms | 5.0590ms | 169.18K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 204.26K | ±3.37% | 4.8957ms | 7.6340ms | 102.13K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 152.75K | ±2.31% | 6.5468ms | 14.2370ms | 76.37K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.07K | ±1.08% | 26.9736ms | 39.4820ms | 18.54K |

**Key Insight:** Native Spread is **313.32x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.59M
🥈 Immutability Helper  ████████████████████████████████ 1.27M
🥉 Craft                ████████████ 477.81K
   Mutative             ██████████ 404.27K
   Immer                ███████ 273.20K
   Seamless Immutable   ██ 59.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.88M | ±23.24% | 0.1126ms | 0.1300ms | 4.44M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.59M | ±2.19% | 0.6296ms | 0.9320ms | 794.17K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.27M | ±2.36% | 0.7883ms | 0.9920ms | 634.27K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 477.81K | ±1.82% | 2.0929ms | 2.8460ms | 238.91K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 404.27K | ±2.32% | 2.4736ms | 3.2060ms | 202.14K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 273.20K | ±1.71% | 3.6603ms | 7.5540ms | 136.60K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 59.97K | ±1.72% | 16.6763ms | 26.3280ms | 29.98K |

**Key Insight:** Native Spread is **148.16x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 797.64K
🥈 Immutability Helper  █████████████████████████████ 578.96K
🥉 Craft                ████████████████ 311.39K
   Mutative             ███████████ 217.82K
   Immer                ███████ 142.50K
   Seamless Immutable   ███ 60.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.02M | ±1.39% | 0.0832ms | 0.1100ms | 6.01M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 797.64K | ±0.81% | 1.2537ms | 1.7340ms | 398.82K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 578.96K | ±0.28% | 1.7272ms | 1.9530ms | 289.48K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 311.39K | ±0.55% | 3.2114ms | 4.3780ms | 155.70K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 217.82K | ±0.52% | 4.5910ms | 5.6010ms | 108.91K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 142.50K | ±0.64% | 7.0176ms | 12.2430ms | 71.25K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.75K | ±0.72% | 16.4602ms | 25.8890ms | 30.38K |

**Key Insight:** Native Filter is **197.87x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 483.88K
🥈 Mutative             ████████████████████████████████████ 441.01K
🥉 Immutability Helper  █████████████████████████████████ 401.49K
   Immer                ████████████████████████ 284.94K
   Immutable.js         ██████████████ 174.69K
   Seamless Immutable   ███ 31.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.45M | ±0.81% | 0.0873ms | 0.1300ms | 5.73M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 483.88K | ±1.34% | 2.0666ms | 2.7050ms | 241.94K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 441.01K | ±1.42% | 2.2675ms | 2.9760ms | 220.53K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 401.49K | ±0.23% | 2.4908ms | 3.2460ms | 200.74K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 284.94K | ±0.49% | 3.5096ms | 5.8910ms | 142.47K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 174.69K | ±7.83% | 5.7244ms | 11.9520ms | 87.35K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.27K | ±0.52% | 31.9814ms | 43.5610ms | 15.63K |

**Key Insight:** Native Map is **366.34x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 307.33K
🥈 Craft                ███████████████████████████████████ 266.03K
🥉 Mutative             ████████████████████████████ 216.37K
   Immutable.js         ██████████████████████ 168.92K
   Immer                █████████████ 97.28K
   Seamless Immutable   ███ 22.52K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.94M | ±0.89% | 0.1119ms | 0.1710ms | 4.47M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 307.33K | ±0.65% | 3.2538ms | 3.9280ms | 153.66K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 266.03K | ±0.66% | 3.7589ms | 4.8690ms | 133.02K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 216.37K | ±0.66% | 4.6218ms | 5.5700ms | 108.18K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.92K | ±0.73% | 5.9198ms | 7.5250ms | 84.46K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.28K | ±0.79% | 10.2801ms | 21.6510ms | 48.64K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.52K | ±0.57% | 44.4008ms | 57.4270ms | 11.26K |

**Key Insight:** Native Spread is **396.87x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 347.71K
🥈 Immer                ███ 29.71K
🥉 Craft                ███ 21.89K
   Immutability Helper  █ 6.37K
   Immutable.js          714.92
   Seamless Immutable    251.94
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 348.84K | ±0.83% | 2.8667ms | 3.4960ms | 174.42K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 347.71K | ±0.94% | 2.8760ms | 4.1780ms | 173.86K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.71K | ±0.77% | 33.6551ms | 45.0040ms | 14.86K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.89K | ±0.69% | 45.6867ms | 57.7070ms | 10.95K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.37K | ±0.81% | 156.9728ms | 182.6110ms | 3.19K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 714.92 | ±1.60% | 1398.7578ms | 2233.0070ms | 358.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 251.94 | ±0.89% | 3969.1379ms | 4705.2990ms | 126.00 |

**Key Insight:** Native Map is **1384.58x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 274.46K
🥈 Craft                ████████████████████████████████████████ 271.09K
🥉 Mutative             █████████████████████████████ 196.27K
   Immutable.js         ███████████████████████ 158.13K
   Immer                ██████████████████ 126.59K
   Seamless Immutable   ███ 19.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.25M | ±1.48% | 0.1601ms | 0.1810ms | 3.12M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 274.46K | ±0.74% | 3.6435ms | 4.2780ms | 137.23K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 271.09K | ±0.95% | 3.6888ms | 4.3280ms | 135.59K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 196.27K | ±0.87% | 5.0949ms | 6.0010ms | 98.14K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 158.13K | ±0.98% | 6.3238ms | 9.2480ms | 79.08K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 126.59K | ±1.04% | 7.8998ms | 15.3290ms | 63.29K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.20K | ±0.86% | 52.0807ms | 64.0700ms | 9.60K |

**Key Insight:** Native Spread is **325.39x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-07T04:58:34.427Z*
