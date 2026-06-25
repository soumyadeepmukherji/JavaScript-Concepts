/****************************************
CONDITIONAL STATEMENTS
****************************************/
//if statement
let age = 18;
if(age >= 18){
    console.log("You are an adult.");
}

//if-else statement
let time = 10;  
if(time < 12){
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}   

//if-else if-else statement
let score = 85;
if(score >= 90){
    console.log("Grade: A");
} else if(score >= 80){
    console.log("Grade: B");
} else if(score >= 70){
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//switch statement
var dish = "south-indian";
switch (dish) {
    case "south-indian":
        console.log("Idles and Dosa are popular South Indian dishes.");
        break;
    case "north-indian":
        console.log("Chole Bhature and Paratha are popular North Indian dishes.");
        break;
    default:
        console.log("Dish is neither a South Indian nor a North Indian dish.");
}