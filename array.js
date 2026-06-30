/*****************
 ARRAY
 *****************/
var arr = [] 
arr[0] = 12
arr[1] = 2.2
arr[2] = "Python"
arr[3] = null
arr[4] = undefined
arr[5] = true
arr[6] = ["HTML","CSS","JS"]
console.log(arr)

console.log(Array.isArray(arr))
console.log(typeof arr)

var list = ['pizza','raman','burger','fried chicken']
console.log(list) // ['pizza', 'raman', 'burger', 'fried chicken']

list.push('french fries','prown noodles') 
console.log(list) // ['pizza', 'raman', 'burger', 'fried chicken', 'french fries', 'prown noodles']

list.pop()
console.log(list) // ['pizza', 'raman', 'burger', 'fried chicken', 'french fries']

list.unshift(20,'sandwitch')
console.log(list) // [20, 'sandwitch', 'pizza', 'raman', 'burger', 'fried chicken', 'french fries']

list.shift()
console.log(list) // ['sandwitch', 'pizza', 'raman', 'burger', 'fried chicken', 'french fries']

console.log(list.slice(1,3)) // ['pizza', 'raman']

list.splice(2,2,'dosa','idle','vada')
console.log(list) // ['sandwitch', 'pizza', 'dosa', 'idle', 'vada', 'fried chicken', 'french fries']

list.reverse()
console.log(list) // ['french fries', 'fried chicken', 'vada', 'idle', 'dosa', 'pizza', 'sandwitch']

console.log(list.sort()) // ['dosa', 'french fries', 'fried chicken', 'idle', 'pizza', 'sandwitch', 'vada']

var order = list.forEach((item) => {console.log(item +" "+ "Ordered")})
// console.log(order)
var final = list.map((item) => {return item+" "+"Order placed"})
console.log(final)

var south = list.filter((item) => {return item === 'idle'})
console.log(south)

var ans = list.reduce((iv,ce)=>{return iv+ce})
console.log(ans)

console.log(list.join("--")) // dosa--french fries--fried chicken--idle--pizza--sandwitch--vada

console.log(list.some((elem) => {return elem === 'vada'})) // true

console.log(list.every((elem) => {return elem === 'vada'})) // false

console.log(list.includes('idle')) // true

console.log(list.indexOf('idle')) // 3

console.log(list.lastIndexOf('idle')) // 3

var list2 = ['rossogolla', 'sandash', 'momos']
console.log(list.concat(list2)) // ['dosa', 'french fries', 'fried chicken', 'idle', 'pizza', 'sandwitch', 'vada', 'rossogolla', 'sandash', 'momos']