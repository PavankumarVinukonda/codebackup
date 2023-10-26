import express from "express";
const app = express();

//Import DB Connection File
import "./utils/dbConnect.js";

const port = process.env.PORT || 8085;

app.use(express.json()); //json bodyparser


//It will serve views/index.html at / 
app.use(express.static("views"));   //HomeRouter

// app.use("*", (req, res) => {
//     res.status(404).json({ error: "Route Not Found" })
// });

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});
