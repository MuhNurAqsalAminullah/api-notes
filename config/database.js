const mysql = require("mysql2");

const con = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

con.getConnection((err) => {
  if (err) throw err;
  console.log("Connection...");
});

// con.connect((err) => {
//   if (err) throw err;
//   console.log(`Connected ${err}`);
// });

module.exports = con;
