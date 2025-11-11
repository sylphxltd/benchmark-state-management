# Store Creation

Instance creation overhead.

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **Preact Signals** | 2.4.0 | 3.0 KB | 👑 33.4M | 33.4M | Nov 7 |
| 🥈 2 | **Zen** | 1.2.1 | 5.3 KB | 32.2M | 32.2M | Nov 7 |
| 🥉 3 | **Solid Signals** | 1.9.10 | 4.0 KB | 32.1M | 32.1M | Dec 6 |
|  4 | **Zustand** | 5.0.8 | 👑 1.2 KB | 10.9M | 10.9M | Nov 6 |
|  5 | **Jotai** | 2.15.1 | 4.3 KB | 2.3M | 2.3M | Dec 6 |
|  6 | **Valtio** | 2.2.0 | 3.1 KB | 235K | 235K | Nov 6 |
|  7 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 173K | 173K | Dec 6 |
|  8 | **MobX** | 6.15.0 | 17.6 KB | 278 | 278 | Dec 6 |

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:creation

# Or run specific test file
npx vitest bench groups/03-creation/*.bench.ts
```

---
*Last generated: 2025-11-11T00:30:43.195Z*
