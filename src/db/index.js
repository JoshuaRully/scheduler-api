const pg = require("pg");

const client = new pg.Client({
<<<<<<< HEAD
  connectionString: process.env.DATABASE_URL || "",
  ssl: { rejectUnauthorized: false }
=======
  connectionString: process.env.DATABASE_URL || ""
>>>>>>> parent of 2f14bbe... adjust db connection for possible fix
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
