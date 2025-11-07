# State Management Benchmark 🏆

Professional performance comparison of JavaScript state management libraries.

## 📋 Benchmark Information

- **Last Updated:** November 7, 2025
- **Last Run:** 9:22:49 AM UTC
- **Environment:** Node.js v25.0.0, darwin arm64
- **Test Framework:** Vitest Bench
- **Iterations:** 3 runs averaged for statistical accuracy

## 📦 Library Versions

| Library | Version | Size (gzip) | Last Updated | Status |
|---------|---------|-------------|--------------|--------|
| **[@pandacss/dev](https://github.com/chakra-ui/panda)** | `v0.49.1` | 4.88KB | Nov 7, 2025 | ✅ Latest |
| **[@sylphx/silk](https://github.com/sylphxltd/silk)** | `v0.1.0` | 0.22KB | Nov 7, 2025 | ✅ Latest |
| **react** | `v18.3.1` | 2.52KB | Nov 7, 2025 | ⚠️ v19.2.0 incompatible |
| **react-dom** | `v18.3.1` | 41.94KB | Nov 7, 2025 | 📦 v19.2.0 available |
| **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | `v3.4.15` | 516.69KB | Nov 7, 2025 | ⚠️ v4.1.17 incompatible |
| **[unocss](https://github.com/unocss/unocss)** | `v0.65.3` | 3.42KB | Nov 7, 2025 | ⚠️ v66.5.4 incompatible |

## 📦 Bundle Size Comparison

Smaller bundle sizes mean faster initial load times and better user experience.

| Rank | Library | Minified + Gzipped | Minified | Relative to Smallest |
|------|---------|-------------------|----------|---------------------|
| 🥇 | **[@sylphx/silk](https://github.com/sylphxltd/silk)** | 0.22KB | 0.49KB | Baseline |
| 🥈 | **react** | 2.52KB | 6.44KB | 11.30x |
| 🥉 | **[unocss](https://github.com/unocss/unocss)** | 3.42KB | 8.79KB | 15.35x |
| 4 | **[@pandacss/dev](https://github.com/chakra-ui/panda)** | 4.88KB | 12.70KB | 21.93x |
| 5 | **react-dom** | 41.94KB | 130.13KB | 188.34x |
| 6 | **[tailwindcss](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 2085.29KB | 2320.56x |

**Size Insight:** @sylphx/silk is the most lightweight at 0.22KB (gzip), while tailwindcss is 2320.56x larger at 516.69KB (gzip).

## 🚀 Performance Rankings

Based on geometric mean across all supported tests (excludes extreme values):

| Rank | Library | Score | Relative |
|------|---------|-------|----------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 99.2/100 | Baseline |
| 🥈 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 98.7/100 | 99.5% |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss)** | 98.4/100 | 99.2% |
| 4 | **[Silk](https://github.com/sylphxltd/silk)** | 98.1/100 | 98.9% |

> 📊 **Methodology:** Geometric mean prevents extreme values from skewing results. Each test is normalized (fastest = 100) then averaged.

## 📦 Bundle Size Rankings

Smaller is better. Scores use logarithmic scale (like Lighthouse):

| Rank | Library | Size (gzip) | Score | Rating |
|------|---------|-------------|-------|--------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 0.22KB | 100/100 | Excellent |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss)** | 3.42KB | 88/100 | Good |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 4.88KB | 81/100 | Good |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 516.69KB | 0/100 | Poor |

> 📦 **Scale:** ≤2KB=100, 5KB=90, 10KB=75, 20KB=50. Logarithmic scoring reflects real-world impact.

## 🎯 Feature Coverage Rankings

Percentage of benchmark tests supported:

| Rank | Library | Supported | Coverage |
|------|---------|-----------|----------|
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 7/7 | 100% |
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)** | 7/7 | 100% |
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda)** | 7/7 | 100% |
| 🥇 | **[UnoCSS](https://github.com/unocss/unocss)** | 7/7 | 100% |

> 🎯 **Note:** Higher coverage means more features, but evaluate based on your specific needs.

## ✨ Feature Comparison

Comparison of core features and capabilities across CSS frameworks

| Feature | **Panda CSS** | **Silk** | **Tailwind CSS** | **UnoCSS** |
|---------|:---:|:---:|:---:|:---:|
| **Type Safety**<br/><sub>Native TypeScript support without runtime overhead</sub> | [✅](https://panda-css.com/docs/concepts/type-safety) | [✅](https://github.com/sylphxltd/silk#type-safety) | ❌ | ❌ |
| **Codegen Required**<br/><sub>Requires code generation step for type safety</sub> | [✅](https://panda-css.com/docs/installation/cli) | ❌ | ❌ | ❌ |
| **Design Tokens**<br/><sub>Built-in design token/theme configuration system</sub> | [✅](https://panda-css.com/docs/theming/tokens) | [✅](https://github.com/sylphxltd/silk#design-tokens) | [✅](https://tailwindcss.com/docs/theme) | [✅](https://unocss.dev/config/theme) |
| **Preset System**<br/><sub>Installable preset packages for complete design systems</sub> | [Community presets](https://panda-css.com/docs/customization/presets) | [2 official (Material, Minimal)](https://github.com/sylphxltd/silk#presets) | ❌ | [20+ official presets](https://unocss.dev/presets/) |
| **Critical CSS**<br/><sub>Automatic critical CSS extraction for performance</sub> | ❌ | [✅](https://github.com/sylphxltd/silk#critical-css) | ❌ | ❌ |
| **Pure CSS Icons**<br/><sub>Icon support via pure CSS classes (no SVG/font)</sub> | ❌ | ❌ | ❌ | [✅](https://unocss.dev/presets/icons) |

> 💡 **Legend:** ✅ = Supported, ❌ = Not supported. Click checkmarks for documentation.

## 📜 Historical Results

| Date | Results |
|------|---------|
| 2025-11-07 | [View Results](./results/2025-11-07.json) |

## 📊 Detailed Results

### Apply 100 inline styles

**Performance Comparison:**

```
🥇 Panda CSS - Apply... ████████████████████████████████████████ 306.08K
🥈 Silk - Apply styles  ██████████████████████████████████████ 291.55K
🥉 UnoCSS - Apply st... ██████████████████████████████████████ 290.90K
   Tailwind CSS - Ap... ██████████████████████████████████████ 287.64K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Apply styles** | 306.08K | ±0.82% | 3.2672ms | 4.4380ms | 153.04K |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk) - Apply styles** | 291.55K | ±0.84% | 3.4299ms | 9.8090ms | 145.78K |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Apply styles** | 290.90K | ±0.72% | 3.4376ms | 4.6690ms | 145.45K |
| 4 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Apply styles** | 287.64K | ±0.52% | 3.4766ms | 4.6280ms | 143.82K |

**Key Insight:** Panda CSS - Apply styles is **1.06x faster** than Tailwind CSS - Apply styles in this category.

### Conditional styling (1000 iterations)

**Performance Comparison:**

```
🥇 Panda CSS - Condi... ████████████████████████████████████████ 2.60M
🥈 Tailwind CSS - Co... ████████████████████████████████████████ 2.59M
🥉 Silk - Conditiona... ████████████████████████████████████████ 2.57M
   UnoCSS - Conditio... ███████████████████████████████████████ 2.56M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Panda CSS](https://github.com/chakra-ui/panda) - Conditional styles** | 2.60M | ±0.19% | 0.3842ms | 0.6610ms | 1.30M |
| 🥈 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Conditional styles** | 2.59M | ±0.10% | 0.3855ms | 0.6620ms | 1.30M |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Conditional styles** | 2.57M | ±0.10% | 0.3888ms | 0.7410ms | 1.29M |
| 4 | **[UnoCSS](https://github.com/unocss/unocss) - Conditional styles** | 2.56M | ±0.20% | 0.3909ms | 0.7010ms | 1.28M |

**Key Insight:** Panda CSS - Conditional styles is **1.02x faster** than UnoCSS - Conditional styles in this category.

### String concatenation (complex className)

**Performance Comparison:**

```
🥇 Tailwind CSS - Co... ████████████████████████████████████████ 18.07M
🥈 UnoCSS - Concat 1... ████████████████████████████████████████ 18.01M
🥉 Panda CSS - Conca... ████████████████████████████████████████ 18.01M
   Silk - Concat 10 ... ████████████████████████████████████████ 17.94M
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Concat 10 classes** | 18.07M | ±0.09% | 0.0554ms | 0.0610ms | 9.03M |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Concat 10 classes** | 18.01M | ±0.17% | 0.0555ms | 0.0610ms | 9.01M |
| 🥉 | **[Panda CSS](https://github.com/chakra-ui/panda) - Concat 10 classes** | 18.01M | ±0.27% | 0.0555ms | 0.0610ms | 9.00M |
| 4 | **[Silk](https://github.com/sylphxltd/silk) - Concat 10 classes** | 17.94M | ±0.15% | 0.0557ms | 0.0810ms | 8.97M |

**Key Insight:** Tailwind CSS - Concat 10 classes is **1.01x faster** than Silk - Concat 10 classes in this category.

### Theme toggle (dark/light mode)

**Performance Comparison:**

```
🥇 Tailwind CSS - To... ████████████████████████████████████████ 516.94K
🥈 Silk - Toggle the... ████████████████████████████████████████ 516.30K
🥉 UnoCSS - Toggle t... ████████████████████████████████████████ 515.21K
   Panda CSS - Toggl... ████████████████████████████████████████ 513.58K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Toggle theme 1000x** | 516.94K | ±0.08% | 1.9345ms | 1.9240ms | 258.47K |
| 🥈 | **[Silk](https://github.com/sylphxltd/silk) - Toggle theme 1000x** | 516.30K | ±0.18% | 1.9369ms | 1.9240ms | 258.15K |
| 🥉 | **[UnoCSS](https://github.com/unocss/unocss) - Toggle theme 1000x** | 515.21K | ±0.21% | 1.9410ms | 1.9240ms | 257.61K |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Toggle theme 1000x** | 513.58K | ±0.14% | 1.9471ms | 2.2240ms | 256.79K |

**Key Insight:** Tailwind CSS - Toggle theme 1000x is **1.01x faster** than Panda CSS - Toggle theme 1000x in this category.

### Responsive breakpoint matching

**Performance Comparison:**

```
🥇 Tailwind CSS - Ma... ████████████████████████████████████████ 308.01K
🥈 UnoCSS - Match br... ████████████████████████████████████████ 306.66K
🥉 Silk - Match brea... ███████████████████████████████████████ 299.60K
   Panda CSS - Match... ███████████████████████████████████████ 299.21K
```

| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |
|------|---------|---------|----------|------|-----|--------|
| 🥇 | **[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Match breakpoint 1000x** | 308.01K | ±0.21% | 3.2466ms | 3.3360ms | 154.01K |
| 🥈 | **[UnoCSS](https://github.com/unocss/unocss) - Match breakpoint 1000x** | 306.66K | ±0.21% | 3.2610ms | 5.2200ms | 153.33K |
| 🥉 | **[Silk](https://github.com/sylphxltd/silk) - Match breakpoint 1000x** | 299.60K | ±0.08% | 3.3378ms | 4.0670ms | 149.80K |
| 4 | **[Panda CSS](https://github.com/chakra-ui/panda) - Match breakpoint 1000x** | 299.21K | ±0.09% | 3.3422ms | 5.1900ms | 149.60K |

**Key Insight:** Tailwind CSS - Match breakpoint 1000x is **1.03x faster** than Panda CSS - Match breakpoint 1000x in this category.

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
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 234.00ms | ±0.00% | 234.00ms | 234.00ms | 0.00 |
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
| 🥇 | **[Silk](https://github.com/sylphxltd/silk)** | 1.76KB | 1.76KB | 1.76KB | 1.76KB | 0.00 |
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

*Last generated: 2025-11-07T15:16:45.275Z*
