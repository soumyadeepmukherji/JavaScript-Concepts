/*==========================
 OBJECT CREATION & METHODS
============================*/
/* Object is a non-primitive datatype which collect data in key-value pairs */
const employee = {
    name : 'Srikanth',
    age : 25,
    greet : function () {   // Function insite object are called Methods //
        return 'Hello welcome' 
    },
    salary(){            // Concise method //
        return 'Disclose'
    }
}
// Accessing properties or method from object
console.log(employee.name); //Srikanth
console.log(employee['age']); //25
console.log(employee.greet()); //Hello welcom
console.log(employee.salary())

// Constructor Function
function Student(firstname,lastname,standard,age){
    this.firstname = firstname
    this.lastname = lastname
    this.standard = standard
    this.age = age
}

/*In JavaScript we can Inherit features from one object to another via Prototypes.*/
// Create Instanse
const Rahul = new Student('Rahul','dubey')
console.log(Student)//[Function: Student]
console.log(Rahul)
/* Behind the scenes :
 * When we are creating new Student() this have name and prototype
 * this prototype has a constructor property that referes to Student()
 * 
 * Student {firstname: 'Rahul', lastname: 'dubey', standard: undefined, age: undefined}
 *      age: 16
 *      firstname:'Rahul' ....
 *      [[Prototype]]: Object
 *          constructor: ƒ Student(firstname,lastname,standard,age)
 *          [[Prototype]]: Object
 */
/*Define methods in JavaScript prototype object*/
Student.prototype.fullname = function(){
    return this.firstname +" "+ this.lastname
}
console.log(Rahul.fullname()) //Rahul dubey
/* In this JavaScript engine is adding fullname() method to the Student.prototype object
 * Student {firstname: 'Rahul', lastname: 'dubey', standard: undefined, age: undefined}
 *      age: 16
 *      firstname:'Rahul' ....
 *      [[Prototype]]: Object
 *          fullname: ƒ ()
 *          constructor: ƒ Student(firstname,lastname,standard,age)
 *          [[Prototype]]: Object
 */



