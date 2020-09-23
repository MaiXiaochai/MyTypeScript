/*
* --------------------------------------
* @File       : myClass.ts
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/17 14:03
* --------------------------------------
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/*

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
*/
// 只读 readonly
// 只读属性必须在声明时或构造函数里被初始化
/*class Person {
    readonly name: string

    constructor(name: string) {
        this.name = name
    }
}

class Person2 {
    constructor(readonly name: string) {
    }
}

let person = new Person2('maixiaochai')
console.log(person.name)*/
/* 存取器 setters/getters
* Demo 需求：
* 先检验密码是否正确，然后再允许修改员工的姓名
*/
/*let password = 'maixiaochai'

class Employee {
    private _fullName: string

    // 存取器
    get fullName(): string {
        return this._fullName
    }

    set fullName(newName) {
        if(password && password === 'maixiaochai') {
            this._fullName = newName
        }
    }
}

let person = new Employee()
person.fullName = '宇智带饺子'
console.log(person.fullName)*/
/*class Company {
    // 静态属性
    static title = 'maixiaochai'

    // 实例属性
    constructor(public collage: string) {
    }

    // 输出
    fullName() {
        return Company.title + ': ' + this.collage
    }
}

let company1 = new Company('maiTech')
let company2 = new Company('maiHome')
console.log(company1.fullName());
console.log(company2.fullName());*/
// 抽象类
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.showName = function () {
        console.log("\u90E8\u95E8\u540D\u79F0\uFF1A" + this.name);
    };
    return Department;
}());
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(name) {
        return _super.call(this, name) || this;
    }
    Accounting.prototype.showMeeting = function () {
        console.log('每天十点开会');
    };
    Accounting.prototype.play = function () {
        console.log("Let's go!");
    };
    return Accounting;
}(Department));
var department = new Accounting('maixiaochai');
department.showName();
department.showMeeting();
department.play();
