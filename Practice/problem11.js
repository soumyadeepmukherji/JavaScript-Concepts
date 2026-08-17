/**
 * Write a Funtion to find the Average of given number in an array
 */

const calculateAverage = (arr) => {
    let sum = arr.reduce((acc,curr) => {return acc + curr})

    return sum / arr.length
}

console.log(calculateAverage([12,33,25,85]))