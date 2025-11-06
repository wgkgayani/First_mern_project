import mongoose from "mongoose";
//student schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
  email: String,
});

//create student model
const Student = mongoose.model("students", studentSchema); //to connect to student collection

export default Student;
