const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shopping_site",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected...");
});

module.exports = db;
