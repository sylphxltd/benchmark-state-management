# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

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
- **Last Run:** 6:20:00 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@preact/signals](https://github.com/preactjs/signals)** | `v2.4.0` | 3.04KB | Nov 7, 2025 | ✅ Latest |
| **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | `v2.10.1` | 13.83KB | Dec 6, 2024 | ✅ Latest |
| **[@sylphx/zen](https://github.com/sylphxltd/zen)** | `v1.2.1` | 5.35KB | Nov 7, 2025 | ✅ Latest |
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
| 5 | **[jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 11.12KB | 3.66x |
| 6 | **[@sylphx/zen](https://github.com/sylphxltd/zen)** | 5.35KB | 18.43KB | 4.56x |
| 7 | **[@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 40.60KB | 11.79x |
| 8 | **[mobx](https://github.com/mobxjs/mobx)** | 17.56KB | 63.65KB | 14.97x |
| 9 | **[recoil](https://github.com/facebookexperimental/Recoil)** | 23.48KB | 79.39KB | 20.02x |

**Size Insight:** zustand is the most lightweight at 1.17KB (gzip), while recoil is 20.02x larger at 23.48KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 76.7/100 | Baseline |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 60.3/100 | 78.6% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 52.4/100 | 68.3% |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.7/100 | 10.0% |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.5/100 | 7.2% |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 3.6/100 | 4.7% |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.2/100 | 4.2% |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.9/100 | 2.5% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.17KB | 100/100 | Excellent |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 3.04KB | 91/100 | Excellent |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.07KB | 91/100 | Excellent |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.96KB | 85/100 | Good |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.29KB | 83/100 | Good |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 5.35KB | 79/100 | Good |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 13.83KB | 58/100 | Average |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 17.56KB | 53/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 23/23 | 100% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 23/23 | 100% |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 22/23 | 96% |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 22/23 | 96% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 22/23 | 96% |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 22/23 | 96% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 22/23 | 96% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 22/23 | 96% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across state management libraries

| Feature | **Preact Signals** | **Redux Toolkit** | **Zen** | **Jotai** | **MobX** | **Recoil** | **Solid Signals** | **Valtio** | **Zustand** |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Native TypeScript support with full type inference</sub> | [✅](https://preactjs.com/guide/v10/signals/) | ✅ | [✅](https://github.com/sylphxltd/zen) | ✅ | [✅](https://mobx.js.org/README.html#typescript) | [✅](https://recoiljs.org/docs/guides/typescript) | [✅](https://www.solidjs.com/docs/latest#typescript) | ✅ | ✅ |
| **DevTools**<br/><sub>Browser DevTools extension for debugging</sub> | ✅ | [✅](https://github.com/reduxjs/redux-devtools) | ❌ | [✅](https://jotai.org/docs/tools/devtools) | ❌ | [✅](https://recoiljs.org/docs/guides/dev-tools) | ❌ | [✅](https://github.com/pmndrs/valtio#devtools) | [✅](https://github.com/pmndrs/zustand#redux-devtools) |
| **Time Travel**<br/><sub>Time-travel debugging capability</sub> | ❌ | [✅](https://redux-toolkit.js.org/api/configureStore) | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Middleware**<br/><sub>Middleware/plugin system for extensibility</sub> | ❌ | [✅](https://redux-toolkit.js.org/api/getDefaultMiddleware) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | [✅](https://github.com/pmndrs/zustand#middleware) |
| **Async Support**<br/><sub>Built-in async/thunk operations</sub> | ❌ | ✅ | [✅](https://github.com/sylphxltd/zen) | [✅](https://jotai.org/docs/guides/async) | ✅ | [✅](https://recoiljs.org/docs/guides/asynchronous-data-queries) | ❌ | ✅ | ✅ |
| **Selectors**<br/><sub>Built-in selector/computed value system</sub> | [✅](https://preactjs.com/guide/v10/signals/#computed-signals) | ✅ | [✅](https://github.com/sylphxltd/zen) | ✅ | [✅](https://mobx.js.org/computeds.html) | ✅ | [✅](https://www.solidjs.com/docs/latest/api#creatememo) | [✅](https://github.com/pmndrs/valtio#computed-values) | ✅ |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### Store Creation

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.21M
🥈 Preact Signals       ███████████████████████████████████████ 11.01M
🥉 Solid Signals        ██████████████████████████████████████ 10.64M
   Zustand              █████████████████ 4.71M
   Jotai                ███ 846.40K
   Valtio               █ 320.97K
   MobX                 █ 87.67K
   Redux Toolkit        █ 42.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.21M | ±0.10% | 0.0892ms | 0.1110ms | 5.61M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 11.01M | ±0.10% | 0.0908ms | 0.1200ms | 5.50M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.64M | ±0.10% | 0.0940ms | 0.1200ms | 5.32M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.71M | ±0.68% | 0.2123ms | 0.3510ms | 2.35M |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 846.40K | ±8.89% | 1.1815ms | 1.1820ms | 423.20K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 320.97K | ±18.02% | 3.1156ms | 4.3480ms | 160.48K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 87.67K | ±4.90% | 11.4066ms | 27.6420ms | 43.84K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 42.44K | ±4.95% | 23.5605ms | 62.6960ms | 21.22K |

**Key Insight:** Zen is **264.16x faster** than Redux Toolkit in this category.

### Read (1000x)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 2.38M
🥈 Zen                  ███████████████████ 1.13M
🥉 Preact Signals       ████████████ 739.01K
   Zustand              ██████████ 602.89K
   Redux Toolkit        ███████ 437.11K
   Valtio               █ 40.94K
   MobX                 █ 31.83K
   Jotai                █ 3.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 2.38M | ±0.10% | 0.4200ms | 0.7110ms | 1.19M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.13M | ±0.20% | 0.8888ms | 0.9020ms | 562.53K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 739.01K | ±0.08% | 1.3532ms | 1.3520ms | 369.50K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 602.89K | ±0.08% | 1.6587ms | 1.6630ms | 301.45K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 437.11K | ±0.08% | 2.2878ms | 2.3340ms | 218.55K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 40.94K | ±0.30% | 24.4244ms | 31.4890ms | 20.47K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 31.83K | ±0.09% | 31.4135ms | 38.6520ms | 15.92K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.21K | ±0.48% | 311.6611ms | 481.7070ms | 1.60K |

**Key Insight:** Solid Signals is **742.00x faster** than Jotai in this category.

### Write (no listeners)

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 10.30M
🥈 Solid Signals        ████████████████████████████████████████ 10.30M
🥉 Zen                  ████████████████████████████████████████ 10.27M
   MobX                 ██████████ 2.48M
   Valtio               ██████ 1.65M
   Jotai                ██ 536.31K
   Redux Toolkit        █ 265.36K
   Zustand              █ 166.91K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.30M | ±0.09% | 0.0971ms | 0.1200ms | 5.15M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.30M | ±0.09% | 0.0971ms | 0.1200ms | 5.15M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 10.27M | ±0.10% | 0.0973ms | 0.1200ms | 5.14M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 2.48M | ±0.97% | 0.4037ms | 0.4510ms | 1.24M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.65M | ±0.96% | 0.6061ms | 0.6710ms | 824.91K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 536.31K | ±0.80% | 1.8646ms | 3.5360ms | 268.15K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 265.36K | ±0.73% | 3.7685ms | 4.6890ms | 132.68K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 166.91K | ±0.69% | 5.9912ms | 9.4880ms | 83.46K |

**Key Insight:** Preact Signals is **61.72x faster** than Zustand in this category.

### Write (1 subscriber)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.90M
🥈 Zen                  ██████████████████████ 4.42M
🥉 Preact Signals       ███████████████ 2.96M
   Redux Toolkit        █ 234.39K
   Jotai                █ 206.27K
   Zustand              █ 159.78K
   MobX                 █ 5.41K
   Valtio               █ 2.44K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.90M | ±1.13% | 0.1266ms | 0.2000ms | 3.95M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 4.42M | ±0.61% | 0.2262ms | 0.3210ms | 2.21M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 2.96M | ±1.65% | 0.3376ms | 0.3910ms | 1.48M |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 234.39K | ±0.70% | 4.2664ms | 6.7230ms | 117.19K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 206.27K | ±5.36% | 4.8481ms | 8.9370ms | 103.13K |
| 6 | **[Zustand](https://github.com/pmndrs/zustand)** | 159.78K | ±0.78% | 6.2586ms | 9.6980ms | 79.89K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 5.41K | ±2.29% | 184.8195ms | 274.3510ms | 2.71K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.44K | ±2.87% | 409.0260ms | 1656.9250ms | 1.22K |

**Key Insight:** Solid Signals is **3230.32x faster** than Valtio in this category.

### Write (5 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.76M
🥈 Zen                  ████████████████ 2.73M
🥉 Preact Signals       ████████ 1.29M
   Redux Toolkit        █ 164.44K
   Zustand              █ 134.57K
   Jotai                █ 84.92K
   MobX                 █ 5.55K
   Valtio               █ 2.48K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.76M | ±1.44% | 0.1479ms | 0.2110ms | 3.38M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 2.73M | ±0.52% | 0.3663ms | 0.5910ms | 1.37M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.29M | ±0.51% | 0.7750ms | 1.1220ms | 645.19K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 164.44K | ±2.94% | 6.0813ms | 10.8610ms | 82.22K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 134.57K | ±3.19% | 7.4313ms | 12.8740ms | 67.28K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 84.92K | ±13.29% | 11.7764ms | 31.4990ms | 42.46K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 5.55K | ±2.74% | 180.0362ms | 454.5070ms | 2.78K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.48K | ±2.73% | 403.7286ms | 1297.9570ms | 1.24K |

**Key Insight:** Solid Signals is **2729.89x faster** than Valtio in this category.

### Computed - Cached Read

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 10.60M
🥈 Zen                  ███████████████████████████████████████ 10.47M
🥉 Zustand              ███████████████████████████████████████ 10.33M
   Solid Signals        ███████████████████████████████████████ 10.24M
   Redux Toolkit        ██████████████████████████████████ 9.04M
   Valtio               ████████████████████████ 6.35M
   MobX                 ████████████ 3.23M
   Jotai                ████ 950.13K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.60M | ±0.10% | 0.0943ms | 0.1200ms | 5.30M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.47M | ±0.26% | 0.0956ms | 0.1110ms | 5.23M |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.33M | ±0.15% | 0.0968ms | 0.1100ms | 5.16M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.24M | ±0.10% | 0.0977ms | 0.1110ms | 5.12M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.04M | ±0.10% | 0.1106ms | 0.1410ms | 4.52M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.35M | ±0.09% | 0.1575ms | 0.1810ms | 3.17M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 3.23M | ±0.75% | 0.3100ms | 0.3500ms | 1.61M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 950.13K | ±0.60% | 1.0525ms | 1.4020ms | 475.06K |

**Key Insight:** Preact Signals is **11.16x faster** than Jotai in this category.

### Computed - Update

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.30M
🥈 Zen                  ████████████████████████████████████ 9.25M
🥉 Preact Signals       ██████████████████████████ 6.70M
   MobX                 ██████ 1.59M
   Valtio               ██████ 1.51M
   Jotai                █ 225.59K
   Redux Toolkit        █ 199.18K
   Zustand              █ 166.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.30M | ±0.31% | 0.0971ms | 0.1300ms | 5.15M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 9.25M | ±0.10% | 0.1081ms | 0.1410ms | 4.63M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.70M | ±0.09% | 0.1493ms | 0.1710ms | 3.35M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.59M | ±0.22% | 0.6302ms | 0.8520ms | 793.34K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.51M | ±0.61% | 0.6631ms | 0.7310ms | 753.99K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 225.59K | ±3.15% | 4.4328ms | 8.6660ms | 112.80K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 199.18K | ±1.56% | 5.0206ms | 7.4740ms | 99.59K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 166.19K | ±0.56% | 6.0173ms | 9.1170ms | 83.09K |

**Key Insight:** Solid Signals is **61.98x faster** than Zustand in this category.

### Chained Computed (3 levels)

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.67M
🥈 Solid Signals        ███████████████████████████████████████ 10.32M
🥉 Zustand              ██████████████████████████████████████ 10.19M
   Preact Signals       ██████████████████████████████████████ 10.17M
   Redux Toolkit        ██████████████████████████████████ 9.10M
   Valtio               █████████████████ 4.48M
   MobX                 ██ 526.86K
   Jotai                ██ 482.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.67M | ±0.09% | 0.0937ms | 0.1200ms | 5.34M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.32M | ±0.10% | 0.0969ms | 0.1110ms | 5.16M |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 10.19M | ±0.10% | 0.0981ms | 0.1200ms | 5.10M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.17M | ±0.09% | 0.0983ms | 0.1300ms | 5.09M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 9.10M | ±0.10% | 0.1098ms | 0.1500ms | 4.55M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.48M | ±0.10% | 0.2234ms | 0.2700ms | 2.24M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 526.86K | ±0.47% | 1.8980ms | 3.5770ms | 263.43K |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 482.76K | ±0.39% | 2.0714ms | 2.4540ms | 241.38K |

**Key Insight:** Zen is **22.11x faster** than Jotai in this category.

### Batching (100 updates)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 6.26M
🥈 Preact Signals       ██████ 884.07K
🥉 Zen                  █████ 840.65K
   MobX                 █ 49.47K
   Valtio               █ 24.78K
   Jotai                █ 7.69K
   Redux Toolkit        █ 2.04K
   Zustand              █ 1.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 6.26M | ±0.12% | 0.1596ms | 0.2510ms | 3.13M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 884.07K | ±0.09% | 1.1311ms | 1.1430ms | 442.04K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 840.65K | ±0.10% | 1.1895ms | 2.1540ms | 420.33K |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 49.47K | ±0.87% | 20.2130ms | 28.0420ms | 24.74K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 24.78K | ±0.81% | 40.3557ms | 49.7530ms | 12.39K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 7.69K | ±0.83% | 130.0376ms | 213.6080ms | 3.85K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.04K | ±0.72% | 491.2883ms | 833.0100ms | 1.02K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 1.76K | ±0.60% | 569.0557ms | 951.4820ms | 879.00 |

**Key Insight:** Solid Signals is **3564.47x faster** than Zustand in this category.

### Subscribe/Unsubscribe

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.45M
🥈 Zen                  ████████████████████████ 6.24M
🥉 Preact Signals       ███████████████████ 5.02M
   Zustand              ████████████████ 4.06M
   Redux Toolkit        █████████ 2.28M
   MobX                 ███ 753.66K
   Jotai                █ 374.27K
   Valtio               █ 2.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.45M | ±0.09% | 0.0957ms | 0.1110ms | 5.23M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 6.24M | ±0.91% | 0.1603ms | 0.2500ms | 3.12M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.02M | ±0.51% | 0.1991ms | 0.2410ms | 2.51M |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.06M | ±2.05% | 0.2462ms | 1.8340ms | 2.03M |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 2.28M | ±1.85% | 0.4384ms | 2.0040ms | 1.14M |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 753.66K | ±2.65% | 1.3269ms | 1.6740ms | 376.83K |
| 7 | **[Jotai](https://github.com/pmndrs/jotai)** | 374.27K | ±7.35% | 2.6718ms | 5.1200ms | 187.14K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.56K | ±3.02% | 390.8854ms | 1195.4850ms | 1.28K |

**Key Insight:** Solid Signals is **4086.44x faster** than Valtio in this category.

### Simple Increment

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 10.63M
🥈 Solid Signals        ███████████████████████████████████████ 10.44M
🥉 Preact Signals       ██████████████████████████████████████ 10.11M
   MobX                 ███████ 1.97M
   Valtio               ██████ 1.59M
   Jotai                ██ 535.26K
   Redux Toolkit        █ 283.41K
   Zustand              █ 168.51K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 10.63M | ±0.11% | 0.0941ms | 0.1300ms | 5.31M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.44M | ±0.11% | 0.0958ms | 0.1500ms | 5.22M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.11M | ±0.10% | 0.0989ms | 0.1610ms | 5.06M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 1.97M | ±0.57% | 0.5071ms | 0.8720ms | 986.06K |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.59M | ±0.42% | 0.6298ms | 0.7110ms | 793.92K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 535.26K | ±0.93% | 1.8683ms | 3.8280ms | 267.63K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 283.41K | ±0.71% | 3.5285ms | 5.8110ms | 141.71K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 168.51K | ±0.27% | 5.9343ms | 6.7420ms | 84.26K |

**Key Insight:** Zen is **63.06x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 10.59M
🥈 Zen                  ███████████████████████████████████████ 10.29M
🥉 Preact Signals       ██████████████████████████████████████ 10.10M
   Solid Signals        ██████████████████████████████████████ 9.95M
   Zustand              ██████████████████████████████████ 9.03M
   Valtio               ████████████████████████ 6.22M
   MobX                 ████████████ 3.11M
   Jotai                ████ 930.04K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 10.59M | ±0.10% | 0.0945ms | 0.1600ms | 5.29M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 10.29M | ±0.10% | 0.0971ms | 0.1500ms | 5.15M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 10.10M | ±0.10% | 0.0991ms | 0.1400ms | 5.05M |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.95M | ±0.11% | 0.1005ms | 0.1400ms | 4.97M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 9.03M | ±0.18% | 0.1108ms | 0.1300ms | 4.51M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 6.22M | ±0.10% | 0.1608ms | 0.2300ms | 3.11M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 3.11M | ±0.84% | 0.3215ms | 0.4110ms | 1.56M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 930.04K | ±0.65% | 1.0752ms | 1.9240ms | 465.02K |

**Key Insight:** Redux Toolkit is **11.38x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 8.67M
🥈 Solid Signals        ████████████████████████████████████████ 8.65M
🥉 Preact Signals       ███████████████████████████████████████ 8.40M
   MobX                 ██████████ 2.13M
   Valtio               ██████ 1.37M
   Jotai                ███ 668.84K
   Redux Toolkit        █ 200.79K
   Zustand              █ 159.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 8.67M | ±0.09% | 0.1153ms | 0.2110ms | 4.34M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.65M | ±0.10% | 0.1156ms | 0.2110ms | 4.32M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.40M | ±0.10% | 0.1191ms | 0.2200ms | 4.20M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 2.13M | ±0.40% | 0.4691ms | 0.7610ms | 1.07M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.37M | ±0.27% | 0.7293ms | 0.8310ms | 685.54K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 668.84K | ±1.25% | 1.4951ms | 3.2060ms | 334.42K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 200.79K | ±0.61% | 4.9804ms | 8.4360ms | 100.39K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 159.09K | ±0.37% | 6.2858ms | 7.0240ms | 79.55K |

**Key Insight:** Zen is **54.50x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 Valtio               ████████████████████████████████████████ 156.76K
🥈 MobX                 █████████████████████████████████████ 146.87K
🥉 Zustand              ███ 12.45K
   Jotai                ██ 9.31K
   Preact Signals       ██ 8.36K
   Zen                  ██ 8.31K
   Solid Signals        ██ 8.14K
   Redux Toolkit        █ 4.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Valtio](https://github.com/pmndrs/valtio)** | 156.76K | ±12.72% | 6.3792ms | 8.9470ms | 78.38K |
| 🥈 | **[MobX](https://github.com/mobxjs/mobx)** | 146.87K | ±6.81% | 6.8089ms | 12.4930ms | 73.44K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 12.45K | ±7.09% | 80.2930ms | 203.1980ms | 6.27K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 9.31K | ±7.42% | 107.4494ms | 211.3930ms | 4.69K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.36K | ±8.27% | 119.5692ms | 188.2600ms | 4.18K |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 8.31K | ±8.12% | 120.3538ms | 193.6910ms | 4.16K |
| 7 | **[Solid Signals](https://github.com/solidjs/solid)** | 8.14K | ±8.65% | 122.8517ms | 193.2900ms | 4.08K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.62K | ±1.19% | 216.4764ms | 324.0540ms | 2.31K |

**Key Insight:** Valtio is **33.93x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 9.04M
🥈 Preact Signals       ██████████████████████████████████████ 8.65M
🥉 Zen                  █████████████████████████ 5.57M
   Valtio               ██████████ 2.31M
   MobX                 █████████ 2.08M
   Jotai                ███ 580.97K
   Redux Toolkit        ██ 342.46K
   Zustand              █ 161.88K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 9.04M | ±0.26% | 0.1107ms | 0.2200ms | 4.52M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.65M | ±0.10% | 0.1156ms | 0.2210ms | 4.33M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 5.57M | ±0.10% | 0.1794ms | 0.2810ms | 2.79M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.31M | ±0.87% | 0.4332ms | 0.7020ms | 1.15M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.08M | ±0.65% | 0.4807ms | 0.6210ms | 1.04M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 580.97K | ±5.88% | 1.7213ms | 4.8390ms | 290.49K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 342.46K | ±1.12% | 2.9200ms | 4.0580ms | 171.23K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 161.88K | ±1.55% | 6.1776ms | 7.5240ms | 80.94K |

**Key Insight:** Solid Signals is **55.82x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 4.27M
🥈 Zen                  ███████████ 1.15M
🥉 Preact Signals       ██████ 664.28K
   Zustand              █ 102.01K
   Redux Toolkit        █ 92.97K
   Jotai                █ 51.94K
   MobX                 █ 45.46K
   Valtio               █ 10.48
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.27M | ±2.22% | 0.2344ms | 0.3100ms | 2.13M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 1.15M | ±1.81% | 0.8681ms | 1.1930ms | 575.94K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 664.28K | ±1.76% | 1.5054ms | 1.8540ms | 332.14K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 102.01K | ±8.60% | 9.8032ms | 19.0850ms | 51.00K |
| 5 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 92.97K | ±10.20% | 10.7561ms | 19.0350ms | 46.77K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 51.94K | ±4.49% | 19.2542ms | 43.2510ms | 25.97K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 45.46K | ±12.79% | 21.9964ms | 33.8830ms | 22.73K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 10.48 | ±25.71% | 95448.2598ms | 185034.7050ms | 10.00 |

**Key Insight:** Solid Signals is **407217.84x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.87M
🥈 Preact Signals       █████████████████████████████████ 6.42M
🥉 Zen                  █████████████████████ 4.06M
   Valtio               ████ 805.32K
   MobX                 ████ 729.23K
   Jotai                █ 232.07K
   Redux Toolkit        █ 171.52K
   Zustand              █ 150.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.87M | ±0.10% | 0.1270ms | 0.2310ms | 3.94M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.42M | ±0.10% | 0.1557ms | 0.2600ms | 3.21M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.06M | ±0.23% | 0.2463ms | 0.3510ms | 2.03M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 805.32K | ±1.61% | 1.2417ms | 1.3330ms | 402.66K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 729.23K | ±1.89% | 1.3713ms | 1.5630ms | 364.61K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 232.07K | ±2.71% | 4.3090ms | 8.4560ms | 116.04K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 171.52K | ±2.18% | 5.8302ms | 8.6360ms | 85.76K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 150.64K | ±2.19% | 6.6386ms | 7.8150ms | 75.32K |

**Key Insight:** Solid Signals is **52.25x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 8.38K
🥈 Zustand              ███████████████████████████████████████ 8.16K
🥉 Jotai                █████████████████████ 4.34K
   Zen                  █████████████████ 3.48K
   Solid Signals        ██████████████ 3.01K
   Redux Toolkit        █ 175.94
   MobX                 █ 38.84
   Valtio               █ 5.81
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 8.38K | ±3.57% | 119.3771ms | 997.6380ms | 4.19K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 8.16K | ±2.40% | 122.5537ms | 521.9920ms | 4.08K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.34K | ±1.94% | 230.3267ms | 923.2800ms | 2.17K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 3.48K | ±6.29% | 287.1544ms | 2750.1810ms | 1.74K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 3.01K | ±6.21% | 332.5319ms | 2933.4520ms | 1.50K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 175.94 | ±2.11% | 5683.6693ms | 7948.0200ms | 88.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 38.84 | ±2.60% | 25745.5911ms | 29188.5310ms | 20.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.81 | ±0.37% | 172046.7968ms | 173602.3990ms | 10.00 |

**Key Insight:** Preact Signals is **1441.20x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.28K
🥈 Jotai                ███████████████████████████████████████ 32.37K
🥉 Solid Signals        ██████████████████████████ 21.66K
   Preact Signals       ████████████████████████ 20.17K
   Zustand              ████████████████████ 16.55K
   Redux Toolkit        █ 427.63
   Valtio               █ 64.72
   MobX                 █ 62.35
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.28K | ±0.84% | 30.0451ms | 122.9090ms | 16.64K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 32.37K | ±0.83% | 30.8904ms | 122.5880ms | 16.19K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 21.66K | ±3.01% | 46.1687ms | 146.8240ms | 10.83K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 20.17K | ±3.66% | 49.5739ms | 229.1170ms | 10.09K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 16.55K | ±2.92% | 60.4281ms | 235.0280ms | 8.28K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 427.63 | ±3.34% | 2338.4809ms | 4196.4540ms | 214.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 64.72 | ±2.81% | 15451.5771ms | 17606.3640ms | 33.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 62.35 | ±3.07% | 16038.1148ms | 23106.0980ms | 32.00 |

**Key Insight:** Zen is **533.80x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.62K
🥈 Solid Signals        ████████████ 10.03K
🥉 Preact Signals       ███████████ 9.64K
   Zustand              ██████████ 8.41K
   Jotai                ███████ 5.97K
   Redux Toolkit        █ 426.74
   MobX                 █ 65.82
   Valtio               █ 65.69
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.62K | ±0.78% | 29.7478ms | 122.9690ms | 16.81K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.03K | ±3.71% | 99.6904ms | 224.1870ms | 5.02K |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 9.64K | ±3.88% | 103.6918ms | 329.4330ms | 4.82K |
| 4 | **[Zustand](https://github.com/pmndrs/zustand)** | 8.41K | ±3.46% | 118.9209ms | 201.1650ms | 4.21K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 5.97K | ±2.68% | 167.4239ms | 216.3330ms | 2.99K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 426.74 | ±3.32% | 2343.3212ms | 4148.4770ms | 214.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 65.82 | ±3.13% | 15192.4159ms | 22531.8550ms | 33.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 65.69 | ±3.62% | 15221.9390ms | 19238.9540ms | 33.00 |

**Key Insight:** Zen is **511.70x faster** than Valtio in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 7.22M
🥈 Zen                  ██████████████████████████████████ 6.23M
🥉 Preact Signals       ██████████████████████████████████ 6.17M
   Valtio               ██████ 1.13M
   MobX                 █████ 935.64K
   Jotai                ████ 633.48K
   Zustand              █ 160.62K
   Redux Toolkit        █ 75.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 7.22M | ±1.72% | 0.1385ms | 0.2210ms | 3.61M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 6.23M | ±1.58% | 0.1606ms | 0.2600ms | 3.11M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 6.17M | ±3.60% | 0.1620ms | 0.2410ms | 3.09M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 1.13M | ±1.67% | 0.8831ms | 0.9620ms | 566.20K |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 935.64K | ±0.85% | 1.0688ms | 1.3120ms | 467.82K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 633.48K | ±1.24% | 1.5786ms | 3.2150ms | 316.74K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 160.62K | ±2.28% | 6.2260ms | 7.0230ms | 80.31K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 75.16K | ±2.33% | 13.3051ms | 23.7740ms | 37.58K |

**Key Insight:** Solid Signals is **96.07x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 117.05K
🥈 Preact Signals       ███████████████████████████████████ 101.08K
🥉 Jotai                ██████████████████████████████ 87.83K
   Zen                  ██████████████████████████████ 87.68K
   Zustand              ██████████████████████ 65.69K
   Valtio               ████████ 23.21K
   MobX                 █████ 15.63K
   Redux Toolkit        █ 1.31K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 117.05K | ±1.39% | 8.5436ms | 14.2160ms | 58.52K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 101.08K | ±1.92% | 9.8934ms | 20.8490ms | 50.54K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 87.83K | ±1.90% | 11.3861ms | 21.7900ms | 43.91K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 87.68K | ±1.86% | 11.4054ms | 20.3480ms | 43.84K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 65.69K | ±1.83% | 15.2219ms | 25.0470ms | 32.85K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 23.21K | ±1.02% | 43.0813ms | 85.5500ms | 11.61K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 15.63K | ±1.85% | 63.9813ms | 146.7730ms | 7.82K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.31K | ±4.36% | 760.8719ms | 1984.3740ms | 658.00 |

**Key Insight:** Solid Signals is **89.06x faster** than Redux Toolkit in this category.

### Reactive Async State Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 1.19M
🥈 Jotai                ████████████████████████ 715.57K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 1.19M | ±1.57% | 0.8371ms | 1.2120ms | 597.30K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 715.57K | ±1.78% | 1.3975ms | 1.9840ms | 357.79K |

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

*Last generated: 2025-11-09T13:50:37.471Z*
