<div align="center">

# Router Benchmarks

Comprehensive performance benchmarks for React router libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2014,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-9-orange?style=flat-square)](#-test-coverage)

[⬅️ Back to Main](../../README.md) • [📊 All Categories](../../README.md#-benchmark-categories) • [🔬 Methodology](#-methodology) • [🚀 Run Locally](#-run-locally)

</div>

---

## 📑 Table of Contents

- [🎯 Quick Recommendations](#-quick-recommendations)
- [📊 Overall Performance Rankings](#-overall-performance-rankings)
- [📈 Library Comparison](#-library-comparison)
- [📊 Performance by Test Group](#-performance-by-test-group)
- [🔬 Methodology](#-methodology)
- [🚀 Run Locally](#-run-locally)
- [🚀 Libraries Tested](#-libraries-tested)

---

## 🎯 Quick Recommendations

**TL;DR** - Choose based on your needs:

- **⚡ Maximum Performance**: Zen Router - Fastest overall with 99.5/100 score
- **⚖️ Best Balance**: SolidJS Router - Great performance (99.4/100) with good ecosystem
- **🎯 Popular Choice**: Wouter - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen Router** (Score: 99.5/100)
- Tiny and fast router with regex-based matching
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/zen-router) • [npm](https://www.npmjs.com/package/@sylphx/zen-router)


**SolidJS Router** (Score: 99.4/100)
- Universal router for Solid with nested routing and data APIs
- **Best for**: General purpose state management
- [GitHub](https://github.com/solidjs/solid-router) • [npm](https://www.npmjs.com/package/@solidjs/router)


**Wouter** (Score: 11.2/100)
- Minimalist-friendly ~2.1KB routing for React and Preact
- **Best for**: General purpose state management
- [GitHub](https://github.com/molefrog/wouter) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 2.3/100)
- Declarative routing for React
- **Best for**: General purpose state management
- [GitHub](https://github.com/remix-run/react-router) • [npm](https://www.npmjs.com/package/react-router-dom)


</details>

---

## 📊 Overall Performance Rankings

> **🆕 Dual Ranking System**
>
> This category uses **hybrid weighting** that balances functional importance with data-driven stability.
> Both ranking systems are shown below for comparison.
>
> - **Hybrid Weighted** (primary): Balances category importance × test stability
> - **Variance-Based** (reference): Pure data-driven weighting
>
> See [Hybrid Weighting Analysis](../../HYBRID_WEIGHTING_ANALYSIS.md) for methodology.

### 🎯 Hybrid Weighted Rankings

Based on **two-tier weighted geometric mean** combining category importance with variance-based test weights.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 99.7/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen-router) [📊](https://bundlephobia.com/package/@sylphx/zen-router) |
| 🥈 2 | **[SolidJS Router](https://github.com/solidjs/solid-router)** | 98.3/100 | 99% of fastest | [📦](https://www.npmjs.com/package/@solidjs/router) [📊](https://bundlephobia.com/package/@solidjs/router) |
| 🥉 3 | **[Wouter](https://github.com/molefrog/wouter)** | 13.1/100 | 13% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](https://github.com/remix-run/react-router)** | 1.3/100 | 1% of fastest | [📦](https://www.npmjs.com/package/react-router-dom) [📊](https://bundlephobia.com/package/react-router-dom) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen Router](https://github.com/SylphxAI/zen-router)** | 99.5/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@sylphx/zen-router) [📊](https://bundlephobia.com/package/@sylphx/zen-router) |
| 🥈 2 | **[SolidJS Router](https://github.com/solidjs/solid-router)** | 99.4/100 | 100% of fastest | [📦](https://www.npmjs.com/package/@solidjs/router) [📊](https://bundlephobia.com/package/@solidjs/router) |
| 🥉 3 | **[Wouter](https://github.com/molefrog/wouter)** | 11.2/100 | 11% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](https://github.com/remix-run/react-router)** | 2.3/100 | 2% of fastest | [📦](https://www.npmjs.com/package/react-router-dom) [📊](https://bundlephobia.com/package/react-router-dom) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen Router](https://github.com/SylphxAI/zen-router)** | **99.5** | **1.57 KB** | Tiny and fast router with regex-based matching... | General purpose... |
| **[SolidJS Router](https://github.com/solidjs/solid-router)** | **99.4** | **9.23 KB** | Universal router for Solid with nested routing and... | General purpose... |
| **[Wouter](https://github.com/molefrog/wouter)** | **11.2** | **2.49 KB** | Minimalist-friendly ~2.1KB routing for React and P... | General purpose... |
| **[React Router](https://github.com/remix-run/react-router)** | **2.3** | **26.34 KB** | Declarative routing for React... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   8.1M ops/sec
🥈 SolidJS Router     ██████████████████████████████████████     7.8M ops/sec
🥉 Wouter             ██████                                     1.3M ops/sec
 React Router                                                  36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 8.1M | 0.000ms | 0.000ms | 1000 |
| SolidJS Router | 7.8M | 0.000ms | 0.000ms | 1000 |
| Wouter | 1.3M | 0.001ms | 0.002ms | 1000 |
| React Router | 36K | 0.032ms | 0.063ms | 1000 |

#### Static Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   9.7M ops/sec
🥈 SolidJS Router     ███████████████████████████████████████    9.4M ops/sec
🥉 Wouter             ████████                                   1.9M ops/sec
 React Router                                                  45K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 9.7M | 0.000ms | 0.000ms | 1000 |
| SolidJS Router | 9.4M | 0.000ms | 0.000ms | 1000 |
| Wouter | 1.9M | 0.001ms | 0.002ms | 1000 |
| React Router | 45K | 0.024ms | 0.060ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 Zen Router         ████████████████████████████████████████   3.7M ops/sec
🥈 SolidJS Router     ███████████████████████████████████████    3.6M ops/sec
🥉 Wouter             ████                                       364K ops/sec
 React Router       █                                          54K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 3.7M | 0.000ms | 0.001ms | 1000 |
| SolidJS Router | 3.6M | 0.000ms | 0.001ms | 1000 |
| Wouter | 364K | 0.003ms | 0.006ms | 1000 |
| React Router | 54K | 0.019ms | 0.034ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 SolidJS Router     ████████████████████████████████████████   2.3M ops/sec
🥈 Zen Router         ███████████████████████████████████████    2.3M ops/sec
🥉 Wouter             ████                                       226K ops/sec
 React Router       █                                          72K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 2.3M | 0.000ms | 0.001ms | 1000 |
| Zen Router | 2.3M | 0.000ms | 0.001ms | 1000 |
| Wouter | 226K | 0.005ms | 0.008ms | 1000 |
| React Router | 72K | 0.015ms | 0.029ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 SolidJS Router     ████████████████████████████████████████   1.7M ops/sec
🥈 Zen Router         ███████████████████████████████████████    1.7M ops/sec
🥉 Wouter             █████                                      211K ops/sec
 React Router       █                                          55K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.7M | 0.001ms | 0.001ms | 1000 |
| Zen Router | 1.7M | 0.001ms | 0.001ms | 1000 |
| Wouter | 211K | 0.005ms | 0.009ms | 1000 |
| React Router | 55K | 0.019ms | 0.034ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 Zen Router         ████████████████████████████████████████   2.1M ops/sec
🥈 SolidJS Router     ████████████████████████████████████████   2.0M ops/sec
🥉 Wouter             ████                                       216K ops/sec
 React Router       █                                          48K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 2.1M | 0.001ms | 0.001ms | 1000 |
| SolidJS Router | 2.0M | 0.001ms | 0.001ms | 1000 |
| Wouter | 216K | 0.005ms | 0.009ms | 1000 |
| React Router | 48K | 0.022ms | 0.037ms | 1000 |

#### Wildcard Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   2.6M ops/sec
🥈 SolidJS Router     ████████████████████████████████████████   2.6M ops/sec
🥉 Wouter             ████                                       271K ops/sec
 React Router       █                                          38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 2.6M | 0.000ms | 0.001ms | 1000 |
| SolidJS Router | 2.6M | 0.000ms | 0.001ms | 1000 |
| Wouter | 271K | 0.004ms | 0.007ms | 1000 |
| React Router | 38K | 0.028ms | 0.043ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 Zen Router         ████████████████████████████████████████   550K ops/sec
🥈 SolidJS Router     ████████████████████████████████████████   547K ops/sec
🥉 Wouter             ████                                       54K ops/sec
 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 550K | 0.002ms | 0.004ms | 1000 |
| SolidJS Router | 547K | 0.002ms | 0.005ms | 1000 |
| Wouter | 54K | 0.019ms | 0.031ms | 1000 |
| React Router | 7K | 0.143ms | 0.201ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 Zen Router         ████████████████████████████████████████   1.7M ops/sec
🥈 SolidJS Router     ████████████████████████████████████████   1.7M ops/sec
🥉 Wouter             █████                                      211K ops/sec
 React Router       █                                          56K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 1.7M | 0.001ms | 0.001ms | 1000 |
| SolidJS Router | 1.7M | 0.001ms | 0.001ms | 1000 |
| Wouter | 211K | 0.005ms | 0.009ms | 1000 |
| React Router | 56K | 0.018ms | 0.034ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Platform**: GitHub Actions (Ubuntu latest)
- **CPU**: 2-core (Intel Xeon or AMD EPYC equivalent)
- **RAM**: ~7GB available
- **Node.js**: 20.x
- **Warmup**: 100ms + 5 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **weighted geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Test weights calculated based on 90th percentile of performance variance
- Stable tests (low variance) receive higher weight
- Unstable tests (high variance) receive lower weight
- This prevents outlier tests from dominating the overall score

**Example** (from current results):
- High-Frequency Read (stable, factor 7.3): **weight 17.7%**
- Complex Form (unstable, factor 600): **weight 0.2%**

This methodology follows [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)'s weighted geometric mean approach.

### Reproducibility
All tests are deterministic and reproducible:
1. Same versions locked in package.json
2. Same test scenarios for all libraries
3. Multiple runs to ensure consistency
4. Automated via GitHub Actions

</details>

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Navigate to this category
cd benchmarks/router

# Install category dependencies
npm install

# Run benchmarks
npm run benchmark

# Generate README
npx tsx ../../scripts/generate-simple-readme.ts .
```

**View Test Code**: [./groups/](./groups/) contains all test implementations

---

## 📦 Test Coverage

- **Basic Operations**: 0 tests
- **Advanced Operations**: 0 tests
- **Async Operations**: 0 tests
- **Real-World Scenarios**: 0 tests
- **Stress Tests**: 0 tests

**Total**: 9 tests × 4 libraries = 36 benchmark runs

---

## 🚀 Libraries Tested

- **[Zen Router](https://github.com/SylphxAI/zen-router)** (`@sylphx/zen-router`) v1.0.2 • 1.57 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/zen-router) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/zen-router)
- **[SolidJS Router](https://github.com/solidjs/solid-router)** (`@solidjs/router`) v0.15.9 • 9.23 KB gzip - [📦 npm](https://www.npmjs.com/package/@solidjs/router) • [📊 bundle size](https://bundlephobia.com/package/@solidjs/router)
- **[Wouter](https://github.com/molefrog/wouter)** (`wouter`) v3.7.1 • 2.49 KB gzip - [📦 npm](https://www.npmjs.com/package/wouter) • [📊 bundle size](https://bundlephobia.com/package/wouter)
- **[React Router](https://github.com/remix-run/react-router)** (`react-router-dom`) v6.30.1 • 26.34 KB gzip - [📦 npm](https://www.npmjs.com/package/react-router-dom) • [📊 bundle size](https://bundlephobia.com/package/react-router-dom)

---

## 🤝 Contributing

Want to add a library or improve tests?

- **Add a Library**: Update `package.json` and `library-metadata.json`, then implement tests
- **Improve Tests**: Edit files in `./groups/` directory
- **Report Issues**: [Open an issue](https://github.com/SylphxAI/benchmark/issues)
- **Suggest Features**: [Start a discussion](https://github.com/SylphxAI/benchmark/discussions)

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed guidelines.

---

## 📚 Related

- [📊 All Benchmark Categories](../../README.md#-benchmark-categories)
- [🏗️ Architecture Documentation](../../ARCHITECTURE.md)
- [⚙️ GitHub Actions Workflow](../../.github/workflows/benchmarks-per-library.yml)
- [🔄 CI/CD Results](https://github.com/SylphxAI/benchmark/actions)

---

<div align="center">

**Found this useful? Give it a ⭐️!**

*Generated on 2025-11-14T01:34:10.237Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
