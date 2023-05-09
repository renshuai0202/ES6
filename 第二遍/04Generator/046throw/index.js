function* generator() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch(err) {
    console.log('err: ', err);
    return err.message;
  }

}

const gen = generator();
const res1 = gen.next();
console.log(res1); // { value: 1, done: false }

const res2 = gen.throw(new Error('出错了'));
console.log(res2); // { value: '出错了', done: true }
