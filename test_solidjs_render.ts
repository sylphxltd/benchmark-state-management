/**
 * 測試：使用 Solid.js 的 render() 函數
 */

import { createSignal, createMemo, createEffect, createRoot, render } from 'solid-js/web';

console.log('='.repeat(80));
console.log('Solid.js 使用 render() 測試');
console.log('='.repeat(80));

// ============================================================================
// 測試 1: 使用 render()
// ============================================================================

console.log('\n📊 測試 1: 使用 render()\n');

let effectCount = 0;
let memoCount = 0;

// 創建一個假的 DOM 容器
const mockContainer = {
  appendChild: () => {},
  removeChild: () => {},
  insertBefore: () => {},
  firstChild: null,
  childNodes: [],
  nodeType: 1,
  nodeName: 'DIV',
};

try {
  const dispose = render(() => {
    const [count, setCount] = createSignal(0);

    const memo = createMemo(() => {
      memoCount++;
      console.log(`  [Memo 執行 #${memoCount}] count=${count()}`);
      return count() * 2;
    });

    createEffect(() => {
      effectCount++;
      console.log(`  [Effect 執行 #${effectCount}] count=${count()}, memo=${memo()}`);
    });

    // 測試更新
    console.log('\n更新 count:');
    setTimeout(() => {
      setCount(1);
      console.log(`After setCount(1): effectCount=${effectCount}, memoCount=${memoCount}`);

      setTimeout(() => {
        setCount(2);
        console.log(`After setCount(2): effectCount=${effectCount}, memoCount=${memoCount}`);

        setTimeout(() => {
          console.log('\n最終結果:');
          console.log(`  Effect 執行次數: ${effectCount}`);
          console.log(`  Memo 執行次數: ${memoCount}`);
          console.log(`  預期 Effect: 3 (初始 + 2 次更新)`);
          console.log(`  預期 Memo: 3`);

          if (effectCount >= 3) {
            console.log('\n🎉 成功！使用 render() 可以讓 Solid.js 工作！');
          } else {
            console.log('\n❌ 還是不工作');
          }

          dispose();
        }, 100);
      }, 100);
    }, 100);

    return null;
  }, mockContainer as any);

} catch (error) {
  console.error('Error:', error);
  console.log('\n使用 render() 失敗');
}

// 等待異步執行
setTimeout(() => {
  console.log('\n' + '='.repeat(80));
}, 500);
