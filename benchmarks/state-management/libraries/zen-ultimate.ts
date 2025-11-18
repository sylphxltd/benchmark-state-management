/**
 * Zen Ultimate (v3.49.0) Implementation
 * Uses the ultimate optimized version combining best from all versions
 */

import { zen, computed, batch, subscribe, effect } from '../zen-ultimate.js';
import { category, tests } from '../index';

const library = category.registerLibrary({
  id: 'zen-ultimate',
  displayName: 'Zen Ultimate',
  packageName: '@sylphx/zen-ultimate',
  githubUrl: 'https://github.com/sylphx/zen',
  description: 'Ultimate optimized version - best from all 56 versions',
  setup: {
    createStore: () => ({}),
  },
});

// ============================================================================
// State Setup
// ============================================================================

const counter = zen(0);
const nestedObject = zen({
  level1: {
    level2: {
      level3: {
        value: 0,
      },
    },
  },
});
const itemsArray = zen<Array<{ id: number; name: string; value: number }>>([]);
const doubledCounter = computed(() => counter.value * 2);
const formState = zen({
  username: '',
  email: '',
  age: 0,
  profile: {
    bio: '',
    interests: [] as string[],
  },
});

// ============================================================================
// BASIC READ TESTS
// ============================================================================

library.implement(tests.singleRead, () => {
  return counter.value;
});

library.implement(tests.moderateRead, () => {
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += counter.value;
  }
  return sum;
});

library.implement(tests.highFrequencyRead, () => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum += counter.value;
  }
  return sum;
});

// ============================================================================
// BASIC WRITE TESTS
// ============================================================================

library.implement(tests.singleWrite, {
  beforeEach: () => {
    counter.value = 0;
  },
  fn: () => {
    counter.value++;
  },
});

library.implement(tests.batchWrite, {
  beforeEach: () => {
    counter.value = 0;
  },
  fn: () => {
    batch(() => {
      for (let i = 0; i < 10; i++) {
        counter.value++;
      }
    });
  },
});

library.implement(tests.burstWrite, {
  beforeEach: () => {
    counter.value = 0;
  },
  fn: () => {
    batch(() => {
      for (let i = 0; i < 100; i++) {
        counter.value++;
      }
    });
  },
});

library.implement(tests.heavyWrite, {
  beforeEach: () => {
    counter.value = 0;
  },
  fn: () => {
    batch(() => {
      for (let i = 0; i < 1000; i++) {
        counter.value++;
      }
    });
  },
});

// ============================================================================
// ADVANCED OPERATIONS
// ============================================================================

library.implement(tests.nestedUpdate, {
  beforeEach: () => {
    nestedObject.value = {
      level1: {
        level2: {
          level3: {
            value: 0,
          },
        },
      },
    };
  },
  fn: () => {
    nestedObject.value = {
      ...nestedObject.value,
      level1: {
        ...nestedObject.value.level1,
        level2: {
          ...nestedObject.value.level1.level2,
          level3: {
            value: nestedObject.value.level1.level2.level3.value + 1,
          },
        },
      },
    };
  },
});

library.implement(tests.arrayPush, {
  beforeEach: () => {
    itemsArray.value = [];
  },
  fn: () => {
    itemsArray.value = [
      ...itemsArray.value,
      { id: itemsArray.value.length, name: `item-${itemsArray.value.length}`, value: Math.random() },
    ];
  },
});

library.implement(tests.arrayUpdate, {
  beforeEach: () => {
    itemsArray.value = [{ id: 0, name: 'item-0', value: 0 }];
  },
  fn: () => {
    if (itemsArray.value.length > 0) {
      const index = Math.floor(itemsArray.value.length / 2);
      itemsArray.value = itemsArray.value.map((item, i) =>
        i === index ? { ...item, value: item.value + 1 } : item
      );
    }
  },
});

library.implement(tests.computedValue, () => {
  return doubledCounter.value;
});

// ============================================================================
// ASYNC OPERATIONS
// ============================================================================

library.implement(tests.concurrentUpdates, {
  beforeEach: () => {
    counter.value = 0;
  },
  fn: async () => {
    const promises = Array.from({ length: 50 }, (_, i) =>
      Promise.resolve().then(() => {
        counter.value = i;
      })
    );
    await Promise.all(promises);
  },
});

// ============================================================================
// REAL-WORLD SCENARIOS
// ============================================================================

library.implement(tests.simpleForm, {
  beforeEach: () => {
    formState.value = {
      username: '',
      email: '',
      age: 0,
      profile: {
        bio: '',
        interests: [],
      },
    };
  },
  fn: () => {
    formState.value = {
      ...formState.value,
      username: 'user123',
      email: 'user@example.com',
      age: 25,
    };
  },
});

library.implement(tests.complexForm, {
  beforeEach: () => {
    formState.value = {
      username: '',
      email: '',
      age: 0,
      profile: {
        bio: '',
        interests: [],
      },
    };
  },
  fn: () => {
    formState.value = {
      username: 'complexUser',
      email: 'complex@example.com',
      age: 30,
      profile: {
        bio: 'A detailed bio text',
        interests: ['coding', 'music', 'gaming'],
      },
    };
  },
});

library.implement(tests.cacheInvalidation, {
  beforeEach: () => {
    counter.value = 0;
  },
  fn: () => {
    counter.value++;
    return doubledCounter.value;
  },
});

library.implement(tests.memoryUsage, () => {
  const subscriptions: Array<() => void> = [];

  for (let i = 0; i < 100; i++) {
    const unsubscribe = subscribe(counter, () => {});
    subscriptions.push(unsubscribe);
  }

  subscriptions.forEach((unsub) => unsub());
});

// ============================================================================
// PERFORMANCE STRESS TESTS
// ============================================================================

library.implement(tests.extremeRead, () => {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += counter.value;
  }
  return sum;
});

library.implement(tests.extremeWrite, {
  beforeEach: () => {
    counter.value = 0;
  },
  fn: () => {
    batch(() => {
      for (let i = 0; i < 10000; i++) {
        counter.value++;
      }
    });
  },
});

library.implement(tests.largeArray, {
  beforeEach: () => {
    itemsArray.value = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `item-${i}`,
      value: i,
    }));
  },
  fn: () => {
    const middleIndex = 500;
    itemsArray.value = itemsArray.value.map((item, i) =>
      i === middleIndex ? { ...item, value: item.value + 1 } : item
    );
  },
});

// ============================================================================
// REACTIVITY PATTERNS
// ============================================================================

const diamondA = zen(1);
const diamondB = computed(() => diamondA.value * 2);
const diamondC = computed(() => diamondA.value * 3);
const diamondD = computed(() => diamondB.value + diamondC.value);

library.implement(tests.diamondPattern, {
  beforeEach: () => {
    diamondA.value = 1;
  },
  fn: () => {
    diamondA.value++;
    return diamondD.value;
  },
});

const deepDiamondA = zen(1);
const deepDiamondB1 = computed(() => deepDiamondA.value * 2);
const deepDiamondB2 = computed(() => deepDiamondA.value * 3);
const deepDiamondC1 = computed(() => deepDiamondB1.value + deepDiamondB2.value);
const deepDiamondC2 = computed(() => deepDiamondB1.value - deepDiamondB2.value);
const deepDiamondD1 = computed(() => deepDiamondC1.value * deepDiamondC2.value);
const deepDiamondD2 = computed(() => deepDiamondC1.value + deepDiamondC2.value);
const deepDiamondE = computed(() => deepDiamondD1.value + deepDiamondD2.value);

library.implement(tests.deepDiamondPattern, {
  beforeEach: () => {
    deepDiamondA.value = 1;
  },
  fn: () => {
    deepDiamondA.value++;
    return deepDiamondE.value;
  },
});

const chainSignals: ReturnType<typeof zen>[] = [zen(1)];
const chainComputeds: ReturnType<typeof computed>[] = [];
for (let i = 1; i <= 10; i++) {
  const prevSignal = i === 1 ? chainSignals[0] : chainComputeds[i - 2];
  chainComputeds.push(computed(() => prevSignal.value + 1));
}

library.implement(tests.deepChain, {
  beforeEach: () => {
    chainSignals[0].value = 1;
  },
  fn: () => {
    chainSignals[0].value++;
    return chainComputeds[9].value;
  },
});

const veryDeepChainSignal = zen(1);
const veryDeepChainComputeds: ReturnType<typeof computed>[] = [];
let prevComputed: any = veryDeepChainSignal;
for (let i = 0; i < 100; i++) {
  const current = prevComputed;
  veryDeepChainComputeds.push(computed(() => current.value + 1));
  prevComputed = veryDeepChainComputeds[i];
}

library.implement(tests.veryDeepChain, {
  beforeEach: () => {
    veryDeepChainSignal.value = 1;
  },
  fn: () => {
    veryDeepChainSignal.value++;
    return veryDeepChainComputeds[99].value;
  },
});

const fanoutSource = zen(1);
const fanoutComputeds = Array.from({ length: 100 }, (_, i) =>
  computed(() => fanoutSource.value * (i + 1))
);

library.implement(tests.wideFanout, {
  beforeEach: () => {
    fanoutSource.value = 1;
  },
  fn: () => {
    fanoutSource.value++;
    let sum = 0;
    for (const comp of fanoutComputeds) {
      sum += comp.value;
    }
    return sum;
  },
});

const massiveFanoutSource = zen(1);
const massiveFanoutComputeds = Array.from({ length: 1000 }, (_, i) =>
  computed(() => massiveFanoutSource.value * (i + 1))
);

library.implement(tests.massiveFanout, {
  beforeEach: () => {
    massiveFanoutSource.value = 1;
  },
  fn: () => {
    massiveFanoutSource.value++;
    let sum = 0;
    for (const comp of massiveFanoutComputeds) {
      sum += comp.value;
    }
    return sum;
  },
});

const dynamicCondition = zen(true);
const dynamicA = zen(1);
const dynamicB = zen(2);
const dynamicComputed = computed(() => {
  if (dynamicCondition.value) {
    return dynamicA.value * 2;
  } else {
    return dynamicB.value * 3;
  }
});

library.implement(tests.dynamicDependencies, {
  beforeEach: () => {
    dynamicCondition.value = true;
    dynamicA.value = 1;
    dynamicB.value = 2;
  },
  fn: () => {
    dynamicCondition.value = !dynamicCondition.value;
    dynamicA.value++;
    dynamicB.value++;
    return dynamicComputed.value;
  },
});

const repeatedDiamonds: any[] = [];
let prevDiamond = zen(1);

for (let i = 0; i < 5; i++) {
  const source = prevDiamond;
  const b = computed(() => source.value * 2);
  const c = computed(() => source.value * 3);
  const d = computed(() => b.value + c.value);
  repeatedDiamonds.push({ source, b, c, d });
  prevDiamond = zen(d.value);
}

library.implement(tests.repeatedDiamonds, {
  beforeEach: () => {
    repeatedDiamonds[0].source.value = 1;
  },
  fn: () => {
    repeatedDiamonds[0].source.value++;
    return repeatedDiamonds[4].d.value;
  },
});
