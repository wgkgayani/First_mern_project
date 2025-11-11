import express from "express"; //importing express module`

const studentRouter = express.Router(); //create studentRouter using express router

studentRouter.get("/", (req, res) => {
  Student.find() //to get all student data from mongodb
    .then((data) => {
      //if data found
      res.json(data);
    });
});

export default studentRouter; //exporting studentRouter to use in other files
