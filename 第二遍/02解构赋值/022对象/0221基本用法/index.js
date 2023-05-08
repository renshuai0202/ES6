let obj = {
  name: 'zhangsan',
  age: 20,
  male: true
}
const { name, age: a, male } = obj;
console.log(name, a, male);

/**
 * 键名要一致
 * 可以对键名起别名，起了别名后，只能用别名
 */

const { name: n, ...rest } = obj;
console.log(n);
console.log(rest); // 对象

/**
 * 可以使用剩余运算符...rest
 * rest是一个对象
 */

/**
 * 可以指定默认值
 */