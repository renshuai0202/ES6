const person = {
  name: 'zhangsan',
  age: 18,
  male: true
};

const handler = {
  get: function (target, property, receiver) {
    console.log(target, property);
    if(property === 'age') {
      return 20;
    }
    return target[property]
  },
  set: (target, property, newValue) => {
    if(property === 'male') {
      throw new RangeError('The property of male can not change!');
    }
    target[property] = newValue;
  }
}

const proxy =new Proxy(person, handler);
proxy.name = 'lisi';
proxy.male = false;
console.log(proxy.name, proxy.age);

