import connection from "../config/mysql.js";

const userLoginModel = async (data) => {
    try {
        let [rows] = await connection.query("SELECT * FROM user WHERE email = ?", [data.email]);

        console.log("row result from loginModel.js :", rows)
        if (rows.length > 0) {
            return {success: true, message: "user found", image_url: rows[0].profile_url}
        }
        return {
            success: false,
            message: "user not found"
        }
        
    } catch (error) {
        console.log(error)
    }
}

export default userLoginModel;