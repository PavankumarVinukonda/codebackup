import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Newsletter = new mongoose.model(
  "Newsletter",
  newsletterSchema,
  "newsletters"
);

export default Newsletter;
