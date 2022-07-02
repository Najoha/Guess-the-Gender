const mysql = require('mysql');
const express = require('express');
const http = require("http");
const app = express();
const createError = require("http-errors");
const router = express.Router();
const GenderApi = require('gender-api.com-client');
const genderApi = "F29stM5rvwP5dRFY9mNctgxex35E9zUVFkuk";
const axios = require("axios")
const cors = require('cors'); 

const con = mysql.createConnection({ //connection à la BDD pour y selectionner plus tard un prénom aléatoirement.
    host: "localhost",
    user: "root",
    password: "root",
    database: "GuessTheGender"
});

con.connect();

const gameController = (req, res, next) => { //Controller qui va appeler game() et retourner un status = 200 pour confirmer le bon fonctionnement de game.
    res.header("Access-Control-Allow-Origin", "*")
    try {
        const data = game();
        res.header("Access-Control-Allow-Origin", "*");
        return res.send(data).status(200);
    } catch (error) {
        throw error;
    }
}

const output = {};

//sert à stocker la réponse de l'API
const setOutput = (value,index) => {
    output[index] = value;
    return output;
}

// envoie une requête avec le prénom séléctionné
// utilisation de setOutput()
const checkGender = (prenom, country) => {
    axios // sert à appeller l'API
        .get(`https://gender-api.com/get?name=${prenom}&country=${country}&key=${genderApi}`)
        .then(res => {
            console.log(`statusCode: ${res.status}`);
            return setOutput(res.data,"genderData");
        })
        .catch(error => {
            console.error(error);
            return null;
        });
}

//Séléctionne un prénom au hasard dans la BDD
const getRandomPerson = () => { 
    con.query('SELECT name FROM Names ORDER BY RAND() LIMIT 1', function (err, rows) {
        if (err) throw err;
        checkGender(rows[0].name, "FR");
        return setOutput(rows[0].name,"name")
    });
    return ""
}

//utilise getRandomPerson() et 
//permet d'afficher les erreurs si il y à un 
//problème lors de l'execution de cette fonction.
const game = () => { 
    try { 
        getRandomPerson();
        return output;
    } catch (error) {
        throw error;
    }
}

getRandomPerson();


//création du server et definition du port à utiliser,
//création de la route pour afficher le résultat json de getRandomPerson() dans une page web,
//affichage des erreurs si il y en a et du status de la réponse.
http.createServer(app).listen(
    process.env.PORT || 5000);

router.get("/game", gameController);

app.use("/", router);

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    console.log(err.message);
    res.status(err.status || 500);
    res.json(err);
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"),
    next()
})

app.use(cors());


