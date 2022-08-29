const express = require('express')
const app = express()
const port = 8000

var cors = require('cors')
app.use(cors())

const User = require('./routes/user')

app.use('/user', User)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})