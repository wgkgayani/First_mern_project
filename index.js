import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Student from "./models/student.js";

const app = express();

app.use(bodyParser.json());

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
//
/*app.get("/", (req, res) => {
  res.json(
    // to send response for get request
    {
     message: "this is get request",
   }
  );
});*/

app.get("/", (req, res) => {
  Student.find() //to get all student data from mongodb
    .then((data) => {
      res.json(data);
    });
});

//mongodb+srv://Admin:123@cluster0.vc3paai.mongodb.net/?appName=Cluster0

app.delete("/", (req, res) => {
  res.json(
    // to send response for delete request
    {
      message: "this is delete request",
    }
  );
});

app.post("/", (req, res) => {
  console.log(req.body);

  //student schema
  /*const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String,
    email: String,
  });
  //create student model
  // student = collection name
  // studentSchema = schema name
  const Student = mongoose.model("students", studentSchema);*/
  //to connect to student collection

  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    marks: req.body.marks,
    email: req.body.email,
  });

  student //to save student data in mongodb
    .save()
    .then(() => {
      res.json({
        message: "Student data saved successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "Error saving student data",
        error: error,
      });
    });
});

app.put("/", (req, res) => {
  res.json(
    // to send response for put request
    {
      message: "this is put request",
    }
  );
});

//
//
//
//

app.listen(3000, () => {
  // create one time funtion
  console.log("Server is running on port 3000");
}); //to run backend code

//nodemon - to automatically restart server on code changes
