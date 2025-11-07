# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:23:20 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 73.2/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.4/100 | 78.4% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 54.9/100 | 75.0% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 31.9/100 | 43.6% |
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
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |
| 2025-11-04 | [View Results](./results/2025-11-04.json) |
| 2025-11-03 | [View Results](./results/2025-11-03.json) |

## 📊 Detailed Results

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 215.04K
🥈 Immer                █████████████████████ 111.92K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 215.04K | ±2.15% | 4.6503ms | 9.2670ms | 107.52K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 111.92K | ±1.90% | 8.9349ms | 25.5170ms | 55.96K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 953.06K
🥈 Immer                █████ 129.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 953.06K | ±0.17% | 1.0493ms | 1.4230ms | 476.53K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 129.73K | ±1.56% | 7.7083ms | 15.5590ms | 64.86K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 175.11K
🥈 Immer                ██████████████ 61.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 175.11K | ±1.61% | 5.7107ms | 11.2010ms | 87.56K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 61.12K | ±1.39% | 16.3609ms | 30.9970ms | 30.61K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 734.44K
🥈 Mutative             ██████████████████████████ 475.57K
🥉 Immer                ██████████ 176.35K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 734.44K | ±1.80% | 1.3616ms | 2.9360ms | 367.22K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 475.57K | ±0.76% | 2.1027ms | 3.3060ms | 237.79K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 176.35K | ±1.09% | 5.6706ms | 10.6700ms | 88.17K |

**Key Insight:** Craft is **4.16x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.25M
🥈 Mutative             ██████████████ 427.76K
🥉 Immer                █████ 154.93K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.25M | ±0.38% | 0.7980ms | 1.0820ms | 626.59K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 427.76K | ±0.43% | 2.3378ms | 2.9260ms | 213.88K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 154.93K | ±0.78% | 6.4544ms | 12.9040ms | 77.47K |

**Key Insight:** Craft is **8.09x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 852.29K
🥈 Mutative             █████████████████████ 452.98K
🥉 Immer                ████████ 164.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 852.29K | ±0.37% | 1.1733ms | 1.5130ms | 426.14K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 452.98K | ±0.41% | 2.2076ms | 2.7250ms | 226.49K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 164.43K | ±0.29% | 6.0815ms | 10.0390ms | 82.22K |

**Key Insight:** Craft is **5.18x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 831.18K
🥈 Mutative             ██████████████████████ 447.74K
🥉 Immer                █████████ 177.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 831.18K | ±0.39% | 1.2031ms | 1.5830ms | 415.59K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 447.74K | ±0.43% | 2.2334ms | 2.6650ms | 223.87K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 177.18K | ±0.32% | 5.6438ms | 12.4130ms | 88.59K |

**Key Insight:** Craft is **4.69x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 182.38K
🥈 Mutative             █████████████████████████████████ 148.21K
🥉 Immer                █████████████████ 78.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 182.38K | ±0.46% | 5.4831ms | 9.2870ms | 91.19K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 148.21K | ±0.46% | 6.7471ms | 10.8910ms | 74.11K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 78.44K | ±0.76% | 12.7479ms | 23.5350ms | 39.22K |

**Key Insight:** Craft is **2.32x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 228.75K
🥈 Mutative             █████████████ 77.06K
🥉 Immer                ██ 13.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 228.75K | ±0.41% | 4.3715ms | 5.6300ms | 114.38K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 77.06K | ±0.46% | 12.9777ms | 22.7230ms | 38.53K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.89K | ±0.34% | 71.9848ms | 91.8110ms | 6.95K |

**Key Insight:** Craft is **16.47x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 222.93K
🥈 Immer                █████████████ 70.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 222.93K | ±0.34% | 4.4856ms | 5.1890ms | 111.47K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 70.47K | ±0.29% | 14.1911ms | 24.4560ms | 35.23K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.09M
🥈 Immutability Helper  ████████████████████████████████████ 975.19K
🥉 Mutative             ████████████████████████████████████ 974.29K
   Craft                ██████████████████████████████████ 928.99K
   Immer                ██████████████████████████ 705.09K
   Seamless Immutable   █████ 128.82K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.02M | ±0.09% | 0.0713ms | 0.1100ms | 7.01M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.09M | ±0.13% | 0.9208ms | 1.0620ms | 543.01K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 975.19K | ±0.16% | 1.0254ms | 1.2730ms | 487.60K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 974.29K | ±0.38% | 1.0264ms | 1.3330ms | 487.14K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 928.99K | ±2.61% | 1.0764ms | 2.7050ms | 464.50K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 705.09K | ±2.08% | 1.4183ms | 3.2660ms | 352.55K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.82K | ±0.33% | 7.7629ms | 14.2670ms | 64.41K |

**Key Insight:** Native Spread is **108.82x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 506.39K
🥈 Mutative             ███████████████████████████████ 397.59K
🥉 Craft                ███████████████████████████ 338.43K
   Immutable.js         ██████████████████ 222.71K
   Immer                ████████████ 155.94K
   Seamless Immutable   ███ 37.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.39M | ±0.13% | 0.0878ms | 0.1400ms | 5.70M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 506.39K | ±0.51% | 1.9748ms | 3.5170ms | 253.19K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 397.59K | ±4.03% | 2.5151ms | 4.4480ms | 198.80K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 338.43K | ±2.65% | 2.9548ms | 5.3600ms | 169.22K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 222.71K | ±1.57% | 4.4902ms | 6.9930ms | 111.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 155.94K | ±1.74% | 6.4129ms | 11.4510ms | 77.97K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.65K | ±0.24% | 26.5606ms | 36.2880ms | 18.82K |

**Key Insight:** Native Spread is **302.58x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.65M
🥈 Immutability Helper  ███████████████████████████████████ 1.43M
🥉 Craft                ████████████ 505.69K
   Mutative             ██████████ 430.47K
   Immer                ███████ 283.85K
   Seamless Immutable   █ 60.60K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.51M | ±0.96% | 0.0869ms | 0.1110ms | 5.75M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.65M | ±0.41% | 0.6060ms | 0.9310ms | 825.11K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.43M | ±0.44% | 0.6986ms | 0.7410ms | 715.68K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 505.69K | ±0.32% | 1.9775ms | 3.2260ms | 252.85K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 430.47K | ±0.44% | 2.3231ms | 2.6650ms | 215.23K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 283.85K | ±0.32% | 3.5229ms | 6.5520ms | 141.93K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.60K | ±0.36% | 16.5023ms | 26.8300ms | 30.30K |

**Key Insight:** Native Spread is **189.91x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 772.31K
🥈 Immutability Helper  ██████████████████████████████ 580.46K
🥉 Craft                ████████████████ 317.08K
   Mutative             ███████████ 219.45K
   Immer                ███████ 139.45K
   Seamless Immutable   ███ 60.38K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.46M | ±0.67% | 0.0802ms | 0.1100ms | 6.23M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 772.31K | ±0.76% | 1.2948ms | 1.6530ms | 386.16K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 580.46K | ±0.20% | 1.7228ms | 1.8840ms | 290.23K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 317.08K | ±0.35% | 3.1538ms | 3.7870ms | 158.54K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 219.45K | ±0.45% | 4.5567ms | 5.1400ms | 109.73K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 139.45K | ±0.36% | 7.1711ms | 16.3500ms | 69.72K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.38K | ±0.45% | 16.5618ms | 25.9390ms | 30.19K |

**Key Insight:** Native Filter is **206.42x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 494.82K
🥈 Mutative             █████████████████████████████████████ 458.43K
🥉 Immutability Helper  █████████████████████████████████ 403.78K
   Immer                ███████████████████████ 286.14K
   Immutable.js         ███████████████ 189.32K
   Seamless Immutable   ███ 31.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.10M | ±0.99% | 0.0901ms | 0.1300ms | 5.55M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 494.82K | ±0.38% | 2.0209ms | 2.3750ms | 247.41K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 458.43K | ±0.47% | 2.1814ms | 2.5540ms | 229.22K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 403.78K | ±0.21% | 2.4766ms | 2.9250ms | 201.89K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 286.14K | ±0.18% | 3.4948ms | 4.3080ms | 143.07K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 189.32K | ±0.44% | 5.2820ms | 8.5260ms | 94.66K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.32K | ±0.39% | 31.9262ms | 44.1720ms | 15.66K |

**Key Insight:** Native Map is **354.29x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 314.06K
🥈 Craft                ███████████████████████████████████ 273.00K
🥉 Mutative             ███████████████████████████ 214.82K
   Immutable.js         █████████████████████ 168.72K
   Immer                █████████████ 98.47K
   Seamless Immutable   ███ 22.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 8.63M | ±0.94% | 0.1159ms | 0.1600ms | 4.31M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 314.06K | ±0.51% | 3.1841ms | 3.5570ms | 157.03K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 273.00K | ±0.55% | 3.6630ms | 4.1880ms | 136.50K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 214.82K | ±0.64% | 4.6550ms | 5.6000ms | 107.41K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 168.72K | ±0.64% | 5.9271ms | 6.8730ms | 84.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 98.47K | ±0.50% | 10.1555ms | 19.6670ms | 49.23K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.48K | ±0.36% | 44.4894ms | 54.0500ms | 11.24K |

**Key Insight:** Native Spread is **383.82x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 365.85K
🥈 Immer                ███ 28.81K
🥉 Craft                ██ 21.80K
   Immutability Helper  █ 6.35K
   Immutable.js         █ 740.71
   Seamless Immutable   █ 250.36
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 365.85K | ±0.66% | 2.7333ms | 4.7680ms | 182.93K |
| 🥈 | **Native Map** | 353.84K | ±0.50% | 2.8262ms | 3.3960ms | 176.92K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 28.81K | ±0.37% | 34.7151ms | 64.5500ms | 14.40K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 21.80K | ±0.31% | 45.8792ms | 60.1920ms | 10.90K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.35K | ±0.36% | 157.4100ms | 282.6780ms | 3.18K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 740.71 | ±1.35% | 1350.0641ms | 1796.8670ms | 371.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 250.36 | ±0.94% | 3994.1858ms | 4525.8990ms | 126.00 |

**Key Insight:** Mutative is **1461.28x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 279.22K
🥈 Craft                ███████████████████████████████████████ 272.53K
🥉 Mutative             █████████████████████████████ 203.24K
   Immutable.js         ███████████████████████ 163.62K
   Immer                ██████████████████ 127.01K
   Seamless Immutable   ███ 19.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.57M | ±0.76% | 0.1523ms | 0.1800ms | 3.28M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 279.22K | ±0.38% | 3.5815ms | 4.0470ms | 139.61K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 272.53K | ±0.39% | 3.6693ms | 4.2980ms | 136.27K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 203.24K | ±0.33% | 4.9204ms | 5.7910ms | 101.62K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 163.62K | ±0.48% | 6.1117ms | 7.2130ms | 81.81K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 127.01K | ±0.57% | 7.8735ms | 16.5210ms | 63.50K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 19.12K | ±0.30% | 52.2922ms | 63.4780ms | 9.56K |

**Key Insight:** Native Spread is **343.33x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-07T15:16:45.954Z*
