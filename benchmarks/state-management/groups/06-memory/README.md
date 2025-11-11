# Memory Allocation

Large state allocation performance.

## Group Overall Performance

**Methodology**: Geometric mean across all tests in this group
**Last Benchmark Run**: Nov 10, 2025, 4:38 PM

| Rank | Library | Version | Bundle (gzip) | Group Score | Peak Performance | Last Updated |
|------|---------|---------|---------------|-------------|------------------|--------------|
| 🥇 1 | **MobX** | 6.15.0 | 17.6 KB | 👑 925 | 925 | Dec 6 |
| 🥈 2 | **Zen** | 1.2.1 | 5.3 KB | 924 | 924 | Nov 7 |
| 🥉 3 | **Solid Signals** | 1.9.10 | 4.0 KB | 923 | 923 | Dec 6 |
|  4 | **Jotai** | 2.15.1 | 4.3 KB | 917 | 917 | Dec 6 |
|  5 | **Zustand** | 5.0.8 | 👑 1.2 KB | 907 | 907 | Nov 6 |
|  6 | **Preact Signals** | 2.4.0 | 3.0 KB | 904 | 904 | Nov 7 |
|  7 | **Valtio** | 2.2.0 | 3.1 KB | 898 | 898 | Nov 6 |
|  8 | **Redux Toolkit** | 2.10.1 | 13.8 KB | 892 | 892 | Dec 6 |

---

## 🔗 Navigation

- [← Back to State Management Overview](../../README.md)
- [Overall Performance Score](../../README.md#overall-performance-score)

## 🚀 Running This Group

```bash
# Run this group
npm run benchmark:memory

# Or run specific test file
npx vitest bench groups/06-memory/*.bench.ts
```

---
*Last generated: 2025-11-11T00:30:43.296Z*
