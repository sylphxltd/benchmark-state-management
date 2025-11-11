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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 30.4M |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.6M |
| 🥉 3 | [**MobX**](https://github.com/mobxjs/mobx) | 1.2M |

---

## Detailed Results

### Batched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     32.9M ops/sec
🥈   Valtio             ██████                                        4.6M ops/sec
🥉   MobX               ███                                           2.4M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 32,924,002 | ±0.12% | 0.0000ms | 0.1000ms | 16462002 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,560,188 | ±0.40% | 0.2000ms | 0.3000ms | 2280095 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 2,408,977 | ±0.17% | 0.4000ms | 0.7000ms | 1204489 |

**Key Insight:** Solid Signals is 13.67x faster than MobX in this test.

### Batched with Observers

```
🥇   Solid Signals      ████████████████████████████████████████     32.8M ops/sec
🥈   Valtio             ██████                                        4.6M ops/sec
🥉   MobX               ███                                           2.5M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 32,772,808 | ±0.11% | 0.0000ms | 0.1000ms | 16386405 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,615,830 | ±0.16% | 0.2000ms | 0.3000ms | 2307915 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 2,454,376 | ±0.28% | 0.4000ms | 0.7000ms | 1227189 |

**Key Insight:** Solid Signals is 13.35x faster than MobX in this test.

### Large Batch

```
🥇   Solid Signals      ████████████████████████████████████████     22.8M ops/sec
🥈   MobX                                                             105K ops/sec
🥉   Valtio                                                            65K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 22,836,124 | ±0.10% | 0.0000ms | 0.1000ms | 11418063 |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 104,838 | ±0.68% | 9.5000ms | 18.9000ms | 52420 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 65,004 | ±0.21% | 15.4000ms | 19.1000ms | 32503 |

**Key Insight:** Solid Signals is 351.30x faster than Valtio in this test.

### Unbatched Updates

```
🥇   Solid Signals      ████████████████████████████████████████     34.8M ops/sec
🥈   Valtio             █████                                         4.5M ops/sec
🥉   MobX               ███                                           2.9M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 34,790,649 | ±0.06% | 0.0000ms | 0.1000ms | 17395326 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,512,588 | ±0.84% | 0.2000ms | 0.3000ms | 2256295 |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 2,922,693 | ±0.17% | 0.3000ms | 0.5000ms | 1461347 |

**Key Insight:** Solid Signals is 11.90x faster than MobX in this test.

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
*Last generated: 2025-11-11T11:01:47.196Z*
