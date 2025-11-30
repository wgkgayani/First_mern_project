import User from "../models/user.js"; //use to import User model
import bcrypt from "bcrypt"; //bcrypt use karanne password hash karanna

export function createUser(req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10); //hash karanna password eka 10 times

  const user = new User({
    // methana User thamai model eke anthimt export karpu User
    firstName: req.body.firstName,
    lasttName: req.body.lasttName,
    password: hashedPassword, //req.body.password    replace
    email: req.body.email,
    role: req.body.role,
  });

  user // use to save or not user data to database
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

export function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    // console.log(user);

    if (user == null) {
      res.status(404).json({
        massege: "User not found",
      });
    } else {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (isPasswordCorrect) {
        res.json({
          message: "login successful",
          user: user,
        });
      } else {
        res.status(401).json({
          message: "Invalid password",
        });
      }
    }
  });
}
