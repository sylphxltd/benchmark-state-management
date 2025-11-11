# Read Operations

Simple read and high-frequency read patterns.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [01-read - Jotai](#01-read---jotai)
  - [01-read - MobX](#01-read---mobx)
  - [01-read - Preact Signals](#01-read---preact-signals)
  - [01-read - Redux Toolkit](#01-read---redux-toolkit)
  - [01-read - Solid Signals](#01-read---solid-signals)
  - [01-read - Valtio](#01-read---valtio)
  - [01-read - Zen](#01-read---zen)
  - [01-read - Zustand](#01-read---zustand)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 9.9M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 8.6M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 4.1M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 3.8M |
|  5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1.5M |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 699K |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 381K |
|  8 | [**Jotai**](https://github.com/pmndrs/jotai) | 55K |

---

## Detailed Results

### High Frequency Read (x10)

```
🥇   Solid Signals      ████████████████████████████████████████     45.3M ops/sec
🥈   Zen                ██████████████████████████████████████       42.6M ops/sec
🥉   Preact Signals     ████████████████████████████████             36.1M ops/sec
4.   Zustand            ███████████████████████████████              34.8M ops/sec
5.   Redux Toolkit      ████████████████████████████                 32.1M ops/sec
6.   Valtio             ██████████                                   10.9M ops/sec
7.   MobX               █████                                         5.3M ops/sec
8.   Jotai              █                                             758K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 45,296,910 | ±0.05% | 0.0000ms | 0.0000ms | 22648456 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 42,587,888 | ±0.36% | 0.0000ms | 0.0000ms | 21293945 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 36,089,737 | ±0.04% | 0.0000ms | 0.0000ms | 18044870 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 34,797,279 | ±1.53% | 0.0000ms | 0.0000ms | 17398640 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 32,071,434 | ±0.52% | 0.0000ms | 0.0000ms | 16035718 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 10,948,363 | ±0.02% | 0.1000ms | 0.1000ms | 5474182 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 5,332,531 | ±0.05% | 0.2000ms | 0.3000ms | 2666266 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 757,683 | ±0.20% | 1.3000ms | 1.7000ms | 378842 |

**Key Insight:** Solid Signals is 59.78x faster than Jotai in this test.

### High Frequency Read (x100)

```
🥇   Solid Signals      ████████████████████████████████████████     30.0M ops/sec
🥈   Zen                ██████████████████████████████               22.2M ops/sec
🥉   Zustand            ████████████                                  9.0M ops/sec
4.   Preact Signals     ███████████                                   8.3M ops/sec
5.   Redux Toolkit      ████████                                      6.2M ops/sec
6.   Valtio             ██                                            1.4M ops/sec
7.   MobX               █                                             605K ops/sec
8.   Jotai                                                             77K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 30,042,491 | ±0.06% | 0.0000ms | 0.0000ms | 15021246 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 22,211,241 | ±0.03% | 0.0000ms | 0.1000ms | 11105621 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 8,961,798 | ±0.02% | 0.1000ms | 0.1000ms | 4480900 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 8,324,951 | ±0.03% | 0.1000ms | 0.2000ms | 4162476 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 6,170,763 | ±0.03% | 0.2000ms | 0.2000ms | 3085382 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,384,997 | ±0.03% | 0.7000ms | 0.9000ms | 692499 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 605,052 | ±0.21% | 1.7000ms | 2.0000ms | 302527 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 77,490 | ±0.24% | 12.9000ms | 15.4000ms | 38745 |

**Key Insight:** Solid Signals is 387.70x faster than Jotai in this test.

### High Frequency Read (x1000)

```
🥇   Solid Signals      ████████████████████████████████████████      3.7M ops/sec
🥈   Zen                █████████████████████████████████             3.1M ops/sec
🥉   Zustand            ████████████                                  1.1M ops/sec
4.   Preact Signals     ██████████                                    921K ops/sec
5.   Redux Toolkit      ████████                                      715K ops/sec
6.   Valtio             ██                                            145K ops/sec
7.   MobX               █                                              62K ops/sec
8.   Jotai                                                              8K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 3,726,591 | ±0.02% | 0.3000ms | 0.3000ms | 1863296 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 3,101,571 | ±0.03% | 0.3000ms | 0.4000ms | 1550786 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,110,476 | ±0.04% | 0.9000ms | 1.1000ms | 555238 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 920,881 | ±0.02% | 1.1000ms | 1.3000ms | 460441 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 715,112 | ±0.02% | 1.4000ms | 1.5000ms | 357557 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 144,775 | ±0.03% | 6.9000ms | 8.2000ms | 72388 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 62,495 | ±0.03% | 16.0000ms | 18.2000ms | 31248 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 7,760 | ±0.45% | 128.9000ms | 162.4000ms | 3881 |

**Key Insight:** Solid Signals is 480.23x faster than Jotai in this test.

### High Frequency Read (x10000)

```
🥇   Solid Signals      ████████████████████████████████████████      398K ops/sec
🥈   Zen                ████████████████████████████████████          353K ops/sec
🥉   Zustand            ██████████                                    100K ops/sec
4.   Preact Signals     █████████                                      89K ops/sec
5.   Redux Toolkit      ███████                                        66K ops/sec
6.   Valtio             █                                              15K ops/sec
7.   MobX               █                                               6K ops/sec
8.   Jotai                                                             776 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 397,965 | ±0.03% | 2.5000ms | 3.1000ms | 198983 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 353,334 | ±0.02% | 2.8000ms | 3.5000ms | 176668 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 99,917 | ±0.03% | 10.0000ms | 11.8000ms | 49959 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 88,775 | ±0.03% | 11.3000ms | 12.8000ms | 44388 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 66,406 | ±0.03% | 15.1000ms | 17.1000ms | 33204 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 14,603 | ±0.07% | 68.5000ms | 75.0000ms | 7302 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 6,163 | ±0.05% | 162.3000ms | 170.5000ms | 3082 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 776 | ±0.28% | 1288.5000ms | 1452.8000ms | 389 |

**Key Insight:** Solid Signals is 512.77x faster than Jotai in this test.

### Simple Read

```
🥇   Solid Signals      ████████████████████████████████████████     47.0M ops/sec
🥈   Preact Signals     ███████████████████████████████████████      46.4M ops/sec
🥉   Zen                ██████████████████████████████████████       44.5M ops/sec
4.   Zustand            ███████████████████                          22.5M ops/sec
5.   MobX               ██████                                        6.5M ops/sec
6.   Valtio             ████                                          5.2M ops/sec
7.   Jotai              █                                             1.4M ops/sec
8.   Redux Toolkit      █                                             947K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 47,028,358 | ±0.06% | 0.0000ms | 0.0000ms | 23514181 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 46,422,062 | ±0.06% | 0.0000ms | 0.0000ms | 23211033 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 44,472,927 | ±0.04% | 0.0000ms | 0.0000ms | 22236464 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 22,546,784 | ±0.82% | 0.0000ms | 0.1000ms | 11273392 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 6,473,124 | ±0.54% | 0.2000ms | 0.2000ms | 3236562 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,221,595 | ±0.16% | 0.2000ms | 0.3000ms | 2610798 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,381,060 | ±1.21% | 0.7000ms | 1.5000ms | 690531 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 947,175 | ±0.21% | 1.1000ms | 1.4000ms | 473588 |

**Key Insight:** Solid Signals is 49.65x faster than Redux Toolkit in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:read

# Or run specific test file
npx vitest bench groups/01-read/*.bench.ts
```

---
*Last generated: 2025-11-11T11:38:36.316Z*
