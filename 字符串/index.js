const str = 'hello world!';

// 添加了Iterator接口
for(let character of str) {
  console.log(character);
}

// ES7 获取指定索引的字符
const character = str.at(0);
console.log(character);

const hasO = str.includes('o');
console.log(hasO);

const endWithH = str.endsWith('ld!');
console.log(endWithH);

const startsWith = str.startsWith('he');
console.log(startsWith);

const repeat3 = str.repeat(3);
console.log(repeat3);

const padStartX = str.padStart(20, 'x');
const padEndX = str.padEnd(20, 'x');
console.log(padStartX, padEndX);