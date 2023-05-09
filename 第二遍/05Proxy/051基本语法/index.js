const person = {
  name: 'zhangsan',
  age: 18,
  male: true,
  say() {
    return 'hello'
  }
}

const handler = {};

const proxy = new Proxy(person, handler);
console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.name);
console.log(proxy.say());

/**
 * Proxy
 * 语法 const proxy = new Proxy(target, handler);
 *  参数target 是待代理的对象；
 *  参数handler 是一个对象，对象上有方法；
 *  返回值proxy是一个对象。
 */