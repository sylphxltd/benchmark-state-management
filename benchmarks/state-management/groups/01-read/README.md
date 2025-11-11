# Read Operations

Simple read and high-frequency read patterns.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [groups/01-read/read-x1.bench.ts > Read Operations - x1](#groups01-readread-x1benchts-read-operations---x1)
  - [groups/01-read/read-x1000.bench.ts > Read - 1000x operations (experimental)](#groups01-readread-x1000benchts-read---1000x-operations-experimental)
  - [groups/01-read/read-x10000.bench.ts > Read - 10000x operations (experimental)](#groups01-readread-x10000benchts-read---10000x-operations-experimental)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 28.3M |
| 🥈 2 | [**Jotai**](https://github.com/pmndrs/jotai) | 24.6M |
| 🥉 3 | [**Zen**](https://github.com/SylphxAI/zen) | 22.6M |
|  4 | [**Preact Signals**](https://github.com/preactjs/signals) | 14.7M |
|  5 | [**MobX**](https://github.com/mobxjs/mobx) | 9.8M |
|  6 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 2.5M |
|  7 | [**Valtio**](https://github.com/pmndrs/valtio) | 2.5M |
|  8 | [**Zustand**](https://github.com/pmndrs/zustand) | 993K |

---

## Detailed Results

### groups/01-read/read-x1.bench.ts > Read Operations - x1

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████     39.9M ops/sec
🥈   Jotai              ████████████████████████████████████         36.3M ops/sec
🥉   Preact Signals     ██████████████████████████████████           34.3M ops/sec
4.   Zen                ████████████████████████████████             32.2M ops/sec
5.   MobX               █████████████████████████                    25.2M ops/sec
6.   Solid Signals      ████████████████████                         20.1M ops/sec
7.   Jotai              █████████████████                            16.6M ops/sec
8.   Zen                ████████████████                             15.9M ops/sec
9.   Redux Toolkit      ███████                                       6.6M ops/sec
10.  Preact Signals     ██████                                        6.3M ops/sec
11.  Valtio             █████                                         4.9M ops/sec
12.  MobX               ████                                          3.8M ops/sec
13.  Zustand            ███                                           2.7M ops/sec
14.  Valtio             █                                             1.3M ops/sec
15.  Redux Toolkit      █                                             960K ops/sec
16.  Zustand                                                          363K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 39,913,249.366 | ±0.04% | 0.0251ms | 0.0420ms |  |
| 🥈 | [**Jotai**](https://github.com/pmndrs/jotai) | 36,293,502.403 | ±1.42% | 0.0276ms | 0.0420ms |  |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 34,347,738.626 | ±0.04% | 0.0291ms | 0.0420ms |  |
| 4 | [**Zen**](https://github.com/SylphxAI/zen) | 32,186,171.807 | ±0.16% | 0.0311ms | 0.0420ms |  |
| 5 | [**MobX**](https://github.com/mobxjs/mobx) | 25,151,160.692 | ±0.10% | 0.0398ms | 0.0840ms |  |
| 6 | [**Solid Signals**](https://github.com/solidjs/solid) | 20,090,065.719 | ±0.55% | 0.0498ms | 0.1250ms |  |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 16,623,015.878 | ±0.42% | 0.0602ms | 0.1250ms |  |
| 8 | [**Zen**](https://github.com/SylphxAI/zen) | 15,863,964.921 | ±0.45% | 0.0630ms | 0.1250ms |  |
| 9 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 6,578,053.737 | ±0.08% | 0.1520ms | 0.2080ms |  |
| 10 | [**Preact Signals**](https://github.com/preactjs/signals) | 6,274,223.423 | ±0.43% | 0.1594ms | 0.3340ms |  |
| 11 | [**Valtio**](https://github.com/pmndrs/valtio) | 4,920,751.715 | ±0.38% | 0.2032ms | 0.2500ms |  |
| 12 | [**MobX**](https://github.com/mobxjs/mobx) | 3,831,724.429 | ±0.35% | 0.2610ms | 0.3340ms |  |
| 13 | [**Zustand**](https://github.com/pmndrs/zustand) | 2,716,212.713 | ±0.61% | 0.3682ms | 0.7920ms |  |
| 14 | [**Valtio**](https://github.com/pmndrs/valtio) | 1,255,349.016 | ±0.02% | 0.7966ms | 0.9580ms |  |
| 15 | [**Redux Toolkit**](https://github.com/reduxjs/redux-toolkit) | 960,311.983 | ±0.21% | 1.0413ms | 1.3330ms |  |
| 16 | [**Zustand**](https://github.com/pmndrs/zustand) | 363,178.25 | ±1.18% | 2.7535ms | 3.5000ms |  |

**Key Insight:** Solid Signals is 109.90x faster than Zustand in this category.

### groups/01-read/read-x1000.bench.ts > Read - 1000x operations (experimental)

**Performance Comparison:**

```
🥇   Simple Read (1 iterations)                                                  0 ops/sec
🥈   Simple Read (1 iterations)                                                  0 ops/sec
🥉   Simple Read (1 iterations)                                                  0 ops/sec
4.   Simple Read (1 iterations)                                                  0 ops/sec
5.   Simple Read (1 iterations)                                                  0 ops/sec
6.   Simple Read (1 iterations)                                                  0 ops/sec
7.   Simple Read (1 iterations)                                                  0 ops/sec
8.   Simple Read (1 iterations)                                                  0 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥈 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥉 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 4 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 5 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 6 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 7 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 8 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |

**Key Insight:** Simple Read (1 iterations) is 0.00x faster than Simple Read (1 iterations) in this category.

### groups/01-read/read-x10000.bench.ts > Read - 10000x operations (experimental)

**Performance Comparison:**

```
🥇   Simple Read (1 iterations)                                                  0 ops/sec
🥈   Simple Read (1 iterations)                                                  0 ops/sec
🥉   Simple Read (1 iterations)                                                  0 ops/sec
4.   Simple Read (1 iterations)                                                  0 ops/sec
5.   Simple Read (1 iterations)                                                  0 ops/sec
6.   Simple Read (1 iterations)                                                  0 ops/sec
7.   Simple Read (1 iterations)                                                  0 ops/sec
8.   Simple Read (1 iterations)                                                  0 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥈 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 🥉 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 4 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 5 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 6 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 7 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |
| 8 | **Simple Read (1 iterations)** | N/A | N/A | N/A | N/A |  |

**Key Insight:** Simple Read (1 iterations) is 0.00x faster than Simple Read (1 iterations) in this category.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:read

# Or run specific test file
npx vitest bench groups/01-read/*.bench.ts
```

---
*Last generated: 2025-11-11T02:16:16.388Z*
