# Router Benchmark 🏆

Professional performance comparison of JavaScript router libraries for React applications.

## 📋 Benchmark Information

- **Last Updated:** November 07, 2025
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Methodology:** Each test measures route matching performance across various path patterns

## 📦 Library Versions

| Library | Version | Size (gzip) | Status |
|---------|---------|-------------|--------|
| **[@sylphx/zen-router](https://github.com/sylphx/zen)** | `v1.0.2` | 1.61KB | ✅ Latest |
| **[wouter](https://github.com/molefrog/wouter)** | `v3.7.1` | 2.43KB | ✅ Latest |
| **[react-router-dom](https://github.com/remix-run/react-router)** | `v6.30.1` | 26.97KB | ⚠️ Update Available (v7.9.5) |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/zen-router](https://github.com/sylphx/zen)** | 1.61KB | 3.56KB | Baseline |
| 🥈 | **[wouter](https://github.com/molefrog/wouter)** | 2.43KB | 5.51KB | 1.51x |
| 🥉 | **[react-router-dom](https://github.com/remix-run/react-router)** | 26.97KB | 87.80KB | 16.74x |

**Size Insight:** @sylphx/zen-router is the most lightweight at 1.61KB (gzip), while react-router-dom is 16.74x larger at 26.97KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all benchmark tests:

| Rank | Library | Score | Relative | Average Speed |
|------|---------|-------|----------|---------------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 100/100 | Baseline | 5.3M ops/sec |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 17.5/100 | 17.5% | 933K ops/sec |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 1.5/100 | 1.5% | 96K ops/sec |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📊 Detailed Performance Results

### Static Route Matching (\`/\`)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 19,237,668 | **223.13x faster** |
| Wouter | 4,779,031 | **55.45x faster** |
| React Router | 86,216 | Baseline |

### Simple Route Matching (\`/about\`)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 14,627,940 | **145.41x faster** |
| Wouter | 2,587,197 | **25.71x faster** |
| React Router | 100,598 | Baseline |

### Dynamic Route Matching (\`/users/123\`)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 5,094,216 | **45.63x faster** |
| Wouter | 911,381 | **8.16x faster** |
| React Router | 111,639 | Baseline |

### Nested Dynamic Routes (\`/users/123/posts/456\`)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 3,234,638 | **21.89x faster** |
| Wouter | 543,150 | **3.67x faster** |
| React Router | 147,794 | Baseline |

### Wildcard Route Matching (\`/blog/2024/01/my-post\`)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 3,475,350 | **48.65x faster** |
| Wouter | 497,305 | **6.96x faster** |
| React Router | 71,436 | Baseline |

### Optional Parameter Route (\`/products/electronics/phones\`)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 2,263,802 | **21.03x faster** |
| Wouter | 399,460 | **3.71x faster** |
| React Router | 107,627 | Baseline |

### Optional Parameter Route (\`/products/electronics\`)

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 2,564,643 | **26.27x faster** |
| Wouter | 402,995 | **4.13x faster** |
| React Router | 97,621 | Baseline |

### Mixed Route Matching (Realistic Usage)

7 different routes matched in sequence

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 692,813 | **49.31x faster** |
| Wouter | 106,340 | **7.57x faster** |
| React Router | 14,050 | Baseline |

### Sequential Route Matching (Worst Case)

Last route in the list

| Library | ops/sec | Relative |
|---------|---------|----------|
| Zen Router | 2,289,667 | **20.55x faster** |
| Wouter | 401,000 | **3.60x faster** |
| React Router | 111,398 | Baseline |

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Zen Router](https://github.com/sylphx/zen)** | 1.61KB | 100/100 | Excellent |
| 🥈 | **[Wouter](https://github.com/molefrog/wouter)** | 2.43KB | 93/100 | Excellent |
| 🥉 | **[React Router](https://github.com/remix-run/react-router)** | 26.97KB | 48/100 | Average |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Key Findings

### Performance Summary

- **Zen Router** is consistently the fastest across all test categories, averaging **5.3M ops/sec**
- **Wouter** provides excellent performance at **933K ops/sec**, striking a good balance
- **React Router** is the slowest at **96K ops/sec**, but offers the most comprehensive feature set

### Performance vs Bundle Size

- **Zen Router**: Best performance (100/100) + Smallest size (1.61KB) = **Best Overall**
- **Wouter**: Great performance (17.5/100) + Small size (2.43KB) = **Excellent Balance**
- **React Router**: Lower performance (1.5/100) + Largest size (27.01KB) = **Most Features**

### Use Case Recommendations

| Use Case | Recommended Library | Reason |
|----------|-------------------|---------|
| Maximum Performance | Zen Router | 5-6x faster than Wouter, 20-220x faster than React Router |
| Small Bundle Size | Zen Router | 1.61KB - smallest and fastest |
| Mature Ecosystem | React Router | Most widely used, extensive documentation |
| Minimalist Approach | Wouter | Good performance with simple API |
| New Projects | Zen Router | Best performance/size ratio |

## 🔬 Test Categories

All tests measure route matching performance (operations per second):

1. **Static Routes** - Fixed paths with no parameters
2. **Simple Routes** - Single segment paths
3. **Dynamic Routes** - Paths with URL parameters (\`:id\`)
4. **Nested Dynamic** - Multiple parameters (\`:userId\`, \`:postId\`)
5. **Wildcard Routes** - Catch-all patterns (\`/blog/*\`)
6. **Optional Parameters** - Optional segments (\`:category?\`)
7. **Mixed Matching** - Realistic usage with multiple routes
8. **Sequential Matching** - Worst-case scenario (last route)

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 🛠️ Running Benchmarks

\`\`\`bash
# Install dependencies
npm install

# Run benchmarks
npm run benchmark
\`\`\`

## 📝 Notes

- **Zen Router** implementation is based on the internal matching logic since the package doesn't expose a public matching API
- All routers use pre-compiled route patterns for fair comparison
- Results may vary based on CPU, OS, and Node.js version
- Benchmarks focus on route matching performance, not navigation or rendering

## 🔗 Resources

- [Zen Router Documentation](https://github.com/sylphx/zen/tree/main/packages/zen-router)
- [Wouter Documentation](https://github.com/molefrog/wouter)
- [React Router Documentation](https://reactrouter.com/)

---

**Benchmark last updated:** November 07, 2025
