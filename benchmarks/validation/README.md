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
- **⚖️ Best Balance**: Yup - Great performance (11.4/100) with good ecosystem
- **🎯 Popular Choice**: Joi - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Superstruct** (Score: 100.0/100)
- A simple and composable way to validate data in JavaScript (and TypeScript).
- **Best for**: General purpose state management
- [GitHub](git://github.com/ianstormtaylor/superstruct) • [npm](https://www.npmjs.com/package/superstruct)


**Yup** (Score: 11.4/100)
- Dead simple Object schema validation
- **Best for**: General purpose state management
- [GitHub](https://github.com/jquense/yup) • [npm](https://www.npmjs.com/package/yup)


**Joi** (Score: 10.5/100)
- Object schema validation
- **Best for**: General purpose state management
- [GitHub](git://github.com/hapijs/joi) • [npm](https://www.npmjs.com/package/joi)


**Zod** (Score: 7.4/100)
- TypeScript-first schema declaration and validation library with static type inference
- **Best for**: General purpose state management
- [GitHub](https://github.com/colinhacks/zod) • [npm](https://www.npmjs.com/package/zod)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 10 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/superstruct) [📊](https://bundlephobia.com/package/superstruct) |
| 🥈 2 | **[Yup](https://github.com/jquense/yup)** | 11.4/100 | 11% of fastest | [📦](https://www.npmjs.com/package/yup) [📊](https://bundlephobia.com/package/yup) |
| 🥉 3 | **[Joi](git://github.com/hapijs/joi)** | 10.5/100 | 10% of fastest | [📦](https://www.npmjs.com/package/joi) [📊](https://bundlephobia.com/package/joi) |
|  4 | **[Zod](https://github.com/colinhacks/zod)** | 7.4/100 | 7% of fastest | [📦](https://www.npmjs.com/package/zod) [📊](https://bundlephobia.com/package/zod) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Superstruct](git://github.com/ianstormtaylor/superstruct)** | **100.0** | **3.44 KB** | A simple and composable way to validate data in Ja... | General purpose... |
| **[Yup](https://github.com/jquense/yup)** | **11.4** | **13.33 KB** | Dead simple Object schema validation... | General purpose... |
| **[Joi](git://github.com/hapijs/joi)** | **10.5** | **52.64 KB** | Object schema validation... | General purpose... |
| **[Zod](https://github.com/colinhacks/zod)** | **7.4** | **52.88 KB** | TypeScript-first schema declaration and validation... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-schema-creation

#### Create Complex Schema

```
🥇 Superstruct        ████████████████████████████████████████   902K ops/sec
🥈 Yup                █                                          21K ops/sec
🥉 Zod                █                                          17K ops/sec
 Joi                                                           10K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 902K | 0.002ms | 0.004ms | 1000 |
| Yup | 21K | 0.057ms | 0.098ms | 1000 |
| Zod | 17K | 0.062ms | 0.129ms | 1000 |
| Joi | 10K | 0.115ms | 0.204ms | 1000 |

#### Create Simple Schema

```
🥇 Superstruct        ████████████████████████████████████████   2.9M ops/sec
🥈 Zod                █                                          98K ops/sec
🥉 Yup                █                                          55K ops/sec
 Joi                █                                          54K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 2.9M | 0.000ms | 0.001ms | 1000 |
| Zod | 98K | 0.011ms | 0.025ms | 1000 |
| Yup | 55K | 0.019ms | 0.040ms | 1000 |
| Joi | 54K | 0.019ms | 0.037ms | 1000 |

### 02-primitive-validation

#### Validate Email

```
🥇 Superstruct        ████████████████████████████████████████   1.0M ops/sec
🥈 Joi                ███████                                    175K ops/sec
🥉 Yup                █████                                      135K ops/sec
 Zod                ██                                         51K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.0M | 0.001ms | 0.004ms | 1000 |
| Joi | 175K | 0.006ms | 0.010ms | 1000 |
| Yup | 135K | 0.008ms | 0.013ms | 1000 |
| Zod | 51K | 0.020ms | 0.036ms | 1000 |

#### Validate Number

```
🥇 Superstruct        ████████████████████████████████████████   1.1M ops/sec
🥈 Joi                ██████                                     163K ops/sec
🥉 Yup                ██████                                     162K ops/sec
 Zod                ███                                        83K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.1M | 0.001ms | 0.003ms | 1000 |
| Joi | 163K | 0.006ms | 0.011ms | 1000 |
| Yup | 162K | 0.006ms | 0.013ms | 1000 |
| Zod | 83K | 0.013ms | 0.031ms | 1000 |

#### Validate String

```
🥇 Superstruct        ████████████████████████████████████████   1.1M ops/sec
🥈 Yup                ██████                                     168K ops/sec
🥉 Joi                ███                                        79K ops/sec
 Zod                ██                                         47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 1.1M | 0.001ms | 0.003ms | 1000 |
| Yup | 168K | 0.006ms | 0.010ms | 1000 |
| Joi | 79K | 0.013ms | 0.031ms | 1000 |
| Zod | 47K | 0.023ms | 0.047ms | 1000 |

### 03-object-validation

#### Validate Array

```
🥇 Superstruct        ████████████████████████████████████████   41K ops/sec
🥈 Zod                █████████████████                          17K ops/sec
🥉 Joi                ████████████████                           17K ops/sec
 Yup                █████████████                              13K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 41K | 0.026ms | 0.040ms | 1000 |
| Zod | 17K | 0.060ms | 0.127ms | 1000 |
| Joi | 17K | 0.062ms | 0.095ms | 1000 |
| Yup | 13K | 0.078ms | 0.132ms | 1000 |

#### Validate Flat Object

```
🥇 Superstruct        ████████████████████████████████████████   106K ops/sec
🥈 Yup                ██████                                     17K ops/sec
🥉 Joi                ██████                                     17K ops/sec
 Zod                ████                                       10K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 106K | 0.010ms | 0.016ms | 1000 |
| Yup | 17K | 0.070ms | 0.126ms | 1000 |
| Joi | 17K | 0.061ms | 0.087ms | 1000 |
| Zod | 10K | 0.106ms | 0.197ms | 1000 |

#### Validate Nested Object

```
🥇 Superstruct        ████████████████████████████████████████   52K ops/sec
🥈 Yup                ███████████                                15K ops/sec
🥉 Joi                ████████                                   11K ops/sec
 Zod                ████                                       5K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 52K | 0.020ms | 0.033ms | 1000 |
| Yup | 15K | 0.074ms | 0.140ms | 1000 |
| Joi | 11K | 0.095ms | 0.138ms | 1000 |
| Zod | 5K | 0.202ms | 0.286ms | 1000 |

### 04-error-handling

#### Catch Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   107K ops/sec
🥈 Joi                ██████████████                             37K ops/sec
🥉 Yup                ████████████                               32K ops/sec
 Zod                ████████                                   22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 107K | 0.011ms | 0.029ms | 1000 |
| Joi | 37K | 0.029ms | 0.066ms | 1000 |
| Yup | 32K | 0.033ms | 0.074ms | 1000 |
| Zod | 22K | 0.049ms | 0.106ms | 1000 |

#### Multiple Validation Errors

```
🥇 Superstruct        ████████████████████████████████████████   179K ops/sec
🥈 Joi                ███                                        15K ops/sec
🥉 Yup                ██                                         11K ops/sec
 Zod                ██                                         9K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Superstruct | 179K | 0.006ms | 0.017ms | 1000 |
| Joi | 15K | 0.070ms | 0.113ms | 1000 |
| Yup | 11K | 0.094ms | 0.154ms | 1000 |
| Zod | 9K | 0.111ms | 0.184ms | 1000 |


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
- **[Yup](https://github.com/jquense/yup)** (`yup`) v1.7.1 • 13.33 KB gzip - [📦 npm](https://www.npmjs.com/package/yup) • [📊 bundle size](https://bundlephobia.com/package/yup)
- **[Joi](git://github.com/hapijs/joi)** (`joi`) v18.0.1 • 52.64 KB gzip - [📦 npm](https://www.npmjs.com/package/joi) • [📊 bundle size](https://bundlephobia.com/package/joi)
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

*Generated on 2025-11-13T17:19:26.828Z*

[⬆️ Back to Top](#validation-benchmarks) • [⬅️ Main README](../../README.md)

</div>
