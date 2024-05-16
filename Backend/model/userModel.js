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
    verificarionCode :{
        type:Number,
    },
    verificationCodeExpiration:{
        type:Date,
    },
    resetToken:{
        type:String,
    },
    resetTokenExpiration:{
        type:Date,
    }
})
module.exports = mongoose.model("Costumer",costumerSchema)