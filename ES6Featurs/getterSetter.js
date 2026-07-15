// Getter & Setter Concept

class bank{
    constructor(amount){
        this._amount = amount
    }

    get amount(){
        return "$" + this._amount
    }

    set amount(value){
        if(value < 0){
            console.log('Invalid Amount')
        }
        this._amount = value
    }
}

const paypal = new bank(100)

console.log(paypal.amount) // $100 (This invoke the getter method)
console.log(paypal._amount) // 100 (just return the value)

paypal.amount = -500 // Invalid Amount (invlove the setter method and check the condition based on metod)
paypal.amount = 500

console.log(paypal.amount) // $500
console.log(paypal._amount) // 500

/**
 * What if we don't give the _amount?

class bank{
    constructor(amount){
        this.amount = amount
    }

    get amount(){
        return "$" + this.amount
    }

    set amount(value){
        if(value < 0){
            console.log('Invalid Amount')
        }
        this.amount = value
    }
}

const paytm = new bank(500)
paytm.amount

* This will give a Maximum call stack size exceeded error because the method name and property name are same so the method all itself again and agin and creates infinite recursion
 */