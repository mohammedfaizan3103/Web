// //The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// let students = ["shubh", "anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

// let houses = {}

// for(let student of students) {
//     if(student.length < 6) {
//         houses[`${student}`] = "Gryffindor"
//     }
//     else if(student.length < 8) {
//         houses[`${student}`] = "Hufflepuff"
//     }
//     else if(student.length < 12) {
//         houses[`${student}`] = "Ravenclaw"
//     }
//     else {
//         houses[`${student}`] = "Slytherin"
//     }
// }
// for(let element in houses) {
//     console.log(`${element} : ${houses[element]}`)
// }
// //The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// let arr = [1, 2, 3, 5, 3, 3, 4, 4, 7]
// let result = []
// for(let i of arr) {
//     if(!result.includes(i * 2)) [
//         result.push(i * 2)
//     ]
// }
// console.log(result)

// //The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
// function reverse(str) {
//     let result = ""
//     for(let i in str) {
//         result += str[str.length - 1 - i]
//     }
//     return result
// }
// let string = 'hello'
// let reversed = reverse(string)
// string += reversed
// console.log(string)

// // The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
// passwords = ["helloiam password", "HelloIamPassword22", "helloiampassword"]
// function check_password(password) {
//     let is_upper = false
//     let is_lower = false
//     let is_digit = false
//     if(password.length < 8) {
//         return false
//     }
//     for(let i in password) {
//         let code = password.charCodeAt(i)
//         if(code >= 65 && code <= 90) {
//             is_upper = true
//         }
//         if(code >= 97 && code <= 122) {
//             is_lower = true
//         }
//         if(code >= 48 && code <= 57) {
//             is_digit = true
//         }
//     }
//     if(is_upper && is_lower && is_digit) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// for(let i of passwords) {
//     console.log(check_password(i))
// }

// // Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// async function mapping(arr) {
//     let new_arr = arr.map((e) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(e * 2)
//             }, 500);
//         })
//     })
//     return new_arr
// }
// let nums = [1, 2, 3, 4 ,5]
// console.log(mapping(nums))

// async function main() {
//     let another_arr = await mapping(nums);
//     console.log(another_arr);
// }
// main()

// // The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
// function randomInt(min, max) {
//     return Math.random() * (max - min) + min
// }
// async function placeOrder(item , price) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Placed order for : " + item + " price: " + price)
//             resolve()
//         }, randomInt(1, 8) * 1000);
//     })
// }

// (async function main() {
//     await placeOrder("abc", 1900)
// })()
// // The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

// function filterProducts(products, criterion) {
//     return products.filter((e) => {
//         return e.price <= criterion
//     })
// }
// let array = [{name: "abc", price: 1900}, {name: "xyz", price: 500}, {name: "def", price: 800}]
// new_arr = filterProducts(array, 800)
// console.log(new_arr)