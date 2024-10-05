const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 1000,
    host : "localhost",
    user : "root",
    password : "M@do1632005",
    database : "test" ,
    port: 3307   
});

export default pool;