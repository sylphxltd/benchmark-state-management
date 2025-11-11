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
| 🥈 2 | [**Zustand**](https://github.com/pmndrs/zustand) | 4.8M |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 2.0M |
|  4 | [**Solid Signals**](https://github.com/solidjs/solid) | 2.0M |
|  5 | [**Preact Signals**](https://github.com/preactjs/signals) | 2.0M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 1.2M |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 964K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 388K |

---

## Detailed Results

### Large State Filter

```
🥇   Zustand            ████████████████████████████████████████      612K ops/sec
🥈   Zen                █████████████████████████████                 447K ops/sec
🥉   Solid Signals      ████████████████████████████                  433K ops/sec
4.   Jotai              ████████████████████████████                  423K ops/sec
5.   Preact Signals     ██████████████████████████                    399K ops/sec
6.   Redux Toolkit      ███                                            46K ops/sec
7.   MobX               █                                              17K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 611,733 | ±0.68% | 1.6000ms | 2.3000ms | 305867 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 447,191 | ±0.55% | 2.2000ms | 7.3000ms | 223596 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 432,717 | ±0.55% | 2.3000ms | 7.9000ms | 216359 |
| 4 | [**Jotai**](https://github.com/pmndrs/jotai) | 422,732 | ±0.39% | 2.4000ms | 7.9000ms | 211367 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 399,323 | ±0.64% | 2.5000ms | 8.3000ms | 199662 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 46,154 | ±0.27% | 21.7000ms | 29.2000ms | 23078 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 17,340 | ±0.15% | 57.7000ms | 64.8000ms | 8671 |

**Key Insight:** Zustand is 35.28x faster than MobX in this test.

### Large State Read

```
🥇   Valtio             ████████████████████████████████████████     43.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 43,313,513 | ±0.04% | 0.0000ms | 0.0000ms | 21656757 |

### Large State Read (1000 items)

```
🥇   Redux Toolkit      ████████████████████████████████████████     47.5M ops/sec
🥈   Zustand            ████████████████████████████████████████     47.5M ops/sec
🥉   Preact Signals     ████████████████████████████████████████     47.1M ops/sec
4.   Solid Signals      ████████████████████████████████████████     47.1M ops/sec
5.   Zen                ██████████████████████████████████████       45.6M ops/sec
6.   MobX               ███████████████████████████                  31.6M ops/sec
7.   Jotai              █████                                         6.5M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 47,510,900 | ±0.05% | 0.0000ms | 0.0000ms | 23755451 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 47,459,027 | ±0.08% | 0.0000ms | 0.0000ms | 23729514 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 47,141,540 | ±0.04% | 0.0000ms | 0.0000ms | 23570771 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 47,081,753 | ±0.05% | 0.0000ms | 0.0000ms | 23540878 |
| 5 | [**Zen**](https://github.com/SylphxAI/zen) | 45,591,925 | ±0.34% | 0.0000ms | 0.0000ms | 22795963 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 31,620,343 | ±0.03% | 0.0000ms | 0.0000ms | 15810172 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 6,462,219 | ±0.17% | 0.2000ms | 0.2000ms | 3231110 |

**Key Insight:** Redux Toolkit is 7.35x faster than Jotai in this test.

### Large State Update

```
🥇   Valtio             ████████████████████████████████████████      5.4M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,362,720 | ±0.27% | 0.2000ms | 0.3000ms | 2681361 |

### Large State Update (1000 items)

```
🥇   Zustand            ████████████████████████████████████████      3.8M ops/sec
🥈   MobX               ███████████████████████████████████           3.3M ops/sec
🥉   Preact Signals     █████                                         433K ops/sec
4.   Zen                ████                                          411K ops/sec
5.   Solid Signals      ████                                          408K ops/sec
6.   Jotai              ███                                           328K ops/sec
7.   Redux Toolkit                                                     27K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,840,850 | ±0.71% | 0.3000ms | 0.8000ms | 1920426 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 3,330,716 | ±0.03% | 0.3000ms | 0.4000ms | 1665359 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 433,145 | ±0.64% | 2.3000ms | 5.3000ms | 216573 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 410,958 | ±0.50% | 2.4000ms | 5.5000ms | 205479 |
| 5 | [**Solid Signals**](https://github.com/solidjs/solid) | 407,968 | ±0.53% | 2.5000ms | 5.5000ms | 203985 |
| 6 | [**Jotai**](https://github.com/pmndrs/jotai) | 328,020 | ±0.41% | 3.0000ms | 6.2000ms | 164010 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 26,677 | ±0.35% | 37.5000ms | 51.1000ms | 13339 |

**Key Insight:** Zustand is 143.98x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T12:22:16.186Z*
