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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 1.3M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 895K |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 845K |
|  4 | [**Zen**](https://github.com/SylphxAI/zen) | 783K |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 56K |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 41K |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 10K |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 4K |

---

## Detailed Results

### Batch Update (x10)

```
🥇   Solid Signals      ████████████████████████████████████████     12.7M ops/sec
🥈   Jotai              ████████████████████████████                  8.9M ops/sec
🥉   Preact Signals     ████████████████████████████                  8.8M ops/sec
4.   Zen                █████████████████████████                     7.9M ops/sec
5.   Valtio             ██                                            569K ops/sec
6.   MobX               █                                             402K ops/sec
7.   Redux Toolkit                                                     94K ops/sec
8.   Zustand                                                           37K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 12,729,971 | ±0.02% | 0.1000ms | 0.1000ms | 6364986 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 8,939,128 | ±0.08% | 0.1000ms | 0.1000ms | 4469564 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 8,836,088 | ±0.03% | 0.1000ms | 0.2000ms | 4418044 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 7,873,491 | ±0.03% | 0.1000ms | 0.2000ms | 3936746 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 568,648 | ±0.12% | 1.8000ms | 2.1000ms | 284325 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 402,136 | ±2.11% | 2.5000ms | 3.3000ms | 201068 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 93,819 | ±1.86% | 10.7000ms | 20.8000ms | 46910 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 36,754 | ±1.40% | 27.2000ms | 42.1000ms | 18377 |

**Key Insight:** Solid Signals is 346.36x faster than Zustand in this test.

### Batch Update (x100)

```
🥇   Solid Signals      ████████████████████████████████████████      1.7M ops/sec
🥈   Jotai              ██████████████████████████                    1.1M ops/sec
🥉   Preact Signals     █████████████████████████                     1.1M ops/sec
4.   Zen                █████████████████████                         894K ops/sec
5.   Valtio             █                                              58K ops/sec
6.   MobX               █                                              42K ops/sec
7.   Redux Toolkit                                                     10K ops/sec
8.   Zustand                                                            4K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 1,707,223 | ±0.04% | 0.6000ms | 0.7000ms | 853612 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,091,997 | ±0.31% | 0.9000ms | 1.1000ms | 545999 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 1,073,137 | ±0.17% | 0.9000ms | 1.1000ms | 536569 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 894,414 | ±0.06% | 1.1000ms | 1.4000ms | 447207 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 57,822 | ±0.13% | 17.3000ms | 19.5000ms | 28911 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 41,777 | ±0.17% | 23.9000ms | 26.9000ms | 20889 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 9,811 | ±0.30% | 101.9000ms | 114.5000ms | 4906 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,832 | ±0.19% | 261.0000ms | 289.0000ms | 1916 |

**Key Insight:** Solid Signals is 445.57x faster than Zustand in this test.

### Batch Update (x1000)

```
🥇   Solid Signals      ████████████████████████████████████████      178K ops/sec
🥈   Jotai              █████████████████████████                     112K ops/sec
🥉   Preact Signals     ████████████████████████                      107K ops/sec
4.   Zen                ██████████████████████                         98K ops/sec
5.   Valtio             █                                               6K ops/sec
6.   MobX               █                                               4K ops/sec
7.   Redux Toolkit                                                     982 ops/sec
8.   Zustand                                                           381 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 177,603 | ±0.03% | 5.6000ms | 6.9000ms | 88802 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 112,070 | ±0.30% | 8.9000ms | 10.4000ms | 56035 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 107,265 | ±0.11% | 9.3000ms | 11.7000ms | 53633 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 98,374 | ±0.04% | 10.2000ms | 11.6000ms | 49188 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,722 | ±0.14% | 174.8000ms | 185.9000ms | 2861 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 4,200 | ±0.16% | 238.1000ms | 260.2000ms | 2100 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 982 | ±0.29% | 1018.0000ms | 1149.9000ms | 492 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 381 | ±0.30% | 2627.8000ms | 2814.0000ms | 191 |

**Key Insight:** Solid Signals is 466.71x faster than Zustand in this test.

### Batch Update (x10000)

```
🥇   Solid Signals      ████████████████████████████████████████       17K ops/sec
🥈   Jotai              ██████████████████████████                     11K ops/sec
🥉   Preact Signals     ██████████████████████                         10K ops/sec
4.   Zen                ██████████████████████                         10K ops/sec
5.   Valtio             █                                              569 ops/sec
6.   MobX               █                                              413 ops/sec
7.   Redux Toolkit                                                      98 ops/sec
8.   Zustand                                                            38 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 17,482 | ±0.08% | 57.2000ms | 62.5000ms | 8741 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 11,268 | ±0.36% | 88.7000ms | 99.5000ms | 5634 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 9,664 | ±0.17% | 103.5000ms | 120.2000ms | 4832 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 9,548 | ±0.21% | 104.7000ms | 120.5000ms | 4774 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 569 | ±0.13% | 1757.8000ms | 1846.2000ms | 285 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 413 | ±0.31% | 2421.6000ms | 2574.7000ms | 207 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 98 | ±0.45% | 10246.9000ms | 10806.5000ms | 49 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 38 | ±0.66% | 26013.1000ms | 26896.7000ms | 20 |

**Key Insight:** Solid Signals is 454.76x faster than Zustand in this test.

### Single Update

```
🥇   Solid Signals      ████████████████████████████████████████     49.4M ops/sec
🥈   Jotai              ██████████████████████████████████████       46.7M ops/sec
🥉   Zen                ████████████████████████████████████         44.5M ops/sec
4.   Preact Signals     ████████████████████████████████████         43.9M ops/sec
5.   Valtio             ████                                          5.2M ops/sec
6.   MobX               ███                                           3.8M ops/sec
7.   Redux Toolkit      █                                             941K ops/sec
8.   Zustand                                                          384K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 49,398,577 | ±0.06% | 0.0000ms | 0.0000ms | 24699290 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 46,675,615 | ±0.06% | 0.0000ms | 0.0000ms | 23337808 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 44,497,481 | ±0.05% | 0.0000ms | 0.0000ms | 22248741 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 43,906,702 | ±0.27% | 0.0000ms | 0.0000ms | 21953352 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,226,286 | ±0.11% | 0.2000ms | 0.2000ms | 2613143 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 3,820,590 | ±0.17% | 0.3000ms | 0.3000ms | 1910295 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 941,328 | ±0.22% | 1.1000ms | 1.3000ms | 470665 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 384,169 | ±0.09% | 2.6000ms | 3.0000ms | 192085 |

**Key Insight:** Solid Signals is 128.59x faster than Zustand in this test.

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
*Last generated: 2025-11-11T09:09:20.801Z*
