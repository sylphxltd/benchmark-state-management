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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 4.4M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 1.9M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 1.6M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 363K |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 79K |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 51K |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 18K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 8K |

---

## Detailed Results

### Batch Update (x10)

```
🥇   Solid Signals      ████████████████████████████████████████     40.6M ops/sec
🥈   Zen                ███████████████████                          19.8M ops/sec
🥉   Preact Signals     ████████████████                             16.1M ops/sec
4.   Zustand            ████                                          3.7M ops/sec
5.   MobX               █                                             788K ops/sec
6.   Valtio             █                                             521K ops/sec
7.   Jotai                                                            176K ops/sec
8.   Redux Toolkit                                                     84K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 40,610,087 | ±0.04% | 0.0000ms | 0.0000ms | 20305044 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 19,779,517 | ±0.03% | 0.1000ms | 0.1000ms | 9889759 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 16,111,614 | ±0.15% | 0.1000ms | 0.1000ms | 8055807 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,706,587 | ±0.20% | 0.3000ms | 0.4000ms | 1853294 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 787,505 | ±0.19% | 1.3000ms | 1.6000ms | 393753 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 521,427 | ±1.38% | 1.9000ms | 3.1000ms | 260714 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 175,786 | ±0.94% | 5.7000ms | 9.0000ms | 87894 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 83,554 | ±2.72% | 12.0000ms | 27.3000ms | 41777 |

**Key Insight:** Solid Signals is 486.03x faster than Redux Toolkit in this test.

### Batch Update (x100)

```
🥇   Solid Signals      ████████████████████████████████████████      8.8M ops/sec
🥈   Zen                █████████████                                 2.9M ops/sec
🥉   Preact Signals     ███████████                                   2.4M ops/sec
4.   Zustand            ██                                            413K ops/sec
5.   MobX                                                              81K ops/sec
6.   Valtio                                                            53K ops/sec
7.   Jotai                                                             18K ops/sec
8.   Redux Toolkit                                                      9K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 8,813,111 | ±0.03% | 0.1000ms | 0.2000ms | 4406557 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 2,939,845 | ±0.02% | 0.3000ms | 0.4000ms | 1469923 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 2,367,775 | ±0.06% | 0.4000ms | 0.7000ms | 1183888 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 413,432 | ±0.16% | 2.4000ms | 3.0000ms | 206717 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 81,248 | ±0.22% | 12.3000ms | 15.2000ms | 40625 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 52,568 | ±0.34% | 19.0000ms | 31.7000ms | 26285 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 18,194 | ±0.70% | 55.0000ms | 79.9000ms | 9098 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 8,849 | ±0.53% | 113.0000ms | 218.3000ms | 4425 |

**Key Insight:** Solid Signals is 995.95x faster than Redux Toolkit in this test.

### Batch Update (x1000)

```
🥇   Solid Signals      ████████████████████████████████████████      1.0M ops/sec
🥈   Zen                ████████████                                  306K ops/sec
🥉   Preact Signals     ██████████                                    252K ops/sec
4.   Zustand            ██                                             42K ops/sec
5.   MobX                                                               8K ops/sec
6.   Valtio                                                             5K ops/sec
7.   Jotai                                                              2K ops/sec
8.   Redux Toolkit                                                     836 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 1,010,912 | ±0.03% | 1.0000ms | 1.2000ms | 505457 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 305,994 | ±0.06% | 3.3000ms | 4.0000ms | 152997 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 251,974 | ±0.09% | 4.0000ms | 5.6000ms | 125988 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 42,307 | ±0.16% | 23.6000ms | 26.8000ms | 21154 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 8,115 | ±0.30% | 123.2000ms | 158.7000ms | 4058 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,106 | ±1.02% | 195.8000ms | 410.3000ms | 2554 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,865 | ±0.86% | 536.3000ms | 777.5000ms | 933 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 836 | ±1.42% | 1196.0000ms | 1717.3000ms | 419 |

**Key Insight:** Solid Signals is 1209.01x faster than Redux Toolkit in this test.

### Batch Update (x10000)

```
🥇   Solid Signals      ████████████████████████████████████████      103K ops/sec
🥈   Zen                ████████████                                   30K ops/sec
🥉   Preact Signals     ██████████                                     26K ops/sec
4.   Zustand            ██                                              4K ops/sec
5.   MobX                                                              807 ops/sec
6.   Valtio                                                            508 ops/sec
7.   Jotai                                                             188 ops/sec
8.   Redux Toolkit                                                      82 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 102,672 | ±0.07% | 9.7000ms | 13.1000ms | 51336 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 30,211 | ±0.07% | 33.1000ms | 37.6000ms | 15106 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 25,634 | ±0.19% | 39.0000ms | 47.2000ms | 12818 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 4,091 | ±0.30% | 244.4000ms | 303.9000ms | 2046 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 807 | ±1.84% | 1239.4000ms | 1741.3000ms | 404 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 508 | ±2.50% | 1969.2000ms | 3087.5000ms | 254 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 188 | ±1.46% | 5330.3000ms | 8167.6000ms | 94 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 82 | ±1.93% | 12204.4000ms | 14303.0000ms | 41 |

**Key Insight:** Solid Signals is 1253.05x faster than Redux Toolkit in this test.

### Single Update

```
🥇   Zen                ████████████████████████████████████████     46.6M ops/sec
🥈   Solid Signals      ██████████████████████████████████████       44.1M ops/sec
🥉   Preact Signals     ██████████████████████████████████           39.6M ops/sec
4.   Zustand            ████████████████████                         23.7M ops/sec
5.   MobX               ██████                                        7.3M ops/sec
6.   Valtio             ████                                          4.6M ops/sec
7.   Jotai              █                                             1.7M ops/sec
8.   Redux Toolkit      █                                             843K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 46,613,649 | ±0.05% | 0.0000ms | 0.0000ms | 23306825 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 44,122,189 | ±0.63% | 0.0000ms | 0.0000ms | 22061095 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 39,627,000 | ±0.16% | 0.0000ms | 0.0000ms | 19813712 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 23,660,761 | ±1.07% | 0.0000ms | 0.1000ms | 11830381 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 7,256,684 | ±0.06% | 0.1000ms | 0.2000ms | 3628342 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,636,638 | ±0.29% | 0.2000ms | 0.5000ms | 2318319 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,688,293 | ±1.39% | 0.6000ms | 1.3000ms | 844147 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 842,542 | ±0.21% | 1.2000ms | 1.5000ms | 421272 |

**Key Insight:** Zen is 55.32x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T10:17:56.707Z*
