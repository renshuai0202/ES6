class Square {
  constructor(width, height) {
    this._width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  // get height() {
  //   return this.height;
  // }

  // set height(value) {
  //   this.height = value;
  // }

  // 添加了属性area，且设置为只读状态
  get area() {
    return this.height * this._width;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

}

const s = new Square(10, 20, '矩形');
console.log(s.area);
console.log(s.name);

/**
 * getter setter
 * 用途：设置只读属性，添加属性
 */

/**
 * get xx属性，constructor的this.xx属性
 * 不能相同，否则会进入死循环
 * 错误实例属性height
 */

/**
 * 约定俗成：
 * 内部属性、私有属性以_开头
 * 作用：提示开发者，不希望调用/修改此属性
 * 案例：_width
 */

/**
 * 在constructor内部手动设置 let address 无意义
 * 在constructor添加属性，需要使用this.xx属性
 */