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
🥇   Jotai              ████████████████████████████████████████      2.4M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,379,134 | ±0.15% | 0.4000ms | 0.5000ms | 1189568 |

### Async Atom with Dependency Update

```
🥇   Jotai              ████████████████████████████████████████       863 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 863 | ±1.10% | 1158.3000ms | 1250.8000ms | 432 |

### Chained Async Atoms

```
🥇   Jotai              ████████████████████████████████████████       443 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 443 | ±1.57% | 2258.9000ms | 2401.8000ms | 222 |

### Complex Async Dependencies

```
🥇   Jotai              ████████████████████████████████████████       434 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 434 | ±0.99% | 2302.0000ms | 2393.0000ms | 218 |

### Concurrent Async Reads

```
🥇   Jotai              ████████████████████████████████████████      570K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Jotai**](https://github.com/pmndrs/jotai) | 569,818 | ±0.30% | 1.8000ms | 2.3000ms | 284910 |

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
*Last generated: 2025-11-11T11:01:47.043Z*
