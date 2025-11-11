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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 10.1M |
| 🥈 2 | [**Solid Signals**](https://github.com/solidjs/solid) | 6.1M |
| 🥉 3 | [**Zustand**](https://github.com/pmndrs/zustand) | 2.2M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 2.1M |
|  5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 958K |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 443K |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 242K |
|  8 | [**Jotai**](https://github.com/pmndrs/jotai) | 31K |

---

## Detailed Results

### High Frequency Read (x10)

```
🥇   Zen                ████████████████████████████████████████     46.9M ops/sec
🥈   Solid Signals      ███████████████████████                      26.6M ops/sec
🥉   Zustand            ████████████████████                         23.9M ops/sec
4.   Preact Signals     ██████████████████                           21.6M ops/sec
5.   Redux Toolkit      ████████████████                             19.1M ops/sec
6.   Valtio             ██████                                        7.0M ops/sec
7.   MobX               ███                                           3.4M ops/sec
8.   Jotai                                                            430K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 46,916,194 | ±0.05% | 0.0000ms | 0.0000ms | 23458098 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 26,610,090 | ±2.36% | 0.0000ms | 0.1000ms | 13305045 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 23,891,956 | ±2.75% | 0.0000ms | 0.1000ms | 11945979 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 21,617,479 | ±1.78% | 0.0000ms | 0.1000ms | 10808741 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 19,122,041 | ±2.50% | 0.1000ms | 0.1000ms | 9561021 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 7,034,431 | ±4.31% | 0.1000ms | 0.2000ms | 3517216 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 3,371,024 | ±5.16% | 0.3000ms | 0.5000ms | 1685512 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 429,840 | ±2.61% | 2.3000ms | 3.9000ms | 214920 |

**Key Insight:** Zen is 109.15x faster than Jotai in this test.

### High Frequency Read (x100)

```
🥇   Zen                ████████████████████████████████████████     30.4M ops/sec
🥈   Solid Signals      ███████████████████                          14.4M ops/sec
🥉   Zustand            ███████                                       5.7M ops/sec
4.   Redux Toolkit      █████                                         3.8M ops/sec
5.   Preact Signals     ████                                          3.3M ops/sec
6.   Valtio             █                                             948K ops/sec
7.   MobX                                                             368K ops/sec
8.   Jotai                                                             45K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 30,440,333 | ±0.03% | 0.0000ms | 0.0000ms | 15220167 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 14,423,116 | ±11.29% | 0.1000ms | 0.1000ms | 7211558 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 5,686,394 | ±3.10% | 0.2000ms | 0.3000ms | 2843198 |
| 4 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 3,762,930 | ±4.20% | 0.3000ms | 0.3000ms | 1881468 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 3,274,609 | ±10.48% | 0.3000ms | 0.3000ms | 1637305 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 947,546 | ±3.72% | 1.1000ms | 1.5000ms | 473773 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 368,265 | ±6.69% | 2.7000ms | 4.9000ms | 184134 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 45,073 | ±4.13% | 22.2000ms | 76.8000ms | 22538 |

**Key Insight:** Zen is 675.35x faster than Jotai in this test.

### High Frequency Read (x1000)

```
🥇   Zen                ████████████████████████████████████████      3.7M ops/sec
🥈   Solid Signals      ██████████████████████████                    2.4M ops/sec
🥉   Zustand            ███████                                       618K ops/sec
4.   Redux Toolkit      █████                                         487K ops/sec
5.   Preact Signals     ████                                          347K ops/sec
6.   Valtio             █                                              93K ops/sec
7.   MobX                                                              40K ops/sec
8.   Jotai                                                              4K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 3,724,593 | ±0.02% | 0.3000ms | 0.3000ms | 1862297 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 2,440,800 | ±2.92% | 0.4000ms | 0.5000ms | 1220400 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 618,261 | ±6.60% | 1.6000ms | 1.8000ms | 309131 |
| 4 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 487,206 | ±2.23% | 2.1000ms | 2.6000ms | 243604 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 347,104 | ±12.09% | 2.9000ms | 2.5000ms | 173552 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 92,618 | ±2.02% | 10.8000ms | 22.4000ms | 46310 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 40,001 | ±3.30% | 25.0000ms | 84.4000ms | 20004 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 4,320 | ±4.05% | 231.5000ms | 848.1000ms | 2160 |

**Key Insight:** Zen is 862.19x faster than Jotai in this test.

### High Frequency Read (x10000)

```
🥇   Zen                ████████████████████████████████████████      410K ops/sec
🥈   Solid Signals      ███████████████████████████                   280K ops/sec
🥉   Preact Signals     █████                                          52K ops/sec
4.   Zustand            █████                                          49K ops/sec
5.   Redux Toolkit      ████                                           40K ops/sec
6.   Valtio             █                                               9K ops/sec
7.   MobX                                                               4K ops/sec
8.   Jotai                                                             410 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 409,745 | ±0.03% | 2.4000ms | 2.9000ms | 204873 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 280,491 | ±1.63% | 3.6000ms | 4.8000ms | 140246 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 51,522 | ±4.42% | 19.4000ms | 50.0000ms | 25761 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 49,206 | ±8.05% | 20.3000ms | 68.3000ms | 24603 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 39,869 | ±7.99% | 25.1000ms | 68.7000ms | 19935 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 9,307 | ±3.35% | 107.4000ms | 342.4000ms | 4666 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 4,239 | ±3.31% | 235.9000ms | 883.7000ms | 2120 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 410 | ±6.48% | 2438.0000ms | 5531.7000ms | 206 |

**Key Insight:** Zen is 998.96x faster than Jotai in this test.

### Simple Read

```
🥇   Zen                ████████████████████████████████████████     47.2M ops/sec
🥈   Solid Signals      ███████████████████████████                  31.6M ops/sec
🥉   Preact Signals     █████████████████████████                    30.0M ops/sec
4.   Zustand            ███████████                                  12.9M ops/sec
5.   MobX               ███                                           3.9M ops/sec
6.   Valtio             ███                                           3.0M ops/sec
7.   Jotai              █                                             789K ops/sec
8.   Redux Toolkit                                                    577K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 47,242,904 | ±0.06% | 0.0000ms | 0.0000ms | 23621452 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 31,610,538 | ±2.61% | 0.0000ms | 0.1000ms | 15805270 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 30,009,636 | ±2.10% | 0.0000ms | 0.1000ms | 15004819 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,908,469 | ±4.27% | 0.1000ms | 0.1000ms | 6454235 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 3,911,997 | ±1.63% | 0.3000ms | 0.5000ms | 1955999 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 2,976,368 | ±2.41% | 0.3000ms | 0.5000ms | 1488185 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 789,029 | ±3.61% | 1.3000ms | 2.9000ms | 394516 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 576,824 | ±1.88% | 1.7000ms | 3.6000ms | 288413 |

**Key Insight:** Zen is 81.90x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T13:34:30.581Z*
