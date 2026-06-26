/**************************
 LOOP STATEMENT
 ***************************/
//while loop
var i = 0;
while (i < 5) {
    console.log("Value of i: " + i);
    i++;
}

//do-while loop
do {
    console.log("Value of i in do-while loop: " + i);
    i++;
} while (i < 10);

//for loop
for (var j = 0; j < 5; j++) {
    console.log("Value of j: " + j);
}

//for-in loop
var person = {firstName: "John", lastName: "Doe", age: 30};
for (var key in person) {
    console.log(key + ": " + person[key]);
}

//for-of loop
var numbers = [1, 2, 3, 4, 5];  
for (var num of numbers) {
    console.log("Number: " + num);
}