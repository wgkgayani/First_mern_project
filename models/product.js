import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const Product = mongoose.model("products", productSchema); // "products" is name of collection, when automaticaly create in the db.therefor it is not product, it is products

export default Product;
