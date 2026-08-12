/**
 * Find the Longest word in a string
 * If there are multiple longest word , then return the first word encountered
 */

let findLongestword = (str) =>{
    // Ensure that the given value is string and non-empty
    if(typeof str !== "string" || str.trim().length === 0){
        return false
    }

    // Convert the str into arr
    let strArr = str.split(' ')
    /* By sorting the words according to its length */
    // let words = strArr.sort((a,b) => b.length - a.length) 
    // return words.at(0)

    /* Reduce Method */
    return strArr.reduce((accm,curr) => (curr.length > accm.length ? curr : accm), "")
}

console.log(findLongestword('My name is Soumyadeep'))
console.log(findLongestword('Communication is essential for success.'))
console.log(findLongestword(''))