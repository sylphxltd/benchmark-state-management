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
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 63.7/100 | Baseline |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 60.4/100 | 94.8% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 53.7/100 | 84.3% |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 12.8/100 | 20.1% |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 7.5/100 | 11.8% |
| 6 | **[MobX](https://github.com/mobxjs/mobx)** | 4.7/100 | 7.4% |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 4.1/100 | 6.4% |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.9/100 | 4.6% |

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
| 🥇 | **[Jotai](https://github.com/pmndrs/jotai)** | 13/13 | 100% |
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 13/13 | 100% |
| 🥉 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 12/13 | 92% |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 12/13 | 92% |
| 🥉 | **[MobX](https://github.com/mobxjs/mobx)** | 12/13 | 92% |
| 🥉 | **[Valtio](https://github.com/pmndrs/valtio)** | 12/13 | 92% |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 12/13 | 92% |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 12/13 | 92% |

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
| 2025-11-07 | [View Results](./results/2025-11-07.json) |
| 2025-11-06 | [View Results](./results/2025-11-06.json) |

## 📊 Detailed Results

### Simple Increment

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 33.18M
🥈 Solid Signals        ████████████████████████████████████████ 32.77M
🥉 Preact Signals       ███████████████████████████████████████ 32.09M
   MobX                 ██████ 5.18M
   Valtio               █████ 4.44M
   Jotai                ██ 1.54M
   Redux Toolkit        █ 858.94K
   Zustand              █ 369.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 33.18M | ±0.06% | 0.0301ms | 0.0420ms | 16.59M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 32.77M | ±0.14% | 0.0305ms | 0.0420ms | 16.39M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 32.09M | ±0.17% | 0.0312ms | 0.0420ms | 16.04M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.18M | ±0.21% | 0.1931ms | 0.2500ms | 2.59M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.44M | ±2.35% | 0.2253ms | 0.5000ms | 2.22M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.54M | ±1.28% | 0.6481ms | 1.5830ms | 771.45K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 858.94K | ±0.31% | 1.1642ms | 1.4580ms | 429.47K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 369.46K | ±0.49% | 2.7067ms | 3.2920ms | 184.73K |

**Key Insight:** Zen is **89.81x faster** than Zustand in this category.

### Computed Access

**Performance Comparison:**

```
🥇 Redux Toolkit        ████████████████████████████████████████ 34.36M
🥈 Zen                  ███████████████████████████████████████ 33.53M
🥉 Solid Signals        █████████████████████████████████████ 31.92M
   Preact Signals       █████████████████████████████████████ 31.58M
   Zustand              ███████████████████████████████████ 29.68M
   Valtio               ██████████████████████████ 22.28M
   MobX                 ██████████ 8.59M
   Jotai                ███ 2.52M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 34.36M | ±0.07% | 0.0291ms | 0.0420ms | 17.18M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 33.53M | ±0.26% | 0.0298ms | 0.0830ms | 16.76M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 31.92M | ±0.06% | 0.0313ms | 0.0420ms | 15.96M |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 31.58M | ±0.54% | 0.0317ms | 0.0830ms | 15.79M |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 29.68M | ±0.06% | 0.0337ms | 0.0420ms | 14.84M |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 22.28M | ±0.17% | 0.0449ms | 0.0840ms | 11.14M |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 8.59M | ±1.06% | 0.1164ms | 0.1670ms | 4.29M |
| 8 | **[Jotai](https://github.com/pmndrs/jotai)** | 2.52M | ±2.19% | 0.3963ms | 0.5410ms | 1.26M |

**Key Insight:** Redux Toolkit is **13.62x faster** than Jotai in this category.

### Nested Update

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 26.67M
🥈 Zen                  ███████████████████████████████████████ 25.81M
🥉 Solid Signals        ██████████████████████████████████████ 25.03M
   MobX                 █████████ 5.78M
   Valtio               ████████ 5.15M
   Jotai                ███ 1.99M
   Redux Toolkit        █ 633.00K
   Zustand              █ 391.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 26.67M | ±0.17% | 0.0375ms | 0.0830ms | 13.34M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 25.81M | ±0.04% | 0.0387ms | 0.0840ms | 12.91M |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 25.03M | ±0.14% | 0.0400ms | 0.0840ms | 12.51M |
| 4 | **[MobX](https://github.com/mobxjs/mobx)** | 5.78M | ±0.17% | 0.1731ms | 0.2500ms | 2.89M |
| 5 | **[Valtio](https://github.com/pmndrs/valtio)** | 5.15M | ±0.14% | 0.1943ms | 0.2500ms | 2.57M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.99M | ±9.08% | 0.5032ms | 0.7500ms | 993.66K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 633.00K | ±0.53% | 1.5798ms | 1.9580ms | 316.50K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 391.09K | ±0.41% | 2.5570ms | 3.1660ms | 195.54K |

**Key Insight:** Preact Signals is **68.20x faster** than Zustand in this category.

### Array Push

**Performance Comparison:**

```
🥇 MobX                 ████████████████████████████████████████ 483.98K
🥈 Valtio               ████████████████████████████ 343.26K
🥉 Zustand              █ 16.48K
   Jotai                █ 16.48K
   Solid Signals        █ 13.82K
   Zen                  █ 13.78K
   Preact Signals       █ 13.03K
   Redux Toolkit        █ 6.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[MobX](https://github.com/mobxjs/mobx)** | 483.98K | ±8.09% | 2.0662ms | 2.0830ms | 243.66K |
| 🥈 | **[Valtio](https://github.com/pmndrs/valtio)** | 343.26K | ±16.87% | 2.9132ms | 3.3750ms | 172.71K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 16.48K | ±11.35% | 60.6731ms | 98.4590ms | 8.24K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 16.48K | ±11.82% | 60.6841ms | 94.9170ms | 8.24K |
| 5 | **[Solid Signals](https://github.com/solidjs/solid)** | 13.82K | ±14.21% | 72.3794ms | 127.5410ms | 6.91K |
| 6 | **[Zen](https://github.com/sylphxltd/zen)** | 13.78K | ±14.40% | 72.5831ms | 128.0420ms | 6.89K |
| 7 | **[Preact Signals](https://github.com/preactjs/signals)** | 13.03K | ±15.25% | 76.7449ms | 138.5830ms | 6.52K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 6.96K | ±0.92% | 143.7620ms | 219.0410ms | 3.48K |

**Key Insight:** MobX is **69.58x faster** than Redux Toolkit in this category.

### Loading State Toggle

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 25.80M
🥈 Solid Signals        ████████████████████████████████████████ 25.49M
🥉 Zen                  ██████████████████████████████ 19.40M
   Valtio               ████████████ 7.70M
   MobX                 ██████████ 6.35M
   Jotai                ███ 1.93M
   Redux Toolkit        ██ 1.03M
   Zustand              █ 389.41K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 25.80M | ±0.04% | 0.0388ms | 0.0840ms | 12.90M |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 25.49M | ±0.07% | 0.0392ms | 0.0840ms | 12.74M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 19.40M | ±0.07% | 0.0516ms | 0.0840ms | 9.70M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 7.70M | ±0.46% | 0.1298ms | 0.2500ms | 3.85M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 6.35M | ±0.76% | 0.1575ms | 0.2090ms | 3.18M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.93M | ±1.72% | 0.5181ms | 1.4580ms | 965.13K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.03M | ±0.88% | 0.9694ms | 1.3330ms | 515.76K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 389.41K | ±0.64% | 2.5680ms | 3.1250ms | 194.70K |

**Key Insight:** Preact Signals is **66.25x faster** than Zustand in this category.

### Multiple Subscriptions (10 subscribers)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 10.54M
🥈 Zen                  ████████████ 3.03M
🥉 Preact Signals       ███████ 1.76M
   Redux Toolkit        █ 264.61K
   Zustand              █ 181.54K
   Jotai                █ 168.46K
   MobX                 █ 131.89K
   Valtio               █ 15.05
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 10.54M | ±3.12% | 0.0949ms | 0.2080ms | 5.27M |
| 🥈 | **[Zen](https://github.com/sylphxltd/zen)** | 3.03M | ±0.31% | 0.3296ms | 0.5000ms | 1.52M |
| 🥉 | **[Preact Signals](https://github.com/preactjs/signals)** | 1.76M | ±1.16% | 0.5690ms | 0.7090ms | 878.75K |
| 4 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 264.61K | ±10.37% | 3.7792ms | 5.2090ms | 133.97K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 181.54K | ±14.50% | 5.5085ms | 8.4160ms | 90.77K |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 168.46K | ±2.91% | 5.9361ms | 7.6660ms | 84.23K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 131.89K | ±13.03% | 7.5822ms | 8.2080ms | 67.05K |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 15.05 | ±6.81% | 66459.3624ms | 78144.4590ms | 10.00 |

**Key Insight:** Solid Signals is **700196.73x faster** than Valtio in this category.

### Batch Updates (3 state changes)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 21.82M
🥈 Preact Signals       █████████████████████████████████████ 19.98M
🥉 Zen                  ██████████████████████ 12.03M
   Valtio               █████ 2.66M
   MobX                 ████ 2.19M
   Jotai                █ 566.78K
   Redux Toolkit        █ 544.21K
   Zustand              █ 363.36K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 21.82M | ±0.05% | 0.0458ms | 0.0840ms | 10.91M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 19.98M | ±0.07% | 0.0501ms | 0.1250ms | 9.99M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 12.03M | ±0.05% | 0.0832ms | 0.1660ms | 6.01M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 2.66M | ±0.84% | 0.3766ms | 0.4590ms | 1.33M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.19M | ±0.87% | 0.4563ms | 0.5830ms | 1.10M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 566.78K | ±19.26% | 1.7644ms | 4.0840ms | 283.39K |
| 7 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 544.21K | ±1.51% | 1.8375ms | 2.2090ms | 272.11K |
| 8 | **[Zustand](https://github.com/pmndrs/zustand)** | 363.36K | ±0.99% | 2.7521ms | 3.2920ms | 181.68K |

**Key Insight:** Solid Signals is **60.06x faster** than Zustand in this category.

### Array Filter

**Performance Comparison:**

```
🥇 Preact Signals       ████████████████████████████████████████ 4.42K
🥈 Zustand              ██████████████████████████████████████ 4.20K
🥉 Zen                  ██████████████████████████████████████ 4.14K
   Solid Signals        █████████████████████████████████████ 4.04K
   Jotai                ████████████████████████████████████ 3.97K
   Redux Toolkit        ███ 383.15
   MobX                 █ 11.44
   Valtio               █ 4.72
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.42K | ±6.80% | 226.3497ms | 308.9160ms | 2.21K |
| 🥈 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.20K | ±6.91% | 238.0326ms | 286.5000ms | 2.10K |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 4.14K | ±7.68% | 241.2658ms | 305.8750ms | 2.09K |
| 4 | **[Solid Signals](https://github.com/solidjs/solid)** | 4.04K | ±7.53% | 247.5870ms | 380.3750ms | 2.02K |
| 5 | **[Jotai](https://github.com/pmndrs/jotai)** | 3.97K | ±7.23% | 251.6898ms | 314.1250ms | 1.99K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 383.15 | ±1.39% | 2609.9260ms | 3758.2920ms | 192.00 |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 11.44 | ±5.27% | 87413.9373ms | 98780.7080ms | 10.00 |
| 8 | **[Valtio](https://github.com/pmndrs/valtio)** | 4.72 | ±5.13% | 211755.4668ms | 246493.5000ms | 10.00 |

**Key Insight:** Preact Signals is **935.52x faster** than Valtio in this category.

### Array Remove

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.60K
🥈 Jotai                █████████████████████████████████████ 10.79K
🥉 Solid Signals        ███████████████████ 5.39K
   Preact Signals       ██████████████████ 5.20K
   Zustand              █████████████████ 4.84K
   Redux Toolkit        ████ 1.03K
   Valtio               █ 40.96
   MobX                 █ 15.00
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.60K | ±0.32% | 86.2074ms | 106.3330ms | 5.80K |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 10.79K | ±0.16% | 92.6986ms | 109.5830ms | 5.39K |
| 🥉 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.39K | ±20.25% | 185.4443ms | 220.6670ms | 2.73K |
| 4 | **[Preact Signals](https://github.com/preactjs/signals)** | 5.20K | ±19.98% | 192.1860ms | 261.0410ms | 2.60K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.84K | ±18.28% | 206.7919ms | 343.1250ms | 2.42K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.03K | ±1.64% | 972.8683ms | 1860.7090ms | 514.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 40.96 | ±1.69% | 24415.7976ms | 26853.4160ms | 21.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 15.00 | ±3.43% | 66684.8332ms | 75071.1250ms | 10.00 |

**Key Insight:** Zen is **773.54x faster** than MobX in this category.

### Array Update

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 11.56K
🥈 Solid Signals        █████████████████ 5.04K
🥉 Zustand              █████████████████ 4.95K
   Jotai                █████████████████ 4.79K
   Preact Signals       ████████████████ 4.49K
   Redux Toolkit        ████ 1.03K
   Valtio               █ 41.76
   MobX                 █ 14.70
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 11.56K | ±0.17% | 86.5008ms | 102.7080ms | 5.78K |
| 🥈 | **[Solid Signals](https://github.com/solidjs/solid)** | 5.04K | ±17.67% | 198.3457ms | 290.5000ms | 2.52K |
| 🥉 | **[Zustand](https://github.com/pmndrs/zustand)** | 4.95K | ±16.47% | 201.9499ms | 267.0830ms | 2.48K |
| 4 | **[Jotai](https://github.com/pmndrs/jotai)** | 4.79K | ±17.66% | 208.7321ms | 267.4580ms | 2.40K |
| 5 | **[Preact Signals](https://github.com/preactjs/signals)** | 4.49K | ±20.42% | 222.8935ms | 581.4580ms | 2.40K |
| 6 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 1.03K | ±1.63% | 975.1710ms | 1953.4590ms | 513.00 |
| 7 | **[Valtio](https://github.com/pmndrs/valtio)** | 41.76 | ±1.22% | 23944.7084ms | 25853.2090ms | 21.00 |
| 8 | **[MobX](https://github.com/mobxjs/mobx)** | 14.70 | ±1.99% | 68042.4291ms | 71141.6250ms | 10.00 |

**Key Insight:** Zen is **786.61x faster** than MobX in this category.

### Deep Nested Update (5 levels)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 21.80M
🥈 Preact Signals       █████████████████████████████████████ 19.99M
🥉 Zen                  ██████████████████████████ 14.04M
   Valtio               ███████ 3.99M
   MobX                 ████ 2.37M
   Jotai                ███ 1.67M
   Zustand              █ 392.25K
   Redux Toolkit        █ 215.19K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 21.80M | ±1.19% | 0.0459ms | 0.0840ms | 10.90M |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 19.99M | ±1.47% | 0.0500ms | 0.1250ms | 9.99M |
| 🥉 | **[Zen](https://github.com/sylphxltd/zen)** | 14.04M | ±31.78% | 0.0712ms | 0.1250ms | 7.02M |
| 4 | **[Valtio](https://github.com/pmndrs/valtio)** | 3.99M | ±0.52% | 0.2504ms | 0.3330ms | 2.00M |
| 5 | **[MobX](https://github.com/mobxjs/mobx)** | 2.37M | ±0.56% | 0.4226ms | 0.5420ms | 1.18M |
| 6 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.67M | ±5.91% | 0.5993ms | 2.2090ms | 838.20K |
| 7 | **[Zustand](https://github.com/pmndrs/zustand)** | 392.25K | ±0.95% | 2.5494ms | 3.0830ms | 196.13K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 215.19K | ±1.16% | 4.6471ms | 5.3750ms | 107.59K |

**Key Insight:** Solid Signals is **101.32x faster** than Redux Toolkit in this category.

### Large State Update (1000 items)

**Performance Comparison:**

```
🥇 Solid Signals        ████████████████████████████████████████ 268.70K
🥈 Preact Signals       ████████████████████████████████████████ 267.73K
🥉 Jotai                █████████████████████████████████ 220.76K
   Zen                  ██████████████████████████████ 198.64K
   Zustand              █████████████████████ 143.38K
   Valtio               ██████████ 65.46K
   MobX                 ████ 28.66K
   Redux Toolkit        █ 3.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Solid Signals](https://github.com/solidjs/solid)** | 268.70K | ±1.03% | 3.7216ms | 7.0000ms | 134.35K |
| 🥈 | **[Preact Signals](https://github.com/preactjs/signals)** | 267.73K | ±1.06% | 3.7351ms | 6.2920ms | 133.87K |
| 🥉 | **[Jotai](https://github.com/pmndrs/jotai)** | 220.76K | ±1.04% | 4.5298ms | 8.2500ms | 110.38K |
| 4 | **[Zen](https://github.com/sylphxltd/zen)** | 198.64K | ±0.93% | 5.0343ms | 11.6250ms | 99.32K |
| 5 | **[Zustand](https://github.com/pmndrs/zustand)** | 143.38K | ±0.84% | 6.9747ms | 10.5830ms | 71.69K |
| 6 | **[Valtio](https://github.com/pmndrs/valtio)** | 65.46K | ±0.83% | 15.2759ms | 34.1250ms | 32.73K |
| 7 | **[MobX](https://github.com/mobxjs/mobx)** | 28.66K | ±1.08% | 34.8871ms | 72.7080ms | 14.33K |
| 8 | **[Redux Toolkit](https://github.com/reduxjs/redux-toolkit)** | 3.85K | ±2.40% | 260.0337ms | 528.5830ms | 1.92K |

**Key Insight:** Solid Signals is **69.87x faster** than Redux Toolkit in this category.

### Reactive Async State Access

**Performance Comparison:**

```
🥇 Zen                  ████████████████████████████████████████ 4.43M
🥈 Jotai                ██████████████████ 1.96M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen](https://github.com/sylphxltd/zen)** | 4.43M | ±1.07% | 0.2259ms | 0.3330ms | 2.21M |
| 🥈 | **[Jotai](https://github.com/pmndrs/jotai)** | 1.96M | ±1.92% | 0.5095ms | 0.7090ms | 981.38K |

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

*Last generated: 2025-11-07T15:16:45.616Z*
