# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 6, 2025
- **Last Run:** 5:14:06 PM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@preact/signals](https://github.com/preactjs/signals)** | `v2.3.2` | 3.04KB | Dec 6, 2024 | ✅ Latest |
| **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | `v2.10.1` | 13.83KB | Dec 6, 2024 | ✅ Latest |
| **[@sylphx/zen](https://github.com/sylphxltd/zen)** | `v1.0.0` | 4.10KB | Dec 6, 2024 | ✅ Latest |
| **[jotai](https://github.com/pmndrs/jotai)** | `v2.15.1` | 4.29KB | Dec 6, 2024 | ✅ Latest |
| **[mobx](https://github.com/mobxjs/mobx)** | `v6.15.0` | 17.56KB | Dec 6, 2024 | ✅ Latest |
| **[recoil](https://github.com/facebookexperimental/Recoil)** | `v0.7.7` | 23.48KB | Nov 6, 2025 | ✅ Latest |
| **[solid-js](https://github.com/solidjs/solid)** | `v1.9.10` | 3.96KB | Dec 6, 2024 | ✅ Latest |
| **[valtio](https://github.com/pmndrs/valtio)** | `v2.2.0` | 3.07KB | Nov 6, 2025 | ✅ Latest |
| **[zustand](https://github.com/pmndrs/zustand)** | `v5.0.8` | 1.17KB | Nov 6, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 3.08KB | Baseline |
| 🥈 | **[@preact/signals](https://github.com/preactjs/signals)** | 3.04KB | 8.97KB | 2.59x |
| 🥉 | **[valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 8.27KB | 2.62x |
| 4 | **[solid-js](https://github.com/solidjs/solid)** | 3.96KB | 11.91KB | 3.38x |
| 5 | **[@sylphx/zen](https://github.com/sylphxltd/zen)** | 4.10KB | 14.49KB | 3.50x |
| 6 | **[jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 11.12KB | 3.66x |
| 7 | **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 40.60KB | 11.79x |
| 8 | **[mobx](https://github.com/mobxjs/mobx)** | 17.56KB | 63.65KB | 14.97x |
| 9 | **[recoil](https://github.com/facebookexperimental/Recoil)** | 23.48KB | 79.39KB | 20.02x |

**Size Insight:** zustand is the most lightweight at 1.17KB (gzip), while recoil is 20.02x larger at 23.48KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand) - Async Fetch** | 100.0/100 | Baseline |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx) - Async Fetch** | 99.7/100 | 99.7% |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai) - Async Fetch** | 99.6/100 | 99.6% |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - Async Fetch** | 99.5/100 | 99.5% |
| 5 | **[Zen](https://github.com/sylphxltd/zen) - Async Fetch** | 99.4/100 | 99.4% |
| 6 | **[Valtio](https://github.com/pmndrs/valtio) - Async Fetch** | 97.5/100 | 97.5% |
| 7 | **[Solid Signals](https://github.com/solidjs/solid) - Async Fetch** | 90.7/100 | 90.7% |
| 8 | **[Preact Signals](https://github.com/preactjs/signals) - Async Fetch** | 88.6/100 | 88.6% |
| 9 | **[Solid Signals](https://github.com/solidjs/solid)** | 67.2/100 | 67.2% |
| 10 | **[Zen](https://github.com/sylphxltd/zen)** | 60.8/100 | 60.8% |
| 11 | **[Preact Signals](https://github.com/preactjs/signals)** | 52.9/100 | 52.9% |
| 12 | **[Jotai](https://github.com/pmndrs/jotai)** | 11.0/100 | 11.0% |
| 13 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.4/100 | 7.4% |
| 14 | **[MobX](https://github.com/mobxjs/mobx)** | 4.7/100 | 4.7% |
| 15 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.0/100 | 4.0% |
| 16 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.4/100 | 3.4% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 100/100 | Excellent |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.04KB | 91/100 | Excellent |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 91/100 | Excellent |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.96KB | 85/100 | Good |
| 5 | **[Zen](https://github.com/sylphxltd/zen)** | 4.10KB | 84/100 | Good |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 83/100 | Good |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 58/100 | Average |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 17.56KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13/13 | 100% |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 13/13 | 100% |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 13/13 | 100% |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 13/13 | 100% |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 13/13 | 100% |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 13/13 | 100% |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 13/13 | 100% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 13/13 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### Simple Increment

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 28.01M
🥈 Zen                  ███████████████████████████████████████ 27.02M
🥉 Preact Signals       ███████████████████████████████████ 24.82M
   Valtio               ██████ 4.09M
   MobX                 ██████ 4.01M
   Jotai                ██ 1.40M
   Redux Toolkit        █ 689.40K
   Zustand               317.12K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 28.01M | ±0.28% | 0.0357ms | 0.0840ms | 14.00M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 27.02M | ±0.07% | 0.0370ms | 0.0840ms | 13.51M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 24.82M | ±0.24% | 0.0403ms | 0.0840ms | 12.41M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.09M | ±0.53% | 0.2445ms | 0.4590ms | 2.04M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 4.01M | ±1.22% | 0.2491ms | 0.5000ms | 2.01M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.40M | ±1.26% | 0.7151ms | 1.5840ms | 699.16K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 689.40K | ±0.83% | 1.4505ms | 3.1670ms | 344.70K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 317.12K | ±0.43% | 3.1534ms | 5.0000ms | 158.56K |

**Key Insight:** Solid Signals is **88.32x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 29.45M
🥈 Redux Toolkit        ███████████████████████████████████████ 28.71M
🥉 Preact Signals       █████████████████████████████████████ 27.36M
   Solid Signals        ████████████████████████████████████ 26.37M
   Zustand              ███████████████████████████████████ 25.64M
   Valtio               ███████████████████████ 16.62M
   MobX                 █████████ 6.95M
   Jotai                ███ 2.11M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 29.45M | ±0.04% | 0.0340ms | 0.0830ms | 14.72M |
| 🥈 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 28.71M | ±0.26% | 0.0348ms | 0.0830ms | 14.36M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 27.36M | ±0.14% | 0.0365ms | 0.0840ms | 13.68M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 26.37M | ±0.07% | 0.0379ms | 0.0840ms | 13.18M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 25.64M | ±0.05% | 0.0390ms | 0.0840ms | 12.82M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 16.62M | ±0.80% | 0.0602ms | 0.1250ms | 8.31M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 6.95M | ±0.77% | 0.1440ms | 0.2920ms | 3.47M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.11M | ±0.35% | 0.4731ms | 0.9160ms | 1.06M |

**Key Insight:** Zen is **13.93x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 24.28M
🥈 Solid Signals        ████████████████████████████████████ 21.69M
🥉 Zen                  ██████████████████████████████████ 20.70M
   MobX                 █████████ 5.18M
   Valtio               ███████ 4.49M
   Jotai                ███ 1.78M
   Redux Toolkit        █ 552.47K
   Zustand              █ 336.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 24.28M | ±0.03% | 0.0412ms | 0.0840ms | 12.14M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 21.69M | ±0.05% | 0.0461ms | 0.0840ms | 10.85M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 20.70M | ±0.05% | 0.0483ms | 0.1250ms | 10.35M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.18M | ±0.46% | 0.1932ms | 0.2920ms | 2.59M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.49M | ±0.55% | 0.2228ms | 0.3340ms | 2.24M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.78M | ±0.48% | 0.5605ms | 1.2080ms | 892.13K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 552.47K | ±0.43% | 1.8100ms | 2.5000ms | 276.24K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 336.48K | ±0.27% | 2.9719ms | 3.7500ms | 168.24K |

**Key Insight:** Preact Signals is **72.15x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 319.83K
🥈 Valtio               ██████████████████████████████████ 272.21K
🥉 Zustand              ██ 15.63K
   Jotai                ██ 15.25K
   Preact Signals       ██ 14.31K
   Zen                  ██ 14.01K
   Solid Signals        ██ 13.88K
   Redux Toolkit        █ 6.49K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 319.83K | ±9.95% | 3.1266ms | 5.0000ms | 159.92K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 272.21K | ±16.33% | 3.6737ms | 3.9170ms | 136.10K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 15.63K | ±10.15% | 63.9731ms | 102.7500ms | 7.84K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 15.25K | ±10.66% | 65.5904ms | 106.7500ms | 7.65K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 14.31K | ±11.54% | 69.8822ms | 121.7090ms | 7.16K |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 14.01K | ±11.75% | 71.3642ms | 121.2080ms | 7.01K |
| 7 | **[Solid Signals](https://github.com/solidjs/solid)** | 13.88K | ±12.21% | 72.0364ms | 121.4590ms | 6.94K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 6.49K | ±0.95% | 154.0631ms | 283.2080ms | 3.25K |

**Key Insight:** MobX is **49.27x faster** than Redux Toolkit in this category.

### Async Operations

**Performance Comparison:**

```
🥇 Zustand - Async F... ████████████████████████████████████████ 879.99
🥈 MobX - Async Fetch   ████████████████████████████████████████ 877.46
🥉 Jotai - Async Fetch  ████████████████████████████████████████ 876.13
   Redux Toolkit - A... ████████████████████████████████████████ 875.85
   Zen - Async Fetch    ████████████████████████████████████████ 875.13
   Valtio - Async Fetch ███████████████████████████████████████ 857.65
   Solid Signals - A... ████████████████████████████████████ 797.97
   Preact Signals - ... ███████████████████████████████████ 779.43
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand) - Async Fetch** | 879.99 | ±0.99% | 1136.3719ms | 1182.5000ms | 441.00 |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx) - Async Fetch** | 877.46 | ±0.91% | 1139.6512ms | 1237.7920ms | 439.00 |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai) - Async Fetch** | 876.13 | ±0.64% | 1141.3847ms | 1221.0410ms | 439.00 |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - Async Fetch** | 875.85 | ±1.55% | 1141.7490ms | 1378.3750ms | 438.00 |
| 5 | **[Zen](https://github.com/sylphxltd/zen) - Async Fetch** | 875.13 | ±1.50% | 1142.6828ms | 1365.1670ms | 438.00 |
| 6 | **[Valtio](https://github.com/pmndrs/valtio) - Async Fetch** | 857.65 | ±2.88% | 1165.9827ms | 2026.5840ms | 429.00 |
| 7 | **[Solid Signals](https://github.com/solidjs/solid) - Async Fetch** | 797.97 | ±6.09% | 1253.1823ms | 4083.2080ms | 399.00 |
| 8 | **[Preact Signals](https://github.com/preactjs/signals) - Async Fetch** | 779.43 | ±7.76% | 1282.9883ms | 3932.7920ms | 391.00 |

**Key Insight:** Zustand - Async Fetch is **1.13x faster** than Preact Signals - Async Fetch in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 22.97M
🥈 Zen                  ███████████████████████████████████████ 22.33M
🥉 Preact Signals       █████████████████████████████ 16.37M
   Valtio               █████████ 5.39M
   MobX                 ████ 2.34M
   Jotai                █ 848.38K
   Redux Toolkit        █ 565.44K
   Zustand               178.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 22.97M | ±0.06% | 0.0435ms | 0.1250ms | 11.48M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 22.33M | ±0.21% | 0.0448ms | 0.1250ms | 11.17M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 16.37M | ±5.19% | 0.0611ms | 0.1250ms | 8.18M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.39M | ±1.23% | 0.1856ms | 0.3750ms | 2.69M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.34M | ±2.91% | 0.4279ms | 0.6670ms | 1.17M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 848.38K | ±3.71% | 1.1787ms | 3.6670ms | 424.54K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 565.44K | ±0.88% | 1.7685ms | 3.2910ms | 282.72K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 178.32K | ±2.88% | 5.6080ms | 23.2500ms | 89.16K |

**Key Insight:** Solid Signals is **128.79x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 11.97M
🥈 Zen                  ████ 1.31M
🥉 Preact Signals       ████ 1.16M
   Redux Toolkit        █ 258.85K
   Zustand              █ 214.98K
   MobX                  139.75K
   Jotai                 108.68K
   Valtio                17.43
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 11.97M | ±0.03% | 0.0835ms | 0.1250ms | 5.99M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.31M | ±1.25% | 0.7629ms | 1.0000ms | 655.37K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.16M | ±11.87% | 0.8631ms | 1.8750ms | 579.28K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 258.85K | ±9.89% | 3.8632ms | 4.1670ms | 129.43K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 214.98K | ±9.64% | 4.6517ms | 5.1250ms | 109.05K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 139.75K | ±9.74% | 7.1555ms | 6.9160ms | 69.93K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 108.68K | ±24.55% | 9.2017ms | 59.9590ms | 54.34K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 17.43 | ±10.84% | 57371.8540ms | 68128.2080ms | 10.00 |

**Key Insight:** Solid Signals is **686899.93x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 19.89M
🥈 Zen                  ██████████████████████████████████████ 18.96M
🥉 Preact Signals       ██████████████████████████████████████ 18.81M
   Valtio               █████ 2.54M
   MobX                 ████ 2.04M
   Jotai                █ 678.10K
   Redux Toolkit        █ 493.21K
   Zustand              █ 356.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 19.89M | ±0.55% | 0.0503ms | 0.1250ms | 9.94M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 18.96M | ±0.28% | 0.0527ms | 0.1250ms | 9.48M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 18.81M | ±0.29% | 0.0532ms | 0.1250ms | 9.41M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.54M | ±0.72% | 0.3931ms | 0.5000ms | 1.27M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.04M | ±0.49% | 0.4898ms | 0.7090ms | 1.02M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 678.10K | ±0.99% | 1.4747ms | 2.0000ms | 339.05K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 493.21K | ±1.11% | 2.0275ms | 2.3750ms | 246.60K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 356.24K | ±0.57% | 2.8071ms | 3.6670ms | 178.12K |

**Key Insight:** Solid Signals is **55.83x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.61K
🥈 Zustand              ████████████████████████████████████████ 4.61K
🥉 Zen                  ███████████████████████████████████████ 4.46K
   Jotai                ██████████████████████████████████████ 4.40K
   Preact Signals       ██████████████████████████████████████ 4.39K
   Redux Toolkit        ████ 426.22
   MobX                  17.14
   Valtio                7.20
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.61K | ±6.34% | 216.7858ms | 317.3750ms | 2.31K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.61K | ±6.08% | 217.0645ms | 264.0420ms | 2.30K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.46K | ±6.50% | 224.3723ms | 339.3330ms | 2.23K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.40K | ±6.44% | 227.1826ms | 268.4170ms | 2.20K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.39K | ±6.66% | 227.9780ms | 294.7920ms | 2.21K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 426.22 | ±1.35% | 2346.1898ms | 3313.3750ms | 214.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 17.14 | ±1.80% | 58356.2708ms | 62318.9580ms | 10.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 7.20 | ±2.16% | 138965.6498ms | 147368.3330ms | 10.00 |

**Key Insight:** Solid Signals is **641.03x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.39K
🥈 Jotai                ██████████████████████████████████████ 10.76K
🥉 Solid Signals        ████████████████████ 5.75K
   Preact Signals       ████████████████████ 5.70K
   Zustand              ██████████████████ 5.26K
   Redux Toolkit        ████ 1.09K
   Valtio                91.81
   MobX                  21.62
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.39K | ±0.60% | 87.7919ms | 108.9580ms | 5.70K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.76K | ±0.24% | 92.9611ms | 108.4170ms | 5.38K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.75K | ±14.06% | 173.9261ms | 223.3750ms | 2.88K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.70K | ±14.91% | 175.3848ms | 217.5840ms | 2.85K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.26K | ±15.72% | 189.9918ms | 228.7910ms | 2.63K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.09K | ±1.55% | 916.0506ms | 1790.6250ms | 546.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 91.81 | ±6.22% | 10891.6523ms | 17237.8340ms | 46.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 21.62 | ±3.79% | 46252.0493ms | 53605.7500ms | 11.00 |

**Key Insight:** Zen is **526.84x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.36K
🥈 Solid Signals        ███████████████████ 5.46K
🥉 Preact Signals       ███████████████████ 5.41K
   Jotai                ██████████████████ 5.24K
   Zustand              ██████████████████ 5.05K
   Redux Toolkit        ████ 1.08K
   Valtio                97.18
   MobX                  20.30
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.36K | ±0.17% | 87.9896ms | 109.2920ms | 5.68K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.46K | ±12.63% | 183.2508ms | 233.4170ms | 2.73K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.41K | ±13.33% | 184.8616ms | 233.1660ms | 2.71K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.24K | ±13.56% | 190.9200ms | 223.7910ms | 2.62K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.05K | ±14.86% | 198.0236ms | 241.1670ms | 2.52K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.08K | ±1.34% | 923.2439ms | 1694.7500ms | 542.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 97.18 | ±4.47% | 10290.6557ms | 15558.4160ms | 49.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 20.30 | ±10.72% | 49271.3145ms | 71460.1670ms | 11.00 |

**Key Insight:** Zen is **559.97x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 24.03M
🥈 Zen                  ██████████████████████████████████████ 22.93M
🥉 Preact Signals       █████████████████████████████████████ 22.15M
   Valtio               ███████ 4.21M
   MobX                 ████ 2.46M
   Jotai                ███ 1.60M
   Zustand              █ 356.10K
   Redux Toolkit         222.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 24.03M | ±0.09% | 0.0416ms | 0.0840ms | 12.02M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 22.93M | ±0.07% | 0.0436ms | 0.0840ms | 11.46M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 22.15M | ±0.14% | 0.0452ms | 0.0840ms | 11.07M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.21M | ±0.21% | 0.2374ms | 0.2920ms | 2.11M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.46M | ±0.26% | 0.4064ms | 0.5000ms | 1.23M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.60M | ±17.52% | 0.6236ms | 1.4590ms | 801.77K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 356.10K | ±0.58% | 2.8082ms | 3.2920ms | 178.05K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 222.95K | ±0.54% | 4.4853ms | 5.0410ms | 111.47K |

**Key Insight:** Solid Signals is **107.78x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 279.06K
🥈 Preact Signals       ██████████████████████████████████████ 268.28K
🥉 Jotai                ████████████████████████████████ 225.46K
   Zen                  ██████████████████████████████ 209.50K
   Zustand              █████████████████████ 147.94K
   Valtio               █████████ 64.87K
   MobX                 ████ 27.46K
   Redux Toolkit        █ 3.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 279.06K | ±0.86% | 3.5834ms | 6.2910ms | 139.53K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 268.28K | ±0.75% | 3.7275ms | 6.8750ms | 134.14K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 225.46K | ±0.88% | 4.4354ms | 7.9170ms | 112.73K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 209.50K | ±0.69% | 4.7733ms | 10.7090ms | 104.75K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 147.94K | ±0.78% | 6.7594ms | 9.7920ms | 73.97K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 64.87K | ±0.68% | 15.4143ms | 32.4590ms | 32.44K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 27.46K | ±1.19% | 36.4176ms | 76.5000ms | 13.73K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.75K | ±2.34% | 266.4423ms | 506.3750ms | 1.88K |

**Key Insight:** Solid Signals is **74.35x faster** than Redux Toolkit in this category.

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

*Last generated: 2025-11-06T22:45:33.392Z*
