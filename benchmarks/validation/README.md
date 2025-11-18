<div align="center">

# Validation Benchmarks

Comprehensive performance benchmarks for React validation libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-10-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Superstruct - Fastest overall with 100.0/100 score
- **⚖️ Best Balance**: Joi - Great performance (25.9/100) with good ecosystem
- **🎯 Popular Choice**: Yup - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Superstruct** (Score: 100.0/100)
- A simple and composable way to validate data in JavaScript (and TypeScript).
- **Best for**: General purpose state management
- [GitHub](git://github.com/ianstormtaylor/superstruct) • [npm](https://www.npmjs.com/package/superstruct)


**Joi** (Score: 25.9/100)
- Object schema validation
- **Best for**: General purpose state management
- [GitHub](git://github.com/hapijs/joi) • [npm](https://www.npmjs.com/package/joi)


**Yup** (Score: 25.0/100)
- Dead simple Object schema validation
- **Best for**: General purpose state management
- [GitHub](https://github.com/jquense/yup) • [npm](https://www.npmjs.com/package/yup)


**Zod** (Score: 17.4/100)
- TypeScript-first schema declaration and validation library with static type inference
- **Best for**: General purpose state management
- [GitHub](https://github.com/colinhacks/zod) • [npm](https://www.npmjs.com/package/zod)


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
| 🥇 1 | **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/superstruct) [📊](https://bundlephobia.com/package/superstruct) |
| 🥈 2 | **[Joi](git://github.com/hapijs/joi)** | 23.8/100 | 24% of fastest | [📦](https://www.npmjs.com/package/joi) [📊](https://bundlephobia.com/package/joi) |
| 🥉 3 | **[Yup](https://github.com/jquense/yup)** | 23.7/100 | 24% of fastest | [📦](https://www.npmjs.com/package/yup) [📊](https://bundlephobia.com/package/yup) |
|  4 | **[Zod](https://github.com/colinhacks/zod)** | 16.0/100 | 16% of fastest | [📦](https://www.npmjs.com/package/zod) [📊](https://bundlephobia.com/package/zod) |


*📦 = npm package • 📊 = bundle size*

### 📐 Variance-Based Rankings (Reference)

Pure data-driven weighting based on test stability across implementations.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/superstruct) [📊](https://bundlephobia.com/package/superstruct) |
| 🥈 2 | **[Joi](git://github.com/hapijs/joi)** | 25.9/100 | 26% of fastest | [📦](https://www.npmjs.com/package/joi) [📊](https://bundlephobia.com/package/joi) |
| 🥉 3 | **[Yup](https://github.com/jquense/yup)** | 25.0/100 | 25% of fastest | [📦](https://www.npmjs.com/package/yup) [📊](https://bundlephobia.com/package/yup) |
|  4 | **[Zod](https://github.com/colinhacks/zod)** | 17.4/100 | 17% of fastest | [📦](https://www.npmjs.com/package/zod) [📊](https://bundlephobia.com/package/zod) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | **100.0** | **3.44 KB** | A simple and composable way to validate data in Ja... | General purpose... |
| **[Joi](git://github.com/hapijs/joi)** | **25.9** | **52.64 KB** | Object schema validation... | General purpose... |
| **[Yup](https://github.com/jquense/yup)** | **25.0** | **13.33 KB** | Dead simple Object schema validation... | General purpose... |
| **[Zod](https://github.com/colinhacks/zod)** | **17.4** | **52.88 KB** | TypeScript-first schema declaration and validation... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-schema-creation

#### Create Complex Schema

```
🥇 Superstruct        ████████████████████████████████████████   543K ops/sec
🥈 Yup                ████                                       56K ops/sec
🥉 Zod                ███                                        35K ops/sec
 Joi                ██                                         24K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 543K | 0.002ms | 0.010ms | 1000 |
| Yup | 56K | 0.018ms | 0.061ms | 1000 |
| Zod | 35K | 0.029ms | 0.067ms | 1000 |
| Joi | 24K | 0.041ms | 0.127ms | 1000 |

#### Create Simple Schema

```
🥇 Superstruct        ████████████████████████████████████████   1.9M ops/sec
🥈 Zod                ███                                        129K ops/sec
🥉 Yup                ██                                         117K ops/sec
 Joi                ██                                         81K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.9M | 0.001ms | 0.003ms | 1000 |
| Zod | 129K | 0.008ms | 0.031ms | 1000 |
| Yup | 117K | 0.009ms | 0.045ms | 1000 |
| Joi | 81K | 0.012ms | 0.058ms | 1000 |

### 02-primitive-validation

#### Validate Email

```
🥇 Superstruct        ████████████████████████████████████████   1.8M ops/sec
🥈 Yup                ███████████                                475K ops/sec
🥉 Joi                ██████                                     248K ops/sec
 Zod                ██                                         112K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.8M | 0.001ms | 0.002ms | 1000 |
| Yup | 475K | 0.002ms | 0.005ms | 1000 |
| Joi | 248K | 0.004ms | 0.009ms | 1000 |
| Zod | 112K | 0.009ms | 0.015ms | 1000 |

#### Validate Number

```
🥇 Superstruct        ████████████████████████████████████████   1.4M ops/sec
🥈 Joi                █████████                                  297K ops/sec
🥉 Yup                ███████                                    223K ops/sec
 Zod                █████                                      158K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.4M | 0.001ms | 0.003ms | 1000 |
| Joi | 297K | 0.003ms | 0.009ms | 1000 |
| Yup | 223K | 0.004ms | 0.030ms | 1000 |
| Zod | 158K | 0.006ms | 0.014ms | 1000 |

#### Validate String

```
🥇 Superstruct        ████████████████████████████████████████   1.1M ops/sec
🥈 Joi                ██████████                                 269K ops/sec
🥉 Yup                █████████                                  249K ops/sec
 Zod                ████                                       108K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.1M | 0.001ms | 0.005ms | 1000 |
| Joi | 269K | 0.004ms | 0.014ms | 1000 |
| Yup | 249K | 0.004ms | 0.015ms | 1000 |
| Zod | 108K | 0.009ms | 0.020ms | 1000 |

### 03-object-validation

#### Validate Array

```
🥇 Superstruct        ████████████████████████████████████████   101K ops/sec
🥈 Zod                ██████████████████                         47K ops/sec
🥉 Joi                ██████████████████                         47K ops/sec
 Yup                ██████████████                             36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 101K | 0.010ms | 0.019ms | 1000 |
| Zod | 47K | 0.021ms | 0.043ms | 1000 |
| Joi | 47K | 0.021ms | 0.042ms | 1000 |
| Yup | 36K | 0.028ms | 0.053ms | 1000 |

#### Validate Flat Object

```
🥇 Superstruct        ████████████████████████████████████████   194K ops/sec
🥈 Yup                ███████████                                54K ops/sec
🥉 Joi                ██████████                                 48K ops/sec
 Zod                █████                                      25K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 194K | 0.005ms | 0.013ms | 1000 |
| Yup | 54K | 0.019ms | 0.041ms | 1000 |
| Joi | 48K | 0.021ms | 0.038ms | 1000 |
| Zod | 25K | 0.039ms | 0.085ms | 1000 |

#### Validate Nested Object

```
🥇 Superstruct        ████████████████████████████████████████   124K ops/sec
🥈 Yup                ████████████                               39K ops/sec
🥉 Joi                ███████████                                35K ops/sec
 Zod                █████                                      14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 124K | 0.008ms | 0.014ms | 1000 |
| Yup | 39K | 0.026ms | 0.047ms | 1000 |
| Joi | 35K | 0.028ms | 0.050ms | 1000 |
| Zod | 14K | 0.071ms | 0.117ms | 1000 |

### 04-error-handling

#### Catch Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   280K ops/sec
🥈 Joi                █████████████                              92K ops/sec
🥉 Yup                █████████████                              90K ops/sec
 Zod                █████████                                  62K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 280K | 0.004ms | 0.008ms | 1000 |
| Joi | 92K | 0.011ms | 0.023ms | 1000 |
| Yup | 90K | 0.011ms | 0.024ms | 1000 |
| Zod | 62K | 0.016ms | 0.033ms | 1000 |

#### Multiple Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   332K ops/sec
🥈 Joi                ██████                                     50K ops/sec
🥉 Yup                █████                                      38K ops/sec
 Zod                ███                                        26K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 332K | 0.003ms | 0.009ms | 1000 |
| Joi | 50K | 0.020ms | 0.038ms | 1000 |
| Yup | 38K | 0.026ms | 0.040ms | 1000 |
| Zod | 26K | 0.038ms | 0.052ms | 1000 |



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
cd benchmarks/validation

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

**Total**: 10 tests × 4 libraries = 40 benchmark runs

---

## 🚀 Libraries Tested

- **[Superstruct](git://github.com/ianstormtaylor/superstruct)** (`superstruct`) v2.0.2 • 3.44 KB gzip - [📦 npm](https://www.npmjs.com/package/superstruct) • [📊 bundle size](https://bundlephobia.com/package/superstruct)
- **[Joi](git://github.com/hapijs/joi)** (`joi`) v18.0.1 • 52.64 KB gzip - [📦 npm](https://www.npmjs.com/package/joi) • [📊 bundle size](https://bundlephobia.com/package/joi)
- **[Yup](https://github.com/jquense/yup)** (`yup`) v1.7.1 • 13.33 KB gzip - [📦 npm](https://www.npmjs.com/package/yup) • [📊 bundle size](https://bundlephobia.com/package/yup)
- **[Zod](https://github.com/colinhacks/zod)** (`zod`) v4.1.12 • 52.88 KB gzip - [📦 npm](https://www.npmjs.com/package/zod) • [📊 bundle size](https://bundlephobia.com/package/zod)

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

*Generated on 2025-11-18T05:40:58.924Z*

[⬆️ Back to Top](#validation-benchmarks) • [⬅️ Main README](../../README.md)

</div>
