/**********************************
    VARIABLES & SCOPES
***********************************/
// Hoisting in JavaScript 
console.log(a); // Undefined
var a = 10;
console.log(a); // 10

var name = "John";
let age = 30;
const PI = 3.14;

function task(){
    // Functional scope
    console.log("magic: ",a); // Undefined
    var a = 20;
    console.log(a); // 20
    var a = 30;
    console.log(a); // 30

    // Block scope
    // console.log("magic-->",age); // ReferenceError: Cannot access 'age' before initialization
    let age = 40;
    console.log(age);

    //let age = 50; // SyntaxError: Identifier 'age' has already been declared

    //console.log(PI); // ReferenceError: Cannot access 'PI' before initialization
    const PI = 3.14159;
    console.log(PI);

    //const PI = 3.14159; // SyntaxError: Identifier 'PI' has already been declared
}

task();

console.log(name); // John
console.log(age); // 30
console.log(PI); // 3.14

