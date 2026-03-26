import jwt from "jsonwebtoken";
import bycrpt from "bcrypt";
import cloudinary from "../config/cloudinary.js";

const userProfileImageUploadController = async (req, res) => {
    try {
        console.log("request file check:", req.file);

        let result = await cloudinary(req.file.buffer);
        console.log("promise result :", result);
        return res.json({ success: true, message: "profile uploaded successfully!"});
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "upload failed"})
    }
}
export default userProfileImageUploadController;