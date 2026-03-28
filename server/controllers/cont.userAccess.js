import userAccessModel from "../models/model.userAccess.js";

const userAccessController = async (req, res) => {
    let result = await userAccessModel(req.id);
    if (!result.success) return res.json({ success: false, message: "unauthorized user block"});
    return res.json({ success: true, data: result.data})
}

export default userAccessController;