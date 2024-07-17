const { log } = require("console")
const fs = require("fs/promises")
const path = require("path")
//// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip
async function main() {
    let a = await fs.readdir(__dirname)
    await fs.mkdir(path.join(__dirname, 'JPG'))
    await fs.mkdir(path.join(__dirname,'PDF'))
    await fs.mkdir(path.join(__dirname,'PNG'))
    await fs.mkdir(path.join(__dirname,'ZIP'))
    for(let i of a) {
        // let p = `${__dirname}\\${i}`
        let p = path.join(__dirname, i)
        console.log(p.split('\\')[p.split('\\').length - 1])
    
        if(path.extname(p) == '.jpg') {
            fs.rename(p, path.join(__dirname, 'JPG', p.split('\\')[p.split('\\').length - 1]))
        }
        else if(path.extname(p) == '.pdf') {
            fs.rename(p, path.join(__dirname, 'PDF', p.split('\\')[p.split('\\').length - 1]))
        }
        else if(path.extname(p) == '.png') {
            fs.rename(p, path.join(__dirname, 'PNG', p.split('\\')[p.split('\\').length - 1]))
        }
        else if(path.extname(p) == '.zip') {
            fs.rename(p, path.join(__dirname, 'ZIP', p.split('\\')[p.split('\\').length - 1]))
        }
    }
}
main()