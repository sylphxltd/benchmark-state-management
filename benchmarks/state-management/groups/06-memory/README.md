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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 49.9M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 48.6M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 47.4M |
|  4 | [**Zen**](https://github.com/SylphxAI/zen) | 47.2M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 15.2M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 14.4M |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 7.0M |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 4.3M |

---

## Detailed Results

### Large State Read

```
🥇   MobX               ████████████████████████████████████████     50.9M ops/sec
🥈   Jotai              ████████████████████████████████████████     50.5M ops/sec
🥉   Solid Signals      ████████████████████████████████████████     50.5M ops/sec
4.   Zustand            ████████████████████████████████████████     50.4M ops/sec
5.   Redux Toolkit      ███████████████████████████████████████      50.0M ops/sec
6.   Zen                ███████████████████████████████████████      49.8M ops/sec
7.   Preact Signals     ███████████████████████████████████████      49.5M ops/sec
8.   Valtio             ██████████████████████████████████           43.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 50,889,060 | ±0.05% | 0.0000ms | 0.0000ms | 25444530 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 50,510,040 | ±0.04% | 0.0000ms | 0.0000ms | 25255021 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 50,503,890 | ±0.05% | 0.0000ms | 0.0000ms | 25251947 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 50,394,579 | ±0.05% | 0.0000ms | 0.0000ms | 25197291 |
| 5 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 50,019,794 | ±0.05% | 0.0000ms | 0.0000ms | 25009898 |
| 6 | [**Zen**](https://github.com/SylphxAI/zen) | 49,803,497 | ±0.04% | 0.0000ms | 0.0000ms | 24901749 |
| 7 | [**Preact Signals**](https://github.com/preactjs/signals) | 49,507,834 | ±0.09% | 0.0000ms | 0.0000ms | 24753919 |
| 8 | [**Valtio**](https://github.com/pmndrs/valtio) | 43,313,513 | ±0.04% | 0.0000ms | 0.0000ms | 21656757 |

**Key Insight:** MobX is 1.17x faster than Valtio in this test.

### Large State Update

```
🥇   Solid Signals      ████████████████████████████████████████     49.2M ops/sec
🥈   Jotai              ██████████████████████████████████████       46.7M ops/sec
🥉   Preact Signals     █████████████████████████████████████        45.5M ops/sec
4.   Zen                ████████████████████████████████████         44.7M ops/sec
5.   Valtio             ████                                          5.4M ops/sec
6.   MobX               ███                                           4.1M ops/sec
7.   Redux Toolkit      █                                             983K ops/sec
8.   Zustand                                                          369K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 49,239,754 | ±0.05% | 0.0000ms | 0.0000ms | 24619878 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 46,726,136 | ±0.04% | 0.0000ms | 0.0000ms | 23363070 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 45,460,743 | ±0.09% | 0.0000ms | 0.0000ms | 22730372 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 44,714,114 | ±0.04% | 0.0000ms | 0.0000ms | 22357058 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,362,720 | ±0.27% | 0.2000ms | 0.3000ms | 2681361 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 4,089,232 | ±0.22% | 0.2000ms | 0.3000ms | 2044617 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 983,273 | ±0.25% | 1.0000ms | 1.3000ms | 491637 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 369,446 | ±0.27% | 2.7000ms | 3.3000ms | 184724 |

**Key Insight:** Solid Signals is 133.28x faster than Zustand in this test.

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
*Last generated: 2025-11-11T08:58:53.980Z*
