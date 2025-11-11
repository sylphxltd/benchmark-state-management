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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 4.6M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 2.7M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 1.9M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 351K |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 88K |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 60K |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 18K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 10K |

---

## Detailed Results

### Batch Update (x10)

```
🥇   Solid Signals      ████████████████████████████████████████     42.0M ops/sec
🥈   Zen                █████████████████████████                    25.9M ops/sec
🥉   Preact Signals     ███████████████████                          19.9M ops/sec
4.   Zustand            ███                                           3.7M ops/sec
5.   MobX               █                                             891K ops/sec
6.   Valtio             █                                             618K ops/sec
7.   Jotai                                                            168K ops/sec
8.   Redux Toolkit                                                     91K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 42,006,536 | ±0.04% | 0.0000ms | 0.0000ms | 21003268 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 25,892,621 | ±0.03% | 0.0000ms | 0.1000ms | 12946311 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 19,903,966 | ±0.09% | 0.1000ms | 0.1000ms | 9951983 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,650,424 | ±0.21% | 0.3000ms | 0.4000ms | 1825213 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 890,590 | ±0.12% | 1.1000ms | 1.4000ms | 445296 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 617,948 | ±0.18% | 1.6000ms | 2.0000ms | 308975 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 168,105 | ±3.34% | 5.9000ms | 14.4000ms | 84053 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 91,417 | ±2.14% | 10.9000ms | 21.5000ms | 45709 |

**Key Insight:** Solid Signals is 459.50x faster than Redux Toolkit in this test.

### Batch Update (x100)

```
🥇   Solid Signals      ████████████████████████████████████████      9.4M ops/sec
🥈   Zen                ███████████████████                           4.5M ops/sec
🥉   Preact Signals     ████████████                                  2.9M ops/sec
4.   Zustand            ██                                            386K ops/sec
5.   MobX                                                              91K ops/sec
6.   Valtio                                                            61K ops/sec
7.   Jotai                                                             18K ops/sec
8.   Redux Toolkit                                                     10K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 9,378,508 | ±0.13% | 0.1000ms | 0.2000ms | 4689255 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 4,540,686 | ±0.04% | 0.2000ms | 0.3000ms | 2270343 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 2,930,002 | ±0.02% | 0.3000ms | 0.4000ms | 1465001 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 386,377 | ±0.23% | 2.6000ms | 3.2000ms | 193189 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 91,277 | ±0.15% | 11.0000ms | 12.7000ms | 45639 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 60,557 | ±0.19% | 16.5000ms | 21.0000ms | 30279 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 18,257 | ±0.71% | 54.8000ms | 76.9000ms | 9129 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 9,849 | ±0.29% | 101.5000ms | 119.7000ms | 4925 |

**Key Insight:** Solid Signals is 952.21x faster than Redux Toolkit in this test.

### Batch Update (x1000)

```
🥇   Solid Signals      ████████████████████████████████████████      1.1M ops/sec
🥈   Zen                ███████████████████                           499K ops/sec
🥉   Preact Signals     ████████████                                  305K ops/sec
4.   Zustand            ██                                             41K ops/sec
5.   MobX                                                               9K ops/sec
6.   Valtio                                                             6K ops/sec
7.   Jotai                                                              2K ops/sec
8.   Redux Toolkit                                                     987 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 1,050,540 | ±0.03% | 1.0000ms | 1.2000ms | 525270 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 499,207 | ±0.05% | 2.0000ms | 2.5000ms | 249604 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 305,294 | ±0.02% | 3.3000ms | 4.1000ms | 152647 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 40,863 | ±0.20% | 24.5000ms | 28.5000ms | 20432 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 9,230 | ±0.14% | 108.3000ms | 115.9000ms | 4615 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 6,352 | ±0.26% | 157.4000ms | 184.7000ms | 3176 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,804 | ±2.11% | 554.4000ms | 847.9000ms | 902 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 987 | ±0.48% | 1012.7000ms | 1182.1000ms | 494 |

**Key Insight:** Solid Signals is 1063.91x faster than Redux Toolkit in this test.

### Batch Update (x10000)

```
🥇   Solid Signals      ████████████████████████████████████████      106K ops/sec
🥈   Zen                ██████████████████                             48K ops/sec
🥉   Preact Signals     ███████████                                    30K ops/sec
4.   Zustand            █                                               4K ops/sec
5.   MobX                                                              915 ops/sec
6.   Valtio                                                            627 ops/sec
7.   Jotai                                                             185 ops/sec
8.   Redux Toolkit                                                      97 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 106,427 | ±0.03% | 9.4000ms | 11.0000ms | 53214 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 47,928 | ±0.10% | 20.9000ms | 25.5000ms | 23965 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 29,674 | ±0.03% | 33.7000ms | 36.7000ms | 14838 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,945 | ±0.49% | 253.5000ms | 349.7000ms | 1973 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 915 | ±0.30% | 1092.8000ms | 1194.4000ms | 458 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 627 | ±0.87% | 1595.5000ms | 1945.7000ms | 314 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 185 | ±1.10% | 5414.5000ms | 7210.2000ms | 93 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 97 | ±1.12% | 10289.2000ms | 11522.6000ms | 49 |

**Key Insight:** Solid Signals is 1095.05x faster than Redux Toolkit in this test.

### Single Update

```
🥇   Solid Signals      ████████████████████████████████████████     47.8M ops/sec
🥈   Zen                ████████████████████████████████████████     47.7M ops/sec
🥉   Preact Signals     ███████████████████████████████████████      46.9M ops/sec
4.   Zustand            ████████████████████                         23.5M ops/sec
5.   MobX               ██████                                        7.5M ops/sec
6.   Valtio             █████                                         5.4M ops/sec
7.   Jotai              █                                             1.7M ops/sec
8.   Redux Toolkit      █                                             950K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 47,837,105 | ±0.07% | 0.0000ms | 0.0000ms | 23918553 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 47,654,682 | ±0.05% | 0.0000ms | 0.0000ms | 23827342 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 46,911,689 | ±0.04% | 0.0000ms | 0.0000ms | 23455845 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 23,472,344 | ±0.19% | 0.0000ms | 0.1000ms | 11736173 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 7,483,872 | ±0.07% | 0.1000ms | 0.2000ms | 3741937 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,422,147 | ±0.13% | 0.2000ms | 0.3000ms | 2711074 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,710,656 | ±1.49% | 0.6000ms | 1.3000ms | 855329 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 950,257 | ±0.18% | 1.1000ms | 1.3000ms | 475129 |

**Key Insight:** Solid Signals is 50.34x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T12:10:41.226Z*
