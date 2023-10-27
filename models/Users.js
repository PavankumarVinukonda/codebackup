import mongoose from "mongoose";

const expertSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  bachelordegree: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Users = new mongoose.model("Users", expertSchema, "users");

export default Users;
