import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true, // require must include for every thing to enter schema
    unique: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
    default: "customer",
  },
  isBlocked: {
    type: Boolean,
    require: true,
    default: false,
  },
  img: {
    type: String,
    require: true,
    default: "https://avatar.iran.liara.run/public/boy?username=Ash",
  },
});

const User = mongoose.model("users", userSchema); // to connect to users collection
export default User;
