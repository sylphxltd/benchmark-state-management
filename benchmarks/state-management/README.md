# State Management Benchmark Suite

Comprehensive performance testing for client-side state management libraries.

> ⚡ **Revolutionary auto-discovery architecture** - Zero configuration expansion
> 📊 **60+ generated benchmarks** - Automated multi-library comparison tests
> 🏗️ **Modular design** - Easy to extend and maintain

## 📊 Performance Rankings

### 🏆 Overall Performance

Based on aggregated results across all test categories:

| Rank | Library | Best Category | Peak Performance | Avg Performance |
|------|---------|--------------|------------------|-----------------|
| 1 | **Zustand** | Write Operations | ~5.4M ops/sec | ⚡⚡⚡ Excellent |
| 2 | **Redux Toolkit** | Write Operations | ~91K ops/sec | ⚡ Good |
| 3 | **Jotai** | - | - | ⏳ Pending |

### ✏️ Write Operations Ranking

[📊 View Detailed Results →](groups/write/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| 1 | **Zustand** | ~5.4M ops/sec | ⚡⚡⚡ |
| 2 | **Redux Toolkit** | ~91K ops/sec | ⚡ |

### 📖 Read Operations Ranking

[📊 View Detailed Results →](groups/read/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:read`

### 🔄 Async Operations Ranking

[📊 View Detailed Results →](groups/async/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:async`

### 📝 Form State Ranking

[📊 View Detailed Results →](groups/form/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:form`

### 🧠 Memory Management Ranking

[📊 View Detailed Results →](groups/memory/)

| Rank | Library | Memory Usage | Performance |
|------|---------|--------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:memory`

### 💾 Cache Performance Ranking

[📊 View Detailed Results →](groups/cache/)

| Rank | Library | Operations/sec | Performance |
|------|---------|----------------|-------------|
| - | - | ⏳ Pending | - |

> Run benchmarks: `npm run benchmark:cache`

---

## 🗂️ Test Categories

Explore detailed performance results for each category:

| Category | Description | Status |
|----------|-------------|--------|
| [📖 Read Operations](groups/read/) | State access performance across different scales | ⏳ Pending |
| [✏️ Write Operations](groups/write/) | State mutation and update performance | ✅ Results Available |
| [📝 Form State](groups/form/) | Complex form state management | ⏳ Pending |
| [🔄 Async Operations](groups/async/) | Promise handling and async patterns | ⏳ Pending |
| [🧠 Memory Management](groups/memory/) | Memory usage and allocation patterns | ⏳ Pending |
| [💾 Cache Performance](groups/cache/) | Memoization and caching efficiency | ⏳ Pending |

> 📊 Click each category to view detailed benchmark results, test methodology, and performance analysis

---

## 🚀 Quick Start

### Run All Benchmarks

```bash
# Run all benchmarks and generate results
npm run benchmark:all-groups

# Run specific category
npm run benchmark:read
npm run benchmark:write
npm run benchmark:form
npm run benchmark:async
npm run benchmark:memory
npm run benchmark:cache

# Interactive developer dashboard
node scripts/dev-dashboard.cjs
```

### Extract and View Results

```bash
# Extract results from all benchmarks
node scripts/extract-results.cjs

# Generate updated READMEs with results
node main-readme-generator.cjs
node scripts/group-readme-generator.cjs
```

### Add New Library

```bash
# 1. Create library directory
mkdir libraries/your-library

# 2. Add implementation files
touch libraries/your-library/meta.ts
touch libraries/your-library/store.ts

# 3. Auto-generate tests
npx tsx scripts/test-generator.ts state-management
```

---

## 🏗️ Architecture

This benchmark suite uses a **revolutionary auto-discovery architecture**:

- **Zero Configuration**: Add libraries without modifying core code
- **Automatic Discovery**: Libraries and test types are auto-detected
- **Type Safe**: Full TypeScript support with automatic validation
- **Modular Design**: Each component can be developed independently

### Directory Structure

```
benchmarks/state-management/
├── README.md               # This file - overview and rankings
├── groups/                 # Test categories with detailed results
│   ├── read/              # 📖 Read operation benchmarks + results
│   ├── write/             # ✏️ Write operation benchmarks + results
│   ├── form/              # 📝 Form state benchmarks + results
│   ├── async/             # 🔄 Async operation benchmarks + results
│   ├── memory/            # 🧠 Memory management benchmarks + results
│   └── cache/             # 💾 Cache performance benchmarks + results
├── libraries/             # Self-describing library implementations
├── test-types/            # Test type configurations
├── generated/             # Auto-generated comparison tests
└── scripts/               # Automation and generation tools
    ├── extract-results.cjs       # Extract benchmark results
    ├── main-readme-generator.cjs # Generate this README
    └── group-readme-generator.cjs # Generate group READMEs
```

---

## 📊 Stats

- **3 Libraries Tested**: Redux Toolkit, Zustand, Jotai
- **6 Test Categories**: Read, Write, Form, Async, Memory, Cache
- **60+ Generated Tests**: Automatically created comparison benchmarks
- **Multiple Scales**: Single, Burst, Batch, Heavy, Extreme

---

## 📚 Documentation

- **[Architecture](docs/architecture.md)** - Deep dive into the auto-discovery system
- **[Methodology](docs/methodology.md)** - How benchmarks are measured
- **[Contributing](docs/contributing.md)** - Add new libraries or test types

---

Made with ⚡ by the Benchmark Team | [Report Issues](https://github.com/sylphxltd/benchmark/issues)
