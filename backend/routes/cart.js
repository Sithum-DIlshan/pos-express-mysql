const express = require('express')
const app = express()
const router = express.Router()
const db = require('../configs/db.configs')
const mysql = require('mysql')
const connection = mysql.createConnection(db.database)

const {createConnection} = require("mysql");
app.use(express)

connection.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('database connected')
    }
})





router.get('/', async (req, res) => {
    try {
        // const users = await User.find()
        var query = "SELECT * FROM Cart"
        connection.query(query, (err, rows) => {
            if (err) res.send(err)
            res.send(rows)
        })
    } catch (err) {

    }
})
router.post('/', async (req, res) => {
    try {
        // const users = await User.find()

        // let data = {
        //     first_name: req.body.first_name,
        //     last_name: req.body.last_name,
        //     email: req.body.email,
        //     username: req.body.username,
        //     password: req.body.password,
        //     city: req.body.city,
        //     street: req.body.street,
        //     street_no: req.body.street_no,
        //     zip_code: req.body.zip_code,
        //     lat_value: req.body.lat_value,
        //     long_value: req.body.long_value,
        //     mobile_no: req.body.mobile_no
        // };
        // console.log(req.body.first_name)
        let data = JSON.parse(req.body.data)

        var query = "INSERT INTO Cart SET ?"

        connection.query(query, data, (err, rows) => {
            if (err) res.send(err)
            res.send('cart post done')
        })
    } catch (err) {

    }
})

module.exports = router