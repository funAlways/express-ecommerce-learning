const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,
    stock: Number,
    price: Number
})

module.exports = mongoose.model("Product", productSchema);