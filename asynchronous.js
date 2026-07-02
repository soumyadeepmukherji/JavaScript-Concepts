/************************
 ASYNCHRONOUS OPERATION
************************/

/*=========================
    Synchronous execution
  =========================*/
//console.log("A")                  // Executed First (A)
//for(let i = 0; i<100000;i++){}   // Executed Second (wait...)
//console.log("B")                // Executed third (B)

/*=========================
    Asynchronous execution
  =========================*/
//console.log('A')          //Executed First (A)
// setTimeout(() => {
//     console.log('B');   // Executed at last (B)
// },0)
//console.log('C')       // Executed second (C)

/*=======Need Of Callback function in async=======*/
// function getData(){
//     setTimeout(()=>{
//         return [{},{}]
//     },0)
// }
// const result = getData()
// console.log(result); // undefined

// function getRes(Callback){
//     setTimeout(()=>{
//         let data = [{},{}]
//         Callback(data)
//     },0)
// }  
// getRes((data) => console.log(data)) // [ {}, {} ]

/*====Callback Hell=====*/
// function login(Callback){
//     setTimeout(() => {
//         console.log("user logged in")
//         Callback()
//     },1000)
// }

// function getProfile(Callback){
//     setTimeout(() => {
//         console.log("Profile fetched")
//         Callback()
//     },1000)
// }

// function getOrder(Callback){
//     setTimeout(() => {
//         console.log("Order fetched")
//         Callback()
//     },1000)
// }

// function payment(Callback){
//     setTimeout(() => {
//         console.log("payment Done")
//         Callback()
//     },1000)
// }

// login(() => {
//     getProfile(() => {
//         getOrder(() => {
//             payment(() =>{
//                 console.log('Completed')
//             })
//         })
//     })
// })

/*******************************************************
 To over come the callback hell we are will go with Promise
 ******************************************************/
function login(){
  return new Promise((res) => {
    setTimeout(() => {
      console.log("user logged in");
      res()
    },1000)
  })
}

function getProfile(){
  return new Promise((res) => {
    setTimeout(() =>{
      console.log("Profile fetch")
      res()
    },1000)
  })
}

function getOrder(){
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Order fetch")
      res()
    },1000)
  })
}

function payment(){
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Pamyment Done");
      res()
    },1000)
  })
}

login()
      .then(getProfile)
      .then(getOrder)
      .then(payment)
      .then(() => {
        console.log("Complete");
      })

  fetch('https://bhagavadgita.com/api')
          .then((data) => {
          console.log(data)
          })
          .catch((error) => {
              console.log(error);    
          })
