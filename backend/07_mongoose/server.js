import express from "express"
import mongoose from "mongoose"
import { User } from "./models/user.js"

let conn = await mongoose.connect('mongodb://localhost:27017/TestDB2')
// const db = mongoose.connection.db; // Get the database instance
// const fifa = db.collection("");
const app = express()
const port = 3000
const hostname = '127.0.0.1'

// to allow access to the folder public
app.use(express.static('public'))

app.get('/', async (req, res) => {
    
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})