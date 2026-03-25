import userRegisterController from "../controllers/cont.register.js";
import userLoginController from "../controllers/cont.login.js";
import userPasswordResetController from "../controllers/cont.resetPass.js";
import express from "express";

const route = express.Router();

route.post("/register", userRegisterController);
route.get("/login", userLoginController);
route.patch("/reset-password", userPasswordResetController);

export default route;
