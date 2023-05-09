function* generator() {
  let x = yield 1;
  console.log('x = ', x);
  let y = yield 2;
  console.log('y = ', y);
  return x + y;
}

const gen = generator();

const r1 = gen.next();
console.log(r1); // { value: 1, done: false }

const r2 = gen.next(r1.value);
console.log(r2); // { value: 2, done: false }

const r3 = gen.next(r2.value);
console.log(r3); // { value: 3, done: true }

/**
 * yield
 * yield 紧跟的语句可以是变量，字面量，函数调用，算数表达式
 * yield 返回一个值
 *    在调用next方法时传入参数，这个参数会成为上一次yield的结果
 */