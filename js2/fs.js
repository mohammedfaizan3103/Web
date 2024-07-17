const fs = require("fs")

 
// fs.writeFileSync("test1.txt", "This writes in the file synchronously and we do not want that other code will not be executed")

fs.writeFile("test2.txt", "this executes asynchronously and after finishing executes the call back fucntion", () => {
    fs.readFile("test2.txt", (error, data) => {
        if(error) {
            console.log(error)
        }
        else {
            console.log(data.toString())
            fs.appendFile("test2.txt", " This appends instead of overriding", (e, d) => {
                console.log(data.toString()) // this doesnot have appended data only before
                fs.readFile("test2.txt", (e, d) => {
                    console.log(d.toString())
                    // call back hell
                })
            })
        }
    })
})

// whenever we get callback hell use async await