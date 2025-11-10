# Read Operations

Performance benchmarks for state read operations across different scales and access patterns.

## Simple Read

**Performance Comparison:**

```
🥇   Solid Signals      ████████████████████████████████████████       31.08M ops/sec
🥈   Jotai              ██████████████████████████████████████         29.54M ops/sec
🥉   Preact Signals     ███████████████████████████████████            27.49M ops/sec
4.   Zen                █████████████████████████████████              26.01M ops/sec
5.   Valtio             █████                                           3.91M ops/sec
6.   MobX               ████                                            3.13M ops/sec
7.   Redux Toolkit      █                                             820.95K ops/sec
8.   Zustand                                                          289.12K ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|----------|
| 🥇 | **Solid Signals** | 31,081,769.378 | ±0.05% | 0.0322ms | 0.0830ms | 15,540,885 |
| 🥈 | **Jotai** | 29,539,014.169 | ±0.14% | 0.0339ms | 0.0830ms | 14,769,508 |
| 🥉 | **Preact Signals** | 27,490,558.625 | ±0.05% | 0.0364ms | 0.0840ms | 13,745,280 |
| 4 | **Zen** | 26,014,626.855 | ±0.05% | 0.0384ms | 0.0840ms | 13,007,314 |
| 5 | **Valtio** | 3,908,039.171 | ±0.27% | 0.2559ms | 0.4580ms | 1,954,020 |
| 6 | **MobX** | 3,131,450.81 | ±0.33% | 0.3193ms | 0.5410ms | 1,565,726 |
| 7 | **Redux Toolkit** | 820,947.233 | ±0.23% | 1.2181ms | 1.7500ms | 410,474 |
| 8 | **Zustand** | 289,117.403 | ±2.02% | 3.4588ms | 6.4170ms | 144,560 |

**Key Insight:** Solid Signals is 107.51x faster than Zustand in this category.

## High Frequency Read

**Performance Comparison:**

```
🥇   MobX               ████████████████████████████████████████       21.55M ops/sec
🥈   Solid Signals      █████████████████████████████████████          19.76M ops/sec
🥉   Jotai              ██████████████████████████████                 15.91M ops/sec
4.   Zen                ████████████████████████████                   14.82M ops/sec
5.   Preact Signals     ███████████                                     5.77M ops/sec
6.   Redux Toolkit      ██████████                                      5.43M ops/sec
7.   Zustand            █████                                           2.45M ops/sec
8.   Valtio             ██                                              1.09M ops/sec
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|----------|
| 🥇 | **MobX** | 21,551,988.75 | ±0.04% | 0.0464ms | 0.0840ms | 10,775,995 |
| 🥈 | **Solid Signals** | 19,761,212.617 | ±0.32% | 0.0506ms | 0.0840ms | 9,880,607 |
| 🥉 | **Jotai** | 15,914,589.491 | ±0.05% | 0.0628ms | 0.1250ms | 7,957,295 |
| 4 | **Zen** | 14,823,800.874 | ±0.47% | 0.0675ms | 0.1250ms | 7,411,901 |
| 5 | **Preact Signals** | 5,768,812.177 | ±1.14% | 0.1733ms | 0.2920ms | 2,884,407 |
| 6 | **Redux Toolkit** | 5,428,006.306 | ±0.04% | 0.1842ms | 0.2910ms | 2,714,004 |
| 7 | **Zustand** | 2,445,711.433 | ±0.07% | 0.4089ms | 0.6670ms | 1,222,856 |
| 8 | **Valtio** | 1,088,832.003 | ±0.05% | 0.9184ms | 1.0840ms | 544,417 |

**Key Insight:** MobX is 19.79x faster than Valtio in this category.

## Available Tests

### Test Files

- `read-x1` - Individual benchmark test
- `read-x1000` - Individual benchmark test
- `read-x10000` - Individual benchmark test

## How to Run Tests

### Quick Start

``ash
# Run all read benchmarks
npm run benchmark:read

# Run specific test
node scripts/run-generated-tests.cjs read-single.bench.ts

# Run all read tests
node scripts/run-generated-tests.cjs read-*.bench.ts

# Use developer dashboard
node scripts/dev-dashboard.cjs
``

### Available Commands

``ash
npm run benchmark:read        # Run all read tests
node scripts/run-generated-tests.cjs list # List all available tests
npx tsx scripts/test-generator.ts state-management # Regenerate tests
``

## Technical Details

**Description**: Read operations test the performance of state access patterns.

**Test Scales**: `Single`, `Burst`, `Moderate`, `High Frequency`, `Extreme`

**Focus Areas**: - State access speed
- Memory usage patterns
- Computation overhead

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
