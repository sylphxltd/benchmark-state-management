# State Management Benchmark Suite

A comprehensive TypeScript benchmark suite for testing and comparing all major JavaScript/TypeScript state management libraries.

## 🎯 Purpose

This project provides detailed performance comparisons between state management solutions to help developers make informed decisions based on their specific use cases.

## 📚 Libraries Tested

### Flux/Redux Architecture
- **Redux Toolkit** - Modern Redux with built-in best practices
- **Rematch** - Simplified Redux
- **Dva** - Redux-based framework

### Atomic State Management
- **Zustand** - Lightweight, minimalist state management
- **Jotai** - Atomic state management with React hooks
- **Recoil** - Facebook's experimental state management
- **Valtio** - Proxy-based atomic state management

### Reactive State Management
- **MobX** - Simple, scalable state management
- **MobX State Tree** - MobX with runtime type safety
- **SolidJS Store** - Signal-based reactivity
- **Preact Signals** - Lightweight signals

### Framework-Specific
- **Pinia** - Vue.js official state management
- **Vuex** - Traditional Vue state management
- **Angular NgRx** - Redux for Angular
- **Angular Services** - Angular's dependency injection

### Emerging/Specialized
- **XState** - State machines for complex logic
- **Effector** - Functional reactive programming
- **Legend-State** - High-performance state management
- **Nano Stores** - Tiny atomic stores

## 🚀 Quick Start

```bash
# Clone and install dependencies
git clone <repository-url>
cd state-management-benchmark
npm install

# Run all benchmarks
npm run benchmark

# Run specific library benchmarks
npm run benchmark:redux
npm run benchmark:zustand
npm run benchmark:jotai
npm run benchmark:mobx

# Generate comparison report
npm run benchmark:compare

# Generate detailed report
npm run report
```

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