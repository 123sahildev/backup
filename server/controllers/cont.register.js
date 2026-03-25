import userRegisterModel from "../models/model.register.js";

const userRegisterController = async (req, res) => {
    let result = await userRegisterModel(req.body)
    console.log("model data from controller.js :", result);
    

    return res.json({message: "backend is connected successfully!"});
} 

export default userRegisterController;