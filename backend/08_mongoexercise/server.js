// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

import express from "express"
import mongoose from "mongoose"
import { Employee } from "./Employee.js"

let conn = await mongoose.connect("mongodb://localhost:27017/company")
const db = mongoose.connection.db; 

const app = express()
const port = 3000
const hostname = '127.0.0.1'

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getData() {
    let names = ['Harry Potter', 'Ron Weasley', 'Hermione Granger']
    let languages = ['Python', "JavaScript", 'Java', 'C', 'C++']
    let cities = ['New York', 'London', 'Dubai', 'Paris', 'Berlin']
    let name = names[randInt(0, 3)]
    let salary = randInt(10000, 100000)
    let lang = languages[randInt(0, languages.length)]
    let city = cities[randInt(0, cities.length)]
    let manager = (randInt(0, 2) == 0) ? true : false;
    let emp = new Employee({
        name: name,
        salary: salary,
        language: lang,
        city: city,
        isManager: manager,
    })
    return emp;
}

// to allow access to the folder public
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/generate', async (req, res) => {
    console.log("NotHello");
    await db.collection('employees').deleteMany({})
    for(let i = 0; i < 10; i++) {
        let emp = getData();
        await emp.save();
    }
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})