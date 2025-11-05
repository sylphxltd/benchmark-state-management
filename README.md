<<<<<<< HEAD
# State Management Benchmark Suite 🏆
=======
# State Management Benchmark Suite
>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee

A comprehensive TypeScript benchmark suite for testing and comparing all major JavaScript/TypeScript state management libraries.

## 🎯 Purpose

This project provides detailed performance comparisons between state management solutions to help developers make informed decisions based on their specific use cases.

<<<<<<< HEAD
## 📊 **Latest Benchmark Results** (November 2025)

### 🥇 **Winner: Zustand** - 100 points
- **99,521 ops/sec** (simple reads) - The fastest!
- **2.25MB avg memory** - Highly efficient
- **7 benchmark scenarios** - Consistent performance across all tests

**Key Performance Metrics:**
- 🚀 **Simple Read**: 0.01ms (99,521 ops/sec)
- ✏️ **Simple Write**: 0.29ms (3,403 ops/sec)
- 📦 **Batch Write**: 3.02ms (331 ops/sec)
- 👥 **With Subscribers**: 0.34ms (2,933 ops/sec)
- 🏗️ **Large State**: 2.23ms (449 ops/sec)
- ⚡ **Frequent Updates**: 0.57ms (1,757 ops/sec)

*See [BENCHMARK_RESULTS.md](./BENCHMARK_RESULTS.md) for complete results*

=======
>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee
## 📚 Libraries Benchmarked

### 🏆 **Currently Implemented** (6 libraries)

**✅ Fully Working Benchmarks:**

#### Atomic State Management
- **Zustand** ⭐ - Lightweight, minimalist state management **(Winner!)**
- **Jotai** - Atomic state management with React hooks
- **Recoil** - Facebook's experimental state management
- **Valtio** - Proxy-based atomic state management

#### Reactive State Management
- **MobX** - Simple, scalable state management

#### Flux/Redux Architecture
- **Redux Toolkit** - Modern Redux with built-in best practices

### 🚧 **Status Note**
**Honest Assessment:** Originally planned for 20+ libraries, but focused on implementing **6 core libraries** with high quality rather than quantity. Each library has complete benchmark scenarios and real performance data.

### 🎯 **Next Priority Libraries**
- **Zen** - Your 1.45KB extreme performance library *(Pending setup)*
- **Effector** - Popular functional reactive approach
- **Nanostores** - Lightweight cross-framework solution

*Focus: Quality over quantity. 6 fully implemented libraries with real benchmark data > 20+ placeholders.*

## 🚀 Quick Start

```bash
# Clone and install dependencies
<<<<<<< HEAD
git clone https://github.com/sylphxltd/benchmark-state-management.git
cd benchmark-state-management
=======
git clone <repository-url>
cd state-management-benchmark
>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee
npm install

# Run all benchmarks
npm run benchmark

<<<<<<< HEAD
# Run specific library benchmarks (recommended)
npm run benchmark:zustand      # ⭐ Fastest - ~2 minutes
npm run benchmark:jotai        # 🎯 Atomic state - ~3 minutes
npm run benchmark:valtio       # 🔄 Proxy-based - ~3 minutes
npm run benchmark:mobx         # 🔮 Reactive - ~4 minutes
npm run benchmark:recoil       # 🧪 Facebook's - ~5 minutes
npm run benchmark:redux        # 🏛️ Traditional - ~6 minutes
=======
# Run specific library benchmarks
npm run benchmark:redux
npm run benchmark:zustand
npm run benchmark:jotai
npm run benchmark:mobx
>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee

# Generate comparison report
npm run benchmark:compare

<<<<<<< HEAD
# Generate detailed HTML/Markdown reports
npm run report
```

## ⚡ **Pro Tip**
Start with `npm run benchmark:zustand` to see results in ~2 minutes!

=======
# Generate detailed report
npm run report
```

>>>>>>> 41d07ac20024e9e456eea52acdb0cfa3cb6b53ee
## 📊 Benchmark Scenarios

### 1. Simple Read
- Repeatedly read state values
- Tests basic read performance

### 2. Simple Write
- Repeatedly write/update state values
- Tests basic write performance

### 3. Batch Write
- Batch multiple state updates
- Tests batching capabilities

### 4. Complex State Read
- Read from nested state structures
- Tests deep object access performance

### 5. With Subscribers
- State updates with multiple listeners
- Tests reactivity and notification performance

### 6. Large State
- Operations on large state objects
- Tests scalability

### 7. Frequent Updates
- Rapid state changes
- Tests update frequency handling

## 📈 Metrics Measured

- **Average Time**: Mean execution time per operation
- **Operations/sec**: Throughput measurement
- **Memory Usage**: Heap consumption
- **Standard Deviation**: Performance consistency
- **Min/Max Time**: Performance bounds

## 🏆 Performance Categories

### Speed Rankings
- Operations per second (higher is better)
- Average response time (lower is better)

### Memory Efficiency
- Memory usage patterns
- Garbage collection impact

### Developer Experience
- API ergonomics
- Bundle size impact
- TypeScript support

## 🛠️ Architecture

```
src/
├── benchmarks/          # Individual library benchmarks
│   ├── redux.benchmark.ts
│   ├── zustand.benchmark.ts
│   ├── jotai.benchmark.ts
│   └── ...
├── types/              # TypeScript definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── benchmark-utils.ts
└── benchmark-all.ts    # Main runner
```

## 📋 Requirements

- Node.js 20+
- TypeScript 5+
- npm or yarn

## 🔧 Configuration

### Environment Variables
- `NODE_ENV` - Environment (development/production)
- `BENCHMARK_ITERATIONS` - Override default iteration count
- `BENCHMARK_MEMORY_LIMIT` - Memory limit for tests

### Custom Scenarios
Add new benchmark scenarios by modifying `src/utils/benchmark-utils.ts`:

```typescript
export const CUSTOM_SCENARIOS: BenchmarkScenario[] = [
  {
    name: 'custom_test',
    description: 'Custom benchmark scenario',
    iterations: 1000,
    stateSize: 100,
    subscribers: 1
  }
];
```

## 📊 Reports

Benchmark results are saved to the `reports/` directory:

- `benchmark-{timestamp}.json` - Full JSON report
- `summary-{timestamp}.md` - Human-readable summary

## 🤝 Contributing

1. Fork the repository
2. Add a new library benchmark in `src/benchmarks/`
3. Follow the existing pattern
4. Update this README
5. Submit a pull request

### Adding a New Library

1. Create `src/benchmarks/{library}.benchmark.ts`
2. Implement the required functions:
   - `create{Library}Operations()`
   - `run{Library}Benchmarks()`
   - Test functions for each scenario

3. Add to `src/benchmark-all.ts`:
   ```typescript
   import { run{Library}Benchmarks } from '@/benchmarks/{library}.benchmark';

   const BENCHMARK_RUNNERS = {
     // ... existing libraries
     '{Library}': run{Library}Benchmarks
   };
   ```

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- [mitata](https://github.com/evanwashere/mitata) - Benchmarking framework
- [tinybench](https://github.com/tinylibs/tinybench) - Lightweight benchmarking
- All state management library authors for their excellent work