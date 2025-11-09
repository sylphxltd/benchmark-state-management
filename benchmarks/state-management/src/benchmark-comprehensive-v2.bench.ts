/**
 * Comprehensive Vitest Benchmark Suite for State Management Libraries
 * Version 2 - Complete Coverage of Real-world Scenarios
 */

import { bench, describe } from 'vitest';
import {
  reduxActionsV2,
  zustandActionsV2,
  jotaiActionsV2,
  mobxActionsV2,
  valtioActionsV2,
  preactActionsV2,
  solidActionsV2,
  zenActionsV2
} from './stores';

// ============================================================================
// FOUNDATION TESTS
// ============================================================================

describe('Store Creation', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.createStore();
  });

  bench('Zustand', () => {
    zustandActionsV2.createStore();
  });

  bench('Jotai', () => {
    jotaiActionsV2.createStore();
  });

  bench('MobX', () => {
    mobxActionsV2.createStore();
  });

  bench('Valtio', () => {
    valtioActionsV2.createStore();
  });

  bench('Preact Signals', () => {
    preactActionsV2.createStore();
  });

  bench('Solid Signals', () => {
    solidActionsV2.createStore();
  });

  bench('Zen', () => {
    zenActionsV2.createStore();
  });
});

describe('Simple Increment', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.increment();
  });

  bench('Zustand', () => {
    zustandActionsV2.increment();
  });

  bench('Jotai', () => {
    jotaiActionsV2.increment();
  });

  bench('MobX', () => {
    mobxActionsV2.increment();
  });

  bench('Valtio', () => {
    valtioActionsV2.increment();
  });

  bench('Preact Signals', () => {
    preactActionsV2.increment();
  });

  bench('Solid Signals', () => {
    solidActionsV2.increment();
  });

  bench('Zen', () => {
    zenActionsV2.increment();
  });
});

// ============================================================================
// READ/WRITE PERFORMANCE TESTS
// ============================================================================

describe('High Frequency Read', () => {
  bench('Redux Toolkit', () => {
    for (let i = 0; i < 1000; i++) {
      reduxActionsV2.getDoubled();
    }
  });

  bench('Zustand', () => {
    for (let i = 0; i < 1000; i++) {
      zustandActionsV2.getDoubled();
    }
  });

  bench('Jotai', () => {
    for (let i = 0; i < 1000; i++) {
      jotaiActionsV2.getDoubled();
    }
  });

  bench('MobX', () => {
    for (let i = 0; i < 1000; i++) {
      mobxActionsV2.getDoubled();
    }
  });

  bench('Valtio', () => {
    for (let i = 0; i < 1000; i++) {
      valtioActionsV2.getDoubled();
    }
  });

  bench('Preact Signals', () => {
    for (let i = 0; i < 1000; i++) {
      preactActionsV2.getDoubled();
    }
  });

  bench('Solid Signals', () => {
    for (let i = 0; i < 1000; i++) {
      solidActionsV2.getDoubled();
    }
  });

  bench('Zen', () => {
    for (let i = 0; i < 1000; i++) {
      zenActionsV2.getDoubled();
    }
  });
});

describe('Burst Updates', () => {
  bench('Redux Toolkit', () => {
    for (let i = 0; i < 100; i++) {
      reduxActionsV2.increment();
    }
  });

  bench('Zustand', () => {
    for (let i = 0; i < 100; i++) {
      zustandActionsV2.increment();
    }
  });

  bench('Jotai', () => {
    for (let i = 0; i < 100; i++) {
      jotaiActionsV2.increment();
    }
  });

  bench('MobX', () => {
    for (let i = 0; i < 100; i++) {
      mobxActionsV2.increment();
    }
  });

  bench('Valtio', () => {
    for (let i = 0; i < 100; i++) {
      valtioActionsV2.increment();
    }
  });

  bench('Preact Signals', () => {
    for (let i = 0; i < 100; i++) {
      preactActionsV2.increment();
    }
  });

  bench('Solid Signals', () => {
    for (let i = 0; i < 100; i++) {
      solidActionsV2.increment();
    }
  });

  bench('Zen', () => {
    for (let i = 0; i < 100; i++) {
      zenActionsV2.increment();
    }
  });
});

// ============================================================================
// ARRAY/COLLECTION OPERATIONS TESTS
// ============================================================================

describe('Array Splice Operations', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Zustand', () => {
    zustandActionsV2.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Jotai', () => {
    jotaiActionsV2.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('MobX', () => {
    mobxActionsV2.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Valtio', () => {
    valtioActionsV2.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Preact Signals', () => {
    preactActionsV2.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Solid Signals', () => {
    solidActionsV2.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });

  bench('Zen', () => {
    zenActionsV2.spliceUser(50, 1, { id: Date.now(), name: 'Spliced User' });
  });
});

describe('Large Array Sort', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.sortUsers('name');
  });

  bench('Zustand', () => {
    zustandActionsV2.sortUsers('name');
  });

  bench('Jotai', () => {
    jotaiActionsV2.sortUsers('name');
  });

  bench('MobX', () => {
    mobxActionsV2.sortUsers('name');
  });

  bench('Valtio', () => {
    valtioActionsV2.sortUsers('name');
  });

  bench('Preact Signals', () => {
    preactActionsV2.sortUsers('name');
  });

  bench('Solid Signals', () => {
    solidActionsV2.sortUsers('name');
  });

  bench('Zen', () => {
    zenActionsV2.sortUsers('name');
  });
});

describe('Array Find Operations', () => {
  const targetId = Math.floor(Math.random() * 1000);

  bench('Redux Toolkit', () => {
    reduxActionsV2.findUser(targetId);
  });

  bench('Zustand', () => {
    zustandActionsV2.findUser(targetId);
  });

  bench('Jotai', () => {
    jotaiActionsV2.findUser(targetId);
  });

  bench('MobX', () => {
    mobxActionsV2.findUser(targetId);
  });

  bench('Valtio', () => {
    valtioActionsV2.findUser(targetId);
  });

  bench('Preact Signals', () => {
    preactActionsV2.findUser(targetId);
  });

  bench('Solid Signals', () => {
    solidActionsV2.findUser(targetId);
  });

  bench('Zen', () => {
    zenActionsV2.findUser(targetId);
  });
});

// ============================================================================
// DEEP NESTED STATE TESTS
// ============================================================================

describe('Deep Object Creation', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.createDeepObject();
  });

  bench('Zustand', () => {
    zustandActionsV2.createDeepObject();
  });

  bench('Jotai', () => {
    jotaiActionsV2.createDeepObject();
  });

  bench('MobX', () => {
    mobxActionsV2.createDeepObject();
  });

  bench('Valtio', () => {
    valtioActionsV2.createDeepObject();
  });

  bench('Preact Signals', () => {
    preactActionsV2.createDeepObject();
  });

  bench('Solid Signals', () => {
    solidActionsV2.createDeepObject();
  });

  bench('Zen', () => {
    zenActionsV2.createDeepObject();
  });
});

describe('10-Level Nested Update', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.setTenLevelNested(Math.random());
  });

  bench('Zustand', () => {
    zustandActionsV2.setTenLevelNested(Math.random());
  });

  bench('Jotai', () => {
    jotaiActionsV2.setTenLevelNested(Math.random());
  });

  bench('MobX', () => {
    mobxActionsV2.setTenLevelNested(Math.random());
  });

  bench('Valtio', () => {
    valtioActionsV2.setTenLevelNested(Math.random());
  });

  bench('Preact Signals', () => {
    preactActionsV2.setTenLevelNested(Math.random());
  });

  bench('Solid Signals', () => {
    solidActionsV2.setTenLevelNested(Math.random());
  });

  bench('Zen', () => {
    zenActionsV2.setTenLevelNested(Math.random());
  });
});

describe('Deep Read Access', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.getDeepValue();
  });

  bench('Zustand', () => {
    zustandActionsV2.getDeepValue();
  });

  bench('Jotai', () => {
    jotaiActionsV2.getDeepValue();
  });

  bench('MobX', () => {
    mobxActionsV2.getDeepValue();
  });

  bench('Valtio', () => {
    valtioActionsV2.getDeepValue();
  });

  bench('Preact Signals', () => {
    preactActionsV2.getDeepValue();
  });

  bench('Solid Signals', () => {
    solidActionsV2.getDeepValue();
  });

  bench('Zen', () => {
    zenActionsV2.getDeepValue();
  });
});

// ============================================================================
// COMPUTED/DERIVED STATE TESTS
// ============================================================================

describe('Complex Computed Chain', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.getComplexComputed();
  });

  bench('Zustand', () => {
    zustandActionsV2.getComplexComputed();
  });

  bench('Jotai', () => {
    jotaiActionsV2.getComplexComputed();
  });

  bench('MobX', () => {
    mobxActionsV2.getComplexComputed();
  });

  bench('Valtio', () => {
    valtioActionsV2.getComplexComputed();
  });

  bench('Preact Signals', () => {
    preactActionsV2.getComplexComputed();
  });

  bench('Solid Signals', () => {
    solidActionsV2.getComplexComputed();
  });

  bench('Zen', () => {
    zenActionsV2.getComplexComputed();
  });
});

describe('Computed Invalidation', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.invalidateComputed();
  });

  bench('Zustand', () => {
    zustandActionsV2.invalidateComputed();
  });

  bench('Jotai', () => {
    jotaiActionsV2.invalidateComputed();
  });

  bench('MobX', () => {
    mobxActionsV2.invalidateComputed();
  });

  bench('Valtio', () => {
    valtioActionsV2.invalidateComputed();
  });

  bench('Preact Signals', () => {
    preactActionsV2.invalidateComputed();
  });

  bench('Solid Signals', () => {
    solidActionsV2.invalidateComputed();
  });

  bench('Zen', () => {
    zenActionsV2.invalidateComputed();
  });
});

// ============================================================================
// SUBSCRIPTION/REACTION TESTS
// ============================================================================

describe('Subscription Cascade', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.setupSubscriptionCascade();
  });

  bench('Zustand', () => {
    zustandActionsV2.setupSubscriptionCascade();
  });

  bench('Jotai', () => {
    jotaiActionsV2.setupSubscriptionCascade();
  });

  bench('MobX', () => {
    mobxActionsV2.setupSubscriptionCascade();
  });

  bench('Valtio', () => {
    valtioActionsV2.setupSubscriptionCascade();
  });

  bench('Preact Signals', () => {
    preactActionsV2.setupSubscriptionCascade();
  });

  bench('Solid Signals', () => {
    solidActionsV2.setupSubscriptionCascade();
  });

  bench('Zen', () => {
    zenActionsV2.setupSubscriptionCascade();
  });
});

describe('Reaction Performance', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.triggerReaction();
  });

  bench('Zustand', () => {
    zustandActionsV2.triggerReaction();
  });

  bench('Jotai', () => {
    jotaiActionsV2.triggerReaction();
  });

  bench('MobX', () => {
    mobxActionsV2.triggerReaction();
  });

  bench('Valtio', () => {
    valtioActionsV2.triggerReaction();
  });

  bench('Preact Signals', () => {
    preactActionsV2.triggerReaction();
  });

  bench('Solid Signals', () => {
    solidActionsV2.triggerReaction();
  });

  bench('Zen', () => {
    zenActionsV2.triggerReaction();
  });
});

// ============================================================================
// LARGE SCALE TESTS
// ============================================================================

describe('Multi-Store Operations', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.multiStoreOperation();
  });

  bench('Zustand', () => {
    zustandActionsV2.multiStoreOperation();
  });

  bench('Jotai', () => {
    jotaiActionsV2.multiStoreOperation();
  });

  bench('MobX', () => {
    mobxActionsV2.multiStoreOperation();
  });

  bench('Valtio', () => {
    valtioActionsV2.multiStoreOperation();
  });

  bench('Preact Signals', () => {
    preactActionsV2.multiStoreOperation();
  });

  bench('Solid Signals', () => {
    solidActionsV2.multiStoreOperation();
  });

  bench('Zen', () => {
    zenActionsV2.multiStoreOperation();
  });
});

describe('Memory Allocation', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.allocateLargeState();
  });

  bench('Zustand', () => {
    zustandActionsV2.allocateLargeState();
  });

  bench('Jotai', () => {
    jotaiActionsV2.allocateLargeState();
  });

  bench('MobX', () => {
    mobxActionsV2.allocateLargeState();
  });

  bench('Valtio', () => {
    valtioActionsV2.allocateLargeState();
  });

  bench('Preact Signals', () => {
    preactActionsV2.allocateLargeState();
  });

  bench('Solid Signals', () => {
    solidActionsV2.allocateLargeState();
  });

  bench('Zen', () => {
    zenActionsV2.allocateLargeState();
  });
});

// ============================================================================
// SPECIALIZED SCENARIOS
// ============================================================================

describe('Form State Management', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.updateFormField('email', 'test@example.com');
  });

  bench('Zustand', () => {
    zustandActionsV2.updateFormField('email', 'test@example.com');
  });

  bench('Jotai', () => {
    jotaiActionsV2.updateFormField('email', 'test@example.com');
  });

  bench('MobX', () => {
    mobxActionsV2.updateFormField('email', 'test@example.com');
  });

  bench('Valtio', () => {
    valtioActionsV2.updateFormField('email', 'test@example.com');
  });

  bench('Preact Signals', () => {
    preactActionsV2.updateFormField('email', 'test@example.com');
  });

  bench('Solid Signals', () => {
    solidActionsV2.updateFormField('email', 'test@example.com');
  });

  bench('Zen', () => {
    zenActionsV2.updateFormField('email', 'test@example.com');
  });
});

describe('Optimistic Update', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.optimisticUpdate();
  });

  bench('Zustand', () => {
    zustandActionsV2.optimisticUpdate();
  });

  bench('Jotai', () => {
    jotaiActionsV2.optimisticUpdate();
  });

  bench('MobX', () => {
    mobxActionsV2.optimisticUpdate();
  });

  bench('Valtio', () => {
    valtioActionsV2.optimisticUpdate();
  });

  bench('Preact Signals', () => {
    preactActionsV2.optimisticUpdate();
  });

  bench('Solid Signals', () => {
    solidActionsV2.optimisticUpdate();
  });

  bench('Zen', () => {
    zenActionsV2.optimisticUpdate();
  });
});

describe('Undo/Redo Operations', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.undo();
  });

  bench('Zustand', () => {
    zustandActionsV2.undo();
  });

  bench('Jotai', () => {
    jotaiActionsV2.undo();
  });

  bench('MobX', () => {
    mobxActionsV2.undo();
  });

  bench('Valtio', () => {
    valtioActionsV2.undo();
  });

  bench('Preact Signals', () => {
    preactActionsV2.undo();
  });

  bench('Solid Signals', () => {
    solidActionsV2.undo();
  });

  bench('Zen', () => {
    zenActionsV2.undo();
  });
});

describe('Batch State Operations', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.batchComplexState();
  });

  bench('Zustand', () => {
    zustandActionsV2.batchComplexState();
  });

  bench('Jotai', () => {
    jotaiActionsV2.batchComplexState();
  });

  bench('MobX', () => {
    mobxActionsV2.batchComplexState();
  });

  bench('Valtio', () => {
    valtioActionsV2.batchComplexState();
  });

  bench('Preact Signals', () => {
    preactActionsV2.batchComplexState();
  });

  bench('Solid Signals', () => {
    solidActionsV2.batchComplexState();
  });

  bench('Zen', () => {
    zenActionsV2.batchComplexState();
  });
});

// ============================================================================
// EDGE CASES AND ERROR HANDLING
// ============================================================================

describe('Null Value Handling', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.setNullValue();
  });

  bench('Zustand', () => {
    zustandActionsV2.setNullValue();
  });

  bench('Jotai', () => {
    jotaiActionsV2.setNullValue();
  });

  bench('MobX', () => {
    mobxActionsV2.setNullValue();
  });

  bench('Valtio', () => {
    valtioActionsV2.setNullValue();
  });

  bench('Preact Signals', () => {
    preactActionsV2.setNullValue();
  });

  bench('Solid Signals', () => {
    solidActionsV2.setNullValue();
  });

  bench('Zen', () => {
    zenActionsV2.setNullValue();
  });
});

describe('Undefined Value Handling', () => {
  bench('Redux Toolkit', () => {
    reduxActionsV2.setUndefinedValue();
  });

  bench('Zustand', () => {
    zustandActionsV2.setUndefinedValue();
  });

  bench('Jotai', () => {
    jotaiActionsV2.setUndefinedValue();
  });

  bench('MobX', () => {
    mobxActionsV2.setUndefinedValue();
  });

  bench('Valtio', () => {
    valtioActionsV2.setUndefinedValue();
  });

  bench('Preact Signals', () => {
    preactActionsV2.setUndefinedValue();
  });

  bench('Solid Signals', () => {
    solidActionsV2.setUndefinedValue();
  });

  bench('Zen', () => {
    zenActionsV2.setUndefinedValue();
  });
});

// ============================================================================
// ASYNC AND PROMISE-BASED TESTS
// ============================================================================

describe('Async State Loading', () => {
  bench('Redux Toolkit', async () => {
    await reduxActionsV2.loadAsyncData();
  });

  bench('Zustand', async () => {
    await zustandActionsV2.loadAsyncData();
  });

  bench('Jotai', async () => {
    await jotaiActionsV2.loadAsyncData();
  });

  bench('MobX', async () => {
    await mobxActionsV2.loadAsyncData();
  });

  bench('Valtio', async () => {
    await valtioActionsV2.loadAsyncData();
  });

  bench('Preact Signals', async () => {
    await preactActionsV2.loadAsyncData();
  });

  bench('Solid Signals', async () => {
    await solidActionsV2.loadAsyncData();
  });

  bench('Zen', async () => {
    await zenActionsV2.loadAsyncData();
  });
});

describe('Concurrent Async Operations', () => {
  bench('Redux Toolkit', async () => {
    await reduxActionsV2.concurrentAsync();
  });

  bench('Zustand', async () => {
    await zustandActionsV2.concurrentAsync();
  });

  bench('Jotai', async () => {
    await jotaiActionsV2.concurrentAsync();
  });

  bench('MobX', async () => {
    await mobxActionsV2.concurrentAsync();
  });

  bench('Valtio', async () => {
    await valtioActionsV2.concurrentAsync();
  });

  bench('Preact Signals', async () => {
    await preactActionsV2.concurrentAsync();
  });

  bench('Solid Signals', async () => {
    await solidActionsV2.concurrentAsync();
  });

  bench('Zen', async () => {
    await zenActionsV2.concurrentAsync();
  });
});