# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:22:28 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphxltd/zen-router)** | `v1.0.2` | 1.57KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 7, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 7, 2025 | 📦 v19.2.0 available |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 7, 2025 | ⚠️ v7.9.5 incompatible |
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
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.09M
🥈 Wouter               █████████ 1.57M
🥉 React Router         █ 31.15K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.09M | ±0.58% | 0.1410ms | 0.2400ms | 3.55M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.57M | ±0.69% | 0.6389ms | 0.8010ms | 782.54K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.15K | ±0.68% | 32.1072ms | 62.0860ms | 15.57K |

**Key Insight:** Zen Router is **227.77x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.18M
🥈 Wouter               ██████ 912.15K
🥉 React Router         █ 34.62K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.18M | ±0.45% | 0.1617ms | 0.2110ms | 3.09M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 912.15K | ±0.50% | 1.0963ms | 1.4520ms | 456.08K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.62K | ±0.80% | 28.8852ms | 56.5140ms | 17.31K |

**Key Insight:** Zen Router is **178.60x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.40M
🥈 Wouter               █████ 308.23K
🥉 React Router         █ 39.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.40M | ±0.52% | 0.4165ms | 0.4910ms | 1.20M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 308.23K | ±0.44% | 3.2443ms | 5.6410ms | 154.12K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.20K | ±0.60% | 25.5083ms | 46.5270ms | 19.60K |

**Key Insight:** Zen Router is **61.25x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.61M
🥈 Wouter               █████ 190.06K
🥉 React Router         █ 53.80K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.61M | ±0.10% | 0.6230ms | 1.1220ms | 802.51K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 190.06K | ±0.58% | 5.2614ms | 6.2120ms | 95.03K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 53.80K | ±0.66% | 18.5865ms | 35.8070ms | 26.90K |

**Key Insight:** Zen Router is **29.83x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.68M
🥈 Wouter               █████ 189.91K
🥉 React Router         █ 26.74K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.68M | ±0.10% | 0.5952ms | 1.0120ms | 840.06K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 189.91K | ±0.62% | 5.2657ms | 6.1520ms | 94.95K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.74K | ±0.77% | 37.3929ms | 55.0600ms | 13.37K |

**Key Insight:** Zen Router is **62.82x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.16M
🥈 Wouter               █████ 147.84K
🥉 React Router         █ 41.30K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.16M | ±0.24% | 0.8599ms | 0.9420ms | 581.49K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.84K | ±0.39% | 6.7643ms | 11.6520ms | 73.92K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.30K | ±0.74% | 24.2146ms | 39.1930ms | 20.65K |

**Key Insight:** Zen Router is **28.16x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.45M
🥈 Wouter               ████ 148.60K
🥉 React Router         █ 34.90K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.45M | ±0.13% | 0.6919ms | 0.7710ms | 722.66K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.60K | ±0.49% | 6.7293ms | 10.0280ms | 74.30K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.90K | ±0.81% | 28.6539ms | 56.3950ms | 17.45K |

**Key Insight:** Zen Router is **41.41x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 363.48K
🥈 Wouter               ████ 38.43K
🥉 React Router         █ 5.37K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 363.48K | ±0.41% | 2.7512ms | 3.3660ms | 181.74K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.43K | ±0.59% | 26.0183ms | 37.6990ms | 19.22K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.37K | ±0.64% | 186.3575ms | 409.8050ms | 2.68K |

**Key Insight:** Zen Router is **67.74x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.16M
🥈 Wouter               █████ 147.25K
🥉 React Router         █ 41.10K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.16M | ±0.23% | 0.8625ms | 1.0020ms | 579.69K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.25K | ±0.34% | 6.7914ms | 15.8890ms | 73.62K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 41.10K | ±0.68% | 24.3320ms | 37.9010ms | 20.55K |

**Key Insight:** Zen Router is **28.21x faster** than React Router in this category.

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

*Last generated: 2025-11-07T15:18:35.108Z*
