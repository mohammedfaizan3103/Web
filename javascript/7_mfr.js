let arr = [1, 13, 5, 7, 11]
let square = (e) => {
    return e ** 2
}
let new_arr = arr.map(square)
console.log(new_arr)

let arr2 = arr.filter((e) => {
    return e > 7
})
console.log(arr2)

console.log("sum of all elements of the array is " + arr.reduce((a, b) => {
    return a + b
}))
console.log(eval('1 + 13 + 5 + 7 + 11'))