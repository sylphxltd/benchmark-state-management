<div align="center">

# Css Frameworks Benchmarks

Comprehensive performance benchmarks for React css-frameworks libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-5-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Panda CSS - Fastest overall with 88.4/100 score
- **⚖️ Best Balance**: UnoCSS - Great performance (87.0/100) with good ecosystem
- **🎯 Popular Choice**: Silk - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Panda CSS** (Score: 88.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/panda)


**UnoCSS** (Score: 87.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/unocss)


**Silk** (Score: 83.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/silk)


**Tailwind CSS** (Score: 77.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/tailwind)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 5 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Panda CSS](#)** | 88.4/100 | 100% of fastest | [📦](https://www.npmjs.com/package/panda) [📊](https://bundlephobia.com/package/panda) |
| 🥈 2 | **[UnoCSS](#)** | 87.0/100 | 98% of fastest | [📦](https://www.npmjs.com/package/unocss) [📊](https://bundlephobia.com/package/unocss) |
| 🥉 3 | **[Silk](#)** | 83.8/100 | 95% of fastest | [📦](https://www.npmjs.com/package/silk) [📊](https://bundlephobia.com/package/silk) |
|  4 | **[Tailwind CSS](#)** | 77.8/100 | 88% of fastest | [📦](https://www.npmjs.com/package/tailwind) [📊](https://bundlephobia.com/package/tailwind) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Panda CSS](#)** | **88.4** | **8.02 KB** | State management solution... | General purpose... |
| **[UnoCSS](#)** | **87.0** | **0.28 KB** | State management solution... | General purpose... |
| **[Silk](#)** | **83.8** | **9.46 KB** | State management solution... | General purpose... |
| **[Tailwind CSS](#)** | **77.8** | **526.39 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

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

**Total**: 5 tests × 4 libraries = 20 benchmark runs

---

## 🚀 Libraries Tested

- **[Panda CSS](#)** (`@pandacss/dev`) v1.4.3 • 8.02 KB gzip - [📦 npm](https://www.npmjs.com/package/panda) • [📊 bundle size](https://bundlephobia.com/package/panda)
- **[UnoCSS](#)** (`unocss`) v0.65.3 • 0.28 KB gzip - [📦 npm](https://www.npmjs.com/package/unocss) • [📊 bundle size](https://bundlephobia.com/package/unocss)
- **[Silk](#)** (`@sylphx/silk`) v1.0.0 • 9.46 KB gzip - [📦 npm](https://www.npmjs.com/package/silk) • [📊 bundle size](https://bundlephobia.com/package/silk)
- **[Tailwind CSS](#)** (`tailwindcss`) v3.4.15 • 526.39 KB gzip - [📦 npm](https://www.npmjs.com/package/tailwind) • [📊 bundle size](https://bundlephobia.com/package/tailwind)

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

*Generated on 2025-11-13T16:09:41.226Z*

[⬆️ Back to Top](#css-frameworks-benchmarks) • [⬅️ Main README](../../README.md)

</div>
