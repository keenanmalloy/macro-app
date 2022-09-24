import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "95574116Km",
    database: "macroapp",
  });
}

export default conn;
