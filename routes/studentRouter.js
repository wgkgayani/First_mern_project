import express from "express"; //importing express module`
import Student from "../models/student.js";

const studentRouter = express.Router(); //create studentRouter using express router

studentRouter.get("/", (req, res) => {
  Student.find() //to get all student data from mongodb
    .then((data) => {
      //if data found
      res.json(data);
    });
});

studentRouter.post("/", (req, res) => {
  console.log(req.body);

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

export default studentRouter; //exporting studentRouter to use in other files
