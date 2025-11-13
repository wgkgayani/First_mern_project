import Student from "../models/student.js";

export function getStudents(req, res) {
  Student.find().then((data) => res.json(data));
}

export function saveStudent(req, res) {
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
}
