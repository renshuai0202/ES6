/** class实现静态方法，使用static修饰符 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static say() {
    return 'hello';
  }
}

const s1 = Person.say();
console.log(s1);



/** 构造函数实现静态方法，直接在构造函数上添加方法 */
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.say = function() {
  return 'hi';
}

const s2 = Animal.say();
console.log(s2);