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
            type: String,
            required: true,
            default: "Test",
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
        email: {
            type: String,
            required: true,
        },
        costumerId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Costumer",
        }
    },
},
{ timestamps: true }
)

module.exports = mongoose.model("Orders", orderSchema);