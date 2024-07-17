const fs = require("fs/promises")
async function main() {
    let a = await fs.readFile('./test2.txt')
    console.log(a.toString())
}
main()
// (async function main() {
//     let data = await fs.readFile('./test2.txt')
//     console.log(data.toString())
// })();