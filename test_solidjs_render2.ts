/**
 * 測試：使用 Solid.js 的 render() 函數
 */

import { createSignal, createMemo, createEffect } from 'solid-js';
import { render } from 'solid-js/web';

console.log('='.repeat(80));
console.log('Solid.js 使用 render() 測試');
console.log('='.repeat(80));

// ============================================================================
// 測試 1: 使用 render()
// ============================================================================

console.log('\n📊 測試 1: 使用 render() 包裹整個應用\n');

let effectCount = 0;
let memoCount = 0;

// 創建一個假的 DOM 容器
const mockContainer = {
  appendChild: () => {},
  removeChild: () => {},
  insertBefore: () => {},
  replaceChild: () => {},
  removeAttribute: () => {},
  setAttribute: () => {},
  firstChild: null,
  childNodes: [],
  nodeType: 1,
  nodeName: 'DIV',
  ownerDocument: {
    createTextNode: (text: string) => ({ nodeValue: text, nodeType: 3 }),
    createElement: (tag: string) => mockContainer,
  },
};

try {
  const dispose = render(() => {
    console.log('render() 回調執行');

    const [count, setCount] = createSignal(0);

    const memo = createMemo(() => {
      memoCount++;
      const value = count() * 2;
      console.log(`  [Memo 執行 #${memoCount}] count=${count()}, result=${value}`);
      return value;
    });

    createEffect(() => {
      effectCount++;
      console.log(`  [Effect 執行 #${effectCount}] count=${count()}, memo=${memo()}`);
    });

    // 測試更新
    setTimeout(() => {
      console.log('\n執行 setCount(1):');
      setCount(1);
    }, 100);

    setTimeout(() => {
      console.log('\n執行 setCount(2):');
      setCount(2);
    }, 200);

    setTimeout(() => {
      console.log('\n執行 setCount(3):');
      setCount(3);
    }, 300);

    setTimeout(() => {
      console.log('\n\n最終結果:');
      console.log(`  Effect 執行次數: ${effectCount}`);
      console.log(`  Memo 執行次數: ${memoCount}`);
      console.log(`  預期 Effect: 4 (初始 + 3 次更新)`);
      console.log(`  預期 Memo: 應該根據需要執行`);

      if (effectCount >= 4) {
        console.log('\n🎉 成功！使用 render() 可以讓 Solid.js 工作！');
      } else if (effectCount > 0) {
        console.log(`\n⚠️  部分成功：Effect 執行了 ${effectCount} 次`);
      } else {
        console.log('\n❌ 還是不工作');
      }

      console.log('='.repeat(80));
      dispose();
    }, 500);

    return null;
  }, mockContainer as any);

  console.log('render() 返回 dispose 函數');

} catch (error: any) {
  console.error('\nError:', error.message);
  console.log('\n使用 render() 失敗');
  console.log('='.repeat(80));
}
