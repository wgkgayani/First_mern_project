import product from "../models/product.js";

export function getProducts(req, res) {
  product.find().then((data) => res.json(data));
}
