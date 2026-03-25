import express from "express";
import cors from "cors";
import userRoutes from "./routers/user.routes.js";

const app = express();
app.use(cors({
    Credential: true
}))
app.use(express.json());
app.use("/api", userRoutes);



app.listen(3000, () => {
    console.log("The app is started listening at 3000!");
})
