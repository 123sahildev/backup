import connection from "../config/mysql.js";
import jwt from "jsonwebtoken";
import cookies from "cookie-parser";

const userAccessMiddleware = async (req, res, next) => {
    let token = req.cookies.refreshToken;
    console.log("cookies token :", token);
}

export default userAccessMiddleware;