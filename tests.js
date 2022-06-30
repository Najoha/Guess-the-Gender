var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "GuessTheGender"
});

con.connect();

con.query('SELECT name FROM Names ORDER BY RAND() LIMIT 1', function(err, rows, fields) {
  if (err) throw err;
  console.log( rows[0].name);
});

con.end();