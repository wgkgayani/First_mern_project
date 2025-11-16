export function createUser(req, res) {
  const User = new User({
    firstName: req.body.firstName,
    lasttName: req.body.lasttName,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
  });

  User.save()
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
