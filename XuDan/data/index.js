// 引入mysql
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "123456",
    database: "pullradish"
})

// 暴露
module.exports = connection;