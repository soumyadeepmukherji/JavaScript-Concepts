/***************************
 OPERATORS
 ****************************/
// Arithmetic Operators
var a = 10;
var b = 5;
var c = a + b;  
console.log("Addition: " + c);

var d = a - b;
console.log("Subtraction: " + d);

var e = a * b;
console.log("Multiplication: " + e);

var f = a / b;
console.log("Division: " + f);

var g = a % b;
console.log("Modulus: " + g);

var h = a ** b;
console.log("Exponentiation: " + h);

// Assignment Operators
var x = 10;
x += 5;
console.log("x after += 5: " + x);

x -= 3;
console.log("x after -= 3: " + x);

x *= 2;
console.log("x after *= 2: " + x);

x /= 4;
console.log("x after /= 4: " + x);

x %= 3;
console.log("x after %= 3: " + x);  

x **= 2;
console.log("x after **= 2: " + x);

// Comparison Operators
var p = 10; 
var q = 5;
console.log("p == q: " + (p == q));
console.log("p != q: " + (p != q));
console.log("p > q: " + (p > q));
console.log("p < q: " + (p < q));
console.log("p >= q: " + (p >= q));
console.log("p <= q: " + (p <= q));

// Logical Operators
var r = true;
var s = false;
console.log("r && s: " + (r && s));
console.log("r || s: " + (r || s));
console.log("!r: " + (!r));

//unary Operators
var t = 5;
console.log("Unary plus: " + (+t));
console.log("Unary minus: " + (-t));

// Ternary Operator
var u = 10;
var v = (u > 5) ? "u is greater than 5" : "u is not greater than 5";
console.log(v);