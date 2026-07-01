/*****************
 OBJECT
 *****************/
// Literal
const User = {
    name : "Alex",
    age : 24
}
console.log("User Details : ",User) // User Details :  { name: 'Alex', age: 24 }

// Constuctor
const Product = new Object();
//Key value assigning
Product.name = "IPhone"
Product.model = "17 pro max"
console.log("Product Details : ",Product) // Product Details :  { name: 'IPhone', model: '17 pro max' }

// Constructor Function
function purchaseDetails(name, productname, productmodel){
    this.name = name
    this.productname = productname
    this.productmodel = productmodel
}
let bill = new purchaseDetails("Tom","Samsung","Galaxy z flip")
console.log("Purchase Details : ", bill) // Purchase Details :  purchaseDetails {  name: 'Tom', productname: 'Samsung', productmodel: 'Galaxy z flip'}

// Object Methods
console.log(Object.keys(User)) // [ 'name', 'age' ]
console.log(Object.values(User)) // [ 'Alex', 24 ]
console.log(Object.entries(User)) // [ [ 'name', 'Alex' ], [ 'age', 24 ] ]
const userCopy = Object.assign({}, User)
console.log(userCopy) // { name: 'Alex', age: 24 }
console.log(User.hasOwnProperty("name")) // true

// Copy
userCopy['location'] = "USA"
userCopy['name'] = "Tom"
console.log("Original User : ",User) // { name: 'Alex', age: 24 }
console.log("Duplicate User : ",userCopy) // { name: 'Tom', age: 24, location: 'USA' }

User.location = {country : "USA", states : "New York"}
console.log("Original User : ",User) // { name: 'Alex', age: 24, location: { country: 'USA', states: 'New York' } }
// shallow copy
const newCopy = Object.assign({}, User)
console.log("New Duplicate User : ",newCopy) // { name: 'Alex', age: 24, location: { country: 'USA', states: 'New York' } }
newCopy.location.states = 'Texas'
console.log("Original User : ",User) // { name: 'Alex', age: 24, location: { country: 'USA', states: 'Texas' } }
console.log("New Duplicate User : ",newCopy) // { name: 'Alex', age: 24, location: { country: 'USA', states: 'Texas' } }

// Spread Copy
const spreadCopy = {...User}
console.log("This is Spread Copy --> ",spreadCopy) // { name: 'Alex', age: 24, location: { country: 'USA', states: 'Texas' } }

// Prototype
purchaseDetails.prototype.wellcome = function (){
    console.log("Hii",this.name,"you purchased",this.productname);
}

const p1 = new purchaseDetails("Anni","Moto","G96");
console.log(p1)
p1.wellcome() // Hii Anni you purchased Moto

// ======= Example ========
function Chess(piece,move){
    this.name = piece
    this.move = move
}//constructor
const King = new Chess('King','one square in any direction') // Object
const Queen = new Chess('Queen','any number of square in any direction') // Object
const Rook = new Chess('Rook','horizontally or vertically') // Object
const Knight = new Chess('Knight','an "L" shape') // Object
console.log("Object-King : ",King);
console.log("Object-Queen : ",Queen);
console.log("Object-Rook : ",Rook);

//Creating Prototype
Chess.prototype.say = function(){
        console.log(`${this.name} moves in ${this.move}`)
}

King.say()

console.log(King.hasOwnProperty("name")) // true
console.log(King.hasOwnProperty("say")) // false , this is not inside the object

console.log(King.__proto__) // { say: [Function (anonymous)] } , object can still access prototype

console.log("============================================================")
//===== Memory =====
function Student(name,age,maths,science,english){
    this.name = name
    this.age = age
    this.marks = {
        maths,
        science,
        english
    }
    this.totalMarks = function(){
        let mathMarks = this.marks.maths
        let scienceMarks = this.marks.science
        let englishMarks = this.marks.english
        let totalMarks = mathMarks + scienceMarks + englishMarks

        return totalMarks
    }
}

Student.prototype.sayMarks = function(){
    console.log(`${this.name} you got total ${this.totalMarks()} marks.`)
}

const sulie = new Student('sulie',21,20,18,14)
console.log(sulie) // Student {name: 'sulie', age: 21, marks: { maths: 20, science: 18, english: 14 }, totalMarks: [Function (anonymous)]}
sulie.sayMarks() // sulie you got total 52 marks.

//Copy
const studentCopy = Object.assign({}, sulie)

// Compare Primitive References
console.log(sulie.name === studentCopy.name); // true, that means valued are copied from orginal object

// Compare Nested object referance
console.log(sulie.marks === studentCopy.marks); // true, nested object is copied

// Compare Entire Object Reference
console.log(sulie === studentCopy); // false

/***Shallow copy creates a new outer object but copies references for nested objects and functions. *****/

