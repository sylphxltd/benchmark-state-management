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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 8.6M |
| 🥈 2 | [**Solid Signals**](https://github.com/solidjs/solid) | 8.3M |
| 🥉 3 | [**Zustand**](https://github.com/pmndrs/zustand) | 3.5M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 3.1M |
|  5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 1.5M |
|  6 | [**Valtio**](https://github.com/pmndrs/valtio) | 700K |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 348K |
|  8 | [**Jotai**](https://github.com/pmndrs/jotai) | 54K |

---

## Detailed Results

### High Frequency Read (x10)

```
🥇   Zen                ████████████████████████████████████████     43.6M ops/sec
🥈   Solid Signals      ████████████████████████████████████         39.3M ops/sec
🥉   Zustand            ███████████████████████████████              33.5M ops/sec
4.   Redux Toolkit      ██████████████████████████████               32.6M ops/sec
5.   Preact Signals     ██████████████████████████                   28.2M ops/sec
6.   Valtio             ██████████                                   10.9M ops/sec
7.   MobX               █████                                         5.1M ops/sec
8.   Jotai              █                                             755K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 43,626,225 | ±0.04% | 0.0000ms | 0.0000ms | 21813113 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 39,291,268 | ±0.29% | 0.0000ms | 0.0000ms | 19645635 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 33,456,747 | ±0.05% | 0.0000ms | 0.0000ms | 16728374 |
| 4 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 32,582,263 | ±0.51% | 0.0000ms | 0.0000ms | 16291132 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 28,185,169 | ±0.10% | 0.0000ms | 0.1000ms | 14092585 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 10,872,221 | ±0.08% | 0.1000ms | 0.1000ms | 5436111 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 5,087,152 | ±0.39% | 0.2000ms | 0.6000ms | 2543576 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 755,043 | ±0.23% | 1.3000ms | 1.7000ms | 377522 |

**Key Insight:** Zen is 57.78x faster than Jotai in this test.

### High Frequency Read (x100)

```
🥇   Solid Signals      ████████████████████████████████████████     25.0M ops/sec
🥈   Zen                ███████████████████████████████████          22.1M ops/sec
🥉   Zustand            █████████████                                 8.2M ops/sec
4.   Preact Signals     ██████████                                    6.4M ops/sec
5.   Redux Toolkit      ██████████                                    6.1M ops/sec
6.   Valtio             ██                                            1.4M ops/sec
7.   MobX               █                                             554K ops/sec
8.   Jotai                                                             76K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 24,961,830 | ±0.11% | 0.0000ms | 0.1000ms | 12480915 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 22,081,417 | ±0.02% | 0.0000ms | 0.1000ms | 11040709 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 8,219,747 | ±0.03% | 0.1000ms | 0.2000ms | 4109874 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 6,393,202 | ±0.05% | 0.2000ms | 0.3000ms | 3196601 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 6,098,221 | ±0.05% | 0.2000ms | 0.2000ms | 3049111 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,401,092 | ±0.06% | 0.7000ms | 0.9000ms | 700547 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 553,594 | ±0.12% | 1.8000ms | 2.4000ms | 276797 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 76,410 | ±0.28% | 13.1000ms | 15.5000ms | 38205 |

**Key Insight:** Solid Signals is 326.68x faster than Jotai in this test.

### High Frequency Read (x1000)

```
🥇   Zen                ████████████████████████████████████████      3.3M ops/sec
🥈   Solid Signals      ████████████████████████████████████          3.0M ops/sec
🥉   Zustand            ████████████                                  986K ops/sec
4.   Preact Signals     █████████                                     729K ops/sec
5.   Redux Toolkit      █████████                                     703K ops/sec
6.   Valtio             ██                                            139K ops/sec
7.   MobX               █                                              55K ops/sec
8.   Jotai                                                              8K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 3,294,122 | ±0.02% | 0.3000ms | 0.4000ms | 1647061 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 2,961,732 | ±0.20% | 0.3000ms | 0.5000ms | 1480866 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 985,945 | ±0.04% | 1.0000ms | 1.2000ms | 492973 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 729,078 | ±0.08% | 1.4000ms | 2.0000ms | 364539 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 702,688 | ±0.06% | 1.4000ms | 1.7000ms | 351345 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 139,327 | ±0.18% | 7.2000ms | 14.3000ms | 69664 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 54,806 | ±0.19% | 18.2000ms | 24.5000ms | 27404 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 7,772 | ±0.28% | 128.7000ms | 162.5000ms | 3887 |

**Key Insight:** Zen is 423.83x faster than Jotai in this test.

### High Frequency Read (x10000)

```
🥇   Zen                ████████████████████████████████████████      337K ops/sec
🥈   Solid Signals      ███████████████████████████████████████       326K ops/sec
🥉   Zustand            ███████████                                    93K ops/sec
4.   Preact Signals     ████████                                       65K ops/sec
5.   Redux Toolkit      ████████                                       64K ops/sec
6.   Valtio             ██                                             14K ops/sec
7.   MobX               █                                               5K ops/sec
8.   Jotai                                                             769 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 336,678 | ±0.04% | 3.0000ms | 3.5000ms | 168340 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 326,077 | ±0.11% | 3.1000ms | 4.3000ms | 163039 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 92,846 | ±0.07% | 10.8000ms | 13.0000ms | 46424 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 64,704 | ±0.37% | 15.5000ms | 23.9000ms | 32352 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 64,072 | ±0.17% | 15.6000ms | 28.9000ms | 32037 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 14,207 | ±0.22% | 70.4000ms | 93.1000ms | 7104 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 5,331 | ±0.68% | 187.6000ms | 277.2000ms | 2666 |
| 8 | [**Jotai**](https://github.com/pmndrs/jotai) | 769 | ±0.43% | 1300.9000ms | 1524.6000ms | 385 |

**Key Insight:** Zen is 437.97x faster than Jotai in this test.

### Simple Read

```
🥇   Zen                ████████████████████████████████████████     42.8M ops/sec
🥈   Solid Signals      ████████████████████████████████████████     42.3M ops/sec
🥉   Preact Signals     █████████████████████████████████            35.7M ops/sec
4.   Zustand            ███████████████████                          20.0M ops/sec
5.   MobX               ██████                                        6.2M ops/sec
6.   Valtio             █████                                         5.6M ops/sec
7.   Jotai              █                                             1.4M ops/sec
8.   Redux Toolkit      █                                             971K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 42,813,394 | ±0.06% | 0.0000ms | 0.0000ms | 21406698 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 42,334,007 | ±0.10% | 0.0000ms | 0.0000ms | 21167004 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 35,723,200 | ±0.79% | 0.0000ms | 0.0000ms | 17861600 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 20,029,603 | ±0.23% | 0.0000ms | 0.1000ms | 10014802 |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 6,189,663 | ±1.58% | 0.2000ms | 0.2000ms | 3094832 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,586,891 | ±0.65% | 0.2000ms | 0.2000ms | 2793446 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,366,401 | ±1.21% | 0.7000ms | 1.5000ms | 683201 |
| 8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 970,800 | ±0.21% | 1.0000ms | 1.3000ms | 485401 |

**Key Insight:** Zen is 44.10x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T11:01:46.741Z*
