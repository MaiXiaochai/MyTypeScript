/*
* --------------------------------------
* @File       : DataType.js
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/15 14:14
* --------------------------------------
*/
// string
var dogName = '旺柴';
var dogAge = 2;
var dogIntro = "\u6211\u6709\u4E00\u53EA" + dogAge + "\u5C81\u7684\u72D7\uFF0C\u53EB" + dogName;
// console.log(dogIntro)
// number
var num1 = 16;
//二进制
var num2 = 16;
// 八进制0o开头
var num8 = 16;
// 0x 表示16进制
var num16 = 0x10;
// console.log(num1, num2, num8, num16)
// 布尔类型
var flag = true;
// console.log(flag);
// 数组
var numArr = [1, 2, 3];
var strArr = ['mai', 'xiao', 'chai'];
var boolArr = [true, false];
// 元组
var myTuple = [1, 'maixiaochai', true];
// 枚举
var Gender;
(function (Gender) {
    Gender["male"] = "maixiaochai";
    Gender[Gender["female"] = 8] = "female";
})(Gender || (Gender = {}));
var gender1 = Gender.female;
var gender2 = Gender.male;
// console.log(gender1, gender2)
// 输出: 8 maixiaochai
// any
var myArr = [1, 'maixiaochai', true];
// void
function myLog() {
    console.log('Hello, world!');
}
// null 和 undefined
var str1 = undefined;
var str2 = null;
var str3 = null;
var str4 = undefined;
// never 必须存在无法到达的终点
// 业务层很少用到，更多的是用在底层的类库里面
// 抛出异常的函数
function error(msg) {
    throw new Error(msg);
}
// error('发生未知错误')
/*// object
declare function func(o: object): void;

func({name: 'maixiaochai'}) // OK
func([1, 2, 3]) // OK
func(null) // OK
func(undefined) // OK*/
// 类型断言
var obj = 'maixiaochai';
var strD = obj.substr(0, 3);
console.log(strD);
