import userLoginModel from "../models/model.login.js";
import bycrpt from "bcrypt";

const userLoginController = async (req, res) => {
    console.log("request data :", req.query);
    let { email, password } = req.query;
    let checkPassword = bycrpt.compare(password, check.data.
    let check = await userLoginModel(req.query);
    console.log("check data of model from controller.js :", check);
    
    return res.json(check);

}

export default userLoginController;