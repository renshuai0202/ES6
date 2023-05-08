class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    return 'hello!';
  }
}

/**
 * prototype
 * 构造函数.prototype
 */

Person.prototype.eat = function(food) {
  return this.name + ' like ' + food;
}

/**
 * __proto__
 * 实例对象.__proto__
 */

const p1 = new Person('zhangsan', 20);
const p2 = new Person('lisi', 25);

p1.__proto__.sing = function(song) {
  return this.name + ' is singing ' + song;
}

const s1 = p1.sing('spring');
const s2 = p2.sing('spring');

const e1 = p1.eat('apple');
const e2 = p2.eat('apple');

console.log(s1, s2);
console.log(e1, e2);