class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    return 'hello';
  }
}

const p = new Person('zhangsan', 20);

// new 关键字做了什么?

// 1. 创建一个空对象p
// let p = {};

// 2. 将对象p的原型指向构造函数Person的原型
// p.__proto__ = Person.prototype;

// 3. 继承构造函数Person的属性和方法
// Person.call(p, 'zhangsan', 20);

// 4. 返回对象p
// return p;