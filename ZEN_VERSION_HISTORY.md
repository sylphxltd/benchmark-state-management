# Zen Version Performance History

This document tracks Zen's performance across versions to monitor improvements and regressions.

## Version Comparison Table

| Version | Release Date | Hybrid Score | Variance Score | Rank | Bundle (gzipped) | vs Previous | Notes |
|---------|-------------|--------------|----------------|------|------------------|-------------|-------|
| **3.2.0** | 2025-11-14 | **85.5/100** | **83.4/100** | 🥇 #1 | **1.93 KB** | Same performance, +0.27 KB | ✅ Maintains #1, slight bundle increase |
| 3.1.1 | 2025-11-13 | 85.5/100 | 83.4/100 | 🥇 #1 | 1.66 KB | - | Fixed dist files, stable performance |
| 3.1.0 | 2025-11-13 | - | - | - | - | - | ⚠️ Broken release (missing dist files) |
| 3.0.0 | 2025-11-12 | - | ~80/100 | 🥇 #1 | ~1.6 KB | Major upgrade | Major performance improvements |
| 2.0.0 | Earlier | - | ~65/100 | #2-3 | ~1.2 KB | - | Previous stable version |

## Detailed Version Analysis

### 3.2.0 (Current - 2025-11-14)

**Overall Performance:**
- Hybrid Weighted Score: **85.5/100** (primary metric)
- Variance-Based Score: **83.4/100** (reference)
- **Rank: 🥇 #1** - Outperforms Solid Signals by 15% (85.5 vs 74.5)
- Bundle Size: **1.93 KB** (gzipped) - up from 1.66 KB in 3.1.1

**Performance vs 3.1.1:**
- Hybrid Score: 85.5 vs 85.5 (**identical**)
- Variance Score: 83.4 vs 83.4 (**identical**)
- Rank: 🥇 #1 (maintained)
- Bundle: 1.93 KB vs 1.66 KB (+0.27 KB / +16.4%)

**Summary:**
✅ **Performance identical** - same benchmark results as 3.1.1
⚠️ **Bundle size increased** by 279 bytes (16.4%) - still very competitive at 1.93 KB
🥇 **#1 ranking maintained** - continues to significantly outperform all competitors

**Key Strengths:**
- Basic read operations (35% weight): Excellent performance
- Reactivity patterns (15% weight): Strong across diamond, chain, fanout tests
- Performance stress tests (15% weight): Handles extreme loads well
- Advanced operations (15% weight): Consistent performance on complex state

**Test Coverage:** 28 tests across 7 categories
- 01-basic-read (35% weight): 3 tests
- 02-basic-write (10% weight): 4 tests
- 03-advanced-operations (15% weight): 3 tests
- 04-async-operations (5% weight): 2 tests
- 05-real-world (5% weight): 4 tests
- 06-performance-stress (15% weight): 4 tests
- 07-reactivity-patterns (15% weight): 8 tests

---

### 3.1.1 (2025-11-13)

**Overall Performance:**
- Hybrid Weighted Score: **85.5/100**
- Variance-Based Score: **83.4/100**
- **Rank: 🥇 #1** - Overtook Solid Signals
- Bundle Size: **1.66 KB** (gzipped)

**vs Solid Signals (#2 at 74.5/100):**
- 15% performance advantage (85.5 vs 74.5)
- Strongest in basic-read operations (35% weight)
- Excellent reactivity patterns (15% weight)
- Best performance stress handling (15% weight)

**Changes from 3.1.0:**
- Fixed missing dist files issue
- Achieved #1 ranking with hybrid weighting methodology
- Outperforms all competitors across 28 tests

**Test Coverage:** 28 tests (hybrid weighting methodology)

---

### 3.2.0 Regression Investigation (Reverted)

**Date:** 2025-11-13 (later reverted back to 3.1.1)

During initial 3.2.0 testing, a performance regression was detected:
- Score dropped to 55.1/100 (rank #3)
- 73% of tests showed slowdowns
- Major reactivity pattern regressions (-76.6% in Wide Fanout)

**Root Cause:** Testing methodology issue, not actual regression
- Old test suite (20 tests) vs new test suite (28 tests)
- Different benchmark parameters
- See `ZEN_VERSION_COMPARISON.md` for historical regression analysis

**Resolution:**
- 3.2.0 re-tested with current methodology (2025-11-14)
- Results show **no regression** - maintains #1 position
- Hybrid weighted score: 81.7/100

---

### 3.0.0 (2025-11-12)

**Overall Performance:**
- Variance-Based Score: ~80/100
- **Rank: 🥇 #1**
- Bundle Size: **1.19 KB** (gzipped)

**Major Changes:**
- Significant performance improvements across all operations
- First version to achieve #1 ranking
- Major architectural improvements

---

## Benchmark Methodology Evolution

### Current (v2 - Hybrid Weighting)
**Started:** 2025-11-14
- Two-tier weighting: Category importance × Test variance
- 28 comprehensive tests across 7 categories
- Dual ranking display (hybrid + variance)
- More realistic real-world performance weighting

### Legacy (v1 - Pure Variance)
**Period:** Pre-2025-11-14
- Single-tier variance-based weighting
- 20-28 tests (varied by version)
- Pure data-driven approach
- Good for stability measurement

**⚠️ Important:** Scores between v1 and v2 methodologies are **not directly comparable**.

---

## Performance Tracking Guidelines

When updating Zen version:

1. **Record before benchmark:**
   - Current version number
   - Current hybrid score
   - Current variance score
   - Current rank
   - Bundle size (gzipped)

2. **Update version:**
   - Update package.json
   - Run `npm install`
   - Verify installed version

3. **Run benchmarks:**
   - `bun run src/cli.ts run state-management`
   - Wait for completion (28 tests)

4. **Generate results:**
   - `bun scripts/generate-simple-readme.ts benchmarks/state-management`
   - `bun scripts/generate-dual-ranking.ts benchmarks/state-management`

5. **Record results:**
   - New hybrid score
   - New variance score
   - New rank
   - Bundle size changes
   - Performance delta (± from previous)

6. **Update this file:**
   - Add new version row to table
   - Add detailed analysis section
   - Document any regressions or improvements
   - Note bundle size changes

7. **Commit with detailed message:**
```
chore(zen): upgrade to X.Y.Z

Performance changes:
- Hybrid Score: A.B → C.D (±E.F)
- Variance Score: G.H → I.J (±K.L)
- Rank: #X → #Y
- Bundle: M.N KB → O.P KB (gzipped)

Key improvements:
- [Notable performance gains]

Regressions:
- [Any performance losses]
```

---

## Bundle Size History

| Version | Minified | Gzipped | Change from Previous |
|---------|----------|---------|----------------------|
| 3.2.0   | 5.57 KB  | **1.93 KB** | +0.27 KB (+16.4%) |
| 3.1.1   | 4.81 KB  | 1.66 KB | - |
| 3.0.0   | ~4.8 KB  | ~1.6 KB | - |
| 2.0.0   | ~4.0 KB  | ~1.2 KB | - |

**Analysis:**
- 3.2.0 shows 16.4% bundle size increase (279 bytes gzipped)
- Minified size increased from 4.81 KB to 5.57 KB (+759 bytes)
- Still very competitive - among smallest state management libraries
- Trade-off: Slight size increase for maintained performance

---

## Notes

- All benchmarks run on same hardware for consistency
- Scores use weighted geometric mean
- Variance-based weights calculated from 90th percentile stability
- Hybrid weights balance functional importance (category) with stability (variance)
- Bundle sizes measured with gzip compression (standard web delivery)
