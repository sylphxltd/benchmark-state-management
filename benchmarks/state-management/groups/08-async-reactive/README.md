# Reactive Async

Native async atoms that auto-recompute when dependencies change.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [08-async-reactive - Jotai](#08-async-reactive---jotai)
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
| 🥇 1 | [**Jotai**](https://github.com/pmndrs/jotai) | 👑 12K |

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

### Chained Async Atoms

```
🥇   Jotai              ████████████████████████████████████████       428 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 428 | ±0.82% | 2334.0000ms | 2599.4000ms | 215 |

### Complex Async Dependencies

```
🥇   Jotai              ████████████████████████████████████████       431 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 431 | ±1.23% | 2318.6000ms | 2625.4000ms | 216 |

### Concurrent Async Reads

```
🥇   Jotai              ████████████████████████████████████████      549K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 548,762 | ±0.35% | 1.8000ms | 2.9000ms | 274381 |

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
*Last generated: 2025-11-11T11:38:36.597Z*
