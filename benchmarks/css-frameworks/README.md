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

- **⚡ Maximum Performance**: Silk - Fastest overall with 91.9/100 score
- **⚖️ Best Balance**: Tailwind CSS - Great performance (88.9/100) with good ecosystem
- **🎯 Popular Choice**: Panda CSS - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Silk** (Score: 91.9/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/silk)


**Tailwind CSS** (Score: 88.9/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/tailwind)


**Panda CSS** (Score: 81.5/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/panda)


**UnoCSS** (Score: 75.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/unocss)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 5 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Silk](#)** | 91.9/100 | 100% of fastest | [📦](https://www.npmjs.com/package/silk) [📊](https://bundlephobia.com/package/silk) |
| 🥈 2 | **[Tailwind CSS](#)** | 88.9/100 | 97% of fastest | [📦](https://www.npmjs.com/package/tailwind) [📊](https://bundlephobia.com/package/tailwind) |
| 🥉 3 | **[Panda CSS](#)** | 81.5/100 | 89% of fastest | [📦](https://www.npmjs.com/package/panda) [📊](https://bundlephobia.com/package/panda) |
|  4 | **[UnoCSS](#)** | 75.8/100 | 83% of fastest | [📦](https://www.npmjs.com/package/unocss) [📊](https://bundlephobia.com/package/unocss) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Silk](#)** | **91.9** | **9.46 KB** | State management solution... | General purpose... |
| **[Tailwind CSS](#)** | **88.9** | **516.69 KB** | State management solution... | General purpose... |
| **[Panda CSS](#)** | **81.5** | **8.02 KB** | State management solution... | General purpose... |
| **[UnoCSS](#)** | **75.8** | **3.42 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-style-application

#### Apply 100 inline styles

```
🥇 UnoCSS             ████████████████████████████████████████   114K ops/sec
🥈 Tailwind CSS       ████████████████████████████████████████   113K ops/sec
🥉 Panda CSS          ███████████████████████████████████████    110K ops/sec
 Silk               ██████████████████████████████████████     109K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| UnoCSS | 114K | 0.009ms | 0.024ms | 1000 |
| Tailwind CSS | 113K | 0.009ms | 0.023ms | 1000 |
| Panda CSS | 110K | 0.009ms | 0.022ms | 1000 |
| Silk | 109K | 0.009ms | 0.031ms | 1000 |

#### Conditional styling (1000 iterations)

```
🥇 Silk               ████████████████████████████████████████   649K ops/sec
🥈 Tailwind CSS       ███████████████████████████████            499K ops/sec
🥉 Panda CSS          ████████████████████████████               452K ops/sec
 UnoCSS             ████████████████████                       330K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Silk | 649K | 0.002ms | 0.007ms | 1000 |
| Tailwind CSS | 499K | 0.002ms | 0.009ms | 1000 |
| Panda CSS | 452K | 0.002ms | 0.009ms | 1000 |
| UnoCSS | 330K | 0.003ms | 0.007ms | 1000 |

#### String concatenation (complex className)

```
🥇 Silk               ████████████████████████████████████████   737K ops/sec
🥈 Tailwind CSS       ███████████████████████████████████        653K ops/sec
🥉 UnoCSS             ███████████████████████████████            570K ops/sec
 Panda CSS          ██████████████████████████████             556K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Silk | 737K | 0.001ms | 0.008ms | 1000 |
| Tailwind CSS | 653K | 0.002ms | 0.007ms | 1000 |
| UnoCSS | 570K | 0.002ms | 0.010ms | 1000 |
| Panda CSS | 556K | 0.002ms | 0.011ms | 1000 |

### 02-dynamic-updates

#### Responsive breakpoint matching

```
🥇 Silk               ████████████████████████████████████████   381K ops/sec
🥈 Tailwind CSS       ██████████████████████████████████████     361K ops/sec
🥉 UnoCSS             ██████████████████████████████             289K ops/sec
 Panda CSS          ████████████████████████████               268K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Silk | 381K | 0.003ms | 0.018ms | 1000 |
| Tailwind CSS | 361K | 0.003ms | 0.027ms | 1000 |
| UnoCSS | 289K | 0.003ms | 0.026ms | 1000 |
| Panda CSS | 268K | 0.004ms | 0.028ms | 1000 |

#### Theme toggle (dark/light mode)

```
🥇 Panda CSS          ████████████████████████████████████████   686K ops/sec
🥈 Tailwind CSS       ███████████████████████████████████        595K ops/sec
🥉 UnoCSS             ██████████████████████████████████         578K ops/sec
 Silk               ███████████████████████████                468K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Panda CSS | 686K | 0.001ms | 0.003ms | 1000 |
| Tailwind CSS | 595K | 0.002ms | 0.006ms | 1000 |
| UnoCSS | 578K | 0.002ms | 0.005ms | 1000 |
| Silk | 468K | 0.002ms | 0.006ms | 1000 |


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

- **[Silk](#)** (`@sylphx/silk`) v1.0.0 • 9.46 KB gzip - [📦 npm](https://www.npmjs.com/package/silk) • [📊 bundle size](https://bundlephobia.com/package/silk)
- **[Tailwind CSS](#)** (`tailwindcss`) v3.4.15 • 516.69 KB gzip - [📦 npm](https://www.npmjs.com/package/tailwind) • [📊 bundle size](https://bundlephobia.com/package/tailwind)
- **[Panda CSS](#)** (`@pandacss/dev`) v1.4.3 • 8.02 KB gzip - [📦 npm](https://www.npmjs.com/package/panda) • [📊 bundle size](https://bundlephobia.com/package/panda)
- **[UnoCSS](#)** (`unocss`) v0.65.3 • 3.42 KB gzip - [📦 npm](https://www.npmjs.com/package/unocss) • [📊 bundle size](https://bundlephobia.com/package/unocss)

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

*Generated on 2025-11-13T12:06:20.477Z*

[⬆️ Back to Top](#css-frameworks-benchmarks) • [⬅️ Main README](../../README.md)

</div>
