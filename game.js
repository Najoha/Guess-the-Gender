var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "GuessTheGender"
});

con.connect();

con.query('SELECT name FROM Names ORDER BY RAND() LIMIT 1', function(err, rows) {
  if (err) throw err;


    try {
        var GenderApi = require('gender-api.com-client');

        var genderApiClient = new GenderApi.Client('xgVbzQndH78QCLGW2ppnTsFqd9rwPBGBuaYt');

        genderApiClient.getByFirstNameAndCountry(rows[0].name, 'FR', function (response) {
            console.log(response.gender); 
            console.log(response.accuracy); 
            console.log(rows[0].name);
        });

    }
    catch(e) {
        console.log('Error:', e);
    }
});

// var score = 10;

// function femButton(){
//     return 1;
// }

// function mascButton(){
//     return 1;
// }

// function newScore(score){
//     var genderChoosed;
//     if(femButton == 1){
//         genderChoosed = "female";
//     }
//     if(mascButton == 1){
//         genderChoosed = "male";
//     } 
//     if (genderChoosed = response.gender) {
//         score += 1;
//     }
//     else{
//         score -= 1;
//     }   
//     return score;
// }

// newScore();


con.end();

