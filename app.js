import http from "http";
import https from "https";
import fs from "fs";

import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";
import cookieParser from "cookie-parser";

const sslConfig = {
    key: fs.readFileSync("keys/private.pem"),
    cert: fs.readFileSync("keys/fullchain.pem")
}

const app = express();

const httpPort = process.env.HTTP_PORT || 80;
const httpsPort = process.env.HTTPS_PORT || 443;

//const port = process.env.PORT || 80;

app.use(express.json()); //json bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


//Handling Auto Redirection of non secure to secure (http -> https)
app.use((req, res, next) => {
    if(!req.secure){
        res.redirect(`https://${req.hostname}${req.url}`)
    }
    next();
});



app.use("/", userRouter);
app.use("/admin", adminRouter);

//HTTP Server
const httpServer = http.createServer(app);
//HTTPS Server
const httpsServer = https.createServer(sslConfig, app);

httpServer.listen(httpPort, () => {
    console.log(`HTTP Server is started at ${httpPort}`);
});

httpsServer.listen(httpsPort, () => {
    console.log(`HTTPS Server is started at ${httpsPort}`);
});
