# Reactive Async

Native async atoms that auto-recompute when dependencies change.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [08-async-reactive - Jotai](#08-async-reactive---jotai)
  - [08-async-reactive - MobX](#08-async-reactive---mobx)
  - [08-async-reactive - Preact Signals](#08-async-reactive---preact-signals)
  - [08-async-reactive - Redux Toolkit](#08-async-reactive---redux-toolkit)
  - [08-async-reactive - Solid Signals](#08-async-reactive---solid-signals)
  - [08-async-reactive - Valtio](#08-async-reactive---valtio)
  - [08-async-reactive - Zen](#08-async-reactive---zen)
  - [08-async-reactive - Zustand](#08-async-reactive---zustand)
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
| 🥇 1 | [**Zustand**](https://github.com/pmndrs/zustand) | 👑 656 |
| 🥈 2 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 625 |
| 🥉 3 | [**Valtio**](https://github.com/pmndrs/valtio) | 90 |
|  4 | [**Solid Signals**](https://github.com/solidjs/solid) | 90 |
|  5 | [**Preact Signals**](https://github.com/preactjs/signals) | 90 |
|  6 | [**Zen**](https://github.com/SylphxAI/zen) | 90 |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 88 |
|  8 | [**Jotai**](https://github.com/pmndrs/jotai) | 87 |

---

## Detailed Results

### Async Computed Read

```
🥇   Zustand            ████████████████████████████████████████       874 ops/sec
🥈   Redux Toolkit      ██████████████████████████████████████         831 ops/sec
🥉   Preact Signals     ████                                            92 ops/sec
4.   Solid Signals      ████                                            91 ops/sec
5.   MobX               ████                                            91 ops/sec
6.   Zen                ████                                            91 ops/sec
7.   Valtio             ████                                            90 ops/sec
8.   Jotai              ████                                            89 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 874 | ±1.38% | 1144.8000ms | 1336.9000ms | 437 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 831 | ±2.34% | 1203.0000ms | 2056.9000ms | 416 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 92 | ±0.90% | 10912.3000ms | 11107.3000ms | 46 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 91 | ±0.63% | 10958.2000ms | 11117.2000ms | 46 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 91 | ±1.11% | 11005.0000ms | 11745.0000ms | 46 |
| 6 | [**Zen**](https://github.com/SylphxAI/zen) | 91 | ±0.64% | 11027.8000ms | 11336.7000ms | 46 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 90 | ±1.37% | 11141.5000ms | 12957.7000ms | 45 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 89 | ±2.26% | 11225.5000ms | 13679.1000ms | 45 |

**Key Insight:** Zustand is 9.81x faster than Jotai in this test.

### Async Computed with Dependency Update

```
🥇   Zustand            ████████████████████████████████████████       878 ops/sec
🥈   Redux Toolkit      ██████████████████████████████████████         838 ops/sec
🥉   Valtio             ████                                            92 ops/sec
4.   Preact Signals     ████                                            91 ops/sec
5.   Solid Signals      ████                                            91 ops/sec
6.   MobX               ████                                            91 ops/sec
7.   Zen                ████                                            90 ops/sec
8.   Jotai              ████                                            88 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 878 | ±1.80% | 1138.7000ms | 1364.0000ms | 440 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 838 | ±1.27% | 1194.0000ms | 1400.9000ms | 419 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 92 | ±1.26% | 10925.8000ms | 13102.1000ms | 46 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 91 | ±0.50% | 11009.4000ms | 11184.2000ms | 46 |
| 5 | [**Solid Signals**](https://github.com/solidjs/solid) | 91 | ±0.98% | 11012.8000ms | 11434.0000ms | 46 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 91 | ±1.17% | 11020.0000ms | 12041.0000ms | 46 |
| 7 | [**Zen**](https://github.com/SylphxAI/zen) | 90 | ±0.73% | 11070.3000ms | 11563.8000ms | 46 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 88 | ±2.56% | 11321.1000ms | 15919.3000ms | 45 |

**Key Insight:** Zustand is 9.94x faster than Jotai in this test.

### Chained Async Computed

```
🥇   Zustand            ████████████████████████████████████████       438 ops/sec
🥈   Redux Toolkit      ██████████████████████████████████████         419 ops/sec
🥉   Valtio             ████████                                        89 ops/sec
4.   Solid Signals      ████████                                        89 ops/sec
5.   Preact Signals     ████████                                        88 ops/sec
6.   Zen                ████████                                        88 ops/sec
7.   Jotai              ████████                                        86 ops/sec
8.   MobX               ███████                                         78 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 438 | ±1.06% | 2280.8000ms | 2463.8000ms | 220 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 419 | ±1.68% | 2384.8000ms | 3098.2000ms | 210 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 89 | ±0.80% | 11262.6000ms | 12077.2000ms | 45 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 89 | ±0.72% | 11281.0000ms | 11599.1000ms | 45 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 88 | ±0.36% | 11320.2000ms | 11590.8000ms | 45 |
| 6 | [**Zen**](https://github.com/SylphxAI/zen) | 88 | ±0.68% | 11380.3000ms | 11868.8000ms | 44 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 86 | ±1.66% | 11673.2000ms | 14076.2000ms | 43 |
| 8 | [**MobX**](https://github.com/mobxjs/mobx) | 78 | ±14.31% | 12850.1000ms | 32774.5000ms | 39 |

**Key Insight:** Zustand is 5.63x faster than MobX in this test.

### Complex Async Dependencies

```
🥇   Zustand            ████████████████████████████████████████       872 ops/sec
🥈   Redux Toolkit      ███████████████████████████████████            771 ops/sec
🥉   Valtio             ████                                            92 ops/sec
4.   Solid Signals      ████                                            91 ops/sec
5.   MobX               ████                                            91 ops/sec
6.   Preact Signals     ████                                            90 ops/sec
7.   Zen                ████                                            90 ops/sec
8.   Jotai              ████                                            88 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 872 | ±0.80% | 1146.9000ms | 1267.8000ms | 436 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 771 | ±3.62% | 1297.8000ms | 3049.6000ms | 386 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 92 | ±0.83% | 10892.6000ms | 11198.4000ms | 46 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 91 | ±0.74% | 10993.5000ms | 11295.5000ms | 46 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 91 | ±0.96% | 11016.0000ms | 12088.2000ms | 46 |
| 6 | [**Preact Signals**](https://github.com/preactjs/signals) | 90 | ±0.79% | 11072.0000ms | 11358.8000ms | 46 |
| 7 | [**Zen**](https://github.com/SylphxAI/zen) | 90 | ±0.87% | 11124.3000ms | 11522.0000ms | 45 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 88 | ±2.28% | 11402.2000ms | 14165.9000ms | 44 |

**Key Insight:** Zustand is 9.94x faster than Jotai in this test.

### Concurrent Async Reads

```
🥇   Redux Toolkit      ████████████████████████████████████████       424 ops/sec
🥈   Zustand            ███████████████████████████████████████        415 ops/sec
🥉   Solid Signals      █████████                                       91 ops/sec
4.   Valtio             █████████                                       91 ops/sec
5.   Zen                █████████                                       91 ops/sec
6.   Preact Signals     ████████                                        90 ops/sec
7.   MobX               ████████                                        89 ops/sec
8.   Jotai              ████████                                        87 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 424 | ±2.24% | 2356.1000ms | 4015.9000ms | 213 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 415 | ±4.81% | 2411.3000ms | 5165.8000ms | 208 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 91 | ±1.26% | 11029.4000ms | 11674.6000ms | 46 |
| 4 | [**Valtio**](https://github.com/pmndrs/valtio) | 91 | ±1.49% | 11031.9000ms | 11822.5000ms | 46 |
| 5 | [**Zen**](https://github.com/SylphxAI/zen) | 91 | ±1.44% | 11037.5000ms | 11742.5000ms | 46 |
| 6 | [**Preact Signals**](https://github.com/preactjs/signals) | 90 | ±1.36% | 11128.9000ms | 11822.0000ms | 45 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 89 | ±1.90% | 11207.4000ms | 14202.3000ms | 45 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 87 | ±2.69% | 11539.7000ms | 15371.5000ms | 44 |

**Key Insight:** Redux Toolkit is 4.90x faster than Jotai in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:async-reactive

# Or run specific test file
npx vitest bench groups/08-async-reactive/*.bench.ts
```

---
*Last generated: 2025-11-11T13:30:02.261Z*
