import express from "express";
import bodyParser from "body-parser"; // body-parser use to parse json data (to create data well structur)
import mongoose from "mongoose";

import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt, { decode } from "jsonwebtoken";

const app = express(); //create express app

app.use(bodyParser.json()); //to parse json data

app.use((req, res, next) => {
  const tokenString = req.header("Authorization");
  if (tokenString != null) {
    const token = tokenString.replace("Bearer ", "");
    console.log(token);

    jwt.verify(token, "first.mern.course.encript.password", (err, decode) => {
      if (decode != null) {
        console.log(decode);
      } else {
        console.log("invalid token");
      }
    });
  }

  //next();
});

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
// use routes
app.use("/students", studentRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);
//
//
//
//

app.listen(3000, () => {
  // create one time funtion
  console.log("Server is running on port 3000");
}); //to run backend code

//nodemon - to automatically restart server on code changes
