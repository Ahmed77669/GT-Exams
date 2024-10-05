import { createPool } from 'mysql2';

const pool = createPool({
    connectionLimit : 1000,
    host : "localhost",
    user : "root",
    password : "M@do1632005",
    database : "test" ,
    port: 3306   
});
pool.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

export default pool;

// export default pool;