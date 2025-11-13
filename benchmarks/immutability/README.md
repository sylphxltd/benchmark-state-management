<div align="center">

# Immutability Benchmarks

Comprehensive performance benchmarks for React immutability libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-7-green?style=flat-square)](#-libraries-tested)
[![Tests](https://img.shields.io/badge/Tests-18-orange?style=flat-square)](#-test-coverage)

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

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 99.8/100 score
- **⚖️ Best Balance**: Craft - Great performance (46.8/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 99.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 46.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/craft)


**Immutability Helper** (Score: 26.8/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 18.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 17.4/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/immer)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 99.8/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](#)** | 46.8/100 | 47% of fastest | [📦](https://www.npmjs.com/package/craft) [📊](https://bundlephobia.com/package/craft) |
| 🥉 3 | **[Immutability Helper](#)** | 26.8/100 | 27% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](#)** | 18.0/100 | 18% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](#)** | 17.4/100 | 17% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](#)** | 9.1/100 | 9% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](#)** | 4.3/100 | 4% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **99.8** | N/A | State management solution... | General purpose... |
| **[Craft](#)** | **46.8** | **2.76 KB** | State management solution... | General purpose... |
| **[Immutability Helper](#)** | **26.8** | **1.65 KB** | State management solution... | General purpose... |
| **[Mutative](#)** | **18.0** | **7.16 KB** | State management solution... | General purpose... |
| **[Immer](#)** | **17.4** | **4.70 KB** | State management solution... | General purpose... |
| **[Immutable.js](#)** | **9.1** | **17.74 KB** | State management solution... | General purpose... |
| **[Seamless Immutable](#)** | **4.3** | **2.71 KB** | State management solution... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   237K ops/sec
🥈 Immutability Helper ██████████████████████████████████████     225K ops/sec
🥉 Craft              █████████████████████████████████          196K ops/sec
 Immutable.js       █████████████████████████                  149K ops/sec
 Immer              ████████████████████                       116K ops/sec
 Seamless Immutable ██████████████████                         108K ops/sec
 Mutative           ████████████████                           95K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 237K | 0.004ms | 0.007ms | 1000 |
| Immutability Helper | 225K | 0.004ms | 0.017ms | 1000 |
| Craft | 196K | 0.005ms | 0.022ms | 1000 |
| Immutable.js | 149K | 0.007ms | 0.024ms | 1000 |
| Immer | 116K | 0.009ms | 0.030ms | 1000 |
| Seamless Immutable | 108K | 0.009ms | 0.030ms | 1000 |
| Mutative | 95K | 0.011ms | 0.035ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   968K ops/sec
🥈 Immutability Helper ████████████                               301K ops/sec
🥉 Craft              ███████                                    171K ops/sec
 Immutable.js       ███                                        78K ops/sec
 Mutative           ███                                        76K ops/sec
 Immer              ███                                        75K ops/sec
 Seamless Immutable ██                                         55K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 968K | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 301K | 0.003ms | 0.011ms | 1000 |
| Craft | 171K | 0.006ms | 0.025ms | 1000 |
| Immutable.js | 78K | 0.013ms | 0.041ms | 1000 |
| Mutative | 76K | 0.013ms | 0.036ms | 1000 |
| Immer | 75K | 0.013ms | 0.038ms | 1000 |
| Seamless Immutable | 55K | 0.018ms | 0.047ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   1.7M ops/sec
🥈 Immutability Helper ██████████                                 433K ops/sec
🥉 Immutable.js       █████                                      229K ops/sec
 Craft              ███                                        139K ops/sec
 Immer              ███                                        132K ops/sec
 Mutative           ███                                        131K ops/sec
 Seamless Immutable █                                          61K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.7M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 433K | 0.002ms | 0.016ms | 1000 |
| Immutable.js | 229K | 0.004ms | 0.022ms | 1000 |
| Craft | 139K | 0.007ms | 0.027ms | 1000 |
| Immer | 132K | 0.008ms | 0.030ms | 1000 |
| Mutative | 131K | 0.008ms | 0.026ms | 1000 |
| Seamless Immutable | 61K | 0.016ms | 0.047ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   932K ops/sec
🥈 Immutability Helper ██████████████████████                     521K ops/sec
🥉 Craft              ████████                                   182K ops/sec
 Immutable.js       ██████                                     133K ops/sec
 Immer              ████                                       93K ops/sec
 Mutative           ███                                        78K ops/sec
 Seamless Immutable ██                                         57K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 932K | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 521K | 0.002ms | 0.008ms | 1000 |
| Craft | 182K | 0.006ms | 0.022ms | 1000 |
| Immutable.js | 133K | 0.007ms | 0.025ms | 1000 |
| Immer | 93K | 0.011ms | 0.035ms | 1000 |
| Mutative | 78K | 0.013ms | 0.043ms | 1000 |
| Seamless Immutable | 57K | 0.017ms | 0.036ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   1.4M ops/sec
🥈 Immutability Helper ████████                                   288K ops/sec
🥉 Craft              ██████                                     225K ops/sec
 Immer              ████                                       136K ops/sec
 Mutative           ███                                        114K ops/sec
 Immutable.js       ██                                         79K ops/sec
 Seamless Immutable █                                          37K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.4M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 288K | 0.003ms | 0.010ms | 1000 |
| Craft | 225K | 0.004ms | 0.016ms | 1000 |
| Immer | 136K | 0.007ms | 0.026ms | 1000 |
| Mutative | 114K | 0.009ms | 0.033ms | 1000 |
| Immutable.js | 79K | 0.013ms | 0.046ms | 1000 |
| Seamless Immutable | 37K | 0.027ms | 0.060ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   1.5M ops/sec
🥈 Craft              █████                                      189K ops/sec
🥉 Immutability Helper ████                                       167K ops/sec
 Immutable.js       ██                                         88K ops/sec
 Immer              ██                                         88K ops/sec
 Mutative           ██                                         69K ops/sec
 Seamless Immutable █                                          36K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.5M | 0.001ms | 0.002ms | 1000 |
| Craft | 189K | 0.005ms | 0.013ms | 1000 |
| Immutability Helper | 167K | 0.006ms | 0.019ms | 1000 |
| Immutable.js | 88K | 0.011ms | 0.030ms | 1000 |
| Immer | 88K | 0.011ms | 0.029ms | 1000 |
| Mutative | 69K | 0.015ms | 0.043ms | 1000 |
| Seamless Immutable | 36K | 0.028ms | 0.059ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   1.3M ops/sec
🥈 Craft              ██████                                     218K ops/sec
🥉 Immutability Helper ████                                       123K ops/sec
 Immer              ███                                        87K ops/sec
 Mutative           ██                                         76K ops/sec
 Immutable.js       ██                                         68K ops/sec
 Seamless Immutable █                                          33K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 1.3M | 0.001ms | 0.002ms | 1000 |
| Craft | 218K | 0.005ms | 0.016ms | 1000 |
| Immutability Helper | 123K | 0.008ms | 0.026ms | 1000 |
| Immer | 87K | 0.011ms | 0.035ms | 1000 |
| Mutative | 76K | 0.013ms | 0.039ms | 1000 |
| Immutable.js | 68K | 0.015ms | 0.031ms | 1000 |
| Seamless Immutable | 33K | 0.030ms | 0.071ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Mutative           ████████████████████████████████████████   36K ops/sec
🥈 Native Spread      ███████████████████████████████████████    36K ops/sec
🥉 Immutability Helper ████████████                               11K ops/sec
 Craft              ██████                                     6K ops/sec
 Immer              ██                                         2K ops/sec
 Immutable.js       █                                          1K ops/sec
 Seamless Immutable █                                          460 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Mutative | 36K | 0.027ms | 0.089ms | 1000 |
| Native Spread | 36K | 0.028ms | 0.073ms | 1000 |
| Immutability Helper | 11K | 0.090ms | 0.135ms | 1000 |
| Craft | 6K | 0.178ms | 0.376ms | 1000 |
| Immer | 2K | 0.593ms | 1.317ms | 1000 |
| Immutable.js | 1K | 0.924ms | 1.776ms | 1000 |
| Seamless Immutable | 460 | 2.172ms | 3.456ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   515K ops/sec
🥈 Immer              ███████                                    91K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 515K | 0.002ms | 0.006ms | 1000 |
| Immer | 91K | 0.011ms | 0.037ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   137K ops/sec
🥈 Immer              ████████████████████                       68K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 137K | 0.007ms | 0.029ms | 1000 |
| Immer | 68K | 0.015ms | 0.046ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   194K ops/sec
🥈 Immer              █████████████                              64K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 194K | 0.005ms | 0.016ms | 1000 |
| Immer | 64K | 0.016ms | 0.038ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   173K ops/sec
🥈 Immer              ████████████████                           70K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 173K | 0.006ms | 0.017ms | 1000 |
| Immer | 70K | 0.014ms | 0.032ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   55K ops/sec
🥈 Mutative           ███████████████████                        27K ops/sec
🥉 Immer              ████████                                   11K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 55K | 0.018ms | 0.046ms | 1000 |
| Mutative | 27K | 0.037ms | 0.088ms | 1000 |
| Immer | 11K | 0.093ms | 0.146ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   363K ops/sec
🥈 Mutative           ██████████████                             126K ops/sec
🥉 Immer              ██████████                                 93K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 363K | 0.003ms | 0.011ms | 1000 |
| Mutative | 126K | 0.008ms | 0.023ms | 1000 |
| Immer | 93K | 0.011ms | 0.037ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   485K ops/sec
🥈 Mutative           ██████████                                 117K ops/sec
🥉 Immer              ████████                                   102K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 485K | 0.002ms | 0.006ms | 1000 |
| Mutative | 117K | 0.009ms | 0.028ms | 1000 |
| Immer | 102K | 0.010ms | 0.029ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   358K ops/sec
🥈 Immer              ██████████████                             128K ops/sec
🥉 Mutative           ████████████                               104K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 358K | 0.003ms | 0.012ms | 1000 |
| Immer | 128K | 0.008ms | 0.025ms | 1000 |
| Mutative | 104K | 0.010ms | 0.031ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   441K ops/sec
🥈 Immer              ███████████████                            167K ops/sec
🥉 Mutative           ███████████                                119K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 441K | 0.002ms | 0.010ms | 1000 |
| Immer | 167K | 0.006ms | 0.019ms | 1000 |
| Mutative | 119K | 0.008ms | 0.026ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   75K ops/sec
🥈 Mutative           ███████████                                22K ops/sec
🥉 Immer              ███████████                                20K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 75K | 0.013ms | 0.038ms | 1000 |
| Mutative | 22K | 0.046ms | 0.129ms | 1000 |
| Immer | 20K | 0.050ms | 0.092ms | 1000 |


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
cd benchmarks/immutability

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

**Total**: 18 tests × 7 libraries = 126 benchmark runs

---

## 🚀 Libraries Tested

- **[Native Spread](#)** (`native`)  - [📦 npm](https://www.npmjs.com/package/native-spread) • [📊 bundle size](https://bundlephobia.com/package/native-spread)
- **[Craft](#)** (`@sylphx/craft`) v1.2.1 • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/craft) • [📊 bundle size](https://bundlephobia.com/package/craft)
- **[Immutability Helper](#)** (`immutability-helper`) v3.1.1 • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Mutative](#)** (`mutative`) v1.3.0 • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immer](#)** (`immer`) v10.2.0 • 4.70 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Immutable.js](#)** (`immutable`) v5.1.4 • 17.74 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](#)** (`seamless-immutable`) v7.1.4 • 2.71 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

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

*Generated on 2025-11-13T12:06:21.353Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
