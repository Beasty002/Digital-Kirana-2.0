const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Order Items Schema
const orderItemsSchema = new Schema({
    orderId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Orders"
    },
    products:[{
        productData:{
            type:Object,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        }
    }]
});

module.exports = mongoose.model("OrderItems", orderItemsSchema)