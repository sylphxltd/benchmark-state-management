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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 9.6M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 8.8M |
| 🥉 3 | [**Zustand**](https://github.com/pmndrs/zustand) | 4.0M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 1.2M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 713K |
|  6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 528K |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 433K |
|  8 | [**Jotai**](https://github.com/pmndrs/jotai) | 54K |

---

## Detailed Results

### High Frequency Read (x10)

```
🥇   Zen                ████████████████████████████████████████     45.3M ops/sec
🥈   Solid Signals      ████████████████████████████████████████     44.8M ops/sec
🥉   Zustand            ██████████████████████████████████           38.4M ops/sec
4.   Preact Signals     ███████████                                  12.0M ops/sec
5.   Redux Toolkit      ██████████                                   11.6M ops/sec
6.   Valtio             ██████████                                   11.0M ops/sec
7.   MobX               █████                                         6.1M ops/sec
8.   Jotai              █                                             762K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 45,335,842 | ±0.10% | 0.0000ms | 0.0000ms | 22667922 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 44,849,812 | ±0.07% | 0.0000ms | 0.0000ms | 22424907 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 38,436,896 | ±2.01% | 0.0000ms | 0.0000ms | 19218448 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 12,029,271 | ±0.04% | 0.1000ms | 0.1000ms | 6014636 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 11,604,299 | ±0.02% | 0.1000ms | 0.1000ms | 5802150 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 11,014,277 | ±0.50% | 0.1000ms | 0.1000ms | 5507139 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 6,121,931 | ±0.03% | 0.2000ms | 0.2000ms | 3060966 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 762,103 | ±0.16% | 1.3000ms | 1.7000ms | 381052 |

**Key Insight:** Zen is 59.49x faster than Jotai in this test.

### High Frequency Read (x100)

```
🥇   Solid Signals      ████████████████████████████████████████     29.1M ops/sec
🥈   Zen                ███████████████████████████████              22.5M ops/sec
🥉   Zustand            █████████████                                 9.7M ops/sec
4.   Preact Signals     ██                                            1.6M ops/sec
5.   Redux Toolkit      ██                                            1.5M ops/sec
6.   Valtio             ██                                            1.4M ops/sec
7.   MobX               █                                             693K ops/sec
8.   Jotai                                                             77K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 29,082,479 | ±0.04% | 0.0000ms | 0.0000ms | 14541240 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 22,548,621 | ±0.03% | 0.0000ms | 0.1000ms | 11274311 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 9,714,175 | ±0.03% | 0.1000ms | 0.1000ms | 4857088 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 1,571,432 | ±0.03% | 0.6000ms | 0.8000ms | 785716 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1,520,021 | ±0.02% | 0.7000ms | 0.8000ms | 760011 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,421,485 | ±0.02% | 0.7000ms | 0.9000ms | 710743 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 693,435 | ±0.02% | 1.4000ms | 1.7000ms | 346718 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 77,380 | ±0.20% | 12.9000ms | 15.1000ms | 38691 |

**Key Insight:** Solid Signals is 375.84x faster than Jotai in this test.

### High Frequency Read (x1000)

```
🥇   Solid Signals      ████████████████████████████████████████      3.6M ops/sec
🥈   Zen                ████████████████████████████████████          3.2M ops/sec
🥉   Zustand            ████████████                                  1.1M ops/sec
4.   Preact Signals     ██                                            173K ops/sec
5.   Redux Toolkit      ██                                            155K ops/sec
6.   Valtio             ██                                            147K ops/sec
7.   MobX               █                                              72K ops/sec
8.   Jotai                                                              8K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 3,604,091 | ±0.05% | 0.3000ms | 0.3000ms | 1802046 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 3,212,282 | ±0.04% | 0.3000ms | 0.4000ms | 1606142 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,114,332 | ±0.02% | 0.9000ms | 1.1000ms | 557167 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 172,661 | ±0.04% | 5.8000ms | 7.1000ms | 86331 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 154,991 | ±0.03% | 6.5000ms | 7.3000ms | 77496 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 147,029 | ±0.03% | 6.8000ms | 8.3000ms | 73515 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 72,110 | ±0.04% | 13.9000ms | 15.8000ms | 36055 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 7,584 | ±0.61% | 131.9000ms | 214.5000ms | 3793 |

**Key Insight:** Solid Signals is 475.21x faster than Jotai in this test.

### High Frequency Read (x10000)

```
🥇   Solid Signals      ████████████████████████████████████████      370K ops/sec
🥈   Zen                ██████████████████████████████████████        349K ops/sec
🥉   Zustand            ███████████                                   100K ops/sec
4.   Preact Signals     ██                                             17K ops/sec
5.   Redux Toolkit      ██                                             16K ops/sec
6.   Valtio             ██                                             14K ops/sec
7.   MobX               █                                               7K ops/sec
8.   Jotai                                                             769 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 370,348 | ±0.07% | 2.7000ms | 3.5000ms | 185175 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 349,085 | ±0.06% | 2.9000ms | 3.5000ms | 174543 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 100,016 | ±0.03% | 10.0000ms | 11.2000ms | 50008 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 17,483 | ±0.13% | 57.2000ms | 66.8000ms | 8742 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 15,729 | ±0.06% | 63.6000ms | 68.7000ms | 7865 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 14,457 | ±0.06% | 69.2000ms | 76.4000ms | 7229 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 7,161 | ±0.38% | 139.6000ms | 151.3000ms | 3581 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 769 | ±0.19% | 1300.9000ms | 1410.2000ms | 385 |

**Key Insight:** Solid Signals is 481.78x faster than Jotai in this test.

### Simple Read

```
🥇   Solid Signals      ████████████████████████████████████████     47.6M ops/sec
🥈   Zen                ███████████████████████████████████████      45.9M ops/sec
🥉   Preact Signals     ████████████████████████████████████         42.8M ops/sec
4.   Zustand            ████████████████████                         23.8M ops/sec
5.   MobX               ██████                                        6.9M ops/sec
6.   Valtio             █████                                         5.5M ops/sec
7.   Jotai              █                                             1.3M ops/sec
8.   Redux Toolkit      █                                             958K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 47,639,721 | ±0.06% | 0.0000ms | 0.0000ms | 23819862 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 45,882,094 | ±0.05% | 0.0000ms | 0.0000ms | 22941047 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 42,798,574 | ±0.42% | 0.0000ms | 0.0000ms | 21399288 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 23,782,108 | ±0.15% | 0.0000ms | 0.1000ms | 11891054 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 6,931,438 | ±0.10% | 0.1000ms | 0.2000ms | 3465720 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,530,123 | ±0.57% | 0.2000ms | 0.3000ms | 2765062 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,348,979 | ±1.48% | 0.7000ms | 1.5000ms | 674490 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 958,314 | ±0.17% | 1.0000ms | 1.3000ms | 479157 |

**Key Insight:** Solid Signals is 49.71x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T10:07:48.158Z*
