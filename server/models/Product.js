const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: Array, required: true },
    size:String,
    color:String,
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);