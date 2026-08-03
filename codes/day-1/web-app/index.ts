// var numValue = 10
// console.log(numValue);

//numValue = 'siemens'
// console.warn(numValue.toExponential(2))

// function add(a: number, b: number): number {
//     return a + b
// }

//console.log(x); //undefined
let x
x = 10 //var x = 10
console.log(x); //10

for (let i = 0; i < 1; i++) {
    let x
    x = 20 //var _x = 20
    console.log(x); //20
}
console.log(x); //20

//declaration
function add(a: number, b: number): myType {
    return (a + b).toString()
}

//expression
const subtract = function (a: number, b: number) {
    return a - b
}

type myType = number | string;


type fnType = (a: number, b: number) => myType;
// interface fnType {
//     (a: number, b: number): number;
// }

function invoke(fnRef: fnType, x: number, y: number) {
    fnRef(x, y)
}
invoke(add, 10, 20)
const y = 200
//y = 300

