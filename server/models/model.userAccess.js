import connection from "../config/mysql.js";


const userAccessModel = async (id) => {
    let [rows] = await connection.query("SELECT * FROM user where id = ?", [id])
    console.log("selected users from mondel.userAccess.js :", rows);
    if (rows.length > 0) {
        return {
            success: true,
            data: rows[0]
        }
    }

    return {
        success: false,
        message: "user not found"
    }
}

export default userAccessModel;