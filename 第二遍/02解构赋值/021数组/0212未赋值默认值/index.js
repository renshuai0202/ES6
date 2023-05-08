let [b1, b2] = [];
let [c1, c2 = 2] = [1]
console.log(b1, b2);
console.log(c1, c2);

/**
 * 没有被赋值，是undefined
 * 可以进行默认赋值
 */