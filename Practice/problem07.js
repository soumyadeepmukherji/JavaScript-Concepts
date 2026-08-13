/**
 * Write a funtion to called countChar  that take two parameters
 * We will pass a string & charater to count
 * Output will be the number of count 
 */

const countChar = (word , char) => {
    word = word.toLowerCase().split('')
    char = char.toLowerCase()
    
    const finalRes =  word.reduce((acc, curr) => {
        if(curr === char){
            acc++
        }
        return acc
    }, 0)

    return finalRes
}

console.log(countChar('information','i'))
console.log(countChar('Pneumonoultramicroscopicsilicovolcanoconiosis','o'))
console.log(countChar('Floccinaucinihilipilification','c'))
