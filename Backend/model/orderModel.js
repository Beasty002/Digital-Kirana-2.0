const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

// Create Orders Schema
const orderSchema = new Schema({
    payment_method: {
        type: String,
        required: true,
        default: "esewa",
      },
      transaction_code: String,
      amount: {
        type: Number,
        required: true,
      },
      products: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: "Products",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          },
        },
      ],
      status: {
        type: String,
        required: true,
        enum: ["failed", "paid", "shipping", "delivered"],
        default: "failed",
      },
    costumer: {
        type: Schema.Types.ObjectId,
        ref: "Costumer",
        required: true,
    },
},
{ timestamps: true }
)

module.exports = mongoose.model("Orders", orderSchema);