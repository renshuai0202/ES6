const str = 'hello';

const [s1, s2, ...rest] = str;

console.log(s1);
console.log(s2);
console.log(rest); // string[]

/**
 * 字符串的剩余数据是字符串类型的数组
 */