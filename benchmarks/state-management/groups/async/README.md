# Async Operations

Asynchronous state management benchmarks testing promise handling and data fetching patterns.

## Async Loading

**Performance Comparison:**

```
🥇   Redux Toolkit      ████████████████████████████████████████       887.39 ops/sec
🥈   Preact Signals     ████████████████████████████████████████       886.17 ops/sec
🥉   Jotai              ████████████████████████████████████████       883.52 ops/sec
4.   Valtio             ████████████████████████████████████████       883.15 ops/sec
5.   Zustand            ████████████████████████████████████████       881.04 ops/sec
6.   Zen                ████████████████████████████████████████       878.61 ops/sec
7.   MobX               ████████████████████████████████████████       878.43 ops/sec
8.   Solid Signals      ███████████████████████████████████████        874.97 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|----------|
| 🥇 | **Redux Toolkit** | 887.39 | ±1.25% | 0.0142ms | N/A | 444 |
| 🥈 | **Preact Signals** | 886.17 | ±1.17% | 0.0135ms | N/A | 444 |
| 🥉 | **Jotai** | 883.52 | ±1.10% | 0.0132ms | N/A | 442 |
| 4 | **Valtio** | 883.15 | ±1.08% | 0.0138ms | N/A | 442 |
| 5 | **Zustand** | 881.04 | ±0.89% | 0.0137ms | N/A | 441 |
| 6 | **Zen** | 878.61 | ±0.77% | 0.0134ms | N/A | 440 |
| 7 | **MobX** | 878.43 | ±1.08% | 0.0150ms | N/A | 440 |
| 8 | **Solid Signals** | 874.97 | ±0.51% | 0.0177ms | N/A | 438 |

**Key Insight:** Redux Toolkit is 1.01x faster than Solid Signals in this category.

## Concurrent Async

**Performance Comparison:**

```
🥇   Zustand            ████████████████████████████████████████       890.24 ops/sec
🥈   Zen                ████████████████████████████████████████       886.83 ops/sec
🥉   Preact Signals     ████████████████████████████████████████       882.21 ops/sec
4.   Solid Signals      ████████████████████████████████████████       882.17 ops/sec
5.   Valtio             ████████████████████████████████████████       880.14 ops/sec
6.   Jotai              ███████████████████████████████████████        878.24 ops/sec
7.   MobX               ███████████████████████████████████████        875.92 ops/sec
8.   Redux Toolkit      ███████████████████████████████████████        875.83 ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|----------|
| 🥇 | **Zustand** | 890.24 | ±1.31% | 0.0140ms | N/A | 446 |
| 🥈 | **Zen** | 886.83 | ±1.25% | 0.0141ms | N/A | 444 |
| 🥉 | **Preact Signals** | 882.21 | ±1.41% | 0.0145ms | N/A | 442 |
| 4 | **Solid Signals** | 882.17 | ±1.18% | 0.0144ms | N/A | 442 |
| 5 | **Valtio** | 880.14 | ±1.00% | 0.0140ms | N/A | 441 |
| 6 | **Jotai** | 878.24 | ±0.90% | 0.0147ms | N/A | 440 |
| 7 | **MobX** | 875.92 | ±0.72% | 0.0161ms | N/A | 438 |
| 8 | **Redux Toolkit** | 875.83 | ±0.64% | 0.0141ms | N/A | 438 |

**Key Insight:** Zustand is 1.02x faster than Redux Toolkit in this category.

## Available Tests

### Test Files

- `async-state` - Individual benchmark test

## How to Run Tests

### Quick Start

``ash
# Run all async benchmarks
npm run benchmark:async

# Run specific test
node scripts/run-generated-tests.cjs async-single.bench.ts

# Run all async tests
node scripts/run-generated-tests.cjs async-*.bench.ts

# Use developer dashboard
node scripts/dev-dashboard.cjs
``

### Available Commands

``ash
npm run benchmark:async        # Run all async tests
node scripts/run-generated-tests.cjs list # List all available tests
npx tsx scripts/test-generator.ts state-management # Regenerate tests
``

## Technical Details

**Description**: Async operations test promise handling and data fetching.

**Test Scales**: `Sequential`, `Concurrent`, `Heavy`

**Focus Areas**: - Promise resolution
- Async state updates
- Loading states

**Library Interface**: All libraries implement a standardized interface with these methods:
 `get count`, `increment`, `setNested`, `addUser`, etc.

**Measurement**: Each test runs multiple iterations and reports:
- Operations per second (ops/sec)
- Mean execution time
- 99th percentile (p99)
- Statistical variance

---
*Last updated: 2025-11-10T18:12:44.355Z*
*Generated by: group-readme-generator.cjs*

🔗 [← Back to State Management Overview](../README.md)
