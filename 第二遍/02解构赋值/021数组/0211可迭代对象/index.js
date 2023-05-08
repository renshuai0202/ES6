let arr = [1, 2];

// 将数组的元素赋值给a, b变量
let [a, b] = arr;
console.log(a, b); // 1, 2

// 交换数组的两个位置的值
// [arr[1], arr[0]] = arr; // 错误写法 [1, 1]
[arr[1], arr[0]] = [arr[0], arr[1]];
console.log(arr); // [2, 1]

// 字符串也可以被结构
let [str1, str2, str3] = 'all';
console.log(str1, str2, str3); // a l l

let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three); // 1 2 3

const obj = {
  name: 'zhangsan',
  age: 20
}

for(let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

/**
 * 任意可迭代对象
 * 不仅仅是数组、字符串、Set、对象
 */
