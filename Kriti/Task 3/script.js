//  Declare variables (var, let, const)
//  // var is function scoped
var score =20; 
var score = 35;
console.log(score); // 35 

// let and const are block scoped
let score1 = 20;
console.log(score1);
const val = 10;
console.log(val); // 10
// val = 23;
// console.log(val); // Uncaught TypeError: Assignment to constant variable.

// Data Types
let num = 10;
console.log(typeof(num)); // output: number
let str = "Hey";
console.log(typeof(str)); // output: string
//  Boolean data type
let bool = true;
console.log(typeof(bool)); // output: boolean
//  Null data type
let nullVar = null;
console.log(typeof(nullVar)); // output: object
let nullVar1 = null;
nullVar1 = 21;
console.log(nullVar1); // output:21;
//  Undefined data type
let undef = undefined;
console.log(typeof(undef)); // output: undefined
let undef1;
console.log(undef1); // output: undefined
//  Symbol data type
let sym = Symbol("my symbol");
console.log(typeof(sym)); // output: symbol


// Arrays => An array is an object that holds values of any type in a single variable.
let arr = [1, 2, 3, 4, 5];
console.log(arr); // output: [1, 2, 3, 4, 5]

let dishesh = ["Momos", "Maggie", "Pasta"];
console.log(dishesh[1]); // output: Maggie
//  Array methods
//Modify the array
dishesh[0] = "Pizza"
console.log(dishesh); // output: [ 'Pizza', 'Maggie', 'Pasta']
//  push() => adds an element to the end of an array.
dishesh.push('Fries');
console.log(dishesh); // output: [ 'Pizza', 'Maggie', 'Pasta', 'Fries' ]
//  pop() => removes the last element from an array.
dishesh.pop();
console.log(dishesh); // output: [ 'Pizza', 'Maggie', 'Pasta' ]
//  shift() => removes the first element from an array
dishesh.shift();
console.log(dishesh); // output: [ 'Maggie', 'Pasta' ]
//  unshift() => adds an element to the beginning of an array.
dishesh.unshift('Momos');
console.log(dishesh); // output: [ 'Momos', 'Maggie', 'Pasta' ]
//  indexOf() => returns the index of the first occurrence of a specified value.
console.log(dishesh.indexOf('Maggie')); // output: 1

// Use if-else & switch statements
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
}else{
    console.log(num2 + " is greater than " + num1);
}
//  Switch statement
switch (num1) {
    case 10:
        console.log(num1 + " is equal to 10");
        break;
        case 20:
            console.log(num1 + " is equal to 20");
            break;
            default:
                console.log(num1 + " is not equal to 10 or 20");
                break;
    }

    //Implement loops (for, while)
    //  for loop
    for (let i = 0; i < 5; i++) {
        console.log(i);
        }
    //  while loop
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
        }


 // Write functions & arrow functions
 function add(a, b) {
    return a + b;
    }
    console.log(add(10, 20)); // output: 30
// Arrow function
const sub = (a, b) => a - b;
console.log(sub(10, 20)); // output: -10




