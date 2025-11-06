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
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 64.2/100 | Baseline |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 58.7/100 | 91.4% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 55.0/100 | 85.7% |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 11.2/100 | 17.4% |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.1/100 | 11.1% |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.7/100 | 7.3% |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.9/100 | 6.1% |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.9/100 | 4.5% |

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
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12/12 | 100% |
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 12/12 | 100% |
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 12/12 | 100% |
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 12/12 | 100% |
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 12/12 | 100% |
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 12/12 | 100% |
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 12/12 | 100% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 12/12 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### Simple Increment

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 36.93M
🥈 Preact Signals       ██████████████████████████████████████ 34.90M
🥉 Zen                  █████████████████████████████████████ 34.22M
   Valtio               ██████ 5.77M
   MobX                 ██████ 5.59M
   Jotai                ██ 1.70M
   Redux Toolkit        █ 902.02K
   Zustand               358.42K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 36.93M | ±0.05% | 0.0271ms | 0.0420ms | 18.46M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 34.90M | ±0.06% | 0.0287ms | 0.0420ms | 17.45M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 34.22M | ±0.05% | 0.0292ms | 0.0420ms | 17.11M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.77M | ±0.12% | 0.1734ms | 0.2090ms | 2.88M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 5.59M | ±0.46% | 0.1788ms | 0.2090ms | 2.80M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.70M | ±0.58% | 0.5875ms | 0.9160ms | 851.10K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 902.02K | ±0.16% | 1.1086ms | 1.3340ms | 451.01K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 358.42K | ±1.31% | 2.7901ms | 3.4580ms | 179.21K |

**Key Insight:** Solid Signals is **103.03x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 37.46M
🥈 Redux Toolkit        ███████████████████████████████████████ 36.42M
🥉 Zen                  ███████████████████████████████████████ 36.35M
   Preact Signals       ███████████████████████████████████████ 36.06M
   Zustand              ███████████████████████████████ 29.29M
   Valtio               ██████████████████████████ 24.82M
   MobX                 ███████████ 9.90M
   Jotai                ███ 2.84M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 37.46M | ±0.05% | 0.0267ms | 0.0420ms | 18.73M |
| 🥈 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 36.42M | ±0.05% | 0.0275ms | 0.0420ms | 18.21M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 36.35M | ±0.05% | 0.0275ms | 0.0420ms | 18.17M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 36.06M | ±0.04% | 0.0277ms | 0.0420ms | 18.03M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 29.29M | ±0.52% | 0.0341ms | 0.0420ms | 14.65M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.82M | ±0.05% | 0.0403ms | 0.0420ms | 12.41M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 9.90M | ±0.24% | 0.1010ms | 0.1250ms | 4.95M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.84M | ±0.22% | 0.3520ms | 0.4580ms | 1.42M |

**Key Insight:** Solid Signals is **13.19x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 29.26M
🥈 Preact Signals       ███████████████████████████████████████ 28.43M
🥉 Zen                  ██████████████████████████████████████ 27.73M
   MobX                 ████████ 5.93M
   Valtio               ███████ 5.30M
   Jotai                ███ 2.11M
   Redux Toolkit        █ 661.90K
   Zustand              █ 370.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 29.26M | ±0.05% | 0.0342ms | 0.0830ms | 14.63M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 28.43M | ±0.04% | 0.0352ms | 0.0830ms | 14.22M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 27.73M | ±0.05% | 0.0361ms | 0.0830ms | 13.87M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.93M | ±0.12% | 0.1687ms | 0.2090ms | 2.96M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.30M | ±0.11% | 0.1887ms | 0.2500ms | 2.65M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.11M | ±2.29% | 0.4741ms | 0.6660ms | 1.05M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 661.90K | ±0.29% | 1.5108ms | 1.8750ms | 330.95K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 370.31K | ±0.45% | 2.7004ms | 3.3330ms | 185.16K |

**Key Insight:** Solid Signals is **79.02x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 478.54K
🥈 Valtio               ████████████████████████████████ 379.22K
🥉 Preact Signals       ██ 28.24K
   Zustand              █ 17.57K
   Jotai                █ 17.23K
   Solid Signals        █ 14.10K
   Zen                  █ 13.80K
   Redux Toolkit        █ 7.32K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 478.54K | ±9.46% | 2.0897ms | 2.3330ms | 239.27K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 379.22K | ±14.68% | 2.6370ms | 3.1250ms | 189.61K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 28.24K | ±12.50% | 35.4146ms | 111.1660ms | 14.12K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 17.57K | ±10.38% | 56.9032ms | 91.7500ms | 8.79K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 17.23K | ±11.38% | 58.0330ms | 89.7500ms | 8.65K |
| 6 | **[Solid Signals](https://github.com/solidjs/solid)** | 14.10K | ±13.28% | 70.9133ms | 122.8330ms | 7.11K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 13.80K | ±13.57% | 72.4811ms | 124.7090ms | 6.97K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.32K | ±0.89% | 136.6993ms | 202.6660ms | 3.66K |

**Key Insight:** MobX is **65.42x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 29.36M
🥈 Solid Signals        ████████████████████████████████████████ 29.12M
🥉 Preact Signals       ████████████████████████████████████ 26.29M
   Valtio               ███████████ 8.13M
   MobX                 █████████ 6.78M
   Jotai                ███ 2.19M
   Redux Toolkit        █ 1.04M
   Zustand              █ 369.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 29.36M | ±17.27% | 0.0341ms | 0.0830ms | 15.87M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 29.12M | ±0.03% | 0.0343ms | 0.0830ms | 14.56M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 26.29M | ±0.03% | 0.0380ms | 0.0840ms | 13.15M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 8.13M | ±0.39% | 0.1230ms | 0.2090ms | 4.07M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 6.78M | ±0.51% | 0.1474ms | 0.2090ms | 3.39M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.19M | ±0.87% | 0.4568ms | 1.1250ms | 1.09M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.04M | ±0.61% | 0.9607ms | 1.2920ms | 520.48K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 369.30K | ±0.52% | 2.7079ms | 3.0420ms | 184.65K |

**Key Insight:** Zen is **79.49x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 13.00M
🥈 Preact Signals       █████ 1.74M
🥉 Zen                  ████ 1.44M
   Redux Toolkit        █ 276.86K
   Zustand              █ 231.27K
   MobX                  160.24K
   Jotai                 119.04K
   Valtio                15.31
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 13.00M | ±1.17% | 0.0769ms | 0.0840ms | 6.50M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.74M | ±0.71% | 0.5751ms | 0.7090ms | 869.45K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 1.44M | ±1.33% | 0.6955ms | 0.9160ms | 718.91K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 276.86K | ±9.12% | 3.6120ms | 5.1670ms | 140.18K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 231.27K | ±10.18% | 4.3240ms | 6.6670ms | 115.63K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 160.24K | ±9.73% | 6.2408ms | 5.6250ms | 80.50K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 119.04K | ±25.01% | 8.4006ms | 31.6250ms | 59.52K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 15.31 | ±3.13% | 65335.3457ms | 70872.7090ms | 10.00 |

**Key Insight:** Solid Signals is **849510.49x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 24.59M
🥈 Preact Signals       ███████████████████████████████████ 21.80M
🥉 Zen                  ██████████████████████████████████ 20.96M
   Valtio               █████ 2.83M
   MobX                 ████ 2.35M
   Jotai                █ 584.05K
   Redux Toolkit        █ 557.25K
   Zustand              █ 372.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 24.59M | ±0.03% | 0.0407ms | 0.0840ms | 12.29M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 21.80M | ±0.21% | 0.0459ms | 0.0840ms | 10.90M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 20.96M | ±0.57% | 0.0477ms | 0.0840ms | 10.48M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.83M | ±0.47% | 0.3538ms | 0.4170ms | 1.41M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.35M | ±0.30% | 0.4261ms | 0.5000ms | 1.17M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 584.05K | ±17.60% | 1.7122ms | 4.0420ms | 292.02K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 557.25K | ±1.27% | 1.7945ms | 2.1670ms | 278.63K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 372.95K | ±1.02% | 2.6813ms | 3.1660ms | 186.48K |

**Key Insight:** Solid Signals is **65.93x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 4.38K
🥈 Solid Signals        ███████████████████████████████████████ 4.29K
🥉 Jotai                ██████████████████████████████████████ 4.11K
   Zustand              █████████████████████████████████████ 4.01K
   Preact Signals       █████████████████████████████████ 3.61K
   Redux Toolkit        ███ 375.17
   MobX                  12.37
   Valtio                4.90
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 4.38K | ±6.59% | 228.4076ms | 276.5420ms | 2.19K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.29K | ±6.54% | 233.0107ms | 280.6660ms | 2.15K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.11K | ±6.57% | 243.3271ms | 286.7910ms | 2.06K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.01K | ±6.51% | 249.2594ms | 605.9160ms | 2.02K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.61K | ±22.63% | 277.2051ms | 566.3750ms | 1.80K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 375.17 | ±2.60% | 2665.4282ms | 4418.2080ms | 188.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 12.37 | ±2.42% | 80842.7000ms | 85956.2500ms | 10.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.90 | ±1.82% | 204117.8251ms | 212675.9170ms | 10.00 |

**Key Insight:** Zen is **893.66x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.97K
🥈 Jotai                ██████████████████████████████████████ 11.33K
🥉 Solid Signals        ███████████████████ 5.71K
   Zustand              █████████████████ 5.10K
   Preact Signals       █████████████████ 5.05K
   Redux Toolkit        ███ 1.03K
   Valtio                41.03
   MobX                  15.57
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.97K | ±0.04% | 83.5430ms | 89.6250ms | 5.99K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 11.33K | ±0.07% | 88.2548ms | 94.9160ms | 5.67K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.71K | ±15.26% | 175.2300ms | 223.7920ms | 2.85K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.10K | ±17.72% | 195.9405ms | 245.4590ms | 2.67K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.05K | ±18.05% | 198.0566ms | 246.3750ms | 2.52K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.03K | ±0.84% | 971.2197ms | 1429.1670ms | 515.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 41.03 | ±0.62% | 24372.9504ms | 25123.6250ms | 21.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.57 | ±1.55% | 64232.2207ms | 67257.1250ms | 10.00 |

**Key Insight:** Zen is **768.85x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.72K
🥈 Jotai                ██████████████████ 5.14K
🥉 Zustand              ████████████████ 4.82K
   Solid Signals        ████████████████ 4.75K
   Preact Signals       ████████████████ 4.70K
   Redux Toolkit        ████ 1.03K
   Valtio                40.88
   MobX                  15.39
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.72K | ±0.05% | 85.3200ms | 92.2920ms | 5.86K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.14K | ±14.40% | 194.7359ms | 245.5420ms | 2.57K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.82K | ±17.15% | 207.3549ms | 259.9590ms | 2.41K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.75K | ±18.77% | 210.5323ms | 257.4170ms | 2.49K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.70K | ±18.00% | 212.5894ms | 264.0000ms | 2.35K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.03K | ±0.93% | 970.5877ms | 1510.8330ms | 516.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 40.88 | ±0.77% | 24459.7163ms | 25686.7910ms | 21.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.39 | ±6.72% | 64983.5501ms | 82156.2500ms | 10.00 |

**Key Insight:** Zen is **761.64x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 24.30M
🥈 Zen                  ███████████████████████████████████████ 23.77M
🥉 Solid Signals        ███████████████████████████████████ 21.39M
   Valtio               ███████ 4.42M
   MobX                 ████ 2.50M
   Jotai                ███ 2.05M
   Zustand              █ 378.19K
   Redux Toolkit         234.73K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 24.30M | ±0.68% | 0.0411ms | 0.0840ms | 12.15M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 23.77M | ±0.03% | 0.0421ms | 0.0840ms | 11.88M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 21.39M | ±24.52% | 0.0468ms | 0.0840ms | 10.69M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.42M | ±0.43% | 0.2264ms | 0.2910ms | 2.21M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.50M | ±0.40% | 0.3999ms | 0.4590ms | 1.25M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.05M | ±0.03% | 0.4879ms | 0.6250ms | 1.02M |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 378.19K | ±0.56% | 2.6442ms | 2.9170ms | 189.09K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 234.73K | ±0.32% | 4.2602ms | 4.6250ms | 117.37K |

**Key Insight:** Preact Signals is **103.54x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 287.64K
🥈 Preact Signals       ███████████████████████████████████████ 283.64K
🥉 Jotai                █████████████████████████████████ 239.11K
   Zen                  █████████████████████████████ 211.34K
   Zustand              █████████████████████ 148.10K
   Valtio               ██████████ 69.06K
   MobX                 ████ 29.58K
   Redux Toolkit        █ 3.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 287.64K | ±0.86% | 3.4766ms | 6.4160ms | 143.82K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 283.64K | ±0.90% | 3.5256ms | 6.1250ms | 141.82K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 239.11K | ±0.71% | 4.1822ms | 7.0420ms | 119.56K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 211.34K | ±0.87% | 4.7318ms | 10.4590ms | 105.67K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 148.10K | ±0.74% | 6.7520ms | 9.0830ms | 74.05K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 69.06K | ±0.71% | 14.4799ms | 28.7090ms | 34.53K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 29.58K | ±1.19% | 33.8039ms | 68.3750ms | 14.79K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.99K | ±2.31% | 250.4335ms | 461.0000ms | 2.00K |

**Key Insight:** Solid Signals is **72.03x faster** than Redux Toolkit in this category.

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

*Last generated: 2025-11-06T22:57:16.973Z*
