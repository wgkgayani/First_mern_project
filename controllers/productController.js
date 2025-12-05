import Product from "../models/product.js";

export function getProducts(req, res) {
  Product.find().then((data) => res.json(data));
}

export function saveProduct(req, res) {
  if (req.user == null) {
    res.status(403).json({
      // 403 means forbidden
      message: "Unauthorized", // you need to be logged in
    });
    return;
  }

  if (req.user.role != "admin") {
    // only admin can add products
    res.status(403).json({
      message: "Unauthorized you need to be an admin", // you need to be admin
    });
    return; // stop further execution
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
