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
- **⚖️ Best Balance**: Joi - Great performance (26.7/100) with good ecosystem
- **🎯 Popular Choice**: Yup - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Superstruct** (Score: 100.0/100)
- A simple and composable way to validate data in JavaScript (and TypeScript).
- **Best for**: General purpose state management
- [GitHub](git://github.com/ianstormtaylor/superstruct) • [npm](https://www.npmjs.com/package/superstruct)


**Joi** (Score: 26.7/100)
- Object schema validation
- **Best for**: General purpose state management
- [GitHub](git://github.com/hapijs/joi) • [npm](https://www.npmjs.com/package/joi)


**Yup** (Score: 23.9/100)
- Dead simple Object schema validation
- **Best for**: General purpose state management
- [GitHub](https://github.com/jquense/yup) • [npm](https://www.npmjs.com/package/yup)


**Zod** (Score: 16.9/100)
- TypeScript-first schema declaration and validation library with static type inference
- **Best for**: General purpose state management
- [GitHub](https://github.com/colinhacks/zod) • [npm](https://www.npmjs.com/package/zod)


</details>

---

## 📊 Overall Performance Rankings

Based on **weighted geometric mean** of normalized scores across all 10 tests.

*Scores use variance-based weighting to prevent unstable tests from dominating results. See [Methodology](#-methodology) for details.*

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/superstruct) [📊](https://bundlephobia.com/package/superstruct) |
| 🥈 2 | **[Joi](git://github.com/hapijs/joi)** | 26.7/100 | 27% of fastest | [📦](https://www.npmjs.com/package/joi) [📊](https://bundlephobia.com/package/joi) |
| 🥉 3 | **[Yup](https://github.com/jquense/yup)** | 23.9/100 | 24% of fastest | [📦](https://www.npmjs.com/package/yup) [📊](https://bundlephobia.com/package/yup) |
|  4 | **[Zod](https://github.com/colinhacks/zod)** | 16.9/100 | 17% of fastest | [📦](https://www.npmjs.com/package/zod) [📊](https://bundlephobia.com/package/zod) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | **100.0** | **3.44 KB** | A simple and composable way to validate data in Ja... | General purpose... |
| **[Joi](git://github.com/hapijs/joi)** | **26.7** | **52.64 KB** | Object schema validation... | General purpose... |
| **[Yup](https://github.com/jquense/yup)** | **23.9** | **13.33 KB** | Dead simple Object schema validation... | General purpose... |
| **[Zod](https://github.com/colinhacks/zod)** | **16.9** | **52.88 KB** | TypeScript-first schema declaration and validation... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-schema-creation

#### Create Complex Schema

```
🥇 Superstruct        ████████████████████████████████████████   615K ops/sec
🥈 Yup                ██                                         34K ops/sec
🥉 Zod                █                                          18K ops/sec
 Joi                █                                          14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 615K | 0.002ms | 0.003ms | 1000 |
| Yup | 34K | 0.032ms | 0.052ms | 1000 |
| Zod | 18K | 0.063ms | 0.129ms | 1000 |
| Joi | 14K | 0.076ms | 0.163ms | 1000 |

#### Create Simple Schema

```
🥇 Superstruct        ████████████████████████████████████████   2.4M ops/sec
🥈 Zod                ██                                         102K ops/sec
🥉 Yup                ██                                         95K ops/sec
 Joi                █                                          62K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 2.4M | 0.000ms | 0.001ms | 1000 |
| Zod | 102K | 0.011ms | 0.023ms | 1000 |
| Yup | 95K | 0.012ms | 0.024ms | 1000 |
| Joi | 62K | 0.017ms | 0.026ms | 1000 |

### 02-primitive-validation

#### Validate Email

```
🥇 Superstruct        ████████████████████████████████████████   1.1M ops/sec
🥈 Yup                █████████                                  260K ops/sec
🥉 Joi                ███████                                    200K ops/sec
 Zod                ██                                         65K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.1M | 0.001ms | 0.003ms | 1000 |
| Yup | 260K | 0.004ms | 0.006ms | 1000 |
| Joi | 200K | 0.005ms | 0.016ms | 1000 |
| Zod | 65K | 0.016ms | 0.028ms | 1000 |

#### Validate Number

```
🥇 Superstruct        ████████████████████████████████████████   1.1M ops/sec
🥈 Joi                ██████                                     153K ops/sec
🥉 Yup                █████                                      130K ops/sec
 Zod                ███                                        73K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.1M | 0.001ms | 0.003ms | 1000 |
| Joi | 153K | 0.007ms | 0.014ms | 1000 |
| Yup | 130K | 0.009ms | 0.017ms | 1000 |
| Zod | 73K | 0.015ms | 0.034ms | 1000 |

#### Validate String

```
🥇 Superstruct        ████████████████████████████████████████   1.0M ops/sec
🥈 Yup                ███████                                    176K ops/sec
🥉 Joi                █████                                      129K ops/sec
 Zod                ██                                         56K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.0M | 0.001ms | 0.003ms | 1000 |
| Yup | 176K | 0.006ms | 0.010ms | 1000 |
| Joi | 129K | 0.009ms | 0.017ms | 1000 |
| Zod | 56K | 0.019ms | 0.029ms | 1000 |

### 03-object-validation

#### Validate Array

```
🥇 Superstruct        ████████████████████████████████████████   43K ops/sec
🥈 Joi                ██████████████████████                     24K ops/sec
🥉 Zod                █████████████████████                      23K ops/sec
 Yup                ██████████████                             15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 43K | 0.024ms | 0.037ms | 1000 |
| Joi | 24K | 0.043ms | 0.063ms | 1000 |
| Zod | 23K | 0.047ms | 0.081ms | 1000 |
| Yup | 15K | 0.075ms | 0.154ms | 1000 |

#### Validate Flat Object

```
🥇 Superstruct        ████████████████████████████████████████   116K ops/sec
🥈 Yup                ██████████                                 28K ops/sec
🥉 Joi                ████████                                   22K ops/sec
 Zod                █████                                      13K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 116K | 0.009ms | 0.018ms | 1000 |
| Yup | 28K | 0.038ms | 0.057ms | 1000 |
| Joi | 22K | 0.047ms | 0.078ms | 1000 |
| Zod | 13K | 0.079ms | 0.119ms | 1000 |

#### Validate Nested Object

```
🥇 Superstruct        ████████████████████████████████████████   58K ops/sec
🥈 Yup                ████████████                               17K ops/sec
🥉 Joi                ███████████                                15K ops/sec
 Zod                ████                                       6K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 58K | 0.018ms | 0.028ms | 1000 |
| Yup | 17K | 0.066ms | 0.123ms | 1000 |
| Joi | 15K | 0.068ms | 0.103ms | 1000 |
| Zod | 6K | 0.176ms | 0.286ms | 1000 |

### 04-error-handling

#### Catch Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   141K ops/sec
🥈 Joi                ███████████████                            53K ops/sec
🥉 Yup                █████████████                              45K ops/sec
 Zod                ████████                                   27K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 141K | 0.007ms | 0.018ms | 1000 |
| Joi | 53K | 0.020ms | 0.040ms | 1000 |
| Yup | 45K | 0.023ms | 0.039ms | 1000 |
| Zod | 27K | 0.039ms | 0.074ms | 1000 |

#### Multiple Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   183K ops/sec
🥈 Joi                ████                                       18K ops/sec
🥉 Yup                ███                                        15K ops/sec
 Zod                ██                                         11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 183K | 0.006ms | 0.016ms | 1000 |
| Joi | 18K | 0.063ms | 0.127ms | 1000 |
| Yup | 15K | 0.072ms | 0.140ms | 1000 |
| Zod | 11K | 0.097ms | 0.140ms | 1000 |


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

*Generated on 2025-11-13T23:06:28.245Z*

[⬆️ Back to Top](#validation-benchmarks) • [⬅️ Main README](../../README.md)

</div>
