/*
* --------------------------------------
* @File       : DataType.ts
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/15 14:14
* --------------------------------------
*/

// string
let dogName: string = '旺柴'
let dogAge: number = 2

let dogIntro: string = `我有一只${dogAge}岁的狗，叫${dogName}`
// console.log(dogIntro)


// number
let num1: number = 16
//二进制
let num2: number = 0b10000
// 八进制0o开头
let num8: number = 0o20
// 0x 表示16进制
let num16: number = 0x10

// console.log(num1, num2, num8, num16)


// 布尔类型
let flag: boolean = true
// console.log(flag);


// 数组
let numArr: number[] = [1, 2, 3]
let strArr: string[] = ['mai', 'xiao', 'chai']

let boolArr: Array<boolean> = [true, false]

// 元组
let myTuple: [number, string, boolean] = [1, 'maixiaochai', true]

// 枚举
enum Gender {
    male = 'maixiaochai',
    female = 8
}

let gender1: Gender = Gender.female
let gender2: Gender = Gender.male
// console.log(gender1, gender2)
// 输出: 8 maixiaochai


// any
let myArr: any[] = [1, 'maixiaochai', true]

// void
function myLog(): void {
    console.log('Hello, world!')
}

// null 和 undefined
let str1: null = undefined
let str2: undefined = null
let str3: null = null
let str4: undefined = undefined

// never 必须存在无法到达的终点
// 业务层很少用到，更多的是用在底层的类库里面

// 抛出异常的函数
function error(msg: string): never {
    throw new Error(msg)
}

// error('发生未知错误')


/*// object
declare function func(o: object): void;

func({name: 'maixiaochai'}) // OK
func([1, 2, 3]) // OK
func(null) // OK
func(undefined) // OK*/


// 类型断言
let obj: any = 'maixiaochai'
let  strD: string = obj.substr(0, 3); // 正常写

// 方式一：
let  strD1: string = (<string>obj).substr(0, 3); // 开发人员准确知道obj是string类型

// 方式二：
let strD2: string = (obj as string).substr(0, 3);
