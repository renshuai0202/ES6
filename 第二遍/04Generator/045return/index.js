function* generator() {
  yield 1;
  yield 2;
}

const gen = generator();
const res1 = gen.next(); // { value: 1, done: false }
const res2 = gen.return(100);
console.log(res1, res2); // { value: 100, done: true }

/**
 * return()
 * 用于提前终止生成器，next传入的参数，作为生成器的返回值
 */