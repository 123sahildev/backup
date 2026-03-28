import jwt from "jsonwebtoken";
import bycrpt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const userUploadProfileMiddleware = async (req, res, next) => {
    try {
       
        let refreshToken = req.cookies.refreshToken;
        // if (!refreshToken) return res.json({success: false, message: "token not found"});
        let decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
        req.id = decoded.user_id;

        next()

    } catch (error) {
        res.json({ success: false, message: "failed in userUploadMiddleware by parseing the user id"})
        console.log(error)
    }
}

export default userUploadProfileMiddleware;