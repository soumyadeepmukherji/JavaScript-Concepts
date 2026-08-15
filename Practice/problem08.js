/**
 * Write a function to sort an array of numbers in ascending order
 */

const sortAscending = (arr) => {
    let res = arr.sort((a,b) => a - b)
    return res
}

console.log(sortAscending([5,3,8,1]))