const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require("express-session");
const MongoStore = require("connect-mongo")
// For Environment File
require('dotenv').config()
// For passport Setup
require("./controller/auth/passport")(passport)


const app = express();

// app.use(cors({
//     origin : "http://localhost:5173",
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true,
// }))
app.use(cors({
    origin: "http://localhost:3001", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

// Configure express-session
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URI,
        ttl:14 * 24 * 60 *60 // = 14 days expiration
    })
}));

// Initialize Passport and use session support
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))

const authRoute = require('./routes/authRoute')
const pageRoutes = require("./routes/pageRoutes");


app.use("/auth",authRoute);
app.use("/api",pageRoutes);


mongoose.connect(process.env.MONGO_URI).then((result) => {
    console.log("Connected To DataBase")
    app.listen(3000,()=>{
        console.log('Server running on http://localhost:3000')
    })
})
