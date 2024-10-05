import { createPool } from 'mysql2';

const pool = createPool({
    connectionLimit : 1000,
    host : "localhost",
    user : "root",
    password : "M@do16320005",
    database : "test" ,
});
export default pool;

// export default pool;