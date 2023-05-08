const obj = {
  name: 'zhangsan',
  age: 20,
  male: true,
  data: {
    qq: 1,
    ww: true
  }
}

const {
  name,
  age,
  male,
  data: {
    qq,
    ww
  }
} = obj;

// console.log(data); // 报错
console.log(name, age, male, qq, ww);

const obj2 = {
  a: 1,
  b: 2,
  c: {
    a: 3,
    d: 4
  }
}
let { a: a1, b, c: { a: a2, d } } = obj2;
console.log(a1, b, a2, d);

/**
 * 嵌套对象出现同名的属性时，需要使用属性别名
 */