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
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 64.0/100 | Baseline |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 59.5/100 | 93.0% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 52.1/100 | 81.4% |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.6/100 | 16.6% |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.2/100 | 11.3% |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.5/100 | 7.0% |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.9/100 | 6.1% |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.8/100 | 4.4% |

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
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 13/13 | 100% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 13/13 | 100% |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12/13 | 92% |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 12/13 | 92% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 12/13 | 92% |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 12/13 | 92% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 12/13 | 92% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 12/13 | 92% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### Simple Increment

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 34.92M
🥈 Zen                  ██████████████████████████████████████ 33.58M
🥉 Preact Signals       ██████████████████████████████████████ 32.76M
   Valtio               ██████ 5.65M
   MobX                 ██████ 5.37M
   Jotai                ██ 1.69M
   Redux Toolkit        █ 891.07K
   Zustand               352.97K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 34.92M | ±0.05% | 0.0286ms | 0.0420ms | 17.46M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 33.58M | ±0.04% | 0.0298ms | 0.0420ms | 16.79M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 32.76M | ±0.24% | 0.0305ms | 0.0420ms | 16.38M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.65M | ±0.14% | 0.1769ms | 0.2090ms | 2.83M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 5.37M | ±0.12% | 0.1861ms | 0.2090ms | 2.69M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.69M | ±0.71% | 0.5913ms | 1.0830ms | 845.61K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 891.07K | ±0.17% | 1.1222ms | 1.3750ms | 445.54K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 352.97K | ±0.37% | 2.8331ms | 3.5410ms | 176.49K |

**Key Insight:** Solid Signals is **98.92x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 35.50M
🥈 Solid Signals        ███████████████████████████████████████ 34.91M
🥉 Zen                  ███████████████████████████████████████ 34.28M
   Preact Signals       ███████████████████████████████████████ 34.24M
   Zustand              ████████████████████████████████████ 31.57M
   Valtio               ████████████████████████████ 24.45M
   MobX                 ███████████ 9.62M
   Jotai                ███ 2.82M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 35.50M | ±0.06% | 0.0282ms | 0.0420ms | 17.75M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 34.91M | ±0.06% | 0.0286ms | 0.0420ms | 17.46M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 34.28M | ±0.06% | 0.0292ms | 0.0420ms | 17.14M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 34.24M | ±0.18% | 0.0292ms | 0.0420ms | 17.12M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 31.57M | ±0.05% | 0.0317ms | 0.0420ms | 15.79M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.45M | ±0.03% | 0.0409ms | 0.0830ms | 12.22M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 9.62M | ±0.17% | 0.1040ms | 0.1250ms | 4.81M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.82M | ±0.30% | 0.3552ms | 0.4580ms | 1.41M |

**Key Insight:** Redux Toolkit is **12.61x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 28.71M
🥈 Preact Signals       █████████████████████████████████████ 26.91M
🥉 Zen                  █████████████████████████████████████ 26.35M
   MobX                 ████████ 5.71M
   Valtio               ███████ 5.31M
   Jotai                ███ 2.19M
   Redux Toolkit        █ 652.25K
   Zustand              █ 379.70K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 28.71M | ±0.04% | 0.0348ms | 0.0830ms | 14.36M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 26.91M | ±0.04% | 0.0372ms | 0.0830ms | 13.45M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 26.35M | ±4.79% | 0.0379ms | 0.0830ms | 13.18M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.71M | ±0.12% | 0.1752ms | 0.2500ms | 2.85M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.31M | ±0.15% | 0.1883ms | 0.2500ms | 2.66M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.19M | ±1.96% | 0.4568ms | 0.6250ms | 1.09M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 652.25K | ±0.26% | 1.5332ms | 1.8750ms | 326.13K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 379.70K | ±0.12% | 2.6336ms | 3.2500ms | 189.85K |

**Key Insight:** Solid Signals is **75.62x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 487.26K
🥈 Valtio               ████████████████████████████ 340.36K
🥉 Zustand              █ 17.95K
   Jotai                █ 17.63K
   Solid Signals        █ 14.42K
   Preact Signals       █ 14.25K
   Zen                  █ 14.00K
   Redux Toolkit        █ 7.45K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 487.26K | ±7.66% | 2.0523ms | 2.1250ms | 243.63K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 340.36K | ±16.15% | 2.9380ms | 3.3750ms | 173.91K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 17.95K | ±9.61% | 55.7066ms | 84.9580ms | 8.98K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 17.63K | ±10.15% | 56.7320ms | 87.0000ms | 8.81K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 14.42K | ±13.01% | 69.3389ms | 118.2080ms | 7.21K |
| 6 | **[Preact Signals](https://github.com/preactjs/signals)** | 14.25K | ±13.88% | 70.1618ms | 121.2080ms | 7.19K |
| 7 | **[Zen](https://github.com/sylphxltd/zen)** | 14.00K | ±14.08% | 71.4470ms | 125.1250ms | 7.10K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 7.45K | ±0.78% | 134.2573ms | 181.4170ms | 3.73K |

**Key Insight:** MobX is **65.42x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 30.80M
🥈 Solid Signals        ████████████████████████████████████ 27.42M
🥉 Preact Signals       █████████████████████████████████ 25.42M
   Valtio               ██████████ 7.98M
   MobX                 ████████ 6.47M
   Jotai                ███ 2.02M
   Redux Toolkit        █ 1.04M
   Zustand               374.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 30.80M | ±0.04% | 0.0325ms | 0.0830ms | 15.40M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 27.42M | ±0.07% | 0.0365ms | 0.0830ms | 13.71M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 25.42M | ±0.06% | 0.0393ms | 0.0840ms | 12.71M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 7.98M | ±0.52% | 0.1253ms | 0.2500ms | 3.99M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 6.47M | ±0.58% | 0.1546ms | 0.2090ms | 3.23M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.02M | ±14.48% | 0.4956ms | 1.4170ms | 1.01M |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.04M | ±0.62% | 0.9608ms | 1.2910ms | 520.38K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 374.86K | ±0.84% | 2.6677ms | 3.2500ms | 187.43K |

**Key Insight:** Zen is **82.18x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 12.86M
🥈 Preact Signals       ██████ 1.81M
🥉 Zen                  ████ 1.41M
   Redux Toolkit        █ 286.90K
   Zustand              █ 231.68K
   MobX                  155.70K
   Jotai                 101.37K
   Valtio                13.65
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 12.86M | ±1.28% | 0.0778ms | 0.1250ms | 6.43M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.81M | ±0.70% | 0.5521ms | 0.7080ms | 905.61K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 1.41M | ±1.40% | 0.7068ms | 0.9170ms | 707.41K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 286.90K | ±8.85% | 3.4856ms | 3.3340ms | 143.45K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 231.68K | ±10.37% | 4.3164ms | 4.5000ms | 115.84K |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 155.70K | ±9.93% | 6.4226ms | 6.0000ms | 78.26K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 101.37K | ±21.57% | 9.8647ms | 84.4170ms | 50.69K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 13.65 | ±35.74% | 73256.2916ms | 177084.9580ms | 10.00 |

**Key Insight:** Solid Signals is **942161.90x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 24.37M
🥈 Zen                  ██████████████████████████████████ 20.54M
🥉 Preact Signals       ████████████████████████████████ 19.55M
   Valtio               █████ 2.74M
   MobX                 ████ 2.27M
   Jotai                █ 734.06K
   Redux Toolkit        █ 552.12K
   Zustand              █ 378.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 24.37M | ±0.03% | 0.0410ms | 0.0840ms | 12.18M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 20.54M | ±0.04% | 0.0487ms | 0.0840ms | 10.27M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 19.55M | ±2.78% | 0.0512ms | 0.1250ms | 9.77M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.74M | ±1.08% | 0.3646ms | 0.4580ms | 1.37M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.27M | ±0.83% | 0.4401ms | 0.5420ms | 1.14M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 734.06K | ±1.18% | 1.3623ms | 1.8750ms | 367.03K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 552.12K | ±1.20% | 1.8112ms | 2.2080ms | 276.06K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 378.09K | ±0.85% | 2.6449ms | 3.2080ms | 189.05K |

**Key Insight:** Solid Signals is **64.44x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 4.46K
🥈 Preact Signals       ███████████████████████████████████████ 4.38K
🥉 Solid Signals        ██████████████████████████████████████ 4.28K
   Zustand              ██████████████████████████████████████ 4.21K
   Jotai                █████████████████████████████████████ 4.14K
   Redux Toolkit        ███ 380.85
   MobX                  11.82
   Valtio                5.25
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 4.46K | ±6.53% | 224.3059ms | 270.5000ms | 2.25K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.38K | ±6.77% | 228.3456ms | 278.9170ms | 2.19K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.28K | ±6.84% | 233.3891ms | 284.9160ms | 2.14K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.21K | ±6.39% | 237.4571ms | 285.0000ms | 2.11K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.14K | ±6.33% | 241.2865ms | 290.6660ms | 2.08K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 380.85 | ±0.82% | 2625.6832ms | 3282.4580ms | 191.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 11.82 | ±2.03% | 84624.2499ms | 90441.1660ms | 10.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.25 | ±1.48% | 190590.0458ms | 194342.7910ms | 10.00 |

**Key Insight:** Zen is **849.69x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 12.23K
🥈 Jotai                ████████████████████████████████████ 11.05K
🥉 Preact Signals       ███████████████████ 5.86K
   Solid Signals        ███████████████████ 5.70K
   Zustand              █████████████████ 5.20K
   Redux Toolkit        ███ 1.01K
   Valtio                43.51
   MobX                  14.20
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 12.23K | ±0.09% | 81.7810ms | 90.1670ms | 6.11K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 11.05K | ±0.06% | 90.5145ms | 97.0830ms | 5.52K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.86K | ±15.65% | 170.7785ms | 218.5830ms | 2.93K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.70K | ±16.69% | 175.3335ms | 255.5830ms | 2.85K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 5.20K | ±16.26% | 192.1627ms | 242.5000ms | 2.60K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.01K | ±1.12% | 989.9797ms | 1656.0000ms | 506.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 43.51 | ±0.59% | 22984.3995ms | 23784.3330ms | 22.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 14.20 | ±2.14% | 70432.0168ms | 75386.6250ms | 10.00 |

**Key Insight:** Zen is **861.23x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.95K
🥈 Preact Signals       ██████████████████ 5.34K
🥉 Jotai                █████████████████ 4.94K
   Zustand              ████████████████ 4.87K
   Solid Signals        ████████████████ 4.82K
   Redux Toolkit        ███ 1.01K
   Valtio                42.97
   MobX                  14.11
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.95K | ±0.08% | 83.6984ms | 91.6660ms | 5.97K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.34K | ±16.48% | 187.2289ms | 237.2910ms | 2.67K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.94K | ±14.33% | 202.2926ms | 259.0000ms | 2.47K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.87K | ±15.65% | 205.1373ms | 256.7920ms | 2.44K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.82K | ±19.47% | 207.5073ms | 246.0840ms | 2.51K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.01K | ±1.31% | 987.7582ms | 1732.8750ms | 507.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 42.97 | ±2.03% | 23274.5796ms | 27804.5000ms | 22.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 14.11 | ±5.45% | 70881.4791ms | 85461.8750ms | 10.00 |

**Key Insight:** Zen is **846.87x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 26.06M
🥈 Preact Signals       ██████████████████████████████████ 22.11M
🥉 Zen                  █████████████████████████████ 18.89M
   Valtio               ██████ 4.05M
   MobX                 ████ 2.56M
   Jotai                ███ 2.07M
   Zustand              █ 392.16K
   Redux Toolkit         228.98K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 26.06M | ±0.46% | 0.0384ms | 0.0830ms | 13.03M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 22.11M | ±0.48% | 0.0452ms | 0.0840ms | 11.05M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 18.89M | ±26.25% | 0.0530ms | 0.1250ms | 9.44M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.05M | ±4.53% | 0.2467ms | 0.2920ms | 2.04M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.56M | ±0.78% | 0.3914ms | 0.4590ms | 1.28M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.07M | ±0.04% | 0.4822ms | 0.5830ms | 1.04M |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 392.16K | ±0.81% | 2.5500ms | 2.9160ms | 196.08K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 228.98K | ±0.85% | 4.3672ms | 4.7910ms | 114.49K |

**Key Insight:** Solid Signals is **113.80x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 290.42K
🥈 Preact Signals       ███████████████████████████████████████ 281.92K
🥉 Jotai                █████████████████████████████████ 238.68K
   Zen                  █████████████████████████████ 207.69K
   Zustand              ████████████████████ 148.18K
   Valtio               ██████████ 70.12K
   MobX                 ████ 29.01K
   Redux Toolkit        █ 3.94K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 290.42K | ±0.82% | 3.4433ms | 6.4580ms | 145.21K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 281.92K | ±0.85% | 3.5471ms | 6.1670ms | 140.96K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 238.68K | ±0.79% | 4.1898ms | 7.0410ms | 119.34K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 207.69K | ±0.85% | 4.8150ms | 10.7920ms | 103.84K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 148.18K | ±0.80% | 6.7485ms | 8.9580ms | 74.09K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 70.12K | ±0.71% | 14.2621ms | 28.1250ms | 35.06K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 29.01K | ±1.06% | 34.4713ms | 71.3750ms | 14.51K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.94K | ±2.29% | 253.9413ms | 474.9170ms | 1.97K |

**Key Insight:** Solid Signals is **73.75x faster** than Redux Toolkit in this category.

### Reactive Async State Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 35.49M
🥈 Jotai                ██ 2.13M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 35.49M | ±0.23% | 0.0282ms | 0.0420ms | 17.75M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.13M | ±0.48% | 0.4687ms | 0.6250ms | 1.07M |

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

*Last generated: 2025-11-06T23:11:53.080Z*
