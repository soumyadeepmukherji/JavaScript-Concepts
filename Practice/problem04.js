/**
 * Write a funtion to calculate factorial of a given number
 * input: 3 (number should be positive)
 * output: 6 (3*2*1)
 */

function numFactorial(num){
    if (typeof num == 'number' && num >= 0){
        if(num == 0){
            return 1
        }
        else{
            return num * numFactorial(num - 1)
        }
    }
    return 'Give valid positive number'
}
console.log(numFactorial(3))
console.log(numFactorial(-1))
console.log(numFactorial('abc'))
console.log(numFactorial(20))
console.log(numFactorial(0))

// Another Way
function Factorial(n){
    let result = 1
    for(let i = 1; i<=n; i++){
        // result = result * i
        result *= i
    }
    return result
    
    
}

console.log(Factorial(3))
console.log(Factorial(9))
