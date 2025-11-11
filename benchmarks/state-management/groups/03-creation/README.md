# Store Creation

Instance creation overhead.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [03-creation - Jotai](#03-creation---jotai)
  - [03-creation - MobX](#03-creation---mobx)
  - [03-creation - Preact Signals](#03-creation---preact-signals)
  - [03-creation - Redux Toolkit](#03-creation---redux-toolkit)
  - [03-creation - Solid Signals](#03-creation---solid-signals)
  - [03-creation - Valtio](#03-creation---valtio)
  - [03-creation - Zen](#03-creation---zen)
  - [03-creation - Zustand](#03-creation---zustand)
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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 9.5M |
| 🥈 2 | [**Preact Signals**](https://github.com/preactjs/signals) | 8.4M |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 2.8M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 157K |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 16K |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 7K |
|  7 | [**Valtio**](https://github.com/pmndrs/valtio) | 4K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1K |

---

## Detailed Results

### Store Creation (x1)

```
🥇   Zen                ████████████████████████████████████████     44.5M ops/sec
🥈   Preact Signals     ██████████████████████████████████████       41.7M ops/sec
🥉   Solid Signals      █████████████████████████████████            36.2M ops/sec
4.   Zustand            █████████                                    10.4M ops/sec
5.   Jotai              █                                             1.6M ops/sec
6.   MobX               █                                             666K ops/sec
7.   Valtio                                                           316K ops/sec
8.   Redux Toolkit                                                    130K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 44,513,179 | ±0.05% | 0.0000ms | 0.0000ms | 22256591 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 41,738,178 | ±0.05% | 0.0000ms | 0.0000ms | 20869090 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 36,242,092 | ±1.01% | 0.0000ms | 0.0000ms | 18121047 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 10,431,471 | ±0.38% | 0.1000ms | 0.2000ms | 5215736 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,618,972 | ±18.49% | 0.6000ms | 0.6000ms | 809486 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 666,226 | ±0.85% | 1.5000ms | 3.3000ms | 333113 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 316,487 | ±119.53% | 3.2000ms | 2.0000ms | 215933 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 130,105 | ±6.54% | 7.7000ms | 21.2000ms | 65342 |

**Key Insight:** Zen is 342.13x faster than Redux Toolkit in this test.

### Store Creation (x10)

```
🥇   Zen                ████████████████████████████████████████     42.7M ops/sec
🥈   Preact Signals     ████████████████████████████████████         38.6M ops/sec
🥉   Solid Signals      ██████████████████████                       24.0M ops/sec
4.   Zustand            ██                                            1.7M ops/sec
5.   Jotai                                                            159K ops/sec
6.   MobX                                                              65K ops/sec
7.   Valtio                                                            37K ops/sec
8.   Redux Toolkit                                                     14K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 42,651,681 | ±0.04% | 0.0000ms | 0.0000ms | 21325841 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 38,644,759 | ±0.05% | 0.0000ms | 0.0000ms | 19322380 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 23,990,455 | ±3.03% | 0.0000ms | 0.1000ms | 11995228 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,669,023 | ±0.23% | 0.6000ms | 0.9000ms | 834512 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 159,220 | ±20.30% | 6.3000ms | 3.7000ms | 79971 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 64,560 | ±1.28% | 15.5000ms | 42.6000ms | 32280 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 36,818 | ±89.41% | 27.2000ms | 21.5000ms | 22608 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 14,263 | ±6.26% | 70.1000ms | 152.9000ms | 7135 |

**Key Insight:** Zen is 2990.30x faster than Redux Toolkit in this test.

### Store Creation (x100)

```
🥇   Zen                ████████████████████████████████████████     28.0M ops/sec
🥈   Preact Signals     ███████████████████████████████              21.5M ops/sec
🥉   Solid Signals      ███████                                       5.2M ops/sec
4.   Zustand                                                          163K ops/sec
5.   Jotai                                                             16K ops/sec
6.   MobX                                                               7K ops/sec
7.   Valtio                                                             6K ops/sec
8.   Redux Toolkit                                                      1K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 28,042,572 | ±0.09% | 0.0000ms | 0.0000ms | 14021287 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 21,454,608 | ±0.13% | 0.0000ms | 0.1000ms | 10727305 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 5,187,224 | ±2.79% | 0.2000ms | 0.5000ms | 2593613 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 162,703 | ±3.10% | 6.1000ms | 38.9000ms | 81352 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 15,966 | ±20.60% | 62.6000ms | 68.5000ms | 7983 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 6,925 | ±1.02% | 144.4000ms | 294.7000ms | 3463 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 6,205 | ±82.83% | 161.2000ms | 148.3000ms | 3140 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1,427 | ±6.23% | 701.0000ms | 4054.4000ms | 714 |

**Key Insight:** Zen is 19657.34x faster than Redux Toolkit in this test.

### Store Creation (x1000)

```
🥇   Zen                ████████████████████████████████████████      3.7M ops/sec
🥈   Preact Signals     █████████████████████████████████████         3.4M ops/sec
🥉   Solid Signals      ███████                                       601K ops/sec
4.   Zustand                                                           18K ops/sec
5.   Jotai                                                              2K ops/sec
6.   MobX                                                              643 ops/sec
7.   Valtio                                                            516 ops/sec
8.   Redux Toolkit                                                     134 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 3,699,898 | ±0.03% | 0.3000ms | 0.3000ms | 1849950 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 3,430,386 | ±0.03% | 0.3000ms | 0.4000ms | 1715193 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 601,273 | ±0.58% | 1.7000ms | 3.5000ms | 300637 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 18,448 | ±0.25% | 54.2000ms | 88.2000ms | 9224 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,639 | ±19.73% | 610.1000ms | 9207.5000ms | 833 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 643 | ±2.31% | 1554.9000ms | 2496.0000ms | 322 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 516 | ±70.25% | 1939.0000ms | 12594.1000ms | 320 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 134 | ±7.69% | 7483.9000ms | 16702.7000ms | 67 |

**Key Insight:** Zen is 27689.70x faster than Redux Toolkit in this test.

### Store Creation (x10000)

```
🥇   Zen                ████████████████████████████████████████      395K ops/sec
🥈   Preact Signals     ███████████████████████████████████           344K ops/sec
🥉   Solid Signals      ██████                                         62K ops/sec
4.   Zustand                                                            2K ops/sec
5.   Jotai                                                             159 ops/sec
6.   MobX                                                               66 ops/sec
7.   Valtio                                                             46 ops/sec
8.   Redux Toolkit                                                      14 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 394,931 | ±0.04% | 2.5000ms | 3.1000ms | 197466 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 343,847 | ±0.07% | 2.9000ms | 4.3000ms | 171924 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 61,648 | ±0.54% | 16.2000ms | 35.5000ms | 30824 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,814 | ±0.63% | 551.2000ms | 699.8000ms | 908 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 159 | ±15.52% | 6270.4000ms | 12490.5000ms | 80 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 66 | ±1.80% | 15239.3000ms | 16999.7000ms | 33 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 46 | ±77.01% | 21837.6000ms | 195550.0000ms | 31 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 14 | ±2.31% | 69448.8000ms | 74042.1000ms | 10 |

**Key Insight:** Zen is 27427.49x faster than Redux Toolkit in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:creation

# Or run specific test file
npx vitest bench groups/03-creation/*.bench.ts
```

---
*Last generated: 2025-11-11T10:50:09.776Z*
