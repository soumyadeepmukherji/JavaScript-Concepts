/**
 * Write a function that takes a number as input and return sum of it digits
 */

const sumOfDigits = (num) =>{
    let res = 0
    while(num > 0){
        let rem = num % 10
        res = res + rem
        num = Math.floor(Math.abs(num / 10))
    }
    return res

}

console.log(sumOfDigits(123))
console.log(sumOfDigits(12345))
console.log(sumOfDigits(666))

// Other Method

const addDigits = (num) => {
    let arr = Array.from(String(num), Number)
    let sum = arr.reduce((acc,curr) => acc + curr)
    console.log(sum)
}

addDigits(123)
addDigits(444)
addDigits(987654)

