/**
 * 測試：Solid.js 在 Node.js 下是否工作？
 */

import { createSignal, createMemo, createEffect, createRoot } from 'solid-js';
import { zen, computed } from '@sylphx/zen';

console.log('='.repeat(80));
console.log('Solid.js 在 Node.js 下的測試');
console.log('='.repeat(80));

// ============================================================================
// 測試 1: 最簡單的 Signal + Effect
// ============================================================================

console.log('\n📊 測試 1: Signal + Effect (Node.js)\n');

let effectCount = 0;
const values: number[] = [];

createRoot(() => {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    effectCount++;
    const value = count();
    values.push(value);
    console.log(`[Effect #${effectCount}] count = ${value}`);
  });

  console.log('\n執行 setCount(1):');
  setCount(1);

  console.log('\n執行 setCount(2):');
  setCount(2);

  console.log('\n執行 setCount(3):');
  setCount(3);
});

console.log('\n結果:');
console.log(`  Effect 執行次數: ${effectCount}`);
console.log(`  收集的值: [${values.join(', ')}]`);
console.log(`  預期: [0, 1, 2, 3]`);

if (effectCount >= 4 && values.length === 4) {
  console.log('\n✅ Solid.js 在 Node.js 下正常工作！');
} else if (effectCount === 1) {
  console.log('\n⚠️  Effect 只執行了一次');
} else {
  console.log('\n❌ Solid.js 在 Node.js 下也不工作！');
}

// ============================================================================
// 測試 2: Signal + Memo
// ============================================================================

console.log('\n\n📊 測試 2: Signal + Memo (Node.js)\n');

let memoCount = 0;

createRoot(() => {
  const [signal, setSignal] = createSignal(1);
  const memo = createMemo(() => {
    memoCount++;
    return signal() + 1;
  });

  console.log(`初始: signal=${signal()}, memo=${memo()}, 執行=${memoCount}`);

  memoCount = 0;
  setSignal(10);
  console.log(`更新到 10: signal=${signal()}, memo=${memo()}, 執行=${memoCount}`);

  memoCount = 0;
  setSignal(100);
  console.log(`更新到 100: signal=${signal()}, memo=${memo()}, 執行=${memoCount}`);
});

// ============================================================================
// 測試 3: 100 層深度鏈
// ============================================================================

console.log('\n\n📊 測試 3: 100 層深度鏈 Benchmark (Node.js)\n');

let deepExecCount = 0;

const deepResult = createRoot(() => {
  const [signal, setSignal] = createSignal(1);
  const memos: any[] = [];
  let prev: any = signal;

  for (let i = 0; i < 100; i++) {
    const current = prev;
    const memo = createMemo(() => {
      deepExecCount++;
      return current() + 1;
    });
    memos.push(memo);
    prev = memo;
  }

  // Benchmark
  deepExecCount = 0;
  const start = performance.now();

  for (let i = 0; i < 100; i++) {
    setSignal(prev => prev + 1);
    memos[99]();
  }

  const end = performance.now();
  const time = end - start;
  const opsPerSec = Math.round(100 / (time / 1000));

  return { execCount: deepExecCount, time, opsPerSec };
});

console.log(`執行次數: ${deepResult.execCount.toLocaleString()}`);
console.log(`預期: 10,000 (100 layers × 100 iterations)`);
console.log(`時間: ${deepResult.time.toFixed(2)}ms`);
console.log(`Ops/sec: ${deepResult.opsPerSec.toLocaleString()}`);

if (deepResult.execCount === 10000) {
  console.log('\n🎉 完美！Solid.js 在 Node.js 下完全正常工作！');
  console.log('\n這證明問題確實是 Bun 與 Solid.js 不兼容！');
} else {
  console.log(`\n⚠️  執行了 ${deepResult.execCount} 次（預期 10,000）`);
}

// ============================================================================
// 對比 Zen
// ============================================================================

console.log('\n\n📊 對比: Zen (Node.js)\n');

let zenExecCount = 0;
const zenSignal = zen(1);
const zenMemos: any[] = [];
let prevZen: any = zenSignal;

for (let i = 0; i < 100; i++) {
  const current = prevZen;
  zenMemos.push(computed(() => {
    zenExecCount++;
    return current.value + 1;
  }));
  prevZen = zenMemos[i];
}

zenExecCount = 0;
const zenStart = performance.now();

for (let i = 0; i < 100; i++) {
  zenSignal.value++;
  zenMemos[99].value;
}

const zenEnd = performance.now();
const zenTime = zenEnd - zenStart;
const zenOps = Math.round(100 / (zenTime / 1000));

console.log(`執行次數: ${zenExecCount.toLocaleString()}`);
console.log(`時間: ${zenTime.toFixed(2)}ms`);
console.log(`Ops/sec: ${zenOps.toLocaleString()}`);

// ============================================================================
// 最終結論
// ============================================================================

console.log('\n' + '='.repeat(80));
console.log('最終結論:');
console.log('='.repeat(80));

if (deepResult.execCount === 10000) {
  console.log('\n✅ Solid.js 在 Node.js 下正常工作！');
  console.log('\n性能對比 (Node.js):');
  console.log(`  Solid.js: ${deepResult.opsPerSec.toLocaleString()} ops/sec`);
  console.log(`  Zen:      ${zenOps.toLocaleString()} ops/sec`);

  const ratio = (deepResult.opsPerSec / zenOps).toFixed(2);
  if (parseFloat(ratio) > 1) {
    console.log(`\n  → Solid.js 快 ${ratio}x`);
  } else {
    console.log(`\n  → Zen 快 ${(1/parseFloat(ratio)).toFixed(2)}x`);
  }

  console.log('\n💡 結論: 問題確實是 Bun 與 Solid.js 不兼容！');
  console.log('   Benchmark 應該用 Node.js 而不是 Bun！');
} else {
  console.log('\n❌ 即使在 Node.js 下，Solid.js 也不工作');
  console.log('   這可能是其他配置問題');
}

console.log('='.repeat(80));
