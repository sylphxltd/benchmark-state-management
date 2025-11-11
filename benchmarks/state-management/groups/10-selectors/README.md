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
| 🥇 1 | [**Valtio**](https://github.com/pmndrs/valtio) | 👑 917K |
| 🥈 2 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 160K |
| 🥉 3 | [**Zustand**](https://github.com/pmndrs/zustand) | 129K |

---

## Detailed Results

### Chained Selectors

```
🥇   Valtio             ████████████████████████████████████████      4.7M ops/sec
🥈   Redux Toolkit      ███                                           359K ops/sec
🥉   Zustand            ███                                           341K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,710,578 | ±0.12% | 0.2000ms | 0.3000ms | 2355290 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 358,628 | ±4.48% | 2.8000ms | 4.0000ms | 179314 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 341,213 | ±1.00% | 2.9000ms | 4.0000ms | 170607 |

**Key Insight:** Valtio is 13.81x faster than Zustand in this test.

### Repeated Selector Access

```
🥇   Zustand            ████████████████████████████████████████      672K ops/sec
🥈   Redux Toolkit      █████████████████████████████████             562K ops/sec
🥉   Valtio             ██████████████████████████████                496K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zustand**](https://github.com/pmndrs/zustand) | 671,660 | ±0.03% | 1.5000ms | 1.7000ms | 335830 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 561,737 | ±0.18% | 1.8000ms | 2.3000ms | 280869 |
| 🥉 | [**Valtio**](https://github.com/pmndrs/valtio) | 496,056 | ±0.03% | 2.0000ms | 2.5000ms | 248028 |

**Key Insight:** Zustand is 1.35x faster than Valtio in this test.

### Selector

```
🥇   Valtio             ████████████████████████████████████████      5.2M ops/sec
🥈   Redux Toolkit      ████                                          568K ops/sec
🥉   Zustand            ███                                           353K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 5,176,517 | ±0.14% | 0.2000ms | 0.3000ms | 2588259 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 568,038 | ±2.62% | 1.8000ms | 2.4000ms | 284020 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 352,926 | ±1.08% | 2.8000ms | 3.9000ms | 176463 |

**Key Insight:** Valtio is 14.67x faster than Zustand in this test.

### Selector Updates

```
🥇   Valtio             ████████████████████████████████████████       58K ops/sec
🥈   Redux Toolkit      ████                                            6K ops/sec
🥉   Zustand            ██                                              3K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Valtio**](https://github.com/pmndrs/valtio) | 58,349 | ±0.34% | 17.1000ms | 21.3000ms | 29175 |
| 🥈 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 5,717 | ±3.81% | 174.9000ms | 192.9000ms | 2859 |
| 🥉 | [**Zustand**](https://github.com/pmndrs/zustand) | 3,414 | ±1.28% | 292.9000ms | 412.2000ms | 1708 |

**Key Insight:** Valtio is 17.09x faster than Zustand in this test.

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
*Last generated: 2025-11-11T18:11:33.787Z*
