// Write a funtion that finds and prints the smallest number among three given number
function smallestNum(a,b,c){
    if(a < b && a < c){
        console.log(`${a} is smaller`)
    }
    else if(b < a && b < c){
        console.log(`${b} is smaller`)
    }
    else{
        console.log(`${c} is smaller`)
    }
}

smallestNum(10,1,61)
smallestNum(5,20,32)
smallestNum(108,222,600)
smallestNum(1000,120000,-61)