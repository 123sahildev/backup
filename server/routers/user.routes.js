import userRegisterController from "../controllers/cont.register.js";
import userLoginController from "../controllers/cont.login.js";
import express from "express";

const route = express.Router();

route.post("/register", userRegisterController);
route.get("/login", userLoginController)

export default route;
