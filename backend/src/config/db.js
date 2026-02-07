const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});
pool
  .query("SELECT NOW()")
  .then((res) => console.log("DB connected. Time:", res.rows[0].now))
  .catch((err) => console.error("DB connection error:", err.message));

module.exports = pool;
