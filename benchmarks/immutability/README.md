# Immutability Benchmarks

Performance benchmarks for immutable data structure libraries.

## 📑 Table of Contents

- [Overall Performance Score](#overall-performance-score)
- [Performance by Group](#performance-by-group)
- [Feature Support Matrix](#feature-support-matrix)
- [Test Categories](#test-categories)
- [Group Results Summary](#group-results-summary)
- [Methodology](#methodology)
- [Key Insights](#key-insights)
- [Running Benchmarks](#running-benchmarks)

---

## Overall Performance Score

**Based on Universal Tests**: All benchmark tests across all categories

**Methodology**:
1. Each library's raw performance (ops/sec) is measured for each test
2. Scores are normalized to an index where the fastest library = 100
   - Formula: `Index = (Library_Speed / Fastest_Speed) × 100`
3. Each test is compared BY NAME across libraries (not mixed within categories)
4. The overall score is the geometric mean of all normalized indices
   - Formula: `Overall = ⁿ√(Index₁ × Index₂ × ... × Indexₙ)`
5. Geometric mean prevents any single test from dominating the overall score

**Last Benchmark Run**: Nov 11, 2025, 7:10 AM

| Rank | Library | Version | Overall Score | Bundle (gzip) | Last Updated |
|:----:|---------|---------|---------------|---------------|--------------|

---

## Performance by Group

See which library wins in each test group:

| Library | [01](#01---simple-updates) | [02](#02---nested-updates) | [03](#03---array-operations) | [04](#04---deep-operations) | [05](#05---large-scale) | [06](#06---json-patches) | [07](#07---map-&-set-operations) |
|---------|------|------|------|------|------|------|------|

**Legend:** 🥇 1st place | 🥈 2nd place | 🥉 3rd place | - Not applicable

---

## Feature Support Matrix

| Feature | Description | Libraries |
|---------|-------------|-----------|
| **JSON Patches** | Generate and apply JSON patches for state synchronization | Immer, craft |
| **Map & Set Support** | Native ES6 Map and Set data structure support | Immer, Mutative, craft |
| **TypeScript Support** | Full TypeScript type inference and safety | Immer, Mutative, craft, Immutable.js, Immutability Helper, Seamless Immutable, native-spread |
| **Structural Sharing** | Reuses unchanged parts of data structures for memory efficiency | Immer, Mutative, craft, Immutable.js |

---

## Test Categories

### Universal Tests (01, 02, 03, 04, 05)

All 6 libraries participate equally. Used to calculate Overall Performance Score.

- **01 - Simple Updates**: Basic object property updates
- **02 - Nested Updates**: Updates in nested object structures
- **03 - Array Operations**: Common array manipulations
- **04 - Deep Operations**: Deep nested updates and multiple changes
- **05 - Large Scale**: Performance with large data structures

### Feature Tests ()

Libraries participate only if they have native support for the tested capability.


---

## Group Results Summary

Click on any group to view detailed benchmark results.

### [01 - Simple Updates](groups/01-simple-updates/README.md)

Basic object property updates

*No results available*

**[View Detailed Results →](groups/01-simple-updates/README.md)**

---

### [02 - Nested Updates](groups/02-nested-updates/README.md)

Updates in nested object structures

*No results available*

**[View Detailed Results →](groups/02-nested-updates/README.md)**

---

### [03 - Array Operations](groups/03-array-operations/README.md)

Common array manipulations

*No results available*

**[View Detailed Results →](groups/03-array-operations/README.md)**

---

### [04 - Deep Operations](groups/04-deep-operations/README.md)

Deep nested updates and multiple changes

*No results available*

**[View Detailed Results →](groups/04-deep-operations/README.md)**

---

### [05 - Large Scale](groups/05-large-scale/README.md)

Performance with large data structures

*No results available*

**[View Detailed Results →](groups/05-large-scale/README.md)**

---

### [06 - JSON Patches](groups/06-patches/README.md)

Generate and apply JSON patches for state synchronization

*No results available*

**[View Detailed Results →](groups/06-patches/README.md)**

---

### [07 - Map & Set Operations](groups/07-map-set/README.md)

ES6 Map and Set support

*No results available*

**[View Detailed Results →](groups/07-map-set/README.md)**

---

## Methodology

### Universal Test Standards

- **All libraries participate** in universal tests (excluding incomplete tests)
- Results are **normalized** and combined using **geometric mean**
- Tests use **actual library APIs**, not synthetic constructs
- Each benchmark runs for sufficient iterations to achieve statistical significance

### Feature Test Standards

- **Only libraries with native support** participate
- Tests measure **real-world usage patterns** of the feature
- No placeholder or workaround implementations
- Separate rankings for each feature

### Benchmark Environment

- **Runtime**: Node.js v25.0.0
- **Framework**: Vitest Bench
- **Hardware**: [System-dependent]
- **Iterations**: Automatically determined by Vitest for statistical significance

---

## Key Insights

### Performance Tiers


### Trade-offs


---

## Running Benchmarks

```bash
# Run all benchmarks
npm run benchmark

# Run specific groups
npm run benchmark:read
npm run benchmark:write
npm run benchmark:creation
```

---

## Compliance

This benchmark category follows [../../BENCHMARK_STANDARD.md](../../BENCHMARK_STANDARD.md) v1.0.0:

- ✅ Universal tests (1, 2, 3, 4, 5) use real APIs for all libraries
- ✅ Feature tests () only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
