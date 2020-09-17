/*
* --------------------------------------
* @File       : var_let_const.js
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/15 19:41
* --------------------------------------
*/
// 块级作用域
/*
function func(flag: boolean): number {
    let a = 99
    if(flag){
        // b 作用在花括号之间
        var b = a + 1 // OK
        return b      // OK
    }
    return b          // 可以找到b
}
*/
function func2(flag, x) {
    if (flag) {
        // 这种可以，因为let x的作用域为大括号的范围内
        var x_1 = 100;
    }
}
var CAT_NAME = '蛋卷';
var CAT = {
    name: '蛋卷',
    age: 2
};
// 解构
// 数组解构
var arr = [1, 2];
var one = arr[0], two = arr[1];
// console.log(one, two)  // 1 2
var _a = [1, 2, 3, 4, 5], a = _a[0], b = _a.slice(1);
console.log(a);
console.log(b);
