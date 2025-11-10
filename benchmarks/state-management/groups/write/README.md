# Write Operations

Performance benchmarks for state write and mutation operations.

## Simple Increment

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████       28.45M ops/sec
🥈   Jotai              ███████████████████████████████████████        27.77M ops/sec
🥉   Preact Signals     ███████████████████████████████████            24.94M ops/sec
4.   Zen                ██████████████████████████████████             24.12M ops/sec
5.   Valtio             █████                                           3.37M ops/sec
6.   MobX               ████                                            2.77M ops/sec
7.   Redux Toolkit      █                                             764.87K ops/sec
8.   Zustand                                                          281.07K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|----------|
| 🥇 | **Solid Signals** | 28,449,865.78 | ±1.81% | N/A | N/A | 14,224,934 |
| 🥈 | **Jotai** | 27,766,588.11 | ±0.35% | N/A | N/A | 13,883,295 |
| 🥉 | **Preact Signals** | 24,941,333.5 | ±0.63% | N/A | N/A | 12,470,667 |
| 4 | **Zen** | 24,120,665.04 | ±0.17% | N/A | N/A | 12,060,333 |
| 5 | **Valtio** | 3,369,223.37 | ±0.33% | 0.0002ms | 0.0003ms | 1,684,612 |
| 6 | **MobX** | 2,767,973.25 | ±0.38% | 0.0002ms | 0.0004ms | 1,383,987 |
| 7 | **Redux Toolkit** | 764,869.42 | ±0.28% | 0.0010ms | 0.0013ms | 382,435 |
| 8 | **Zustand** | 281,066.02 | ±2.36% | 0.0026ms | 0.0038ms | 140,534 |

**Key Insight:** Solid Signals is 101.22x faster than Zustand in this category.

## Burst Updates

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████       25.49M ops/sec
🥈   Jotai              ████████████████                               10.27M ops/sec
🥉   Preact Signals     ███████████████                                 9.29M ops/sec
4.   Zen                ███████████                                     7.09M ops/sec
5.   Valtio             █                                             330.64K ops/sec
6.   MobX                                                             296.67K ops/sec
7.   Redux Toolkit                                                     75.27K ops/sec
8.   Zustand                                                           28.14K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|----------|
| 🥇 | **Solid Signals** | 25,488,574.37 | ±0.14% | N/A | N/A | 12,744,288 |
| 🥈 | **Jotai** | 10,272,479.4 | ±0.13% | N/A | 0.0001ms | 5,136,240 |
| 🥉 | **Preact Signals** | 9,291,260.18 | ±0.07% | N/A | 0.0001ms | 4,645,631 |
| 4 | **Zen** | 7,089,524.37 | ±0.80% | N/A | 0.0002ms | 3,544,763 |
| 5 | **Valtio** | 330,642.67 | ±0.34% | 0.0027ms | 0.0030ms | 165,322 |
| 6 | **MobX** | 296,671.09 | ±0.36% | 0.0031ms | 0.0034ms | 148,336 |
| 7 | **Redux Toolkit** | 75,274.23 | ±0.55% | 0.0110ms | 0.0133ms | 37,638 |
| 8 | **Zustand** | 28,142.89 | ±0.27% | 0.0336ms | 0.0355ms | 14,072 |

**Key Insight:** Solid Signals is 905.68x faster than Zustand in this category.

## Available Tests

### Test Files

- `write-x1` - Individual benchmark test
- `write-x1000` - Individual benchmark test
- `write-x10000` - Individual benchmark test

## How to Run Tests

### Quick Start

``ash
# Run all write benchmarks
npm run benchmark:write

# Run specific test
node scripts/run-generated-tests.cjs write-single.bench.ts

# Run all write tests
node scripts/run-generated-tests.cjs write-*.bench.ts

# Use developer dashboard
node scripts/dev-dashboard.cjs
``

### Available Commands

``ash
npm run benchmark:write        # Run all write tests
node scripts/run-generated-tests.cjs list # List all available tests
npx tsx scripts/test-generator.ts state-management # Regenerate tests
``

## Technical Details

**Description**: Write operations test state mutation and update performance.

**Test Scales**: `Single`, `Burst`, `Batch`, `Heavy`

**Focus Areas**: - Mutation speed
- Batch operations
- State consistency

**Library Interface**: All libraries implement a standardized interface with these methods:
 `get count`, `increment`, `setNested`, `addUser`, etc.

**Measurement**: Each test runs multiple iterations and reports:
- Operations per second (ops/sec)
- Mean execution time
- 99th percentile (p99)
- Statistical variance

---
*Last updated: 2025-11-10T18:12:44.356Z*
*Generated by: group-readme-generator.cjs*

🔗 [← Back to State Management Overview](../README.md)
