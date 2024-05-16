const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

// Create Orders Schema
const orderSchema = new Schema({
    orderTime:{
        type:Date,
        required:true,
    },
    orderStatus:{
        type:String,
        required:true,
    },
    orderAmount:{
        type:Number,
        required:true,
    },
    costumer: {
        email: {
            type: String,
            required: true,
        },
        costumerId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Costumer",
        }
    }
})

module.exports = mongoose.model("Orders", orderSchema);