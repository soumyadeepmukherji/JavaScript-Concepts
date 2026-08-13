/**
 * Hash Tag Generator
 * The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without space
 * If the length of the string is more than 280 characters or empty should return false
 * It should return the generated hash tag prefixed with #
 */

const generateHash = (str) => {

    if(typeof str !== 'string' || str.length > 280 || str.trim().length === 0 ){
        return false
    }

    let arr = str.split(" ")
    //Converting only the first charater to capital
    arr = arr.map((ele) => ele.replace(ele[0],ele[0].toUpperCase()))

    let res = '#' + arr.join('')
    return res
}

console.log(generateHash('I love my India'))
console.log(generateHash('You may not want every expensive component to re-render unnecessarily.'))
console.log(generateHash(52588))
