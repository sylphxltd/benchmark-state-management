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
- **⚖️ Best Balance**: Craft - Great performance (29.6/100) with good ecosystem
- **🎯 Popular Choice**: Immutability Helper - Widely used, good performance, minimal API

<details>
<summary><b>📊 Detailed Performance Insights</b> (click to expand)</summary>

### When to Choose Each Library


**Native Spread** (Score: 100.0/100)
- High-performance state management solution
- **Best for**: General purpose state management
- [GitHub](#) • [npm](https://www.npmjs.com/package/native-spread)


**Craft** (Score: 29.6/100)
- Performant immutable updates with structural sharing
- **Best for**: General purpose state management
- [GitHub](https://github.com/SylphxAI/craft) • [npm](https://www.npmjs.com/package/@sylphx/craft)


**Immutability Helper** (Score: 12.5/100)
- Mutate a copy of data without changing the original source
- **Best for**: General purpose state management
- [GitHub](https://github.com/kolodny/immutability-helper) • [npm](https://www.npmjs.com/package/immutability-helper)


**Mutative** (Score: 10.5/100)
- Efficient immutable updates, 2-6x faster than Immer
- **Best for**: General purpose state management
- [GitHub](https://github.com/unadlib/mutative) • [npm](https://www.npmjs.com/package/mutative)


**Immer** (Score: 8.6/100)
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
| 🥈 2 | **[Craft](https://github.com/SylphxAI/craft)** | 29.6/100 | 30% of fastest | [📦](https://www.npmjs.com/package/@sylphx/craft) [📊](https://bundlephobia.com/package/@sylphx/craft) |
| 🥉 3 | **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | 12.5/100 | 12% of fastest | [📦](https://www.npmjs.com/package/immutability-helper) [📊](https://bundlephobia.com/package/immutability-helper) |
|  4 | **[Mutative](https://github.com/unadlib/mutative)** | 10.5/100 | 11% of fastest | [📦](https://www.npmjs.com/package/mutative) [📊](https://bundlephobia.com/package/mutative) |
|  5 | **[Immer](https://github.com/immerjs/immer)** | 8.6/100 | 9% of fastest | [📦](https://www.npmjs.com/package/immer) [📊](https://bundlephobia.com/package/immer) |
|  6 | **[Immutable.js](https://github.com/immutable-js/immutable-js)** | 6.7/100 | 7% of fastest | [📦](https://www.npmjs.com/package/immutable) [📊](https://bundlephobia.com/package/immutable) |
|  7 | **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | 0.8/100 | 1% of fastest | [📦](https://www.npmjs.com/package/seamless-immutable) [📊](https://bundlephobia.com/package/seamless-immutable) |


*📦 = npm package • 📊 = bundle size*

---

## 📈 Library Comparison

| Library | Score | Bundle Size (gzip) | Description | Best For |
|---------|:-----:|:------------------:|-------------|----------|
| **[Native Spread](#)** | **100.0** | N/A | State management solution... | General purpose... |
| **[Craft](https://github.com/SylphxAI/craft)** | **29.6** | **2.76 KB** | Performant immutable updates with structural shari... | General purpose... |
| **[Immutability Helper](https://github.com/kolodny/immutability-helper)** | **12.5** | **1.65 KB** | Mutate a copy of data without changing the origina... | General purpose... |
| **[Mutative](https://github.com/unadlib/mutative)** | **10.5** | **7.16 KB** | Efficient immutable updates, 2-6x faster than Imme... | General purpose... |
| **[Immer](https://github.com/immerjs/immer)** | **8.6** | **4.90 KB** | Create the next immutable state by mutating the cu... | General purpose... |
| **[Immutable.js](https://github.com/immutable-js/immutable-js)** | **6.7** | **17.58 KB** | Immutable persistent data collections for Javascri... | General purpose... |
| **[Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)** | **0.8** | **2.71 KB** | Immutable data structures for JavaScript which are... | General purpose... |

---

## 📊 Performance by Test Group

<details open>
<summary><b>Click to expand/collapse detailed test results</b></summary>

### 01-simple-updates

#### Simple Object Update

```
🥇 Native Spread      ████████████████████████████████████████   13.4M ops/sec
🥈 Immutable.js       ████████                                   2.8M ops/sec
🥉 Immutability Helper ███████                                    2.3M ops/sec
 Craft              █████                                      1.7M ops/sec
 Mutative           ███                                        1.2M ops/sec
 Immer              ██                                         808K ops/sec
 Seamless Immutable █                                          288K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 13.4M | 0.000ms | 0.000ms | 1000 |
| Immutable.js | 2.8M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 2.3M | 0.000ms | 0.001ms | 1000 |
| Craft | 1.7M | 0.001ms | 0.001ms | 1000 |
| Mutative | 1.2M | 0.001ms | 0.003ms | 1000 |
| Immer | 808K | 0.001ms | 0.003ms | 1000 |
| Seamless Immutable | 288K | 0.004ms | 0.006ms | 1000 |

### 02-nested-updates

#### Nested Object Update

```
🥇 Native Spread      ████████████████████████████████████████   7.3M ops/sec
🥈 Craft              ████                                       662K ops/sec
🥉 Immutability Helper ███                                        516K ops/sec
 Mutative           ███                                        506K ops/sec
 Immutable.js       ██                                         410K ops/sec
 Immer              ██                                         330K ops/sec
 Seamless Immutable                                            80K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.3M | 0.000ms | 0.000ms | 1000 |
| Craft | 662K | 0.002ms | 0.004ms | 1000 |
| Immutability Helper | 516K | 0.002ms | 0.006ms | 1000 |
| Mutative | 506K | 0.002ms | 0.006ms | 1000 |
| Immutable.js | 410K | 0.003ms | 0.006ms | 1000 |
| Immer | 330K | 0.003ms | 0.005ms | 1000 |
| Seamless Immutable | 80K | 0.013ms | 0.027ms | 1000 |

### 03-array-operations

#### Array Push

```
🥇 Native Spread      ████████████████████████████████████████   21.4M ops/sec
🥈 Immutability Helper █████████                                  4.6M ops/sec
🥉 Immutable.js       ███████                                    4.0M ops/sec
 Craft              █                                          494K ops/sec
 Mutative           █                                          329K ops/sec
 Immer              █                                          292K ops/sec
 Seamless Immutable                                            71K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 21.4M | 0.000ms | 0.000ms | 1000 |
| Immutability Helper | 4.6M | 0.000ms | 0.001ms | 1000 |
| Immutable.js | 4.0M | 0.000ms | 0.001ms | 1000 |
| Craft | 494K | 0.002ms | 0.004ms | 1000 |
| Mutative | 329K | 0.003ms | 0.007ms | 1000 |
| Immer | 292K | 0.004ms | 0.007ms | 1000 |
| Seamless Immutable | 71K | 0.015ms | 0.024ms | 1000 |

#### Array Remove

```
🥇 Native Spread      ████████████████████████████████████████   7.3M ops/sec
🥈 Immutability Helper ████████                                   1.5M ops/sec
🥉 Immutable.js       ██████                                     1.1M ops/sec
 Craft              ██                                         322K ops/sec
 Immer              █                                          176K ops/sec
 Mutative           █                                          161K ops/sec
 Seamless Immutable                                            77K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 7.3M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 1.5M | 0.001ms | 0.001ms | 1000 |
| Immutable.js | 1.1M | 0.001ms | 0.003ms | 1000 |
| Craft | 322K | 0.003ms | 0.004ms | 1000 |
| Immer | 176K | 0.006ms | 0.010ms | 1000 |
| Mutative | 161K | 0.007ms | 0.021ms | 1000 |
| Seamless Immutable | 77K | 0.013ms | 0.023ms | 1000 |

#### Array Update

```
🥇 Native Spread      ████████████████████████████████████████   10.0M ops/sec
🥈 Immutability Helper ███                                        710K ops/sec
🥉 Craft              ██                                         551K ops/sec
 Immutable.js       █                                          296K ops/sec
 Mutative           █                                          280K ops/sec
 Immer              █                                          234K ops/sec
 Seamless Immutable                                            39K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 10.0M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 710K | 0.001ms | 0.002ms | 1000 |
| Craft | 551K | 0.002ms | 0.003ms | 1000 |
| Immutable.js | 296K | 0.004ms | 0.009ms | 1000 |
| Mutative | 280K | 0.004ms | 0.007ms | 1000 |
| Immer | 234K | 0.004ms | 0.008ms | 1000 |
| Seamless Immutable | 39K | 0.029ms | 0.058ms | 1000 |

### 04-deep-operations

#### Deep Nested Update (5 levels)

```
🥇 Native Spread      ████████████████████████████████████████   2.7M ops/sec
🥈 Immutability Helper ███████                                    466K ops/sec
🥉 Craft              ██████                                     367K ops/sec
 Immutable.js       █████                                      319K ops/sec
 Mutative           ███                                        167K ops/sec
 Immer              ██                                         134K ops/sec
 Seamless Immutable █                                          47K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 2.7M | 0.001ms | 0.001ms | 1000 |
| Immutability Helper | 466K | 0.003ms | 0.005ms | 1000 |
| Craft | 367K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 319K | 0.003ms | 0.005ms | 1000 |
| Mutative | 167K | 0.006ms | 0.010ms | 1000 |
| Immer | 134K | 0.008ms | 0.021ms | 1000 |
| Seamless Immutable | 47K | 0.022ms | 0.039ms | 1000 |

#### Multiple Updates (3 changes)

```
🥇 Native Spread      ████████████████████████████████████████   6.4M ops/sec
🥈 Immutability Helper ███                                        511K ops/sec
🥉 Craft              ██                                         380K ops/sec
 Immutable.js       ██                                         252K ops/sec
 Immer              █                                          162K ops/sec
 Mutative           █                                          135K ops/sec
 Seamless Immutable                                            38K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 6.4M | 0.000ms | 0.001ms | 1000 |
| Immutability Helper | 511K | 0.002ms | 0.003ms | 1000 |
| Craft | 380K | 0.003ms | 0.005ms | 1000 |
| Immutable.js | 252K | 0.004ms | 0.005ms | 1000 |
| Immer | 162K | 0.006ms | 0.010ms | 1000 |
| Mutative | 135K | 0.008ms | 0.014ms | 1000 |
| Seamless Immutable | 38K | 0.027ms | 0.044ms | 1000 |

### 05-large-scale

#### Large Array Update (1000 items)

```
🥇 Native Spread      ████████████████████████████████████████   118K ops/sec
🥈 Mutative           ████████████████████████████████           94K ops/sec
🥉 Immutability Helper █████                                      13K ops/sec
 Craft              ██                                         7K ops/sec
 Immer              █                                          2K ops/sec
 Immutable.js                                                  1K ops/sec
 Seamless Immutable                                            462 ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Native Spread | 118K | 0.009ms | 0.018ms | 1000 |
| Mutative | 94K | 0.011ms | 0.022ms | 1000 |
| Immutability Helper | 13K | 0.076ms | 0.100ms | 1000 |
| Craft | 7K | 0.154ms | 0.201ms | 1000 |
| Immer | 2K | 0.586ms | 1.319ms | 1000 |
| Immutable.js | 1K | 0.935ms | 1.735ms | 1000 |
| Seamless Immutable | 462 | 2.193ms | 3.429ms | 1000 |

### 06-patches

#### JSON Patches - Apply

```
🥇 Craft              ████████████████████████████████████████   2.8M ops/sec
🥈 Immer              ███                                        175K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 2.8M | 0.000ms | 0.001ms | 1000 |
| Immer | 175K | 0.006ms | 0.008ms | 1000 |

#### JSON Patches - Generate

```
🥇 Craft              ████████████████████████████████████████   324K ops/sec
🥈 Immer              ██████████████████████                     180K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 324K | 0.003ms | 0.006ms | 1000 |
| Immer | 180K | 0.006ms | 0.011ms | 1000 |

#### JSON Patches - Roundtrip

```
🥇 Craft              ████████████████████████████████████████   274K ops/sec
🥈 Immer              █████████████                              87K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 274K | 0.004ms | 0.006ms | 1000 |
| Immer | 87K | 0.012ms | 0.023ms | 1000 |

#### Undo/Redo - Inverse Patches

```
🥇 Craft              ████████████████████████████████████████   271K ops/sec
🥈 Immer              █████████████                              86K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 271K | 0.004ms | 0.006ms | 1000 |
| Immer | 86K | 0.012ms | 0.023ms | 1000 |

### 07-map-set

#### Map - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   59K ops/sec
🥈 Mutative           ██████████████████████████████████████     57K ops/sec
🥉 Immer              █████████                                  14K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 59K | 0.021ms | 0.046ms | 1000 |
| Mutative | 57K | 0.019ms | 0.034ms | 1000 |
| Immer | 14K | 0.079ms | 0.130ms | 1000 |

#### Map - Set Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Mutative           ████████                                   214K ops/sec
🥉 Immer              ████████                                   205K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Mutative | 214K | 0.005ms | 0.008ms | 1000 |
| Immer | 205K | 0.005ms | 0.009ms | 1000 |

#### Map - Update Nested Value

```
🥇 Craft              ████████████████████████████████████████   1.4M ops/sec
🥈 Mutative           ███████                                    247K ops/sec
🥉 Immer              ████                                       153K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.4M | 0.001ms | 0.002ms | 1000 |
| Mutative | 247K | 0.005ms | 0.009ms | 1000 |
| Immer | 153K | 0.007ms | 0.020ms | 1000 |

#### Set - Add Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              █████████                                  259K ops/sec
🥉 Mutative           ████████                                   212K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 259K | 0.004ms | 0.006ms | 1000 |
| Mutative | 212K | 0.006ms | 0.010ms | 1000 |

#### Set - Delete Operation

```
🥇 Craft              ████████████████████████████████████████   1.1M ops/sec
🥈 Immer              ██████████                                 260K ops/sec
🥉 Mutative           █████████                                  235K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 1.1M | 0.001ms | 0.002ms | 1000 |
| Immer | 260K | 0.004ms | 0.006ms | 1000 |
| Mutative | 235K | 0.005ms | 0.010ms | 1000 |

#### Set - Large (100 items)

```
🥇 Craft              ████████████████████████████████████████   137K ops/sec
🥈 Mutative           █████████                                  32K ops/sec
🥉 Immer              ███████                                    23K ops/sec
```

| Library | ops/sec | Mean Time | P99 | Samples |
|---------|---------|-----------|-----|----------|
| Craft | 137K | 0.008ms | 0.013ms | 1000 |
| Mutative | 32K | 0.036ms | 0.093ms | 1000 |
| Immer | 23K | 0.047ms | 0.101ms | 1000 |


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

*Generated on 2025-11-13T21:09:47.867Z*

[⬆️ Back to Top](#immutability-benchmarks) • [⬅️ Main README](../../README.md)

</div>
