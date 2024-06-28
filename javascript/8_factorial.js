const n = 6
let factorial = 1;
for (let i = 1; i <= n; i++) {
     factorial *= i;
}
console.log(factorial)

// arr = []
// for (let i = 1; i <= n; i++) {
//     arr.push(i);
// }
let arr = Array.from(Array(n + 1).keys())
fact = arr.slice(1,).reduce((a, b) => {
    return a * b
})
console.log(fact)