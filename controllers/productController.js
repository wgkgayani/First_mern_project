import Product from "../models/product.js";

export function getProducts(req, res) {
  Product.find().then((data) => res.json(data));
}

export function saveProduct(req, res) {
  console.log(req.body);

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  product //to save student data in mongodb
    .save()
    .then(() => {
      res.json({
        message: "product data saved successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error saving product data",
        error: error,
      });
    });
}
