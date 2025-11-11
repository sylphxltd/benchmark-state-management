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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 22.0M |
| 🥈 2 | [**Solid Signals**](https://github.com/solidjs/solid) | 20.1M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 19.9M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 17.3M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 4.0M |
|  6 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.2M |
|  7 | [**MobX**](https://github.com/mobxjs/mobx) | 1.9M |

---

## Detailed Results

### Conditional Field Update

```
🥇   Zustand            ████████████████████████████████████████     40.3M ops/sec
🥈   Zen                ███████████████████████████████████████      38.9M ops/sec
🥉   Solid Signals      ██████████████████████████████████████       37.8M ops/sec
4.   Preact Signals     █████████████████████████████████████        37.6M ops/sec
5.   Valtio             ████████████████████████                     23.9M ops/sec
6.   MobX               ███████                                       7.5M ops/sec
7.   Jotai              ██████                                        6.5M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 40,294,914 | ±0.08% | 0.0000ms | 0.0000ms | 20147458 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 38,897,279 | ±0.14% | 0.0000ms | 0.0000ms | 19448641 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 37,797,224 | ±0.05% | 0.0000ms | 0.0000ms | 18898612 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 37,638,223 | ±0.05% | 0.0000ms | 0.0000ms | 18819112 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 23,923,934 | ±0.14% | 0.0000ms | 0.1000ms | 11961968 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 7,485,992 | ±0.31% | 0.1000ms | 0.3000ms | 3742996 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 6,541,975 | ±0.66% | 0.2000ms | 0.2000ms | 3270988 |

**Key Insight:** Zustand is 6.16x faster than Jotai in this test.

### Full Form Reset

```
🥇   Zen                ████████████████████████████████████████     27.9M ops/sec
🥈   Solid Signals      █████████████████████████████████████        25.9M ops/sec
🥉   Preact Signals     ████████████████████████████████████         25.0M ops/sec
4.   Zustand            █████████████████████████                    17.2M ops/sec
5.   Jotai              ███                                           2.2M ops/sec
6.   Valtio                                                           113K ops/sec
7.   MobX                                                             106K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 27,866,893 | ±0.40% | 0.0000ms | 0.1000ms | 13933447 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 25,894,168 | ±0.13% | 0.0000ms | 0.1000ms | 12947085 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 25,002,510 | ±0.14% | 0.0000ms | 0.1000ms | 12501256 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 17,196,904 | ±3.38% | 0.1000ms | 0.1000ms | 8598452 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,179,557 | ±1.05% | 0.5000ms | 0.8000ms | 1089779 |
| 6 | [**Valtio**](https://github.com/pmndrs/valtio) | 113,028 | ±14.13% | 8.8000ms | 19.0000ms | 56514 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 106,123 | ±0.84% | 9.4000ms | 19.8000ms | 53062 |

**Key Insight:** Zen is 262.59x faster than MobX in this test.

### Multiple Fields Update (3 fields)

```
🥇   Zen                ████████████████████████████████████████     16.6M ops/sec
🥈   Solid Signals      █████████████████████████████████████        15.2M ops/sec
🥉   Preact Signals     ███████████████████████████████████          14.5M ops/sec
4.   Zustand            ██████████████████████████████               12.5M ops/sec
5.   Valtio             █████                                         2.2M ops/sec
6.   Jotai              ████                                          1.6M ops/sec
7.   MobX               ███                                           1.2M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 16,590,123 | ±0.39% | 0.1000ms | 0.1000ms | 8295062 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 15,222,730 | ±0.47% | 0.1000ms | 0.1000ms | 7611365 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 14,499,349 | ±0.51% | 0.1000ms | 0.1000ms | 7249675 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,467,674 | ±0.34% | 0.1000ms | 0.1000ms | 6233838 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 2,199,660 | ±0.29% | 0.5000ms | 0.8000ms | 1099830 |
| 6 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,599,719 | ±0.66% | 0.6000ms | 0.9000ms | 799860 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 1,165,167 | ±0.53% | 0.9000ms | 1.5000ms | 582584 |

**Key Insight:** Zen is 14.24x faster than MobX in this test.

### Nested Field Update

```
🥇   Zen                ████████████████████████████████████████     15.7M ops/sec
🥈   Preact Signals     ███████████████████████████████████          13.7M ops/sec
🥉   Solid Signals      ███████████████████████████████████          13.6M ops/sec
4.   Valtio             ███████████████████████████████              12.2M ops/sec
5.   Zustand            █████████████████████████████                11.4M ops/sec
6.   MobX               ████████████                                  4.6M ops/sec
7.   Jotai              ████                                          1.6M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 15,692,470 | ±0.13% | 0.1000ms | 0.1000ms | 7846237 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 13,749,474 | ±0.67% | 0.1000ms | 0.1000ms | 6874738 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 13,623,323 | ±0.60% | 0.1000ms | 0.1000ms | 6811662 |
| 4 | [**Valtio**](https://github.com/pmndrs/valtio) | 12,242,177 | ±0.04% | 0.1000ms | 0.1000ms | 6121089 |
| 5 | [**Zustand**](https://github.com/pmndrs/zustand) | 11,398,682 | ±0.03% | 0.1000ms | 0.1000ms | 5699342 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 4,596,591 | ±0.11% | 0.2000ms | 0.3000ms | 2298296 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,587,076 | ±0.70% | 0.6000ms | 0.9000ms | 793538 |

**Key Insight:** Zen is 9.89x faster than Jotai in this test.

### Single Field Update

```
🥇   Zen                ████████████████████████████████████████     18.3M ops/sec
🥈   Preact Signals     ████████████████████████████████████         16.5M ops/sec
🥉   Solid Signals      ████████████████████████████████████         16.4M ops/sec
4.   Zustand            ███████████████████████████████████          15.9M ops/sec
5.   Valtio             ████████████████████████████████             14.6M ops/sec
6.   MobX               ██████████████                                6.4M ops/sec
7.   Jotai              ███                                           1.5M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 18,265,851 | ±0.11% | 0.1000ms | 0.1000ms | 9132926 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 16,538,307 | ±0.06% | 0.1000ms | 0.1000ms | 8269154 |
| 🥉 | [**Solid Signals**](https://github.com/solidjs/solid) | 16,360,347 | ±0.25% | 0.1000ms | 0.1000ms | 8180174 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 15,907,787 | ±0.36% | 0.1000ms | 0.1000ms | 7953894 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 14,591,570 | ±0.04% | 0.1000ms | 0.1000ms | 7295786 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 6,363,840 | ±0.20% | 0.2000ms | 0.3000ms | 3181920 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,544,327 | ±1.18% | 0.6000ms | 1.4000ms | 772164 |

**Key Insight:** Zen is 11.83x faster than Jotai in this test.

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
*Last generated: 2025-11-11T10:50:09.903Z*
