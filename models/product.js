import mongoose from "mongoose"; //importing mongoose

//product schema (sructur of product)
const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

//create product model
const Product = mongoose.model("products", productSchema); // "products" is name of collection, when automaticaly create in the db.therefor it is not product, it is products
//to connect to product collection

export default Product; //exporting product model
