import { createPool } from 'mysql2';

const pool = createPool({
    connectionLimit : 1000,
    host : "localhost",
    user : "root",
    password : "M@do1632005",
    database : "test" ,
    port: 3306   
});
export default pool;

// export default pool;