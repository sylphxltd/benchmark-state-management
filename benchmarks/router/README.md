# Router Benchmarks

Performance benchmarks for React routing libraries.

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

| Library | [01](#01---basic-routes) | [02](#02---dynamic-routes) | [03](#03---advanced-routes) | [04](#04---real-world-patterns) |
|---------|------|------|------|------|

**Legend:** 🥇 1st place | 🥈 2nd place | 🥉 3rd place | - Not applicable

---

## Feature Support Matrix

| Feature | Description | Libraries |
|---------|-------------|-----------|
| **Dynamic Parameters** | Extract parameters from URL paths | react-router, Wouter, zen-router, tanstack-router |
| **Nested Routes** | Support for nested route configurations | react-router, tanstack-router |
| **TypeScript Support** | Full TypeScript type safety for routes and parameters | react-router, Wouter, zen-router, tanstack-router |
| **Code Splitting** | Automatic or manual code splitting for routes | react-router, tanstack-router |

---

## Test Categories

### Universal Tests (01, 02, 03, 04)

All 4 libraries participate equally. Used to calculate Overall Performance Score.

- **01 - Basic Routes**: Static and simple path matching
- **02 - Dynamic Routes**: URL parameter extraction
- **03 - Advanced Routes**: Wildcard and optional parameters
- **04 - Real-World Patterns**: Realistic usage scenarios

### Feature Tests ()

Libraries participate only if they have native support for the tested capability.


---

## Group Results Summary

Click on any group to view detailed benchmark results.

### [01 - Basic Routes](groups/01-basic-routes/README.md)

Static and simple path matching

*No results available*

**[View Detailed Results →](groups/01-basic-routes/README.md)**

---

### [02 - Dynamic Routes](groups/02-dynamic-routes/README.md)

URL parameter extraction

*No results available*

**[View Detailed Results →](groups/02-dynamic-routes/README.md)**

---

### [03 - Advanced Routes](groups/03-advanced-routes/README.md)

Wildcard and optional parameters

*No results available*

**[View Detailed Results →](groups/03-advanced-routes/README.md)**

---

### [04 - Real-World Patterns](groups/04-real-world/README.md)

Realistic usage scenarios

*No results available*

**[View Detailed Results →](groups/04-real-world/README.md)**

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

- ✅ Universal tests (1, 2, 3, 4) use real APIs for all libraries
- ✅ Feature tests () only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
