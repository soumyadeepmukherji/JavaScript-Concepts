/**
 * Write a fuction that will take 2 arrays and return 'true' if the arrays are equal
 */

const arrayAreEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }

    return arr1.every((ele, index) => ele === arr2[index] )
}

console.log(arrayAreEqual([1,2,3],[1,2,3]))
console.log(arrayAreEqual([1,2,3],[1,2,5]))