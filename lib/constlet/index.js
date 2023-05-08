"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var code = 200;
var name = 'zhangsan';
var age = 20;
// console.log('const window.code: ', window.code);
// console.log('let window.name: ', window.name);
// console.log('var window.age: ', window.age);

/** 注意在node环境中全局对象是global，在浏览器中全局对象是window */

/**
 * 全局声明时
 * var 定义的变量，自动成为全局对象window的属性
 * const定义的常量 let定义的变量，不能通过 `window.变量名` 访问
 */

{
  var _a;
  var A = 200;
}

/**
 * 块级作用域
 */

var a = 1;

/**
 * 暂时性死区
 * 块级作用域、函数作用域
 * let const有块级作用域，在块级作用域中，在声明let const同名变量之前，同名的变量无法获取。
 */

var t = 1;
function foo() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  console.log(t);
}

// foo(); // 报错

/**
 * 隐蔽的暂时性死区
 * 外部变量和形参处于此种关系时，出现暂时性死区
 */

var obj = {
  name: 'zhangsan',
  data: {
    time: 2023
  }
};

// 浅层冻结，冻结对象的第一层属性
Object.freeze(obj);
obj.name = 'lisi'; // 不报错，无效
obj.data.time = 2000;
console.log(obj);

/**
 * const
 * 引用数据类型时，常量所指的内存地址不改变，值可以改变
 * Obj.freeze() 浅层冻结，冻结第一层属性
 */

// 深层冻结
function deepFreeze1(obj) {
  Object.freeze(obj);
  var keys = Object.keys(obj);
  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    key = _keys[_i];
    if (_typeof(obj[key]) === 'object') {
      deepFreeze1(obj[key]);
    }
  }
  return obj;
}
function deepFreeze2(obj) {
  Object.freeze(obj);
  for (var _i2 = 0, _Object$values = Object.values(obj); _i2 < _Object$values.length; _i2++) {
    value = _Object$values[_i2];
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
      deepFreeze2(value);
    }
  }
  return obj;
}
var obj2 = {
  name: 'zhangsan',
  data: {
    time: 2023
  }
};
deepFreeze1(obj2);
obj2.name = 'lisi';
obj2.data = 123;
console.log(obj2);
var obj3 = {
  name: 'zhangsan',
  data: {
    time: 2023
  }
};
deepFreeze2(obj3);
obj3.name = 'lisi';
obj3.data = 123;
console.log(obj3);

/**
 * 注意Object.values 不包括继承的属性
 */

/**
 * for in 可以获取所有属性（继承的、不可枚举的、symbol类型的）
 * Obj.getOwnPropertyNames() // 获取除symbol类型的属性以外的所有属性，不包括继承的
 * Obj.getOWnPropertySymbols() // 获取symbol类型的属性，不包括继承的
 * 
 * obj.hasOwnProperty() // 确认对象是否有这个属性，不包括继承的属性
 */