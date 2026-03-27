import userAccessModel from "../models/model.userAccess.js";

const userAccessController = async (req, res) => {
    console.log("user id from controller.js :", req.id);
    let result = await userAccessModel(req.id);
}

export default userAccessController;