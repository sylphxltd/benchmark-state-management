<div align="center">

# 🏆 JavaScript Library Benchmarks

### *Automated performance benchmarks for popular JavaScript libraries*

[![Automated Daily](https://img.shields.io/badge/Automated-Daily-brightgreen?style=for-the-badge)](https://github.com/sylphxltd/benchmark/actions)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Vitest](https://img.shields.io/badge/Vitest-Bench-729B1B?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![MIT License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📊 Benchmark Categories

| Category | Description | Libraries | Status | View Results |
|----------|-------------|-----------|--------|--------------|
| **[🗃️ State Management](./benchmarks/state-management/)** | React state management libraries | 9 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/state-management/)** |
| **[🔄 Immutability](./benchmarks/immutability/)** | Immutability helper libraries | 6 | ![Active](https://img.shields.io/badge/Active-success) | **[View →](./benchmarks/immutability/)** |
| **[🧭 Router](./benchmarks/router/)** | React routing libraries | 4 | ![WIP](https://img.shields.io/badge/WIP-yellow) | **[View →](./benchmarks/router/)** |

Each category has its own detailed README with benchmark results, methodology, and insights.

---

## 🔬 How It Works

- **Automated**: Runs daily via GitHub Actions
- **Smart Execution**: Only runs when libraries update or test files change
- **Comprehensive**: Multiple real-world test scenarios per category
- **Transparent**: Open source, reproducible locally

---

## 🚀 Quick Start

### View Results
Browse to any category folder to see detailed benchmark results and insights.

### Run Locally
```bash
# Clone the repo
git clone https://github.com/sylphxltd/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Run a specific category
cd benchmarks/state-management
npm install
npm run benchmark

# Generate report
npx tsx ../../scripts/generate-readme.ts .
```

---

## 🤝 Contributing

### Adding a New Library
1. Update `package.json` in the category folder
2. Update `library-metadata.json` with GitHub link
3. Add benchmark tests in `src/benchmark.bench.ts`
4. Run benchmarks and generate README
5. Submit PR with results

### Adding a New Category
1. Create directory in `benchmarks/`
2. Copy structure from existing category
3. Add libraries and write tests
4. Update main README table
5. Submit PR with sample results

---

## 📈 Results Format

Each category README includes:
- **Library Versions**: Current versions with last updated dates
- **Bundle Sizes**: Minified + Gzipped sizes from Bundlephobia
- **Benchmark Results**: Operations/sec, variance, mean time, p99
- **Key Insights**: Performance comparisons and recommendations

---

<div align="center">

**Developed and maintained by [Sylph](https://github.com/sylphxltd)**

### Supporting Tools
[Vitest](https://vitest.dev) • [Bundlephobia](https://bundlephobia.com) • [GitHub Actions](https://github.com/features/actions)

---

### Star this repo if you find it useful! ⭐

[⬆ Back to Top](#-javascript-library-benchmarks)

</div>
