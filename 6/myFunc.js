/*
* --------------------------------------
* @File       : myFunc.ts
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/18 14:43
* --------------------------------------
*/
// 函数基本示例
/*function point(x: number, y: number) {
    return `(${x}, ${y})`
}

// 普通匿名函数
let point1 = function (x: number, y: number) {
    return `(${x}, ${y})`
}*/
// 使用外部变量
/*let num: number = 100

function mySum(num1: number, num2: number) {
    return num + num1 + num2
}

console.log(mySum(1, 2));*/
// 剩余参数
function myMax(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var i = 0; i < rest.length; i++) {
        result += result[i];
    }
    return result;
}
