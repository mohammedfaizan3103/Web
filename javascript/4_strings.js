// Strings are immutable 
let real_name = "Harry"
let another_name = "Rohan"
console.log(`name is ${real_name} and another name is ${another_name}`)
// back ticks and ${} enables us to use it like formatted strings in python
console.log(real_name.length)
console.log(real_name[0]) // same as other python
real_name = real_name.toUpperCase() //toLowerCase()
console.log(real_name)
// a.slice(start, end)
real_name = real_name.replace('H', 'b')
console.log(real_name)
// .concat(a, b)
// .indexOf() 
// all these string functions do not modiify the original string
// .trim removes white spaces