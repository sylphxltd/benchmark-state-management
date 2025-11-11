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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 8.0M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 4.5M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 4.2M |
|  4 | [**MobX**](https://github.com/mobxjs/mobx) | 521K |
|  5 | [**Jotai**](https://github.com/pmndrs/jotai) | 122K |

---

## Detailed Results

### Chained Computed

```
🥇   Solid Signals      ████████████████████████████████████████     25.7M ops/sec
🥈   Zen                ███████████████████████████████████          22.2M ops/sec
🥉   Preact Signals     ████████████████                             10.4M ops/sec
4.   MobX               ██                                            1.1M ops/sec
5.   Jotai                                                            305K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 25,709,393 | ±0.08% | 0.0000ms | 0.1000ms | 12854697 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 22,177,149 | ±0.04% | 0.0000ms | 0.1000ms | 11088575 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 10,375,472 | ±0.03% | 0.1000ms | 0.2000ms | 5187736 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 1,117,448 | ±1.28% | 0.9000ms | 1.7000ms | 558725 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 305,259 | ±4.58% | 3.3000ms | 5.2000ms | 152631 |

**Key Insight:** Solid Signals is 84.22x faster than Jotai in this test.

### Computed Updates

```
🥇   Solid Signals      ████████████████████████████████████████      745K ops/sec
🥈   Preact Signals     ███████████████████                           362K ops/sec
🥉   Zen                █████████████                                 251K ops/sec
4.   MobX               ██                                             39K ops/sec
5.   Jotai                                                              8K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 745,166 | ±0.05% | 1.3000ms | 2.1000ms | 372583 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 362,417 | ±0.06% | 2.8000ms | 3.5000ms | 181209 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 251,384 | ±0.40% | 4.0000ms | 7.0000ms | 125693 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 39,174 | ±0.42% | 25.5000ms | 39.3000ms | 19587 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 7,893 | ±4.14% | 126.7000ms | 190.1000ms | 3947 |

**Key Insight:** Solid Signals is 94.41x faster than Jotai in this test.

### Native Computed

```
🥇   Solid Signals      ████████████████████████████████████████     26.3M ops/sec
🥈   Preact Signals     ██████████████████████████████               19.5M ops/sec
🥉   Zen                ████████████████████████                     15.9M ops/sec
4.   MobX               █████                                         3.2M ops/sec
5.   Jotai              █                                             749K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 26,319,412 | ±1.49% | 0.0000ms | 0.1000ms | 13159706 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 19,488,217 | ±0.61% | 0.1000ms | 0.1000ms | 9744109 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 15,924,758 | ±0.26% | 0.1000ms | 0.1000ms | 7962379 |
| 4 | [**MobX**](https://github.com/mobxjs/mobx) | 3,237,186 | ±0.29% | 0.3000ms | 0.5000ms | 1618594 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 749,050 | ±4.34% | 1.3000ms | 2.5000ms | 374525 |

**Key Insight:** Solid Signals is 35.14x faster than Jotai in this test.

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
*Last generated: 2025-11-11T10:50:09.999Z*
