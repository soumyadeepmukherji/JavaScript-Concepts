/**
 * Write a function that returns the reverse of the string
 * input: developer
 * output: repoleved
 */

function reverseString(text){

    if(typeof text !== 'string'){
        console.error('Only string allowed');
        
    }

    let str = text
    let rev = ""
    let len = str.length

    for(let i = len-1; i >= 0; i--){
        rev += str[i]
    }
    console.log(rev)
}

reverseString('developer')
reverseString('I am a coder')


// Another way
function reverseArr(word){
    let arr = word.split('')
    let arrRev = arr.reverse()
    let res = arrRev.join('')

    console.log(res)
}

reverseArr('javascript')