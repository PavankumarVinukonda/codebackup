import express from "express";
import bodyParser from "body-parser";

const app = express();

//Import DB Connection File
import "./utils/dbConnect.js";
import Users from "./models/Users.js";

const port = process.env.PORT || 8085;

app.use(express.json()); //json bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

//It will serve views/index.html at /
app.use(express.static("views")); //HomeRouter

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
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

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
