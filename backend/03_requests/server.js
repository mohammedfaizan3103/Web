const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("POOOOST ")
    res.send("Testing post request")
})
app.get('/index', (req, res) => {
    res.sendFile('templates/index.html', {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})