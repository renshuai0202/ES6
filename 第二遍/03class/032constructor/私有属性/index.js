class Person {
  constructor(name, age) {
    let _name = name;
    this.getName = function() {
      return _name;
    }

    this.age = age;
  }
}

const p = new Person('zhangsan', 20);
console.log(p.getName());
console.log(p.age);

/**
 * 实现私有属性
 * 在js中，在constructor中，使用闭包模拟私有属性
 * 在ts中，使用private修饰符，ts 🐮🍺
 */