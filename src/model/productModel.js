const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String ,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
  });
  
  exports.Product = mongoose.model("Product", productSchema);