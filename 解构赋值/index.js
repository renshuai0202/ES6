let a = 1, b = 2, c = 3;

let [x, y, z] = [1, 2, 3];

let arr = [];
[arr[0], arr[1], arr[2]] = [1, 2, 3];

arr[5] = 1;
arr[10] = 2;
[arr[5], arr[10]] = [arr[10], arr[5]]
console.log(a, b, c, x, y, z, arr[0], arr[1], arr[2], arr[5], arr[10]);

const obj1 = {
  name: 'zhangsan',
  age: 18,
  male: true
}

const {name: name1, age, male} = obj1;
console.log(name1, age, male);

let [j, k = 0] = [1];
console.log(j, k);

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
console.log(map);
for(let [key, value] of map) {
  console.log(key, value);
}
