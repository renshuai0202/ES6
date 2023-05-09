const person = {
  name: 'zhangsan',
  age: 18,
  male: true,
  say() {
    return 'hello'
  }
}

const handler = {
  // 拦截读取操作，如果无此属性，则返回'No such property!'，如果有此属性，则返回属性值
  get(target, propKey, proxyInstance) {
    if(propKey in target) {
      // return target[propKey]; // 这也写，也能实现，但是书上按照下面的写法，待研究
      return Reflect.get(target, propKey, proxyInstance);
    } else {
      return 'No such property!';
    }
  }
};

const proxy = new Proxy(person, handler);

console.log(proxy.name);
console.log(proxy.say());
console.log(proxy.a);
console.log('-----------------');
console.log(proxy.name);
console.log(proxy.say());
console.log(person.a);

/**
 * 拦截对象属性的读取
 * get(target, propKey, proxyInstance)
 *  参数 target 是原对象
 *  参数 propKey 是属性名
 *  参数 proxyInstance 是Proxy实例或继承了Proxy实例的对象（可选）
 */
