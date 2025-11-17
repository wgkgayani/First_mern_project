import User from "../models/user.js";
import bcrypt from "bcrypt";

export function createUser(req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new User({
    // methana User thamai model eke anthimt export karpu User
    firstName: req.body.firstName,
    lasttName: req.body.lasttName,
    password: hashedPassword, //req.body.password    replace
    email: req.body.email,
    role: req.body.role,
  });

  user
    .save()
    .then(() => {
      res.json({
        message: "User ctrated successfuly",
      });
    })
    .catch(() => {
      res.json({
        massege: "Error saving user data",
      });
    });
}
