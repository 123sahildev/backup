import userRegisterModel from "../models/model.register.js";
import bycrpt, { hash } from "bcrypt";

const userRegisterController = async (req, res) => {
    let { username, email, password } = req.body;
    let hashedPassword = await bycrpt.hash(password, 10);
    let result = await userRegisterModel({username, email, password: hashedPassword});
    console.log("model data from controller.js :", result);
    

    return res.json({message: "backend is connected successfully!"});
} 

export default userRegisterController;