# Write Operations

Simple increments and burst updates.

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Solid Signals** | 1.9.10 | 4.0 KB | 👑 31.2M | 33.1M | Dec 6 |
| 🥈 2 | **Jotai** | 2.15.1 | 4.3 KB | 20.3M | 33.9M | Dec 6 |
| 🥉 3 | **Preact Signals** | 2.4.0 | 3.0 KB | 18.4M | 28.2M | Nov 7 |
|  4 | **Zen** | 1.2.1 | 5.3 KB | 16.8M | 28.2M | Nov 7 |
|  5 | **Valtio** | 2.2.0 | 3.1 KB | 1.5M | 4.2M | Nov 6 |
|  6 | **MobX** | 6.15.0 | 17.6 KB | 1.1M | 3.0M | Dec 6 |
|  7 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 242K | 784K | Dec 6 |
|  8 | **Zustand** | 5.0.8 | 👑 1.2 KB | 105K | 351K | Nov 6 |

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:write

# Or run specific test file
npx vitest bench groups/02-write/*.bench.ts
```

---
*Last generated: 2025-11-11T00:30:43.159Z*
