var mysql = require('mysql');
var fs = require('fs');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "GuessTheGender"
  });

  var sql = "CREATE TABLE Names (name VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created, 300 names have been added in it");
  });

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "GuessTheGender"
});
 
fs.readFile('names.json',
function(err, names) {
    var values = [];     
    var jsonData = names;
    var jsonParsed = JSON.parse(jsonData);
    for (var i = 0; i < 299; i++){

        values.push(jsonParsed.names[i].firstname);
    } 

    con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO Names (name) VALUES (?)";
        for (var i = 0; i < 299; i++){
            con.query(sql, [values[i]], function (err, result) {
            if (err) throw err;
            });
        }
    });
});

con.end();