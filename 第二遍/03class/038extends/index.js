/** 在ES6之前，通过call bind apply实现继承 */
function Person(name, age, male) {
  this.name = name;
  this.age = age;
  this.male = male;

  this.say = function(word) {
    return `${this.name} say ${word}`;
  }
}

function Student(name, age, male, school) {
  Person.call(this, name, age, male);
  this.school = school;

  this.learn = function(knowledge) {
    return `${this.name} studies ${knowledge} in ${this.school}`;
  }
}

const s = new Student('lisi', 20, false, '阳光小学');
console.log(s);
console.log(s.learn('Math'));