import userLoginModel from "../models/model.login.js";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const userLoginController = async (req, res) => {
    console.log("request data :", req.body);
    let { email, password } = req.body;
    let result = await userLoginModel(email);
    if (!result.success) return res.json(result);
    let checkPassword = await bycrpt.compare(password, result.data.password);
    if (!checkPassword) return res.json({success: false, message: "password does'nt match caught from bycrpt process"});
    dotenv.config();
    let refreshToken = jwt.sign({ user_id: result.data?.id}, process.env.REFRESH_SECRET, { expiresIn: "3m"});
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false
    });
    return res.json({
        success: true, 
        message: "login successfull", 
        data: result.data
    });
    

}

export default userLoginController;