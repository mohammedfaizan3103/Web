import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const port = 3000
const hostname = '127.0.0.1'

// to allow access to the folder public
app.use(express.static('public'))
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/form', (req, res) => {
    let send = {name: "my name", 
        age: 90
    }
    console.log(req.body);
    res.send(JSON.stringify(send))
})

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})