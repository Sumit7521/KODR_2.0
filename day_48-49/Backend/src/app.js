const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

//middlewares

app.use(express.json())
app.use(cookieParser())

//routes


module.exports =app