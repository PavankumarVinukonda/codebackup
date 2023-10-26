import express from "express";
const app = express();

//Import DB Connection File
import "./utils/dbConnect.js";
import Users from "./utils/models/Users.js";

const port = process.env.PORT || 8085;

app.use(express.json()); //json bodyparser

//It will serve views/index.html at /
app.use(express.static("views")); //HomeRouter

app.post("/", async (req, res) => {
  try {
    // let userData = await Users.findOne({ email: req.body.email });
    // if (userData)
    //   return res.send(
    //     "<script>alert('Thank you. Received.');location.href='/';</script>"
    //   );
    console.log(req.body);
    // userData = new Users(req.body);
    // await userData.save();
  } catch (error) {
    console.log(error);
    res.send(
      "<script>alert('Something went Wrong. Try Again.');location.href='/';</script>"
    );
  }
});
// app.use("*", (req, res) => {
//     res.status(404).json({ error: "Route Not Found" })
// });

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
