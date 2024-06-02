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
        sparse: true,
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
    verificationToken:{
        type: String,
        default: null,
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