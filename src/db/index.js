const pg = require("pg");

const client = new pg.Client({
  user: 'aqauifrrqfwbax',
  password: '3055ea7f0b7d57a845e7cfc43507a549a4e3cf0d0a4769585df2d7ae8dd15e29',
  database: 'dcc27l0c0hm44e',
  port: 5432,
  host: 'ec2-3-231-69-204.compute-1.amazonaws.com',
  ssl: true
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
