# Reactive Async

Native async atoms that auto-recompute when dependencies change.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [08-async-reactive - Jotai](#08-async-reactive---jotai)
  - [08-async-reactive - Zen](#08-async-reactive---zen)
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
| 🥇 1 | [**Zen**](https://github.com/SylphxAI/zen) | 👑 8.1M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 12K |

---

## Detailed Results

### Async Atom Read

```
🥇   Jotai              ████████████████████████████████████████      2.3M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,348,945 | ±0.17% | 0.4000ms | 0.6000ms | 1174473 |

### Async Atom with Dependency Update

```
🥇   Jotai              ████████████████████████████████████████       865 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 865 | ±1.07% | 1156.4000ms | 1234.0000ms | 433 |

### Async Computed Read

```
🥇   Zen                ████████████████████████████████████████     10.5M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 10,515,547 | ±0.70% | 0.1000ms | 0.2000ms | 5257774 |

### Async Computed with Dependency Update

```
🥇   Zen                ████████████████████████████████████████      9.9M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 9,851,391 | ±0.26% | 0.1000ms | 0.2000ms | 4925696 |

### Chained Async Atoms

```
🥇   Jotai              ████████████████████████████████████████       428 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 428 | ±0.82% | 2334.0000ms | 2599.4000ms | 215 |

### Chained Async Computed

```
🥇   Zen                ████████████████████████████████████████      9.9M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 9,882,424 | ±0.36% | 0.1000ms | 0.2000ms | 4941212 |

### Complex Async Dependencies

```
🥇   Zen                ████████████████████████████████████████      9.6M ops/sec
🥈   Jotai                                                             431 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 9,634,307 | ±0.27% | 0.1000ms | 0.2000ms | 4817154 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 431 | ±1.23% | 2318.6000ms | 2625.4000ms | 216 |

**Key Insight:** Zen is 22337.83x faster than Jotai in this test.

### Concurrent Async Reads

```
🥇   Zen                ████████████████████████████████████████      3.5M ops/sec
🥈   Jotai              ██████                                        549K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 3,499,901 | ±0.33% | 0.3000ms | 0.5000ms | 1749951 |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 548,762 | ±0.35% | 1.8000ms | 2.9000ms | 274381 |

**Key Insight:** Zen is 6.38x faster than Jotai in this test.

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
*Last generated: 2025-11-11T12:22:16.288Z*
