/*
  Validate Cookie Middleware
*/
import jwt from "jsonwebtoken";

export default function verifyAuth(req, res, next) {
    try {
        let token = req.cookies["access_token"];
        if (!token) return res.status(401).redirect("/admin");
        let decoded = jwt.verify(token, 'tenai');
        req.user = decoded;
        next();

    } catch (error) {
        console.log(error);
        return res.clearCookie("access_token", {
            sameSite: "none",
            secure: true
        }).status(200).redirect("/admin");
    }
}

