"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var arr = [1, 2];

// 将数组的元素赋值给a, b变量
var a = arr[0],
  b = arr[1];
console.log(a, b); // 1, 2

// 交换数组的两个位置的值
// [arr[1], arr[0]] = arr; // 错误写法 [1, 1]
var _ref = [arr[0], arr[1]];
arr[1] = _ref[0];
arr[0] = _ref[1];
console.log(arr); // [2, 1]

// 字符串也可以被结构
var _all = 'all',
  _all2 = _slicedToArray(_all, 3),
  str1 = _all2[0],
  str2 = _all2[1],
  str3 = _all2[2];
console.log(str1, str2, str3); // a l l

var _Set = new Set([1, 2, 3]),
  _Set2 = _slicedToArray(_Set, 3),
  one = _Set2[0],
  two = _Set2[1],
  three = _Set2[2];
console.log(one, two, three); // 1 2 3

var obj = {
  name: 'zhangsan',
  age: 20
};
for (var _i2 = 0, _Object$entries = Object.entries(obj); _i2 < _Object$entries.length; _i2++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
    key = _Object$entries$_i[0],
    value = _Object$entries$_i[1];
  console.log(key, value);
}

/**
 * 任意可迭代对象
 * 不仅仅是数组、字符串、Set、对象
 */

var _ref2 = [1, 2, 3],
  a1 = _ref2[0],
  a3 = _ref2[2];
console.log(a1, a3);

/**
 * 跳过某一个，不进行赋值
 * 写逗号占位
 */

var _ref3 = [],
  b1 = _ref3[0],
  b2 = _ref3[1];
var _ref4 = [1],
  c1 = _ref4[0],
  _ref4$ = _ref4[1],
  c2 = _ref4$ === void 0 ? 2 : _ref4$;
console.log(b1, b2);
console.log(c1, c2);