# Computed Native

Native computed values.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [09-computed-native - Jotai](#09-computed-native---jotai)
  - [09-computed-native - MobX](#09-computed-native---mobx)
  - [09-computed-native - Preact Signals](#09-computed-native---preact-signals)
  - [09-computed-native - Solid Signals](#09-computed-native---solid-signals)
  - [09-computed-native - Zen](#09-computed-native---zen)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 8.9M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 5.1M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 4.4M |
|  4 | [**MobX**](https://github.com/mobxjs/mobx) | 694K |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 128K |

---

## Detailed Results

### Chained Computed

```
🥇   Solid Signals      ████████████████████████████████████████     30.5M ops/sec
🥈   Zen                █████████████████████████████████            25.0M ops/sec
🥉   Preact Signals     ██████████████                               10.6M ops/sec
4.   MobX               ██                                            1.5M ops/sec
5.   Jotai                                                            330K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 30,475,134 | ±0.03% | 0.0000ms | 0.1000ms | 15237568 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 24,991,951 | ±0.04% | 0.0000ms | 0.1000ms | 12495976 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 10,647,386 | ±0.03% | 0.1000ms | 0.2000ms | 5323694 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 1,455,077 | ±2.62% | 0.7000ms | 1.4000ms | 727539 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 329,889 | ±3.60% | 3.0000ms | 3.5000ms | 164945 |

**Key Insight:** Solid Signals is 92.38x faster than Jotai in this test.

### Computed Updates

```
🥇   Solid Signals      ████████████████████████████████████████      818K ops/sec
🥈   Preact Signals     ███████████████████                           382K ops/sec
🥉   Zen                ██████████████                                287K ops/sec
4.   MobX               ███                                            53K ops/sec
5.   Jotai                                                              8K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 818,056 | ±0.03% | 1.2000ms | 1.5000ms | 409028 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 381,798 | ±0.07% | 2.6000ms | 3.5000ms | 190899 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 287,301 | ±0.26% | 3.5000ms | 4.2000ms | 143651 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 53,278 | ±0.60% | 18.8000ms | 21.3000ms | 26640 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 8,105 | ±4.05% | 123.4000ms | 156.9000ms | 4053 |

**Key Insight:** Solid Signals is 100.93x faster than Jotai in this test.

### Native Computed

```
🥇   Solid Signals      ████████████████████████████████████████     28.2M ops/sec
🥈   Preact Signals     █████████████████████████████                20.5M ops/sec
🥉   Zen                ██████████████████████████                   18.1M ops/sec
4.   MobX               ██████                                        4.3M ops/sec
5.   Jotai              █                                             778K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 28,163,724 | ±0.07% | 0.0000ms | 0.1000ms | 14081862 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 20,495,073 | ±0.37% | 0.0000ms | 0.1000ms | 10247537 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 18,076,506 | ±1.02% | 0.1000ms | 0.1000ms | 9038253 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 4,307,874 | ±0.16% | 0.2000ms | 0.3000ms | 2153938 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 778,056 | ±3.87% | 1.3000ms | 2.1000ms | 389028 |

**Key Insight:** Solid Signals is 36.20x faster than Jotai in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:computed-native

# Or run specific test file
npx vitest bench groups/09-computed-native/*.bench.ts
```

---
*Last generated: 2025-11-11T12:22:16.348Z*
