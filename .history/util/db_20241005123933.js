const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit : 1000,
    host : "127.0.0.1",
    user : "root",
    password : "M@do1632005",
    database : "test" ,
    port :"3306"
});


export default pool;