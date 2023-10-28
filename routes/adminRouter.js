import express from "express";

const router = express.Router();

router.use("/", express.static("admin/login"));
router.use("/dashboard", express.static("admin/dashboard"));

export default router;
