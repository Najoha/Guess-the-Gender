const mysql = require('mysql');
const express = require('express');
const http = require("http");
const app = express();
const createError = require("http-errors");
const router = express.Router();
const GenderApi = require('gender-api.com-client');
const genderApi = "pcb3Z5nVw5ehBHgN9QgLmwH2tE4TnE9mn6Kx"
const axios = require("axios")
const cors = require('cors'); 

//const genderApiClient = new GenderApi.Client('xgVbzQndH78QCLGW2ppnTsFqd9rwPBGBuaYt');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "GuessTheGender"
});



con.connect();
/**
 * Listen on provided port, on all network interfaces.
 */
/* 
server.listen(3000); */

const gameController = (req, res, next) => {
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

const setOutput = (value,index) => {
    output[index] = value;
    return output;
}


const checkGender = (prenom, country) => {

    axios
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


const getRandomPerson = () => {
    con.query('SELECT name FROM Names ORDER BY RAND() LIMIT 1', function (err, rows) {
        if (err) throw err;
        checkGender(rows[0].name, "FR");
       
        return setOutput(rows[0].name,"name")

    });
    return ""

}

const game = () => {
    let data = {}
    try { 
        getRandomPerson();
        return output;
    } catch (error) {
        throw error;
    }
}


// bad practice but sql is so bad I can't stand => refacto with MongoDB
getRandomPerson()

http.createServer(app).listen(
    process.env.PORT || 5000);

router.get("/game", gameController);

app.use("/", router);

/* app.use(function (err, req, res, next) {
    next(createError(404));
}) */

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


