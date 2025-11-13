import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";

const app = express(); //create express app

app.use(bodyParser.json()); //to parse json data

mongoose
  .connect(
    //connect to mongoose
    "mongodb+srv://Admin:123@cluster0.vc3paai.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB"); // if correctly connect db print this
  })
  .catch(() => {
    console.log("Error connecting to MongoDB"); // if error in connecting db print this
  });

//
//
//
app.use("/students", studentRouter);
app.use("/products", productRouter);
//
//
//
//

app.listen(3000, () => {
  // create one time funtion
  console.log("Server is running on port 3000");
}); //to run backend code

//nodemon - to automatically restart server on code changes
