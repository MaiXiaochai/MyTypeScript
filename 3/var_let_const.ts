/*
* --------------------------------------
* @File       : var_let_const.ts
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


function func2(flag: boolean, x: number): void {
    if (flag) {
        // 这种可以，因为let x的作用域为大括号的范围内
        let x = 100
    }
}

const CAT_NAME = '蛋卷'
const CAT = {
    name: '蛋卷',
    age: 2
}

// 解构
// 数组解构
let arr: number[] = [1, 2]
let [one, two] = arr
// console.log(one, two)  // 1 2

let [a, ...b] = [1, 2, 3, 4, 5]
// console.log(a) // 1
// console.log(b) // [ 2, 3, 4, 5 ]


// 对象解构
enum Gender {
    male,
    female
}

interface Person {
    theName: string,
    age: number,
    gender: Gender
}

let person: Person = {
    theName: 'maixiaochai',
    age: 999,
    gender: Gender.female
}

let {theName, age, gender} = person
// console.log(// @ts-ignore, age, gender)  // maixiaochai 999 0













