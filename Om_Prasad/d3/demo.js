// 1️⃣ Declare variables (var, let, const)

var name = "Alice";
var name = "Bob";   // update✔️ & redeclare✔️

let year = 2025;
year = 2030;           // update✔️ & redeclare❌

const PI = 3.14;
// PI = 3.14159;    // update❌ & redeclare❌


// 2️⃣ Work with data types & operators

var number = 10;
var string = "Hello";
var boolean = true;
var array = [1, 2, 3];
var empty = null;
const id = Symbol('uniqueId');

//Operators
//Arithmetic -> +, -, *, /, %, ++, --
//Assignment -> =, +=, -=, *=, /=, %=
//Comparison -> ==, ===, !=, !==, >, <, >=, <=
//Logical -> &&, ||, !
//Bitwise -> &, |, ^, ~, <<, >>, >>>


// 3️⃣ Use if-else & switch statements

// if-else
if (age >= 60) {
    console.log("You are a senior citizen.");
} else if (year >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Switch case
age = 22;
switch (age) {
    case 18:
        console.log("You are 18 years old.");
        break;
    case 25:
        console.log("You are 25 years old.");
        break;
    default:
        console.log("You are neither 18 nor 25 years old.");
        break;
}


// 4️⃣ Implement loops (for, while)

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do-while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


// 5️⃣ Write functions & arrow functions

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));
console.log(greet("Bob"));

// Arrow function
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));
console.log(greet("Bob"));



// Why do programmers prefer dark mode? Because light attracts bugs!