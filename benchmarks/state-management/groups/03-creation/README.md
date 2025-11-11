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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 10.0M |
| 🥈 2 | [**Preact Signals**](https://github.com/preactjs/signals) | 9.5M |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 3.5M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 170K |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 15K |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 8K |
|  7 | [**Valtio**](https://github.com/pmndrs/valtio) | 6K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2K |

---

## Detailed Results

### Store Creation (x1)

```
🥇   Zen                ████████████████████████████████████████     48.3M ops/sec
🥈   Preact Signals     ████████████████████████████████████████     48.2M ops/sec
🥉   Solid Signals      ███████████████████████████████████████      46.7M ops/sec
4.   Zustand            ███████████                                  12.9M ops/sec
5.   Jotai              █                                             1.4M ops/sec
6.   MobX               █                                             796K ops/sec
7.   Valtio                                                           423K ops/sec
8.   Redux Toolkit                                                    144K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 48,343,446 | ±0.86% | 0.0000ms | 0.0000ms | 24171724 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 48,236,102 | ±0.07% | 0.0000ms | 0.0000ms | 24118053 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 46,657,198 | ±0.05% | 0.0000ms | 0.0000ms | 23328601 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,861,293 | ±0.30% | 0.1000ms | 0.2000ms | 6430647 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,397,114 | ±20.75% | 0.7000ms | 0.7000ms | 699487 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 795,623 | ±0.74% | 1.3000ms | 1.6000ms | 397812 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 423,018 | ±112.69% | 2.4000ms | 1.5000ms | 211509 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 144,184 | ±6.05% | 6.9000ms | 15.9000ms | 72185 |

**Key Insight:** Zen is 335.29x faster than Redux Toolkit in this test.

### Store Creation (x10)

```
🥇   Zen                ████████████████████████████████████████     45.8M ops/sec
🥈   Preact Signals     ████████████████████████████████████████     45.4M ops/sec
🥉   Solid Signals      █████████████████████████                    28.7M ops/sec
4.   Zustand            ██                                            1.8M ops/sec
5.   Jotai                                                            153K ops/sec
6.   MobX                                                              81K ops/sec
7.   Valtio                                                            52K ops/sec
8.   Redux Toolkit                                                     15K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 45,755,461 | ±0.04% | 0.0000ms | 0.0000ms | 22877731 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 45,429,889 | ±0.04% | 0.0000ms | 0.0000ms | 22714945 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 28,710,401 | ±3.03% | 0.0000ms | 0.1000ms | 14355201 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,842,191 | ±0.18% | 0.5000ms | 0.8000ms | 921096 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 152,510 | ±21.32% | 6.6000ms | 3.9000ms | 76255 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 81,204 | ±0.81% | 12.3000ms | 16.0000ms | 40603 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 51,992 | ±68.71% | 19.2000ms | 8.8000ms | 32346 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 14,615 | ±6.10% | 68.4000ms | 130.1000ms | 7308 |

**Key Insight:** Zen is 3130.64x faster than Redux Toolkit in this test.

### Store Creation (x100)

```
🥇   Zen                ████████████████████████████████████████     30.4M ops/sec
🥈   Preact Signals     ████████████████████████████████             24.3M ops/sec
🥉   Solid Signals      █████████                                     7.0M ops/sec
4.   Zustand                                                          168K ops/sec
5.   Jotai                                                             16K ops/sec
6.   MobX                                                               8K ops/sec
7.   Valtio                                                             5K ops/sec
8.   Redux Toolkit                                                      2K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 30,435,131 | ±0.03% | 0.0000ms | 0.0000ms | 15217566 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 24,289,716 | ±0.05% | 0.0000ms | 0.1000ms | 12144859 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 6,983,094 | ±0.35% | 0.1000ms | 0.4000ms | 3491547 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 168,157 | ±2.16% | 5.9000ms | 34.2000ms | 84079 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 15,782 | ±20.86% | 63.4000ms | 58.8000ms | 7891 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 8,359 | ±0.84% | 119.6000ms | 142.1000ms | 4180 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,919 | ±69.98% | 203.3000ms | 93.7000ms | 3173 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1,574 | ±4.93% | 635.2000ms | 3472.3000ms | 788 |

**Key Insight:** Zen is 19331.63x faster than Redux Toolkit in this test.

### Store Creation (x1000)

```
🥇   Zen                ████████████████████████████████████████      3.7M ops/sec
🥈   Preact Signals     ███████████████████████████████████████       3.6M ops/sec
🥉   Solid Signals      ████████                                      733K ops/sec
4.   Zustand                                                           19K ops/sec
5.   Jotai                                                              2K ops/sec
6.   MobX                                                              843 ops/sec
7.   Valtio                                                            664 ops/sec
8.   Redux Toolkit                                                     159 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 3,720,981 | ±0.03% | 0.3000ms | 0.3000ms | 1860491 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 3,608,959 | ±0.02% | 0.3000ms | 0.3000ms | 1804480 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 732,850 | ±0.71% | 1.4000ms | 3.0000ms | 366425 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 18,882 | ±0.25% | 53.0000ms | 88.1000ms | 9442 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,575 | ±20.39% | 634.8000ms | 9739.5000ms | 788 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 843 | ±0.83% | 1186.3000ms | 1702.0000ms | 422 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 664 | ±62.48% | 1505.7000ms | 10546.7000ms | 349 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 159 | ±4.45% | 6284.4000ms | 9174.5000ms | 80 |

**Key Insight:** Zen is 23384.75x faster than Redux Toolkit in this test.

### Store Creation (x10000)

```
🥇   Zen                ████████████████████████████████████████      398K ops/sec
🥈   Preact Signals     ████████████████████████████████████████      394K ops/sec
🥉   Solid Signals      ████████                                       77K ops/sec
4.   Zustand                                                            2K ops/sec
5.   Jotai                                                             160 ops/sec
6.   Valtio                                                             85 ops/sec
7.   MobX                                                               83 ops/sec
8.   Redux Toolkit                                                      16 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 397,624 | ±0.04% | 2.5000ms | 2.6000ms | 198813 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 394,135 | ±0.02% | 2.5000ms | 3.2000ms | 197068 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 76,851 | ±0.47% | 13.0000ms | 29.5000ms | 38426 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,899 | ±0.39% | 526.5000ms | 638.8000ms | 950 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 160 | ±15.73% | 6263.4000ms | 12037.3000ms | 80 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 85 | ±31.83% | 11753.3000ms | 82406.3000ms | 43 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 83 | ±0.64% | 12001.0000ms | 12609.5000ms | 42 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 16 | ±2.83% | 63599.0000ms | 69072.5000ms | 10 |

**Key Insight:** Zen is 25288.55x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T11:38:36.418Z*
