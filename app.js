import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";

const app = express();

const port = process.env.PORT || 8085;

app.use(express.json()); //json bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
