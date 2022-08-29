const express = require('express')
const app = express()
const router = express.Router()
const db = require('../configs/db.configs')
const mysql = require('mysql')

const connection = mysql.createConnection(db.database)

connection.connect(function (err) {
    if (err){
        console.log(err)
    }else {
        console.log('database connected')
    }
})


const {json} = require('express')
const {createConnection} = require("mysql");

app.use(express, json())

router.get('/', async (req, res) => {
    try {
        // const users = await User.find()
        var query = "SELECT * FROM User"
        connection.query(query, (err, rows)=>{
            if (err) throw err
                res.send('user get')
        })
    } catch (err) {

    }
})

module.exports = router