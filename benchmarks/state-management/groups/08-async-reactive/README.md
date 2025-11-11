# Reactive Async

Async atoms/computations.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [08-async-reactive - Jotai](#08-async-reactive---jotai)
  - [08-async-reactive - MobX](#08-async-reactive---mobx)
  - [08-async-reactive - Solid Signals](#08-async-reactive---solid-signals)
  - [08-async-reactive - Valtio](#08-async-reactive---valtio)
  - [08-async-reactive - Zen](#08-async-reactive---zen)
  - [08-async-reactive - Zustand](#08-async-reactive---zustand)
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
| 🥇 1 | [**Valtio**](https://github.com/pmndrs/valtio) | 👑 741K |
| 🥈 2 | [**Zustand**](https://github.com/pmndrs/zustand) | 721K |
| 🥉 3 | [**Jotai**](https://github.com/pmndrs/jotai) | 676K |
|  4 | [**Solid Signals**](https://github.com/solidjs/solid) | 657K |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 639K |
|  6 | [**Zen**](https://github.com/SylphxAI/zen) | 619K |

---

## Detailed Results

### Async Reactive Chained

```
🥇   Valtio             ████████████████████████████████████████      1.1M ops/sec
🥈   Zustand            ██████████████████████████████████████        1.0M ops/sec
🥉   MobX               ██████████████████████████████████████        1.0M ops/sec
4.   Jotai              ████████████████████████████████████          941K ops/sec
5.   Solid Signals      █████████████████████████████████             878K ops/sec
6.   Zen                ████████████████████████████████              834K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,051,293 | ±54.90% | 1.0000ms | 0.3000ms | 596910 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,009,912 | ±38.35% | 1.0000ms | 0.5000ms | 506160 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 1,002,616 | ±39.37% | 1.0000ms | 0.3000ms | 517531 |
| 4 | [**Jotai**](https://github.com/pmndrs/jotai) | 941,282 | ±40.79% | 1.1000ms | 0.3000ms | 477903 |
| 5 | [**Solid Signals**](https://github.com/solidjs/solid) | 877,741 | ±87.39% | 1.1000ms | 0.3000ms | 483852 |
| 6 | [**Zen**](https://github.com/SylphxAI/zen) | 834,137 | ±84.66% | 1.2000ms | 0.3000ms | 543508 |

**Key Insight:** Valtio is 1.26x faster than Zen in this test.

### Async Reactive Complex

```
🥇   Zustand            ████████████████████████████████████████      566K ops/sec
🥈   Valtio             ████████████████████████████████████          506K ops/sec
🥉   MobX               █████████████████████████████████             468K ops/sec
4.   Jotai              █████████████████████████████████             462K ops/sec
5.   Zen                ████████████████████████████████              456K ops/sec
6.   Solid Signals      ███████████████████████████████               440K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 566,057 | ±37.06% | 1.8000ms | 0.6000ms | 291188 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 505,765 | ±36.94% | 2.0000ms | 0.7000ms | 262689 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 467,726 | ±37.50% | 2.1000ms | 0.7000ms | 233863 |
| 4 | [**Jotai**](https://github.com/pmndrs/jotai) | 461,709 | ±35.37% | 2.2000ms | 0.7000ms | 231186 |
| 5 | [**Zen**](https://github.com/SylphxAI/zen) | 455,919 | ±38.62% | 2.2000ms | 0.7000ms | 231862 |
| 6 | [**Solid Signals**](https://github.com/solidjs/solid) | 440,474 | ±36.90% | 2.3000ms | 0.7000ms | 222799 |

**Key Insight:** Zustand is 1.29x faster than Solid Signals in this test.

### Async Reactive Concurrent

```
🥇   Valtio             ████████████████████████████████████████      396K ops/sec
🥈   Solid Signals      ██████████████████████████████████            337K ops/sec
🥉   Jotai              █████████████████████████████████             325K ops/sec
4.   Zen                ████████████████████████████████              313K ops/sec
5.   Zustand            ████████████████████████████████              312K ops/sec
6.   MobX               █████████████████████████████                 292K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 395,739 | ±39.51% | 2.5000ms | 0.9000ms | 202220 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 337,481 | ±41.74% | 3.0000ms | 0.8000ms | 175167 |
| 🥉 | [**Jotai**](https://github.com/pmndrs/jotai) | 325,096 | ±43.27% | 3.1000ms | 0.7000ms | 162548 |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 313,201 | ±42.63% | 3.2000ms | 0.8000ms | 160605 |
| 5 | [**Zustand**](https://github.com/pmndrs/zustand) | 312,134 | ±47.94% | 3.2000ms | 0.8000ms | 158414 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 291,843 | ±45.05% | 3.4000ms | 0.7000ms | 150417 |

**Key Insight:** Valtio is 1.36x faster than MobX in this test.

### Async Reactive Read

```
🥇   Zustand            ████████████████████████████████████████      1.5M ops/sec
🥈   Jotai              ███████████████████████████████████████       1.5M ops/sec
🥉   Valtio             ██████████████████████████████████████        1.4M ops/sec
4.   Solid Signals      ██████████████████████████████████████        1.4M ops/sec
5.   Zen                █████████████████████████████████             1.2M ops/sec
6.   MobX               ████████████████████████████████              1.2M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 1,511,995 | ±39.04% | 0.7000ms | 0.3000ms | 757552 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,475,891 | ±50.42% | 0.7000ms | 0.3000ms | 748272 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,435,798 | ±34.33% | 0.7000ms | 0.3000ms | 735046 |
| 4 | [**Solid Signals**](https://github.com/solidjs/solid) | 1,424,244 | ±38.33% | 0.7000ms | 0.3000ms | 717060 |
| 5 | [**Zen**](https://github.com/SylphxAI/zen) | 1,232,396 | ±48.96% | 0.8000ms | 0.3000ms | 616198 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 1,219,858 | ±40.21% | 0.8000ms | 0.3000ms | 609929 |

**Key Insight:** Zustand is 1.24x faster than MobX in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:async-reactive

# Or run specific test file
npx vitest bench groups/08-async-reactive/*.bench.ts
```

---
*Last generated: 2025-11-11T10:07:48.455Z*
