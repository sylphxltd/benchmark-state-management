# Batching Native

Built-in batching.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [11-batching-native - MobX](#11-batching-native---mobx)
  - [11-batching-native - Solid Signals](#11-batching-native---solid-signals)
  - [11-batching-native - Valtio](#11-batching-native---valtio)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 34.6M |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.6M |
| 🥉 3 | [**MobX**](https://github.com/mobxjs/mobx) | 1.5M |

---

## Detailed Results

### Batched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     38.8M ops/sec
🥈   Valtio             █████                                         4.7M ops/sec
🥉   MobX               ███                                           3.1M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 38,797,071 | ±1.79% | 0.0000ms | 0.1000ms | 19398536 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,653,335 | ±0.11% | 0.2000ms | 0.3000ms | 2326668 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,135,390 | ±0.22% | 0.3000ms | 0.6000ms | 1567695 |

**Key Insight:** Solid Signals is 12.37x faster than MobX in this test.

### Batched with Observers

```
🥇   Solid Signals      ████████████████████████████████████████     34.7M ops/sec
🥈   Valtio             █████                                         4.7M ops/sec
🥉   MobX               ████                                          3.2M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 34,694,584 | ±7.46% | 0.0000ms | 0.1000ms | 17347293 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,681,191 | ±0.11% | 0.2000ms | 0.3000ms | 2340596 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,219,325 | ±0.21% | 0.3000ms | 0.4000ms | 1609663 |

**Key Insight:** Solid Signals is 10.78x faster than MobX in this test.

### Large Batch

```
🥇   Solid Signals      ████████████████████████████████████████     26.4M ops/sec
🥈   MobX                                                             152K ops/sec
🥉   Valtio                                                            64K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 26,421,043 | ±0.10% | 0.0000ms | 0.1000ms | 13210522 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 151,681 | ±0.11% | 6.6000ms | 8.0000ms | 75841 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 64,014 | ±0.17% | 15.6000ms | 18.8000ms | 32008 |

**Key Insight:** Solid Signals is 412.74x faster than Valtio in this test.

### Unbatched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     40.4M ops/sec
🥈   Valtio             █████                                         4.6M ops/sec
🥉   MobX               ████                                          3.7M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 40,397,555 | ±0.04% | 0.0000ms | 0.1000ms | 20198779 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,616,826 | ±0.79% | 0.2000ms | 0.3000ms | 2308413 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,726,414 | ±0.46% | 0.3000ms | 0.3000ms | 1863207 |

**Key Insight:** Solid Signals is 10.84x faster than MobX in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:batching-native

# Or run specific test file
npx vitest bench groups/11-batching-native/*.bench.ts
```

---
*Last generated: 2025-11-11T13:34:30.987Z*
