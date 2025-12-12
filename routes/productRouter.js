import express from "express"; //importing express module`
import {
  deleteProduct,
  getProducts,
  saveProduct,
} from "../controllers/productController.js";

const productRouter = express.Router(); //create productRouter using express router

productRouter.get("/", getProducts); //route to get all product

productRouter.post("/", saveProduct); //route to save a product

productRouter.delete("/:productId", deleteProduct);

export default productRouter; //exporting productRouter to use in other files
