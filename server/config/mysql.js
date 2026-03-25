import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config();

const connection =  mysql.createPool({
    host: "localhost",
    user: "root",
    database: "new",
    password: process.env.MYSQL_PASSWORD
});

export default connection.promise()

