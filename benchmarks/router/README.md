# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 4:37:00 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphx/zen)** | `v1.0.2` | 1.57KB | Nov 7, 2025 | ✅ Latest |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.34KB | Nov 7, 2025 | 📦 v7.9.5 available |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.37KB | Nov 7, 2025 | ✅ Latest |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/sylphx/zen)** | 1.57KB | 3.48KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.37KB | 5.38KB | 1.51x |
| 🥉 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.34KB | 85.74KB | 16.73x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.57KB (gzip), while react-router-dom is 16.73x larger at 26.34KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 100.0/100 | Baseline |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 17.7/100 | 17.7% |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 2.2/100 | 2.2% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 1.57KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.37KB | 96/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.34KB | 37.32421875/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[React Router](https://github.com/remix-run/react-router)** | 9/9 | 100% |
| 🥇 | **[Wouter](https://github.com/molefrog/wouter)** | 9/9 | 100% |
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 9/9 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Static Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 22.40M
🥈 Wouter               ██████████ 5.65M
🥉 React Router          109.40K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 22.40M | ±0.08% | 0.0446ms | 0.0840ms | 11.20M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 5.65M | ±1.07% | 0.1770ms | 0.2500ms | 2.82M |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 109.40K | ±0.20% | 9.1406ms | 11.2080ms | 54.70K |

**Key Insight:** Zen Router is **204.74x faster** than React Router in this category.

### Simple Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 17.62M
🥈 Wouter               ████████ 3.33M
🥉 React Router          119.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 17.62M | ±0.12% | 0.0567ms | 0.0840ms | 8.81M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 3.33M | ±0.15% | 0.3000ms | 0.3750ms | 1.67M |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 119.53K | ±0.37% | 8.3663ms | 10.1660ms | 59.76K |

**Key Insight:** Zen Router is **147.43x faster** than React Router in this category.

### Dynamic Route Matching (1 param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 6.08M
🥈 Wouter               ███████ 1.10M
🥉 React Router         █ 134.65K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 6.08M | ±0.22% | 0.1646ms | 0.2090ms | 3.04M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 1.10M | ±0.32% | 0.9051ms | 1.1670ms | 552.41K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 134.65K | ±0.32% | 7.4265ms | 9.1250ms | 67.33K |

**Key Insight:** Zen Router is **45.12x faster** than React Router in this category.

### Nested Dynamic Routes (2 params)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 3.74M
🥈 Wouter               ███████ 646.31K
🥉 React Router         ██ 188.95K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 3.74M | ±0.24% | 0.2672ms | 0.3340ms | 1.87M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 646.31K | ±0.36% | 1.5473ms | 1.9580ms | 323.15K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 188.95K | ±0.40% | 5.2924ms | 6.4170ms | 94.48K |

**Key Insight:** Zen Router is **19.81x faster** than React Router in this category.

### Wildcard Route Matching

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 3.99M
🥈 Wouter               ██████ 639.58K
🥉 React Router         █ 83.54K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 3.99M | ±0.26% | 0.2507ms | 0.2920ms | 1.99M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 639.58K | ±0.34% | 1.5635ms | 1.9580ms | 319.79K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 83.54K | ±0.43% | 11.9707ms | 14.5830ms | 41.77K |

**Key Insight:** Zen Router is **47.76x faster** than React Router in this category.

### Optional Parameter Route (with param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.67M
🥈 Wouter               ███████ 487.12K
🥉 React Router         ██ 136.87K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 2.67M | ±0.27% | 0.3739ms | 0.4580ms | 1.34M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 487.12K | ±0.36% | 2.0529ms | 2.5410ms | 243.56K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 136.87K | ±0.39% | 7.3064ms | 8.5410ms | 68.43K |

**Key Insight:** Zen Router is **19.54x faster** than React Router in this category.

### Optional Parameter Route (without param)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 3.59M
🥈 Wouter               █████ 492.31K
🥉 React Router         █ 112.53K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 3.59M | ±0.22% | 0.2786ms | 0.3340ms | 1.79M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 492.31K | ±0.37% | 2.0313ms | 2.5000ms | 246.15K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 112.53K | ±0.49% | 8.8861ms | 10.7090ms | 56.27K |

**Key Insight:** Zen Router is **31.89x faster** than React Router in this category.

### Mixed Route Matching (realistic usage)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 819.47K
🥈 Wouter               ██████ 130.45K
🥉 React Router         █ 17.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 819.47K | ±0.34% | 1.2203ms | 1.5000ms | 409.74K |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 130.45K | ±0.33% | 7.6660ms | 8.7500ms | 65.22K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 17.22K | ±0.56% | 58.0655ms | 67.3750ms | 8.61K |

**Key Insight:** Zen Router is **47.58x faster** than React Router in this category.

### Sequential Route Matching (worst case)

**Performance Comparison:**

```
🥇 Zen Router           ████████████████████████████████████████ 2.75M
🥈 Wouter               ███████ 491.59K
🥉 React Router         ██ 137.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 2.75M | ±0.36% | 0.3637ms | 0.4580ms | 1.37M |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 491.59K | ±0.36% | 2.0342ms | 2.5000ms | 245.79K |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 137.64K | ±0.44% | 7.2653ms | 8.7500ms | 68.82K |

**Key Insight:** Zen Router is **19.98x faster** than React Router in this category.

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

*Last generated: 2025-11-07T04:47:11.007Z*
