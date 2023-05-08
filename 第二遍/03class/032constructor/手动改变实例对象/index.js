class Person {
  constructor() {
    return Object.create(null); // 允许手动改变实例对象
  }
}

const p2 = new Person();
const result = p2 instanceof Person
console.log('', result); // 实例对象与Person2类不一致

/**
 * 用途：用于创建不会被意外污染的对象
 */
