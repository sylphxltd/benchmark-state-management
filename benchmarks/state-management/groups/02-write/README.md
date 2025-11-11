# Write Operations

Simple increments and burst updates.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [02-write - Jotai](#02-write---jotai)
  - [02-write - MobX](#02-write---mobx)
  - [02-write - Preact Signals](#02-write---preact-signals)
  - [02-write - Redux Toolkit](#02-write---redux-toolkit)
  - [02-write - Solid Signals](#02-write---solid-signals)
  - [02-write - Valtio](#02-write---valtio)
  - [02-write - Zen](#02-write---zen)
  - [02-write - Zustand](#02-write---zustand)
- [Navigation](#-navigation)
- [Running This Group](#-running-this-group)

---

## Group Overall Performance

**Methodology**:
- Each library's raw performance (ops/sec) is measured for each test in this group
- The group score is calculated using geometric mean of all test results
- Formula: `Group Score = ⁿ√(Test₁ × Test₂ × ... × Testₙ)`
- Geometric mean gives balanced weight to all tests regardless of their magnitude

**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Group Score |
|:----:|---------|-------------|
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 3.8M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 1.8M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 1.6M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 291K |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 72K |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 59K |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 18K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 9K |

---

## Detailed Results

### Batch Update (x10)

```
🥇   Solid Signals      ████████████████████████████████████████     35.0M ops/sec
🥈   Zen                ██████████████████████                       19.0M ops/sec
🥉   Preact Signals     ███████████████████                          17.0M ops/sec
4.   Zustand            ███                                           3.0M ops/sec
5.   MobX               █                                             694K ops/sec
6.   Valtio             █                                             596K ops/sec
7.   Jotai                                                            180K ops/sec
8.   Redux Toolkit                                                     90K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 34,971,809 | ±0.10% | 0.0000ms | 0.0000ms | 17485906 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 18,992,322 | ±0.03% | 0.1000ms | 0.1000ms | 9496162 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 16,955,815 | ±0.04% | 0.1000ms | 0.1000ms | 8477908 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,028,414 | ±0.31% | 0.3000ms | 0.5000ms | 1514208 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 694,391 | ±1.43% | 1.4000ms | 3.1000ms | 347196 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 595,719 | ±0.65% | 1.7000ms | 2.1000ms | 297860 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 180,294 | ±0.93% | 5.5000ms | 8.0000ms | 90147 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 90,194 | ±1.84% | 11.1000ms | 21.9000ms | 45097 |

**Key Insight:** Solid Signals is 387.74x faster than Redux Toolkit in this test.

### Batch Update (x100)

```
🥇   Solid Signals      ████████████████████████████████████████      7.6M ops/sec
🥈   Zen                ███████████████                               2.9M ops/sec
🥉   Preact Signals     ██████████████                                2.6M ops/sec
4.   Zustand            ██                                            326K ops/sec
5.   MobX                                                              78K ops/sec
6.   Valtio                                                            61K ops/sec
7.   Jotai                                                             18K ops/sec
8.   Redux Toolkit                                                      9K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 7,566,095 | ±0.76% | 0.1000ms | 0.2000ms | 3783048 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 2,909,468 | ±0.05% | 0.3000ms | 0.4000ms | 1454734 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 2,584,644 | ±0.04% | 0.4000ms | 0.5000ms | 1292323 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 325,775 | ±0.36% | 3.1000ms | 4.6000ms | 162888 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 77,540 | ±0.28% | 12.9000ms | 17.0000ms | 38771 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 61,369 | ±0.23% | 16.3000ms | 19.5000ms | 30685 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 17,840 | ±2.18% | 56.1000ms | 85.8000ms | 8921 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 9,227 | ±0.48% | 108.4000ms | 200.7000ms | 4614 |

**Key Insight:** Solid Signals is 819.99x faster than Redux Toolkit in this test.

### Batch Update (x1000)

```
🥇   Solid Signals      ████████████████████████████████████████      861K ops/sec
🥈   Zen                ██████████████                                308K ops/sec
🥉   Preact Signals     ████████████                                  266K ops/sec
4.   Zustand            ██                                             33K ops/sec
5.   MobX                                                               7K ops/sec
6.   Valtio                                                             6K ops/sec
7.   Jotai                                                              2K ops/sec
8.   Redux Toolkit                                                     909 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 861,058 | ±0.66% | 1.2000ms | 1.6000ms | 430529 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 307,569 | ±0.03% | 3.3000ms | 3.6000ms | 153785 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 266,192 | ±0.10% | 3.8000ms | 5.2000ms | 133096 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 32,671 | ±0.48% | 30.6000ms | 51.7000ms | 16336 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 7,489 | ±0.95% | 133.5000ms | 296.7000ms | 3745 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 6,097 | ±0.58% | 164.0000ms | 302.6000ms | 3049 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,743 | ±2.96% | 573.8000ms | 892.7000ms | 872 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 909 | ±1.01% | 1100.1000ms | 1493.3000ms | 455 |

**Key Insight:** Solid Signals is 947.28x faster than Redux Toolkit in this test.

### Batch Update (x10000)

```
🥇   Solid Signals      ████████████████████████████████████████       85K ops/sec
🥈   Zen                █████████████                                  28K ops/sec
🥉   Preact Signals     ████████████                                   25K ops/sec
4.   Zustand            ██                                              3K ops/sec
5.   MobX                                                              769 ops/sec
6.   Valtio                                                            600 ops/sec
7.   Jotai                                                             186 ops/sec
8.   Redux Toolkit                                                      93 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 84,876 | ±0.24% | 11.8000ms | 16.0000ms | 42439 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 28,283 | ±0.27% | 35.4000ms | 57.8000ms | 14143 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 24,803 | ±0.35% | 40.3000ms | 65.1000ms | 12402 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,371 | ±1.09% | 296.7000ms | 520.5000ms | 1686 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 769 | ±1.74% | 1299.9000ms | 2158.2000ms | 385 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 600 | ±1.37% | 1667.7000ms | 2409.2000ms | 300 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 186 | ±1.05% | 5383.8000ms | 6948.4000ms | 93 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 93 | ±1.00% | 10790.0000ms | 11665.0000ms | 47 |

**Key Insight:** Solid Signals is 915.81x faster than Redux Toolkit in this test.

### Single Update

```
🥇   Zen                ████████████████████████████████████████     42.4M ops/sec
🥈   Preact Signals     ████████████████████████████████████         38.5M ops/sec
🥉   Solid Signals      ████████████████████████████████████         38.4M ops/sec
4.   Zustand            ██████████████████                           19.1M ops/sec
5.   MobX               ██████                                        6.4M ops/sec
6.   Valtio             █████                                         5.5M ops/sec
7.   Jotai              ██                                            1.7M ops/sec
8.   Redux Toolkit      █                                             934K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 42,392,483 | ±0.05% | 0.0000ms | 0.0000ms | 21196242 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 38,456,101 | ±0.05% | 0.0000ms | 0.0000ms | 19228051 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 38,380,442 | ±0.21% | 0.0000ms | 0.0000ms | 19190221 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 19,116,129 | ±1.05% | 0.1000ms | 0.1000ms | 9558065 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 6,442,782 | ±1.95% | 0.2000ms | 0.3000ms | 3221391 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,456,854 | ±0.20% | 0.2000ms | 0.2000ms | 2728428 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,717,208 | ±1.43% | 0.6000ms | 1.3000ms | 858604 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 933,602 | ±0.37% | 1.1000ms | 1.5000ms | 466802 |

**Key Insight:** Zen is 45.41x faster than Redux Toolkit in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:write

# Or run specific test file
npx vitest bench groups/02-write/*.bench.ts
```

---
*Last generated: 2025-11-11T11:01:46.794Z*
