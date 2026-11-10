const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.static('public'))

//app.use(express.json());

const errorsHandler = require('./middlewares/errorsHandler');



app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(errorsHandler)

app.listen(port, () => {
    console.log(`example app listening port ${port}`)
})