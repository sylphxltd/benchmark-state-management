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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 24.8M |
| 🥈 2 | [**Solid Signals**](https://github.com/solidjs/solid) | 20.1M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 20.0M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 13.7M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.6M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 1.4M |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1.2M |

---

## Detailed Results

### Conditional Field Update

```
🥇   Zen                ████████████████████████████████████████     46.7M ops/sec
🥈   Solid Signals      █████████████████████████████████            39.1M ops/sec
🥉   Preact Signals     █████████████████████████████████            38.4M ops/sec
4.   Zustand            █████████████████████████████                34.0M ops/sec
5.   Valtio             ██████████████                               16.3M ops/sec
6.   MobX               █████                                         5.3M ops/sec
7.   Jotai              ███                                           3.7M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 46,721,412 | ±0.04% | 0.0000ms | 0.0000ms | 23360708 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 39,067,026 | ±0.08% | 0.0000ms | 0.0000ms | 19533513 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 38,387,317 | ±0.12% | 0.0000ms | 0.0000ms | 19193660 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 34,020,109 | ±0.59% | 0.0000ms | 0.0000ms | 17010055 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 16,290,173 | ±8.37% | 0.1000ms | 0.1000ms | 8145087 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 5,308,305 | ±2.44% | 0.2000ms | 0.3000ms | 2654153 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 3,717,798 | ±3.34% | 0.3000ms | 0.4000ms | 1858900 |

**Key Insight:** Zen is 12.57x faster than Jotai in this test.

### Full Form Reset

```
🥇   Zen                ████████████████████████████████████████     31.5M ops/sec
🥈   Solid Signals      █████████████████████████████████            26.0M ops/sec
🥉   Preact Signals     ████████████████████████████████             25.4M ops/sec
4.   Zustand            ████████████████                             12.8M ops/sec
5.   Jotai              ██                                            1.2M ops/sec
6.   Valtio                                                            65K ops/sec
7.   MobX                                                              64K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 31,455,362 | ±2.04% | 0.0000ms | 0.0000ms | 15727681 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 25,962,799 | ±0.55% | 0.0000ms | 0.1000ms | 12981401 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 25,424,666 | ±0.54% | 0.0000ms | 0.1000ms | 12712333 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,823,107 | ±7.25% | 0.1000ms | 0.2000ms | 6411554 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,228,278 | ±3.07% | 0.8000ms | 1.2000ms | 614139 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 65,185 | ±36.13% | 15.3000ms | 28.0000ms | 32593 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 63,561 | ±3.23% | 15.7000ms | 62.2000ms | 31781 |

**Key Insight:** Zen is 494.88x faster than MobX in this test.

### Multiple Fields Update (3 fields)

```
🥇   Zen                ████████████████████████████████████████     18.3M ops/sec
🥈   Solid Signals      ████████████████████████████████             14.6M ops/sec
🥉   Preact Signals     ███████████████████████████████              14.2M ops/sec
4.   Zustand            █████████████████████                         9.6M ops/sec
5.   Valtio             ███                                           1.6M ops/sec
6.   MobX               ██                                            909K ops/sec
7.   Jotai              ██                                            800K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 18,325,161 | ±0.28% | 0.1000ms | 0.1000ms | 9162581 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 14,573,899 | ±0.55% | 0.1000ms | 0.1000ms | 7286950 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 14,189,738 | ±0.48% | 0.1000ms | 0.1000ms | 7094869 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 9,629,694 | ±1.69% | 0.1000ms | 0.2000ms | 4814847 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,572,484 | ±2.26% | 0.6000ms | 1.0000ms | 786243 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 908,808 | ±1.53% | 1.1000ms | 1.9000ms | 454404 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 799,942 | ±3.17% | 1.3000ms | 2.3000ms | 399971 |

**Key Insight:** Zen is 22.91x faster than Jotai in this test.

### Nested Field Update

```
🥇   Zen                ████████████████████████████████████████     17.0M ops/sec
🥈   Preact Signals     █████████████████████████████████            13.9M ops/sec
🥉   Solid Signals      ████████████████████████████████             13.5M ops/sec
4.   Zustand            ██████████████████████                        9.2M ops/sec
5.   Valtio             ██████████████████                            7.6M ops/sec
6.   MobX               ████████                                      3.4M ops/sec
7.   Jotai              ██                                            877K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 17,029,235 | ±0.36% | 0.1000ms | 0.1000ms | 8514618 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 13,900,793 | ±0.67% | 0.1000ms | 0.1000ms | 6950397 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 13,526,351 | ±0.67% | 0.1000ms | 0.1000ms | 6763762 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 9,179,015 | ±0.09% | 0.1000ms | 0.2000ms | 4589508 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 7,626,049 | ±4.95% | 0.1000ms | 0.2000ms | 3813025 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 3,363,506 | ±2.02% | 0.3000ms | 0.5000ms | 1681753 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 877,144 | ±2.25% | 1.1000ms | 2.0000ms | 438572 |

**Key Insight:** Zen is 19.41x faster than Jotai in this test.

### Single Field Update

```
🥇   Zen                ████████████████████████████████████████     20.5M ops/sec
🥈   Preact Signals     █████████████████████████████████            16.8M ops/sec
🥉   Solid Signals      ████████████████████████████████             16.5M ops/sec
4.   Zustand            ████████████████████████                     12.5M ops/sec
5.   Valtio             ██████████████████                            9.3M ops/sec
6.   MobX               █████████                                     4.8M ops/sec
7.   Jotai              ██                                            905K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 20,516,891 | ±0.08% | 0.0000ms | 0.1000ms | 10258446 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 16,799,165 | ±0.26% | 0.1000ms | 0.1000ms | 8399583 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 16,514,909 | ±0.31% | 0.1000ms | 0.1000ms | 8257455 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,537,737 | ±1.15% | 0.1000ms | 0.2000ms | 6268869 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 9,289,272 | ±0.85% | 0.1000ms | 0.2000ms | 4644636 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 4,844,168 | ±1.91% | 0.2000ms | 0.3000ms | 2422084 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 905,029 | ±2.69% | 1.1000ms | 2.3000ms | 452515 |

**Key Insight:** Zen is 22.67x faster than Jotai in this test.

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
*Last generated: 2025-11-11T13:26:41.857Z*
