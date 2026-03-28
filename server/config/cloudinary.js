import {v2 as cloudinary }  from "cloudinary";
import dotenv, { config } from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export default cloudinary;

export const cloudinaryStream = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "/user_images/profiles"},
            (err, result) => {
                if (result) resolve(result);
                else reject(err); 
            }
        );

        stream.end(fileBuffer);
    })
}

;