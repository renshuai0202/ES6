/**
 * next
 *    每调用一次next方法，会从当前暂停的位置，继续执行，直到遇到yield、return或者执行完生成器
 * 返回值是一个对象 { value: xxx, done: xxx }
 *    value表示当前yield的返回值
 *    done表示当前生成器是否执行完成
 */