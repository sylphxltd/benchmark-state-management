<div align="center">

# Router Benchmarks

Comprehensive performance benchmarks for React router libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
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

- **⚡ Maximum Performance**: Zen Router - Fastest overall with 92.6/100 score
- **⚖️ Best Balance**: SolidJS Router - Great performance (91.3/100) with good ecosystem
- **🎯 Popular Choice**: Wouter - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Zen Router** (Score: 92.6/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/zen-router)


**SolidJS Router** (Score: 91.3/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/solidjs-router)


**Wouter** (Score: 19.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/wouter)


**React Router** (Score: 3.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/react-router)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 9 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Zen Router](#)** | 92.6/100 | 100% of fastest | [📦](https://www.npmjs.com/package/zen-router) [📊](https://bundlephobia.com/package/zen-router) |
| 🥈 2 | **[SolidJS Router](#)** | 91.3/100 | 99% of fastest | [📦](https://www.npmjs.com/package/solidjs-router) [📊](https://bundlephobia.com/package/solidjs-router) |
| 🥉 3 | **[Wouter](#)** | 19.4/100 | 21% of fastest | [📦](https://www.npmjs.com/package/wouter) [📊](https://bundlephobia.com/package/wouter) |
|  4 | **[React Router](#)** | 3.8/100 | 4% of fastest | [📦](https://www.npmjs.com/package/react-router) [📊](https://bundlephobia.com/package/react-router) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Zen Router](#)** | **92.6** | **1.57 KB** | State management solution... | General purpose... |
| **[SolidJS Router](#)** | **91.3** | N/A | State management solution... | General purpose... |
| **[Wouter](#)** | **19.4** | **2.37 KB** | State management solution... | General purpose... |
| **[React Router](#)** | **3.8** | **26.34 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-basic-routes

#### Simple Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   647K ops/sec
🥈 SolidJS Router     █████████████████████████████████          538K ops/sec
🥉 Wouter             █████████████████                          277K ops/sec
 React Router       ██                                         32K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 647K | 0.002ms | 0.008ms | 1000 |
| SolidJS Router | 538K | 0.002ms | 0.004ms | 1000 |
| Wouter | 277K | 0.004ms | 0.014ms | 1000 |
| React Router | 32K | 0.032ms | 0.084ms | 1000 |

#### Static Route Matching

```
🥇 Zen Router         ████████████████████████████████████████   743K ops/sec
🥈 SolidJS Router     ███████████████████████████                504K ops/sec
🥉 Wouter             ██████████████                             255K ops/sec
 React Router       █                                          22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 743K | 0.001ms | 0.008ms | 1000 |
| SolidJS Router | 504K | 0.002ms | 0.009ms | 1000 |
| Wouter | 255K | 0.004ms | 0.019ms | 1000 |
| React Router | 22K | 0.045ms | 0.100ms | 1000 |

### 02-dynamic-routes

#### Dynamic Route Matching (1 param)

```
🥇 SolidJS Router     ████████████████████████████████████████   978K ops/sec
🥈 Zen Router         █████████████████████████████████████      914K ops/sec
🥉 Wouter             ███████                                    171K ops/sec
 React Router       █                                          36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 978K | 0.001ms | 0.004ms | 1000 |
| Zen Router | 914K | 0.001ms | 0.006ms | 1000 |
| Wouter | 171K | 0.006ms | 0.028ms | 1000 |
| React Router | 36K | 0.028ms | 0.069ms | 1000 |

#### Nested Dynamic Routes (2 params)

```
🥇 Zen Router         ████████████████████████████████████████   713K ops/sec
🥈 SolidJS Router     ███████████████████████████████            556K ops/sec
🥉 Wouter             ███████████                                193K ops/sec
 React Router       ██                                         43K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Zen Router | 713K | 0.001ms | 0.008ms | 1000 |
| SolidJS Router | 556K | 0.002ms | 0.012ms | 1000 |
| Wouter | 193K | 0.005ms | 0.014ms | 1000 |
| React Router | 43K | 0.023ms | 0.064ms | 1000 |

### 03-advanced-routes

#### Optional Parameter Route (with param)

```
🥇 SolidJS Router     ████████████████████████████████████████   878K ops/sec
🥈 Zen Router         ██████████████████████████████████████     843K ops/sec
🥉 Wouter             ████                                       91K ops/sec
 React Router       █                                          27K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 878K | 0.001ms | 0.005ms | 1000 |
| Zen Router | 843K | 0.001ms | 0.004ms | 1000 |
| Wouter | 91K | 0.011ms | 0.032ms | 1000 |
| React Router | 27K | 0.037ms | 0.082ms | 1000 |

#### Optional Parameter Route (without param)

```
🥇 SolidJS Router     ████████████████████████████████████████   1.0M ops/sec
🥈 Zen Router         ███████████████████████████████████████    995K ops/sec
🥉 Wouter             ███████                                    165K ops/sec
 React Router       ██                                         44K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 1.0M | 0.001ms | 0.002ms | 1000 |
| Zen Router | 995K | 0.001ms | 0.002ms | 1000 |
| Wouter | 165K | 0.006ms | 0.016ms | 1000 |
| React Router | 44K | 0.023ms | 0.044ms | 1000 |

#### Wildcard Route Matching

```
🥇 SolidJS Router     ████████████████████████████████████████   987K ops/sec
🥈 Zen Router         ███████████████████████████████████████    951K ops/sec
🥉 Wouter             ███████                                    163K ops/sec
 React Router       █                                          31K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 987K | 0.001ms | 0.003ms | 1000 |
| Zen Router | 951K | 0.001ms | 0.003ms | 1000 |
| Wouter | 163K | 0.006ms | 0.019ms | 1000 |
| React Router | 31K | 0.032ms | 0.068ms | 1000 |

### 04-real-world

#### Mixed Route Matching (realistic usage)

```
🥇 SolidJS Router     ████████████████████████████████████████   331K ops/sec
🥈 Zen Router         ████████████████████████                   195K ops/sec
🥉 Wouter             ████                                       36K ops/sec
 React Router       █                                          7K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 331K | 0.003ms | 0.015ms | 1000 |
| Zen Router | 195K | 0.005ms | 0.023ms | 1000 |
| Wouter | 36K | 0.028ms | 0.066ms | 1000 |
| React Router | 7K | 0.147ms | 0.244ms | 1000 |

#### Sequential Route Matching (worst case)

```
🥇 SolidJS Router     ████████████████████████████████████████   859K ops/sec
🥈 Zen Router         ████████████████████████████████████████   854K ops/sec
🥉 Wouter             ████████                                   162K ops/sec
 React Router       ██                                         51K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| SolidJS Router | 859K | 0.001ms | 0.005ms | 1000 |
| Zen Router | 854K | 0.001ms | 0.005ms | 1000 |
| Wouter | 162K | 0.006ms | 0.018ms | 1000 |
| React Router | 51K | 0.020ms | 0.038ms | 1000 |


</details>

---

## 🔬 Methodology

<details>
<summary><b>How We Test</b> (click to expand)</summary>

### Test Environment
- **Runtime**: Bun (latest stable)
- **Warmup**: 100 iterations to stabilize JIT
- **Measurement**: 1000 iterations per test
- **Execution**: Isolated process per library

### Metrics Collected
- **Operations/Second**: Higher is better
- **Mean Time**: Average execution time
- **P99 Latency**: 99th percentile (worst 1% excluded)
- **Variance**: Consistency indicator

### Scoring System
Overall scores use **geometric mean** of normalized performance across all tests:
- Each test result normalized to best performer (100%)
- Geometric mean prevents single test from dominating
- Score of 50 = half the speed of the fastest library on average

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

- **[Zen Router](#)** (`@sylphx/zen-router`) v1.0.2 • 1.57 KB gzip - [📦 npm](https://www.npmjs.com/package/zen-router) • [📊 bundle size](https://bundlephobia.com/package/zen-router)
- **[SolidJS Router](#)** (`@solidjs/router`) v0.15.9 - [📦 npm](https://www.npmjs.com/package/solidjs-router) • [📊 bundle size](https://bundlephobia.com/package/solidjs-router)
- **[Wouter](#)** (`wouter`) v3.7.1 • 2.37 KB gzip - [📦 npm](https://www.npmjs.com/package/wouter) • [📊 bundle size](https://bundlephobia.com/package/wouter)
- **[React Router](#)** (`react-router-dom`) v6.30.1 • 26.34 KB gzip - [📦 npm](https://www.npmjs.com/package/react-router) • [📊 bundle size](https://bundlephobia.com/package/react-router)

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

*Generated on 2025-11-13T12:06:22.204Z*

[⬆️ Back to Top](#router-benchmarks) • [⬅️ Main README](../../README.md)

</div>
