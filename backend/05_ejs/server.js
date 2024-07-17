const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let content = 'This is a HTML page of testing EJS'
    res.render('index', { foo: "FOO", other: ['mango', 'banana', 'grapes', 'apple'], content })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://${hostname}:${port}/`)
})