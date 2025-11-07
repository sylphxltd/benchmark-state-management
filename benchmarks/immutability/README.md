# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:23:20 AM UTC
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
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 72.6/100 | Baseline |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 57.0/100 | 78.5% |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 53.8/100 | 74.1% |
| 4 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 32.0/100 | 44.1% |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 24.4/100 | 33.6% |
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
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |
| 2025-11-05 | [View Results](./results/2025-11-05.json) |
| 2025-11-04 | [View Results](./results/2025-11-04.json) |
| 2025-11-03 | [View Results](./results/2025-11-03.json) |

## 📊 Detailed Results

### JSON Patches - Generate

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 219.11K
🥈 Immer                █████████████████████ 114.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 219.11K | ±1.95% | 4.5639ms | 8.9570ms | 109.61K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 114.19K | ±1.44% | 8.7573ms | 18.8650ms | 57.10K |

### JSON Patches - Apply

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 963.77K
🥈 Immer                █████ 131.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 963.77K | ±0.15% | 1.0376ms | 1.4130ms | 481.88K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 131.41K | ±1.45% | 7.6099ms | 15.4290ms | 65.70K |

### JSON Patches - Roundtrip

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 177.87K
🥈 Immer                ██████████████ 60.27K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 177.87K | ±1.57% | 5.6222ms | 10.8310ms | 88.93K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 60.27K | ±1.49% | 16.5918ms | 30.4570ms | 30.14K |

### Map - Set Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 750.90K
🥈 Mutative             █████████████████████████ 473.16K
🥉 Immer                ██████████ 178.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 750.90K | ±1.56% | 1.3317ms | 2.9260ms | 375.45K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 473.16K | ±0.63% | 2.1134ms | 3.1050ms | 236.58K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 178.72K | ±0.91% | 5.5953ms | 8.9470ms | 89.36K |

**Key Insight:** Craft is **4.20x faster** than Immer in this category.

### Map - Update Nested Value

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 1.26M
🥈 Mutative             ██████████████ 432.48K
🥉 Immer                █████ 157.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 1.26M | ±0.41% | 0.7923ms | 1.1530ms | 631.05K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 432.48K | ±0.40% | 2.3122ms | 2.6960ms | 216.24K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 157.32K | ±0.54% | 6.3564ms | 12.1930ms | 78.66K |

**Key Insight:** Craft is **8.02x faster** than Immer in this category.

### Set - Add Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 867.41K
🥈 Mutative             █████████████████████ 458.96K
🥉 Immer                ████████ 168.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 867.41K | ±0.34% | 1.1529ms | 1.4520ms | 433.70K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 458.96K | ±0.39% | 2.1788ms | 2.5450ms | 229.48K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 168.72K | ±0.29% | 5.9269ms | 8.1050ms | 84.36K |

**Key Insight:** Craft is **5.14x faster** than Immer in this category.

### Set - Delete Operation

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 844.94K
🥈 Mutative             █████████████████████ 449.93K
🥉 Immer                █████████ 180.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 844.94K | ±0.40% | 1.1835ms | 1.4630ms | 422.47K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 449.93K | ±0.45% | 2.2226ms | 2.6550ms | 224.97K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 180.89K | ±0.31% | 5.5284ms | 8.1250ms | 90.44K |

**Key Insight:** Craft is **4.67x faster** than Immer in this category.

### Map - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 184.83K
🥈 Mutative             █████████████████████████████████ 150.77K
🥉 Immer                █████████████████ 80.33K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 184.83K | ±0.46% | 5.4104ms | 8.1650ms | 92.41K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 150.77K | ±0.43% | 6.6325ms | 9.8580ms | 75.39K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 80.33K | ±0.62% | 12.4494ms | 23.2340ms | 40.16K |

**Key Insight:** Craft is **2.30x faster** than Immer in this category.

### Set - Large (100 items)

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 226.04K
🥈 Mutative             ██████████████ 76.40K
🥉 Immer                ██ 13.63K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 226.04K | ±0.45% | 4.4239ms | 6.0320ms | 113.02K |
| 🥈 | **[Mutative](https://github.com/unadlib/mutative)** | 76.40K | ±0.46% | 13.0893ms | 24.0250ms | 38.20K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 13.63K | ±0.29% | 73.3514ms | 92.1420ms | 6.82K |

**Key Insight:** Craft is **16.58x faster** than Immer in this category.

### Undo/Redo - Inverse Patches

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 217.99K
🥈 Immer                █████████████ 69.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Craft](https://github.com/sylphxltd/craft)** | 217.99K | ±0.72% | 4.5873ms | 7.8950ms | 109.00K |
| 🥈 | **[Immer](https://github.com/immerjs/immer)** | 69.98K | ±0.36% | 14.2893ms | 25.6980ms | 34.99K |

### Simple Object Update

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.02M
🥈 Immutability Helper  ██████████████████████████████████████ 981.58K
🥉 Mutative             ██████████████████████████████████████ 969.69K
   Craft                █████████████████████████████████ 841.85K
   Immer                ███████████████████████████ 691.79K
   Seamless Immutable   █████ 128.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 14.50M | ±0.09% | 0.0689ms | 0.1100ms | 7.25M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.02M | ±0.16% | 0.9770ms | 1.6530ms | 511.76K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 981.58K | ±0.33% | 1.0188ms | 1.4020ms | 490.79K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 969.69K | ±0.38% | 1.0313ms | 1.2820ms | 484.85K |
| 5 | **[Craft](https://github.com/sylphxltd/craft)** | 841.85K | ±2.73% | 1.1879ms | 2.7350ms | 420.93K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 691.79K | ±1.80% | 1.4455ms | 3.2260ms | 345.90K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 128.12K | ±0.25% | 7.8051ms | 15.4890ms | 64.06K |

**Key Insight:** Native Spread is **113.21x faster** than Seamless Immutable in this category.

### Nested Object Update

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 503.57K
🥈 Mutative             ████████████████████████████████ 408.70K
🥉 Craft                ███████████████████████████ 343.15K
   Immutable.js         ██████████████████ 231.63K
   Immer                ████████████ 154.29K
   Seamless Immutable   ███ 37.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 11.81M | ±0.09% | 0.0847ms | 0.1110ms | 5.91M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 503.57K | ±0.64% | 1.9858ms | 2.3040ms | 251.79K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 408.70K | ±0.56% | 2.4468ms | 2.8550ms | 204.35K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 343.15K | ±2.75% | 2.9142ms | 4.8090ms | 171.57K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 231.63K | ±0.67% | 4.3172ms | 8.3760ms | 115.82K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 154.29K | ±1.77% | 6.4814ms | 13.0550ms | 77.14K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 37.42K | ±0.66% | 26.7205ms | 36.8180ms | 18.71K |

**Key Insight:** Native Spread is **315.63x faster** than Seamless Immutable in this category.

### Array Push

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 1.82M
🥈 Immutability Helper  ██████████████████████████████ 1.38M
🥉 Craft                ███████████ 501.57K
   Mutative             █████████ 422.75K
   Immer                ██████ 282.68K
   Seamless Immutable   █ 60.66K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 10.80M | ±22.00% | 0.0926ms | 0.1200ms | 5.40M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 1.82M | ±0.81% | 0.5507ms | 0.7810ms | 908.00K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 1.38M | ±1.25% | 0.7249ms | 0.7820ms | 689.72K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 501.57K | ±0.65% | 1.9938ms | 2.4550ms | 250.78K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 422.75K | ±0.70% | 2.3655ms | 2.6950ms | 211.38K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 282.68K | ±0.76% | 3.5375ms | 4.1080ms | 141.34K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 60.66K | ±1.31% | 16.4851ms | 25.5380ms | 30.33K |

**Key Insight:** Native Spread is **177.98x faster** than Seamless Immutable in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Immutable.js         ████████████████████████████████████████ 824.49K
🥈 Immutability Helper  ████████████████████████████ 570.81K
🥉 Craft                ████████████████ 319.62K
   Mutative             ███████████ 220.40K
   Immer                ███████ 141.42K
   Seamless Immutable   ███ 62.47K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Filter** | 12.55M | ±0.99% | 0.0797ms | 0.1100ms | 6.27M |
| 🥈 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 824.49K | ±0.57% | 1.2129ms | 1.5330ms | 412.25K |
| 🥉 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 570.81K | ±0.17% | 1.7519ms | 3.0160ms | 285.40K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 319.62K | ±0.37% | 3.1287ms | 3.5070ms | 159.81K |
| 5 | **[Mutative](https://github.com/unadlib/mutative)** | 220.40K | ±0.33% | 4.5373ms | 5.0490ms | 110.20K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 141.42K | ±0.39% | 7.0709ms | 16.6210ms | 70.71K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 62.47K | ±0.34% | 16.0084ms | 25.4080ms | 31.23K |

**Key Insight:** Native Filter is **200.87x faster** than Seamless Immutable in this category.

### Array Update

**Performance Comparison:**

```
🥇 Craft                ████████████████████████████████████████ 490.69K
🥈 Mutative             █████████████████████████████████████ 456.86K
🥉 Immutability Helper  █████████████████████████████████ 399.42K
   Immer                ███████████████████████ 286.49K
   Immutable.js         ███████████████ 185.82K
   Seamless Immutable   ███ 31.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Map** | 11.65M | ±0.64% | 0.0859ms | 0.1210ms | 5.82M |
| 🥈 | **[Craft](https://github.com/sylphxltd/craft)** | 490.69K | ±0.63% | 2.0379ms | 2.4240ms | 245.35K |
| 🥉 | **[Mutative](https://github.com/unadlib/mutative)** | 456.86K | ±0.66% | 2.1889ms | 4.4480ms | 228.43K |
| 4 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 399.42K | ±0.23% | 2.5036ms | 2.8850ms | 199.71K |
| 5 | **[Immer](https://github.com/immerjs/immer)** | 286.49K | ±0.23% | 3.4905ms | 4.5690ms | 143.25K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 185.82K | ±0.76% | 5.3815ms | 6.3220ms | 92.91K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 31.53K | ±0.52% | 31.7126ms | 42.8700ms | 15.77K |

**Key Insight:** Native Map is **369.31x faster** than Seamless Immutable in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 305.04K
🥈 Craft                ███████████████████████████████████ 270.48K
🥉 Mutative             ████████████████████████████ 213.22K
   Immutable.js         ██████████████████████ 170.71K
   Immer                █████████████ 97.20K
   Seamless Immutable   ███ 22.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 9.18M | ±0.68% | 0.1090ms | 0.1510ms | 4.59M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 305.04K | ±0.46% | 3.2782ms | 5.7510ms | 152.52K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 270.48K | ±0.45% | 3.6971ms | 4.2880ms | 135.24K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 213.22K | ±0.47% | 4.6899ms | 5.3500ms | 106.61K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 170.71K | ±0.50% | 5.8578ms | 8.2150ms | 85.36K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 97.20K | ±0.38% | 10.2876ms | 20.8090ms | 48.60K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 22.16K | ±0.42% | 45.1202ms | 56.1440ms | 11.08K |

**Key Insight:** Native Spread is **414.06x faster** than Seamless Immutable in this category.

### Large Array Update (1000 items)

**Performance Comparison:**

```
🥇 Mutative             ████████████████████████████████████████ 370.24K
🥈 Immer                ███ 29.92K
🥉 Craft                ██ 22.00K
   Immutability Helper  █ 6.30K
   Immutable.js         █ 729.08
   Seamless Immutable   █ 254.75
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Mutative](https://github.com/unadlib/mutative)** | 370.24K | ±0.80% | 2.7010ms | 3.2160ms | 185.12K |
| 🥈 | **Native Map** | 354.48K | ±0.71% | 2.8210ms | 3.2260ms | 177.24K |
| 🥉 | **[Immer](https://github.com/immerjs/immer)** | 29.92K | ±0.51% | 33.4267ms | 43.4110ms | 14.96K |
| 4 | **[Craft](https://github.com/sylphxltd/craft)** | 22.00K | ±0.55% | 45.4556ms | 56.5760ms | 11.00K |
| 5 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 6.30K | ±0.52% | 158.7673ms | 177.2510ms | 3.15K |
| 6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 729.08 | ±1.06% | 1371.5979ms | 1871.7860ms | 365.00 |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 254.75 | ±0.62% | 3925.3576ms | 4421.7070ms | 128.00 |

**Key Insight:** Mutative is **1453.31x faster** than Seamless Immutable in this category.

### Multiple Updates (3 changes)

**Performance Comparison:**

```
🥇 Immutability Helper  ████████████████████████████████████████ 276.76K
🥈 Craft                ████████████████████████████████████████ 275.15K
🥉 Mutative             █████████████████████████████ 200.19K
   Immutable.js         ███████████████████████ 157.93K
   Immer                ██████████████████ 125.96K
   Seamless Immutable   ███ 18.84K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **Native Spread** | 6.56M | ±1.10% | 0.1525ms | 0.1800ms | 3.28M |
| 🥈 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 276.76K | ±0.41% | 3.6132ms | 3.9770ms | 138.38K |
| 🥉 | **[Craft](https://github.com/sylphxltd/craft)** | 275.15K | ±0.49% | 3.6344ms | 4.0980ms | 137.57K |
| 4 | **[Mutative](https://github.com/unadlib/mutative)** | 200.19K | ±0.42% | 4.9953ms | 5.6610ms | 100.09K |
| 5 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 157.93K | ±0.62% | 6.3319ms | 8.9170ms | 78.97K |
| 6 | **[Immer](https://github.com/immerjs/immer)** | 125.96K | ±0.51% | 7.9391ms | 14.4970ms | 62.98K |
| 7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 18.84K | ±0.48% | 53.0717ms | 63.4890ms | 9.42K |

**Key Insight:** Native Spread is **347.90x faster** than Seamless Immutable in this category.

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

*Last generated: 2025-11-07T15:19:28.396Z*
