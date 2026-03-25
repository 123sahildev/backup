import connection from "../config/mysql.js";

const userRegisterModel = async (data) => { 
    let { username, email, password } = data
    console.log("data from register model:", data);
    try {
        console.log("data from register model:", data);
        let [result] = await connection.query("INSERT INTO user (username, email, password) VALUES (?, ?, ?)", [username, email, password]);
        return {
            success: true,
            message: "registered successful"
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "register failed"
        }
    }
 }

 export default userRegisterModel;