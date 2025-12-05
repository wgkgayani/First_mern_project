import express from "express";
import bodyParser from "body-parser"; // body-parser use to parse json data (to create data well structur)
import mongoose from "mongoose"; //import mongoose to connect mongodb

import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"; //import jwt from "jsonwebtoken";

const app = express(); //create express app

app.use(bodyParser.json()); //to parse json data

app.use((req, res, next) => {
  //middleware to verify token
  const tokenString = req.header("Authorization"); //get token from request header
  if (tokenString != null) {
    const token = tokenString.replace("Bearer ", ""); //remove "Bearer " from token string
    // console.log(token);           print token

    jwt.verify(token, "first.mern.course.encript.password", (err, decoded) => {
      //verify token with secret key
      if (decoded != null) {
        console.log(decoded); //decoded token data
        req.user = decoded;
        next();
      } else {
        console.log("invalid token");
        res.status(403).json({
          // 403 means forbidden
          message: "Invalid token",
        });
      }
    });
  } else {
    next(); //if no token found just go to next middleware
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
