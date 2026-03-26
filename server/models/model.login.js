import connection from "../config/mysql.js";

const userLoginModel = async (data) => {
    try {
        let [rows] = await connection.query("SELECT * FROM user WHERE email = ?", [data]);

        if (rows.length > 0) {
            return {success: true, message: "user found", data: rows[0]}
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