# Memory Allocation

Large state allocation performance.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [06-memory - Jotai](#06-memory---jotai)
  - [06-memory - MobX](#06-memory---mobx)
  - [06-memory - Preact Signals](#06-memory---preact-signals)
  - [06-memory - Redux Toolkit](#06-memory---redux-toolkit)
  - [06-memory - Solid Signals](#06-memory---solid-signals)
  - [06-memory - Valtio](#06-memory---valtio)
  - [06-memory - Zen](#06-memory---zen)
  - [06-memory - Zustand](#06-memory---zustand)
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
| 🥇 1 | [**Valtio**](https://github.com/pmndrs/valtio) | 👑 15.2M |
| 🥈 2 | [**Zustand**](https://github.com/pmndrs/zustand) | 3.1M |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 2.2M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 1.7M |
|  5 | [**Solid Signals**](https://github.com/solidjs/solid) | 1.7M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 651K |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 331K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 214K |

---

## Detailed Results

### Large State Filter

```
🥇   Zen                ████████████████████████████████████████      467K ops/sec
🥈   Zustand            ██████████████████████████████████████        443K ops/sec
🥉   Solid Signals      ████████████████████████████████              370K ops/sec
4.   Preact Signals     ███████████████████████████████               367K ops/sec
5.   Jotai              ███████████                                   125K ops/sec
6.   Redux Toolkit      ██                                             25K ops/sec
7.   MobX               █                                              10K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 466,922 | ±0.55% | 2.1000ms | 7.4000ms | 233462 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 443,096 | ±0.70% | 2.3000ms | 7.7000ms | 221548 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 369,699 | ±0.63% | 2.7000ms | 8.7000ms | 184850 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 367,473 | ±0.61% | 2.7000ms | 9.3000ms | 183737 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 125,428 | ±4.64% | 8.0000ms | 27.8000ms | 62714 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 24,840 | ±2.01% | 40.3000ms | 107.8000ms | 12420 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 9,609 | ±4.39% | 104.1000ms | 389.6000ms | 4805 |

**Key Insight:** Zen is 48.59x faster than MobX in this test.

### Large State Read

```
🥇   Valtio             ████████████████████████████████████████     43.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 43,313,513 | ±0.04% | 0.0000ms | 0.0000ms | 21656757 |

### Large State Read (1000 items)

```
🥇   Zen                ████████████████████████████████████████     49.8M ops/sec
🥈   Preact Signals     ████████████████████████████████             39.3M ops/sec
🥉   Solid Signals      ███████████████████████████████              38.6M ops/sec
4.   Zustand            ██████████████████████████                   32.9M ops/sec
5.   Redux Toolkit      ████████████████████████                     29.4M ops/sec
6.   MobX               █████████████                                15.8M ops/sec
7.   Jotai              ███                                           3.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 49,834,819 | ±0.04% | 0.0000ms | 0.0000ms | 24917411 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 39,289,573 | ±0.08% | 0.0000ms | 0.0000ms | 19644787 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 38,564,850 | ±0.51% | 0.0000ms | 0.0000ms | 19282426 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 32,942,640 | ±1.64% | 0.0000ms | 0.0000ms | 16471320 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 29,363,757 | ±1.03% | 0.0000ms | 0.1000ms | 14681879 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 15,781,668 | ±3.14% | 0.1000ms | 0.1000ms | 7890834 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 3,299,904 | ±2.66% | 0.3000ms | 0.4000ms | 1649953 |

**Key Insight:** Zen is 15.10x faster than Jotai in this test.

### Large State Update

```
🥇   Valtio             ████████████████████████████████████████      5.4M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,362,720 | ±0.27% | 0.2000ms | 0.3000ms | 2681361 |

### Large State Update (1000 items)

```
🥇   Zustand            ████████████████████████████████████████      2.1M ops/sec
🥈   MobX               ██████████████████████████████████            1.8M ops/sec
🥉   Zen                ████████                                      435K ops/sec
4.   Solid Signals      ██████                                        322K ops/sec
5.   Preact Signals     ██████                                        320K ops/sec
6.   Jotai              ██                                             87K ops/sec
7.   Redux Toolkit                                                     13K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 2,141,279 | ±1.85% | 0.5000ms | 1.6000ms | 1070640 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 1,816,948 | ±1.73% | 0.6000ms | 0.9000ms | 908474 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 435,409 | ±0.55% | 2.3000ms | 5.2000ms | 217705 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 321,780 | ±0.53% | 3.1000ms | 8.6000ms | 160891 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 320,184 | ±0.68% | 3.1000ms | 8.5000ms | 160093 |
| 6 | [**Jotai**](https://github.com/pmndrs/jotai) | 87,260 | ±4.69% | 11.5000ms | 40.2000ms | 43630 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 13,413 | ±5.51% | 74.6000ms | 255.5000ms | 6707 |

**Key Insight:** Zustand is 159.64x faster than Redux Toolkit in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:memory

# Or run specific test file
npx vitest bench groups/06-memory/*.bench.ts
```

---
*Last generated: 2025-11-11T18:11:33.592Z*
