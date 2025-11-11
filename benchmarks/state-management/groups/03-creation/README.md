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
| 🥇 1 | [**MobX**](https://github.com/mobxjs/mobx) | 👑 51.0M |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 51.0M |
| 🥉 3 | [**Jotai**](https://github.com/pmndrs/jotai) | 50.8M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 50.3M |
|  5 | [**Solid Signals**](https://github.com/solidjs/solid) | 50.1M |
|  6 | [**Zen**](https://github.com/SylphxAI/zen) | 50.1M |
|  7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 50.0M |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 50.0M |

---

## Detailed Results

### Store Creation

```
🥇   MobX               ████████████████████████████████████████     51.0M ops/sec
🥈   Valtio             ████████████████████████████████████████     51.0M ops/sec
🥉   Jotai              ████████████████████████████████████████     50.8M ops/sec
4.   Preact Signals     ███████████████████████████████████████      50.3M ops/sec
5.   Solid Signals      ███████████████████████████████████████      50.1M ops/sec
6.   Zen                ███████████████████████████████████████      50.1M ops/sec
7.   Redux Toolkit      ███████████████████████████████████████      50.0M ops/sec
8.   Zustand            ███████████████████████████████████████      50.0M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**MobX**](https://github.com/mobxjs/mobx) | 51,039,685 | ±0.06% | 0.0000ms | 0.0000ms | 25519843 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 50,966,542 | ±0.09% | 0.0000ms | 0.0000ms | 25483272 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 50,835,758 | ±0.06% | 0.0000ms | 0.0000ms | 25417879 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 50,261,789 | ±0.09% | 0.0000ms | 0.0000ms | 25130895 |
| 5 | [**Solid Signals**](https://github.com/solidjs/solid) | 50,083,587 | ±0.05% | 0.0000ms | 0.0000ms | 25041794 |
| 6 | [**Zen**](https://github.com/SylphxAI/zen) | 50,070,802 | ±0.05% | 0.0000ms | 0.0000ms | 25035402 |
| 7 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 50,023,499 | ±0.07% | 0.0000ms | 0.0000ms | 25011751 |
| 8 | [**Zustand**](https://github.com/pmndrs/zustand) | 50,020,930 | ±0.06% | 0.0000ms | 0.0000ms | 25010465 |

**Key Insight:** MobX is 1.02x faster than Zustand in this test.

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
*Last generated: 2025-11-11T09:36:21.238Z*
