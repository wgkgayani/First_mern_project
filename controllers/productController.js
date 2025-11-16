import product from "../models/product.js";

export function getProducts(req, res) {
  product.find().then((data) => res.json(data));
}

export function saveProduct(req, res) {
  console.log(req.body);

  const product = new product({
    name: req.body.name,
    price: req.body.age,
    description: req.body.marks,
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
