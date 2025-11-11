# Batching Native

Built-in batching.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/11-batching-native/batching-native.bench.ts > Batched Updates (3 fields)](#groups11-batching-nativebatching-nativebenchts-batched-updates-3-fields)
  - [groups/11-batching-native/batching-native.bench.ts > Unbatched Updates (3 fields)](#groups11-batching-nativebatching-nativebenchts-unbatched-updates-3-fields)
  - [groups/11-batching-native/batching-native.bench.ts > Large Batch (100 updates)](#groups11-batching-nativebatching-nativebenchts-large-batch-100-updates)
  - [groups/11-batching-native/batching-native.bench.ts > Batch with Subscriptions](#groups11-batching-nativebatching-nativebenchts-batch-with-subscriptions)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 37.3M |
| 🥈 2 | [**Valtio**](https://github.com/pmndrs/valtio) | 1.7M |
| 🥉 3 | [**MobX**](https://github.com/mobxjs/mobx) | 1.6M |

---

## Detailed Results

### groups/11-batching-native/batching-native.bench.ts > Batched Updates (3 fields)

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     39.8M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ███                                           3.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 39,849,314.008 | ±1.32% | 0.0251ms | 0.0830ms |  |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,819,574.535 | ±0.11% | 0.2075ms | 0.2500ms |  |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,262,647.674 | ±0.21% | 0.3065ms | 0.3750ms |  |

**Key Insight:** Solid Signals is 12.21x faster than MobX in this category.

### groups/11-batching-native/batching-native.bench.ts > Unbatched Updates (3 fields)

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     42.5M ops/sec
🥈   Valtio             █████                                         4.8M ops/sec
🥉   MobX               ████                                          3.8M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 42,490,501.196 | ±0.06% | 0.0235ms | 0.0830ms |  |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,849,005.874 | ±0.27% | 0.2062ms | 0.2500ms |  |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,799,625.992 | ±0.03% | 0.2632ms | 0.3330ms |  |

**Key Insight:** Solid Signals is 11.18x faster than MobX in this category.

### groups/11-batching-native/batching-native.bench.ts > Large Batch (100 updates)

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     27.9M ops/sec
🥈   MobX                                                             146K ops/sec
🥉   Valtio                                                            68K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 27,945,211.82 | ±0.08% | 0.0358ms | 0.0420ms |  |
| 🥈 | [**MobX**](https://github.com/mobxjs/mobx) | 146,456.844 | ±0.03% | 6.8279ms | 8.3750ms |  |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 67,668.432 | ±0.28% | 14.7779ms | 17.2920ms |  |

**Key Insight:** Solid Signals is 412.97x faster than Valtio in this category.

### groups/11-batching-native/batching-native.bench.ts > Batch with Subscriptions

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     41.1M ops/sec
🥈   Valtio             █████                                         4.7M ops/sec
🥉   MobX               ███                                           3.2M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 41,108,355.835 | ±0.11% | 0.0243ms | 0.0830ms |  |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,713,770.906 | ±3.79% | 0.2121ms | 0.2500ms |  |
| 🥉 | [**MobX**](https://github.com/mobxjs/mobx) | 3,205,211.917 | ±0.55% | 0.3120ms | 0.3750ms |  |

**Key Insight:** Solid Signals is 12.83x faster than MobX in this category.

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
*Last generated: 2025-11-11T02:16:16.424Z*
