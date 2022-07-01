var mysql = require('mysql');
const express = require('express');
const app = express();

app.get('../front/index.html')

app.listen(3000, () => {
    console.log("patate")       
  })


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "GuessTheGender"
});
var score = 10;

con.connect();

function game(){
    con.query('SELECT name FROM Names ORDER BY RAND() LIMIT 1', function(err, rows) {
    if (err) throw err;

        checkGender(rows[0].name);

        document.getElementById("name").innerHTML(rows[0].name);

    });
}

function checkGender(prenom){
    var GenderApi = require('gender-api.com-client');
    var genderApiClient = new GenderApi.Client('xgVbzQndH78QCLGW2ppnTsFqd9rwPBGBuaYt');

    genderApiClient.getByFirstNameAndCountry(prenom, 'FR', function (response) {
        console.log(response.gender);
        console.log(response.accuracy);
        console.log(prenom);
        console.log(response);
    });
}



// function gameOver(score){
//     if (score == 20){
//         return 1;
//     }
//     if (score == 0){
//         return 0;
//     }
// }

function buttonClicked(choosed){
    if (choosed != ""){
        newScore(score);
    }
    console.log("prout");
}

function newScore(score){
    // var genderChoosed;
    // if (femClick() == 1) {
    //     genderChoosed = "female";
    // }
    // if (mascClick() == 1) {
    //     genderChoosed = "male";
    // }
    // if (genderChoosed = response.gender) {
    //     score += 1;
    // }
    // if (genderChoosed != response.gender) {
    //     score -= 1;
    // }
    // gameOver(score);
    // return score;
    console.log("pouet");
}

game();

con.end();

