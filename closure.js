/************************ 
 CLOSURE CONCEPT
*************************/ 
function outer(){
    let x = 0;
    console.log("Value of x : ",x)
    return function inner(){
        console.log("VAlue of increment  :",x)
        return x++
    }
}

const fn = outer()
fn() // 0
fn() // 1
fn() // 2
fn() // 3

// function outer(b){
//     let a = 10;
//     return function inner(){
//         a ++;
//         console.log("value of a : ",a)
//         console.log("value of b : ",b)
//     }
// }
// let call = outer(20);
// call()
// call()

// let call2 = outer(30);
// call2()
// call2()

// call()