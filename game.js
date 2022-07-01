var mysql = require('mysql');
const express = require('express');
const { response } = require('express');
const { get } = require('express/lib/response');
const app = express();
const port = 5555;

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

        app.set('view engine', 'ejs');
        app.locals.mascClick = function (){
            console.log("Vous pensez que ce nom est plutôt masculin");
            return 1;
        }
        app.use(express.static("public")); 
        app.get('/', (req, res) => {
            res.render('game', {
                rows,
                score
            })
        })
        app.listen(port, () => {
        console.log(`App listening at port ${port}`);
        })

        // buttonClicked();
    });


    return response;
}

// function gameOver(score){
//     if (score == 20){
//         return 1;
//     }
//     if (score == 0){
//         return 0;
//     }
// }

// function buttonClicked(){
//     if (femClick() == 1 || mascClick() == 1){
//         newScore(score);
//     }
//     console.log("prout");
// }



game();

con.end();

