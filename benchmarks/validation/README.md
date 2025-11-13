<div align="center">

# Validation Benchmarks

Comprehensive performance benchmarks for validation libraries.

[![CI Status](https://img.shields.io/github/actions/workflow/status/SylphxAI/benchmark/benchmarks-per-library.yml?branch=main&label=Benchmarks&style=flat-square)](https://github.com/SylphxAI/benchmark/actions)
[![Last Updated](https://img.shields.io/badge/Updated-Nov%2013,%202025-blue?style=flat-square)](https://github.com/SylphxAI/benchmark)
[![Libraries](https://img.shields.io/badge/Libraries-4-green?style=flat-square)](#-libraries-tested)

[⬅️ Back to Main](../../README.md) • [📊 All Categories](../../README.md#-benchmark-categories) • [🚀 Run Locally](#-run-locally)

</div>

---

## ⏳ Benchmark Results Pending

Benchmark tests have not been run yet for this category. Results will be available once the automated benchmarks complete.

---

## 📚 Libraries Tested

### [Zod](https://github.com/colinhacks/zod)

- **npm**: [zod](https://www.npmjs.com/package/zod)
- **Version**: 4.1.12
- **Bundle Size**: **52.88 KB** (gzip)
- **Description**: TypeScript-first schema declaration and validation library with static type inference

### [Yup](https://github.com/jquense/yup)

- **npm**: [yup](https://www.npmjs.com/package/yup)
- **Version**: 1.7.1
- **Bundle Size**: **13.33 KB** (gzip)
- **Description**: Dead simple Object schema validation

### [Joi](git://github.com/hapijs/joi)

- **npm**: [joi](https://www.npmjs.com/package/joi)
- **Version**: 18.0.1
- **Bundle Size**: **52.64 KB** (gzip)
- **Description**: Object schema validation

### [Superstruct](git://github.com/ianstormtaylor/superstruct)

- **npm**: [superstruct](https://www.npmjs.com/package/superstruct)
- **Version**: 2.0.2
- **Bundle Size**: **3.44 KB** (gzip)
- **Description**: A simple and composable way to validate data in JavaScript (and TypeScript).


---

## 🚀 Run Locally

Want to run these benchmarks yourself? Follow these steps:

```bash
# Clone the repository
git clone https://github.com/SylphxAI/benchmark.git
cd benchmark

# Install root dependencies
npm install

# Navigate to this category
cd benchmarks/validation

# Install category dependencies
npm install

# Run benchmarks
npm run benchmark

# Generate README with results
bun run ../../scripts/generate-simple-readme.ts .
```

---

<div align="center">

**[⬆ Back to Top](#validation-benchmarks)**

Made with ❤️ by [Sylph](https://github.com/SylphxAI)

</div>
