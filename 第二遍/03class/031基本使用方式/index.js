/** 在ES6之前，使用构造函数 */
function Person(name, age, male) {
  this.name = name;
  this.age = age;
  this.male = male;

  this.eat = function(food) {
    return 'eat ' + food;
  }
}

const p = new Person('zhangsan', 20, true);
console.log(p.name, p.age, p.male);
console.log(p.eat('apple'));



function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.sleep = function() {
  return 'sleeping';
}

const a = new Animal('dog', 20);
console.log(a.name, a.age);
console.log(a.sleep());


/** ES6使用类 */
class School {
  constructor(address) {
    this.address = address;
  }

  log() {
    return 'address: ' + this.address;
  }
}

const s = new School('和平路西大街');
console.log(s.address);
console.log(s.log());