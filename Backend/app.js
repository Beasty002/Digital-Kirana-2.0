const express = require('express')
const app = express()

const authRoute = require('./routes/authRoute')

const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

app.use(cors({
    origin : '*'
}))

require('./model/index')

app.use(express.json())
app.use(cookieParser())



app.use('',authRoute)

app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000')
})