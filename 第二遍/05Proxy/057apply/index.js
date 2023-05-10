let sum = (...args) => {
  let num = 0
  args.forEach(item => {
    num += item
  })
  return num
}

sum = new Proxy(sum, {
  apply(target, ctx, args) {
    return target(...args) * 2
  }
})

console.log(sum(1, 2))                  // 6
console.log(sum.call(null, 1, 2, 3))    // 12
console.log(sum.apply(null, [1, 2, 3])) // 12

console.log('------------------------------------------------');

const proxyObj = new Proxy(function() {}, {
  apply(target, thisArg, argList) {
    console.log(`Calling function with arguments: ${argList.join(', ')}`);
    return target.apply(thisArg, argList);
  }
});

function add(a, b) {
  return a + b;
}

const proxyAdd = new Proxy(add, {
  apply(target, thisArg, argList) {
    console.log(`Calling add function with arguments: ${argList.join(', ')}`);
    return target.apply(thisArg, argList);
  }
});

console.log(proxyObj(1, 2, 3)); // Calling function with arguments: 1, 2, 3   undefined
console.log(proxyAdd.call(null, 1, 2)); // Calling add function with arguments: 1, 2   3


/**
 * apply(target, ctx, args)
 *  target是函数
 *  ctx是this
 *  args是形参
 * 拦截proxy() proxy.call(this, ...args)对proxy的函数调用
 */

