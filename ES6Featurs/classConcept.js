/******************
 CLASS (ES6)
 ******************/
// Object Constuctor 
// function Person(name,age){
//     this.name = name
//     this.age = age
// }
// Person.prototype.play = function(){
//     console.log(this.name,'Plays')
// }
// let dhoni = new Person('Dhoni',36)
// let messi = new Person('Messi',33)
// console.dir(dhoni)
// messi.play()

/*Class is a blueprint of object and it's a syntactic suger */
// Class
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    // Prototype Methods are declared here
    play(){
        console.log(this.name,"playes")
    }
    win(){
        console.log(this.name,"Wins")
    }
}

let virat = new Person('Virat',30)
let naymer = new Person('Naymer',28)
console.log(virat) // Person { name: 'Virat', age: 30 }
virat.play() // Virat playes
naymer.win() // Naymer Wins
/**
 * [Rules of Class]
 * new keyword should be used while creating Objects
 * Declaration of class is not hoisted
 * Class name should be in capital letter
 * Methods declared inside class is considered as prototype
 */