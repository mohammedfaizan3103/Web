const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors')
console.log(process.env.MONGO_URI) // remove this after you've confirmed it is working

// to allow access to the folder public
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.static('public'))
app.use(bodyParser.json())
let passwords;
async function connect() {
    let conn = await mongoose.connect(`${process.env.MONGO_URI}/passop`)
    const db = mongoose.connection.db; // Get the database instance
    // console.log(mongoose.connection.db);
    passwords = db.collection("passop");
}
connect()

app.get('/', async (req, res) => {
    let data = await passwords.find({}).toArray()
    res.send(data)
})
app.post('/', (req, res) => {
    console.log("Hello word");
    passwords.insertOne(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})