const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Costumer Schema
const costumerSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        unique:true,
        required:true,
    },
    verificationCode :{
        type:Number,
    },
    verificationCodeExpiration:{
        type:Date,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    reset: {
        token: {
            type: String,
            default: null,
        },
        tokenExpiration: {
            type: Date,
            default: null,
        }
    }
})
module.exports = mongoose.model("Costumer",costumerSchema)