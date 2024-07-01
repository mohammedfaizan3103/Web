var a = "Hello"
function tryout() {
    console.log(Number(a)) 
    console.log(parseInt(a))
    if(isNaN(a)) {
        throw TypeError("Not a number")
    }
    
}

try {
    tryout()
} catch (error) {
    console.log("Caught error")
    console.log(error.message)
}
console.log(isNaN(a))
console.log(a)
