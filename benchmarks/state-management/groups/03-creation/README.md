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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 10.1M |
| 🥈 2 | [**Preact Signals**](https://github.com/preactjs/signals) | 7.6M |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 3.2M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 180K |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 14K |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 8K |
|  7 | [**Valtio**](https://github.com/pmndrs/valtio) | 4K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1K |

---

## Detailed Results

### Store Creation (x1)

```
🥇   Zen                ████████████████████████████████████████     49.3M ops/sec
🥈   Solid Signals      ███████████████████████████████████          43.0M ops/sec
🥉   Preact Signals     ████████████████████████████████             39.0M ops/sec
4.   Zustand            ███████████                                  13.4M ops/sec
5.   Jotai              █                                             1.4M ops/sec
6.   MobX               █                                             736K ops/sec
7.   Valtio                                                           317K ops/sec
8.   Redux Toolkit                                                    116K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 49,331,496 | ±0.05% | 0.0000ms | 0.0000ms | 24665749 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 43,030,860 | ±0.10% | 0.0000ms | 0.0000ms | 21515431 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 38,952,071 | ±0.10% | 0.0000ms | 0.0000ms | 19476036 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 13,389,168 | ±1.67% | 0.1000ms | 0.2000ms | 6694585 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,448,846 | ±20.19% | 0.7000ms | 0.6000ms | 728805 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 735,923 | ±0.85% | 1.4000ms | 1.9000ms | 367962 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 316,619 | ±116.13% | 3.2000ms | 2.3000ms | 232649 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 116,276 | ±6.62% | 8.6000ms | 23.8000ms | 58159 |

**Key Insight:** Zen is 424.26x faster than Redux Toolkit in this test.

### Store Creation (x10)

```
🥇   Zen                ████████████████████████████████████████     46.7M ops/sec
🥈   Preact Signals     ███████████████████████████████              36.4M ops/sec
🥉   Solid Signals      ████████████████████████                     28.1M ops/sec
4.   Zustand            ██                                            1.9M ops/sec
5.   Jotai                                                            141K ops/sec
6.   MobX                                                              76K ops/sec
7.   Valtio                                                            38K ops/sec
8.   Redux Toolkit                                                     12K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 46,692,703 | ±0.04% | 0.0000ms | 0.0000ms | 23346352 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 36,377,471 | ±0.07% | 0.0000ms | 0.0000ms | 18188736 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 28,109,285 | ±0.33% | 0.0000ms | 0.1000ms | 14054643 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,874,081 | ±0.22% | 0.5000ms | 0.8000ms | 937041 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 141,158 | ±22.88% | 7.1000ms | 3.3000ms | 71020 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 76,162 | ±1.30% | 13.1000ms | 20.2000ms | 38081 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 37,699 | ±82.78% | 26.5000ms | 12.5000ms | 24219 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 12,116 | ±6.76% | 82.5000ms | 202.7000ms | 6058 |

**Key Insight:** Zen is 3853.96x faster than Redux Toolkit in this test.

### Store Creation (x100)

```
🥇   Zen                ████████████████████████████████████████     30.8M ops/sec
🥈   Preact Signals     ██████████████████████████                   20.1M ops/sec
🥉   Solid Signals      ████████                                      6.3M ops/sec
4.   Zustand                                                          192K ops/sec
5.   Jotai                                                             15K ops/sec
6.   MobX                                                               8K ops/sec
7.   Valtio                                                             4K ops/sec
8.   Redux Toolkit                                                      1K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 30,751,262 | ±0.04% | 0.0000ms | 0.0000ms | 15375632 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 20,051,723 | ±0.27% | 0.0000ms | 0.1000ms | 10025862 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 6,271,459 | ±0.44% | 0.2000ms | 0.4000ms | 3135730 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 192,276 | ±0.21% | 5.2000ms | 6.5000ms | 96138 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 14,545 | ±22.83% | 68.8000ms | 58.3000ms | 7273 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 7,832 | ±0.85% | 127.7000ms | 144.4000ms | 3916 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,003 | ±86.03% | 249.8000ms | 144.6000ms | 2327 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1,201 | ±6.77% | 832.4000ms | 5111.0000ms | 601 |

**Key Insight:** Zen is 25598.53x faster than Redux Toolkit in this test.

### Store Creation (x1000)

```
🥇   Zen                ████████████████████████████████████████      3.7M ops/sec
🥈   Preact Signals     ████████████████████████████████              3.0M ops/sec
🥉   Solid Signals      ███████                                       651K ops/sec
4.   Zustand                                                           20K ops/sec
5.   Jotai                                                              1K ops/sec
6.   MobX                                                              743 ops/sec
7.   Valtio                                                            474 ops/sec
8.   Redux Toolkit                                                     126 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 3,693,596 | ±0.02% | 0.3000ms | 0.3000ms | 1846798 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 2,998,850 | ±0.05% | 0.3000ms | 0.5000ms | 1499425 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 651,288 | ±0.54% | 1.5000ms | 3.2000ms | 325658 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 19,684 | ±0.26% | 50.8000ms | 88.8000ms | 9843 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,433 | ±22.30% | 697.9000ms | 10674.4000ms | 719 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 743 | ±3.07% | 1346.0000ms | 2329.2000ms | 372 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 474 | ±79.40% | 2110.5000ms | 13534.7000ms | 237 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 126 | ±6.13% | 7935.3000ms | 16296.2000ms | 64 |

**Key Insight:** Zen is 29309.60x faster than Redux Toolkit in this test.

### Store Creation (x10000)

```
🥇   Zen                ████████████████████████████████████████      396K ops/sec
🥈   Preact Signals     ███████████████████████████████               304K ops/sec
🥉   Solid Signals      ███████                                        71K ops/sec
4.   Zustand                                                            2K ops/sec
5.   Jotai                                                             139 ops/sec
6.   MobX                                                               79 ops/sec
7.   Valtio                                                             45 ops/sec
8.   Redux Toolkit                                                      12 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 396,126 | ±0.02% | 2.5000ms | 3.1000ms | 198063 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 304,120 | ±0.15% | 3.3000ms | 5.7000ms | 152061 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 71,093 | ±0.41% | 14.1000ms | 29.1000ms | 35547 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,966 | ±0.29% | 508.7000ms | 591.6000ms | 983 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 139 | ±17.43% | 7195.9000ms | 14265.4000ms | 71 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 79 | ±0.67% | 12579.1000ms | 13161.3000ms | 40 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 45 | ±82.79% | 22272.1000ms | 221320.0000ms | 31 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 12 | ±3.55% | 82831.5000ms | 87559.8000ms | 10 |

**Key Insight:** Zen is 32811.68x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T10:17:56.764Z*
