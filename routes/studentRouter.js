import express from "express";

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  Student.find() //to get all student data from mongodb
    .then((data) => {
      res.json(data);
    });
});

export default studentRouter;
