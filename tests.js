var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "GuessTheGender"
});

var sql = "SELECT name FROM Names ORDER BY RAND() LIMIT 1";
  con.query(sql, function (err,rows) {
    if (err) throw err;
});