# Memory Allocation

Large state allocation performance.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [06-memory - Jotai](#06-memory---jotai)
  - [06-memory - MobX](#06-memory---mobx)
  - [06-memory - Preact Signals](#06-memory---preact-signals)
  - [06-memory - Redux Toolkit](#06-memory---redux-toolkit)
  - [06-memory - Solid Signals](#06-memory---solid-signals)
  - [06-memory - Valtio](#06-memory---valtio)
  - [06-memory - Zen](#06-memory---zen)
  - [06-memory - Zustand](#06-memory---zustand)
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
| 🥇 1 | [**Valtio**](https://github.com/pmndrs/valtio) | 👑 15.2M |
| 🥈 2 | [**Zustand**](https://github.com/pmndrs/zustand) | 4.9M |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 2.1M |
|  4 | [**Solid Signals**](https://github.com/solidjs/solid) | 2.1M |
|  5 | [**Preact Signals**](https://github.com/preactjs/signals) | 2.0M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 1.1M |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 971K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 325K |

---

## Detailed Results

### Large State Filter

```
🥇   Zustand            ████████████████████████████████████████      616K ops/sec
🥈   Zen                ██████████████████████████████                459K ops/sec
🥉   Solid Signals      █████████████████████████████                 446K ops/sec
4.   Preact Signals     █████████████████████████████                 440K ops/sec
5.   Jotai              ████████████████████████████                  431K ops/sec
6.   Redux Toolkit      ███                                            39K ops/sec
7.   MobX               █                                              17K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 615,573 | ±2.92% | 1.6000ms | 2.2000ms | 307787 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 458,969 | ±0.67% | 2.2000ms | 7.9000ms | 229485 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 446,454 | ±0.66% | 2.2000ms | 7.2000ms | 223227 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 439,794 | ±0.33% | 2.3000ms | 8.6000ms | 219898 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 431,392 | ±0.36% | 2.3000ms | 7.6000ms | 215696 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 38,828 | ±0.35% | 25.8000ms | 44.5000ms | 19414 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 17,105 | ±0.11% | 58.5000ms | 64.0000ms | 8553 |

**Key Insight:** Zustand is 35.99x faster than MobX in this test.

### Large State Read

```
🥇   Valtio             ████████████████████████████████████████     43.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 43,313,513 | ±0.04% | 0.0000ms | 0.0000ms | 21656757 |

### Large State Read (1000 items)

```
🥇   Zustand            ████████████████████████████████████████     49.1M ops/sec
🥈   Solid Signals      ████████████████████████████████████████     49.0M ops/sec
🥉   Zen                ████████████████████████████████████████     48.9M ops/sec
4.   Preact Signals     ████████████████████████████████████         44.4M ops/sec
5.   Redux Toolkit      ████████████████████████████████             38.7M ops/sec
6.   MobX               ████████████████████                         24.7M ops/sec
7.   Jotai              █████                                         6.6M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 49,064,312 | ±0.05% | 0.0000ms | 0.0000ms | 24532157 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 49,048,449 | ±0.85% | 0.0000ms | 0.0000ms | 24524225 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 48,930,554 | ±0.06% | 0.0000ms | 0.0000ms | 24465279 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 44,385,522 | ±0.30% | 0.0000ms | 0.0000ms | 22192762 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 38,718,744 | ±0.07% | 0.0000ms | 0.0000ms | 19359373 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 24,659,177 | ±0.04% | 0.0000ms | 0.1000ms | 12329589 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 6,569,736 | ±0.11% | 0.2000ms | 0.2000ms | 3284869 |

**Key Insight:** Zustand is 7.47x faster than Jotai in this test.

### Large State Update

```
🥇   Valtio             ████████████████████████████████████████      5.4M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,362,720 | ±0.27% | 0.2000ms | 0.3000ms | 2681361 |

### Large State Update (1000 items)

```
🥇   Zustand            ████████████████████████████████████████      3.9M ops/sec
🥈   MobX               ██████████████████████████████                3.0M ops/sec
🥉   Zen                ████                                          436K ops/sec
4.   Solid Signals      ████                                          433K ops/sec
5.   Preact Signals     ████                                          419K ops/sec
6.   Jotai              ███                                           323K ops/sec
7.   Redux Toolkit                                                     23K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,943,954 | ±0.61% | 0.3000ms | 0.7000ms | 1971979 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 3,005,857 | ±0.03% | 0.3000ms | 0.5000ms | 1502929 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 436,457 | ±0.59% | 2.3000ms | 5.3000ms | 218229 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 432,638 | ±0.57% | 2.3000ms | 5.3000ms | 216320 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 418,743 | ±2.02% | 2.4000ms | 5.6000ms | 209372 |
| 6 | [**Jotai**](https://github.com/pmndrs/jotai) | 322,971 | ±0.58% | 3.1000ms | 6.4000ms | 161486 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 22,779 | ±0.55% | 43.9000ms | 73.7000ms | 11390 |

**Key Insight:** Zustand is 173.14x faster than Redux Toolkit in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:memory

# Or run specific test file
npx vitest bench groups/06-memory/*.bench.ts
```

---
*Last generated: 2025-11-11T10:17:56.853Z*
