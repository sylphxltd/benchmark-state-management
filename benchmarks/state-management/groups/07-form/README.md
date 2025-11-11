# Form State

Multi-field updates.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [07-form - Jotai](#07-form---jotai)
  - [07-form - MobX](#07-form---mobx)
  - [07-form - Preact Signals](#07-form---preact-signals)
  - [07-form - Solid Signals](#07-form---solid-signals)
  - [07-form - Valtio](#07-form---valtio)
  - [07-form - Zen](#07-form---zen)
  - [07-form - Zustand](#07-form---zustand)
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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 23.4M |
| 🥈 2 | [**Preact Signals**](https://github.com/preactjs/signals) | 22.7M |
| 🥉 3 | [**Solid Signals**](https://github.com/solidjs/solid) | 22.6M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 17.9M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 4.3M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 2.4M |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.2M |

---

## Detailed Results

### Conditional Field Update

```
🥇   Zustand            ████████████████████████████████████████     44.5M ops/sec
🥈   Preact Signals     ████████████████████████████████████████     44.5M ops/sec
🥉   Zen                ████████████████████████████████████████     44.3M ops/sec
4.   Solid Signals      ███████████████████████████████████████      43.4M ops/sec
5.   Valtio             ████████████████████████                     26.3M ops/sec
6.   MobX               ████████                                      9.0M ops/sec
7.   Jotai              ██████                                        6.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 44,481,342 | ±0.17% | 0.0000ms | 0.0000ms | 22240671 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 44,465,458 | ±0.06% | 0.0000ms | 0.0000ms | 22232730 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 44,295,313 | ±0.04% | 0.0000ms | 0.0000ms | 22147658 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 43,396,950 | ±0.05% | 0.0000ms | 0.0000ms | 21698476 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 26,316,782 | ±0.02% | 0.0000ms | 0.0000ms | 13158391 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 8,991,476 | ±0.04% | 0.1000ms | 0.2000ms | 4495738 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 6,335,059 | ±1.18% | 0.2000ms | 0.2000ms | 3167530 |

**Key Insight:** Zustand is 7.02x faster than Jotai in this test.

### Full Form Reset

```
🥇   Zen                ████████████████████████████████████████     30.7M ops/sec
🥈   Solid Signals      ██████████████████████████████████████       29.2M ops/sec
🥉   Preact Signals     █████████████████████████████████████        28.4M ops/sec
4.   Zustand            ██████████████████████                       17.1M ops/sec
5.   Jotai              ███                                           2.2M ops/sec
6.   MobX                                                             135K ops/sec
7.   Valtio                                                            97K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 30,698,058 | ±0.12% | 0.0000ms | 0.0000ms | 15349029 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 29,212,437 | ±0.33% | 0.0000ms | 0.0000ms | 14606219 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 28,369,136 | ±0.48% | 0.0000ms | 0.0000ms | 14184568 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 17,110,310 | ±3.50% | 0.1000ms | 0.1000ms | 8555155 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,183,045 | ±0.88% | 0.5000ms | 0.7000ms | 1091523 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 134,501 | ±0.29% | 7.4000ms | 8.9000ms | 67251 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 97,321 | ±52.94% | 10.3000ms | 15.2000ms | 57481 |

**Key Insight:** Zen is 315.43x faster than Valtio in this test.

### Multiple Fields Update (3 fields)

```
🥇   Preact Signals     ████████████████████████████████████████     17.2M ops/sec
🥈   Zen                ███████████████████████████████████████      16.7M ops/sec
🥉   Solid Signals      ███████████████████████████████████████      16.6M ops/sec
4.   Zustand            █████████████████████████████                12.6M ops/sec
5.   Valtio             ██████                                        2.5M ops/sec
6.   Jotai              ████                                          1.6M ops/sec
7.   MobX               ███                                           1.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Preact Signals**](https://github.com/preactjs/signals) | 17,213,448 | ±0.43% | 0.1000ms | 0.1000ms | 8606725 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 16,739,871 | ±0.53% | 0.1000ms | 0.1000ms | 8369936 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 16,609,151 | ±0.34% | 0.1000ms | 0.1000ms | 8304576 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,644,081 | ±0.29% | 0.1000ms | 0.1000ms | 6322041 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 2,548,382 | ±0.23% | 0.4000ms | 0.5000ms | 1274191 |
| 6 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,558,064 | ±0.69% | 0.6000ms | 1.0000ms | 779033 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 1,284,810 | ±0.18% | 0.8000ms | 1.0000ms | 642405 |

**Key Insight:** Preact Signals is 13.40x faster than MobX in this test.

### Nested Field Update

```
🥇   Zen                ████████████████████████████████████████     16.1M ops/sec
🥈   Preact Signals     ██████████████████████████████████████       15.4M ops/sec
🥉   Solid Signals      ██████████████████████████████████████       15.3M ops/sec
4.   Valtio             ██████████████████████████████████           13.7M ops/sec
5.   Zustand            ████████████████████████████                 11.1M ops/sec
6.   MobX               ██████████████                                5.7M ops/sec
7.   Jotai              ████                                          1.4M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 16,121,568 | ±0.03% | 0.1000ms | 0.1000ms | 8060784 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 15,417,293 | ±0.47% | 0.1000ms | 0.1000ms | 7708864 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 15,290,938 | ±0.50% | 0.1000ms | 0.1000ms | 7645469 |
| 4 | [**Valtio**](https://github.com/pmndrs/valtio) | 13,746,696 | ±0.02% | 0.1000ms | 0.1000ms | 6873349 |
| 5 | [**Zustand**](https://github.com/pmndrs/zustand) | 11,120,301 | ±0.04% | 0.1000ms | 0.1000ms | 5560151 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 5,710,465 | ±0.02% | 0.2000ms | 0.2000ms | 2855233 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,439,894 | ±2.80% | 0.7000ms | 1.4000ms | 719947 |

**Key Insight:** Zen is 11.20x faster than Jotai in this test.

### Single Field Update

```
🥇   Zen                ████████████████████████████████████████     19.3M ops/sec
🥈   Solid Signals      ██████████████████████████████████████       18.4M ops/sec
🥉   Preact Signals     █████████████████████████████████████        18.1M ops/sec
4.   Zustand            ████████████████████████████████████         17.3M ops/sec
5.   Valtio             ██████████████████████████████████           16.4M ops/sec
6.   MobX               █████████████████                             8.1M ops/sec
7.   Jotai              ███                                           1.5M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 19,320,768 | ±0.05% | 0.1000ms | 0.1000ms | 9660385 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 18,421,329 | ±0.88% | 0.1000ms | 0.1000ms | 9210665 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 18,103,255 | ±0.10% | 0.1000ms | 0.1000ms | 9051628 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 17,269,388 | ±0.98% | 0.1000ms | 0.1000ms | 8634694 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 16,376,962 | ±0.06% | 0.1000ms | 0.1000ms | 8188482 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 8,093,135 | ±0.05% | 0.1000ms | 0.2000ms | 4046568 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,539,228 | ±1.34% | 0.6000ms | 1.3000ms | 769615 |

**Key Insight:** Zen is 12.55x faster than Jotai in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:form

# Or run specific test file
npx vitest bench groups/07-form/*.bench.ts
```

---
*Last generated: 2025-11-11T12:10:41.403Z*
