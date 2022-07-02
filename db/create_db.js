var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE GuessTheGender", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

