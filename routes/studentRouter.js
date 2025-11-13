import express from "express"; //importing express module`
import { getStudents, saveStudent } from "../controllers/studentController.js";

const studentRouter = express.Router(); //create studentRouter using express router

studentRouter.get("/", getStudents); //route to get all students

studentRouter.post("/", saveStudent);

export default studentRouter; //exporting studentRouter to use in other files
