const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: String,
    description: String,
    price: Number,
    category: String,
    image: String
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);