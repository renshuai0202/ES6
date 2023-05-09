function* generator2() {
  yield 2;
  yield 3;
}

function* generator1() {
  yield 1;
  yield* generator2();
  yield 4;
  yield 5; 
}

const gen = generator1();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: false }


console.log('----------------------');


function* generator3() {
  yield 1;
  yield* [2, 3];
  yield 4;
  yield 5; 
}

const gen3 = generator3();

console.log(gen3.next()); // { value: 1, done: false }
console.log(gen3.next()); // { value: 2, done: false }
console.log(gen3.next()); // { value: 3, done: false }
console.log(gen3.next()); // { value: 4, done: false }
console.log(gen3.next()); // { value: 5, done: false }
console.log(gen3.next()); // { value: undefined, done: false }


/**
 * yield*
 * 将值的生成过程委托给另一个生成器/可迭代对象
 */