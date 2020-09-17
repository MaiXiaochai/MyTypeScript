/*
* --------------------------------------
* @File       : myClass.ts
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/17 14:03
* --------------------------------------
*/

/*
// 多重继承 + 重写父类方法
class Animal {
    animalName: string

    constructor(animalName: string) {
        this.animalName = animalName
    }

    move(distance: number = 0) {
        console.log(`${this.animalName}走动了${distance} m.`)
    }
}

class Snake extends Animal {

    constructor(AName: string) {
        super(AName);
    }

    // 重写'走动'方法
    move(distance: number = 10) {
        console.log('我是爬行的...')
        // 调用父类的 move
        // 除非在 constructor 内，否则，调用父类方法都要 super.parent_func
        super.move(distance);
    }
}

class Horse extends Animal {

    constructor(AName: string) {
        super(AName);
    }

    // 重写'走动'方法
    move(distance: number = 50) {
        console.log('我是奔跑的...')
        // 调用父类的 move
        // 除非在 constructor 内，否则，调用父类方法都要 super.parent_func
        super.move(distance);
    }
}

let snake = new Snake('小青蛇')
let horse = new Horse('白龙马')
snake.move(1)
horse.move(3)
*/

/*// 类-私有
// name 为私有的，类内部可以调用，但实例和子类中不能调用
class Animal {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number) {
        console.log(`${this.name}走动了${distance}`)
    }
}*/


// 受保护的
class Person {
    protected name: string

    constructor(name: string) {
        this.name = name
    }
}

class Employee extends Person {
    // 公司
    private company: string

    constructor(name: string, company: string) {
        super(name);
        this.company = company
    }
    logMsg() {
        return `我叫${this.name},我在${this.company}`
    }
}

let p = new Employee('maixiaochai', 'chaiTech')
p.logMsg()
