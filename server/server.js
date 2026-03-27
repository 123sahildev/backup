import express from "express";
import cors from "cors";
import userRoutes from "./routers/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json());
app.use("/api", userRoutes);



app.listen(3000, () => {
    console.log("The app is started listening at 3000!");
})
