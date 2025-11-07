# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:22:28 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.0/100 | 13.0% |
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
🥇 Zen Router           ████████████████████████████████████████ 7.34M
🥈 Wouter               █████████ 1.61M
🥉 React Router         █ 31.25K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.34M | ±0.43% | 0.1362ms | 0.1800ms | 3.67M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.61M | ±0.54% | 0.6216ms | 0.7710ms | 804.44K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.25K | ±0.72% | 32.0005ms | 61.7050ms | 15.63K |

**Key Insight:** Zen Router is **234.95x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.10M
🥈 Wouter               ██████ 939.61K
🥉 React Router         █ 35.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 6.10M | ±0.35% | 0.1638ms | 0.2800ms | 3.05M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 939.61K | ±0.31% | 1.0643ms | 1.7040ms | 469.81K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.54K | ±0.48% | 28.1371ms | 51.7570ms | 17.77K |

**Key Insight:** Zen Router is **171.76x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.38M
🥈 Wouter               █████ 313.70K
🥉 React Router         █ 39.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.38M | ±0.30% | 0.4197ms | 0.4710ms | 1.19M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 313.70K | ±0.28% | 3.1878ms | 5.3190ms | 156.85K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 39.87K | ±1.01% | 25.0795ms | 42.3690ms | 19.94K |

**Key Insight:** Zen Router is **59.75x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.59M
🥈 Wouter               █████ 192.79K
🥉 React Router         █ 56.67K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.59M | ±0.13% | 0.6288ms | 0.6810ms | 795.14K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 192.79K | ±0.29% | 5.1870ms | 8.2850ms | 96.39K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 56.67K | ±0.37% | 17.6467ms | 29.8760ms | 28.33K |

**Key Insight:** Zen Router is **28.06x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.65M
🥈 Wouter               ████ 180.77K
🥉 React Router         █ 27.20K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.65M | ±0.12% | 0.6072ms | 0.7010ms | 823.47K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 180.77K | ±0.37% | 5.5320ms | 12.2030ms | 90.38K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 27.20K | ±0.46% | 36.7693ms | 52.1880ms | 13.60K |

**Key Insight:** Zen Router is **60.56x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.16M
🥈 Wouter               █████ 149.66K
🥉 React Router         █ 42.16K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.16M | ±0.17% | 0.8599ms | 0.9220ms | 581.49K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.66K | ±0.22% | 6.6817ms | 10.6700ms | 74.83K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 42.16K | ±0.44% | 23.7186ms | 36.4080ms | 21.08K |

**Key Insight:** Zen Router is **27.58x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.43M
🥈 Wouter               ████ 149.95K
🥉 React Router         █ 35.69K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.43M | ±0.10% | 0.7010ms | 1.2220ms | 713.24K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.95K | ±0.30% | 6.6687ms | 9.2780ms | 74.98K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 35.69K | ±0.43% | 28.0165ms | 42.5490ms | 17.85K |

**Key Insight:** Zen Router is **39.96x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 371.64K
🥈 Wouter               ████ 38.89K
🥉 React Router         █ 5.46K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 371.64K | ±0.25% | 2.6908ms | 3.0160ms | 185.82K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.89K | ±0.33% | 25.7103ms | 38.8630ms | 19.45K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.46K | ±0.47% | 183.1119ms | 329.4650ms | 2.73K |

**Key Insight:** Zen Router is **68.05x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.16M
🥈 Wouter               █████ 149.70K
🥉 React Router         █ 42.01K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.16M | ±0.15% | 0.8644ms | 1.2420ms | 578.41K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 149.70K | ±0.24% | 6.6802ms | 7.7650ms | 74.85K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 42.01K | ±0.46% | 23.8023ms | 37.7610ms | 21.01K |

**Key Insight:** Zen Router is **27.54x faster** than React Router in this category.

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

*Last generated: 2025-11-07T15:16:46.293Z*
