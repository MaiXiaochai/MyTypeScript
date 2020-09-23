/*
* --------------------------------------
* @File       : myGeneric.ts
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/23 11:18
* --------------------------------------
*/

// 泛型变量
/*function getNumber<T>(num: T[]): T[] {
    console.log(num);
    return num
}


getNumber([1, 2])*/


// 泛型类
/*
class Add<T> {
    zeroValue: T
    add: (x: T, y:T) => T
}


// number类型
let a = new Add<number>()
a.zeroValue = 100
a.add(10, 100)      // 100为number类型，类型正确
a.add(10, '100')    // 100为string类型，类型错误
*/

// 泛型约束
// 创建一个包含属性的接口
/*interface lengthWise {
    length: number
}

// 这时，传入的值必须包含length属性, 比如string、Array等类型的值
function getNumber<T extends lengthWise>(num: T): T {
    console.log(num.length);
    return num
}*/

// 在泛型中使用类型参数
// K 继承了T里的属性名
/*
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let person = {
    name: 'maixiaochai',
    age: 18,
    gender: 'female'
}

getProperty(person, 'name')     // person中有 name 属性，正确
getProperty(person, 'age')      // person中有 age 属性，正确
getProperty(person, 'action')   // // person中没有 action 属性，错误
*/



