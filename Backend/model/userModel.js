const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create User schema
const costumerSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
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
        type:Number
    },
    resetToken:{
        type:String,
    },
    resetTokenExpiration:{
        type:Date,
    }
})
module.exports = mongoose.model("Costumer",costumerSchema)