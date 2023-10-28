import bcrypt from "bcrypt";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

const MONGODB_ATLAS_SERVER_INFO="mongodb+srv://prash:iCamp0x1103@cluster0.jummb.mongodb.net";
const DATABASE_NAME="ten-ai";
async function connectDB() {
    try {
        await mongoose.connect(`${MONGODB_ATLAS_SERVER_INFO}/${DATABASE_NAME}`);
        console.log("Mongo DB Connected");
    } catch (error) {
        console.log(error);
    }
}

connectDB();
async function insertAdmin(adminInfo) {
    try {
        const admin = new Admin(adminInfo);
        await admin.save();
        console.log("New Admin is added into the DB");
    } catch (error) {
        console.log(error);
    }
}
insertAdmin({
    email: "ravi@tenedutech.com",
    password: bcrypt.hashSync("admin@tenedutech", 10)
});