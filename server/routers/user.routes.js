import userRegisterController from "../controllers/cont.register.js";
import userLoginController from "../controllers/cont.login.js";
import userPasswordResetController from "../controllers/cont.resetPass.js";
import upload from "../middleware/multer.upload.js";
import userProfileImageUploadController from "../controllers/cont.upload-profile.js";
import userAccessMiddleware from "../middleware/userAccess.js";
import userAccessController from "../controllers/cont.userAccess.js";
import express from "express";

const route = express.Router();

route.post("/register", userRegisterController);
route.post("/login", userLoginController);
route.patch("/reset-password", userPasswordResetController);
route.post("/upload-profile", upload.single("image"), userProfileImageUploadController);
route.get("/user-access", userAccessMiddleware, userAccessController);

export default route;
