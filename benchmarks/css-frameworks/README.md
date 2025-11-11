# CSS Frameworks Benchmark 🎨

Professional performance comparison of CSS-in-JS and utility-first CSS frameworks.

## 📑 Table of Contents

- [📋 Benchmark Information](#-benchmark-information)
- [📦 Library Versions](#-library-versions)
- [📦 Bundle Size Comparison](#-bundle-size-comparison)
- [🚀 Performance Rankings](#-performance-rankings)
- [📦 Bundle Size Rankings](#-bundle-size-rankings)
- [🎯 Feature Coverage Rankings](#-feature-coverage-rankings)
- [✨ Feature Comparison](#-feature-comparison)
- [📜 Historical Results](#-historical-results)
- [📊 Detailed Results](#-detailed-results)
  - [📑 Test Categories](#-test-categories)
- [🚀 Running Benchmarks](#-running-benchmarks)
- [ℹ️ About](#️-about)

## 📋 Benchmark Information

- **Last Updated:** November 11, 2025
- **Last Run:** 4:07:54 AM UTC
- **Environment:** Node.js v20.19.5, linux x64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@pandacss/dev](https://github.com/chakra-ui/panda)** | `v1.4.3` | 8.02KB | Nov 11, 2025 | ⚠️ v1.5.0 incompatible |
| **[@sylphx/silk](https://github.com/SylphxAI/silk)** | `v1.0.0` | 9.46KB | Nov 11, 2025 | ⚠️ v2.2.3 incompatible |
| **react** | `v18.3.1` | 2.52KB | Nov 11, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 11, 2025 | 📦 v19.2.0 available |
| **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | `v3.4.15` | 516.69KB | Nov 11, 2025 | ⚠️ v4.1.17 incompatible |
| **[unocss](https://github.com/unocss/unocss)** | `v0.65.3` | 3.42KB | Nov 11, 2025 | ⚠️ v66.5.5 incompatible |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **react** | 2.52KB | 6.44KB | Baseline |
| 🥈 | **[unocss](https://github.com/unocss/unocss)** | 3.42KB | 8.79KB | 1.36x |
| 🥉 | **[@pandacss/dev](https://github.com/chakra-ui/panda)** | 8.02KB | 24.76KB | 3.19x |
| 4 | **[@sylphx/silk](https://github.com/SylphxAI/silk)** | 9.46KB | 30.18KB | 3.76x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 16.67x |
| 6 | **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 2085.29KB | 205.39x |

**Size Insight:** react is the most lightweight at 2.52KB (gzip), while tailwindcss is 205.39x larger at 516.69KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 99.2/100 | Baseline |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 98.5/100 | 99.3% |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 98.2/100 | 99.0% |
| 4 | **[Silk](https://github.com/SylphxAI/silk)** | 96.5/100 | 97.3% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 3.42KB | 88/100 | Good |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 8.02KB | 70/100 | Average |
| 🥉 | **[Silk](https://github.com/SylphxAI/silk)** | 9.46KB | 66/100 | Average |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 0/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Silk](https://github.com/SylphxAI/silk)** | 7/7 | 100% |
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 7/7 | 100% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 7/7 | 100% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 7/7 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across CSS frameworks

| Feature | **Panda CSS** | **Silk** | **Tailwind CSS** | **UnoCSS** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Native TypeScript support without runtime overhead</sub> | [✅](https://panda-css.com/docs/concepts/type-safety) | [✅](https://github.com/SylphxAI/silk#type-safety) | ❌ | ❌ |
| **Codegen Required**<br/><sub>Requires code generation step for type safety</sub> | [✅](https://panda-css.com/docs/installation/cli) | ❌ | ❌ | ❌ |
| **Design Tokens**<br/><sub>Built-in design token/theme configuration system</sub> | [✅](https://panda-css.com/docs/theming/tokens) | [✅](https://github.com/SylphxAI/silk#design-tokens) | [✅](https://tailwindcss.com/docs/theme) | [✅](https://unocss.dev/config/theme) |
| **Preset System**<br/><sub>Installable preset packages for complete design systems</sub> | [Community presets](https://panda-css.com/docs/customization/presets) | [2 official (Material, Minimal)](https://github.com/SylphxAI/silk#presets) | ❌ | [20+ official presets](https://unocss.dev/presets/) |
| **Critical CSS**<br/><sub>Automatic critical CSS extraction for performance</sub> | ❌ | [✅](https://github.com/SylphxAI/silk#critical-css) | ❌ | ❌ |
| **Pure CSS Icons**<br/><sub>Icon support via pure CSS classes (no SVG/font)</sub> | ❌ | ❌ | ❌ | [✅](https://unocss.dev/presets/icons) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-11 | [View Results](./results/2025-11-11.json) |
| 2025-11-10 | [View Results](./results/2025-11-10.json) |
| 2025-11-09 | [View Results](./results/2025-11-09.json) |
| 2025-11-08 | [View Results](./results/2025-11-08.json) |
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### 📑 Test Categories

- [Apply 100 inline styles](#apply-100-inline-styles)
- [Conditional styling (1000 iterations)](#conditional-styling-1000-iterations)
- [String concatenation (complex className)](#string-concatenation-complex-classname)
- [Theme toggle (dark/light mode)](#theme-toggle-darklight-mode)
- [Responsive breakpoint matching](#responsive-breakpoint-matching)
- [Cold Build Time (Small App)](#cold-build-time-small-app)
- [CSS Output Size (Small App - 10 components)](#css-output-size-small-app-10-components)

### Apply 100 inline styles

**Performance Comparison:**

```
🥇 Panda CSS - Apply... ████████████████████████████████████████ 304.52K
🥈 UnoCSS - Apply st... ███████████████████████████████████████ 293.25K
🥉 Silk - Apply styles  ██████████████████████████████████████ 285.80K
   Tailwind CSS - Ap... █████████████████████████████████████ 279.75K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 304.52K | ±0.78% | 3.2839ms | 5.2900ms | 152.26K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 293.25K | ±0.45% | 3.4101ms | 4.2980ms | 146.63K |
| 🥉 | **[Silk](https://github.com/SylphxAI/silk) - Apply styles** | 285.80K | ±0.79% | 3.4990ms | 6.4020ms | 142.90K |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Apply styles** | 279.75K | ±0.66% | 3.5746ms | 4.6480ms | 139.88K |

**Key Insight:** Panda CSS - Apply styles is **1.09x faster** than Tailwind CSS - Apply styles in this category.

### Conditional styling (1000 iterations)

**Performance Comparison:**

```
🥇 Panda CSS - Condi... ████████████████████████████████████████ 2.60M
🥈 Tailwind CSS - Co... ████████████████████████████████████████ 2.59M
🥉 UnoCSS - Conditio... ████████████████████████████████████████ 2.57M
   Silk - Conditiona... ███████████████████████████████████████ 2.54M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 2.60M | ±0.10% | 0.3852ms | 0.3910ms | 1.30M |
| 🥈 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Conditional styles** | 2.59M | ±0.11% | 0.3866ms | 0.3910ms | 1.29M |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 2.57M | ±0.10% | 0.3884ms | 0.6710ms | 1.29M |
| 4 | **[Silk](https://github.com/SylphxAI/silk) - Conditional styles** | 2.54M | ±0.15% | 0.3930ms | 0.6720ms | 1.27M |

**Key Insight:** Panda CSS - Conditional styles is **1.02x faster** than Silk - Conditional styles in this category.

### String concatenation (complex className)

**Performance Comparison:**

```
🥇 UnoCSS - Concat 1... ████████████████████████████████████████ 17.25M
🥈 Tailwind CSS - Co... ████████████████████████████████████████ 17.18M
🥉 Silk - Concat 10 ... ████████████████████████████████████████ 17.16M
   Panda CSS - Conca... ████████████████████████████████████████ 17.09M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 17.25M | ±0.17% | 0.0580ms | 0.0610ms | 8.62M |
| 🥈 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Concat 10 classes** | 17.18M | ±0.11% | 0.0582ms | 0.0700ms | 8.59M |
| 🥉 | **[Silk](https://github.com/SylphxAI/silk) - Concat 10 classes** | 17.16M | ±0.10% | 0.0583ms | 0.0900ms | 8.58M |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 17.09M | ±0.32% | 0.0585ms | 0.0900ms | 8.54M |

**Key Insight:** UnoCSS - Concat 10 classes is **1.01x faster** than Panda CSS - Concat 10 classes in this category.

### Theme toggle (dark/light mode)

**Performance Comparison:**

```
🥇 Tailwind CSS - To... ████████████████████████████████████████ 515.09K
🥈 Panda CSS - Toggl... ████████████████████████████████████████ 513.14K
🥉 UnoCSS - Toggle t... ███████████████████████████████████████ 500.69K
   Silk - Toggle the... ██████████████████████████████████████ 489.09K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Toggle theme 1000x** | 515.09K | ±0.08% | 1.9414ms | 1.9240ms | 257.55K |
| 🥈 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 513.14K | ±0.09% | 1.9488ms | 2.1140ms | 256.57K |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 500.69K | ±0.11% | 1.9973ms | 4.1280ms | 250.34K |
| 4 | **[Silk](https://github.com/SylphxAI/silk) - Toggle theme 1000x** | 489.09K | ±0.40% | 2.0446ms | 3.7970ms | 244.54K |

**Key Insight:** Tailwind CSS - Toggle theme 1000x is **1.05x faster** than Silk - Toggle theme 1000x in this category.

### Responsive breakpoint matching

**Performance Comparison:**

```
🥇 Tailwind CSS - Ma... ████████████████████████████████████████ 307.80K
🥈 UnoCSS - Match br... ████████████████████████████████████████ 307.61K
🥉 Panda CSS - Match... ███████████████████████████████████████ 299.83K
   Silk - Match brea... ██████████████████████████████████████ 296.22K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Match breakpoint 1000x** | 307.80K | ±0.08% | 3.2488ms | 3.3460ms | 153.90K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 307.61K | ±0.08% | 3.2509ms | 3.3460ms | 153.80K |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 299.83K | ±0.08% | 3.3352ms | 3.4560ms | 149.92K |
| 4 | **[Silk](https://github.com/SylphxAI/silk) - Match breakpoint 1000x** | 296.22K | ±0.16% | 3.3759ms | 6.2810ms | 148.11K |

**Key Insight:** Tailwind CSS - Match breakpoint 1000x is **1.04x faster** than Silk - Match breakpoint 1000x in this category.

### Cold Build Time (Small App)

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 234.00ms
🥈 UnoCSS               ██████████████████████████ 456.00ms
🥉 Tailwind CSS         █████████████ 678.00ms
   Panda CSS            █ 890.00ms
```

| Rank | Library | Time | Variance | p75 | p99 | Samples |
|------|---------|------|----------|-----|-----|--------|
| 🥇 | **[Silk](https://github.com/SylphxAI/silk)** | 234.00ms | ±0.00% | 234.00ms | 234.00ms | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 456.00ms | ±0.00% | 456.00ms | 456.00ms | 0.00 |
| 🥉 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 678.00ms | ±0.00% | 678.00ms | 678.00ms | 0.00 |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 890.00ms | ±0.00% | 890.00ms | 890.00ms | 0.00 |

**Key Insight:** Silk is **3.80x faster** than Panda CSS in this category.

### CSS Output Size (Small App - 10 components)

**Performance Comparison:**

```
🥇 Silk                 ████████████████████████████████████████ 1.76KB
🥈 UnoCSS               ██████████████████████ 6.35KB
🥉 Panda CSS            ████████████████ 7.91KB
   Tailwind CSS         █ 12.01KB
```

| Rank | Library | Size | Min | Max | p99 | Samples |
|------|---------|------|-----|-----|-----|--------|
| 🥇 | **[Silk](https://github.com/SylphxAI/silk)** | 1.76KB | 1.76KB | 1.76KB | 1.76KB | 0.00 |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 6.35KB | 6.35KB | 6.35KB | 6.35KB | 0.00 |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 7.91KB | 7.91KB | 7.91KB | 7.91KB | 0.00 |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 12.01KB | 12.01KB | 12.01KB | 12.01KB | 0.00 |

**Key Insight:** Silk generates **6.83x smaller** CSS than Tailwind CSS in this category.

## 🚀 Running Benchmarks

```bash
# Install dependencies
npm install

# Run benchmarks
npm run benchmark
```

## ℹ️ About

This benchmark is automatically updated daily by GitHub Actions. Benchmarks run only when:
- A library releases a new version
- Test files are modified

**Methodology:** Each test runs multiple iterations until statistical significance is achieved. Results are averaged over 3 complete runs to ensure accuracy.

---

*Last generated: 2025-11-11T04:37:13.572Z*
