# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **8 tested libraries** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

## 📊 Performance Rankings

### 🏆 Overall Performance

Based on aggregated results across all test categories:

| Rank | Library | Best Category | Peak Performance | Avg Performance |
|------|---------|--------------|------------------|---------------|
| 1 | **Solid Signals** | read | ~31.1M ops/sec | ⚡⚡⚡⚡ |
| 2 | **Jotai** | read | ~29.5M ops/sec | ⚡⚡⚡⚡ |
| 3 | **Preact Signals** | read | ~27.5M ops/sec | ⚡⚡⚡⚡ |
| 4 | **Zen** | read | ~26.0M ops/sec | ⚡⚡⚡⚡ |
| 5 | **MobX** | read | ~21.6M ops/sec | ⚡⚡⚡⚡ |
| 6 | **Redux Toolkit** | read | ~5.4M ops/sec | ⚡⚡⚡ |
| 7 | **Valtio** | read | ~3.9M ops/sec | ⚡⚡⚡ |
| 8 | **Zustand** | read | ~2.4M ops/sec | ⚡⚡⚡ |

### 📖 Read Operations

[📊 View Detailed Results →](groups/read/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| 1 | **Solid Signals** | ~31.1M ops/sec | ⚡⚡⚡⚡ |
| 2 | **Jotai** | ~29.5M ops/sec | ⚡⚡⚡⚡ |
| 3 | **Preact Signals** | ~27.5M ops/sec | ⚡⚡⚡⚡ |
| 4 | **Zen** | ~26.0M ops/sec | ⚡⚡⚡⚡ |
| 5 | **MobX** | ~21.6M ops/sec | ⚡⚡⚡⚡ |
| 6 | **Solid Signals** | ~19.8M ops/sec | ⚡⚡⚡⚡ |
| 7 | **Jotai** | ~15.9M ops/sec | ⚡⚡⚡⚡ |
| 8 | **Zen** | ~14.8M ops/sec | ⚡⚡⚡⚡ |

### ✏️ Write Operations

[📊 View Detailed Results →](groups/write/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| 1 | **Solid Signals** | ~28.4M ops/sec | ⚡⚡⚡⚡ |
| 2 | **Jotai** | ~27.8M ops/sec | ⚡⚡⚡⚡ |
| 3 | **Solid Signals** | ~25.5M ops/sec | ⚡⚡⚡⚡ |
| 4 | **Preact Signals** | ~24.9M ops/sec | ⚡⚡⚡⚡ |
| 5 | **Zen** | ~24.1M ops/sec | ⚡⚡⚡⚡ |
| 6 | **Jotai** | ~10.3M ops/sec | ⚡⚡⚡⚡ |
| 7 | **Preact Signals** | ~9.3M ops/sec | ⚡⚡⚡ |
| 8 | **Zen** | ~7.1M ops/sec | ⚡⚡⚡ |

### 🏗️ Store Creation

[📊 View Detailed Results →](groups/creation/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:creation`

### ⚡ Async Operations

[📊 View Detailed Results →](groups/async/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| 1 | **Zustand** | ~890 ops/sec | ○ |
| 2 | **Redux Toolkit** | ~887 ops/sec | ○ |
| 3 | **Zen** | ~887 ops/sec | ○ |
| 4 | **Preact Signals** | ~886 ops/sec | ○ |
| 5 | **Jotai** | ~884 ops/sec | ○ |
| 6 | **Valtio** | ~883 ops/sec | ○ |
| 7 | **Preact Signals** | ~882 ops/sec | ○ |
| 8 | **Solid Signals** | ~882 ops/sec | ○ |

### 🔧 Complex Operations

[📊 View Detailed Results →](groups/complexity/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:complexity`

### 💾 Memory Operations

[📊 View Detailed Results →](groups/memory/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:memory`

---

## 🗂️ Test Categories

Explore detailed performance results for each category:

| Category | Description | Status |
|----------|-------------|--------|
| [📖 Read Operations](groups/read/) | Performance of state reading operations across different scales | ✅ Results Available |
| [✏️ Write Operations](groups/write/) | Performance of state writing and update operations | ✅ Results Available |
| [🏗️ Store Creation](groups/creation/) | Performance of creating new stores and instances | ⏳ Pending |
| [⚡ Async Operations](groups/async/) | Performance of asynchronous state operations | ✅ Results Available |
| [🔧 Complex Operations](groups/complexity/) | Performance with complex nested state structures | ⏳ Pending |
| [💾 Memory Operations](groups/memory/) | Memory efficiency and large state operations | ⏳ Pending |

> 📊 Click each category to view detailed benchmark results, test methodology, and performance analysis

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run all benchmarks
npm run benchmark

# Run specific category
npm run benchmark:write
npm run benchmark:read

# Generate reports
npm run extract-results
```

## 📊 Library Coverage

This benchmark tests the following state management libraries:

- 🔄 **Redux Toolkit** - Predictable state container
- 🎯 **Zustand** - Small, fast and scalable state management
- ⚛️ **Jotai** - Primitive and flexible state management
- 🌀 **MobX** - Simple, scalable state management
- 💨 **Valtio** - Valtio is a proxy state management library
- ⚡ **Preact Signals** - Signal-based state management
- 🔥 **Solid Signals** - Solid.js signal library
- 🧘 **Zen** - Minimal state management library

## 📁 Project Structure

```
benchmarks/state-management/
├── groups/                    # Test group directories
│   ├── read/                 # Read operation tests
│   ├── write/                # Write operation tests
│   ├── creation/             # Store creation tests
│   ├── async/                # Async operation tests
│   ├── complexity/           # Complex operation tests
│   └── memory/               # Memory operation tests
├── src/                      # Shared source code
│   ├── stores/              # Library implementations
│   └── benchmark.bench.ts   # Legacy benchmark (deprecated)
├── results/                  # Aggregated results
└── README.md                 # This file
```

## 🧪 Adding New Tests

To add a new test group:

1. Create a new directory in `groups/`
2. Add benchmark files with the pattern `*.bench.ts`
3. Use the shared test configuration from `../shared/test-config.ts`
4. Update the main scripts in `package.json`

Example new test file:
```typescript
import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('My New Test', () => {
  LIBRARIES.forEach(library => {
    bench(`My Test - ${library.name}`, () => {
      // Your test logic here
      library.actions.someMethod();
    });
  });
});
```

## 🔗 Navigation

- [Read Operations](groups/read/) - Read performance tests
- [Write Operations](groups/write/) - Write performance tests
- [Store Creation](groups/creation/) - Store creation tests
- [Async Operations](groups/async/) - Async operation tests
- [Complex Operations](groups/complexity/) - Complex state tests
- [Memory Operations](groups/memory/) - Memory efficiency tests

## ℹ️ About

This benchmark suite provides comprehensive performance analysis across multiple dimensions of state management. Each test group focuses on specific aspects to provide clear, actionable insights for library selection and optimization.

The modular structure makes it easy to:
- Add new test scenarios
- Maintain existing tests
- Compare specific aspects of performance
- Extend to new libraries

---
*Last updated: 2025-11-10T16:27:21.022Z*
