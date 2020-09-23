/*
* --------------------------------------
* @File       : myType.ts
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/23 14:40
* --------------------------------------
*/

// 联合类型
/*function padLeft(value: string, padding: any) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }

    throw new Error('不支持的类型')
}

console.log(padLeft('maixiaochai', 5)); // 正确
console.log(padLeft('maixiaochai', [1, 2, 3])); // 编译通过，运行报错*/


// 类型保护
/*interface Bird {
    fly()

    sleep()
}

interface Fish {
    swim()

    sleep()
}

function getSmallPet(): Fish | Bird {
    return
}

let pet = getSmallPet()
if ((pet as Fish).swim) {
    (pet as Fish).swim()
} else if ((pet as Bird).fly) {
    (pet as Bird).fly()
}*/


// 自定义类型保护
/*interface Bird {
    fly()

    sleep()
}

interface Fish {
    swim()

    sleep()
}

function getSmallPet(): Fish | Bird {
    return
}

// 谓词：在 `p is type`中，p 就是谓词
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

let pet = getSmallPet()
if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}*/

// 类型保护之instanceof
/*class Bird {
    fly() {
        console.log('鸟在飞.')
    }

    sleep() {
        console.log('鸟在睡.')
    }
}

class Fish {
    swim() {
        console.log('鱼在游.')
    }

    sleep() {
        console.log('鱼在睡.')
    }
}

function getSmallPet(): Fish | Bird {
    return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet = getSmallPet()
if (pet instanceof Bird) {
    pet.fly()
} else if (pet instanceof Fish) {
    pet.swim()
}*/

let s = 'maixiaochai'
s = null    // 错误，严格上说是错误的 'null' ->'string'

let s1: string | null = 'null'
s1 = null

s1 = undefined  //   错误，严格上说是错误的


