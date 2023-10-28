import express from "express";
import Admin from "../models/Admin.js";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import verifyAuth from "../utils/verifyAuth.js";
//Admin UI
router.use("/", express.static("admin/login"));
//fill the api desc

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Admin.findOne({ email });
        if (!user) {
            return res.send("<script>alert('Invalid Credentials.');location.href='/admin';</script>")
        }
        //verify password now
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.send("<script>alert('Invalid Credentials.');location.href='/admin';</script>")
        }
        // Generate Access Cookie
        let token = jwt.sign(
            {
                email
            },
            "tenai",
            { expiresIn: "24h" }
        );
        res
            .cookie("access_token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            })
            .status(302)
            .redirect("/admin/dashboard");
    } catch (error) {
        console.log(error);
        res.status(500).send("Something Went Wrong");
    }
});


router.use("/dashboard", verifyAuth, express.static("admin/dashboard"));


export default router;
