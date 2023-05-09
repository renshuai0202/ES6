const person = {
  name: 'zhangsan'
}

const handler = {
  set(target, propKey, propVal, proxyInstance) {
    console.log(`对象 ${target} 的属性 ${propKey} 值是 ${propVal}`);
    Reflect.set(target, propKey, propVal, proxyInstance);
  }
};

const proxy = new Proxy(person, handler);

proxy.name = 'lisi'
console.log(proxy.name); // lisi

person.name = 'wangwu';
console.log(person.name); // wangwu
console.log(proxy.name); // wangwu

/**
 * set(target, propKey, propVal, proxyInstance)
 *  target：目标对象
 *  propKey：属性名
 *  propVal：属性值
 *  proxyInstance 实例本身（可选）：严格地说，是操作行为所针对的对象
 * 
 *  经过proxy修改属性，会触发set
 *  直接在person修改属性，不会触发set
 */
