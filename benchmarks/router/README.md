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

- **Last Updated:** November 11, 2025
- **Last Run:** 4:50:32 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/SylphxAI/zen-router)** | `v1.0.2` | 1.57KB | Nov 11, 2025 | 📦 v2.0.0 available |
| **react** | `v18.3.1` | 2.52KB | Nov 11, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 11, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 11, 2025 | ⚠️ v7.9.5 incompatible |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.37KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/SylphxAI/zen-router)** | 1.57KB | 3.48KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 1.51x |
| 🥉 | **react** | 2.52KB | 6.44KB | 1.60x |
| 4 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.34KB | 85.74KB | 16.73x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 26.64x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.57KB (gzip), while react-dom is 26.64x larger at 41.94KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 100.0/100 | Baseline |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.4/100 | 13.4% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.7/100 | 1.7% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.57KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.37KB | 96/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.34KB | 37.32421875/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[React Router](https://github.com/remix-run/react-router)** | 9/9 | 100% |
| 🥇 | **[Wouter](https://github.com/molefrog/wouter)** | 9/9 | 100% |
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 9/9 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across React router libraries

| Feature | **Zen Router** | **TanStack Router** | **React Router** | **Wouter** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Full TypeScript support with type inference</sub> | [✅](https://github.com/SylphxAI/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#typescript-support) |
| **File-based Routing**<br/><sub>Automatic route generation from file system</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/routing/file-based-routing) | [✅](https://reactrouter.com/how-to/file-route-conventions) | ❌ |
| **Data Loaders**<br/><sub>Built-in data loading/fetching mechanism</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/data-loading) | [✅](https://reactrouter.com/start/modes) | ❌ |
| **Nested Routes**<br/><sub>Support for nested route hierarchies</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/outlets) | [✅](https://reactrouter.com/start/modes) | [✅](https://github.com/molefrog/wouter#nesting-routes) |
| **Code Splitting**<br/><sub>Automatic route-based code splitting</sub> | ❌ | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/automatic-code-splitting) | [✅](https://reactrouter.com/explanation/code-splitting) | ❌ |
| **Search Params**<br/><sub>Type-safe search/query parameter handling</sub> | [✅](https://github.com/SylphxAI/zen-router) | [✅](https://tanstack.com/router/v1/docs/framework/react/guide/type-safety) | [✅](https://reactrouter.com/api/hooks/useSearchParams) | [✅](https://github.com/molefrog/wouter#usesearch-working-with-query-strings) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
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
🥇 Zen Router           ████████████████████████████████████████ 6.92M
🥈 Wouter               █████████ 1.52M
🥉 React Router         █ 29.85K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 6.92M | ±0.70% | 0.1446ms | 0.2400ms | 3.46M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.52M | ±0.73% | 0.6585ms | 1.2430ms | 759.25K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 29.85K | ±0.61% | 33.5032ms | 65.6530ms | 14.92K |

**Key Insight:** Zen Router is **231.72x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.73M
🥈 Wouter               ██████ 928.60K
🥉 React Router         █ 34.86K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 5.73M | ±0.58% | 0.1746ms | 0.2610ms | 2.86M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 928.60K | ±0.57% | 1.0769ms | 1.5330ms | 464.30K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.86K | ±0.71% | 28.6890ms | 52.6780ms | 17.43K |

**Key Insight:** Zen Router is **164.32x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.19M
🥈 Wouter               ██████ 309.88K
🥉 React Router         █ 38.43K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 2.19M | ±0.57% | 0.4561ms | 0.6310ms | 1.10M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 309.88K | ±0.69% | 3.2270ms | 5.3900ms | 154.94K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 38.43K | ±0.71% | 26.0218ms | 47.8490ms | 19.21K |

**Key Insight:** Zen Router is **57.05x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.54M
🥈 Wouter               █████ 192.46K
🥉 React Router         █ 53.72K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.54M | ±0.10% | 0.6481ms | 0.7110ms | 771.47K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 192.46K | ±0.46% | 5.1959ms | 6.2810ms | 96.23K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 53.72K | ±0.67% | 18.6142ms | 31.5290ms | 26.86K |

**Key Insight:** Zen Router is **28.72x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.64M
🥈 Wouter               █████ 190.42K
🥉 React Router         █ 26.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.64M | ±0.10% | 0.6089ms | 0.6810ms | 821.15K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 190.42K | ±0.51% | 5.2517ms | 6.1610ms | 95.21K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.64K | ±0.73% | 37.5433ms | 54.4120ms | 13.32K |

**Key Insight:** Zen Router is **61.66x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.15M
🥈 Wouter               █████ 149.19K
🥉 React Router         █ 40.56K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.15M | ±0.32% | 0.8676ms | 1.0420ms | 576.29K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.19K | ±0.38% | 6.7029ms | 10.6710ms | 74.59K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.56K | ±0.73% | 24.6523ms | 38.4310ms | 20.28K |

**Key Insight:** Zen Router is **28.41x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.45M
🥈 Wouter               ████ 149.14K
🥉 React Router         █ 34.05K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.45M | ±0.12% | 0.6906ms | 0.7810ms | 724.02K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.14K | ±0.46% | 6.7051ms | 11.1310ms | 74.57K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.05K | ±0.96% | 29.3670ms | 55.4830ms | 17.03K |

**Key Insight:** Zen Router is **42.52x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 356.23K
🥈 Wouter               ████ 38.66K
🥉 React Router         █ 5.26K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 356.23K | ±0.31% | 2.8072ms | 3.4370ms | 178.12K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.66K | ±0.50% | 25.8668ms | 38.6210ms | 19.33K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.26K | ±0.98% | 190.2509ms | 429.9120ms | 2.63K |

**Key Insight:** Zen Router is **67.77x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.15M
🥈 Wouter               █████ 148.99K
🥉 React Router         █ 40.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 1.15M | ±0.09% | 0.8696ms | 1.0120ms | 574.98K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.99K | ±0.37% | 6.7121ms | 11.9920ms | 74.49K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.53K | ±0.63% | 24.6748ms | 39.6330ms | 20.26K |

**Key Insight:** Zen Router is **28.38x faster** than React Router in this category.

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

*Last generated: 2025-11-11T05:01:17.381Z*
