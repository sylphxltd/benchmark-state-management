# Form State

Multi-field updates.

## 📑 Table of Contents

- [Group Overall Performance](#group-overall-performance)
- [Detailed Results](#detailed-results)
  - [07-form - Jotai](#07-form---jotai)
  - [07-form - MobX](#07-form---mobx)
  - [07-form - Preact Signals](#07-form---preact-signals)
  - [07-form - Solid Signals](#07-form---solid-signals)
  - [07-form - Valtio](#07-form---valtio)
  - [07-form - Zen](#07-form---zen)
  - [07-form - Zustand](#07-form---zustand)
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
| 🥇 1 | [**Solid Signals**](https://github.com/solidjs/solid) | 👑 24.0M |
| 🥈 2 | [**Zen**](https://github.com/SylphxAI/zen) | 23.4M |
| 🥉 3 | [**Preact Signals**](https://github.com/preactjs/signals) | 23.1M |
|  4 | [**Zustand**](https://github.com/pmndrs/zustand) | 18.9M |
|  5 | [**Valtio**](https://github.com/pmndrs/valtio) | 3.6M |
|  6 | [**MobX**](https://github.com/mobxjs/mobx) | 2.2M |
|  7 | [**Jotai**](https://github.com/pmndrs/jotai) | 2.2M |

---

## Detailed Results

### Conditional Field Update

```
🥇   Solid Signals      ████████████████████████████████████████     46.3M ops/sec
🥈   Zustand            ████████████████████████████████████████     45.9M ops/sec
🥉   Zen                ███████████████████████████████████████      45.7M ops/sec
4.   Preact Signals     ███████████████████████████████████████      44.9M ops/sec
5.   Valtio             ██████████████████                           21.4M ops/sec
6.   MobX               ███████                                       8.1M ops/sec
7.   Jotai              ██████                                        6.5M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 46,349,005 | ±0.04% | 0.0000ms | 0.0000ms | 23174504 |
| 🥈 | [**Zustand**](https://github.com/pmndrs/zustand) | 45,945,156 | ±0.06% | 0.0000ms | 0.0000ms | 22972578 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 45,680,912 | ±0.04% | 0.0000ms | 0.0000ms | 22840458 |
| 4 | [**Preact Signals**](https://github.com/preactjs/signals) | 44,896,869 | ±0.04% | 0.0000ms | 0.0000ms | 22448436 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 21,428,979 | ±0.08% | 0.0000ms | 0.1000ms | 10714492 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 8,051,060 | ±0.03% | 0.1000ms | 0.2000ms | 4025530 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 6,466,585 | ±0.13% | 0.2000ms | 0.2000ms | 3233293 |

**Key Insight:** Solid Signals is 7.17x faster than Jotai in this test.

### Full Form Reset

```
🥇   Solid Signals      ████████████████████████████████████████     30.6M ops/sec
🥈   Preact Signals     ███████████████████████████████████████      29.6M ops/sec
🥉   Zen                █████████████████████████████████████        28.5M ops/sec
4.   Zustand            ████████████████████████                     18.2M ops/sec
5.   Jotai              ███                                           2.2M ops/sec
6.   MobX                                                             123K ops/sec
7.   Valtio                                                            92K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 30,618,687 | ±0.30% | 0.0000ms | 0.0000ms | 15309344 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 29,570,735 | ±0.13% | 0.0000ms | 0.0000ms | 14785368 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 28,547,250 | ±0.30% | 0.0000ms | 0.1000ms | 14273626 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 18,156,959 | ±3.86% | 0.1000ms | 0.1000ms | 9078480 |
| 5 | [**Jotai**](https://github.com/pmndrs/jotai) | 2,195,168 | ±0.78% | 0.5000ms | 0.6000ms | 1097585 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 122,752 | ±0.30% | 8.1000ms | 10.1000ms | 61377 |
| 7 | [**Valtio**](https://github.com/pmndrs/valtio) | 91,970 | ±16.25% | 10.9000ms | 26.4000ms | 46011 |

**Key Insight:** Solid Signals is 332.92x faster than Valtio in this test.

### Multiple Fields Update (3 fields)

```
🥇   Zen                ████████████████████████████████████████     17.8M ops/sec
🥈   Solid Signals      ███████████████████████████████████████      17.4M ops/sec
🥉   Preact Signals     ██████████████████████████████████████       16.8M ops/sec
4.   Zustand            ██████████████████████████████               13.4M ops/sec
5.   Valtio             █████                                         2.0M ops/sec
6.   Jotai              ███                                           1.5M ops/sec
7.   MobX               ███                                           1.4M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Zen**](https://github.com/SylphxAI/zen) | 17,775,417 | ±0.37% | 0.1000ms | 0.1000ms | 8887710 |
| 🥈 | [**Solid Signals**](https://github.com/solidjs/solid) | 17,371,902 | ±0.38% | 0.1000ms | 0.1000ms | 8685951 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 16,771,688 | ±0.49% | 0.1000ms | 0.1000ms | 8385845 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 13,357,193 | ±0.61% | 0.1000ms | 0.1000ms | 6678597 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 2,021,969 | ±0.31% | 0.5000ms | 0.9000ms | 1010985 |
| 6 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,542,937 | ±0.60% | 0.6000ms | 1.0000ms | 771469 |
| 7 | [**MobX**](https://github.com/mobxjs/mobx) | 1,368,345 | ±0.15% | 0.7000ms | 1.0000ms | 684173 |

**Key Insight:** Zen is 12.99x faster than MobX in this test.

### Nested Field Update

```
🥇   Solid Signals      ████████████████████████████████████████     16.5M ops/sec
🥈   Preact Signals     ██████████████████████████████████████       15.7M ops/sec
🥉   Zen                █████████████████████████████████████        15.5M ops/sec
4.   Zustand            █████████████████████████████                12.1M ops/sec
5.   Valtio             ██████████████████████████                   10.9M ops/sec
6.   MobX               █████████████                                 5.4M ops/sec
7.   Jotai              ████                                          1.6M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 16,548,821 | ±0.44% | 0.1000ms | 0.1000ms | 8274411 |
| 🥈 | [**Preact Signals**](https://github.com/preactjs/signals) | 15,655,595 | ±0.62% | 0.1000ms | 0.1000ms | 7827798 |
| 🥉 | [**Zen**](https://github.com/SylphxAI/zen) | 15,480,520 | ±0.55% | 0.1000ms | 0.1000ms | 7740260 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 12,106,266 | ±0.03% | 0.1000ms | 0.1000ms | 6053134 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 10,893,727 | ±0.09% | 0.1000ms | 0.2000ms | 5446864 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 5,416,436 | ±0.11% | 0.2000ms | 0.3000ms | 2708218 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,560,908 | ±0.72% | 0.6000ms | 0.9000ms | 780454 |

**Key Insight:** Solid Signals is 10.60x faster than Jotai in this test.

### Single Field Update

```
🥇   Solid Signals      ████████████████████████████████████████     19.7M ops/sec
🥈   Zen                ███████████████████████████████████████      19.4M ops/sec
🥉   Preact Signals     ██████████████████████████████████████       18.9M ops/sec
4.   Zustand            █████████████████████████████████████        18.0M ops/sec
5.   Valtio             ███████████████████████████                  13.3M ops/sec
6.   MobX               ███████████████                               7.4M ops/sec
7.   Jotai              ███                                           1.6M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|:----:|---------|---------|----------|------|-----|---------|
| 🥇 | [**Solid Signals**](https://github.com/solidjs/solid) | 19,680,173 | ±0.85% | 0.1000ms | 0.1000ms | 9840087 |
| 🥈 | [**Zen**](https://github.com/SylphxAI/zen) | 19,376,257 | ±0.09% | 0.1000ms | 0.1000ms | 9688129 |
| 🥉 | [**Preact Signals**](https://github.com/preactjs/signals) | 18,890,605 | ±0.06% | 0.1000ms | 0.1000ms | 9445303 |
| 4 | [**Zustand**](https://github.com/pmndrs/zustand) | 18,047,397 | ±1.00% | 0.1000ms | 0.1000ms | 9023699 |
| 5 | [**Valtio**](https://github.com/pmndrs/valtio) | 13,259,151 | ±1.40% | 0.1000ms | 0.1000ms | 6629577 |
| 6 | [**MobX**](https://github.com/mobxjs/mobx) | 7,384,262 | ±0.05% | 0.1000ms | 0.2000ms | 3692132 |
| 7 | [**Jotai**](https://github.com/pmndrs/jotai) | 1,562,507 | ±0.64% | 0.6000ms | 1.0000ms | 781254 |

**Key Insight:** Solid Signals is 12.60x faster than Jotai in this test.

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:form

# Or run specific test file
npx vitest bench groups/07-form/*.bench.ts
```

---
*Last generated: 2025-11-11T10:17:56.907Z*
