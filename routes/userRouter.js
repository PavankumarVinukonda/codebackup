import express from "express";
import Users from "../models/Users.js";
import Newsletter from "../models/Newsletter.js";

//Import DB Connection File
import "../utils/dbConnect.js";

const router = express.Router();

//It will serve views/index.html at /
router.use("/", express.static("views")); //HomeRouter

router.post("/", async (req, res) => {
  try {
    let userData = await Users.findOne({ email: req.body.email });
    if (userData) {
      return res.send(
        "<script>alert('Thank you. Received.');location.href='/';</script>"
      );
    }
    userData = new Users(req.body);
    await userData.save();
    res.send(
      "<script>alert('Thank you. Received.');location.href='/';</script>"
    );
  } catch (error) {
    console.log(error);
    res.send(
      "<script>alert('Something went Wrong. Try Again.');location.href='/';</script>"
    );
  }
});

router.post("/newsletter", async (req, res) => {
  try {
    let userData = await Newsletter.findOne({ email: req.body.email });
    if (userData) {
      return res.send(
        "<script>alert('Thank you. Received.');location.href='/';</script>"
      );
    }
    userData = new Newsletter(req.body);
    await userData.save();
    res.send(
      "<script>alert('Thank you. Received.');location.href='/';</script>"
    );
  } catch (error) {
    console.log(error);
    res.send(
      "<script>alert('Something went Wrong. Try Again.');location.href='/';</script>"
    );
  }
});

export default router;
