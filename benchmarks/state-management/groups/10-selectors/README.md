# Selectors

Manual selector pattern.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [10-selectors - Redux Toolkit](#10-selectors---redux-toolkit)
  - [10-selectors - Valtio](#10-selectors---valtio)
  - [10-selectors - Zustand](#10-selectors---zustand)
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
| 🥇 1 | [**Valtio**](https://github.com/pmndrs/valtio) | 👑 818K |
| 🥈 2 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 141K |
| 🥉 3 | [**Zustand**](https://github.com/pmndrs/zustand) | 128K |

---

## Detailed Results

### Chained Selectors

```
🥇   Valtio             ████████████████████████████████████████      4.1M ops/sec
🥈   Zustand            ███                                           358K ops/sec
🥉   Redux Toolkit      ███                                           330K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,110,334 | ±0.15% | 0.2000ms | 0.4000ms | 2055167 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 357,981 | ±0.17% | 2.8000ms | 3.5000ms | 178991 |
| 🥉 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 329,657 | ±2.29% | 3.0000ms | 4.4000ms | 164829 |

**Key Insight:** Valtio is 12.47x faster than Redux Toolkit in this test.

### Repeated Selector Access

```
🥇   Zustand            ████████████████████████████████████████      651K ops/sec
🥈   Valtio             █████████████████████████████                 475K ops/sec
🥉   Redux Toolkit      █████████████████████████████                 466K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 650,528 | ±0.08% | 1.5000ms | 2.1000ms | 325264 |
| 🥈 | [**Valtio**](https://github.com/pmndrs/valtio) | 474,722 | ±0.05% | 2.1000ms | 2.6000ms | 237361 |
| 🥉 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 465,592 | ±0.65% | 2.1000ms | 4.8000ms | 232796 |

**Key Insight:** Zustand is 1.40x faster than Redux Toolkit in this test.

### Selector

```
🥇   Valtio             ████████████████████████████████████████      4.2M ops/sec
🥈   Redux Toolkit      █████                                         526K ops/sec
🥉   Zustand            ███                                           320K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,210,310 | ±0.59% | 0.2000ms | 0.4000ms | 2105156 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 526,193 | ±1.65% | 1.9000ms | 2.7000ms | 263097 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 320,123 | ±1.51% | 3.1000ms | 10.0000ms | 160062 |

**Key Insight:** Valtio is 13.15x faster than Zustand in this test.

### Selector Updates

```
🥇   Valtio             ████████████████████████████████████████       54K ops/sec
🥈   Redux Toolkit      ████                                            5K ops/sec
🥉   Zustand            ███                                             4K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 54,467 | ±0.19% | 18.4000ms | 23.8000ms | 27234 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 4,885 | ±2.43% | 204.7000ms | 717.9000ms | 2443 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,600 | ±0.41% | 277.8000ms | 316.1000ms | 1800 |

**Key Insight:** Valtio is 15.13x faster than Zustand in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:selectors

# Or run specific test file
npx vitest bench groups/10-selectors/*.bench.ts
```

---
*Last generated: 2025-11-11T10:50:10.047Z*
