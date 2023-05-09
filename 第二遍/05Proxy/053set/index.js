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
console.log(proxy.name);

proxy.name = 'lisi'


/**
 * set(target, propKey, propVal, proxyInstance)
 *  target：目标对象
 *  propKey：属性名
 *  propVal：属性值
 *  proxyInstance 实例本身（可选）：严格地说，是操作行为所针对的对象
 */
