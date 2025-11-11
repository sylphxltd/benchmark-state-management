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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 37.4M |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.7M |
| 🥉 3 | [**MobX**](https://github.com/mobxjs/mobx) | 1.5M |

---

## Detailed Results

### Batched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     40.4M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ███                                           3.2M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 40,352,277 | ±0.12% | 0.0000ms | 0.1000ms | 20176139 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,803,248 | ±0.14% | 0.2000ms | 0.3000ms | 2401624 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,217,903 | ±0.41% | 0.3000ms | 0.4000ms | 1608952 |

**Key Insight:** Solid Signals is 12.54x faster than MobX in this test.

### Batched with Observers

```
🥇   Solid Signals      ████████████████████████████████████████     41.4M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ███                                           3.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 41,416,838 | ±0.50% | 0.0000ms | 0.1000ms | 20708419 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,839,723 | ±0.11% | 0.2000ms | 0.3000ms | 2419862 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,262,444 | ±0.02% | 0.3000ms | 0.4000ms | 1631223 |

**Key Insight:** Solid Signals is 12.70x faster than MobX in this test.

### Large Batch

```
🥇   Solid Signals      ████████████████████████████████████████     27.4M ops/sec
🥈   MobX                                                             148K ops/sec
🥉   Valtio                                                            68K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 27,443,127 | ±0.07% | 0.0000ms | 0.0000ms | 13721564 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 148,241 | ±0.60% | 6.7000ms | 7.8000ms | 74121 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 68,083 | ±0.13% | 14.7000ms | 16.4000ms | 34042 |

**Key Insight:** Solid Signals is 403.08x faster than Valtio in this test.

### Unbatched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     42.6M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ███                                           3.7M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 42,581,871 | ±0.05% | 0.0000ms | 0.1000ms | 21290937 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,833,247 | ±1.14% | 0.2000ms | 0.3000ms | 2416624 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,706,392 | ±1.70% | 0.3000ms | 0.3000ms | 1853197 |

**Key Insight:** Solid Signals is 11.49x faster than MobX in this test.

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
*Last generated: 2025-11-11T08:38:49.746Z*
