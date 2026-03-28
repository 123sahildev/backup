import jwt from "jsonwebtoken";
import bycrpt from "bcrypt";
import { cloudinaryStream} from "../config/cloudinary.js";
import cloudinary from "../config/cloudinary.js";
import userUploadProfileModel from "../models/model.upload-profile.js"
import connection from "../config/mysql.js";

const userProfileImageUploadController = async (req, res) => {
    try {
        console.log("request file check:", req.file);

        let [userImage] = await connection.query("SELECT * FROM user WHERE id = ?", [req.id]);
        console.log("userImage  model in controller.js :", userImage);
        if (userImage[0].public_id) {
            let checkDestroy = await cloudinary.uploader.destroy(userImage[0].public_id);

            // return res.json({success: false, message: "image destroing failed because public_id not existed"})
            console.log("public_id not exist or is equal to = Null", checkDestroy)
        }

        let result = await cloudinaryStream(req.file.buffer);
        console.log("image uploaded result :", result)
        let ModelResult = await userUploadProfileModel({user_id: req.id, public_id: result.secure_url, profile_url: result.public_id});
        if (!ModelResult.success) return res.json({success: false, message: "user not found for image"})

        console.log("promise result :", result);
        return res.json({ success: true, message: "profile uploaded successfully!"});
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "upload failed"})
    }
}
export default userProfileImageUploadController;