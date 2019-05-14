const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "192.168.27.200",
    port: 3306,
    user: "root",
    password: "123456",
    database: "pullradish"
})

module.exports = connection;