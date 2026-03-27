import connection from "../config/mysql.js";
import jwt from "jsonwebtoken";
import userAccessModel from "../models/model.userAccess.js";
import dotenv from "dotenv";

dotenv.config();

const userAccessMiddleware = async (req, res, next) => {
    try {
        let refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.json({success: false, message: "token not found"});
        let decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
        console.log("decoded data from userAccess.js :", decoded);
        req.id = decoded.user_id;

        next()
    } catch (error) {
        res.json({success: false, message: "user unauthurized"});
        console.log(error);
    }
}

export default userAccessMiddleware;