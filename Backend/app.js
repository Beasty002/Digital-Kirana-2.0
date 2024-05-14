const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoute = require('./routes/authRoute')

const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

app.use(cors({
    origin : '*'
}))


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))


app.use(authRoute);


mongoose.connect(process.env.MONGO_URI).then((result) => {
    console.log("Connected To DataBase")
    app.listen(3000,()=>{
        console.log('Server running on http://localhost:3000')
    })
})