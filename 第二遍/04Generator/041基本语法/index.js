function * generator() {
  console.log('start');
  yield 1;
  console.log('done 1');
  yield 2;
  console.log('done 2');
  yield 3;
  console.log('done 3');
  console.log('end');
}

const gen = generator();
const res1 = gen.next(); // { value: 1, done: false }
console.log(res1);

const res2 = gen.next(); // { value: 2, done: false }
console.log(res2);

const res3 = gen.next(); // { value: 3, done: false }
console.log(res3);

const res4 = gen.next(); // { value: undefined, done: true }
console.log(res4);

/**
 * 生成器Generator
 * 是一个函数
 * 可以控制函数的执行过程，有暂停和恢复功能
 */