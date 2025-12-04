import Product from "../models/product.js";

export function getProducts(req, res) {
  Product.find().then((data) => res.json(data));
}

export function saveProduct(req, res) {
  if (req.user == null) {
    res.status(403).json({
      message: "Unauthorized",
    });
    return;
  }

  if (req.user.role != "admin") {
    res.status(403).json({
      message: "Unauthorized you need to be an admin",
    });
    return;
  }

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
