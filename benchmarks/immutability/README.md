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

- **⚡ Maximum Performance**: Native Spread - Fastest overall with 100.0/100 score
- **⚖️ Best Balance**: Craft - Great performance (28.4/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 100.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 28.4/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 12.0/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 11.9/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 8.7/100)
- Create the next immutable state by mutating the current one
- **Best for**: General purpose state management
- [GitHub](https://github.com/immerjs/immer) • [npm](https://www.npmjs.com/package/immer)


</details>

---

## 📊 Overall Performance Rankings

Based on geometric mean of normalized scores across all 18 tests.

| Rank | Library | Overall Score | Relative Performance | Links |
|:----:|---------|--------------|---------------------|:-----:|
| 🥇 1 | **[Native Spread](#)** | 100.0/100 | 100% of fastest | [📦](https://www.npmjs.com/package/native-spread) [📊](https://bundlephobia.com/package/native-spread) |
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 28.4/100 | 28% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 12.0/100 | 12% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 11.9/100 | 12% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](https://github.com/immerjs/immer)** | 8.7/100 | 9% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 7.2/100 | 7% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 0.8/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **100.0** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **28.4** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **12.0** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **11.9** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **8.7** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **7.2** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **0.8** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   11.2M ops/sec
🥈 Immutable.js       ██████████                                 2.9M ops/sec
🥉 Craft              ██████                                     1.5M ops/sec
 Mutative           █████                                      1.4M ops/sec
 Immutability Helper █████                                      1.3M ops/sec
 Immer              ███                                        879K ops/sec
 Seamless Immutable █                                          281K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 11.2M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.9M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.5M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.4M | 0.001ms | 0.002ms | 1000 |
| Immutability Helper | 1.3M | 0.001ms | 0.001ms | 1000 |
| Immer | 879K | 0.001ms | 0.003ms | 1000 |
| Seamless Immutable | 281K | 0.004ms | 0.007ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   7.4M ops/sec
🥈 Immutability Helper █████                                      971K ops/sec
🥉 Craft              ████                                       664K ops/sec
 Mutative           ███                                        544K ops/sec
 Immutable.js       ██                                         418K ops/sec
 Immer              ██                                         324K ops/sec
 Seamless Immutable                                            86K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.4M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 971K | 0.001ms | 0.002ms | 1000 |
| Craft | 664K | 0.002ms | 0.003ms | 1000 |
| Mutative | 544K | 0.002ms | 0.006ms | 1000 |
| Immutable.js | 418K | 0.002ms | 0.004ms | 1000 |
| Immer | 324K | 0.003ms | 0.006ms | 1000 |
| Seamless Immutable | 86K | 0.012ms | 0.019ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   17.5M ops/sec
🥈 Immutability Helper ██████████                                 4.6M ops/sec
🥉 Immutable.js       █████████                                  4.1M ops/sec
 Craft              █                                          434K ops/sec
 Mutative           █                                          366K ops/sec
 Immer              █                                          300K ops/sec
 Seamless Immutable                                            71K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 17.5M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 4.6M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.1M | 0.000ms | 0.001ms | 1000 |
| Craft | 434K | 0.002ms | 0.003ms | 1000 |
| Mutative | 366K | 0.003ms | 0.006ms | 1000 |
| Immer | 300K | 0.003ms | 0.006ms | 1000 |
| Seamless Immutable | 71K | 0.015ms | 0.024ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   6.1M ops/sec
🥈 Immutability Helper ████████                                   1.2M ops/sec
🥉 Immutable.js       ███████                                    1.1M ops/sec
 Craft              ██                                         286K ops/sec
 Mutative           █                                          182K ops/sec
 Immer              █                                          168K ops/sec
 Seamless Immutable                                            72K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.1M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.2M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.002ms | 1000 |
| Craft | 286K | 0.004ms | 0.008ms | 1000 |
| Mutative | 182K | 0.006ms | 0.012ms | 1000 |
| Immer | 168K | 0.006ms | 0.012ms | 1000 |
| Seamless Immutable | 72K | 0.015ms | 0.021ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   9.5M ops/sec
🥈 Immutability Helper ███                                        667K ops/sec
🥉 Craft              ██                                         506K ops/sec
 Immutable.js       █                                          325K ops/sec
 Mutative           █                                          325K ops/sec
 Immer              █                                          234K ops/sec
 Seamless Immutable                                            49K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 9.5M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 667K | 0.002ms | 0.002ms | 1000 |
| Craft | 506K | 0.002ms | 0.003ms | 1000 |
| Immutable.js | 325K | 0.003ms | 0.004ms | 1000 |
| Mutative | 325K | 0.003ms | 0.006ms | 1000 |
| Immer | 234K | 0.004ms | 0.007ms | 1000 |
| Seamless Immutable | 49K | 0.021ms | 0.038ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   4.9M ops/sec
🥈 Immutability Helper ████                                       513K ops/sec
🥉 Craft              ███                                        349K ops/sec
 Immutable.js       ███                                        332K ops/sec
 Mutative           ██                                         190K ops/sec
 Immer              █                                          135K ops/sec
 Seamless Immutable                                            49K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 4.9M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 513K | 0.002ms | 0.003ms | 1000 |
| Craft | 349K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 332K | 0.003ms | 0.005ms | 1000 |
| Mutative | 190K | 0.005ms | 0.009ms | 1000 |
| Immer | 135K | 0.008ms | 0.012ms | 1000 |
| Seamless Immutable | 49K | 0.021ms | 0.029ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   6.3M ops/sec
🥈 Immutability Helper ███                                        504K ops/sec
🥉 Craft              ██                                         353K ops/sec
 Immutable.js       ██                                         253K ops/sec
 Mutative           █                                          168K ops/sec
 Immer              █                                          158K ops/sec
 Seamless Immutable                                            39K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.3M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 504K | 0.002ms | 0.003ms | 1000 |
| Craft | 353K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 253K | 0.004ms | 0.006ms | 1000 |
| Mutative | 168K | 0.006ms | 0.010ms | 1000 |
| Immer | 158K | 0.007ms | 0.010ms | 1000 |
| Seamless Immutable | 39K | 0.026ms | 0.036ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   96K ops/sec
🥈 Mutative           ███████████████████████████████████        85K ops/sec
🥉 Immutability Helper ████                                       9K ops/sec
 Craft              ██                                         5K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            453 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 96K | 0.012ms | 0.021ms | 1000 |
| Mutative | 85K | 0.013ms | 0.024ms | 1000 |
| Immutability Helper | 9K | 0.113ms | 0.139ms | 1000 |
| Craft | 5K | 0.224ms | 0.254ms | 1000 |
| Immer | 2K | 0.665ms | 1.411ms | 1000 |
| Immutable.js | 1K | 0.924ms | 1.950ms | 1000 |
| Seamless Immutable | 453 | 2.238ms | 3.477ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.7M ops/sec
🥈 Immer              ██                                         163K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.7M | 0.000ms | 0.001ms | 1000 |
| Immer | 163K | 0.006ms | 0.010ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   301K ops/sec
🥈 Immer              ███████████████████████                    171K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 301K | 0.003ms | 0.009ms | 1000 |
| Immer | 171K | 0.006ms | 0.010ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   269K ops/sec
🥈 Immer              █████████████                              87K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 269K | 0.004ms | 0.007ms | 1000 |
| Immer | 87K | 0.012ms | 0.021ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   249K ops/sec
🥈 Immer              ██████████████                             87K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 249K | 0.005ms | 0.009ms | 1000 |
| Immer | 87K | 0.012ms | 0.019ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   71K ops/sec
🥈 Mutative           ████████████████████████████████           56K ops/sec
🥉 Immer              ████████                                   15K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 71K | 0.016ms | 0.026ms | 1000 |
| Mutative | 56K | 0.020ms | 0.040ms | 1000 |
| Immer | 15K | 0.075ms | 0.160ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   1.2M ops/sec
🥈 Mutative           █████████████                              386K ops/sec
🥉 Immer              ███████                                    219K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.2M | 0.001ms | 0.003ms | 1000 |
| Mutative | 386K | 0.003ms | 0.005ms | 1000 |
| Immer | 219K | 0.005ms | 0.009ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   1.5M ops/sec
🥈 Mutative           ███████                                    259K ops/sec
🥉 Immer              ██████                                     206K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.5M | 0.001ms | 0.002ms | 1000 |
| Mutative | 259K | 0.004ms | 0.009ms | 1000 |
| Immer | 206K | 0.005ms | 0.011ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   1.2M ops/sec
🥈 Mutative           ██████████                                 315K ops/sec
🥉 Immer              █████████                                  285K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 315K | 0.003ms | 0.006ms | 1000 |
| Immer | 285K | 0.004ms | 0.005ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   1.2M ops/sec
🥈 Mutative           ██████████                                 308K ops/sec
🥉 Immer              █████████                                  288K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.2M | 0.001ms | 0.002ms | 1000 |
| Mutative | 308K | 0.003ms | 0.006ms | 1000 |
| Immer | 288K | 0.004ms | 0.006ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   134K ops/sec
🥈 Mutative           █████████                                  29K ops/sec
🥉 Immer              ███████                                    22K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 134K | 0.009ms | 0.022ms | 1000 |
| Mutative | 29K | 0.043ms | 0.150ms | 1000 |
| Immer | 22K | 0.051ms | 0.103ms | 1000 |


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
- **[Craft](https://github.com/SylphxAI/craft)** (`@sylphx/craft`) v1.2.1 • 2.76 KB gzip - [📦 npm](https://www.npmjs.com/package/@sylphx/craft) • [📊 bundle size](https://bundlephobia.com/package/@sylphx/craft)
- **[Immutability Helper](https://github.com/kolodny/immutability-helper)** (`immutability-helper`) v3.1.1 • 1.65 KB gzip - [📦 npm](https://www.npmjs.com/package/immutability-helper) • [📊 bundle size](https://bundlephobia.com/package/immutability-helper)
- **[Mutative](https://github.com/unadlib/mutative)** (`mutative`) v1.3.0 • 7.16 KB gzip - [📦 npm](https://www.npmjs.com/package/mutative) • [📊 bundle size](https://bundlephobia.com/package/mutative)
- **[Immer](https://github.com/immerjs/immer)** (`immer`) v10.2.0 • 4.90 KB gzip - [📦 npm](https://www.npmjs.com/package/immer) • [📊 bundle size](https://bundlephobia.com/package/immer)
- **[Immutable.js](https://github.com/immutable-js/immutable-js)** (`immutable`) v5.1.4 • 17.58 KB gzip - [📦 npm](https://www.npmjs.com/package/immutable) • [📊 bundle size](https://bundlephobia.com/package/immutable)
- **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** (`seamless-immutable`) v7.1.4 • 2.71 KB gzip - [📦 npm](https://www.npmjs.com/package/seamless-immutable) • [📊 bundle size](https://bundlephobia.com/package/seamless-immutable)

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

*Generated on 2025-11-13T18:21:46.397Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
