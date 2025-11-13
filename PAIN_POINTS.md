# 🔍 Pain Points - Adding New Benchmark Category

**测试日期**: 2025-11-13
**测试任务**: 添加新的 Fetch Libraries benchmark category
**发现**: 7个主要pain points

---

## ❌ Pain Point 1: Circular Dependency陷阱

### 问题
新手很容易写出这样的代码：

```typescript
// index.ts
export const category = createCategory({...});
export const tests = {...};

// ❌ 静态import在top-level
import './libraries/axios';
import './libraries/ky';

// ❌ Top-level await
const results = await category.run();
```

这会导致 **"Cannot access 'category' before initialization"** 错误！

### 根本原因
- 静态 `import './libraries/axios'` 会立即执行 axios.ts
- axios.ts 又 `import { category } from '../index'`
- 此时 category 还未完全初始化
- 造成 **circular dependency**

### 正确做法（不intuitive！）
```typescript
async function main() {
  // ✅ 动态import在async function内
  await import('./libraries/axios');
  await import('./libraries/ky');

  const results = await category.run();
}

if (import.meta.main) {
  main();
}
```

### 影响
⭐⭐⭐⭐⭐ (严重)
**新手第一个遇到的问题，完全不intuitive！**

### 建议改进
1. **框架层面检测**: 在 `registerLibrary()` 时检测是否在top-level，给出警告
2. **模板生成器**: CLI command自动生成正确的boilerplate
3. **文档**: 在README里明确说明这个陷阱
4. **架构重构**: 考虑改用factory pattern避免circular dependency

---

## ❌ Pain Point 2: 需要手动查找每个library的版本号

### 问题
创建 `package.json` 时需要手动查找版本：

```bash
npm view axios version    # 1.7.9
npm view ky version       # 1.7.3
npm view wretch version   # 3.0.3  ← 我一开始写错了2.11.2
```

### 影响
⭐⭐⭐⭐ (严重)
浪费时间，容易出错

### 建议改进
**CLI command自动化**:
```bash
bun run benchmark create fetch axios ky wretch ofetch
# 自动：
# 1. 查询最新版本
# 2. 生成package.json
# 3. 生成library-metadata.json
# 4. 生成boilerplate index.ts
```

---

## ❌ Pain Point 3: 需要手动创建大量boilerplate

### 问题
需要手动创建这些文件：

```
benchmarks/fetch/
├── package.json          ← 手写
├── library-metadata.json ← 手写
├── index.ts             ← 手写 ~100 lines
├── libraries/
│   ├── axios.ts         ← 手写 ~40 lines
│   ├── ky.ts           ← 手写 ~40 lines
│   ├── wretch.ts       ← 手写 ~40 lines
│   └── ofetch.ts       ← 手写 ~40 lines
```

大部分都是重复的模板代码！

### 影响
⭐⭐⭐⭐ (严重)
重复劳动，容易漏步骤

### 建议改进
**Scaffolding CLI**:
```bash
bun run benchmark scaffold fetch --libraries axios,ky,wretch,ofetch
# 自动生成所有boilerplate
```

---

## ❌ Pain Point 4: Library metadata需要手动填写

### 问题
```json
{
  "libraries": {
    "axios": {
      "name": "Axios",           ← 要查npm页面
      "displayName": "Axios",
      "npm": "axios",
      "url": "https://...",       ← 要查GitHub URL
      "description": "...",       ← 要抄description
      "color": "#5A29E4"         ← 要手动选颜色
    }
  }
}
```

### 影响
⭐⭐⭐ (中等)
繁琐但不会出大错

### 建议改进
从npm registry API自动获取metadata:
```typescript
const metadata = await fetchNpmMetadata('axios');
// Auto-populate: description, repository URL, homepage
```

---

## ❌ Pain Point 5: 外部依赖（HTTP server）支持不足

### 问题
Fetch benchmarks需要HTTP endpoint：
- 用 httpbin.org → 不稳定（502 errors）
- 自己起server → 每次benchmark都要启动
- Mock responses → 失去真实性

### 影响
⭐⭐⭐ (中等)
某些类型的benchmarks难以实现

### 建议改进
框架层面支持：
```typescript
category.createCategory({
  setup: {
    beforeAll: async () => {
      // Start mock HTTP server
      return await startMockServer(3000);
    },
    afterAll: async (server) => {
      await server.close();
    },
  },
});
```

---

## ❌ Pain Point 6: 没有自动发现新category

### 问题
添加新category后：
- CI/CD workflow不会自动发现
- 需要手动确认category是否被包含

### 影响
⭐⭐ (轻微)
容易遗漏

### 建议改进
CI/CD已经有动态发现逻辑：
```yaml
find benchmarks -maxdepth 1 -mindepth 1 -type d -exec test -f {}/index.ts \;
```
应该自动work，但没有明确测试

---

## ❌ Pain Point 7: 文档不够完善

### 问题
没有"如何添加新benchmark category"的step-by-step guide

### 影响
⭐⭐⭐⭐ (严重)
新手完全不知道从何入手

### 建议改进
创建 `CONTRIBUTING.md` with:
1. Quick start guide
2. Step-by-step tutorial
3. Common pitfalls (especially #1!)
4. Best practices

---

## ✅ 成功的地方

尽管有这些pain points，但框架的**核心设计是好的**：

✅ **类型安全**: TypeScript泛型很好用
✅ **扩展性**: 添加新test很简单
✅ **一致性**: 所有categories用同样的模式
✅ **分离关注点**: Library实现独立于test定义

---

## 🎯 优先级改进建议

### 高优先级（必须修复）
1. **CLI scaffolding command** - 解决 Pain Points #2, #3, #4
2. **文档** - 解决 Pain Point #7
3. **Circular dependency警告** - 解决 Pain Point #1

### 中优先级（很有用）
4. **Setup/teardown hooks** - 解决 Pain Point #5

### 低优先级（nice to have）
5. **Auto-discovery测试** - 解决 Pain Point #6

---

## 📝 总结

添加新category的**实际体验**：
- 😅 **第一次**: 遇到3-4个错误，需要20-30分钟debug
- 🤔 **需要查看**: 现有categories的代码来学习模式
- 💡 **最大痛点**: Circular dependency陷阱（完全不intuitive）
- ⏱️ **总耗时**: ~30分钟（如果有scaffolding只需要5分钟）

**框架可用性评分**: 6/10
- 核心架构: 9/10
- 用户体验: 4/10  ← 需要改进

**改进后预期**: 9/10 🎯
