import pg from "npm:pg@^8.16.3"

const Pool = pg.Pool;
const pool = new Pool({
    user: "postgres",
    password: ".-.--..---...-",
    host: "localhost",
    port: 5432,
    database: "todoapp"
});

export default pool;
