<div align="center">

# Css Frameworks Benchmarks

Comprehensive performance benchmarks for React css-frameworks libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-6-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Panda CSS - Fastest overall with 0.0/100 score
- **⚖️ Best Balance**: Silk - Great performance (0.0/100) with good ecosystem
- **🎯 Popular Choice**: Tailwind CSS - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Panda CSS** (Score: 0.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/panda)


**Silk** (Score: 0.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/silk)


**Tailwind CSS** (Score: 0.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/tailwind)


**UnoCSS** (Score: 0.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/unocss)


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
| 🥇 1 | **[Panda CSS](#)** | 0.0/100 | 0% of fastest | [📦](#) [📊](#) |
| 🥈 2 | **[Silk](#)** | 0.0/100 | 0% of fastest | [📦](#) [📊](#) |
| 🥉 3 | **[Tailwind CSS](#)** | 0.0/100 | 0% of fastest | [📦](#) [📊](#) |
|  4 | **[UnoCSS](#)** | 0.0/100 | 0% of fastest | [📦](#) [📊](#) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Panda CSS](#)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/panda) [📊](https://bundlephobia.com/package/panda) |
| 🥈 2 | **[Silk](#)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/silk) [📊](https://bundlephobia.com/package/silk) |
| 🥉 3 | **[Tailwind CSS](#)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/tailwind) [📊](https://bundlephobia.com/package/tailwind) |
|  4 | **[UnoCSS](#)** | 0.0/100 | 0% of fastest | [📦](https://www.npmjs.com/package/unocss) [📊](https://bundlephobia.com/package/unocss) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Panda CSS](#)** | **0.0** | **8.02 KB** | State management solution... | General purpose... |
| **[Silk](#)** | **0.0** | **9.46 KB** | State management solution... | General purpose... |
| **[Tailwind CSS](#)** | **0.0** | **526.39 KB** | State management solution... | General purpose... |
| **[UnoCSS](#)** | **0.0** | **0.28 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-build-performance

#### Small App Build

```
🥇 Panda CSS                                                     N/A ops/sec
🥈 Silk                                                          N/A ops/sec
🥉 Tailwind CSS                                                  N/A ops/sec
 UnoCSS                                                        N/A ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Panda CSS | N/A | N/Ams | N/Ams | N/A |
| Silk | N/A | N/Ams | N/Ams | N/A |
| Tailwind CSS | N/A | N/Ams | N/Ams | N/A |
| UnoCSS | N/A | N/Ams | N/Ams | N/A |

### 01-style-application

#### Apply 100 inline styles

```
🥇 Silk               ████████████████████████████████████████   107K ops/sec
🥈 Panda CSS          ████████████████████████████████████████   105K ops/sec
🥉 UnoCSS             ███████████████████████████████████        94K ops/sec
 Tailwind CSS       █████████████████████████████████          89K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Silk | 107K | 0.009ms | 0.026ms | 1000 |
| Panda CSS | 105K | 0.009ms | 0.029ms | 1000 |
| UnoCSS | 94K | 0.011ms | 0.029ms | 1000 |
| Tailwind CSS | 89K | 0.011ms | 0.030ms | 1000 |

#### Conditional styling (1000 iterations)

```
🥇 Silk               ████████████████████████████████████████   661K ops/sec
🥈 Panda CSS          ████████████████████████████               469K ops/sec
🥉 UnoCSS             ███████████████████████████                448K ops/sec
 Tailwind CSS       █████████████████████████                  413K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Silk | 661K | 0.002ms | 0.006ms | 1000 |
| Panda CSS | 469K | 0.002ms | 0.009ms | 1000 |
| UnoCSS | 448K | 0.002ms | 0.008ms | 1000 |
| Tailwind CSS | 413K | 0.002ms | 0.009ms | 1000 |

#### String concatenation (complex className)

```
🥇 UnoCSS             ████████████████████████████████████████   726K ops/sec
🥈 Panda CSS          █████████████████████████████████          591K ops/sec
🥉 Silk               ███████████████████████████████            572K ops/sec
 Tailwind CSS       ███████████████████████                    415K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| UnoCSS | 726K | 0.001ms | 0.009ms | 1000 |
| Panda CSS | 591K | 0.002ms | 0.009ms | 1000 |
| Silk | 572K | 0.002ms | 0.008ms | 1000 |
| Tailwind CSS | 415K | 0.002ms | 0.012ms | 1000 |

### 02-dynamic-updates

#### Responsive breakpoint matching

```
🥇 Tailwind CSS       ████████████████████████████████████████   429K ops/sec
🥈 Silk               ███████████████████████████████████████    420K ops/sec
🥉 Panda CSS          ██████████████████████████████████████     406K ops/sec
 UnoCSS             ██████████████████████████████████████     404K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Tailwind CSS | 429K | 0.002ms | 0.015ms | 1000 |
| Silk | 420K | 0.002ms | 0.016ms | 1000 |
| Panda CSS | 406K | 0.002ms | 0.016ms | 1000 |
| UnoCSS | 404K | 0.002ms | 0.020ms | 1000 |

#### Theme toggle (dark/light mode)

```
🥇 Panda CSS          ████████████████████████████████████████   549K ops/sec
🥈 Tailwind CSS       ██████████████████████████████████████     526K ops/sec
🥉 UnoCSS             ███████████████████████████████████        485K ops/sec
 Silk               ██████████████████████                     295K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Panda CSS | 549K | 0.002ms | 0.006ms | 1000 |
| Tailwind CSS | 526K | 0.002ms | 0.006ms | 1000 |
| UnoCSS | 485K | 0.002ms | 0.007ms | 1000 |
| Silk | 295K | 0.003ms | 0.006ms | 1000 |


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
cd benchmarks/css-frameworks

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

**Total**: 6 tests × 4 libraries = 24 benchmark runs

---

## 🚀 Libraries Tested

- **[Panda CSS](#)** (`@pandacss/dev`) v1.4.3 • 8.02 KB gzip - [📦 npm](https://www.npmjs.com/package/panda) • [📊 bundle size](https://bundlephobia.com/package/panda)
- **[Silk](#)** (`@sylphx/silk`) v1.0.0 • 9.46 KB gzip - [📦 npm](https://www.npmjs.com/package/silk) • [📊 bundle size](https://bundlephobia.com/package/silk)
- **[Tailwind CSS](#)** (`tailwindcss`) v3.4.15 • 526.39 KB gzip - [📦 npm](https://www.npmjs.com/package/tailwind) • [📊 bundle size](https://bundlephobia.com/package/tailwind)
- **[UnoCSS](#)** (`unocss`) v0.65.3 • 0.28 KB gzip - [📦 npm](https://www.npmjs.com/package/unocss) • [📊 bundle size](https://bundlephobia.com/package/unocss)

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

*Generated on 2025-11-14T01:34:10.082Z*

[⬆️ Back to Top](#css-frameworks-benchmarks) • [⬅️ Main README](../../README.md)

</div>
