/*
* --------------------------------------
* @File       : MyInterface.ts
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/15 20:45
* --------------------------------------
*/

/*// 基本用法
interface Person {
    pName: string,
    pAge: number,
    pJob: string
}

let person: Person = {
    pName: 'maixiaochai',
    pAge: 999,
    pJob: '炸油条'
}

function show(person) {
    console.log(`这位是${person.pName}`)
}*/


interface Circle {
    color: string
    area: number
}

// 可选属性
interface CircleConfig {
    color?: string,
    radius: number
}

function createCircle(config: CircleConfig): Circle {
    let newCircle = {
        color: 'blue',
        area: 100
    }
    if (config.color) {
        newCircle.color = config.color
    }
    if (config.radius) {
        newCircle.area = Math.PI * config.radius * config.radius
    }
    return newCircle
}

let circleOption = {radius: 100, other: 11}
let myCircle = createCircle(circleOption)

/*// 只读属性
interface FullName {
    readonly firstName: string,
    readonly lastName: string
}


let pName: FullName = {
    firstName: 'mai',
    lastName: 'xiaochai'
}*/

// 只读数组
let arr: number[] = [1, 2, 3]
let ra: ReadonlyArray<number> = arr


// 接口约束函数类型
interface CompareFunc {
    (first: number, last: number)
}

// 约束函数 func, 在func多定义参数、参数类型不对或返回值类型不对的时候，
// 会报错
function func(first: number, last: number): boolean {
    return first > last
}

// 可以简化函数的定义，比如first、last可以换成a、b
function func2(a: number, b: number): boolean {
    return a > b
}

// 简化函数定义
let myFunc: CompareFunc = function (a, b) {
    return a < b
}


// 接口约束-可索引类型（了解）
interface StrArr {
    [index: number]: string
}

let myArr: StrArr = ['Hello', 'TypeScript']
let out0: string = myArr[0] // Hello
let out2: string = myArr[2] // undefined


// 接口约束类类型，只能约束类公有的，不能约束私有的
interface ClockInterface {
    // 属性约束
    currentTime: Date,

    // 方法约束
    setTime(d: Date)
}

// implements （vt. 执行，履行；贯彻，落实；使生效）
// 这里指前者遵循后者的约束
class Clock implements ClockInterface {
    currentTime: Date

    constructor(h: number, m: number) {
        console.log(h, m)
    }

    setTime(d: Date) {
        console.log(d)
    }
}

/*// 接口-类的静态部分和实例部分
interface ClockConstructor {
    new(h: number, m: number)
}

class ClockLocal implements ClockConstructor {
    constructor(h: number, m: number) {
    }
}*/


// 接口的继承
interface Animal {
    // 品种
    breed: string
}

// 哺乳动物
interface Mammal {
    leg: number
}

// extends 继承的关键词
interface Cat extends Animal, Mammal {
    // 颜色
    color: string
}

let cat: Cat = {
    breed: 'nothing',
    color: 'red',
    leg: 4
}

