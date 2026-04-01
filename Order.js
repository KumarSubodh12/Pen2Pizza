const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    buyerId: String,
    sellerId: String,
    productId: String,
    status: {
        type: String,
        default: "pending"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);
