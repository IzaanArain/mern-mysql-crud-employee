const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// let sql = `
// SELECT * FROM employee
// WHERE id = ?
// `;
// values = [1];
// pool.execute(sql,values,(err, rows, fields) => {
//   if (err) throw err;
//   console.log("result",rows[0]);
//   console.log("meta data",fields);
// });

module.exports = pool.promise();
