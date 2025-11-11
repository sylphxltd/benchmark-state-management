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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 37.2M |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.4M |
| 🥉 3 | [**MobX**](https://github.com/mobxjs/mobx) | 1.4M |

---

## Detailed Results

### Batched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     40.5M ops/sec
🥈   Valtio             ████                                          4.0M ops/sec
🥉   MobX               ███                                           2.8M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 40,483,559 | ±1.26% | 0.0000ms | 0.1000ms | 20241781 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 3,951,992 | ±0.62% | 0.3000ms | 0.4000ms | 1975997 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 2,757,413 | ±0.21% | 0.4000ms | 0.5000ms | 1378707 |

**Key Insight:** Solid Signals is 14.68x faster than MobX in this test.

### Batched with Observers

```
🥇   Solid Signals      ████████████████████████████████████████     41.1M ops/sec
🥈   Valtio             ████                                          4.1M ops/sec
🥉   MobX               ███                                           2.9M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 41,057,307 | ±0.05% | 0.0000ms | 0.1000ms | 20528654 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,120,504 | ±0.20% | 0.2000ms | 0.4000ms | 2060252 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 2,853,148 | ±0.08% | 0.4000ms | 0.5000ms | 1426575 |

**Key Insight:** Solid Signals is 14.39x faster than MobX in this test.

### Large Batch

```
🥇   Solid Signals      ████████████████████████████████████████     27.4M ops/sec
🥈   MobX                                                             134K ops/sec
🥉   Valtio                                                            57K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 27,433,810 | ±0.08% | 0.0000ms | 0.0000ms | 13716906 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 133,628 | ±0.14% | 7.5000ms | 10.2000ms | 66815 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 57,391 | ±0.35% | 17.4000ms | 28.4000ms | 28696 |

**Key Insight:** Solid Signals is 478.02x faster than Valtio in this test.

### Unbatched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     41.9M ops/sec
🥈   Valtio             ████                                          4.1M ops/sec
🥉   MobX               ███                                           3.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 41,856,233 | ±1.26% | 0.0000ms | 0.1000ms | 20928118 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,095,058 | ±0.87% | 0.2000ms | 0.4000ms | 2047529 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,297,375 | ±0.73% | 0.3000ms | 0.5000ms | 1648688 |

**Key Insight:** Solid Signals is 12.69x faster than MobX in this test.

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
*Last generated: 2025-11-11T10:17:57.020Z*
