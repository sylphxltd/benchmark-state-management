# Router Benchmark 🛤️

Performance comparison of JavaScript routing libraries and frameworks.

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
  - [📑 Test Categories](#-test-categories)
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 9, 2025
- **Last Run:** 9:37:45 PM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 10, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 10, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 10, 2025 | ⚠️ v7.9.5 incompatible |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.37KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | 1.57KB | 3.48KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 1.51x |
| 🥉 | **react** | 2.52KB | 6.44KB | 1.60x |
| 4 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.34KB | 85.74KB | 16.73x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 26.64x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.57KB (gzip), while react-dom is 26.64x larger at 41.94KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 100.0/100 | Baseline |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 12.9/100 | 12.9% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.7/100 | 1.7% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.57KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.37KB | 96/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.34KB | 37.32421875/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[React Router](https://github.com/remix-run/react-router)** | 9/9 | 100% |
| 🥇 | **[Wouter](https://github.com/molefrog/wouter)** | 9/9 | 100% |
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 9/9 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across React router libraries

| Feature | **Zen Router** | **TanStack Router** | **React Router** | **Wouter** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/sylphxltd/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#typescript-support) |
| **File-based Routing**<br/><sub>Automatic route generation from file system</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing) | [✅](https://reactrouter.com/how-to/file-route-conventions) | ❌ |
| **Data Loaders**<br/><sub>Built-in data loading/fetching mechanism</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/data-loading) | [✅](https://reactrouter.com/start/modes) | ❌ |
| **Nested Routes**<br/><sub>Support for nested route hierarchies</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/outlets) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#nesting-routes) |
| **Code Splitting**<br/><sub>Automatic route-based code splitting</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/automatic-code-splitting) | [✅](https://reactrouter.com/explanation/code-splitting) | ❌ |
| **Search Params**<br/><sub>Type-safe search/query parameter handling</sub> | [✅](https://github.com/sylphxltd/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/api/hooks/useSearchParams) | [✅](https://github.com/molefrog/wouter#usesearch-working-with-query-strings) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [Static Route Matching](#static-route-matching)
- [Simple Route Matching](#simple-route-matching)
- [Dynamic Route Matching (1 param)](#dynamic-route-matching-1-param)
- [Nested Dynamic Routes (2 params)](#nested-dynamic-routes-2-params)
- [Wildcard Route Matching](#wildcard-route-matching)
- [Optional Parameter Route (with param)](#optional-parameter-route-with-param)
- [Optional Parameter Route (without param)](#optional-parameter-route-without-param)
- [Mixed Route Matching (realistic usage)](#mixed-route-matching-realistic-usage)
- [Sequential Route Matching (worst case)](#sequential-route-matching-worst-case)

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.48M
🥈 Wouter               ████████ 1.58M
🥉 React Router         █ 31.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.48M | ±0.45% | 0.1337ms | 0.2010ms | 3.74M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.58M | ±0.60% | 0.6332ms | 0.9120ms | 789.60K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.95K | ±0.51% | 31.3005ms | 56.4050ms | 15.97K |

**Key Insight:** Zen Router is **234.08x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.73M
🥈 Wouter               ██████ 900.17K
🥉 React Router         █ 34.18K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.73M | ±0.42% | 0.1745ms | 0.2910ms | 2.87M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 900.17K | ±0.51% | 1.1109ms | 1.9730ms | 450.08K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.18K | ±0.76% | 29.2545ms | 71.5440ms | 17.09K |

**Key Insight:** Zen Router is **167.65x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.37M
🥈 Wouter               █████ 306.84K
🥉 React Router         █ 39.59K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.37M | ±0.35% | 0.4216ms | 0.6510ms | 1.19M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 306.84K | ±0.45% | 3.2590ms | 5.6910ms | 153.42K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.59K | ±0.57% | 25.2569ms | 44.9130ms | 19.80K |

**Key Insight:** Zen Router is **59.90x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.56M
🥈 Wouter               █████ 190.41K
🥉 React Router         █ 55.96K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.56M | ±0.10% | 0.6404ms | 0.7010ms | 780.73K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 190.41K | ±0.42% | 5.2518ms | 6.0410ms | 95.21K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 55.96K | ±0.48% | 17.8694ms | 29.7050ms | 27.98K |

**Key Insight:** Zen Router is **27.90x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.72M
🥈 Wouter               ████ 185.33K
🥉 React Router         █ 26.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.72M | ±0.09% | 0.5802ms | 0.6310ms | 861.80K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 185.33K | ±0.35% | 5.3959ms | 10.5500ms | 92.66K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.99K | ±0.56% | 37.0490ms | 54.9430ms | 13.50K |

**Key Insight:** Zen Router is **63.86x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.17M
🥈 Wouter               █████ 147.85K
🥉 React Router         █ 41.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.17M | ±0.19% | 0.8567ms | 1.0710ms | 583.61K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.85K | ±0.34% | 6.7637ms | 13.7860ms | 73.92K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.64K | ±0.49% | 24.0134ms | 36.7280ms | 20.82K |

**Key Insight:** Zen Router is **28.03x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.44M
🥈 Wouter               ████ 149.59K
🥉 React Router         █ 34.99K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.44M | ±0.12% | 0.6933ms | 0.7510ms | 721.18K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.59K | ±0.36% | 6.6848ms | 10.7100ms | 74.80K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.99K | ±0.81% | 28.5806ms | 51.1560ms | 17.50K |

**Key Insight:** Zen Router is **41.22x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 366.06K
🥈 Wouter               ████ 38.83K
🥉 React Router         █ 5.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 366.06K | ±0.25% | 2.7318ms | 3.1760ms | 183.03K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.83K | ±0.39% | 25.7521ms | 36.9490ms | 19.42K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.37K | ±0.99% | 186.3273ms | 355.3540ms | 2.68K |

**Key Insight:** Zen Router is **68.21x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.17M
🥈 Wouter               █████ 150.56K
🥉 React Router         █ 41.76K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.17M | ±0.20% | 0.8580ms | 0.9220ms | 582.78K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 150.56K | ±0.24% | 6.6419ms | 7.5140ms | 75.28K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.76K | ±0.48% | 23.9478ms | 37.7100ms | 20.88K |

**Key Insight:** Zen Router is **27.91x faster** than React Router in this category.

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

*Last generated: 2025-11-10T00:16:59.739Z*
