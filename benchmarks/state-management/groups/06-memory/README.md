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
| 🥈 2 | [**Zustand**](https://github.com/pmndrs/zustand) | 4.7M |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 1.9M |
|  4 | [**Solid Signals**](https://github.com/solidjs/solid) | 1.7M |
|  5 | [**Preact Signals**](https://github.com/preactjs/signals) | 1.7M |
|  6 | [**Jotai**](https://github.com/pmndrs/jotai) | 957K |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 885K |
|  8 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 353K |

---

## Detailed Results

### Large State Filter

```
🥇   Zustand            ████████████████████████████████████████      596K ops/sec
🥈   Zen                █████████████████████████████                 429K ops/sec
🥉   Jotai              █████████████████████████████                 426K ops/sec
4.   Solid Signals      ████████████████████████                      365K ops/sec
5.   Preact Signals     ███████████████████████                       345K ops/sec
6.   Redux Toolkit      ███                                            44K ops/sec
7.   MobX               █                                              15K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 595,988 | ±0.62% | 1.7000ms | 2.3000ms | 297994 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 429,220 | ±0.64% | 2.3000ms | 8.1000ms | 214611 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 426,029 | ±0.39% | 2.3000ms | 7.0000ms | 213015 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 364,516 | ±0.37% | 2.7000ms | 11.1000ms | 182259 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 345,059 | ±0.60% | 2.9000ms | 10.1000ms | 172530 |
| 6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 44,145 | ±0.21% | 22.7000ms | 29.6000ms | 22073 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 14,548 | ±0.80% | 68.7000ms | 138.8000ms | 7274 |

**Key Insight:** Zustand is 40.97x faster than MobX in this test.

### Large State Read

```
🥇   Valtio             ████████████████████████████████████████     43.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 43,313,513 | ±0.04% | 0.0000ms | 0.0000ms | 21656757 |

### Large State Read (1000 items)

```
🥇   Zustand            ████████████████████████████████████████     46.1M ops/sec
🥈   Zen                ████████████████████████████████████████     45.6M ops/sec
🥉   Redux Toolkit      ████████████████████████████████████         42.0M ops/sec
4.   Solid Signals      ████████████████████████████████████         40.9M ops/sec
5.   Preact Signals     ██████████████████████████████████           39.6M ops/sec
6.   MobX               █████████████████                            19.8M ops/sec
7.   Jotai              █████                                         6.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 46,097,130 | ±0.04% | 0.0000ms | 0.0000ms | 23048567 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 45,553,557 | ±0.05% | 0.0000ms | 0.0000ms | 22776780 |
| 🥉 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 42,047,926 | ±0.56% | 0.0000ms | 0.0000ms | 21023965 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 40,932,526 | ±0.05% | 0.0000ms | 0.0000ms | 20466264 |
| 5 | [**Preact Signals**](https://github.com/preactjs/signals) | 39,580,507 | ±0.23% | 0.0000ms | 0.0000ms | 19790254 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 19,846,333 | ±0.15% | 0.1000ms | 0.1000ms | 9923167 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 6,300,891 | ±0.57% | 0.2000ms | 0.3000ms | 3150446 |

**Key Insight:** Zustand is 7.32x faster than Jotai in this test.

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
🥈   MobX               █████████████████████████                     2.4M ops/sec
🥉   Zen                ████                                          350K ops/sec
4.   Preact Signals     ████                                          349K ops/sec
5.   Solid Signals      ████                                          343K ops/sec
6.   Jotai              ███                                           326K ops/sec
7.   Redux Toolkit                                                     24K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,875,670 | ±0.76% | 0.3000ms | 0.7000ms | 1937835 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 2,403,982 | ±0.07% | 0.4000ms | 0.6000ms | 1201992 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 349,631 | ±0.62% | 2.9000ms | 6.4000ms | 174816 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 349,103 | ±0.53% | 2.9000ms | 7.7000ms | 174552 |
| 5 | [**Solid Signals**](https://github.com/solidjs/solid) | 343,421 | ±2.01% | 2.9000ms | 7.1000ms | 171711 |
| 6 | [**Jotai**](https://github.com/pmndrs/jotai) | 326,019 | ±0.43% | 3.1000ms | 6.4000ms | 163010 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 23,610 | ±0.33% | 42.4000ms | 62.9000ms | 11806 |

**Key Insight:** Zustand is 164.15x faster than Redux Toolkit in this test.

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
*Last generated: 2025-11-11T10:50:09.854Z*
