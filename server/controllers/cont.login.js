

const userLoginController = async (req, res) => {
    console.log("request data :", req.query);
    return res.json({message: "backend is connected successfully! from login api", success: true, data: "chal raha"});

}

export default userLoginController;