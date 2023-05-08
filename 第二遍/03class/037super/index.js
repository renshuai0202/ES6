class Father {
  test() {
    return 0;
  }
  static test1() {
    return 1;
  }
}
class Child extends Father {
  constructor(){
    super();
    // 调用父类普通方法
    console.log(super.test()); // 0
  }
  static test3() {
    // 调用父类静态方法
    return super.test1() + 2;
  }
}

Child.test3(); // 3

/**
 * 在静态方法中，super指向父类原型
 * 在普通方法中，super指向父类的实例
 */

/**
 * super作为函数使用时，只能在子类constructor中使用
 * super作为对象时，可以在子类的任何地方以super.xx使用，调用父类的方法和属性
 */