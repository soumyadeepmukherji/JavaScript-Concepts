// Inheratiance

class Employee{
    constructor(name,role,salary){
        this.name = name
        this.role = role
        this.salary = salary
        this.company = 'xyz Solutions'
    }
}

// Inherite propertis from employee
/*Must call super constructor in derived class before accessing 'this' or returning from derived constructor*/
class Hr extends Employee{
    constructor(name,role,salary){
        super(name,role,salary)
        this.room = 'Hr Room'
    }
    seat(){
        console.log(this.name,"is",this.role,"and seats in","this.room");    
    }
}

let swati = new Hr('Swati','HR',2000000)
console.log(swati) // Hr {name: 'Swati', role: 'HR', salary: 2000000, company: 'xyz Solutions', room: 'Hr Room'}
let sruti = new Hr('Sruti','assistent HR',1000000)
console.log(sruti) // Hr {name: 'Sruti', role: 'assistent HR', salary: 1000000, company: 'xyz Solutions', room: 'Hr Room'}
console.log(Employee)