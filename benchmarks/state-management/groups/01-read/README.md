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
| 🥇 1 | [**Jotai**](https://github.com/pmndrs/jotai) | 👑 1.2M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 1.2M |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 1.2M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 1.2M |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 727K |
|  6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 528K |
|  7 | [**Valtio**](https://github.com/pmndrs/valtio) | 454K |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 375K |

---

## Detailed Results

### High Frequency Read (x10)

```
🥇   Zen                ████████████████████████████████████████     12.6M ops/sec
🥈   Jotai              ████████████████████████████████████████     12.5M ops/sec
🥉   Preact Signals     ██████████████████████████████████████       12.0M ops/sec
4.   Solid Signals      █████████████████████████████████████        11.7M ops/sec
5.   MobX               █████████████████████████████████████        11.6M ops/sec
6.   Redux Toolkit      █████████████████████████████████████        11.6M ops/sec
7.   Zustand            ███████████████████████████████               9.9M ops/sec
8.   Valtio             ██████████████████████                        6.9M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 12,571,681 | ±0.03% | 0.1000ms | 0.1000ms | 6285841 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 12,457,159 | ±0.02% | 0.1000ms | 0.1000ms | 6228580 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 12,029,271 | ±0.04% | 0.1000ms | 0.1000ms | 6014636 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 11,738,031 | ±0.03% | 0.1000ms | 0.1000ms | 5869016 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 11,642,802 | ±0.02% | 0.1000ms | 0.1000ms | 5821401 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 11,604,299 | ±0.02% | 0.1000ms | 0.1000ms | 5802150 |
| 7 | [**Zustand**](https://github.com/pmndrs/zustand) | 9,860,170 | ±0.02% | 0.1000ms | 0.1000ms | 4930085 |
| 8 | [**Valtio**](https://github.com/pmndrs/valtio) | 6,869,335 | ±0.02% | 0.1000ms | 0.2000ms | 3434668 |

**Key Insight:** Zen is 1.83x faster than Valtio in this test.

### High Frequency Read (x100)

```
🥇   Jotai              ████████████████████████████████████████      1.7M ops/sec
🥈   Zen                ████████████████████████████████████████      1.6M ops/sec
🥉   Solid Signals      ███████████████████████████████████████       1.6M ops/sec
4.   Preact Signals     ██████████████████████████████████████        1.6M ops/sec
5.   MobX               ██████████████████████████████████████        1.6M ops/sec
6.   Redux Toolkit      █████████████████████████████████████         1.5M ops/sec
7.   Zustand            █████████████████████████████                 1.2M ops/sec
8.   Valtio             ███████████████████                           805K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,650,674 | ±0.03% | 0.6000ms | 0.7000ms | 825338 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 1,639,590 | ±0.02% | 0.6000ms | 0.8000ms | 819796 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 1,590,661 | ±0.03% | 0.6000ms | 0.8000ms | 795331 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 1,571,432 | ±0.03% | 0.6000ms | 0.8000ms | 785716 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 1,569,467 | ±0.03% | 0.6000ms | 0.8000ms | 784734 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1,520,021 | ±0.02% | 0.7000ms | 0.8000ms | 760011 |
| 7 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,189,133 | ±0.02% | 0.8000ms | 1.0000ms | 594567 |
| 8 | [**Valtio**](https://github.com/pmndrs/valtio) | 804,510 | ±0.19% | 1.2000ms | 1.5000ms | 402255 |

**Key Insight:** Jotai is 2.05x faster than Valtio in this test.

### High Frequency Read (x1000)

```
🥇   Zen                ████████████████████████████████████████      178K ops/sec
🥈   Jotai              ███████████████████████████████████████       175K ops/sec
🥉   Preact Signals     ███████████████████████████████████████       173K ops/sec
4.   Solid Signals      ██████████████████████████████████████        170K ops/sec
5.   MobX               ████████████████████████████████████          161K ops/sec
6.   Redux Toolkit      ███████████████████████████████████           155K ops/sec
7.   Zustand            █████████████████████████████                 127K ops/sec
8.   Valtio             ██████████████████                             82K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 177,831 | ±0.05% | 5.6000ms | 6.8000ms | 88916 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 174,943 | ±0.03% | 5.7000ms | 6.6000ms | 87472 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 172,661 | ±0.04% | 5.8000ms | 7.1000ms | 86331 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 170,457 | ±0.04% | 5.9000ms | 7.2000ms | 85229 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 161,274 | ±0.05% | 6.2000ms | 7.5000ms | 80638 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 154,991 | ±0.03% | 6.5000ms | 7.3000ms | 77496 |
| 7 | [**Zustand**](https://github.com/pmndrs/zustand) | 126,997 | ±0.03% | 7.9000ms | 8.7000ms | 63499 |
| 8 | [**Valtio**](https://github.com/pmndrs/valtio) | 81,970 | ±0.08% | 12.2000ms | 14.9000ms | 40985 |

**Key Insight:** Zen is 2.17x faster than Valtio in this test.

### High Frequency Read (x10000)

```
🥇   Preact Signals     ████████████████████████████████████████       17K ops/sec
🥈   Jotai              ████████████████████████████████████████       17K ops/sec
🥉   Zen                ████████████████████████████████████████       17K ops/sec
4.   MobX               ███████████████████████████████████████        17K ops/sec
5.   Redux Toolkit      ████████████████████████████████████           16K ops/sec
6.   Solid Signals      ████████████████████████████████████           16K ops/sec
7.   Zustand            ████████████████████████████                   12K ops/sec
8.   Valtio             ███████████████████                             8K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 17,483 | ±0.13% | 57.2000ms | 66.8000ms | 8742 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 17,322 | ±0.06% | 57.7000ms | 63.0000ms | 8662 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 17,292 | ±0.16% | 57.8000ms | 68.0000ms | 8646 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 16,883 | ±0.09% | 59.2000ms | 69.3000ms | 8442 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 15,729 | ±0.06% | 63.6000ms | 68.7000ms | 7865 |
| 6 | [**Solid Signals**](https://github.com/solidjs/solid) | 15,722 | ±0.23% | 63.6000ms | 75.0000ms | 7861 |
| 7 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,329 | ±0.14% | 81.1000ms | 89.9000ms | 6165 |
| 8 | [**Valtio**](https://github.com/pmndrs/valtio) | 8,188 | ±0.12% | 122.1000ms | 135.7000ms | 4095 |

**Key Insight:** Preact Signals is 2.14x faster than Valtio in this test.

### Simple Read

```
🥇   Solid Signals      ████████████████████████████████████████     49.6M ops/sec
🥈   Jotai              ██████████████████████████████████████       46.5M ops/sec
🥉   Zen                ████████████████████████████████████         44.7M ops/sec
4.   Preact Signals     ███████████████████████████████████          42.8M ops/sec
5.   Valtio             ████                                          5.2M ops/sec
6.   MobX               ███                                           4.1M ops/sec
7.   Redux Toolkit      █                                             958K ops/sec
8.   Zustand                                                          405K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 49,565,854 | ±0.07% | 0.0000ms | 0.0000ms | 24782928 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 46,504,254 | ±0.06% | 0.0000ms | 0.0000ms | 23252128 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 44,692,869 | ±0.05% | 0.0000ms | 0.0000ms | 22346436 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 42,798,574 | ±0.42% | 0.0000ms | 0.0000ms | 21399288 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,197,804 | ±0.55% | 0.2000ms | 0.2000ms | 2598902 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 4,079,717 | ±0.75% | 0.2000ms | 0.3000ms | 2039859 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 958,314 | ±0.17% | 1.0000ms | 1.3000ms | 479157 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 404,999 | ±0.11% | 2.5000ms | 3.0000ms | 202500 |

**Key Insight:** Solid Signals is 122.39x faster than Zustand in this test.

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
*Last generated: 2025-11-11T09:36:21.137Z*
