立即执行
// call(thisArg, arg1, arg2, ...);
// apply(thisArg, [arg1, arg2, ...]);

返回函数
// bind(thisArg, arg1, arg2, ...)()
// bind(thisArg)(arg1, arg2, ...)

const person = {
  name: '小明',
  sayHello: function(message) {
  console.log(`${this.name} 说：${message}`);
}
};

const person2 = {
name: '小红'
};

const bindSayHello = person.sayHello.bind(person2); // 返回一个函数
bindSayHello('你好');

person.sayHello.bind(person2, 'hello')();