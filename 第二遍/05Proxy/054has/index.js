/**
 * 前置知识
 * in运算符
 * xx in object
 * 判断xx是不是object的属性
 */
const obj = {
  name: 'zhangsan',
  age: 20,
  male: true
}

console.log('age' in obj);

const handler = {
  has(target, propKey) {
    console.log(`${propKey}属性，在${target}对象中。`);
    return propKey in target;
  }
}

const proxy = new Proxy(obj, handler);

console.log('name' in proxy);

/**
 * has
 * 拦截in运算符：查询是否对象的属性
 * 返回值：
 *  布尔
 */