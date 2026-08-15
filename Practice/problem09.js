/**
 * Write a funtion to determine the given string is palindrome or not.
 */

const isPalindrome = (word) => {
     word = word.toLowerCase()
     let rev = word.split(" ").reverse().join(" ")
     return word === rev ? true : false
}

console.log(isPalindrome('Hello world'))
console.log(isPalindrome('madam'))