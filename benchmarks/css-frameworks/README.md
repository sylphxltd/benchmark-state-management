# CSS Frameworks Benchmarks

Runtime performance benchmarks for CSS-in-JS and utility-first CSS frameworks.

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

| Library | [01](#01---style-application) | [02](#02---dynamic-updates) |
|---------|------|------|

**Legend:** 🥇 1st place | 🥈 2nd place | 🥉 3rd place | - Not applicable

---

## Feature Support Matrix

| Feature | Description | Libraries |
|---------|-------------|-----------|
| **JIT Compilation** | Just-in-time generation of CSS at build time | Tailwind CSS, UnoCSS |
| **Zero Runtime** | No runtime JavaScript overhead, styles extracted at build time | silk, Tailwind CSS, pandacss, UnoCSS |
| **TypeScript Support** | Type-safe style definitions and autocompletion | silk, pandacss |
| **Atomic CSS** | Generates single-purpose utility classes | Tailwind CSS, UnoCSS, pandacss |

---

## Test Categories

### Universal Tests (01, 02)

All 4 libraries participate equally. Used to calculate Overall Performance Score.

- **01 - Style Application**: Runtime performance of style generation and concatenation
- **02 - Dynamic Updates**: Runtime style updates and theme switching

### Feature Tests ()

Libraries participate only if they have native support for the tested capability.


---

## Group Results Summary

Click on any group to view detailed benchmark results.

### [01 - Style Application](groups/01-style-application/README.md)

Runtime performance of style generation and concatenation

*No results available*

**[View Detailed Results →](groups/01-style-application/README.md)**

---

### [02 - Dynamic Updates](groups/02-dynamic-updates/README.md)

Runtime style updates and theme switching

*No results available*

**[View Detailed Results →](groups/02-dynamic-updates/README.md)**

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

- ✅ Universal tests (1, 2) use real APIs for all libraries
- ✅ Feature tests () only include libraries with native support
- ✅ Overall Performance Score uses geometric mean of universal tests
- ✅ No placeholder or synthetic implementations in active tests

---

## License

MIT
