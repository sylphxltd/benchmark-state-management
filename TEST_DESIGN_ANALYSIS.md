# Benchmark Test Group Design Analysis

## 權威性測試設計原則
1. **測試真實場景**：模擬實際應用中的使用模式
2. **測試關鍵差異**：突出不同庫的設計優勢/劣勢
3. **測試公平性**：所有庫都能公平參與
4. **測試穩定性**：結果可重複、可驗證
5. **測試代表性**：覆蓋主要使用場景

---

## Current Groups Analysis

### ✅ 01-read (COMPLETED)
**Current Tests:**
- Simple Read
- High Frequency Read (x10, x100, x1000, x10000)

**Authority: EXCELLENT**
- Tests most common operation
- Scales properly test performance degradation
- All libraries can participate fairly

**Action: Keep as is**

---

### ✅ 02-write (COMPLETED)
**Current Tests:**
- Single Update
- Batch Update (x10, x100, x1000, x10000)

**Authority: EXCELLENT**
- Tests core write performance
- Batch scales show optimization strategies
- All libraries can participate

**Action: Keep as is**

---

### ⚠️ 03-creation (NEEDS ENHANCEMENT)
**Current Tests:**
- Store Creation (basic)

**Authority: WEAK**
- Too simplistic, doesn't show real-world scenarios

**Proposed Tests:**
- Store Creation (empty)
- Store with Large Initial State (1000 items)
- Store with Computed Values

**Rationale:** Real apps rarely create empty stores

---

### ⚠️ 04-complexity (NEEDS REDESIGN)
**Current Tests:**
- 10-Level Nested Update
- Deep Read Access

**Authority: MODERATE**
- Tests deep nesting but misses other complexity patterns

**Proposed Tests:**
- Nested Read (10 levels)
- Nested Write (10 levels)
- Array Splice (middle insertion/deletion)
- Large Array Iteration (1000 items)
- Multi-field Update (unrelated fields)

**Rationale:** Real complexity comes from various patterns, not just nesting

---

### ❌ 05-cache (SHOULD DELETE OR MERGE)
**Current Tests:** None implemented

**Authority: PROBLEMATIC**
- "Cache" is not a universal concept across libraries
- Signals auto-cache, Redux doesn't
- Not a fair comparison

**Options:**
1. DELETE this group entirely
2. MERGE into "09-computed-native" as derived state tests
3. RENAME to "05-derived-state" and test computed/selector performance

**Recommendation: DELETE** - covered by other groups

---

### ✅ 06-memory (GOOD, CAN ENHANCE)
**Current Tests:**
- Large State Read
- Large State Update

**Authority: GOOD**
- Tests large state handling

**Proposed Enhancement:**
- Large State Read (1000 items)
- Large State Update (1000 items)
- Large State Clone/Copy
- Large State Filter

---

### ⚠️ 07-form (NO TESTS, NEEDS IMPLEMENTATION)
**Current Tests:** None implemented

**Authority: NEEDS TESTS**
- Forms are critical real-world use case

**Proposed Tests:**
- Single Field Update
- Multiple Fields Update (3 fields)
- Nested Field Update (address.city)
- Full Form Reset
- Conditional Field Update (based on another field)

**Rationale:** Forms are one of the most common state management patterns

---

###🔀 08-async-reactive (NEEDS REDESIGN)
**Current Tests:** Only Jotai (reactive async atoms)

**Authority: UNFAIR**
- Only tests libraries with native async reactive primitives
- Excludes most libraries

**Proposed: Rename to "08-async-operations"**

**New Tests (all libraries can implement):**
- Async Fetch Pattern (loading → data → done)
- Sequential Async Calls
- Concurrent Async Calls
- Optimistic Update + Rollback
- Async with Error Handling

**Rationale:** Test async patterns ALL libraries can implement

---

### ✅ 09-computed-native (KEEP, FEATURE-SPECIFIC)
**Current Tests:**
- Simple Computed
- Chained Computed (3 levels)
- Computed Update Performance

**Authority: EXCELLENT**
- Properly labeled as "native" (feature-specific)
- Only libraries with native computed participate
- Tests key computed scenarios

**Action: Keep as is**

**Participating Libraries:** MobX, Jotai, Preact Signals, Solid Signals, Zen

---

### ✅ 10-selectors (GOOD, CAN ENHANCE)
**Current Tests:**
- Simple Selector
- Chained Selectors
- Selector Repeated Access
- Selector with Updates

**Authority: GOOD**
- Tests manual selector pattern (Redux, Zustand)

**Proposed Enhancement:**
- Add: "Selector with Multiple Dependencies"

**Participating Libraries:** Redux, Zustand, Valtio (libraries with explicit selectors)

---

### ✅ 11-batching-native (KEEP, FEATURE-SPECIFIC)
**Current Tests:**
- Batched Updates
- Batched with Observers
- Large Batch (100 updates)
- Unbatched Updates

**Authority: EXCELLENT**
- Properly labeled as "native" (feature-specific)
- Tests libraries with built-in batching
- Good variety of batching scenarios

**Action: Keep as is**

**Participating Libraries:** MobX, Valtio, Solid Signals (native batching APIs)

---

## Final Recommendations

### Universal Groups (All 8 Libraries)
1. ✅ **01-read** - Keep (completed)
2. ✅ **02-write** - Keep (completed)
3. ⚠️ **03-creation** - Enhance (add large/computed scenarios)
4. ⚠️ **04-complexity** - Redesign (add array ops, multi-field)
5. ❌ **05-cache** - DELETE (not universal concept)
6. ✅ **06-memory** - Enhance (add clone/filter)
7. ⚠️ **07-form** - Implement tests
8. 🔀 **08-async-operations** - Rename + redesign (make universal)

### Feature-Specific Groups (Subset of Libraries)
9. ✅ **09-computed-native** - Keep (5 libraries: MobX, Jotai, Signals)
10. ✅ **10-selectors** - Enhance slightly (3 libraries: Redux, Zustand, Valtio)
11. ✅ **11-batching-native** - Keep (3 libraries: MobX, Valtio, Solid)

---

## Implementation Priority

### Phase 1: Universal Groups (High Authority)
1. Delete 05-cache ❌
2. Enhance 03-creation ⚠️
3. Redesign 04-complexity ⚠️
4. Implement 07-form ⚠️
5. Redesign 08-async-operations 🔀
6. Enhance 06-memory ⚠️

### Phase 2: Feature-Specific Groups (Already Good)
7. Minor enhancements to 10-selectors ✅
8. Keep 09-computed-native as is ✅
9. Keep 11-batching-native as is ✅

---

## Authority Score (Before → After)

| Group | Before | After | Impact |
|-------|--------|-------|--------|
| 01-read | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | - |
| 02-write | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | - |
| 03-creation | ⭐⭐ | ⭐⭐⭐⭐ | +2 |
| 04-complexity | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | +2 |
| 05-cache | ⭐ | DELETED | - |
| 06-memory | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | +1 |
| 07-form | ⭐ | ⭐⭐⭐⭐⭐ | +4 |
| 08-async | ⭐⭐ | ⭐⭐⭐⭐ | +2 |
| 09-computed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | - |
| 10-selectors | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | +1 |
| 11-batching | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | - |

**Overall Authority: 3.5★ → 4.7★** (+1.2 stars)
