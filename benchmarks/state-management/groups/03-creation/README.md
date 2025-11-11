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
| 🥇 1 | [**Preact Signals**](https://github.com/preactjs/signals) | 👑 6.4M |
| 🥈 2 | [**Solid Signals**](https://github.com/solidjs/solid) | 2.3M |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 1.5M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 92K |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 5K |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 4K |
|  7 | [**Valtio**](https://github.com/pmndrs/valtio) | 2K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 714 |

---

## Detailed Results

### Store Creation (x1)

```
🥇   Zen                ████████████████████████████████████████     45.5M ops/sec
🥈   Preact Signals     ███████████████████████████                  30.7M ops/sec
🥉   Solid Signals      █████████████████████████                    28.6M ops/sec
4.   Zustand            ██████                                        7.0M ops/sec
5.   Jotai                                                            525K ops/sec
6.   Valtio                                                           361K ops/sec
7.   MobX                                                             251K ops/sec
8.   Redux Toolkit                                                     57K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 45,464,844 | ±0.07% | 0.0000ms | 0.0000ms | 22732422 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 30,694,432 | ±0.92% | 0.0000ms | 0.1000ms | 15347217 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 28,611,641 | ±1.63% | 0.0000ms | 0.1000ms | 14305821 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 7,046,329 | ±3.17% | 0.1000ms | 0.2000ms | 3523165 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 525,329 | ±35.74% | 1.9000ms | 1.9000ms | 266365 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 361,488 | ±63.51% | 2.8000ms | 3.2000ms | 183109 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 251,077 | ±13.90% | 4.0000ms | 6.8000ms | 125564 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 57,195 | ±11.63% | 17.5000ms | 77.2000ms | 28641 |

**Key Insight:** Zen is 794.91x faster than Redux Toolkit in this test.

### Store Creation (x10)

```
🥇   Preact Signals     ████████████████████████████████████████     27.3M ops/sec
🥈   Solid Signals      ██████████████████████████████               20.5M ops/sec
🥉   Zen                █████████████████████████                    17.0M ops/sec
4.   Zustand            █                                             880K ops/sec
5.   Jotai                                                             57K ops/sec
6.   MobX                                                              42K ops/sec
7.   Valtio                                                            22K ops/sec
8.   Redux Toolkit                                                      7K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 27,289,050 | ±1.54% | 0.0000ms | 0.1000ms | 13644526 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 20,499,393 | ±2.19% | 0.0000ms | 0.1000ms | 10249697 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 17,001,710 | ±3.09% | 0.1000ms | 0.1000ms | 8500856 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 880,256 | ±5.23% | 1.1000ms | 2.0000ms | 440129 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 56,887 | ±37.09% | 17.6000ms | 17.6000ms | 28456 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 42,494 | ±5.31% | 23.5000ms | 84.9000ms | 21248 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 21,940 | ±119.46% | 45.6000ms | 66.0000ms | 10970 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 7,465 | ±9.53% | 134.0000ms | 599.6000ms | 3748 |

**Key Insight:** Preact Signals is 3655.55x faster than Redux Toolkit in this test.

### Store Creation (x100)

```
🥇   Preact Signals     ████████████████████████████████████████     16.5M ops/sec
🥈   Solid Signals      ██████████                                    4.1M ops/sec
🥉   Zen                █████                                         2.2M ops/sec
4.   Zustand                                                          104K ops/sec
5.   Jotai                                                              4K ops/sec
6.   Valtio                                                             4K ops/sec
7.   MobX                                                               4K ops/sec
8.   Redux Toolkit                                                     754 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 16,494,285 | ±0.89% | 0.1000ms | 0.1000ms | 8247143 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 4,050,888 | ±1.30% | 0.2000ms | 0.8000ms | 2025444 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 2,241,034 | ±0.23% | 0.4000ms | 0.7000ms | 1120517 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 104,468 | ±2.14% | 9.6000ms | 21.7000ms | 52234 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 4,357 | ±47.93% | 229.5000ms | 1188.0000ms | 2179 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 3,733 | ±36.34% | 267.8000ms | 1313.4000ms | 1867 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 3,733 | ±7.74% | 267.9000ms | 1416.8000ms | 1867 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 754 | ±11.02% | 1326.9000ms | 8244.4000ms | 377 |

**Key Insight:** Preact Signals is 21886.45x faster than Redux Toolkit in this test.

### Store Creation (x1000)

```
🥇   Preact Signals     ████████████████████████████████████████      2.6M ops/sec
🥈   Solid Signals      ███████                                       449K ops/sec
🥉   Zen                ███                                           213K ops/sec
4.   Zustand                                                            9K ops/sec
5.   Jotai                                                             490 ops/sec
6.   Valtio                                                            486 ops/sec
7.   MobX                                                              376 ops/sec
8.   Redux Toolkit                                                      69 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 2,644,669 | ±0.71% | 0.4000ms | 0.5000ms | 1322335 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 448,696 | ±2.47% | 2.2000ms | 6.5000ms | 224348 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 213,347 | ±3.25% | 4.7000ms | 32.5000ms | 106674 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 9,401 | ±5.17% | 106.4000ms | 456.3000ms | 4701 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 490 | ±39.87% | 2041.6000ms | 39319.3000ms | 245 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 486 | ±25.02% | 2057.9000ms | 25391.0000ms | 243 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 376 | ±13.62% | 2661.5000ms | 16761.9000ms | 188 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 69 | ±17.24% | 14512.6000ms | 40383.0000ms | 35 |

**Key Insight:** Preact Signals is 38381.05x faster than Redux Toolkit in this test.

### Store Creation (x10000)

```
🥇   Preact Signals     ████████████████████████████████████████      289K ops/sec
🥈   Solid Signals      ████████                                       55K ops/sec
🥉   Zen                ███                                            23K ops/sec
4.   Zustand                                                            1K ops/sec
5.   Jotai                                                              56 ops/sec
6.   MobX                                                               38 ops/sec
7.   Redux Toolkit                                                       8 ops/sec
8.   Valtio                                                              6 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 289,159 | ±0.85% | 3.5000ms | 7.2000ms | 144580 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 54,618 | ±0.96% | 18.3000ms | 50.7000ms | 27310 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 23,133 | ±0.18% | 43.2000ms | 58.6000ms | 11567 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,102 | ±4.48% | 907.6000ms | 3322.3000ms | 551 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 56 | ±34.29% | 17892.7000ms | 48856.5000ms | 28 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 38 | ±17.07% | 25974.4000ms | 55786.3000ms | 20 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 8 | ±9.36% | 119700.0000ms | 151520.0000ms | 10 |
| 8 | [**Valtio**](https://github.com/pmndrs/valtio) | 6 | ±178.71% | 155850.0000ms | 2825620.0000ms | 21 |

**Key Insight:** Preact Signals is 45064.89x faster than Valtio in this test.

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
*Last generated: 2025-11-11T16:09:48.606Z*
