const express = require('express')
const app = express()
const port = 5000
const User = require('./routes/user')
const Product = require('./routes/product')
const Cart = require('./routes/cart')
var cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/user', User)
app.use('/product', Product)
app.use('/cart', Cart)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})