const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Costumer Schema
const costumerSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    googleId:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
    phoneNumber:{
        type:Number,
        default:null,
    },
    verificationCode :{
        type:Number,
    },
    verificationCodeExpiration:{
        type:Date,
    },
    verified:{
        type:Boolean,
    },
    reset:[{
        Token:{
            type:String,
        },
        TokenExpiration:{
            type:Date,
        }
    }]
})
module.exports = mongoose.model("Costumer",costumerSchema)