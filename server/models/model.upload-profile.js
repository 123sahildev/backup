import connection from "../config/mysql.js";


const userUploadProfileModel = async (data) => {
    let { profile_url, public_id, user_id } = data;
    console.log("user public_id datas from model.js :", data);

    let [result] = await connection.query("UPDATE user set profile_url = ?, public_id = ? WHERE id = ?", [public_id, profile_url, user_id]);
    console.log("mysql result of image upload :", result);
    
    return { success: true, message: "user image updated successfully!"}
}

export default userUploadProfileModel;