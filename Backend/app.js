const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport');

const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const authRoute = require('./routes/authRoute')
const pageRoutes = require("./routes/pageRoutes");

// app.use(passport.initialize());

app.use(cors({
    origin : "http://localhost:5173",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))


app.use("/auth",authRoute);
app.use("/api",pageRoutes);

mongoose.connect(process.env.MONGO_URI).then((result) => {
    console.log("Connected To DataBase")
    app.listen(3000,()=>{
        console.log('Server running on http://localhost:3000')
    })
})
