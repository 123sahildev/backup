import userLoginModel from "../models/model.login.js";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const userLoginController = async (req, res) => {
    console.log("request data :", req.query);
    let { email, password } = req.query;
    let result = await userLoginModel(email);
    console.log("check data of model from controller.js :", result);
    if (!result.success) return res.json(result);
    let checkPassword = await bycrpt.compare(password, result.data.password);
    if (!checkPassword) return res.json({success: false, message: "password does'nt match caught from bycrpt process"});
    dotenv.config();
    let refreshToken = jwt.sign({ user_id: result.data?.id}, process.env.REFRESH_SECRET, { expiresIn: "3m"});
    console.log("jwt refresjToken generated :", refreshToken);
    res.cookies({
        
    })
    return res.json({
        success: true, 
        message: "login successfull", 
        data: result.data
    });
    

}

export default userLoginController;