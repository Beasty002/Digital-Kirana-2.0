const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    imageUrls:{
        type:[],
        required:true,
    },
    // not completed
})

module.exports = mongoose.model("productSchema",products)
