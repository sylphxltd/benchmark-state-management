# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 4:37:00 AM UTC
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
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 13.2/100 | 13.2% |
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

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 7.15M
🥈 Wouter               ████████ 1.44M
🥉 React Router          31.24K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 7.15M | ±0.58% | 0.1399ms | 0.2500ms | 3.57M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.44M | ±0.58% | 0.6947ms | 1.3420ms | 719.74K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 31.24K | ±0.66% | 32.0100ms | 59.7820ms | 15.62K |

**Key Insight:** Zen Router is **228.84x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 5.53M
🥈 Wouter               ███████ 918.70K
🥉 React Router          33.68K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 5.53M | ±0.74% | 0.1808ms | 0.2100ms | 2.77M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 918.70K | ±0.49% | 1.0885ms | 1.3020ms | 459.35K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 33.68K | ±0.84% | 29.6927ms | 60.4430ms | 16.84K |

**Key Insight:** Zen Router is **164.21x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.23M
🥈 Wouter               █████ 303.20K
🥉 React Router         █ 38.14K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 2.23M | ±1.18% | 0.4492ms | 0.4810ms | 1.11M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 303.20K | ±0.93% | 3.2982ms | 5.3400ms | 151.60K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 38.14K | ±1.15% | 26.2200ms | 46.5270ms | 19.07K |

**Key Insight:** Zen Router is **58.37x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.55M
🥈 Wouter               █████ 186.05K
🥉 React Router         █ 54.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.55M | ±0.11% | 0.6465ms | 1.1630ms | 773.34K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 186.05K | ±0.97% | 5.3748ms | 6.5120ms | 93.03K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 54.22K | ±1.07% | 18.4421ms | 30.8180ms | 27.11K |

**Key Insight:** Zen Router is **28.52x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.61M
🥈 Wouter               █████ 183.89K
🥉 React Router         █ 26.39K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.61M | ±0.11% | 0.6212ms | 0.7110ms | 804.86K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 183.89K | ±1.07% | 5.4381ms | 6.9230ms | 91.94K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.39K | ±1.21% | 37.8894ms | 53.1600ms | 13.20K |

**Key Insight:** Zen Router is **60.99x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.14M
🥈 Wouter               █████ 148.82K
🥉 React Router         █ 40.03K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.14M | ±0.21% | 0.8788ms | 0.9620ms | 568.94K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 148.82K | ±0.38% | 6.7195ms | 10.9200ms | 74.41K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.03K | ±0.76% | 24.9836ms | 51.2260ms | 20.01K |

**Key Insight:** Zen Router is **28.43x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.40M
🥈 Wouter               ████ 147.79K
🥉 React Router         █ 34.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.40M | ±0.30% | 0.7150ms | 0.7910ms | 699.26K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.79K | ±0.61% | 6.7664ms | 10.8010ms | 73.93K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 34.65K | ±0.78% | 28.8613ms | 51.3360ms | 17.32K |

**Key Insight:** Zen Router is **40.36x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 362.33K
🥈 Wouter               ████ 38.53K
🥉 React Router         █ 5.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 362.33K | ±0.49% | 2.7599ms | 3.6060ms | 181.17K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 38.53K | ±0.67% | 25.9556ms | 38.3520ms | 19.26K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 5.21K | ±0.94% | 192.1226ms | 496.3190ms | 2.60K |

**Key Insight:** Zen Router is **69.61x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 1.12M
🥈 Wouter               █████ 147.97K
🥉 React Router         █ 40.89K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphxltd/zen-router)** | 1.12M | ±0.23% | 0.8956ms | 0.9720ms | 558.25K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 147.97K | ±0.32% | 6.7583ms | 10.0980ms | 73.98K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 40.89K | ±0.75% | 24.4570ms | 37.5500ms | 20.45K |

**Key Insight:** Zen Router is **27.31x faster** than React Router in this category.

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

*Last generated: 2025-11-07T04:57:44.129Z*
