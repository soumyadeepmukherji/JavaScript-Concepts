/***********************
 FUNCTIONS
 ***********************/
// Anonomus Function
let add = function (){
    console.log('Anonomus Function');
}
add();

// Named Function
function greet(){
    console.log('Named Function');
}
greet();

// Function Expression
let a = function a(){
    console.log('Function Expression');
}
a();

// HOF & Callback Function
function HOF(callback){
    return callback();
}
function callback(){
    console.log('Callback Function');
}
let result = HOF(callback);

// Arrow Function
let arrow = () => {
    console.log('Arrow Function');
}
arrow();

// IIFE Function
(function IIFE(){
    console.log('IIFE Function');
})();

// Generator Function
function* generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// function abc(){
//     return function def(){
//         return function xyz(){
//             caches.console
//         }
//     }
// }

// for (let  i = 0; i < 5; i++){   
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
//     // console.log(i);
// }