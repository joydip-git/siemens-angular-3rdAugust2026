//1. object literal syntax
// const anilObjRef = {
//     id: 1,
//     name: 'anil',
//     salary: 1000,
//     print: function () {
//         return `${this.name}, ${this.id}, ${this.salary}`
//     }
// }

//function Object(){}

//2. constructor function
// function person(idValue, nameValue, salaryValue) {
//     this.id = idValue
//     this.name = nameValue
//     this.salary = salaryValue
//     this.print = function () {
//         return `${this.name}, ${this.id}, ${this.salary}`
//     }
// }

class Person {
    private readonly _id: number;
    private _name: string;
    private _salary: number;

    constructor(idValue: number, nameValue: string, salaryValue: number) {
        this._id = idValue
        this._name = nameValue
        this._salary = salaryValue
    }

    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    set name(value: string) {
        this._name = value
    }
    get salary() {
        return this._salary
    }
    set salary(value: number) {
        this._salary = value
    }
    print() {
        return `${this._name}, ${this._id}, ${this._salary}`
    }
}
class Trainer extends Person {
    private _subject: string;

    constructor(idValue: number, nameValue: string, salaryValue: number, subjectValue: string) {
        super(idValue, nameValue, salaryValue)
        this._subject = subjectValue
    }

    get subject() {
        return this._subject
    }
    set subject(value: string) {
        this._subject = value
    }
    print() {
        return `${super.print()}, ${this._subject}`
    }
}
const anilObjRef = new Trainer(1, 'anil', 1000, 'JS')

anilObjRef.name = 'joydip'
console.log(anilObjRef.name);
console.log(anilObjRef['salary']);

console.log(anilObjRef.print());
//console.log(anilObjRef['print']());

//anilObjRef.location = "bangalore"
// anilObjRef['sayHi'] = function () {
//     return `hello ${this.name}`
// }

console.log(anilObjRef);

interface Operations<T, TResult> {
    add(a: T, b: T): TResult;
}
class OpsImpl implements Operations<number, number> {
    add(a: number, b: number): number {
        return a + b
    }
}

// interface Category {
//     id: number;
//     name: string;
//     description?: string;
// }
type Category = {
    id: number,
    name: string,
    description?: string
}
const mobilecategory: Category = {
    id: 1,
    name: 'mobile',
    description: 'mobile category'
}

// type aType = {
//     add(a:number, b: number): number
// }
interface A {
    add(a: number, b: number): number
}
// type bType = {
//     welcome(val: string): string
// }
interface B {
    welcome(val: string): string
}
//type combined = aType & bType
interface Combined extends A, B { }
class Impl implements A, B {
    add(a: number, b: number): number {
        throw new Error("Method not implemented.");
    }
    welcome(val: string): string {
        throw new Error("Method not implemented.");
    }
}

